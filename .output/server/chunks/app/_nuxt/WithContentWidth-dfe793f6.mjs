import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  name: "WithContentWidth"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto w-full px-3 lg:w-10/12 2xl:w-8/12" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/hoc/WithContentWidth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WithContentWidth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { WithContentWidth as W };
//# sourceMappingURL=WithContentWidth-dfe793f6.mjs.map
