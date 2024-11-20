import { b as n } from './Label-Dp0AxpCw.js';
import { i as l, a as f } from './utils-BgHHH9V7.js';
import { r as p } from './index-DJO9vBfz.js';
function P(e) {
  let { description: a, errorMessage: o, isInvalid: i, validationState: t } = e,
    { labelProps: c, fieldProps: r } = n(e),
    s = l([!!a, !!o, i, t]),
    d = l([!!a, !!o, i, t]);
  return (
    (r = f(r, {
      'aria-describedby':
        [s, d, e['aria-describedby']].filter(Boolean).join(' ') || void 0,
    })),
    {
      labelProps: c,
      fieldProps: r,
      descriptionProps: { id: s },
      errorMessageProps: { id: d },
    }
  );
}
const m = p.createContext(null);
export { m as $, P as a };
