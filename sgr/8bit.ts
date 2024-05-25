import { SGR } from "../csi.ts";

/**
 * Generates an ANSI escape code for setting the text (foreground) color using 8-bit color codes.
 *
 * @param fg - The 8-bit color code for the foreground (0-255).
 * @returns The ANSI escape code string for setting the text color.
 */
export const fg256 = (fg: number): string => SGR(38, 5, fg);

/**
 * Generates an ANSI escape code for setting the background color using 8-bit color codes.
 *
 * @param bg - The 8-bit color code for the background (0-255).
 * @returns The ANSI escape code string for setting the background color.
 */
export const bg256 = (bg: number): string => SGR(48, 5, bg);

/**
 * Generates ANSI escape codes for setting both the text (foreground) and background colors using 8-bit color codes.
 *
 * @param fg - The 8-bit color code for the foreground (0-255).
 * @param bg - The 8-bit color code for the background (0-255).
 * @returns The ANSI escape code string for setting both the text and background colors.
 */
export const fgBg256 = (fg: number, bg?: number): string => SGR(38, 5, fg, 48, 5, bg);
