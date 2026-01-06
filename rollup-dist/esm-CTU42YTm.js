function _mergeNamespaces(n, m) {
	m.forEach(function (e) {
		e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
			if (k !== 'default' && !(k in n)) {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	});
	return Object.freeze(n);
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var esm$1 = {};

var hasRequiredEsm;

function requireEsm () {
	if (hasRequiredEsm) return esm$1;
	hasRequiredEsm = 1;
	Object.defineProperty(esm$1, '__esModule', { value: true });
	function foo() {
	  return 'foo'
	}
	esm$1.default = foo;
	return esm$1;
}

var esmExports = requireEsm();
var mod = /*@__PURE__*/getDefaultExportFromCjs(esmExports);

var esm = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: mod
}, [esmExports]);

export { esm as e, mod as m };
