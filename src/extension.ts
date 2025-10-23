import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

// Expands a path that starts with ~ to the user's home directory.
function expandHome(filepath: string): string {
  if (!filepath) return filepath;
  if (filepath.startsWith('~')) return path.join(os.homedir(), filepath.slice(1));
  return filepath;
}

// Safely reads and parses a JSON file. Returns null if reading or parsing fails.
function safeReadJsonSync(p: string): any | null {
  try {
    const raw = fs.readFileSync(p, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

// Normalizes a color string from various formats (array, short hex, rgb) to a full 6-digit hex string.
function normalizeHex(hex: any): string {
  if (!hex) return '#000000';
  if (Array.isArray(hex)) {
    const arr = hex as any[];
    return rgbToHex(arr[0] || 0, arr[1] || 0, arr[2] || 0);
  }
  hex = String(hex).trim();
  if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(hex)) {
    return hex.length === 4 ? '#' + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3] : hex;
  }
  const m = hex.match(/rgb\s*\(\s*(\d+),\s*(\d+),\s*(\d+)/i);
  if (m) return rgbToHex(parseInt(m[1]), parseInt(m[2]), parseInt(m[3]));
  const mm = hex.match(/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)$/);
  if (mm) return rgbToHex(parseInt(mm[1]), parseInt(mm[2]), parseInt(mm[3]));
  return hex; // Return as-is if it's not a recognized format (e.g., already has alpha)
}

function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (n: number) => Math.max(0, Math.min(255, Math.round(n)));
  const h = (n: number) => clamp(n).toString(16).padStart(2, '0');
  return `#${h(r)}${h(g)}${h(b)}`;
}

// Maps a Matugen color palette to VS Code's workbench color customizations.
function mapPaletteToVscodeColors(palette: any): { [k: string]: string } {
  const colors = (palette && (palette.colors || palette)) || {};

  const pick = (names: string[], fallback?: string): string => {
    for (const n of names) {
      if (colors[n]) return normalizeHex(colors[n]);
    }
    return fallback || '#000000';
  };

  // Core Material You colors
  const primary = pick(['primary', 'accent', 'accent_color', 'accentColor'], '#7c4dff');
  const onPrimary = pick(['on_primary', 'onPrimary'], '#ffffff');
  const primaryContainer = pick(['primary_container', 'primaryContainer'], primary);
  const onPrimaryContainer = pick(['on_primary_container', 'onPrimaryContainer'], '#ffffff');

  const secondary = pick(['secondary'], primary);
  const onSecondary = pick(['on_secondary', 'onSecondary'], '#ffffff');
  const secondaryContainer = pick(['secondary_container', 'secondaryContainer'], secondary);
  
  const tertiary = pick(['tertiary'], primary);
  const onTertiary = pick(['on_tertiary', 'onTertiary'], '#ffffff');

  const error = pick(['error'], '#F2B8B5');
  const onError = pick(['on_error', 'onError'], '#601410');

  const background = pick(['background', 'bg', 'color0'], '#0f111a');
  const onBackground = pick(['on_background', 'onBackground', 'foreground', 'fg', 'color7', 'text'], '#e6eef8');

  const surface = pick(['surface'], background);
  const onSurface = pick(['on_surface', 'onSurface'], onBackground);

  const surfaceVariant = pick(['surface_variant', 'surfaceVariant', 'variant', 'color1'], surface);
  const onSurfaceVariant = pick(['on_surface_variant', 'onSurfaceVariant', 'on_variant'], onSurface);
  
  const outline = pick(['outline'], onSurfaceVariant);

  return {
    // General
    'foreground': onBackground,
    'focusBorder': primary,
    'selection.background': primaryContainer,
    'widget.shadow': '#00000080',
    'input.background': surfaceVariant,
    'input.foreground': onSurfaceVariant,
    'input.border': outline,
    'inputOption.activeBackground': primaryContainer,
    'dropdown.background': surface,
    'dropdown.list.background': surface,
    'dropdown.border': outline,
    'button.background': primary,
    'button.foreground': onPrimary,
    'badge.background': primary,
    'badge.foreground': onPrimary,
    'scrollbar.shadow': '#00000080',
    'scrollbarSlider.background': `${primary}80`,
    'scrollbarSlider.hoverBackground': `${primary}b0`,
    'scrollbarSlider.activeBackground': `${primary}f0`,
    'progressBar.background': primary,

    // Editor
    'editor.background': background,
    'editor.foreground': onBackground,
    'editorCursor.foreground': primary,
    'editor.selectionBackground': `${primary}40`,
    'editor.lineHighlightBackground': `${surfaceVariant}80`,
    'editorLineNumber.foreground': onSurfaceVariant,
    'editorLineNumber.activeForeground': primary,
    'editorWhitespace.foreground': `${onSurfaceVariant}80`,
    'editorIndentGuide.background': `${onSurfaceVariant}40`,
    'editorIndentGuide.activeBackground': `${onSurfaceVariant}80`,
    'editorHoverWidget.background': surface,
    'editorHoverWidget.border': outline,

    // Activity Bar
    'activityBar.background': surface,
    'activityBar.foreground': onSurface,
    'activityBar.inactiveForeground': onSurfaceVariant,
    'activityBarBadge.background': primary,
    'activityBarBadge.foreground': onPrimary,

    // Side Bar
    'sideBar.background': surface,
    'sideBar.foreground': onSurfaceVariant,
    'sideBar.border': outline,
    'sideBarTitle.foreground': onSurface,
    'sideBarSectionHeader.background': surface,

    // List and Trees
    'list.hoverBackground': `${onSurface}10`,
    'list.inactiveSelectionBackground': `${onSurface}10`,
    'list.activeSelectionBackground': primaryContainer,
    'list.activeSelectionForeground': onPrimaryContainer,
    'list.focusBackground': `${primary}30`,
    'list.highlightForeground': primary,

    // Title Bar
    'titleBar.activeBackground': surface,
    'titleBar.activeForeground': onSurface,
    'titleBar.inactiveBackground': surface,
    'titleBar.inactiveForeground': onSurfaceVariant,

    // Status Bar
    'statusBar.background': surface,
    'statusBar.foreground': onSurfaceVariant,
    'statusBar.debuggingBackground': secondaryContainer,
    'statusBar.debuggingForeground': onSecondary,
    'statusBarItem.remoteBackground': primary,
    'statusBarItem.remoteForeground': onPrimary,

    // Tabs
    'tab.activeBackground': background,
    'tab.inactiveBackground': surface,
    'tab.activeForeground': onBackground,
    'tab.inactiveForeground': onSurfaceVariant,
    'tab.border': outline,
    'editorGroupHeader.tabsBackground': surface,

    // Panel
    'panel.background': background,
    'panel.border': outline,
    'panelTitle.activeBorder': primary,
    'panelTitle.activeForeground': onSurface,
    'panelTitle.inactiveForeground': onSurfaceVariant,

    // Terminal
    'terminal.background': background,
    'terminal.foreground': onBackground,
    'terminal.ansiBlack': pick(['color0'], surface),
    'terminal.ansiRed': pick(['color1'], error),
    'terminal.ansiGreen': pick(['color2'], primary),
    'terminal.ansiYellow': pick(['color3'], secondary),
    'terminal.ansiBlue': pick(['color4'], tertiary),
    'terminal.ansiMagenta': pick(['color5'], primary),
    'terminal.ansiCyan': pick(['color6'], secondary),
    'terminal.ansiWhite': pick(['color7'], onSurface),
    'terminal.ansiBrightBlack': pick(['color8'], onSurfaceVariant),
    'terminal.ansiBrightRed': pick(['color9'], onError),
    'terminal.ansiBrightGreen': pick(['color10'], onPrimary),
    'terminal.ansiBrightYellow': pick(['color11'], onSecondary),
    'terminal.ansiBrightBlue': pick(['color12'], onTertiary),
    'terminal.ansiBrightMagenta': pick(['color13'], onPrimary),
    'terminal.ansiBrightCyan': pick(['color14'], onSecondary),
    'terminal.ansiBrightWhite': pick(['color15'], onBackground),
  };
}

export function activate(context: vscode.ExtensionContext) {
  const logger = vscode.window.createOutputChannel("Matugen", { log: true });

  const getPalettePath = (): string => {
    const cfg = vscode.workspace.getConfiguration('matugen');
    const p = cfg.get<string>('palettePath') || '~/.cache/matugen/palette.json';
    return expandHome(p);
  };

  const debounceMs = (): number => vscode.workspace.getConfiguration('matugen').get<number>('debounceMs') || 300;

  let watcher: fs.FSWatcher | null = null;
  let timeout: NodeJS.Timeout | null = null;

  async function applyPaletteOnce() {
    const p = getPalettePath();
    if (!p) return;
    const data = safeReadJsonSync(p);
    if (!data) {
      vscode.window.showWarningMessage(`Matugen: could not read palette file at ${p}. Make sure the file exists and is valid JSON.`);
      return;
    }

    const custom = mapPaletteToVscodeColors(data);
    try {
      await vscode.workspace.getConfiguration().update('workbench.colorCustomizations', custom, vscode.ConfigurationTarget.Global);
      logger.info('Applied palette to workbench.colorCustomizations');
    } catch (e) {
      logger.error('Failed to apply color customizations:', e as any);
      vscode.window.showErrorMessage('Matugen: failed to apply colors. See Output > Matugen for details.');
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
          applyPaletteOnce();
        }, debounceMs());
    };

    // Check if file exists before trying to watch it
    if (fs.existsSync(p)) {
        try {
            watcher = fs.watch(p, applyDebounced);
            logger.info(`Watching for changes in ${p}`);
            return;
        } catch (e) {
            logger.error(`Failed to watch file ${p}:`, e as any);
        }
    }

    // Fallback to watching the directory
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
    try {
      await vscode.workspace.getConfiguration().update('workbench.colorCustomizations', {}, vscode.ConfigurationTarget.Global);
      logger.info('Removed palette from workbench.colorCustomizations');
      vscode.window.showInformationMessage('Matugen: Color customizations have been reset.');
    } catch (e) {
      logger.error('Failed to remove color customizations:', e as any);
      vscode.window.showErrorMessage('Matugen: Failed to remove customizations. See Output > Matugen for details.');
    }
  }

  // Initial setup
  applyPaletteOnce();
  watchPaletteFile();

  // Register disposables
  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration(e => {
      if (e.affectsConfiguration('matugen.palettePath') || e.affectsConfiguration('matugen.debounceMs')) {
        watchPaletteFile();
        applyPaletteOnce(); // Apply immediately on path change
      }
    }),
    vscode.commands.registerCommand('matugen.applyPalette', async () => {
      await applyPaletteOnce();
      vscode.window.showInformationMessage('Matugen: Palette re-applied!');
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
