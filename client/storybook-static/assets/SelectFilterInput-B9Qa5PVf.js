import { g as D, r as a } from './index-DJO9vBfz.js';
import { j as c } from './jsx-runtime-CkxqCPlQ.js';
import { s as v } from './factory-BfbsYOSY.js';
import { B as z } from './index-CfmUmXE5.js';
import { u as E } from './useTranslation-3LIHFqx3.js';
import { I as W } from './index-BqgWbNE6.js';
import { S as _ } from './index-CwMSx2UQ.js';
import { I as F } from './index-SulxIKOx.js';
import { $ as M } from './VisuallyHidden-BiYBAiUW.js';
function x(r, e, n) {
  var s, i, l, p, f;
  e == null && (e = 100);
  function t() {
    var u = Date.now() - p;
    u < e && u >= 0
      ? (s = setTimeout(t, e - u))
      : ((s = null), n || ((f = r.apply(l, i)), (l = i = null)));
  }
  var d = function () {
    (l = this), (i = arguments), (p = Date.now());
    var u = n && !s;
    return (
      s || (s = setTimeout(t, e)), u && ((f = r.apply(l, i)), (l = i = null)), f
    );
  };
  return (
    (d.clear = function () {
      s && (clearTimeout(s), (s = null));
    }),
    (d.flush = function () {
      s && ((f = r.apply(l, i)), (l = i = null), clearTimeout(s), (s = null));
    }),
    d
  );
}
x.debounce = x;
var A = x;
const C = D(A);
function ce(r) {
  let {
    debounce: e,
    scroll: n,
    polyfill: s,
    offsetSize: i,
  } = { debounce: 0, scroll: !1, offsetSize: !1 };
  const l = s || (typeof window > 'u' ? class {} : window.ResizeObserver);
  if (!l)
    throw new Error(
      'This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills'
    );
  const [p, f] = a.useState({
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      bottom: 0,
      right: 0,
      x: 0,
      y: 0,
    }),
    t = a.useRef({
      element: null,
      scrollContainers: null,
      resizeObserver: null,
      lastBounds: p,
    }),
    d = e ? (typeof e == 'number' ? e : e.scroll) : null,
    u = e ? (typeof e == 'number' ? e : e.resize) : null,
    b = a.useRef(!1);
  a.useEffect(() => ((b.current = !0), () => void (b.current = !1)));
  const [O, y, m] = a.useMemo(() => {
    const o = () => {
      if (!t.current.element) return;
      const {
          left: $,
          top: T,
          width: B,
          height: R,
          bottom: I,
          right: L,
          x: P,
          y: q,
        } = t.current.element.getBoundingClientRect(),
        h = {
          left: $,
          top: T,
          width: B,
          height: R,
          bottom: I,
          right: L,
          x: P,
          y: q,
        };
      t.current.element instanceof HTMLElement &&
        i &&
        ((h.height = t.current.element.offsetHeight),
        (h.width = t.current.element.offsetWidth)),
        Object.freeze(h),
        b.current &&
          !X(t.current.lastBounds, h) &&
          f((t.current.lastBounds = h));
    };
    return [o, u ? C(o, u) : o, d ? C(o, d) : o];
  }, [f, i, d, u]);
  function g() {
    t.current.scrollContainers &&
      (t.current.scrollContainers.forEach((o) =>
        o.removeEventListener('scroll', m, !0)
      ),
      (t.current.scrollContainers = null)),
      t.current.resizeObserver &&
        (t.current.resizeObserver.disconnect(),
        (t.current.resizeObserver = null));
  }
  function w() {
    t.current.element &&
      ((t.current.resizeObserver = new l(m)),
      t.current.resizeObserver.observe(t.current.element),
      n &&
        t.current.scrollContainers &&
        t.current.scrollContainers.forEach((o) =>
          o.addEventListener('scroll', m, { capture: !0, passive: !0 })
        ));
  }
  const S = (o) => {
    !o ||
      o === t.current.element ||
      (g(), (t.current.element = o), (t.current.scrollContainers = j(o)), w());
  };
  return (
    k(m, !!n),
    N(y),
    a.useEffect(() => {
      g(), w();
    }, [n, m, y]),
    a.useEffect(() => g, []),
    [S, p, O]
  );
}
function N(r) {
  a.useEffect(() => {
    const e = r;
    return (
      window.addEventListener('resize', e),
      () => void window.removeEventListener('resize', e)
    );
  }, [r]);
}
function k(r, e) {
  a.useEffect(() => {
    if (e) {
      const n = r;
      return (
        window.addEventListener('scroll', n, { capture: !0, passive: !0 }),
        () => void window.removeEventListener('scroll', n, !0)
      );
    }
  }, [r, e]);
}
function j(r) {
  const e = [];
  if (!r || r === document.body) return e;
  const {
    overflow: n,
    overflowX: s,
    overflowY: i,
  } = window.getComputedStyle(r);
  return (
    [n, s, i].some((l) => l === 'auto' || l === 'scroll') && e.push(r),
    [...e, ...j(r.parentElement)]
  );
}
const H = ['x', 'y', 'top', 'bottom', 'left', 'right', 'width', 'height'],
  X = (r, e) => H.every((n) => r[n] === e[n]),
  Y = ({ onClear: r, onConfirm: e }) => {
    const { t: n } = E();
    return c.jsxs(G, {
      children: [
        !!r &&
          c.jsx(
            z,
            {
              color: 'primary',
              variant: 'plain',
              onPress: r,
              'data-testid': 'select-actions-clear',
              children: n('clear'),
            },
            'clear'
          ),
        !!e &&
          c.jsx(
            z,
            {
              color: 'primary',
              variant: 'filled',
              onPress: e,
              'data-testid': 'select-actions-confirm',
              children: n('confirm'),
            },
            'confirm'
          ),
      ],
    });
  },
  G = v('div', {
    base: {
      marginTop: '$xs',
      display: 'flex',
      justifyContent: 'space-evenly',
      gap: '$xs',
      '& button': { flex: 1 },
    },
  });
Y.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'SelectActions',
  props: {
    onConfirm: {
      required: !1,
      tsType: {
        name: "ComponentProps['onPress']",
        raw: "ComponentProps<typeof Button>['onPress']",
      },
      description: '',
    },
    onClear: {
      required: !1,
      tsType: {
        name: "ComponentProps['onPress']",
        raw: "ComponentProps<typeof Button>['onPress']",
      },
      description: '',
    },
  },
};
const J = ({ isLoading: r, inputValue: e, onInputChange: n }) => {
    const { t: s } = E();
    return c.jsxs(K, {
      children: [
        c.jsx(M, { children: s('searchOptions') }),
        c.jsx(W, { name: 'search', size: 20, color: 'textMuted' }),
        c.jsx(Q, {
          autoFocus: !0,
          value: e,
          onChange: (i) => n(i.target.value),
          'data-testid': 'select-filter-input',
        }),
        r
          ? c.jsx(U, { children: c.jsx(_, { size: 'small', color: 'text' }) })
          : e
            ? c.jsx(F, {
                icon: 'close',
                size: 24,
                label: s('clearFilter'),
                onPress: () => n(''),
                'data-testid': 'select-filter-input-clear',
              })
            : null,
      ],
    });
  },
  K = v('label', {
    base: {
      '--outline-width': '1px',
      padding: '$small',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '4px',
      borderWidth: '1px',
      borderColor: '$line1',
      outlineOffset: 'calc(0px - var(--outline-width))',
      marginBottom: '$xs',
      '&:focus-within': {
        '--outline-width': '2px',
        borderColor: 'transparent',
        outline: 'var(--outline-width) solid token($colors.focusRing)',
      },
    },
  }),
  Q = v('input', {
    base: {
      flex: 1,
      marginLeft: '$xs',
      marginRight: '$small',
      textStyle: '$body',
      textAlign: 'left',
    },
  }),
  U = v('div', {
    base: {
      width: 24,
      height: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
J.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'SelectFilterInput',
  props: {
    isLoading: { required: !0, tsType: { name: 'boolean' }, description: '' },
    inputValue: { required: !0, tsType: { name: 'string' }, description: '' },
    onInputChange: {
      required: !0,
      tsType: {
        name: 'signature',
        type: 'function',
        raw: '(value: string) => void',
        signature: {
          arguments: [{ type: { name: 'string' }, name: 'value' }],
          return: { name: 'void' },
        },
      },
      description: '',
    },
  },
};
export { J as S, Y as a, ce as u };
