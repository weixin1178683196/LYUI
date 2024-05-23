import { defineComponent as d, toRefs as b, computed as f, createVNode as c, isVNode as v, mergeProps as h, ref as x, unref as S } from "vue";
const g = "u", p = "_LyUI";
function C(e, n, l) {
  I(e, l), e.component(n.name, n);
}
function I(e, n = { classPrefix: g }) {
  e.config.globalProperties[p] = {
    ...e.config.globalProperties[p] ?? {},
    classPrefix: n.classPrefix
  };
}
const z = (e) => `${g}-${e}`, P = {
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
function L(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !v(e);
}
const $ = /* @__PURE__ */ d({
  name: "ly-button",
  props: P,
  setup(e, {
    slots: n
  }) {
    const {
      type: l,
      size: s,
      disabled: i
    } = b(e), o = z("button"), t = f(() => [o, `${o}--${l.value}`, `${o}--${s.value}`, i.value ? "is-disabled" : ""]);
    return () => {
      const {
        tag: r
      } = e, a = n.default ? n.default() : "按钮";
      return c(r, {
        disabled: i.value,
        class: t.value
      }, L(a) ? a : {
        default: () => [a]
      });
    };
  }
}), y = /* @__PURE__ */ d({
  name: "ly-icon",
  props: {
    name: {
      type: String,
      default: ""
    },
    size: {
      type: [String, Number],
      default: "inherit"
    },
    color: {
      type: String,
      default: "inherit"
    }
  },
  setup(e, {
    attrs: n
  }) {
    const l = f(() => typeof e.size == "number" ? `${e.size}px` : e.size), s = c("img", h({
      src: e.name
    }, n, {
      style: {
        width: l.value,
        verticalAlign: "middle"
      }
    }), null), i = c("i", {
      class: ["u-icon-" + e.name],
      style: {
        fontSize: l.value,
        color: e.color
      }
    }, null), o = /http|https/.test(e.name) ? s : i;
    return () => o;
  }
}), N = {
  data: {
    type: Object,
    required: !0
  }
};
function m(e = [], n = 0, l = null) {
  return n++, e.reduce((s, i) => {
    const o = { ...i };
    if (o.level = n, o.parentId = l, o.children) {
      const t = o.id, r = m(o.children, n, t);
      return delete o.children, s.concat(o, r);
    } else
      return o.isLeaf = !0, s.concat(o);
  }, []);
}
function O(e) {
  return {
    innerData: x(m(S(e)))
  };
}
const _ = /* @__PURE__ */ d({
  name: "UTree",
  props: N,
  setup(e, {
    slots: n
  }) {
    const {
      innerData: l
    } = O(e.data), s = (t) => {
      console.log("toggle:", t);
      const r = l.value.find((a) => a.id === t.id);
      r && (r.expanded = !r.expanded);
    }, i = f(() => {
      let t = [], r = [];
      for (let a of l.value)
        t.includes(a) || (a.expanded !== !0 && (t = o(a)), r.push(a));
      return r;
    }), o = (t) => {
      const r = l.value.findIndex((u) => u.id === t.id);
      let a = [];
      for (let u = r + 1; u < l.value.length && l.value[u].level > t.level; u++)
        a.push(l.value[u]);
      return a;
    };
    return () => c("div", {
      class: "u-tree"
    }, [i.value.map((t) => c("div", {
      style: {
        paddingLeft: `${20 * (t.level - 1)}px`
      }
    }, [t.isLeaf ? c("span", {
      style: {
        display: "inline-block",
        width: "24px"
      }
    }, null) : c("span", {
      onClick: () => s(t)
    }, [c(y, {
      name: t.expanded ? "caret-bottom" : "caret-right",
      size: 14,
      color: "gray"
    }, null)]), t.label]))]);
  }
}), j = [$, _, y], D = {
  install(e, n) {
    j.forEach((l) => {
      C(e, l, n);
    });
  }
};
export {
  $ as Button,
  D as default
};
