import { j as n } from './jsx-runtime-CkxqCPlQ.js';
import { T as j } from './index-DjrMl6wN.js';
import './index-DJO9vBfz.js';
import './Input-BX2iOOjZ.js';
import './index-BqgWbNE6.js';
import './utils-BgHHH9V7.js';
import './index-DJdX7xnk.js';
import './index-DdgtEVhA.js';
import './Form-D4JdquZw.js';
import './FieldError-DNxovmhL.js';
import './Label-Dp0AxpCw.js';
import './useLabels-D003iZWB.js';
import './Hidden-2-bsQ4Y9.js';
import './TextField-DwCn8ieo.js';
import './index-CxY2JlPL.js';
import './common-CFf48SXD.js';
import './index-CbVkzzMr.js';
import './useToggleState-DzuOW28X.js';
import './useButton-DZEnpN8J.js';
import './usePress-BFY2e0Rh.js';
import './factory-BfbsYOSY.js';
import './useTranslation-3LIHFqx3.js';
const $ = {
    title: 'TextInput',
    component: j,
    decorators: [
      (y) =>
        n.jsx('div', { style: { maxWidth: '300px' }, children: n.jsx(y, {}) }),
    ],
  },
  r = { args: { label: 'Regular input', placeholder: 'Type something' } },
  e = { args: { label: 'Disabled input', isDisabled: !0 } },
  s = { args: { label: 'Required input', isRequired: !0 } },
  o = {
    args: {
      label: 'Input with description',
      description: 'You should fill this one',
    },
  },
  t = {
    args: { label: 'Erroring input', errorMessage: "Please don't do this" },
  },
  a = { args: { label: 'Icon input', icon: 'comment' } },
  i = { args: { label: 'Password input', type: 'password' } };
var p, c, m;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((p = r.parameters) == null ? void 0 : p.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Regular input',
    placeholder: 'Type something'
  }
}`,
      ...((m = (c = r.parameters) == null ? void 0 : c.docs) == null
        ? void 0
        : m.source),
    },
  },
};
var l, d, u;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((l = e.parameters) == null ? void 0 : l.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Disabled input',
    isDisabled: true
  }
}`,
      ...((u = (d = e.parameters) == null ? void 0 : d.docs) == null
        ? void 0
        : u.source),
    },
  },
};
var g, b, h;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((g = s.parameters) == null ? void 0 : g.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Required input',
    isRequired: true
  }
}`,
      ...((h = (b = s.parameters) == null ? void 0 : b.docs) == null
        ? void 0
        : h.source),
    },
  },
};
var x, R, I;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((x = o.parameters) == null ? void 0 : x.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Input with description',
    description: 'You should fill this one'
  }
}`,
      ...((I = (R = o.parameters) == null ? void 0 : R.docs) == null
        ? void 0
        : I.source),
    },
  },
};
var w, D, S;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((w = t.parameters) == null ? void 0 : w.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Erroring input',
    errorMessage: "Please don't do this"
  }
}`,
      ...((S = (D = t.parameters) == null ? void 0 : D.docs) == null
        ? void 0
        : S.source),
    },
  },
};
var W, q, E;
a.parameters = {
  ...a.parameters,
  docs: {
    ...((W = a.parameters) == null ? void 0 : W.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Icon input',
    icon: 'comment'
  }
}`,
      ...((E = (q = a.parameters) == null ? void 0 : q.docs) == null
        ? void 0
        : E.source),
    },
  },
};
var P, T, f;
i.parameters = {
  ...i.parameters,
  docs: {
    ...((P = i.parameters) == null ? void 0 : P.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Password input',
    type: 'password'
  }
}`,
      ...((f = (T = i.parameters) == null ? void 0 : T.docs) == null
        ? void 0
        : f.source),
    },
  },
};
const rr = [
  'Regular',
  'Disabled',
  'Required',
  'WithDescription',
  'WithError',
  'WithIcon',
  'Password',
];
export {
  e as Disabled,
  i as Password,
  r as Regular,
  s as Required,
  o as WithDescription,
  t as WithError,
  a as WithIcon,
  rr as __namedExportsOrder,
  $ as default,
};
