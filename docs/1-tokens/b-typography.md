# 1. Tokens > B. Typography 🎹

TODO EXPLAIN TYPOGRAPHY ;)

TODO MENTION DIFF BTW SEMANTIC AND VISUAL

Look at the Twitter example page.
How many unique colors can you find?

<details>
<summary>Spoilers 🤐</summary>

- Font size:
  - Small: `0.75rem`
  - Medium: `0.875rem`
  - Large: `1.125rem`
  - Extra large: `1.25rem`
- Font weight:
  - Bold: `bold`
  - Extrabold: `800`
- Line height:
  - Small: `1rem`
  - Medium: `1.25rem`
  - Large: `1.75rem`

</details>

## CSS Variables

Let's store the colors as CSS variables under the root app class.

<details>
<summary>Spoilers 🤐</summary>

```css
.nativeApp {
	/* ... */

	--font-size-small: 0.75rem;
	--font-size-medium: 0.875rem;
	--font-size-large: 1.125rem;
	--font-size-extra-large: 1.25rem;

	--font-weight-bold: bold;
	--font-weight-extra-bold: 800;

	--line-height-small: 1rem;
	--line-height-medium: 1.25rem;
	--line-height-large: 1.75rem;
}
```

</summary>

Use find-and-replace on your editor to switch hardcoded values over to the new CSS variables in the `src/0-start` folder.

> Aside: in theory, we could also make a `<Text>` component.
> Doing so is a good idea but out of scope for what we can cover in this workshop.
