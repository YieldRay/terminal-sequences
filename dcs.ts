import { ESC } from "./c0.ts"; // Assuming ST (String Terminator) is defined in c0.ts
import { Ps   } from "./_shared.ts";
import { ST } from "./c1.ts";

/**
 * SIXEL Graphics
 *
 * Draw SIXEL image.
 */
export const SIXEL = (p1?: number, p2?: number, p3?: number, pt?: string) =>
    `${ESC}P${Ps(p1)};${Ps(p2)};${Ps(p3)}q${pt ?? ""}${ST}`;

/**
 * User Defined Keys
 *
 * Definitions for user-defined keys.
 */
export const DECUDK = (p1?: number, p2?: number, pt?: string) => `${ESC}P${Ps(p1)};${Ps(p2)}|${pt ?? ""}${ST}`;

/**
 * Request Terminfo String
 *
 * Request Terminfo String.
 */
export const XTGETTCAP = (pt?: string) => `${ESC}P+q${pt ?? ""}${ST}`;

/**
 * Set Terminfo Data
 *
 * Set Terminfo Data.
 */
export const XTSETTCAP = (pt?: string) => `${ESC}P+p${pt ?? ""}${ST}`;

/**
 * Request Selection or Setting
 *
 * Request several terminal settings.
 */
export const DECRQSS = (pt?: string) => `${ESC}P$q${pt ?? ""}${ST}`;
