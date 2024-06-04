import { SGR } from "../csi.ts";

// Text styles

/** Reset all attributes */
export const reset = SGR(0); 

/** Bold text or increased intensity */
export const bold = SGR(1);  

/** Faint text, decreased intensity, or dim */
export const faint = SGR(2); 

/** Italic text */
export const italic = SGR(3); 

/** Underlined text */
export const underline = SGR(4); 

/** Slow blink */
export const blinkSlow = SGR(5); 

/** Rapid blink */
export const blinkRapid = SGR(6); 

/** Inverse colors (swap foreground and background colors) */
export const inverse = SGR(7); 

/** Conceal text */
export const hidden = SGR(8); 

/** Crossed-out text */
export const strikeThrough = SGR(9); 

// Foreground colors

/** Black text */
export const fgBlack = SGR(30);

/** Red text */
export const fgRed = SGR(31);

/** Green text */
export const fgGreen = SGR(32);

/** Yellow text */
export const fgYellow = SGR(33);

/** Blue text */
export const fgBlue = SGR(34);

/** Magenta text */
export const fgMagenta = SGR(35);

/** Cyan text */
export const fgCyan = SGR(36);

/** White text */
export const fgWhite = SGR(37);

/** Default text color */
export const fgDefault = SGR(39); 

// Background colors

/** Black background */
export const bgBlack = SGR(40);

/** Red background */
export const bgRed = SGR(41);

/** Green background */
export const bgGreen = SGR(42);

/** Yellow background */
export const bgYellow = SGR(43);

/** Blue background */
export const bgBlue = SGR(44);

/** Magenta background */
export const bgMagenta = SGR(45);

/** Cyan background */
export const bgCyan = SGR(46);

/** White background */
export const bgWhite = SGR(47);

/** Default background color */
export const bgDefault = SGR(49); 

// Bright foreground colors

/** Bright black text */
export const fgBrightBlack = SGR(90);

/** Bright red text */
export const fgBrightRed = SGR(91);

/** Bright green text */
export const fgBrightGreen = SGR(92);

/** Bright yellow text */
export const fgBrightYellow = SGR(93);

/** Bright blue text */
export const fgBrightBlue = SGR(94);

/** Bright magenta text */
export const fgBrightMagenta = SGR(95);

/** Bright cyan text */
export const fgBrightCyan = SGR(96);

/** Bright white text */
export const fgBrightWhite = SGR(97);

// Bright background colors

/** Bright black background */
export const bgBrightBlack = SGR(100);

/** Bright red background */
export const bgBrightRed = SGR(101);

/** Bright green background */
export const bgBrightGreen = SGR(102);

/** Bright yellow background */
export const bgBrightYellow = SGR(103);

/** Bright blue background */
export const bgBrightBlue = SGR(104);

/** Bright magenta background */
export const bgBrightMagenta = SGR(105);

/** Bright cyan background */
export const bgBrightCyan = SGR(106);

/** Bright white background */
export const bgBrightWhite = SGR(107);
