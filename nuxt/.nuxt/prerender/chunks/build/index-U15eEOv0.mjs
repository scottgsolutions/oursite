import { mergeProps, useSSRContext } from 'file://D:/dev/Web%20Projects/oursite/nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file://D:/dev/Web%20Projects/oursite/nuxt/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from './v3-mTTa_kZF.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../_/renderer.mjs';
import 'file://D:/dev/Web%20Projects/oursite/nuxt/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/dev/Web%20Projects/oursite/nuxt/node_modules/h3/dist/index.mjs';
import 'file://D:/dev/Web%20Projects/oursite/nuxt/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://D:/dev/Web%20Projects/oursite/nuxt/node_modules/destr/dist/index.mjs';
import 'file://D:/dev/Web%20Projects/oursite/nuxt/node_modules/hookable/dist/index.mjs';
import 'file://D:/dev/Web%20Projects/oursite/nuxt/node_modules/ofetch/dist/node.mjs';
import 'file://D:/dev/Web%20Projects/oursite/nuxt/node_modules/node-mock-http/dist/index.mjs';
import 'file://D:/dev/Web%20Projects/oursite/nuxt/node_modules/unstorage/dist/index.mjs';
import 'file://D:/dev/Web%20Projects/oursite/nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file:///D:/dev/Web%20Projects/oursite/nuxt/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://D:/dev/Web%20Projects/oursite/nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://D:/dev/Web%20Projects/oursite/nuxt/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import 'file://D:/dev/Web%20Projects/oursite/nuxt/node_modules/klona/dist/index.mjs';
import 'file://D:/dev/Web%20Projects/oursite/nuxt/node_modules/defu/dist/defu.mjs';
import 'file://D:/dev/Web%20Projects/oursite/nuxt/node_modules/scule/dist/index.mjs';
import 'file://D:/dev/Web%20Projects/oursite/nuxt/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/dev/Web%20Projects/oursite/nuxt/node_modules/pathe/dist/index.mjs';
import 'file://D:/dev/Web%20Projects/oursite/nuxt/node_modules/unhead/dist/server.mjs';
import 'file://D:/dev/Web%20Projects/oursite/nuxt/node_modules/devalue/index.js';
import 'file://D:/dev/Web%20Projects/oursite/nuxt/node_modules/unhead/dist/utils.mjs';
import 'file://D:/dev/Web%20Projects/oursite/nuxt/node_modules/unhead/dist/plugins.mjs';
import 'file://D:/dev/Web%20Projects/oursite/nuxt/node_modules/unctx/dist/index.mjs';
import 'file://D:/dev/Web%20Projects/oursite/nuxt/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "About - SG Solutions",
      meta: [
        { name: "description", content: "Learn more about SG Solutions and our mission." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "about-page" }, _attrs))} data-v-766b4ad7><div class="container section" data-v-766b4ad7><h1 data-v-766b4ad7>About SG Solutions</h1><p data-v-766b4ad7>This page will contain information about your business.</p><p data-v-766b4ad7>Currently serving as a placeholder until you&#39;re ready to build the About page.</p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-766b4ad7"]]);

export { index as default };
//# sourceMappingURL=index-U15eEOv0.mjs.map
