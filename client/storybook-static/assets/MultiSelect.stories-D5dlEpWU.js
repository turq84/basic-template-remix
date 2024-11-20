import { j as t } from './jsx-runtime-CkxqCPlQ.js';
import { r as g } from './index-DJO9vBfz.js';
import { u as le, S as ce, a as de } from './SelectFilterInput-B9Qa5PVf.js';
import { $ as pe } from './Button-CoD-b_IN.js';
import { $ as me, a as ue, b as ge, c as fe } from './Dialog-BVyDrX3O.js';
import { $ as be } from './Label-Dp0AxpCw.js';
import { a as xe, b as he, S as Se } from './SelectItem-BIfOg3rJ.js';
import { s as R } from './factory-BfbsYOSY.js';
import { a as D, c as W } from './index-DdgtEVhA.js';
import {
  l as ye,
  i as $e,
  a as je,
  b as ve,
  D as Me,
  E as qe,
  c as Ce,
  d as Te,
  e as we,
} from './common-CFf48SXD.js';
import { I } from './index-BqgWbNE6.js';
import { T as Ee } from './index-CxY2JlPL.js';
import { u as oe } from './useTranslation-3LIHFqx3.js';
import { $ as We } from './useFilter-ATG2y2Gg.js';
import './index-CfmUmXE5.js';
import './index-CwMSx2UQ.js';
import './index-SulxIKOx.js';
import './index-Vm1tHATy.js';
import './utils-BgHHH9V7.js';
import './index-DJdX7xnk.js';
import './OverlayArrow-DliHpoDG.js';
import './VisuallyHidden-BiYBAiUW.js';
import './Hidden-2-bsQ4Y9.js';
import './useButton-DZEnpN8J.js';
import './usePress-BFY2e0Rh.js';
import './useLabels-D003iZWB.js';
import './Separator-p0-S5q3W.js';
import './index-CbVkzzMr.js';
const M = g.forwardRef(
  (
    {
      label: e,
      icon: r,
      isRequired: s,
      actions: c,
      errorMessage: a,
      description: d,
      placeholder: p = '',
      items: u,
      selected: n,
      onSelect: m,
      ...q
    },
    C
  ) => {
    const { t: T } = oe(),
      [w, E] = le();
    return t.jsx(me, {
      children: t.jsxs('div', {
        className: we,
        children: [
          t.jsx(be, {
            className: ye,
            'data-required': s,
            'data-testid': 'multi-select-label',
            children: e,
          }),
          t.jsxs(Ie, {
            ref: w,
            children: [
              !!r &&
                t.jsx(I, {
                  name: r,
                  size: 20,
                  color: 'neutral1',
                  className: $e,
                }),
              t.jsx(pe, {
                ...q,
                ref: C,
                'data-invalid': !!a,
                'data-has-icon': !!r,
                'data-has-selected': n.size > 0,
                'data-testid': 'multi-select-button',
                className: D(
                  je,
                  W({
                    paddingRight: '$xl!',
                    color: '$textMuted',
                    $truncate: !0,
                    '&[data-has-icon="true"]': { paddingLeft: '$xl' },
                    '&[data-has-selected="true"]': { color: '$text' },
                  })
                ),
                children: n.size === 0 ? p : `${n.size} ${T('selected')}`,
              }),
              t.jsx(I, {
                name: 'arrowDropDown',
                size: 24,
                color: 'text',
                className: D(ve, W({ right: '$xs!' })),
              }),
            ],
          }),
          d && t.jsx(Me, { children: d }),
          a && t.jsx(qe, { children: a }),
          t.jsx(ue, {
            'data-testid': 'multi-select-popover',
            placement: 'bottom start',
            style: { '--trigger-width': `${E.width}px` },
            offset: 4,
            children: t.jsx(Re, {
              items: u,
              actions: c,
              errorMessage: a,
              selected: n,
              onSelect: m,
            }),
          }),
        ],
      }),
    });
  }
);
M.displayName = 'MultiSelect';
const Re = ({ actions: e, items: r, selected: s, onSelect: c }) => {
    const [a, d] = g.useState(''),
      p = r.length > 10,
      { contains: u } = We({ sensitivity: 'base' }),
      n = p ? r.filter((m) => u(m.label, a.trim())) : r;
    return t.jsxs(Oe, {
      className: Te,
      children: [
        r.length > 10 &&
          t.jsx(ce, { isLoading: !1, inputValue: a, onInputChange: d }),
        t.jsx(De, { items: n, actions: e, selected: s, onSelect: c }),
      ],
    });
  },
  De = ({ actions: e, items: r, selected: s, onSelect: c }) => {
    const { t: a } = oe(),
      d = g.useContext(fe),
      [p, u] = g.useState(s),
      n = !!(e != null && e.confirm),
      m = n ? p : s,
      q = !!(e != null && e.clear && m.size > 0),
      C = !!(e != null && e.confirm && (p.size > 0 || s.size > 0)),
      T = (i) => {
        n ? u(i) : c(i);
      },
      w = () => {
        c(new Set()), d.close();
      },
      E = () => {
        c(p), d.close();
      };
    return t.jsxs(t.Fragment, {
      children: [
        t.jsx(xe, {
          items: r,
          selectionMode: 'multiple',
          selectedKeys: m,
          onSelectionChange: (i) => T(i),
          'data-testid': 'multi-select-options',
          className: Ne,
          renderEmptyState: () =>
            t.jsx(Ae, {
              children: t.jsx(Ee, {
                variant: 'body',
                children: a('noOptions'),
              }),
            }),
          children: (i) =>
            t.jsx(he, {
              id: i.value,
              textValue: i.label,
              className: Ce,
              'data-testid': 'multi-select-option',
              children: t.jsx(Se, {
                label: i.label,
                description: i.description,
              }),
            }),
        }),
        !!e &&
          t.jsx(de, { onClear: q ? w : void 0, onConfirm: C ? E : void 0 }),
      ],
    });
  },
  Ie = R('div', { base: { position: 'relative' } }),
  Oe = R(ge, { base: { outline: 'none' } }),
  Ne = W({
    outline: 'none',
    maxHeight: '400px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  }),
  Ae = R('div', {
    base: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100px',
      padding: '$small',
      textAlign: 'center',
    },
  });
M.__docgenInfo = {
  description:
    'This `MultiSelect` component can be used to select multiple options from\na list of **static** options.\n\nFor selecting a single option, use the regular `Select` component. If you\nneed to load options asynchronously, use the `AsyncSelect` component instead.\nThe `AsyncSelect` component supports both single and multiple selection modes.',
  methods: [],
  displayName: 'MultiSelect',
  props: {
    items: {
      required: !0,
      tsType: {
        name: 'Array',
        elements: [
          {
            name: 'signature',
            type: 'object',
            raw: `{
  value: string;
  label: string;
  description?: string;
}`,
            signature: {
              properties: [
                { key: 'value', value: { name: 'string', required: !0 } },
                { key: 'label', value: { name: 'string', required: !0 } },
                { key: 'description', value: { name: 'string', required: !1 } },
              ],
            },
          },
        ],
        raw: 'MultiSelectOption[]',
      },
      description: '',
    },
    actions: {
      required: !1,
      tsType: {
        name: 'signature',
        type: 'object',
        raw: '{ confirm?: boolean; clear?: boolean }',
        signature: {
          properties: [
            { key: 'confirm', value: { name: 'boolean', required: !1 } },
            { key: 'clear', value: { name: 'boolean', required: !1 } },
          ],
        },
      },
      description:
        'Whether to show the actions footer with buttons to confirm or clear the selection.',
    },
    errorMessage: {
      required: !1,
      tsType: { name: 'string' },
      description:
        'Passing an `errorMessage` as prop toggles the input as invalid.',
    },
    description: { required: !1, tsType: { name: 'string' }, description: '' },
    icon: {
      required: !1,
      tsType: { name: 'unknown[number]', raw: '(typeof ids)[number]' },
      description: '',
    },
    selected: {
      required: !0,
      tsType: {
        name: 'Set',
        elements: [{ name: 'string' }],
        raw: 'Set<string>',
      },
      description: '',
    },
    onSelect: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(value: Set<string>) => void',
        signature: {
          arguments: [
            {
              type: {
                name: 'Set',
                elements: [{ name: 'string' }],
                raw: 'Set<string>',
              },
              name: 'value',
            },
          ],
          return: { name: 'void' },
        },
      },
      description: '',
    },
    label: { required: !1, tsType: { name: 'string' }, description: '' },
    isRequired: { required: !1, tsType: { name: 'boolean' }, description: '' },
    placeholder: {
      required: !1,
      tsType: { name: 'string' },
      description: '',
      defaultValue: { value: "''", computed: !1 },
    },
  },
};
const mt = {
    title: 'MultiSelect',
    component: M,
    decorators: [
      (e) =>
        t.jsx('div', { style: { maxWidth: '300px' }, children: t.jsx(e, {}) }),
    ],
  },
  l = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
    { label: 'Option 4', value: '4' },
    { label: 'Option 5', value: '5' },
  ],
  f = {
    args: { label: 'Regular select', items: l },
    render: (e) => t.jsx(o, { ...e }),
  },
  b = {
    args: { label: 'Disabled select', items: l, isDisabled: !0 },
    render: (e) => t.jsx(o, { ...e }),
  },
  x = {
    args: { label: 'Required select', items: l, isRequired: !0 },
    render: (e) => t.jsx(o, { ...e }),
  },
  h = {
    args: { label: 'With icon', items: l, icon: 'apps' },
    render: (e) => t.jsx(o, { ...e }),
  },
  S = {
    args: {
      label: 'Descriptions also',
      description: 'You should pick the third one',
      items: l,
    },
    render: (e) => t.jsx(o, { ...e }),
  },
  y = {
    args: {
      label: 'Some invalid choice',
      errorMessage: 'This is really bad',
      items: l,
    },
    render: (e) => t.jsx(o, { ...e }),
  },
  $ = {
    args: {
      label: 'Clearing all selected options',
      actions: { clear: !0 },
      items: l,
    },
    render: (e) => t.jsx(o, { ...e }),
  },
  j = {
    args: {
      label: 'Confirmation required',
      actions: { confirm: !0, clear: !0 },
      items: l,
    },
    render: (e) => t.jsx(o, { ...e }),
  },
  v = {
    args: {
      label: 'Filtering for options',
      items: Array.from({ length: 100 }, (e, r) => ({
        label: `Option ${ke()}`,
        value: `${r + 1}`,
      })),
    },
    render: (e) => t.jsx(o, { ...e }),
  };
function o(e) {
  const [r, s] = g.useState(new Set());
  return t.jsx(M, {
    label: 'This is an example',
    placeholder: 'Select options',
    ...e,
    selected: r,
    onSelect: s,
  });
}
function ke() {
  return Math.random().toString(36).substring(7);
}
var O, N, A;
f.parameters = {
  ...f.parameters,
  docs: {
    ...((O = f.parameters) == null ? void 0 : O.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Regular select',
    items: options
  },
  render: args => <MultiSelectExample {...args} />
}`,
      ...((A = (N = f.parameters) == null ? void 0 : N.docs) == null
        ? void 0
        : A.source),
    },
  },
};
var k, z, B;
b.parameters = {
  ...b.parameters,
  docs: {
    ...((k = b.parameters) == null ? void 0 : k.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Disabled select',
    items: options,
    isDisabled: true
  },
  render: args => <MultiSelectExample {...args} />
}`,
      ...((B = (z = b.parameters) == null ? void 0 : z.docs) == null
        ? void 0
        : B.source),
    },
  },
};
var F, _, L;
x.parameters = {
  ...x.parameters,
  docs: {
    ...((F = x.parameters) == null ? void 0 : F.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Required select',
    items: options,
    isRequired: true
  },
  render: args => <MultiSelectExample {...args} />
}`,
      ...((L = (_ = x.parameters) == null ? void 0 : _.docs) == null
        ? void 0
        : L.source),
    },
  },
};
var V, Y, H;
h.parameters = {
  ...h.parameters,
  docs: {
    ...((V = h.parameters) == null ? void 0 : V.docs),
    source: {
      originalSource: `{
  args: {
    label: 'With icon',
    items: options,
    icon: 'apps'
  },
  render: args => <MultiSelectExample {...args} />
}`,
      ...((H = (Y = h.parameters) == null ? void 0 : Y.docs) == null
        ? void 0
        : H.source),
    },
  },
};
var K, P, G;
S.parameters = {
  ...S.parameters,
  docs: {
    ...((K = S.parameters) == null ? void 0 : K.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Descriptions also',
    description: 'You should pick the third one',
    items: options
  },
  render: args => <MultiSelectExample {...args} />
}`,
      ...((G = (P = S.parameters) == null ? void 0 : P.docs) == null
        ? void 0
        : G.source),
    },
  },
};
var J, Q, U;
y.parameters = {
  ...y.parameters,
  docs: {
    ...((J = y.parameters) == null ? void 0 : J.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Some invalid choice',
    errorMessage: 'This is really bad',
    items: options
  },
  render: args => <MultiSelectExample {...args} />
}`,
      ...((U = (Q = y.parameters) == null ? void 0 : Q.docs) == null
        ? void 0
        : U.source),
    },
  },
};
var X, Z, ee;
$.parameters = {
  ...$.parameters,
  docs: {
    ...((X = $.parameters) == null ? void 0 : X.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Clearing all selected options',
    actions: {
      clear: true
    },
    items: options
  },
  render: args => <MultiSelectExample {...args} />
}`,
      ...((ee = (Z = $.parameters) == null ? void 0 : Z.docs) == null
        ? void 0
        : ee.source),
    },
  },
};
var te, re, se;
j.parameters = {
  ...j.parameters,
  docs: {
    ...((te = j.parameters) == null ? void 0 : te.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Confirmation required',
    actions: {
      confirm: true,
      clear: true
    },
    items: options
  },
  render: args => <MultiSelectExample {...args} />
}`,
      ...((se = (re = j.parameters) == null ? void 0 : re.docs) == null
        ? void 0
        : se.source),
    },
  },
};
var ae, ne, ie;
v.parameters = {
  ...v.parameters,
  docs: {
    ...((ae = v.parameters) == null ? void 0 : ae.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Filtering for options',
    items: Array.from({
      length: 100
    }, (_, i) => ({
      label: \`Option \${randomWord()}\`,
      value: \`\${i + 1}\`
    }))
  },
  render: args => <MultiSelectExample {...args} />
}`,
      ...((ie = (ne = v.parameters) == null ? void 0 : ne.docs) == null
        ? void 0
        : ie.source),
    },
  },
};
const ut = [
  'Regular',
  'Disabled',
  'Required',
  'WithIcon',
  'WithDescription',
  'WithError',
  'WithClearing',
  'WithClearAndConfirm',
  'WithFiltering',
];
export {
  b as Disabled,
  f as Regular,
  x as Required,
  j as WithClearAndConfirm,
  $ as WithClearing,
  S as WithDescription,
  y as WithError,
  v as WithFiltering,
  h as WithIcon,
  ut as __namedExportsOrder,
  mt as default,
};
