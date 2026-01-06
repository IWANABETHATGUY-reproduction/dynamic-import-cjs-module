import mod from './esm.js'
const cjsFromESM = await import('./esm.js')
// import('./esm.js').then(mod => {
//   console.log(mod)
// })
//
console.log(`mod: `, mod)
console.log(cjsFromESM)
// if (typeof cjsFromESM.default.default === 'function') {
//   text('.cjs-dynamic-dep-cjs-compiled-from-esm', 'ok')
// }
