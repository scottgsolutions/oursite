import { _ as __nuxt_component_0$1 } from "./nuxt-link-Dbrd1jiH.js";
import { ref, mergeProps, withCtx, createVNode, createTextVNode, unref, useSSRContext, defineComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { u as useHead } from "./v3-mTTa_kZF.js";
import "D:/dev/Web Projects/oursite/nuxt/node_modules/ufo/dist/index.mjs";
import "D:/dev/Web Projects/oursite/nuxt/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "D:/dev/Web Projects/oursite/nuxt/node_modules/hookable/dist/index.mjs";
import "D:/dev/Web Projects/oursite/nuxt/node_modules/unctx/dist/index.mjs";
import "D:/dev/Web Projects/oursite/nuxt/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/dev/Web Projects/oursite/nuxt/node_modules/radix3/dist/index.mjs";
import "D:/dev/Web Projects/oursite/nuxt/node_modules/defu/dist/defu.mjs";
import "D:/dev/Web Projects/oursite/nuxt/node_modules/@unhead/vue/dist/index.mjs";
const _imports_0$2 = "data:image/svg+xml,%3csvg%20width='204'%20height='205'%20viewBox='0%200%20204%20205'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M190%2050.5C177.078%2028.6905%20155.194%2011.8794%20131.122%204.46224C107.05%20-2.95498%2081.1084%20-1.07662%2058.3308%209.73278C35.5533%2020.5422%2017.5647%2039.5116%207.85619%2062.9597C-1.85233%2086.4077%20-2.58832%20112.662%205.79104%20136.627L32.6116%20127.064C26.5804%20109.814%2027.1101%2090.9173%2034.098%2074.0401C41.0859%2057.1629%2054.1054%2043.7803%2070.5%2036C87.5719%2029.271%20105%2028.5%20122.821%2031.9354C139%2038%20152%2046.5%20162.5%2062L190%2050.5Z'%20fill='url(%23paint0_linear_96_308)'/%3e%3cpath%20d='M2%20121.026C6.73979%20147.072%2021.2779%20170.255%2042.5679%20185.716C63.858%20201.177%2090.2475%20207.718%20116.207%20203.966C142.166%20200.215%20165.68%20186.463%20181.821%20165.592C197.963%20144.722%20205.479%20118.352%20202.795%2092.009L174.328%2092.0091C176.26%20110.966%20171.008%20132.883%20159.392%20147.902C147.777%20162.921%20130.856%20172.817%20112.175%20175.516C93.4946%20178.216%2074.5045%20173.509%2059.1839%20162.383C43.8634%20151.257%2033.4016%20134.575%2029.9908%20115.832L2%20121.026Z'%20fill='url(%23paint1_linear_96_308)'/%3e%3cpath%20d='M75.5904%20122C80.5904%20125.529%2083.0904%20127.5%2095.0904%20128.5C101.877%20128.243%20112.09%20123.5%20112.09%20123.5L102.59%20114.5C98.0904%20110.995%2094.3798%20106.67%2090.5904%20103C87.2619%2099.7769%2083.5904%2094.5001%2079.5904%2090.5001C77.6651%2086.1581%2078.9762%2088.288%2081.0904%2084.0001C84.0904%2080.5001%2086.4363%2077.2065%2091.5904%2075.0001C100.09%2072.0001%20101.09%2072.5001%20107.72%2072.5001C113.09%2074.5001%20119.452%2079.3913%20123.09%2083.0001L142.091%2063.5C134.698%2056.1672%20125.379%2050.6625%20113.681%2048.7966C101.983%2046.9307%2089.8181%2048.3669%2079.3453%2052.8502C68.8725%2057.3335%2060.2079%2069.7134%2057.5906%2074C54.9732%2078.2866%2051.9665%2091.6208%2055.8786%20100.443C59.8944%20109.5%2067.0904%20116%2075.5904%20122Z'%20fill='%2378E6B9'/%3e%3cpath%20d='M152.03%20118C152.69%20132.828%20145.907%20145.443%20139.219%20150.972C132.53%20156.5%20123.53%20163%20111.53%20165.5C100.53%20166.5%2093.03%20166%2082.03%20163C71.6345%20159.688%2059.3424%20152.827%2054%20145.636L69.53%20131.5C73.03%20135%2079.521%20138.904%2084.53%20140.5C89.5391%20142.096%2095.53%20143%20101.03%20143C108.03%20143%20114.03%20141.5%20118.395%20139.328C125.03%20134%20127.03%20128%20125.03%20118H152.03Z'%20fill='%23015FCB'/%3e%3cpath%20d='M98.8284%2092H181.328L177.328%20118.5L124.828%20118L121.328%20116.5L118.328%20114L113.828%20109.5L110.328%20106L105.828%20101L98.8284%2092Z'%20fill='url(%23paint2_linear_96_308)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_96_308'%20x1='62'%20y1='-12'%20x2='97'%20y2='217'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23F4F4F4'/%3e%3cstop%20offset='1'%20stop-color='%23E4EEF9'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_96_308'%20x1='189'%20y1='130.5'%20x2='32.5'%20y2='190'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23005FCC'/%3e%3cstop%20offset='1'%20stop-color='white'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_96_308'%20x1='173'%20y1='106.5'%20x2='153.5'%20y2='115'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23015FCC'/%3e%3cstop%20offset='1'%20stop-color='%23015FCB'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
const _sfc_main$9 = {
  __name: "Navigation",
  __ssrInlineRender: true,
  setup(__props) {
    const mobileMenuOpen = ref(false);
    ref(false);
    const mobileServicesOpen = ref(false);
    const closeMobileMenu = () => {
      mobileMenuOpen.value = false;
      mobileServicesOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header-nav" }, _attrs))} data-v-aa7abd6e><nav class="container" data-v-aa7abd6e><div class="nav-wrapper" data-v-aa7abd6e><div class="logo" data-v-aa7abd6e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/Businesses",
        class: "logo-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="logo-content" data-v-aa7abd6e${_scopeId}><img${ssrRenderAttr("src", _imports_0$2)} alt="ScottG Solutions Logo" class="logo-icon" data-v-aa7abd6e${_scopeId}><div class="logo-text" data-v-aa7abd6e${_scopeId}><span class="company-name" data-v-aa7abd6e${_scopeId}>SCOTTG</span><span class="company-type" data-v-aa7abd6e${_scopeId}>SOLUTIONS</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "logo-content" }, [
                createVNode("img", {
                  src: _imports_0$2,
                  alt: "ScottG Solutions Logo",
                  class: "logo-icon"
                }),
                createVNode("div", { class: "logo-text" }, [
                  createVNode("span", { class: "company-name" }, "SCOTTG"),
                  createVNode("span", { class: "company-type" }, "SOLUTIONS")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="nav-cta desktop-nav" data-v-aa7abd6e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#get-started",
        class: "btn btn-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact Me`);
          } else {
            return [
              createTextVNode("Contact Me")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="${ssrRenderClass([{ active: unref(mobileMenuOpen) }, "mobile-nav"])}" data-v-aa7abd6e><ul class="mobile-nav-links" data-v-aa7abd6e><li data-v-aa7abd6e><button class="mobile-dropdown-trigger" data-v-aa7abd6e> Services <svg class="${ssrRenderClass([{ rotated: unref(mobileServicesOpen) }, "dropdown-arrow"])}" width="12" height="8" viewBox="0 0 12 8" fill="none" data-v-aa7abd6e><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-aa7abd6e></path></svg></button><div class="${ssrRenderClass([{ active: unref(mobileServicesOpen) }, "mobile-dropdown"])}" data-v-aa7abd6e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services/businesses",
        class: "mobile-dropdown-item",
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Businesses`);
          } else {
            return [
              createTextVNode("Businesses")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services/government",
        class: "mobile-dropdown-item",
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Government`);
          } else {
            return [
              createTextVNode("Government")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li><li data-v-aa7abd6e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "nav-link",
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-aa7abd6e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "nav-link",
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog`);
          } else {
            return [
              createTextVNode("Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><div class="mobile-cta" data-v-aa7abd6e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn btn-outline",
        onClick: closeMobileMenu
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact Me`);
          } else {
            return [
              createTextVNode("Contact Me")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></nav></header>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navigation.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-aa7abd6e"]]);
const _imports_0$1 = "" + __buildAssetsURL("collage.DxMv_m7n.svg");
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero-section" }, _attrs))} data-v-d20b02b8><div class="container" data-v-d20b02b8><div class="hero-content" data-v-d20b02b8><div class="text-content" data-v-d20b02b8><h1 class="hero-title" data-v-d20b02b8><span class="title-line" data-v-d20b02b8><span class="accent" data-v-d20b02b8>Sites</span> that win work<span class="accent" data-v-d20b02b8>.</span></span><span class="title-line" data-v-d20b02b8><span class="accent" data-v-d20b02b8>Systems</span> that get work done<span class="accent" data-v-d20b02b8>.</span></span></h1><p class="hero-subtitle" data-v-d20b02b8> Small businesses thrive when they can focus on delivering value to clients.<br data-v-d20b02b8> I help the rest fall into place. </p><div class="cta-buttons" data-v-d20b02b8><button class="btn btn-primary cta" data-v-d20b02b8>Get Started Free</button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#services",
        class: "btn btn-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`See Services`);
          } else {
            return [
              createTextVNode("See Services")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hero-image" data-v-d20b02b8><img${ssrRenderAttr("src", _imports_0$1)} alt="sites and pipelines collage" data-v-d20b02b8></div></div></div></section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/business/Hero.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-d20b02b8"]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "process-section" }, _attrs))} data-v-e13da0b5><div class="container" data-v-e13da0b5><h2 class="section-title" data-v-e13da0b5>Process</h2><div class="process-grid" data-v-e13da0b5><div class="process-step" data-v-e13da0b5><div class="step-number" data-v-e13da0b5>1</div><h3 class="step-title" data-v-e13da0b5>Discovery</h3><p class="step-description" data-v-e13da0b5> Free initial consult, discuss requirements, finalize work order </p></div><div class="process-step" data-v-e13da0b5><div class="step-number" data-v-e13da0b5>2</div><h3 class="step-title" data-v-e13da0b5>Design</h3><p class="step-description" data-v-e13da0b5> Discuss strategy and design, business process assessment, draft mockups and review </p></div><div class="process-step" data-v-e13da0b5><div class="step-number" data-v-e13da0b5>3</div><h3 class="step-title" data-v-e13da0b5>Build</h3><p class="step-description" data-v-e13da0b5> Build, implement, test, review. <br data-v-e13da0b5>Meet regularly on larger projects </p></div><div class="process-step" data-v-e13da0b5><div class="step-number" data-v-e13da0b5>4</div><h3 class="step-title" data-v-e13da0b5>Go Live</h3><p class="step-description" data-v-e13da0b5> Deploy, live testing, training, and turnover </p></div></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/business/Process.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-e13da0b5"]]);
const _imports_0 = "" + __buildAssetsURL("google-icon.D-9ueMwm.svg");
const _sfc_main$6 = {
  __name: "Reviews",
  __ssrInlineRender: true,
  setup(__props) {
    const reviews = [
      {
        id: 1,
        text: "Scott did a great job updating my business website. He was very knowledable and explained all the options I should consider. He was very quick to act and had my website transformed at record pace. My business benefited immediately from his updates and I wish I would have done it earlier. I would highly recommend ScottG Solutions for any of his services.",
        author: "Laura K.",
        source: "Google"
      },
      {
        id: 2,
        text: "I just needed a simple site where people could see my credentials, services, and book an onsite visit. We had it up in 2 weeks I highly recommend Scott to get you online.",
        author: "Marco G.",
        source: "Google"
      },
      {
        id: 3,
        text: "I met with Scott to build a blog and portfolio as a dietician. I tried Wix in the past but it was too much for me. The planning and design was super helpful and he was very helpful and responsive. Now I have something to show patients and interviews. It is easy to grow my site now and I want to meet with Scott again soon for a shop idea!",
        author: "Jing B.",
        source: "Google"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "reviews-section" }, _attrs))} data-v-0dded40c><div class="container" data-v-0dded40c><h2 class="section-title" data-v-0dded40c>Client Reviews</h2><div class="reviews-container" data-v-0dded40c><!--[-->`);
      ssrRenderList(reviews, (review) => {
        _push(`<div class="review-card" data-v-0dded40c><p class="review-text" data-v-0dded40c>${ssrInterpolate(review.text)}</p><div class="review-author" data-v-0dded40c><span class="author-name" data-v-0dded40c>${ssrInterpolate(review.author)}</span><span class="review-source" data-v-0dded40c><img${ssrRenderAttr("src", _imports_0)} alt="Google" class="google-icon" data-v-0dded40c> Google </span></div></div>`);
      });
      _push(`<!--]--></div><div class="cta-container" data-v-0dded40c><button class="btn btn-primary cta" data-v-0dded40c>Get Started Free</button></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/business/Reviews.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-0dded40c"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services-section" }, _attrs))} data-v-bdc527a9><div class="container" data-v-bdc527a9><h1 class="section-title" data-v-bdc527a9>Services</h1><div class="services-grid" data-v-bdc527a9><div class="service-card" data-v-bdc527a9><div class="wrapper" data-v-bdc527a9><h3 class="service-title" data-v-bdc527a9>Simple Business Sites</h3><br data-v-bdc527a9><div class="service-features" data-v-bdc527a9><p data-v-bdc527a9><strong data-v-bdc527a9>Basic Site</strong> - Up to 3 pages, minimal customization, 2 design calls prior to build</p><p data-v-bdc527a9><strong data-v-bdc527a9>Site integration</strong> with tools you already use (payment, newsletter signup, social feed, reviews, etc.)</p></div></div><div class="service-price" data-v-bdc527a9>$500 - $800</div></div><div class="service-card featured" data-v-bdc527a9><div class="wrapper" data-v-bdc527a9><h3 class="service-title" data-v-bdc527a9>Custom Site &amp; Business Suite Strategy</h3><div class="service-features" data-v-bdc527a9><p data-v-bdc527a9><strong data-v-bdc527a9>Custom website</strong> with multiple pages and a blog, 3 design calls prior to build plus branding &amp; market research to drive design decisions</p><p data-v-bdc527a9><strong data-v-bdc527a9>Content manager</strong> to let your team make edits to pages and articles without a developer</p><p data-v-bdc527a9><strong data-v-bdc527a9>Business Suite Scan</strong> - find out what tools you are already paying for and how to use them</p></div></div><div class="service-price" data-v-bdc527a9>$1200 - $4000</div></div><div class="service-card" data-v-bdc527a9><div class="wrapper" data-v-bdc527a9><h3 class="service-title" data-v-bdc527a9>Tech-Enabled Business Systems</h3><div class="service-features" data-v-bdc527a9><p data-v-bdc527a9><strong data-v-bdc527a9>Custom website</strong> with multiple pages and a blog, 3 design calls prior to build plus branding &amp; market research to drive design decisions</p><p data-v-bdc527a9><strong data-v-bdc527a9>Content manager</strong> to let your team make edits to pages and articles without a developer</p><p data-v-bdc527a9><strong data-v-bdc527a9>Assessment and Strategic Planning</strong> - work shop business objectives, systems, and ways to streamline processes for your clients and team</p><p data-v-bdc527a9><strong data-v-bdc527a9>Business System Implementation</strong> to include website, email, notification, lead onboarding, client pipelines, meeting scheduling, payment systems, AdSense, analytics, process automation and more according to our strategic planning sessions</p></div></div><div class="service-price" data-v-bdc527a9>$3500 - $7000</div></div></div><div class="grid" data-v-bdc527a9><div class="empty" data-v-bdc527a9></div><button class="btn btn-secondary cta grid-center" data-v-bdc527a9>Get Started Free</button><a href="#service-plans" data-v-bdc527a9><h3 class="grid-right" data-v-bdc527a9>Service Plans Below </h3></a></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/business/Services.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-bdc527a9"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "service-plans-section" }, _attrs))} data-v-b24aa389><div class="container" data-v-b24aa389><h2 class="section-title" data-v-b24aa389>Service Plans</h2><div class="plans-grid" data-v-b24aa389><div class="plan-card" data-v-b24aa389><div class="wrapper" data-v-b24aa389><h3 class="plan-title" data-v-b24aa389>Simple Upkeep Plan</h3><ul class="plan-features" data-v-b24aa389><li data-v-b24aa389>web hosting</li><li data-v-b24aa389>site maintenance</li><li data-v-b24aa389>monthly site updates (1-2x text/image content changes)</li></ul></div><div class="plan-price" data-v-b24aa389>$80 / mo</div></div><div class="plan-card" data-v-b24aa389><div class="wrapper" data-v-b24aa389><h3 class="plan-title" data-v-b24aa389>Standard Support Plan</h3><ul class="plan-features" data-v-b24aa389><li data-v-b24aa389>web hosting</li><li data-v-b24aa389>site maintenance</li><li data-v-b24aa389>monthly site updates (1-2x text/image and minor structural changes)</li><li data-v-b24aa389>weekly backups</li><li data-v-b24aa389>monthly site report</li><li data-v-b24aa389>monthly strategy touchpoint</li></ul></div><div class="plan-price" data-v-b24aa389>$200 / mo</div></div><div class="plan-card featured" data-v-b24aa389><div class="wrapper" data-v-b24aa389><h3 class="plan-title" data-v-b24aa389>Priority Business Plan</h3><ul class="plan-features" data-v-b24aa389><li data-v-b24aa389>web hosting</li><li data-v-b24aa389>site maintenance</li><li data-v-b24aa389>monthly site updates (1-3x text/image and minor structural changes)</li><li data-v-b24aa389>weekly backups</li><li data-v-b24aa389>monthly enhanced site report</li><li data-v-b24aa389>monthly strategy touchpoint</li><li data-v-b24aa389>priority tech support</li><li data-v-b24aa389>20% off adhoc service hours</li></ul></div><div class="plan-price" data-v-b24aa389>$350 / mo</div></div></div><div class="cta-container grid" data-v-b24aa389><div class="empty" data-v-b24aa389></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "#get-started",
    class: "btn btn-primary grid-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Questions? Reach Out Here`);
      } else {
        return [
          createTextVNode("Questions? Reach Out Here")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<a href="#ad-hoc" data-v-b24aa389><h3 class="grid-right" data-v-b24aa389>Ad Hoc Hours Below</h3></a></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/business/ServicePlans.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-b24aa389"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "adhoc-services-section" }, _attrs))} data-v-6255ef12><div class="container" data-v-6255ef12><h2 class="section-title" data-v-6255ef12>Ad Hoc Service Hours</h2><div class="services-list" data-v-6255ef12><div class="service-item" data-v-6255ef12><div class="service-info" data-v-6255ef12><h3 class="service-name" data-v-6255ef12>Design / Strategy Calls</h3><span class="service-price" data-v-6255ef12>$100 / hr</span></div></div><div class="service-item" data-v-6255ef12><div class="service-info" data-v-6255ef12><h3 class="service-name" data-v-6255ef12>Website Updates / Integrations</h3><span class="service-price" data-v-6255ef12>$150 / hr</span></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/business/AdHoc.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-6255ef12"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "get-started-section" }, _attrs))} data-v-00765134><div class="container" data-v-00765134><div class="contact-me" data-v-00765134><h2 data-v-00765134>Contact Me</h2><a href="tel:703-828-4836" class="contact-item" data-v-00765134><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-00765134><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" data-v-00765134></path></svg> 703-828-4836 </a><a href="mailto:scottg@sgsolutions.dev" class="contact-item" data-v-00765134><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-00765134><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-v-00765134></path><polyline points="22,6 12,13 2,6" data-v-00765134></polyline></svg> scottg@sgsolutions.dev </a><a href="https://share.google/fxg7oPN4QaQ36E3LP" target="_blank" class="contact-item" data-v-00765134><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-00765134><circle cx="12" cy="12" r="10" data-v-00765134></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" data-v-00765134></path><path d="M2 12h20" data-v-00765134></path></svg> ScottG Solutions </a><a href="https://linkedin.com/in/scottgarberjr" target="_blank" class="contact-item" data-v-00765134><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-00765134><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" data-v-00765134></path><rect x="2" y="9" width="4" height="12" data-v-00765134></rect><circle cx="4" cy="4" r="2" data-v-00765134></circle></svg> scottgarberjr </a></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/business/GetStarted.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-00765134"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-9cffd6ef>© 2025 ScottG Solutions. All rights reserved.</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9cffd6ef"]]);
const _sfc_main = {
  __name: "Businesses",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "SG Solutions - Professional Web Development & Tech-Enabled Business Solutions",
      meta: [
        { name: "description", content: "Expert web development and technology consulting services. Transform your business with custom, tech-enabled business solutions." },
        { name: "keywords", content: "web development, tech-enabled business systems, software development, technology consulting" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navigation = __nuxt_component_0;
      const _component_BusinessHero = __nuxt_component_1;
      const _component_BusinessProcess = __nuxt_component_2;
      const _component_BusinessReviews = __nuxt_component_3;
      const _component_BusinessServices = __nuxt_component_4;
      const _component_BusinessServicePlans = __nuxt_component_5;
      const _component_BusinessAdHoc = __nuxt_component_6;
      const _component_BusinessGetStarted = __nuxt_component_7;
      const _component_Footer = __nuxt_component_8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "landing-page" }, _attrs))} data-v-5ad525eb><div class="fixed-bg" data-v-5ad525eb></div>`);
      _push(ssrRenderComponent(_component_Navigation, { class: "adapt" }, null, _parent));
      _push(ssrRenderComponent(_component_BusinessHero, { class: "section adapt" }, null, _parent));
      _push(ssrRenderComponent(_component_BusinessProcess, { class: "section adapt" }, null, _parent));
      _push(ssrRenderComponent(_component_BusinessReviews, { class: "section adapt" }, null, _parent));
      _push(ssrRenderComponent(_component_BusinessServices, {
        id: "services",
        class: "section adapt diagonal"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BusinessServicePlans, {
        id: "service-plans",
        class: "section adapt"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BusinessAdHoc, {
        id: "ad-hoc",
        class: "section adapt diagonal-black"
      }, null, _parent));
      _push(ssrRenderComponent(_component_BusinessGetStarted, {
        id: "get-started",
        class: "section adapt diagonal"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Footer, { class: "section adapt" }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Businesses.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Businesses = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5ad525eb"]]);
export {
  Businesses as default
};
//# sourceMappingURL=Businesses-v9VIZKqs.js.map
