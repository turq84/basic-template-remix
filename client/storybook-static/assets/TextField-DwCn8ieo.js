import {
  c as m,
  d as p,
  a as F,
  e as y,
  f as C,
  g as I,
  h as g,
} from './utils-BgHHH9V7.js';
import { $ as B } from './FieldError-DNxovmhL.js';
import { $ as D } from './Form-D4JdquZw.js';
import { $ as M, a as O } from './Input-BX2iOOjZ.js';
import { a as q } from './Label-Dp0AxpCw.js';
import { r as i, R as $ } from './index-DJO9vBfz.js';
import { d as A, e as V, b as S } from './index-BqgWbNE6.js';
import { $ as _ } from './index-CxY2JlPL.js';
const P = i.createContext({});
let w = (e) => {
  let { onHoverStart: a, onHoverChange: r, onHoverEnd: t, ...d } = e;
  return d;
};
function N(e, a) {
  [e, a] = m(e, a, P);
  let { hoverProps: r, isHovered: t } = A(e),
    {
      isFocused: d,
      isFocusVisible: o,
      focusProps: s,
    } = V({ isTextInput: !0, autoFocus: e.autoFocus }),
    f = !!e['aria-invalid'] && e['aria-invalid'] !== 'false',
    n = p({
      ...e,
      values: {
        isHovered: t,
        isFocused: d,
        isFocusVisible: o,
        isDisabled: e.disabled || !1,
        isInvalid: f,
      },
      defaultClassName: 'react-aria-TextArea',
    });
  return $.createElement('textarea', {
    ...F(w(e), s, r),
    ...n,
    ref: a,
    'data-focused': d || void 0,
    'data-disabled': e.disabled || void 0,
    'data-hovered': t || void 0,
    'data-focus-visible': o || void 0,
    'data-invalid': f || void 0,
  });
}
const X = i.forwardRef(N),
  k = i.createContext(null);
function L(e, a) {
  [e, a] = m(e, a, k);
  let { validationBehavior: r } = y(D) || {};
  var t, d;
  let o =
      (d = (t = e.validationBehavior) !== null && t !== void 0 ? t : r) !==
        null && d !== void 0
        ? d
        : 'native',
    s = i.useRef(null),
    [f, n] = C(),
    [h, R] = i.useState('input'),
    {
      labelProps: H,
      inputProps: u,
      descriptionProps: T,
      errorMessageProps: E,
      ...l
    } = M({ ...I(e), inputElementType: h, label: n, validationBehavior: o }, s),
    b = i.useCallback((c) => {
      (s.current = c),
        c && R(c instanceof HTMLTextAreaElement ? 'textarea' : 'input');
    }, []),
    v = p({
      ...e,
      values: {
        isDisabled: e.isDisabled || !1,
        isInvalid: l.isInvalid,
        isReadOnly: e.isReadOnly || !1,
        isRequired: e.isRequired || !1,
      },
      defaultClassName: 'react-aria-TextField',
    }),
    x = S(e);
  return (
    delete x.id,
    $.createElement(
      'div',
      {
        ...x,
        ...v,
        ref: a,
        slot: e.slot || void 0,
        'data-disabled': e.isDisabled || void 0,
        'data-invalid': l.isInvalid || void 0,
        'data-readonly': e.isReadOnly || void 0,
        'data-required': e.isRequired || void 0,
      },
      $.createElement(
        g,
        {
          values: [
            [q, { ...H, ref: f }],
            [O, { ...u, ref: b }],
            [P, { ...u, ref: b }],
            [_, { slots: { description: T, errorMessage: E } }],
            [B, l],
          ],
        },
        v.children
      )
    )
  );
}
const Y = i.forwardRef(L);
export { Y as $, X as a };
