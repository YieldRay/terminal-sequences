# Terminal Sequences

> [!WARNING]\
> WIP

What are terminal sequences? see [here](https://xtermjs.org/docs/guides/hooks/#background---what-are-terminal-sequences).

reference:

- <https://ecma-international.org/publications-and-standards/standards/ecma-48/>
- <https://www.man7.org/linux/man-pages/man4/console_codes.4.html>
- <https://xtermjs.org/docs/api/vtfeatures/>

```ts
import { SR } from "./csi.ts";

// scroll right
console.log(SR());
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
```

The 256-color mode is divided into several ranges:

1. **Standard Colors (0-15)**

   - These are the basic colors similar to those in the 16-color mode.
   - **0-7**: Standard colors
     - 0: Black
     - 1: Red
     - 2: Green
     - 3: Yellow
     - 4: Blue
     - 5: Magenta
     - 6: Cyan
     - 7: White
   - **8-15**: High-intensity (bright) versions of the standard colors
     - 8: Bright Black (Gray)
     - 9: Bright Red
     - 10: Bright Green
     - 11: Bright Yellow
     - 12: Bright Blue
     - 13: Bright Magenta
     - 14: Bright Cyan
     - 15: Bright White

2. **216 Colors (16-231)**

   - These colors are arranged in a 6x6x6 RGB color cube.
   - The values range from 16 to 231 and are calculated using the formula:
     \[
     \text{color} = 16 + 36 \times r + 6 \times g + b
     \]
     where \( r \), \( g \), and \( b \) are in the range 0 to 5.
   - Example:
     - 16: RGB(0, 0, 0)
     - 17: RGB(0, 0, 1)
     - ...
     - 231: RGB(5, 5, 5)

3. **Grayscale Colors (232-255)**
   - These are shades of gray, ranging from dark to light.
   - The values range from 232 to 255.
   - Example:
     - 232: Gray (approx. 10% brightness)
     - 233: Gray (approx. 15% brightness)
     - ...
     - 255: Gray (approx. 95% brightness)
