import { r as b, R as E } from './index-DJO9vBfz.js';
import {
  $ as I,
  a as H,
  b as F,
  f as M,
  d as S,
  e as V,
} from './index-BqgWbNE6.js';
import { a as v, c as D, d as R } from './utils-BgHHH9V7.js';
import { a as L, b as O, c as T } from './Form-D4JdquZw.js';
import { a as q } from './FieldError-DNxovmhL.js';
import { $ as B } from './Hidden-2-bsQ4Y9.js';
function K(e, a) {
  let {
      inputElementType: d = 'input',
      isDisabled: i = !1,
      isRequired: t = !1,
      isReadOnly: r = !1,
      type: s = 'text',
      validationBehavior: o = 'aria',
    } = e,
    [n, c] = I(e.value, e.defaultValue || '', e.onChange),
    { focusableProps: m } = H(e, a),
    f = L({ ...e, value: n }),
    {
      isInvalid: u,
      validationErrors: $,
      validationDetails: P,
    } = f.displayValidation,
    {
      labelProps: x,
      fieldProps: p,
      descriptionProps: C,
      errorMessageProps: g,
    } = q({ ...e, isInvalid: u, errorMessage: e.errorMessage || $ }),
    h = F(e, { labelable: !0 });
  const y = { type: s, pattern: e.pattern };
  return (
    O(a, n, c),
    T(e, f, a),
    b.useEffect(() => {
      if (a.current instanceof M(a.current).HTMLTextAreaElement) {
        let l = a.current;
        Object.defineProperty(l, 'defaultValue', {
          get: () => l.value,
          set: () => {},
          configurable: !0,
        });
      }
    }, [a]),
    {
      labelProps: x,
      inputProps: v(h, d === 'input' ? y : void 0, {
        disabled: i,
        readOnly: r,
        required: t && o === 'native',
        'aria-required': (t && o === 'aria') || void 0,
        'aria-invalid': u || void 0,
        'aria-errormessage': e['aria-errormessage'],
        'aria-activedescendant': e['aria-activedescendant'],
        'aria-autocomplete': e['aria-autocomplete'],
        'aria-haspopup': e['aria-haspopup'],
        value: n,
        onChange: (l) => c(l.target.value),
        autoComplete: e.autoComplete,
        autoCapitalize: e.autoCapitalize,
        maxLength: e.maxLength,
        minLength: e.minLength,
        name: e.name,
        placeholder: e.placeholder,
        inputMode: e.inputMode,
        onCopy: e.onCopy,
        onCut: e.onCut,
        onPaste: e.onPaste,
        onCompositionEnd: e.onCompositionEnd,
        onCompositionStart: e.onCompositionStart,
        onCompositionUpdate: e.onCompositionUpdate,
        onSelect: e.onSelect,
        onBeforeInput: e.onBeforeInput,
        onInput: e.onInput,
        ...m,
        ...p,
      }),
      descriptionProps: C,
      errorMessageProps: g,
      isInvalid: u,
      validationErrors: $,
      validationDetails: P,
    }
  );
}
const z = b.createContext({});
let U = (e) => {
  let { onHoverStart: a, onHoverChange: d, onHoverEnd: i, ...t } = e;
  return t;
};
function j(e, a) {
  [e, a] = D(e, a, z);
  let { hoverProps: d, isHovered: i } = S(e),
    {
      isFocused: t,
      isFocusVisible: r,
      focusProps: s,
    } = V({ isTextInput: !0, autoFocus: e.autoFocus }),
    o = !!e['aria-invalid'] && e['aria-invalid'] !== 'false',
    n = R({
      ...e,
      values: {
        isHovered: i,
        isFocused: t,
        isFocusVisible: r,
        isDisabled: e.disabled || !1,
        isInvalid: o,
      },
      defaultClassName: 'react-aria-Input',
    });
  return E.createElement('input', {
    ...v(U(e), s, d),
    ...n,
    ref: a,
    'data-focused': t || void 0,
    'data-disabled': e.disabled || void 0,
    'data-hovered': i || void 0,
    'data-focus-visible': r || void 0,
    'data-invalid': o || void 0,
  });
}
const Q = B(j);
export { K as $, z as a, Q as b };
