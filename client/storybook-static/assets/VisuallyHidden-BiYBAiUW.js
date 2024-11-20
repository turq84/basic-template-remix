import { r as e, R as d } from './index-DJO9vBfz.js';
import { a as u } from './utils-BgHHH9V7.js';
import { c as p } from './index-BqgWbNE6.js';
const h = e.createContext(null);
e.createContext(null);
e.createContext(null);
e.createContext(null);
e.createContext(null);
const m = e.createContext({}),
  n = {
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
  };
function f(s = {}) {
  let { style: t, isFocusable: o } = s,
    [r, a] = e.useState(!1),
    { focusWithinProps: l } = p({
      isDisabled: !o,
      onFocusWithinChange: (i) => a(i),
    }),
    c = e.useMemo(() => (r ? t : t ? { ...n, ...t } : n), [r]);
  return { visuallyHiddenProps: { ...l, style: c } };
}
function y(s) {
  let {
      children: t,
      elementType: o = 'div',
      isFocusable: r,
      style: a,
      ...l
    } = s,
    { visuallyHiddenProps: c } = f(s);
  return d.createElement(o, u(l, c), t);
}
export { y as $, h as a, m as b, f as c };
