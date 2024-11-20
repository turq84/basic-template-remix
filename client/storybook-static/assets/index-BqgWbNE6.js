import { r as c, R as B } from './index-DJO9vBfz.js';
import { l as G, k as re, b as ne, a as O, m as oe } from './utils-BgHHH9V7.js';
import { j as V } from './jsx-runtime-CkxqCPlQ.js';
import { t as ae } from './index-DdgtEVhA.js';
function Ke(e, r, t) {
  let [n, o] = c.useState(e || r),
    s = c.useRef(e !== void 0),
    a = e !== void 0;
  c.useEffect(() => {
    let d = s.current;
    d !== a &&
      console.warn(
        `WARN: A component changed from ${d ? 'controlled' : 'uncontrolled'} to ${a ? 'controlled' : 'uncontrolled'}.`
      ),
      (s.current = a);
  }, [a]);
  let i = a ? e : n,
    l = c.useCallback(
      (d, ...v) => {
        let m = (f, ...u) => {
          t && (Object.is(i, f) || t(f, ...u)), a || (i = f);
        };
        typeof d == 'function'
          ? (console.warn(
              'We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320'
            ),
            o((u, ...g) => {
              let h = d(a ? i : u, ...g);
              return m(h, ...v), a ? u : h;
            }))
          : (a || o(d), m(d, ...v));
      },
      [a, i, t]
    );
  return [i, l];
}
const T = (e) => {
    var r;
    return (r = e == null ? void 0 : e.ownerDocument) !== null && r !== void 0
      ? r
      : document;
  },
  E = (e) =>
    e && 'window' in e && e.window === e ? e : T(e).defaultView || window,
  ie = new Set(['id']),
  se = new Set([
    'aria-label',
    'aria-labelledby',
    'aria-describedby',
    'aria-details',
  ]),
  ue = new Set([
    'href',
    'hrefLang',
    'target',
    'rel',
    'download',
    'ping',
    'referrerPolicy',
  ]),
  ce = /^(data-.*)$/;
function Oe(e, r = {}) {
  let { labelable: t, isLink: n, propNames: o } = r,
    s = {};
  for (const a in e)
    Object.prototype.hasOwnProperty.call(e, a) &&
      (ie.has(a) ||
        (t && se.has(a)) ||
        (n && ue.has(a)) ||
        (o != null && o.has(a)) ||
        ce.test(a)) &&
      (s[a] = e[a]);
  return s;
}
function j(e) {
  if (de()) e.focus({ preventScroll: !0 });
  else {
    let r = le(e);
    e.focus(), fe(r);
  }
}
let x = null;
function de() {
  if (x == null) {
    x = !1;
    try {
      document.createElement('div').focus({
        get preventScroll() {
          return (x = !0), !0;
        },
      });
    } catch {}
  }
  return x;
}
function le(e) {
  let r = e.parentNode,
    t = [],
    n = document.scrollingElement || document.documentElement;
  for (; r instanceof HTMLElement && r !== n; )
    (r.offsetHeight < r.scrollHeight || r.offsetWidth < r.scrollWidth) &&
      t.push({ element: r, scrollTop: r.scrollTop, scrollLeft: r.scrollLeft }),
      (r = r.parentNode);
  return (
    n instanceof HTMLElement &&
      t.push({ element: n, scrollTop: n.scrollTop, scrollLeft: n.scrollLeft }),
    t
  );
}
function fe(e) {
  for (let { element: r, scrollTop: t, scrollLeft: n } of e)
    (r.scrollTop = t), (r.scrollLeft = n);
}
function H(e) {
  var r;
  return typeof window > 'u' || window.navigator == null
    ? !1
    : ((r = window.navigator.userAgentData) === null || r === void 0
        ? void 0
        : r.brands.some((t) => e.test(t.brand))) ||
        e.test(window.navigator.userAgent);
}
function A(e) {
  var r;
  return typeof window < 'u' && window.navigator != null
    ? e.test(
        ((r = window.navigator.userAgentData) === null || r === void 0
          ? void 0
          : r.platform) || window.navigator.platform
      )
    : !1;
}
function p(e) {
  let r = null;
  return () => (r == null && (r = e()), r);
}
const K = p(function () {
    return A(/^Mac/i);
  }),
  be = p(function () {
    return A(/^iPhone/i);
  }),
  $e = p(function () {
    return A(/^iPad/i) || (K() && navigator.maxTouchPoints > 1);
  }),
  pe = p(function () {
    return be() || $e();
  }),
  Ve = p(function () {
    return K() || pe();
  }),
  je = p(function () {
    return H(/AppleWebKit/i) && !ve();
  }),
  ve = p(function () {
    return H(/Chrome/i);
  }),
  q = p(function () {
    return H(/Android/i);
  }),
  Ne = p(function () {
    return H(/Firefox/i);
  });
let y = new Map(),
  D = new Set();
function N() {
  if (typeof window > 'u') return;
  function e(n) {
    return 'propertyName' in n;
  }
  let r = (n) => {
      if (!e(n) || !n.target) return;
      let o = y.get(n.target);
      o ||
        ((o = new Set()),
        y.set(n.target, o),
        n.target.addEventListener('transitioncancel', t, { once: !0 })),
        o.add(n.propertyName);
    },
    t = (n) => {
      if (!e(n) || !n.target) return;
      let o = y.get(n.target);
      if (
        o &&
        (o.delete(n.propertyName),
        o.size === 0 &&
          (n.target.removeEventListener('transitioncancel', t),
          y.delete(n.target)),
        y.size === 0)
      ) {
        for (let s of D) s();
        D.clear();
      }
    };
  document.body.addEventListener('transitionrun', r),
    document.body.addEventListener('transitionend', t);
}
typeof document < 'u' &&
  (document.readyState !== 'loading'
    ? N()
    : document.addEventListener('DOMContentLoaded', N));
function me(e) {
  requestAnimationFrame(() => {
    y.size === 0 ? e() : D.add(e);
  });
}
function ge(e, r) {
  G(() => {
    if (e && e.ref && r)
      return (
        (e.ref.current = r.current),
        () => {
          e.ref && (e.ref.current = null);
        }
      );
  });
}
function he(e) {
  return e.mozInputSource === 0 && e.isTrusted
    ? !0
    : q() && e.pointerType
      ? e.type === 'click' && e.buttons === 1
      : e.detail === 0 && !e.pointerType;
}
function Re(e) {
  return (
    (!q() && e.width === 0 && e.height === 0) ||
    (e.width === 1 &&
      e.height === 1 &&
      e.pressure === 0 &&
      e.detail === 0 &&
      e.pointerType === 'mouse')
  );
}
class Ee {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    (this.defaultPrevented = !0), this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation(), (this.isPropagationStopped = () => !0);
  }
  isPropagationStopped() {
    return !1;
  }
  persist() {}
  constructor(r, t) {
    (this.nativeEvent = t),
      (this.target = t.target),
      (this.currentTarget = t.currentTarget),
      (this.relatedTarget = t.relatedTarget),
      (this.bubbles = t.bubbles),
      (this.cancelable = t.cancelable),
      (this.defaultPrevented = t.defaultPrevented),
      (this.eventPhase = t.eventPhase),
      (this.isTrusted = t.isTrusted),
      (this.timeStamp = t.timeStamp),
      (this.type = r);
  }
}
function z(e) {
  let r = c.useRef({ isFocused: !1, observer: null });
  G(() => {
    const n = r.current;
    return () => {
      n.observer && (n.observer.disconnect(), (n.observer = null));
    };
  }, []);
  let t = re((n) => {
    e == null || e(n);
  });
  return c.useCallback(
    (n) => {
      if (
        n.target instanceof HTMLButtonElement ||
        n.target instanceof HTMLInputElement ||
        n.target instanceof HTMLTextAreaElement ||
        n.target instanceof HTMLSelectElement
      ) {
        r.current.isFocused = !0;
        let o = n.target,
          s = (a) => {
            (r.current.isFocused = !1),
              o.disabled && t(new Ee('blur', a)),
              r.current.observer &&
                (r.current.observer.disconnect(), (r.current.observer = null));
          };
        o.addEventListener('focusout', s, { once: !0 }),
          (r.current.observer = new MutationObserver(() => {
            if (r.current.isFocused && o.disabled) {
              var a;
              (a = r.current.observer) === null ||
                a === void 0 ||
                a.disconnect();
              let i =
                o === document.activeElement ? null : document.activeElement;
              o.dispatchEvent(new FocusEvent('blur', { relatedTarget: i })),
                o.dispatchEvent(
                  new FocusEvent('focusout', { bubbles: !0, relatedTarget: i })
                );
            }
          })),
          r.current.observer.observe(o, {
            attributes: !0,
            attributeFilter: ['disabled'],
          });
      }
    },
    [t]
  );
}
function U(e) {
  let { isDisabled: r, onFocus: t, onBlur: n, onFocusChange: o } = e;
  const s = c.useCallback(
      (l) => {
        if (l.target === l.currentTarget) return n && n(l), o && o(!1), !0;
      },
      [n, o]
    ),
    a = z(s),
    i = c.useCallback(
      (l) => {
        const d = T(l.target);
        l.target === l.currentTarget &&
          d.activeElement === l.target &&
          (t && t(l), o && o(!0), a(l));
      },
      [o, t, a]
    );
  return {
    focusProps: {
      onFocus: !r && (t || o || n) ? i : void 0,
      onBlur: !r && (n || o) ? s : void 0,
    },
  };
}
let $ = null,
  P = new Set(),
  L = new Map(),
  w = !1,
  I = !1;
const we = { Tab: !0, Escape: !0 };
function k(e, r) {
  for (let t of P) t(e, r);
}
function ye(e) {
  return !(
    e.metaKey ||
    (!K() && e.altKey) ||
    e.ctrlKey ||
    e.key === 'Control' ||
    e.key === 'Shift' ||
    e.key === 'Meta'
  );
}
function F(e) {
  (w = !0), ye(e) && (($ = 'keyboard'), k('keyboard', e));
}
function b(e) {
  ($ = 'pointer'),
    (e.type === 'mousedown' || e.type === 'pointerdown') &&
      ((w = !0), k('pointer', e));
}
function Y(e) {
  he(e) && ((w = !0), ($ = 'virtual'));
}
function J(e) {
  e.target === window ||
    e.target === document ||
    (!w && !I && (($ = 'virtual'), k('virtual', e)), (w = !1), (I = !1));
}
function Q() {
  (w = !1), (I = !0);
}
function S(e) {
  if (typeof window > 'u' || L.get(E(e))) return;
  const r = E(e),
    t = T(e);
  let n = r.HTMLElement.prototype.focus;
  (r.HTMLElement.prototype.focus = function () {
    (w = !0), n.apply(this, arguments);
  }),
    t.addEventListener('keydown', F, !0),
    t.addEventListener('keyup', F, !0),
    t.addEventListener('click', Y, !0),
    r.addEventListener('focus', J, !0),
    r.addEventListener('blur', Q, !1),
    typeof PointerEvent < 'u'
      ? (t.addEventListener('pointerdown', b, !0),
        t.addEventListener('pointermove', b, !0),
        t.addEventListener('pointerup', b, !0))
      : (t.addEventListener('mousedown', b, !0),
        t.addEventListener('mousemove', b, !0),
        t.addEventListener('mouseup', b, !0)),
    r.addEventListener(
      'beforeunload',
      () => {
        X(e);
      },
      { once: !0 }
    ),
    L.set(r, { focus: n });
}
const X = (e, r) => {
  const t = E(e),
    n = T(e);
  r && n.removeEventListener('DOMContentLoaded', r),
    L.has(t) &&
      ((t.HTMLElement.prototype.focus = L.get(t).focus),
      n.removeEventListener('keydown', F, !0),
      n.removeEventListener('keyup', F, !0),
      n.removeEventListener('click', Y, !0),
      t.removeEventListener('focus', J, !0),
      t.removeEventListener('blur', Q, !1),
      typeof PointerEvent < 'u'
        ? (n.removeEventListener('pointerdown', b, !0),
          n.removeEventListener('pointermove', b, !0),
          n.removeEventListener('pointerup', b, !0))
        : (n.removeEventListener('mousedown', b, !0),
          n.removeEventListener('mousemove', b, !0),
          n.removeEventListener('mouseup', b, !0)),
      L.delete(t));
};
function Te(e) {
  const r = T(e);
  let t;
  return (
    r.readyState !== 'loading'
      ? S(e)
      : ((t = () => {
          S(e);
        }),
        r.addEventListener('DOMContentLoaded', t)),
    () => X(e, t)
  );
}
typeof document < 'u' && Te();
function Z() {
  return $ !== 'pointer';
}
function Le() {
  return $;
}
function _e(e) {
  ($ = e), k(e, null);
}
function Ge() {
  S();
  let [e, r] = c.useState($);
  return (
    c.useEffect(() => {
      let t = () => {
        r($);
      };
      return (
        P.add(t),
        () => {
          P.delete(t);
        }
      );
    }, []),
    ne() ? null : e
  );
}
const Pe = new Set([
  'checkbox',
  'radio',
  'range',
  'color',
  'file',
  'image',
  'button',
  'submit',
  'reset',
]);
function xe(e, r, t) {
  var n;
  const o =
      typeof window < 'u'
        ? E(t == null ? void 0 : t.target).HTMLInputElement
        : HTMLInputElement,
    s =
      typeof window < 'u'
        ? E(t == null ? void 0 : t.target).HTMLTextAreaElement
        : HTMLTextAreaElement,
    a =
      typeof window < 'u'
        ? E(t == null ? void 0 : t.target).HTMLElement
        : HTMLElement,
    i =
      typeof window < 'u'
        ? E(t == null ? void 0 : t.target).KeyboardEvent
        : KeyboardEvent;
  return (
    (e =
      e ||
      ((t == null ? void 0 : t.target) instanceof o &&
        !Pe.has(
          t == null || (n = t.target) === null || n === void 0 ? void 0 : n.type
        )) ||
      (t == null ? void 0 : t.target) instanceof s ||
      ((t == null ? void 0 : t.target) instanceof a &&
        (t == null ? void 0 : t.target.isContentEditable))),
    !(e && r === 'keyboard' && t instanceof i && !we[t.key])
  );
}
function Fe(e, r, t) {
  S(),
    c.useEffect(() => {
      let n = (o, s) => {
        xe(!!(t != null && t.isTextInput), o, s) && e(Z());
      };
      return (
        P.add(n),
        () => {
          P.delete(n);
        }
      );
    }, r);
}
function Se(e) {
  let {
      isDisabled: r,
      onBlurWithin: t,
      onFocusWithin: n,
      onFocusWithinChange: o,
    } = e,
    s = c.useRef({ isFocusWithin: !1 }),
    a = c.useCallback(
      (d) => {
        s.current.isFocusWithin &&
          !d.currentTarget.contains(d.relatedTarget) &&
          ((s.current.isFocusWithin = !1), t && t(d), o && o(!1));
      },
      [t, o, s]
    ),
    i = z(a),
    l = c.useCallback(
      (d) => {
        !s.current.isFocusWithin &&
          document.activeElement === d.target &&
          (n && n(d), o && o(!0), (s.current.isFocusWithin = !0), i(d));
      },
      [n, o, i]
    );
  return r
    ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
    : { focusWithinProps: { onFocus: l, onBlur: a } };
}
let C = !1,
  M = 0;
function W() {
  (C = !0),
    setTimeout(() => {
      C = !1;
    }, 50);
}
function R(e) {
  e.pointerType === 'touch' && W();
}
function Ce() {
  if (!(typeof document > 'u'))
    return (
      typeof PointerEvent < 'u'
        ? document.addEventListener('pointerup', R)
        : document.addEventListener('touchend', W),
      M++,
      () => {
        M--,
          !(M > 0) &&
            (typeof PointerEvent < 'u'
              ? document.removeEventListener('pointerup', R)
              : document.removeEventListener('touchend', W));
      }
    );
}
function qe(e) {
  let { onHoverStart: r, onHoverChange: t, onHoverEnd: n, isDisabled: o } = e,
    [s, a] = c.useState(!1),
    i = c.useRef({
      isHovered: !1,
      ignoreEmulatedMouseEvents: !1,
      pointerType: '',
      target: null,
    }).current;
  c.useEffect(Ce, []);
  let { hoverProps: l, triggerHoverEnd: d } = c.useMemo(() => {
    let v = (u, g) => {
        if (
          ((i.pointerType = g),
          o ||
            g === 'touch' ||
            i.isHovered ||
            !u.currentTarget.contains(u.target))
        )
          return;
        i.isHovered = !0;
        let h = u.currentTarget;
        (i.target = h),
          r && r({ type: 'hoverstart', target: h, pointerType: g }),
          t && t(!0),
          a(!0);
      },
      m = (u, g) => {
        if (
          ((i.pointerType = ''),
          (i.target = null),
          g === 'touch' || !i.isHovered)
        )
          return;
        i.isHovered = !1;
        let h = u.currentTarget;
        n && n({ type: 'hoverend', target: h, pointerType: g }),
          t && t(!1),
          a(!1);
      },
      f = {};
    return (
      typeof PointerEvent < 'u'
        ? ((f.onPointerEnter = (u) => {
            (C && u.pointerType === 'mouse') || v(u, u.pointerType);
          }),
          (f.onPointerLeave = (u) => {
            !o && u.currentTarget.contains(u.target) && m(u, u.pointerType);
          }))
        : ((f.onTouchStart = () => {
            i.ignoreEmulatedMouseEvents = !0;
          }),
          (f.onMouseEnter = (u) => {
            !i.ignoreEmulatedMouseEvents && !C && v(u, 'mouse'),
              (i.ignoreEmulatedMouseEvents = !1);
          }),
          (f.onMouseLeave = (u) => {
            !o && u.currentTarget.contains(u.target) && m(u, 'mouse');
          })),
      { hoverProps: f, triggerHoverEnd: m }
    );
  }, [r, t, n, o, i]);
  return (
    c.useEffect(() => {
      o && d({ currentTarget: i.target }, i.pointerType);
    }, [o]),
    { hoverProps: l, isHovered: s }
  );
}
function _(e) {
  if (!e) return;
  let r = !0;
  return (t) => {
    let n = {
      ...t,
      preventDefault() {
        t.preventDefault();
      },
      isDefaultPrevented() {
        return t.isDefaultPrevented();
      },
      stopPropagation() {
        console.error(
          'stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.'
        );
      },
      continuePropagation() {
        r = !1;
      },
    };
    e(n), r && t.stopPropagation();
  };
}
function He(e) {
  return {
    keyboardProps: e.isDisabled
      ? {}
      : { onKeyDown: _(e.onKeyDown), onKeyUp: _(e.onKeyUp) },
  };
}
function ke(e) {
  const r = T(e);
  if (Le() === 'virtual') {
    let t = r.activeElement;
    me(() => {
      r.activeElement === t && e.isConnected && j(e);
    });
  } else j(e);
}
function ze(e = {}) {
  let { autoFocus: r = !1, isTextInput: t, within: n } = e,
    o = c.useRef({ isFocused: !1, isFocusVisible: r || Z() }),
    [s, a] = c.useState(!1),
    [i, l] = c.useState(() => o.current.isFocused && o.current.isFocusVisible),
    d = c.useCallback(
      () => l(o.current.isFocused && o.current.isFocusVisible),
      []
    ),
    v = c.useCallback(
      (u) => {
        (o.current.isFocused = u), a(u), d();
      },
      [d]
    );
  Fe(
    (u) => {
      (o.current.isFocusVisible = u), d();
    },
    [],
    { isTextInput: t }
  );
  let { focusProps: m } = U({ isDisabled: n, onFocusChange: v }),
    { focusWithinProps: f } = Se({ isDisabled: !n, onFocusWithinChange: v });
  return { isFocused: s, isFocusVisible: i, focusProps: n ? f : m };
}
let ee = B.createContext(null);
function Me(e) {
  let r = c.useContext(ee) || {};
  ge(r, e);
  let { ref: t, ...n } = r;
  return n;
}
function De(e, r) {
  let { children: t, ...n } = e,
    o = oe(r),
    s = { ...n, ref: o };
  return B.createElement(ee.Provider, { value: s }, t);
}
let Ue = B.forwardRef(De);
function Ye(e, r) {
  let { focusProps: t } = U(e),
    { keyboardProps: n } = He(e),
    o = O(t, n),
    s = Me(r),
    a = e.isDisabled ? {} : s,
    i = c.useRef(e.autoFocus);
  return (
    c.useEffect(() => {
      i.current && r.current && ke(r.current), (i.current = !1);
    }, [r]),
    {
      focusableProps: O(
        {
          ...o,
          tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0,
        },
        a
      ),
    }
  );
}
function te({ name: e, size: r, color: t, style: n, ...o }) {
  return V.jsx('svg', {
    style: {
      ...n,
      width: r,
      height: r,
      color: t === 'currentColor' ? 'currentColor' : ae.var(`$colors.${t}`),
    },
    ...o,
    'aria-hidden': !0,
    children: V.jsx('use', { href: `/icon-sprite.svg#${e}` }),
  });
}
const Je = c.memo(te);
te.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'IconBase',
  props: {
    name: {
      required: !0,
      tsType: { name: 'unknown[number]', raw: '(typeof ids)[number]' },
      description: '',
    },
    color: {
      required: !0,
      tsType: {
        name: 'union',
        raw: "StyledSystemToken<ColorToken> | 'currentColor'",
        elements: [
          { name: 'unknown' },
          { name: 'literal', value: "'currentColor'" },
        ],
      },
      description: '',
    },
    size: { required: !0, tsType: { name: 'number' }, description: '' },
  },
};
export {
  Ke as $,
  Je as I,
  Ye as a,
  Oe as b,
  Se as c,
  qe as d,
  ze as e,
  E as f,
  _e as g,
  Le as h,
  Z as i,
  Ue as j,
  K as k,
  je as l,
  He as m,
  U as n,
  Ne as o,
  $e as p,
  j as q,
  pe as r,
  T as s,
  me as t,
  ge as u,
  Re as v,
  he as w,
  Ve as x,
  ke as y,
  Ge as z,
};
