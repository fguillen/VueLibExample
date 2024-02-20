import { defineComponent as a, openBlock as r, createElementBlock as l, createElementVNode as t, toDisplayString as h, pushScopeId as n, popScopeId as p, createTextVNode as c, createVNode as g } from "vue";
const u = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20261.76%20226.69'%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H-.005l130.877%20226.688L261.749.001z'%20fill='%2341b883'/%3e%3cpath%20d='M161.096.001l-30.225%2052.351L100.647.001H52.346l78.526%20136.01L209.398.001z'%20fill='%2334495e'/%3e%3c/svg%3e", m = (e) => (n("data-v-a9bae2ec"), e = e(), p(), e), v = { class: "greetings" }, f = { class: "green" }, w = /* @__PURE__ */ m(() => /* @__PURE__ */ t("h3", null, [
  /* @__PURE__ */ c(" You’ve successfully created a project with "),
  /* @__PURE__ */ t("a", {
    href: "https://vitejs.dev/",
    target: "_blank",
    rel: "noopener"
  }, "Vite"),
  /* @__PURE__ */ c(" + "),
  /* @__PURE__ */ t("a", {
    href: "https://vuejs.org/",
    target: "_blank",
    rel: "noopener"
  }, "Vue 3"),
  /* @__PURE__ */ c(". ")
], -1)), x = /* @__PURE__ */ a({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(e) {
    return (o, s) => (r(), l("div", v, [
      t("h1", f, h(o.msg), 1),
      w
    ]));
  }
}), _ = (e, o) => {
  const s = e.__vccOpts || e;
  for (const [d, i] of o)
    s[d] = i;
  return s;
}, I = /* @__PURE__ */ _(x, [["__scopeId", "data-v-a9bae2ec"]]), V = (e) => (n("data-v-24750e22"), e = e(), p(), e), b = /* @__PURE__ */ V(() => /* @__PURE__ */ t("img", {
  alt: "Vue logo",
  class: "logo",
  src: u,
  width: "125",
  height: "125"
}, null, -1)), k = { class: "wrapper" }, S = /* @__PURE__ */ a({
  __name: "App",
  setup(e) {
    return (o, s) => (r(), l("header", null, [
      b,
      t("div", k, [
        g(I, { msg: "You did it!" })
      ])
    ]));
  }
}), L = /* @__PURE__ */ _(S, [["__scopeId", "data-v-24750e22"]]);
export {
  L as App
};
