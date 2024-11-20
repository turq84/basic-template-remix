import { j as o } from './jsx-runtime-CkxqCPlQ.js';
import { c as e, a } from './index-DdgtEVhA.js';
import { I as t } from './index-BqgWbNE6.js';
import { T as n } from './index-CxY2JlPL.js';
import { S as l } from './index-CbVkzzMr.js';
function i(r) {
  return o.jsx(n, {
    ...r,
    slot: 'description',
    variant: 'bodySmall',
    color: 'textMuted',
  });
}
function d({ children: r, ...s }) {
  return o.jsxs(l, {
    direction: 'row',
    gap: 'xxs',
    align: 'center',
    children: [
      o.jsx(t, { name: 'error', size: 18, color: 'error' }),
      o.jsx(n, {
        ...s,
        slot: 'errorMessage',
        variant: 'bodySmall',
        color: 'errorContrast',
        children: r,
      }),
    ],
  });
}
function c() {
  return o.jsx(t, {
    className: a('selected-icon', e({ display: 'none' })),
    name: 'check',
    size: 20,
    color: 'text',
  });
}
const g = e({ display: 'flex', flexDirection: 'column', gap: '$xxs' }),
  b = e({
    '--outline-width': '1px',
    textStyle: '$body',
    textAlign: 'left',
    padding: '$small',
    minHeight: '50px',
    width: '100%',
    color: '$text',
    borderRadius: '$regular',
    borderWidth: '1px',
    borderColor: '$line1',
    outlineOffset: 'calc(0px - var(--outline-width))',
    backgroundColor: '$surface',
    '&:focus': {
      '--outline-width': '2px',
      borderColor: 'transparent',
      outline: 'var(--outline-width) solid token($colors.focusRing)',
    },
    '&[aria-invalid="true"], &[data-invalid="true"]': {
      borderColor: 'transparent',
      outline: 'var(--outline-width) solid token($colors.error)',
    },
    '&[disabled]': {
      backgroundColor: '$neutral5',
      cursor: 'not-allowed',
      borderColor: '$line2',
    },
  }),
  $ = e({
    textStyle: '$label',
    color: '$text',
    '&[data-required="true"]': {
      '&:after': { content: '" *"', color: '$errorContrast' },
    },
  }),
  h = e({
    position: 'absolute',
    left: '$regular',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
  }),
  y = e({
    position: 'absolute',
    right: '$regular',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
  }),
  S = e({
    width: 'var(--trigger-width)',
    padding: '$xs',
    borderWidth: '1px',
    borderColor: '$line3',
    borderRadius: '$regular',
    backgroundColor: '$surface',
    boxShadow: '$regular',
    outline: 'none',
  }),
  v = e({
    outline: 'none',
    position: 'relative',
    paddingBlock: '$xs',
    paddingInline: '$small',
    borderRadius: '$small',
    userSelect: 'none',
    cursor: 'default',
    '&[data-selected="true"] .selected-icon': { display: 'block' },
    '&:hover, &[data-focused="true"]': { backgroundColor: '$primaryMuted' },
    '& span': { userSelect: 'none', cursor: 'default' },
  });
i.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'DescriptionText',
};
d.__docgenInfo = { description: '', methods: [], displayName: 'ErrorText' };
c.__docgenInfo = { description: '', methods: [], displayName: 'SelectedIcon' };
export {
  i as D,
  d as E,
  c as S,
  b as a,
  y as b,
  v as c,
  S as d,
  g as e,
  h as i,
  $ as l,
};
