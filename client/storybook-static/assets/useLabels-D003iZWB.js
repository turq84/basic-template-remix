import { $ as t } from './utils-BgHHH9V7.js';
function s(r, a) {
  let { id: i, 'aria-label': l, 'aria-labelledby': e } = r;
  return (
    (i = t(i)),
    e && l
      ? (e = [...new Set([i, ...e.trim().split(/\s+/)])].join(' '))
      : e && (e = e.trim().split(/\s+/).join(' ')),
    !l && !e && a && (l = a),
    { id: i, 'aria-label': l, 'aria-labelledby': e }
  );
}
export { s as $ };
