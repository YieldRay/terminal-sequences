import { SGR } from "../csi.ts";

// Text styles
export const reset = SGR(0); // Reset all attributes
export const bold = SGR(1); // Bold text
export const faint = SGR(2); // Faint text
export const italic = SGR(3); // Italic text
export const underline = SGR(4); // Underlined text
export const blinkSlow = SGR(5); // Slow blink
export const blinkRapid = SGR(6); // Rapid blink
export const inverse = SGR(7); // Inverse colors
export const hidden = SGR(8); // Hidden text
export const strikeThrough = SGR(9); // Strikethrough text

// Foreground colors
export const fgBlack = SGR(30);
export const fgRed = SGR(31);
export const fgGreen = SGR(32);
export const fgYellow = SGR(33);
export const fgBlue = SGR(34);
export const fgMagenta = SGR(35);
export const fgCyan = SGR(36);
export const fgWhite = SGR(37);
export const fgDefault = SGR(39); // Default text color

// Background colors
export const bgBlack = SGR(40);
export const bgRed = SGR(41);
export const bgGreen = SGR(42);
export const bgYellow = SGR(43);
export const bgBlue = SGR(44);
export const bgMagenta = SGR(45);
export const bgCyan = SGR(46);
export const bgWhite = SGR(47);
export const bgDefault = SGR(49); // Default background color

// Bright foreground colors
export const fgBrightBlack = SGR(90);
export const fgBrightRed = SGR(91);
export const fgBrightGreen = SGR(92);
export const fgBrightYellow = SGR(93);
export const fgBrightBlue = SGR(94);
export const fgBrightMagenta = SGR(95);
export const fgBrightCyan = SGR(96);
export const fgBrightWhite = SGR(97);

// Bright background colors
export const bgBrightBlack = SGR(100);
export const bgBrightRed = SGR(101);
export const bgBrightGreen = SGR(102);
export const bgBrightYellow = SGR(103);
export const bgBrightBlue = SGR(104);
export const bgBrightMagenta = SGR(105);
export const bgBrightCyan = SGR(106);
export const bgBrightWhite = SGR(107);
