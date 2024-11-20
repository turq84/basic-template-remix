import { j as a } from './jsx-runtime-CkxqCPlQ.js';
import { t as n } from './index-DdgtEVhA.js';
import { s } from './factory-BfbsYOSY.js';
function t({ color: e, size: r, style: o, className: i }) {
  return a.jsx(l, {
    className: i,
    size: r,
    style: {
      ...o,
      '--border-size': '2px',
      color: e === 'currentColor' ? 'currentColor' : n.var(`$colors.${e}`),
    },
  });
}
const l = s('div', {
  base: {
    position: 'relative',
    width: 'calc(var(--size) + var(--border-size))',
    height: 'calc(var(--size) + var(--border-size))',
    '&:before': {
      content: "''",
      borderRadius: '50%',
      border: 'var(--border-size) solid currentColor',
      opacity: 0.3,
      zIndex: -1,
      position: 'absolute',
      inset: 0,
    },
    '&:after': {
      content: "''",
      animation: 'spin 0.6s infinite linear',
      borderRadius: '50%',
      border: 'var(--border-size) solid currentColor',
      borderTopColor: 'transparent',
      zIndex: 1,
      position: 'absolute',
      inset: 0,
    },
  },
  variants: {
    size: {
      small: { '--size': '12px' },
      normal: { '--size': '16px' },
      medium: { '--size': '24px' },
      large: { '--size': '48px' },
    },
  },
  defaultVariants: { size: 'normal' },
});
t.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Spinner',
  props: {
    color: {
      required: !0,
      tsType: {
        name: 'union',
        raw: "StyledSystemToken<ColorToken> | 'currentColor'",
        elements: [
          { name: 'unknown' },
          { name: 'literal', value: "'currentColor'" },
        ],
      },
      description: '',
    },
    size: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'small' | 'normal' | 'medium' | 'large'",
        elements: [
          { name: 'literal', value: "'small'" },
          { name: 'literal', value: "'normal'" },
          { name: 'literal', value: "'medium'" },
          { name: 'literal', value: "'large'" },
        ],
      },
      description: '',
    },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
    style: { required: !1, tsType: { name: 'CSSProperties' }, description: '' },
  },
};
export { t as S };
