/**
 * A single (usually optional) numeric parameter, composed of one or more decimal digits.
 *
 * make sure undefined become "", rather than "undefined"
 */
export const Ps = <T = unknown>(ps: T) => (ps == undefined ? "" : String(ps));
/**
 * Multiple numeric parameters composed of any number of single numeric parameters, separated by ; character(s)
 *
 * e.g. ` Ps ; Ps ; … `.
 */
export const Pm = (pm: (number | undefined)[]) => pm.map(Ps).join(";");
/**
 * Space
 *
 * `\x20`
 */
export const SP = " ";
