import { CSI } from "./esc.ts";
import { Ps, Pm, SP } from "./_shared.ts";

/**
 * Insert Characters
 *
 * Inserts Ps (blank) characters (default = 1).
 */
export const ICH = (ps?: number) => `${CSI}${Ps(ps)}@`;

/**
 * Scroll Left
 *
 * Scrolls viewport Ps times to the left (default = 1).
 */
export const SL = (ps?: number) => `${CSI}${Ps(ps)}${SP}@`;

/**
 * Cursor Up
 *
 * Moves cursor Ps times up (default=1).
 */
export const CUU = (ps?: number) => `${CSI}${Ps(ps)}A`;

/**
 * Scroll Right
 *
 * Scrolls viewport Ps times to the right.
 */
export const SR = (ps?: number) => `${CSI}${Ps(ps)}${SP}A`;

/**
 * Cursor Down
 *
 * Moves cursor Ps times down (default=1).
 */
export const CUD = (ps?: number) => `${CSI}${Ps(ps)}B`;

/**
 * Cursor Forward
 *
 * Moves cursor Ps times forward (default=1).
 */
export const CUF = (ps?: number) => `${CSI}${Ps(ps)}C`;

/**
 * Cursor Backward
 *
 * Moves cursor Ps times backward (default=1).
 */
export const CUB = (ps?: number) => `${CSI}${Ps(ps)}D`;

/**
 * Cursor Next Line
 *
 * Moves cursor Ps times down (default=1) and to the first column.
 */
export const CNL = (ps?: number) => `${CSI}${Ps(ps)}E`;

/**
 * Cursor Preceding Line
 *
 * Moves cursor Ps times up (default=1) and to the first column.
 */
export const CPL = (ps?: number) => `${CSI}${Ps(ps)}F`;

/**
 * Cursor Horizontal Absolute
 *
 * Moves cursor to Ps-th column of the active row (default=1).
 */
export const CHA = (ps?: number) => `${CSI}${Ps(ps)}G`;

/**
 * Cursor Position
 *
 * Sets cursor to position [Ps, Ps] (default = [1, 1]).
 */
export const CUP = (row = 1, col = 1) => `${CSI}${Ps(row)};${Ps(col)}H`;

/**
 * Cursor Horizontal Tabulation
 *
 * Moves cursor Ps times tabs forward (default=1).
 */
export const CHT = (ps?: number) => `${CSI}${Ps(ps)}I`;

/**
 * Erase In Display
 *
 * Erases various parts of the viewport.
 */
export const ED = (ps?: number) => `${CSI}${Ps(ps)}J`;

/**
 * Selective Erase In Display
 *
 * Same as ED with respecting protection flag.
 */
export const DECSED = (ps?: number) => `${CSI}?${Ps(ps)}J`;

/**
 * Erase In Line
 *
 * Erases various parts of the active row.
 */
export const EL = (ps?: number) => `${CSI}${Ps(ps)}K`;

/**
 * Selective Erase In Line
 *
 * Same as EL with respecting protection flag.
 */
export const DECSEL = (ps?: number) => `${CSI}?${Ps(ps)}K`;

/**
 * Insert Line
 *
 * Inserts Ps blank lines at active row (default=1).
 */
export const IL = (ps?: number) => `${CSI}${Ps(ps)}L`;

/**
 * Delete Line
 *
 * Deletes Ps lines at active row (default=1).
 */
export const DL = (ps?: number) => `${CSI}${Ps(ps)}M`;

/**
 * Delete Character
 *
 * Deletes Ps characters (default=1).
 */
export const DCH = (ps?: number) => `${CSI}${Ps(ps)}P`;

/**
 * Scroll Up
 *
 * Scrolls Ps lines up (default=1).
 */
export const SU = (ps?: number) => `${CSI}${Ps(ps)}S`;

/**
 * Scroll Down
 *
 * Scrolls Ps lines down (default=1).
 */
export const SD = (ps?: number) => `${CSI}${Ps(ps)}T`;

/**
 * Erase Character
 *
 * Erases Ps characters from current cursor position to the right (default=1).
 */
export const ECH = (ps?: number) => `${CSI}${Ps(ps)}X`;

/**
 * Cursor Backward Tabulation
 *
 * Moves cursor Ps tabs backward (default=1).
 */
export const CBT = (ps?: number) => `${CSI}${Ps(ps)}Z`;

/**
 * Horizontal Position Absolute
 *
 * Same as CHA.
 */
export const HPA = (ps?: number) => `${CSI}${Ps(ps)}\``;

/**
 * Horizontal Position Relative
 *
 * Same as CUF.
 */
export const HPR = (ps?: number) => `${CSI}${Ps(ps)}a`;

/**
 * Repeat Preceding Character
 *
 * Repeats preceding character Ps times (default=1).
 */
export const REP = (ps?: number) => `${CSI}${Ps(ps)}b`;

/**
 * Primary Device Attributes
 *
 * Sends primary device attributes.
 */
export const DA1 = () => `${CSI}c`;

/**
 * Secondary Device Attributes
 *
 * Sends secondary device attributes.
 */
export const DA2 = () => `${CSI}>c`;

/**
 * Vertical Position Absolute
 *
 * Moves cursor to Ps-th row (default=1).
 */
export const VPA = (ps?: number) => `${CSI}${Ps(ps)}d`;

/**
 * Vertical Position Relative
 *
 * Moves cursor Ps times down (default=1).
 */
export const VPR = (ps?: number) => `${CSI}${Ps(ps)}e`;

/**
 * Horizontal and Vertical Position
 *
 * Same as CUP.
 */
export const HVP = (row = 1, col = 1) => `${CSI}${Ps(row)};${Ps(col)}f`;

/**
 * Tab Clear
 *
 * Clears tab stops at current position (0) or all (3) (default=0).
 */
export const TBC = (ps?: number) => `${CSI}${Ps(ps)}g`;

/**
 * Set Mode
 *
 * Sets various terminal modes.
 */
export const SM = (...pm: number[]) => `${CSI}${Pm(pm)}h`;

/**
 * DEC Private Set Mode
 *
 * Sets various terminal attributes.
 */
export const DECSET = (...pm: number[]) => `${CSI}?${Pm(pm)}h`;

/**
 * Reset Mode
 *
 * Resets various terminal attributes.
 */
export const RM = (...pm: number[]) => `${CSI}${Pm(pm)}l`;

/**
 * DEC Private Reset Mode
 *
 * Resets various terminal attributes.
 */
export const DECRST = (...pm: number[]) => `${CSI}?${Pm(pm)}l`;

/**
 * Select Graphic Rendition
 *
 * Sets/Resets various text attributes.
 */
export const SGR = (...pm: (number|undefined)[]) => `${CSI}${Pm(pm)}m`;

/**
 * Device Status Report
 *
 * Requests cursor position (CPR) with Ps = 6.
 */
export const DSR = (ps?: number) => `${CSI}${Ps(ps)}n`;

/**
 * DEC Device Status Report
 *
 * Only CPR is supported (same as DSR).
 */
export const DECDSR = (ps?: number) => `${CSI}?${Ps(ps)}n`;

/**
 * Request Mode
 *
 * Requests mode state.
 */
export const DECRQM = (ps?: number) => `${CSI}${Ps(ps)}$p`;

/**
 * Soft Terminal Reset
 *
 * Resets several terminal attributes to initial state.
 */
export const DECSTR = () => `${CSI}!p`;

/**
 * Select Character Protection Attribute
 *
 * Whether DECSED and DECSEL can erase (0=default, 2) or not (1).
 */
export const DECSCA = (ps?: number) => `${CSI}${Ps(ps)}"q`;

/**
 * Set Cursor Style
 *
 * Sets cursor style.
 */
export const DECSCUSR = (ps?: number) => `${CSI}${Ps(ps)}${SP}q`;

/**
 * Set Top and Bottom Margin
 *
 * Sets top and bottom margins of the viewport [top;bottom] (default = viewport size).
 */
export const DECSTBM = (top?: number, bottom?: number) => `${CSI}${Ps(top)};${Ps(bottom)}r`;

/**
 * Save Cursor
 *
 * Saves cursor position, charmap and text attributes.
 */
export const SCOSC = () => `${CSI}s`;

/**
 * Restore Cursor
 *
 * Restores cursor position, charmap and text attributes.
 */
export const SCORC = () => `${CSI}u`;

/**
 * Insert Columns
 *
 * Inserts Ps columns at cursor position.
 */
export const DECIC = (ps?: number) => `${CSI}${Ps(ps)}'}`;

/**
 * Delete Columns
 *
 * Deletes Ps columns at cursor position.
 */
export const DECDC = (ps?: number) => `${CSI}${Ps(ps)}'~`;
