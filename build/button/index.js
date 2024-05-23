import { defineComponent as d, toRefs as r, computed as p, createVNode as b, isVNode as g } from "vue";
const i = "u", a = "_LyUI";
function y(t, e, o) {
  C(t, o), t.component(e.name, e);
}
function C(t, e = { classPrefix: i }) {
  t.config.globalProperties[a] = {
    ...t.config.globalProperties[a] ?? {},
    classPrefix: e.classPrefix
  };
}
const m = (t) => `${i}-${t}`, S = {
  type: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: "default"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  tag: {
    type: String,
    default: "button"
  },
  onClick: {
    type: Function
  }
};
function P(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Object]" && !g(t);
}
const x = /* @__PURE__ */ d({
  name: "ly-button",
  props: S,
  setup(t, {
    slots: e
  }) {
    const {
      type: o,
      size: u,
      disabled: s
    } = r(t), n = m("button"), c = p(() => [n, `${n}--${o.value}`, `${n}--${u.value}`, s.value ? "is-disabled" : ""]);
    return () => {
      const {
        tag: f
      } = t, l = e.default ? e.default() : "按钮";
      return b(f, {
        disabled: s.value,
        class: c.value
      }, P(l) ? l : {
        default: () => [l]
      });
    };
  }
}), v = {
  install(t, e) {
    y(t, x, e);
  }
};
export {
  x as Button,
  v as default
};
