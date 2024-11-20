import { r as L, R as te } from './index-DJO9vBfz.js';
import { $ as ie, l as fe } from './index-BqgWbNE6.js';
import { b as se, l as Z, c as de, d as pe } from './utils-BgHHH9V7.js';
function j(e, t = -1 / 0, o = 1 / 0) {
  return Math.min(Math.max(e, t), o);
}
function Fe(e) {
  let [t, o] = ie(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
  const n = L.useCallback(() => {
      o(!0);
    }, [o]),
    l = L.useCallback(() => {
      o(!1);
    }, [o]),
    r = L.useCallback(() => {
      o(!t);
    }, [o, t]);
  return { isOpen: t, setOpen: o, open: n, close: l, toggle: r };
}
function ue() {
  return typeof window.ResizeObserver < 'u';
}
function J(e) {
  const { ref: t, box: o, onResize: n } = e;
  L.useEffect(() => {
    let l = t == null ? void 0 : t.current;
    if (l)
      if (ue()) {
        const r = new window.ResizeObserver((c) => {
          c.length && n();
        });
        return (
          r.observe(l, { box: o }),
          () => {
            l && r.unobserve(l);
          }
        );
      } else
        return (
          window.addEventListener('resize', n, !1),
          () => {
            window.removeEventListener('resize', n, !1);
          }
        );
  }, [n, t, o]);
}
const $e = new Set([
    'Arab',
    'Syrc',
    'Samr',
    'Mand',
    'Thaa',
    'Mend',
    'Nkoo',
    'Adlm',
    'Rohg',
    'Hebr',
  ]),
  me = new Set([
    'ae',
    'ar',
    'arc',
    'bcc',
    'bqi',
    'ckb',
    'dv',
    'fa',
    'glk',
    'he',
    'ku',
    'mzn',
    'nqo',
    'pnb',
    'ps',
    'sd',
    'ug',
    'ur',
    'yi',
  ]);
function ge(e) {
  if (Intl.Locale) {
    let o = new Intl.Locale(e).maximize(),
      n = typeof o.getTextInfo == 'function' ? o.getTextInfo() : o.textInfo;
    if (n) return n.direction === 'rtl';
    if (o.script) return $e.has(o.script);
  }
  let t = e.split('-')[0];
  return me.has(t);
}
const he = Symbol.for('react-aria.i18n.locale');
function oe() {
  let e =
    (typeof window < 'u' && window[he]) ||
    (typeof navigator < 'u' &&
      (navigator.language || navigator.userLanguage)) ||
    'en-US';
  try {
    Intl.DateTimeFormat.supportedLocalesOf([e]);
  } catch {
    e = 'en-US';
  }
  return { locale: e, direction: ge(e) ? 'rtl' : 'ltr' };
}
let q = oe(),
  N = new Set();
function K() {
  q = oe();
  for (let e of N) e(q);
}
function ve() {
  let e = se(),
    [t, o] = L.useState(q);
  return (
    L.useEffect(
      () => (
        N.size === 0 && window.addEventListener('languagechange', K),
        N.add(o),
        () => {
          N.delete(o),
            N.size === 0 && window.removeEventListener('languagechange', K);
        }
      ),
      []
    ),
    e ? { locale: 'en-US', direction: 'ltr' } : t
  );
}
const be = te.createContext(null);
function we() {
  let e = ve();
  return L.useContext(be) || e;
}
const S = { top: 'top', bottom: 'top', left: 'left', right: 'left' },
  B = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' },
  xe = { top: 'left', left: 'top' },
  G = { top: 'height', left: 'width' },
  le = { width: 'totalWidth', height: 'totalHeight' },
  F = {};
let C = typeof document < 'u' && window.visualViewport;
function Q(e) {
  let t = 0,
    o = 0,
    n = 0,
    l = 0,
    r = 0,
    c = 0,
    a = {},
    u = (C == null ? void 0 : C.scale) > 1;
  if (e.tagName === 'BODY') {
    let g = document.documentElement;
    (n = g.clientWidth), (l = g.clientHeight);
    var i;
    t = (i = C == null ? void 0 : C.width) !== null && i !== void 0 ? i : n;
    var p;
    (o = (p = C == null ? void 0 : C.height) !== null && p !== void 0 ? p : l),
      (a.top = g.scrollTop || e.scrollTop),
      (a.left = g.scrollLeft || e.scrollLeft),
      C && ((r = C.offsetTop), (c = C.offsetLeft));
  } else
    ({ width: t, height: o, top: r, left: c } = O(e)),
      (a.top = e.scrollTop),
      (a.left = e.scrollLeft),
      (n = t),
      (l = o);
  return (
    fe() &&
      (e.tagName === 'BODY' || e.tagName === 'HTML') &&
      u &&
      ((a.top = 0), (a.left = 0), (r = C.pageTop), (c = C.pageLeft)),
    {
      width: t,
      height: o,
      totalWidth: n,
      totalHeight: l,
      scroll: a,
      top: r,
      left: c,
    }
  );
}
function Ee(e) {
  return {
    top: e.scrollTop,
    left: e.scrollLeft,
    width: e.scrollWidth,
    height: e.scrollHeight,
  };
}
function V(e, t, o, n, l, r, c) {
  let a = l.scroll[e],
    u = n[G[e]],
    i = n.scroll[S[e]] + r,
    p = u + n.scroll[S[e]] - r,
    g = t - a + c[e] - n[S[e]],
    b = t - a + o + c[e] - n[S[e]];
  return g < i ? i - g : b > p ? Math.max(p - b, i - g) : 0;
}
function Le(e) {
  let t = window.getComputedStyle(e);
  return {
    top: parseInt(t.marginTop, 10) || 0,
    bottom: parseInt(t.marginBottom, 10) || 0,
    left: parseInt(t.marginLeft, 10) || 0,
    right: parseInt(t.marginRight, 10) || 0,
  };
}
function W(e) {
  if (F[e]) return F[e];
  let [t, o] = e.split(' '),
    n = S[t] || 'right',
    l = xe[n];
  S[o] || (o = 'center');
  let r = G[n],
    c = G[l];
  return (
    (F[e] = {
      placement: t,
      crossPlacement: o,
      axis: n,
      crossAxis: l,
      size: r,
      crossSize: c,
    }),
    F[e]
  );
}
function X(e, t, o, n, l, r, c, a, u, i) {
  let {
      placement: p,
      crossPlacement: g,
      axis: b,
      crossAxis: f,
      size: w,
      crossSize: h,
    } = n,
    s = {};
  (s[f] = e[f]),
    g === 'center'
      ? (s[f] += (e[h] - o[h]) / 2)
      : g !== f && (s[f] += e[h] - o[h]),
    (s[f] += r);
  const R = e[f] - o[h] + u + i,
    d = e[f] + e[h] - u - i;
  if (((s[f] = j(s[f], R, d)), p === b)) {
    const E = a ? c[w] : t[le[w]];
    s[B[b]] = Math.floor(E - e[b] + l);
  } else s[b] = Math.floor(e[b] + e[w] + l);
  return s;
}
function Ce(e, t, o, n, l, r, c, a) {
  const u = n ? o.height : t[le.height];
  let i = e.top != null ? o.top + e.top : o.top + (u - e.bottom - c),
    p =
      a !== 'top'
        ? Math.max(
            0,
            t.height + t.top + t.scroll.top - i - (l.top + l.bottom + r)
          )
        : Math.max(0, i + c - (t.top + t.scroll.top) - (l.top + l.bottom + r));
  return Math.min(t.height - r * 2, p);
}
function _(e, t, o, n, l, r) {
  let { placement: c, axis: a, size: u } = r;
  return c === a
    ? Math.max(0, o[a] - e[a] - e.scroll[a] + t[a] - n[a] - n[B[a]] - l)
    : Math.max(
        0,
        e[u] + e[a] + e.scroll[a] - t[a] - o[a] - o[u] - n[a] - n[B[a]] - l
      );
}
function Re(e, t, o, n, l, r, c, a, u, i, p, g, b, f, w, h) {
  let s = W(e),
    {
      size: R,
      crossAxis: d,
      crossSize: E,
      placement: A,
      crossPlacement: T,
    } = s,
    $ = X(t, a, o, s, p, g, i, b, w, h),
    k = p,
    H = _(a, i, t, l, r + p, s);
  if (c && n[R] > H) {
    let Y = W(`${B[A]} ${T}`),
      ce = X(t, a, o, Y, p, g, i, b, w, h);
    _(a, i, t, l, r + p, Y) > H && ((s = Y), ($ = ce), (k = p));
  }
  let v = 'bottom';
  s.axis === 'top'
    ? s.placement === 'top'
      ? (v = 'top')
      : s.placement === 'bottom' && (v = 'bottom')
    : s.crossAxis === 'top' &&
      (s.crossPlacement === 'top'
        ? (v = 'bottom')
        : s.crossPlacement === 'bottom' && (v = 'top'));
  let x = V(d, $[d], o[E], a, u, r, i);
  $[d] += x;
  let P = Ce($, a, i, b, l, r, o.height, v);
  f && f < P && (P = f),
    (o.height = Math.min(o.height, P)),
    ($ = X(t, a, o, s, k, g, i, b, w, h)),
    (x = V(d, $[d], o[E], a, u, r, i)),
    ($[d] += x);
  let y = {},
    z = t[d] + 0.5 * t[E] - $[d] - l[S[d]];
  const I = w / 2 + h,
    M = S[d] === 'left' ? l.left + l.right : l.top + l.bottom,
    U = o[E] - M - w / 2 - h,
    ne = t[d] + w / 2 - ($[d] + l[S[d]]),
    re = t[d] + t[E] - w / 2 - ($[d] + l[S[d]]),
    ae = j(z, ne, re);
  return (
    (y[d] = j(ae, I, U)),
    {
      position: $,
      maxHeight: P,
      arrowOffsetLeft: y.left,
      arrowOffsetTop: y.top,
      placement: s.placement,
    }
  );
}
function Te(e) {
  let {
      placement: t,
      targetNode: o,
      overlayNode: n,
      scrollNode: l,
      padding: r,
      shouldFlip: c,
      boundaryElement: a,
      offset: u,
      crossOffset: i,
      maxHeight: p,
      arrowSize: g = 0,
      arrowBoundaryOffset: b = 0,
    } = e,
    f = n instanceof HTMLElement ? Pe(n) : document.documentElement,
    w = f === document.documentElement;
  const h = window.getComputedStyle(f).position;
  let s = !!h && h !== 'static',
    R = w ? O(o) : D(o, f);
  if (!w) {
    let { marginTop: H, marginLeft: v } = window.getComputedStyle(o);
    (R.top += parseInt(H, 10) || 0), (R.left += parseInt(v, 10) || 0);
  }
  let d = O(n),
    E = Le(n);
  (d.width += E.left + E.right), (d.height += E.top + E.bottom);
  let A = Ee(l),
    T = Q(a),
    $ = Q(f),
    k = a.tagName === 'BODY' ? O(f) : D(f, a);
  return (
    f.tagName === 'HTML' &&
      a.tagName === 'BODY' &&
      (($.scroll.top = 0), ($.scroll.left = 0)),
    Re(t, R, d, A, E, r, c, T, $, k, u, i, s, p, g, b)
  );
}
function O(e) {
  let { top: t, left: o, width: n, height: l } = e.getBoundingClientRect(),
    {
      scrollTop: r,
      scrollLeft: c,
      clientTop: a,
      clientLeft: u,
    } = document.documentElement;
  return { top: t + r - a, left: o + c - u, width: n, height: l };
}
function D(e, t) {
  let o = window.getComputedStyle(e),
    n;
  if (o.position === 'fixed') {
    let { top: l, left: r, width: c, height: a } = e.getBoundingClientRect();
    n = { top: l, left: r, width: c, height: a };
  } else {
    n = O(e);
    let l = O(t),
      r = window.getComputedStyle(t);
    (l.top += (parseInt(r.borderTopWidth, 10) || 0) - t.scrollTop),
      (l.left += (parseInt(r.borderLeftWidth, 10) || 0) - t.scrollLeft),
      (n.top -= l.top),
      (n.left -= l.left);
  }
  return (
    (n.top -= parseInt(o.marginTop, 10) || 0),
    (n.left -= parseInt(o.marginLeft, 10) || 0),
    n
  );
}
function Pe(e) {
  let t = e.offsetParent;
  if (
    (t &&
      t === document.body &&
      window.getComputedStyle(t).position === 'static' &&
      !ee(t) &&
      (t = document.documentElement),
    t == null)
  )
    for (t = e.parentElement; t && !ee(t); ) t = t.parentElement;
  return t || document.documentElement;
}
function ee(e) {
  let t = window.getComputedStyle(e);
  return (
    t.transform !== 'none' ||
    /transform|perspective/.test(t.willChange) ||
    t.filter !== 'none' ||
    t.contain === 'paint' ||
    ('backdropFilter' in t && t.backdropFilter !== 'none') ||
    ('WebkitBackdropFilter' in t && t.WebkitBackdropFilter !== 'none')
  );
}
const Se = new WeakMap();
function Ie(e) {
  let { triggerRef: t, isOpen: o, onClose: n } = e;
  L.useEffect(() => {
    if (!o || n === null) return;
    let l = (r) => {
      let c = r.target;
      if (
        !t.current ||
        (c instanceof Node && !c.contains(t.current)) ||
        r.target instanceof HTMLInputElement ||
        r.target instanceof HTMLTextAreaElement
      )
        return;
      let a = n || Se.get(t.current);
      a && a();
    };
    return (
      window.addEventListener('scroll', l, !0),
      () => {
        window.removeEventListener('scroll', l, !0);
      }
    );
  }, [o, n, t]);
}
let m = typeof document < 'u' && window.visualViewport;
function Be(e) {
  let { direction: t } = we(),
    {
      arrowSize: o = 0,
      targetRef: n,
      overlayRef: l,
      scrollRef: r = l,
      placement: c = 'bottom',
      containerPadding: a = 12,
      shouldFlip: u = !0,
      boundaryElement: i = typeof document < 'u' ? document.body : null,
      offset: p = 0,
      crossOffset: g = 0,
      shouldUpdatePosition: b = !0,
      isOpen: f = !0,
      onClose: w,
      maxHeight: h,
      arrowBoundaryOffset: s = 0,
    } = e,
    [R, d] = L.useState({
      position: {},
      arrowOffsetLeft: void 0,
      arrowOffsetTop: void 0,
      maxHeight: void 0,
      placement: void 0,
    }),
    E = [b, c, l.current, n.current, r.current, a, u, i, p, g, f, t, h, s, o],
    A = L.useRef(m == null ? void 0 : m.scale);
  L.useEffect(() => {
    f && (A.current = m == null ? void 0 : m.scale);
  }, [f]);
  let T = L.useCallback(() => {
    if (
      b === !1 ||
      !f ||
      !l.current ||
      !n.current ||
      !i ||
      (m == null ? void 0 : m.scale) !== A.current
    )
      return;
    let v = null;
    if (r.current && r.current.contains(document.activeElement)) {
      let I = document.activeElement.getBoundingClientRect(),
        M = r.current.getBoundingClientRect();
      (v = { type: 'top', offset: I.top - M.top }),
        v.offset > M.height / 2 &&
          ((v.type = 'bottom'), (v.offset = I.bottom - M.bottom));
    }
    let x = l.current;
    if (!h && l.current) {
      var P;
      (x.style.top = '0px'), (x.style.bottom = '');
      var y;
      x.style.maxHeight =
        ((y =
          (P = window.visualViewport) === null || P === void 0
            ? void 0
            : P.height) !== null && y !== void 0
          ? y
          : window.innerHeight) + 'px';
    }
    let z = Te({
      placement: ye(c, t),
      overlayNode: l.current,
      targetNode: n.current,
      scrollNode: r.current || l.current,
      padding: a,
      shouldFlip: u,
      boundaryElement: i,
      offset: p,
      crossOffset: g,
      maxHeight: h,
      arrowSize: o,
      arrowBoundaryOffset: s,
    });
    if (
      ((x.style.top = ''),
      (x.style.bottom = ''),
      (x.style.left = ''),
      (x.style.right = ''),
      Object.keys(z.position).forEach(
        (I) => (x.style[I] = z.position[I] + 'px')
      ),
      (x.style.maxHeight = z.maxHeight != null ? z.maxHeight + 'px' : void 0),
      v)
    ) {
      let I = document.activeElement.getBoundingClientRect(),
        M = r.current.getBoundingClientRect(),
        U = I[v.type] - M[v.type];
      r.current.scrollTop += U - v.offset;
    }
    d(z);
  }, E);
  Z(T, E), He(T), J({ ref: l, onResize: T }), J({ ref: n, onResize: T });
  let $ = L.useRef(!1);
  Z(() => {
    let v,
      x = () => {
        ($.current = !0),
          clearTimeout(v),
          (v = setTimeout(() => {
            $.current = !1;
          }, 500)),
          T();
      },
      P = () => {
        $.current && x();
      };
    return (
      m == null || m.addEventListener('resize', x),
      m == null || m.addEventListener('scroll', P),
      () => {
        m == null || m.removeEventListener('resize', x),
          m == null || m.removeEventListener('scroll', P);
      }
    );
  }, [T]);
  let k = L.useCallback(() => {
    $.current || w();
  }, [w, $]);
  Ie({ triggerRef: n, isOpen: f, onClose: w && k });
  var H;
  return {
    overlayProps: {
      style: {
        position: 'absolute',
        zIndex: 1e5,
        ...R.position,
        maxHeight: (H = R.maxHeight) !== null && H !== void 0 ? H : '100vh',
      },
    },
    placement: R.placement,
    arrowProps: {
      'aria-hidden': 'true',
      role: 'presentation',
      style: { left: R.arrowOffsetLeft, top: R.arrowOffsetTop },
    },
    updatePosition: T,
  };
}
function He(e) {
  Z(
    () => (
      window.addEventListener('resize', e, !1),
      () => {
        window.removeEventListener('resize', e, !1);
      }
    ),
    [e]
  );
}
function ye(e, t) {
  return t === 'rtl'
    ? e.replace('start', 'right').replace('end', 'left')
    : e.replace('start', 'left').replace('end', 'right');
}
const ze = L.createContext({ placement: 'bottom' });
function Me(e, t) {
  [e, t] = de(e, t, ze);
  let o = e.placement,
    n = {
      position: 'absolute',
      [o]: '100%',
      transform:
        o === 'top' || o === 'bottom' ? 'translateX(-50%)' : 'translateY(-50%)',
    },
    l = pe({
      ...e,
      defaultClassName: 'react-aria-OverlayArrow',
      values: { placement: o },
    });
  return (
    l.style &&
      Object.keys(l.style).forEach(
        (r) => l.style[r] === void 0 && delete l.style[r]
      ),
    te.createElement('div', {
      ...e,
      ...l,
      style: { ...n, ...l.style },
      ref: t,
      'data-placement': o,
    })
  );
}
const Ue = L.forwardRef(Me);
export { Ue as $, Fe as a, Be as b, ze as c, we as d, J as e, Se as f };
