import { j as r } from './jsx-runtime-CkxqCPlQ.js';
import { r as I } from './index-DJO9vBfz.js';
import { B as o } from './index-CfmUmXE5.js';
import { C as D } from './index-C-PiPPiL.js';
import { S as n } from './index-CbVkzzMr.js';
import { T as g } from './index-CxY2JlPL.js';
import './Button-CoD-b_IN.js';
import './utils-BgHHH9V7.js';
import './index-DJdX7xnk.js';
import './Hidden-2-bsQ4Y9.js';
import './index-BqgWbNE6.js';
import './index-DdgtEVhA.js';
import './useButton-DZEnpN8J.js';
import './usePress-BFY2e0Rh.js';
import './factory-BfbsYOSY.js';
import './index-CwMSx2UQ.js';
import './VisuallyHidden-BiYBAiUW.js';
import './Form-D4JdquZw.js';
import './useToggleState-DzuOW28X.js';
const Z = { title: 'Button', component: o },
  m = ['filled', 'outlined', 'soft', 'plain'],
  M = ['primary', 'error', 'success'],
  u = ['small', 'normal', 'large'],
  t = {
    render: () =>
      r.jsx(n, {
        direction: 'column',
        gap: 'medium',
        children: m.map((e) =>
          r.jsx(
            n,
            {
              direction: 'row',
              gap: 'regular',
              align: 'flex-start',
              children: M.map((a) =>
                r.jsx(o, { variant: e, color: a, children: `${e} ${a}` }, a)
              ),
            },
            e
          )
        ),
      }),
  },
  s = {
    render: () =>
      r.jsx(n, {
        direction: 'column',
        gap: 'medium',
        children: m.map((e) =>
          r.jsx(
            n,
            {
              direction: 'row',
              gap: 'regular',
              align: 'flex-start',
              children: u.map((a) =>
                r.jsx(
                  o,
                  { size: a, variant: e, color: 'primary', children: a },
                  a
                )
              ),
            },
            e
          )
        ),
      }),
  },
  c = {
    render: () =>
      r.jsxs(n, {
        direction: 'column',
        gap: 'large',
        children: [
          r.jsxs(n, {
            direction: 'column',
            gap: 'small',
            children: [
              r.jsx(g, { variant: 'headingM', children: 'Start icon' }),
              r.jsx(x, { icon: 'bellFilled' }),
            ],
          }),
          r.jsxs(n, {
            direction: 'column',
            gap: 'small',
            children: [
              r.jsx(g, { variant: 'headingM', children: 'End icon' }),
              r.jsx(x, { icon: 'addCircle', iconPlacement: 'end' }),
            ],
          }),
        ],
      }),
  };
function x({ icon: e, iconPlacement: a }) {
  return r.jsx(n, {
    direction: 'column',
    gap: 'medium',
    children: u.map((i) =>
      r.jsx(
        n,
        {
          direction: 'row',
          gap: 'medium',
          children: m.map((p) =>
            r.jsx(
              o,
              {
                variant: p,
                size: i,
                color: 'primary',
                icon: e,
                iconPlacement: a,
                children: p,
              },
              p
            )
          ),
        },
        i
      )
    ),
  });
}
const l = {
    render: () => {
      const [e, a] = I.useState(!1);
      return r.jsxs(n, {
        direction: 'column',
        gap: 'medium',
        children: [
          r.jsx(D, {
            label: 'Toggle loading',
            isSelected: e,
            onChange: () => a((i) => !i),
          }),
          r.jsx(n, {
            direction: 'row',
            gap: 'medium',
            align: 'flex-start',
            children: u.map((i) =>
              r.jsx(
                o,
                {
                  size: i,
                  variant: 'filled',
                  color: 'primary',
                  isLoading: e,
                  children: 'They spin me right round',
                },
                i
              )
            ),
          }),
        ],
      });
    },
  },
  d = {
    render: () =>
      r.jsx(n, {
        direction: 'row',
        gap: 'medium',
        children: m.map((e) =>
          r.jsx(
            o,
            { variant: e, color: 'primary', isDisabled: !0, children: e },
            e
          )
        ),
      }),
  };
var h, S, k;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((h = t.parameters) == null ? void 0 : h.docs),
    source: {
      originalSource: `{
  render: () => <Stack direction='column' gap='medium'>
      {variants.map(variant => <Stack key={variant} direction='row' gap='regular' align='flex-start'>
          {colors.map(color => <Button key={color} variant={variant} color={color}>
              {\`\${variant} \${color}\`}
            </Button>)}
        </Stack>)}
    </Stack>
}`,
      ...((k = (S = t.parameters) == null ? void 0 : S.docs) == null
        ? void 0
        : k.source),
    },
  },
};
var j, f, v;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((j = s.parameters) == null ? void 0 : j.docs),
    source: {
      originalSource: `{
  render: () => <Stack direction='column' gap='medium'>
      {variants.map(variant => <Stack key={variant} direction='row' gap='regular' align='flex-start'>
          {sizes.map(size => <Button key={size} size={size} variant={variant} color='primary'>
              {size}
            </Button>)}
        </Stack>)}
    </Stack>
}`,
      ...((v = (f = s.parameters) == null ? void 0 : f.docs) == null
        ? void 0
        : v.source),
    },
  },
};
var y, B, b;
c.parameters = {
  ...c.parameters,
  docs: {
    ...((y = c.parameters) == null ? void 0 : y.docs),
    source: {
      originalSource: `{
  render: () => <Stack direction='column' gap='large'>
      <Stack direction='column' gap='small'>
        <Text variant='headingM'>Start icon</Text>
        <ButtonIconExample icon='bellFilled' />
      </Stack>

      <Stack direction='column' gap='small'>
        <Text variant='headingM'>End icon</Text>
        <ButtonIconExample icon='addCircle' iconPlacement='end' />
      </Stack>
    </Stack>
}`,
      ...((b = (B = c.parameters) == null ? void 0 : B.docs) == null
        ? void 0
        : b.source),
    },
  },
};
var z, L, T;
l.parameters = {
  ...l.parameters,
  docs: {
    ...((z = l.parameters) == null ? void 0 : z.docs),
    source: {
      originalSource: `{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLoading, setLoading] = useState(false);
    return <Stack direction='column' gap='medium'>
        <Checkbox label='Toggle loading' isSelected={isLoading} onChange={() => setLoading(p => !p)} />
        <Stack direction='row' gap='medium' align='flex-start'>
          {sizes.map(size => <Button key={size} size={size} variant='filled' color='primary' isLoading={isLoading}>
              They spin me right round
            </Button>)}
        </Stack>
      </Stack>;
  }
}`,
      ...((T = (L = l.parameters) == null ? void 0 : L.docs) == null
        ? void 0
        : T.source),
    },
  },
};
var w, E, C;
d.parameters = {
  ...d.parameters,
  docs: {
    ...((w = d.parameters) == null ? void 0 : w.docs),
    source: {
      originalSource: `{
  render: () => <Stack direction='row' gap='medium'>
      {variants.map(variant => <Button key={variant} variant={variant} color='primary' isDisabled>
          {variant}
        </Button>)}
    </Stack>
}`,
      ...((C = (E = d.parameters) == null ? void 0 : E.docs) == null
        ? void 0
        : C.source),
    },
  },
};
const rr = ['Variations', 'Sizes', 'WithIcon', 'Loading', 'Disabled'];
export {
  d as Disabled,
  l as Loading,
  s as Sizes,
  t as Variations,
  c as WithIcon,
  rr as __namedExportsOrder,
  Z as default,
};
