import { j as h } from './jsx-runtime-CkxqCPlQ.js';
import {
  b as L,
  a as y,
  $ as H,
  h as I,
  c as k,
  o as A,
  l as N,
  p as W,
  d as _,
} from './utils-BgHHH9V7.js';
import { a as q, b as V, c as U, $ as K } from './OverlayArrow-DliHpoDG.js';
import {
  b as z,
  d as S,
  h as Y,
  a as G,
  i as J,
  j as Q,
} from './index-BqgWbNE6.js';
import { r as n, R as c } from './index-DJO9vBfz.js';
import { F as X } from './index-DJdX7xnk.js';
import { $ as Z } from './Button-CoD-b_IN.js';
import { s as O } from './factory-BfbsYOSY.js';
const ee = 1500,
  R = 500;
let p = {},
  te = 0,
  T = !1,
  $ = null,
  b = null;
function D(e = {}) {
  let { delay: t = ee, closeDelay: r = R } = e,
    { isOpen: a, open: i, close: d } = q(e),
    o = n.useMemo(() => `${++te}`, []),
    l = n.useRef(void 0),
    u = n.useRef(d),
    s = () => {
      p[o] = v;
    },
    m = () => {
      for (let f in p) f !== o && (p[f](!0), delete p[f]);
    },
    x = () => {
      clearTimeout(l.current),
        (l.current = null),
        m(),
        s(),
        (T = !0),
        i(),
        $ && (clearTimeout($), ($ = null)),
        b && (clearTimeout(b), (b = null));
    },
    v = (f) => {
      f || r <= 0
        ? (clearTimeout(l.current), (l.current = null), u.current())
        : l.current ||
          (l.current = setTimeout(() => {
            (l.current = null), u.current();
          }, r)),
        $ && (clearTimeout($), ($ = null)),
        T &&
          (b && clearTimeout(b),
          (b = setTimeout(
            () => {
              delete p[o], (b = null), (T = !1);
            },
            Math.max(R, r)
          )));
    },
    E = () => {
      m(),
        s(),
        !a && !$ && !T
          ? ($ = setTimeout(() => {
              ($ = null), (T = !0), x();
            }, t))
          : a || x();
    };
  return (
    n.useEffect(() => {
      u.current = d;
    }, [d]),
    n.useEffect(
      () => () => {
        clearTimeout(l.current), p[o] && delete p[o];
      },
      [o]
    ),
    {
      isOpen: a,
      open: (f) => {
        !f && t > 0 && !l.current ? E() : x();
      },
      close: v,
    }
  );
}
const P = c.createContext(null);
function re(e) {
  let { children: t } = e,
    r = n.useContext(P),
    [a, i] = n.useState(0),
    d = n.useMemo(
      () => ({
        parent: r,
        modalCount: a,
        addModal() {
          i((o) => o + 1), r && r.addModal();
        },
        removeModal() {
          i((o) => o - 1), r && r.removeModal();
        },
      }),
      [r, a]
    );
  return c.createElement(P.Provider, { value: d }, t);
}
function oe() {
  let e = n.useContext(P);
  return {
    modalProviderProps: { 'aria-hidden': e && e.modalCount > 0 ? !0 : null },
  };
}
function le(e) {
  let { modalProviderProps: t } = oe();
  return c.createElement('div', { 'data-overlay-container': !0, ...e, ...t });
}
function ae(e) {
  return c.createElement(re, null, c.createElement(le, e));
}
function ne(e) {
  let t = L(),
    { portalContainer: r = t ? null : document.body, ...a } = e;
  if (
    (c.useEffect(() => {
      if (r != null && r.closest('[data-overlay-container]'))
        throw new Error(
          'An OverlayContainer must not be inside another container. Please change the portalContainer prop.'
        );
    }, [r]),
    !r)
  )
    return null;
  let i = c.createElement(ae, a);
  return X.createPortal(i, r);
}
function ie(e, t) {
  let r = z(e, { labelable: !0 }),
    { hoverProps: a } = S({
      onHoverStart: () => (t == null ? void 0 : t.open(!0)),
      onHoverEnd: () => (t == null ? void 0 : t.close()),
    });
  return { tooltipProps: y(r, a, { role: 'tooltip' }) };
}
function de(e, t, r) {
  let { isDisabled: a, trigger: i } = e,
    d = H(),
    o = n.useRef(!1),
    l = n.useRef(!1),
    u = () => {
      (o.current || l.current) && t.open(l.current);
    },
    s = (g) => {
      !o.current && !l.current && t.close(g);
    };
  n.useEffect(() => {
    let g = (C) => {
      r &&
        r.current &&
        C.key === 'Escape' &&
        (C.stopPropagation(), t.close(!0));
    };
    if (t.isOpen)
      return (
        document.addEventListener('keydown', g, !0),
        () => {
          document.removeEventListener('keydown', g, !0);
        }
      );
  }, [r, t]);
  let m = () => {
      i !== 'focus' &&
        (Y() === 'pointer' ? (o.current = !0) : (o.current = !1), u());
    },
    x = () => {
      i !== 'focus' && ((l.current = !1), (o.current = !1), s());
    },
    v = () => {
      (l.current = !1), (o.current = !1), s(!0);
    },
    E = () => {
      J() && ((l.current = !0), u());
    },
    f = () => {
      (l.current = !1), (o.current = !1), s(!0);
    },
    { hoverProps: j } = S({ isDisabled: a, onHoverStart: m, onHoverEnd: x }),
    { focusableProps: F } = G({ isDisabled: a, onFocus: E, onBlur: f }, r);
  return {
    triggerProps: {
      'aria-describedby': t.isOpen ? d : void 0,
      ...y(F, j, { onPointerDown: v, onKeyDown: v }),
    },
    tooltipProps: { id: d },
  };
}
const w = n.createContext(null),
  B = n.createContext(null);
function ce(e) {
  let t = D(e),
    r = n.useRef(null),
    { triggerProps: a, tooltipProps: i } = de(e, t, r);
  return c.createElement(
    I,
    {
      values: [
        [w, t],
        [B, { ...i, triggerRef: r }],
      ],
    },
    c.createElement(Q, { ...a, ref: r }, e.children)
  );
}
function se({ UNSTABLE_portalContainer: e, ...t }, r) {
  [t, r] = k(t, r, B);
  let a = n.useContext(w),
    i = D(t),
    d = t.isOpen != null || t.defaultOpen != null || !a ? i : a,
    o = A(r, d.isOpen) || t.isExiting || !1;
  return !d.isOpen && !o
    ? null
    : c.createElement(
        ne,
        { portalContainer: e },
        c.createElement(ue, { ...t, tooltipRef: r, isExiting: o })
      );
}
const fe = n.forwardRef(se);
function ue(e) {
  let t = n.useContext(w),
    r = n.useRef(null),
    [a, i] = n.useState(0);
  N(() => {
    r.current && t.isOpen && i(r.current.getBoundingClientRect().width);
  }, [t.isOpen, r]);
  let {
      overlayProps: d,
      arrowProps: o,
      placement: l,
    } = V({
      placement: e.placement || 'top',
      targetRef: e.triggerRef,
      overlayRef: e.tooltipRef,
      offset: e.offset,
      crossOffset: e.crossOffset,
      isOpen: t.isOpen,
      arrowSize: a,
      arrowBoundaryOffset: e.arrowBoundaryOffset,
      shouldFlip: e.shouldFlip,
    }),
    u = W(e.tooltipRef, !!l) || e.isEntering || !1,
    s = _({
      ...e,
      defaultClassName: 'react-aria-Tooltip',
      values: { placement: l, isEntering: u, isExiting: e.isExiting, state: t },
    });
  e = y(e, d);
  let { tooltipProps: m } = ie(e, t);
  return c.createElement(
    'div',
    {
      ...m,
      ref: e.tooltipRef,
      ...s,
      style: { ...d.style, ...s.style },
      'data-placement': l,
      'data-entering': u || void 0,
      'data-exiting': e.isExiting || void 0,
    },
    c.createElement(
      U.Provider,
      { value: { ...o, placement: l, ref: r } },
      s.children
    )
  );
}
const $e = O(fe, {
    base: {
      backgroundColor: '$text',
      paddingBlock: '$xs',
      paddingInline: '$small',
      borderRadius: '$regular',
      color: '$neutral5',
      outline: 'none',
      textStyle: '$bodySmall',
      boxShadow: '$regular',
    },
  }),
  pe = O(K, {
    base: {
      display: 'inline-flex',
      '& svg': { fill: '$text' },
      '&[data-placement="bottom"] svg': { transform: 'rotate(180deg)' },
      '&[data-placement="right"] svg': { transform: 'rotate(90deg)' },
      '&[data-placement="left"] svg': { transform: 'rotate(-90deg)' },
    },
  }),
  be = O(Z, { base: { all: 'unset' } }),
  me = 8,
  M = ({
    children: e,
    content: t,
    placement: r = 'top',
    delay: a = 300,
    closeDelay: i = 100,
    className: d,
    style: o,
    ...l
  }) =>
    h.jsxs(ce, {
      ...l,
      delay: a,
      closeDelay: i,
      'data-testid': 'tooltip',
      children: [
        e,
        h.jsxs($e, {
          style: o,
          className: d,
          placement: r,
          offset: me,
          'data-testid': 'tooltip-content',
          children: [
            h.jsx(pe, {
              children: h.jsx('svg', {
                width: 8,
                height: 8,
                viewBox: '0 0 8 8',
                children: h.jsx('path', { d: 'M0 0 L4 4 L8 0' }),
              }),
            }),
            t,
          ],
        }),
      ],
    }),
  Oe = Object.assign(M, { Trigger: be });
M.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'TooltipBase',
  props: {
    content: { required: !0, tsType: { name: 'ReactNode' }, description: '' },
    children: { required: !0, tsType: { name: 'ReactNode' }, description: '' },
    placement: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'top' | 'bottom' | 'left' | 'right'",
        elements: [
          { name: 'literal', value: "'top'" },
          { name: 'literal', value: "'bottom'" },
          { name: 'literal', value: "'left'" },
          { name: 'literal', value: "'right'" },
        ],
      },
      description: '',
      defaultValue: { value: "'top'", computed: !1 },
    },
    delay: { defaultValue: { value: '300', computed: !1 }, required: !1 },
    closeDelay: { defaultValue: { value: '100', computed: !1 }, required: !1 },
  },
};
export { Oe as T };
