import { SGR } from "../csi.ts";

/**
 * Generates an ANSI escape code for the given RGB color.
 * @param r - Red component (0-255)
 * @param g - Green component (0-255)
 * @param b - Blue component (0-255)
 * @returns ANSI escape code string
 */
export const fgRgb = (r: number, g: number, b: number) => SGR(38, 2, r, g, b);

/**
 * Generates an ANSI escape code for the given RGB background color.
 * @param r - Red component (0-255)
 * @param g - Green component (0-255)
 * @param b - Blue component (0-255)
 * @returns ANSI escape code string
 */
export const bgRgb = (r: number, g: number, b: number) => SGR(48, 2, r, g, b);

