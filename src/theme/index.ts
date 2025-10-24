import { createWorkbenchColors } from './workbench';
import { createTokenColors } from './tokens';

export const THEME_NAME = 'Illogical Impulse Theme';

export function createTheme(palette: { colors: Record<string, string>, isDark: boolean }) {
    const workbenchColors = createWorkbenchColors(palette.colors);
    const tokenColors = createTokenColors(palette.colors);
    return {
        "$schema": "vscode://schemas/color-theme",
        name: THEME_NAME,
        type: palette.isDark ? "dark" : "light", // Dynamically set theme type
        colors: workbenchColors,
        tokenColors: tokenColors,
    };
}
