# 1. Tokens > B. Typography 🎹

Typography is the text of your app: the font sizes, weights, line heights, and so on.
It's generally good to standardize this in as few variants as possible, as with colors.

There's a difference between _semantic_ and _visual_ text content.
You might see something as a "large heading" or "primary heading" that is actually an `<h4>` or `<h5>` on the page.
Just because something is _visually_ large doesn't mean it's _semantically_.

Look at the Twitter example page.
How many unique text sizes can you find?

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
