! function(e, t) {
    var a = t(e, e.document);
    e.lazySizes = a, "object" == typeof module && module.exports ? module.exports = a : "function" == typeof define && define.amd && define(a) }(window, function(e, t) { "use strict";
    if (t.getElementsByClassName) {
        var a, i = t.documentElement,
            n = e.HTMLPictureElement && "sizes" in t.createElement("img"),
            r = "addEventListener",
            s = e[r],
            o = e.setTimeout,
            l = e.requestAnimationFrame || o,
            c = /^picture$/i,
            d = ["load", "error", "lazyincluded", "_lazyloaded"],
            u = {},
            f = Array.prototype.forEach,
            m = function(e, t) {
                return u[t] || (u[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), u[t].test(e.className) && u[t] },
            g = function(e, t) { m(e, t) || (e.className = e.className.trim() + " " + t) },
            z = function(e, t) {
                var a;
                (a = m(e, t)) && (e.className = e.className.replace(a, " ")) },
            v = function(e, t, a) {
                var i = a ? r : "removeEventListener";
                a && v(e, t), d.forEach(function(a) { e[i](a, t) }) },
            y = function(e, a, i, n, r) {
                var s = t.createEvent("CustomEvent");
                return s.initCustomEvent(a, !n, !r, i || {}), e.dispatchEvent(s), s },
            h = function(t, i) {
                var r;!n && (r = e.picturefill || a.pf) ? r({ reevaluate: !0, elements: [t] }) : i && i.src && (t.src = i.src) },
            p = function(e, t) {
                return (getComputedStyle(e, null) || {})[t] },
            C = function(e, t, i) {
                for (i = i || e.offsetWidth; i < a.minSize && t && !e._lazysizesWidth;) i = t.offsetWidth, t = t.parentNode;
                return i },
            A = function(t) {
                var a, i = 0,
                    n = e.Date,
                    r = function() { a = !1, i = n.now(), t() },
                    s = function() { o(r) },
                    c = function() { l(s) };
                return function() {
                    if (!a) {
                        var e = 125 - (n.now() - i);
                        a = !0, 6 > e && (e = 6), o(c, e) } } },
            b = function() {
                var n, d, u, C, b, N, M, w, _, W, x, B, S, L, R, D = /^img$/i,
                    T = /^iframe$/i,
                    k = "onscroll" in e && !/glebot/.test(navigator.userAgent),
                    F = 0,
                    O = 0,
                    P = 0,
                    $ = 0,
                    H = function(e) { P--, e && e.target && v(e.target, H), (!e || 0 > P || !e.target) && (P = 0) },
                    I = function(e, t) {
                        var a, i = e,
                            n = "hidden" != p(e, "visibility");
                        for (_ -= t, B += t, W -= t, x += t; n && (i = i.offsetParent);) n = (p(i, "opacity") || 1) > 0, n && "visible" != p(i, "overflow") && (a = i.getBoundingClientRect(), n = x > a.left && W < a.right && B > a.top - 1 && _ < a.bottom + 1);
                        return n },
                    j = function() {
                        var e, t, i, r, s, o, l, c, f;
                        if ((b = a.loadMode) && 8 > P && (e = n.length)) {
                            for (t = 0, $++, L > O && 1 > P && $ > 3 && b > 2 ? (O = L, $ = 0) : O = b > 1 && $ > 2 && 6 > P ? S : F; e > t; t++)
                                if (n[t] && !n[t]._lazyRace)
                                    if (k)
                                        if ((c = n[t].getAttribute("data-expand")) && (o = 1 * c) || (o = O), f !== o && (M = innerWidth + o * R, w = innerHeight + o, l = -1 * o, f = o), i = n[t].getBoundingClientRect(), (B = i.bottom) >= l && (_ = i.top) <= w && (x = i.right) >= l * R && (W = i.left) <= M && (B || x || W || _) && (u && 3 > P && !c && (3 > b || 4 > $) || I(n[t], o))) {
                                            if (U(n[t]), s = !0, P > 9) break } else !s && u && !r && 4 > P && 4 > $ && b > 2 && (d[0] || a.preloadAfterLoad) && (d[0] || !c && (B || x || W || _ || "auto" != n[t].getAttribute(a.sizesAttr))) && (r = d[0] || n[t]);
                            else U(n[t]);
                            r && !s && U(r) } },
                    q = A(j),
                    G = function(e) { g(e.target, a.loadedClass), z(e.target, a.loadingClass), v(e.target, G) },
                    J = function(e, t) {
                        try { e.contentWindow.location.replace(t) } catch (a) { e.src = t } },
                    K = function(e) {
                        var t, i, n = e.getAttribute(a.srcsetAttr);
                        (t = a.customMedia[e.getAttribute("data-media") || e.getAttribute("media")]) && e.setAttribute("media", t), n && e.setAttribute("srcset", n), t && (i = e.parentNode, i.insertBefore(e.cloneNode(), e), i.removeChild(e)) },
                    Q = function() {
                        var e, t = [],
                            a = function() {
                                for (; t.length;) t.shift()();
                                e = !1 };
                        return function(i) { t.push(i), e || (e = !0, l(a)) } }(),
                    U = function(e) {
                        var t, i, n, r, s, l, d, p = D.test(e.nodeName),
                            A = p && (e.getAttribute(a.sizesAttr) || e.getAttribute("sizes")),
                            b = "auto" == A;
                        (!b && u || !p || !e.src && !e.srcset || e.complete || m(e, a.errorClass)) && (b && (d = e.offsetWidth), e._lazyRace = !0, P++, Q(function() { e._lazyRace && delete e._lazyRace, z(e, a.lazyClass), (s = y(e, "lazybeforeunveil")).defaultPrevented || (A && (b ? (g(e, a.autosizesClass), E.updateElem(e, !0, d)) : e.setAttribute("sizes", A)), i = e.getAttribute(a.srcsetAttr), t = e.getAttribute(a.srcAttr), p && (n = e.parentNode, r = n && c.test(n.nodeName || "")), l = s.detail.firesLoad || "src" in e && (i || t || r), s = { target: e }, l && (v(e, H, !0), clearTimeout(C), C = o(H, 2500), g(e, a.loadingClass), v(e, G, !0)), r && f.call(n.getElementsByTagName("source"), K), i ? e.setAttribute("srcset", i) : t && !r && (T.test(e.nodeName) ? J(e, t) : e.src = t), (i || r) && h(e, { src: t })), (!l || e.complete) && (l ? H(s) : P--, G(s)) })) },
                    V = function() {
                        if (!u) {
                            if (Date.now() - N < 999) return void o(V, 999);
                            var e, t = function() { a.loadMode = 3, q() };
                            u = !0, a.loadMode = 3, P || q(), s("scroll", function() { 3 == a.loadMode && (a.loadMode = 2), clearTimeout(e), e = o(t, 99) }, !0) } };
                return { _: function() { N = Date.now(), n = t.getElementsByClassName(a.lazyClass), d = t.getElementsByClassName(a.lazyClass + " " + a.preloadClass), R = a.hFac, S = a.expand, L = S * a.expFactor, s("scroll", q, !0), s("resize", q, !0), e.MutationObserver ? new MutationObserver(q).observe(i, { childList: !0, subtree: !0, attributes: !0 }) : (i[r]("DOMNodeInserted", q, !0), i[r]("DOMAttrModified", q, !0), setInterval(q, 999)), s("hashchange", q, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(e) { t[r](e, q, !0) }), /d$|^c/.test(t.readyState) ? V() : (s("load", V), t[r]("DOMContentLoaded", q), o(V, 2e4)), q(n.length > 0) }, checkElems: q, unveil: U } }(),
            E = function() {
                var e, i = function(e, t, a) {
                        var i, n, r, s, o = e.parentNode;
                        if (o && (a = C(e, o, a), s = y(e, "lazybeforesizes", { width: a, dataAttr: !!t }), !s.defaultPrevented && (a = s.detail.width, a && a !== e._lazysizesWidth))) {
                            if (e._lazysizesWidth = a, a += "px", e.setAttribute("sizes", a), c.test(o.nodeName || ""))
                                for (i = o.getElementsByTagName("source"), n = 0, r = i.length; r > n; n++) i[n].setAttribute("sizes", a);
                            s.detail.dataAttr || h(e, s.detail) } },
                    n = function() {
                        var t, a = e.length;
                        if (a)
                            for (t = 0; a > t; t++) i(e[t]) },
                    r = A(n);
                return { _: function() { e = t.getElementsByClassName(a.autosizesClass), s("resize", r) }, checkElems: r, updateElem: i } }(),
            N = function() { N.i || (N.i = !0, E._(), b._()) };
        return function() {
            var t, n = { lazyClass: "lazyload", loadedClass: "lazyloaded", loadingClass: "lazyloading", preloadClass: "lazypreload", errorClass: "lazyerror", autosizesClass: "lazyautosizes", srcAttr: "data-src", srcsetAttr: "data-srcset", sizesAttr: "data-sizes", minSize: 40, customMedia: {}, init: !0, expFactor: 1.7, hFac: .8, expand: i.clientHeight > 600 ? i.clientWidth > 860 ? 500 : 410 : 359, loadMode: 2 };
            a = e.lazySizesConfig || e.lazysizesConfig || {};
            for (t in n) t in a || (a[t] = n[t]);
            e.lazySizesConfig = a, o(function() { a.init && N() }) }(), { cfg: a, autoSizer: E, loader: b, init: N, uP: h, aC: g, rC: z, hC: m, fire: y, gW: C } } });
