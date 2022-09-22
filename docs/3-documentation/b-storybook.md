# 3. Documentation > A. TypeScript ⚖️

Storybook is a tool that generates an interactive docs website for your components.
It is highly configurable and can use plugins to read in your source code and auto-generate much of those docs sites for you.

```shell
npm run storybook
```

> Some npm packages don't yet support Node 18.
> Use Node 16 for this, such as with `nvm use` / `nvm use 16`.
>
> If you get `Error: You installed esbuild on another platform ...`, `rm -rf node_modules` and `npm install`.

I previously ran this command...

```shell
npx sb init --builder @storybook/builder-vite --type react
```

...and then applied some customizations.

- Set up `preview.cjs` as `preview.jsx` and used a new `<Root>` component as the app to clear styles
- Adding tailwind styles in the `preview.jsx` as well`

```shell
npm run storybook
```
