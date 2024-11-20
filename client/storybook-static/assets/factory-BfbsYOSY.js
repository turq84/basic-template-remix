import { r as c } from './index-DJO9vBfz.js';
import { b as H, s as J, n as f, a as S, c as F } from './index-DdgtEVhA.js';
var L = 'css',
  W = L.split(','),
  $ = '',
  q = $.split(',').concat(W),
  I = new Map(q.map((s) => [s, !0])),
  Q = /&|@/,
  b = (s) => I.has(s) || s.startsWith('--') || Q.test(s);
const U = (s, r) => !r.includes(s) && !b(s),
  X = (s, r) =>
    s.__shouldForwardProps__ && r
      ? (e) => s.__shouldForwardProps__(e) && r(e)
      : r,
  Y = (s, r) => {
    var t;
    if (s && !r) return s;
    if (!s && r) return r;
    if ((s.__cva__ && r.__cva__) || (s.__recipe__ && r.__recipe__))
      return s.merge(r);
    const e = new TypeError(
      'Cannot merge cva with recipe. Please use either cva or recipe.'
    );
    throw (
      ((t = TypeError.captureStackTrace) == null || t.call(TypeError, e), e)
    );
  },
  Z = (s) =>
    typeof s == 'string'
      ? s
      : (s == null ? void 0 : s.displayName) ||
        (s == null ? void 0 : s.name) ||
        'Component';
function i(s, r = {}, e = {}) {
  const t = r.__cva__ || r.__recipe__ ? r : H(r),
    x = e.shouldForwardProp || U,
    y = (P) => x(P, t.variantKeys),
    v = Object.assign(
      e.dataAttr && r.__name__ ? { 'data-recipe': r.__name__ } : {},
      e.defaultProps
    ),
    a = Y(s.__cva__, t),
    E = X(s, y),
    n = s.__base__ || s,
    _ = c.forwardRef(function (N, T) {
      const { as: g = n, children: j, ...m } = N,
        o = c.useMemo(() => Object.assign({}, v, m), [m]),
        [k, G, l, h, K] = c.useMemo(
          () => J(o, f.keys, E, a.variantKeys, b),
          [o]
        );
      function R() {
        var w;
        const { css: p, ...u } = h,
          d = (w = a.__getCompoundVariantCss__) == null ? void 0 : w.call(a, l);
        return S(a(l, !1), F(d, u, p), o.className);
      }
      function V() {
        const { css: p, ...u } = h,
          d = a.raw(l);
        return S(F(d, u, p), o.className);
      }
      const z = r.__recipe__ ? R : V;
      return c.createElement(
        g,
        { ref: T, ...G, ...K, ...f(k), className: z() },
        o.children ?? j
      );
    }),
    M = Z(n);
  return (
    (_.displayName = `styled.${M}`),
    (_.__cva__ = a),
    (_.__base__ = n),
    (_.__shouldForwardProps__ = y),
    _
  );
}
function D() {
  const s = new Map();
  return new Proxy(i, {
    apply(r, e, t) {
      return i(...t);
    },
    get(r, e) {
      return s.has(e) || s.set(e, i(e)), s.get(e);
    },
  });
}
const B = D();
export { B as s };
