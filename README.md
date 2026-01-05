# Dynamic Import CJS Module

This project demonstrates the behavior differences when dynamically importing a CJS module (compiled from ESM) across different bundlers and runtimes.

## Source Files

**src/index.js** - Entry point that dynamically imports `esm.js`:
```js
const cjsFromESM = await import('./esm.js')
console.log(cjsFromESM)
```

**src/esm.js** - A CJS module compiled from ESM:
```js
'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
function foo() {
  return 'foo'
}
exports.default = foo
```

## Results

### node webpack-dist/bundle.js
```
Object [Module] {}
```

### node rolldown-dist/index.js
```
{ default: [Getter] }
```

### node esbuild-dist/index.js
```
{ default: [Getter] }
```

### node src/index.js
```
[Module: null prototype] {
  __esModule: true,
  default: { default: [Function: foo] },
  'module.exports': { default: [Function: foo] }
}
```

### bun src/index.js
```
Module {
  default: [Function: foo],
}
```

## Summary

| Command | Result |
|---------|--------|
| `node webpack-dist/bundle.js` | `Object [Module] {}` |
| `node rolldown-dist/index.js` | `{ default: [Getter] }` |
| `node esbuild-dist/index.js` | `{ default: [Getter] }` |
| `node src/index.js` | `{ __esModule, default: { default: foo }, 'module.exports': ... }` |
| `bun src/index.js` | `Module { default: [Function: foo] }` |

The bundlers handle the CJS-to-ESM interop differently:
- **Webpack**: Returns an empty module object
- **Rolldown & esbuild**: Return a module with a `default` getter
- **Node.js (unbundled)**: Returns the full CJS module with `__esModule` marker and nested default
- **Bun (unbundled)**: Returns a cleaner module with direct access to `default`
