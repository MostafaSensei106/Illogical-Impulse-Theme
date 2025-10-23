import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { getPalettePath, readPalette } from './palette';
import { createTheme, THEME_NAME } from './theme';

export function activate(context: vscode.ExtensionContext) {
  const logger = vscode.window.createOutputChannel("Matugen", { log: true });

  const debounceMs = (): number => vscode.workspace.getConfiguration('matugen').get<number>('debounceMs') || 300;

  let watcher: fs.FSWatcher | null = null;
  let timeout: NodeJS.Timeout | null = null;

  async function applyPaletteOnce(promptToSwitch: boolean = false) {
    const palette = readPalette();
    if (!palette) {
      return;
    }

    const themeJson = createTheme(palette); // Pass the entire palette object
    const themeJsonString = JSON.stringify(themeJson, null, 2);
    const themePath = path.join(context.extensionPath, 'themes', 'matugen-theme.json');

    try {
        await fs.promises.writeFile(themePath, themeJsonString, 'utf8');
        logger.info(`Generated full theme file at: ${themePath}`);
    } catch (e) {
        logger.error(`Failed to write theme file at ${themePath}:`, e as any);
    }

    if (promptToSwitch) {
      vscode.window.showInformationMessage(`${THEME_NAME} theme updated successfully!`);
    }
  }

  function watchPaletteFile() {
    const p = getPalettePath();
    if (!p) return;
    if (watcher) {
      try { watcher.close(); } catch (e) { /* ignore */ }
      watcher = null;
    }

    const dir = path.dirname(p);
    const applyDebounced = () => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
          applyPaletteOnce(false);
        }, debounceMs());
    };

    if (fs.existsSync(p)) {
        try {
            watcher = fs.watch(p, applyDebounced);
            logger.info(`Watching for changes in ${p}`);
            return;
        } catch (e) {
            logger.error(`Failed to watch file ${p}:`, e as any);
        }
    }

    if (fs.existsSync(dir)) {
        try {
            watcher = fs.watch(dir, (eventType, filename) => {
                if (filename && path.resolve(dir, filename) === path.resolve(p)) {
                    applyDebounced();
                }
            });
            logger.info(`File not found. Watching directory ${dir} for ${path.basename(p)}.`);
        } catch (e) {
            logger.error(`Failed to watch directory ${dir}:`, e as any);
        }
    } else {
        logger.warn(`Directory ${dir} for palette file does not exist. Cannot watch for changes.`);
    }
  }

  async function removePalette() {
    const themePath = path.join(context.extensionPath, 'themes', 'matugen-theme.json');
    const defaultTheme = {
        name: THEME_NAME, // Use the new THEME_NAME
        type: "dark", // Default to dark for reset
        colors: {
            "editor.background": "#121212",
            "editor.foreground": "#E0E0E0",
            "sideBar.background": "#181818",
            "activityBar.background": "#181818"
        }
    };
    try {
        await fs.promises.writeFile(themePath, JSON.stringify(defaultTheme, null, 2), 'utf8');
        logger.info(`Reset theme file at: ${themePath}`);
        vscode.window.showInformationMessage(`${THEME_NAME} theme has been reset.`);
    } catch (e) {
        logger.error('Failed to reset theme:', e as any);
        vscode.window.showErrorMessage(`${THEME_NAME}: Failed to reset theme. See Output > ${THEME_NAME} for details.`);
    }
  }

  // Initial setup
  applyPaletteOnce(false);
  watchPaletteFile();

  // Register disposables
  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration(e => {
      const config = vscode.workspace.getConfiguration();
      if (e.affectsConfiguration('matugen.palettePath') || e.affectsConfiguration('matugen.debounceMs')) {
        watchPaletteFile();
        applyPaletteOnce(true);
      }
      if (e.affectsConfiguration('workbench.colorTheme') && config.get('workbench.colorTheme') === THEME_NAME) {
        applyPaletteOnce(false);
      }
    }),
    vscode.commands.registerCommand('matugen.applyPalette', async () => {
      await applyPaletteOnce(true);
    }),
    vscode.commands.registerCommand('matugen.removePalette', removePalette),
    { dispose() {
        if (watcher) {
            try { watcher.close(); } catch (e) { /* ignore */ }
        }
        if (timeout) {
            clearTimeout(timeout);
        }
        logger.dispose();
    }}
  );
}

export function deactivate() {}
