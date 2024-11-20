import { R as v, r as u } from './index-DJO9vBfz.js';
import {
  $ as ze,
  k as Ue,
  x as We,
  y as te,
  h as ae,
  q as ce,
  b as Ke,
} from './index-BqgWbNE6.js';
import {
  l as xe,
  k as Ve,
  b as we,
  a as se,
  c as Ce,
} from './utils-BgHHH9V7.js';
import { c as qe, $ as De, b as Pe, d as He } from './usePress-BFY2e0Rh.js';
import { r as Me } from './index-DJdX7xnk.js';
import { n as ie, o as je } from './Dialog-BVyDrX3O.js';
import { d as Ee } from './OverlayArrow-DliHpoDG.js';
import { a as Ye } from './Hidden-2-bsQ4Y9.js';
class Ge {
  build(e, t) {
    return (this.context = t), ue(() => this.iterateCollection(e));
  }
  *iterateCollection(e) {
    let { children: t, items: i } = e;
    if (v.isValidElement(t) && t.type === v.Fragment)
      yield* this.iterateCollection({ children: t.props.children, items: i });
    else if (typeof t == 'function') {
      if (!i)
        throw new Error(
          'props.children was a function but props.items is missing'
        );
      for (let n of e.items)
        yield* this.getFullNode({ value: n }, { renderer: t });
    } else {
      let n = [];
      v.Children.forEach(t, (r) => {
        n.push(r);
      });
      let s = 0;
      for (let r of n) {
        let a = this.getFullNode({ element: r, index: s }, {});
        for (let o of a) s++, yield o;
      }
    }
  }
  getKey(e, t, i, n) {
    if (e.key != null) return e.key;
    if (t.type === 'cell' && t.key != null) return `${n}${t.key}`;
    let s = t.value;
    if (s != null) {
      var r;
      let a = (r = s.key) !== null && r !== void 0 ? r : s.id;
      if (a == null) throw new Error('No key found for item');
      return a;
    }
    return n ? `${n}.${t.index}` : `$.${t.index}`;
  }
  getChildState(e, t) {
    return { renderer: t.renderer || e.renderer };
  }
  *getFullNode(e, t, i, n) {
    if (v.isValidElement(e.element) && e.element.type === v.Fragment) {
      let o = [];
      v.Children.forEach(e.element.props.children, (p) => {
        o.push(p);
      });
      let y = e.index;
      for (const p of o)
        yield* this.getFullNode({ element: p, index: y++ }, t, i, n);
      return;
    }
    let s = e.element;
    if (!s && e.value && t && t.renderer) {
      let o = this.cache.get(e.value);
      if (o && (!o.shouldInvalidate || !o.shouldInvalidate(this.context))) {
        (o.index = e.index), (o.parentKey = n ? n.key : null), yield o;
        return;
      }
      s = t.renderer(e.value);
    }
    if (v.isValidElement(s)) {
      let o = s.type;
      if (typeof o != 'function' && typeof o.getCollectionNode != 'function') {
        let h = typeof s.type == 'function' ? s.type.name : s.type;
        throw new Error(`Unknown element <${h}> in collection.`);
      }
      let y = o.getCollectionNode(s.props, this.context),
        p = e.index,
        m = y.next();
      for (; !m.done && m.value; ) {
        let h = m.value;
        e.index = p;
        let g = h.key;
        g || (g = h.element ? null : this.getKey(s, e, t, i));
        let w = [
          ...this.getFullNode(
            { ...h, key: g, index: p, wrapper: Xe(e.wrapper, h.wrapper) },
            this.getChildState(t, h),
            i ? `${i}${s.key}` : s.key,
            n
          ),
        ];
        for (let b of w) {
          if (
            ((b.value = h.value || e.value),
            b.value && this.cache.set(b.value, b),
            e.type && b.type !== e.type)
          )
            throw new Error(
              `Unsupported type <${Z(b.type)}> in <${Z(n.type)}>. Only <${Z(e.type)}> is supported.`
            );
          p++, yield b;
        }
        m = y.next(w);
      }
      return;
    }
    if (e.key == null) return;
    let r = this,
      a = {
        type: e.type,
        props: e.props,
        key: e.key,
        parentKey: n ? n.key : null,
        value: e.value,
        level: n ? n.level + 1 : 0,
        index: e.index,
        rendered: e.rendered,
        textValue: e.textValue,
        'aria-label': e['aria-label'],
        wrapper: e.wrapper,
        shouldInvalidate: e.shouldInvalidate,
        hasChildNodes: e.hasChildNodes,
        childNodes: ue(function* () {
          if (!e.hasChildNodes) return;
          let o = 0;
          for (let y of e.childNodes()) {
            y.key != null && (y.key = `${a.key}${y.key}`), (y.index = o);
            let p = r.getFullNode(y, r.getChildState(t, y), a.key, a);
            for (let m of p) o++, yield m;
          }
        }),
      };
    yield a;
  }
  constructor() {
    this.cache = new WeakMap();
  }
}
function ue(l) {
  let e = [],
    t = null;
  return {
    *[Symbol.iterator]() {
      for (let i of e) yield i;
      t || (t = l());
      for (let i of t) e.push(i), yield i;
    },
  };
}
function Xe(l, e) {
  if (l && e) return (t) => l(e(t));
  if (l) return l;
  if (e) return e;
}
function Z(l) {
  return l[0].toUpperCase() + l.slice(1);
}
function Ut(l, e, t) {
  let i = u.useMemo(() => new Ge(), []),
    { children: n, items: s, collection: r } = l;
  return u.useMemo(() => {
    if (r) return r;
    let o = i.build({ children: n, items: s }, t);
    return e(o);
  }, [i, n, s, r, t, e]);
}
function Re(l, e) {
  return typeof e.getChildren == 'function'
    ? e.getChildren(l.key)
    : l.childNodes;
}
function Ze(l) {
  return Je(l);
}
function Je(l, e) {
  for (let t of l) return t;
}
function J(l, e, t) {
  if (e.parentKey === t.parentKey) return e.index - t.index;
  let i = [...de(l, e), e],
    n = [...de(l, t), t],
    s = i.slice(0, n.length).findIndex((r, a) => r !== n[a]);
  return s !== -1
    ? ((e = i[s]), (t = n[s]), e.index - t.index)
    : i.findIndex((r) => r === t) >= 0
      ? 1
      : (n.findIndex((r) => r === e) >= 0, -1);
}
function de(l, e) {
  let t = [];
  for (; (e == null ? void 0 : e.parentKey) != null; )
    (e = l.getItem(e.parentKey)), t.unshift(e);
  return t;
}
const fe = new WeakMap();
function Wt(l) {
  let e = fe.get(l);
  if (e != null) return e;
  e = 0;
  let t = (i) => {
    for (let n of i) n.type === 'section' ? t(Re(n, l)) : e++;
  };
  return t(l), fe.set(l, e), e;
}
class D extends Set {
  constructor(e, t, i) {
    super(e),
      e instanceof D
        ? ((this.anchorKey = t ?? e.anchorKey),
          (this.currentKey = i ?? e.currentKey))
        : ((this.anchorKey = t), (this.currentKey = i));
  }
}
function Qe(l, e) {
  if (l.size !== e.size) return !1;
  for (let t of l) if (!e.has(t)) return !1;
  return !0;
}
function Vt(l) {
  let {
      selectionMode: e = 'none',
      disallowEmptySelection: t,
      allowDuplicateSelectionEvents: i,
      selectionBehavior: n = 'toggle',
      disabledBehavior: s = 'all',
    } = l,
    r = u.useRef(!1),
    [, a] = u.useState(!1),
    o = u.useRef(null),
    y = u.useRef(null),
    [, p] = u.useState(null),
    m = u.useMemo(() => he(l.selectedKeys), [l.selectedKeys]),
    h = u.useMemo(
      () => he(l.defaultSelectedKeys, new D()),
      [l.defaultSelectedKeys]
    ),
    [g, P] = ze(m, h, l.onSelectionChange),
    w = u.useMemo(
      () => (l.disabledKeys ? new Set(l.disabledKeys) : new Set()),
      [l.disabledKeys]
    ),
    [b, M] = u.useState(n);
  n === 'replace' &&
    b === 'toggle' &&
    typeof g == 'object' &&
    g.size === 0 &&
    M('replace');
  let $ = u.useRef(n);
  return (
    u.useEffect(() => {
      n !== $.current && (M(n), ($.current = n));
    }, [n]),
    {
      selectionMode: e,
      disallowEmptySelection: t,
      selectionBehavior: b,
      setSelectionBehavior: M,
      get isFocused() {
        return r.current;
      },
      setFocused(K) {
        (r.current = K), a(K);
      },
      get focusedKey() {
        return o.current;
      },
      get childFocusStrategy() {
        return y.current;
      },
      setFocusedKey(K, E = 'first') {
        (o.current = K), (y.current = E), p(K);
      },
      selectedKeys: g,
      setSelectedKeys(K) {
        (i || !Qe(K, g)) && P(K);
      },
      disabledKeys: w,
      disabledBehavior: s,
    }
  );
}
function he(l, e) {
  return l ? (l === 'all' ? 'all' : new D(l)) : e;
}
class qt {
  get selectionMode() {
    return this.state.selectionMode;
  }
  get disallowEmptySelection() {
    return this.state.disallowEmptySelection;
  }
  get selectionBehavior() {
    return this.state.selectionBehavior;
  }
  setSelectionBehavior(e) {
    this.state.setSelectionBehavior(e);
  }
  get isFocused() {
    return this.state.isFocused;
  }
  setFocused(e) {
    this.state.setFocused(e);
  }
  get focusedKey() {
    return this.state.focusedKey;
  }
  get childFocusStrategy() {
    return this.state.childFocusStrategy;
  }
  setFocusedKey(e, t) {
    (e == null || this.collection.getItem(e)) && this.state.setFocusedKey(e, t);
  }
  get selectedKeys() {
    return this.state.selectedKeys === 'all'
      ? new Set(this.getSelectAllKeys())
      : this.state.selectedKeys;
  }
  get rawSelection() {
    return this.state.selectedKeys;
  }
  isSelected(e) {
    return this.state.selectionMode === 'none'
      ? !1
      : ((e = this.getKey(e)),
        this.state.selectedKeys === 'all'
          ? this.canSelectItem(e)
          : this.state.selectedKeys.has(e));
  }
  get isEmpty() {
    return (
      this.state.selectedKeys !== 'all' && this.state.selectedKeys.size === 0
    );
  }
  get isSelectAll() {
    if (this.isEmpty) return !1;
    if (this.state.selectedKeys === 'all') return !0;
    if (this._isSelectAll != null) return this._isSelectAll;
    let e = this.getSelectAllKeys(),
      t = this.state.selectedKeys;
    return (this._isSelectAll = e.every((i) => t.has(i))), this._isSelectAll;
  }
  get firstSelectedKey() {
    let e = null;
    for (let t of this.state.selectedKeys) {
      let i = this.collection.getItem(t);
      (!e || (i && J(this.collection, i, e) < 0)) && (e = i);
    }
    return e == null ? void 0 : e.key;
  }
  get lastSelectedKey() {
    let e = null;
    for (let t of this.state.selectedKeys) {
      let i = this.collection.getItem(t);
      (!e || (i && J(this.collection, i, e) > 0)) && (e = i);
    }
    return e == null ? void 0 : e.key;
  }
  get disabledKeys() {
    return this.state.disabledKeys;
  }
  get disabledBehavior() {
    return this.state.disabledBehavior;
  }
  extendSelection(e) {
    if (this.selectionMode === 'none') return;
    if (this.selectionMode === 'single') {
      this.replaceSelection(e);
      return;
    }
    e = this.getKey(e);
    let t;
    if (this.state.selectedKeys === 'all') t = new D([e], e, e);
    else {
      let s = this.state.selectedKeys;
      var i;
      let r = (i = s.anchorKey) !== null && i !== void 0 ? i : e;
      t = new D(s, r, e);
      var n;
      for (let a of this.getKeyRange(
        r,
        (n = s.currentKey) !== null && n !== void 0 ? n : e
      ))
        t.delete(a);
      for (let a of this.getKeyRange(e, r)) this.canSelectItem(a) && t.add(a);
    }
    this.state.setSelectedKeys(t);
  }
  getKeyRange(e, t) {
    let i = this.collection.getItem(e),
      n = this.collection.getItem(t);
    return i && n
      ? J(this.collection, i, n) <= 0
        ? this.getKeyRangeInternal(e, t)
        : this.getKeyRangeInternal(t, e)
      : [];
  }
  getKeyRangeInternal(e, t) {
    var i;
    if (!((i = this.layoutDelegate) === null || i === void 0) && i.getKeyRange)
      return this.layoutDelegate.getKeyRange(e, t);
    let n = [],
      s = e;
    for (; s != null; ) {
      let r = this.collection.getItem(s);
      if (
        (((r && r.type === 'item') ||
          (r.type === 'cell' && this.allowsCellSelection)) &&
          n.push(s),
        s === t)
      )
        return n;
      s = this.collection.getKeyAfter(s);
    }
    return [];
  }
  getKey(e) {
    let t = this.collection.getItem(e);
    if (!t || (t.type === 'cell' && this.allowsCellSelection)) return e;
    for (; t.type !== 'item' && t.parentKey != null; )
      t = this.collection.getItem(t.parentKey);
    return !t || t.type !== 'item' ? null : t.key;
  }
  toggleSelection(e) {
    if (this.selectionMode === 'none') return;
    if (this.selectionMode === 'single' && !this.isSelected(e)) {
      this.replaceSelection(e);
      return;
    }
    if (((e = this.getKey(e)), e == null)) return;
    let t = new D(
      this.state.selectedKeys === 'all'
        ? this.getSelectAllKeys()
        : this.state.selectedKeys
    );
    t.has(e)
      ? t.delete(e)
      : this.canSelectItem(e) &&
        (t.add(e), (t.anchorKey = e), (t.currentKey = e)),
      !(this.disallowEmptySelection && t.size === 0) &&
        this.state.setSelectedKeys(t);
  }
  replaceSelection(e) {
    if (this.selectionMode === 'none' || ((e = this.getKey(e)), e == null))
      return;
    let t = this.canSelectItem(e) ? new D([e], e, e) : new D();
    this.state.setSelectedKeys(t);
  }
  setSelectedKeys(e) {
    if (this.selectionMode === 'none') return;
    let t = new D();
    for (let i of e)
      if (
        ((i = this.getKey(i)),
        i != null && (t.add(i), this.selectionMode === 'single'))
      )
        break;
    this.state.setSelectedKeys(t);
  }
  getSelectAllKeys() {
    let e = [],
      t = (i) => {
        for (; i != null; ) {
          if (this.canSelectItem(i)) {
            let n = this.collection.getItem(i);
            n.type === 'item' && e.push(i),
              n.hasChildNodes &&
                (this.allowsCellSelection || n.type !== 'item') &&
                t(Ze(Re(n, this.collection)).key);
          }
          i = this.collection.getKeyAfter(i);
        }
      };
    return t(this.collection.getFirstKey()), e;
  }
  selectAll() {
    !this.isSelectAll &&
      this.selectionMode === 'multiple' &&
      this.state.setSelectedKeys('all');
  }
  clearSelection() {
    !this.disallowEmptySelection &&
      (this.state.selectedKeys === 'all' || this.state.selectedKeys.size > 0) &&
      this.state.setSelectedKeys(new D());
  }
  toggleSelectAll() {
    this.isSelectAll ? this.clearSelection() : this.selectAll();
  }
  select(e, t) {
    this.selectionMode !== 'none' &&
      (this.selectionMode === 'single'
        ? this.isSelected(e) && !this.disallowEmptySelection
          ? this.toggleSelection(e)
          : this.replaceSelection(e)
        : this.selectionBehavior === 'toggle' ||
            (t && (t.pointerType === 'touch' || t.pointerType === 'virtual'))
          ? this.toggleSelection(e)
          : this.replaceSelection(e));
  }
  isSelectionEqual(e) {
    if (e === this.state.selectedKeys) return !0;
    let t = this.selectedKeys;
    if (e.size !== t.size) return !1;
    for (let i of e) if (!t.has(i)) return !1;
    for (let i of t) if (!e.has(i)) return !1;
    return !0;
  }
  canSelectItem(e) {
    var t;
    if (this.state.selectionMode === 'none' || this.state.disabledKeys.has(e))
      return !1;
    let i = this.collection.getItem(e);
    return !(
      !i ||
      (!(i == null || (t = i.props) === null || t === void 0) &&
        t.isDisabled) ||
      (i.type === 'cell' && !this.allowsCellSelection)
    );
  }
  isDisabled(e) {
    var t, i;
    return (
      this.state.disabledBehavior === 'all' &&
      (this.state.disabledKeys.has(e) ||
        !!(
          !(
            (i = this.collection.getItem(e)) === null ||
            i === void 0 ||
            (t = i.props) === null ||
            t === void 0
          ) && t.isDisabled
        ))
    );
  }
  isLink(e) {
    var t, i;
    return !!(
      !(
        (i = this.collection.getItem(e)) === null ||
        i === void 0 ||
        (t = i.props) === null ||
        t === void 0
      ) && t.href
    );
  }
  getItemProps(e) {
    var t;
    return (t = this.collection.getItem(e)) === null || t === void 0
      ? void 0
      : t.props;
  }
  constructor(e, t, i) {
    (this.collection = e), (this.state = t);
    var n;
    (this.allowsCellSelection =
      (n = i == null ? void 0 : i.allowsCellSelection) !== null && n !== void 0
        ? n
        : !1),
      (this._isSelectAll = null),
      (this.layoutDelegate = (i == null ? void 0 : i.layoutDelegate) || null);
  }
}
class re {
  get childNodes() {
    throw new Error('childNodes is not supported');
  }
  clone() {
    let e = new re(this.type, this.key);
    return (
      (e.value = this.value),
      (e.level = this.level),
      (e.hasChildNodes = this.hasChildNodes),
      (e.rendered = this.rendered),
      (e.textValue = this.textValue),
      (e['aria-label'] = this['aria-label']),
      (e.index = this.index),
      (e.parentKey = this.parentKey),
      (e.prevKey = this.prevKey),
      (e.nextKey = this.nextKey),
      (e.firstChildKey = this.firstChildKey),
      (e.lastChildKey = this.lastChildKey),
      (e.props = this.props),
      (e.render = this.render),
      e
    );
  }
  constructor(e, t) {
    (this.value = null),
      (this.level = 0),
      (this.hasChildNodes = !1),
      (this.rendered = null),
      (this.textValue = ''),
      (this['aria-label'] = void 0),
      (this.index = 0),
      (this.parentKey = null),
      (this.prevKey = null),
      (this.nextKey = null),
      (this.firstChildKey = null),
      (this.lastChildKey = null),
      (this.props = {}),
      (this.type = e),
      (this.key = t);
  }
}
class _e {
  get size() {
    return this.keyMap.size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  *[Symbol.iterator]() {
    let e = this.firstKey != null ? this.keyMap.get(this.firstKey) : void 0;
    for (; e; )
      yield e, (e = e.nextKey != null ? this.keyMap.get(e.nextKey) : void 0);
  }
  getChildren(e) {
    let t = this.keyMap;
    return {
      *[Symbol.iterator]() {
        let i = t.get(e),
          n =
            (i == null ? void 0 : i.firstChildKey) != null
              ? t.get(i.firstChildKey)
              : null;
        for (; n; )
          yield n, (n = n.nextKey != null ? t.get(n.nextKey) : void 0);
      },
    };
  }
  getKeyBefore(e) {
    let t = this.keyMap.get(e);
    if (!t) return null;
    if (t.prevKey != null) {
      for (
        t = this.keyMap.get(t.prevKey);
        t && t.type !== 'item' && t.lastChildKey != null;

      )
        t = this.keyMap.get(t.lastChildKey);
      var i;
      return (i = t == null ? void 0 : t.key) !== null && i !== void 0
        ? i
        : null;
    }
    return t.parentKey;
  }
  getKeyAfter(e) {
    let t = this.keyMap.get(e);
    if (!t) return null;
    if (t.type !== 'item' && t.firstChildKey != null) return t.firstChildKey;
    for (; t; ) {
      if (t.nextKey != null) return t.nextKey;
      if (t.parentKey != null) t = this.keyMap.get(t.parentKey);
      else return null;
    }
    return null;
  }
  getFirstKey() {
    return this.firstKey;
  }
  getLastKey() {
    let e = this.lastKey != null ? this.keyMap.get(this.lastKey) : null;
    for (; (e == null ? void 0 : e.lastChildKey) != null; )
      e = this.keyMap.get(e.lastChildKey);
    var t;
    return (t = e == null ? void 0 : e.key) !== null && t !== void 0 ? t : null;
  }
  getItem(e) {
    var t;
    return (t = this.keyMap.get(e)) !== null && t !== void 0 ? t : null;
  }
  at() {
    throw new Error('Not implemented');
  }
  clone() {
    let e = this.constructor,
      t = new e();
    return (
      (t.keyMap = new Map(this.keyMap)),
      (t.firstKey = this.firstKey),
      (t.lastKey = this.lastKey),
      t
    );
  }
  addNode(e) {
    if (this.frozen)
      throw new Error('Cannot add a node to a frozen collection');
    this.keyMap.set(e.key, e);
  }
  removeNode(e) {
    if (this.frozen)
      throw new Error('Cannot remove a node to a frozen collection');
    this.keyMap.delete(e);
  }
  commit(e, t, i = !1) {
    if (this.frozen) throw new Error('Cannot commit a frozen collection');
    (this.firstKey = e), (this.lastKey = t), (this.frozen = !i);
  }
  constructor() {
    (this.keyMap = new Map()),
      (this.firstKey = null),
      (this.lastKey = null),
      (this.frozen = !1);
  }
}
class ke {
  *[Symbol.iterator]() {
    let e = this.firstChild;
    for (; e; ) yield e, (e = e.nextSibling);
  }
  get firstChild() {
    return this._firstChild;
  }
  set firstChild(e) {
    (this._firstChild = e), this.ownerDocument.markDirty(this);
  }
  get lastChild() {
    return this._lastChild;
  }
  set lastChild(e) {
    (this._lastChild = e), this.ownerDocument.markDirty(this);
  }
  get previousSibling() {
    return this._previousSibling;
  }
  set previousSibling(e) {
    (this._previousSibling = e), this.ownerDocument.markDirty(this);
  }
  get nextSibling() {
    return this._nextSibling;
  }
  set nextSibling(e) {
    (this._nextSibling = e), this.ownerDocument.markDirty(this);
  }
  get parentNode() {
    return this._parentNode;
  }
  set parentNode(e) {
    (this._parentNode = e), this.ownerDocument.markDirty(this);
  }
  get isConnected() {
    var e;
    return (
      ((e = this.parentNode) === null || e === void 0
        ? void 0
        : e.isConnected) || !1
    );
  }
  appendChild(e) {
    this.ownerDocument.startTransaction(),
      e.parentNode && e.parentNode.removeChild(e),
      this.firstChild == null && (this.firstChild = e),
      this.lastChild
        ? ((this.lastChild.nextSibling = e),
          (e.index = this.lastChild.index + 1),
          (e.previousSibling = this.lastChild))
        : ((e.previousSibling = null), (e.index = 0)),
      (e.parentNode = this),
      (e.nextSibling = null),
      (this.lastChild = e),
      this.ownerDocument.markDirty(this),
      e.hasSetProps && this.ownerDocument.addNode(e),
      this.ownerDocument.endTransaction(),
      this.ownerDocument.queueUpdate();
  }
  insertBefore(e, t) {
    if (t == null) return this.appendChild(e);
    this.ownerDocument.startTransaction(),
      e.parentNode && e.parentNode.removeChild(e),
      (e.nextSibling = t),
      (e.previousSibling = t.previousSibling),
      (e.index = t.index),
      this.firstChild === t
        ? (this.firstChild = e)
        : t.previousSibling && (t.previousSibling.nextSibling = e),
      (t.previousSibling = e),
      (e.parentNode = t.parentNode);
    let i = t;
    for (; i; ) i.index++, (i = i.nextSibling);
    e.hasSetProps && this.ownerDocument.addNode(e),
      this.ownerDocument.endTransaction(),
      this.ownerDocument.queueUpdate();
  }
  removeChild(e) {
    if (e.parentNode !== this || !this.ownerDocument.isMounted) return;
    this.ownerDocument.startTransaction();
    let t = e.nextSibling;
    for (; t; ) t.index--, (t = t.nextSibling);
    e.nextSibling && (e.nextSibling.previousSibling = e.previousSibling),
      e.previousSibling && (e.previousSibling.nextSibling = e.nextSibling),
      this.firstChild === e && (this.firstChild = e.nextSibling),
      this.lastChild === e && (this.lastChild = e.previousSibling),
      (e.parentNode = null),
      (e.nextSibling = null),
      (e.previousSibling = null),
      (e.index = 0),
      this.ownerDocument.removeNode(e),
      this.ownerDocument.endTransaction(),
      this.ownerDocument.queueUpdate();
  }
  addEventListener() {}
  removeEventListener() {}
  constructor(e) {
    (this._firstChild = null),
      (this._lastChild = null),
      (this._previousSibling = null),
      (this._nextSibling = null),
      (this._parentNode = null),
      (this.ownerDocument = e);
  }
}
class W extends ke {
  get index() {
    return this._index;
  }
  set index(e) {
    (this._index = e), this.ownerDocument.markDirty(this);
  }
  get level() {
    return this.parentNode instanceof W
      ? this.parentNode.level + (this.node.type === 'item' ? 1 : 0)
      : 0;
  }
  updateNode() {
    var e, t, i, n;
    let s = this.ownerDocument.getMutableNode(this);
    (s.index = this.index),
      (s.level = this.level),
      (s.parentKey =
        this.parentNode instanceof W ? this.parentNode.node.key : null);
    var r;
    s.prevKey =
      (r =
        (e = this.previousSibling) === null || e === void 0
          ? void 0
          : e.node.key) !== null && r !== void 0
        ? r
        : null;
    var a;
    (s.nextKey =
      (a =
        (t = this.nextSibling) === null || t === void 0
          ? void 0
          : t.node.key) !== null && a !== void 0
        ? a
        : null),
      (s.hasChildNodes = !!this.firstChild);
    var o;
    s.firstChildKey =
      (o =
        (i = this.firstChild) === null || i === void 0
          ? void 0
          : i.node.key) !== null && o !== void 0
        ? o
        : null;
    var y;
    s.lastChildKey =
      (y =
        (n = this.lastChild) === null || n === void 0 ? void 0 : n.node.key) !==
        null && y !== void 0
        ? y
        : null;
  }
  setProps(e, t, i, n) {
    let s = this.ownerDocument.getMutableNode(this),
      { value: r, textValue: a, id: o, ...y } = e;
    if (
      ((y.ref = t),
      (s.props = y),
      (s.rendered = i),
      (s.render = n),
      (s.value = r),
      (s.textValue =
        a ||
        (typeof y.children == 'string' ? y.children : '') ||
        e['aria-label'] ||
        ''),
      o != null && o !== s.key)
    ) {
      if (this.hasSetProps) throw new Error('Cannot change the id of an item');
      s.key = o;
    }
    this.hasSetProps ||
      (this.ownerDocument.addNode(this),
      this.ownerDocument.endTransaction(),
      (this.hasSetProps = !0)),
      this.ownerDocument.queueUpdate();
  }
  get style() {
    return {};
  }
  hasAttribute() {}
  setAttribute() {}
  setAttributeNS() {}
  removeAttribute() {}
  constructor(e, t) {
    super(t),
      (this.nodeType = 8),
      (this._index = 0),
      (this.hasSetProps = !1),
      (this.node = new re(e, `react-aria-${++t.nodeId}`)),
      this.ownerDocument.startTransaction();
  }
}
class et extends ke {
  get isConnected() {
    return this.isMounted;
  }
  createElement(e) {
    return new W(e, this);
  }
  getMutableNode(e) {
    let t = e.node;
    return (
      this.mutatedNodes.has(e) ||
        ((t = e.node.clone()), this.mutatedNodes.add(e), (e.node = t)),
      this.markDirty(e),
      t
    );
  }
  getMutableCollection() {
    return (
      !this.isSSR &&
        !this.collectionMutated &&
        ((this.collection = this.collection.clone()),
        (this.collectionMutated = !0)),
      this.collection
    );
  }
  markDirty(e) {
    this.dirtyNodes.add(e);
  }
  startTransaction() {
    this.transactionCount++;
  }
  endTransaction() {
    this.transactionCount--;
  }
  addNode(e) {
    let t = this.getMutableCollection();
    if (!t.getItem(e.node.key)) {
      t.addNode(e.node);
      for (let i of e) this.addNode(i);
    }
    this.markDirty(e);
  }
  removeNode(e) {
    for (let i of e) this.removeNode(i);
    this.getMutableCollection().removeNode(e.node.key), this.markDirty(e);
  }
  getCollection() {
    return this.transactionCount > 0
      ? this.collection
      : (this.updateCollection(), this.collection);
  }
  updateCollection() {
    for (let s of this.dirtyNodes)
      s instanceof W && s.isConnected && s.updateNode();
    if (
      (this.dirtyNodes.clear(),
      this.mutatedNodes.size || this.collectionMutated)
    ) {
      var e, t;
      let s = this.getMutableCollection();
      for (let r of this.mutatedNodes) r.isConnected && s.addNode(r.node);
      var i, n;
      s.commit(
        (i =
          (e = this.firstChild) === null || e === void 0
            ? void 0
            : e.node.key) !== null && i !== void 0
          ? i
          : null,
        (n =
          (t = this.lastChild) === null || t === void 0
            ? void 0
            : t.node.key) !== null && n !== void 0
          ? n
          : null,
        this.isSSR
      ),
        this.mutatedNodes.clear();
    }
    this.collectionMutated = !1;
  }
  queueUpdate() {
    if (!(this.dirtyNodes.size === 0 || this.transactionCount > 0))
      for (let e of this.subscriptions) e();
  }
  subscribe(e) {
    return this.subscriptions.add(e), () => this.subscriptions.delete(e);
  }
  resetAfterSSR() {
    this.isSSR &&
      ((this.isSSR = !1),
      (this.firstChild = null),
      (this.lastChild = null),
      (this.nodeId = 0));
  }
  constructor(e) {
    super(null),
      (this.nodeType = 11),
      (this.ownerDocument = this),
      (this.dirtyNodes = new Set()),
      (this.isSSR = !1),
      (this.nodeId = 0),
      (this.nodesByProps = new WeakMap()),
      (this.isMounted = !0),
      (this.mutatedNodes = new Set()),
      (this.subscriptions = new Set()),
      (this.transactionCount = 0),
      (this.collection = e),
      (this.collectionMutated = !0);
  }
}
function Fe(l) {
  let {
      children: e,
      items: t,
      idScope: i,
      addIdAndValue: n,
      dependencies: s = [],
    } = l,
    r = u.useMemo(() => new WeakMap(), s);
  return u.useMemo(() => {
    if (t && typeof e == 'function') {
      let y = [];
      for (let p of t) {
        let m = r.get(p);
        if (!m) {
          m = e(p);
          var a, o;
          let h =
            (o = (a = m.props.id) !== null && a !== void 0 ? a : p.key) !==
              null && o !== void 0
              ? o
              : p.id;
          if (h == null) throw new Error('Could not determine key for item');
          i && (h = i + ':' + h),
            (m = u.cloneElement(
              m,
              n ? { key: h, id: h, value: p } : { key: h }
            )),
            r.set(p, m);
        }
        y.push(m);
      }
      return y;
    } else if (typeof e != 'function') return e;
  }, [e, t, r, i, n]);
}
function tt(l, e) {
  const t = [];
  for (; l && l !== document.documentElement; )
    ie(l, e) && t.push(l), (l = l.parentElement);
  return t;
}
let it = 0;
const Q = new Map();
function lt(l) {
  let [e, t] = u.useState();
  return (
    xe(() => {
      if (!l) return;
      let i = Q.get(l);
      if (i) t(i.element.id);
      else {
        let n = `react-aria-description-${it++}`;
        t(n);
        let s = document.createElement('div');
        (s.id = n),
          (s.style.display = 'none'),
          (s.textContent = l),
          document.body.appendChild(s),
          (i = { refCount: 0, element: s }),
          Q.set(l, i);
      }
      return (
        i.refCount++,
        () => {
          i && --i.refCount === 0 && (i.element.remove(), Q.delete(l));
        }
      );
    }, [l]),
    { 'aria-describedby': l ? e : void 0 }
  );
}
function ye(l, e, t, i) {
  let n = Ve(t),
    s = t == null;
  u.useEffect(() => {
    if (s || !l.current) return;
    let r = l.current;
    return (
      r.addEventListener(e, n, i),
      () => {
        r.removeEventListener(e, n, i);
      }
    );
  }, [l, e, i, s, n]);
}
function Te(l, e) {
  let t = pe(l, e, 'left'),
    i = pe(l, e, 'top'),
    n = e.offsetWidth,
    s = e.offsetHeight,
    r = l.scrollLeft,
    a = l.scrollTop,
    { borderTopWidth: o, borderLeftWidth: y } = getComputedStyle(l),
    p = l.scrollLeft + parseInt(y, 10),
    m = l.scrollTop + parseInt(o, 10),
    h = p + l.clientWidth,
    g = m + l.clientHeight;
  t <= r ? (r = t - parseInt(y, 10)) : t + n > h && (r += t + n - h),
    i <= m ? (a = i - parseInt(o, 10)) : i + s > g && (a += i + s - g),
    (l.scrollLeft = r),
    (l.scrollTop = a);
}
function pe(l, e, t) {
  const i = t === 'left' ? 'offsetLeft' : 'offsetTop';
  let n = 0;
  for (; e.offsetParent && ((n += e[i]), e.offsetParent !== l); ) {
    if (e.offsetParent.contains(l)) {
      n -= l[i];
      break;
    }
    e = e.offsetParent;
  }
  return n;
}
function ge(l, e) {
  if (document.contains(l)) {
    let r = document.scrollingElement || document.documentElement;
    if (window.getComputedStyle(r).overflow === 'hidden') {
      let o = tt(l);
      for (let y of o) Te(y, l);
    } else {
      var t;
      let { left: o, top: y } = l.getBoundingClientRect();
      l == null ||
        (t = l.scrollIntoView) === null ||
        t === void 0 ||
        t.call(l, { block: 'nearest' });
      let { left: p, top: m } = l.getBoundingClientRect();
      if (Math.abs(o - p) > 1 || Math.abs(y - m) > 1) {
        var i, n, s;
        e == null ||
          (n = e.containingElement) === null ||
          n === void 0 ||
          (i = n.scrollIntoView) === null ||
          i === void 0 ||
          i.call(n, { block: 'center', inline: 'center' }),
          (s = l.scrollIntoView) === null ||
            s === void 0 ||
            s.call(l, { block: 'nearest' });
      }
    }
  }
}
var Ie = { exports: {} },
  Ae = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var z = u;
function nt(l, e) {
  return (l === e && (l !== 0 || 1 / l === 1 / e)) || (l !== l && e !== e);
}
var st = typeof Object.is == 'function' ? Object.is : nt,
  rt = z.useState,
  ot = z.useEffect,
  at = z.useLayoutEffect,
  ct = z.useDebugValue;
function ut(l, e) {
  var t = e(),
    i = rt({ inst: { value: t, getSnapshot: e } }),
    n = i[0].inst,
    s = i[1];
  return (
    at(
      function () {
        (n.value = t), (n.getSnapshot = e), _(n) && s({ inst: n });
      },
      [l, t, e]
    ),
    ot(
      function () {
        return (
          _(n) && s({ inst: n }),
          l(function () {
            _(n) && s({ inst: n });
          })
        );
      },
      [l]
    ),
    ct(t),
    t
  );
}
function _(l) {
  var e = l.getSnapshot;
  l = l.value;
  try {
    var t = e();
    return !st(l, t);
  } catch {
    return !0;
  }
}
function dt(l, e) {
  return e();
}
var ft =
  typeof window > 'u' ||
  typeof window.document > 'u' ||
  typeof window.document.createElement > 'u'
    ? dt
    : ut;
Ae.useSyncExternalStore =
  z.useSyncExternalStore !== void 0 ? z.useSyncExternalStore : ft;
Ie.exports = Ae;
var ht = Ie.exports;
const Be = u.createContext(!1),
  V = u.createContext(null);
function Ht(l) {
  if (u.useContext(V)) return l.content;
  let { collection: t, document: i } = vt(l.createCollection);
  return v.createElement(
    v.Fragment,
    null,
    v.createElement(
      Ye,
      null,
      v.createElement(V.Provider, { value: i }, l.content)
    ),
    v.createElement(yt, { render: l.children, collection: t })
  );
}
function yt({ collection: l, render: e }) {
  return e(l);
}
function pt(l, e, t) {
  let i = we(),
    n = u.useRef(i);
  n.current = i;
  let s = u.useCallback(() => (n.current ? t() : e()), [e, t]);
  return ht.useSyncExternalStore(l, s);
}
const gt =
  typeof v.useSyncExternalStore == 'function' ? v.useSyncExternalStore : pt;
function vt(l) {
  let [e] = u.useState(() => new et((l == null ? void 0 : l()) || new _e())),
    t = u.useCallback((r) => e.subscribe(r), [e]),
    i = u.useCallback(() => {
      let r = e.getCollection();
      return e.isSSR && e.resetAfterSSR(), r;
    }, [e]),
    n = u.useCallback(() => ((e.isSSR = !0), e.getCollection()), [e]),
    s = gt(t, i, n);
  return (
    xe(
      () => (
        (e.isMounted = !0),
        () => {
          e.isMounted = !1;
        }
      ),
      [e]
    ),
    { collection: s, document: e }
  );
}
const le = u.createContext(null);
function Ne(l, e, t, i, n, s) {
  let r = u.useCallback(
      (o) => {
        o == null || o.setProps(e, t, i, s);
      },
      [e, t, i, s]
    ),
    a = u.useContext(le);
  if (a) {
    let o = a.ownerDocument.nodesByProps.get(e);
    return (
      o ||
        ((o = a.ownerDocument.createElement(l)),
        o.setProps(e, t, i, s),
        a.appendChild(o),
        a.ownerDocument.updateCollection(),
        a.ownerDocument.nodesByProps.set(e, o)),
      n ? v.createElement(le.Provider, { value: o }, n) : null
    );
  }
  return v.createElement(l, { ref: r }, n);
}
function Le(l, e) {
  let t = ({ node: n }) => e(n.props, n.props.ref, n),
    i = u.forwardRef((n, s) => {
      if (!u.useContext(Be)) {
        if (e.length >= 3)
          throw new Error(e.name + ' cannot be rendered outside a collection.');
        return e(n, s);
      }
      return Ne(l, n, s, 'children' in n ? n.children : null, null, (a) =>
        v.createElement(t, { node: a })
      );
    });
  return (i.displayName = e.name), i;
}
function mt(l, e, t = Oe) {
  let i = ({ node: s }) => e(s.props, s.props.ref, s),
    n = u.forwardRef((s, r) => {
      let a = t(s);
      var o;
      return (o = Ne(l, s, r, null, a, (y) =>
        v.createElement(i, { node: y })
      )) !== null && o !== void 0
        ? o
        : v.createElement(v.Fragment, null);
    });
  return (n.displayName = e.name), n;
}
function Oe(l) {
  return Fe({ ...l, addIdAndValue: !0 });
}
const ve = u.createContext(null);
function jt(l) {
  let e = u.useContext(ve),
    t = ((e == null ? void 0 : e.dependencies) || []).concat(l.dependencies),
    i = l.idScope || (e == null ? void 0 : e.idScope),
    n = Oe({ ...l, idScope: i, dependencies: t });
  return (
    u.useContext(V) && (n = v.createElement(bt, null, n)),
    (e = u.useMemo(() => ({ dependencies: t, idScope: i }), [i, ...t])),
    v.createElement(ve.Provider, { value: e }, n)
  );
}
function bt({ children: l }) {
  let e = u.useContext(V),
    t = u.useMemo(
      () =>
        v.createElement(
          V.Provider,
          { value: null },
          v.createElement(Be.Provider, { value: !0 }, l)
        ),
      [l]
    );
  return we()
    ? v.createElement(le.Provider, { value: e }, t)
    : Me.createPortal(t, e);
}
const St = u.createContext(null),
  Yt = mt('section', (l, e, t) => {
    let { render: i } = u.useContext(St);
    return i(l, e, t);
  }),
  $t = {
    CollectionRoot({ collection: l, renderDropIndicator: e }) {
      return me(l, null, e);
    },
    CollectionBranch({ collection: l, parent: e, renderDropIndicator: t }) {
      return me(l, e, t);
    },
  };
function me(l, e, t) {
  return Fe({
    items: e ? l.getChildren(e.key) : l,
    dependencies: [t],
    children(i) {
      var n;
      let s = i.render(i);
      if (!t || i.type !== 'item') return s;
      let r = i.key,
        a = l.getKeyAfter(r);
      return v.createElement(
        v.Fragment,
        null,
        t({ type: 'item', key: r, dropPosition: 'before' }),
        s,
        (a == null ||
          ((n = l.getItem(a)) === null || n === void 0 ? void 0 : n.type) !==
            'item') &&
          t({ type: 'item', key: r, dropPosition: 'after' })
      );
    },
  });
}
const Gt = u.createContext($t);
function Xt(l) {
  return u.useMemo(() => (l != null ? new Set([l]) : null), [l]);
}
const Kt = 500;
function xt(l) {
  let {
    isDisabled: e,
    onLongPressStart: t,
    onLongPressEnd: i,
    onLongPress: n,
    threshold: s = Kt,
    accessibilityDescription: r,
  } = l;
  const a = u.useRef(void 0);
  let { addGlobalListener: o, removeGlobalListener: y } = qe(),
    { pressProps: p } = De({
      isDisabled: e,
      onPressStart(h) {
        if (
          (h.continuePropagation(),
          (h.pointerType === 'mouse' || h.pointerType === 'touch') &&
            (t && t({ ...h, type: 'longpressstart' }),
            (a.current = setTimeout(() => {
              h.target.dispatchEvent(
                new PointerEvent('pointercancel', { bubbles: !0 })
              ),
                n && n({ ...h, type: 'longpress' }),
                (a.current = void 0);
            }, s)),
            h.pointerType === 'touch'))
        ) {
          let g = (P) => {
            P.preventDefault();
          };
          o(h.target, 'contextmenu', g, { once: !0 }),
            o(
              window,
              'pointerup',
              () => {
                setTimeout(() => {
                  y(h.target, 'contextmenu', g);
                }, 30);
              },
              { once: !0 }
            );
        }
      },
      onPressEnd(h) {
        a.current && clearTimeout(a.current),
          i &&
            (h.pointerType === 'mouse' || h.pointerType === 'touch') &&
            i({ ...h, type: 'longpressend' });
      },
    }),
    m = lt(n && !e ? r : void 0);
  return { longPressProps: se(p, m) };
}
let ee = new Map();
function wt(l) {
  let { locale: e } = Ee(),
    t =
      e +
      (l
        ? Object.entries(l)
            .sort((n, s) => (n[0] < s[0] ? -1 : 1))
            .join()
        : '');
  if (ee.has(t)) return ee.get(t);
  let i = new Intl.Collator(e, l);
  return ee.set(t, i), i;
}
function ne(l) {
  return We() ? l.altKey : l.ctrlKey;
}
function O(l) {
  return Ue() ? l.metaKey : l.ctrlKey;
}
const Ct = 1e3;
function Dt(l) {
  let { keyboardDelegate: e, selectionManager: t, onTypeSelect: i } = l,
    n = u.useRef({ search: '', timeout: null }).current,
    s = (r) => {
      let a = Pt(r.key);
      if (!a || r.ctrlKey || r.metaKey || !r.currentTarget.contains(r.target))
        return;
      a === ' ' &&
        n.search.trim().length > 0 &&
        (r.preventDefault(), 'continuePropagation' in r || r.stopPropagation()),
        (n.search += a);
      let o = e.getKeyForSearch(n.search, t.focusedKey);
      o == null && (o = e.getKeyForSearch(n.search)),
        o != null && (t.setFocusedKey(o), i && i(o)),
        clearTimeout(n.timeout),
        (n.timeout = setTimeout(() => {
          n.search = '';
        }, Ct));
    };
  return {
    typeSelectProps: { onKeyDownCapture: e.getKeyForSearch ? s : null },
  };
}
function Pt(l) {
  return l.length === 1 || !/^[A-Z]/i.test(l) ? l : '';
}
function Mt(l) {
  let {
      selectionManager: e,
      keyboardDelegate: t,
      ref: i,
      autoFocus: n = !1,
      shouldFocusWrap: s = !1,
      disallowEmptySelection: r = !1,
      disallowSelectAll: a = !1,
      selectOnFocus: o = e.selectionBehavior === 'replace',
      disallowTypeAhead: y = !1,
      shouldUseVirtualFocus: p,
      allowsTabNavigation: m = !1,
      isVirtualized: h,
      scrollRef: g = i,
      linkBehavior: P = 'action',
    } = l,
    { direction: w } = Ee(),
    b = Pe(),
    M = (c) => {
      if (
        (c.altKey && c.key === 'Tab' && c.preventDefault(),
        !i.current.contains(c.target))
      )
        return;
      const S = (f, N) => {
        if (f != null) {
          if (e.isLink(f) && P === 'selection' && o && !ne(c)) {
            Me.flushSync(() => {
              e.setFocusedKey(f, N);
            });
            let L = g.current.querySelector(
                `[data-key="${CSS.escape(f.toString())}"]`
              ),
              oe = e.getItemProps(f);
            b.open(L, c, oe.href, oe.routerOptions);
            return;
          }
          if ((e.setFocusedKey(f, N), e.isLink(f) && P === 'override')) return;
          c.shiftKey && e.selectionMode === 'multiple'
            ? e.extendSelection(f)
            : o && !ne(c) && e.replaceSelection(f);
        }
      };
      switch (c.key) {
        case 'ArrowDown':
          if (t.getKeyBelow) {
            var C, x, k;
            let f =
              e.focusedKey != null
                ? (C = t.getKeyBelow) === null || C === void 0
                  ? void 0
                  : C.call(t, e.focusedKey)
                : (x = t.getFirstKey) === null || x === void 0
                  ? void 0
                  : x.call(t);
            f == null &&
              s &&
              (f =
                (k = t.getFirstKey) === null || k === void 0
                  ? void 0
                  : k.call(t, e.focusedKey)),
              f != null && (c.preventDefault(), S(f));
          }
          break;
        case 'ArrowUp':
          if (t.getKeyAbove) {
            var F, U, d;
            let f =
              e.focusedKey != null
                ? (F = t.getKeyAbove) === null || F === void 0
                  ? void 0
                  : F.call(t, e.focusedKey)
                : (U = t.getLastKey) === null || U === void 0
                  ? void 0
                  : U.call(t);
            f == null &&
              s &&
              (f =
                (d = t.getLastKey) === null || d === void 0
                  ? void 0
                  : d.call(t, e.focusedKey)),
              f != null && (c.preventDefault(), S(f));
          }
          break;
        case 'ArrowLeft':
          if (t.getKeyLeftOf) {
            var T, H, j;
            let f =
              (T = t.getKeyLeftOf) === null || T === void 0
                ? void 0
                : T.call(t, e.focusedKey);
            f == null &&
              s &&
              (f =
                w === 'rtl'
                  ? (H = t.getFirstKey) === null || H === void 0
                    ? void 0
                    : H.call(t, e.focusedKey)
                  : (j = t.getLastKey) === null || j === void 0
                    ? void 0
                    : j.call(t, e.focusedKey)),
              f != null &&
                (c.preventDefault(), S(f, w === 'rtl' ? 'first' : 'last'));
          }
          break;
        case 'ArrowRight':
          if (t.getKeyRightOf) {
            var Y, G, X;
            let f =
              (Y = t.getKeyRightOf) === null || Y === void 0
                ? void 0
                : Y.call(t, e.focusedKey);
            f == null &&
              s &&
              (f =
                w === 'rtl'
                  ? (G = t.getLastKey) === null || G === void 0
                    ? void 0
                    : G.call(t, e.focusedKey)
                  : (X = t.getFirstKey) === null || X === void 0
                    ? void 0
                    : X.call(t, e.focusedKey)),
              f != null &&
                (c.preventDefault(), S(f, w === 'rtl' ? 'last' : 'first'));
          }
          break;
        case 'Home':
          if (t.getFirstKey) {
            c.preventDefault();
            let f = t.getFirstKey(e.focusedKey, O(c));
            e.setFocusedKey(f),
              O(c) && c.shiftKey && e.selectionMode === 'multiple'
                ? e.extendSelection(f)
                : o && e.replaceSelection(f);
          }
          break;
        case 'End':
          if (t.getLastKey) {
            c.preventDefault();
            let f = t.getLastKey(e.focusedKey, O(c));
            e.setFocusedKey(f),
              O(c) && c.shiftKey && e.selectionMode === 'multiple'
                ? e.extendSelection(f)
                : o && e.replaceSelection(f);
          }
          break;
        case 'PageDown':
          if (t.getKeyPageBelow) {
            let f = t.getKeyPageBelow(e.focusedKey);
            f != null && (c.preventDefault(), S(f));
          }
          break;
        case 'PageUp':
          if (t.getKeyPageAbove) {
            let f = t.getKeyPageAbove(e.focusedKey);
            f != null && (c.preventDefault(), S(f));
          }
          break;
        case 'a':
          O(c) &&
            e.selectionMode === 'multiple' &&
            a !== !0 &&
            (c.preventDefault(), e.selectAll());
          break;
        case 'Escape':
          !r &&
            e.selectedKeys.size !== 0 &&
            (c.stopPropagation(), c.preventDefault(), e.clearSelection());
          break;
        case 'Tab':
          if (!m) {
            if (c.shiftKey) i.current.focus();
            else {
              let f = je(i.current, { tabbable: !0 }),
                N,
                L;
              do (L = f.lastChild()), L && (N = L);
              while (L);
              N && !N.contains(document.activeElement) && ce(N);
            }
            break;
          }
      }
    },
    $ = u.useRef({ top: 0, left: 0 });
  ye(
    g,
    'scroll',
    h
      ? null
      : () => {
          $.current = { top: g.current.scrollTop, left: g.current.scrollLeft };
        }
  );
  let K = (c) => {
      if (e.isFocused) {
        c.currentTarget.contains(c.target) || e.setFocused(!1);
        return;
      }
      if (c.currentTarget.contains(c.target)) {
        if ((e.setFocused(!0), e.focusedKey == null)) {
          let x = (F) => {
              F != null && (e.setFocusedKey(F), o && e.replaceSelection(F));
            },
            k = c.relatedTarget;
          var S, C;
          k &&
          c.currentTarget.compareDocumentPosition(k) &
            Node.DOCUMENT_POSITION_FOLLOWING
            ? x(
                (S = e.lastSelectedKey) !== null && S !== void 0
                  ? S
                  : t.getLastKey()
              )
            : x(
                (C = e.firstSelectedKey) !== null && C !== void 0
                  ? C
                  : t.getFirstKey()
              );
        } else
          h ||
            ((g.current.scrollTop = $.current.top),
            (g.current.scrollLeft = $.current.left));
        if (e.focusedKey != null) {
          let x = g.current.querySelector(
            `[data-key="${CSS.escape(e.focusedKey.toString())}"]`
          );
          x &&
            (x.contains(document.activeElement) || ce(x),
            ae() === 'keyboard' && ge(x, { containingElement: i.current }));
        }
      }
    },
    E = (c) => {
      c.currentTarget.contains(c.relatedTarget) || e.setFocused(!1);
    };
  const R = u.useRef(n);
  u.useEffect(() => {
    if (R.current) {
      let c = null;
      n === 'first' && (c = t.getFirstKey()),
        n === 'last' && (c = t.getLastKey());
      let S = e.selectedKeys;
      if (S.size) {
        for (let C of S)
          if (e.canSelectItem(C)) {
            c = C;
            break;
          }
      }
      e.setFocused(!0), e.setFocusedKey(c), c == null && !p && te(i.current);
    }
  }, []);
  let I = u.useRef(e.focusedKey);
  u.useEffect(() => {
    if (
      e.isFocused &&
      e.focusedKey != null &&
      (e.focusedKey !== I.current || R.current) &&
      g != null &&
      g.current
    ) {
      let c = ae(),
        S = i.current.querySelector(
          `[data-key="${CSS.escape(e.focusedKey.toString())}"]`
        );
      if (!S) return;
      (c === 'keyboard' || R.current) &&
        (Te(g.current, S),
        c !== 'virtual' && ge(S, { containingElement: i.current }));
    }
    !p &&
      e.isFocused &&
      e.focusedKey == null &&
      I.current != null &&
      te(i.current),
      (I.current = e.focusedKey),
      (R.current = !1);
  }),
    ye(i, 'react-aria-focus-scope-restore', (c) => {
      c.preventDefault(), e.setFocused(!0);
    });
  let A = {
      onKeyDown: M,
      onFocus: K,
      onBlur: E,
      onMouseDown(c) {
        g.current === c.target && c.preventDefault();
      },
    },
    { typeSelectProps: q } = Dt({ keyboardDelegate: t, selectionManager: e });
  y || (A = se(q, A));
  let B;
  return (
    p || (B = e.focusedKey == null ? 0 : -1),
    { collectionProps: { ...A, tabIndex: B } }
  );
}
function Zt(l) {
  let {
      selectionManager: e,
      key: t,
      ref: i,
      shouldSelectOnPressUp: n,
      shouldUseVirtualFocus: s,
      focus: r,
      isDisabled: a,
      onAction: o,
      allowsDifferentPressOrigin: y,
      linkBehavior: p = 'action',
    } = l,
    m = Pe(),
    h = (d) => {
      if (d.pointerType === 'keyboard' && ne(d)) e.toggleSelection(t);
      else {
        if (e.selectionMode === 'none') return;
        if (e.isLink(t)) {
          if (p === 'selection') {
            let T = e.getItemProps(t);
            m.open(i.current, d, T.href, T.routerOptions),
              e.setSelectedKeys(e.selectedKeys);
            return;
          } else if (p === 'override' || p === 'none') return;
        }
        e.selectionMode === 'single'
          ? e.isSelected(t) && !e.disallowEmptySelection
            ? e.toggleSelection(t)
            : e.replaceSelection(t)
          : d && d.shiftKey
            ? e.extendSelection(t)
            : e.selectionBehavior === 'toggle' ||
                (d &&
                  (O(d) ||
                    d.pointerType === 'touch' ||
                    d.pointerType === 'virtual'))
              ? e.toggleSelection(t)
              : e.replaceSelection(t);
      }
    };
  u.useEffect(() => {
    t === e.focusedKey &&
      e.isFocused &&
      !s &&
      (r ? r() : document.activeElement !== i.current && te(i.current));
  }, [i, t, e.focusedKey, e.childFocusStrategy, e.isFocused, s]),
    (a = a || e.isDisabled(t));
  let g = {};
  !s && !a
    ? (g = {
        tabIndex: t === e.focusedKey ? 0 : -1,
        onFocus(d) {
          d.target === i.current && e.setFocusedKey(t);
        },
      })
    : a &&
      (g.onMouseDown = (d) => {
        d.preventDefault();
      });
  let P = e.isLink(t) && p === 'override',
    w = e.isLink(t) && p !== 'selection' && p !== 'none',
    b = !a && e.canSelectItem(t) && !P,
    M = (o || w) && !a,
    $ = M && (e.selectionBehavior === 'replace' ? !b : !b || e.isEmpty),
    K = M && b && e.selectionBehavior === 'replace',
    E = $ || K,
    R = u.useRef(null),
    I = E && b,
    A = u.useRef(!1),
    q = u.useRef(!1),
    B = (d) => {
      if ((o && o(), w)) {
        let T = e.getItemProps(t);
        m.open(i.current, d, T.href, T.routerOptions);
      }
    },
    c = {};
  n
    ? ((c.onPressStart = (d) => {
        (R.current = d.pointerType),
          (A.current = I),
          d.pointerType === 'keyboard' && (!E || Se()) && h(d);
      }),
      y
        ? ((c.onPressUp = $
            ? null
            : (d) => {
                d.pointerType !== 'keyboard' && b && h(d);
              }),
          (c.onPress = $ ? B : null))
        : (c.onPress = (d) => {
            if ($ || (K && d.pointerType !== 'mouse')) {
              if (d.pointerType === 'keyboard' && !be()) return;
              B(d);
            } else d.pointerType !== 'keyboard' && b && h(d);
          }))
    : ((c.onPressStart = (d) => {
        (R.current = d.pointerType),
          (A.current = I),
          (q.current = $),
          b &&
            ((d.pointerType === 'mouse' && !$) ||
              (d.pointerType === 'keyboard' && (!M || Se()))) &&
            h(d);
      }),
      (c.onPress = (d) => {
        (d.pointerType === 'touch' ||
          d.pointerType === 'pen' ||
          d.pointerType === 'virtual' ||
          (d.pointerType === 'keyboard' && E && be()) ||
          (d.pointerType === 'mouse' && q.current)) &&
          (E ? B(d) : b && h(d));
      })),
    (g['data-key'] = t),
    (c.preventFocusOnPress = s);
  let { pressProps: S, isPressed: C } = De(c),
    x = K
      ? (d) => {
          R.current === 'mouse' &&
            (d.stopPropagation(), d.preventDefault(), B(d));
        }
      : void 0,
    { longPressProps: k } = xt({
      isDisabled: !I,
      onLongPress(d) {
        d.pointerType === 'touch' && (h(d), e.setSelectionBehavior('toggle'));
      },
    }),
    F = (d) => {
      R.current === 'touch' && A.current && d.preventDefault();
    },
    U = e.isLink(t)
      ? (d) => {
          He.isOpening || d.preventDefault();
        }
      : void 0;
  return {
    itemProps: se(g, b || $ ? S : {}, I ? k : {}, {
      onDoubleClick: x,
      onDragStartCapture: F,
      onClick: U,
    }),
    isPressed: C,
    isSelected: e.isSelected(t),
    isFocused: e.isFocused && e.focusedKey === t,
    isDisabled: a,
    allowsSelection: b,
    hasAction: E,
  };
}
function be() {
  let l = window.event;
  return (l == null ? void 0 : l.key) === 'Enter';
}
function Se() {
  let l = window.event;
  return (
    (l == null ? void 0 : l.key) === ' ' ||
    (l == null ? void 0 : l.code) === 'Space'
  );
}
class $e {
  getItemRect(e) {
    let t = this.ref.current,
      i =
        e != null
          ? t.querySelector(`[data-key="${CSS.escape(e.toString())}"]`)
          : null;
    if (!i) return null;
    let n = t.getBoundingClientRect(),
      s = i.getBoundingClientRect();
    return {
      x: s.left - n.left + t.scrollLeft,
      y: s.top - n.top + t.scrollTop,
      width: s.width,
      height: s.height,
    };
  }
  getContentSize() {
    let e = this.ref.current;
    return { width: e.scrollWidth, height: e.scrollHeight };
  }
  getVisibleRect() {
    let e = this.ref.current;
    return {
      x: e.scrollLeft,
      y: e.scrollTop,
      width: e.offsetWidth,
      height: e.offsetHeight,
    };
  }
  constructor(e) {
    this.ref = e;
  }
}
class Et {
  isDisabled(e) {
    var t;
    return (
      this.disabledBehavior === 'all' &&
      (((t = e.props) === null || t === void 0 ? void 0 : t.isDisabled) ||
        this.disabledKeys.has(e.key))
    );
  }
  findNextNonDisabled(e, t) {
    for (; e != null; ) {
      let i = this.collection.getItem(e);
      if ((i == null ? void 0 : i.type) === 'item' && !this.isDisabled(i))
        return e;
      e = t(e);
    }
    return null;
  }
  getNextKey(e) {
    return (
      (e = this.collection.getKeyAfter(e)),
      this.findNextNonDisabled(e, (t) => this.collection.getKeyAfter(t))
    );
  }
  getPreviousKey(e) {
    return (
      (e = this.collection.getKeyBefore(e)),
      this.findNextNonDisabled(e, (t) => this.collection.getKeyBefore(t))
    );
  }
  findKey(e, t, i) {
    let n = this.layoutDelegate.getItemRect(e);
    if (!n) return null;
    let s = n;
    do (e = t(e)), (n = this.layoutDelegate.getItemRect(e));
    while (n && i(s, n));
    return e;
  }
  isSameRow(e, t) {
    return e.y === t.y || e.x !== t.x;
  }
  isSameColumn(e, t) {
    return e.x === t.x || e.y !== t.y;
  }
  getKeyBelow(e) {
    return this.layout === 'grid' && this.orientation === 'vertical'
      ? this.findKey(e, (t) => this.getNextKey(t), this.isSameRow)
      : this.getNextKey(e);
  }
  getKeyAbove(e) {
    return this.layout === 'grid' && this.orientation === 'vertical'
      ? this.findKey(e, (t) => this.getPreviousKey(t), this.isSameRow)
      : this.getPreviousKey(e);
  }
  getNextColumn(e, t) {
    return t ? this.getPreviousKey(e) : this.getNextKey(e);
  }
  getKeyRightOf(e) {
    let t = this.direction === 'ltr' ? 'getKeyRightOf' : 'getKeyLeftOf';
    return this.layoutDelegate[t]
      ? ((e = this.layoutDelegate[t](e)),
        this.findNextNonDisabled(e, (i) => this.layoutDelegate[t](i)))
      : this.layout === 'grid'
        ? this.orientation === 'vertical'
          ? this.getNextColumn(e, this.direction === 'rtl')
          : this.findKey(
              e,
              (i) => this.getNextColumn(i, this.direction === 'rtl'),
              this.isSameColumn
            )
        : this.orientation === 'horizontal'
          ? this.getNextColumn(e, this.direction === 'rtl')
          : null;
  }
  getKeyLeftOf(e) {
    let t = this.direction === 'ltr' ? 'getKeyLeftOf' : 'getKeyRightOf';
    return this.layoutDelegate[t]
      ? ((e = this.layoutDelegate[t](e)),
        this.findNextNonDisabled(e, (i) => this.layoutDelegate[t](i)))
      : this.layout === 'grid'
        ? this.orientation === 'vertical'
          ? this.getNextColumn(e, this.direction === 'ltr')
          : this.findKey(
              e,
              (i) => this.getNextColumn(i, this.direction === 'ltr'),
              this.isSameColumn
            )
        : this.orientation === 'horizontal'
          ? this.getNextColumn(e, this.direction === 'ltr')
          : null;
  }
  getFirstKey() {
    let e = this.collection.getFirstKey();
    return this.findNextNonDisabled(e, (t) => this.collection.getKeyAfter(t));
  }
  getLastKey() {
    let e = this.collection.getLastKey();
    return this.findNextNonDisabled(e, (t) => this.collection.getKeyBefore(t));
  }
  getKeyPageAbove(e) {
    let t = this.ref.current,
      i = this.layoutDelegate.getItemRect(e);
    if (!i) return null;
    if (!ie(t)) return this.getFirstKey();
    if (this.orientation === 'horizontal') {
      let n = Math.max(
        0,
        i.x + i.width - this.layoutDelegate.getVisibleRect().width
      );
      for (; i && i.x > n; )
        (e = this.getKeyAbove(e)),
          (i = e == null ? null : this.layoutDelegate.getItemRect(e));
    } else {
      let n = Math.max(
        0,
        i.y + i.height - this.layoutDelegate.getVisibleRect().height
      );
      for (; i && i.y > n; )
        (e = this.getKeyAbove(e)),
          (i = e == null ? null : this.layoutDelegate.getItemRect(e));
    }
    return e ?? this.getFirstKey();
  }
  getKeyPageBelow(e) {
    let t = this.ref.current,
      i = this.layoutDelegate.getItemRect(e);
    if (!i) return null;
    if (!ie(t)) return this.getLastKey();
    if (this.orientation === 'horizontal') {
      let n = Math.min(
        this.layoutDelegate.getContentSize().width,
        i.y - i.width + this.layoutDelegate.getVisibleRect().width
      );
      for (; i && i.x < n; )
        (e = this.getKeyBelow(e)),
          (i = e == null ? null : this.layoutDelegate.getItemRect(e));
    } else {
      let n = Math.min(
        this.layoutDelegate.getContentSize().height,
        i.y - i.height + this.layoutDelegate.getVisibleRect().height
      );
      for (; i && i.y < n; )
        (e = this.getKeyBelow(e)),
          (i = e == null ? null : this.layoutDelegate.getItemRect(e));
    }
    return e ?? this.getLastKey();
  }
  getKeyForSearch(e, t) {
    if (!this.collator) return null;
    let i = this.collection,
      n = t || this.getFirstKey();
    for (; n != null; ) {
      let s = i.getItem(n),
        r = s.textValue.slice(0, e.length);
      if (s.textValue && this.collator.compare(r, e) === 0) return n;
      n = this.getNextKey(n);
    }
    return null;
  }
  constructor(...e) {
    if (e.length === 1) {
      let t = e[0];
      (this.collection = t.collection),
        (this.ref = t.ref),
        (this.collator = t.collator),
        (this.disabledKeys = t.disabledKeys || new Set()),
        (this.disabledBehavior = t.disabledBehavior || 'all'),
        (this.orientation = t.orientation || 'vertical'),
        (this.direction = t.direction),
        (this.layout = t.layout || 'stack'),
        (this.layoutDelegate = t.layoutDelegate || new $e(t.ref));
    } else
      (this.collection = e[0]),
        (this.disabledKeys = e[1]),
        (this.ref = e[2]),
        (this.collator = e[3]),
        (this.layout = 'stack'),
        (this.orientation = 'vertical'),
        (this.disabledBehavior = 'all'),
        (this.layoutDelegate = new $e(this.ref));
    this.layout === 'stack' &&
      this.orientation === 'vertical' &&
      ((this.getKeyLeftOf = void 0), (this.getKeyRightOf = void 0));
  }
}
function Jt(l) {
  let {
      selectionManager: e,
      collection: t,
      disabledKeys: i,
      ref: n,
      keyboardDelegate: s,
      layoutDelegate: r,
    } = l,
    a = wt({ usage: 'search', sensitivity: 'base' }),
    o = e.disabledBehavior,
    y = u.useMemo(
      () =>
        s ||
        new Et({
          collection: t,
          disabledKeys: i,
          disabledBehavior: o,
          ref: n,
          collator: a,
          layoutDelegate: r,
        }),
      [s, r, t, i, n, a, o]
    ),
    { collectionProps: p } = Mt({
      ...l,
      ref: n,
      selectionManager: e,
      keyboardDelegate: y,
    });
  return { listProps: p };
}
function Rt(l) {
  let e = Ke(l, { labelable: !0 }),
    t;
  return (
    l.orientation === 'vertical' && (t = 'vertical'),
    l.elementType !== 'hr'
      ? { separatorProps: { ...e, role: 'separator', 'aria-orientation': t } }
      : { separatorProps: e }
  );
}
const kt = u.createContext({}),
  Qt = Le('header', function (e, t) {
    return (
      ([e, t] = Ce(e, t, kt)),
      v.createElement(
        'header',
        { className: 'react-aria-Header', ...e, ref: t },
        e.children
      )
    );
  }),
  Ft = u.createContext({}),
  _t = Le('separator', function (e, t) {
    [e, t] = Ce(e, t, Ft);
    let { elementType: i, orientation: n, style: s, className: r } = e,
      a = i || 'hr';
    a === 'hr' && n === 'vertical' && (a = 'div');
    let { separatorProps: o } = Rt({ elementType: i, orientation: n });
    return v.createElement(a, {
      ...Ke(e),
      ...o,
      style: s,
      className: r ?? 'react-aria-Separator',
      ref: t,
      slot: e.slot || void 0,
    });
  });
export {
  wt as $,
  Vt as a,
  Ut as b,
  qt as c,
  Jt as d,
  Wt as e,
  Zt as f,
  Gt as g,
  Et as h,
  Ft as i,
  St as j,
  kt as k,
  Ht as l,
  jt as m,
  Le as n,
  Xt as o,
  Yt as p,
  Qt as q,
  _t as r,
  xt as s,
  Re as t,
  Mt as u,
  Dt as v,
};
