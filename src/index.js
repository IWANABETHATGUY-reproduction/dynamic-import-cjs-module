const cjsFromESM = await import('./esm.js')
console.log(cjsFromESM)
// if (typeof cjsFromESM.default.default === 'function') {
//   text('.cjs-dynamic-dep-cjs-compiled-from-esm', 'ok')
// }
