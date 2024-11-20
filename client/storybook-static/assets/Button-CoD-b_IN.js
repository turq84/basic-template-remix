import { c as y, d as A, $ as P, a as C } from './utils-BgHHH9V7.js';
import { r as u, R as L } from './index-DJO9vBfz.js';
import { $ as T } from './Hidden-2-bsQ4Y9.js';
import { e as _, d as N, b as I } from './index-BqgWbNE6.js';
import { $ as w } from './useButton-DZEnpN8J.js';
const x = 7e3;
let n = null;
function p(e, t = 'assertive', d = x) {
  n
    ? n.announce(e, t, d)
    : ((n = new R()),
      (
        typeof IS_REACT_ACT_ENVIRONMENT == 'boolean'
          ? IS_REACT_ACT_ENVIRONMENT
          : typeof jest < 'u'
      )
        ? n.announce(e, t, d)
        : setTimeout(() => {
            n != null && n.isAttached() && (n == null || n.announce(e, t, d));
          }, 100));
}
class R {
  isAttached() {
    var t;
    return (t = this.node) === null || t === void 0 ? void 0 : t.isConnected;
  }
  createLog(t) {
    let d = document.createElement('div');
    return (
      d.setAttribute('role', 'log'),
      d.setAttribute('aria-live', t),
      d.setAttribute('aria-relevant', 'additions'),
      d
    );
  }
  destroy() {
    this.node && (document.body.removeChild(this.node), (this.node = null));
  }
  announce(t, d = 'assertive', i = x) {
    var a, r;
    if (!this.node) return;
    let o = document.createElement('div');
    typeof t == 'object'
      ? (o.setAttribute('role', 'img'),
        o.setAttribute('aria-labelledby', t['aria-labelledby']))
      : (o.textContent = t),
      d === 'assertive'
        ? (a = this.assertiveLog) === null || a === void 0 || a.appendChild(o)
        : (r = this.politeLog) === null || r === void 0 || r.appendChild(o),
      t !== '' &&
        setTimeout(() => {
          o.remove();
        }, i);
  }
  clear(t) {
    this.node &&
      ((!t || t === 'assertive') &&
        this.assertiveLog &&
        (this.assertiveLog.innerHTML = ''),
      (!t || t === 'polite') &&
        this.politeLog &&
        (this.politeLog.innerHTML = ''));
  }
  constructor() {
    (this.node = null),
      (this.assertiveLog = null),
      (this.politeLog = null),
      typeof document < 'u' &&
        ((this.node = document.createElement('div')),
        (this.node.dataset.liveAnnouncer = 'true'),
        Object.assign(this.node.style, {
          border: 0,
          clip: 'rect(0 0 0 0)',
          clipPath: 'inset(50%)',
          height: '1px',
          margin: '-1px',
          overflow: 'hidden',
          padding: 0,
          position: 'absolute',
          width: '1px',
          whiteSpace: 'nowrap',
        }),
        (this.assertiveLog = this.createLog('assertive')),
        this.node.appendChild(this.assertiveLog),
        (this.politeLog = this.createLog('polite')),
        this.node.appendChild(this.politeLog),
        document.body.prepend(this.node));
  }
}
const V = u.createContext(null),
  D = new Set([
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'name',
    'value',
  ]),
  M = u.createContext({});
function F(e, t) {
  ([e, t] = y(e, t, M)), (e = H(e));
  let d = e,
    { isPending: i } = d,
    { buttonProps: a, isPressed: r } = w(e, t),
    { focusProps: o, isFocused: l, isFocusVisible: $ } = _(e),
    { hoverProps: E, isHovered: h } = N({
      ...e,
      isDisabled: e.isDisabled || i,
    }),
    v = {
      isHovered: h,
      isPressed: (d.isPressed || r) && !i,
      isFocused: l,
      isFocusVisible: $,
      isDisabled: e.isDisabled || !1,
      isPending: i ?? !1,
    },
    m = A({ ...e, values: v, defaultClassName: 'react-aria-Button' }),
    c = P(a.id),
    f = P(),
    s = a['aria-labelledby'];
  i && (s ? (s = `${s} ${f}`) : a['aria-label'] && (s = `${c} ${f}`));
  let b = u.useRef(i);
  return (
    u.useEffect(() => {
      let g = { 'aria-labelledby': s || c };
      ((!b.current && l && i) || (b.current && l && !i)) && p(g, 'assertive'),
        (b.current = i);
    }, [i, l, s, c]),
    L.createElement(
      'button',
      {
        ...I(e, { propNames: D }),
        ...C(a, o, E),
        ...m,
        id: c,
        ref: t,
        'aria-labelledby': s,
        slot: e.slot || void 0,
        'aria-disabled': i ? 'true' : a['aria-disabled'],
        'data-disabled': e.isDisabled || void 0,
        'data-pressed': v.isPressed || void 0,
        'data-hovered': h || void 0,
        'data-focused': l || void 0,
        'data-pending': i || void 0,
        'data-focus-visible': $ || void 0,
      },
      L.createElement(V.Provider, { value: { id: f } }, m.children)
    )
  );
}
function H(e) {
  return (
    e.isPending &&
      ((e.onPress = void 0),
      (e.onPressStart = void 0),
      (e.onPressEnd = void 0),
      (e.onPressChange = void 0),
      (e.onPressUp = void 0),
      (e.onKeyDown = void 0),
      (e.onKeyUp = void 0),
      (e.onClick = void 0),
      (e.href = void 0)),
    e
  );
}
const K = T(F);
export { K as $, p as a, M as b };
