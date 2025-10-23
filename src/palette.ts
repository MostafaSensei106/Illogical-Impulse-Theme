import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import * as vscode from 'vscode';

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
 // if (!hex) return '#000000';
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

// Converts a hex color string to an RGB object {r, g, b}
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Calculates the luminance of an RGB color
function getLuminance(r: number, g: number, b: number): number {
    const a = [r, g, b].map(function(v) {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

// Determines if a hex color is dark based on its luminance
function isDarkColor(hex: string): boolean {
    const rgb = hexToRgb(hex);
    if (!rgb) return false; // Default to not dark if invalid hex

    const luminance = getLuminance(rgb.r, rgb.g, rgb.b);
    // A common threshold for dark vs. light is 0.179 (WCAG 2.0)
    return luminance < 0.179;
}


export function getPalettePath(): string {
    const cfg = vscode.workspace.getConfiguration('matugen');
    const p = cfg.get<string>('palettePath') || '~/.local/state/quickshell/user/generated/colors.json';
    return expandHome(p);
};

export function readPalette(): { colors: Record<string, string>, isDark: boolean } | null {
    const p = getPalettePath();
    if (!p) return null;
    const paletteData = safeReadJsonSync(p);
    if (!paletteData) {
      vscode.window.showWarningMessage(`Matugen: could not read palette file at ${p}. Make sure the file exists and is valid JSON.`);
      return null;
    }

    const rawColors = (paletteData && (paletteData.colors || paletteData)) || {};
    const pick = (names: string[], fallback?: string): string => {
        for (const n of names) {
          if (rawColors[n]) return normalizeHex(rawColors[n]);
        }
        return fallback || '#000000';
    };

    const colors: Record<string, string> = {
        primary: pick(['primary', 'accent', 'accent_color', 'accentColor']),
        onPrimary: pick(['on_primary', 'onPrimary']),
        primaryContainer: pick(['primary_container', 'primaryContainer']),
        onPrimaryContainer: pick(['on_primary_container', 'onPrimaryContainer']),
        secondary: pick(['secondary']),
        onSecondary: pick(['on_secondary', 'onSecondary']),
        secondaryContainer: pick(['secondary_container', 'secondaryContainer']),
        onSecondaryContainer: pick(['on_secondary_container', 'onSecondaryContainer']),
        tertiary: pick(['tertiary']),
        onTertiary: pick(['on_tertiary', 'onTertiary']),
        tertiaryContainer: pick(['tertiary_container', 'tertiaryContainer']),
        onTertiaryContainer: pick(['on_tertiary_container', 'onTertiaryContainer']),
        error: pick(['error']),
        onError: pick(['on_error', 'onError']),
        errorContainer: pick(['error_container', 'errorContainer']),
        onErrorContainer: pick(['on_error_container', 'onErrorContainer']),
        background: pick(['background', 'bg']),
        onBackground: pick(['on_background', 'onBackground', 'foreground', 'fg']),
        surface: pick(['surface']),
        onSurface: pick(['on_surface', 'onSurface']),
        surfaceVariant: pick(['surface_variant', 'surfaceVariant']),
        onSurfaceVariant: pick(['on_surface_variant', 'onSurfaceVariant']),
        outline: pick(['outline']),
        outlineVariant: pick(['outline_variant', 'outlineVariant']),
        shadow: pick(['shadow']),
        scrim: pick(['scrim']),
        inverseSurface: pick(['inverse_surface', 'inverseSurface']),
        inverseOnSurface: pick(['inverse_on_surface', 'inverseOnSurface']),
        inversePrimary: pick(['inverse_primary', 'inversePrimary']),
        surfaceDim: pick(['surface_dim', 'surfaceDim']),
        surfaceBright: pick(['surface_bright', 'surfaceBright']),
        surfaceContainerLowest: pick(['surface_container_lowest', 'surfaceContainerLowest']),
        surfaceContainerLow: pick(['surface_container_low', 'surfaceContainerLow']),
        surfaceContainer: pick(['surface_container', 'surfaceContainer']),
        surfaceContainerHigh: pick(['surface_container_high', 'surfaceContainerHigh']),
        surfaceContainerHighest: pick(['surface_container_highest', 'surfaceContainerHighest']),
        ...rawColors
    };

    const isDark = isDarkColor(colors.background);

    return { colors, isDark };
}
