import { j as m } from './jsx-runtime-CkxqCPlQ.js';
import { r as n, R as J } from './index-DJO9vBfz.js';
import { a as de, b as Su, $ as Lu } from './Button-CoD-b_IN.js';
import {
  j as Ru,
  a as Ce,
  c as Iu,
  e as ku,
  f as Ou,
  g as Pu,
  d as Ku,
  h as ju,
} from './utils-BgHHH9V7.js';
import { $ as Mu } from './FieldError-DNxovmhL.js';
import { a as Vu, e as wu, $ as Gu } from './Form-D4JdquZw.js';
import { $ as zu, a as qu, b as Nu } from './Input-BX2iOOjZ.js';
import { a as Wu, $ as Uu } from './Label-Dp0AxpCw.js';
import {
  c as Hu,
  d as Yu,
  e as Zu,
  f as we,
  g as Xu,
  a as Ju,
  b as _u,
  S as Qu,
} from './SelectItem-BIfOg3rJ.js';
import {
  q as en,
  h as un,
  c as nn,
  k as on,
  a as tn,
} from './Dialog-BVyDrX3O.js';
import { $ as ln } from './index-CxY2JlPL.js';
import {
  t as Ge,
  h as cn,
  u as sn,
  e as pn,
  l as rn,
} from './Separator-p0-S5q3W.js';
import { $ as an, x as $e, b as dn, I as xe } from './index-BqgWbNE6.js';
import { a as $n, e as bn } from './OverlayArrow-DliHpoDG.js';
import { $ as Cn } from './useFilter-ATG2y2Gg.js';
import { $ as xn } from './useSingleSelectListState-CuGD3mzW.js';
import { b as mn } from './usePress-BFY2e0Rh.js';
import { $ as me } from './useLabels-D003iZWB.js';
import { $ as hn } from './useMenuTrigger-DcMVX-dm.js';
import { a as he, c as fn } from './index-DdgtEVhA.js';
import { s as ze } from './factory-BfbsYOSY.js';
import {
  l as vn,
  i as An,
  a as Bn,
  D as En,
  E as Dn,
  c as Tn,
  d as yn,
  e as gn,
} from './common-CFf48SXD.js';
import { $ as Fn, f as Sn } from './ComboBox.mockData-BpIVLMDg.js';
import './Hidden-2-bsQ4Y9.js';
import './index-DJdX7xnk.js';
import './useButton-DZEnpN8J.js';
import './index-CbVkzzMr.js';
import './VisuallyHidden-BiYBAiUW.js';
function Ln(e) {
  var u;
  let {
      defaultFilter: s,
      menuTrigger: b = 'input',
      allowsEmptyCollection: i = !1,
      allowsCustomValue: p,
      shouldCloseOnBlur: A = !0,
    } = e,
    [r, I] = n.useState(!1),
    [T, G] = n.useState(!1),
    [x, y] = n.useState(null),
    v = (t) => {
      e.onSelectionChange && e.onSelectionChange(t), t === l && (Y(), E());
    };
  var L;
  let {
      collection: h,
      selectionManager: g,
      selectedKey: l,
      setSelectedKey: P,
      selectedItem: Q,
      disabledKeys: ee,
    } = xn({
      ...e,
      onSelectionChange: v,
      items: (L = e.items) !== null && L !== void 0 ? L : e.defaultItems,
    }),
    K = e.defaultInputValue;
  if (K == null) {
    var z, q;
    l == null
      ? (K = '')
      : (K =
          (q =
            (z = h.getItem(l)) === null || z === void 0
              ? void 0
              : z.textValue) !== null && q !== void 0
            ? q
            : '');
  }
  let [a, k] = an(e.inputValue, K, e.onInputChange),
    F = h,
    B = n.useMemo(
      () => (e.items != null || !s ? h : Rn(h, a, s)),
      [h, a, s, e.items]
    ),
    [U, ue] = n.useState(B),
    j = n.useRef('focus'),
    d = $n({
      ...e,
      onOpenChange: (t) => {
        e.onOpenChange && e.onOpenChange(t, t ? j.current : void 0),
          g.setFocused(t),
          t || g.setFocusedKey(null);
      },
      isOpen: void 0,
      defaultOpen: void 0,
    }),
    S = (t = null, $) => {
      let C = $ === 'manual' || ($ === 'focus' && b === 'focus');
      (i || B.size > 0 || (C && F.size > 0) || e.items) &&
        (C && !d.isOpen && e.items === void 0 && I(!0),
        (j.current = $),
        y(t),
        d.open());
    },
    M = (t = null, $) => {
      let C = $ === 'manual' || ($ === 'focus' && b === 'focus');
      (!(i || B.size > 0 || (C && F.size > 0) || e.items) && !d.isOpen) ||
        (C && !d.isOpen && e.items === void 0 && I(!0),
        d.isOpen || (j.current = $),
        N(t));
    },
    f = n.useCallback(() => {
      ue(r ? F : B);
    }, [r, F, B]),
    N = n.useCallback(
      (t = null) => {
        d.isOpen && f(), y(t), d.toggle();
      },
      [d, f]
    ),
    E = n.useCallback(() => {
      d.isOpen && (f(), d.close());
    }, [d, f]),
    [W, O] = n.useState(a),
    Y = () => {
      var t, $;
      let C =
        l != null &&
        ($ =
          (t = h.getItem(l)) === null || t === void 0
            ? void 0
            : t.textValue) !== null &&
        $ !== void 0
          ? $
          : '';
      O(C), k(C);
    };
  var Z, V;
  let w = n.useRef(
    (V =
      (Z = e.selectedKey) !== null && Z !== void 0
        ? Z
        : e.defaultSelectedKey) !== null && V !== void 0
      ? V
      : null
  );
  var X;
  let ne = n.useRef(
    l != null &&
      (X =
        (u = h.getItem(l)) === null || u === void 0 ? void 0 : u.textValue) !==
        null &&
      X !== void 0
      ? X
      : ''
  );
  n.useEffect(() => {
    var t;
    T &&
      (B.size > 0 || i) &&
      !d.isOpen &&
      a !== W &&
      b !== 'manual' &&
      S(null, 'input'),
      !r && !i && d.isOpen && B.size === 0 && E(),
      l != null && l !== w.current && E(),
      a !== W &&
        (g.setFocusedKey(null),
        I(!1),
        a === '' &&
          (e.inputValue === void 0 || e.selectedKey === void 0) &&
          P(null)),
      l !== w.current && (e.inputValue === void 0 || e.selectedKey === void 0)
        ? Y()
        : W !== a && O(a);
    var $;
    let C =
      l != null &&
      ($ =
        (t = h.getItem(l)) === null || t === void 0 ? void 0 : t.textValue) !==
        null &&
      $ !== void 0
        ? $
        : '';
    !T &&
      l != null &&
      e.inputValue === void 0 &&
      l === w.current &&
      ne.current !== C &&
      (O(C), k(C)),
      (w.current = l),
      (ne.current = C);
  });
  let o = Vu({
      ...e,
      value: n.useMemo(() => ({ inputValue: a, selectedKey: l }), [a, l]),
    }),
    c = () => {
      p && l == null ? D() : R();
    },
    D = () => {
      (w.current = null), P(null), E();
    },
    R = () => {
      if (e.selectedKey !== void 0 && e.inputValue !== void 0) {
        var t, $;
        (t = e.onSelectionChange) === null || t === void 0 || t.call(e, l);
        var C;
        let Fu =
          l != null &&
          (C =
            ($ = h.getItem(l)) === null || $ === void 0
              ? void 0
              : $.textValue) !== null &&
          C !== void 0
            ? C
            : '';
        O(Fu), E();
      } else Y(), E();
    };
  const oe = () => {
    if (p) {
      var t, $;
      const C =
        l != null &&
        ($ =
          (t = h.getItem(l)) === null || t === void 0
            ? void 0
            : t.textValue) !== null &&
        $ !== void 0
          ? $
          : '';
      a === C ? R() : D();
    } else R();
  };
  let Tu = () => {
      d.isOpen && g.focusedKey != null
        ? l === g.focusedKey
          ? R()
          : P(g.focusedKey)
        : oe();
    },
    be = n.useRef(a),
    yu = (t) => {
      t
        ? ((be.current = a), b === 'focus' && !e.isReadOnly && S(null, 'focus'))
        : (A && oe(), a !== be.current && o.commitValidation()),
        G(t);
    },
    gu = n.useMemo(() => (d.isOpen ? (r ? F : B) : U), [d.isOpen, F, B, r, U]);
  return {
    ...o,
    ...d,
    focusStrategy: x,
    toggle: M,
    open: S,
    close: oe,
    selectionManager: g,
    selectedKey: l,
    setSelectedKey: P,
    disabledKeys: ee,
    isFocused: T,
    setFocused: yu,
    selectedItem: Q,
    collection: gu,
    inputValue: a,
    setInputValue: k,
    commit: Tu,
    revert: c,
  };
}
function Rn(e, u, s) {
  return new Hu(qe(e, e, u, s));
}
function qe(e, u, s, b) {
  let i = [];
  for (let p of u)
    if (p.type === 'section' && p.hasChildNodes) {
      let A = qe(e, Ge(p, e), s, b);
      [...A].some((r) => r.type === 'item') && i.push({ ...p, childNodes: A });
    } else
      p.type === 'item' && b(p.textValue, s)
        ? i.push({ ...p })
        : p.type !== 'item' && i.push({ ...p });
  return i;
}
var Ne = {};
Ne = {
  buttonLabel: 'عرض المقترحات',
  countAnnouncement: (e, u) =>
    `${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} خيار`, other: () => `${u.number(e.optionCount)} خيارات` })} متاحة.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `المجموعة المدخلة ${e.groupTitle}, مع ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} خيار`, other: () => `${u.number(e.groupCount)} خيارات` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', محدد', other: '' }, e.isSelected)}`,
  listboxLabel: 'مقترحات',
  selectedAnnouncement: (e) => `${e.optionText}، محدد`,
};
var We = {};
We = {
  buttonLabel: 'Покажи предложения',
  countAnnouncement: (e, u) =>
    `${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} опция`, other: () => `${u.number(e.optionCount)} опции` })} на разположение.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Въведена група ${e.groupTitle}, с ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} опция`, other: () => `${u.number(e.groupCount)} опции` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', избрани', other: '' }, e.isSelected)}`,
  listboxLabel: 'Предложения',
  selectedAnnouncement: (e) => `${e.optionText}, избрани`,
};
var Ue = {};
Ue = {
  buttonLabel: 'Zobrazit doporučení',
  countAnnouncement: (e, u) =>
    `K dispozici ${u.plural(e.optionCount, { one: () => `je ${u.number(e.optionCount)} možnost`, other: () => `jsou/je ${u.number(e.optionCount)} možnosti/-í` })}.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Zadaná skupina „${e.groupTitle}“ ${u.plural(e.groupCount, { one: () => `s ${u.number(e.groupCount)} možností`, other: () => `se ${u.number(e.groupCount)} možnostmi` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ' (vybráno)', other: '' }, e.isSelected)}`,
  listboxLabel: 'Návrhy',
  selectedAnnouncement: (e) => `${e.optionText}, vybráno`,
};
var He = {};
He = {
  buttonLabel: 'Vis forslag',
  countAnnouncement: (e, u) =>
    `${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} mulighed tilgængelig`, other: () => `${u.number(e.optionCount)} muligheder tilgængelige` })}.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Angivet gruppe ${e.groupTitle}, med ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} mulighed`, other: () => `${u.number(e.groupCount)} muligheder` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', valgt', other: '' }, e.isSelected)}`,
  listboxLabel: 'Forslag',
  selectedAnnouncement: (e) => `${e.optionText}, valgt`,
};
var Ye = {};
Ye = {
  buttonLabel: 'Empfehlungen anzeigen',
  countAnnouncement: (e, u) =>
    `${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} Option`, other: () => `${u.number(e.optionCount)} Optionen` })} verfügbar.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Eingetretene Gruppe ${e.groupTitle}, mit ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} Option`, other: () => `${u.number(e.groupCount)} Optionen` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', ausgewählt', other: '' }, e.isSelected)}`,
  listboxLabel: 'Empfehlungen',
  selectedAnnouncement: (e) => `${e.optionText}, ausgewählt`,
};
var Ze = {};
Ze = {
  buttonLabel: 'Προβολή προτάσεων',
  countAnnouncement: (e, u) =>
    `${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} επιλογή`, other: () => `${u.number(e.optionCount)} επιλογές ` })} διαθέσιμες.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Εισαγμένη ομάδα ${e.groupTitle}, με ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} επιλογή`, other: () => `${u.number(e.groupCount)} επιλογές` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', επιλεγμένο', other: '' }, e.isSelected)}`,
  listboxLabel: 'Προτάσεις',
  selectedAnnouncement: (e) => `${e.optionText}, επιλέχθηκε`,
};
var Xe = {};
Xe = {
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Entered group ${e.groupTitle}, with ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} option`, other: () => `${u.number(e.groupCount)} options` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', selected', other: '' }, e.isSelected)}`,
  countAnnouncement: (e, u) =>
    `${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} option`, other: () => `${u.number(e.optionCount)} options` })} available.`,
  selectedAnnouncement: (e) => `${e.optionText}, selected`,
  buttonLabel: 'Show suggestions',
  listboxLabel: 'Suggestions',
};
var Je = {};
Je = {
  buttonLabel: 'Mostrar sugerencias',
  countAnnouncement: (e, u) =>
    `${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} opción`, other: () => `${u.number(e.optionCount)} opciones` })} disponible(s).`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Se ha unido al grupo ${e.groupTitle}, con ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} opción`, other: () => `${u.number(e.groupCount)} opciones` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', seleccionado', other: '' }, e.isSelected)}`,
  listboxLabel: 'Sugerencias',
  selectedAnnouncement: (e) => `${e.optionText}, seleccionado`,
};
var _e = {};
_e = {
  buttonLabel: 'Kuva soovitused',
  countAnnouncement: (e, u) =>
    `${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} valik`, other: () => `${u.number(e.optionCount)} valikud` })} saadaval.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Sisestatud rühm ${e.groupTitle}, valikuga ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} valik`, other: () => `${u.number(e.groupCount)} valikud` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', valitud', other: '' }, e.isSelected)}`,
  listboxLabel: 'Soovitused',
  selectedAnnouncement: (e) => `${e.optionText}, valitud`,
};
var Qe = {};
Qe = {
  buttonLabel: 'Näytä ehdotukset',
  countAnnouncement: (e, u) =>
    `${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} vaihtoehto`, other: () => `${u.number(e.optionCount)} vaihtoehdot` })} saatavilla.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Mentiin ryhmään ${e.groupTitle}, ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} vaihtoehdon`, other: () => `${u.number(e.groupCount)} vaihtoehdon` })} kanssa.`, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', valittu', other: '' }, e.isSelected)}`,
  listboxLabel: 'Ehdotukset',
  selectedAnnouncement: (e) => `${e.optionText}, valittu`,
};
var eu = {};
eu = {
  buttonLabel: 'Afficher les suggestions',
  countAnnouncement: (e, u) =>
    `${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} option`, other: () => `${u.number(e.optionCount)} options` })} disponible(s).`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Groupe ${e.groupTitle} rejoint, avec ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} option`, other: () => `${u.number(e.groupCount)} options` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', sélectionné(s)', other: '' }, e.isSelected)}`,
  listboxLabel: 'Suggestions',
  selectedAnnouncement: (e) => `${e.optionText}, sélectionné`,
};
var uu = {};
uu = {
  buttonLabel: 'הצג הצעות',
  countAnnouncement: (e, u) =>
    `${u.plural(e.optionCount, { one: () => `אפשרות ${u.number(e.optionCount)}`, other: () => `${u.number(e.optionCount)} אפשרויות` })} במצב זמין.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `נכנס לקבוצה ${e.groupTitle}, עם ${u.plural(e.groupCount, { one: () => `אפשרות ${u.number(e.groupCount)}`, other: () => `${u.number(e.groupCount)} אפשרויות` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', נבחר', other: '' }, e.isSelected)}`,
  listboxLabel: 'הצעות',
  selectedAnnouncement: (e) => `${e.optionText}, נבחר`,
};
var nu = {};
nu = {
  buttonLabel: 'Prikaži prijedloge',
  countAnnouncement: (e, u) =>
    `Dostupno još: ${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} opcija`, other: () => `${u.number(e.optionCount)} opcije/a` })}.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Unesena skupina ${e.groupTitle}, s ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} opcijom`, other: () => `${u.number(e.groupCount)} opcije/a` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', odabranih', other: '' }, e.isSelected)}`,
  listboxLabel: 'Prijedlozi',
  selectedAnnouncement: (e) => `${e.optionText}, odabrano`,
};
var ou = {};
ou = {
  buttonLabel: 'Javaslatok megjelenítése',
  countAnnouncement: (e, u) =>
    `${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} lehetőség`, other: () => `${u.number(e.optionCount)} lehetőség` })} áll rendelkezésre.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Belépett a(z) ${e.groupTitle} csoportba, amely ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} lehetőséget`, other: () => `${u.number(e.groupCount)} lehetőséget` })} tartalmaz. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', kijelölve', other: '' }, e.isSelected)}`,
  listboxLabel: 'Javaslatok',
  selectedAnnouncement: (e) => `${e.optionText}, kijelölve`,
};
var tu = {};
tu = {
  buttonLabel: 'Mostra suggerimenti',
  countAnnouncement: (e, u) =>
    `${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} opzione disponibile`, other: () => `${u.number(e.optionCount)} opzioni disponibili` })}.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Ingresso nel gruppo ${e.groupTitle}, con ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} opzione`, other: () => `${u.number(e.groupCount)} opzioni` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', selezionato', other: '' }, e.isSelected)}`,
  listboxLabel: 'Suggerimenti',
  selectedAnnouncement: (e) => `${e.optionText}, selezionato`,
};
var lu = {};
lu = {
  buttonLabel: '候補を表示',
  countAnnouncement: (e, u) =>
    `${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} 個のオプション`, other: () => `${u.number(e.optionCount)} 個のオプション` })}を利用できます。`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `入力されたグループ ${e.groupTitle}、${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} 個のオプション`, other: () => `${u.number(e.groupCount)} 個のオプション` })}を含む。`, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: '、選択済み', other: '' }, e.isSelected)}`,
  listboxLabel: '候補',
  selectedAnnouncement: (e) => `${e.optionText}、選択済み`,
};
var iu = {};
iu = {
  buttonLabel: '제안 사항 표시',
  countAnnouncement: (e, u) =>
    `${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)}개 옵션`, other: () => `${u.number(e.optionCount)}개 옵션` })}을 사용할 수 있습니다.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `입력한 그룹 ${e.groupTitle}, ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)}개 옵션`, other: () => `${u.number(e.groupCount)}개 옵션` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', 선택됨', other: '' }, e.isSelected)}`,
  listboxLabel: '제안',
  selectedAnnouncement: (e) => `${e.optionText}, 선택됨`,
};
var cu = {};
cu = {
  buttonLabel: 'Rodyti pasiūlymus',
  countAnnouncement: (e, u) =>
    `Yra ${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} parinktis`, other: () => `${u.number(e.optionCount)} parinktys (-ių)` })}.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Įvesta grupė ${e.groupTitle}, su ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} parinktimi`, other: () => `${u.number(e.groupCount)} parinktimis (-ių)` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', pasirinkta', other: '' }, e.isSelected)}`,
  listboxLabel: 'Pasiūlymai',
  selectedAnnouncement: (e) => `${e.optionText}, pasirinkta`,
};
var su = {};
su = {
  buttonLabel: 'Rādīt ieteikumus',
  countAnnouncement: (e, u) =>
    `Pieejamo opciju skaits: ${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} opcija`, other: () => `${u.number(e.optionCount)} opcijas` })}.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Ievadīta grupa ${e.groupTitle}, ar ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} opciju`, other: () => `${u.number(e.groupCount)} opcijām` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', atlasīta', other: '' }, e.isSelected)}`,
  listboxLabel: 'Ieteikumi',
  selectedAnnouncement: (e) => `${e.optionText}, atlasīta`,
};
var pu = {};
pu = {
  buttonLabel: 'Vis forslag',
  countAnnouncement: (e, u) =>
    `${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} alternativ`, other: () => `${u.number(e.optionCount)} alternativer` })} finnes.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Angitt gruppe ${e.groupTitle}, med ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} alternativ`, other: () => `${u.number(e.groupCount)} alternativer` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', valgt', other: '' }, e.isSelected)}`,
  listboxLabel: 'Forslag',
  selectedAnnouncement: (e) => `${e.optionText}, valgt`,
};
var ru = {};
ru = {
  buttonLabel: 'Suggesties weergeven',
  countAnnouncement: (e, u) =>
    `${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} optie`, other: () => `${u.number(e.optionCount)} opties` })} beschikbaar.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Groep ${e.groupTitle} ingevoerd met ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} optie`, other: () => `${u.number(e.groupCount)} opties` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', geselecteerd', other: '' }, e.isSelected)}`,
  listboxLabel: 'Suggesties',
  selectedAnnouncement: (e) => `${e.optionText}, geselecteerd`,
};
var au = {};
au = {
  buttonLabel: 'Wyświetlaj sugestie',
  countAnnouncement: (e, u) =>
    `dostępna/dostępne(-nych) ${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} opcja`, other: () => `${u.number(e.optionCount)} opcje(-i)` })}.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Dołączono do grupy ${e.groupTitle}, z ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} opcją`, other: () => `${u.number(e.groupCount)} opcjami` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', wybrano', other: '' }, e.isSelected)}`,
  listboxLabel: 'Sugestie',
  selectedAnnouncement: (e) => `${e.optionText}, wybrano`,
};
var du = {};
du = {
  buttonLabel: 'Mostrar sugestões',
  countAnnouncement: (e, u) =>
    `${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} opção`, other: () => `${u.number(e.optionCount)} opções` })} disponível.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Grupo inserido ${e.groupTitle}, com ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} opção`, other: () => `${u.number(e.groupCount)} opções` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', selecionado', other: '' }, e.isSelected)}`,
  listboxLabel: 'Sugestões',
  selectedAnnouncement: (e) => `${e.optionText}, selecionado`,
};
var $u = {};
$u = {
  buttonLabel: 'Apresentar sugestões',
  countAnnouncement: (e, u) =>
    `${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} opção`, other: () => `${u.number(e.optionCount)} opções` })} disponível.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Grupo introduzido ${e.groupTitle}, com ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} opção`, other: () => `${u.number(e.groupCount)} opções` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', selecionado', other: '' }, e.isSelected)}`,
  listboxLabel: 'Sugestões',
  selectedAnnouncement: (e) => `${e.optionText}, selecionado`,
};
var bu = {};
bu = {
  buttonLabel: 'Afișare sugestii',
  countAnnouncement: (e, u) =>
    `${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} opțiune`, other: () => `${u.number(e.optionCount)} opțiuni` })} disponibile.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Grup ${e.groupTitle} introdus, cu ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} opțiune`, other: () => `${u.number(e.groupCount)} opțiuni` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', selectat', other: '' }, e.isSelected)}`,
  listboxLabel: 'Sugestii',
  selectedAnnouncement: (e) => `${e.optionText}, selectat`,
};
var Cu = {};
Cu = {
  buttonLabel: 'Показать предложения',
  countAnnouncement: (e, u) =>
    `${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} параметр`, other: () => `${u.number(e.optionCount)} параметров` })} доступно.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Введенная группа ${e.groupTitle}, с ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} параметром`, other: () => `${u.number(e.groupCount)} параметрами` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', выбранными', other: '' }, e.isSelected)}`,
  listboxLabel: 'Предложения',
  selectedAnnouncement: (e) => `${e.optionText}, выбрано`,
};
var xu = {};
xu = {
  buttonLabel: 'Zobraziť návrhy',
  countAnnouncement: (e, u) =>
    `${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} možnosť`, other: () => `${u.number(e.optionCount)} možnosti/-í` })} k dispozícii.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Zadaná skupina ${e.groupTitle}, s ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} možnosťou`, other: () => `${u.number(e.groupCount)} možnosťami` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', vybraté', other: '' }, e.isSelected)}`,
  listboxLabel: 'Návrhy',
  selectedAnnouncement: (e) => `${e.optionText}, vybraté`,
};
var mu = {};
mu = {
  buttonLabel: 'Prikaži predloge',
  countAnnouncement: (e, u) =>
    `Na voljo je ${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} opcija`, other: () => `${u.number(e.optionCount)} opcije` })}.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Vnesena skupina ${e.groupTitle}, z ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} opcija`, other: () => `${u.number(e.groupCount)} opcije` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', izbrano', other: '' }, e.isSelected)}`,
  listboxLabel: 'Predlogi',
  selectedAnnouncement: (e) => `${e.optionText}, izbrano`,
};
var hu = {};
hu = {
  buttonLabel: 'Prikaži predloge',
  countAnnouncement: (e, u) =>
    `Dostupno još: ${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} opcija`, other: () => `${u.number(e.optionCount)} opcije/a` })}.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Unesena grupa ${e.groupTitle}, s ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} opcijom`, other: () => `${u.number(e.groupCount)} optione/a` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', izabranih', other: '' }, e.isSelected)}`,
  listboxLabel: 'Predlozi',
  selectedAnnouncement: (e) => `${e.optionText}, izabrano`,
};
var fu = {};
fu = {
  buttonLabel: 'Visa förslag',
  countAnnouncement: (e, u) =>
    `${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} alternativ`, other: () => `${u.number(e.optionCount)} alternativ` })} tillgängliga.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Ingick i gruppen ${e.groupTitle} med ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} alternativ`, other: () => `${u.number(e.groupCount)} alternativ` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', valda', other: '' }, e.isSelected)}`,
  listboxLabel: 'Förslag',
  selectedAnnouncement: (e) => `${e.optionText}, valda`,
};
var vu = {};
vu = {
  buttonLabel: 'Önerileri göster',
  countAnnouncement: (e, u) =>
    `${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} seçenek`, other: () => `${u.number(e.optionCount)} seçenekler` })} kullanılabilir.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Girilen grup ${e.groupTitle}, ile ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} seçenek`, other: () => `${u.number(e.groupCount)} seçenekler` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', seçildi', other: '' }, e.isSelected)}`,
  listboxLabel: 'Öneriler',
  selectedAnnouncement: (e) => `${e.optionText}, seçildi`,
};
var Au = {};
Au = {
  buttonLabel: 'Показати пропозиції',
  countAnnouncement: (e, u) =>
    `${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} параметр`, other: () => `${u.number(e.optionCount)} параметри(-ів)` })} доступно.`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `Введена група ${e.groupTitle}, з ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} параметр`, other: () => `${u.number(e.groupCount)} параметри(-ів)` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', вибрано', other: '' }, e.isSelected)}`,
  listboxLabel: 'Пропозиції',
  selectedAnnouncement: (e) => `${e.optionText}, вибрано`,
};
var Bu = {};
Bu = {
  buttonLabel: '显示建议',
  countAnnouncement: (e, u) =>
    `有 ${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} 个选项`, other: () => `${u.number(e.optionCount)} 个选项` })}可用。`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `进入了 ${e.groupTitle} 组，其中有 ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} 个选项`, other: () => `${u.number(e.groupCount)} 个选项` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', 已选择', other: '' }, e.isSelected)}`,
  listboxLabel: '建议',
  selectedAnnouncement: (e) => `${e.optionText}, 已选择`,
};
var Eu = {};
Eu = {
  buttonLabel: '顯示建議',
  countAnnouncement: (e, u) =>
    `${u.plural(e.optionCount, { one: () => `${u.number(e.optionCount)} 選項`, other: () => `${u.number(e.optionCount)} 選項` })} 可用。`,
  focusAnnouncement: (e, u) =>
    `${u.select({ true: () => `輸入的群組 ${e.groupTitle}, 有 ${u.plural(e.groupCount, { one: () => `${u.number(e.groupCount)} 選項`, other: () => `${u.number(e.groupCount)} 選項` })}. `, other: '' }, e.isGroupChange)}${e.optionText}${u.select({ true: ', 已選取', other: '' }, e.isSelected)}`,
  listboxLabel: '建議',
  selectedAnnouncement: (e) => `${e.optionText}, 已選取`,
};
var Du = {};
Du = {
  'ar-AE': Ne,
  'bg-BG': We,
  'cs-CZ': Ue,
  'da-DK': He,
  'de-DE': Ye,
  'el-GR': Ze,
  'en-US': Xe,
  'es-ES': Je,
  'et-EE': _e,
  'fi-FI': Qe,
  'fr-FR': eu,
  'he-IL': uu,
  'hr-HR': nu,
  'hu-HU': ou,
  'it-IT': tu,
  'ja-JP': lu,
  'ko-KR': iu,
  'lt-LT': cu,
  'lv-LV': su,
  'nb-NO': pu,
  'nl-NL': ru,
  'pl-PL': au,
  'pt-BR': du,
  'pt-PT': $u,
  'ro-RO': bu,
  'ru-RU': Cu,
  'sk-SK': xu,
  'sl-SI': mu,
  'sr-SP': hu,
  'sv-SE': fu,
  'tr-TR': vu,
  'uk-UA': Au,
  'zh-CN': Bu,
  'zh-TW': Eu,
};
function In(e) {
  return e && e.__esModule ? e.default : e;
}
function kn(e, u) {
  let {
      buttonRef: s,
      popoverRef: b,
      inputRef: i,
      listBoxRef: p,
      keyboardDelegate: A,
      layoutDelegate: r,
      shouldFocusWrap: I,
      isReadOnly: T,
      isDisabled: G,
    } = e,
    x = en(In(Du), '@react-aria/combobox'),
    { menuTriggerProps: y, menuProps: v } = hn(
      { type: 'listbox', isDisabled: G || T },
      u,
      s
    );
  Yu.set(u, { id: v.id });
  let { collection: L } = u,
    { disabledKeys: h } = u.selectionManager,
    g = n.useMemo(
      () =>
        A ||
        new cn({ collection: L, disabledKeys: h, ref: p, layoutDelegate: r }),
      [A, r, L, h, p]
    ),
    { collectionProps: l } = sn({
      selectionManager: u.selectionManager,
      keyboardDelegate: g,
      disallowTypeAhead: !0,
      disallowEmptySelection: !0,
      shouldFocusWrap: I,
      ref: i,
      isVirtualized: !0,
    }),
    P = mn(),
    Q = (o) => {
      if (!o.nativeEvent.isComposing)
        switch (o.key) {
          case 'Enter':
          case 'Tab':
            if (
              (u.isOpen && o.key === 'Enter' && o.preventDefault(),
              u.isOpen &&
                u.selectionManager.focusedKey != null &&
                u.selectionManager.isLink(u.selectionManager.focusedKey))
            ) {
              if (o.key === 'Enter') {
                let c = p.current.querySelector(
                  `[data-key="${CSS.escape(u.selectionManager.focusedKey.toString())}"]`
                );
                if (c instanceof HTMLAnchorElement) {
                  let D = u.collection.getItem(u.selectionManager.focusedKey);
                  P.open(c, o, D.props.href, D.props.routerOptions);
                }
              }
              u.close();
            } else u.commit();
            break;
          case 'Escape':
            (u.selectedKey !== null ||
              u.inputValue === '' ||
              e.allowsCustomValue) &&
              o.continuePropagation(),
              u.revert();
            break;
          case 'ArrowDown':
            u.open('first', 'manual');
            break;
          case 'ArrowUp':
            u.open('last', 'manual');
            break;
          case 'ArrowLeft':
          case 'ArrowRight':
            u.selectionManager.setFocusedKey(null);
            break;
        }
    },
    ee = (o) => {
      var c;
      let D = (s == null ? void 0 : s.current) && s.current === o.relatedTarget,
        R =
          (c = b.current) === null || c === void 0
            ? void 0
            : c.contains(o.relatedTarget);
      D || R || (e.onBlur && e.onBlur(o), u.setFocused(!1));
    },
    K = (o) => {
      u.isFocused || (e.onFocus && e.onFocus(o), u.setFocused(!0));
    },
    {
      isInvalid: z,
      validationErrors: q,
      validationDetails: a,
    } = u.displayValidation,
    {
      labelProps: k,
      inputProps: F,
      descriptionProps: B,
      errorMessageProps: U,
    } = zu(
      {
        ...e,
        onChange: u.setInputValue,
        onKeyDown: T
          ? e.onKeyDown
          : Ru(u.isOpen && l.onKeyDown, Q, e.onKeyDown),
        onBlur: ee,
        value: u.inputValue,
        onFocus: K,
        autoComplete: 'off',
        validate: void 0,
        [wu]: u,
      },
      i
    ),
    ue = (o) => {
      o.pointerType === 'touch' &&
        (i.current.focus(), u.toggle(null, 'manual'));
    },
    j = (o) => {
      o.pointerType !== 'touch' &&
        (i.current.focus(),
        u.toggle(
          o.pointerType === 'keyboard' || o.pointerType === 'virtual'
            ? 'first'
            : null,
          'manual'
        ));
    },
    H = me({
      id: y.id,
      'aria-label': x.format('buttonLabel'),
      'aria-labelledby': e['aria-labelledby'] || k.id,
    }),
    d = me({
      id: v.id,
      'aria-label': x.format('listboxLabel'),
      'aria-labelledby': e['aria-labelledby'] || k.id,
    }),
    S = n.useRef(0),
    M = (o) => {
      if (G || T) return;
      if (o.timeStamp - S.current < 500) {
        o.preventDefault(), i.current.focus();
        return;
      }
      let c = o.target.getBoundingClientRect(),
        D = o.changedTouches[0],
        R = Math.ceil(c.left + 0.5 * c.width),
        oe = Math.ceil(c.top + 0.5 * c.height);
      D.clientX === R &&
        D.clientY === oe &&
        (o.preventDefault(),
        i.current.focus(),
        u.toggle(null, 'manual'),
        (S.current = o.timeStamp));
    },
    f =
      u.selectionManager.focusedKey != null && u.isOpen
        ? u.collection.getItem(u.selectionManager.focusedKey)
        : void 0;
  var N;
  let E =
    (N = f == null ? void 0 : f.parentKey) !== null && N !== void 0 ? N : null;
  var W;
  let O =
      (W = u.selectionManager.focusedKey) !== null && W !== void 0 ? W : null,
    Y = n.useRef(E),
    Z = n.useRef(O);
  n.useEffect(() => {
    if ($e() && f != null && O !== Z.current) {
      let o = u.selectionManager.isSelected(O),
        c = E != null ? u.collection.getItem(E) : null,
        D =
          (c == null ? void 0 : c['aria-label']) ||
          (typeof (c == null ? void 0 : c.rendered) == 'string'
            ? c.rendered
            : '') ||
          '',
        R = x.format('focusAnnouncement', {
          isGroupChange: c && E !== Y.current,
          groupTitle: D,
          groupCount: c ? [...Ge(c, u.collection)].length : 0,
          optionText: f['aria-label'] || f.textValue || '',
          isSelected: o,
        });
      de(R);
    }
    (Y.current = E), (Z.current = O);
  });
  let V = pn(u.collection),
    w = n.useRef(V),
    X = n.useRef(u.isOpen);
  n.useEffect(() => {
    let o =
      u.isOpen !== X.current && (u.selectionManager.focusedKey == null || $e());
    if (u.isOpen && (o || V !== w.current)) {
      let c = x.format('countAnnouncement', { optionCount: V });
      de(c);
    }
    (w.current = V), (X.current = u.isOpen);
  });
  let ne = n.useRef(u.selectedKey);
  return (
    n.useEffect(() => {
      if (
        $e() &&
        u.isFocused &&
        u.selectedItem &&
        u.selectedKey !== ne.current
      ) {
        let o = u.selectedItem['aria-label'] || u.selectedItem.textValue || '',
          c = x.format('selectedAnnouncement', { optionText: o });
        de(c);
      }
      ne.current = u.selectedKey;
    }),
    n.useEffect(() => {
      if (u.isOpen) return un([i.current, b.current]);
    }, [u.isOpen, i, b]),
    {
      labelProps: k,
      buttonProps: {
        ...y,
        ...H,
        excludeFromTabOrder: !0,
        preventFocusOnPress: !0,
        onPress: ue,
        onPressStart: j,
        isDisabled: G || T,
      },
      inputProps: Ce(F, {
        role: 'combobox',
        'aria-expanded': y['aria-expanded'],
        'aria-controls': u.isOpen ? v.id : void 0,
        'aria-autocomplete': 'list',
        'aria-activedescendant': f ? Zu(u, f.key) : void 0,
        onTouchEnd: M,
        autoCorrect: 'off',
        spellCheck: 'false',
      }),
      listBoxProps: Ce(v, d, {
        autoFocus: u.focusStrategy,
        shouldUseVirtualFocus: !0,
        shouldSelectOnPressUp: !0,
        shouldFocusOnHover: !0,
        linkBehavior: 'selection',
      }),
      descriptionProps: B,
      errorMessageProps: U,
      isInvalid: z,
      validationErrors: q,
      validationDetails: a,
    }
  );
}
const On = n.createContext({}),
  Pn = n.createContext(null),
  Kn = n.createContext(null);
function jn(e, u) {
  [e, u] = Iu(e, u, Pn);
  let {
      children: s,
      isDisabled: b = !1,
      isInvalid: i = !1,
      isRequired: p = !1,
    } = e,
    A = n.useMemo(() => {
      var r;
      return J.createElement(
        we.Provider,
        {
          value: {
            items: (r = e.items) !== null && r !== void 0 ? r : e.defaultItems,
          },
        },
        typeof s == 'function'
          ? s({
              isOpen: !1,
              isDisabled: b,
              isInvalid: i,
              isRequired: p,
              defaultChildren: null,
            })
          : s
      );
    }, [s, b, i, p, e.items, e.defaultItems]);
  return J.createElement(rn, { content: A }, (r) =>
    J.createElement(Mn, { props: e, collection: r, comboBoxRef: u })
  );
}
function Mn({ props: e, collection: u, comboBoxRef: s }) {
  let { name: b, formValue: i = 'key', allowsCustomValue: p } = e;
  p && (i = 'text');
  let { validationBehavior: A } = ku(Gu) || {};
  var r, I;
  let T =
      (I = (r = e.validationBehavior) !== null && r !== void 0 ? r : A) !==
        null && I !== void 0
        ? I
        : 'native',
    { contains: G } = Cn({ sensitivity: 'base' }),
    x = Ln({
      defaultFilter: e.defaultFilter || G,
      ...e,
      items: e.items,
      children: void 0,
      collection: u,
      validationBehavior: T,
    }),
    y = n.useRef(null),
    v = n.useRef(null),
    L = n.useRef(null),
    h = n.useRef(null),
    [g, l] = Ou(),
    {
      buttonProps: P,
      inputProps: Q,
      listBoxProps: ee,
      labelProps: K,
      descriptionProps: z,
      errorMessageProps: q,
      ...a
    } = kn(
      {
        ...Pu(e),
        label: l,
        inputRef: v,
        buttonRef: y,
        listBoxRef: L,
        popoverRef: h,
        name: i === 'text' ? b : void 0,
        validationBehavior: T,
      },
      x
    ),
    [k, F] = n.useState(null),
    B = n.useCallback(() => {
      if (v.current) {
        var d;
        let S =
            (d = y.current) === null || d === void 0
              ? void 0
              : d.getBoundingClientRect(),
          M = v.current.getBoundingClientRect(),
          f = S ? Math.min(S.left, M.left) : M.left,
          N = S ? Math.max(S.right, M.right) : M.right;
        F(N - f + 'px');
      }
    }, [y, v, F]);
  bn({ ref: v, onResize: B });
  let U = n.useMemo(
      () => ({
        isOpen: x.isOpen,
        isDisabled: e.isDisabled || !1,
        isInvalid: a.isInvalid || !1,
        isRequired: e.isRequired || !1,
      }),
      [x.isOpen, e.isDisabled, a.isInvalid, e.isRequired]
    ),
    ue = Ku({ ...e, values: U, defaultClassName: 'react-aria-ComboBox' }),
    j = dn(e);
  delete j.id;
  var H;
  return J.createElement(
    ju,
    {
      values: [
        [Kn, x],
        [Wu, { ...K, ref: g }],
        [Su, { ...P, ref: y, isPressed: x.isOpen }],
        [qu, { ...Q, ref: v }],
        [nn, x],
        [
          on,
          {
            ref: h,
            triggerRef: v,
            scrollRef: L,
            placement: 'bottom start',
            isNonModal: !0,
            trigger: 'ComboBox',
            style: { '--trigger-width': k },
          },
        ],
        [we, { ...ee, ref: L }],
        [Xu, x],
        [ln, { slots: { description: z, errorMessage: q } }],
        [On, { isInvalid: a.isInvalid, isDisabled: e.isDisabled || !1 }],
        [Mu, a],
      ],
    },
    J.createElement('div', {
      ...j,
      ...ue,
      ref: s,
      slot: e.slot || void 0,
      'data-focused': x.isFocused || void 0,
      'data-open': x.isOpen || void 0,
      'data-disabled': e.isDisabled || void 0,
      'data-invalid': a.isInvalid || void 0,
      'data-required': e.isRequired || void 0,
    }),
    b &&
      i === 'key' &&
      J.createElement('input', {
        type: 'hidden',
        name: b,
        value: (H = x.selectedKey) !== null && H !== void 0 ? H : '',
      })
  );
}
const Vn = n.forwardRef(jn),
  ae = n.forwardRef(
    (
      {
        label: e,
        description: u,
        errorMessage: s,
        placeholder: b,
        icon: i,
        ...p
      },
      A
    ) =>
      m.jsxs(Vn, {
        ...p,
        ref: A,
        isInvalid: !!s,
        className: he(gn, p.className),
        children: [
          m.jsx(Uu, {
            className: vn,
            'data-required': p.isRequired,
            children: e,
          }),
          m.jsxs(wn, {
            children: [
              !!i &&
                m.jsx(xe, {
                  name: i,
                  size: 20,
                  color: 'neutral1',
                  className: An,
                }),
              m.jsx(Nu, {
                placeholder: b,
                className: he(Bn, fn({ paddingRight: '$large' })),
              }),
              m.jsx(Gn, {
                children: m.jsx(xe, {
                  name: 'arrowDropDown',
                  size: 24,
                  color: 'text',
                }),
              }),
            ],
          }),
          u && m.jsx(En, { children: u }),
          s && m.jsx(Dn, { children: s }),
          m.jsx(tn, {
            children: m.jsx(Ju, {
              className: yn,
              children: (r) =>
                m.jsx(_u, {
                  id: r.value,
                  textValue: r.label,
                  className: Tn,
                  children: m.jsx(Qu, {
                    label: r.label,
                    description: r.description,
                  }),
                }),
            }),
          }),
        ],
      })
  ),
  wn = ze('div', {
    base: { position: 'relative', '& > svg + input': { paddingLeft: '$xl' } },
  }),
  Gn = ze(Lu, {
    base: {
      position: 'absolute',
      height: '100%',
      top: '0px',
      right: '0px',
      paddingRight: '$small',
      paddingLeft: '$small',
      display: 'flex',
      alignItems: 'center',
    },
  });
ae.displayName = 'ComboBox';
ae.__docgenInfo = {
  description:
    'The `value`s of each option MUST be unique, otherwise render bugs will occur.\nRef: https://react-spectrum.adobe.com/react-aria/ComboBox.html',
  methods: [],
  displayName: 'ComboBox',
  props: {
    label: { required: !0, tsType: { name: 'string' }, description: '' },
    description: { required: !1, tsType: { name: 'string' }, description: '' },
    errorMessage: { required: !1, tsType: { name: 'string' }, description: '' },
    placeholder: { required: !1, tsType: { name: 'string' }, description: '' },
    icon: {
      required: !1,
      tsType: { name: 'unknown[number]', raw: '(typeof ids)[number]' },
      description: '',
    },
  },
};
const ho = {
    title: 'ComboBox',
    component: ae,
    decorators: [
      (e) =>
        m.jsx('div', { style: { maxWidth: '300px' }, children: m.jsx(e, {}) }),
    ],
  },
  _ = [
    { label: 'Cat', value: '1' },
    { label: 'Dog', value: '2' },
    { label: 'Horse', value: '3', description: 'Very special!' },
    { label: 'Cow', value: '4' },
    { label: 'Horseradish', value: '5' },
  ],
  te = { args: { defaultItems: _, label: 'Regular combobox' } },
  le = {
    args: { defaultItems: _, label: 'Disabled combobox', isDisabled: !0 },
  },
  ie = {
    args: { defaultItems: _, label: 'Required combobox', isRequired: !0 },
  },
  ce = { args: { defaultItems: _, label: 'With icon', icon: 'cloud' } },
  se = {
    args: {
      defaultItems: _,
      label: 'Descriptions also',
      description: 'You should pick the third one',
    },
  },
  pe = {
    args: {
      defaultItems: _,
      label: 'Some invalid choice',
      errorMessage: 'This is really bad',
    },
  },
  re = { render: (e) => m.jsx(zn, { ...e }) },
  zn = () => {
    const e = Fn({
      async load({ signal: u, filterText: s }) {
        return { items: await Sn({ filterText: s, signal: u }) };
      },
    });
    return m.jsx(ae, {
      label: 'Async options',
      icon: 'apps',
      items: e.items,
      inputValue: e.filterText,
      onInputChange: e.setFilterText,
    });
  };
var fe, ve, Ae;
te.parameters = {
  ...te.parameters,
  docs: {
    ...((fe = te.parameters) == null ? void 0 : fe.docs),
    source: {
      originalSource: `{
  args: {
    defaultItems: options,
    label: 'Regular combobox'
  }
}`,
      ...((Ae = (ve = te.parameters) == null ? void 0 : ve.docs) == null
        ? void 0
        : Ae.source),
    },
  },
};
var Be, Ee, De;
le.parameters = {
  ...le.parameters,
  docs: {
    ...((Be = le.parameters) == null ? void 0 : Be.docs),
    source: {
      originalSource: `{
  args: {
    defaultItems: options,
    label: 'Disabled combobox',
    isDisabled: true
  }
}`,
      ...((De = (Ee = le.parameters) == null ? void 0 : Ee.docs) == null
        ? void 0
        : De.source),
    },
  },
};
var Te, ye, ge;
ie.parameters = {
  ...ie.parameters,
  docs: {
    ...((Te = ie.parameters) == null ? void 0 : Te.docs),
    source: {
      originalSource: `{
  args: {
    defaultItems: options,
    label: 'Required combobox',
    isRequired: true
  }
}`,
      ...((ge = (ye = ie.parameters) == null ? void 0 : ye.docs) == null
        ? void 0
        : ge.source),
    },
  },
};
var Fe, Se, Le;
ce.parameters = {
  ...ce.parameters,
  docs: {
    ...((Fe = ce.parameters) == null ? void 0 : Fe.docs),
    source: {
      originalSource: `{
  args: {
    defaultItems: options,
    label: 'With icon',
    icon: 'cloud'
  }
}`,
      ...((Le = (Se = ce.parameters) == null ? void 0 : Se.docs) == null
        ? void 0
        : Le.source),
    },
  },
};
var Re, Ie, ke;
se.parameters = {
  ...se.parameters,
  docs: {
    ...((Re = se.parameters) == null ? void 0 : Re.docs),
    source: {
      originalSource: `{
  args: {
    defaultItems: options,
    label: 'Descriptions also',
    description: 'You should pick the third one'
  }
}`,
      ...((ke = (Ie = se.parameters) == null ? void 0 : Ie.docs) == null
        ? void 0
        : ke.source),
    },
  },
};
var Oe, Pe, Ke;
pe.parameters = {
  ...pe.parameters,
  docs: {
    ...((Oe = pe.parameters) == null ? void 0 : Oe.docs),
    source: {
      originalSource: `{
  args: {
    defaultItems: options,
    label: 'Some invalid choice',
    errorMessage: 'This is really bad'
  }
}`,
      ...((Ke = (Pe = pe.parameters) == null ? void 0 : Pe.docs) == null
        ? void 0
        : Ke.source),
    },
  },
};
var je, Me, Ve;
re.parameters = {
  ...re.parameters,
  docs: {
    ...((je = re.parameters) == null ? void 0 : je.docs),
    source: {
      originalSource: `{
  render: args => <AsyncOptionsStory {...args} />
}`,
      ...((Ve = (Me = re.parameters) == null ? void 0 : Me.docs) == null
        ? void 0
        : Ve.source),
    },
  },
};
const fo = [
  'Regular',
  'Disabled',
  'Required',
  'WithIcon',
  'WithDescription',
  'WithErrorMessage',
  'AsyncOptions',
];
export {
  re as AsyncOptions,
  le as Disabled,
  te as Regular,
  ie as Required,
  se as WithDescription,
  pe as WithErrorMessage,
  ce as WithIcon,
  fo as __namedExportsOrder,
  ho as default,
};
