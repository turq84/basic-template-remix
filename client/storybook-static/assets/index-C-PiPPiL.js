import { j as x } from './jsx-runtime-CkxqCPlQ.js';
import { r as p, R as V } from './index-DJO9vBfz.js';
import { a as M, $ as w } from './VisuallyHidden-BiYBAiUW.js';
import {
  a as y,
  c as L,
  e as H,
  m as N,
  n as W,
  g as O,
  d as z,
} from './utils-BgHHH9V7.js';
import {
  b as A,
  a as q,
  c as T,
  d as G,
  e as J,
  $ as K,
} from './Form-D4JdquZw.js';
import { a as Q, b as E, e as U, d as X, I as Y } from './index-BqgWbNE6.js';
import { $ as B } from './usePress-BFY2e0Rh.js';
import { $ as F } from './useToggleState-DzuOW28X.js';
import { s as D } from './factory-BfbsYOSY.js';
function Z(e, i, l) {
  let {
      isDisabled: d = !1,
      isReadOnly: r = !1,
      value: a,
      name: u,
      children: t,
      'aria-label': o,
      'aria-labelledby': n,
      validationState: f = 'valid',
      isInvalid: b,
    } = e,
    $ = (h) => {
      h.stopPropagation(), i.setSelected(h.target.checked);
    },
    v = t != null,
    s = o != null || n != null;
  !v &&
    !s &&
    console.warn(
      'If you do not provide children, you must specify an aria-label for accessibility'
    );
  let { pressProps: c, isPressed: m } = B({ isDisabled: d }),
    { pressProps: P, isPressed: I } = B({
      isDisabled: d || r,
      onPress() {
        i.toggle();
      },
    }),
    { focusableProps: R } = Q(e, l),
    C = y(c, R),
    g = E(e, { labelable: !0 });
  return (
    A(l, i.isSelected, i.setSelected),
    {
      labelProps: y(P, { onClick: (h) => h.preventDefault() }),
      inputProps: y(g, {
        'aria-invalid': b || f === 'invalid' || void 0,
        'aria-errormessage': e['aria-errormessage'],
        'aria-controls': e['aria-controls'],
        'aria-readonly': r || void 0,
        onChange: $,
        disabled: d,
        ...(a == null ? {} : { value: a }),
        name: u,
        type: 'checkbox',
        ...C,
      }),
      isSelected: i.isSelected,
      isPressed: m || I,
      isDisabled: d,
      isReadOnly: r,
      isInvalid: b || f === 'invalid',
    }
  );
}
function j(e, i, l) {
  let d = q({ ...e, value: i.isSelected }),
    {
      isInvalid: r,
      validationErrors: a,
      validationDetails: u,
    } = d.displayValidation,
    {
      labelProps: t,
      inputProps: o,
      isSelected: n,
      isPressed: f,
      isDisabled: b,
      isReadOnly: $,
    } = Z({ ...e, isInvalid: r }, i, l);
  T(e, d, l);
  let { isIndeterminate: v, isRequired: s, validationBehavior: c = 'aria' } = e;
  return (
    p.useEffect(() => {
      l.current && (l.current.indeterminate = !!v);
    }),
    {
      labelProps: t,
      inputProps: {
        ...o,
        checked: n,
        'aria-required': (s && c === 'aria') || void 0,
        required: s && c === 'native',
      },
      isSelected: n,
      isPressed: f,
      isDisabled: b,
      isReadOnly: $,
      isInvalid: r,
      validationErrors: a,
      validationDetails: u,
    }
  );
}
const ee = new WeakMap();
function ie(e, i, l) {
  const d = F({
    isReadOnly: e.isReadOnly || i.isReadOnly,
    isSelected: i.isSelected(e.value),
    onChange(m) {
      m ? i.addValue(e.value) : i.removeValue(e.value),
        e.onChange && e.onChange(m);
    },
  });
  let {
    name: r,
    descriptionId: a,
    errorMessageId: u,
    validationBehavior: t,
  } = ee.get(i);
  var o;
  t = (o = e.validationBehavior) !== null && o !== void 0 ? o : t;
  let { realtimeValidation: n } = q({
      ...e,
      value: d.isSelected,
      name: void 0,
      validationBehavior: 'aria',
    }),
    f = p.useRef(G),
    b = () => {
      i.setInvalid(e.value, n.isInvalid ? n : f.current);
    };
  p.useEffect(b);
  let $ = i.realtimeValidation.isInvalid ? i.realtimeValidation : n,
    v = t === 'native' ? i.displayValidation : $;
  var s;
  let c = j(
    {
      ...e,
      isReadOnly: e.isReadOnly || i.isReadOnly,
      isDisabled: e.isDisabled || i.isDisabled,
      name: e.name || r,
      isRequired:
        (s = e.isRequired) !== null && s !== void 0 ? s : i.isRequired,
      validationBehavior: t,
      [J]: {
        realtimeValidation: $,
        displayValidation: v,
        resetValidation: i.resetValidation,
        commitValidation: i.commitValidation,
        updateValidation(m) {
          (f.current = m), b();
        },
      },
    },
    d,
    l
  );
  return {
    ...c,
    inputProps: {
      ...c.inputProps,
      'aria-describedby':
        [e['aria-describedby'], i.isInvalid ? u : null, a]
          .filter(Boolean)
          .join(' ') || void 0,
    },
  };
}
const ae = p.createContext(null);
function de(e, i) {
  let { inputRef: l = null, ...d } = e;
  [e, i] = L(d, i, M);
  let { validationBehavior: r } = H(K) || {};
  var a, u;
  let t =
      (u = (a = e.validationBehavior) !== null && a !== void 0 ? a : r) !==
        null && u !== void 0
        ? u
        : 'native',
    o = p.useContext(ae),
    n = N(W(l, e.inputRef !== void 0 ? e.inputRef : null)),
    {
      labelProps: f,
      inputProps: b,
      isSelected: $,
      isDisabled: v,
      isReadOnly: s,
      isPressed: c,
      isInvalid: m,
    } = o
      ? ie(
          {
            ...O(e),
            value: e.value,
            children: typeof e.children == 'function' ? !0 : e.children,
          },
          o,
          n
        )
      : j(
          {
            ...O(e),
            children: typeof e.children == 'function' ? !0 : e.children,
            validationBehavior: t,
          },
          F(e),
          n
        ),
    { isFocused: P, isFocusVisible: I, focusProps: R } = U(),
    C = v || s,
    { hoverProps: g, isHovered: h } = X({ ...e, isDisabled: C }),
    S = z({
      ...e,
      defaultClassName: 'react-aria-Checkbox',
      values: {
        isSelected: $,
        isIndeterminate: e.isIndeterminate || !1,
        isPressed: c,
        isHovered: h,
        isFocused: P,
        isFocusVisible: I,
        isDisabled: v,
        isReadOnly: s,
        isInvalid: m,
        isRequired: e.isRequired || !1,
      },
    }),
    k = E(e);
  return (
    delete k.id,
    V.createElement(
      'label',
      {
        ...y(k, f, g, S),
        ref: i,
        slot: e.slot || void 0,
        'data-selected': $ || void 0,
        'data-indeterminate': e.isIndeterminate || void 0,
        'data-pressed': c || void 0,
        'data-hovered': h || void 0,
        'data-focused': P || void 0,
        'data-focus-visible': I || void 0,
        'data-disabled': v || void 0,
        'data-readonly': s || void 0,
        'data-invalid': m || void 0,
        'data-required': e.isRequired || void 0,
      },
      V.createElement(
        w,
        { elementType: 'span' },
        V.createElement('input', { ...y(b, R), ref: n })
      ),
      S.children
    )
  );
}
const le = p.forwardRef(de),
  _ = p.forwardRef(({ label: e, labelledby: i, hiddenLabel: l, ...d }, r) =>
    x.jsx(re, {
      'aria-labelledby': i,
      'aria-label': l,
      ref: r,
      ...d,
      children: (a) =>
        x.jsxs(x.Fragment, {
          children: [
            x.jsx(ne, {
              isFocusVisible: a.isFocusVisible,
              isDisabled: a.isDisabled,
              isInvalid: a.isInvalid,
              state: a.isIndeterminate
                ? 'indeterminate'
                : a.isSelected
                  ? 'selected'
                  : 'unselected',
              children:
                (a.isSelected || a.isIndeterminate) &&
                x.jsx(se, {
                  'aria-hidden': !0,
                  children: x.jsx(Y, {
                    name: a.isIndeterminate ? 'remove' : 'check',
                    size: 14,
                    color: 'currentColor',
                  }),
                }),
            }),
            e,
          ],
        }),
    })
  ),
  re = D(le, { base: { display: 'flex', alignItems: 'center', gap: '$xs' } }),
  ne = D('div', {
    base: {
      position: 'relative',
      width: '18px',
      height: '18px',
      flexShrink: 0,
      borderRadius: '$small',
      borderWidth: '1px',
    },
    variants: {
      state: {
        unselected: {
          backgroundColor: '$surface',
          color: '$primaryMuted',
          borderColor: '$line1',
        },
        indeterminate: {
          backgroundColor: '$primaryMuted',
          borderColor: '$primary',
          color: '$primaryContrast',
        },
        selected: {
          backgroundColor: '$primaryContrast',
          borderColor: '$primaryContrast',
          color: '$primaryMuted',
        },
      },
      isInvalid: {
        true: {
          backgroundColor: '$errorMuted',
          borderColor: '$error',
          color: '$error',
        },
      },
      isDisabled: {
        true: { backgroundColor: '$neutral4', cursor: 'not-allowed' },
      },
      isFocusVisible: {
        true: {
          outline: '2px solid',
          outlineColor: '$info',
          outlineOffset: '1px',
        },
      },
    },
  }),
  se = D('div', {
    base: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      $fadeScaleIn: 200,
    },
  });
_.displayName = 'Checkbox';
_.__docgenInfo = {
  description:
    'For accessibility reasons, you need to provide either `label`, `labelledby`,\nor `hiddenLabel` as a prop.\n\nRef: https://react-spectrum.adobe.com/react-aria/Checkbox.html',
  methods: [],
  displayName: 'Checkbox',
};
export { _ as C };
