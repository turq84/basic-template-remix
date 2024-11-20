import { j as e } from './jsx-runtime-CkxqCPlQ.js';
import { c as E } from './index-DdgtEVhA.js';
import { C as a } from './index-C-PiPPiL.js';
import { S as i } from './index-CbVkzzMr.js';
import { T as d } from './index-CxY2JlPL.js';
import './index-DJO9vBfz.js';
import './VisuallyHidden-BiYBAiUW.js';
import './utils-BgHHH9V7.js';
import './index-DJdX7xnk.js';
import './index-BqgWbNE6.js';
import './Form-D4JdquZw.js';
import './usePress-BFY2e0Rh.js';
import './useToggleState-DzuOW28X.js';
import './factory-BfbsYOSY.js';
const Q = {
    title: 'Checkbox',
    component: a,
    decorators: [
      (B) =>
        e.jsx('div', { style: { maxWidth: '600px' }, children: e.jsx(B, {}) }),
    ],
  },
  r = { args: { label: 'Regular checkbox' } },
  s = {
    args: {
      label: e.jsx(d, { variant: 'bodyBold', children: 'Styled label label' }),
    },
  },
  l = {
    render: () =>
      e.jsxs(i, {
        direction: 'column',
        gap: 'small',
        children: [
          e.jsx(d, {
            variant: 'body',
            children: '(This checkbox has a hidden label)',
          }),
          e.jsx(a, { hiddenLabel: 'Testing' }),
        ],
      }),
  },
  o = {
    render: () =>
      e.jsxs(i, {
        direction: 'column',
        gap: 'small',
        children: [
          e.jsx(d, {
            id: 'outer-label',
            variant: 'body',
            children: 'This label is connected via the `labelledby` prop',
          }),
          e.jsx(a, { labelledby: 'outer-label' }),
        ],
      }),
  },
  t = { args: { label: 'Disabled checkbox', isDisabled: !0 } },
  c = { args: { label: 'Invalid checkbox', isInvalid: !0 } },
  n = {
    render: () =>
      e.jsxs(i, {
        direction: 'column',
        gap: 'small',
        children: [
          e.jsx(a, { isIndeterminate: !0, label: "I'm not sure about myself" }),
          e.jsxs(i, {
            direction: 'column',
            gap: 'xs',
            className: E({ paddingLeft: '$regular' }),
            children: [
              e.jsx(a, { isSelected: !0, label: 'Child checkbox 1' }),
              e.jsx(a, { isSelected: !1, label: 'Child checkbox 2' }),
            ],
          }),
        ],
      }),
  };
var m, b, p;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((m = r.parameters) == null ? void 0 : m.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Regular checkbox'
  }
}`,
      ...((p = (b = r.parameters) == null ? void 0 : b.docs) == null
        ? void 0
        : p.source),
    },
  },
};
var u, x, h;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((u = s.parameters) == null ? void 0 : u.docs),
    source: {
      originalSource: `{
  args: {
    label: <Text variant='bodyBold'>Styled label label</Text>
  }
}`,
      ...((h = (x = s.parameters) == null ? void 0 : x.docs) == null
        ? void 0
        : h.source),
    },
  },
};
var g, k, S;
l.parameters = {
  ...l.parameters,
  docs: {
    ...((g = l.parameters) == null ? void 0 : g.docs),
    source: {
      originalSource: `{
  render: () => <Stack direction='column' gap='small'>
      <Text variant='body'>(This checkbox has a hidden label)</Text>
      <Checkbox hiddenLabel='Testing' />
    </Stack>
}`,
      ...((S = (k = l.parameters) == null ? void 0 : k.docs) == null
        ? void 0
        : S.source),
    },
  },
};
var j, v, y;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((j = o.parameters) == null ? void 0 : j.docs),
    source: {
      originalSource: `{
  render: () => <Stack direction='column' gap='small'>
      <Text id='outer-label' variant='body'>
        This label is connected via the \`labelledby\` prop
      </Text>
      <Checkbox labelledby='outer-label' />
    </Stack>
}`,
      ...((y = (v = o.parameters) == null ? void 0 : v.docs) == null
        ? void 0
        : y.source),
    },
  },
};
var C, T, f;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((C = t.parameters) == null ? void 0 : C.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Disabled checkbox',
    isDisabled: true
  }
}`,
      ...((f = (T = t.parameters) == null ? void 0 : T.docs) == null
        ? void 0
        : f.source),
    },
  },
};
var I, L, D;
c.parameters = {
  ...c.parameters,
  docs: {
    ...((I = c.parameters) == null ? void 0 : I.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Invalid checkbox',
    isInvalid: true
  }
}`,
      ...((D = (L = c.parameters) == null ? void 0 : L.docs) == null
        ? void 0
        : D.source),
    },
  },
};
var R, O, _;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((R = n.parameters) == null ? void 0 : R.docs),
    source: {
      originalSource: `{
  render: () => <Stack direction='column' gap='small'>
      <Checkbox isIndeterminate label="I'm not sure about myself" />
      <Stack direction='column' gap='xs' className={css({
      paddingLeft: '$regular'
    })}>
        <Checkbox isSelected label='Child checkbox 1' />
        <Checkbox isSelected={false} label='Child checkbox 2' />
      </Stack>
    </Stack>
}`,
      ...((_ = (O = n.parameters) == null ? void 0 : O.docs) == null
        ? void 0
        : _.source),
    },
  },
};
const U = [
  'Regular',
  'ComponentLabel',
  'HiddenLabel',
  'OuterLabel',
  'Disabled',
  'Invalid',
  'Indeterminate',
];
export {
  s as ComponentLabel,
  t as Disabled,
  l as HiddenLabel,
  n as Indeterminate,
  c as Invalid,
  o as OuterLabel,
  r as Regular,
  U as __namedExportsOrder,
  Q as default,
};
