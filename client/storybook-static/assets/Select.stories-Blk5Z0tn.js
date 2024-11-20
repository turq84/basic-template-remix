import { j as p } from './jsx-runtime-CkxqCPlQ.js';
import { r as n, R as $ } from './index-DJO9vBfz.js';
import { b as Ye, $ as Je } from './Button-CoD-b_IN.js';
import { a as Qe, $ as Xe } from './Label-Dp0AxpCw.js';
import {
  f as ea,
  g as aa,
  a as ra,
  b as la,
  S as ta,
} from './SelectItem-BIfOg3rJ.js';
import { c as oa, k as sa, q as ia, a as ua } from './Dialog-BVyDrX3O.js';
import {
  a as T,
  $ as ca,
  j as na,
  c as ue,
  e as ce,
  f as da,
  g as ba,
  d as ne,
  h as pa,
} from './utils-BgHHH9V7.js';
import { a as fa, $ as $a } from './FieldError-DNxovmhL.js';
import { a as ma, b as va, c as ha, $ as xa } from './Form-D4JdquZw.js';
import { $ as de } from './index-CxY2JlPL.js';
import { $ as Pa, h as ga, v as Da, l as Sa } from './Separator-p0-S5q3W.js';
import { b as q, g as ya, z as Ra, e as za, I as M } from './index-BqgWbNE6.js';
import { a as Ba, e as ka } from './OverlayArrow-DliHpoDG.js';
import { $ as Ca } from './useSingleSelectListState-CuGD3mzW.js';
import { $ as Ea } from './useMenuTrigger-DcMVX-dm.js';
import { c as Fa } from './VisuallyHidden-BiYBAiUW.js';
import { a as K, c as j } from './index-DdgtEVhA.js';
import {
  l as wa,
  i as Aa,
  a as Ia,
  b as La,
  D as Ka,
  E as ja,
  c as qa,
  d as Za,
  e as Va,
} from './common-CFf48SXD.js';
import './Hidden-2-bsQ4Y9.js';
import './index-DJdX7xnk.js';
import './useButton-DZEnpN8J.js';
import './usePress-BFY2e0Rh.js';
import './useLabels-D003iZWB.js';
import './index-CbVkzzMr.js';
function _a(e) {
  let a = Ba(e),
    [t, o] = n.useState(null),
    l = Ca({
      ...e,
      onSelectionChange: (c) => {
        e.onSelectionChange != null && e.onSelectionChange(c),
          a.close(),
          i.commitValidation();
      },
    }),
    i = ma({ ...e, value: l.selectedKey }),
    [s, r] = n.useState(!1);
  return {
    ...i,
    ...l,
    ...a,
    focusStrategy: t,
    open(c = null) {
      l.collection.size !== 0 && (o(c), a.open());
    },
    toggle(c = null) {
      l.collection.size !== 0 && (o(c), a.toggle());
    },
    isFocused: s,
    setFocused: r,
  };
}
const be = new WeakMap();
function Ta(e, a, t) {
  let {
      keyboardDelegate: o,
      isDisabled: l,
      isRequired: i,
      name: s,
      validationBehavior: r = 'aria',
    } = e,
    c = Pa({ usage: 'search', sensitivity: 'base' }),
    d = n.useMemo(
      () => o || new ga(a.collection, a.disabledKeys, null, c),
      [o, a.collection, a.disabledKeys, c]
    ),
    { menuTriggerProps: u, menuProps: m } = Ea(
      { isDisabled: l, type: 'listbox' },
      a,
      t
    ),
    f = (b) => {
      switch (b.key) {
        case 'ArrowLeft': {
          b.preventDefault();
          let x =
            a.selectedKey != null
              ? d.getKeyAbove(a.selectedKey)
              : d.getFirstKey();
          x && a.setSelectedKey(x);
          break;
        }
        case 'ArrowRight': {
          b.preventDefault();
          let x =
            a.selectedKey != null
              ? d.getKeyBelow(a.selectedKey)
              : d.getFirstKey();
          x && a.setSelectedKey(x);
          break;
        }
      }
    },
    { typeSelectProps: h } = Da({
      keyboardDelegate: d,
      selectionManager: a.selectionManager,
      onTypeSelect(b) {
        a.setSelectedKey(b);
      },
    }),
    {
      isInvalid: D,
      validationErrors: y,
      validationDetails: w,
    } = a.displayValidation,
    {
      labelProps: A,
      fieldProps: S,
      descriptionProps: P,
      errorMessageProps: I,
    } = fa({
      ...e,
      labelElementType: 'span',
      isInvalid: D,
      errorMessage: e.errorMessage || y,
    });
  (h.onKeyDown = h.onKeyDownCapture), delete h.onKeyDownCapture;
  let L = q(e, { labelable: !0 }),
    v = T(h, u, S),
    R = ca();
  return (
    be.set(a, { isDisabled: l, isRequired: i, name: s, validationBehavior: r }),
    {
      labelProps: {
        ...A,
        onClick: () => {
          e.isDisabled || (t.current.focus(), ya('keyboard'));
        },
      },
      triggerProps: T(L, {
        ...v,
        isDisabled: l,
        onKeyDown: na(v.onKeyDown, f, e.onKeyDown),
        onKeyUp: e.onKeyUp,
        'aria-labelledby': [
          R,
          v['aria-labelledby'],
          v['aria-label'] && !v['aria-labelledby'] ? v.id : null,
        ]
          .filter(Boolean)
          .join(' '),
        onFocus(b) {
          a.isFocused ||
            (e.onFocus && e.onFocus(b),
            e.onFocusChange && e.onFocusChange(!0),
            a.setFocused(!0));
        },
        onBlur(b) {
          a.isOpen ||
            (e.onBlur && e.onBlur(b),
            e.onFocusChange && e.onFocusChange(!1),
            a.setFocused(!1));
        },
      }),
      valueProps: { id: R },
      menuProps: {
        ...m,
        autoFocus: a.focusStrategy || !0,
        shouldSelectOnPressUp: !0,
        shouldFocusOnHover: !0,
        disallowEmptySelection: !0,
        linkBehavior: 'selection',
        onBlur: (b) => {
          b.currentTarget.contains(b.relatedTarget) ||
            (e.onBlur && e.onBlur(b),
            e.onFocusChange && e.onFocusChange(!1),
            a.setFocused(!1));
        },
        'aria-labelledby': [
          S['aria-labelledby'],
          v['aria-label'] && !S['aria-labelledby'] ? v.id : null,
        ]
          .filter(Boolean)
          .join(' '),
      },
      descriptionProps: P,
      errorMessageProps: I,
      isInvalid: D,
      validationErrors: y,
      validationDetails: w,
    }
  );
}
function Ma(e, a, t) {
  let o = be.get(a) || {},
    { autoComplete: l, name: i = o.name, isDisabled: s = o.isDisabled } = e,
    { validationBehavior: r, isRequired: c } = o,
    d = Ra(),
    { visuallyHiddenProps: u } = Fa();
  va(e.selectRef, a.selectedKey, a.setSelectedKey),
    ha(
      { validationBehavior: r, focus: () => t.current.focus() },
      a,
      e.selectRef
    );
  var m;
  return {
    containerProps: {
      ...u,
      'aria-hidden': !0,
      'data-react-aria-prevent-focus': !0,
      'data-a11y-ignore': 'aria-hidden-focus',
    },
    inputProps: {
      type: 'text',
      tabIndex: d == null || a.isFocused || a.isOpen ? -1 : 0,
      style: { fontSize: 16 },
      onFocus: () => t.current.focus(),
      disabled: s,
    },
    selectProps: {
      tabIndex: -1,
      autoComplete: l,
      disabled: s,
      required: r === 'native' && c,
      name: i,
      value: (m = a.selectedKey) !== null && m !== void 0 ? m : '',
      onChange: (f) => a.setSelectedKey(f.target.value),
    },
  };
}
function Oa(e) {
  let { state: a, triggerRef: t, label: o, name: l, isDisabled: i } = e,
    s = n.useRef(null),
    {
      containerProps: r,
      inputProps: c,
      selectProps: d,
    } = Ma({ ...e, selectRef: s }, a, t);
  var u;
  return a.collection.size <= 300
    ? $.createElement(
        'div',
        { ...r, 'data-testid': 'hidden-select-container' },
        $.createElement('input', c),
        $.createElement(
          'label',
          null,
          o,
          $.createElement(
            'select',
            { ...d, ref: s },
            $.createElement('option', null),
            [...a.collection.getKeys()].map((m) => {
              let f = a.collection.getItem(m);
              if (f.type === 'item')
                return $.createElement(
                  'option',
                  { key: f.key, value: f.key },
                  f.textValue
                );
            })
          )
        )
      )
    : l
      ? $.createElement('input', {
          type: 'hidden',
          autoComplete: d.autoComplete,
          name: l,
          disabled: i,
          value: (u = a.selectedKey) !== null && u !== void 0 ? u : '',
        })
      : null;
}
var pe = {};
pe = {
  colorSwatchPicker: 'تغييرات الألوان',
  dropzoneLabel: 'DropZone',
  selectPlaceholder: 'حدد عنصرًا',
  tableResizer: 'أداة تغيير الحجم',
};
var fe = {};
fe = {
  colorSwatchPicker: 'Цветови мостри',
  dropzoneLabel: 'DropZone',
  selectPlaceholder: 'Изберете предмет',
  tableResizer: 'Преоразмерител',
};
var $e = {};
$e = {
  colorSwatchPicker: 'Vzorky barev',
  dropzoneLabel: 'Místo pro přetažení',
  selectPlaceholder: 'Vyberte položku',
  tableResizer: 'Změna velikosti',
};
var me = {};
me = {
  colorSwatchPicker: 'Farveprøver',
  dropzoneLabel: 'DropZone',
  selectPlaceholder: 'Vælg et element',
  tableResizer: 'Størrelsesændring',
};
var ve = {};
ve = {
  colorSwatchPicker: 'Farbfelder',
  dropzoneLabel: 'Ablegebereich',
  selectPlaceholder: 'Element wählen',
  tableResizer: 'Größenanpassung',
};
var he = {};
he = {
  colorSwatchPicker: 'Χρωματικά δείγματα',
  dropzoneLabel: 'DropZone',
  selectPlaceholder: 'Επιλέξτε ένα αντικείμενο',
  tableResizer: 'Αλλαγή μεγέθους',
};
var xe = {};
xe = {
  selectPlaceholder: 'Select an item',
  tableResizer: 'Resizer',
  dropzoneLabel: 'DropZone',
  colorSwatchPicker: 'Color swatches',
};
var Pe = {};
Pe = {
  colorSwatchPicker: 'Muestras de colores',
  dropzoneLabel: 'DropZone',
  selectPlaceholder: 'Seleccionar un artículo',
  tableResizer: 'Cambiador de tamaño',
};
var ge = {};
ge = {
  colorSwatchPicker: 'Värvinäidised',
  dropzoneLabel: 'DropZone',
  selectPlaceholder: 'Valige üksus',
  tableResizer: 'Suuruse muutja',
};
var De = {};
De = {
  colorSwatchPicker: 'Värimallit',
  dropzoneLabel: 'DropZone',
  selectPlaceholder: 'Valitse kohde',
  tableResizer: 'Koon muuttaja',
};
var Se = {};
Se = {
  colorSwatchPicker: 'Échantillons de couleurs',
  dropzoneLabel: 'DropZone',
  selectPlaceholder: 'Sélectionner un élément',
  tableResizer: 'Redimensionneur',
};
var ye = {};
ye = {
  colorSwatchPicker: 'דוגמיות צבע',
  dropzoneLabel: 'DropZone',
  selectPlaceholder: 'בחר פריט',
  tableResizer: 'שינוי גודל',
};
var Re = {};
Re = {
  colorSwatchPicker: 'Uzorci boja',
  dropzoneLabel: 'Zona spuštanja',
  selectPlaceholder: 'Odaberite stavku',
  tableResizer: 'Promjena veličine',
};
var ze = {};
ze = {
  colorSwatchPicker: 'Színtárak',
  dropzoneLabel: 'DropZone',
  selectPlaceholder: 'Válasszon ki egy elemet',
  tableResizer: 'Átméretező',
};
var Be = {};
Be = {
  colorSwatchPicker: 'Campioni di colore',
  dropzoneLabel: 'Zona di rilascio',
  selectPlaceholder: 'Seleziona un elemento',
  tableResizer: 'Ridimensionamento',
};
var ke = {};
ke = {
  colorSwatchPicker: 'カラースウォッチ',
  dropzoneLabel: 'ドロップゾーン',
  selectPlaceholder: '項目を選択',
  tableResizer: 'サイズ変更ツール',
};
var Ce = {};
Ce = {
  colorSwatchPicker: '색상 견본',
  dropzoneLabel: '드롭 영역',
  selectPlaceholder: '항목 선택',
  tableResizer: '크기 조정기',
};
var Ee = {};
Ee = {
  colorSwatchPicker: 'Spalvų pavyzdžiai',
  dropzoneLabel: '„DropZone“',
  selectPlaceholder: 'Pasirinkite elementą',
  tableResizer: 'Dydžio keitiklis',
};
var Fe = {};
Fe = {
  colorSwatchPicker: 'Krāsu paraugi',
  dropzoneLabel: 'DropZone',
  selectPlaceholder: 'Izvēlēties vienumu',
  tableResizer: 'Izmēra mainītājs',
};
var we = {};
we = {
  colorSwatchPicker: 'Fargekart',
  dropzoneLabel: 'Droppsone',
  selectPlaceholder: 'Velg et element',
  tableResizer: 'Størrelsesendrer',
};
var Ae = {};
Ae = {
  colorSwatchPicker: 'kleurstalen',
  dropzoneLabel: 'DropZone',
  selectPlaceholder: 'Selecteer een item',
  tableResizer: 'Resizer',
};
var Ie = {};
Ie = {
  colorSwatchPicker: 'Próbki kolorów',
  dropzoneLabel: 'Strefa upuszczania',
  selectPlaceholder: 'Wybierz element',
  tableResizer: 'Zmiana rozmiaru',
};
var Le = {};
Le = {
  colorSwatchPicker: 'Amostras de cores',
  dropzoneLabel: 'DropZone',
  selectPlaceholder: 'Selecione um item',
  tableResizer: 'Redimensionador',
};
var Ke = {};
Ke = {
  colorSwatchPicker: 'Amostras de cores',
  dropzoneLabel: 'DropZone',
  selectPlaceholder: 'Selecione um item',
  tableResizer: 'Redimensionador',
};
var je = {};
je = {
  colorSwatchPicker: 'Specimene de culoare',
  dropzoneLabel: 'Zonă de plasare',
  selectPlaceholder: 'Selectați un element',
  tableResizer: 'Instrument de redimensionare',
};
var qe = {};
qe = {
  colorSwatchPicker: 'Цветовые образцы',
  dropzoneLabel: 'DropZone',
  selectPlaceholder: 'Выберите элемент',
  tableResizer: 'Средство изменения размера',
};
var Ze = {};
Ze = {
  colorSwatchPicker: 'Vzorkovníky farieb',
  dropzoneLabel: 'DropZone',
  selectPlaceholder: 'Vyberte položku',
  tableResizer: 'Nástroj na zmenu veľkosti',
};
var Ve = {};
Ve = {
  colorSwatchPicker: 'Barvne palete',
  dropzoneLabel: 'DropZone',
  selectPlaceholder: 'Izberite element',
  tableResizer: 'Spreminjanje velikosti',
};
var _e = {};
_e = {
  colorSwatchPicker: 'Uzorci boje',
  dropzoneLabel: 'DropZone',
  selectPlaceholder: 'Izaberite stavku',
  tableResizer: 'Promena veličine',
};
var Te = {};
Te = {
  colorSwatchPicker: 'Färgrutor',
  dropzoneLabel: 'DropZone',
  selectPlaceholder: 'Välj en artikel',
  tableResizer: 'Storleksändrare',
};
var Me = {};
Me = {
  colorSwatchPicker: 'Renk örnekleri',
  dropzoneLabel: 'Bırakma Bölgesi',
  selectPlaceholder: 'Bir öğe seçin',
  tableResizer: 'Yeniden boyutlandırıcı',
};
var Oe = {};
Oe = {
  colorSwatchPicker: 'Зразки кольорів',
  dropzoneLabel: 'DropZone',
  selectPlaceholder: 'Виберіть елемент',
  tableResizer: 'Засіб змінення розміру',
};
var Ne = {};
Ne = {
  colorSwatchPicker: '颜色色板',
  dropzoneLabel: '放置区域',
  selectPlaceholder: '选择一个项目',
  tableResizer: '尺寸调整器',
};
var We = {};
We = {
  colorSwatchPicker: '色票',
  dropzoneLabel: '放置區',
  selectPlaceholder: '選取項目',
  tableResizer: '大小調整器',
};
var Ue = {};
Ue = {
  'ar-AE': pe,
  'bg-BG': fe,
  'cs-CZ': $e,
  'da-DK': me,
  'de-DE': ve,
  'el-GR': he,
  'en-US': xe,
  'es-ES': Pe,
  'et-EE': ge,
  'fi-FI': De,
  'fr-FR': Se,
  'he-IL': ye,
  'hr-HR': Re,
  'hu-HU': ze,
  'it-IT': Be,
  'ja-JP': ke,
  'ko-KR': Ce,
  'lt-LT': Ee,
  'lv-LV': Fe,
  'nb-NO': we,
  'nl-NL': Ae,
  'pl-PL': Ie,
  'pt-BR': Le,
  'pt-PT': Ke,
  'ro-RO': je,
  'ru-RU': qe,
  'sk-SK': Ze,
  'sl-SI': Ve,
  'sr-SP': _e,
  'sv-SE': Te,
  'tr-TR': Me,
  'uk-UA': Oe,
  'zh-CN': Ne,
  'zh-TW': We,
};
function Na(e) {
  return e && e.__esModule ? e.default : e;
}
const Z = n.createContext(null),
  He = n.createContext(null);
function Wa(e, a) {
  [e, a] = ue(e, a, Z);
  let {
      children: t,
      isDisabled: o = !1,
      isInvalid: l = !1,
      isRequired: i = !1,
    } = e,
    s = n.useMemo(
      () =>
        typeof t == 'function'
          ? t({
              isOpen: !1,
              isDisabled: o,
              isInvalid: l,
              isRequired: i,
              isFocused: !1,
              isFocusVisible: !1,
              defaultChildren: null,
            })
          : t,
      [t, o, l, i]
    );
  return $.createElement(Sa, { content: s }, (r) =>
    $.createElement(Ua, { props: e, collection: r, selectRef: a })
  );
}
function Ua({ props: e, selectRef: a, collection: t }) {
  let { validationBehavior: o } = ce(xa) || {};
  var l, i;
  let s =
      (i = (l = e.validationBehavior) !== null && l !== void 0 ? l : o) !==
        null && i !== void 0
        ? i
        : 'native',
    r = _a({ ...e, collection: t, children: void 0, validationBehavior: s }),
    { isFocusVisible: c, focusProps: d } = za({ within: !0 }),
    u = n.useRef(null),
    [m, f] = da(),
    {
      labelProps: h,
      triggerProps: D,
      valueProps: y,
      menuProps: w,
      descriptionProps: A,
      errorMessageProps: S,
      ...P
    } = Ta({ ...ba(e), label: f, validationBehavior: s }, r, u),
    [I, L] = n.useState(null),
    v = n.useCallback(() => {
      u.current && L(u.current.offsetWidth + 'px');
    }, [u]);
  ka({ ref: u, onResize: v });
  let R = n.useMemo(
      () => ({
        isOpen: r.isOpen,
        isFocused: r.isFocused,
        isFocusVisible: c,
        isDisabled: e.isDisabled || !1,
        isInvalid: P.isInvalid || !1,
        isRequired: e.isRequired || !1,
      }),
      [r.isOpen, r.isFocused, c, e.isDisabled, P.isInvalid, e.isRequired]
    ),
    b = ne({ ...e, values: R, defaultClassName: 'react-aria-Select' }),
    x = q(e);
  delete x.id;
  let _ = n.useRef(null);
  return $.createElement(
    pa,
    {
      values: [
        [Z, e],
        [He, r],
        [Ge, y],
        [Qe, { ...h, ref: m, elementType: 'span' }],
        [Ye, { ...D, ref: u, isPressed: r.isOpen }],
        [oa, r],
        [
          sa,
          {
            trigger: 'Select',
            triggerRef: u,
            scrollRef: _,
            placement: 'bottom start',
            style: { '--trigger-width': I },
          },
        ],
        [ea, { ...w, ref: _ }],
        [aa, r],
        [de, { slots: { description: A, errorMessage: S } }],
        [$a, P],
      ],
    },
    $.createElement('div', {
      ...x,
      ...b,
      ...d,
      ref: a,
      slot: e.slot || void 0,
      'data-focused': r.isFocused || void 0,
      'data-focus-visible': c || void 0,
      'data-open': r.isOpen || void 0,
      'data-disabled': e.isDisabled || void 0,
      'data-invalid': P.isInvalid || void 0,
      'data-required': e.isRequired || void 0,
    }),
    $.createElement(Oa, {
      state: r,
      triggerRef: u,
      label: f,
      name: e.name,
      isDisabled: e.isDisabled,
    })
  );
}
const Ha = n.forwardRef(Wa),
  Ge = n.createContext(null);
function Ga(e, a) {
  var t, o;
  [e, a] = ue(e, a, Ge);
  let l = n.useContext(He),
    { placeholder: i } = ce(Z),
    s = l.selectedKey != null ? l.collection.getItem(l.selectedKey) : null,
    r = s == null ? void 0 : s.props.children;
  typeof r == 'function' &&
    (r = r({
      isHovered: !1,
      isPressed: !1,
      isSelected: !1,
      isFocused: !1,
      isFocusVisible: !1,
      isDisabled: !1,
      selectionMode: 'single',
      selectionBehavior: 'toggle',
    }));
  let c = ia(Na(Ue), 'react-aria-components');
  var d, u, m;
  let f = ne({
      ...e,
      defaultChildren:
        (d = r ?? i) !== null && d !== void 0
          ? d
          : c.format('selectPlaceholder'),
      defaultClassName: 'react-aria-SelectValue',
      values: {
        selectedItem:
          (u =
            (t = l.selectedItem) === null || t === void 0
              ? void 0
              : t.value) !== null && u !== void 0
            ? u
            : null,
        selectedText:
          (m =
            (o = l.selectedItem) === null || o === void 0
              ? void 0
              : o.textValue) !== null && m !== void 0
            ? m
            : null,
        isPlaceholder: !s,
      },
    }),
    h = q(e);
  return $.createElement(
    'span',
    { ref: a, ...h, ...f, 'data-placeholder': !s || void 0 },
    $.createElement(de.Provider, { value: void 0 }, f.children)
  );
}
const Ya = n.forwardRef(Ga),
  V = n.forwardRef(
    (
      { label: e, description: a, errorMessage: t, icon: o, items: l, ...i },
      s
    ) =>
      p.jsxs(Ha, {
        ...i,
        ref: s,
        isInvalid: !!t,
        className: K(Va, i.className),
        children: [
          p.jsx(Xe, {
            className: wa,
            'data-required': i.isRequired,
            children: e,
          }),
          p.jsxs('div', {
            className: j({ position: 'relative' }),
            children: [
              !!o &&
                p.jsx(M, {
                  name: o,
                  size: 20,
                  color: 'neutral1',
                  className: Aa,
                }),
              p.jsx(Je, {
                'data-invalid': !!t,
                'data-has-icon': !!o,
                className: K(
                  Ia,
                  j({
                    paddingRight: '$xl!',
                    '&[data-has-icon="true"]': { paddingLeft: '$xl' },
                    '& > *[data-placeholder]': { color: '$textMuted' },
                  })
                ),
                children: p.jsx(Ya, {}),
              }),
              p.jsx(M, {
                name: 'arrowDropDown',
                size: 24,
                color: 'text',
                className: K(La, j({ right: '$xs!' })),
              }),
            ],
          }),
          a && p.jsx(Ka, { children: a }),
          !!t && p.jsx(ja, { children: t }),
          p.jsx(ua, {
            offset: 4,
            children: p.jsx(ra, {
              className: Za,
              items: l,
              children: (r) =>
                p.jsx(la, {
                  id: r.value,
                  textValue: r.label,
                  className: qa,
                  'data-testid': 'select-option',
                  children: p.jsx(ta, {
                    label: r.label,
                    description: r.description,
                  }),
                }),
            }),
          }),
        ],
      })
  );
V.displayName = 'Select';
V.__docgenInfo = {
  description:
    'The `value`s of each option MUST be unique, otherwise render bugs will occur.\n\nRef: https://react-spectrum.adobe.com/react-aria/Select.html',
  methods: [],
  displayName: 'Select',
  props: {
    label: { required: !0, tsType: { name: 'string' }, description: '' },
    items: {
      required: !0,
      tsType: {
        name: 'Array',
        elements: [
          {
            name: 'signature',
            type: 'object',
            raw: `{
  value: string;
  label: string;
  description?: string;
}`,
            signature: {
              properties: [
                { key: 'value', value: { name: 'string', required: !0 } },
                { key: 'label', value: { name: 'string', required: !0 } },
                { key: 'description', value: { name: 'string', required: !1 } },
              ],
            },
          },
        ],
        raw: 'SelectOption[]',
      },
      description: '',
    },
    description: { required: !1, tsType: { name: 'string' }, description: '' },
    errorMessage: {
      required: !1,
      tsType: { name: 'string' },
      description:
        'Passing an `errorMessage` as prop toggles the input as invalid.',
    },
    icon: {
      required: !1,
      tsType: { name: 'unknown[number]', raw: '(typeof ids)[number]' },
      description: '',
    },
  },
};
const gr = {
    title: 'Select',
    component: V,
    decorators: [
      (e) =>
        p.jsx('div', { style: { maxWidth: '300px' }, children: p.jsx(e, {}) }),
    ],
  },
  g = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
    { label: 'Option 4', value: '4' },
    { label: 'Option 5', value: '5' },
  ],
  z = { args: { label: 'Regular select', items: g } },
  B = { args: { label: 'Disabled select', items: g, isDisabled: !0 } },
  k = { args: { label: 'Required select', items: g, isRequired: !0 } },
  C = { args: { label: 'With icon', items: g, icon: 'apps' } },
  E = {
    args: {
      label: 'Descriptions also',
      description: 'You should pick the third one',
      items: g,
    },
  },
  F = {
    args: {
      label: 'Some invalid choice',
      errorMessage: 'This is really bad',
      items: g,
    },
  };
var O, N, W;
z.parameters = {
  ...z.parameters,
  docs: {
    ...((O = z.parameters) == null ? void 0 : O.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Regular select',
    items: options
  }
}`,
      ...((W = (N = z.parameters) == null ? void 0 : N.docs) == null
        ? void 0
        : W.source),
    },
  },
};
var U, H, G;
B.parameters = {
  ...B.parameters,
  docs: {
    ...((U = B.parameters) == null ? void 0 : U.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Disabled select',
    items: options,
    isDisabled: true
  }
}`,
      ...((G = (H = B.parameters) == null ? void 0 : H.docs) == null
        ? void 0
        : G.source),
    },
  },
};
var Y, J, Q;
k.parameters = {
  ...k.parameters,
  docs: {
    ...((Y = k.parameters) == null ? void 0 : Y.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Required select',
    items: options,
    isRequired: true
  }
}`,
      ...((Q = (J = k.parameters) == null ? void 0 : J.docs) == null
        ? void 0
        : Q.source),
    },
  },
};
var X, ee, ae;
C.parameters = {
  ...C.parameters,
  docs: {
    ...((X = C.parameters) == null ? void 0 : X.docs),
    source: {
      originalSource: `{
  args: {
    label: 'With icon',
    items: options,
    icon: 'apps'
  }
}`,
      ...((ae = (ee = C.parameters) == null ? void 0 : ee.docs) == null
        ? void 0
        : ae.source),
    },
  },
};
var re, le, te;
E.parameters = {
  ...E.parameters,
  docs: {
    ...((re = E.parameters) == null ? void 0 : re.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Descriptions also',
    description: 'You should pick the third one',
    items: options
  }
}`,
      ...((te = (le = E.parameters) == null ? void 0 : le.docs) == null
        ? void 0
        : te.source),
    },
  },
};
var oe, se, ie;
F.parameters = {
  ...F.parameters,
  docs: {
    ...((oe = F.parameters) == null ? void 0 : oe.docs),
    source: {
      originalSource: `{
  args: {
    label: 'Some invalid choice',
    errorMessage: 'This is really bad',
    items: options
  }
}`,
      ...((ie = (se = F.parameters) == null ? void 0 : se.docs) == null
        ? void 0
        : ie.source),
    },
  },
};
const Dr = [
  'Regular',
  'Disabled',
  'Required',
  'WithIcon',
  'WithDescription',
  'WithError',
];
export {
  B as Disabled,
  z as Regular,
  k as Required,
  E as WithDescription,
  F as WithError,
  C as WithIcon,
  Dr as __namedExportsOrder,
  gr as default,
};
