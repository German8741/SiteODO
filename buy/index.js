function ue(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var x = { exports: {} };
x.exports = A;
x.exports.isMobile = A;
x.exports.default = A;
const pe = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i, he = /CrOS/, me = /android|ipad|playbook|silk/i;
function A(e) {
  e || (e = {});
  let t = e.ua;
  if (!t && typeof navigator < "u" && (t = navigator.userAgent), t && t.headers && typeof t.headers["user-agent"] == "string" && (t = t.headers["user-agent"]), typeof t != "string")
    return !1;
  let n = pe.test(t) && !he.test(t) || !!e.tablet && me.test(t);
  return !n && e.tablet && e.featureDetect && navigator && navigator.maxTouchPoints > 1 && t.indexOf("Macintosh") !== -1 && t.indexOf("Safari") !== -1 && (n = !0), n;
}
var ge = x.exports;
const B = /* @__PURE__ */ ue(ge), G = {
  SUCCESS: "success",
  FAIL: "fail"
}, R = {
  SUCCESS: {
    type: G.SUCCESS
  },
  FAIL: {
    type: G.FAIL
  }
}, ye = () => ({
  initiator: (e) => {
    const t = new MessageChannel();
    return parent.postMessage("Send port to target", e, [t.port2]), (n) => new Promise((o) => {
      t.port1.postMessage(n), t.port1.onmessage = ({ data: s }) => {
        typeof n == "object" && n !== null && "type" in n && (s == null ? void 0 : s.type) === n.type && o(s == null ? void 0 : s.payload);
      };
    });
  },
  target: async (e) => new Promise((t) => {
    const n = (o) => {
      if (o.ports.length) {
        const s = o.ports[0];
        s.onmessage = (i) => {
          e(i, s);
        }, t({ port: s, cleanup: () => window.removeEventListener("message", n) });
      }
    };
    window.addEventListener("message", n);
  })
}), _e = ye();
function O() {
}
function Y(e) {
  return e();
}
function W() {
  return /* @__PURE__ */ Object.create(null);
}
function M(e) {
  e.forEach(Y);
}
function Z(e) {
  return typeof e == "function";
}
function be(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
let C;
function j(e, t) {
  return C || (C = document.createElement("a")), C.href = t, e === C.href;
}
function we(e) {
  return Object.keys(e).length === 0;
}
function ee(e, t) {
  e.appendChild(t);
}
function Ee(e, t, n) {
  const o = Ie(e);
  if (!o.getElementById(t)) {
    const s = U("style");
    s.id = t, s.textContent = n, Se(o, s);
  }
}
function Ie(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && t.host ? t : e.ownerDocument;
}
function Se(e, t) {
  return ee(e.head || e, t), t.sheet;
}
function te(e, t, n) {
  e.insertBefore(t, n || null);
}
function L(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function U(e) {
  return document.createElement(e);
}
function Oe(e) {
  return document.createTextNode(e);
}
function Te() {
  return Oe("");
}
function h(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function ke(e) {
  return Array.from(e.childNodes);
}
function H(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
let F;
function S(e) {
  F = e;
}
const w = [], q = [];
let I = [];
const K = [], Re = /* @__PURE__ */ Promise.resolve();
let v = !1;
function Ce() {
  v || (v = !0, Re.then(E));
}
function N(e) {
  I.push(e);
}
const P = /* @__PURE__ */ new Set();
let b = 0;
function E() {
  if (b !== 0)
    return;
  const e = F;
  do {
    try {
      for (; b < w.length; ) {
        const t = w[b];
        b++, S(t), xe(t.$$);
      }
    } catch (t) {
      throw w.length = 0, b = 0, t;
    }
    for (S(null), w.length = 0, b = 0; q.length; )
      q.pop()();
    for (let t = 0; t < I.length; t += 1) {
      const n = I[t];
      P.has(n) || (P.add(n), n());
    }
    I.length = 0;
  } while (w.length);
  for (; K.length; )
    K.pop()();
  v = !1, P.clear(), S(e);
}
function xe(e) {
  if (e.fragment !== null) {
    e.update(), M(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(N);
  }
}
function Me(e) {
  const t = [], n = [];
  I.forEach((o) => e.indexOf(o) === -1 ? t.push(o) : n.push(o)), n.forEach((o) => o()), I = t;
}
const $e = /* @__PURE__ */ new Set();
function Pe(e, t) {
  e && e.i && ($e.delete(e), e.i(t));
}
function De(e, t, n, o) {
  const { fragment: s, after_update: i } = e.$$;
  s && s.m(t, n), o || N(() => {
    const l = e.$$.on_mount.map(Y).filter(Z);
    e.$$.on_destroy ? e.$$.on_destroy.push(...l) : M(l), e.$$.on_mount = [];
  }), i.forEach(N);
}
function Ue(e, t) {
  const n = e.$$;
  n.fragment !== null && (Me(n.after_update), M(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ve(e, t) {
  e.$$.dirty[0] === -1 && (w.push(e), Ce(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Ne(e, t, n, o, s, i, l, a = [-1]) {
  const f = F;
  S(e);
  const r = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: O,
    not_equal: s,
    bound: W(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: W(),
    dirty: a,
    skip_bound: !1,
    root: t.target || f.$$.root
  };
  l && l(r.root);
  let p = !1;
  if (r.ctx = n ? n(e, t.props || {}, (c, u, ...m) => {
    const y = m.length ? m[0] : u;
    return r.ctx && s(r.ctx[c], r.ctx[c] = y) && (!r.skip_bound && r.bound[c] && r.bound[c](y), p && ve(e, c)), u;
  }) : [], r.update(), p = !0, M(r.before_update), r.fragment = o ? o(r.ctx) : !1, t.target) {
    if (t.hydrate) {
      const c = ke(t.target);
      r.fragment && r.fragment.l(c), c.forEach(L);
    } else
      r.fragment && r.fragment.c();
    t.intro && Pe(e.$$.fragment), De(e, t.target, t.anchor, t.customElement), E();
  }
  S(f);
}
class Ae {
  $destroy() {
    Ue(this, 1), this.$destroy = O;
  }
  $on(t, n) {
    if (!Z(n))
      return O;
    const o = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return o.push(n), () => {
      const s = o.indexOf(n);
      s !== -1 && o.splice(s, 1);
    };
  }
  $set(t) {
    this.$$set && !we(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
function Be(e) {
  Ee(e, "svelte-1s6dmb5", ".root.svelte-1s6dmb5{position:fixed;z-index:1000;left:0;top:0;width:100%;height:100%;background-color:transparent}.not-visible.svelte-1s6dmb5{visibility:hidden}");
}
function J(e) {
  let t, n, o;
  return {
    c() {
      t = U("div"), n = U("iframe"), h(
        n,
        "id",
        /*iframeId*/
        e[3]
      ), h(n, "sandbox", "allow-same-origin allow-scripts allow-popups allow-forms allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"), h(n, "allowtransparency", !0), h(n, "title", Fe), h(n, "width", "100%"), h(n, "height", "100%"), j(n.src, o = /*url*/
      e[0]) || h(n, "src", o), h(n, "frameborder", "no"), h(t, "class", "root svelte-1s6dmb5"), H(t, "not-visible", !/*isVisible*/
      e[2]);
    },
    m(s, i) {
      te(s, t, i), ee(t, n);
    },
    p(s, i) {
      i & /*iframeId*/
      8 && h(
        n,
        "id",
        /*iframeId*/
        s[3]
      ), i & /*url*/
      1 && !j(n.src, o = /*url*/
      s[0]) && h(n, "src", o), i & /*isVisible*/
      4 && H(t, "not-visible", !/*isVisible*/
      s[2]);
    },
    d(s) {
      s && L(t);
    }
  };
}
function Le(e) {
  let t, n = (
    /*isOpen*/
    e[1] && J(e)
  );
  return {
    c() {
      n && n.c(), t = Te();
    },
    m(o, s) {
      n && n.m(o, s), te(o, t, s);
    },
    p(o, [s]) {
      /*isOpen*/
      o[1] ? n ? n.p(o, s) : (n = J(o), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: O,
    o: O,
    d(o) {
      n && n.d(o), o && L(t);
    }
  };
}
let Fe = "web widget";
function Ve(e, t, n) {
  let { url: o } = t, { isOpen: s } = t, { isVisible: i = !1 } = t, { iframeId: l } = t;
  return e.$$set = (a) => {
    "url" in a && n(0, o = a.url), "isOpen" in a && n(1, s = a.isOpen), "isVisible" in a && n(2, i = a.isVisible), "iframeId" in a && n(3, l = a.iframeId);
  }, [o, s, i, l];
}
class ne extends Ae {
  constructor(t) {
    super(), Ne(
      this,
      t,
      Ve,
      Le,
      be,
      {
        url: 0,
        isOpen: 1,
        isVisible: 2,
        iframeId: 3
      },
      Be
    );
  }
  get url() {
    return this.$$.ctx[0];
  }
  set url(t) {
    this.$$set({ url: t }), E();
  }
  get isOpen() {
    return this.$$.ctx[1];
  }
  set isOpen(t) {
    this.$$set({ isOpen: t }), E();
  }
  get isVisible() {
    return this.$$.ctx[2];
  }
  set isVisible(t) {
    this.$$set({ isVisible: t }), E();
  }
  get iframeId() {
    return this.$$.ctx[3];
  }
  set iframeId(t) {
    this.$$set({ iframeId: t }), E();
  }
}
const oe = (e, t, n) => {
  const o = new URL(e);
  return o.searchParams.set("state", n), o.searchParams.set("bankInvoiceId", t), o;
}, Ge = (e) => e.backUrl ? oe(e.backUrl, e.orderId, "success") : e.successUrl, We = (e) => e.backUrl ? oe(e.backUrl, e.orderId, "return") : e.failUrl, je = (e, t, {
  closeModal: n,
  resolve: o,
  params: s,
  onAppInitialize: i,
  internalParams: l
}) => {
  var a, f, r, p, c, u, m, y;
  if (((a = e.data) == null ? void 0 : a.type) === R.SUCCESS.type && (n(), o(R.SUCCESS.type), window.location.replace(Ge(s))), ((f = e.data) == null ? void 0 : f.type) === R.FAIL.type && (n(), o(R.FAIL.type), window.location.replace(We(s))), ((r = e.data) == null ? void 0 : r.type) === "CLOSE_WIDGET" && (n(), document.body.style.overflow = "", document.body.style.position = "", o("closed")), ((p = e.data) == null ? void 0 : p.type) === "GET_PARAMETERS" && (i == null || i(), t.postMessage({ type: "GET_PARAMETERS", payload: s })), ((c = e.data) == null ? void 0 : c.type) === "GET_VERSION" && t.postMessage({ type: "GET_VERSION", payload: VERSION }), ((u = e.data) == null ? void 0 : u.type) === "OPEN_LINK" && ((m = e.data) != null && m.payload) && window.location.assign(e.data.payload), ((y = e.data) == null ? void 0 : y.type) === "GET_ORDERID") {
    const d = l.get("orderId");
    if (!d)
      return;
    t.postMessage({ type: "GET_ORDERID", payload: d });
  }
}, He = 2e4, z = {
  localhostHttps: "https://localhost:3000",
  localhost: "http://localhost:3000",
  IFT: "https://ift.safepayonline.ru",
  UAT: "https://psi.safepayonline.ru",
  PRODUCTION: "https://safepayonline.ru"
}, Q = {
  localhostHttps: "https://localhost:3000",
  localhost: "http://localhost:3000",
  IFT: "https://ift.platiecom.ru",
  UAT: "https://psi.platiecom.ru",
  PRODUCTION: "https://platiecom.ru"
}, qe = "width=450,height=500,top=200,left=200", V = (e, t = !1) => t ? z[e] || z.PRODUCTION : Q[e] || Q.PRODUCTION, se = (e, t, n) => {
  const o = new URL(e);
  return B() || o.searchParams.append("platform", "desktop"), t && o.searchParams.append("orderId", t), n && o.searchParams.append("params", n), o.toString();
}, Ke = (e, t) => !!e && !(e.includes("Chrome") || e.includes("Chromium")) && e.includes("Safari") && !t, X = Ke(
  navigator.userAgent,
  B()
), re = () => ({
  host: window.location.host,
  href: window.location.href
}), Je = (e, t) => {
  const n = setTimeout(() => e("fail"), He);
  return () => {
    clearTimeout(n), t();
  };
}, ie = () => Math.random().toString(36).substring(2, 15), ae = () => {
  const e = document.getElementById("payment-widget-container");
  if (!e) {
    const t = document.createElement("div");
    return t.setAttribute("id", "payment-widget-container"), document.body.appendChild(t), t;
  }
  return e;
}, ze = (e, t, n) => new ne({
  target: e,
  props: {
    url: t,
    isOpen: !1,
    iframeId: n
  }
}), Qe = (e, t) => {
  const n = /* @__PURE__ */ new Map(), o = ie(), s = ae(), i = V(e, t), l = ze(s, i, o), a = (d) => l.$set({ isOpen: d }), f = () => l.$set({ isVisible: !0 }), r = () => a(!1), p = () => a(!0), c = (d) => l.$set({ url: d });
  let u = null;
  const m = (d) => {
    var g;
    ((g = d.data) == null ? void 0 : g.target) === "tab" && (u == null || u.postMessage(d.data, "*"));
  }, y = (d) => {
    var g, T;
    if (((g = d.data) == null ? void 0 : g.target) === "iframe") {
      const _ = document.getElementById(o);
      (T = _ == null ? void 0 : _.contentWindow) == null || T.window.postMessage(d.data, "*");
    }
  };
  return {
    open: (d) => {
      const g = {
        ...d,
        orderId: d.bankInvoiceId,
        isSafariDesktop: X
      };
      return new Promise(async (T, _) => {
        try {
          c(se(i, g.orderId)), X && (u = window.open(
            i + "/access-cookie",
            "_blank",
            qe
          )), p(), document.body.style.overflow = "hidden", document.body.style.position = "sticky", window.onmessage = (k) => {
            y(k), m(k);
          };
          const { href: $, host: ce } = re(), le = { ...g, href: $, host: ce }, de = Je(_, f);
          _e.target(
            (k, fe) => je(k, fe, {
              closeModal: r,
              resolve: T,
              params: le,
              onAppInitialize: de,
              internalParams: n
            })
          );
        } catch ($) {
          console.error($), r(), _("fail");
        }
      });
    },
    setOrderId: (d) => {
      n.set("orderId", d);
    },
    close: () => {
      document.body.style.overflow = "", document.body.style.position = "", r();
    }
  };
}, Xe = (e, t) => {
  const n = V(e, t);
  return {
    open: (o) => {
      const s = { ...o, orderId: o.bankInvoiceId };
      return new Promise(async (i, l) => {
        try {
          const { href: a, host: f } = re(), r = { ...s, href: a, host: f }, p = btoa(JSON.stringify(r));
          window.location.assign(
            se(n, s.orderId, p)
          );
        } catch {
          l("fail");
        }
      });
    }
  };
}, Ye = 1e4, Ze = (e, t) => new ne({
  target: e,
  props: {
    iframeId: ie(),
    url: t,
    isOpen: !1
  }
}), D = {
  GET_SBERID_RESPONSE: "GET_SBERID_RESPONSE",
  SBERID_RESPONSE: "SBERID_RESPONSE",
  CLOSE_SBERID_TAB: "CLOSE_SBERID_TAB"
}, et = () => setTimeout(() => window.close(), Ye), nt = (e) => {
  const t = ae(), n = V(e), o = Ze(t, `${n}/framed-sberid`), s = (f) => o.$set({ isOpen: f }), i = () => o.$set({ isVisible: !0 }), l = () => s(!1), a = () => s(!0);
  return {
    open: (f) => new Promise(async (r, p) => {
      try {
        et(), window.addEventListener("message", (c) => {
          var u, m;
          ((u = c.data) == null ? void 0 : u.type) === D.GET_SBERID_RESPONSE && c.source.postMessage(
            {
              type: D.SBERID_RESPONSE,
              payload: f
            },
            c.origin
          ), ((m = c.data) == null ? void 0 : m.type) === D.CLOSE_SBERID_TAB && window.close();
        }), a(), i();
      } catch (c) {
        console.error(c), l(), p("fail");
      }
    })
  };
}, tt = (e, t) => B() ? Xe(e, t) : Qe(e, t), ot = (...e) => tt(...e);
export {
  Ze as createModal,
  nt as createSberIdIFrame,
  ot as createWidget,
  tt as createWidgetInternal
};
