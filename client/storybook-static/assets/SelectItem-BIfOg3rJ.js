import {
  a as ie,
  b as ae,
  c as re,
  d as ne,
  e as de,
  f as se,
  $ as ce,
  g as R,
  h as ue,
  i as fe,
  j as be,
  k as ve,
  l as pe,
  m as $e,
  n as ge,
} from './Separator-p0-S5q3W.js';
import {
  $ as Q,
  a as V,
  i as W,
  j as ye,
  c as he,
  d as H,
  h as X,
  m as Y,
  f as xe,
} from './utils-BgHHH9V7.js';
import { r as d, R as b } from './index-DJO9vBfz.js';
import { $ as me, T as q } from './index-CxY2JlPL.js';
import {
  b as z,
  c as De,
  k as Pe,
  l as ke,
  d as Z,
  i as _,
  e as Se,
} from './index-BqgWbNE6.js';
import { d as Me } from './OverlayArrow-DliHpoDG.js';
import { b as we } from './Label-Dp0AxpCw.js';
import { a as Ke } from './usePress-BFY2e0Rh.js';
import { d as Ce } from './Dialog-BVyDrX3O.js';
import { j as E } from './jsx-runtime-CkxqCPlQ.js';
import { S as Fe } from './common-CFf48SXD.js';
import { S as G } from './index-CbVkzzMr.js';
class J {
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
    let l = this.keyMap.get(e);
    var o;
    return l && (o = l.prevKey) !== null && o !== void 0 ? o : null;
  }
  getKeyAfter(e) {
    let l = this.keyMap.get(e);
    var o;
    return l && (o = l.nextKey) !== null && o !== void 0 ? o : null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    return this.lastKey;
  }
  getItem(e) {
    var l;
    return (l = this.keyMap.get(e)) !== null && l !== void 0 ? l : null;
  }
  at(e) {
    const l = [...this.getKeys()];
    return this.getItem(l[e]);
  }
  getChildren(e) {
    let l = this.keyMap.get(e);
    return (l == null ? void 0 : l.childNodes) || [];
  }
  constructor(e) {
    (this.keyMap = new Map()),
      (this.firstKey = null),
      (this.lastKey = null),
      (this.iterable = e);
    let l = (i) => {
      if ((this.keyMap.set(i.key, i), i.childNodes && i.type === 'section'))
        for (let a of i.childNodes) l(a);
    };
    for (let i of e) l(i);
    let o = null,
      n = 0;
    for (let [i, a] of this.keyMap)
      o
        ? ((o.nextKey = i), (a.prevKey = o.key))
        : ((this.firstKey = i), (a.prevKey = void 0)),
        a.type === 'item' && (a.index = n++),
        (o = a),
        (o.nextKey = void 0);
    var r;
    this.lastKey =
      (r = o == null ? void 0 : o.key) !== null && r !== void 0 ? r : null;
  }
}
function Ee(t) {
  let { filter: e, layoutDelegate: l } = t,
    o = ie(t),
    n = d.useMemo(
      () => (t.disabledKeys ? new Set(t.disabledKeys) : new Set()),
      [t.disabledKeys]
    ),
    r = d.useCallback((p) => (e ? new J(e(p)) : new J(p)), [e]),
    i = d.useMemo(
      () => ({ suppressTextValueWarning: t.suppressTextValueWarning }),
      [t.suppressTextValueWarning]
    ),
    a = ae(t, r, i),
    s = d.useMemo(() => new re(a, o, { layoutDelegate: l }), [a, o, l]);
  const u = d.useRef(null);
  return (
    d.useEffect(() => {
      if (o.focusedKey != null && !a.getItem(o.focusedKey) && u.current) {
        const f = u.current.getItem(o.focusedKey),
          k = [...u.current.getKeys()]
            .map((D) => {
              const x = u.current.getItem(D);
              return (x == null ? void 0 : x.type) === 'item' ? x : null;
            })
            .filter((D) => D !== null),
          y = [...a.getKeys()]
            .map((D) => {
              const x = a.getItem(D);
              return (x == null ? void 0 : x.type) === 'item' ? x : null;
            })
            .filter((D) => D !== null);
        var p, m;
        const K =
          ((p = k == null ? void 0 : k.length) !== null && p !== void 0
            ? p
            : 0) -
          ((m = y == null ? void 0 : y.length) !== null && m !== void 0
            ? m
            : 0);
        var v, P, M;
        let g = Math.min(
            K > 1
              ? Math.max(
                  ((v = f == null ? void 0 : f.index) !== null && v !== void 0
                    ? v
                    : 0) -
                    K +
                    1,
                  0
                )
              : (P = f == null ? void 0 : f.index) !== null && P !== void 0
                ? P
                : 0,
            ((M = y == null ? void 0 : y.length) !== null && M !== void 0
              ? M
              : 0) - 1
          ),
          c = null,
          S = !1;
        for (; g >= 0; ) {
          if (!s.isDisabled(y[g].key)) {
            c = y[g];
            break;
          }
          if (g < y.length - 1 && !S) g++;
          else {
            S = !0;
            var h, $;
            g >
              ((h = f == null ? void 0 : f.index) !== null && h !== void 0
                ? h
                : 0) &&
              (g =
                ($ = f == null ? void 0 : f.index) !== null && $ !== void 0
                  ? $
                  : 0),
              g--;
          }
        }
        o.setFocusedKey(c ? c.key : null);
      }
      u.current = a;
    }, [a, s, o, o.focusedKey]),
    { collection: a, disabledKeys: n, selectionManager: s }
  );
}
const A = new WeakMap();
function Ve(t) {
  return typeof t == 'string' ? t.replace(/\s*/g, '') : '' + t;
}
function Te(t, e) {
  let l = A.get(t);
  if (!l) throw new Error('Unknown list');
  return `${l.id}-option-${Ve(e)}`;
}
function Be(t, e, l) {
  let o = z(t, { labelable: !0 }),
    n = t.selectionBehavior || 'toggle',
    r = t.linkBehavior || (n === 'replace' ? 'action' : 'override');
  n === 'toggle' && r === 'action' && (r = 'override');
  let { listProps: i } = ne({
      ...t,
      ref: l,
      selectionManager: e.selectionManager,
      collection: e.collection,
      disabledKeys: e.disabledKeys,
      linkBehavior: r,
    }),
    { focusWithinProps: a } = De({
      onFocusWithin: t.onFocus,
      onBlurWithin: t.onBlur,
      onFocusWithinChange: t.onFocusChange,
    }),
    s = Q(t.id);
  A.set(e, {
    id: s,
    shouldUseVirtualFocus: t.shouldUseVirtualFocus,
    shouldSelectOnPressUp: t.shouldSelectOnPressUp,
    shouldFocusOnHover: t.shouldFocusOnHover,
    isVirtualized: t.isVirtualized,
    onAction: t.onAction,
    linkBehavior: r,
  });
  let { labelProps: u, fieldProps: p } = we({
    ...t,
    id: s,
    labelElementType: 'span',
  });
  return {
    labelProps: u,
    listBoxProps: V(
      o,
      a,
      e.selectionManager.selectionMode === 'multiple'
        ? { 'aria-multiselectable': 'true' }
        : {},
      { role: 'listbox', ...V(p, i) }
    ),
  };
}
function Ie(t, e, l) {
  var o, n;
  let { key: r } = t,
    i = A.get(e);
  var a;
  let s =
    (a = t.isDisabled) !== null && a !== void 0
      ? a
      : e.selectionManager.isDisabled(r);
  var u;
  let p =
    (u = t.isSelected) !== null && u !== void 0
      ? u
      : e.selectionManager.isSelected(r);
  var m;
  let v =
    (m = t.shouldSelectOnPressUp) !== null && m !== void 0
      ? m
      : i == null
        ? void 0
        : i.shouldSelectOnPressUp;
  var P;
  let M =
    (P = t.shouldFocusOnHover) !== null && P !== void 0
      ? P
      : i == null
        ? void 0
        : i.shouldFocusOnHover;
  var h;
  let $ =
    (h = t.shouldUseVirtualFocus) !== null && h !== void 0
      ? h
      : i == null
        ? void 0
        : i.shouldUseVirtualFocus;
  var f;
  let k =
      (f = t.isVirtualized) !== null && f !== void 0
        ? f
        : i == null
          ? void 0
          : i.isVirtualized,
    y = W(),
    K = W(),
    g = {
      role: 'option',
      'aria-disabled': s || void 0,
      'aria-selected': e.selectionManager.selectionMode !== 'none' ? p : void 0,
    };
  (Pe() && ke()) ||
    ((g['aria-label'] = t['aria-label']),
    (g['aria-labelledby'] = y),
    (g['aria-describedby'] = K));
  let c = e.collection.getItem(r);
  if (k) {
    let w = Number(c == null ? void 0 : c.index);
    (g['aria-posinset'] = Number.isNaN(w) ? void 0 : w + 1),
      (g['aria-setsize'] = de(e.collection));
  }
  let S =
      i != null && i.onAction
        ? () => {
            var w;
            return i == null || (w = i.onAction) === null || w === void 0
              ? void 0
              : w.call(i, r);
          }
        : void 0,
    {
      itemProps: D,
      isPressed: x,
      isFocused: C,
      hasAction: T,
      allowsSelection: O,
    } = se({
      selectionManager: e.selectionManager,
      key: r,
      ref: l,
      shouldSelectOnPressUp: v,
      allowsDifferentPressOrigin: v && M,
      isVirtualized: k,
      shouldUseVirtualFocus: $,
      isDisabled: s,
      onAction:
        S ||
        (!(c == null || (o = c.props) === null || o === void 0) && o.onAction)
          ? ye(
              c == null || (n = c.props) === null || n === void 0
                ? void 0
                : n.onAction,
              S
            )
          : void 0,
      linkBehavior: i == null ? void 0 : i.linkBehavior,
    }),
    { hoverProps: B } = Z({
      isDisabled: s || !M,
      onHoverStart() {
        _() ||
          (e.selectionManager.setFocused(!0),
          e.selectionManager.setFocusedKey(r));
      },
    }),
    F = z(c == null ? void 0 : c.props);
  delete F.id;
  let I = Ke(c == null ? void 0 : c.props);
  return {
    optionProps: { ...g, ...V(F, D, B, I), id: Te(e, r) },
    labelProps: { id: y },
    descriptionProps: { id: K },
    isFocused: C,
    isFocusVisible: C && _(),
    isSelected: p,
    isDisabled: s,
    isPressed: x,
    allowsSelection: O,
    hasAction: T,
  };
}
function He(t) {
  let { heading: e, 'aria-label': l } = t,
    o = Q();
  return {
    itemProps: { role: 'presentation' },
    headingProps: e ? { id: o, role: 'presentation' } : {},
    groupProps: {
      role: 'group',
      'aria-label': l,
      'aria-labelledby': e ? o : void 0,
    },
  };
}
const U = d.createContext({}),
  ee = d.createContext(null);
function ze(t, e) {
  let { render: l } = d.useContext(ee);
  return b.createElement(b.Fragment, null, l(t, e));
}
const Ue = d.forwardRef(ze);
function te(t, e) {
  var l;
  let o = t == null ? void 0 : t.renderDropIndicator,
    n =
      t == null || (l = t.isVirtualDragging) === null || l === void 0
        ? void 0
        : l.call(t),
    r = d.useCallback(
      (i) => {
        if (n || (e != null && e.isDropTarget(i)))
          return o ? o(i) : b.createElement(Ue, { target: i });
      },
      [e == null ? void 0 : e.target, n, o]
    );
  return t != null && t.useDropIndicator ? r : void 0;
}
function Le(t, e, l) {
  var o, n;
  let r = t.focusedKey,
    i = null;
  if (
    !(e == null || (o = e.isVirtualDragging) === null || o === void 0) &&
    o.call(e) &&
    (l == null || (n = l.target) === null || n === void 0 ? void 0 : n.type) ===
      'item'
  ) {
    i = l.target.key;
    var a;
    l.target.dropPosition === 'after' &&
      (i = (a = l.collection.getKeyAfter(i)) !== null && a !== void 0 ? a : i);
  }
  return d.useMemo(() => new Set([r, i].filter((s) => s !== null)), [r, i]);
}
const oe = d.createContext(null),
  L = d.createContext(null);
function Oe(t, e) {
  [t, e] = he(t, e, oe);
  let l = d.useContext(L);
  return l
    ? b.createElement(le, { state: l, props: t, listBoxRef: e })
    : b.createElement(pe, { content: b.createElement($e, t) }, (o) =>
        b.createElement(Ne, { props: t, listBoxRef: e, collection: o })
      );
}
function Ne({ props: t, listBoxRef: e, collection: l }) {
  t = { ...t, collection: l, children: null, items: null };
  let { layoutDelegate: o } = d.useContext(R),
    n = Ee({ ...t, layoutDelegate: o });
  return b.createElement(le, { state: n, props: t, listBoxRef: e });
}
const at = d.forwardRef(Oe);
function le({ state: t, props: e, listBoxRef: l }) {
  let {
      dragAndDropHooks: o,
      layout: n = 'stack',
      orientation: r = 'vertical',
    } = e,
    { collection: i, selectionManager: a } = t,
    s = !!(o != null && o.useDraggableCollectionState),
    u = !!(o != null && o.useDroppableCollectionState),
    { direction: p } = Me(),
    { disabledBehavior: m, disabledKeys: v } = a,
    P = ce({ usage: 'search', sensitivity: 'base' }),
    {
      isVirtualized: M,
      layoutDelegate: h,
      dropTargetDelegate: $,
      CollectionRoot: f,
    } = d.useContext(R),
    k = d.useMemo(
      () =>
        e.keyboardDelegate ||
        new ue({
          collection: i,
          collator: P,
          ref: l,
          disabledKeys: v,
          disabledBehavior: m,
          layout: n,
          orientation: r,
          direction: p,
          layoutDelegate: h,
        }),
      [i, P, l, m, v, r, p, e.keyboardDelegate, n, h]
    ),
    { listBoxProps: y } = Be(
      {
        ...e,
        shouldSelectOnPressUp: s || e.shouldSelectOnPressUp,
        keyboardDelegate: k,
        isVirtualized: M,
      },
      t,
      l
    ),
    K = d.useRef(s),
    g = d.useRef(u);
  d.useEffect(() => {
    K.current !== s &&
      console.warn(
        'Drag hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.'
      ),
      g.current !== u &&
        console.warn(
          'Drop hooks were provided during one render, but not another. This should be avoided as it may produce unexpected behavior.'
        );
  }, [s, u]);
  let c,
    S,
    D,
    x = !1,
    C = null,
    T = d.useRef(null);
  if (s && o) {
    (c = o.useDraggableCollectionState({
      collection: i,
      selectionManager: a,
      preview: o.renderDragPreview ? T : void 0,
    })),
      o.useDraggableCollection({}, c, l);
    let N = o.DragPreview;
    C = o.renderDragPreview
      ? b.createElement(N, { ref: T }, o.renderDragPreview)
      : null;
  }
  if (u && o) {
    S = o.useDroppableCollectionState({ collection: i, selectionManager: a });
    let N =
      o.dropTargetDelegate ||
      $ ||
      new o.ListDropTargetDelegate(i, l, {
        orientation: r,
        layout: n,
        direction: p,
      });
    (D = o.useDroppableCollection(
      { keyboardDelegate: k, dropTargetDelegate: N },
      S,
      l
    )),
      (x = S.isDropTarget({ type: 'root' }));
  }
  let { focusProps: O, isFocused: B, isFocusVisible: F } = Se(),
    I = {
      isDropTarget: x,
      isEmpty: t.collection.size === 0,
      isFocused: B,
      isFocusVisible: F,
      layout: e.layout || 'stack',
      state: t,
    },
    w = H({
      className: e.className,
      style: e.style,
      defaultClassName: 'react-aria-ListBox',
      values: I,
    }),
    j = null;
  return (
    t.collection.size === 0 &&
      e.renderEmptyState &&
      (j = b.createElement(
        'div',
        { role: 'option', style: { display: 'contents' } },
        e.renderEmptyState(I)
      )),
    b.createElement(
      Ce,
      null,
      b.createElement(
        'div',
        {
          ...z(e),
          ...V(y, O, D == null ? void 0 : D.collectionProps),
          ...w,
          ref: l,
          slot: e.slot || void 0,
          onScroll: e.onScroll,
          'data-drop-target': x || void 0,
          'data-empty': t.collection.size === 0 || void 0,
          'data-focused': B || void 0,
          'data-focus-visible': F || void 0,
          'data-layout': e.layout || 'stack',
          'data-orientation': e.orientation || 'vertical',
        },
        b.createElement(
          X,
          {
            values: [
              [oe, e],
              [L, t],
              [U, { dragAndDropHooks: o, dragState: c, dropState: S }],
              [fe, { elementType: 'div' }],
              [ee, { render: Ae }],
              [be, { render: Re }],
            ],
          },
          b.createElement(f, {
            collection: i,
            scrollRef: l,
            persistedKeys: Le(a, o, S),
            renderDropIndicator: te(o, S),
          })
        ),
        j,
        C
      )
    )
  );
}
function Re(t, e, l) {
  let o = d.useContext(L),
    { dragAndDropHooks: n, dropState: r } = d.useContext(U),
    { CollectionBranch: i } = d.useContext(R),
    [a, s] = xe();
  var u;
  let { headingProps: p, groupProps: m } = He({
      heading: s,
      'aria-label': (u = t['aria-label']) !== null && u !== void 0 ? u : void 0,
    }),
    v = H({
      defaultClassName: 'react-aria-Section',
      className: t.className,
      style: t.style,
      values: {},
    });
  return b.createElement(
    'section',
    { ...z(t), ...m, ...v, ref: e },
    b.createElement(
      ve.Provider,
      { value: { ...p, ref: a } },
      b.createElement(i, {
        collection: o.collection,
        parent: l,
        renderDropIndicator: te(n, r),
      })
    )
  );
}
const rt = ge('item', function (e, l, o) {
  let n = Y(l),
    r = d.useContext(L),
    { dragAndDropHooks: i, dragState: a, dropState: s } = d.useContext(U),
    {
      optionProps: u,
      labelProps: p,
      descriptionProps: m,
      ...v
    } = Ie(
      { key: o.key, 'aria-label': e == null ? void 0 : e['aria-label'] },
      r,
      n
    ),
    { hoverProps: P, isHovered: M } = Z({
      isDisabled: !v.allowsSelection && !v.hasAction,
      onHoverStart: o.props.onHoverStart,
      onHoverChange: o.props.onHoverChange,
      onHoverEnd: o.props.onHoverEnd,
    }),
    h = null;
  a && i && (h = i.useDraggableItem({ key: o.key }, a));
  let $ = null;
  s &&
    i &&
    ($ = i.useDroppableItem(
      { target: { type: 'item', key: o.key, dropPosition: 'on' } },
      s,
      n
    ));
  let f = a && a.isDragging(o.key),
    k = H({
      ...e,
      id: void 0,
      children: e.children,
      defaultClassName: 'react-aria-ListBoxItem',
      values: {
        ...v,
        isHovered: M,
        selectionMode: r.selectionManager.selectionMode,
        selectionBehavior: r.selectionManager.selectionBehavior,
        allowsDragging: !!a,
        isDragging: f,
        isDropTarget: $ == null ? void 0 : $.isDropTarget,
      },
    });
  d.useEffect(() => {
    o.textValue ||
      console.warn(
        'A `textValue` prop is required for <ListBoxItem> elements with non-plain text children in order to support accessibility features such as type to select.'
      );
  }, [o.textValue]);
  let y = e.href ? 'a' : 'div';
  return b.createElement(
    y,
    {
      ...V(
        u,
        P,
        h == null ? void 0 : h.dragProps,
        $ == null ? void 0 : $.dropProps
      ),
      ...k,
      ref: n,
      'data-allows-dragging': !!a || void 0,
      'data-selected': v.isSelected || void 0,
      'data-disabled': v.isDisabled || void 0,
      'data-hovered': M || void 0,
      'data-focused': v.isFocused || void 0,
      'data-focus-visible': v.isFocusVisible || void 0,
      'data-pressed': v.isPressed || void 0,
      'data-dragging': f || void 0,
      'data-drop-target': ($ == null ? void 0 : $.isDropTarget) || void 0,
      'data-selection-mode':
        r.selectionManager.selectionMode === 'none'
          ? void 0
          : r.selectionManager.selectionMode,
    },
    b.createElement(
      X,
      { values: [[me, { slots: { label: p, description: m } }]] },
      k.children
    )
  );
});
function Ae(t, e) {
  e = Y(e);
  let { dragAndDropHooks: l, dropState: o } = d.useContext(U),
    {
      dropIndicatorProps: n,
      isHidden: r,
      isDropTarget: i,
    } = l.useDropIndicator(t, o, e);
  return r
    ? null
    : b.createElement(We, {
        ...t,
        dropIndicatorProps: n,
        isDropTarget: i,
        ref: e,
      });
}
function je(t, e) {
  let { dropIndicatorProps: l, isDropTarget: o, ...n } = t,
    r = H({
      ...n,
      defaultClassName: 'react-aria-DropIndicator',
      values: { isDropTarget: o },
    });
  return b.createElement('div', {
    ...l,
    ...r,
    role: 'option',
    ref: e,
    'data-drop-target': o || void 0,
  });
}
const We = d.forwardRef(je);
function qe({ label: t, description: e }) {
  return E.jsxs(G, {
    direction: 'row',
    gap: 'small',
    align: 'center',
    justify: 'space-between',
    children: [
      E.jsxs(G, {
        direction: 'column',
        gap: 'xxs',
        children: [
          E.jsx(q, { slot: 'label', variant: 'body', children: t }),
          e &&
            E.jsx(q, {
              slot: 'description',
              variant: 'bodyExtraSmall',
              color: 'textMuted',
              children: e,
            }),
        ],
      }),
      E.jsx(Fe, {}),
    ],
  });
}
qe.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'SelectItem',
  props: {
    label: { required: !0, tsType: { name: 'string' }, description: '' },
    description: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
export {
  Ee as $,
  qe as S,
  at as a,
  rt as b,
  J as c,
  A as d,
  Te as e,
  oe as f,
  L as g,
};
