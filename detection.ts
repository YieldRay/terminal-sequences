import process from "node:process";
import { isatty } from "node:tty";

/**
 * Detect if color is supported by the environment.
 */
export function detectIsColorSupported() {
    const { argv, env, platform } = process;
    return !("NO_COLOR" in env || argv.includes("--no-color")) &&
        ("FORCE_COLOR" in env ||
            argv.includes("--color") ||
            platform === "win32" ||
            (isatty(1) && env.TERM !== "dumb") ||
            "CI" in env);
}
