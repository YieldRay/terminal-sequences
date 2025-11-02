# Terminal Sequences

TypeScript helpers for emitting ANSI/VT terminal control sequences (CSI/OSC/SGR, etc.). Use them to move the cursor, clear the screen, and style text.

## Quick start

Cursor control:

```ts
import { SR } from "./csi.ts";

console.log(SR()); // scroll right by 1
```

Text styling (SGR):

```ts
import { fgRed, reset } from "./sgr/style.ts";

console.log(`${fgRed}I'm red!${reset}`);
```

256‑color helper:

```ts
import { fgBg256 } from "./sgr/8bit.ts";
import { reset } from "./sgr/style.ts";

console.log(`${fgBg256(1, 12)}red on bright blue${reset}`);
```

Detect color support:

```ts
import { detectIsColorSupported } from "./detection.ts";

if (detectIsColorSupported()) {
    // safe to emit colors
}
```

Note: Terminal sequences render in TTYs. When piping to files or tools that don't interpret them, you'll see raw escape codes.

## Docs & references

- <https://ecma-international.org/publications-and-standards/standards/ecma-48/>
- <https://www.man7.org/linux/man-pages/man4/console_codes.4.html>
- <https://invisible-island.net/xterm/ctlseqs/ctlseqs.html>
- <https://xtermjs.org/docs/api/vtfeatures/>
- <https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797>
