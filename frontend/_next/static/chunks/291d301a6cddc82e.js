(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,741611,748449,t=>{"use strict";t.i(812207);var e=t.i(604148),r=t.i(654479);t.i(374576);var i=t.i(120119),o=t.i(56350),n=t.i(803468),s=t.i(221728),a=t.i(365801),l=t.i(742710),c=t.i(592279);let h=(0,a.proxy)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),u=(0,c.withErrorBoundary)({state:h,subscribe:t=>(0,a.subscribe)(h,()=>t(h)),subscribeKey:(t,e)=>(0,l.subscribeKey)(h,t,e),showTooltip({message:t,triggerRect:e,variant:r}){h.open=!0,h.message=t,h.triggerRect=e,h.variant=r},hide(){h.open=!1,h.message="",h.triggerRect={width:0,height:0,top:0,left:0}}});t.i(404041);var f=t.i(645975),d=t.i(592057);let p=d.css`
  :host {
    width: 100%;
    display: block;
  }
`;var g=function(t,e,r,i){var o,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let y=class extends e.LitElement{constructor(){super(),this.unsubscribe=[],this.text="",this.open=u.state.open,this.unsubscribe.push(s.RouterController.subscribeKey("view",()=>{u.hide()}),n.ModalController.subscribeKey("open",t=>{t||u.hide()}),u.subscribeKey("open",t=>{this.open=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),u.hide()}render(){return r.html`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return r.html`<slot></slot> `}onMouseEnter(){let t=this.getBoundingClientRect();if(!this.open){let e=document.querySelector("w3m-modal"),r={width:t.width,height:t.height,left:t.left,top:t.top};if(e){let i=e.getBoundingClientRect();r.left=t.left-(window.innerWidth-i.width)/2,r.top=t.top-(window.innerHeight-i.height)/2}u.showTooltip({message:this.text,triggerRect:r,variant:"shade"})}}onMouseLeave(t){this.contains(t.relatedTarget)||u.hide()}};y.styles=[p],g([(0,i.property)()],y.prototype,"text",void 0),g([(0,o.state)()],y.prototype,"open",void 0),y=g([(0,f.customElement)("w3m-tooltip-trigger")],y),t.s([],741611);var b=e;t.i(62238),t.i(443452),t.i(249536);var m=t.i(162611);let x=m.css`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({spacing:t})=>t["3"]} 10px ${({spacing:t})=>t["3"]};
    border-radius: ${({borderRadius:t})=>t["3"]};
    color: ${({tokens:t})=>t.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({spacing:t})=>t["5"]});
    transition: opacity ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({durations:t})=>t.xl};
    animation-timing-function: ${({easings:t})=>t["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({tokens:t})=>t.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({tokens:t})=>t.theme.backgroundPrimary};
    border: 1px solid ${({tokens:t})=>t.theme.borderPrimary};
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var w=function(t,e,r,i){var o,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let v=class extends b.LitElement{constructor(){super(),this.unsubscribe=[],this.open=u.state.open,this.message=u.state.message,this.triggerRect=u.state.triggerRect,this.variant=u.state.variant,this.unsubscribe.push(u.subscribe(t=>{this.open=t.open,this.message=t.message,this.triggerRect=t.triggerRect,this.variant=t.variant}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){this.dataset.variant=this.variant;let t=this.triggerRect.top,e=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${t}px;
    --w3m-tooltip-left: ${e}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${+!!this.open};
    `,r.html`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};v.styles=[x],w([(0,o.state)()],v.prototype,"open",void 0),w([(0,o.state)()],v.prototype,"message",void 0),w([(0,o.state)()],v.prototype,"triggerRect",void 0),w([(0,o.state)()],v.prototype,"variant",void 0),v=w([(0,f.customElement)("w3m-tooltip")],v),t.s([],748449)},225416,803596,t=>{"use strict";t.i(812207);var e=t.i(604148),r=t.i(654479);t.i(374576);var i=t.i(56350),o=t.i(82283);t.i(404041);var n=t.i(645975);t.i(62238),t.i(249536);var s=e;t.i(852634),t.i(839009),t.i(73944);var a=t.i(459088),l=t.i(162611);let c=l.css`
  .reown-logo {
    height: 24px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({tokens:t})=>t.theme.textSecondary};
  }

  a:hover {
    opacity: 0.9;
  }
`,h=class extends s.LitElement{render(){return r.html`
      <a
        data-testid="ux-branding-reown"
        href=${"https://reown.com"}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="1"
          .padding=${["01","0","3","0"]}
        >
          <wui-text variant="sm-regular" color="inherit"> UX by </wui-text>
          <wui-icon name="reown" size="inherit" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};h.styles=[a.resetStyles,a.elementStyles,c],h=function(t,e,r,i){var o,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s}([(0,n.customElement)("wui-ux-by-reown")],h),t.s([],803596);let u=l.css`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:t})=>t["3"]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:t})=>t.core.textAccentPrimary};
    font-weight: 500;
  }
`;var f=function(t,e,r,i){var o,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let d=class extends e.LitElement{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=o.OptionsController.state.remoteFeatures,this.unsubscribe.push(o.OptionsController.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){let{termsConditionsUrl:t,privacyPolicyUrl:e}=o.OptionsController.state,i=o.OptionsController.state.features?.legalCheckbox;return(t||e)&&!i?r.html`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `:r.html`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `}andTemplate(){let{termsConditionsUrl:t,privacyPolicyUrl:e}=o.OptionsController.state;return t&&e?"and":""}termsTemplate(){let{termsConditionsUrl:t}=o.OptionsController.state;return t?r.html`<a href=${t} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){let{privacyPolicyUrl:t}=o.OptionsController.state;return t?r.html`<a href=${t} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(t=!1){return this.remoteFeatures?.reownBranding?t?r.html`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:r.html`<wui-ux-by-reown></wui-ux-by-reown>`:null}};d.styles=[u],f([(0,i.state)()],d.prototype,"remoteFeatures",void 0),d=f([(0,n.customElement)("w3m-legal-footer")],d),t.s([],225416)},550230,t=>{"use strict";t.i(812207);var e=t.i(604148),r=t.i(654479),i=t.i(960398),o=t.i(653157),n=t.i(82283),s=t.i(221728),a=t.i(564126);t.i(404041);var l=t.i(645975);t.i(62238),t.i(443452),t.i(210380),t.i(249536);var c=t.i(979484),h=t.i(592057);let u=h.css``,f=class extends e.LitElement{render(){let{termsConditionsUrl:t,privacyPolicyUrl:e}=n.OptionsController.state;return t||e?r.html`
      <wui-flex
        .padding=${["4","3","3","3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return r.html` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){o.EventsController.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:(0,a.getPreferredAccountType)(i.ChainController.state.activeChain)===c.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT}}),s.RouterController.push("WhatIsABuy")}};f.styles=[u],f=function(t,e,r,i){var o,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s}([(0,l.customElement)("w3m-onramp-providers-footer")],f),t.s([],550230)},210380,t=>{"use strict";t.i(812207);var e=t.i(604148),r=t.i(654479);t.i(374576);var i=t.i(120119);t.i(852634),t.i(839009);var o=t.i(459088),n=t.i(645975),s=t.i(162611);let a=s.css`
  button {
    border: none;
    background: transparent;
    height: 20px;
    padding: ${({spacing:t})=>t[2]};
    column-gap: ${({spacing:t})=>t[1]};
    border-radius: ${({borderRadius:t})=>t[1]};
    padding: 0 ${({spacing:t})=>t[1]};
    border-radius: ${({spacing:t})=>t[1]};
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent'] {
    color: ${({tokens:t})=>t.core.textAccentPrimary};
  }

  button[data-variant='secondary'] {
    color: ${({tokens:t})=>t.theme.textSecondary};
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[data-variant='accent']:focus-visible:enabled {
    background-color: ${({tokens:t})=>t.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible:enabled {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-variant='accent']:hover:enabled {
    background-color: ${({tokens:t})=>t.core.foregroundAccent010};
  }

  button[data-variant='secondary']:hover:enabled {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:t})=>t.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var l=function(t,e,r,i){var o,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let c={sm:"sm-medium",md:"md-medium"},h={accent:"accent-primary",secondary:"secondary"},u=class extends e.LitElement{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.variant="accent",this.icon=void 0}render(){return r.html`
      <button ?disabled=${this.disabled} data-variant=${this.variant}>
        <slot name="iconLeft"></slot>
        <wui-text
          color=${h[this.variant]}
          variant=${c[this.size]}
        >
          <slot></slot>
        </wui-text>
        ${this.iconTemplate()}
      </button>
    `}iconTemplate(){return this.icon?r.html`<wui-icon name=${this.icon} size="sm"></wui-icon>`:null}};u.styles=[o.resetStyles,o.elementStyles,a],l([(0,i.property)()],u.prototype,"size",void 0),l([(0,i.property)({type:Boolean})],u.prototype,"disabled",void 0),l([(0,i.property)()],u.prototype,"variant",void 0),l([(0,i.property)()],u.prototype,"icon",void 0),u=l([(0,n.customElement)("wui-link")],u),t.s([],210380)},421147,t=>{"use strict";t.i(383227),t.s([])},305840,t=>{"use strict";var e=t.i(401564),r=t.i(82283),i=t.i(221728),o=t.i(542904);t.s(["HelpersUtil",0,{getTabsByNamespace:t=>t&&t===e.ConstantsUtil.CHAIN.EVM?r.OptionsController.state.remoteFeatures?.activity===!1?o.ConstantsUtil.ACCOUNT_TABS.filter(t=>"Activity"!==t.label):o.ConstantsUtil.ACCOUNT_TABS:[],isValidReownName:t=>/^[a-zA-Z0-9]+$/gu.test(t),isValidEmail:t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(t),validateReownName:t=>t.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,""),hasFooter(){let t=i.RouterController.state.view;if(o.ConstantsUtil.VIEWS_WITH_LEGAL_FOOTER.includes(t)){let{termsConditionsUrl:t,privacyPolicyUrl:e}=r.OptionsController.state,i=r.OptionsController.state.features?.legalCheckbox;return(!!t||!!e)&&!i}return o.ConstantsUtil.VIEWS_WITH_DEFAULT_FOOTER.includes(t)}}])},630352,t=>{"use strict";t.i(812207);var e=t.i(604148),r=t.i(654479);t.i(374576);var i=t.i(120119);t.i(852634),t.i(839009);var o=t.i(459088),n=t.i(645975),s=t.i(162611);let a=s.css`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({spacing:t})=>t[1]};
    text-transform: uppercase;
    white-space: nowrap;
  }

  :host([data-variant='accent']) {
    background-color: ${({tokens:t})=>t.core.foregroundAccent010};
    color: ${({tokens:t})=>t.core.textAccentPrimary};
  }

  :host([data-variant='info']) {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    color: ${({tokens:t})=>t.theme.textSecondary};
  }

  :host([data-variant='success']) {
    background-color: ${({tokens:t})=>t.core.backgroundSuccess};
    color: ${({tokens:t})=>t.core.textSuccess};
  }

  :host([data-variant='warning']) {
    background-color: ${({tokens:t})=>t.core.backgroundWarning};
    color: ${({tokens:t})=>t.core.textWarning};
  }

  :host([data-variant='error']) {
    background-color: ${({tokens:t})=>t.core.backgroundError};
    color: ${({tokens:t})=>t.core.textError};
  }

  :host([data-variant='certified']) {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    color: ${({tokens:t})=>t.theme.textSecondary};
  }

  :host([data-size='md']) {
    height: 30px;
    padding: 0 ${({spacing:t})=>t[2]};
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  :host([data-size='sm']) {
    height: 20px;
    padding: 0 ${({spacing:t})=>t[1]};
    border-radius: ${({borderRadius:t})=>t[1]};
  }
`;var l=function(t,e,r,i){var o,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let c=class extends e.LitElement{constructor(){super(...arguments),this.variant="accent",this.size="md",this.icon=void 0}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;let t="md"===this.size?"md-medium":"sm-medium",e="md"===this.size?"md":"sm";return r.html`
      ${this.icon?r.html`<wui-icon size=${e} name=${this.icon}></wui-icon>`:null}
      <wui-text
        display="inline"
        data-variant=${this.variant}
        variant=${t}
        color="inherit"
      >
        <slot></slot>
      </wui-text>
    `}};c.styles=[o.resetStyles,a],l([(0,i.property)()],c.prototype,"variant",void 0),l([(0,i.property)()],c.prototype,"size",void 0),l([(0,i.property)()],c.prototype,"icon",void 0),c=l([(0,n.customElement)("wui-tag")],c),t.s([],630352)},467034,(t,e,r)=>{var i={675:function(t,e){"use strict";e.byteLength=function(t){var e=l(t),r=e[0],i=e[1];return(r+i)*3/4-i},e.toByteArray=function(t){var e,r,n=l(t),s=n[0],a=n[1],c=new o((s+a)*3/4-a),h=0,u=a>0?s-4:s;for(r=0;r<u;r+=4)e=i[t.charCodeAt(r)]<<18|i[t.charCodeAt(r+1)]<<12|i[t.charCodeAt(r+2)]<<6|i[t.charCodeAt(r+3)],c[h++]=e>>16&255,c[h++]=e>>8&255,c[h++]=255&e;return 2===a&&(e=i[t.charCodeAt(r)]<<2|i[t.charCodeAt(r+1)]>>4,c[h++]=255&e),1===a&&(e=i[t.charCodeAt(r)]<<10|i[t.charCodeAt(r+1)]<<4|i[t.charCodeAt(r+2)]>>2,c[h++]=e>>8&255,c[h++]=255&e),c},e.fromByteArray=function(t){for(var e,i=t.length,o=i%3,n=[],s=0,a=i-o;s<a;s+=16383)n.push(function(t,e,i){for(var o,n=[],s=e;s<i;s+=3)o=(t[s]<<16&0xff0000)+(t[s+1]<<8&65280)+(255&t[s+2]),n.push(r[o>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o]);return n.join("")}(t,s,s+16383>a?a:s+16383));return 1===o?n.push(r[(e=t[i-1])>>2]+r[e<<4&63]+"=="):2===o&&n.push(r[(e=(t[i-2]<<8)+t[i-1])>>10]+r[e>>4&63]+r[e<<2&63]+"="),n.join("")};for(var r=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=0,a=n.length;s<a;++s)r[s]=n[s],i[n.charCodeAt(s)]=s;function l(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");-1===r&&(r=e);var i=r===e?0:4-r%4;return[r,i]}i[45]=62,i[95]=63},72:function(t,e,r){"use strict";var i=r(675),o=r(783),n="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function s(t){if(t>0x7fffffff)throw RangeError('The value "'+t+'" is invalid for option "size"');var e=new Uint8Array(t);return Object.setPrototypeOf(e,a.prototype),e}function a(t,e,r){if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return h(t)}return l(t,e,r)}function l(t,e,r){if("string"==typeof t){var i=t,o=e;if(("string"!=typeof o||""===o)&&(o="utf8"),!a.isEncoding(o))throw TypeError("Unknown encoding: "+o);var n=0|d(i,o),l=s(n),c=l.write(i,o);return c!==n&&(l=l.slice(0,c)),l}if(ArrayBuffer.isView(t))return u(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(S(t,ArrayBuffer)||t&&S(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(S(t,SharedArrayBuffer)||t&&S(t.buffer,SharedArrayBuffer)))return function(t,e,r){var i;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(i=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),a.prototype),i}(t,e,r);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');var h=t.valueOf&&t.valueOf();if(null!=h&&h!==t)return a.from(h,e,r);var p=function(t){if(a.isBuffer(t)){var e=0|f(t.length),r=s(e);return 0===r.length||t.copy(r,0,0,e),r}return void 0!==t.length?"number"!=typeof t.length||function(t){return t!=t}(t.length)?s(0):u(t):"Buffer"===t.type&&Array.isArray(t.data)?u(t.data):void 0}(t);if(p)return p;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return a.from(t[Symbol.toPrimitive]("string"),e,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function c(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function h(t){return c(t),s(t<0?0:0|f(t))}function u(t){for(var e=t.length<0?0:0|f(t.length),r=s(e),i=0;i<e;i+=1)r[i]=255&t[i];return r}e.Buffer=a,e.SlowBuffer=function(t){return+t!=t&&(t=0),a.alloc(+t)},e.INSPECT_MAX_BYTES=50,e.kMaxLength=0x7fffffff,a.TYPED_ARRAY_SUPPORT=function(){try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),a.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}}),a.poolSize=8192,a.from=function(t,e,r){return l(t,e,r)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array),a.alloc=function(t,e,r){return(c(t),t<=0)?s(t):void 0!==e?"string"==typeof r?s(t).fill(e,r):s(t).fill(e):s(t)},a.allocUnsafe=function(t){return h(t)},a.allocUnsafeSlow=function(t){return h(t)};function f(t){if(t>=0x7fffffff)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function d(t,e){if(a.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||S(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);var r=t.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===r)return 0;for(var o=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return O(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return B(t).length;default:if(o)return i?-1:O(t).length;e=(""+e).toLowerCase(),o=!0}}function p(t,e,r){var o,n,s,a=!1;if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,r){var i=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>i)&&(r=i);for(var o="",n=e;n<r;++n)o+=k[t[n]];return o}(this,e,r);case"utf8":case"utf-8":return m(this,e,r);case"ascii":return function(t,e,r){var i="";r=Math.min(t.length,r);for(var o=e;o<r;++o)i+=String.fromCharCode(127&t[o]);return i}(this,e,r);case"latin1":case"binary":return function(t,e,r){var i="";r=Math.min(t.length,r);for(var o=e;o<r;++o)i+=String.fromCharCode(t[o]);return i}(this,e,r);case"base64":return o=this,n=e,s=r,0===n&&s===o.length?i.fromByteArray(o):i.fromByteArray(o.slice(n,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,r){for(var i=t.slice(e,r),o="",n=0;n<i.length;n+=2)o+=String.fromCharCode(i[n]+256*i[n+1]);return o}(this,e,r);default:if(a)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),a=!0}}function g(t,e,r){var i=t[e];t[e]=t[r],t[r]=i}function y(t,e,r,i,o){var n;if(0===t.length)return -1;if("string"==typeof r?(i=r,r=0):r>0x7fffffff?r=0x7fffffff:r<-0x80000000&&(r=-0x80000000),(n=r*=1)!=n&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length)if(o)return -1;else r=t.length-1;else if(r<0)if(!o)return -1;else r=0;if("string"==typeof e&&(e=a.from(e,i)),a.isBuffer(e))return 0===e.length?-1:b(t,e,r,i,o);if("number"==typeof e){if(e&=255,"function"==typeof Uint8Array.prototype.indexOf)if(o)return Uint8Array.prototype.indexOf.call(t,e,r);else return Uint8Array.prototype.lastIndexOf.call(t,e,r);return b(t,[e],r,i,o)}throw TypeError("val must be string, number or Buffer")}function b(t,e,r,i,o){var n,s=1,a=t.length,l=e.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(t.length<2||e.length<2)return -1;s=2,a/=2,l/=2,r/=2}function c(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(o){var h=-1;for(n=r;n<a;n++)if(c(t,n)===c(e,-1===h?0:n-h)){if(-1===h&&(h=n),n-h+1===l)return h*s}else -1!==h&&(n-=n-h),h=-1}else for(r+l>a&&(r=a-l),n=r;n>=0;n--){for(var u=!0,f=0;f<l;f++)if(c(t,n+f)!==c(e,f)){u=!1;break}if(u)return n}return -1}a.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==a.prototype},a.compare=function(t,e){if(S(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),S(e,Uint8Array)&&(e=a.from(e,e.offset,e.byteLength)),!a.isBuffer(t)||!a.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var r=t.length,i=e.length,o=0,n=Math.min(r,i);o<n;++o)if(t[o]!==e[o]){r=t[o],i=e[o];break}return r<i?-1:+(i<r)},a.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(t,e){if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return a.alloc(0);if(void 0===e)for(r=0,e=0;r<t.length;++r)e+=t[r].length;var r,i=a.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){var n=t[r];if(S(n,Uint8Array)&&(n=a.from(n)),!a.isBuffer(n))throw TypeError('"list" argument must be an Array of Buffers');n.copy(i,o),o+=n.length}return i},a.byteLength=d,a.prototype._isBuffer=!0,a.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)g(this,e,e+1);return this},a.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)g(this,e,e+3),g(this,e+1,e+2);return this},a.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)g(this,e,e+7),g(this,e+1,e+6),g(this,e+2,e+5),g(this,e+3,e+4);return this},a.prototype.toString=function(){var t=this.length;return 0===t?"":0==arguments.length?m(this,0,t):p.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(t){if(!a.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===a.compare(this,t)},a.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(t+=" ... "),"<Buffer "+t+">"},n&&(a.prototype[n]=a.prototype.inspect),a.prototype.compare=function(t,e,r,i,o){if(S(t,Uint8Array)&&(t=a.from(t,t.offset,t.byteLength)),!a.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===i&&(i=0),void 0===o&&(o=this.length),e<0||r>t.length||i<0||o>this.length)throw RangeError("out of range index");if(i>=o&&e>=r)return 0;if(i>=o)return -1;if(e>=r)return 1;if(e>>>=0,r>>>=0,i>>>=0,o>>>=0,this===t)return 0;for(var n=o-i,s=r-e,l=Math.min(n,s),c=this.slice(i,o),h=t.slice(e,r),u=0;u<l;++u)if(c[u]!==h[u]){n=c[u],s=h[u];break}return n<s?-1:+(s<n)},a.prototype.includes=function(t,e,r){return -1!==this.indexOf(t,e,r)},a.prototype.indexOf=function(t,e,r){return y(this,t,e,r,!0)},a.prototype.lastIndexOf=function(t,e,r){return y(this,t,e,r,!1)};function m(t,e,r){r=Math.min(t.length,r);for(var i=[],o=e;o<r;){var n,s,a,l,c=t[o],h=null,u=c>239?4:c>223?3:c>191?2:1;if(o+u<=r)switch(u){case 1:c<128&&(h=c);break;case 2:(192&(n=t[o+1]))==128&&(l=(31&c)<<6|63&n)>127&&(h=l);break;case 3:n=t[o+1],s=t[o+2],(192&n)==128&&(192&s)==128&&(l=(15&c)<<12|(63&n)<<6|63&s)>2047&&(l<55296||l>57343)&&(h=l);break;case 4:n=t[o+1],s=t[o+2],a=t[o+3],(192&n)==128&&(192&s)==128&&(192&a)==128&&(l=(15&c)<<18|(63&n)<<12|(63&s)<<6|63&a)>65535&&l<1114112&&(h=l)}null===h?(h=65533,u=1):h>65535&&(h-=65536,i.push(h>>>10&1023|55296),h=56320|1023&h),i.push(h),o+=u}var f=i,d=f.length;if(d<=4096)return String.fromCharCode.apply(String,f);for(var p="",g=0;g<d;)p+=String.fromCharCode.apply(String,f.slice(g,g+=4096));return p}function x(t,e,r){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>r)throw RangeError("Trying to access beyond buffer length")}function w(t,e,r,i,o,n){if(!a.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<n)throw RangeError('"value" argument is out of bounds');if(r+i>t.length)throw RangeError("Index out of range")}function v(t,e,r,i,o,n){if(r+i>t.length||r<0)throw RangeError("Index out of range")}function E(t,e,r,i,n){return e*=1,r>>>=0,n||v(t,e,r,4,34028234663852886e22,-34028234663852886e22),o.write(t,e,r,i,23,4),r+4}function C(t,e,r,i,n){return e*=1,r>>>=0,n||v(t,e,r,8,17976931348623157e292,-17976931348623157e292),o.write(t,e,r,i,52,8),r+8}a.prototype.write=function(t,e,r,i){if(void 0===e)i="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)i=e,r=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(r)?(r>>>=0,void 0===i&&(i="utf8")):(i=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o,n,s,a,l,c,h,u,f=this.length-e;if((void 0===r||r>f)&&(r=f),t.length>0&&(r<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var d=!1;;)switch(i){case"hex":return function(t,e,r,i){r=Number(r)||0;var o=t.length-r;i?(i=Number(i))>o&&(i=o):i=o;var n=e.length;i>n/2&&(i=n/2);for(var s=0;s<i;++s){var a,l=parseInt(e.substr(2*s,2),16);if((a=l)!=a)break;t[r+s]=l}return s}(this,t,e,r);case"utf8":case"utf-8":return o=e,n=r,T(O(t,this.length-o),this,o,n);case"ascii":return s=e,a=r,T($(t),this,s,a);case"latin1":case"binary":return function(t,e,r,i){return T($(e),t,r,i)}(this,t,e,r);case"base64":return l=e,c=r,T(B(t),this,l,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return h=e,u=r,T(function(t,e){for(var r,i,o=[],n=0;n<t.length&&!((e-=2)<0);++n)i=(r=t.charCodeAt(n))>>8,o.push(r%256),o.push(i);return o}(t,this.length-h),this,h,u);default:if(d)throw TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),d=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},a.prototype.slice=function(t,e){var r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);var i=this.subarray(t,e);return Object.setPrototypeOf(i,a.prototype),i},a.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||x(t,e,this.length);for(var i=this[t],o=1,n=0;++n<e&&(o*=256);)i+=this[t+n]*o;return i},a.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||x(t,e,this.length);for(var i=this[t+--e],o=1;e>0&&(o*=256);)i+=this[t+--e]*o;return i},a.prototype.readUInt8=function(t,e){return t>>>=0,e||x(t,1,this.length),this[t]},a.prototype.readUInt16LE=function(t,e){return t>>>=0,e||x(t,2,this.length),this[t]|this[t+1]<<8},a.prototype.readUInt16BE=function(t,e){return t>>>=0,e||x(t,2,this.length),this[t]<<8|this[t+1]},a.prototype.readUInt32LE=function(t,e){return t>>>=0,e||x(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+0x1000000*this[t+3]},a.prototype.readUInt32BE=function(t,e){return t>>>=0,e||x(t,4,this.length),0x1000000*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},a.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||x(t,e,this.length);for(var i=this[t],o=1,n=0;++n<e&&(o*=256);)i+=this[t+n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},a.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||x(t,e,this.length);for(var i=e,o=1,n=this[t+--i];i>0&&(o*=256);)n+=this[t+--i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},a.prototype.readInt8=function(t,e){return(t>>>=0,e||x(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},a.prototype.readInt16LE=function(t,e){t>>>=0,e||x(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?0xffff0000|r:r},a.prototype.readInt16BE=function(t,e){t>>>=0,e||x(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?0xffff0000|r:r},a.prototype.readInt32LE=function(t,e){return t>>>=0,e||x(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},a.prototype.readInt32BE=function(t,e){return t>>>=0,e||x(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},a.prototype.readFloatLE=function(t,e){return t>>>=0,e||x(t,4,this.length),o.read(this,t,!0,23,4)},a.prototype.readFloatBE=function(t,e){return t>>>=0,e||x(t,4,this.length),o.read(this,t,!1,23,4)},a.prototype.readDoubleLE=function(t,e){return t>>>=0,e||x(t,8,this.length),o.read(this,t,!0,52,8)},a.prototype.readDoubleBE=function(t,e){return t>>>=0,e||x(t,8,this.length),o.read(this,t,!1,52,8)},a.prototype.writeUIntLE=function(t,e,r,i){if(t*=1,e>>>=0,r>>>=0,!i){var o=Math.pow(2,8*r)-1;w(this,t,e,r,o,0)}var n=1,s=0;for(this[e]=255&t;++s<r&&(n*=256);)this[e+s]=t/n&255;return e+r},a.prototype.writeUIntBE=function(t,e,r,i){if(t*=1,e>>>=0,r>>>=0,!i){var o=Math.pow(2,8*r)-1;w(this,t,e,r,o,0)}var n=r-1,s=1;for(this[e+n]=255&t;--n>=0&&(s*=256);)this[e+n]=t/s&255;return e+r},a.prototype.writeUInt8=function(t,e,r){return t*=1,e>>>=0,r||w(this,t,e,1,255,0),this[e]=255&t,e+1},a.prototype.writeUInt16LE=function(t,e,r){return t*=1,e>>>=0,r||w(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},a.prototype.writeUInt16BE=function(t,e,r){return t*=1,e>>>=0,r||w(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},a.prototype.writeUInt32LE=function(t,e,r){return t*=1,e>>>=0,r||w(this,t,e,4,0xffffffff,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},a.prototype.writeUInt32BE=function(t,e,r){return t*=1,e>>>=0,r||w(this,t,e,4,0xffffffff,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},a.prototype.writeIntLE=function(t,e,r,i){if(t*=1,e>>>=0,!i){var o=Math.pow(2,8*r-1);w(this,t,e,r,o-1,-o)}var n=0,s=1,a=0;for(this[e]=255&t;++n<r&&(s*=256);)t<0&&0===a&&0!==this[e+n-1]&&(a=1),this[e+n]=(t/s|0)-a&255;return e+r},a.prototype.writeIntBE=function(t,e,r,i){if(t*=1,e>>>=0,!i){var o=Math.pow(2,8*r-1);w(this,t,e,r,o-1,-o)}var n=r-1,s=1,a=0;for(this[e+n]=255&t;--n>=0&&(s*=256);)t<0&&0===a&&0!==this[e+n+1]&&(a=1),this[e+n]=(t/s|0)-a&255;return e+r},a.prototype.writeInt8=function(t,e,r){return t*=1,e>>>=0,r||w(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},a.prototype.writeInt16LE=function(t,e,r){return t*=1,e>>>=0,r||w(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},a.prototype.writeInt16BE=function(t,e,r){return t*=1,e>>>=0,r||w(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},a.prototype.writeInt32LE=function(t,e,r){return t*=1,e>>>=0,r||w(this,t,e,4,0x7fffffff,-0x80000000),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},a.prototype.writeInt32BE=function(t,e,r){return t*=1,e>>>=0,r||w(this,t,e,4,0x7fffffff,-0x80000000),t<0&&(t=0xffffffff+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},a.prototype.writeFloatLE=function(t,e,r){return E(this,t,e,!0,r)},a.prototype.writeFloatBE=function(t,e,r){return E(this,t,e,!1,r)},a.prototype.writeDoubleLE=function(t,e,r){return C(this,t,e,!0,r)},a.prototype.writeDoubleBE=function(t,e,r){return C(this,t,e,!1,r)},a.prototype.copy=function(t,e,r,i){if(!a.isBuffer(t))throw TypeError("argument should be a Buffer");if(r||(r=0),i||0===i||(i=this.length),e>=t.length&&(e=t.length),e||(e=0),i>0&&i<r&&(i=r),i===r||0===t.length||0===this.length)return 0;if(e<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(i<0)throw RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),t.length-e<i-r&&(i=t.length-e+r);var o=i-r;if(this===t&&"function"==typeof Uint8Array.prototype.copyWithin)this.copyWithin(e,r,i);else if(this===t&&r<e&&e<i)for(var n=o-1;n>=0;--n)t[n+e]=this[n+r];else Uint8Array.prototype.set.call(t,this.subarray(r,i),e);return o},a.prototype.fill=function(t,e,r,i){if("string"==typeof t){if("string"==typeof e?(i=e,e=0,r=this.length):"string"==typeof r&&(i=r,r=this.length),void 0!==i&&"string"!=typeof i)throw TypeError("encoding must be a string");if("string"==typeof i&&!a.isEncoding(i))throw TypeError("Unknown encoding: "+i);if(1===t.length){var o,n=t.charCodeAt(0);("utf8"===i&&n<128||"latin1"===i)&&(t=n)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<r)throw RangeError("Out of range index");if(r<=e)return this;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{var s=a.isBuffer(t)?t:a.from(t,i),l=s.length;if(0===l)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<r-e;++o)this[o+e]=s[o%l]}return this};var A=/[^+/0-9A-Za-z-_]/g;function O(t,e){e=e||1/0;for(var r,i=t.length,o=null,n=[],s=0;s<i;++s){if((r=t.charCodeAt(s))>55295&&r<57344){if(!o){if(r>56319||s+1===i){(e-=3)>-1&&n.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&n.push(239,191,189),o=r;continue}r=(o-55296<<10|r-56320)+65536}else o&&(e-=3)>-1&&n.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;n.push(r)}else if(r<2048){if((e-=2)<0)break;n.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;n.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((e-=4)<0)break;n.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return n}function $(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}function B(t){return i.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(A,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function T(t,e,r,i){for(var o=0;o<i&&!(o+r>=e.length)&&!(o>=t.length);++o)e[o+r]=t[o];return o}function S(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}var k=function(){for(var t="0123456789abcdef",e=Array(256),r=0;r<16;++r)for(var i=16*r,o=0;o<16;++o)e[i+o]=t[r]+t[o];return e}()},783:function(t,e){e.read=function(t,e,r,i,o){var n,s,a=8*o-i-1,l=(1<<a)-1,c=l>>1,h=-7,u=r?o-1:0,f=r?-1:1,d=t[e+u];for(u+=f,n=d&(1<<-h)-1,d>>=-h,h+=a;h>0;n=256*n+t[e+u],u+=f,h-=8);for(s=n&(1<<-h)-1,n>>=-h,h+=i;h>0;s=256*s+t[e+u],u+=f,h-=8);if(0===n)n=1-c;else{if(n===l)return s?NaN:1/0*(d?-1:1);s+=Math.pow(2,i),n-=c}return(d?-1:1)*s*Math.pow(2,n-i)},e.write=function(t,e,r,i,o,n){var s,a,l,c=8*n-o-1,h=(1<<c)-1,u=h>>1,f=5960464477539062e-23*(23===o),d=i?0:n-1,p=i?1:-1,g=+(e<0||0===e&&1/e<0);for(isNaN(e=Math.abs(e))||e===1/0?(a=+!!isNaN(e),s=h):(s=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+u>=1?e+=f/l:e+=f*Math.pow(2,1-u),e*l>=2&&(s++,l/=2),s+u>=h?(a=0,s=h):s+u>=1?(a=(e*l-1)*Math.pow(2,o),s+=u):(a=e*Math.pow(2,u-1)*Math.pow(2,o),s=0));o>=8;t[r+d]=255&a,d+=p,a/=256,o-=8);for(s=s<<o|a,c+=o;c>0;t[r+d]=255&s,d+=p,s/=256,c-=8);t[r+d-p]|=128*g}}},o={};function n(t){var e=o[t];if(void 0!==e)return e.exports;var r=o[t]={exports:{}},s=!0;try{i[t](r,r.exports,n),s=!1}finally{s&&delete o[t]}return r.exports}n.ab="/ROOT/node_modules/next/dist/compiled/buffer/",e.exports=n(72)},16555,t=>{"use strict";let e={METMASK_CONNECTOR_NAME:"MetaMask",TRUST_CONNECTOR_NAME:"Trust Wallet",SOLFLARE_CONNECTOR_NAME:"Solflare",PHANTOM_CONNECTOR_NAME:"Phantom",COIN98_CONNECTOR_NAME:"Coin98",MAGIC_EDEN_CONNECTOR_NAME:"Magic Eden",BACKPACK_CONNECTOR_NAME:"Backpack",BITGET_CONNECTOR_NAME:"Bitget Wallet",FRONTIER_CONNECTOR_NAME:"Frontier",XVERSE_CONNECTOR_NAME:"Xverse Wallet",LEATHER_CONNECTOR_NAME:"Leather",OKX_CONNECTOR_NAME:"OKX Wallet",BINANCE_CONNECTOR_NAME:"Binance Wallet",EIP155:t.i(401564).ConstantsUtil.CHAIN.EVM,ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet",coinbaseWalletSDK:"com.coinbase.wallet"},CONNECTOR_TYPE_EXTERNAL:"EXTERNAL",CONNECTOR_TYPE_WALLET_CONNECT:"WALLET_CONNECT",CONNECTOR_TYPE_INJECTED:"INJECTED",CONNECTOR_TYPE_ANNOUNCED:"ANNOUNCED",CONNECTOR_TYPE_AUTH:"AUTH",CONNECTOR_TYPE_MULTI_CHAIN:"MULTI_CHAIN",CONNECTOR_TYPE_W3M_AUTH:"AUTH",getSDKVersionWarningMessage:(t,e)=>`
     @@@@@@@           @@@@@@@@@@@@@@@@@@      
   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   
  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@   @@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@   @@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@  @@@@@@@@@@@@@
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@   @@@@@@@@@@@@@    
 @@@@@@   @@@@@@  @@@@@@@@@@@   @@@@@@@@@@@@@@    
 @@@@@@   @@@@@@  @@@@@@@@@@@  @@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@   @@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  
  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  
   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   
      @@@@@            @@@@@@@@@@@@@@@@@@  
      
AppKit SDK version ${t} is outdated. Latest version is ${e}. Please update to the latest version for bug fixes and new features.
            
Changelog: https://github.com/reown-com/appkit/releases
NPM Registry: https://www.npmjs.com/package/@reown/appkit`};t.s(["ConstantsUtil",0,e])},143053,t=>{"use strict";t.i(812207);var e=t.i(604148),r=t.i(654479);t.i(374576);var i=t.i(120119);t.i(234051);var o=t.i(829389);t.i(383227),t.i(839009);var n=t.i(459088),s=t.i(645975),a=t.i(162611);let l=a.css`
  :host {
    width: 100%;
  }

  :host([data-type='primary']) > button {
    background-color: ${({tokens:t})=>t.theme.backgroundPrimary};
  }

  :host([data-type='secondary']) > button {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:t})=>t[3]};
    width: 100%;
    border-radius: ${({borderRadius:t})=>t[4]};
    transition:
      background-color ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]},
      scale ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:t})=>t.theme.textPrimary};
  }

  @media (hover: hover) {
    :host([data-type='primary']) > button:hover:enabled {
      background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    }

    :host([data-type='secondary']) > button:hover:enabled {
      background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var c=function(t,e,r,i){var o,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let h=class extends e.LitElement{constructor(){super(...arguments),this.type="primary",this.imageSrc="google",this.imageSize=void 0,this.loading=!1,this.boxColor="foregroundPrimary",this.disabled=!1,this.rightIcon=!0,this.boxed=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",this.dataset.type=this.type,r.html`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        tabindex=${(0,o.ifDefined)(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?r.html`<wui-image
        icon=${this.icon}
        iconColor=${(0,o.ifDefined)(this.iconColor)}
        ?boxed=${this.boxed}
        ?rounded=${this.rounded}
        boxColor=${this.boxColor}
      ></wui-image>`:r.html`<wui-image
      ?boxed=${this.boxed}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      size=${(0,o.ifDefined)(this.imageSize)}
      src=${this.imageSrc}
      boxColor=${this.boxColor}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?r.html`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:r.html`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};h.styles=[n.resetStyles,n.elementStyles,l],c([(0,i.property)()],h.prototype,"type",void 0),c([(0,i.property)()],h.prototype,"imageSrc",void 0),c([(0,i.property)()],h.prototype,"imageSize",void 0),c([(0,i.property)()],h.prototype,"icon",void 0),c([(0,i.property)()],h.prototype,"iconColor",void 0),c([(0,i.property)({type:Boolean})],h.prototype,"loading",void 0),c([(0,i.property)()],h.prototype,"tabIdx",void 0),c([(0,i.property)()],h.prototype,"boxColor",void 0),c([(0,i.property)({type:Boolean})],h.prototype,"disabled",void 0),c([(0,i.property)({type:Boolean})],h.prototype,"rightIcon",void 0),c([(0,i.property)({type:Boolean})],h.prototype,"boxed",void 0),c([(0,i.property)({type:Boolean})],h.prototype,"rounded",void 0),c([(0,i.property)({type:Boolean})],h.prototype,"fullSize",void 0),h=c([(0,s.customElement)("wui-list-item")],h),t.s([],143053)},79929,t=>{"use strict";t.i(812207);var e=t.i(604148),r=t.i(654479);t.i(374576);var i=t.i(120119);t.i(839009);var o=t.i(459088),n=t.i(645975),s=t.i(162611);let a=s.css`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:t})=>t.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color;
  }

  :host([data-bg-color='primary']) > wui-text {
    background-color: ${({tokens:t})=>t.theme.backgroundPrimary};
  }

  :host([data-bg-color='secondary']) > wui-text {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }
`;var l=function(t,e,r,i){var o,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let c=class extends e.LitElement{constructor(){super(...arguments),this.text="",this.bgColor="primary"}render(){return this.dataset.bgColor=this.bgColor,r.html`${this.template()}`}template(){return this.text?r.html`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};c.styles=[o.resetStyles,a],l([(0,i.property)()],c.prototype,"text",void 0),l([(0,i.property)()],c.prototype,"bgColor",void 0),c=l([(0,n.customElement)("wui-separator")],c),t.s([],79929)},907170,695553,t=>{"use strict";t.i(812207);var e=t.i(604148),r=t.i(654479);t.i(374576);var i=t.i(120119);t.i(852634);var o=t.i(459088),n=t.i(645975),s=t.i(162611);let a=s.css`
  button {
    background-color: transparent;
    padding: ${({spacing:t})=>t[1]};
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:t})=>t.core.foregroundAccent020};
  }

  button[data-variant='accent']:hover:enabled,
  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:t})=>t.core.foregroundAccent010};
  }

  button[data-variant='primary']:hover:enabled,
  button[data-variant='primary']:focus-visible,
  button[data-variant='secondary']:hover:enabled,
  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  button[data-size='xs'] > wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='xs'],
  button[data-size='sm'] {
    border-radius: ${({borderRadius:t})=>t[1]};
  }

  button[data-size='md'],
  button[data-size='lg'] {
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  button[data-size='md'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button:disabled {
    background-color: transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`;var l=function(t,e,r,i){var o,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let c=class extends e.LitElement{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="default",this.variant="accent"}render(){return r.html`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${({accent:"accent-primary",primary:"inverse",secondary:"default"})[this.variant]||this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `}};c.styles=[o.resetStyles,o.elementStyles,a],l([(0,i.property)()],c.prototype,"size",void 0),l([(0,i.property)({type:Boolean})],c.prototype,"disabled",void 0),l([(0,i.property)()],c.prototype,"icon",void 0),l([(0,i.property)()],c.prototype,"iconColor",void 0),l([(0,i.property)()],c.prototype,"variant",void 0),c=l([(0,n.customElement)("wui-icon-link")],c),t.s([],695553),t.s([],907170)},769718,t=>{"use strict";var e=t.i(401564),r=t.i(960398),i=t.i(149454),o=t.i(758331),n=t.i(16555);let s={getCaipTokens(t){if(!t)return;let e={};return Object.entries(t).forEach(([t,r])=>{e[`${n.ConstantsUtil.EIP155}:${t}`]=r}),e},isLowerCaseMatch:(t,e)=>t?.toLowerCase()===e?.toLowerCase(),getActiveNamespaceConnectedToAuth(){let t=r.ChainController.state.activeChain;return e.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(r=>i.ConnectorController.getConnectorId(r)===e.ConstantsUtil.CONNECTOR_ID.AUTH&&r===t)},withRetry({conditionFn:t,intervalMs:e,maxRetries:r}){let i=0;return new Promise(o=>{async function n(){return(i+=1,await t())?o(!0):i>=r?o(!1):(setTimeout(n,e),null)}n()})},userChainIdToChainNamespace(t){if("number"==typeof t)return e.ConstantsUtil.CHAIN.EVM;let[r]=t.split(":");return r},getOtherAuthNamespaces:t=>t?e.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.filter(e=>e!==t):[],getConnectorStorageInfo(t,e){let r=o.StorageUtil.getConnections()[e]??[];return{hasDisconnected:o.StorageUtil.isConnectorDisconnected(t,e),hasConnected:r.some(e=>s.isLowerCaseMatch(e.connectorId,t))}}};t.s(["HelpersUtil",0,s])},604415,t=>{"use strict";t.i(812207);var e=t.i(604148),r=t.i(654479);t.i(374576);var i=t.i(120119);t.i(234051);var o=t.i(829389);t.i(852634),t.i(864380),t.i(839009),t.i(73944);var n=t.i(459088),s=t.i(112699),a=t.i(645975),l=t.i(162611);let c=l.css`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({spacing:t})=>t[2]};
    border-radius: ${({borderRadius:t})=>t[4]};
    column-gap: ${({spacing:t})=>t[1]};
    background-color: transparent;
    transition: background-color ${({durations:t})=>t.lg}
      ${({easings:t})=>t["ease-out-power-2"]};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({spacing:t})=>t[6]};
    height: ${({spacing:t})=>t[6]};
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({tokens:t})=>t.core.textSuccess};
    box-shadow: 0 0 0 2px ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    }
  }
`;var h=function(t,e,r,i){var o,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let u=class extends e.LitElement{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.enableGreenCircle=!0,this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return r.html`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){let t=this.icon?r.html`<wui-icon
          size=${(0,o.ifDefined)(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:r.html`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return r.html`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${!!this.icon}
      >
        ${t}
        ${this.enableGreenCircle?r.html`<wui-flex class="circle"></wui-flex>`:null}
      </wui-flex>
    `}textTemplate(){return r.html`
      <wui-text variant="lg-regular" color="primary">
        ${s.UiHelperUtil.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return r.html`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`}};u.styles=[n.resetStyles,n.elementStyles,c],h([(0,i.property)()],u.prototype,"address",void 0),h([(0,i.property)()],u.prototype,"profileName",void 0),h([(0,i.property)()],u.prototype,"alt",void 0),h([(0,i.property)()],u.prototype,"imageSrc",void 0),h([(0,i.property)()],u.prototype,"icon",void 0),h([(0,i.property)()],u.prototype,"iconSize",void 0),h([(0,i.property)({type:Boolean})],u.prototype,"enableGreenCircle",void 0),h([(0,i.property)({type:Boolean})],u.prototype,"loading",void 0),h([(0,i.property)({type:Number})],u.prototype,"charsStart",void 0),h([(0,i.property)({type:Number})],u.prototype,"charsEnd",void 0),u=h([(0,a.customElement)("wui-wallet-switch")],u),t.s([],604415)},720226,t=>{"use strict";t.i(812207);var e=t.i(604148),r=t.i(654479);t.i(374576);var i=t.i(120119);t.i(852634),t.i(864380);var o=t.i(459088),n=t.i(645975);t.i(912190);var s=t.i(162611);let a=s.css`
  :host {
    position: relative;
    background-color: ${({tokens:t})=>t.theme.foregroundTertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-image='true']) {
    background-color: transparent;
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-size='sm']) {
    width: 32px;
    height: 32px;
  }

  :host([data-size='md']) {
    width: 40px;
    height: 40px;
  }

  :host([data-size='lg']) {
    width: 56px;
    height: 56px;
  }

  :host([name='Extension'])::after {
    border: 1px solid ${({colors:t})=>t.accent010};
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid ${({colors:t})=>t.accent010};
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:t})=>t.theme.iconDefault};
  }

  wui-icon[data-parent-size='sm'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='md'] {
    width: 32px;
    height: 32px;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid ${({tokens:t})=>t.theme.backgroundPrimary};
    padding: 1px;
  }
`;var l=function(t,e,r,i){var o,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let c=class extends e.LitElement{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="1";return"lg"===this.size?t="4":"md"===this.size?t="2":"sm"===this.size&&(t="1"),this.style.cssText=`
       --local-border-radius: var(--apkt-borderRadius-${t});
   `,this.dataset.size=this.size,this.imageSrc&&(this.dataset.image="true"),this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),r.html`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?r.html`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?r.html`<wui-icon size="md" color="default" name=${this.walletIcon}></wui-icon>`:r.html`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};c.styles=[o.resetStyles,a],l([(0,i.property)()],c.prototype,"size",void 0),l([(0,i.property)()],c.prototype,"name",void 0),l([(0,i.property)()],c.prototype,"imageSrc",void 0),l([(0,i.property)()],c.prototype,"walletIcon",void 0),l([(0,i.property)({type:Boolean})],c.prototype,"installed",void 0),l([(0,i.property)()],c.prototype,"badgeSize",void 0),c=l([(0,n.customElement)("wui-wallet-image")],c),t.s([],720226)},252157,t=>{"use strict";t.i(812207);var e=t.i(654479);let r=e.svg`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;t.s(["networkSvgMd",0,r])},956303,t=>{"use strict";t.i(720226),t.s([])},116275,t=>{"use strict";t.i(812207);var e=t.i(654479);let r=e.svg`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;t.s(["networkSvgLg",0,r])},774339,t=>{"use strict";t.i(812207);var e=t.i(604148),r=t.i(654479);t.i(374576);var i=t.i(120119),o=t.i(116275),n=t.i(252157);let s=r.svg`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`;t.i(852634),t.i(864380);var a=t.i(459088),l=t.i(645975),c=t.i(162611);let h=c.css`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({tokens:t})=>t.core.glass010};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var u=function(t,e,r,i){var o,n=arguments.length,s=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(n<3?o(s):n>3?o(e,r,s):o(e,r))||s);return n>3&&s&&Object.defineProperty(e,r,s),s};let f=class extends e.LitElement{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:s,md:n.networkSvgMd,lg:o.networkSvgLg},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--apkt-spacing-10);
      --local-height: var(--apkt-spacing-10);
      --local-icon-size: var(--apkt-spacing-4);
    `):this.style.cssText=`

      --local-path: var(--apkt-path-network-${this.size});
      --local-width:  var(--apkt-width-network-${this.size});
      --local-height:  var(--apkt-height-network-${this.size});
      --local-icon-size:  var(--apkt-spacing-${({sm:"4",md:"6",lg:"10"})[this.size]});
    `,r.html`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?r.html`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:r.html`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};f.styles=[a.resetStyles,h],u([(0,i.property)()],f.prototype,"size",void 0),u([(0,i.property)()],f.prototype,"name",void 0),u([(0,i.property)({type:Object})],f.prototype,"networkImagesBySize",void 0),u([(0,i.property)()],f.prototype,"imageSrc",void 0),u([(0,i.property)({type:Boolean})],f.prototype,"selected",void 0),u([(0,i.property)({type:Boolean})],f.prototype,"round",void 0),f=u([(0,l.customElement)("wui-network-image")],f),t.s([],774339)},280355,t=>{"use strict";var e=t.i(510387);e.SHA256;let r=e.sha256;e.SHA224,e.sha224,t.s(["sha256",0,r])},470525,t=>{"use strict";let e="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0;function r(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&"Uint8Array"===t.constructor.name}function i(t){if(!Number.isSafeInteger(t)||t<0)throw Error("positive integer expected, got "+t)}function o(t,...e){if(!r(t))throw Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw Error("Uint8Array expected of length "+e+", got length="+t.length)}function n(t){if("function"!=typeof t||"function"!=typeof t.create)throw Error("Hash should be wrapped by utils.createHasher");i(t.outputLen),i(t.blockLen)}function s(t,e=!0){if(t.destroyed)throw Error("Hash instance has been destroyed");if(e&&t.finished)throw Error("Hash#digest() has already been called")}function a(t,e){o(t);let r=e.outputLen;if(t.length<r)throw Error("digestInto() expects output buffer of length at least "+r)}function l(t){return new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4))}function c(...t){for(let e=0;e<t.length;e++)t[e].fill(0)}function h(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)}function u(t,e){return t<<32-e|t>>>e}function f(t,e){return t<<e|t>>>32-e>>>0}let d=68===new Uint8Array(new Uint32Array([0x11223344]).buffer)[0]?t=>t:function(t){for(let r=0;r<t.length;r++){var e;t[r]=(e=t[r])<<24&0xff000000|e<<8&0xff0000|e>>>8&65280|e>>>24&255}return t},p="function"==typeof Uint8Array.from([]).toHex&&"function"==typeof Uint8Array.fromHex,g=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function y(t){if(o(t),p)return t.toHex();let e="";for(let r=0;r<t.length;r++)e+=g[t[r]];return e}function b(t){return t>=48&&t<=57?t-48:t>=65&&t<=70?t-55:t>=97&&t<=102?t-87:void 0}function m(t){if("string"!=typeof t)throw Error("hex string expected, got "+typeof t);if(p)return Uint8Array.fromHex(t);let e=t.length,r=e/2;if(e%2)throw Error("hex string expected, got unpadded hex of length "+e);let i=new Uint8Array(r);for(let e=0,o=0;e<r;e++,o+=2){let r=b(t.charCodeAt(o)),n=b(t.charCodeAt(o+1));if(void 0===r||void 0===n)throw Error('hex string expected, got non-hex character "'+(t[o]+t[o+1])+'" at index '+o);i[e]=16*r+n}return i}function x(t){if("string"!=typeof t)throw Error("string expected");return new Uint8Array(new TextEncoder().encode(t))}function w(t){return"string"==typeof t&&(t=x(t)),o(t),t}function v(...t){let e=0;for(let r=0;r<t.length;r++){let i=t[r];o(i),e+=i.length}let r=new Uint8Array(e);for(let e=0,i=0;e<t.length;e++){let o=t[e];r.set(o,i),i+=o.length}return r}class E{}function C(t){let e=e=>t().update(w(e)).digest(),r=t();return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=()=>t(),e}function A(t){let e=(e,r)=>t(r).update(w(e)).digest(),r=t({});return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=e=>t(e),e}function O(t=32){if(e&&"function"==typeof e.getRandomValues)return e.getRandomValues(new Uint8Array(t));if(e&&"function"==typeof e.randomBytes)return Uint8Array.from(e.randomBytes(t));throw Error("crypto.getRandomValues must be defined")}t.s(["Hash",()=>E,"abytes",()=>o,"aexists",()=>s,"ahash",()=>n,"anumber",()=>i,"aoutput",()=>a,"bytesToHex",()=>y,"clean",()=>c,"concatBytes",()=>v,"createHasher",()=>C,"createView",()=>h,"createXOFer",()=>A,"hexToBytes",()=>m,"isBytes",()=>r,"randomBytes",()=>O,"rotl",()=>f,"rotr",()=>u,"swap32IfBE",0,d,"toBytes",()=>w,"u32",()=>l,"utf8ToBytes",()=>x],470525)},709361,t=>{"use strict";let e=BigInt(0x100000000-1),r=BigInt(32);function i(t,o=!1){let n=t.length,s=new Uint32Array(n),a=new Uint32Array(n);for(let i=0;i<n;i++){let{h:n,l}=function(t,i=!1){return i?{h:Number(t&e),l:Number(t>>r&e)}:{h:0|Number(t>>r&e),l:0|Number(t&e)}}(t[i],o);[s[i],a[i]]=[n,l]}return[s,a]}let o=(t,e,r)=>t>>>r,n=(t,e,r)=>t<<32-r|e>>>r,s=(t,e,r)=>t>>>r|e<<32-r,a=(t,e,r)=>t<<32-r|e>>>r,l=(t,e,r)=>t<<64-r|e>>>r-32,c=(t,e,r)=>t>>>r-32|e<<64-r,h=(t,e,r)=>t<<r|e>>>32-r,u=(t,e,r)=>e<<r|t>>>32-r,f=(t,e,r)=>e<<r-32|t>>>64-r,d=(t,e,r)=>t<<r-32|e>>>64-r;function p(t,e,r,i){let o=(e>>>0)+(i>>>0);return{h:t+r+(o/0x100000000|0)|0,l:0|o}}let g=(t,e,r)=>(t>>>0)+(e>>>0)+(r>>>0),y=(t,e,r,i)=>e+r+i+(t/0x100000000|0)|0,b=(t,e,r,i)=>(t>>>0)+(e>>>0)+(r>>>0)+(i>>>0),m=(t,e,r,i,o)=>e+r+i+o+(t/0x100000000|0)|0,x=(t,e,r,i,o)=>(t>>>0)+(e>>>0)+(r>>>0)+(i>>>0)+(o>>>0),w=(t,e,r,i,o,n)=>e+r+i+o+n+(t/0x100000000|0)|0;t.s(["add",()=>p,"add3H",()=>y,"add3L",()=>g,"add4H",()=>m,"add4L",()=>b,"add5H",()=>w,"add5L",()=>x,"rotlBH",()=>f,"rotlBL",()=>d,"rotlSH",()=>h,"rotlSL",()=>u,"rotrBH",()=>l,"rotrBL",()=>c,"rotrSH",()=>s,"rotrSL",()=>a,"shrSH",()=>o,"shrSL",()=>n,"split",()=>i])},145535,t=>{"use strict";var e=t.i(709361),r=t.i(470525);let i=BigInt(0),o=BigInt(1),n=BigInt(2),s=BigInt(7),a=BigInt(256),l=BigInt(113),c=[],h=[],u=[];for(let t=0,e=o,r=1,f=0;t<24;t++){[r,f]=[f,(2*r+3*f)%5],c.push(2*(5*f+r)),h.push((t+1)*(t+2)/2%64);let d=i;for(let t=0;t<7;t++)(e=(e<<o^(e>>s)*l)%a)&n&&(d^=o<<(o<<BigInt(t))-o);u.push(d)}let f=(0,e.split)(u,!0),d=f[0],p=f[1],g=(t,r,i)=>i>32?(0,e.rotlBH)(t,r,i):(0,e.rotlSH)(t,r,i),y=(t,r,i)=>i>32?(0,e.rotlBL)(t,r,i):(0,e.rotlSL)(t,r,i);class b extends r.Hash{constructor(t,e,i,o=!1,n=24){if(super(),this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,this.enableXOF=!1,this.blockLen=t,this.suffix=e,this.outputLen=i,this.enableXOF=o,this.rounds=n,(0,r.anumber)(i),!(0<t&&t<200))throw Error("only keccak-f1600 function is supported");this.state=new Uint8Array(200),this.state32=(0,r.u32)(this.state)}clone(){return this._cloneInto()}keccak(){(0,r.swap32IfBE)(this.state32),function(t,e=24){let i=new Uint32Array(10);for(let r=24-e;r<24;r++){for(let e=0;e<10;e++)i[e]=t[e]^t[e+10]^t[e+20]^t[e+30]^t[e+40];for(let e=0;e<10;e+=2){let r=(e+8)%10,o=(e+2)%10,n=i[o],s=i[o+1],a=g(n,s,1)^i[r],l=y(n,s,1)^i[r+1];for(let r=0;r<50;r+=10)t[e+r]^=a,t[e+r+1]^=l}let e=t[2],o=t[3];for(let r=0;r<24;r++){let i=h[r],n=g(e,o,i),s=y(e,o,i),a=c[r];e=t[a],o=t[a+1],t[a]=n,t[a+1]=s}for(let e=0;e<50;e+=10){for(let r=0;r<10;r++)i[r]=t[e+r];for(let r=0;r<10;r++)t[e+r]^=~i[(r+2)%10]&i[(r+4)%10]}t[0]^=d[r],t[1]^=p[r]}(0,r.clean)(i)}(this.state32,this.rounds),(0,r.swap32IfBE)(this.state32),this.posOut=0,this.pos=0}update(t){(0,r.aexists)(this),t=(0,r.toBytes)(t),(0,r.abytes)(t);let{blockLen:e,state:i}=this,o=t.length;for(let r=0;r<o;){let n=Math.min(e-this.pos,o-r);for(let e=0;e<n;e++)i[this.pos++]^=t[r++];this.pos===e&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:t,suffix:e,pos:r,blockLen:i}=this;t[r]^=e,(128&e)!=0&&r===i-1&&this.keccak(),t[i-1]^=128,this.keccak()}writeInto(t){(0,r.aexists)(this,!1),(0,r.abytes)(t),this.finish();let e=this.state,{blockLen:i}=this;for(let r=0,o=t.length;r<o;){this.posOut>=i&&this.keccak();let n=Math.min(i-this.posOut,o-r);t.set(e.subarray(this.posOut,this.posOut+n),r),this.posOut+=n,r+=n}return t}xofInto(t){if(!this.enableXOF)throw Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return(0,r.anumber)(t),this.xofInto(new Uint8Array(t))}digestInto(t){if((0,r.aoutput)(t,this),this.finished)throw Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,(0,r.clean)(this.state)}_cloneInto(t){let{blockLen:e,suffix:r,outputLen:i,rounds:o,enableXOF:n}=this;return t||(t=new b(e,r,i,n,o)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=o,t.suffix=r,t.outputLen=i,t.enableXOF=n,t.destroyed=this.destroyed,t}}let m=(0,r.createHasher)(()=>new b(136,1,32));t.s(["keccak_256",0,m])},510387,940893,140965,t=>{"use strict";var e=t.i(470525);function r(t,e,r){return t&e^~t&r}function i(t,e,r){return t&e^t&r^e&r}class o extends e.Hash{constructor(t,r,i,o){super(),this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.blockLen=t,this.outputLen=r,this.padOffset=i,this.isLE=o,this.buffer=new Uint8Array(t),this.view=(0,e.createView)(this.buffer)}update(t){(0,e.aexists)(this),t=(0,e.toBytes)(t),(0,e.abytes)(t);let{view:r,buffer:i,blockLen:o}=this,n=t.length;for(let s=0;s<n;){let a=Math.min(o-this.pos,n-s);if(a===o){let r=(0,e.createView)(t);for(;o<=n-s;s+=o)this.process(r,s);continue}i.set(t.subarray(s,s+a),this.pos),this.pos+=a,s+=a,this.pos===o&&(this.process(r,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){(0,e.aexists)(this),(0,e.aoutput)(t,this),this.finished=!0;let{buffer:r,view:i,blockLen:o,isLE:n}=this,{pos:s}=this;r[s++]=128,(0,e.clean)(this.buffer.subarray(s)),this.padOffset>o-s&&(this.process(i,0),s=0);for(let t=s;t<o;t++)r[t]=0;!function(t,e,r,i){if("function"==typeof t.setBigUint64)return t.setBigUint64(e,r,i);let o=BigInt(32),n=BigInt(0xffffffff),s=Number(r>>o&n),a=Number(r&n),l=4*!!i,c=4*!i;t.setUint32(e+l,s,i),t.setUint32(e+c,a,i)}(i,o-8,BigInt(8*this.length),n),this.process(i,0);let a=(0,e.createView)(t),l=this.outputLen;if(l%4)throw Error("_sha2: outputLen should be aligned to 32bit");let c=l/4,h=this.get();if(c>h.length)throw Error("_sha2: outputLen bigger than state");for(let t=0;t<c;t++)a.setUint32(4*t,h[t],n)}digest(){let{buffer:t,outputLen:e}=this;this.digestInto(t);let r=t.slice(0,e);return this.destroy(),r}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());let{blockLen:e,buffer:r,length:i,finished:o,destroyed:n,pos:s}=this;return t.destroyed=n,t.finished=o,t.length=i,t.pos=s,i%e&&t.buffer.set(r),t}clone(){return this._cloneInto()}}let n=Uint32Array.from([0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19]),s=Uint32Array.from([0xc1059ed8,0x367cd507,0x3070dd17,0xf70e5939,0xffc00b31,0x68581511,0x64f98fa7,0xbefa4fa4]),a=Uint32Array.from([0xcbbb9d5d,0xc1059ed8,0x629a292a,0x367cd507,0x9159015a,0x3070dd17,0x152fecd8,0xf70e5939,0x67332667,0xffc00b31,0x8eb44a87,0x68581511,0xdb0c2e0d,0x64f98fa7,0x47b5481d,0xbefa4fa4]),l=Uint32Array.from([0x6a09e667,0xf3bcc908,0xbb67ae85,0x84caa73b,0x3c6ef372,0xfe94f82b,0xa54ff53a,0x5f1d36f1,0x510e527f,0xade682d1,0x9b05688c,0x2b3e6c1f,0x1f83d9ab,0xfb41bd6b,0x5be0cd19,0x137e2179]);t.s(["Chi",()=>r,"HashMD",()=>o,"Maj",()=>i,"SHA224_IV",0,s,"SHA256_IV",0,n,"SHA384_IV",0,a,"SHA512_IV",0,l],940893);var c=t.i(709361);let h=Uint32Array.from([0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0xfc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x6ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2]),u=new Uint32Array(64);class f extends o{constructor(t=32){super(64,t,8,!1),this.A=0|n[0],this.B=0|n[1],this.C=0|n[2],this.D=0|n[3],this.E=0|n[4],this.F=0|n[5],this.G=0|n[6],this.H=0|n[7]}get(){let{A:t,B:e,C:r,D:i,E:o,F:n,G:s,H:a}=this;return[t,e,r,i,o,n,s,a]}set(t,e,r,i,o,n,s,a){this.A=0|t,this.B=0|e,this.C=0|r,this.D=0|i,this.E=0|o,this.F=0|n,this.G=0|s,this.H=0|a}process(t,r){for(let e=0;e<16;e++,r+=4)u[e]=t.getUint32(r,!1);for(let t=16;t<64;t++){let r=u[t-15],i=u[t-2],o=(0,e.rotr)(r,7)^(0,e.rotr)(r,18)^r>>>3,n=(0,e.rotr)(i,17)^(0,e.rotr)(i,19)^i>>>10;u[t]=n+u[t-7]+o+u[t-16]|0}let{A:o,B:n,C:s,D:a,E:l,F:c,G:f,H:d}=this;for(let t=0;t<64;t++){var p;let r=d+((0,e.rotr)(l,6)^(0,e.rotr)(l,11)^(0,e.rotr)(l,25))+((p=l)&c^~p&f)+h[t]+u[t]|0,g=((0,e.rotr)(o,2)^(0,e.rotr)(o,13)^(0,e.rotr)(o,22))+i(o,n,s)|0;d=f,f=c,c=l,l=a+r|0,a=s,s=n,n=o,o=r+g|0}o=o+this.A|0,n=n+this.B|0,s=s+this.C|0,a=a+this.D|0,l=l+this.E|0,c=c+this.F|0,f=f+this.G|0,d=d+this.H|0,this.set(o,n,s,a,l,c,f,d)}roundClean(){(0,e.clean)(u)}destroy(){this.set(0,0,0,0,0,0,0,0),(0,e.clean)(this.buffer)}}class d extends f{constructor(){super(28),this.A=0|s[0],this.B=0|s[1],this.C=0|s[2],this.D=0|s[3],this.E=0|s[4],this.F=0|s[5],this.G=0|s[6],this.H=0|s[7]}}let p=c.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(t=>BigInt(t))),g=p[0],y=p[1],b=new Uint32Array(80),m=new Uint32Array(80);class x extends o{constructor(t=64){super(128,t,16,!1),this.Ah=0|l[0],this.Al=0|l[1],this.Bh=0|l[2],this.Bl=0|l[3],this.Ch=0|l[4],this.Cl=0|l[5],this.Dh=0|l[6],this.Dl=0|l[7],this.Eh=0|l[8],this.El=0|l[9],this.Fh=0|l[10],this.Fl=0|l[11],this.Gh=0|l[12],this.Gl=0|l[13],this.Hh=0|l[14],this.Hl=0|l[15]}get(){let{Ah:t,Al:e,Bh:r,Bl:i,Ch:o,Cl:n,Dh:s,Dl:a,Eh:l,El:c,Fh:h,Fl:u,Gh:f,Gl:d,Hh:p,Hl:g}=this;return[t,e,r,i,o,n,s,a,l,c,h,u,f,d,p,g]}set(t,e,r,i,o,n,s,a,l,c,h,u,f,d,p,g){this.Ah=0|t,this.Al=0|e,this.Bh=0|r,this.Bl=0|i,this.Ch=0|o,this.Cl=0|n,this.Dh=0|s,this.Dl=0|a,this.Eh=0|l,this.El=0|c,this.Fh=0|h,this.Fl=0|u,this.Gh=0|f,this.Gl=0|d,this.Hh=0|p,this.Hl=0|g}process(t,e){for(let r=0;r<16;r++,e+=4)b[r]=t.getUint32(e),m[r]=t.getUint32(e+=4);for(let t=16;t<80;t++){let e=0|b[t-15],r=0|m[t-15],i=c.rotrSH(e,r,1)^c.rotrSH(e,r,8)^c.shrSH(e,r,7),o=c.rotrSL(e,r,1)^c.rotrSL(e,r,8)^c.shrSL(e,r,7),n=0|b[t-2],s=0|m[t-2],a=c.rotrSH(n,s,19)^c.rotrBH(n,s,61)^c.shrSH(n,s,6),l=c.rotrSL(n,s,19)^c.rotrBL(n,s,61)^c.shrSL(n,s,6),h=c.add4L(o,l,m[t-7],m[t-16]),u=c.add4H(h,i,a,b[t-7],b[t-16]);b[t]=0|u,m[t]=0|h}let{Ah:r,Al:i,Bh:o,Bl:n,Ch:s,Cl:a,Dh:l,Dl:h,Eh:u,El:f,Fh:d,Fl:p,Gh:x,Gl:w,Hh:v,Hl:E}=this;for(let t=0;t<80;t++){let e=c.rotrSH(u,f,14)^c.rotrSH(u,f,18)^c.rotrBH(u,f,41),C=c.rotrSL(u,f,14)^c.rotrSL(u,f,18)^c.rotrBL(u,f,41),A=u&d^~u&x,O=f&p^~f&w,$=c.add5L(E,C,O,y[t],m[t]),B=c.add5H($,v,e,A,g[t],b[t]),T=0|$,S=c.rotrSH(r,i,28)^c.rotrBH(r,i,34)^c.rotrBH(r,i,39),k=c.rotrSL(r,i,28)^c.rotrBL(r,i,34)^c.rotrBL(r,i,39),I=r&o^r&s^o&s,L=i&n^i&a^n&a;v=0|x,E=0|w,x=0|d,w=0|p,d=0|u,p=0|f,({h:u,l:f}=c.add(0|l,0|h,0|B,0|T)),l=0|s,h=0|a,s=0|o,a=0|n,o=0|r,n=0|i;let R=c.add3L(T,k,L);r=c.add3H(R,B,S,I),i=0|R}({h:r,l:i}=c.add(0|this.Ah,0|this.Al,0|r,0|i)),({h:o,l:n}=c.add(0|this.Bh,0|this.Bl,0|o,0|n)),({h:s,l:a}=c.add(0|this.Ch,0|this.Cl,0|s,0|a)),({h:l,l:h}=c.add(0|this.Dh,0|this.Dl,0|l,0|h)),({h:u,l:f}=c.add(0|this.Eh,0|this.El,0|u,0|f)),({h:d,l:p}=c.add(0|this.Fh,0|this.Fl,0|d,0|p)),({h:x,l:w}=c.add(0|this.Gh,0|this.Gl,0|x,0|w)),({h:v,l:E}=c.add(0|this.Hh,0|this.Hl,0|v,0|E)),this.set(r,i,o,n,s,a,l,h,u,f,d,p,x,w,v,E)}roundClean(){(0,e.clean)(b,m)}destroy(){(0,e.clean)(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}let w=(0,e.createHasher)(()=>new f),v=(0,e.createHasher)(()=>new d),E=(0,e.createHasher)(()=>new x);t.s(["SHA224",()=>d,"SHA256",()=>f,"sha224",0,v,"sha256",0,w,"sha512",0,E],510387);var C=e;class A extends C.Hash{constructor(t,e){super(),this.finished=!1,this.destroyed=!1,(0,C.ahash)(t);const r=(0,C.toBytes)(e);if(this.iHash=t.create(),"function"!=typeof this.iHash.update)throw Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const i=this.blockLen,o=new Uint8Array(i);o.set(r.length>i?t.create().update(r).digest():r);for(let t=0;t<o.length;t++)o[t]^=54;this.iHash.update(o),this.oHash=t.create();for(let t=0;t<o.length;t++)o[t]^=106;this.oHash.update(o),(0,C.clean)(o)}update(t){return(0,C.aexists)(this),this.iHash.update(t),this}digestInto(t){(0,C.aexists)(this),(0,C.abytes)(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){let t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));let{oHash:e,iHash:r,finished:i,destroyed:o,blockLen:n,outputLen:s}=this;return t.finished=i,t.destroyed=o,t.blockLen=n,t.outputLen=s,t.oHash=e._cloneInto(t.oHash),t.iHash=r._cloneInto(t.iHash),t}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}let O=(t,e,r)=>new A(t,e).update(r).digest();O.create=(t,e)=>new A(t,e),t.s(["hmac",0,O],140965)},671647,t=>{"use strict";var e=t.i(940893),r=t.i(470525);let i=Uint32Array.from([0x67452301,0xefcdab89,0x98badcfe,0x10325476,0xc3d2e1f0]),o=new Uint32Array(80);e.HashMD;(t,e)=>Math.floor(0x100000000*Math.abs(Math.sin(e+1)));e.HashMD;let n=Uint8Array.from([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),s=Uint8Array.from(Array(16).fill(0).map((t,e)=>e)),a=s.map(t=>(9*t+5)%16),l=(()=>{let t=[[s],[a]];for(let e=0;e<4;e++)for(let r of t)r.push(r[e].map(t=>n[t]));return t})(),c=l[0],h=l[1],u=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(t=>Uint8Array.from(t)),f=c.map((t,e)=>t.map(t=>u[e][t])),d=h.map((t,e)=>t.map(t=>u[e][t])),p=Uint32Array.from([0,0x5a827999,0x6ed9eba1,0x8f1bbcdc,0xa953fd4e]),g=Uint32Array.from([0x50a28be6,0x5c4dd124,0x6d703ef3,0x7a6d76e9,0]);function y(t,e,r,i){return 0===t?e^r^i:1===t?e&r|~e&i:2===t?(e|~r)^i:3===t?e&i|r&~i:e^(r|~i)}let b=new Uint32Array(16);class m extends e.HashMD{constructor(){super(64,20,8,!0),this.h0=0x67452301,this.h1=-0x10325477,this.h2=-0x67452302,this.h3=0x10325476,this.h4=-0x3c2d1e10}get(){let{h0:t,h1:e,h2:r,h3:i,h4:o}=this;return[t,e,r,i,o]}set(t,e,r,i,o){this.h0=0|t,this.h1=0|e,this.h2=0|r,this.h3=0|i,this.h4=0|o}process(t,e){for(let r=0;r<16;r++,e+=4)b[r]=t.getUint32(e,!0);let i=0|this.h0,o=i,n=0|this.h1,s=n,a=0|this.h2,l=a,u=0|this.h3,m=u,x=0|this.h4,w=x;for(let t=0;t<5;t++){let e=4-t,v=p[t],E=g[t],C=c[t],A=h[t],O=f[t],$=d[t];for(let e=0;e<16;e++){let o=(0,r.rotl)(i+y(t,n,a,u)+b[C[e]]+v,O[e])+x|0;i=x,x=u,u=0|(0,r.rotl)(a,10),a=n,n=o}for(let t=0;t<16;t++){let i=(0,r.rotl)(o+y(e,s,l,m)+b[A[t]]+E,$[t])+w|0;o=w,w=m,m=0|(0,r.rotl)(l,10),l=s,s=i}}this.set(this.h1+a+m|0,this.h2+u+w|0,this.h3+x+o|0,this.h4+i+s|0,this.h0+n+l|0)}roundClean(){(0,r.clean)(b)}destroy(){this.destroyed=!0,(0,r.clean)(this.buffer),this.set(0,0,0,0,0)}}let x=(0,r.createHasher)(()=>new m);t.s(["ripemd160",0,x],671647)}]);