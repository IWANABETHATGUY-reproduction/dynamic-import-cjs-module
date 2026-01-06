import { m as mod } from './esm-CTU42YTm.js';

const cjsFromESM = await import('./esm-CTU42YTm.js').then(function (n) { return n.e; });
// import('./esm.js').then(mod => {
//   console.log(mod)
// })
//
console.log(`mod: `, mod);
console.log(cjsFromESM);
// if (typeof cjsFromESM.default.default === 'function') {
//   text('.cjs-dynamic-dep-cjs-compiled-from-esm', 'ok')
// }
