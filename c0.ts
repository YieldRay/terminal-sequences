/**
 * Null
 *
 * NUL is ignored.
 */
export const NUL = "\x00";

/**
 * Bell
 *
 * Rings the bell.
 */
export const BEL = "\x07";

/**
 * Backspace
 *
 * Moves the cursor one position to the left.
 */
export const BS = "\x08";

/**
 * Horizontal Tabulation
 *
 * Moves the cursor to the next character tab stop.
 */
export const HT = "\x09";

/**
 * Line Feed
 *
 * Moves the cursor one row down, scrolling if needed.
 */
export const LF = "\x0A";

/**
 * Vertical Tabulation
 *
 * Treated as Line Feed (LF).
 */
export const VT = "\x0B";

/**
 * Form Feed
 *
 * Treated as Line Feed (LF).
 */
export const FF = "\x0C";

/**
 * Carriage Return
 *
 * Moves the cursor to the beginning of the row.
 */
export const CR = "\x0D";

/**
 * Shift Out
 *
 * Switches to an alternative character set.
 */
export const SO = "\x0E";

/**
 * Shift In
 *
 * Returns to the regular character set after Shift Out.
 */
export const SI = "\x0F";

/**
 * Escape
 *
 * Starts a sequence and cancels any other sequence.
 */
export const ESC = "\x1B";
