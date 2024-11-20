import { j as r } from './jsx-runtime-CkxqCPlQ.js';
import { r as u } from './index-DJO9vBfz.js';
import { $ as C } from './Label-Dp0AxpCw.js';
import { $ as M, a as O } from './TextField-DwCn8ieo.js';
import { a as V } from './index-DdgtEVhA.js';
import { l as k, a as F, D as G, E as J, e as K } from './common-CFf48SXD.js';
import './utils-BgHHH9V7.js';
import './index-DJdX7xnk.js';
import './useLabels-D003iZWB.js';
import './Hidden-2-bsQ4Y9.js';
import './FieldError-DNxovmhL.js';
import './Form-D4JdquZw.js';
import './index-BqgWbNE6.js';
import './Input-BX2iOOjZ.js';
import './index-CxY2JlPL.js';
import './index-CbVkzzMr.js';
function L(s) {
  return (t) => {
    s.forEach((e) => {
      typeof e == 'function' ? e(t) : e != null && (e.current = t);
    });
  };
}
const m = u.forwardRef(
  (
    {
      id: s,
      label: t,
      description: e,
      errorMessage: d,
      placeholder: v,
      autoResize: f = !1,
      rows: H,
      className: I,
      isRequired: P,
      ...Y
    },
    B
  ) => {
    const a = u.useRef(null),
      x = () => {
        a.current &&
          f &&
          ((a.current.style.height = 'auto'),
          (a.current.style.height = a.current.scrollHeight + 'px'));
      };
    return (
      u.useEffect(() => {
        f && x();
      }),
      r.jsxs(M, {
        ...Y,
        className: V(K, I),
        isInvalid: !!d,
        children: [
          r.jsx(C, { className: k, 'data-required': P, children: t }),
          r.jsx(O, {
            id: s,
            rows: H,
            ref: L([a, B]),
            placeholder: v,
            className: F,
            onChange: x,
          }),
          e && r.jsx(G, { children: e }),
          d && r.jsx(J, { children: d }),
        ],
      })
    );
  }
);
m.displayName = 'TextArea';
m.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'TextArea',
  props: {
    label: { required: !0, tsType: { name: 'string' }, description: '' },
    description: { required: !1, tsType: { name: 'string' }, description: '' },
    errorMessage: { required: !1, tsType: { name: 'string' }, description: '' },
    placeholder: { required: !1, tsType: { name: 'string' }, description: '' },
    className: { required: !1, tsType: { name: 'string' }, description: '' },
    autoResize: {
      required: !1,
      tsType: { name: 'boolean' },
      description: '',
      defaultValue: { value: 'false', computed: !1 },
    },
    rows: { required: !1, tsType: { name: 'number' }, description: '' },
  },
};
const ue = {
    title: 'TextArea',
    component: m,
    decorators: [
      (s) =>
        r.jsx('div', { style: { maxWidth: '300px' }, children: r.jsx(s, {}) }),
    ],
  },
  o = {
    args: { label: 'Regular textarea', placeholder: 'Hello there', rows: 4 },
  },
  i = { args: { label: 'Disabled textarea', isDisabled: !0 } },
  n = { args: { label: 'Required textarea', isRequired: !0 } },
  l = {
    args: {
      label: 'Textarea with description',
      description: 'You should fill this one',
    },
  },
  c = {
    args: { label: 'Erroring textarea', errorMessage: "Please don't do this" },
  },
  p = { args: { label: 'Auto-resizing textarea', autoResize: !0 } };
var g, h, b;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((g = o.parameters) == null ? void 0 : g.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Regular textarea',
    placeholder: 'Hello there',
    rows: 4
  }
}`,
      ...((b = (h = o.parameters) == null ? void 0 : h.docs) == null
        ? void 0
        : b.source),
    },
  },
};
var R, T, y;
i.parameters = {
  ...i.parameters,
  docs: {
    ...((R = i.parameters) == null ? void 0 : R.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Disabled textarea',
    isDisabled: true
  }
}`,
      ...((y = (T = i.parameters) == null ? void 0 : T.docs) == null
        ? void 0
        : y.source),
    },
  },
};
var q, E, $;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((q = n.parameters) == null ? void 0 : q.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Required textarea',
    isRequired: true
  }
}`,
      ...(($ = (E = n.parameters) == null ? void 0 : E.docs) == null
        ? void 0
        : $.source),
    },
  },
};
var A, D, j;
l.parameters = {
  ...l.parameters,
  docs: {
    ...((A = l.parameters) == null ? void 0 : A.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Textarea with description',
    description: 'You should fill this one'
  }
}`,
      ...((j = (D = l.parameters) == null ? void 0 : D.docs) == null
        ? void 0
        : j.source),
    },
  },
};
var S, z, w;
c.parameters = {
  ...c.parameters,
  docs: {
    ...((S = c.parameters) == null ? void 0 : S.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Erroring textarea',
    errorMessage: "Please don't do this"
  }
}`,
      ...((w = (z = c.parameters) == null ? void 0 : z.docs) == null
        ? void 0
        : w.source),
    },
  },
};
var N, W, _;
p.parameters = {
  ...p.parameters,
  docs: {
    ...((N = p.parameters) == null ? void 0 : N.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Auto-resizing textarea',
    autoResize: true
  }
}`,
      ...((_ = (W = p.parameters) == null ? void 0 : W.docs) == null
        ? void 0
        : _.source),
    },
  },
};
const me = [
  'Regular',
  'Disabled',
  'Required',
  'WithDescription',
  'WithError',
  'AutoResize',
];
export {
  p as AutoResize,
  i as Disabled,
  o as Regular,
  n as Required,
  l as WithDescription,
  c as WithError,
  me as __namedExportsOrder,
  ue as default,
};
