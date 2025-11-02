import { SGR } from "../csi.ts";

/** 8-bit foreground color (0-255). */
export const fg256 = (fg: number) => SGR(38, 5, fg);

/** 8-bit background color (0-255). */
export const bg256 = (bg: number) => SGR(48, 5, bg);

/** 8-bit foreground and background; if bg is omitted, only sets fg. */
export const fgBg256 = (fg: number, bg?: number) =>
	bg == null ? fg256(fg) : SGR(38, 5, fg, 48, 5, bg);
