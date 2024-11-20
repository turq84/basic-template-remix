import { j as r } from './jsx-runtime-CkxqCPlQ.js';
import { I as n } from './index-SulxIKOx.js';
import { S as e } from './index-CbVkzzMr.js';
import './index-DJO9vBfz.js';
import './Button-CoD-b_IN.js';
import './utils-BgHHH9V7.js';
import './index-DJdX7xnk.js';
import './Hidden-2-bsQ4Y9.js';
import './index-BqgWbNE6.js';
import './index-DdgtEVhA.js';
import './useButton-DZEnpN8J.js';
import './usePress-BFY2e0Rh.js';
import './index-Vm1tHATy.js';
import './OverlayArrow-DliHpoDG.js';
import './factory-BfbsYOSY.js';
const F = { title: 'IconButton', component: n },
  l = ['filled', 'outlined', 'soft', 'plain'],
  I = ['primary', 'error', 'success', 'neutral'],
  f = ['small', 'medium', 'large'],
  h = ['top', 'bottom', 'left', 'right'],
  a = {
    render: () =>
      r.jsx(e, {
        direction: 'column',
        gap: 'medium',
        children: I.map((o) =>
          r.jsx(
            e,
            {
              direction: 'row',
              gap: 'regular',
              children: l.map((t) =>
                r.jsx(
                  n,
                  {
                    variant: t,
                    color: o,
                    label: `Icon button ${t}`,
                    icon: 'document',
                  },
                  t
                )
              ),
            },
            o
          )
        ),
      }),
  },
  c = {
    render: () =>
      r.jsx(e, {
        direction: 'row',
        gap: 'regular',
        children: I.map((o) =>
          r.jsx(
            n,
            {
              variant: 'plain',
              color: o,
              label: `Icon button ${o}`,
              icon: 'document',
            },
            o
          )
        ),
      }),
  },
  i = {
    render: () =>
      r.jsx(e, {
        direction: 'column',
        gap: 'medium',
        children: f.map((o) =>
          r.jsx(
            e,
            {
              direction: 'row',
              gap: 'regular',
              children: l.map((t) =>
                r.jsx(
                  n,
                  {
                    variant: t,
                    size: o,
                    label: `Icon button ${o}`,
                    icon: 'filter',
                  },
                  t
                )
              ),
            },
            o
          )
        ),
      }),
  },
  s = {
    render: () =>
      r.jsx(e, {
        direction: 'column',
        gap: 'medium',
        children: h.map((o) =>
          r.jsx(
            e,
            {
              direction: 'row',
              gap: 'regular',
              children: l.map((t) =>
                r.jsx(
                  n,
                  {
                    variant: t,
                    tooltipPlacement: o,
                    label: 'Icon button',
                    icon: 'fullscreenOpen',
                  },
                  t
                )
              ),
            },
            o
          )
        ),
      }),
    decorators: [
      (o) =>
        r.jsx('div', {
          style: { padding: '50px', display: 'flex', justifyContent: 'center' },
          children: r.jsx(o, {}),
        }),
    ],
  };
var m, p, d;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((m = a.parameters) == null ? void 0 : m.docs),
    source: {
      originalSource: `{
  render: () => <Stack direction='column' gap='medium'>
      {colors.map(color => <Stack key={color} direction='row' gap='regular'>
          {variants.map(variant => <IconButton key={variant} variant={variant} color={color} label={\`Icon button \${variant}\`} icon='document' />)}
        </Stack>)}
    </Stack>
}`,
      ...((d = (p = a.parameters) == null ? void 0 : p.docs) == null
        ? void 0
        : d.source),
    },
  },
};
var u, g, S;
c.parameters = {
  ...c.parameters,
  docs: {
    ...((u = c.parameters) == null ? void 0 : u.docs),
    source: {
      originalSource: `{
  render: () => <Stack direction='row' gap='regular'>
      {colors.map(color => <IconButton key={color} variant='plain' color={color} label={\`Icon button \${color}\`} icon='document' />)}
    </Stack>
}`,
      ...((S = (g = c.parameters) == null ? void 0 : g.docs) == null
        ? void 0
        : S.source),
    },
  },
};
var k, x, v;
i.parameters = {
  ...i.parameters,
  docs: {
    ...((k = i.parameters) == null ? void 0 : k.docs),
    source: {
      originalSource: `{
  render: () => <Stack direction='column' gap='medium'>
      {sizes.map(size => <Stack key={size} direction='row' gap='regular'>
          {variants.map(variant => <IconButton key={variant} variant={variant} size={size} label={\`Icon button \${size}\`} icon='filter' />)}
        </Stack>)}
    </Stack>
}`,
      ...((v = (x = i.parameters) == null ? void 0 : x.docs) == null
        ? void 0
        : v.source),
    },
  },
};
var b, j, y;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((b = s.parameters) == null ? void 0 : b.docs),
    source: {
      originalSource: `{
  render: () => <Stack direction='column' gap='medium'>
      {tooltipPlacements.map(tooltipPlacement => <Stack key={tooltipPlacement} direction='row' gap='regular'>
          {variants.map(variant => <IconButton key={variant} variant={variant} tooltipPlacement={tooltipPlacement} label='Icon button' icon='fullscreenOpen' />)}
        </Stack>)}
    </Stack>,
  decorators: [Story => <div style={{
    padding: '50px',
    display: 'flex',
    justifyContent: 'center'
  }}>
        <Story />
      </div>]
}`,
      ...((y = (j = s.parameters) == null ? void 0 : j.docs) == null
        ? void 0
        : y.source),
    },
  },
};
const G = ['Variant', 'Color', 'Size', 'Tooltip'];
export {
  c as Color,
  i as Size,
  s as Tooltip,
  a as Variant,
  G as __namedExportsOrder,
  F as default,
};
