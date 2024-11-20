import { j as i } from './jsx-runtime-CkxqCPlQ.js';
import { r as y } from './index-DJO9vBfz.js';
import { $ as h } from './Button-CoD-b_IN.js';
import { t as r, a as $, b as w } from './index-DdgtEVhA.js';
import { T as C } from './index-Vm1tHATy.js';
import { I as T } from './index-BqgWbNE6.js';
const I = { small: 32, medium: 36, large: 44 },
  s = y.forwardRef(
    (
      {
        label: u,
        icon: c,
        style: m,
        className: d,
        color: e = 'neutral',
        size: t = 'medium',
        variant: p = 'plain',
        tooltipPlacement: v = 'top',
        ...f
      },
      b
    ) => {
      let a;
      e === 'neutral'
        ? (a = r.var('$colors.neutral5'))
        : (a = r.var(`$colors.${e}Muted`));
      let o;
      e === 'neutral'
        ? (o = r.var('$colors.text'))
        : (o = r.var(`$colors.${e}Contrast`));
      let l;
      e === 'neutral'
        ? (l = r.var('$colors.neutral1'))
        : (l = r.var(`$colors.${e}`));
      const g = $(k({ variant: p }), d),
        n = typeof t == 'number' ? t : I[t],
        x = {
          ...m,
          width: n,
          height: n,
          '--color-muted': a,
          '--color-text': o,
          '--color': l,
        };
      return i.jsx(C, {
        content: u,
        placement: v,
        children: i.jsx(h, {
          ref: b,
          style: x,
          className: g,
          ...f,
          children: i.jsx(T, { name: c, size: n * 0.6, color: 'currentColor' }),
        }),
      });
    }
  );
s.displayName = 'IconButton';
const k = w({
  base: {
    position: 'relative',
    margin: 0,
    borderRadius: '50%',
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    outlineOffset: '2px',
    '&[data-pressed="true"]': { opacity: 0.8 },
    '&[data-disabled="true"]': { opacity: 0.5, cursor: 'not-allowed' },
    '&[data-focus-visible="true"]': { outline: '2px solid var(--color)' },
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
  },
});
s.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'IconButton',
  props: {
    icon: {
      required: !0,
      tsType: { name: 'unknown[number]', raw: '(typeof ids)[number]' },
      description: '',
    },
    label: { required: !0, tsType: { name: 'string' }, description: '' },
    size: {
      required: !1,
      tsType: {
        name: 'union',
        raw: 'IconButtonSize | number',
        elements: [
          {
            name: 'union',
            raw: "'small' | 'medium' | 'large'",
            elements: [
              { name: 'literal', value: "'small'" },
              { name: 'literal', value: "'medium'" },
              { name: 'literal', value: "'large'" },
            ],
          },
          { name: 'number' },
        ],
      },
      description: '',
      defaultValue: { value: "'medium'", computed: !1 },
    },
    color: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'primary' | 'success' | 'error' | 'neutral'",
        elements: [
          { name: 'literal', value: "'primary'" },
          { name: 'literal', value: "'success'" },
          { name: 'literal', value: "'error'" },
          { name: 'literal', value: "'neutral'" },
        ],
      },
      description: '',
      defaultValue: { value: "'neutral'", computed: !1 },
    },
    tooltipPlacement: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'top' | 'bottom' | 'left' | 'right'",
        elements: [
          { name: 'literal', value: "'top'" },
          { name: 'literal', value: "'bottom'" },
          { name: 'literal', value: "'left'" },
          { name: 'literal', value: "'right'" },
        ],
      },
      description: '',
      defaultValue: { value: "'top'", computed: !1 },
    },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
    variant: { defaultValue: { value: "'plain'", computed: !1 }, required: !1 },
  },
};
export { s as I };
