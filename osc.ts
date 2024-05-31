import { Ps } from "./_shared.ts";
import { BEL, ESC } from "./c0.ts";

/**
 * Set window title and icon name.
 */
export const OSC0 = (pt: string) => `${ESC}]0;${pt}${BEL}`;

/**
 * Set icon name.
 */
export const OSC1 = (pt: string) => `${ESC}]1;${pt}${BEL}`;

/**
 * Set window title.
 */
export const OSC2 = (pt: string) => `${ESC}]2;${pt}${BEL}`;

/**
 * Change color number c to the color specified by spec.
 */
export const OSC4 = (c: number, spec: string) =>
    `${ESC}]4;${Ps(c)};${Ps(spec)}${BEL}`;

/**
 * Create a hyperlink to uri using params.
 */
export const OSC8 = (params: string, uri: string) =>
    `${ESC}]8;${Ps(params)};${Ps(uri)}${BEL}`;

/**
 * Set or query default foreground color.
 */
export const OSC10 = (pt: string) => `${ESC}]10;${pt}${BEL}`;

/**
 * Set or query default background color.
 */
export const OSC11 = (pt: string) => `${ESC}]11;${pt}${BEL}`;

/**
 * Set or query default cursor color.
 */
export const OSC12 = (pt: string) => `${ESC}]12;${pt}${BEL}`;

/**
 * Reset color number c to themed color.
 */
export const OSC104 = (c: number) => `${ESC}]104;${Ps(c)}${BEL}`;

/**
 * Restore default foreground to themed color.
 */
export const OSC110 = () => `${ESC}]110${BEL}`;

/**
 * Restore default background to themed color.
 */
export const OSC111 = () => `${ESC}]111${BEL}`;

/**
 * Restore default cursor to themed color.
 */
export const OSC112 = () => `${ESC}]112${BEL}`;
