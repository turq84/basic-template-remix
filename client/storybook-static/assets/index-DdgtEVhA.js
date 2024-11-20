function y(r) {
  return typeof r == 'object' && r != null && !Array.isArray(r);
}
var H = (r) => typeof r == 'object' && r !== null;
function C(r) {
  return Object.fromEntries(
    Object.entries(r ?? {}).filter(([a, e]) => e !== void 0)
  );
}
var E = (r) => r === 'base';
function D(r) {
  return r.slice().filter((a) => !E(a));
}
function S(r) {
  return String.fromCharCode(r + (r > 25 ? 39 : 97));
}
function V(r) {
  let a = '',
    e;
  for (e = Math.abs(r); e > 52; e = (e / 52) | 0) a = S(e % 52) + a;
  return S(e % 52) + a;
}
function L(r, a) {
  let e = a.length;
  for (; e; ) r = (r * 33) ^ a.charCodeAt(--e);
  return r;
}
function W(r) {
  return V(L(5381, r) >>> 0);
}
var B = /\s*!(important)?/i;
function F(r) {
  return typeof r == 'string' ? B.test(r) : !1;
}
function N(r) {
  return typeof r == 'string' ? r.replace(B, '').trim() : r;
}
function O(r) {
  return typeof r == 'string' ? r.replaceAll(' ', '_') : r;
}
var k = (r) => {
  const a = new Map();
  return (...o) => {
    const t = JSON.stringify(o);
    if (a.has(t)) return a.get(t);
    const s = r(...o);
    return a.set(t, s), s;
  };
};
function $(...r) {
  return r.reduce(
    (a, e) => (
      e &&
        Object.keys(e).forEach((o) => {
          const t = a[o],
            s = e[o];
          y(t) && y(s) ? (a[o] = $(t, s)) : (a[o] = s);
        }),
      a
    ),
    {}
  );
}
var X = (r) => r != null;
function z(r, a, e = {}) {
  const { stop: o, getKey: t } = e;
  function s(i, n = []) {
    if (H(i)) {
      const c = {};
      for (const [d, u] of Object.entries(i)) {
        const b = (t == null ? void 0 : t(d, u)) ?? d,
          l = [...n, b];
        if (o != null && o(i, l)) return a(i, n);
        const v = s(u, l);
        X(v) && (c[b] = v);
      }
      return c;
    }
    return a(i, n);
  }
  return s(r);
}
function q(r, a) {
  return r.reduce((e, o, t) => {
    const s = a[t];
    return o != null && (e[s] = o), e;
  }, {});
}
function R(r, a, e = !0) {
  const { utility: o, conditions: t } = a,
    { hasShorthand: s, resolveShorthand: i } = o;
  return z(r, (n) => (Array.isArray(n) ? q(n, t.breakpoints.keys) : n), {
    stop: (n) => Array.isArray(n),
    getKey: e ? (n) => (s ? i(n) : n) : void 0,
  });
}
var Y = { shift: (r) => r, finalize: (r) => r, breakpoints: { keys: [] } },
  G = (r) => (typeof r == 'string' ? r.replaceAll(/[\n\s]+/g, ' ') : r);
function K(r) {
  const { utility: a, hash: e, conditions: o = Y } = r,
    t = (i) => [a.prefix, i].filter(Boolean).join('-'),
    s = (i, n) => {
      let c;
      if (e) {
        const d = [...o.finalize(i), n];
        c = t(a.toHash(d, W));
      } else c = [...o.finalize(i), t(n)].join(':');
      return c;
    };
  return k(({ base: i, ...n } = {}) => {
    const c = Object.assign(n, i),
      d = R(c, r),
      u = new Set();
    return (
      z(d, (b, l) => {
        if (b == null) return;
        const v = F(b),
          [p, ...g] = o.shift(l),
          h = D(g),
          x = a.transform(p, N(G(b)));
        let f = s(h, x.className);
        v && (f = `${f}!`), u.add(f);
      }),
      Array.from(u).join(' ')
    );
  });
}
function Z(...r) {
  return r.flat().filter((a) => y(a) && Object.keys(C(a)).length > 0);
}
function U(r) {
  function a(t) {
    const s = Z(...t);
    return s.length === 1 ? s : s.map((i) => R(i, r));
  }
  function e(...t) {
    return $(...a(t));
  }
  function o(...t) {
    return Object.assign({}, ...a(t));
  }
  return { mergeCss: k(e), assignCss: o };
}
var J = /([A-Z])/g,
  Q = /^ms-/,
  rr = k((r) =>
    r.startsWith('--')
      ? r
      : r.replace(J, '-$1').replace(Q, '-ms-').toLowerCase()
  ),
  ar =
    'cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%';
`${ar.split(',').join('|')}`;
function er(r, ...a) {
  const e = Object.getOwnPropertyDescriptors(r),
    o = Object.keys(e),
    t = (i) => {
      const n = {};
      for (let c = 0; c < i.length; c++) {
        const d = i[c];
        e[d] && (Object.defineProperty(n, d, e[d]), delete e[d]);
      }
      return n;
    },
    s = (i) => t(Array.isArray(i) ? i : o.filter(i));
  return a.map(s).concat(t(o));
}
var or = (...r) => {
    const a = r.reduce(
      (e, o) => (o && o.forEach((t) => e.add(t)), e),
      new Set([])
    );
    return Array.from(a);
  },
  M = ['htmlSize', 'htmlTranslate', 'htmlWidth', 'htmlHeight'];
function tr(r) {
  return M.includes(r) ? r.replace('html', '').toLowerCase() : r;
}
function ir(r) {
  return Object.fromEntries(Object.entries(r).map(([a, e]) => [tr(a), e]));
}
ir.keys = M;
const sr =
    '_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_default,_optional,_open,_closed,_fullscreen,_loading,_currentPage,_currentStep,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,_starting,sm,smOnly,smDown,md,mdOnly,mdDown,lg,lgOnly,lgDown,xl,xlOnly,xlDown,2xl,2xlOnly,2xlDown,smToMd,smToLg,smToXl,smTo2xl,mdToLg,mdToXl,mdTo2xl,lgToXl,lgTo2xl,xlTo2xl,@/xs,@/sm,@/md,@/lg,@/xl,@/2xl,@/3xl,@/4xl,@/5xl,@/6xl,@/7xl,@/8xl,base',
  T = new Set(sr.split(',')),
  nr = /^@|&|&$/;
function w(r) {
  return T.has(r) || nr.test(r);
}
const lr = /^_/,
  cr = /&|@/;
function dr(r) {
  return r.map((a) =>
    T.has(a) ? a.replace(lr, '') : cr.test(a) ? `[${O(a.trim())}]` : a
  );
}
function vr(r) {
  return r.sort((a, e) => {
    const o = w(a),
      t = w(e);
    return o && !t ? 1 : !o && t ? -1 : 0;
  });
}
const br =
    '$fadeIn:fade-in,$fadeScaleIn:fade-scale-in,$focusRing:focus-ring,$hoverHighlight:hover-highlight,$pressHighlight:press-highlight,$pressOpacity:press-opacity,$truncate:truncate,aspectRatio:asp,boxDecorationBreak:bx-db,zIndex:z,boxSizing:bx-s,objectPosition:obj-p,objectFit:obj-f,overscrollBehavior:ovs-b,overscrollBehaviorX:ovs-bx,overscrollBehaviorY:ovs-by,position:pos,top:top,left:left,inset:inset,insetInline:inset-x,insetBlock:inset-y,insetBlockEnd:inset-be,insetBlockStart:inset-bs,insetInlineEnd:inset-e,insetInlineStart:inset-s,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:flex-b,flex:flex,flexDirection:flex-d,flexGrow:flex-g,flexShrink:flex-sh,gridTemplateColumns:grid-tc,gridTemplateRows:grid-tr,gridColumn:grid-c,gridRow:grid-r,gridColumnStart:grid-cs,gridColumnEnd:grid-ce,gridAutoFlow:grid-af,gridAutoColumns:grid-ac,gridAutoRows:grid-ar,gap:gap,gridGap:grid-g,gridRowGap:grid-rg,gridColumnGap:grid-cg,rowGap:rg,columnGap:cg,justifyContent:jc,alignContent:ac,alignItems:ai,alignSelf:as,padding:p,paddingLeft:pl,paddingRight:pr,paddingTop:pt,paddingBottom:pb,paddingBlock:py,paddingBlockEnd:pbe,paddingBlockStart:pbs,paddingInline:px,paddingInlineEnd:pe,paddingInlineStart:ps,marginLeft:ml,marginRight:mr,marginTop:mt,marginBottom:mb,margin:m,marginBlock:my,marginBlockEnd:mbe,marginBlockStart:mbs,marginInline:mx,marginInlineEnd:me,marginInlineStart:ms,spaceX:sx,spaceY:sy,outlineWidth:ring-w,outlineColor:ring-c,outline:ring,outlineOffset:ring-o,divideX:dvd-x,divideY:dvd-y,divideColor:dvd-c,divideStyle:dvd-s,width:w,inlineSize:w-is,minWidth:min-w,minInlineSize:min-w-is,maxWidth:max-w,maxInlineSize:max-w-is,height:h,blockSize:h-bs,minHeight:min-h,minBlockSize:min-h-bs,maxHeight:max-h,maxBlockSize:max-b,color:c,fontFamily:ff,fontSize:fs,fontSizeAdjust:fs-a,fontPalette:fp,fontKerning:fk,fontFeatureSettings:ff-s,fontWeight:fw,fontSmoothing:fsmt,fontVariant:fv,fontVariantAlternates:fv-alt,fontVariantCaps:fv-caps,fontVariationSettings:fv-s,fontVariantNumeric:fv-num,letterSpacing:ls,lineHeight:lh,textAlign:ta,textDecoration:td,textDecorationColor:td-c,textEmphasisColor:te-c,textDecorationStyle:td-s,textDecorationThickness:td-t,textUnderlineOffset:tu-o,textTransform:tt,textIndent:ti,textShadow:tsh,textShadowColor:tsh-c,textOverflow:tov,verticalAlign:va,wordBreak:wb,textWrap:tw,truncate:trunc,lineClamp:lc,listStyleType:li-t,listStylePosition:li-pos,listStyleImage:li-img,listStyle:li-s,backgroundPosition:bg-p,backgroundPositionX:bg-p-x,backgroundPositionY:bg-p-y,backgroundAttachment:bg-a,backgroundClip:bg-cp,background:bg,backgroundColor:bg-c,backgroundOrigin:bg-o,backgroundImage:bg-i,backgroundRepeat:bg-r,backgroundBlendMode:bg-bm,backgroundSize:bg-s,backgroundGradient:bg-grad,textGradient:txt-grad,gradientFromPosition:grad-from-pos,gradientToPosition:grad-to-pos,gradientFrom:grad-from,gradientTo:grad-to,gradientVia:grad-via,gradientViaPosition:grad-via-pos,borderRadius:bdr,borderTopLeftRadius:bdr-tl,borderTopRightRadius:bdr-tr,borderBottomRightRadius:bdr-br,borderBottomLeftRadius:bdr-bl,borderTopRadius:bdr-t,borderRightRadius:bdr-r,borderBottomRadius:bdr-b,borderLeftRadius:bdr-l,borderStartStartRadius:bdr-ss,borderStartEndRadius:bdr-se,borderStartRadius:bdr-s,borderEndStartRadius:bdr-es,borderEndEndRadius:bdr-ee,borderEndRadius:bdr-e,border:bd,borderWidth:bd-w,borderTopWidth:bd-t-w,borderLeftWidth:bd-l-w,borderRightWidth:bd-r-w,borderBottomWidth:bd-b-w,borderColor:bd-c,borderInline:bd-x,borderInlineWidth:bd-x-w,borderInlineColor:bd-x-c,borderBlock:bd-y,borderBlockWidth:bd-y-w,borderBlockColor:bd-y-c,borderLeft:bd-l,borderLeftColor:bd-l-c,borderInlineStart:bd-s,borderInlineStartWidth:bd-s-w,borderInlineStartColor:bd-s-c,borderRight:bd-r,borderRightColor:bd-r-c,borderInlineEnd:bd-e,borderInlineEndWidth:bd-e-w,borderInlineEndColor:bd-e-c,borderTop:bd-t,borderTopColor:bd-t-c,borderBottom:bd-b,borderBottomColor:bd-b-c,borderBlockEnd:bd-be,borderBlockEndColor:bd-be-c,borderBlockStart:bd-bs,borderBlockStartColor:bd-bs-c,opacity:op,boxShadow:bx-sh,boxShadowColor:bx-sh-c,mixBlendMode:mix-bm,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:bkdp,backdropBlur:bkdp-blur,backdropBrightness:bkdp-brightness,backdropContrast:bkdp-contrast,backdropGrayscale:bkdp-grayscale,backdropHueRotate:bkdp-hue-rotate,backdropInvert:bkdp-invert,backdropOpacity:bkdp-opacity,backdropSaturate:bkdp-saturate,backdropSepia:bkdp-sepia,borderCollapse:bd-cl,borderSpacing:bd-sp,borderSpacingX:bd-sx,borderSpacingY:bd-sy,tableLayout:tbl,transitionTimingFunction:trs-tmf,transitionDelay:trs-dly,transitionDuration:trs-dur,transitionProperty:trs-prop,transition:trs,animation:anim,animationName:anim-n,animationTimingFunction:anim-tmf,animationDuration:anim-dur,animationDelay:anim-dly,animationPlayState:anim-ps,animationComposition:anim-comp,animationFillMode:anim-fm,animationDirection:anim-dir,animationIterationCount:anim-ic,animationRange:anim-r,animationState:anim-s,animationRangeStart:anim-rs,animationRangeEnd:anim-re,animationTimeline:anim-tl,transformOrigin:trf-o,transformBox:trf-b,transformStyle:trf-s,transform:trf,rotate:rotate,rotateX:rotate-x,rotateY:rotate-y,rotateZ:rotate-z,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x,translateY:translate-y,translateZ:translate-z,accentColor:ac-c,caretColor:ca-c,scrollBehavior:scr-bhv,scrollbar:scr-bar,scrollbarColor:scr-bar-c,scrollbarGutter:scr-bar-g,scrollbarWidth:scr-bar-w,scrollMargin:scr-m,scrollMarginLeft:scr-ml,scrollMarginRight:scr-mr,scrollMarginTop:scr-mt,scrollMarginBottom:scr-mb,scrollMarginBlock:scr-my,scrollMarginBlockEnd:scr-mbe,scrollMarginBlockStart:scr-mbt,scrollMarginInline:scr-mx,scrollMarginInlineEnd:scr-me,scrollMarginInlineStart:scr-ms,scrollPadding:scr-p,scrollPaddingBlock:scr-py,scrollPaddingBlockStart:scr-pbs,scrollPaddingBlockEnd:scr-pbe,scrollPaddingInline:scr-px,scrollPaddingInlineEnd:scr-pe,scrollPaddingInlineStart:scr-ps,scrollPaddingLeft:scr-pl,scrollPaddingRight:scr-pr,scrollPaddingTop:scr-pt,scrollPaddingBottom:scr-pb,scrollSnapAlign:scr-sa,scrollSnapStop:scrs-s,scrollSnapType:scrs-t,scrollSnapStrictness:scrs-strt,scrollSnapMargin:scrs-m,scrollSnapMarginTop:scrs-mt,scrollSnapMarginBottom:scrs-mb,scrollSnapMarginLeft:scrs-ml,scrollSnapMarginRight:scrs-mr,scrollSnapCoordinate:scrs-c,scrollSnapDestination:scrs-d,scrollSnapPointsX:scrs-px,scrollSnapPointsY:scrs-py,scrollSnapTypeX:scrs-tx,scrollSnapTypeY:scrs-ty,scrollTimeline:scrtl,scrollTimelineAxis:scrtl-a,scrollTimelineName:scrtl-n,touchAction:tch-a,userSelect:us,overflow:ov,overflowWrap:ov-wrap,overflowX:ov-x,overflowY:ov-y,overflowAnchor:ov-a,overflowBlock:ov-b,overflowInline:ov-i,overflowClipBox:ovcp-bx,overflowClipMargin:ovcp-m,overscrollBehaviorBlock:ovs-bb,overscrollBehaviorInline:ovs-bi,fill:fill,stroke:stk,strokeWidth:stk-w,strokeDasharray:stk-dsh,strokeDashoffset:stk-do,strokeLinecap:stk-lc,strokeLinejoin:stk-lj,strokeMiterlimit:stk-ml,strokeOpacity:stk-op,srOnly:sr,debug:debug,appearance:ap,backfaceVisibility:bfv,clipPath:cp-path,hyphens:hy,mask:msk,maskImage:msk-i,maskSize:msk-s,textSizeAdjust:txt-adj,container:cq,containerName:cq-n,containerType:cq-t,textStyle:textStyle',
  j = new Map();
br.split(',').forEach((r) => {
  const [a, e] = r.split(':');
  j.set(a, e);
});
const I = {
    conditions: {
      shift: vr,
      finalize: dr,
      breakpoints: { keys: ['base', 'sm', 'md', 'lg', 'xl', '2xl'] },
    },
    utility: {
      transform: (r, a) => ({ className: `${j.get(r) || rr(r)}_${O(a)}` }),
      toHash: (r, a) => a(r.join(':')),
      resolveShorthand: (r) => r,
    },
  },
  ur = K(I),
  P = (...r) => ur(m(...r));
P.raw = (...r) => m(...r);
const { mergeCss: m } = U(I);
function hr() {
  let r = '',
    a = 0,
    e;
  for (; a < arguments.length; )
    (e = arguments[a++]) && typeof e == 'string' && (r && (r += ' '), (r += e));
  return r;
}
const _ = (r) => ({
  base: {},
  variants: {},
  defaultVariants: {},
  compoundVariants: [],
  ...r,
});
function pr(r) {
  const {
      base: a,
      variants: e,
      defaultVariants: o,
      compoundVariants: t,
    } = _(r),
    s = (l) => ({ ...o, ...C(l) });
  function i(l = {}) {
    var h;
    const v = s(l);
    let p = { ...a };
    for (const [x, f] of Object.entries(v))
      (h = e[x]) != null && h[f] && (p = m(p, e[x][f]));
    const g = gr(t, v);
    return m(p, g);
  }
  function n(l) {
    const v = _(l.config),
      p = or(l.variantKeys, Object.keys(e));
    return pr({
      base: m(a, v.base),
      variants: Object.fromEntries(p.map((g) => [g, m(e[g], v.variants[g])])),
      defaultVariants: $(o, v.defaultVariants),
      compoundVariants: [...t, ...v.compoundVariants],
    });
  }
  function c(l) {
    return P(i(l));
  }
  const d = Object.keys(e);
  function u(l) {
    return er(l, d);
  }
  const b = Object.fromEntries(
    Object.entries(e).map(([l, v]) => [l, Object.keys(v)])
  );
  return Object.assign(k(c), {
    __cva__: !0,
    variantMap: b,
    variantKeys: d,
    raw: i,
    config: r,
    merge: n,
    splitVariantProps: u,
    getVariantProps: s,
  });
}
function gr(r, a) {
  let e = {};
  return (
    r.forEach((o) => {
      Object.entries(o).every(([s, i]) =>
        s === 'css' ? !0 : (Array.isArray(i) ? i : [i]).some((c) => a[s] === c)
      ) && (e = m(e, o.css));
    }),
    e
  );
}
const A = {
  '$colors.brand': { value: '#009a48', variable: 'var(--colors-brand)' },
  '$colors.brandContrast': {
    value: '#066531',
    variable: 'var(--colors-brand-contrast)',
  },
  '$colors.brandContrastHover': {
    value: '#035827',
    variable: 'var(--colors-brand-contrast-hover)',
  },
  '$colors.brandHover': {
    value: '#00813c',
    variable: 'var(--colors-brand-hover)',
  },
  '$colors.brandMuted': {
    value: '#def2e7',
    variable: 'var(--colors-brand-muted)',
  },
  '$colors.brandMutedHover': {
    value: '#d1eadc',
    variable: 'var(--colors-brand-muted-hover)',
  },
  '$colors.error': { value: '#c53535', variable: 'var(--colors-error)' },
  '$colors.errorContrast': {
    value: '#870d0d',
    variable: 'var(--colors-error-contrast)',
  },
  '$colors.errorContrastHover': {
    value: '#750a0a',
    variable: 'var(--colors-error-contrast-hover)',
  },
  '$colors.errorHover': {
    value: '#b93131',
    variable: 'var(--colors-error-hover)',
  },
  '$colors.errorMuted': {
    value: '#f9e2e3',
    variable: 'var(--colors-error-muted)',
  },
  '$colors.errorMutedHover': {
    value: '#f4c6c8',
    variable: 'var(--colors-error-muted-hover)',
  },
  '$colors.info': { value: '#2e72e1', variable: 'var(--colors-info)' },
  '$colors.infoContrast': {
    value: '#0c47a7',
    variable: 'var(--colors-info-contrast)',
  },
  '$colors.infoContrastHover': {
    value: '#0b4199',
    variable: 'var(--colors-info-contrast-hover)',
  },
  '$colors.infoHover': {
    value: '#2063d2',
    variable: 'var(--colors-info-hover)',
  },
  '$colors.infoMuted': {
    value: '#e7effd',
    variable: 'var(--colors-info-muted)',
  },
  '$colors.infoMutedHover': {
    value: '#dae7fd',
    variable: 'var(--colors-info-muted-hover)',
  },
  '$colors.focusRing': {
    value: '#296bd7',
    variable: 'var(--colors-focus-ring)',
  },
  '$colors.line1': {
    value: 'rgba(0, 0, 0, 0.5)',
    variable: 'var(--colors-line1)',
  },
  '$colors.line2': {
    value: 'rgba(0, 0, 0, 0.25)',
    variable: 'var(--colors-line2)',
  },
  '$colors.line3': {
    value: 'rgba(0, 0, 0, 0.1)',
    variable: 'var(--colors-line3)',
  },
  '$colors.neutral1': { value: '#55575e', variable: 'var(--colors-neutral1)' },
  '$colors.neutral2': { value: '#92969d', variable: 'var(--colors-neutral2)' },
  '$colors.neutral3': { value: '#d4d6db', variable: 'var(--colors-neutral3)' },
  '$colors.neutral4': { value: '#e4e5e9', variable: 'var(--colors-neutral4)' },
  '$colors.neutral5': { value: '#f0f1f5', variable: 'var(--colors-neutral5)' },
  '$colors.surface': { value: '#ffffff', variable: 'var(--colors-surface)' },
  '$colors.surfaceHover': {
    value: '#f5f6fa',
    variable: 'var(--colors-surface-hover)',
  },
  '$colors.primary': { value: '#296bd7', variable: 'var(--colors-primary)' },
  '$colors.primaryContrast': {
    value: '#124598',
    variable: 'var(--colors-primary-contrast)',
  },
  '$colors.primaryContrastHover': {
    value: '#08357f',
    variable: 'var(--colors-primary-contrast-hover)',
  },
  '$colors.primaryHover': {
    value: '#1857be',
    variable: 'var(--colors-primary-hover)',
  },
  '$colors.primaryMuted': {
    value: '#ebf3ff',
    variable: 'var(--colors-primary-muted)',
  },
  '$colors.primaryMutedDarker': {
    value: '#cedef8',
    variable: 'var(--colors-primary-muted-darker)',
  },
  '$colors.primaryMutedHover': {
    value: '#dee9fd',
    variable: 'var(--colors-primary-muted-hover)',
  },
  '$colors.success': { value: '#099566', variable: 'var(--colors-success)' },
  '$colors.successContrast': {
    value: '#00573a',
    variable: 'var(--colors-success-contrast)',
  },
  '$colors.successContrastHover': {
    value: '#004d34',
    variable: 'var(--colors-success-contrast-hover)',
  },
  '$colors.successHover': {
    value: '#05865c',
    variable: 'var(--colors-success-hover)',
  },
  '$colors.successMuted': {
    value: '#ddf1ea',
    variable: 'var(--colors-success-muted)',
  },
  '$colors.successMutedHover': {
    value: '#c1e6d9',
    variable: 'var(--colors-success-muted-hover)',
  },
  '$colors.text': { value: '#000000', variable: 'var(--colors-text)' },
  '$colors.textDisabled': {
    value: '#7d7f85',
    variable: 'var(--colors-text-disabled)',
  },
  '$colors.textMuted': {
    value: '#55575e',
    variable: 'var(--colors-text-muted)',
  },
  '$colors.textOnContrastingBg': {
    value: '#ffffff',
    variable: 'var(--colors-text-on-contrasting-bg)',
  },
  '$colors.mint': { value: '#27caa3', variable: 'var(--colors-mint)' },
  '$colors.pink': { value: '#e04f83', variable: 'var(--colors-pink)' },
  '$colors.purple': { value: '#9d2389', variable: 'var(--colors-purple)' },
  '$colors.warn': { value: '#b98604', variable: 'var(--colors-warn)' },
  '$colors.warnContrast': {
    value: '#614500',
    variable: 'var(--colors-warn-contrast)',
  },
  '$colors.warnContrastHover': {
    value: '#573d00',
    variable: 'var(--colors-warn-contrast-hover)',
  },
  '$colors.warnHover': {
    value: '#a07403',
    variable: 'var(--colors-warn-hover)',
  },
  '$colors.warnMuted': {
    value: '#f3ead1',
    variable: 'var(--colors-warn-muted)',
  },
  '$colors.warnMutedHover': {
    value: '#ede0bd',
    variable: 'var(--colors-warn-muted-hover)',
  },
  '$shadows.none': { value: 'none', variable: 'var(--shadows-none)' },
  '$shadows.large': {
    value: '0px 16px 32px rgba(0, 0, 0, 0.12)',
    variable: 'var(--shadows-large)',
  },
  '$shadows.medium': {
    value: '0px 8px 24px rgba(0, 0, 0, 0.12)',
    variable: 'var(--shadows-medium)',
  },
  '$shadows.regular': {
    value: '0px 4px 16px rgba(0, 0, 0, 0.12)',
    variable: 'var(--shadows-regular)',
  },
  '$shadows.small': {
    value: '0px 2px 6px rgba(0, 0, 0, 0.12)',
    variable: 'var(--shadows-small)',
  },
  '$radii.none': { value: '0rem', variable: 'var(--radii-none)' },
  '$radii.full': { value: '999px', variable: 'var(--radii-full)' },
  '$radii.large': { value: '32px', variable: 'var(--radii-large)' },
  '$radii.medium': { value: '16px', variable: 'var(--radii-medium)' },
  '$radii.regular': { value: '8px', variable: 'var(--radii-regular)' },
  '$radii.small': { value: '4px', variable: 'var(--radii-small)' },
  '$sizes.none': { value: '0rem', variable: 'var(--sizes-none)' },
  '$sizes.buttonHeightLarge': {
    value: '2.75rem',
    variable: 'var(--sizes-button-height-large)',
  },
  '$sizes.buttonHeightMedium': {
    value: '2.25rem',
    variable: 'var(--sizes-button-height-medium)',
  },
  '$sizes.buttonHeightSmall': {
    value: '2rem',
    variable: 'var(--sizes-button-height-small)',
  },
  '$sizes.focusRingOffset': {
    value: '0.125rem',
    variable: 'var(--sizes-focus-ring-offset)',
  },
  '$sizes.focusRingSize': {
    value: '0.0625rem',
    variable: 'var(--sizes-focus-ring-size)',
  },
  '$sizes.breakpoint-sm': {
    value: '640px',
    variable: 'var(--sizes-breakpoint-sm)',
  },
  '$sizes.breakpoint-md': {
    value: '768px',
    variable: 'var(--sizes-breakpoint-md)',
  },
  '$sizes.breakpoint-lg': {
    value: '1024px',
    variable: 'var(--sizes-breakpoint-lg)',
  },
  '$sizes.breakpoint-xl': {
    value: '1280px',
    variable: 'var(--sizes-breakpoint-xl)',
  },
  '$sizes.breakpoint-2xl': {
    value: '1536px',
    variable: 'var(--sizes-breakpoint-2xl)',
  },
  '$spacing.none': { value: '0rem', variable: 'var(--spacing-none)' },
  '$spacing.2xl': { value: '3rem', variable: 'var(--spacing-2xl)' },
  '$spacing.3xl': { value: '3.5rem', variable: 'var(--spacing-3xl)' },
  '$spacing.4xl': { value: '4.5rem', variable: 'var(--spacing-4xl)' },
  '$spacing.5xl': { value: '9rem', variable: 'var(--spacing-5xl)' },
  '$spacing.default': { value: 'NaNrem', variable: 'var(--spacing-default)' },
  '$spacing.large': { value: '2rem', variable: 'var(--spacing-large)' },
  '$spacing.medium': { value: '1.5rem', variable: 'var(--spacing-medium)' },
  '$spacing.regular': { value: '1rem', variable: 'var(--spacing-regular)' },
  '$spacing.small': { value: '0.75rem', variable: 'var(--spacing-small)' },
  '$spacing.xl': { value: '2.5rem', variable: 'var(--spacing-xl)' },
  '$spacing.xs': { value: '0.5rem', variable: 'var(--spacing-xs)' },
  '$spacing.xxs': { value: '0.25rem', variable: 'var(--spacing-xxs)' },
  '$breakpoints.sm': { value: '640px', variable: 'var(--breakpoints-sm)' },
  '$breakpoints.md': { value: '768px', variable: 'var(--breakpoints-md)' },
  '$breakpoints.lg': { value: '1024px', variable: 'var(--breakpoints-lg)' },
  '$breakpoints.xl': { value: '1280px', variable: 'var(--breakpoints-xl)' },
  '$breakpoints.2xl': { value: '1536px', variable: 'var(--breakpoints-2xl)' },
  '$spacing.-2xl': {
    value: 'calc(var(--spacing-2xl) * -1)',
    variable: 'var(--spacing-2xl)',
  },
  '$spacing.-3xl': {
    value: 'calc(var(--spacing-3xl) * -1)',
    variable: 'var(--spacing-3xl)',
  },
  '$spacing.-4xl': {
    value: 'calc(var(--spacing-4xl) * -1)',
    variable: 'var(--spacing-4xl)',
  },
  '$spacing.-5xl': {
    value: 'calc(var(--spacing-5xl) * -1)',
    variable: 'var(--spacing-5xl)',
  },
  '$spacing.-default': {
    value: 'calc(var(--spacing-default) * -1)',
    variable: 'var(--spacing-default)',
  },
  '$spacing.-large': {
    value: 'calc(var(--spacing-large) * -1)',
    variable: 'var(--spacing-large)',
  },
  '$spacing.-medium': {
    value: 'calc(var(--spacing-medium) * -1)',
    variable: 'var(--spacing-medium)',
  },
  '$spacing.-regular': {
    value: 'calc(var(--spacing-regular) * -1)',
    variable: 'var(--spacing-regular)',
  },
  '$spacing.-small': {
    value: 'calc(var(--spacing-small) * -1)',
    variable: 'var(--spacing-small)',
  },
  '$spacing.-xl': {
    value: 'calc(var(--spacing-xl) * -1)',
    variable: 'var(--spacing-xl)',
  },
  '$spacing.-xs': {
    value: 'calc(var(--spacing-xs) * -1)',
    variable: 'var(--spacing-xs)',
  },
  '$spacing.-xxs': {
    value: 'calc(var(--spacing-xxs) * -1)',
    variable: 'var(--spacing-xxs)',
  },
  '$colors.colorPalette': {
    value: 'var(--colors-color-palette)',
    variable: 'var(--colors-color-palette)',
  },
};
function mr(r, a) {
  var e;
  return ((e = A[r]) == null ? void 0 : e.value) || a;
}
function fr(r, a) {
  var e;
  return ((e = A[r]) == null ? void 0 : e.variable) || a;
}
mr.var = fr;
export { hr as a, pr as b, P as c, ir as n, er as s, mr as t };
