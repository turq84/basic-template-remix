import { $ as f } from './SelectItem-BIfOg3rJ.js';
import { $ as y } from './index-BqgWbNE6.js';
import { r as K } from './index-DJO9vBfz.js';
function S(l) {
  var t;
  let [e, c] = y(
      l.selectedKey,
      (t = l.defaultSelectedKey) !== null && t !== void 0 ? t : null,
      l.onSelectionChange
    ),
    d = K.useMemo(() => (e != null ? [e] : []), [e]),
    {
      collection: o,
      disabledKeys: i,
      selectionManager: r,
    } = f({
      ...l,
      selectionMode: 'single',
      disallowEmptySelection: !0,
      allowDuplicateSelectionEvents: !0,
      selectedKeys: d,
      onSelectionChange: (s) => {
        if (s === 'all') return;
        var n;
        let a =
          (n = s.values().next().value) !== null && n !== void 0 ? n : null;
        a === e && l.onSelectionChange && l.onSelectionChange(a), c(a);
      },
    }),
    u = e != null ? o.getItem(e) : null;
  return {
    collection: o,
    disabledKeys: i,
    selectionManager: r,
    selectedKey: e,
    setSelectedKey: c,
    selectedItem: u,
  };
}
export { S as $ };
