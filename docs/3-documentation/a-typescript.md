# 3. Documentation > A. TypeScript ⚖️

TypeScript is a language that adds "type annotations" (ways to specify what shapes things are supposed to be) to JavaScript.
TypeScript is a _superset_ of JavaScript: meaning it includes all the existing JavaScript syntax, plus more.

```shell
npm i --save-dev typescript
```

- `tsconfig.json`: The configuration file for TypeScript projects
  - `compilerOptions`: Settings for how to read code & output JavaScript
    - `esModuleInterop`: Tells TypeScript we're in a build system that plays nicely between CommonJS modules and ECMAScript modules
    - `jsx`: How we work with JSX syntax (or that we do in the first place)
      - `"preserve"`: Let the surrounding build system deal with transpilation
    - `moduleResolution`: Use the Node algorithm for resolving where `import`ed stuff comes from
    - `noEmit`: Tells TypeScript not to create `.js` files alongside sources; instead, let the surrounding build system deal with it
    - `skipLibCheck`: Don't check `node_modules/` for correctness
    - `strict`: Enable all the better, fun, optional type checks for code correctness
    - `target`: What DOM, native JavaScript, etc. APIs are available for use
  - `include`: Which files we'll look at

> Tip: <https://aka.ms/tsconfig> has reference docs for these options and all others! ✨

Optional:

```shell
npm i -g typescript
tsc -w
```

## Converting Components

To convert a component, switch its extension from `.jsx` to `.tsx`.

- To recognize `*.module.css` files, use a `declare module`
- To recognize packages that don't ship with `.d.ts` files, install an `@types/*` package
  - Tip: search on aka.ms/types
- To define a custom object shape, use an `interface`.
  - `React.ReactNode` is the type for any allowed React child: `string`, `null`, JSX elements, etc.
