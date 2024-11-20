import { $ as p } from './Separator-p0-S5q3W.js';
import { r } from './index-DJO9vBfz.js';
function u(h) {
  let l = p({ usage: 'search', ...h }),
    o = r.useCallback(
      (a, e) =>
        e.length === 0
          ? !0
          : ((a = a.normalize('NFC')),
            (e = e.normalize('NFC')),
            l.compare(a.slice(0, e.length), e) === 0),
      [l]
    ),
    c = r.useCallback(
      (a, e) =>
        e.length === 0
          ? !0
          : ((a = a.normalize('NFC')),
            (e = e.normalize('NFC')),
            l.compare(a.slice(-e.length), e) === 0),
      [l]
    ),
    f = r.useCallback(
      (a, e) => {
        if (e.length === 0) return !0;
        (a = a.normalize('NFC')), (e = e.normalize('NFC'));
        let t = 0,
          m = e.length;
        for (; t + m <= a.length; t++) {
          let n = a.slice(t, t + m);
          if (l.compare(e, n) === 0) return !0;
        }
        return !1;
      },
      [l]
    );
  return r.useMemo(
    () => ({ startsWith: o, endsWith: c, contains: f }),
    [o, c, f]
  );
}
export { u as $ };
