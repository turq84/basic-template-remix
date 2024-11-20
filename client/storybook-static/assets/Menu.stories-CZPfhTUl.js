import { j as a } from './jsx-runtime-CkxqCPlQ.js';
import { r as i, R as $ } from './index-DJO9vBfz.js';
import { s as S } from './factory-BfbsYOSY.js';
import {
  $ as Re,
  b as D,
  d as fe,
  i as Fe,
  m as Te,
  n as Be,
  e as _e,
  I as Ne,
} from './index-BqgWbNE6.js';
import { I as H } from './index-SulxIKOx.js';
import { b as Le } from './index-DdgtEVhA.js';
import {
  a as Ve,
  b as ze,
  c as He,
  d as Oe,
  e as Ue,
  f as We,
  l as qe,
  m as Ge,
  g as me,
  i as Je,
  j as Qe,
  k as Xe,
  o as Ye,
  n as Ze,
  p as et,
  q as tt,
  r as nt,
} from './Separator-p0-S5q3W.js';
import {
  a as O,
  i as L,
  $ as ot,
  h as U,
  c as be,
  d as W,
  f as at,
  e as rt,
  m as st,
} from './utils-BgHHH9V7.js';
import {
  c as it,
  k as V,
  l as lt,
  m as dt,
  d as ct,
  a as ut,
} from './Dialog-BVyDrX3O.js';
import { $ as pt } from './index-CxY2JlPL.js';
import { a as ft, e as mt } from './OverlayArrow-DliHpoDG.js';
import { $ as bt } from './useMenuTrigger-DcMVX-dm.js';
import { b as $t, $ as gt, a as xt } from './usePress-BFY2e0Rh.js';
import { S as yt } from './common-CFf48SXD.js';
import { S as q } from './index-CbVkzzMr.js';
import './Button-CoD-b_IN.js';
import './Hidden-2-bsQ4Y9.js';
import './index-DJdX7xnk.js';
import './useButton-DZEnpN8J.js';
import './index-Vm1tHATy.js';
import './VisuallyHidden-BiYBAiUW.js';
import './useLabels-D003iZWB.js';
function ht(t) {
  let e = ft(t),
    [n, s] = i.useState(null),
    [o, d] = i.useState([]),
    r = () => {
      d([]), e.close();
    };
  return {
    focusStrategy: n,
    ...e,
    open(l = null) {
      s(l), e.open();
    },
    toggle(l = null) {
      s(l), e.toggle();
    },
    close() {
      r();
    },
    expandedKeysStack: o,
    openSubmenu: (l, m) => {
      d((b) => (m > b.length ? b : [...b.slice(0, m), l]));
    },
    closeSubmenu: (l, m) => {
      d((b) => (b[m] === l ? b.slice(0, m) : b));
    },
  };
}
class Mt {
  *[Symbol.iterator]() {
    yield* this.iterable;
  }
  get size() {
    return this.keyMap.size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(e) {
    let n = this.keyMap.get(e);
    return n ? n.prevKey : null;
  }
  getKeyAfter(e) {
    let n = this.keyMap.get(e);
    return n ? n.nextKey : null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(e) {
    return this.keyMap.get(e);
  }
  at(e) {
    const n = [...this.getKeys()];
    return this.getItem(n[e]);
  }
  constructor(e, { expandedKeys: n } = {}) {
    (this.keyMap = new Map()), (this.iterable = e), (n = n || new Set());
    let s = (r) => {
      if (
        (this.keyMap.set(r.key, r),
        r.childNodes && (r.type === 'section' || n.has(r.key)))
      )
        for (let c of r.childNodes) s(c);
    };
    for (let r of e) s(r);
    let o,
      d = 0;
    for (let [r, c] of this.keyMap)
      o
        ? ((o.nextKey = r), (c.prevKey = o.key))
        : ((this.firstKey = r), (c.prevKey = void 0)),
        c.type === 'item' && (c.index = d++),
        (o = c),
        (o.nextKey = void 0);
    this.lastKey = o == null ? void 0 : o.key;
  }
}
function St(t) {
  let { onExpandedChange: e } = t,
    [n, s] = Re(
      t.expandedKeys ? new Set(t.expandedKeys) : void 0,
      t.defaultExpandedKeys ? new Set(t.defaultExpandedKeys) : new Set(),
      e
    ),
    o = Ve(t),
    d = i.useMemo(
      () => (t.disabledKeys ? new Set(t.disabledKeys) : new Set()),
      [t.disabledKeys]
    ),
    r = ze(
      t,
      i.useCallback((u) => new Mt(u, { expandedKeys: n }), [n]),
      null
    );
  return (
    i.useEffect(() => {
      o.focusedKey != null && !r.getItem(o.focusedKey) && o.setFocusedKey(null);
    }, [r, o.focusedKey]),
    {
      collection: r,
      expandedKeys: n,
      disabledKeys: d,
      toggleKey: (u) => {
        s(vt(n, u));
      },
      setExpandedKeys: s,
      selectionManager: new He(r, o),
    }
  );
}
function vt(t, e) {
  let n = new Set(t);
  return n.has(e) ? n.delete(e) : n.add(e), n;
}
const $e = new WeakMap();
function Pt(t, e, n) {
  let { shouldFocusWrap: s = !0, onKeyDown: o, onKeyUp: d, ...r } = t;
  !t['aria-label'] &&
    !t['aria-labelledby'] &&
    console.warn(
      'An aria-label or aria-labelledby prop is required for accessibility.'
    );
  let c = D(t, { labelable: !0 }),
    { listProps: u } = Oe({
      ...r,
      ref: n,
      selectionManager: e.selectionManager,
      collection: e.collection,
      disabledKeys: e.disabledKeys,
      shouldFocusWrap: s,
      linkBehavior: 'override',
    });
  return (
    $e.set(e, { onClose: t.onClose, onAction: t.onAction }),
    {
      menuProps: O(
        c,
        { onKeyDown: o, onKeyUp: d },
        {
          role: 'menu',
          ...u,
          onKeyDown: (l) => {
            l.key !== 'Escape' && u.onKeyDown(l);
          },
        }
      ),
    }
  );
}
function It(t, e, n) {
  let {
      id: s,
      key: o,
      closeOnSelect: d,
      isVirtualized: r,
      'aria-haspopup': c,
      onPressStart: u,
      onPressUp: l,
      onPress: m,
      onPressChange: b,
      onPressEnd: g,
      onHoverStart: y,
      onHoverChange: I,
      onHoverEnd: C,
      onKeyDown: h,
      onKeyUp: K,
      onFocus: R,
      onFocusChange: Me,
      onBlur: Se,
    } = t,
    M = !!c;
  var F;
  let v =
    (F = t.isDisabled) !== null && F !== void 0
      ? F
      : e.selectionManager.isDisabled(o);
  var T;
  let Q =
      (T = t.isSelected) !== null && T !== void 0
        ? T
        : e.selectionManager.isSelected(o),
    B = $e.get(e),
    x = e.collection.getItem(o),
    P = t.onClose || B.onClose,
    ve = $t(),
    X = (f) => {
      var N;
      if (!M) {
        if (
          (!(x == null || (N = x.props) === null || N === void 0) && N.onAction
            ? x.props.onAction()
            : t.onAction && t.onAction(o),
          B.onAction)
        ) {
          let De = B.onAction;
          De(o);
        }
        f.target instanceof HTMLAnchorElement &&
          ve.open(f.target, f, x.props.href, x.props.routerOptions);
      }
    },
    _ = 'menuitem';
  M ||
    (e.selectionManager.selectionMode === 'single'
      ? (_ = 'menuitemradio')
      : e.selectionManager.selectionMode === 'multiple' &&
        (_ = 'menuitemcheckbox'));
  let Y = L(),
    Z = L(),
    ee = L(),
    k = {
      id: s,
      'aria-disabled': v || void 0,
      role: _,
      'aria-label': t['aria-label'],
      'aria-labelledby': Y,
      'aria-describedby': [Z, ee].filter(Boolean).join(' ') || void 0,
      'aria-controls': t['aria-controls'],
      'aria-haspopup': c,
      'aria-expanded': t['aria-expanded'],
    };
  e.selectionManager.selectionMode !== 'none' && !M && (k['aria-checked'] = Q),
    r &&
      ((k['aria-posinset'] = x == null ? void 0 : x.index),
      (k['aria-setsize'] = Ue(e.collection)));
  let Pe = (f) => {
      f.pointerType === 'keyboard' && X(f), u == null || u(f);
    },
    Ie = (f) => {
      f.pointerType !== 'keyboard' &&
        (X(f),
        !M &&
          P &&
          (d ??
            (e.selectionManager.selectionMode !== 'multiple' ||
              e.selectionManager.isLink(o))) &&
          P()),
        l == null || l(f);
    },
    { itemProps: j, isFocused: Ce } = We({
      selectionManager: e.selectionManager,
      key: o,
      ref: n,
      shouldSelectOnPressUp: !0,
      allowsDifferentPressOrigin: !0,
      linkBehavior: 'none',
    }),
    { pressProps: Ke, isPressed: ke } = gt({
      onPressStart: Pe,
      onPress: m,
      onPressUp: Ie,
      onPressChange: b,
      onPressEnd: g,
      isDisabled: v,
    }),
    { hoverProps: je } = fe({
      isDisabled: v,
      onHoverStart(f) {
        Fe() ||
          (e.selectionManager.setFocused(!0),
          e.selectionManager.setFocusedKey(o)),
          y == null || y(f);
      },
      onHoverChange: I,
      onHoverEnd: C,
    }),
    { keyboardProps: Ee } = Te({
      onKeyDown: (f) => {
        if (f.repeat) {
          f.continuePropagation();
          return;
        }
        switch (f.key) {
          case ' ':
            !v &&
              e.selectionManager.selectionMode === 'none' &&
              !M &&
              d !== !1 &&
              P &&
              P();
            break;
          case 'Enter':
            !v && d !== !1 && !M && P && P();
            break;
          default:
            M || f.continuePropagation(), h == null || h(f);
            break;
        }
      },
      onKeyUp: K,
    }),
    { focusProps: we } = Be({ onBlur: Se, onFocus: R, onFocusChange: Me }),
    te = D(x.props);
  delete te.id;
  let Ae = xt(x.props);
  return {
    menuItemProps: {
      ...k,
      ...O(
        te,
        Ae,
        M ? { onFocus: j.onFocus, 'data-key': j['data-key'] } : j,
        Ke,
        je,
        Ee,
        we
      ),
      tabIndex: j.tabIndex != null ? -1 : void 0,
    },
    labelProps: { id: Y },
    descriptionProps: { id: Z },
    keyboardShortcutProps: { id: ee },
    isFocused: Ce,
    isSelected: Q,
    isPressed: ke,
    isDisabled: v,
  };
}
function Ct(t) {
  let { heading: e, 'aria-label': n } = t,
    s = ot();
  return {
    itemProps: { role: 'presentation' },
    headingProps: e ? { id: s, role: 'presentation' } : {},
    groupProps: {
      role: 'group',
      'aria-label': n,
      'aria-labelledby': e ? s : void 0,
    },
  };
}
const Kt = i.createContext({}),
  ge = i.createContext(null),
  G = i.createContext(null),
  xe = i.createContext(null);
function kt(t) {
  let e = ht(t),
    n = i.useRef(null),
    { menuTriggerProps: s, menuProps: o } = bt({ ...t, type: 'menu' }, e, n),
    [d, r] = i.useState(null),
    c = i.useCallback(() => {
      n.current && r(n.current.offsetWidth + 'px');
    }, [n]);
  mt({ ref: n, onResize: c });
  let u = i.useRef(null);
  return $.createElement(
    U,
    {
      values: [
        [ge, { ...o, ref: u }],
        [it, e],
        [xe, e],
        [
          V,
          {
            trigger: 'MenuTrigger',
            triggerRef: n,
            scrollRef: u,
            placement: 'bottom start',
            style: { '--trigger-width': d },
          },
        ],
      ],
    },
    $.createElement(lt, { ...s, ref: n, isPressed: e.isOpen }, t.children)
  );
}
const jt = i.createContext(null);
function Et(t, e) {
  return (
    ([t, e] = be(t, e, ge)),
    $.createElement(
      qe,
      { content: $.createElement(Ge, t) },
      (n) =>
        n.size > 0 &&
        $.createElement(wt, { props: t, collection: n, menuRef: e })
    )
  );
}
function wt({ props: t, collection: e, menuRef: n }) {
  let s = St({ ...t, collection: e, children: void 0 }),
    [o, d] = i.useState(null),
    { isVirtualized: r, CollectionRoot: c } = i.useContext(me),
    { menuProps: u } = Pt({ ...t, isVirtualized: r }, s, n),
    l = i.useContext(xe),
    m = i.useContext(V),
    b = (m == null ? void 0 : m.trigger) === 'SubmenuTrigger';
  dt({
    ref: n,
    onInteractOutside: (h) => {
      l && !(o != null && o.contains(h.target)) && l.close();
    },
    isDisabled: b || (l == null ? void 0 : l.expandedKeysStack.length) === 0,
  });
  let g = i.useRef(null),
    [y, I] = i.useState({ left: 0 });
  i.useEffect(() => {
    if (o && g.current !== o && y.left === 0) {
      g.current = o;
      let { left: h } = o.getBoundingClientRect();
      I({ left: -1 * h });
    }
  }, [y, o]);
  let C = W({
    defaultClassName: 'react-aria-Menu',
    className: t.className,
    style: t.style,
    values: {},
  });
  return $.createElement(
    ct,
    null,
    $.createElement(
      'div',
      {
        ...D(t),
        ...u,
        ...C,
        ref: n,
        slot: t.slot || void 0,
        onScroll: t.onScroll,
      },
      $.createElement(
        U,
        {
          values: [
            [G, s],
            [Je, { elementType: 'div' }],
            [V, { UNSTABLE_portalContainer: o || void 0 }],
            [Qe, { render: Dt }],
            [jt, { parentMenuRef: n }],
            [z, null],
          ],
        },
        $.createElement(c, {
          collection: e,
          persistedKeys: Ye(s.selectionManager.focusedKey),
          scrollRef: n,
        })
      )
    ),
    $.createElement('div', {
      ref: d,
      style: { width: '100vw', position: 'absolute', top: 0, ...y },
    })
  );
}
const At = i.forwardRef(Et);
function Dt(t, e, n) {
  var s, o;
  let d = i.useContext(G),
    { CollectionBranch: r } = i.useContext(me),
    [c, u] = at();
  var l;
  let { headingProps: m, groupProps: b } = Ct({
      heading: u,
      'aria-label':
        (l = n.props['aria-label']) !== null && l !== void 0 ? l : void 0,
    }),
    g = W({
      defaultClassName: 'react-aria-Section',
      className: (s = n.props) === null || s === void 0 ? void 0 : s.className,
      style: (o = n.props) === null || o === void 0 ? void 0 : o.style,
      values: {},
    });
  return $.createElement(
    'section',
    { ...D(t), ...b, ...g, ref: e },
    $.createElement(
      Xe.Provider,
      { value: { ...m, ref: c } },
      $.createElement(r, { collection: d.collection, parent: n })
    )
  );
}
const z = i.createContext(null),
  Rt = Ze('item', function (e, n, s) {
    var o;
    [e, n] = be(e, n, z);
    let d = (o = rt(z)) === null || o === void 0 ? void 0 : o.id,
      r = i.useContext(G),
      c = st(n),
      {
        menuItemProps: u,
        labelProps: l,
        descriptionProps: m,
        keyboardShortcutProps: b,
        ...g
      } = It({ ...e, id: d, key: s.key }, r, c),
      { isFocusVisible: y, focusProps: I } = _e(),
      { hoverProps: C, isHovered: h } = fe({ isDisabled: g.isDisabled }),
      K = W({
        ...e,
        id: void 0,
        children: s.rendered,
        defaultClassName: 'react-aria-MenuItem',
        values: {
          ...g,
          isHovered: h,
          isFocusVisible: y,
          selectionMode: r.selectionManager.selectionMode,
          selectionBehavior: r.selectionManager.selectionBehavior,
          hasSubmenu: !!e['aria-haspopup'],
          isOpen: e['aria-expanded'] === 'true',
        },
      }),
      R = e.href ? 'a' : 'div';
    return $.createElement(
      R,
      {
        ...O(u, I, C),
        ...K,
        ref: c,
        'data-disabled': g.isDisabled || void 0,
        'data-hovered': h || void 0,
        'data-focused': g.isFocused || void 0,
        'data-focus-visible': y || void 0,
        'data-pressed': g.isPressed || void 0,
        'data-selected': g.isSelected || void 0,
        'data-selection-mode':
          r.selectionManager.selectionMode === 'none'
            ? void 0
            : r.selectionManager.selectionMode,
        'data-has-submenu': !!e['aria-haspopup'] || void 0,
        'data-open': e['aria-expanded'] === 'true' || void 0,
      },
      $.createElement(
        U,
        {
          values: [
            [pt, { slots: { label: l, description: m } }],
            [Kt, b],
          ],
        },
        K.children
      )
    );
  }),
  J = i.forwardRef(
    (
      {
        trigger: t,
        children: e,
        className: n,
        style: s,
        offset: o = 8,
        placement: d = 'bottom start',
        selected: r,
        selectionMode: c,
        ...u
      },
      l
    ) =>
      a.jsxs(kt, {
        'data-testid': 'menu',
        ...u,
        children: [
          t,
          a.jsx(ut, {
            'data-testid': 'menu-popover',
            offset: o,
            placement: d,
            className: ({ isEntering: m, isExiting: b }) =>
              Ft({ isEntering: m, isExiting: b }),
            children: a.jsx(Tt, {
              selectedKeys: r,
              selectionMode: c,
              ref: l,
              style: s,
              className: n,
              'data-testid': 'menu-items',
              children: e,
            }),
          }),
        ],
      })
  );
J.displayName = 'Menu';
const ye = i.forwardRef(({ children: t, ...e }, n) =>
  a.jsx(Bt, {
    ref: n,
    'data-testid': 'menu-item',
    ...e,
    children: a.jsxs(q, {
      direction: 'row',
      gap: 'small',
      align: 'center',
      justify: 'space-between',
      children: [t, a.jsx(yt, {})],
    }),
  })
);
ye.displayName = 'MenuItem';
const he = i.forwardRef(({ title: t, children: e, ...n }, s) =>
  a.jsxs(Lt, {
    'data-testid': 'menu-section',
    ref: s,
    ...n,
    children: [
      a.jsx(Nt, { 'data-testid': 'menu-section-title', children: t }),
      e,
    ],
  })
);
he.displayName = 'MenuSection';
const Ft = Le({
    base: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      minWidth: '180px',
      padding: '$xs',
      borderRadius: '$small',
      borderWidth: '1px',
      borderColor: '$line3',
      boxShadow: '$regular',
      backgroundColor: '$surface',
    },
    variants: {
      isEntering: {
        true: { animation: 'menu-animation 150ms ease-out forwards' },
      },
      isExiting: {
        true: { animation: 'menu-animation 100ms ease-in reverse' },
      },
    },
  }),
  Tt = S(At, { base: { outline: 'none' } }),
  Bt = S(Rt, {
    base: {
      outline: 'none',
      display: 'block',
      padding: '$xs',
      textStyle: '$bodySmall',
      borderRadius: '$small',
      cursor: 'pointer',
      '&[data-hovered="true"], &[data-focused="true"], &[data-selected="true"]':
        { backgroundColor: '$primaryMuted' },
      '&[data-selected="true"] .selected-icon': { display: 'block' },
    },
  }),
  _t = S(nt, {
    base: { height: '1px', backgroundColor: '$line3', marginBlock: '$xxs' },
  }),
  Nt = S(tt, {
    base: {
      padding: '$xs',
      paddingBottom: '$xxs',
      color: '$textMuted',
      textStyle: '$overlineSmall',
    },
  }),
  Lt = S(et, {
    base: { display: 'flex', flexDirection: 'column', gap: '2px' },
  }),
  p = Object.assign(J, { Item: ye, Separator: _t, Section: he });
J.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Menu',
  props: {
    children: { required: !0, tsType: { name: 'ReactNode' }, description: '' },
    trigger: { required: !0, tsType: { name: 'ReactNode' }, description: '' },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
    style: { required: !1, tsType: { name: 'CSSProperties' }, description: '' },
    offset: {
      required: !1,
      tsType: { name: "PopoverProps['offset']", raw: "PopoverProps['offset']" },
      description: '',
      defaultValue: { value: '8', computed: !1 },
    },
    placement: {
      required: !1,
      tsType: {
        name: "PopoverProps['placement']",
        raw: "PopoverProps['placement']",
      },
      description: '',
      defaultValue: { value: "'bottom start'", computed: !1 },
    },
    selected: {
      required: !1,
      tsType: {
        name: 'Set',
        elements: [{ name: 'string' }],
        raw: 'Set<string>',
      },
      description: '',
    },
    selectionMode: {
      required: !1,
      tsType: {
        name: "MenuProps['selectionMode']",
        raw: "MenuProps<string>['selectionMode']",
      },
      description: '',
    },
  },
};
const fn = { title: 'Menu', component: p },
  E = {
    render: () =>
      a.jsxs(p, {
        trigger: a.jsx(H, { icon: 'moreVert', label: 'More actions' }),
        children: [
          a.jsx(p.Item, {
            onAction: () => alert('copy'),
            id: 'copy',
            children: 'Copy',
          }),
          a.jsx(p.Item, {
            onAction: () => alert('cut'),
            id: 'cut',
            children: 'Cut',
          }),
          a.jsx(p.Item, {
            onAction: () => alert('paste'),
            id: 'paste',
            children: 'Paste',
          }),
        ],
      }),
  },
  w = {
    render: () =>
      a.jsxs(p, {
        trigger: a.jsx(H, { icon: 'moreVert', label: 'More actions' }),
        children: [
          a.jsxs(p.Section, {
            title: 'Edit',
            children: [
              a.jsx(p.Item, {
                onAction: () => alert('copy'),
                id: 'copy',
                children: 'Copy',
              }),
              a.jsx(p.Item, {
                onAction: () => alert('cut'),
                id: 'cut',
                children: 'Cut',
              }),
              a.jsx(p.Item, {
                onAction: () => alert('paste'),
                id: 'paste',
                children: 'Paste',
              }),
            ],
          }),
          a.jsx(p.Separator, {}),
          a.jsx(p.Section, {
            title: 'Delete',
            children: a.jsx(p.Item, {
              onAction: () => alert('delete'),
              id: 'delete',
              children: 'Delete',
            }),
          }),
        ],
      }),
  },
  ne = [
    {
      id: 'user-1',
      name: 'Admin',
      image: 'https://avatars.githubusercontent.com/u/6596332?v=4',
    },
    {
      id: 'user-2',
      name: 'Developer',
      image: 'https://avatars.githubusercontent.com/u/6152032?v=4',
    },
    {
      id: 'user-3',
      name: 'Manager',
      image: 'https://avatars.githubusercontent.com/u/14995601?v=4',
    },
  ],
  oe = [
    { id: 'lang-fi', name: 'Finnish' },
    { id: 'lang-en', name: 'English' },
    { id: 'lang-es', name: 'Spanish' },
    { id: 'lang-fr', name: 'French' },
  ],
  A = {
    render: () => {
      const [t, e] = i.useState(ne[0].id),
        [n, s] = i.useState(oe[0].id);
      return a.jsxs(p, {
        selectionMode: 'multiple',
        selected: new Set([t, n]),
        trigger: a.jsx(H, { icon: 'moreVert', label: 'More actions' }),
        style: { minWidth: 250 },
        children: [
          a.jsx(p.Section, {
            title: 'Profile',
            children: ne.map((o) =>
              a.jsx(
                p.Item,
                {
                  id: o.id,
                  onAction: () => e(o.id),
                  children: a.jsx(Vt, { image: o.image, name: o.name }),
                },
                o.id
              )
            ),
          }),
          a.jsx(p.Separator, {}),
          a.jsx(p.Section, {
            title: 'Languages',
            children: oe.map((o) =>
              a.jsx(
                p.Item,
                { id: o.id, onAction: () => s(o.id), children: o.name },
                o.id
              )
            ),
          }),
          a.jsx(p.Separator, {}),
          a.jsx(p.Section, {
            title: 'Actions',
            children: a.jsx(p.Item, {
              onAction: () => alert('logout'),
              id: 'logout',
              children: a.jsxs(q, {
                direction: 'row',
                gap: 'xs',
                align: 'center',
                children: [
                  a.jsx(Ne, { name: 'logout', color: 'text', size: 20 }),
                  a.jsx('span', { children: 'Logout' }),
                ],
              }),
            }),
          }),
        ],
      });
    },
  };
function Vt({ image: t, name: e }) {
  return a.jsxs(q, {
    direction: 'row',
    gap: 'small',
    align: 'center',
    children: [a.jsx(zt, { src: t, alt: '' }), a.jsx(Ht, { children: e })],
  });
}
const zt = S('img', {
    base: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      border: '1px solid rgba(0,0,0,0.1)',
    },
  }),
  Ht = S('span', { base: { display: 'block', flex: 1 } });
var ae, re, se;
E.parameters = {
  ...E.parameters,
  docs: {
    ...((ae = E.parameters) == null ? void 0 : ae.docs),
    source: {
      originalSource: `{
  render: () => <Menu trigger={<IconButton icon='moreVert' label='More actions' />}>
      <Menu.Item onAction={() => alert('copy')} id='copy'>
        Copy
      </Menu.Item>
      <Menu.Item onAction={() => alert('cut')} id='cut'>
        Cut
      </Menu.Item>
      <Menu.Item onAction={() => alert('paste')} id='paste'>
        Paste
      </Menu.Item>
    </Menu>
}`,
      ...((se = (re = E.parameters) == null ? void 0 : re.docs) == null
        ? void 0
        : se.source),
    },
  },
};
var ie, le, de;
w.parameters = {
  ...w.parameters,
  docs: {
    ...((ie = w.parameters) == null ? void 0 : ie.docs),
    source: {
      originalSource: `{
  render: () => <Menu trigger={<IconButton icon='moreVert' label='More actions' />}>
      <Menu.Section title='Edit'>
        <Menu.Item onAction={() => alert('copy')} id='copy'>
          Copy
        </Menu.Item>
        <Menu.Item onAction={() => alert('cut')} id='cut'>
          Cut
        </Menu.Item>
        <Menu.Item onAction={() => alert('paste')} id='paste'>
          Paste
        </Menu.Item>
      </Menu.Section>
      <Menu.Separator />
      <Menu.Section title='Delete'>
        <Menu.Item onAction={() => alert('delete')} id='delete'>
          Delete
        </Menu.Item>
      </Menu.Section>
    </Menu>
}`,
      ...((de = (le = w.parameters) == null ? void 0 : le.docs) == null
        ? void 0
        : de.source),
    },
  },
};
var ce, ue, pe;
A.parameters = {
  ...A.parameters,
  docs: {
    ...((ce = A.parameters) == null ? void 0 : ce.docs),
    source: {
      originalSource: `{
  render: () => {
    // eslint-disable-next-line
    const [selectedProfile, setSelectedProfile] = useState(profiles[0]!.id);
    // eslint-disable-next-line
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]!.id);
    return <Menu selectionMode='multiple' selected={new Set([selectedProfile, selectedLanguage])} trigger={<IconButton icon='moreVert' label='More actions' />} style={{
      minWidth: 250
    }}>
        <Menu.Section title='Profile'>
          {profiles.map(profile => <Menu.Item key={profile.id} id={profile.id} onAction={() => setSelectedProfile(profile.id)}>
              <ProfileMenuItem image={profile.image} name={profile.name} />
            </Menu.Item>)}
        </Menu.Section>

        <Menu.Separator />

        <Menu.Section title='Languages'>
          {languages.map(language => <Menu.Item key={language.id} id={language.id} onAction={() => setSelectedLanguage(language.id)}>
              {language.name}
            </Menu.Item>)}
        </Menu.Section>

        <Menu.Separator />

        <Menu.Section title='Actions'>
          <Menu.Item onAction={() => alert('logout')} id='logout'>
            <Stack direction='row' gap='xs' align='center'>
              <Icon name='logout' color='text' size={20} />
              <span>Logout</span>
            </Stack>
          </Menu.Item>
        </Menu.Section>
      </Menu>;
  }
}`,
      ...((pe = (ue = A.parameters) == null ? void 0 : ue.docs) == null
        ? void 0
        : pe.source),
    },
  },
};
const mn = ['Default', 'Sections', 'Selection'];
export {
  E as Default,
  w as Sections,
  A as Selection,
  mn as __namedExportsOrder,
  fn as default,
};
