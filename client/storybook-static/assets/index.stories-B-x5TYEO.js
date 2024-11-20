import { j as n } from './jsx-runtime-CkxqCPlQ.js';
import { S as f } from './index-CbVkzzMr.js';
import { T as s } from './index-CxY2JlPL.js';
import './index-DJO9vBfz.js';
import './index-DdgtEVhA.js';
import './utils-BgHHH9V7.js';
import './index-DJdX7xnk.js';
const g = (o) => o.charAt(0).toUpperCase() + o.slice(1),
  l = { fontFamily: 'Nunito Sans', textTransform: 'none', letterSpacing: 0 },
  t = { ...l, lineHeight: 1.5 },
  c = { ...l, lineHeight: 1.556 },
  d = { ...t, fontWeight: 400, fontSize: 16 },
  p = { ...t, fontWeight: 700, fontSize: 16 },
  S = { ...t, fontWeight: 400, fontSize: 12 },
  h = { ...t, fontWeight: 700, fontSize: 12 },
  m = { ...c, fontWeight: 400, fontSize: 18 },
  y = { ...c, fontWeight: 700, fontSize: 18 },
  z = { ...t, fontWeight: 600, fontSize: 16 },
  W = { ...t, fontWeight: 400, fontSize: 14 },
  x = { ...t, fontWeight: 700, fontSize: 14 },
  b = { ...t, fontWeight: 600, fontSize: 14 },
  u = { ...t, fontWeight: 500, fontSize: 32 },
  B = { ...t, fontWeight: 500, fontSize: 64 },
  T = { ...t, fontWeight: 500, fontSize: 48 },
  k = { ...t, fontWeight: 700, fontSize: 28 },
  _ = { ...t, fontWeight: 600, fontSize: 22 },
  j = { ...t, fontWeight: 600, fontSize: 16 },
  v = { ...t, fontWeight: 700, fontSize: 42 },
  E = { ...t, fontWeight: 700, fontSize: 72 },
  O = { ...t, fontWeight: 500, fontSize: 14 },
  A = { ...t, fontWeight: 400, fontSize: 28 },
  L = { ...t, fontWeight: 700, fontSize: 28 },
  H = { ...t, fontWeight: 600, fontSize: 16 },
  V = { ...t, fontWeight: 600, fontSize: 16 },
  M = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        body: d,
        bodyBold: p,
        bodyExtraSmall: S,
        bodyExtraSmallBold: h,
        bodyLarge: m,
        bodyLargeBold: y,
        bodySemiBold: z,
        bodySmall: W,
        bodySmallBold: x,
        bodySmallSemiBold: b,
        displayExtraSmall: u,
        displayLarge: B,
        displaySmall: T,
        headingL: k,
        headingM: _,
        headingS: j,
        headingXl: v,
        headingXxl: E,
        label: O,
        lead: A,
        leadBold: L,
        linkText: H,
        linkTextHover: V,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  U = { title: 'Text', component: s },
  e = () =>
    n.jsx(f, {
      direction: 'column',
      gap: 'large',
      children: Object.keys(M).map((o) =>
        n.jsx(
          s,
          { variant: o, color: 'text', children: g(o).replace(/-/g, ' ') },
          o
        )
      ),
    });
e.__docgenInfo = { description: '', methods: [], displayName: 'AllVariants' };
var i, a, r;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((i = e.parameters) == null ? void 0 : i.docs),
    source: {
      originalSource: `() => {
  return <Stack direction='column' gap='large'>
      {Object.keys(typography).map(variant => <Text variant={variant as TypographyToken} color='text' key={variant}>
          {capitalize(variant).replace(/-/g, ' ')}
        </Text>)}
    </Stack>;
}`,
      ...((r = (a = e.parameters) == null ? void 0 : a.docs) == null
        ? void 0
        : r.source),
    },
  },
};
const q = ['AllVariants'];
export { e as AllVariants, q as __namedExportsOrder, U as default };
