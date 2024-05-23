import { defineComponent as f, computed as g, createVNode as a, mergeProps as m, ref as x, unref as h } from "vue";
const v = "u", d = "_LyUI";
function y(e, t, l) {
  I(e, l), e.component(t.name, t);
}
function I(e, t = { classPrefix: v }) {
  e.config.globalProperties[d] = {
    ...e.config.globalProperties[d] ?? {},
    classPrefix: t.classPrefix
  };
}
const b = /* @__PURE__ */ f({
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
    attrs: t
  }) {
    const l = g(() => typeof e.size == "number" ? `${e.size}px` : e.size), s = a("img", m({
      src: e.name
    }, t, {
      style: {
        width: l.value,
        verticalAlign: "middle"
      }
    }), null), u = a("i", {
      class: ["u-icon-" + e.name],
      style: {
        fontSize: l.value,
        color: e.color
      }
    }, null), r = /http|https/.test(e.name) ? s : u;
    return () => r;
  }
}), P = {
  data: {
    type: Object,
    required: !0
  }
};
function p(e = [], t = 0, l = null) {
  return t++, e.reduce((s, u) => {
    const r = { ...u };
    if (r.level = t, r.parentId = l, r.children) {
      const n = r.id, o = p(r.children, t, n);
      return delete r.children, s.concat(r, o);
    } else
      return r.isLeaf = !0, s.concat(r);
  }, []);
}
function z(e) {
  return {
    innerData: x(p(h(e)))
  };
}
const C = /* @__PURE__ */ f({
  name: "UTree",
  props: P,
  setup(e, {
    slots: t
  }) {
    const {
      innerData: l
    } = z(e.data), s = (n) => {
      console.log("toggle:", n);
      const o = l.value.find((i) => i.id === n.id);
      o && (o.expanded = !o.expanded);
    }, u = g(() => {
      let n = [], o = [];
      for (let i of l.value)
        n.includes(i) || (i.expanded !== !0 && (n = r(i)), o.push(i));
      return o;
    }), r = (n) => {
      const o = l.value.findIndex((c) => c.id === n.id);
      let i = [];
      for (let c = o + 1; c < l.value.length && l.value[c].level > n.level; c++)
        i.push(l.value[c]);
      return i;
    };
    return () => a("div", {
      class: "u-tree"
    }, [u.value.map((n) => a("div", {
      style: {
        paddingLeft: `${20 * (n.level - 1)}px`
      }
    }, [n.isLeaf ? a("span", {
      style: {
        display: "inline-block",
        width: "24px"
      }
    }, null) : a("span", {
      onClick: () => s(n)
    }, [a(b, {
      name: n.expanded ? "caret-bottom" : "caret-right",
      size: 14,
      color: "gray"
    }, null)]), n.label]))]);
  }
}), S = {
  install(e, t) {
    y(e, C, t);
  }
};
export {
  C as Tree,
  S as default
};
