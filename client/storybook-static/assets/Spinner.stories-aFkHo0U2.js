import { j as r } from './jsx-runtime-CkxqCPlQ.js';
import { S as e } from './index-CwMSx2UQ.js';
import { S as l } from './index-CbVkzzMr.js';
import './index-DJO9vBfz.js';
import './index-DdgtEVhA.js';
import './factory-BfbsYOSY.js';
const y = {
    title: 'Spinner',
    component: e,
    decorators: [
      (o) =>
        r.jsx('div', { style: { maxWidth: '300px' }, children: r.jsx(o, {}) }),
    ],
  },
  d = ['primary', 'text', 'info', 'warn', 'error'],
  i = {
    render: () =>
      r.jsx(l, {
        direction: 'row',
        gap: 'regular',
        children: d.map((o) => r.jsx(e, { color: o, size: 'medium' }, o)),
      }),
  },
  s = {
    render: () =>
      r.jsxs(l, {
        direction: 'row',
        gap: 'large',
        children: [
          r.jsx(e, { color: 'primary', size: 'small' }),
          r.jsx(e, { color: 'primary', size: 'normal' }),
          r.jsx(e, { color: 'primary', size: 'medium' }),
          r.jsx(e, { color: 'primary', size: 'large' }),
        ],
      }),
  };
var a, n, c;
i.parameters = {
  ...i.parameters,
  docs: {
    ...((a = i.parameters) == null ? void 0 : a.docs),
    source: {
      originalSource: `{
  render: () => <Stack direction='row' gap='regular'>
      {colors.map(color => <Spinner key={color} color={color} size='medium' />)}
    </Stack>
}`,
      ...((c = (n = i.parameters) == null ? void 0 : n.docs) == null
        ? void 0
        : c.source),
    },
  },
};
var m, p, t;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((m = s.parameters) == null ? void 0 : m.docs),
    source: {
      originalSource: `{
  render: () => <Stack direction='row' gap='large'>
      <Spinner color='primary' size='small' />
      <Spinner color='primary' size='normal' />
      <Spinner color='primary' size='medium' />
      <Spinner color='primary' size='large' />
    </Stack>
}`,
      ...((t = (p = s.parameters) == null ? void 0 : p.docs) == null
        ? void 0
        : t.source),
    },
  },
};
const k = ['Color', 'Sizes'];
export { i as Color, s as Sizes, k as __namedExportsOrder, y as default };
