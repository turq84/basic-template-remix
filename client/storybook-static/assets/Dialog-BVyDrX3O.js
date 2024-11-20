import {
  m as et,
  a as q,
  k as Z,
  l as h,
  $ as se,
  j as W,
  b as tt,
  i as rt,
  c as de,
  o as nt,
  p as ot,
  d as it,
  h as ce,
  q as at,
} from './utils-BgHHH9V7.js';
import { $ as lt, b as st } from './VisuallyHidden-BiYBAiUW.js';
import {
  d as dt,
  f as ct,
  b as ut,
  a as ue,
  c as ft,
} from './OverlayArrow-DliHpoDG.js';
import {
  u as $t,
  s as w,
  f as bt,
  y as H,
  c as vt,
  r as pt,
  b as G,
} from './index-BqgWbNE6.js';
import { e as V } from './usePress-BFY2e0Rh.js';
import { r as b, R as p } from './index-DJO9vBfz.js';
import { F as mt } from './index-DJdX7xnk.js';
import { b as gt } from './Hidden-2-bsQ4Y9.js';
import { $ as Et } from './useLabels-D003iZWB.js';
const ht = Symbol.for('react-aria.i18n.locale'),
  xt = Symbol.for('react-aria.i18n.strings');
let P;
class _ {
  getStringForLocale(t, r) {
    let o = this.getStringsForLocale(r)[t];
    if (!o) throw new Error(`Could not find intl message ${t} in ${r} locale`);
    return o;
  }
  getStringsForLocale(t) {
    let r = this.strings[t];
    return (
      r ||
        ((r = wt(t, this.strings, this.defaultLocale)), (this.strings[t] = r)),
      r
    );
  }
  static getGlobalDictionaryForPackage(t) {
    if (typeof window > 'u') return null;
    let r = window[ht];
    if (P === void 0) {
      let o = window[xt];
      if (!o) return null;
      P = {};
      for (let i in o) P[i] = new _({ [r]: o[i] }, r);
    }
    let n = P == null ? void 0 : P[t];
    if (!n)
      throw new Error(
        `Strings for package "${t}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`
      );
    return n;
  }
  constructor(t, r = 'en-US') {
    (this.strings = Object.fromEntries(Object.entries(t).filter(([, n]) => n))),
      (this.defaultLocale = r);
  }
}
function wt(e, t, r = 'en-US') {
  if (t[e]) return t[e];
  let n = yt(e);
  if (t[n]) return t[n];
  for (let o in t) if (o.startsWith(n + '-')) return t[o];
  return t[r];
}
function yt(e) {
  return Intl.Locale ? new Intl.Locale(e).language : e.split('-')[0];
}
const Q = new Map(),
  ee = new Map();
class Tt {
  format(t, r) {
    let n = this.strings.getStringForLocale(t, this.locale);
    return typeof n == 'function' ? n(r, this) : n;
  }
  plural(t, r, n = 'cardinal') {
    let o = r['=' + t];
    if (o) return typeof o == 'function' ? o() : o;
    let i = this.locale + ':' + n,
      s = Q.get(i);
    s || ((s = new Intl.PluralRules(this.locale, { type: n })), Q.set(i, s));
    let l = s.select(t);
    return (o = r[l] || r.other), typeof o == 'function' ? o() : o;
  }
  number(t) {
    let r = ee.get(this.locale);
    return (
      r || ((r = new Intl.NumberFormat(this.locale)), ee.set(this.locale, r)),
      r.format(t)
    );
  }
  select(t, r) {
    let n = t[r] || t.other;
    return typeof n == 'function' ? n() : n;
  }
  constructor(t, r) {
    (this.locale = t), (this.strings = r);
  }
}
function te(e, t) {
  let r = window.getComputedStyle(e),
    n = /(auto|scroll)/.test(r.overflow + r.overflowX + r.overflowY);
  return (
    n &&
      t &&
      (n =
        e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth),
    n
  );
}
function fe(e, t) {
  let r = e;
  for (te(r, t) && (r = r.parentElement); r && !te(r, t); ) r = r.parentElement;
  return r || document.scrollingElement || document.documentElement;
}
const Nt = p.forwardRef(({ children: e, ...t }, r) => {
  let n = b.useRef(!1),
    o = b.useContext(V);
  r = et(r || (o == null ? void 0 : o.ref));
  let i = q(o || {}, {
    ...t,
    ref: r,
    register() {
      (n.current = !0), o && o.register();
    },
  });
  return (
    $t(o, r),
    b.useEffect(() => {
      n.current ||
        (console.warn(
          'A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.'
        ),
        (n.current = !0));
    }, []),
    p.createElement(V.Provider, { value: i }, e)
  );
});
function Ct({ children: e }) {
  let t = b.useMemo(() => ({ register: () => {} }), []);
  return p.createElement(V.Provider, { value: t }, e);
}
function St(e) {
  let {
      ref: t,
      onInteractOutside: r,
      isDisabled: n,
      onInteractOutsideStart: o,
    } = e,
    i = b.useRef({ isPointerDown: !1, ignoreEmulatedMouseEvents: !1 }),
    s = Z((c) => {
      r && F(c, t) && (o && o(c), (i.current.isPointerDown = !0));
    }),
    l = Z((c) => {
      r && r(c);
    });
  b.useEffect(() => {
    let c = i.current;
    if (n) return;
    const d = t.current,
      a = w(d);
    if (typeof PointerEvent < 'u') {
      let u = (f) => {
        c.isPointerDown && F(f, t) && l(f), (c.isPointerDown = !1);
      };
      return (
        a.addEventListener('pointerdown', s, !0),
        a.addEventListener('pointerup', u, !0),
        () => {
          a.removeEventListener('pointerdown', s, !0),
            a.removeEventListener('pointerup', u, !0);
        }
      );
    } else {
      let u = (v) => {
          c.ignoreEmulatedMouseEvents
            ? (c.ignoreEmulatedMouseEvents = !1)
            : c.isPointerDown && F(v, t) && l(v),
            (c.isPointerDown = !1);
        },
        f = (v) => {
          (c.ignoreEmulatedMouseEvents = !0),
            c.isPointerDown && F(v, t) && l(v),
            (c.isPointerDown = !1);
        };
      return (
        a.addEventListener('mousedown', s, !0),
        a.addEventListener('mouseup', u, !0),
        a.addEventListener('touchstart', s, !0),
        a.addEventListener('touchend', f, !0),
        () => {
          a.removeEventListener('mousedown', s, !0),
            a.removeEventListener('mouseup', u, !0),
            a.removeEventListener('touchstart', s, !0),
            a.removeEventListener('touchend', f, !0);
        }
      );
    }
  }, [t, n, s, l]);
}
function F(e, t) {
  if (e.button > 0) return !1;
  if (e.target) {
    const r = e.target.ownerDocument;
    if (
      !r ||
      !r.documentElement.contains(e.target) ||
      e.target.closest('[data-react-aria-top-layer]')
    )
      return !1;
  }
  return t.current && !t.current.contains(e.target);
}
function Pt(e) {
  const t = bt(e);
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
  let { display: r, visibility: n } = e.style,
    o = r !== 'none' && n !== 'hidden' && n !== 'collapse';
  if (o) {
    const { getComputedStyle: i } = e.ownerDocument.defaultView;
    let { display: s, visibility: l } = i(e);
    o = s !== 'none' && l !== 'hidden' && l !== 'collapse';
  }
  return o;
}
function Lt(e, t) {
  return (
    !e.hasAttribute('hidden') &&
    !e.hasAttribute('data-react-aria-prevent-focus') &&
    (e.nodeName === 'DETAILS' && t && t.nodeName !== 'SUMMARY'
      ? e.hasAttribute('open')
      : !0)
  );
}
function $e(e, t) {
  return (
    e.nodeName !== '#comment' &&
    Pt(e) &&
    Lt(e, t) &&
    (!e.parentElement || $e(e.parentElement, e))
  );
}
const re = p.createContext(null),
  U = 'react-aria-focus-scope-restore';
let m = null;
function Rt(e) {
  let { children: t, contain: r, restoreFocus: n, autoFocus: o } = e,
    i = b.useRef(null),
    s = b.useRef(null),
    l = b.useRef([]),
    { parentNode: c } = b.useContext(re) || {},
    d = b.useMemo(() => new z({ scopeRef: l }), [l]);
  h(() => {
    let f = c || g.root;
    if (g.getTreeNode(f.scopeRef) && m && !A(m, f.scopeRef)) {
      let v = g.getTreeNode(m);
      v && (f = v);
    }
    f.addChild(d), g.addNode(d);
  }, [d, c]),
    h(() => {
      let f = g.getTreeNode(l);
      f && (f.contain = !!r);
    }, [r]),
    h(() => {
      var f;
      let v = (f = i.current) === null || f === void 0 ? void 0 : f.nextSibling,
        $ = [],
        N = (k) => k.stopPropagation();
      for (; v && v !== s.current; )
        $.push(v), v.addEventListener(U, N), (v = v.nextSibling);
      return (
        (l.current = $),
        () => {
          for (let k of $) k.removeEventListener(U, N);
        }
      );
    }, [t]),
    _t(l, n, r),
    Mt(l, r),
    Kt(l, n, r),
    At(l, o),
    b.useEffect(() => {
      const f = w(l.current ? l.current[0] : void 0).activeElement;
      let v = null;
      if (E(f, l.current)) {
        for (let $ of g.traverse())
          $.scopeRef && E(f, $.scopeRef.current) && (v = $);
        v === g.getTreeNode(l) && (m = v.scopeRef);
      }
    }, [l]),
    h(
      () => () => {
        var f, v, $;
        let N =
          ($ =
            (v = g.getTreeNode(l)) === null ||
            v === void 0 ||
            (f = v.parent) === null ||
            f === void 0
              ? void 0
              : f.scopeRef) !== null && $ !== void 0
            ? $
            : null;
        (l === m || A(l, m)) && (!N || g.getTreeNode(N)) && (m = N),
          g.removeTreeNode(l);
      },
      [l]
    );
  let a = b.useMemo(() => Dt(l), []),
    u = b.useMemo(() => ({ focusManager: a, parentNode: d }), [d, a]);
  return p.createElement(
    re.Provider,
    { value: u },
    p.createElement('span', {
      'data-focus-scope-start': !0,
      hidden: !0,
      ref: i,
    }),
    t,
    p.createElement('span', { 'data-focus-scope-end': !0, hidden: !0, ref: s })
  );
}
function Dt(e) {
  return {
    focusNext(t = {}) {
      let r = e.current,
        { from: n, tabbable: o, wrap: i, accept: s } = t,
        l = n || w(r[0]).activeElement,
        c = r[0].previousElementSibling,
        d = S(r),
        a = C(d, { tabbable: o, accept: s }, r);
      a.currentNode = E(l, r) ? l : c;
      let u = a.nextNode();
      return (
        !u && i && ((a.currentNode = c), (u = a.nextNode())), u && T(u, !0), u
      );
    },
    focusPrevious(t = {}) {
      let r = e.current,
        { from: n, tabbable: o, wrap: i, accept: s } = t,
        l = n || w(r[0]).activeElement,
        c = r[r.length - 1].nextElementSibling,
        d = S(r),
        a = C(d, { tabbable: o, accept: s }, r);
      a.currentNode = E(l, r) ? l : c;
      let u = a.previousNode();
      return (
        !u && i && ((a.currentNode = c), (u = a.previousNode())),
        u && T(u, !0),
        u
      );
    },
    focusFirst(t = {}) {
      let r = e.current,
        { tabbable: n, accept: o } = t,
        i = S(r),
        s = C(i, { tabbable: n, accept: o }, r);
      s.currentNode = r[0].previousElementSibling;
      let l = s.nextNode();
      return l && T(l, !0), l;
    },
    focusLast(t = {}) {
      let r = e.current,
        { tabbable: n, accept: o } = t,
        i = S(r),
        s = C(i, { tabbable: n, accept: o }, r);
      s.currentNode = r[r.length - 1].nextElementSibling;
      let l = s.previousNode();
      return l && T(l, !0), l;
    },
  };
}
const Y = [
    'input:not([disabled]):not([type=hidden])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    'button:not([disabled])',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]',
  ],
  Ot = Y.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
Y.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const Ft = Y.join(':not([hidden]):not([tabindex="-1"]),');
function S(e) {
  return e[0].parentElement;
}
function O(e) {
  let t = g.getTreeNode(m);
  for (; t && t.scopeRef !== e; ) {
    if (t.contain) return !1;
    t = t.parent;
  }
  return !0;
}
function Mt(e, t) {
  let r = b.useRef(void 0),
    n = b.useRef(void 0);
  h(() => {
    let o = e.current;
    if (!t) {
      n.current && (cancelAnimationFrame(n.current), (n.current = void 0));
      return;
    }
    const i = w(o ? o[0] : void 0);
    let s = (d) => {
        if (
          d.key !== 'Tab' ||
          d.altKey ||
          d.ctrlKey ||
          d.metaKey ||
          !O(e) ||
          d.isComposing
        )
          return;
        let a = i.activeElement,
          u = e.current;
        if (!u || !E(a, u)) return;
        let f = S(u),
          v = C(f, { tabbable: !0 }, u);
        if (!a) return;
        v.currentNode = a;
        let $ = d.shiftKey ? v.previousNode() : v.nextNode();
        $ ||
          ((v.currentNode = d.shiftKey
            ? u[u.length - 1].nextElementSibling
            : u[0].previousElementSibling),
          ($ = d.shiftKey ? v.previousNode() : v.nextNode())),
          d.preventDefault(),
          $ && T($, !0);
      },
      l = (d) => {
        (!m || A(m, e)) && E(d.target, e.current)
          ? ((m = e), (r.current = d.target))
          : O(e) && !I(d.target, e)
            ? r.current
              ? r.current.focus()
              : m && m.current && j(m.current)
            : O(e) && (r.current = d.target);
      },
      c = (d) => {
        n.current && cancelAnimationFrame(n.current),
          (n.current = requestAnimationFrame(() => {
            if (i.activeElement && O(e) && !I(i.activeElement, e))
              if (((m = e), i.body.contains(d.target))) {
                var a;
                (r.current = d.target),
                  (a = r.current) === null || a === void 0 || a.focus();
              } else m.current && j(m.current);
          }));
      };
    return (
      i.addEventListener('keydown', s, !1),
      i.addEventListener('focusin', l, !1),
      o == null || o.forEach((d) => d.addEventListener('focusin', l, !1)),
      o == null || o.forEach((d) => d.addEventListener('focusout', c, !1)),
      () => {
        i.removeEventListener('keydown', s, !1),
          i.removeEventListener('focusin', l, !1),
          o == null ||
            o.forEach((d) => d.removeEventListener('focusin', l, !1)),
          o == null ||
            o.forEach((d) => d.removeEventListener('focusout', c, !1));
      }
    );
  }, [e, t]),
    h(
      () => () => {
        n.current && cancelAnimationFrame(n.current);
      },
      [n]
    );
}
function be(e) {
  return I(e);
}
function E(e, t) {
  return !e || !t ? !1 : t.some((r) => r.contains(e));
}
function I(e, t = null) {
  if (e instanceof Element && e.closest('[data-react-aria-top-layer]'))
    return !0;
  for (let { scopeRef: r } of g.traverse(g.getTreeNode(t)))
    if (r && E(e, r.current)) return !0;
  return !1;
}
function It(e) {
  return I(e, m);
}
function A(e, t) {
  var r;
  let n = (r = g.getTreeNode(t)) === null || r === void 0 ? void 0 : r.parent;
  for (; n; ) {
    if (n.scopeRef === e) return !0;
    n = n.parent;
  }
  return !1;
}
function T(e, t = !1) {
  if (e != null && !t)
    try {
      H(e);
    } catch {}
  else if (e != null)
    try {
      e.focus();
    } catch {}
}
function ve(e, t = !0) {
  let r = e[0].previousElementSibling,
    n = S(e),
    o = C(n, { tabbable: t }, e);
  o.currentNode = r;
  let i = o.nextNode();
  return (
    t &&
      !i &&
      ((n = S(e)),
      (o = C(n, { tabbable: !1 }, e)),
      (o.currentNode = r),
      (i = o.nextNode())),
    i
  );
}
function j(e, t = !0) {
  T(ve(e, t));
}
function At(e, t) {
  const r = p.useRef(t);
  b.useEffect(() => {
    if (r.current) {
      m = e;
      const n = w(e.current ? e.current[0] : void 0);
      !E(n.activeElement, m.current) && e.current && j(e.current);
    }
    r.current = !1;
  }, [e]);
}
function _t(e, t, r) {
  h(() => {
    if (t || r) return;
    let n = e.current;
    const o = w(n ? n[0] : void 0);
    let i = (s) => {
      let l = s.target;
      E(l, e.current) ? (m = e) : be(l) || (m = null);
    };
    return (
      o.addEventListener('focusin', i, !1),
      n == null || n.forEach((s) => s.addEventListener('focusin', i, !1)),
      () => {
        o.removeEventListener('focusin', i, !1),
          n == null ||
            n.forEach((s) => s.removeEventListener('focusin', i, !1));
      }
    );
  }, [e, t, r]);
}
function kt(e) {
  let t = g.getTreeNode(m);
  for (; t && t.scopeRef !== e; ) {
    if (t.nodeToRestore) return !1;
    t = t.parent;
  }
  return (t == null ? void 0 : t.scopeRef) === e;
}
function Kt(e, t, r) {
  const n = b.useRef(
    typeof document < 'u'
      ? w(e.current ? e.current[0] : void 0).activeElement
      : null
  );
  h(() => {
    let o = e.current;
    const i = w(o ? o[0] : void 0);
    if (!t || r) return;
    let s = () => {
      (!m || A(m, e)) && E(i.activeElement, e.current) && (m = e);
    };
    return (
      i.addEventListener('focusin', s, !1),
      o == null || o.forEach((l) => l.addEventListener('focusin', s, !1)),
      () => {
        i.removeEventListener('focusin', s, !1),
          o == null ||
            o.forEach((l) => l.removeEventListener('focusin', s, !1));
      }
    );
  }, [e, r]),
    h(() => {
      const o = w(e.current ? e.current[0] : void 0);
      if (!t) return;
      let i = (s) => {
        if (
          s.key !== 'Tab' ||
          s.altKey ||
          s.ctrlKey ||
          s.metaKey ||
          !O(e) ||
          s.isComposing
        )
          return;
        let l = o.activeElement;
        if (!E(l, e.current)) return;
        let c = g.getTreeNode(e);
        if (!c) return;
        let d = c.nodeToRestore,
          a = C(o.body, { tabbable: !0 });
        a.currentNode = l;
        let u = s.shiftKey ? a.previousNode() : a.nextNode();
        if (
          ((!d || !o.body.contains(d) || d === o.body) &&
            ((d = void 0), (c.nodeToRestore = void 0)),
          (!u || !E(u, e.current)) && d)
        ) {
          a.currentNode = d;
          do u = s.shiftKey ? a.previousNode() : a.nextNode();
          while (E(u, e.current));
          s.preventDefault(),
            s.stopPropagation(),
            u ? T(u, !0) : be(d) ? T(d, !0) : l.blur();
        }
      };
      return (
        r || o.addEventListener('keydown', i, !0),
        () => {
          r || o.removeEventListener('keydown', i, !0);
        }
      );
    }, [e, t, r]),
    h(() => {
      const o = w(e.current ? e.current[0] : void 0);
      if (!t) return;
      let i = g.getTreeNode(e);
      if (i) {
        var s;
        return (
          (i.nodeToRestore =
            (s = n.current) !== null && s !== void 0 ? s : void 0),
          () => {
            let l = g.getTreeNode(e);
            if (!l) return;
            let c = l.nodeToRestore;
            if (
              t &&
              c &&
              (E(o.activeElement, e.current) ||
                (o.activeElement === o.body && kt(e)))
            ) {
              let d = g.clone();
              requestAnimationFrame(() => {
                if (o.activeElement === o.body) {
                  let a = d.getTreeNode(e);
                  for (; a; ) {
                    if (a.nodeToRestore && a.nodeToRestore.isConnected) {
                      ne(a.nodeToRestore);
                      return;
                    }
                    a = a.parent;
                  }
                  for (a = d.getTreeNode(e); a; ) {
                    if (
                      a.scopeRef &&
                      a.scopeRef.current &&
                      g.getTreeNode(a.scopeRef)
                    ) {
                      let u = ve(a.scopeRef.current, !0);
                      ne(u);
                      return;
                    }
                    a = a.parent;
                  }
                }
              });
            }
          }
        );
      }
    }, [e, t]);
}
function ne(e) {
  e.dispatchEvent(new CustomEvent(U, { bubbles: !0, cancelable: !0 })) && T(e);
}
function C(e, t, r) {
  let n = t != null && t.tabbable ? Ft : Ot,
    o = w(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode(i) {
        var s;
        return !(t == null || (s = t.from) === null || s === void 0) &&
          s.contains(i)
          ? NodeFilter.FILTER_REJECT
          : i.matches(n) &&
              $e(i) &&
              (!r || E(i, r)) &&
              (!(t != null && t.accept) || t.accept(i))
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  return t != null && t.from && (o.currentNode = t.from), o;
}
class J {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(t) {
    return this.fastMap.get(t);
  }
  addTreeNode(t, r, n) {
    let o = this.fastMap.get(r ?? null);
    if (!o) return;
    let i = new z({ scopeRef: t });
    o.addChild(i),
      (i.parent = o),
      this.fastMap.set(t, i),
      n && (i.nodeToRestore = n);
  }
  addNode(t) {
    this.fastMap.set(t.scopeRef, t);
  }
  removeTreeNode(t) {
    if (t === null) return;
    let r = this.fastMap.get(t);
    if (!r) return;
    let n = r.parent;
    for (let i of this.traverse())
      i !== r &&
        r.nodeToRestore &&
        i.nodeToRestore &&
        r.scopeRef &&
        r.scopeRef.current &&
        E(i.nodeToRestore, r.scopeRef.current) &&
        (i.nodeToRestore = r.nodeToRestore);
    let o = r.children;
    n && (n.removeChild(r), o.size > 0 && o.forEach((i) => n && n.addChild(i))),
      this.fastMap.delete(r.scopeRef);
  }
  *traverse(t = this.root) {
    if ((t.scopeRef != null && (yield t), t.children.size > 0))
      for (let r of t.children) yield* this.traverse(r);
  }
  clone() {
    var t;
    let r = new J();
    var n;
    for (let o of this.traverse())
      r.addTreeNode(
        o.scopeRef,
        (n = (t = o.parent) === null || t === void 0 ? void 0 : t.scopeRef) !==
          null && n !== void 0
          ? n
          : null,
        o.nodeToRestore
      );
    return r;
  }
  constructor() {
    (this.fastMap = new Map()),
      (this.root = new z({ scopeRef: null })),
      this.fastMap.set(null, this.root);
  }
}
class z {
  addChild(t) {
    this.children.add(t), (t.parent = this);
  }
  removeChild(t) {
    this.children.delete(t), (t.parent = void 0);
  }
  constructor(t) {
    (this.children = new Set()),
      (this.contain = !1),
      (this.scopeRef = t.scopeRef);
  }
}
let g = new J();
const oe = new WeakMap();
function Bt(e) {
  let t = oe.get(e);
  return t || ((t = new _(e)), oe.set(e, t)), t;
}
function Wt(e, t) {
  return (t && _.getGlobalDictionaryForPackage(t)) || Bt(e);
}
function Ht(e, t) {
  let { locale: r } = dt(),
    n = Wt(e, t);
  return b.useMemo(() => new Tt(r, n), [r, n]);
}
const y = [];
function Vt(e, t) {
  let {
    onClose: r,
    shouldCloseOnBlur: n,
    isOpen: o,
    isDismissable: i = !1,
    isKeyboardDismissDisabled: s = !1,
    shouldCloseOnInteractOutside: l,
  } = e;
  b.useEffect(
    () => (
      o && y.push(t),
      () => {
        let $ = y.indexOf(t);
        $ >= 0 && y.splice($, 1);
      }
    ),
    [o, t]
  );
  let c = () => {
      y[y.length - 1] === t && r && r();
    },
    d = ($) => {
      (!l || l($.target)) &&
        y[y.length - 1] === t &&
        ($.stopPropagation(), $.preventDefault());
    },
    a = ($) => {
      (!l || l($.target)) &&
        (y[y.length - 1] === t && ($.stopPropagation(), $.preventDefault()),
        c());
    },
    u = ($) => {
      $.key === 'Escape' &&
        !s &&
        !$.nativeEvent.isComposing &&
        ($.stopPropagation(), $.preventDefault(), c());
    };
  St({
    ref: t,
    onInteractOutside: i && o ? a : null,
    onInteractOutsideStart: d,
  });
  let { focusWithinProps: f } = vt({
      isDisabled: !n,
      onBlurWithin: ($) => {
        !$.relatedTarget ||
          It($.relatedTarget) ||
          ((!l || l($.relatedTarget)) && r());
      },
    }),
    v = ($) => {
      $.target === $.currentTarget && $.preventDefault();
    };
  return {
    overlayProps: { onKeyDown: u, ...f },
    underlayProps: { onPointerDown: v },
  };
}
function Ut(e, t, r) {
  let { type: n } = e,
    { isOpen: o } = t;
  b.useEffect(() => {
    r && r.current && ct.set(r.current, t.close);
  });
  let i;
  n === 'menu' ? (i = !0) : n === 'listbox' && (i = 'listbox');
  let s = se();
  return {
    triggerProps: {
      'aria-haspopup': i,
      'aria-expanded': o,
      'aria-controls': o ? s : null,
      onPress: t.toggle,
    },
    overlayProps: { id: s },
  };
}
const K = typeof document < 'u' && window.visualViewport,
  jt = new Set([
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
let M = 0,
  B;
function zt(e = {}) {
  let { isDisabled: t } = e;
  h(() => {
    if (!t)
      return (
        M++,
        M === 1 && (pt() ? (B = Gt()) : (B = qt())),
        () => {
          M--, M === 0 && B();
        }
      );
  }, [t]);
}
function qt() {
  return W(
    L(
      document.documentElement,
      'paddingRight',
      `${window.innerWidth - document.documentElement.clientWidth}px`
    ),
    L(document.documentElement, 'overflow', 'hidden')
  );
}
function Gt() {
  let e,
    t,
    r = (d) => {
      (e = fe(d.target, !0)),
        !(e === document.documentElement && e === document.body) &&
          e instanceof HTMLElement &&
          window.getComputedStyle(e).overscrollBehavior === 'auto' &&
          (t = L(e, 'overscrollBehavior', 'contain'));
    },
    n = (d) => {
      if (!e || e === document.documentElement || e === document.body) {
        d.preventDefault();
        return;
      }
      e.scrollHeight === e.clientHeight &&
        e.scrollWidth === e.clientWidth &&
        d.preventDefault();
    },
    o = (d) => {
      let a = d.target;
      ae(a) &&
        a !== document.activeElement &&
        (d.preventDefault(),
        l(),
        (a.style.transform = 'translateY(-2000px)'),
        a.focus(),
        requestAnimationFrame(() => {
          a.style.transform = '';
        })),
        t && t();
    },
    i = (d) => {
      let a = d.target;
      ae(a) &&
        (l(),
        (a.style.transform = 'translateY(-2000px)'),
        requestAnimationFrame(() => {
          (a.style.transform = ''),
            K &&
              (K.height < window.innerHeight
                ? requestAnimationFrame(() => {
                    ie(a);
                  })
                : K.addEventListener('resize', () => ie(a), { once: !0 }));
        }));
    },
    s = null,
    l = () => {
      if (s) return;
      let d = () => {
          window.scrollTo(0, 0);
        },
        a = window.pageXOffset,
        u = window.pageYOffset;
      (s = W(
        R(window, 'scroll', d),
        L(
          document.documentElement,
          'paddingRight',
          `${window.innerWidth - document.documentElement.clientWidth}px`
        ),
        L(document.documentElement, 'overflow', 'hidden'),
        L(document.body, 'marginTop', `-${u}px`),
        () => {
          window.scrollTo(a, u);
        }
      )),
        window.scrollTo(0, 0);
    },
    c = W(
      R(document, 'touchstart', r, { passive: !1, capture: !0 }),
      R(document, 'touchmove', n, { passive: !1, capture: !0 }),
      R(document, 'touchend', o, { passive: !1, capture: !0 }),
      R(document, 'focus', i, !0)
    );
  return () => {
    t == null || t(), s == null || s(), c();
  };
}
function L(e, t, r) {
  let n = e.style[t];
  return (
    (e.style[t] = r),
    () => {
      e.style[t] = n;
    }
  );
}
function R(e, t, r, n) {
  return (
    e.addEventListener(t, r, n),
    () => {
      e.removeEventListener(t, r, n);
    }
  );
}
function ie(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let r = fe(e);
    if (r !== document.documentElement && r !== document.body && r !== e) {
      let n = r.getBoundingClientRect().top,
        o = e.getBoundingClientRect().top;
      o > n + e.clientHeight && (r.scrollTop += o - n);
    }
    e = r.parentElement;
  }
}
function ae(e) {
  return (
    (e instanceof HTMLInputElement && !jt.has(e.type)) ||
    e instanceof HTMLTextAreaElement ||
    (e instanceof HTMLElement && e.isContentEditable)
  );
}
var pe = {};
pe = { dismiss: 'تجاهل' };
var me = {};
me = { dismiss: 'Отхвърляне' };
var ge = {};
ge = { dismiss: 'Odstranit' };
var Ee = {};
Ee = { dismiss: 'Luk' };
var he = {};
he = { dismiss: 'Schließen' };
var xe = {};
xe = { dismiss: 'Απόρριψη' };
var we = {};
we = { dismiss: 'Dismiss' };
var ye = {};
ye = { dismiss: 'Descartar' };
var Te = {};
Te = { dismiss: 'Lõpeta' };
var Ne = {};
Ne = { dismiss: 'Hylkää' };
var Ce = {};
Ce = { dismiss: 'Rejeter' };
var Se = {};
Se = { dismiss: 'התעלם' };
var Pe = {};
Pe = { dismiss: 'Odbaci' };
var Le = {};
Le = { dismiss: 'Elutasítás' };
var Re = {};
Re = { dismiss: 'Ignora' };
var De = {};
De = { dismiss: '閉じる' };
var Oe = {};
Oe = { dismiss: '무시' };
var Fe = {};
Fe = { dismiss: 'Atmesti' };
var Me = {};
Me = { dismiss: 'Nerādīt' };
var Ie = {};
Ie = { dismiss: 'Lukk' };
var Ae = {};
Ae = { dismiss: 'Negeren' };
var _e = {};
_e = { dismiss: 'Zignoruj' };
var ke = {};
ke = { dismiss: 'Descartar' };
var Ke = {};
Ke = { dismiss: 'Dispensar' };
var Be = {};
Be = { dismiss: 'Revocare' };
var We = {};
We = { dismiss: 'Пропустить' };
var He = {};
He = { dismiss: 'Zrušiť' };
var Ve = {};
Ve = { dismiss: 'Opusti' };
var Ue = {};
Ue = { dismiss: 'Odbaci' };
var je = {};
je = { dismiss: 'Avvisa' };
var ze = {};
ze = { dismiss: 'Kapat' };
var qe = {};
qe = { dismiss: 'Скасувати' };
var Ge = {};
Ge = { dismiss: '取消' };
var Ye = {};
Ye = { dismiss: '關閉' };
var Je = {};
Je = {
  'ar-AE': pe,
  'bg-BG': me,
  'cs-CZ': ge,
  'da-DK': Ee,
  'de-DE': he,
  'el-GR': xe,
  'en-US': we,
  'es-ES': ye,
  'et-EE': Te,
  'fi-FI': Ne,
  'fr-FR': Ce,
  'he-IL': Se,
  'hr-HR': Pe,
  'hu-HU': Le,
  'it-IT': Re,
  'ja-JP': De,
  'ko-KR': Oe,
  'lt-LT': Fe,
  'lv-LV': Me,
  'nb-NO': Ie,
  'nl-NL': Ae,
  'pl-PL': _e,
  'pt-BR': ke,
  'pt-PT': Ke,
  'ro-RO': Be,
  'ru-RU': We,
  'sk-SK': He,
  'sl-SI': Ve,
  'sr-SP': Ue,
  'sv-SE': je,
  'tr-TR': ze,
  'uk-UA': qe,
  'zh-CN': Ge,
  'zh-TW': Ye,
};
function Yt(e) {
  return e && e.__esModule ? e.default : e;
}
function le(e) {
  let { onDismiss: t, ...r } = e,
    n = Ht(Yt(Je), '@react-aria/overlays'),
    o = Et(r, n.format('dismiss')),
    i = () => {
      t && t();
    };
  return p.createElement(
    lt,
    null,
    p.createElement('button', {
      ...o,
      tabIndex: -1,
      onClick: i,
      style: { width: 1, height: 1 },
    })
  );
}
let D = new WeakMap(),
  x = [];
function Jt(e, t = document.body) {
  let r = new Set(e),
    n = new Set(),
    o = (c) => {
      for (let f of c.querySelectorAll(
        '[data-live-announcer], [data-react-aria-top-layer]'
      ))
        r.add(f);
      let d = (f) => {
          if (
            r.has(f) ||
            (n.has(f.parentElement) &&
              f.parentElement.getAttribute('role') !== 'row')
          )
            return NodeFilter.FILTER_REJECT;
          for (let v of r) if (f.contains(v)) return NodeFilter.FILTER_SKIP;
          return NodeFilter.FILTER_ACCEPT;
        },
        a = document.createTreeWalker(c, NodeFilter.SHOW_ELEMENT, {
          acceptNode: d,
        }),
        u = d(c);
      if (
        (u === NodeFilter.FILTER_ACCEPT && i(c), u !== NodeFilter.FILTER_REJECT)
      ) {
        let f = a.nextNode();
        for (; f != null; ) i(f), (f = a.nextNode());
      }
    },
    i = (c) => {
      var d;
      let a = (d = D.get(c)) !== null && d !== void 0 ? d : 0;
      (c.getAttribute('aria-hidden') === 'true' && a === 0) ||
        (a === 0 && c.setAttribute('aria-hidden', 'true'),
        n.add(c),
        D.set(c, a + 1));
    };
  x.length && x[x.length - 1].disconnect(), o(t);
  let s = new MutationObserver((c) => {
    for (let d of c)
      if (
        !(d.type !== 'childList' || d.addedNodes.length === 0) &&
        ![...r, ...n].some((a) => a.contains(d.target))
      ) {
        for (let a of d.removedNodes)
          a instanceof Element && (r.delete(a), n.delete(a));
        for (let a of d.addedNodes)
          (a instanceof HTMLElement || a instanceof SVGElement) &&
          (a.dataset.liveAnnouncer === 'true' ||
            a.dataset.reactAriaTopLayer === 'true')
            ? r.add(a)
            : a instanceof Element && o(a);
      }
  });
  s.observe(t, { childList: !0, subtree: !0 });
  let l = {
    observe() {
      s.observe(t, { childList: !0, subtree: !0 });
    },
    disconnect() {
      s.disconnect();
    },
  };
  return (
    x.push(l),
    () => {
      s.disconnect();
      for (let c of n) {
        let d = D.get(c);
        d === 1
          ? (c.removeAttribute('aria-hidden'), D.delete(c))
          : D.set(c, d - 1);
      }
      l === x[x.length - 1]
        ? (x.pop(), x.length && x[x.length - 1].observe())
        : x.splice(x.indexOf(l), 1);
    }
  );
}
function Xt(e, t) {
  let {
      triggerRef: r,
      popoverRef: n,
      isNonModal: o,
      isKeyboardDismissDisabled: i,
      shouldCloseOnInteractOutside: s,
      ...l
    } = e,
    { overlayProps: c, underlayProps: d } = Vt(
      {
        isOpen: t.isOpen,
        onClose: t.close,
        shouldCloseOnBlur: !0,
        isDismissable: !o,
        isKeyboardDismissDisabled: i,
        shouldCloseOnInteractOutside: s,
      },
      n
    ),
    {
      overlayProps: a,
      arrowProps: u,
      placement: f,
    } = ut({
      ...l,
      targetRef: r,
      overlayRef: n,
      isOpen: t.isOpen,
      onClose: o ? t.close : null,
    });
  return (
    zt({ isDisabled: o || !t.isOpen }),
    h(() => {
      if (t.isOpen && !o && n.current) return Jt([n.current]);
    }, [o, t.isOpen, n]),
    { popoverProps: q(c, a), arrowProps: u, underlayProps: d, placement: f }
  );
}
const Zt = b.createContext({});
function Qt() {
  var e;
  return (e = b.useContext(Zt)) !== null && e !== void 0 ? e : {};
}
const Xe = p.createContext(null);
function er(e) {
  let t = tt(),
    { portalContainer: r = t ? null : document.body, isExiting: n } = e,
    [o, i] = b.useState(!1),
    s = b.useMemo(() => ({ contain: o, setContain: i }), [o, i]),
    { getContainer: l } = Qt();
  if ((!e.portalContainer && l && (r = l()), !r)) return null;
  let c = e.children;
  return (
    e.disableFocusManagement ||
      (c = p.createElement(Rt, { restoreFocus: !0, contain: o && !n }, c)),
    (c = p.createElement(
      Xe.Provider,
      { value: s },
      p.createElement(Ct, null, c)
    )),
    mt.createPortal(c, r)
  );
}
function tr() {
  let e = b.useContext(Xe),
    t = e == null ? void 0 : e.setContain;
  h(() => {
    t == null || t(!0);
  }, [t]);
}
function rr(e, t) {
  let { role: r = 'dialog' } = e,
    n = rt();
  n = e['aria-label'] ? void 0 : n;
  let o = b.useRef(!1);
  return (
    b.useEffect(() => {
      if (t.current && !t.current.contains(document.activeElement)) {
        H(t.current);
        let i = setTimeout(() => {
          document.activeElement === t.current &&
            ((o.current = !0),
            t.current && (t.current.blur(), H(t.current)),
            (o.current = !1));
        }, 500);
        return () => {
          clearTimeout(i);
        };
      }
    }, [t]),
    tr(),
    {
      dialogProps: {
        ...G(e, { labelable: !0 }),
        role: r,
        tabIndex: -1,
        'aria-labelledby': e['aria-labelledby'] || n,
        onBlur: (i) => {
          o.current && i.stopPropagation();
        },
      },
      titleProps: { id: n },
    }
  );
}
const Ze = b.createContext(null);
function nr(e, t) {
  [e, t] = de(e, t, Ze);
  let r = b.useContext(X),
    n = ue(e),
    o = e.isOpen != null || e.defaultOpen != null || !r ? n : r,
    i = nt(t, o.isOpen) || e.isExiting || !1;
  if (gt()) {
    let l = e.children;
    return (
      typeof l == 'function' &&
        (l = l({
          trigger: e.trigger || null,
          placement: 'bottom',
          isEntering: !1,
          isExiting: !1,
          defaultChildren: null,
        })),
      p.createElement(p.Fragment, null, l)
    );
  }
  return o && !o.isOpen && !i
    ? null
    : p.createElement(or, {
        ...e,
        triggerRef: e.triggerRef,
        state: o,
        popoverRef: t,
        isExiting: i,
      });
}
const vr = b.forwardRef(nr);
function or({ state: e, isExiting: t, UNSTABLE_portalContainer: r, ...n }) {
  let o = b.useRef(null),
    [i, s] = b.useState(0);
  h(() => {
    o.current && e.isOpen && s(o.current.getBoundingClientRect().width);
  }, [e.isOpen, o]);
  var l;
  let {
      popoverProps: c,
      underlayProps: d,
      arrowProps: a,
      placement: u,
    } = Xt(
      {
        ...n,
        offset: (l = n.offset) !== null && l !== void 0 ? l : 8,
        arrowSize: i,
      },
      e
    ),
    f = n.popoverRef,
    v = ot(f, !!u) || n.isEntering || !1,
    $ = it({
      ...n,
      defaultClassName: 'react-aria-Popover',
      values: {
        trigger: n.trigger || null,
        placement: u,
        isEntering: v,
        isExiting: t,
      },
    }),
    N = { ...c.style, ...$.style };
  return p.createElement(
    er,
    { isExiting: t, portalContainer: r },
    !n.isNonModal &&
      e.isOpen &&
      p.createElement('div', {
        'data-testid': 'underlay',
        ...d,
        style: { position: 'fixed', inset: 0 },
      }),
    p.createElement(
      'div',
      {
        ...q(G(n), c),
        ...$,
        ref: f,
        slot: n.slot || void 0,
        style: N,
        'data-trigger': n.trigger,
        'data-placement': u,
        'data-entering': v || void 0,
        'data-exiting': t || void 0,
      },
      !n.isNonModal && p.createElement(le, { onDismiss: e.close }),
      p.createElement(
        ft.Provider,
        { value: { ...a, placement: u, ref: o } },
        $.children
      ),
      p.createElement(le, { onDismiss: e.close })
    )
  );
}
const Qe = b.createContext(null),
  X = b.createContext(null);
function pr(e) {
  let t = ue(e),
    r = b.useRef(null),
    { triggerProps: n, overlayProps: o } = Ut({ type: 'dialog' }, t, r);
  return (
    (n.id = se()),
    (o['aria-labelledby'] = n.id),
    p.createElement(
      ce,
      {
        values: [
          [X, t],
          [Qe, o],
          [Ze, { trigger: 'DialogTrigger', triggerRef: r }],
        ],
      },
      p.createElement(Nt, { ...n, ref: r, isPressed: t.isOpen }, e.children)
    )
  );
}
function ir(e, t) {
  let r = e['aria-labelledby'];
  [e, t] = de(e, t, Qe);
  let { dialogProps: n, titleProps: o } = rr({ ...e, 'aria-labelledby': r }, t),
    i = b.useContext(X),
    s = e.children;
  typeof s == 'function' &&
    (s = s({ close: (i == null ? void 0 : i.close) || (() => {}) })),
    !n['aria-label'] &&
      !n['aria-labelledby'] &&
      (e['aria-labelledby']
        ? (n['aria-labelledby'] = e['aria-labelledby'])
        : console.warn(
            'If a Dialog does not contain a <Heading slot="title">, it must have an aria-label or aria-labelledby attribute for accessibility.'
          ));
  var l;
  return p.createElement(
    'section',
    {
      ...G(e),
      ...n,
      ref: t,
      slot: e.slot || void 0,
      style: e.style,
      className:
        (l = e.className) !== null && l !== void 0 ? l : 'react-aria-Dialog',
    },
    p.createElement(
      ce,
      { values: [[st, { slots: { [at]: {}, title: { ...o, level: 2 } } }]] },
      s
    )
  );
}
const mr = b.forwardRef(ir);
export {
  pr as $,
  vr as a,
  mr as b,
  X as c,
  Rt as d,
  Vt as e,
  zt as f,
  tr as g,
  Jt as h,
  er as i,
  le as j,
  Ze as k,
  Nt as l,
  St as m,
  te as n,
  C as o,
  Ut as p,
  Ht as q,
};
