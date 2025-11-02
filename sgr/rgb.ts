import { SGR } from "../csi.ts";

/** RGB foreground (0-255 each). */
export const fgRgb = (r: number, g: number, b: number) => SGR(38, 2, r, g, b);

/** RGB background (0-255 each). */
export const bgRgb = (r: number, g: number, b: number) => SGR(48, 2, r, g, b);

