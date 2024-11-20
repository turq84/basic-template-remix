import { a as i } from './utils-BgHHH9V7.js';
import { a as D, b as F } from './index-BqgWbNE6.js';
import { $ as k } from './usePress-BFY2e0Rh.js';
function E(s, d) {
  let {
      elementType: a = 'button',
      isDisabled: e,
      onPress: l,
      onPressStart: p,
      onPressEnd: c,
      onPressUp: b,
      onPressChange: f,
      preventFocusOnPress: u,
      allowFocusWhenDisabled: P,
      onClick: t,
      href: $,
      target: x,
      rel: h,
      type: o = 'button',
    } = s,
    n;
  a === 'button'
    ? (n = { type: o, disabled: e })
    : (n = {
        role: 'button',
        tabIndex: e ? void 0 : 0,
        href: a === 'a' && e ? void 0 : $,
        target: a === 'a' ? x : void 0,
        type: a === 'input' ? o : void 0,
        disabled: a === 'input' ? e : void 0,
        'aria-disabled': !e || a === 'input' ? void 0 : e,
        rel: a === 'a' ? h : void 0,
      });
  let { pressProps: m, isPressed: C } = k({
      onPressStart: p,
      onPressEnd: c,
      onPressChange: f,
      onPress: l,
      onPressUp: b,
      isDisabled: e,
      preventFocusOnPress: u,
      ref: d,
    }),
    { focusableProps: r } = D(s, d);
  P && (r.tabIndex = e ? -1 : r.tabIndex);
  let g = i(r, m, F(s, { labelable: !0 }));
  return {
    isPressed: C,
    buttonProps: i(n, g, {
      'aria-haspopup': s['aria-haspopup'],
      'aria-expanded': s['aria-expanded'],
      'aria-controls': s['aria-controls'],
      'aria-pressed': s['aria-pressed'],
      onClick: (y) => {
        t && (t(y), console.warn('onClick is deprecated, please use onPress'));
      },
    }),
  };
}
export { E as $ };
