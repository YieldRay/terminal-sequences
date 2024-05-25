// Assuming ESC is defined in c0.ts
import { ESC } from "./c0.ts";

/**
 * Save Cursor
 *
 * Save cursor position, charmap, and text attributes.
 */
export const SC = `${ESC}7`;

/**
 * Restore Cursor
 *
 * Restore cursor position, charmap, and text attributes.
 */
export const RC = `${ESC}8`;

/**
 * Screen Alignment Pattern
 *
 * Fill viewport with a test pattern (E).
 */
export const DECALN = `${ESC}#8`;

/**
 * Index
 *
 * Move the cursor one line down scrolling if needed.
 */
export const IND = `${ESC}D`;

/**
 * Next Line
 *
 * Move the cursor to the beginning of the next row.
 */
export const NEL = `${ESC}E`;

/**
 * Horizontal Tabulation Set
 *
 * Places a tab stop at the current cursor position.
 */
export const HTS = `${ESC}H`;

/**
 * Reverse Index
 *
 * Move the cursor one line up scrolling if needed.
 */
export const IR = `${ESC}M`;

/**
 * Device Control String
 *
 * Start of a DCS sequence.
 */
export const DCS = `${ESC}P`;

/**
 * Control Sequence Introducer
 *
 * Start of a CSI sequence.
 */
export const CSI = `${ESC}[`;

/**
 * String Terminator
 *
 * Terminator used for string type sequences.
 */
export const ST = `${ESC}\\`;

/**
 * Operating System Command
 *
 * Start of an OSC sequence.
 */
export const OSC = `${ESC}]`;

/**
 * Privacy Message
 *
 * Start of a privacy message.
 */
export const PM = `${ESC}^`;

/**
 * Application Program Command
 *
 * Start of an APC sequence.
 */
export const APC = `${ESC}_`;
