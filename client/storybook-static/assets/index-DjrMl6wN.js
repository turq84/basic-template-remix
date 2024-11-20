import { j as a } from './jsx-runtime-CkxqCPlQ.js';
import { r as l, R as y } from './index-DJO9vBfz.js';
import { b as T } from './Input-BX2iOOjZ.js';
import { $ as v } from './Label-Dp0AxpCw.js';
import { $ as w } from './TextField-DwCn8ieo.js';
import { a as j } from './index-DdgtEVhA.js';
import {
  l as S,
  i as I,
  a as R,
  D as N,
  E as q,
  e as F,
} from './common-CFf48SXD.js';
import { e as D, d as E, I as m } from './index-BqgWbNE6.js';
import { j as V, a as b, c as B, d as C } from './utils-BgHHH9V7.js';
import { $ as H } from './useToggleState-DzuOW28X.js';
import { $ as L } from './useButton-DZEnpN8J.js';
import { s as x } from './factory-BfbsYOSY.js';
import { u as z } from './useTranslation-3LIHFqx3.js';
function _(e, s, t) {
  const { isSelected: r } = s,
    { isPressed: d, buttonProps: o } = L(
      { ...e, onPress: V(s.toggle, e.onPress) },
      t
    );
  return { isPressed: d, buttonProps: b(o, { 'aria-pressed': r }) };
}
const k = l.createContext({});
function O(e, s) {
  [e, s] = B(e, s, k);
  let t = H(e),
    { buttonProps: r, isPressed: d } = _(e, t, s),
    { focusProps: o, isFocused: i, isFocusVisible: n } = D(e),
    { hoverProps: c, isHovered: f } = E(e),
    p = C({
      ...e,
      values: {
        isHovered: f,
        isPressed: d,
        isFocused: i,
        isSelected: t.isSelected,
        isFocusVisible: n,
        isDisabled: e.isDisabled || !1,
        state: t,
      },
      defaultClassName: 'react-aria-ToggleButton',
    });
  return y.createElement('button', {
    ...b(r, o, c),
    ...p,
    ref: s,
    slot: e.slot || void 0,
    'data-focused': i || void 0,
    'data-disabled': e.isDisabled || void 0,
    'data-pressed': d || void 0,
    'data-selected': t.isSelected || void 0,
    'data-hovered': f || void 0,
    'data-focus-visible': n || void 0,
  });
}
const W = l.forwardRef(O),
  A = x('div', {
    base: {
      position: 'relative',
      '& > svg + input': { paddingLeft: '$xl' },
      '& > input[data-password]': { paddingRight: '$xl' },
    },
  }),
  G = x(W, {
    base: {
      position: 'absolute',
      height: '100%',
      top: '0px',
      right: '0px',
      paddingRight: '$small',
      paddingLeft: '$small',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '$regular',
      $focusRing: !0,
    },
  }),
  g = l.forwardRef(
    (
      {
        label: e,
        icon: s,
        description: t,
        errorMessage: r,
        placeholder: d,
        id: o,
        className: i,
        isRequired: n,
        type: c,
        ...f
      },
      p
    ) => {
      const { t: P } = z(),
        [u, h] = l.useState(!1),
        $ = c === 'password';
      return a.jsxs(w, {
        ...f,
        className: j(F, i),
        isInvalid: !!r,
        children: [
          a.jsx(v, { className: S, 'data-required': n, children: e }),
          a.jsxs(A, {
            children: [
              s &&
                a.jsx(m, {
                  className: I,
                  name: s,
                  size: 20,
                  color: 'neutral1',
                }),
              a.jsx(T, {
                ref: p,
                id: o,
                placeholder: d,
                className: R,
                'data-password': $ || void 0,
                type: $ ? (u ? 'text' : 'password') : c,
              }),
              $ &&
                a.jsx(G, {
                  isSelected: u,
                  onChange: h,
                  'aria-label': P('form.showPassword'),
                  children: a.jsx(m, {
                    name: u ? 'eye' : 'eyeOff',
                    size: 20,
                    color: 'neutral1',
                  }),
                }),
            ],
          }),
          t && a.jsx(N, { children: t }),
          r && a.jsx(q, { children: r }),
        ],
      });
    }
  );
g.displayName = 'TextInput';
g.__docgenInfo = {
  description:
    'Reference: https://react-spectrum.adobe.com/react-aria/TextField.html',
  methods: [],
  displayName: 'TextInput',
  props: {
    label: { required: !0, tsType: { name: 'string' }, description: '' },
    icon: {
      required: !1,
      tsType: { name: 'unknown[number]', raw: '(typeof ids)[number]' },
      description: '',
    },
    description: { required: !1, tsType: { name: 'string' }, description: '' },
    errorMessage: { required: !1, tsType: { name: 'string' }, description: '' },
    placeholder: { required: !1, tsType: { name: 'string' }, description: '' },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
  },
};
export { g as T };
