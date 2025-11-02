/** RGB to hex (#rrggbb). */
export const rgbToHex = (r: number, g: number, b: number): string => {
    const toHex = (n: number) => n.toString(16).padStart(2, "0");
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

/** Hex (#rrggbb) to RGB; returns null if invalid. */
export const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
    const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    return match
        ? {
              r: parseInt(match[1], 16),
              g: parseInt(match[2], 16),
              b: parseInt(match[3], 16),
          }
        : null;
};
