/**
 * Index
 *
 * Moves the cursor one line down, scrolling if needed.
 */
export const IND = "\x84";

/**
 * Next Line
 *
 * Moves the cursor to the beginning of the next row.
 */
export const NEL = "\x85";

/**
 * Horizontal Tabulation Set
 *
 * Places a tab stop at the current cursor position.
 */
export const HTS = "\x88";

/**
 * Device Control String
 *
 * Start of a DCS sequence.
 */
export const DCS = "\x90";

/**
 * Control Sequence Introducer
 *
 * Start of a CSI sequence.
 */
export const CSI = "\x9B";

/**
 * String Terminator
 *
 * Terminator used for string type sequences.
 */
export const ST = "\x9C";

/**
 * Operating System Command
 *
 * Start of an OSC sequence.
 */
export const OSC = "\x9D";

/**
 * Privacy Message
 *
 * Start of a privacy message.
 */
export const PM = "\x9E";

/**
 * Application Program Command
 *
 * Start of an APC sequence.
 */
export const APC = "\x9F";
