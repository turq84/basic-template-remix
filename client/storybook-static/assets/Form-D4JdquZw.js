import { r as l } from './index-DJO9vBfz.js';
import { k as V, l as B } from './utils-BgHHH9V7.js';
import { g as T } from './index-BqgWbNE6.js';
const C = {
    badInput: !1,
    customError: !1,
    patternMismatch: !1,
    rangeOverflow: !1,
    rangeUnderflow: !1,
    stepMismatch: !1,
    tooLong: !1,
    tooShort: !1,
    typeMismatch: !1,
    valueMissing: !1,
    valid: !0,
  },
  D = { ...C, customError: !0, valid: !1 },
  m = { isInvalid: !1, validationDetails: C, validationErrors: [] },
  U = l.createContext({}),
  S = '__formValidationState' + Date.now();
function G(t) {
  if (t[S]) {
    let {
      realtimeValidation: e,
      displayValidation: a,
      updateValidation: r,
      resetValidation: v,
      commitValidation: i,
    } = t[S];
    return {
      realtimeValidation: e,
      displayValidation: a,
      updateValidation: r,
      resetValidation: v,
      commitValidation: i,
    };
  }
  return _(t);
}
function _(t) {
  let {
    isInvalid: e,
    validationState: a,
    name: r,
    value: v,
    builtinValidation: i,
    validate: d,
    validationBehavior: c = 'aria',
  } = t;
  a && (e || (e = a === 'invalid'));
  let n =
      e !== void 0
        ? { isInvalid: e, validationErrors: [], validationDetails: D }
        : null,
    o = l.useMemo(() => L(j(d, v)), [d, v]);
  i != null && i.validationDetails.valid && (i = null);
  let u = l.useContext(U),
    f = l.useMemo(
      () => (r ? (Array.isArray(r) ? r.flatMap((s) => I(u[s])) : I(u[r])) : []),
      [u, r]
    ),
    [A, w] = l.useState(u),
    [M, b] = l.useState(!1);
  u !== A && (w(u), b(!1));
  let p = l.useMemo(() => L(M ? [] : f), [M, f]),
    x = l.useRef(m),
    [E, y] = l.useState(m),
    $ = l.useRef(m),
    O = () => {
      if (!R) return;
      g(!1);
      let s = o || i || x.current;
      h(s, $.current) || (($.current = s), y(s));
    },
    [R, g] = l.useState(!1);
  return (
    l.useEffect(O),
    {
      realtimeValidation: n || p || o || i || m,
      displayValidation: c === 'native' ? n || p || E : n || p || o || i || E,
      updateValidation(s) {
        c === 'aria' && !h(E, s) ? y(s) : (x.current = s);
      },
      resetValidation() {
        let s = m;
        h(s, $.current) || (($.current = s), y(s)),
          c === 'native' && g(!1),
          b(!0);
      },
      commitValidation() {
        c === 'native' && g(!0), b(!0);
      },
    }
  );
}
function I(t) {
  return t ? (Array.isArray(t) ? t : [t]) : [];
}
function j(t, e) {
  if (typeof t == 'function') {
    let a = t(e);
    if (a && typeof a != 'boolean') return I(a);
  }
  return [];
}
function L(t) {
  return t.length
    ? { isInvalid: !0, validationErrors: t, validationDetails: D }
    : null;
}
function h(t, e) {
  return t === e
    ? !0
    : t &&
        e &&
        t.isInvalid === e.isInvalid &&
        t.validationErrors.length === e.validationErrors.length &&
        t.validationErrors.every((a, r) => a === e.validationErrors[r]) &&
        Object.entries(t.validationDetails).every(
          ([a, r]) => e.validationDetails[a] === r
        );
}
function H(t, e, a) {
  let r = l.useRef(e),
    v = V(() => {
      a && a(r.current);
    });
  l.useEffect(() => {
    var i;
    let d =
      t == null || (i = t.current) === null || i === void 0 ? void 0 : i.form;
    return (
      d == null || d.addEventListener('reset', v),
      () => {
        d == null || d.removeEventListener('reset', v);
      }
    );
  }, [t, v]);
}
function J(t, e, a) {
  let { validationBehavior: r, focus: v } = t;
  B(() => {
    if (r === 'native' && a != null && a.current) {
      let n = e.realtimeValidation.isInvalid
        ? e.realtimeValidation.validationErrors.join(' ') || 'Invalid value.'
        : '';
      a.current.setCustomValidity(n),
        a.current.hasAttribute('title') || (a.current.title = ''),
        e.realtimeValidation.isInvalid || e.updateValidation(F(a.current));
    }
  });
  let i = V(() => {
      e.resetValidation();
    }),
    d = V((n) => {
      var o;
      e.displayValidation.isInvalid || e.commitValidation();
      let u =
        a == null || (o = a.current) === null || o === void 0 ? void 0 : o.form;
      if (!n.defaultPrevented && a && u && Q(u) === a.current) {
        var f;
        v ? v() : (f = a.current) === null || f === void 0 || f.focus(),
          T('keyboard');
      }
      n.preventDefault();
    }),
    c = V(() => {
      e.commitValidation();
    });
  l.useEffect(() => {
    let n = a == null ? void 0 : a.current;
    if (!n) return;
    let o = n.form;
    return (
      n.addEventListener('invalid', d),
      n.addEventListener('change', c),
      o == null || o.addEventListener('reset', i),
      () => {
        n.removeEventListener('invalid', d),
          n.removeEventListener('change', c),
          o == null || o.removeEventListener('reset', i);
      }
    );
  }, [a, d, c, i, r]);
}
function k(t) {
  let e = t.validity;
  return {
    badInput: e.badInput,
    customError: e.customError,
    patternMismatch: e.patternMismatch,
    rangeOverflow: e.rangeOverflow,
    rangeUnderflow: e.rangeUnderflow,
    stepMismatch: e.stepMismatch,
    tooLong: e.tooLong,
    tooShort: e.tooShort,
    typeMismatch: e.typeMismatch,
    valueMissing: e.valueMissing,
    valid: e.valid,
  };
}
function F(t) {
  return {
    isInvalid: !t.validity.valid,
    validationDetails: k(t),
    validationErrors: t.validationMessage ? [t.validationMessage] : [],
  };
}
function Q(t) {
  for (let e = 0; e < t.elements.length; e++) {
    let a = t.elements[e];
    if (!a.validity.valid) return a;
  }
  return null;
}
const K = l.createContext(null);
export { K as $, G as a, H as b, J as c, m as d, S as e };
