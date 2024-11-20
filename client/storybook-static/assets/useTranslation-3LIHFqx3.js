import { r as l } from './index-DJO9vBfz.js';
const v = (...e) => {
    console != null &&
      console.warn &&
      (g(e[0]) && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e));
  },
  O = {},
  b = (...e) => {
    (g(e[0]) && O[e[0]]) || (g(e[0]) && (O[e[0]] = new Date()), v(...e));
  },
  k = (e, n) => () => {
    if (e.isInitialized) n();
    else {
      const s = () => {
        setTimeout(() => {
          e.off('initialized', s);
        }, 0),
          n();
      };
      e.on('initialized', s);
    }
  },
  S = (e, n, s) => {
    e.loadNamespaces(n, k(e, s));
  },
  j = (e, n, s, o) => {
    if (
      (g(s) && (s = [s]),
      e.options.preload && e.options.preload.indexOf(n) > -1)
    )
      return S(e, s, o);
    s.forEach((p) => {
      e.options.ns.indexOf(p) < 0 && e.options.ns.push(p);
    }),
      e.loadLanguages(n, k(e, o));
  },
  P = (e, n, s = {}) =>
    !n.languages || !n.languages.length
      ? (b('i18n.languages were undefined or empty', n.languages), !0)
      : n.hasLoadedNamespace(e, {
          lng: s.lng,
          precheck: (o, p) => {
            var t;
            if (
              ((t = s.bindI18n) == null
                ? void 0
                : t.indexOf('languageChanging')) > -1 &&
              o.services.backendConnector.backend &&
              o.isLanguageChangingTo &&
              !p(o.isLanguageChangingTo, e)
            )
              return !1;
          },
        }),
  g = (e) => typeof e == 'string',
  U = (e) => typeof e == 'object' && e !== null,
  $ =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  q = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '©',
    '&#169;': '©',
    '&reg;': '®',
    '&#174;': '®',
    '&hellip;': '…',
    '&#8230;': '…',
    '&#x2F;': '/',
    '&#47;': '/',
  },
  A = (e) => q[e],
  B = (e) => e.replace($, A);
let W = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: B,
};
const G = () => W;
let J;
const K = () => J,
  Y = l.createContext();
class Q {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(n) {
    n.forEach((s) => {
      this.usedNamespaces[s] || (this.usedNamespaces[s] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const X = (e, n) => {
    const s = l.useRef();
    return (
      l.useEffect(() => {
        s.current = e;
      }, [e, n]),
      s.current
    );
  },
  H = (e, n, s, o) => e.getFixedT(n, s, o),
  Z = (e, n, s, o) => l.useCallback(H(e, n, s, o), [e, n, s, o]),
  V = (e, n = {}) => {
    var z, F, R, L;
    const { i18n: s } = n,
      { i18n: o, defaultNS: p } = l.useContext(Y) || {},
      t = s || o || K();
    if ((t && !t.reportNamespaces && (t.reportNamespaces = new Q()), !t)) {
      b(
        'You will need to pass in an i18next instance by using initReactI18next'
      );
      const i = (c, u) =>
          g(u)
            ? u
            : U(u) && g(u.defaultValue)
              ? u.defaultValue
              : Array.isArray(c)
                ? c[c.length - 1]
                : c,
        r = [i, {}, !1];
      return (r.t = i), (r.i18n = {}), (r.ready = !1), r;
    }
    (z = t.options.react) != null &&
      z.wait &&
      b(
        'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.'
      );
    const m = { ...G(), ...t.options.react, ...n },
      { useSuspense: T, keyPrefix: w } = m;
    let a = p || ((F = t.options) == null ? void 0 : F.defaultNS);
    (a = g(a) ? [a] : a || ['translation']),
      (L = (R = t.reportNamespaces).addUsedNamespaces) == null || L.call(R, a);
    const d =
        (t.isInitialized || t.initializedStoreOnce) &&
        a.every((i) => P(i, t, m)),
      M = Z(t, n.lng || null, m.nsMode === 'fallback' ? a : a[0], w),
      C = () => M,
      x = () => H(t, n.lng || null, m.nsMode === 'fallback' ? a : a[0], w),
      [E, N] = l.useState(C);
    let h = a.join();
    n.lng && (h = `${n.lng}${h}`);
    const I = X(h),
      f = l.useRef(!0);
    l.useEffect(() => {
      const { bindI18n: i, bindI18nStore: r } = m;
      (f.current = !0),
        !d &&
          !T &&
          (n.lng
            ? j(t, n.lng, a, () => {
                f.current && N(x);
              })
            : S(t, a, () => {
                f.current && N(x);
              })),
        d && I && I !== h && f.current && N(x);
      const c = () => {
        f.current && N(x);
      };
      return (
        i && (t == null || t.on(i, c)),
        r && (t == null || t.store.on(r, c)),
        () => {
          (f.current = !1),
            t && (i == null || i.split(' ').forEach((u) => t.off(u, c))),
            r && t && r.split(' ').forEach((u) => t.store.off(u, c));
        }
      );
    }, [t, h]),
      l.useEffect(() => {
        f.current && d && N(C);
      }, [t, w, d]);
    const y = [E, t, d];
    if (((y.t = E), (y.i18n = t), (y.ready = d), d || (!d && !T))) return y;
    throw new Promise((i) => {
      n.lng ? j(t, n.lng, a, () => i()) : S(t, a, () => i());
    });
  };
export { V as u };
