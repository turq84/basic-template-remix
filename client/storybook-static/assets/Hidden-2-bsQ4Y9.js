import { r as c } from './index-DJdX7xnk.js';
import { r as t, R as n } from './index-DJO9vBfz.js';
import { b as d } from './utils-BgHHH9V7.js';
if (typeof HTMLTemplateElement < 'u') {
  const e = Object.getOwnPropertyDescriptor(Node.prototype, 'firstChild').get;
  Object.defineProperty(HTMLTemplateElement.prototype, 'firstChild', {
    configurable: !0,
    enumerable: !0,
    get: function () {
      return this.dataset.reactAriaHidden
        ? this.content.firstChild
        : e.call(this);
    },
  });
}
const i = t.createContext(!1),
  l = typeof DocumentFragment < 'u' ? new DocumentFragment() : null;
function p(e) {
  let r = t.useContext(i),
    o = d();
  if (r) return n.createElement(n.Fragment, null, e.children);
  let a = n.createElement(i.Provider, { value: !0 }, e.children);
  return o
    ? n.createElement('template', { 'data-react-aria-hidden': !0 }, a)
    : c.createPortal(a, l);
}
function b(e) {
  let r = (o, a) => (t.useContext(i) ? null : e(o, a));
  return (r.displayName = e.displayName || e.name), t.forwardRef(r);
}
function $() {
  return t.useContext(i);
}
export { b as $, p as a, $ as b };
