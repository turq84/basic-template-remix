import { j as t } from './jsx-runtime-CkxqCPlQ.js';
import { B as i } from './index-CfmUmXE5.js';
import { T as y } from './index-Vm1tHATy.js';
import './index-DJO9vBfz.js';
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
import './OverlayArrow-DliHpoDG.js';
const F = {
    title: 'Tooltip',
    component: y,
    decorators: [
      (I) =>
        t.jsx('div', {
          style: {
            padding: '100px',
            display: 'flex',
            justifyContent: 'center',
          },
          children: t.jsx(I, {}),
        }),
    ],
  },
  r = {
    args: {
      content: 'I am a tooltip',
      placement: 'top',
      children: t.jsx(i, {
        variant: 'filled',
        color: 'primary',
        children: 'Top',
      }),
    },
  },
  o = {
    args: {
      content: 'I am a tooltip',
      placement: 'bottom',
      children: t.jsx(i, {
        variant: 'filled',
        color: 'primary',
        children: 'Bottom',
      }),
    },
  },
  e = {
    args: {
      content: 'I am a tooltip',
      placement: 'left',
      children: t.jsx(i, {
        variant: 'filled',
        color: 'primary',
        children: 'Left',
      }),
    },
  },
  n = {
    args: {
      content: 'I am a tooltip',
      placement: 'right',
      children: t.jsx(i, {
        variant: 'filled',
        color: 'primary',
        children: 'Right',
      }),
    },
  },
  a = {
    args: {
      content: 'I am a tooltip',
      children: t.jsx(y.Trigger, {
        children: t.jsx('strong', { children: 'Hover me' }),
      }),
    },
  };
var s, c, p;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((s = r.parameters) == null ? void 0 : s.docs),
    source: {
      originalSource: `{
  args: {
    content: 'I am a tooltip',
    placement: 'top',
    children: <Button variant='filled' color='primary'>
        Top
      </Button>
  }
}`,
      ...((p = (c = r.parameters) == null ? void 0 : c.docs) == null
        ? void 0
        : p.source),
    },
  },
};
var m, l, d;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((m = o.parameters) == null ? void 0 : m.docs),
    source: {
      originalSource: `{
  args: {
    content: 'I am a tooltip',
    placement: 'bottom',
    children: <Button variant='filled' color='primary'>
        Bottom
      </Button>
  }
}`,
      ...((d = (l = o.parameters) == null ? void 0 : l.docs) == null
        ? void 0
        : d.source),
    },
  },
};
var g, u, h;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((g = e.parameters) == null ? void 0 : g.docs),
    source: {
      originalSource: `{
  args: {
    content: 'I am a tooltip',
    placement: 'left',
    children: <Button variant='filled' color='primary'>
        Left
      </Button>
  }
}`,
      ...((h = (u = e.parameters) == null ? void 0 : u.docs) == null
        ? void 0
        : h.source),
    },
  },
};
var f, T, x;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((f = n.parameters) == null ? void 0 : f.docs),
    source: {
      originalSource: `{
  args: {
    content: 'I am a tooltip',
    placement: 'right',
    children: <Button variant='filled' color='primary'>
        Right
      </Button>
  }
}`,
      ...((x = (T = n.parameters) == null ? void 0 : T.docs) == null
        ? void 0
        : x.source),
    },
  },
};
var B, j, v;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((B = a.parameters) == null ? void 0 : B.docs),
    source: {
      originalSource: `{
  args: {
    content: 'I am a tooltip',
    children: <Tooltip.Trigger>
        <strong>Hover me</strong>
      </Tooltip.Trigger>
  }
}`,
      ...((v = (j = a.parameters) == null ? void 0 : j.docs) == null
        ? void 0
        : v.source),
    },
  },
};
const G = ['Top', 'Bottom', 'Left', 'Right', 'CustomTrigger'];
export {
  o as Bottom,
  a as CustomTrigger,
  e as Left,
  n as Right,
  r as Top,
  G as __namedExportsOrder,
  F as default,
};
