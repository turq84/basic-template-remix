import { j as e } from './jsx-runtime-CkxqCPlQ.js';
import { r as j } from './index-DJO9vBfz.js';
import { u as ie, S as oe, a as le } from './SelectFilterInput-B9Qa5PVf.js';
import { $ as ce } from './Button-CoD-b_IN.js';
import { $ as de, a as pe, b as me, c as ue } from './Dialog-BVyDrX3O.js';
import { $ as ge } from './Label-Dp0AxpCw.js';
import { a as fe, b as ye, S as xe } from './SelectItem-BIfOg3rJ.js';
import { s as E } from './factory-BfbsYOSY.js';
import { a as I, c as C } from './index-DdgtEVhA.js';
import {
  l as he,
  i as Se,
  a as be,
  b as je,
  D as $e,
  E as ve,
  c as Ae,
  d as Te,
  e as we,
} from './common-CFf48SXD.js';
import { I as M } from './index-BqgWbNE6.js';
import { T as k } from './index-CxY2JlPL.js';
import { S as qe } from './index-CwMSx2UQ.js';
import { u as ae } from './useTranslation-3LIHFqx3.js';
import { $ as We, f as Ce } from './ComboBox.mockData-BpIVLMDg.js';
import './index-CfmUmXE5.js';
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
const $ = j.forwardRef(
  (
    {
      label: t,
      icon: n,
      isRequired: p,
      actions: i,
      emptyMessage: o,
      errorMessage: l,
      description: c,
      placeholder: r = '',
      selectionMode: m,
      selected: a,
      onSelect: v,
      loadItems: A,
      ...T
    },
    w
  ) => {
    const { t: q } = ae(),
      [s, ne] = ie();
    return e.jsx(de, {
      children: e.jsxs('div', {
        className: we,
        children: [
          e.jsx(ge, {
            className: he,
            'data-required': p,
            'data-testid': 'async-select-label',
            children: t,
          }),
          e.jsxs(Me, {
            ref: s,
            children: [
              !!n &&
                e.jsx(M, {
                  name: n,
                  size: 20,
                  color: 'neutral1',
                  className: Se,
                }),
              e.jsx(ce, {
                ...T,
                ref: w,
                'data-invalid': !!l,
                'data-has-icon': !!n,
                'data-has-selected': a.size > 0,
                'data-testid': 'async-select-button',
                className: I(
                  be,
                  C({
                    paddingRight: '$xl!',
                    color: '$textMuted',
                    $truncate: !0,
                    '&[data-has-icon="true"]': { paddingLeft: '$xl' },
                    '&[data-has-selected="true"]': { color: '$text' },
                  })
                ),
                children: a.size === 0 ? r : `${a.size} ${q('selected')}`,
              }),
              e.jsx(M, {
                name: 'arrowDropDown',
                size: 24,
                color: 'text',
                className: I(je, C({ right: '$xs!' })),
              }),
            ],
          }),
          c && e.jsx($e, { children: c }),
          l && e.jsx(ve, { children: l }),
          e.jsx(pe, {
            'data-testid': 'async-select-popover',
            placement: 'bottom start',
            style: { '--trigger-width': `${ne.width}px` },
            offset: 4,
            children: e.jsx(Ee, {
              actions: i,
              emptyMessage: o,
              errorMessage: l,
              selectionMode: m,
              selected: a,
              onSelect: v,
              loadItems: A,
            }),
          }),
        ],
      }),
    });
  }
);
$.displayName = 'AsyncSelect';
function Ee({
  actions: t,
  selectionMode: n,
  selected: p,
  onSelect: i,
  loadItems: o,
  ...l
}) {
  const { t: c } = ae(),
    r = We({ load: o }),
    { errorMessage: m = c('errorMessage'), emptyMessage: a = c('noOptions') } =
      l;
  return e.jsxs(ke, {
    className: Te,
    children: [
      e.jsx(oe, {
        isLoading: r.loadingState === 'filtering',
        inputValue: r.filterText,
        onInputChange: r.setFilterText,
      }),
      r.loadingState === 'loading'
        ? e.jsx(W, { children: e.jsx(qe, { size: 'medium', color: 'text' }) })
        : r.loadingState === 'error'
          ? e.jsx(W, { children: e.jsx(k, { variant: 'body', children: m }) })
          : r.loadingState === 'idle' && r.filterText && r.items.length === 0
            ? e.jsx(W, { children: e.jsx(k, { variant: 'body', children: a }) })
            : r.items
              ? e.jsx(Ie, {
                  items: r.items,
                  emptyMessage: a,
                  actions: t,
                  selectionMode: n,
                  selected: p,
                  onSelect: i,
                })
              : null,
    ],
  });
}
const Ie = ({
    actions: t,
    selectionMode: n = 'multiple',
    items: p,
    selected: i,
    onSelect: o,
  }) => {
    const l = j.useContext(ue),
      [c, r] = j.useState(i),
      m = !!(t != null && t.confirm),
      a = m ? c : i,
      v = !!(t != null && t.clear && a.size > 0),
      A = !!(t != null && t.confirm && (c.size > 0 || i.size > 0)),
      T = (s) => {
        m ? r(s) : o(s);
      },
      w = () => {
        o(new Set()), l.close();
      },
      q = () => {
        o(c), l.close();
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(fe, {
          items: p,
          selectionMode: n,
          selectedKeys: a,
          onSelectionChange: (s) => T(s),
          className: De,
          'data-testid': 'async-select-options',
          children: (s) =>
            e.jsx(ye, {
              id: s.value,
              textValue: s.label,
              className: Ae,
              'data-testid': 'async-select-option',
              children: e.jsx(xe, {
                label: s.label,
                description: s.description,
              }),
            }),
        }),
        !!t &&
          e.jsx(le, { onClear: v ? w : void 0, onConfirm: A ? q : void 0 }),
      ],
    });
  },
  Me = E('div', { base: { position: 'relative' } }),
  ke = E(me, { base: { outline: 'none' } }),
  De = C({
    outline: 'none',
    maxHeight: '400px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  }),
  W = E('div', {
    base: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100px',
      padding: '$small',
      textAlign: 'center',
    },
  });
$.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'AsyncSelect',
  props: {
    loadItems: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: `(state: {
  filterText?: string;
  signal: AbortSignal;
}) => Promise<{ items: AsyncSelectOption[] }>`,
        signature: {
          arguments: [
            {
              type: {
                name: 'signature',
                type: 'object',
                raw: `{
  filterText?: string;
  signal: AbortSignal;
}`,
                signature: {
                  properties: [
                    {
                      key: 'filterText',
                      value: { name: 'string', required: !1 },
                    },
                    {
                      key: 'signal',
                      value: { name: 'AbortSignal', required: !0 },
                    },
                  ],
                },
              },
              name: 'state',
            },
          ],
          return: {
            name: 'Promise',
            elements: [
              {
                name: 'signature',
                type: 'object',
                raw: '{ items: AsyncSelectOption[] }',
                signature: {
                  properties: [
                    {
                      key: 'items',
                      value: {
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
                                {
                                  key: 'value',
                                  value: { name: 'string', required: !0 },
                                },
                                {
                                  key: 'label',
                                  value: { name: 'string', required: !0 },
                                },
                                {
                                  key: 'description',
                                  value: { name: 'string', required: !1 },
                                },
                              ],
                            },
                          },
                        ],
                        raw: 'AsyncSelectOption[]',
                        required: !0,
                      },
                    },
                  ],
                },
              },
            ],
            raw: 'Promise<{ items: AsyncSelectOption[] }>',
          },
        },
      },
      description:
        'Function to load options asynchronously. This function should return a\npromise that resolves to `{ items: AsyncSelectOption[] }`.\nThe function receives an object with an abort signal and a `search` property\nthat contains he current input value. This function will be initially called\nwith an empty string to load the initial set of options.',
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
    emptyMessage: {
      required: !1,
      tsType: { name: 'string' },
      description:
        'Text to display when no options are found for the current search value.',
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
    selectionMode: {
      required: !1,
      tsType: {
        name: 'union',
        raw: "'single' | 'multiple'",
        elements: [
          { name: 'literal', value: "'single'" },
          { name: 'literal', value: "'multiple'" },
        ],
      },
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
const ct = {
    title: 'AsyncSelect',
    component: $,
    decorators: [
      (t) =>
        e.jsx('div', { style: { maxWidth: '300px' }, children: e.jsx(t, {}) }),
    ],
  },
  u = { render: (t) => e.jsx(d, { ...t }) },
  g = { args: { selectionMode: 'single' }, render: (t) => e.jsx(d, { ...t }) },
  f = { args: { isDisabled: !0 }, render: (t) => e.jsx(d, { ...t }) },
  y = { args: { icon: 'group' }, render: (t) => e.jsx(d, { ...t }) },
  x = {
    args: { description: 'Type eg. "luke" to filter the options' },
    render: (t) => e.jsx(d, { ...t }),
  },
  h = {
    args: { errorMessage: 'May the force NOT be with you' },
    render: (t) => e.jsx(d, { ...t }),
  },
  S = { args: { actions: { clear: !0 } }, render: (t) => e.jsx(d, { ...t }) },
  b = {
    args: { actions: { confirm: !0, clear: !0 } },
    render: (t) => e.jsx(d, { ...t }),
  },
  d = (t) => {
    const [n, p] = j.useState(new Set());
    return e.jsx($, {
      ...t,
      label: 'Star Wars characters',
      placeholder: 'Select characters',
      emptyMessage: "These aren't the droids you're looking for",
      selected: n,
      onSelect: p,
      loadItems: (i) => Ce(i).then((o) => ({ items: o })),
    });
  };
var D, N, O;
u.parameters = {
  ...u.parameters,
  docs: {
    ...((D = u.parameters) == null ? void 0 : D.docs),
    source: {
      originalSource: `{
  render: args => <AsyncSelectExample {...args} />
}`,
      ...((O = (N = u.parameters) == null ? void 0 : N.docs) == null
        ? void 0
        : O.source),
    },
  },
};
var z, B, R;
g.parameters = {
  ...g.parameters,
  docs: {
    ...((z = g.parameters) == null ? void 0 : z.docs),
    source: {
      originalSource: `{
  args: {
    selectionMode: 'single'
  },
  render: args => <AsyncSelectExample {...args} />
}`,
      ...((R = (B = g.parameters) == null ? void 0 : B.docs) == null
        ? void 0
        : R.source),
    },
  },
};
var L, _, F;
f.parameters = {
  ...f.parameters,
  docs: {
    ...((L = f.parameters) == null ? void 0 : L.docs),
    source: {
      originalSource: `{
  args: {
    isDisabled: true
  },
  render: args => <AsyncSelectExample {...args} />
}`,
      ...((F = (_ = f.parameters) == null ? void 0 : _.docs) == null
        ? void 0
        : F.source),
    },
  },
};
var P, V, H;
y.parameters = {
  ...y.parameters,
  docs: {
    ...((P = y.parameters) == null ? void 0 : P.docs),
    source: {
      originalSource: `{
  args: {
    icon: 'group'
  },
  render: args => <AsyncSelectExample {...args} />
}`,
      ...((H = (V = y.parameters) == null ? void 0 : V.docs) == null
        ? void 0
        : H.source),
    },
  },
};
var K, Y, G;
x.parameters = {
  ...x.parameters,
  docs: {
    ...((K = x.parameters) == null ? void 0 : K.docs),
    source: {
      originalSource: `{
  args: {
    description: 'Type eg. "luke" to filter the options'
  },
  render: args => <AsyncSelectExample {...args} />
}`,
      ...((G = (Y = x.parameters) == null ? void 0 : Y.docs) == null
        ? void 0
        : G.source),
    },
  },
};
var J, Q, U;
h.parameters = {
  ...h.parameters,
  docs: {
    ...((J = h.parameters) == null ? void 0 : J.docs),
    source: {
      originalSource: `{
  args: {
    errorMessage: 'May the force NOT be with you'
  },
  render: args => <AsyncSelectExample {...args} />
}`,
      ...((U = (Q = h.parameters) == null ? void 0 : Q.docs) == null
        ? void 0
        : U.source),
    },
  },
};
var X, Z, ee;
S.parameters = {
  ...S.parameters,
  docs: {
    ...((X = S.parameters) == null ? void 0 : X.docs),
    source: {
      originalSource: `{
  args: {
    actions: {
      clear: true
    }
  },
  render: args => <AsyncSelectExample {...args} />
}`,
      ...((ee = (Z = S.parameters) == null ? void 0 : Z.docs) == null
        ? void 0
        : ee.source),
    },
  },
};
var te, re, se;
b.parameters = {
  ...b.parameters,
  docs: {
    ...((te = b.parameters) == null ? void 0 : te.docs),
    source: {
      originalSource: `{
  args: {
    actions: {
      confirm: true,
      clear: true
    }
  },
  render: args => <AsyncSelectExample {...args} />
}`,
      ...((se = (re = b.parameters) == null ? void 0 : re.docs) == null
        ? void 0
        : se.source),
    },
  },
};
const dt = [
  'WithMultiSelect',
  'WithSingleSelect',
  'Disabled',
  'WithIcon',
  'WithDescription',
  'WithError',
  'WithClearing',
  'WithClearAndConfirm',
];
export {
  f as Disabled,
  b as WithClearAndConfirm,
  S as WithClearing,
  x as WithDescription,
  h as WithError,
  y as WithIcon,
  u as WithMultiSelect,
  g as WithSingleSelect,
  dt as __namedExportsOrder,
  ct as default,
};
