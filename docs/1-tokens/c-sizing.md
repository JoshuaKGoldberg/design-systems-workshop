# 1. Tokens > C. Sizing 📏

TODO SIZING ;)

TODO MENTION THIS ISN"T ALWAYS AS CUT AND DRY

Look at the Twitter example page.
What are the element sizes, margins, paddings, and radiuses that are used consistently?

<details>
<summary>Spoilers 🤐</summary>

- Border radiuses:
  - Medium: `0.75rem`
  - Full: `100%` and `9999px`
- Circle images:
  - Small: `1.5rem`
  - Medium: `3rem`
  - Large: `10rem`
- Margins/paddings:
  - Small: `0.5rem`
  - Medium: `1rem`
  - Large: `1.5rem`

</details>

## Sizing Naming

Let's store the sizes as CSS variables under the root app class.

<details>
<summary>Spoilers 🤐</summary>

```css
.nativeApp {
	/* ... */

	--border-radius-medium: 0.75rem;
	--border-radius-full: 9999px;

	--circle-size-small: 1.5rem;
	--circle-size-medium: 3rem;
	--circle-size-large: 10rem;

	--spacing-small: 0.5rem;
	--spacing-medium: 1rem;
	--spacing-large: 1.5rem;
}
```

</summary>

Use find-and-replace on your editor to switch hardcoded values over to the new CSS variables in the `src/0-start` folder.

> For `--spacing-*` values, be sure to remove the `src/native/1-tokens/c-sizing/index.module.css`'s other CSS variables from the find-and-replace.
