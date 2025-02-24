# Terminal Sequences

Terminal sequences (also known as escape sequences or control sequences) are special character combinations used to control the appearance and behavior of computer terminals. They allow you to do things like:

- Change text color and style
- Move the cursor
- Clear the screen
- Send special signals to the terminal

For a detailed introduction to terminal sequences, see [xtermjs.org's guide](https://xtermjs.org/docs/guides/hooks#background---what-are-terminal-sequences).

See also:

- <https://ecma-international.org/publications-and-standards/standards/ecma-48/>
- <https://www.man7.org/linux/man-pages/man4/console_codes.4.html>
- <https://xtermjs.org/docs/api/vtfeatures/>
- <https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797>

> [!TIP]\
> This project aims to provide comprehensive support for terminal sequences, encompassing both advanced terminal control and basic string styling.\
> If your primary need is terminal string styling, you might prefer a dedicated library like [Chalk](https://github.com/chalk/chalk) for a simpler and more focused approach.

# Usage

```ts
import { SR } from "./csi.ts";

// scroll right
console.log(SR());
```

Terminal sequences are primarily designed for interactive TTY (teletype) interfaces. In other contexts, like piping output to a file or processing it programmatically, these sequences may not be interpreted correctly and can clutter the output.

For example, Node.js provides insights into process I/O behavior in its documentation: [A note on process I/O](https://nodejs.org/api/process.html#process_a_note_on_process_i_o).

Also, before emitting color codes, it's crucial to verify if the terminal supports them. This prevents garbled output in unsupported environments.

Here's a available approach:

```ts
import { checkIsColorSupported } from "./detection.ts";
const isColorSupported = detectIsColorSupported();
```

# SGR (Select Graphic Rendition)

```ts
import { fgRed, reset } from "./sgr/style.ts";

console.log(`${fgRed}I'm red!${reset}`);
```

## SGR 8-bit Color Mode (256 Colors)

```ts
import { reset } from "./sgr/style.ts";
import { fgBg256 } from "./sgr/8bit.ts";

console.log(`${fgBg256(1, 12)}I'm red with blue bg!${reset}`);
// fg is 1  (Red)
// bg is 12 (Bright Blue)
// see below to understand how to pick a color
```

The 256-color mode is divided into several ranges:

### Standard Colors (0-15)

These are the basic colors similar to those in the 16-color mode.

- **0-7: Standard Colors**
  - `0`: Black
  - `1`: Red
  - `2`: Green
  - `3`: Yellow
  - `4`: Blue
  - `5`: Magenta
  - `6`: Cyan
  - `7`: White

- **8-15: High-Intensity (Bright) Versions of the Standard Colors**
  - `8`: Bright Black (Gray)
  - `9`: Bright Red
  - `10`: Bright Green
  - `11`: Bright Yellow
  - `12`: Bright Blue
  - `13`: Bright Magenta
  - `14`: Bright Cyan
  - `15`: Bright White

### 216 Colors (16-231)

These colors are arranged in a 6x6x6 RGB color cube.\
The values range from 16 to 231 and are calculated using the formula:

```
color = 16 + 36 * r + 6 * g + b
```

where `r`, `g`, and `b` are in the range 0 to 5.

- **Example:**
  - `16`: RGB(0, 0, 0)
  - `17`: RGB(0, 0, 1)
  - ...
  - `231`: RGB(5, 5, 5)

### Grayscale Colors (232-255)

These are shades of gray, ranging from dark to light.

- **Example:**
  - `232`: Gray (approx. 10% brightness)
  - `233`: Gray (approx. 15% brightness)
  - ...
  - `255`: Gray (approx. 95% brightness)
