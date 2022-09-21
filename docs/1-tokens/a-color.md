# 1. Tokens > A. Color 🌈

The core foundation of any visual design system is its set of colors.
These colors should be consistently used throughout the design.
Use as few colors as possible, deduplicating similar shades whenever possible.

Look at the Twitter example page.
How many unique colors can you find?

<details>
<summary>Spoilers 🤐</summary>

- Black: `#000000`
- White: `#ffffff`
- Grays:
  - Very light: `#f1f5f9` and `#f3f4f6`
  - Light: `#e5e7eb`
  - Medium: `#475569` and `#64748b`
  - Dark: `#1e293b`
- Logo Blue: `#1d9bf0`

</details>

## CSS Variables

It's tempting to go with CSS variable names based on the default view of the colors: `black`, `white`, `gray-light`, and so on.
But remember that many design systems are meant to convey the _intent_ of variables.
ames like `background`, `foreground`, and `faint` better represent what the colors will be used for -- especially when switching to different color modes, such as dark or high contrast.

Let's store the colors as CSS variables under the root app class.

<details>
<summary>Spoilers 🤐</summary>

```css
.nativeApp {
	display: flex;
	justify-content: center;

	background: var(--color-background);
	color: var(--color-foreground);

	--color-background: #ffffff;
	--color-foreground: #000000;

	--color-extraFaint: #f3f4f6;
	--color-faint: #e5e7eb;
	--color-medium: #64748b;
	--color-emphasized: #1e293b;

	--color-logo: #1d9bf0;
}

@media (prefers-color-scheme: dark) {
	.nativeApp {
		--color-background: #000000;
		--color-foreground: #ffffff;

		--color-extraFaint: #1e293b;
		--color-faint: #464b50; /* (taking a bit of creative liberty here) */
		--color-medium: #e5e7eb;
		--color-emphasized: #f3f4f6;
	}
}
```

</summary>

Use find-and-replace on your editor to switch hardcoded values over to the new CSS variables in the `src/0-start` folder.
