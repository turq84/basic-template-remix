import { j as r } from './jsx-runtime-CkxqCPlQ.js';
import { r as x } from './index-DJO9vBfz.js';
import { $ } from './Button-CoD-b_IN.js';
import { s as y } from './factory-BfbsYOSY.js';
import { a as h, b as k, t as n } from './index-DdgtEVhA.js';
import { I as S } from './index-BqgWbNE6.js';
import { S as C } from './index-CwMSx2UQ.js';
const s = x.forwardRef(
    (
      {
        children: d,
        className: c,
        color: t = 'primary',
        icon: e,
        iconPlacement: a = 'start',
        isLoading: u,
        isDisabled: l,
        size: o = 'normal',
        style: p,
        variant: m,
        ...g
      },
      f
    ) => {
      const b = h(H({ size: o, variant: m, isDisabled: l }), c),
        v = {
          ...p,
          '--color-muted': n.var(`$colors.${t}Muted`),
          '--color-text': n.var(`$colors.${t}Contrast`),
          '--color': n.var(`$colors.${t}`),
          '--padding-start-factor': e && a === 'start' ? 0.75 : 1,
          '--padding-end-factor': e && a === 'end' ? 0.75 : 1,
        },
        i = e && r.jsx(S, { name: e, color: 'currentColor', size: j[o] });
      return r.jsxs($, {
        ...g,
        ref: f,
        style: v,
        className: b,
        isDisabled: l,
        children: [
          e && a === 'start' && i,
          r.jsx('span', { children: d }),
          e && a === 'end' && i,
          u &&
            r.jsx(T, {
              children: r.jsx(C, { color: 'currentColor', size: w[o] }),
            }),
        ],
      });
    }
  ),
  j = { small: 14, normal: 18, large: 20 },
  w = { small: 'small', normal: 'normal', large: 'medium' },
  H = k({
    base: {
      position: 'relative',
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      paddingBlock: '$xs',
      borderRadius: '$full',
      overflow: 'hidden',
      textDecoration: 'none',
      outlineOffset: '2px',
      cursor: 'pointer',
      transition: 'background 50ms linear, opacity 100ms linear',
      userSelect: 'none',
      lineHeight: 1,
      outline: 'none',
      '&[data-pressed="true"]': { opacity: 0.8 },
      '&[data-focus-visible="true"]': { outline: '2px solid var(--color)' },
      '& svg': { flexShrink: 0 },
    },
    variants: {
      variant: {
        filled: {
          backgroundColor: 'var(--color)',
          color: 'white',
          $hoverHighlight: !0,
        },
        soft: {
          color: 'var(--color-text)',
          backgroundColor: 'var(--color-muted)',
          $hoverHighlight: !0,
        },
        outlined: {
          backgroundColor: 'transparent',
          color: 'var(--color-text)',
          borderColor: 'var(--color)',
          borderWidth: '1px',
          borderStyle: 'solid',
          '&[data-hovered="true"]': { backgroundColor: 'var(--color-muted)' },
        },
        plain: {
          backgroundColor: 'transparent',
          color: 'var(--color-text)',
          '&[data-hovered="true"]': { backgroundColor: 'var(--color-muted)' },
        },
      },
      size: {
        small: {
          gap: '$xxs',
          textStyle: '$bodySmallSemiBold',
          minHeight: '$buttonHeightSmall',
          paddingLeft:
            'calc(token($spacing.small) * var(--padding-start-factor, 1))',
          paddingRight:
            'calc(token($spacing.small) * var(--padding-end-factor, 1))',
        },
        normal: {
          gap: '$xxs',
          textStyle: '$bodySemiBold',
          minHeight: '$buttonHeightMedium',
          paddingLeft:
            'calc(token($spacing.regular) * var(--padding-start-factor, 1))',
          paddingRight:
            'calc(token($spacing.regular) * var(--padding-end-factor, 1))',
        },
        large: {
          gap: '$xs',
          textStyle: '$bodyLargeBold',
          minHeight: '$buttonHeightLarge',
          paddingLeft:
            'calc(token($spacing.regular) * var(--padding-start-factor, 1))',
          paddingRight:
            'calc(token($spacing.regular) * var(--padding-end-factor, 1))',
        },
      },
      isDisabled: {
        true: {
          cursor: 'not-allowed',
          color: '$textDisabled',
          '&[data-hovered="true"]': { backgroundColor: '$neutral5' },
          '&[data-pressed="true"]': { opacity: 1 },
        },
      },
    },
    compoundVariants: [
      {
        isDisabled: !0,
        variant: ['filled', 'soft'],
        css: { backgroundColor: '$neutral4' },
      },
      { isDisabled: !0, variant: 'outlined', css: { borderColor: '$line2' } },
    ],
  }),
  T = y('div', {
    base: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'inherit',
    },
  });
s.displayName = 'Button';
s.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Button',
  props: {
    children: { required: !0, tsType: { name: 'ReactNode' }, description: '' },
    icon: {
      required: !1,
      tsType: { name: 'unknown[number]', raw: '(typeof ids)[number]' },
      description: '',
    },
    iconPlacement: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'start' | 'end'",
        elements: [
          { name: 'literal', value: "'start'" },
          { name: 'literal', value: "'end'" },
        ],
      },
      description: '',
      defaultValue: { value: "'start'", computed: !1 },
    },
    color: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'primary' | 'success' | 'error'",
        elements: [
          { name: 'literal', value: "'primary'" },
          { name: 'literal', value: "'success'" },
          { name: 'literal', value: "'error'" },
        ],
      },
      description: '',
      defaultValue: { value: "'primary'", computed: !1 },
    },
    isLoading: { required: !1, tsType: { name: 'boolean' }, description: '' },
    isDisabled: { required: !1, tsType: { name: 'boolean' }, description: '' },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
    size: { defaultValue: { value: "'normal'", computed: !1 }, required: !1 },
  },
};
export { s as B };
