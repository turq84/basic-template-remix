import { j as x } from './jsx-runtime-CkxqCPlQ.js';
import { r as n, R as S } from './index-DJO9vBfz.js';
import { c as p } from './utils-BgHHH9V7.js';
import { b, t as g, a as $ } from './index-DdgtEVhA.js';
const c = n.createContext({});
function h(e, l) {
  [e, l] = p(e, l, c);
  let { elementType: a = 'span', ...t } = e;
  return S.createElement(a, { className: 'react-aria-Text', ...t, ref: l });
}
const u = n.forwardRef(h),
  v = {
    body: 'span',
    bodyBold: 'strong',
    bodyExtraSmall: 'span',
    bodyExtraSmallBold: 'strong',
    bodyLarge: 'span',
    bodyLargeBold: 'strong',
    bodySemiBold: 'strong',
    bodySmall: 'span',
    bodySmallBold: 'strong',
    bodySmallSemiBold: 'strong',
    displayExtraSmall: 'span',
    displayLarge: 'span',
    displaySmall: 'span',
    headingL: 'h2',
    headingM: 'h3',
    headingS: 'h4',
    headingXl: 'h1',
    headingXxl: 'h1',
    label: 'span',
    lead: 'span',
    leadBold: 'strong',
    linkText: 'span',
    linkTextHover: 'span',
  },
  B = b({
    base: { margin: '0px', maxWidth: '100%' },
    variants: {
      variant: {
        body: { textStyle: '$body' },
        bodyBold: { textStyle: '$bodyBold' },
        bodyExtraSmall: { textStyle: '$bodyExtraSmall' },
        bodyExtraSmallBold: { textStyle: '$bodyExtraSmallBold' },
        bodyLarge: { textStyle: '$bodyLarge' },
        bodyLargeBold: { textStyle: '$bodyLargeBold' },
        bodySemiBold: { textStyle: '$bodySemiBold' },
        bodySmall: { textStyle: '$bodySmall' },
        bodySmallBold: { textStyle: '$bodySmallBold' },
        bodySmallSemiBold: { textStyle: '$bodySmallSemiBold' },
        displayExtraSmall: { textStyle: '$displayExtraSmall' },
        displayLarge: { textStyle: '$displayLarge' },
        displaySmall: { textStyle: '$displaySmall' },
        headingL: { textStyle: '$headingL' },
        headingM: { textStyle: '$headingM' },
        headingS: { textStyle: '$headingS' },
        headingXl: { textStyle: '$headingXl' },
        headingXxl: { textStyle: '$headingXxl' },
        label: { textStyle: '$label' },
        lead: { textStyle: '$lead' },
        leadBold: { textStyle: '$leadBold' },
        linkText: { textStyle: '$linkText' },
        linkTextHover: { textStyle: '$linkTextHover' },
      },
    },
  }),
  r = ({
    as: e,
    align: l,
    children: a,
    className: t,
    lineHeight: d,
    variant: o,
    style: i,
    color: s = 'text',
    ...m
  }) => {
    const y = e || v[o];
    return x.jsx(u, {
      ...m,
      elementType: y,
      className: $(B({ variant: o }), t),
      style: {
        ...i,
        lineHeight: d,
        textAlign: l,
        color: g.var(`$colors.${s}`),
      },
      children: a,
    });
  },
  k = n.memo(r);
r.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'TextBase',
  props: {
    variant: { required: !0, tsType: { name: 'unknown' }, description: '' },
    color: {
      required: !1,
      tsType: { name: 'unknown' },
      description: '',
      defaultValue: { value: "'text'", computed: !1 },
    },
    align: {
      required: !1,
      tsType: {
        name: "CSSProperties['textAlign']",
        raw: "CSSProperties['textAlign']",
      },
      description: '',
    },
    lineHeight: {
      required: !1,
      tsType: {
        name: "CSSProperties['lineHeight']",
        raw: "CSSProperties['lineHeight']",
      },
      description: '',
    },
    as: {
      required: !1,
      tsType: {
        name: 'union',
        raw: `| 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'b'
| 'em'
| 'i'
| 'p'
| 'small'
| 'span'
| 'strong'
| 'sub'`,
        elements: [
          { name: 'literal', value: "'h1'" },
          { name: 'literal', value: "'h2'" },
          { name: 'literal', value: "'h3'" },
          { name: 'literal', value: "'h4'" },
          { name: 'literal', value: "'h5'" },
          { name: 'literal', value: "'b'" },
          { name: 'literal', value: "'em'" },
          { name: 'literal', value: "'i'" },
          { name: 'literal', value: "'p'" },
          { name: 'literal', value: "'small'" },
          { name: 'literal', value: "'span'" },
          { name: 'literal', value: "'strong'" },
          { name: 'literal', value: "'sub'" },
        ],
      },
      description: '',
    },
  },
};
export { c as $, k as T };
