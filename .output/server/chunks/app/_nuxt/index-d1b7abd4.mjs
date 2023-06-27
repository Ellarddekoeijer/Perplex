import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, resolveComponent, withAsyncContext, unref, ref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderSlot, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, a as useAsyncQuery } from '../server.mjs';
import { gql } from 'graphql-tag';
import { useWindowSize } from '@vueuse/core';
import { W as WithContentWidth } from './WithContentWidth-dfe793f6.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'tslib';
import 'ts-invariant';
import 'graphql';
import 'zen-observable-ts';
import 'cookie-es';
import 'optimism';
import '@wry/equality';
import '@wry/trie';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-solid-svg-icons';

const _sfc_main$9 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-10 flex items-center" }, _attrs))}><hr class="h-1 w-8 bg-blue-900"><span class="ml-4 text-lg font-semibold text-blue-900">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Seperator.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<span${ssrRenderAttrs(mergeProps({ class: "mb-16 text-2xl font-bold text-blue-900 md:text-6xl lg:text-6xl" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Heading.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$7 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<span${ssrRenderAttrs(mergeProps({ class: "text-lg font-bold text-blue-900 sm:text-xl lg:text-4xl" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</span>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SubHeading.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "SpecialisationItem",
  __ssrInlineRender: true,
  props: {
    url: {},
    alt: {},
    name: {},
    onClick: { type: Function }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group flex flex-col space-y-4 transition hover:cursor-pointer lg:space-y-12" }, _attrs))}><div class="h-60 w-full overflow-hidden"><img class="h-full w-full gap-6 object-cover transition group-hover:scale-110"${ssrRenderAttr("src", _ctx.url)}${ssrRenderAttr("alt", _ctx.alt)}></div><span>`);
      _push(ssrRenderComponent(__nuxt_component_1$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/specialisation/SpecialisationItem.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Specialisation",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const query = gql`
        query {
            characters(page: 3, filter: { name: "rick" }) {
            results {
              id
              name
              image
              status
            }
          }
        }
    `;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(query)), __temp = await __temp, __restore(), __temp);
    const specialisations = ((_a = data.value) == null ? void 0 : _a.characters.results) || [];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Heading = __nuxt_component_0;
      const _component_SpecialisationItem = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Heading, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Specialisation `);
          } else {
            return [
              createTextVNode(" Specialisation ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-1 gap-y-6 xs:grid-cols-2 xs:gap-6 sm:gap-12 lg:grid-cols-3 lg:gap-24"><!--[-->`);
      ssrRenderList(unref(specialisations).slice(0, 3), (specialisation) => {
        _push(ssrRenderComponent(_component_SpecialisationItem, {
          key: specialisation.id,
          name: specialisation.name,
          alt: specialisation.status,
          "on-click": () => console.log("hoi"),
          url: specialisation.image
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/specialisation/Specialisation.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$5;
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CTA",
  __ssrInlineRender: true,
  props: {
    to: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: _ctx.to,
        class: "group flex items-center bg-white px-7 py-6 text-lg font-semibold text-blue-900 transition-all hover:cursor-pointer hover:pr-6"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<span class="ml-4 transition-all group-hover:ml-5">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "arrow-right"] }, null, _parent));
      _push(`</span></a>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CTA.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "NewsletterItem",
  __ssrInlineRender: true,
  props: {
    url: {},
    alt: {},
    title: {},
    excerpt: {},
    onClick: { type: Function }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CTA = _sfc_main$4;
      const _component_SubHeading = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-96 flex-col space-y-12" }, _attrs))}><div class="relative h-72 w-full"><img class="h-full w-full object-cover object-center drop-shadow"${ssrRenderAttr("src", _ctx.url)}${ssrRenderAttr("alt", _ctx.alt)}>`);
      _push(ssrRenderComponent(_component_CTA, {
        class: "absolute bottom-0 right-0 text-base",
        to: "/example"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Read `);
          } else {
            return [
              createTextVNode(" Read ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_SubHeading, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="mt-6 leading-8 text-blue-900 text-opacity-80">${ssrInterpolate(_ctx.excerpt)}</p></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/newsletter/NewsletterItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const newsLetterItemWidthInRem = 27;
const _sfc_main$2 = {
  __name: "Newsletter",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const { width } = useWindowSize();
    width.value > 1e3 ? 3 : 1;
    const query = gql`
          query {
              characters {
              results {
                id
                name
                image
              }
            }
          }
      `;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(query)), __temp = await __temp, __restore(), __temp);
    const newsletters = ((_a = data.value) == null ? void 0 : _a.characters.results) || [];
    const selectedIndex = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Heading = __nuxt_component_0;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_NewsletterItem = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(WithContentWidth, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Heading, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Design newsletter `);
                } else {
                  return [
                    createTextVNode(" Design newsletter ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col" }, [
                createVNode(_component_Heading, null, {
                  default: withCtx(() => [
                    createTextVNode(" Design newsletter ")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="ml-3 flex items-center overflow-hidden px-3 lg:ml-1/12 2xl:ml-2/12"><button class="absolute z-20 h-16 w-8 bg-black bg-opacity-60">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        class: "text-white",
        icon: ["fa", "chevron-left"]
      }, null, _parent));
      _push(`</button><button class="absolute right-0 z-50 h-16 w-8 bg-black bg-opacity-60">`);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        class: "text-white",
        icon: ["fa", "chevron-right"]
      }, null, _parent));
      _push(`</button><div class="grid w-full grid-flow-col items-start gap-x-12 transition duration-300 ease-in-out" style="${ssrRenderStyle(`transform: translateX(-${unref(selectedIndex) * newsLetterItemWidthInRem}rem)`)}"><!--[-->`);
      ssrRenderList(unref(newsletters), (newsletter) => {
        _push(ssrRenderComponent(_component_NewsletterItem, {
          key: newsletter.id,
          "on-click": () => {
          },
          url: newsletter.image,
          alt: "temp",
          title: newsletter.name,
          excerpt: "The ultimate guide to proper understanding user perspective and it's impact on day to day life"
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/newsletter/Newsletter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$2;
const _imports_0 = "" + publicAssetsURL("woman-pink.jpg");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AboutMe",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex-col" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        class: "absolute bottom-0 left-0 z-30 md:left-auto md:right-0",
        to: "/about"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About Myself `);
          } else {
            return [
              createTextVNode(" About Myself ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="right-0 -z-30 hidden h-full w-full md:absolute md:block md:w-8/12"><div class="relative h-full w-full bg-cover bg-center bg-no-repeat drop-shadow" style="${ssrRenderStyle({ "background-image": "url(/woman-pink-wider2.jpg)" })}"><div class="absolute right-0 z-50 h-full w-4 bg-cover" style="${ssrRenderStyle({ "background-image": "url(/background-paint.jpg)" })}"></div></div></div><div class="flex flex-col items-start space-y-3 md:space-y-5 md:py-32"><div><span class="text-lg font-bold italic text-blue-900 md:text-4xl"> Sakura Haruno </span><h1 style="${ssrRenderStyle({ "background-image": "url('/background-paint.jpg')", "-webkit-text-fill-color": "transparent" })}" class="bg-cover bg-clip-text bg-left-bottom bg-no-repeat text-2xl font-bold md:text-6xl lg:text-8xl"> Designer &amp; <br class="hidden md:block"> Illustrator </h1><p class="leading-8 text-blue-900 text-opacity-80 sm:mt-12 sm:w-96"> Norway based designer who is specialised in Product design and illustration. </p></div><img class="block w-full xs:w-80 md:hidden"${ssrRenderAttr("src", _imports_0)} alt="Naruto enjoyer"></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/about/AboutMe.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Seperator = __nuxt_component_0$1;
      const _component_Specialisation = __nuxt_component_1;
      const _component_Newsletter = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full flex-col space-y-32" }, _attrs))}>`);
      _push(ssrRenderComponent(WithContentWidth, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(WithContentWidth, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Seperator, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` What I do best `);
                } else {
                  return [
                    createTextVNode(" What I do best ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Seperator, null, {
                default: withCtx(() => [
                  createTextVNode(" What I do best ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(WithContentWidth, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Specialisation, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Specialisation)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(WithContentWidth, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Seperator, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` My weekly newsletter and blogs `);
                } else {
                  return [
                    createTextVNode(" My weekly newsletter and blogs ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Seperator, null, {
                default: withCtx(() => [
                  createTextVNode(" My weekly newsletter and blogs ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Newsletter, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-d1b7abd4.mjs.map
