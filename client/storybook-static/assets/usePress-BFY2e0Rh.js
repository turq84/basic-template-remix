import {
  o as fe,
  k as B,
  l as ce,
  p as de,
  q as I,
  r as te,
  s as x,
  t as ge,
  u as pe,
  v as ve,
  w as z,
  f as N,
} from './index-BqgWbNE6.js';
import { r as $, R as Te } from './index-DJO9vBfz.js';
import { a as re, k as A, j as ye } from './utils-BgHHH9V7.js';
function $e(t, n) {
  if (n.has(t))
    throw new TypeError(
      'Cannot initialize the same private elements twice on an object'
    );
}
function be(t, n, i) {
  $e(t, n), n.set(t, i);
}
const he = $.createContext({ isNative: !0, open: Ee, useHref: (t) => t });
function Pe() {
  return $.useContext(he);
}
function L(t, n, i = !0) {
  var o, u;
  let { metaKey: g, ctrlKey: f, altKey: p, shiftKey: v } = n;
  fe() &&
    !(
      (u = window.event) === null ||
      u === void 0 ||
      (o = u.type) === null ||
      o === void 0
    ) &&
    o.startsWith('key') &&
    t.target === '_blank' &&
    (B() ? (g = !0) : (f = !0));
  let b =
    ce() && B() && !de()
      ? new KeyboardEvent('keydown', {
          keyIdentifier: 'Enter',
          metaKey: g,
          ctrlKey: f,
          altKey: p,
          shiftKey: v,
        })
      : new MouseEvent('click', {
          metaKey: g,
          ctrlKey: f,
          altKey: p,
          shiftKey: v,
          bubbles: !0,
          cancelable: !0,
        });
  (L.isOpening = i), I(t), t.dispatchEvent(b), (L.isOpening = !1);
}
L.isOpening = !1;
function me(t, n) {
  if (t instanceof HTMLAnchorElement) n(t);
  else if (t.hasAttribute('data-href')) {
    let i = document.createElement('a');
    (i.href = t.getAttribute('data-href')),
      t.hasAttribute('data-target') &&
        (i.target = t.getAttribute('data-target')),
      t.hasAttribute('data-rel') && (i.rel = t.getAttribute('data-rel')),
      t.hasAttribute('data-download') &&
        (i.download = t.getAttribute('data-download')),
      t.hasAttribute('data-ping') && (i.ping = t.getAttribute('data-ping')),
      t.hasAttribute('data-referrer-policy') &&
        (i.referrerPolicy = t.getAttribute('data-referrer-policy')),
      t.appendChild(i),
      n(i),
      t.removeChild(i);
  }
}
function Ee(t, n) {
  me(t, (i) => L(i, n));
}
function De(t) {
  let n = Pe();
  var i;
  const o = n.useHref(
    (i = t == null ? void 0 : t.href) !== null && i !== void 0 ? i : ''
  );
  return {
    href: t != null && t.href ? o : void 0,
    target: t == null ? void 0 : t.target,
    rel: t == null ? void 0 : t.rel,
    download: t == null ? void 0 : t.download,
    ping: t == null ? void 0 : t.ping,
    referrerPolicy: t == null ? void 0 : t.referrerPolicy,
  };
}
function Ke() {
  let t = $.useRef(new Map()),
    n = $.useCallback((u, g, f, p) => {
      let v =
        p != null && p.once
          ? (...b) => {
              t.current.delete(f), f(...b);
            }
          : f;
      t.current.set(f, { type: g, eventTarget: u, fn: v, options: p }),
        u.addEventListener(g, f, p);
    }, []),
    i = $.useCallback((u, g, f, p) => {
      var v;
      let b =
        ((v = t.current.get(f)) === null || v === void 0 ? void 0 : v.fn) || f;
      u.removeEventListener(g, b, p), t.current.delete(f);
    }, []),
    o = $.useCallback(() => {
      t.current.forEach((u, g) => {
        i(u.eventTarget, u.type, g, u.options);
      });
    }, [i]);
  return (
    $.useEffect(() => o, [o]),
    {
      addGlobalListener: n,
      removeGlobalListener: i,
      removeAllGlobalListeners: o,
    }
  );
}
let C = 'default',
  V = '',
  H = new WeakMap();
function q(t) {
  if (te()) {
    if (C === 'default') {
      const n = x(t);
      (V = n.documentElement.style.webkitUserSelect),
        (n.documentElement.style.webkitUserSelect = 'none');
    }
    C = 'disabled';
  } else
    (t instanceof HTMLElement || t instanceof SVGElement) &&
      (H.set(t, t.style.userSelect), (t.style.userSelect = 'none'));
}
function X(t) {
  if (te()) {
    if (C !== 'disabled') return;
    (C = 'restoring'),
      setTimeout(() => {
        ge(() => {
          if (C === 'restoring') {
            const n = x(t);
            n.documentElement.style.webkitUserSelect === 'none' &&
              (n.documentElement.style.webkitUserSelect = V || ''),
              (V = ''),
              (C = 'default');
          }
        });
      }, 300);
  } else if (
    (t instanceof HTMLElement || t instanceof SVGElement) &&
    t &&
    H.has(t)
  ) {
    let n = H.get(t);
    t.style.userSelect === 'none' && (t.style.userSelect = n),
      t.getAttribute('style') === '' && t.removeAttribute('style'),
      H.delete(t);
  }
}
const ne = Te.createContext({ register: () => {} });
ne.displayName = 'PressResponderContext';
function Se(t, n) {
  return n.get ? n.get.call(t) : n.value;
}
function ae(t, n, i) {
  if (!n.has(t))
    throw new TypeError('attempted to ' + i + ' private field on non-instance');
  return n.get(t);
}
function we(t, n) {
  var i = ae(t, n, 'get');
  return Se(t, i);
}
function xe(t, n, i) {
  if (n.set) n.set.call(t, i);
  else {
    if (!n.writable)
      throw new TypeError('attempted to set read only private field');
    n.value = i;
  }
}
function J(t, n, i) {
  var o = ae(t, n, 'set');
  return xe(t, o, i), i;
}
function ke(t) {
  let n = $.useContext(ne);
  if (n) {
    let { register: i, ...o } = n;
    (t = re(o, t)), i();
  }
  return pe(n, t.ref), t;
}
var Y = new WeakMap();
class G {
  continuePropagation() {
    J(this, Y, !1);
  }
  get shouldStopPropagation() {
    return we(this, Y);
  }
  constructor(n, i, o, u) {
    be(this, Y, { writable: !0, value: void 0 }), J(this, Y, !0);
    var g;
    let f =
      (g = u == null ? void 0 : u.target) !== null && g !== void 0
        ? g
        : o.currentTarget;
    const p = f == null ? void 0 : f.getBoundingClientRect();
    let v,
      b = 0,
      y,
      D = null;
    o.clientX != null &&
      o.clientY != null &&
      ((y = o.clientX), (D = o.clientY)),
      p &&
        (y != null && D != null
          ? ((v = y - p.left), (b = D - p.top))
          : ((v = p.width / 2), (b = p.height / 2))),
      (this.type = n),
      (this.pointerType = i),
      (this.target = o.currentTarget),
      (this.shiftKey = o.shiftKey),
      (this.metaKey = o.metaKey),
      (this.ctrlKey = o.ctrlKey),
      (this.altKey = o.altKey),
      (this.x = v),
      (this.y = b);
  }
}
const Q = Symbol('linkClicked');
function Ue(t) {
  let {
      onPress: n,
      onPressChange: i,
      onPressStart: o,
      onPressEnd: u,
      onPressUp: g,
      isDisabled: f,
      isPressed: p,
      preventFocusOnPress: v,
      shouldCancelOnPointerExit: b,
      allowTextSelectionOnPress: y,
      ref: D,
      ...oe
    } = ke(t),
    [le, W] = $.useState(!1),
    k = $.useRef({
      isPressed: !1,
      ignoreEmulatedMouseEvents: !1,
      ignoreClickAfterPress: !1,
      didFirePressStart: !1,
      isTriggeringEvent: !1,
      activePointerId: null,
      target: null,
      isOverTarget: !1,
      pointerType: null,
    }),
    { addGlobalListener: K, removeAllGlobalListeners: O } = Ke(),
    P = A((e, l) => {
      let h = k.current;
      if (f || h.didFirePressStart) return !1;
      let s = !0;
      if (((h.isTriggeringEvent = !0), o)) {
        let d = new G('pressstart', l, e);
        o(d), (s = d.shouldStopPropagation);
      }
      return (
        i && i(!0),
        (h.isTriggeringEvent = !1),
        (h.didFirePressStart = !0),
        W(!0),
        s
      );
    }),
    T = A((e, l, h = !0) => {
      let s = k.current;
      if (!s.didFirePressStart) return !1;
      (s.ignoreClickAfterPress = !0),
        (s.didFirePressStart = !1),
        (s.isTriggeringEvent = !0);
      let d = !0;
      if (u) {
        let r = new G('pressend', l, e);
        u(r), (d = r.shouldStopPropagation);
      }
      if ((i && i(!1), W(!1), n && h && !f)) {
        let r = new G('press', l, e);
        n(r), d && (d = r.shouldStopPropagation);
      }
      return (s.isTriggeringEvent = !1), d;
    }),
    M = A((e, l) => {
      let h = k.current;
      if (f) return !1;
      if (g) {
        h.isTriggeringEvent = !0;
        let s = new G('pressup', l, e);
        return g(s), (h.isTriggeringEvent = !1), s.shouldStopPropagation;
      }
      return !0;
    }),
    w = A((e) => {
      let l = k.current;
      l.isPressed &&
        l.target &&
        (l.isOverTarget &&
          l.pointerType != null &&
          T(E(l.target, e), l.pointerType, !1),
        (l.isPressed = !1),
        (l.isOverTarget = !1),
        (l.activePointerId = null),
        (l.pointerType = null),
        O(),
        y || X(l.target));
    }),
    U = A((e) => {
      b && w(e);
    }),
    ue = $.useMemo(() => {
      let e = k.current,
        l = {
          onKeyDown(s) {
            if (
              R(s.nativeEvent, s.currentTarget) &&
              s.currentTarget.contains(s.target)
            ) {
              var d;
              ee(s.target, s.key) && s.preventDefault();
              let r = !0;
              if (!e.isPressed && !s.repeat) {
                (e.target = s.currentTarget),
                  (e.isPressed = !0),
                  (r = P(s, 'keyboard'));
                let c = s.currentTarget,
                  a = (m) => {
                    R(m, c) &&
                      !m.repeat &&
                      c.contains(m.target) &&
                      e.target &&
                      M(E(e.target, m), 'keyboard');
                  };
                K(x(s.currentTarget), 'keyup', ye(a, h), !0);
              }
              r && s.stopPropagation(),
                s.metaKey &&
                  B() &&
                  ((d = e.metaKeyEvents) === null ||
                    d === void 0 ||
                    d.set(s.key, s.nativeEvent));
            } else s.key === 'Meta' && (e.metaKeyEvents = new Map());
          },
          onClick(s) {
            if (
              !(s && !s.currentTarget.contains(s.target)) &&
              s &&
              s.button === 0 &&
              !e.isTriggeringEvent &&
              !L.isOpening
            ) {
              let d = !0;
              if (
                (f && s.preventDefault(),
                !e.ignoreClickAfterPress &&
                  !e.ignoreEmulatedMouseEvents &&
                  !e.isPressed &&
                  (e.pointerType === 'virtual' || z(s.nativeEvent)))
              ) {
                !f && !v && I(s.currentTarget);
                let r = P(s, 'virtual'),
                  c = M(s, 'virtual'),
                  a = T(s, 'virtual');
                d = r && c && a;
              }
              (e.ignoreEmulatedMouseEvents = !1),
                (e.ignoreClickAfterPress = !1),
                d && s.stopPropagation();
            }
          },
        },
        h = (s) => {
          var d;
          if (e.isPressed && e.target && R(s, e.target)) {
            var r;
            ee(s.target, s.key) && s.preventDefault();
            let a = s.target;
            T(E(e.target, s), 'keyboard', e.target.contains(a)),
              O(),
              s.key !== 'Enter' &&
                j(e.target) &&
                e.target.contains(a) &&
                !s[Q] &&
                ((s[Q] = !0), L(e.target, s, !1)),
              (e.isPressed = !1),
              (r = e.metaKeyEvents) === null || r === void 0 || r.delete(s.key);
          } else if (
            s.key === 'Meta' &&
            !((d = e.metaKeyEvents) === null || d === void 0) &&
            d.size
          ) {
            var c;
            let a = e.metaKeyEvents;
            e.metaKeyEvents = void 0;
            for (let m of a.values())
              (c = e.target) === null ||
                c === void 0 ||
                c.dispatchEvent(new KeyboardEvent('keyup', m));
          }
        };
      if (typeof PointerEvent < 'u') {
        (l.onPointerDown = (a) => {
          if (a.button !== 0 || !a.currentTarget.contains(a.target)) return;
          if (ve(a.nativeEvent)) {
            e.pointerType = 'virtual';
            return;
          }
          F(a.currentTarget) && a.preventDefault(),
            (e.pointerType = a.pointerType);
          let m = !0;
          e.isPressed ||
            ((e.isPressed = !0),
            (e.isOverTarget = !0),
            (e.activePointerId = a.pointerId),
            (e.target = a.currentTarget),
            !f && !v && I(a.currentTarget),
            y || q(e.target),
            (m = P(a, e.pointerType)),
            K(x(a.currentTarget), 'pointermove', s, !1),
            K(x(a.currentTarget), 'pointerup', d, !1),
            K(x(a.currentTarget), 'pointercancel', c, !1)),
            m && a.stopPropagation();
        }),
          (l.onMouseDown = (a) => {
            a.currentTarget.contains(a.target) &&
              a.button === 0 &&
              (F(a.currentTarget) && a.preventDefault(), a.stopPropagation());
          }),
          (l.onPointerUp = (a) => {
            !a.currentTarget.contains(a.target) ||
              e.pointerType === 'virtual' ||
              (a.button === 0 &&
                _(a, a.currentTarget) &&
                M(a, e.pointerType || a.pointerType));
          });
        let s = (a) => {
            a.pointerId === e.activePointerId &&
              (e.target && _(a, e.target)
                ? !e.isOverTarget &&
                  e.pointerType != null &&
                  ((e.isOverTarget = !0), P(E(e.target, a), e.pointerType))
                : e.target &&
                  e.isOverTarget &&
                  e.pointerType != null &&
                  ((e.isOverTarget = !1),
                  T(E(e.target, a), e.pointerType, !1),
                  U(a)));
          },
          d = (a) => {
            a.pointerId === e.activePointerId &&
              e.isPressed &&
              a.button === 0 &&
              e.target &&
              (_(a, e.target) && e.pointerType != null
                ? T(E(e.target, a), e.pointerType)
                : e.isOverTarget &&
                  e.pointerType != null &&
                  T(E(e.target, a), e.pointerType, !1),
              (e.isPressed = !1),
              (e.isOverTarget = !1),
              (e.activePointerId = null),
              (e.pointerType = null),
              O(),
              y || X(e.target),
              'ontouchend' in e.target &&
                a.pointerType !== 'mouse' &&
                K(e.target, 'touchend', r, { once: !0 }));
          },
          r = (a) => {
            ie(a.currentTarget) && a.preventDefault();
          },
          c = (a) => {
            w(a);
          };
        l.onDragStart = (a) => {
          a.currentTarget.contains(a.target) && w(a);
        };
      } else {
        (l.onMouseDown = (r) => {
          if (r.button !== 0 || !r.currentTarget.contains(r.target)) return;
          if (
            (F(r.currentTarget) && r.preventDefault(),
            e.ignoreEmulatedMouseEvents)
          ) {
            r.stopPropagation();
            return;
          }
          (e.isPressed = !0),
            (e.isOverTarget = !0),
            (e.target = r.currentTarget),
            (e.pointerType = z(r.nativeEvent) ? 'virtual' : 'mouse'),
            !f && !v && I(r.currentTarget),
            P(r, e.pointerType) && r.stopPropagation(),
            K(x(r.currentTarget), 'mouseup', s, !1);
        }),
          (l.onMouseEnter = (r) => {
            if (!r.currentTarget.contains(r.target)) return;
            let c = !0;
            e.isPressed &&
              !e.ignoreEmulatedMouseEvents &&
              e.pointerType != null &&
              ((e.isOverTarget = !0), (c = P(r, e.pointerType))),
              c && r.stopPropagation();
          }),
          (l.onMouseLeave = (r) => {
            if (!r.currentTarget.contains(r.target)) return;
            let c = !0;
            e.isPressed &&
              !e.ignoreEmulatedMouseEvents &&
              e.pointerType != null &&
              ((e.isOverTarget = !1), (c = T(r, e.pointerType, !1)), U(r)),
              c && r.stopPropagation();
          }),
          (l.onMouseUp = (r) => {
            r.currentTarget.contains(r.target) &&
              !e.ignoreEmulatedMouseEvents &&
              r.button === 0 &&
              M(r, e.pointerType || 'mouse');
          });
        let s = (r) => {
          if (r.button === 0) {
            if (((e.isPressed = !1), O(), e.ignoreEmulatedMouseEvents)) {
              e.ignoreEmulatedMouseEvents = !1;
              return;
            }
            e.target && _(r, e.target) && e.pointerType != null
              ? T(E(e.target, r), e.pointerType)
              : e.target &&
                e.isOverTarget &&
                e.pointerType != null &&
                T(E(e.target, r), e.pointerType, !1),
              (e.isOverTarget = !1);
          }
        };
        (l.onTouchStart = (r) => {
          if (!r.currentTarget.contains(r.target)) return;
          let c = Oe(r.nativeEvent);
          if (!c) return;
          (e.activePointerId = c.identifier),
            (e.ignoreEmulatedMouseEvents = !0),
            (e.isOverTarget = !0),
            (e.isPressed = !0),
            (e.target = r.currentTarget),
            (e.pointerType = 'touch'),
            !f && !v && I(r.currentTarget),
            y || q(e.target),
            P(S(e.target, r), e.pointerType) && r.stopPropagation(),
            K(N(r.currentTarget), 'scroll', d, !0);
        }),
          (l.onTouchMove = (r) => {
            if (!r.currentTarget.contains(r.target)) return;
            if (!e.isPressed) {
              r.stopPropagation();
              return;
            }
            let c = Z(r.nativeEvent, e.activePointerId),
              a = !0;
            c && _(c, r.currentTarget)
              ? !e.isOverTarget &&
                e.pointerType != null &&
                ((e.isOverTarget = !0), (a = P(S(e.target, r), e.pointerType)))
              : e.isOverTarget &&
                e.pointerType != null &&
                ((e.isOverTarget = !1),
                (a = T(S(e.target, r), e.pointerType, !1)),
                U(S(e.target, r))),
              a && r.stopPropagation();
          }),
          (l.onTouchEnd = (r) => {
            if (!r.currentTarget.contains(r.target)) return;
            if (!e.isPressed) {
              r.stopPropagation();
              return;
            }
            let c = Z(r.nativeEvent, e.activePointerId),
              a = !0;
            c && _(c, r.currentTarget) && e.pointerType != null
              ? (M(S(e.target, r), e.pointerType),
                (a = T(S(e.target, r), e.pointerType)))
              : e.isOverTarget &&
                e.pointerType != null &&
                (a = T(S(e.target, r), e.pointerType, !1)),
              a && r.stopPropagation(),
              (e.isPressed = !1),
              (e.activePointerId = null),
              (e.isOverTarget = !1),
              (e.ignoreEmulatedMouseEvents = !0),
              e.target && !y && X(e.target),
              O();
          }),
          (l.onTouchCancel = (r) => {
            r.currentTarget.contains(r.target) &&
              (r.stopPropagation(), e.isPressed && w(S(e.target, r)));
          });
        let d = (r) => {
          e.isPressed &&
            r.target.contains(e.target) &&
            w({
              currentTarget: e.target,
              shiftKey: !1,
              ctrlKey: !1,
              metaKey: !1,
              altKey: !1,
            });
        };
        l.onDragStart = (r) => {
          r.currentTarget.contains(r.target) && w(r);
        };
      }
      return l;
    }, [K, f, v, O, y, w, U, T, P, M]);
  return (
    $.useEffect(
      () => () => {
        var e;
        y || X((e = k.current.target) !== null && e !== void 0 ? e : void 0);
      },
      [y]
    ),
    { isPressed: p || le, pressProps: re(oe, ue) }
  );
}
function j(t) {
  return t.tagName === 'A' && t.hasAttribute('href');
}
function R(t, n) {
  const { key: i, code: o } = t,
    u = n,
    g = u.getAttribute('role');
  return (
    (i === 'Enter' || i === ' ' || i === 'Spacebar' || o === 'Space') &&
    !(
      (u instanceof N(u).HTMLInputElement && !se(u, i)) ||
      u instanceof N(u).HTMLTextAreaElement ||
      u.isContentEditable
    ) &&
    !((g === 'link' || (!g && j(u))) && i !== 'Enter')
  );
}
function Oe(t) {
  const { targetTouches: n } = t;
  return n.length > 0 ? n[0] : null;
}
function Z(t, n) {
  const i = t.changedTouches;
  for (let o = 0; o < i.length; o++) {
    const u = i[o];
    if (u.identifier === n) return u;
  }
  return null;
}
function S(t, n) {
  let i = 0,
    o = 0;
  return (
    n.targetTouches &&
      n.targetTouches.length === 1 &&
      ((i = n.targetTouches[0].clientX), (o = n.targetTouches[0].clientY)),
    {
      currentTarget: t,
      shiftKey: n.shiftKey,
      ctrlKey: n.ctrlKey,
      metaKey: n.metaKey,
      altKey: n.altKey,
      clientX: i,
      clientY: o,
    }
  );
}
function E(t, n) {
  let i = n.clientX,
    o = n.clientY;
  return {
    currentTarget: t,
    shiftKey: n.shiftKey,
    ctrlKey: n.ctrlKey,
    metaKey: n.metaKey,
    altKey: n.altKey,
    clientX: i,
    clientY: o,
  };
}
function Me(t) {
  let n = 0,
    i = 0;
  return (
    t.width !== void 0
      ? (n = t.width / 2)
      : t.radiusX !== void 0 && (n = t.radiusX),
    t.height !== void 0
      ? (i = t.height / 2)
      : t.radiusY !== void 0 && (i = t.radiusY),
    {
      top: t.clientY - i,
      right: t.clientX + n,
      bottom: t.clientY + i,
      left: t.clientX - n,
    }
  );
}
function _e(t, n) {
  return !(
    t.left > n.right ||
    n.left > t.right ||
    t.top > n.bottom ||
    n.top > t.bottom
  );
}
function _(t, n) {
  let i = n.getBoundingClientRect(),
    o = Me(t);
  return _e(i, o);
}
function F(t) {
  return !(t instanceof HTMLElement) || !t.hasAttribute('draggable');
}
function ie(t) {
  return t instanceof HTMLInputElement
    ? !1
    : t instanceof HTMLButtonElement
      ? t.type !== 'submit' && t.type !== 'reset'
      : !j(t);
}
function ee(t, n) {
  return t instanceof HTMLInputElement ? !se(t, n) : ie(t);
}
const Ce = new Set([
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
function se(t, n) {
  return t.type === 'checkbox' || t.type === 'radio'
    ? n === ' '
    : Ce.has(t.type);
}
export { Ue as $, De as a, Pe as b, Ke as c, L as d, ne as e };
