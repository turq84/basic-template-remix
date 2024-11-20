import { R as i, r as o } from './index-DJO9vBfz.js';
import { F as C } from './index-DJdX7xnk.js';
const m = { prefix: String(Math.round(Math.random() * 1e10)), current: 0 },
  v = i.createContext(m),
  w = i.createContext(!1);
let k = !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  ),
  p = new WeakMap();
function M(e = !1) {
  let t = o.useContext(v),
    n = o.useRef(null);
  if (n.current === null && !e) {
    var r, l;
    let a =
      (l = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null ||
      l === void 0 ||
      (r = l.ReactCurrentOwner) === null ||
      r === void 0
        ? void 0
        : r.current;
    if (a) {
      let u = p.get(a);
      u == null
        ? p.set(a, { id: t.current, state: a.memoizedState })
        : a.memoizedState !== u.state && ((t.current = u.id), p.delete(a));
    }
    n.current = ++t.current;
  }
  return n.current;
}
function V(e) {
  let t = o.useContext(v);
  t === m &&
    !k &&
    console.warn(
      'When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.'
    );
  let n = M(!!e),
    r = `react-aria${t.prefix}`;
  return e || `${r}-${n}`;
}
function I(e) {
  let t = i.useId(),
    [n] = o.useState(P()),
    r = n ? 'react-aria' : `react-aria${m.prefix}`;
  return e || `${r}-${t}`;
}
const j = typeof i.useId == 'function' ? I : V;
function q() {
  return !1;
}
function E() {
  return !0;
}
function N(e) {
  return () => {};
}
function P() {
  return typeof i.useSyncExternalStore == 'function'
    ? i.useSyncExternalStore(N, q, E)
    : o.useContext(w);
}
const y = typeof document < 'u' ? i.useLayoutEffect : () => {};
function b(e) {
  const t = o.useRef(null);
  return (
    y(() => {
      t.current = e;
    }, [e]),
    o.useCallback((...n) => {
      const r = t.current;
      return r == null ? void 0 : r(...n);
    }, [])
  );
}
function z(e) {
  let [t, n] = o.useState(e),
    r = o.useRef(null),
    l = b(() => {
      if (!r.current) return;
      let u = r.current.next();
      if (u.done) {
        r.current = null;
        return;
      }
      t === u.value ? l() : n(u.value);
    });
  y(() => {
    r.current && l();
  });
  let a = b((u) => {
    (r.current = u(t)), l();
  });
  return [t, a];
}
let A = !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  ),
  d = new Map();
function F(e) {
  let [t, n] = o.useState(e),
    r = o.useRef(null),
    l = j(t),
    a = o.useCallback((u) => {
      r.current = u;
    }, []);
  return (
    A &&
      (d.has(l) && !d.get(l).includes(a)
        ? d.set(l, [...d.get(l), a])
        : d.set(l, [a])),
    y(() => {
      let u = l;
      return () => {
        d.delete(u);
      };
    }, [l]),
    o.useEffect(() => {
      let u = r.current;
      u && ((r.current = null), n(u));
    }),
    l
  );
}
function H(e, t) {
  if (e === t) return e;
  let n = d.get(e);
  if (n) return n.forEach((l) => l(t)), t;
  let r = d.get(t);
  return r ? (r.forEach((l) => l(e)), e) : t;
}
function U(e = []) {
  let t = F(),
    [n, r] = z(t),
    l = o.useCallback(() => {
      r(function* () {
        yield t, yield document.getElementById(t) ? t : void 0;
      });
    }, [t, r]);
  return y(l, [t, l, ...e]), n;
}
function K(...e) {
  return (...t) => {
    for (let n of e) typeof n == 'function' && n(...t);
  };
}
function S(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var l = e.length;
      for (t = 0; t < l; t++)
        e[t] && (n = S(e[t])) && (r && (r += ' '), (r += n));
    } else for (n in e) e[n] && (r && (r += ' '), (r += n));
  return r;
}
function G() {
  for (var e, t, n = 0, r = '', l = arguments.length; n < l; n++)
    (e = arguments[n]) && (t = S(e)) && (r && (r += ' '), (r += t));
  return r;
}
function J(...e) {
  let t = { ...e[0] };
  for (let n = 1; n < e.length; n++) {
    let r = e[n];
    for (let l in r) {
      let a = t[l],
        u = r[l];
      typeof a == 'function' &&
      typeof u == 'function' &&
      l[0] === 'o' &&
      l[1] === 'n' &&
      l.charCodeAt(2) >= 65 &&
      l.charCodeAt(2) <= 90
        ? (t[l] = K(a, u))
        : (l === 'className' || l === 'UNSAFE_className') &&
            typeof a == 'string' &&
            typeof u == 'string'
          ? (t[l] = G(a, u))
          : l === 'id' && a && u
            ? (t.id = H(a, u))
            : (t[l] = u !== void 0 ? u : a);
    }
  }
  return t;
}
function Q(...e) {
  return e.length === 1 && e[0]
    ? e[0]
    : (t) => {
        for (let n of e)
          typeof n == 'function' ? n(t) : n != null && (n.current = t);
      };
}
function X(e) {
  const t = o.useRef(null);
  return o.useMemo(
    () => ({
      get current() {
        return t.current;
      },
      set current(n) {
        (t.current = n), typeof e == 'function' ? e(n) : e && (e.current = n);
      },
    }),
    [e]
  );
}
const x = Symbol('default');
function B({ values: e, children: t }) {
  for (let [n, r] of e) t = i.createElement(n.Provider, { value: r }, t);
  return t;
}
function L(e) {
  let {
    className: t,
    style: n,
    children: r,
    defaultClassName: l,
    defaultChildren: a,
    defaultStyle: u,
    values: f,
  } = e;
  return o.useMemo(() => {
    let c, $, s;
    return (
      typeof t == 'function' ? (c = t({ ...f, defaultClassName: l })) : (c = t),
      typeof n == 'function'
        ? ($ = n({ ...f, defaultStyle: u || {} }))
        : ($ = n),
      typeof r == 'function'
        ? (s = r({ ...f, defaultChildren: a }))
        : r == null
          ? (s = a)
          : (s = r),
      {
        className: c ?? l,
        style: $ || u ? { ...u, ...$ } : void 0,
        children: s ?? a,
        'data-rac': '',
      }
    );
  }, [t, n, r, l, a, u, f]);
}
function Z(e, t) {
  let n = o.useContext(e);
  if (t === null) return null;
  if (n && typeof n == 'object' && 'slots' in n && n.slots) {
    let r = new Intl.ListFormat().format(
      Object.keys(n.slots).map((a) => `"${a}"`)
    );
    if (!t && !n.slots[x])
      throw new Error(`A slot prop is required. Valid slot names are ${r}.`);
    let l = t || x;
    if (!n.slots[l])
      throw new Error(`Invalid slot "${t}". Valid slot names are ${r}.`);
    return n.slots[l];
  }
  return n;
}
function Y(e, t, n) {
  let r = Z(n, e.slot) || {},
    { ref: l, ...a } = r,
    u = X(o.useMemo(() => Q(t, l), [t, l])),
    f = J(a, e);
  return (
    'style' in a &&
      a.style &&
      'style' in e &&
      e.style &&
      (typeof a.style == 'function' || typeof e.style == 'function'
        ? (f.style = (c) => {
            let $ = typeof a.style == 'function' ? a.style(c) : a.style,
              s = { ...c.defaultStyle, ...$ },
              h =
                typeof e.style == 'function'
                  ? e.style({ ...c, defaultStyle: s })
                  : e.style;
            return { ...s, ...h };
          })
        : (f.style = { ...a.style, ...e.style })),
    [f, u]
  );
}
function D() {
  let [e, t] = o.useState(!0),
    n = o.useRef(!1),
    r = o.useCallback((l) => {
      (n.current = !0), t(!!l);
    }, []);
  return (
    y(() => {
      n.current || t(!1);
    }, []),
    [r, e]
  );
}
function T(e, t = !0) {
  let [n, r] = o.useState(!0);
  return (
    g(
      e,
      n && t,
      o.useCallback(() => r(!1), [])
    ),
    n && t
  );
}
function O(e, t) {
  let [n, r] = o.useState(!1),
    [l, a] = o.useState('idle');
  return (
    !t && e.current && l === 'idle' && ((n = !0), r(!0), a('exiting')),
    !e.current && l === 'exited' && a('idle'),
    g(
      e,
      n,
      o.useCallback(() => {
        a('exited'), r(!1);
      }, [])
    ),
    n
  );
}
function g(e, t, n) {
  let r = o.useRef(null);
  t && e.current && (r.current = window.getComputedStyle(e.current).animation),
    y(() => {
      if (t && e.current) {
        let l = window.getComputedStyle(e.current);
        if (
          l.animationName &&
          l.animationName !== 'none' &&
          l.animation !== r.current
        ) {
          let a = (f) => {
              f.target === e.current &&
                (u.removeEventListener('animationend', a),
                C.flushSync(() => {
                  n();
                }));
            },
            u = e.current;
          return (
            u.addEventListener('animationend', a),
            () => {
              u.removeEventListener('animationend', a);
            }
          );
        } else n();
      }
    }, [e, t, n]);
}
function _(e) {
  const t = /^(data-.*)$/;
  let n = {};
  for (const r in e) t.test(r) || (n[r] = e[r]);
  return n;
}
export {
  F as $,
  J as a,
  P as b,
  Y as c,
  L as d,
  Z as e,
  D as f,
  _ as g,
  B as h,
  U as i,
  K as j,
  b as k,
  y as l,
  X as m,
  Q as n,
  O as o,
  T as p,
  x as q,
};
