import { j as f } from './jsx-runtime-CkxqCPlQ.js';
import { t as m } from './index-DdgtEVhA.js';
import { r as S } from './index-DJO9vBfz.js';
const y = S.forwardRef,
  e = y(
    (
      {
        as: r,
        children: t,
        style: i,
        gap: s,
        direction: a,
        align: o,
        justify: n,
        wrap: p,
        ...d
      },
      c
    ) => {
      const l = r || 'div';
      return f.jsx(l, {
        ...d,
        ref: c,
        style: {
          gap: m.var(`$spacing.${s}`),
          display: 'flex',
          flexDirection: a,
          alignItems: o,
          justifyContent: n,
          flexWrap: p,
          ...i,
        },
        children: t,
      });
    }
  );
e.displayName = 'Stack';
e.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Stack',
  props: {
    gap: { required: !0, tsType: { name: 'unknown' }, description: '' },
    direction: {
      required: !1,
      tsType: {
        name: "CSSProperties['flexDirection']",
        raw: "CSSProperties['flexDirection']",
      },
      description: '',
    },
    align: {
      required: !1,
      tsType: {
        name: "CSSProperties['alignItems']",
        raw: "CSSProperties['alignItems']",
      },
      description: '',
    },
    justify: {
      required: !1,
      tsType: {
        name: "CSSProperties['justifyContent']",
        raw: "CSSProperties['justifyContent']",
      },
      description: '',
    },
    wrap: {
      required: !1,
      tsType: {
        name: "CSSProperties['flexWrap']",
        raw: "CSSProperties['flexWrap']",
      },
      description: '',
    },
    children: { required: !0, tsType: { name: 'ReactNode' }, description: '' },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
    style: { required: !1, tsType: { name: 'CSSProperties' }, description: '' },
  },
};
export { e as S };
