var s = Object.create,
  a = Object.defineProperty,
  c = Object.getOwnPropertyDescriptor,
  o = Object.getOwnPropertyNames,
  u = Object.getPrototypeOf,
  O = Object.prototype.hasOwnProperty,
  l = (e, r) =>
    function () {
      return e && (r = (0, e[o(e)[0]])((e = 0))), r;
    },
  v = (e, r) =>
    function () {
      return r || (0, e[o(e)[0]])((r = { exports: {} }).exports, r), r.exports;
    },
  b = (e, r) => {
    for (var t in r) a(e, t, { get: r[t], enumerable: !0 });
  },
  n = (e, r, t, p) => {
    if ((r && typeof r == 'object') || typeof r == 'function')
      for (let _ of o(r))
        !O.call(e, _) &&
          _ !== t &&
          a(e, _, {
            get: () => r[_],
            enumerable: !(p = c(r, _)) || p.enumerable,
          });
    return e;
  },
  P = (e, r, t) => (
    (t = e != null ? s(u(e)) : {}),
    n(
      !e || !e.__esModule ? a(t, 'default', { value: e, enumerable: !0 }) : t,
      e
    )
  ),
  y = (e) => n(a({}, '__esModule', { value: !0 }), e);
export { P as _, v as a, l as b, y as c, b as d };
