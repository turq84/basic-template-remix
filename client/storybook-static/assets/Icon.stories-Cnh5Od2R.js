import { j as e } from './jsx-runtime-CkxqCPlQ.js';
import { I as a } from './index-BqgWbNE6.js';
import { T as n } from './index-Vm1tHATy.js';
import './index-DJO9vBfz.js';
import './utils-BgHHH9V7.js';
import './index-DJdX7xnk.js';
import './index-DdgtEVhA.js';
import './OverlayArrow-DliHpoDG.js';
import './Button-CoD-b_IN.js';
import './Hidden-2-bsQ4Y9.js';
import './useButton-DZEnpN8J.js';
import './usePress-BFY2e0Rh.js';
import './factory-BfbsYOSY.js';
const p = [
    'add',
    'addCircle',
    'apps',
    'arrowDown',
    'arrowDropDown',
    'arrowDropUp',
    'arrowLeft',
    'arrowRight',
    'arrowUp',
    'bank',
    'barcode',
    'barcodeScanner',
    'bell',
    'bellFilled',
    'calendarEvent',
    'calendarEventFilled',
    'calendarMonth',
    'calendarMonthFilled',
    'cameraAdd',
    'cancel',
    'certificate',
    'check',
    'checkCircle',
    'checklist',
    'chevronDown',
    'chevronFirst',
    'chevronLast',
    'chevronLeft',
    'chevronRight',
    'chevronUp',
    'close',
    'cloud',
    'cloudDownload',
    'cloudUpload',
    'comment',
    'copy',
    'document',
    'documentAdd',
    'documentCopy',
    'documentEdit',
    'documentText',
    'documentTextFilled',
    'download',
    'dragIndicator',
    'error',
    'eye',
    'eyeOff',
    'filter',
    'fingerprint',
    'flag',
    'folder',
    'folderOpen',
    'fullscreen',
    'fullscreenClose',
    'fullscreenExit',
    'fullscreenOpen',
    'globe',
    'graph',
    'group',
    'groupAdd',
    'heart',
    'heartFilled',
    'help',
    'history',
    'home',
    'homeFilled',
    'info',
    'language',
    'leaf',
    'link',
    'loading',
    'login',
    'logout',
    'mail',
    'mailFilled',
    'map',
    'mapFilled',
    'menu',
    'moon',
    'moonFilled',
    'moreHoriz',
    'moreVert',
    'notepad',
    'notepadFilled',
    'off',
    'openInNew',
    'paperclipAttach',
    'paperclipAttachment',
    'pen',
    'penDraw',
    'pending',
    'person',
    'personAdd',
    'personCircle',
    'personCircleFilled',
    'personEdit',
    'personRemove',
    'personSearch',
    'persons',
    'phone',
    'pin',
    'pinFilled',
    'qrCode',
    'qrCodeScanner',
    'readMore',
    'refresh',
    'remove',
    'removeCircle',
    'save',
    'search',
    'searchManage',
    'send',
    'settings',
    'settingsFilled',
    'shoppingCart',
    'shoppingCartAdd',
    'shoppingCartFilled',
    'shoppingCartRemove',
    'sort',
    'spanner',
    'star',
    'starFilled',
    'starHalf',
    'sun',
    'sunFilled',
    'sync',
    'thumbDown',
    'thumbDownFilled',
    'thumbUp',
    'thumbUpFilled',
    'trash',
    'trendingDown',
    'trendingUp',
    'update',
    'upload',
    'verified',
    'viewAgenda',
    'viewCarousel',
    'viewComfy',
    'viewGrid',
    'viewKanban',
    'viewList',
    'viewModule',
    'viewQuilt',
    'viewSidebar',
    'viewWeek',
    'warning',
    'wifi',
    'zoomIn',
    'zoomOut',
  ],
  T = { title: 'Icon', component: a },
  r = {
    render: () =>
      e.jsx('div', {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(60px, 1fr))',
          gap: 20,
          padding: 20,
        },
        children: p.map((o, d) =>
          e.jsx(
            n,
            {
              content: o,
              children: e.jsx(n.Trigger, {
                children: e.jsx('div', {
                  style: {
                    display: 'flex',
                    placeContent: 'center',
                    padding: 4,
                  },
                  children: e.jsx(a, { name: o, size: 24, color: 'text' }),
                }),
              }),
            },
            d
          )
        ),
      }),
  };
var i, l, t;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((i = r.parameters) == null ? void 0 : i.docs),
    source: {
      originalSource: `{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(60px, 1fr))',
    gap: 20,
    padding: 20
  }}>
      {ids.map((name, i) => <Tooltip content={name} key={i}>
          <Tooltip.Trigger>
            <div style={{
          display: 'flex',
          placeContent: 'center',
          padding: 4
        }}>
              <Icon name={name} size={24} color='text' />
            </div>
          </Tooltip.Trigger>
        </Tooltip>)}
    </div>
}`,
      ...((t = (l = r.parameters) == null ? void 0 : l.docs) == null
        ? void 0
        : t.source),
    },
  },
};
const b = ['All'];
export { r as All, b as __namedExportsOrder, T as default };
