import { j as e } from './jsx-runtime-CkxqCPlQ.js';
import { B as s } from './index-CfmUmXE5.js';
import { r as _ } from './index-DJO9vBfz.js';
import { $ as M } from './Button-CoD-b_IN.js';
import { $ as D, a as I, b as O } from './Dialog-BVyDrX3O.js';
import { $ as W } from './OverlayArrow-DliHpoDG.js';
import { a as z, b as A } from './index-DdgtEVhA.js';
import { s as c } from './factory-BfbsYOSY.js';
import { S as H } from './index-CbVkzzMr.js';
import { T as l } from './index-CxY2JlPL.js';
import './index-BqgWbNE6.js';
import './utils-BgHHH9V7.js';
import './index-DJdX7xnk.js';
import './index-CwMSx2UQ.js';
import './Hidden-2-bsQ4Y9.js';
import './useButton-DZEnpN8J.js';
import './usePress-BFY2e0Rh.js';
import './VisuallyHidden-BiYBAiUW.js';
import './useLabels-D003iZWB.js';
const m = _.forwardRef(
  ({ content: p, children: S, placement: P, className: k, ...R }, N) =>
    e.jsxs(D, {
      children: [
        S,
        e.jsxs(I, {
          ref: N,
          offset: 14,
          placement: P,
          className: ({ isEntering: q, isExiting: E }) =>
            z(Z({ isEntering: q, isExiting: E }), k),
          ...R,
          children: [
            e.jsx(G, {
              children: e.jsxs('svg', {
                width: '12',
                height: '12',
                viewBox: '0 0 12 12',
                children: [
                  e.jsx('path', {
                    d: 'M6.89443 10.2111L11.2764 1.44722C11.6088 0.782313 11.1253 8.7721e-07 10.382 8.12221e-07L1.61803 4.60539e-08C0.874652 -1.89346e-08 0.391155 0.782312 0.723606 1.44721L5.10557 10.2111C5.4741 10.9482 6.5259 10.9482 6.89443 10.2111Z',
                    className: 'arrow-bg',
                  }),
                  e.jsx('path', {
                    d: 'M1 1L6 11',
                    className: 'arrow-stroke',
                    strokeLinecap: 'round',
                  }),
                  e.jsx('path', {
                    d: 'M11 1L6 11',
                    className: 'arrow-stroke',
                    strokeLinecap: 'round',
                  }),
                ],
              }),
            }),
            e.jsx(F, { children: p }),
          ],
        }),
      ],
    })
);
m.displayName = 'Popover';
const Z = A({
    base: {
      '--shadow': '0px 2px 10px rgba(0, 0, 0, 0.1)',
      '--animation-in': 'popover-animate-in-from-top',
      boxShadow: 'var(--shadow)',
      backgroundColor: '$surface',
      borderRadius: '$regular',
      borderWidth: '1px',
      borderColor: '$neutral4',
      padding: '$regular',
      '&[data-placement="bottom"]': {
        '--shadow': '0px -2px 10px rgba(0, 0, 0, 0.1)',
        '--animation-in': 'popover-animate-in-from-bottom',
      },
      '&[data-placement="right"]': {
        '--shadow': '-2px 2px 10px rgba(0, 0, 0, 0.1)',
        '--animation-in': 'popover-animate-in-from-right',
      },
      '&[data-placement="left"]': {
        '--shadow': '2px 2px 10px rgba(0, 0, 0, 0.1)',
        '--animation-in': 'popover-animate-in-from-left',
      },
    },
    variants: {
      isEntering: {
        true: { animation: 'var(--animation-in) 150ms ease-out forwards' },
      },
      isExiting: {
        true: { animation: 'popover-animate-out 100ms ease-in forwards' },
      },
    },
  }),
  F = c(O, { base: { outline: 'none' } }),
  G = c(W, {
    base: {
      display: 'inline-flex',
      zIndex: 1,
      '& .arrow-bg': { fill: '$surface' },
      '& .arrow-stroke': { stroke: '$neutral4' },
      '&[data-placement="top"]': { marginTop: '-1px' },
      '&[data-placement="bottom"]': {
        marginBottom: '-1px',
        '& svg': { transform: 'rotate(180deg)' },
      },
      '&[data-placement="right"]': {
        marginRight: '-1px',
        '& svg': { transform: 'rotate(90deg)' },
      },
      '&[data-placement="left"]': {
        marginLeft: '-1px',
        '& svg': { transform: 'rotate(-90deg)' },
      },
    },
  }),
  J = c(M, { base: { all: 'unset' } }),
  L = Object.assign(m, { Trigger: J });
m.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Popover',
  props: {
    content: { required: !0, tsType: { name: 'ReactNode' }, description: '' },
    children: { required: !0, tsType: { name: 'ReactNode' }, description: '' },
    placement: {
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
    },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
    style: { required: !1, tsType: { name: 'CSSProperties' }, description: '' },
  },
};
const ge = {
  title: 'Popover',
  component: L,
  decorators: [
    (p) =>
      e.jsx('div', {
        style: { padding: '200px', display: 'flex', justifyContent: 'center' },
        children: e.jsx(p, {}),
      }),
  ],
};
function r() {
  return e.jsxs(H, {
    direction: 'column',
    gap: 'xs',
    children: [
      e.jsx(l, { variant: 'headingS', children: 'Heading' }),
      e.jsx(l, {
        variant: 'bodySmall',
        style: { maxWidth: 220 },
        children:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta error cupiditate laboriosam numquam quos mollitia quo non minima vitae harum?',
      }),
    ],
  });
}
const t = {
    args: {
      content: e.jsx(r, {}),
      placement: 'top',
      children: e.jsx(s, {
        variant: 'filled',
        color: 'primary',
        children: 'Top',
      }),
    },
  },
  o = {
    args: {
      content: e.jsx(r, {}),
      placement: 'bottom',
      children: e.jsx(s, {
        variant: 'filled',
        color: 'primary',
        children: 'Bottom',
      }),
    },
  },
  a = {
    args: {
      content: e.jsx(r, {}),
      placement: 'left',
      children: e.jsx(s, {
        variant: 'filled',
        color: 'primary',
        children: 'Left',
      }),
    },
  },
  n = {
    args: {
      content: e.jsx(r, {}),
      placement: 'right',
      children: e.jsx(s, {
        variant: 'filled',
        color: 'primary',
        children: 'Right',
      }),
    },
  },
  i = {
    args: {
      content: e.jsx(r, {}),
      children: e.jsx(L.Trigger, {
        children: e.jsx('strong', { children: 'Click me' }),
      }),
    },
  };
var d, g, u;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((d = t.parameters) == null ? void 0 : d.docs),
    source: {
      originalSource: `{
  args: {
    content: <Content />,
    placement: 'top',
    children: <Button variant='filled' color='primary'>
        Top
      </Button>
  }
}`,
      ...((u = (g = t.parameters) == null ? void 0 : g.docs) == null
        ? void 0
        : u.source),
    },
  },
};
var f, x, h;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((f = o.parameters) == null ? void 0 : f.docs),
    source: {
      originalSource: `{
  args: {
    content: <Content />,
    placement: 'bottom',
    children: <Button variant='filled' color='primary'>
        Bottom
      </Button>
  }
}`,
      ...((h = (x = o.parameters) == null ? void 0 : x.docs) == null
        ? void 0
        : h.source),
    },
  },
};
var v, b, j;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((v = a.parameters) == null ? void 0 : v.docs),
    source: {
      originalSource: `{
  args: {
    content: <Content />,
    placement: 'left',
    children: <Button variant='filled' color='primary'>
        Left
      </Button>
  }
}`,
      ...((j = (b = a.parameters) == null ? void 0 : b.docs) == null
        ? void 0
        : j.source),
    },
  },
};
var y, $, T;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((y = n.parameters) == null ? void 0 : y.docs),
    source: {
      originalSource: `{
  args: {
    content: <Content />,
    placement: 'right',
    children: <Button variant='filled' color='primary'>
        Right
      </Button>
  }
}`,
      ...((T = ($ = n.parameters) == null ? void 0 : $.docs) == null
        ? void 0
        : T.source),
    },
  },
};
var w, B, C;
i.parameters = {
  ...i.parameters,
  docs: {
    ...((w = i.parameters) == null ? void 0 : w.docs),
    source: {
      originalSource: `{
  args: {
    content: <Content />,
    children: <Popover.Trigger>
        <strong>Click me</strong>
      </Popover.Trigger>
  }
}`,
      ...((C = (B = i.parameters) == null ? void 0 : B.docs) == null
        ? void 0
        : C.source),
    },
  },
};
const ue = ['Top', 'Bottom', 'Left', 'Right', 'CustomTrigger'];
export {
  o as Bottom,
  i as CustomTrigger,
  a as Left,
  n as Right,
  t as Top,
  ue as __namedExportsOrder,
  ge as default,
};
