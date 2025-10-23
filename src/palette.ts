// ============================================================================ 
// paletteReader.ts - Palette Configuration Reader 
// ============================================================================ 

import * as vscode from 'vscode';
import { expandHome, safeReadJsonSync } from './utils/fs'; // Import from utils/fs
import { normalizeHex, isDarkColor } from './utils/color'; // Import from utils/color

// ═══════════════════════════════════════════════════════════════════════════ 
// MAIN PALETTE FUNCTIONS - الدوال الرئيسية للوحة الألوان 
// ═══════════════════════════════════════════════════════════════════════════ 

/**
 * 📂 Gets the configured palette file path
 * الحصول على مسار ملف لوحة الألوان المُعدّ
 */
export function getPalettePath(): string {
    const cfg = vscode.workspace.getConfiguration('illogicalImpulse');
    const defaultPath = '~/.local/state/quickshell/user/generated/colors.json';
    const p = cfg.get<string>('palettePath') || defaultPath;
    return expandHome(p);
}

/**
 * 🎨 Reads and processes the palette file
 * قراءة ومعالجة ملف لوحة الألوان
 * 
 * @returns Object containing colors and isDark flag, or null if read fails
 */
export function readPalette(): { colors: Record<string, string>, isDark: boolean } | null {
    const p = getPalettePath();
    if (!p) return null;

    const paletteData = safeReadJsonSync(p);
    if (!paletteData) {
      vscode.window.showWarningMessage(
        `⚠️ Illogical Impulse: Could not read palette file at ${p}.\n` +
        `تعذر قراءة ملف الألوان. تأكد من وجود الملف وأنه JSON صالح.`
      );
      return null;
    }

    const rawColors = (paletteData && (paletteData.colors || paletteData)) || {};

    /**
     * 🔍 Picks the first available color from a list of possible names
     * اختيار أول لون متاح من قائمة الأسماء المحتملة
     */
    const pick = (names: string[], fallback?: string): string => {
        for (const n of names) {
          if (rawColors[n]) return normalizeHex(rawColors[n]);
        }
        return fallback || '#000000';
    };

    // ═══════════════════════════════════════════════════════════════════════ 
    // Material Design 3 Color Mapping
    // ═══════════════════════════════════════════════════════════════════════ 
    const colors: Record<string, string> = {
        // Primary Colors
        primary: pick(['primary', 'accent', 'accent_color', 'accentColor']),
        onPrimary: pick(['on_primary', 'onPrimary']),
        primaryContainer: pick(['primary_container', 'primaryContainer']),
        onPrimaryContainer: pick(['on_primary_container', 'onPrimaryContainer']),

        // Secondary Colors
        secondary: pick(['secondary']),
        onSecondary: pick(['on_secondary', 'onSecondary']),
        secondaryContainer: pick(['secondary_container', 'secondaryContainer']),
        onSecondaryContainer: pick(['on_secondary_container', 'onSecondaryContainer']),

        // Tertiary Colors
        tertiary: pick(['tertiary']),
        onTertiary: pick(['on_tertiary', 'onTertiary']),
        tertiaryContainer: pick(['tertiary_container', 'tertiaryContainer']),
        onTertiaryContainer: pick(['on_tertiary_container', 'onTertiaryContainer']),

        // Error Colors
        error: pick(['error']),
        onError: pick(['on_error', 'onError']),
        errorContainer: pick(['error_container', 'errorContainer']),
        onErrorContainer: pick(['on_error_container', 'onErrorContainer']),

        // Background & Surface
        background: pick(['background', 'bg']),
        onBackground: pick(['on_background', 'onBackground', 'foreground', 'fg']),
        surface: pick(['surface']),
        onSurface: pick(['on_surface', 'onSurface']),

        // Surface Variants
        surfaceVariant: pick(['surface_variant', 'surfaceVariant']),
        onSurfaceVariant: pick(['on_surface_variant', 'onSurfaceVariant']),

        // Outlines & Dividers
        outline: pick(['outline']),
        outlineVariant: pick(['outline_variant', 'outlineVariant']),

        // Utility
        shadow: pick(['shadow']),
        scrim: pick(['scrim']),

        // Inverse Colors
        inverseSurface: pick(['inverse_surface', 'inverseSurface']),
        inverseOnSurface: pick(['inverse_on_surface', 'inverseOnSurface']),
        inversePrimary: pick(['inverse_primary', 'inversePrimary']),

        // Surface Elevation Levels
        surfaceDim: pick(['surface_dim', 'surfaceDim']),
        surfaceBright: pick(['surface_bright', 'surfaceBright']),
        surfaceContainerLowest: pick(['surface_container_lowest', 'surfaceContainerLowest']),
        surfaceContainerLow: pick(['surface_container_low', 'surfaceContainerLow']),
        surfaceContainer: pick(['surface_container', 'surfaceContainer']),
        surfaceContainerHigh: pick(['surface_container_high', 'surfaceContainerHigh']),
        surfaceContainerHighest: pick(['surface_container_highest', 'surfaceContainerHighest']),

        // Include any additional colors from the palette
        ...rawColors
    };

    // Determine if theme is dark or light
    const isDark = isDarkColor(colors.background);

    return { colors, isDark };
}