function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (n: number) => Math.max(0, Math.min(255, Math.round(n)));
  const h = (n: number) => clamp(n).toString(16).padStart(2, '0');
  return `#${h(r)}${h(g)}${h(b)}`;
}

// Normalizes a color string from various formats (array, short hex, rgb) to a full 6-digit hex string.
export function normalizeHex(hex: any): string {
  if (!hex) return '#000000'; // Ensure a default if hex is null/undefined
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

// Converts a hex color string to an RGB object {r, g, b}
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
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
export function isDarkColor(hex: string): boolean {
    const rgb = hexToRgb(hex);
    if (!rgb) return false; // Default to not dark if invalid hex

    const luminance = getLuminance(rgb.r, rgb.g, rgb.b);
    // A common threshold for dark vs. light is 0.179 (WCAG 2.0)
    return luminance < 0.179;
}
