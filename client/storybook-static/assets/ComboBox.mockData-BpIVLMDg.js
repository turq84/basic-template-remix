import { r as w } from './index-DJO9vBfz.js';
function a(t, e) {
  let { cursor: c, getKey: i } = t;
  return {
    setSelectedKeys(o) {
      e((l) => ({ ...l, selectedKeys: o }));
    },
    setFilterText(o) {
      e((l) => ({ ...l, filterText: o }));
    },
    insert(o, ...l) {
      e((s) => p(s, o, ...l));
    },
    insertBefore(o, ...l) {
      e((s) => {
        let r = s.items.findIndex((n) => i(n) === o);
        if (r === -1)
          if (s.items.length === 0) r = 0;
          else return s;
        return p(s, r, ...l);
      });
    },
    insertAfter(o, ...l) {
      e((s) => {
        let r = s.items.findIndex((n) => i(n) === o);
        if (r === -1)
          if (s.items.length === 0) r = 0;
          else return s;
        return p(s, r + 1, ...l);
      });
    },
    prepend(...o) {
      e((l) => p(l, 0, ...o));
    },
    append(...o) {
      e((l) => p(l, l.items.length, ...o));
    },
    remove(...o) {
      e((l) => {
        let s = new Set(o),
          r = l.items.filter((f) => !s.has(i(f))),
          n = 'all';
        if (l.selectedKeys !== 'all') {
          n = new Set(l.selectedKeys);
          for (let f of o) n.delete(f);
        }
        return (
          c == null && r.length === 0 && (n = new Set()),
          { ...l, items: r, selectedKeys: n }
        );
      });
    },
    removeSelectedItems() {
      e((o) => {
        if (o.selectedKeys === 'all')
          return { ...o, items: [], selectedKeys: new Set() };
        let l = o.selectedKeys,
          s = o.items.filter((r) => !l.has(i(r)));
        return { ...o, items: s, selectedKeys: new Set() };
      });
    },
    move(o, l) {
      e((s) => {
        let r = s.items.findIndex((m) => i(m) === o);
        if (r === -1) return s;
        let n = s.items.slice(),
          [f] = n.splice(r, 1);
        return n.splice(l, 0, f), { ...s, items: n };
      });
    },
    moveBefore(o, l) {
      e((s) => {
        let r = s.items.findIndex((m) => i(m) === o);
        if (r === -1) return s;
        let f = (Array.isArray(l) ? l : [...l])
          .map((m) => s.items.findIndex((u) => i(u) === m))
          .sort((m, u) => m - u);
        return $(s, f, r);
      });
    },
    moveAfter(o, l) {
      e((s) => {
        let r = s.items.findIndex((m) => i(m) === o);
        if (r === -1) return s;
        let f = (Array.isArray(l) ? l : [...l])
          .map((m) => s.items.findIndex((u) => i(u) === m))
          .sort((m, u) => m - u);
        return $(s, f, r + 1);
      });
    },
    update(o, l) {
      e((s) => {
        let r = s.items.findIndex((n) => i(n) === o);
        return r === -1
          ? s
          : {
              ...s,
              items: [...s.items.slice(0, r), l, ...s.items.slice(r + 1)],
            };
      });
    },
  };
}
function p(t, e, ...c) {
  return { ...t, items: [...t.items.slice(0, e), ...c, ...t.items.slice(e)] };
}
function $(t, e, c) {
  c -= e.filter((l) => l < c).length;
  let i = e.map((l) => ({ from: l, to: c++ }));
  for (let l = 0; l < i.length; l++) {
    let s = i[l].from;
    for (let r = l; r < i.length; r++) i[r].from > s && i[r].from--;
  }
  for (let l = 0; l < i.length; l++) {
    let s = i[l];
    for (let r = i.length - 1; r > l; r--) {
      let n = i[r];
      n.from < s.to ? s.to++ : n.from++;
    }
  }
  let o = t.items.slice();
  for (let l of i) {
    let [s] = o.splice(l.from, 1);
    o.splice(l.to, 0, s);
  }
  return { ...t, items: o };
}
function h(t, e) {
  let c;
  switch (t.state) {
    case 'idle':
    case 'error':
      switch (e.type) {
        case 'loading':
        case 'loadingMore':
        case 'sorting':
        case 'filtering':
          var i, o;
          return {
            ...t,
            filterText:
              (i = e.filterText) !== null && i !== void 0 ? i : t.filterText,
            state: e.type,
            items: e.type === 'loading' ? [] : t.items,
            sortDescriptor:
              (o = e.sortDescriptor) !== null && o !== void 0
                ? o
                : t.sortDescriptor,
            abortController: e.abortController,
          };
        case 'update':
          return { ...t, ...e.updater(t) };
        case 'success':
        case 'error':
          return t;
        default:
          throw new Error(`Invalid action "${e.type}" in state "${t.state}"`);
      }
    case 'loading':
    case 'sorting':
    case 'filtering':
      switch (e.type) {
        case 'success':
          if (e.abortController !== t.abortController) return t;
          var l;
          c =
            (l = e.selectedKeys) !== null && l !== void 0 ? l : t.selectedKeys;
          var s, r;
          return {
            ...t,
            filterText:
              (s = e.filterText) !== null && s !== void 0 ? s : t.filterText,
            state: 'idle',
            items: [...e.items],
            selectedKeys: c === 'all' ? 'all' : new Set(c),
            sortDescriptor:
              (r = e.sortDescriptor) !== null && r !== void 0
                ? r
                : t.sortDescriptor,
            abortController: null,
            cursor: e.cursor,
          };
        case 'error':
          return e.abortController !== t.abortController
            ? t
            : { ...t, state: 'error', error: e.error, abortController: null };
        case 'loading':
        case 'loadingMore':
        case 'sorting':
        case 'filtering':
          t.abortController.abort();
          var n;
          return {
            ...t,
            filterText:
              (n = e.filterText) !== null && n !== void 0 ? n : t.filterText,
            state: e.type,
            items: e.type === 'loading' ? [] : t.items,
            abortController: e.abortController,
          };
        case 'update':
          return { ...t, ...e.updater(t) };
        default:
          throw new Error(`Invalid action "${e.type}" in state "${t.state}"`);
      }
    case 'loadingMore':
      switch (e.type) {
        case 'success':
          var f;
          c =
            t.selectedKeys === 'all' || e.selectedKeys === 'all'
              ? 'all'
              : new Set([
                  ...t.selectedKeys,
                  ...((f = e.selectedKeys) !== null && f !== void 0 ? f : []),
                ]);
          var m;
          return {
            ...t,
            state: 'idle',
            items: [...t.items, ...e.items],
            selectedKeys: c,
            sortDescriptor:
              (m = e.sortDescriptor) !== null && m !== void 0
                ? m
                : t.sortDescriptor,
            abortController: null,
            cursor: e.cursor,
          };
        case 'error':
          return e.abortController !== t.abortController
            ? t
            : { ...t, state: 'error', error: e.error };
        case 'loading':
        case 'sorting':
        case 'filtering':
          t.abortController.abort();
          var u;
          return {
            ...t,
            filterText:
              (u = e.filterText) !== null && u !== void 0 ? u : t.filterText,
            state: e.type,
            items: e.type === 'loading' ? [] : t.items,
            abortController: e.abortController,
          };
        case 'loadingMore':
          return e.abortController.abort(), t;
        case 'update':
          return { ...t, ...e.updater(t) };
        default:
          throw new Error(`Invalid action "${e.type}" in state "${t.state}"`);
      }
    default:
      throw new Error(`Invalid state "${t.state}"`);
  }
}
function I(t) {
  const {
    load: e,
    sort: c,
    initialSelectedKeys: i,
    initialSortDescriptor: o,
    getKey: l = (u) => u.id || u.key,
    initialFilterText: s = '',
  } = t;
  let [r, n] = w.useReducer(h, {
    state: 'idle',
    error: null,
    items: [],
    selectedKeys: i === 'all' ? 'all' : new Set(i),
    sortDescriptor: o,
    filterText: s,
  });
  const f = async (u, g) => {
    let d = new AbortController();
    try {
      n({ ...u, abortController: d });
      var b;
      let y = (b = u.filterText) !== null && b !== void 0 ? b : r.filterText;
      var v;
      let C = await g({
        items: r.items.slice(),
        selectedKeys: r.selectedKeys,
        sortDescriptor:
          (v = u.sortDescriptor) !== null && v !== void 0
            ? v
            : r.sortDescriptor,
        signal: d.signal,
        cursor: u.type === 'loadingMore' ? r.cursor : null,
        filterText: y,
      });
      var x;
      let K = (x = C.filterText) !== null && x !== void 0 ? x : y;
      n({ type: 'success', ...C, abortController: d }),
        K &&
          K !== y &&
          !d.signal.aborted &&
          f({ type: 'filtering', filterText: K }, e);
    } catch (y) {
      n({ type: 'error', error: y, abortController: d });
    }
  };
  let m = w.useRef(!1);
  return (
    w.useEffect(() => {
      m.current || (f({ type: 'loading' }, e), (m.current = !0));
    }, []),
    {
      items: r.items,
      selectedKeys: r.selectedKeys,
      sortDescriptor: r.sortDescriptor,
      isLoading:
        r.state === 'loading' ||
        r.state === 'loadingMore' ||
        r.state === 'sorting' ||
        r.state === 'filtering',
      loadingState: r.state,
      error: r.error,
      filterText: r.filterText,
      getItem(u) {
        return r.items.find((g) => l(g) === u);
      },
      reload() {
        f({ type: 'loading' }, e);
      },
      loadMore() {
        r.state === 'loadingMore' ||
          r.state === 'filtering' ||
          r.cursor == null ||
          f({ type: 'loadingMore' }, e);
      },
      sort(u) {
        f({ type: 'sorting', sortDescriptor: u }, c || e);
      },
      ...a({ ...t, getKey: l, cursor: r.cursor }, (u) => {
        n({ type: 'update', updater: u });
      }),
      setFilterText(u) {
        f({ type: 'filtering', filterText: u }, e);
      },
    }
  );
}
const S = (t) => new Promise((e) => setTimeout(e, t));
async function A({ filterText: t = '', signal: e }) {
  return (
    await S(500),
    (
      await fetch(`https://swapi.py4e.com/api/people/?search=${t}`, {
        signal: e,
      })
        .then((i) => i.json())
        .then((i) => i.results)
    ).map((i) => ({ value: i.url, label: i.name }))
  );
}
export { I as $, A as f };
