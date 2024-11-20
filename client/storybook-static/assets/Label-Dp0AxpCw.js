import { $ as f, c as d } from './utils-BgHHH9V7.js';
import { $ as s } from './useLabels-D003iZWB.js';
import { $ as c } from './Hidden-2-bsQ4Y9.js';
import { r as n, R as p } from './index-DJO9vBfz.js';
function L(l) {
  let {
    id: e,
    label: b,
    'aria-labelledby': a,
    'aria-label': t,
    labelElementType: i = 'label',
  } = l;
  e = f(e);
  let r = f(),
    o = {};
  b
    ? ((a = a ? `${r} ${a}` : r),
      (o = { id: r, htmlFor: i === 'label' ? e : void 0 }))
    : !a &&
      !t &&
      console.warn(
        'If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility'
      );
  let $ = s({ id: e, 'aria-label': t, 'aria-labelledby': a });
  return { labelProps: o, fieldProps: $ };
}
const m = n.createContext({});
function y(l, e) {
  [l, e] = d(l, e, m);
  let { elementType: b = 'label', ...a } = l;
  return p.createElement(b, { className: 'react-aria-Label', ...a, ref: e });
}
const T = c(y);
export { T as $, m as a, L as b };
