"undefined" == typeof WEBSITE_LIB && (WEBSITE_LIB = {}), WEBSITE_LIB.theme_dollar = null, WEBSITE_LIB.theme_jQuery = null, WEBSITE_LIB.$ = null, WEBSITE_LIB.jQuery = null, WEBSITE_LIB.theme_dollar = "undefined" == typeof $ ? void 0 : $, WEBSITE_LIB.theme_jQuery = "undefined" == typeof jQuery ? void 0 : jQuery,
    function(e, t) {
        function n(e) {
            var t = ht[e] = {};
            return K.each(e.split(tt), function(e, n) { t[n] = !0 }), t }

        function r(e, n, r) {
            if (r === t && 1 === e.nodeType) {
                var i = "data-" + n.replace(mt, "-$1").toLowerCase();
                if (r = e.getAttribute(i), "string" == typeof r) {
                    try { r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : gt.test(r) ? K.parseJSON(r) : r } catch (o) {}
                    K.data(e, n, r) } else r = t }
            return r }

        function i(e) {
            var t;
            for (t in e)
                if (("data" !== t || !K.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0 }

        function o() {
            return !1 }

        function a() {
            return !0 }

        function s(e) {
            return !e || !e.parentNode || 11 === e.parentNode.nodeType }

        function l(e, t) { do e = e[t]; while (e && 1 !== e.nodeType);
            return e }

        function u(e, t, n) {
            if (t = t || 0, K.isFunction(t)) return K.grep(e, function(e, r) {
                var i = !!t.call(e, r, e);
                return i === n });
            if (t.nodeType) return K.grep(e, function(e) {
                return e === t === n });
            if ("string" == typeof t) {
                var r = K.grep(e, function(e) {
                    return 1 === e.nodeType });
                if (Rt.test(t)) return K.filter(t, r, !n);
                t = K.filter(t, r) }
            return K.grep(e, function(e) {
                return K.inArray(e, t) >= 0 === n }) }

        function c(e) {
            var t = qt.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n }

        function f(e, t) {
            return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t)) }

        function d(e, t) {
            if (1 === t.nodeType && K.hasData(e)) {
                var n, r, i, o = K._data(e),
                    a = K._data(t, o),
                    s = o.events;
                if (s) { delete a.handle, a.events = {};
                    for (n in s)
                        for (r = 0, i = s[n].length; i > r; r++) K.event.add(t, n, s[n][r]) }
                a.data && (a.data = K.extend({}, a.data)) } }

        function p(e, t) {
            var n;
            1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), K.support.html5Clone && e.innerHTML && !K.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Vt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text), t.removeAttribute(K.expando)) }

        function h(e) {
            return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : [] }

        function g(e) { Vt.test(e.type) && (e.defaultChecked = e.checked) }

        function m(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = vn.length; i--;)
                if (t = vn[i] + n, t in e) return t;
            return r }

        function y(e, t) {
            return e = t || e, "none" === K.css(e, "display") || !K.contains(e.ownerDocument, e) }

        function v(e, t) {
            for (var n, r, i = [], o = 0, a = e.length; a > o; o++) n = e[o], n.style && (i[o] = K._data(n, "olddisplay"), t ? (!i[o] && "none" === n.style.display && (n.style.display = ""), "" === n.style.display && y(n) && (i[o] = K._data(n, "olddisplay", T(n.nodeName)))) : (r = nn(n, "display"), !i[o] && "none" !== r && K._data(n, "olddisplay", r)));
            for (o = 0; a > o; o++) n = e[o], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? i[o] || "" : "none"));
            return e }

        function b(e, t, n) {
            var r = fn.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t }

        function x(e, t, n, r) {
            for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > i; i += 2) "margin" === n && (o += K.css(e, n + yn[i], !0)), r ? ("content" === n && (o -= parseFloat(nn(e, "padding" + yn[i])) || 0), "margin" !== n && (o -= parseFloat(nn(e, "border" + yn[i] + "Width")) || 0)) : (o += parseFloat(nn(e, "padding" + yn[i])) || 0, "padding" !== n && (o += parseFloat(nn(e, "border" + yn[i] + "Width")) || 0));
            return o }

        function w(e, t, n) {
            var r = "width" === t ? e.offsetWidth : e.offsetHeight,
                i = !0,
                o = K.support.boxSizing && "border-box" === K.css(e, "boxSizing");
            if (0 >= r || null == r) {
                if (r = nn(e, t), (0 > r || null == r) && (r = e.style[t]), dn.test(r)) return r;
                i = o && (K.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0 }
            return r + x(e, t, n || (o ? "border" : "content"), i) + "px" }

        function T(e) {
            if (hn[e]) return hn[e];
            var t = K("<" + e + ">").appendTo($.body),
                n = t.css("display");
            return t.remove(), ("none" === n || "" === n) && (rn = $.body.appendChild(rn || K.extend($.createElement("iframe"), { frameBorder: 0, width: 0, height: 0 })), on && rn.createElement || (on = (rn.contentWindow || rn.contentDocument).document, on.write("<!doctype html><html><body>"), on.close()), t = on.body.appendChild(on.createElement(e)), n = nn(t, "display"), $.body.removeChild(rn)), hn[e] = n, n }

        function k(e, t, n, r) {
            var i;
            if (K.isArray(t)) K.each(t, function(t, i) { n || wn.test(e) ? r(e, i) : k(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r) });
            else if (n || "object" !== K.type(t)) r(e, t);
            else
                for (i in t) k(e + "[" + i + "]", t[i], n, r) }

        function N(e) {
            return function(t, n) { "string" != typeof t && (n = t, t = "*");
                var r, i, o, a = t.toLowerCase().split(tt),
                    s = 0,
                    l = a.length;
                if (K.isFunction(n))
                    for (; l > s; s++) r = a[s], o = /^\+/.test(r), o && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[o ? "unshift" : "push"](n) } }

        function C(e, n, r, i, o, a) { o = o || n.dataTypes[0], a = a || {}, a[o] = !0;
            for (var s, l = e[o], u = 0, c = l ? l.length : 0, f = e === Fn; c > u && (f || !s); u++) s = l[u](n, r, i), "string" == typeof s && (!f || a[s] ? s = t : (n.dataTypes.unshift(s), s = C(e, n, r, i, s, a)));
            return (f || !s) && !a["*"] && (s = C(e, n, r, i, "*", a)), s }

        function E(e, n) {
            var r, i, o = K.ajaxSettings.flatOptions || {};
            for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
            i && K.extend(!0, e, i) }

        function A(e, n, r) {
            var i, o, a, s, l = e.contents,
                u = e.dataTypes,
                c = e.responseFields;
            for (o in c) o in r && (n[c[o]] = r[o]);
            for (;
                "*" === u[0];) u.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
            if (i)
                for (o in l)
                    if (l[o] && l[o].test(i)) { u.unshift(o);
                        break }
            if (u[0] in r) a = u[0];
            else {
                for (o in r) {
                    if (!u[0] || e.converters[o + " " + u[0]]) { a = o;
                        break }
                    s || (s = o) }
                a = a || s }
            return a ? (a !== u[0] && u.unshift(a), r[a]) : void 0 }

        function S(e, t) {
            var n, r, i, o, a = e.dataTypes.slice(),
                s = a[0],
                l = {},
                u = 0;
            if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), a[1])
                for (n in e.converters) l[n.toLowerCase()] = e.converters[n];
            for (; i = a[++u];)
                if ("*" !== i) {
                    if ("*" !== s && s !== i) {
                        if (n = l[s + " " + i] || l["* " + i], !n)
                            for (r in l)
                                if (o = r.split(" "), o[1] === i && (n = l[s + " " + o[0]] || l["* " + o[0]])) { n === !0 ? n = l[r] : l[r] !== !0 && (i = o[0], a.splice(u--, 0, i));
                                    break }
                        if (n !== !0)
                            if (n && e["throws"]) t = n(t);
                            else try { t = n(t) } catch (c) {
                                return { state: "parsererror", error: n ? c : "No conversion from " + s + " to " + i } } }
                    s = i }
            return { state: "success", data: t } }

        function _() {
            try {
                return new e.XMLHttpRequest } catch (t) {} }

        function M() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (t) {} }

        function j() {
            return setTimeout(function() { Qn = t }, 0), Qn = K.now() }

        function L(e, t) { K.each(t, function(t, n) {
                for (var r = (er[t] || []).concat(er["*"]), i = 0, o = r.length; o > i; i++)
                    if (r[i].call(e, t, n)) return }) }

        function O(e, t, n) {
            var r, i = 0,
                o = Zn.length,
                a = K.Deferred().always(function() { delete s.elem }),
                s = function() {
                    for (var t = Qn || j(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, i = 1 - r, o = 0, s = l.tweens.length; s > o; o++) l.tweens[o].run(i);
                    return a.notifyWith(e, [l, i, n]), 1 > i && s ? n : (a.resolveWith(e, [l]), !1) },
                l = a.promise({ elem: e, props: K.extend({}, t), opts: K.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: Qn || j(), duration: n.duration, tweens: [], createTween: function(t, n) {
                        var r = K.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(r), r }, stop: function(t) {
                        for (var n = 0, r = t ? l.tweens.length : 0; r > n; n++) l.tweens[n].run(1);
                        return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this } }),
                u = l.props;
            for (D(u, l.opts.specialEasing); o > i; i++)
                if (r = Zn[i].call(l, e, u, l.opts)) return r;
            return L(l, u), K.isFunction(l.opts.start) && l.opts.start.call(e, l), K.fx.timer(K.extend(s, { anim: l, queue: l.opts.queue, elem: e })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always) }

        function D(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (r = K.camelCase(n), i = t[r], o = e[n], K.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = K.cssHooks[r], a && "expand" in a) { o = a.expand(o), delete e[r];
                    for (n in o) n in e || (e[n] = o[n], t[n] = i) } else t[r] = i }

        function H(e, t, n) {
            var r, i, o, a, s, l, u, c, f, d = this,
                p = e.style,
                h = {},
                g = [],
                m = e.nodeType && y(e);
            n.queue || (c = K._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, f = c.empty.fire, c.empty.fire = function() { c.unqueued || f() }), c.unqueued++, d.always(function() { d.always(function() { c.unqueued--, K.queue(e, "fx").length || c.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === K.css(e, "display") && "none" === K.css(e, "float") && (K.support.inlineBlockNeedsLayout && "inline" !== T(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", K.support.shrinkWrapBlocks || d.done(function() { p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2] }));
            for (r in t)
                if (o = t[r], Jn.exec(o)) {
                    if (delete t[r], l = l || "toggle" === o, o === (m ? "hide" : "show")) continue;
                    g.push(r) }
            if (a = g.length) { s = K._data(e, "fxshow") || K._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), l && (s.hidden = !m), m ? K(e).show() : d.done(function() { K(e).hide() }), d.done(function() {
                    var t;
                    K.removeData(e, "fxshow", !0);
                    for (t in h) K.style(e, t, h[t]) });
                for (r = 0; a > r; r++) i = g[r], u = d.createTween(i, m ? s[i] : 0), h[i] = s[i] || K.style(e, i), i in s || (s[i] = u.start, m && (u.end = u.start, u.start = "width" === i || "height" === i ? 1 : 0)) } }

        function R(e, t, n, r, i) {
            return new R.prototype.init(e, t, n, r, i) }

        function F(e, t) {
            var n, r = { height: e },
                i = 0;
            for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = yn[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r }

        function B(e) {
            return K.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1 }
        var q, P, $ = e.document,
            I = e.location,
            W = e.navigator,
            z = e.jQuery,
            X = e.$,
            U = Array.prototype.push,
            Y = Array.prototype.slice,
            Q = Array.prototype.indexOf,
            V = Object.prototype.toString,
            J = Object.prototype.hasOwnProperty,
            G = String.prototype.trim,
            K = function(e, t) {
                return new K.fn.init(e, t, q) },
            Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
            et = /\S/,
            tt = /\s+/,
            nt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            rt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
            it = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ot = /^[\],:{}\s]*$/,
            at = /(?:^|:|,)(?:\s*\[)+/g,
            st = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            lt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
            ut = /^-ms-/,
            ct = /-([\da-z])/gi,
            ft = function(e, t) {
                return (t + "").toUpperCase() },
            dt = function() { $.addEventListener ? ($.removeEventListener("DOMContentLoaded", dt, !1), K.ready()) : "complete" === $.readyState && ($.detachEvent("onreadystatechange", dt), K.ready()) },
            pt = {};
        K.fn = K.prototype = { constructor: K, init: function(e, n, r) {
                var i, o, a;
                if (!e) return this;
                if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                if ("string" == typeof e) {
                    if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : rt.exec(e), i && (i[1] || !n)) {
                        if (i[1]) return n = n instanceof K ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : $, e = K.parseHTML(i[1], a, !0), it.test(i[1]) && K.isPlainObject(n) && this.attr.call(e, n, !0), K.merge(this, e);
                        if (o = $.getElementById(i[2]), o && o.parentNode) {
                            if (o.id !== i[2]) return r.find(e);
                            this.length = 1, this[0] = o }
                        return this.context = $, this.selector = e, this }
                    return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e) }
                return K.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), K.makeArray(e, this)) }, selector: "", jquery: "1.8.3", length: 0, size: function() {
                return this.length }, toArray: function() {
                return Y.call(this) }, get: function(e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e] }, pushStack: function(e, t, n) {
                var r = K.merge(this.constructor(), e);
                return r.prevObject = this, r.context = this.context, "find" === t ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r }, each: function(e, t) {
                return K.each(this, e, t) }, ready: function(e) {
                return K.ready.promise().done(e), this }, eq: function(e) {
                return e = +e, -1 === e ? this.slice(e) : this.slice(e, e + 1) }, first: function() {
                return this.eq(0) }, last: function() {
                return this.eq(-1) }, slice: function() {
                return this.pushStack(Y.apply(this, arguments), "slice", Y.call(arguments).join(",")) }, map: function(e) {
                return this.pushStack(K.map(this, function(t, n) {
                    return e.call(t, n, t) })) }, end: function() {
                return this.prevObject || this.constructor(null) }, push: U, sort: [].sort, splice: [].splice }, K.fn.init.prototype = K.fn, K.extend = K.fn.extend = function() {
            var e, n, r, i, o, a, s = arguments[0] || {},
                l = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" != typeof s && !K.isFunction(s) && (s = {}), u === l && (s = this, --l); u > l; l++)
                if (null != (e = arguments[l]))
                    for (n in e) r = s[n], i = e[n], s !== i && (c && i && (K.isPlainObject(i) || (o = K.isArray(i))) ? (o ? (o = !1, a = r && K.isArray(r) ? r : []) : a = r && K.isPlainObject(r) ? r : {}, s[n] = K.extend(c, a, i)) : i !== t && (s[n] = i));
            return s }, K.extend({ noConflict: function(t) {
                return e.$ === K && (e.$ = X), t && e.jQuery === K && (e.jQuery = z), K }, isReady: !1, readyWait: 1, holdReady: function(e) { e ? K.readyWait++ : K.ready(!0) }, ready: function(e) {
                if (e === !0 ? !--K.readyWait : !K.isReady) {
                    if (!$.body) return setTimeout(K.ready, 1);
                    K.isReady = !0, e !== !0 && --K.readyWait > 0 || (P.resolveWith($, [K]), K.fn.trigger && K($).trigger("ready").off("ready")) } }, isFunction: function(e) {
                return "function" === K.type(e) }, isArray: Array.isArray || function(e) {
                return "array" === K.type(e) }, isWindow: function(e) {
                return null != e && e == e.window }, isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e) }, type: function(e) {
                return null == e ? String(e) : pt[V.call(e)] || "object" }, isPlainObject: function(e) {
                if (!e || "object" !== K.type(e) || e.nodeType || K.isWindow(e)) return !1;
                try {
                    if (e.constructor && !J.call(e, "constructor") && !J.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (n) {
                    return !1 }
                var r;
                for (r in e);
                return r === t || J.call(e, r) }, isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0 }, error: function(e) {
                throw new Error(e) }, parseHTML: function(e, t, n) {
                var r;
                return e && "string" == typeof e ? ("boolean" == typeof t && (n = t, t = 0), t = t || $, (r = it.exec(e)) ? [t.createElement(r[1])] : (r = K.buildFragment([e], t, n ? null : []), K.merge([], (r.cacheable ? K.clone(r.fragment) : r.fragment).childNodes))) : null }, parseJSON: function(t) {
                return t && "string" == typeof t ? (t = K.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : ot.test(t.replace(st, "@").replace(lt, "]").replace(at, "")) ? new Function("return " + t)() : (K.error("Invalid JSON: " + t), void 0)) : null }, parseXML: function(n) {
                var r, i;
                if (!n || "string" != typeof n) return null;
                try { e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n)) } catch (o) { r = t }
                return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && K.error("Invalid XML: " + n), r }, noop: function() {}, globalEval: function(t) { t && et.test(t) && (e.execScript || function(t) { e.eval.call(e, t) })(t) }, camelCase: function(e) {
                return e.replace(ut, "ms-").replace(ct, ft) }, nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }, each: function(e, n, r) {
                var i, o = 0,
                    a = e.length,
                    s = a === t || K.isFunction(e);
                if (r)
                    if (s) {
                        for (i in e)
                            if (n.apply(e[i], r) === !1) break } else
                        for (; a > o && n.apply(e[o++], r) !== !1;);
                else if (s) {
                    for (i in e)
                        if (n.call(e[i], i, e[i]) === !1) break } else
                    for (; a > o && n.call(e[o], o, e[o++]) !== !1;);
                return e }, trim: G && !G.call("\ufeff\xa0") ? function(e) {
                return null == e ? "" : G.call(e) } : function(e) {
                return null == e ? "" : (e + "").replace(nt, "") }, makeArray: function(e, t) {
                var n, r = t || [];
                return null != e && (n = K.type(e), null == e.length || "string" === n || "function" === n || "regexp" === n || K.isWindow(e) ? U.call(r, e) : K.merge(r, e)), r }, inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (Q) return Q.call(t, e, n);
                    for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                        if (n in t && t[n] === e) return n }
                return -1 }, merge: function(e, n) {
                var r = n.length,
                    i = e.length,
                    o = 0;
                if ("number" == typeof r)
                    for (; r > o; o++) e[i++] = n[o];
                else
                    for (; n[o] !== t;) e[i++] = n[o++];
                return e.length = i, e }, grep: function(e, t, n) {
                var r, i = [],
                    o = 0,
                    a = e.length;
                for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
                return i }, map: function(e, n, r) {
                var i, o, a = [],
                    s = 0,
                    l = e.length,
                    u = e instanceof K || l !== t && "number" == typeof l && (l > 0 && e[0] && e[l - 1] || 0 === l || K.isArray(e));
                if (u)
                    for (; l > s; s++) i = n(e[s], s, r), null != i && (a[a.length] = i);
                else
                    for (o in e) i = n(e[o], o, r), null != i && (a[a.length] = i);
                return a.concat.apply([], a) }, guid: 1, proxy: function(e, n) {
                var r, i, o;
                return "string" == typeof n && (r = e[n], n = e, e = r), K.isFunction(e) ? (i = Y.call(arguments, 2), o = function() {
                    return e.apply(n, i.concat(Y.call(arguments))) }, o.guid = e.guid = e.guid || K.guid++, o) : t }, access: function(e, n, r, i, o, a, s) {
                var l, u = null == r,
                    c = 0,
                    f = e.length;
                if (r && "object" == typeof r) {
                    for (c in r) K.access(e, n, c, r[c], 1, a, i);
                    o = 1 } else if (i !== t) {
                    if (l = s === t && K.isFunction(i), u && (l ? (l = n, n = function(e, t, n) {
                            return l.call(K(e), n) }) : (n.call(e, i), n = null)), n)
                        for (; f > c; c++) n(e[c], r, l ? i.call(e[c], c, n(e[c], r)) : i, s);
                    o = 1 }
                return o ? e : u ? n.call(e) : f ? n(e[0], r) : a }, now: function() {
                return (new Date).getTime() } }), K.ready.promise = function(t) {
            if (!P)
                if (P = K.Deferred(), "complete" === $.readyState) setTimeout(K.ready, 1);
                else if ($.addEventListener) $.addEventListener("DOMContentLoaded", dt, !1), e.addEventListener("load", K.ready, !1);
            else { $.attachEvent("onreadystatechange", dt), e.attachEvent("onload", K.ready);
                var n = !1;
                try { n = null == e.frameElement && $.documentElement } catch (r) {}
                n && n.doScroll && function i() {
                    if (!K.isReady) {
                        try { n.doScroll("left") } catch (e) {
                            return setTimeout(i, 50) }
                        K.ready() } }() }
            return P.promise(t) }, K.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) { pt["[object " + t + "]"] = t.toLowerCase() }), q = K($);
        var ht = {};
        K.Callbacks = function(e) { e = "string" == typeof e ? ht[e] || n(e) : K.extend({}, e);
            var r, i, o, a, s, l, u = [],
                c = !e.once && [],
                f = function(t) {
                    for (r = e.memory && t, i = !0, l = a || 0, a = 0, s = u.length, o = !0; u && s > l; l++)
                        if (u[l].apply(t[0], t[1]) === !1 && e.stopOnFalse) { r = !1;
                            break }
                    o = !1, u && (c ? c.length && f(c.shift()) : r ? u = [] : d.disable()) },
                d = { add: function() {
                        if (u) {
                            var t = u.length;! function n(t) { K.each(t, function(t, r) {
                                    var i = K.type(r); "function" === i ? (!e.unique || !d.has(r)) && u.push(r) : r && r.length && "string" !== i && n(r) }) }(arguments), o ? s = u.length : r && (a = t, f(r)) }
                        return this }, remove: function() {
                        return u && K.each(arguments, function(e, t) {
                            for (var n;
                                (n = K.inArray(t, u, n)) > -1;) u.splice(n, 1), o && (s >= n && s--, l >= n && l--) }), this }, has: function(e) {
                        return K.inArray(e, u) > -1 }, empty: function() {
                        return u = [], this }, disable: function() {
                        return u = c = r = t, this }, disabled: function() {
                        return !u }, lock: function() {
                        return c = t, r || d.disable(), this }, locked: function() {
                        return !c }, fireWith: function(e, t) {
                        return t = t || [], t = [e, t.slice ? t.slice() : t], u && (!i || c) && (o ? c.push(t) : f(t)), this }, fire: function() {
                        return d.fireWith(this, arguments), this }, fired: function() {
                        return !!i } };
            return d }, K.extend({ Deferred: function(e) {
                var t = [
                        ["resolve", "done", K.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", K.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", K.Callbacks("memory")]
                    ],
                    n = "pending",
                    r = { state: function() {
                            return n }, always: function() {
                            return i.done(arguments).fail(arguments), this }, then: function() {
                            var e = arguments;
                            return K.Deferred(function(n) { K.each(t, function(t, r) {
                                    var o = r[0],
                                        a = e[t];
                                    i[r[1]](K.isFunction(a) ? function() {
                                        var e = a.apply(this, arguments);
                                        e && K.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === i ? n : this, [e]) } : n[o]) }), e = null }).promise() }, promise: function(e) {
                            return null != e ? K.extend(e, r) : r } },
                    i = {};
                return r.pipe = r.then, K.each(t, function(e, o) {
                    var a = o[2],
                        s = o[3];
                    r[o[1]] = a.add, s && a.add(function() { n = s }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = a.fire, i[o[0] + "With"] = a.fireWith }), r.promise(i), e && e.call(i, i), i }, when: function(e) {
                var t, n, r, i = 0,
                    o = Y.call(arguments),
                    a = o.length,
                    s = 1 !== a || e && K.isFunction(e.promise) ? a : 0,
                    l = 1 === s ? e : K.Deferred(),
                    u = function(e, n, r) {
                        return function(i) { n[e] = this, r[e] = arguments.length > 1 ? Y.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r) } };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && K.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, t)) : --s;
                return s || l.resolveWith(r, o), l.promise() } }), K.support = function() {
            var t, n, r, i, o, a, s, l, u, c, f, d = $.createElement("div");
            if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
            i = $.createElement("select"), o = i.appendChild($.createElement("option")), a = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = { leadingWhitespace: 3 === d.firstChild.nodeType, tbody: !d.getElementsByTagName("tbody").length, htmlSerialize: !!d.getElementsByTagName("link").length, style: /top/.test(r.getAttribute("style")), hrefNormalized: "/a" === r.getAttribute("href"), opacity: /^0.5/.test(r.style.opacity), cssFloat: !!r.style.cssFloat, checkOn: "on" === a.value, optSelected: o.selected, getSetAttribute: "t" !== d.className, enctype: !!$.createElement("form").enctype, html5Clone: "<:nav></:nav>" !== $.createElement("nav").cloneNode(!0).outerHTML, boxModel: "CSS1Compat" === $.compatMode, submitBubbles: !0, changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1 }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !o.disabled;
            try { delete d.test } catch (p) { t.deleteExpando = !1 }
            if (!d.addEventListener && d.attachEvent && d.fireEvent && (d.attachEvent("onclick", f = function() { t.noCloneEvent = !1 }), d.cloneNode(!0).fireEvent("onclick"), d.detachEvent("onclick", f)), a = $.createElement("input"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), d.appendChild(a), s = $.createDocumentFragment(), s.appendChild(d.lastChild), t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = a.checked, s.removeChild(a), s.appendChild(d), d.attachEvent)
                for (u in { submit: !0, change: !0, focusin: !0 }) l = "on" + u, c = l in d, c || (d.setAttribute(l, "return;"), c = "function" == typeof d[l]), t[u + "Bubbles"] = c;
            return K(function() {
                var n, r, i, o, a = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                    s = $.getElementsByTagName("body")[0];
                s && (n = $.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", s.insertBefore(n, s.firstChild), r = $.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = r.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === i[0].offsetHeight, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === r.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(r, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(r, null) || { width: "4px" }).width, o = $.createElement("div"), o.style.cssText = r.style.cssText = a, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), "undefined" != typeof r.style.zoom && (r.innerHTML = "", r.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === r.offsetWidth, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== r.offsetWidth, n.style.zoom = 1), s.removeChild(n), n = r = i = o = null) }), s.removeChild(d), n = r = i = o = a = s = d = null, t }();
        var gt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            mt = /([A-Z])/g;
        K.extend({ cache: {}, deletedIds: [], uuid: 0, expando: "jQuery" + (K.fn.jquery + Math.random()).replace(/\D/g, ""), noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 }, hasData: function(e) {
                return e = e.nodeType ? K.cache[e[K.expando]] : e[K.expando], !!e && !i(e) }, data: function(e, n, r, i) {
                if (K.acceptData(e)) {
                    var o, a, s = K.expando,
                        l = "string" == typeof n,
                        u = e.nodeType,
                        c = u ? K.cache : e,
                        f = u ? e[s] : e[s] && s;
                    if (f && c[f] && (i || c[f].data) || !l || r !== t) return f || (u ? e[s] = f = K.deletedIds.pop() || K.guid++ : f = s), c[f] || (c[f] = {}, u || (c[f].toJSON = K.noop)), ("object" == typeof n || "function" == typeof n) && (i ? c[f] = K.extend(c[f], n) : c[f].data = K.extend(c[f].data, n)), o = c[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[K.camelCase(n)] = r), l ? (a = o[n], null == a && (a = o[K.camelCase(n)])) : a = o, a } }, removeData: function(e, t, n) {
                if (K.acceptData(e)) {
                    var r, o, a, s = e.nodeType,
                        l = s ? K.cache : e,
                        u = s ? e[K.expando] : K.expando;
                    if (l[u]) {
                        if (t && (r = n ? l[u] : l[u].data)) { K.isArray(t) || (t in r ? t = [t] : (t = K.camelCase(t), t = t in r ? [t] : t.split(" ")));
                            for (o = 0, a = t.length; a > o; o++) delete r[t[o]];
                            if (!(n ? i : K.isEmptyObject)(r)) return }(n || (delete l[u].data, i(l[u]))) && (s ? K.cleanData([e], !0) : K.support.deleteExpando || l != l.window ? delete l[u] : l[u] = null) } } }, _data: function(e, t, n) {
                return K.data(e, t, n, !0) }, acceptData: function(e) {
                var t = e.nodeName && K.noData[e.nodeName.toLowerCase()];
                return !t || t !== !0 && e.getAttribute("classid") === t } }), K.fn.extend({ data: function(e, n) {
                var i, o, a, s, l, u = this[0],
                    c = 0,
                    f = null;
                if (e === t) {
                    if (this.length && (f = K.data(u), 1 === u.nodeType && !K._data(u, "parsedAttrs"))) {
                        for (a = u.attributes, l = a.length; l > c; c++) s = a[c].name, s.indexOf("data-") || (s = K.camelCase(s.substring(5)), r(u, s, f[s]));
                        K._data(u, "parsedAttrs", !0) }
                    return f }
                return "object" == typeof e ? this.each(function() { K.data(this, e) }) : (i = e.split(".", 2), i[1] = i[1] ? "." + i[1] : "", o = i[1] + "!", K.access(this, function(n) {
                    return n === t ? (f = this.triggerHandler("getData" + o, [i[0]]), f === t && u && (f = K.data(u, e), f = r(u, e, f)), f === t && i[1] ? this.data(i[0]) : f) : (i[1] = n, this.each(function() {
                        var t = K(this);
                        t.triggerHandler("setData" + o, i), K.data(this, e, n), t.triggerHandler("changeData" + o, i) }), void 0) }, null, n, arguments.length > 1, null, !1)) }, removeData: function(e) {
                return this.each(function() { K.removeData(this, e) }) } }), K.extend({ queue: function(e, t, n) {
                var r;
                return e ? (t = (t || "fx") + "queue", r = K._data(e, t), n && (!r || K.isArray(n) ? r = K._data(e, t, K.makeArray(n)) : r.push(n)), r || []) : void 0 }, dequeue: function(e, t) { t = t || "fx";
                var n = K.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = K._queueHooks(e, t),
                    a = function() { K.dequeue(e, t) }; "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire() }, _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return K._data(e, n) || K._data(e, n, { empty: K.Callbacks("once memory").add(function() { K.removeData(e, t + "queue", !0), K.removeData(e, n, !0) }) }) } }), K.fn.extend({ queue: function(e, n) {
                var r = 2;
                return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? K.queue(this[0], e) : n === t ? this : this.each(function() {
                    var t = K.queue(this, e, n);
                    K._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && K.dequeue(this, e) }) }, dequeue: function(e) {
                return this.each(function() { K.dequeue(this, e) }) }, delay: function(e, t) {
                return e = K.fx ? K.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var r = setTimeout(t, e);
                    n.stop = function() { clearTimeout(r) } }) }, clearQueue: function(e) {
                return this.queue(e || "fx", []) }, promise: function(e, n) {
                var r, i = 1,
                    o = K.Deferred(),
                    a = this,
                    s = this.length,
                    l = function() {--i || o.resolveWith(a, [a]) };
                for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = K._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
                return l(), o.promise(n) } });
        var yt, vt, bt, xt = /[\t\r\n]/g,
            wt = /\r/g,
            Tt = /^(?:button|input)$/i,
            kt = /^(?:button|input|object|select|textarea)$/i,
            Nt = /^a(?:rea|)$/i,
            Ct = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            Et = K.support.getSetAttribute;
        K.fn.extend({ attr: function(e, t) {
                return K.access(this, K.attr, e, t, arguments.length > 1) }, removeAttr: function(e) {
                return this.each(function() { K.removeAttr(this, e) }) }, prop: function(e, t) {
                return K.access(this, K.prop, e, t, arguments.length > 1) }, removeProp: function(e) {
                return e = K.propFix[e] || e, this.each(function() {
                    try { this[e] = t, delete this[e] } catch (n) {} }) }, addClass: function(e) {
                var t, n, r, i, o, a, s;
                if (K.isFunction(e)) return this.each(function(t) { K(this).addClass(e.call(this, t, this.className)) });
                if (e && "string" == typeof e)
                    for (t = e.split(tt), n = 0, r = this.length; r > n; n++)
                        if (i = this[n], 1 === i.nodeType)
                            if (i.className || 1 !== t.length) {
                                for (o = " " + i.className + " ", a = 0, s = t.length; s > a; a++) o.indexOf(" " + t[a] + " ") < 0 && (o += t[a] + " ");
                                i.className = K.trim(o) } else i.className = e;
                return this }, removeClass: function(e) {
                var n, r, i, o, a, s, l;
                if (K.isFunction(e)) return this.each(function(t) { K(this).removeClass(e.call(this, t, this.className)) });
                if (e && "string" == typeof e || e === t)
                    for (n = (e || "").split(tt), s = 0, l = this.length; l > s; s++)
                        if (i = this[s], 1 === i.nodeType && i.className) {
                            for (r = (" " + i.className + " ").replace(xt, " "), o = 0, a = n.length; a > o; o++)
                                for (; r.indexOf(" " + n[o] + " ") >= 0;) r = r.replace(" " + n[o] + " ", " ");
                            i.className = e ? K.trim(r) : "" }
                return this }, toggleClass: function(e, t) {
                var n = typeof e,
                    r = "boolean" == typeof t;
                return K.isFunction(e) ? this.each(function(n) { K(this).toggleClass(e.call(this, n, this.className, t), t) }) : this.each(function() {
                    if ("string" === n)
                        for (var i, o = 0, a = K(this), s = t, l = e.split(tt); i = l[o++];) s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i);
                    else("undefined" === n || "boolean" === n) && (this.className && K._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : K._data(this, "__className__") || "") }) }, hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(xt, " ").indexOf(t) >= 0) return !0;
                return !1 }, val: function(e) {
                var n, r, i, o = this[0]; {
                    if (arguments.length) return i = K.isFunction(e), this.each(function(r) {
                        var o, a = K(this);
                        1 === this.nodeType && (o = i ? e.call(this, r, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : K.isArray(o) && (o = K.map(o, function(e) {
                            return null == e ? "" : e + "" })), n = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o)) });
                    if (o) return n = K.valHooks[o.type] || K.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (r = n.get(o, "value")) !== t ? r : (r = o.value, "string" == typeof r ? r.replace(wt, "") : null == r ? "" : r) } } }), K.extend({ valHooks: { option: { get: function(e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text } }, select: { get: function(e) {
                        for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++)
                            if (n = r[l], !(!n.selected && l !== i || (K.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && K.nodeName(n.parentNode, "optgroup"))) {
                                if (t = K(n).val(), o) return t;
                                a.push(t) }
                        return a }, set: function(e, t) {
                        var n = K.makeArray(t);
                        return K(e).find("option").each(function() { this.selected = K.inArray(K(this).val(), n) >= 0 }), n.length || (e.selectedIndex = -1), n } } }, attrFn: {}, attr: function(e, n, r, i) {
                var o, a, s, l = e.nodeType;
                if (e && 3 !== l && 8 !== l && 2 !== l) return i && K.isFunction(K.fn[n]) ? K(e)[n](r) : "undefined" == typeof e.getAttribute ? K.prop(e, n, r) : (s = 1 !== l || !K.isXMLDoc(e), s && (n = n.toLowerCase(), a = K.attrHooks[n] || (Ct.test(n) ? vt : yt)), r !== t ? null === r ? (K.removeAttr(e, n), void 0) : a && "set" in a && s && (o = a.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : a && "get" in a && s && null !== (o = a.get(e, n)) ? o : (o = e.getAttribute(n), null === o ? t : o)) }, removeAttr: function(e, t) {
                var n, r, i, o, a = 0;
                if (t && 1 === e.nodeType)
                    for (r = t.split(tt); a < r.length; a++) i = r[a], i && (n = K.propFix[i] || i, o = Ct.test(i), o || K.attr(e, i, ""), e.removeAttribute(Et ? i : n), o && n in e && (e[n] = !1)) }, attrHooks: { type: { set: function(e, t) {
                        if (Tt.test(e.nodeName) && e.parentNode) K.error("type property can't be changed");
                        else if (!K.support.radioValue && "radio" === t && K.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t } } }, value: { get: function(e, t) {
                        return yt && K.nodeName(e, "button") ? yt.get(e, t) : t in e ? e.value : null }, set: function(e, t, n) {
                        return yt && K.nodeName(e, "button") ? yt.set(e, t, n) : (e.value = t, void 0) } } }, propFix: { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" }, prop: function(e, n, r) {
                var i, o, a, s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !K.isXMLDoc(e), a && (n = K.propFix[n] || n, o = K.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n] }, propHooks: { tabIndex: { get: function(e) {
                        var n = e.getAttributeNode("tabindex");
                        return n && n.specified ? parseInt(n.value, 10) : kt.test(e.nodeName) || Nt.test(e.nodeName) && e.href ? 0 : t } } } }), vt = { get: function(e, n) {
                var r, i = K.prop(e, n);
                return i === !0 || "boolean" != typeof i && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t }, set: function(e, t, n) {
                var r;
                return t === !1 ? K.removeAttr(e, n) : (r = K.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n } }, Et || (bt = { name: !0, id: !0, coords: !0 }, yt = K.valHooks.button = { get: function(e, n) {
                var r;
                return r = e.getAttributeNode(n), r && (bt[n] ? "" !== r.value : r.specified) ? r.value : t }, set: function(e, t, n) {
                var r = e.getAttributeNode(n);
                return r || (r = $.createAttribute(n), e.setAttributeNode(r)), r.value = t + "" } }, K.each(["width", "height"], function(e, t) { K.attrHooks[t] = K.extend(K.attrHooks[t], { set: function(e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0 } }) }), K.attrHooks.contenteditable = { get: yt.get, set: function(e, t, n) { "" === t && (t = "false"), yt.set(e, t, n) } }), K.support.hrefNormalized || K.each(["href", "src", "width", "height"], function(e, n) { K.attrHooks[n] = K.extend(K.attrHooks[n], { get: function(e) {
                    var r = e.getAttribute(n, 2);
                    return null === r ? t : r } }) }), K.support.style || (K.attrHooks.style = {
            get: function(e) {
                return e.style.cssText.toLowerCase() || t },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        }), K.support.optSelected || (K.propHooks.selected = K.extend(K.propHooks.selected, { get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } })), K.support.enctype || (K.propFix.enctype = "encoding"), K.support.checkOn || K.each(["radio", "checkbox"], function() { K.valHooks[this] = { get: function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value } } }), K.each(["radio", "checkbox"], function() { K.valHooks[this] = K.extend(K.valHooks[this], { set: function(e, t) {
                    return K.isArray(t) ? e.checked = K.inArray(K(e).val(), t) >= 0 : void 0 } }) });
        var At = /^(?:textarea|input|select)$/i,
            St = /^([^\.]*|)(?:\.(.+)|)$/,
            _t = /(?:^|\s)hover(\.\S+|)\b/,
            Mt = /^key/,
            jt = /^(?:mouse|contextmenu)|click/,
            Lt = /^(?:focusinfocus|focusoutblur)$/,
            Ot = function(e) {
                return K.event.special.hover ? e : e.replace(_t, "mouseenter$1 mouseleave$1") };
        K.event = { add: function(e, n, r, i, o) {
                    var a, s, l, u, c, f, d, p, h, g, m;
                    if (3 !== e.nodeType && 8 !== e.nodeType && n && r && (a = K._data(e))) {
                        for (r.handler && (h = r, r = h.handler, o = h.selector), r.guid || (r.guid = K.guid++), l = a.events, l || (a.events = l = {}), s = a.handle, s || (a.handle = s = function(e) {
                                return "undefined" == typeof K || e && K.event.triggered === e.type ? t : K.event.dispatch.apply(s.elem, arguments) }, s.elem = e), n = K.trim(Ot(n)).split(" "), u = 0; u < n.length; u++) c = St.exec(n[u]) || [], f = c[1], d = (c[2] || "").split(".").sort(), m = K.event.special[f] || {}, f = (o ? m.delegateType : m.bindType) || f, m = K.event.special[f] || {}, p = K.extend({ type: f, origType: c[1], data: i, handler: r, guid: r.guid, selector: o, needsContext: o && K.expr.match.needsContext.test(o), namespace: d.join(".") }, h), g = l[f], g || (g = l[f] = [], g.delegateCount = 0, m.setup && m.setup.call(e, i, d, s) !== !1 || (e.addEventListener ? e.addEventListener(f, s, !1) : e.attachEvent && e.attachEvent("on" + f, s))), m.add && (m.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? g.splice(g.delegateCount++, 0, p) : g.push(p), K.event.global[f] = !0;
                        e = null } }, global: {}, remove: function(e, t, n, r, i) {
                    var o, a, s, l, u, c, f, d, p, h, g, m = K.hasData(e) && K._data(e);
                    if (m && (d = m.events)) {
                        for (t = K.trim(Ot(t || "")).split(" "), o = 0; o < t.length; o++)
                            if (a = St.exec(t[o]) || [], s = l = a[1], u = a[2], s) {
                                for (p = K.event.special[s] || {}, s = (r ? p.delegateType : p.bindType) || s, h = d[s] || [], c = h.length, u = u ? new RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, f = 0; f < h.length; f++) g = h[f], !(!i && l !== g.origType || n && n.guid !== g.guid || u && !u.test(g.namespace) || r && r !== g.selector && ("**" !== r || !g.selector) || (h.splice(f--, 1), g.selector && h.delegateCount--, !p.remove || !p.remove.call(e, g)));
                                0 === h.length && c !== h.length && ((!p.teardown || p.teardown.call(e, u, m.handle) === !1) && K.removeEvent(e, s, m.handle), delete d[s]) } else
                                for (s in d) K.event.remove(e, s + t[o], n, r, !0);
                        K.isEmptyObject(d) && (delete m.handle, K.removeData(e, "events", !0)) } }, customEvent: { getData: !0, setData: !0, changeData: !0 }, trigger: function(n, r, i, o) {
                    if (!i || 3 !== i.nodeType && 8 !== i.nodeType) {
                        var a, s, l, u, c, f, d, p, h, g, m = n.type || n,
                            y = [];
                        if (Lt.test(m + K.event.triggered)) return;
                        if (m.indexOf("!") >= 0 && (m = m.slice(0, -1), s = !0), m.indexOf(".") >= 0 && (y = m.split("."), m = y.shift(), y.sort()), (!i || K.event.customEvent[m]) && !K.event.global[m]) return;
                        if (n = "object" == typeof n ? n[K.expando] ? n : new K.Event(m, n) : new K.Event(m), n.type = m, n.isTrigger = !0, n.exclusive = s, n.namespace = y.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, f = m.indexOf(":") < 0 ? "on" + m : "", !i) { a = K.cache;
                            for (l in a) a[l].events && a[l].events[m] && K.event.trigger(n, r, a[l].handle.elem, !0);
                            return }
                        if (n.result = t, n.target || (n.target = i), r = null != r ? K.makeArray(r) : [], r.unshift(n), d = K.event.special[m] || {}, d.trigger && d.trigger.apply(i, r) === !1) return;
                        if (h = [
                                [i, d.bindType || m]
                            ], !o && !d.noBubble && !K.isWindow(i)) {
                            for (g = d.delegateType || m, u = Lt.test(g + m) ? i : i.parentNode, c = i; u; u = u.parentNode) h.push([u, g]), c = u;
                            c === (i.ownerDocument || $) && h.push([c.defaultView || c.parentWindow || e, g]) }
                        for (l = 0; l < h.length && !n.isPropagationStopped(); l++) u = h[l][0], n.type = h[l][1], p = (K._data(u, "events") || {})[n.type] && K._data(u, "handle"), p && p.apply(u, r), p = f && u[f], p && K.acceptData(u) && p.apply && p.apply(u, r) === !1 && n.preventDefault();
                        return n.type = m, !(o || n.isDefaultPrevented() || d._default && d._default.apply(i.ownerDocument, r) !== !1 || "click" === m && K.nodeName(i, "a") || !K.acceptData(i) || !f || !i[m] || ("focus" === m || "blur" === m) && 0 === n.target.offsetWidth || K.isWindow(i) || (c = i[f], c && (i[f] = null), K.event.triggered = m, i[m](), K.event.triggered = t, !c || !(i[f] = c))), n.result } }, dispatch: function(n) { n = K.event.fix(n || e.event);
                    var r, i, o, a, s, l, u, c, f, d = (K._data(this, "events") || {})[n.type] || [],
                        p = d.delegateCount,
                        h = Y.call(arguments),
                        g = !n.exclusive && !n.namespace,
                        m = K.event.special[n.type] || {},
                        y = [];
                    if (h[0] = n, n.delegateTarget = this, !m.preDispatch || m.preDispatch.call(this, n) !== !1) {
                        if (p && (!n.button || "click" !== n.type))
                            for (o = n.target; o != this; o = o.parentNode || this)
                                if (o.disabled !== !0 || "click" !== n.type) {
                                    for (s = {}, u = [], r = 0; p > r; r++) c = d[r], f = c.selector, s[f] === t && (s[f] = c.needsContext ? K(f, this).index(o) >= 0 : K.find(f, this, null, [o]).length), s[f] && u.push(c);
                                    u.length && y.push({ elem: o, matches: u }) }
                        for (d.length > p && y.push({ elem: this, matches: d.slice(p) }), r = 0; r < y.length && !n.isPropagationStopped(); r++)
                            for (l = y[r], n.currentTarget = l.elem, i = 0; i < l.matches.length && !n.isImmediatePropagationStopped(); i++) c = l.matches[i], (g || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) && (n.data = c.data, n.handleObj = c, a = ((K.event.special[c.origType] || {}).handle || c.handler).apply(l.elem, h), a !== t && (n.result = a, a === !1 && (n.preventDefault(), n.stopPropagation())));
                        return m.postDispatch && m.postDispatch.call(this, n), n.result } }, props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(e, n) {
                        var r, i, o, a = n.button,
                            s = n.fromElement;
                        return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || $, i = r.documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), !e.which && a !== t && (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e } }, fix: function(e) {
                    if (e[K.expando]) return e;
                    var t, n, r = e,
                        i = K.event.fixHooks[e.type] || {},
                        o = i.props ? this.props.concat(i.props) : this.props;
                    for (e = K.Event(r), t = o.length; t;) n = o[--t], e[n] = r[n];
                    return e.target || (e.target = r.srcElement || $), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, i.filter ? i.filter(e, r) : e }, special: { load: { noBubble: !0 }, focus: { delegateType: "focusin" }, blur: { delegateType: "focusout" }, beforeunload: { setup: function(e, t, n) { K.isWindow(this) && (this.onbeforeunload = n) }, teardown: function(e, t) { this.onbeforeunload === t && (this.onbeforeunload = null) } } }, simulate: function(e, t, n, r) {
                    var i = K.extend(new K.Event, n, { type: e, isSimulated: !0, originalEvent: {} });
                    r ? K.event.trigger(i, null, t) : K.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault() } }, K.event.handle = K.event.dispatch, K.removeEvent = $.removeEventListener ? function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function(e, t, n) {
                var r = "on" + t;
                e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n)) }, K.Event = function(e, t) {
                return this instanceof K.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? a : o) : this.type = e, t && K.extend(this, t), this.timeStamp = e && e.timeStamp || K.now(), this[K.expando] = !0, void 0) : new K.Event(e, t) }, K.Event.prototype = { preventDefault: function() { this.isDefaultPrevented = a;
                    var e = this.originalEvent;
                    e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1) }, stopPropagation: function() { this.isPropagationStopped = a;
                    var e = this.originalEvent;
                    e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0) }, stopImmediatePropagation: function() { this.isImmediatePropagationStopped = a, this.stopPropagation() }, isDefaultPrevented: o, isPropagationStopped: o, isImmediatePropagationStopped: o }, K.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(e, t) { K.event.special[e] = { delegateType: t, bindType: t, handle: function(e) {
                        var n, r = this,
                            i = e.relatedTarget,
                            o = e.handleObj;
                        return o.selector, (!i || i !== r && !K.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n } } }), K.support.submitBubbles || (K.event.special.submit = { setup: function() {
                    return K.nodeName(this, "form") ? !1 : (K.event.add(this, "click._submit keypress._submit", function(e) {
                        var n = e.target,
                            r = K.nodeName(n, "input") || K.nodeName(n, "button") ? n.form : t;
                        r && !K._data(r, "_submit_attached") && (K.event.add(r, "submit._submit", function(e) { e._submit_bubble = !0 }), K._data(r, "_submit_attached", !0)) }), void 0) }, postDispatch: function(e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && K.event.simulate("submit", this.parentNode, e, !0)) }, teardown: function() {
                    return K.nodeName(this, "form") ? !1 : (K.event.remove(this, "._submit"), void 0) } }), K.support.changeBubbles || (K.event.special.change = { setup: function() {
                    return At.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (K.event.add(this, "propertychange._change", function(e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), K.event.add(this, "click._change", function(e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), K.event.simulate("change", this, e, !0) })), !1) : (K.event.add(this, "beforeactivate._change", function(e) {
                        var t = e.target;
                        At.test(t.nodeName) && !K._data(t, "_change_attached") && (K.event.add(t, "change._change", function(e) { this.parentNode && !e.isSimulated && !e.isTrigger && K.event.simulate("change", this.parentNode, e, !0) }), K._data(t, "_change_attached", !0)) }), void 0) }, handle: function(e) {
                    var t = e.target;
                    return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0 }, teardown: function() {
                    return K.event.remove(this, "._change"), !At.test(this.nodeName) } }), K.support.focusinBubbles || K.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
                var n = 0,
                    r = function(e) { K.event.simulate(t, e.target, K.event.fix(e), !0) };
                K.event.special[t] = { setup: function() { 0 === n++ && $.addEventListener(e, r, !0) }, teardown: function() { 0 === --n && $.removeEventListener(e, r, !0) } } }), K.fn.extend({ on: function(e, n, r, i, a) {
                    var s, l;
                    if ("object" == typeof e) { "string" != typeof n && (r = r || n, n = t);
                        for (l in e) this.on(l, n, r, e[l], a);
                        return this }
                    if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = o;
                    else if (!i) return this;
                    return 1 === a && (s = i, i = function(e) {
                        return K().off(e), s.apply(this, arguments) }, i.guid = s.guid || (s.guid = K.guid++)), this.each(function() { K.event.add(this, e, i, r, n) }) }, one: function(e, t, n, r) {
                    return this.on(e, t, n, r, 1) }, off: function(e, n, r) {
                    var i, a;
                    if (e && e.preventDefault && e.handleObj) return i = e.handleObj, K(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" == typeof e) {
                        for (a in e) this.off(a, n, e[a]);
                        return this }
                    return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = o), this.each(function() { K.event.remove(this, e, r, n) }) }, bind: function(e, t, n) {
                    return this.on(e, null, t, n) }, unbind: function(e, t) {
                    return this.off(e, null, t) }, live: function(e, t, n) {
                    return K(this.context).on(e, this.selector, t, n), this }, die: function(e, t) {
                    return K(this.context).off(e, this.selector || "**", t), this }, delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r) }, undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, trigger: function(e, t) {
                    return this.each(function() { K.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) {
                    return this[0] ? K.event.trigger(e, t, this[0], !0) : void 0 }, toggle: function(e) {
                    var t = arguments,
                        n = e.guid || K.guid++,
                        r = 0,
                        i = function(n) {
                            var i = (K._data(this, "lastToggle" + e.guid) || 0) % r;
                            return K._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1 };
                    for (i.guid = n; r < t.length;) t[r++].guid = n;
                    return this.click(i) }, hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e) } }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) { K.fn[t] = function(e, n) {
                    return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) }, Mt.test(t) && (K.event.fixHooks[t] = K.event.keyHooks), jt.test(t) && (K.event.fixHooks[t] = K.event.mouseHooks) }),
            function(e, t) {
                function n(e, t, n, r) { n = n || [], t = t || j;
                    var i, o, a, s, l = t.nodeType;
                    if (!e || "string" != typeof e) return n;
                    if (1 !== l && 9 !== l) return [];
                    if (a = w(t), !a && !r && (i = nt.exec(e)))
                        if (s = i[1]) {
                            if (9 === l) {
                                if (o = t.getElementById(s), !o || !o.parentNode) return n;
                                if (o.id === s) return n.push(o), n } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && T(t, o) && o.id === s) return n.push(o), n } else {
                            if (i[2]) return R.apply(n, F.call(t.getElementsByTagName(e), 0)), n;
                            if ((s = i[3]) && dt && t.getElementsByClassName) return R.apply(n, F.call(t.getElementsByClassName(s), 0)), n }
                    return g(e.replace(G, "$1"), t, n, r, a) }

                function r(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e } }

                function i(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e } }

                function o(e) {
                    return q(function(t) {
                        return t = +t, q(function(n, r) {
                            for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) }

                function a(e, t, n) {
                    if (e === t) return n;
                    for (var r = e.nextSibling; r;) {
                        if (r === t) return -1;
                        r = r.nextSibling }
                    return 1 }

                function s(e, t) {
                    var r, i, o, a, s, l, u, c = I[_][e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (s = e, l = [], u = b.preFilter; s;) {
                        (!r || (i = Z.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = et.exec(s)) && (o.push(r = new M(i.shift())), s = s.slice(r.length), r.type = i[0].replace(G, " "));
                        for (a in b.filter)(i = st[a].exec(s)) && (!u[a] || (i = u[a](i))) && (o.push(r = new M(i.shift())), s = s.slice(r.length), r.type = a, r.matches = i);
                        if (!r) break }
                    return t ? s.length : s ? n.error(e) : I(e, l).slice(0) }

                function l(e, t, n) {
                    var r = t.dir,
                        i = n && "parentNode" === t.dir,
                        o = D++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[r];)
                            if (i || 1 === t.nodeType) return e(t, n, o) } : function(t, n, a) {
                        if (a) {
                            for (; t = t[r];)
                                if ((i || 1 === t.nodeType) && e(t, n, a)) return t } else
                            for (var s, l = O + " " + o + " ", u = l + y; t = t[r];)
                                if (i || 1 === t.nodeType) {
                                    if ((s = t[_]) === u) return t.sizset;
                                    if ("string" == typeof s && 0 === s.indexOf(l)) {
                                        if (t.sizset) return t } else {
                                        if (t[_] = u, e(t, n, a)) return t.sizset = !0, t;
                                        t.sizset = !1 } } } }

                function u(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var i = e.length; i--;)
                            if (!e[i](t, n, r)) return !1;
                        return !0 } : e[0] }

                function c(e, t, n, r, i) {
                    for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
                    return a }

                function f(e, t, n, r, i, o) {
                    return r && !r[_] && (r = f(r)), i && !i[_] && (i = f(i, o)), q(function(o, a, s, l) {
                        var u, f, d, p = [],
                            g = [],
                            m = a.length,
                            y = o || h(t || "*", s.nodeType ? [s] : s, []),
                            v = !e || !o && t ? y : c(y, p, e, s, l),
                            b = n ? i || (o ? e : m || r) ? [] : a : v;
                        if (n && n(v, b, s, l), r)
                            for (u = c(b, g), r(u, [], s, l), f = u.length; f--;)(d = u[f]) && (b[g[f]] = !(v[g[f]] = d));
                        if (o) {
                            if (i || e) {
                                if (i) {
                                    for (u = [], f = b.length; f--;)(d = b[f]) && u.push(v[f] = d);
                                    i(null, b = [], u, l) }
                                for (f = b.length; f--;)(d = b[f]) && (u = i ? B.call(o, d) : p[f]) > -1 && (o[u] = !(a[u] = d)) } } else b = c(b === a ? b.splice(m, b.length) : b), i ? i(null, a, b, l) : R.apply(a, b) }) }

                function d(e) {
                    for (var t, n, r, i = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, c = l(function(e) {
                            return e === t }, a, !0), p = l(function(e) {
                            return B.call(t, e) > -1 }, a, !0), h = [function(e, n, r) {
                            return !o && (r || n !== E) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r)) }]; i > s; s++)
                        if (n = b.relative[e[s].type]) h = [l(u(h), n)];
                        else {
                            if (n = b.filter[e[s].type].apply(null, e[s].matches), n[_]) {
                                for (r = ++s; i > r && !b.relative[e[r].type]; r++);
                                return f(s > 1 && u(h), s > 1 && e.slice(0, s - 1).join("").replace(G, "$1"), n, r > s && d(e.slice(s, r)), i > r && d(e = e.slice(r)), i > r && e.join("")) }
                            h.push(n) }
                    return u(h) }

                function p(e, t) {
                    var r = t.length > 0,
                        i = e.length > 0,
                        o = function(a, s, l, u, f) {
                            var d, p, h, g = [],
                                m = 0,
                                v = "0",
                                x = a && [],
                                w = null != f,
                                T = E,
                                k = a || i && b.find.TAG("*", f && s.parentNode || s),
                                N = O += null == T ? 1 : Math.E;
                            for (w && (E = s !== j && s, y = o.el); null != (d = k[v]); v++) {
                                if (i && d) {
                                    for (p = 0; h = e[p]; p++)
                                        if (h(d, s, l)) { u.push(d);
                                            break }
                                    w && (O = N, y = ++o.el) }
                                r && ((d = !h && d) && m--, a && x.push(d)) }
                            if (m += v, r && v !== m) {
                                for (p = 0; h = t[p]; p++) h(x, g, s, l);
                                if (a) {
                                    if (m > 0)
                                        for (; v--;) !x[v] && !g[v] && (g[v] = H.call(u));
                                    g = c(g) }
                                R.apply(u, g), w && !a && g.length > 0 && m + t.length > 1 && n.uniqueSort(u) }
                            return w && (O = N, E = T), x };
                    return o.el = 0, r ? q(o) : o }

                function h(e, t, r) {
                    for (var i = 0, o = t.length; o > i; i++) n(e, t[i], r);
                    return r }

                function g(e, t, n, r, i) {
                    var o, a, l, u, c, f = s(e);
                    if (f.length, !r && 1 === f.length) {
                        if (a = f[0] = f[0].slice(0), a.length > 2 && "ID" === (l = a[0]).type && 9 === t.nodeType && !i && b.relative[a[1].type]) {
                            if (t = b.find.ID(l.matches[0].replace(at, ""), t, i)[0], !t) return n;
                            e = e.slice(a.shift().length) }
                        for (o = st.POS.test(e) ? -1 : a.length - 1; o >= 0 && (l = a[o], !b.relative[u = l.type]); o--)
                            if ((c = b.find[u]) && (r = c(l.matches[0].replace(at, ""), rt.test(a[0].type) && t.parentNode || t, i))) {
                                if (a.splice(o, 1), e = r.length && a.join(""), !e) return R.apply(n, F.call(r, 0)), n;
                                break } }
                    return k(e, f)(r, t, i, n, rt.test(e)), n }

                function m() {}
                var y, v, b, x, w, T, k, N, C, E, A = !0,
                    S = "undefined",
                    _ = ("sizcache" + Math.random()).replace(".", ""),
                    M = String,
                    j = e.document,
                    L = j.documentElement,
                    O = 0,
                    D = 0,
                    H = [].pop,
                    R = [].push,
                    F = [].slice,
                    B = [].indexOf || function(e) {
                        for (var t = 0, n = this.length; n > t; t++)
                            if (this[t] === e) return t;
                        return -1 },
                    q = function(e, t) {
                        return e[_] = null == t || t, e },
                    P = function() {
                        var e = {},
                            t = [];
                        return q(function(n, r) {
                            return t.push(n) > b.cacheLength && delete e[t.shift()], e[n + " "] = r }, e) },
                    $ = P(),
                    I = P(),
                    W = P(),
                    z = "[\\x20\\t\\r\\n\\f]",
                    X = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                    U = X.replace("w", "w#"),
                    Y = "([*^$|!~]?=)",
                    Q = "\\[" + z + "*(" + X + ")" + z + "*(?:" + Y + z + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + U + ")|)|)" + z + "*\\]",
                    V = ":(" + X + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + Q + ")|[^:]|\\\\.)*|.*))\\)|)",
                    J = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)",
                    G = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
                    Z = new RegExp("^" + z + "*," + z + "*"),
                    et = new RegExp("^" + z + "*([\\x20\\t\\r\\n\\f>+~])" + z + "*"),
                    tt = new RegExp(V),
                    nt = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                    rt = /[\x20\t\r\n\f]*[+~]/,
                    it = /h\d/i,
                    ot = /input|select|textarea|button/i,
                    at = /\\(?!\\)/g,
                    st = { ID: new RegExp("^#(" + X + ")"), CLASS: new RegExp("^\\.(" + X + ")"), NAME: new RegExp("^\\[name=['\"]?(" + X + ")['\"]?\\]"), TAG: new RegExp("^(" + X.replace("w", "w*") + ")"), ATTR: new RegExp("^" + Q), PSEUDO: new RegExp("^" + V), POS: new RegExp(J, "i"), CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)", "i"), needsContext: new RegExp("^" + z + "*[>+~]|" + J, "i") },
                    lt = function(e) {
                        var t = j.createElement("div");
                        try {
                            return e(t) } catch (n) {
                            return !1 } finally { t = null } },
                    ut = lt(function(e) {
                        return e.appendChild(j.createComment("")), !e.getElementsByTagName("*").length }),
                    ct = lt(function(e) {
                        return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== S && "#" === e.firstChild.getAttribute("href") }),
                    ft = lt(function(e) { e.innerHTML = "<select></select>";
                        var t = typeof e.lastChild.getAttribute("multiple");
                        return "boolean" !== t && "string" !== t }),
                    dt = lt(function(e) {
                        return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1 }),
                    pt = lt(function(e) { e.id = _ + 0, e.innerHTML = "<a name='" + _ + "'></a><div name='" + _ + "'></div>", L.insertBefore(e, L.firstChild);
                        var t = j.getElementsByName && j.getElementsByName(_).length === 2 + j.getElementsByName(_ + 0).length;
                        return v = !j.getElementById(_), L.removeChild(e), t });
                try { F.call(L.childNodes, 0)[0].nodeType } catch (ht) { F = function(e) {
                        for (var t, n = []; t = this[e]; e++) n.push(t);
                        return n } }
                n.matches = function(e, t) {
                    return n(e, null, null, t) }, n.matchesSelector = function(e, t) {
                    return n(t, null, null, [e]).length > 0 }, x = n.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += x(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                        for (; t = e[r]; r++) n += x(t);
                    return n }, w = n.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1 }, T = n.contains = L.contains ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !!(r && 1 === r.nodeType && n.contains && n.contains(r)) } : L.compareDocumentPosition ? function(e, t) {
                    return t && !!(16 & e.compareDocumentPosition(t)) } : function(e, t) {
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                    return !1 }, n.attr = function(e, t) {
                    var n, r = w(e);
                    return r || (t = t.toLowerCase()), (n = b.attrHandle[t]) ? n(e) : r || ft ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? "boolean" == typeof e[t] ? e[t] ? t : null : n.specified ? n.value : null : null) }, b = n.selectors = { cacheLength: 50, createPseudo: q, match: st, attrHandle: ct ? {} : { href: function(e) {
                            return e.getAttribute("href", 2) }, type: function(e) {
                            return e.getAttribute("type") } }, find: { ID: v ? function(e, t, n) {
                            if (typeof t.getElementById !== S && !n) {
                                var r = t.getElementById(e);
                                return r && r.parentNode ? [r] : [] } } : function(e, n, r) {
                            if (typeof n.getElementById !== S && !r) {
                                var i = n.getElementById(e);
                                return i ? i.id === e || typeof i.getAttributeNode !== S && i.getAttributeNode("id").value === e ? [i] : t : [] } }, TAG: ut ? function(e, t) {
                            return typeof t.getElementsByTagName !== S ? t.getElementsByTagName(e) : void 0 } : function(e, t) {
                            var n = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (var r, i = [], o = 0; r = n[o]; o++) 1 === r.nodeType && i.push(r);
                                return i }
                            return n }, NAME: pt && function(e, t) {
                            return typeof t.getElementsByName !== S ? t.getElementsByName(name) : void 0 }, CLASS: dt && function(e, t, n) {
                            return typeof t.getElementsByClassName === S || n ? void 0 : t.getElementsByClassName(e) } }, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) {
                            return e[1] = e[1].replace(at, ""), e[3] = (e[4] || e[5] || "").replace(at, ""), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1] ? (e[2] || n.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2])), e[4] = +(e[6] + e[7] || "odd" === e[2])) : e[2] && n.error(e[0]), e }, PSEUDO: function(e) {
                            var t, n;
                            return st.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[3] : (t = e[4]) && (tt.test(t) && (n = s(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t), e.slice(0, 3)) } }, filter: { ID: v ? function(e) {
                            return e = e.replace(at, ""),
                                function(t) {
                                    return t.getAttribute("id") === e } } : function(e) {
                            return e = e.replace(at, ""),
                                function(t) {
                                    var n = typeof t.getAttributeNode !== S && t.getAttributeNode("id");
                                    return n && n.value === e } }, TAG: function(e) {
                            return "*" === e ? function() {
                                return !0 } : (e = e.replace(at, "").toLowerCase(), function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e }) }, CLASS: function(e) {
                            var t = $[_][e + " "];
                            return t || (t = new RegExp("(^|" + z + ")" + e + "(" + z + "|$)")) && $(e, function(e) {
                                return t.test(e.className || typeof e.getAttribute !== S && e.getAttribute("class") || "") }) }, ATTR: function(e, t, r) {
                            return function(i) {
                                var o = n.attr(i, e);
                                return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.substr(o.length - r.length) === r : "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t ? o === r || o.substr(0, r.length + 1) === r + "-" : !1) : !0 } }, CHILD: function(e, t, n, r) {
                            return "nth" === e ? function(e) {
                                var t, i, o = e.parentNode;
                                if (1 === n && 0 === r) return !0;
                                if (o)
                                    for (i = 0, t = o.firstChild; t && (1 !== t.nodeType || (i++, e !== t)); t = t.nextSibling);
                                return i -= r, i === n || 0 === i % n && i / n >= 0 } : function(t) {
                                var n = t;
                                switch (e) {
                                    case "only":
                                    case "first":
                                        for (; n = n.previousSibling;)
                                            if (1 === n.nodeType) return !1;
                                        if ("first" === e) return !0;
                                        n = t;
                                    case "last":
                                        for (; n = n.nextSibling;)
                                            if (1 === n.nodeType) return !1;
                                        return !0 } } }, PSEUDO: function(e, t) {
                            var r, i = b.pseudos[e] || b.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                            return i[_] ? i(t) : i.length > 1 ? (r = [e, e, "", t], b.setFilters.hasOwnProperty(e.toLowerCase()) ? q(function(e, n) {
                                for (var r, o = i(e, t), a = o.length; a--;) r = B.call(e, o[a]), e[r] = !(n[r] = o[a]) }) : function(e) {
                                return i(e, 0, r) }) : i } }, pseudos: { not: q(function(e) {
                            var t = [],
                                n = [],
                                r = k(e.replace(G, "$1"));
                            return r[_] ? q(function(e, t, n, i) {
                                for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o)) }) : function(e, i, o) {
                                return t[0] = e, r(t, null, o, n), !n.pop() } }), has: q(function(e) {
                            return function(t) {
                                return n(e, t).length > 0 } }), contains: q(function(e) {
                            return function(t) {
                                return (t.textContent || t.innerText || x(t)).indexOf(e) > -1 } }), enabled: function(e) {
                            return e.disabled === !1 }, disabled: function(e) {
                            return e.disabled === !0 }, checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 }, parent: function(e) {
                            return !b.pseudos.empty(e) }, empty: function(e) {
                            var t;
                            for (e = e.firstChild; e;) {
                                if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t) return !1;
                                e = e.nextSibling }
                            return !0 }, header: function(e) {
                            return it.test(e.nodeName) }, text: function(e) {
                            var t, n;
                            return "input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null == (n = e.getAttribute("type")) || n.toLowerCase() === t) }, radio: r("radio"), checkbox: r("checkbox"), file: r("file"), password: r("password"), image: r("image"), submit: i("submit"), reset: i("reset"), button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t }, input: function(e) {
                            return ot.test(e.nodeName) }, focus: function(e) {
                            var t = e.ownerDocument;
                            return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, active: function(e) {
                            return e === e.ownerDocument.activeElement }, first: o(function() {
                            return [0] }), last: o(function(e, t) {
                            return [t - 1] }), eq: o(function(e, t, n) {
                            return [0 > n ? n + t : n] }), even: o(function(e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e }), odd: o(function(e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e }), lt: o(function(e, t, n) {
                            for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                            return e }), gt: o(function(e, t, n) {
                            for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                            return e }) } }, N = L.compareDocumentPosition ? function(e, t) {
                    return e === t ? (C = !0, 0) : (e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) : e.compareDocumentPosition) ? -1 : 1 } : function(e, t) {
                    if (e === t) return C = !0, 0;
                    if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                    var n, r, i = [],
                        o = [],
                        s = e.parentNode,
                        l = t.parentNode,
                        u = s;
                    if (s === l) return a(e, t);
                    if (!s) return -1;
                    if (!l) return 1;
                    for (; u;) i.unshift(u), u = u.parentNode;
                    for (u = l; u;) o.unshift(u), u = u.parentNode;
                    n = i.length, r = o.length;
                    for (var c = 0; n > c && r > c; c++)
                        if (i[c] !== o[c]) return a(i[c], o[c]);
                    return c === n ? a(e, o[c], -1) : a(i[c], t, 1) }, [0, 0].sort(N), A = !C, n.uniqueSort = function(e) {
                    var t, n = [],
                        r = 1,
                        i = 0;
                    if (C = A, e.sort(N), C) {
                        for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                        for (; i--;) e.splice(n[i], 1) }
                    return e }, n.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e) }, k = n.compile = function(e, t) {
                    var n, r = [],
                        i = [],
                        o = W[_][e + " "];
                    if (!o) {
                        for (t || (t = s(e)), n = t.length; n--;) o = d(t[n]), o[_] ? r.push(o) : i.push(o);
                        o = W(e, p(i, r)) }
                    return o }, j.querySelectorAll && function() {
                    var e, t = g,
                        r = /'|\\/g,
                        i = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                        o = [":focus"],
                        a = [":active"],
                        l = L.matchesSelector || L.mozMatchesSelector || L.webkitMatchesSelector || L.oMatchesSelector || L.msMatchesSelector;
                    lt(function(e) { e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || o.push("\\[" + z + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || o.push(":checked") }), lt(function(e) { e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && o.push("[*^$]=" + z + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled") }), o = new RegExp(o.join("|")), g = function(e, n, i, a, l) {
                        if (!a && !l && !o.test(e)) {
                            var u, c, f = !0,
                                d = _,
                                p = n,
                                h = 9 === n.nodeType && e;
                            if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
                                for (u = s(e), (f = n.getAttribute("id")) ? d = f.replace(r, "\\$&") : n.setAttribute("id", d), d = "[id='" + d + "'] ", c = u.length; c--;) u[c] = d + u[c].join("");
                                p = rt.test(e) && n.parentNode || n, h = u.join(",") }
                            if (h) try {
                                return R.apply(i, F.call(p.querySelectorAll(h), 0)), i } catch (g) {} finally { f || n.removeAttribute("id") } }
                        return t(e, n, i, a, l) }, l && (lt(function(t) { e = l.call(t, "div");
                        try { l.call(t, "[test!='']:sizzle"), a.push("!=", V) } catch (n) {} }), a = new RegExp(a.join("|")), n.matchesSelector = function(t, r) {
                        if (r = r.replace(i, "='$1']"), !w(t) && !a.test(r) && !o.test(r)) try {
                            var s = l.call(t, r);
                            if (s || e || t.document && 11 !== t.document.nodeType) return s } catch (u) {}
                        return n(r, null, null, [t]).length > 0 }) }(), b.pseudos.nth = b.pseudos.eq, b.filters = m.prototype = b.pseudos, b.setFilters = new m, n.attr = K.attr, K.find = n, K.expr = n.selectors, K.expr[":"] = K.expr.pseudos, K.unique = n.uniqueSort, K.text = n.getText, K.isXMLDoc = n.isXML, K.contains = n.contains }(e);
        var Dt = /Until$/,
            Ht = /^(?:parents|prev(?:Until|All))/,
            Rt = /^.[^:#\[\.,]*$/,
            Ft = K.expr.match.needsContext,
            Bt = { children: !0, contents: !0, next: !0, prev: !0 };
        K.fn.extend({ find: function(e) {
                var t, n, r, i, o, a, s = this;
                if ("string" != typeof e) return K(e).filter(function() {
                    for (t = 0, n = s.length; n > t; t++)
                        if (K.contains(s[t], this)) return !0 });
                for (a = this.pushStack("", "find", e), t = 0, n = this.length; n > t; t++)
                    if (r = a.length, K.find(e, this[t], a), t > 0)
                        for (i = r; i < a.length; i++)
                            for (o = 0; r > o; o++)
                                if (a[o] === a[i]) { a.splice(i--, 1);
                                    break }
                return a }, has: function(e) {
                var t, n = K(e, this),
                    r = n.length;
                return this.filter(function() {
                    for (t = 0; r > t; t++)
                        if (K.contains(this, n[t])) return !0 }) }, not: function(e) {
                return this.pushStack(u(this, e, !1), "not", e) }, filter: function(e) {
                return this.pushStack(u(this, e, !0), "filter", e) }, is: function(e) {
                return !!e && ("string" == typeof e ? Ft.test(e) ? K(e, this.context).index(this[0]) >= 0 : K.filter(e, this).length > 0 : this.filter(e).length > 0) }, closest: function(e, t) {
                for (var n, r = 0, i = this.length, o = [], a = Ft.test(e) || "string" != typeof e ? K(e, t || this.context) : 0; i > r; r++)
                    for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                        if (a ? a.index(n) > -1 : K.find.matchesSelector(n, e)) { o.push(n);
                            break }
                        n = n.parentNode }
                return o = o.length > 1 ? K.unique(o) : o, this.pushStack(o, "closest", e) }, index: function(e) {
                return e ? "string" == typeof e ? K.inArray(this[0], K(e)) : K.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1 }, add: function(e, t) {
                var n = "string" == typeof e ? K(e, t) : K.makeArray(e && e.nodeType ? [e] : e),
                    r = K.merge(this.get(), n);
                return this.pushStack(s(n[0]) || s(r[0]) ? r : K.unique(r)) }, addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), K.fn.andSelf = K.fn.addBack, K.each({ parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null }, parents: function(e) {
                return K.dir(e, "parentNode") }, parentsUntil: function(e, t, n) {
                return K.dir(e, "parentNode", n) }, next: function(e) {
                return l(e, "nextSibling") }, prev: function(e) {
                return l(e, "previousSibling") }, nextAll: function(e) {
                return K.dir(e, "nextSibling") }, prevAll: function(e) {
                return K.dir(e, "previousSibling") }, nextUntil: function(e, t, n) {
                return K.dir(e, "nextSibling", n) }, prevUntil: function(e, t, n) {
                return K.dir(e, "previousSibling", n) }, siblings: function(e) {
                return K.sibling((e.parentNode || {}).firstChild, e) }, children: function(e) {
                return K.sibling(e.firstChild) }, contents: function(e) {
                return K.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : K.merge([], e.childNodes) } }, function(e, t) { K.fn[e] = function(n, r) {
                var i = K.map(this, t, n);
                return Dt.test(e) || (r = n), r && "string" == typeof r && (i = K.filter(r, i)), i = this.length > 1 && !Bt[e] ? K.unique(i) : i, this.length > 1 && Ht.test(e) && (i = i.reverse()), this.pushStack(i, e, Y.call(arguments).join(",")) } }), K.extend({ filter: function(e, t, n) {
                return n && (e = ":not(" + e + ")"), 1 === t.length ? K.find.matchesSelector(t[0], e) ? [t[0]] : [] : K.find.matches(e, t) }, dir: function(e, n, r) {
                for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !K(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
                return i }, sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n } });
        var qt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Pt = / jQuery\d+="(?:null|\d+)"/g,
            $t = /^\s+/,
            It = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Wt = /<([\w:]+)/,
            zt = /<tbody/i,
            Xt = /<|&#?\w+;/,
            Ut = /<(?:script|style|link)/i,
            Yt = /<(?:script|object|embed|option|style)/i,
            Qt = new RegExp("<(?:" + qt + ")[\\s/>]", "i"),
            Vt = /^(?:checkbox|radio)$/,
            Jt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Gt = /\/(java|ecma)script/i,
            Kt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
            Zt = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""] },
            en = c($),
            tn = en.appendChild($.createElement("div"));
        Zt.optgroup = Zt.option, Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead, Zt.th = Zt.td, K.support.htmlSerialize || (Zt._default = [1, "X<div>", "</div>"]), K.fn.extend({
                text: function(e) {
                    return K.access(this, function(e) {
                        return e === t ? K.text(this) : this.empty().append((this[0] && this[0].ownerDocument || $).createTextNode(e)) }, null, e, arguments.length) },
                wrapAll: function(e) {
                    if (K.isFunction(e)) return this.each(function(t) {
                        K(this).wrapAll(e.call(this, t))
                    });
                    if (this[0]) {
                        var t = K(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                            return e }).append(this) }
                    return this
                },
                wrapInner: function(e) {
                    return K.isFunction(e) ? this.each(function(t) { K(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                        var t = K(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e) }) },
                wrap: function(e) {
                    var t = K.isFunction(e);
                    return this.each(function(n) { K(this).wrapAll(t ? e.call(this, n) : e) }) },
                unwrap: function() {
                    return this.parent().each(function() { K.nodeName(this, "body") || K(this).replaceWith(this.childNodes) }).end() },
                append: function() {
                    return this.domManip(arguments, !0, function(e) {
                        (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(e) }) },
                prepend: function() {
                    return this.domManip(arguments, !0, function(e) {
                        (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(e, this.firstChild) }) },
                before: function() {
                    if (!s(this[0])) return this.domManip(arguments, !1, function(e) { this.parentNode.insertBefore(e, this) });
                    if (arguments.length) {
                        var e = K.clean(arguments);
                        return this.pushStack(K.merge(e, this), "before", this.selector) } },
                after: function() {
                    if (!s(this[0])) return this.domManip(arguments, !1, function(e) { this.parentNode.insertBefore(e, this.nextSibling) });
                    if (arguments.length) {
                        var e = K.clean(arguments);
                        return this.pushStack(K.merge(this, e), "after", this.selector) } },
                remove: function(e, t) {
                    for (var n, r = 0; null != (n = this[r]); r++)(!e || K.filter(e, [n]).length) && (!t && 1 === n.nodeType && (K.cleanData(n.getElementsByTagName("*")), K.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
                    return this },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++)
                        for (1 === e.nodeType && K.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
                    return this },
                clone: function(e, t) {
                    return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                        return K.clone(this, e, t) }) },
                html: function(e) {
                    return K.access(this, function(e) {
                        var n = this[0] || {},
                            r = 0,
                            i = this.length;
                        if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Pt, "") : t;
                        if (!("string" != typeof e || Ut.test(e) || !K.support.htmlSerialize && Qt.test(e) || !K.support.leadingWhitespace && $t.test(e) || Zt[(Wt.exec(e) || ["", ""])[1].toLowerCase()])) { e = e.replace(It, "<$1></$2>");
                            try {
                                for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (K.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                                n = 0 } catch (o) {} }
                        n && this.empty().append(e) }, null, e, arguments.length) },
                replaceWith: function(e) {
                    return s(this[0]) ? this.length ? this.pushStack(K(K.isFunction(e) ? e() : e), "replaceWith", e) : this : K.isFunction(e) ? this.each(function(t) {
                        var n = K(this),
                            r = n.html();
                        n.replaceWith(e.call(this, t, r)) }) : ("string" != typeof e && (e = K(e).detach()), this.each(function() {
                        var t = this.nextSibling,
                            n = this.parentNode;
                        K(this).remove(), t ? K(t).before(e) : K(n).append(e) })) },
                detach: function(e) {
                    return this.remove(e, !0) },
                domManip: function(e, n, r) { e = [].concat.apply([], e);
                    var i, o, a, s, l = 0,
                        u = e[0],
                        c = [],
                        d = this.length;
                    if (!K.support.checkClone && d > 1 && "string" == typeof u && Jt.test(u)) return this.each(function() { K(this).domManip(e, n, r) });
                    if (K.isFunction(u)) return this.each(function(i) {
                        var o = K(this);
                        e[0] = u.call(this, i, n ? o.html() : t), o.domManip(e, n, r) });
                    if (this[0]) {
                        if (i = K.buildFragment(e, this, c), a = i.fragment, o = a.firstChild, 1 === a.childNodes.length && (a = o), o)
                            for (n = n && K.nodeName(o, "tr"), s = i.cacheable || d - 1; d > l; l++) r.call(n && K.nodeName(this[l], "table") ? f(this[l], "tbody") : this[l], l === s ? a : K.clone(a, !0, !0));
                        a = o = null, c.length && K.each(c, function(e, t) { t.src ? K.ajax ? K.ajax({ url: t.src, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) : K.error("no ajax") : K.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Kt, "")), t.parentNode && t.parentNode.removeChild(t) }) }
                    return this }
            }), K.buildFragment = function(e, n, r) {
                var i, o, a, s = e[0];
                return n = n || $, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, 1 === e.length && "string" == typeof s && s.length < 512 && n === $ && "<" === s.charAt(0) && !Yt.test(s) && (K.support.checkClone || !Jt.test(s)) && (K.support.html5Clone || !Qt.test(s)) && (o = !0, i = K.fragments[s], a = i !== t), i || (i = n.createDocumentFragment(), K.clean(e, n, i, r), o && (K.fragments[s] = a && i)), { fragment: i, cacheable: o } }, K.fragments = {}, K.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { K.fn[e] = function(n) {
                    var r, i = 0,
                        o = [],
                        a = K(n),
                        s = a.length,
                        l = 1 === this.length && this[0].parentNode;
                    if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === s) return a[t](this[0]), this;
                    for (; s > i; i++) r = (i > 0 ? this.clone(!0) : this).get(), K(a[i])[t](r), o = o.concat(r);
                    return this.pushStack(o, e, a.selector) } }), K.extend({ clone: function(e, t, n) {
                    var r, i, o, a;
                    if (K.support.html5Clone || K.isXMLDoc(e) || !Qt.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (tn.innerHTML = e.outerHTML, tn.removeChild(a = tn.firstChild)), !(K.support.noCloneEvent && K.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || K.isXMLDoc(e)))
                        for (p(e, a), r = h(e), i = h(a), o = 0; r[o]; ++o) i[o] && p(r[o], i[o]);
                    if (t && (d(e, a), n))
                        for (r = h(e), i = h(a), o = 0; r[o]; ++o) d(r[o], i[o]);
                    return r = i = null, a }, clean: function(e, t, n, r) {
                    var i, o, a, s, l, u, f, d, p, h, m, y = t === $ && en,
                        v = [];
                    for (t && "undefined" != typeof t.createDocumentFragment || (t = $), i = 0; null != (a = e[i]); i++)
                        if ("number" == typeof a && (a += ""), a) {
                            if ("string" == typeof a)
                                if (Xt.test(a)) {
                                    for (y = y || c(t), f = t.createElement("div"), y.appendChild(f), a = a.replace(It, "<$1></$2>"), s = (Wt.exec(a) || ["", ""])[1].toLowerCase(), l = Zt[s] || Zt._default, u = l[0], f.innerHTML = l[1] + a + l[2]; u--;) f = f.lastChild;
                                    if (!K.support.tbody)
                                        for (d = zt.test(a), p = "table" !== s || d ? "<table>" !== l[1] || d ? [] : f.childNodes : f.firstChild && f.firstChild.childNodes, o = p.length - 1; o >= 0; --o) K.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o]);!K.support.leadingWhitespace && $t.test(a) && f.insertBefore(t.createTextNode($t.exec(a)[0]), f.firstChild), a = f.childNodes, f.parentNode.removeChild(f) } else a = t.createTextNode(a);
                            a.nodeType ? v.push(a) : K.merge(v, a) }
                    if (f && (a = f = y = null), !K.support.appendChecked)
                        for (i = 0; null != (a = v[i]); i++) K.nodeName(a, "input") ? g(a) : "undefined" != typeof a.getElementsByTagName && K.grep(a.getElementsByTagName("input"), g);
                    if (n)
                        for (h = function(e) {
                                return !e.type || Gt.test(e.type) ? r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e) : void 0 }, i = 0; null != (a = v[i]); i++) K.nodeName(a, "script") && h(a) || (n.appendChild(a), "undefined" != typeof a.getElementsByTagName && (m = K.grep(K.merge([], a.getElementsByTagName("script")), h), v.splice.apply(v, [i + 1, 0].concat(m)), i += m.length));
                    return v }, cleanData: function(e, t) {
                    for (var n, r, i, o, a = 0, s = K.expando, l = K.cache, u = K.support.deleteExpando, c = K.event.special; null != (i = e[a]); a++)
                        if ((t || K.acceptData(i)) && (r = i[s], n = r && l[r])) {
                            if (n.events)
                                for (o in n.events) c[o] ? K.event.remove(i, o) : K.removeEvent(i, o, n.handle);
                            l[r] && (delete l[r], u ? delete i[s] : i.removeAttribute ? i.removeAttribute(s) : i[s] = null, K.deletedIds.push(r)) } } }),
            function() {
                var e, t;
                K.uaMatch = function(e) { e = e.toLowerCase();
                    var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                    return { browser: t[1] || "", version: t[2] || "0" } }, e = K.uaMatch(W.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), K.browser = t, K.sub = function() {
                    function e(t, n) {
                        return new e.fn.init(t, n) }
                    K.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, r) {
                        return r && r instanceof K && !(r instanceof e) && (r = e(r)), K.fn.init.call(this, n, r, t) }, e.fn.init.prototype = e.fn;
                    var t = e($);
                    return e } }();
        var nn, rn, on, an = /alpha\([^)]*\)/i,
            sn = /opacity=([^)]*)/,
            ln = /^(top|right|bottom|left)$/,
            un = /^(none|table(?!-c[ea]).+)/,
            cn = /^margin/,
            fn = new RegExp("^(" + Z + ")(.*)$", "i"),
            dn = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
            pn = new RegExp("^([-+])=(" + Z + ")", "i"),
            hn = { BODY: "block" },
            gn = { position: "absolute", visibility: "hidden", display: "block" },
            mn = { letterSpacing: 0, fontWeight: 400 },
            yn = ["Top", "Right", "Bottom", "Left"],
            vn = ["Webkit", "O", "Moz", "ms"],
            bn = K.fn.toggle;
        K.fn.extend({ css: function(e, n) {
                return K.access(this, function(e, n, r) {
                    return r !== t ? K.style(e, n, r) : K.css(e, n) }, e, n, arguments.length > 1) }, show: function() {
                return v(this, !0) }, hide: function() {
                return v(this) }, toggle: function(e, t) {
                var n = "boolean" == typeof e;
                return K.isFunction(e) && K.isFunction(t) ? bn.apply(this, arguments) : this.each(function() {
                    (n ? e : y(this)) ? K(this).show(): K(this).hide() }) } }), K.extend({ cssHooks: { opacity: { get: function(e, t) {
                        if (t) {
                            var n = nn(e, "opacity");
                            return "" === n ? "1" : n } } } }, cssNumber: { fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": K.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function(e, n, r, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, a, s, l = K.camelCase(n),
                        u = e.style;
                    if (n = K.cssProps[l] || (K.cssProps[l] = m(u, l)), s = K.cssHooks[n] || K.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
                    if (a = typeof r, "string" === a && (o = pn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(K.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" === a && !K.cssNumber[l] && (r += "px"), s && "set" in s && (r = s.set(e, r, i)) === t))) try { u[n] = r } catch (c) {} } }, css: function(e, n, r, i) {
                var o, a, s, l = K.camelCase(n);
                return n = K.cssProps[l] || (K.cssProps[l] = m(e.style, l)), s = K.cssHooks[n] || K.cssHooks[l], s && "get" in s && (o = s.get(e, !0, i)), o === t && (o = nn(e, n)), "normal" === o && n in mn && (o = mn[n]), r || i !== t ? (a = parseFloat(o), r || K.isNumeric(a) ? a || 0 : o) : o }, swap: function(e, t, n) {
                var r, i, o = {};
                for (i in t) o[i] = e.style[i], e.style[i] = t[i];
                r = n.call(e);
                for (i in t) e.style[i] = o[i];
                return r } }), e.getComputedStyle ? nn = function(t, n) {
            var r, i, o, a, s = e.getComputedStyle(t, null),
                l = t.style;
            return s && (r = s.getPropertyValue(n) || s[n], "" === r && !K.contains(t.ownerDocument, t) && (r = K.style(t, n)), dn.test(r) && cn.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = r, r = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), r } : $.documentElement.currentStyle && (nn = function(e, t) {
            var n, r, i = e.currentStyle && e.currentStyle[t],
                o = e.style;
            return null == i && o && o[t] && (i = o[t]), dn.test(i) && !ln.test(t) && (n = o.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : i, i = o.pixelLeft + "px", o.left = n, r && (e.runtimeStyle.left = r)), "" === i ? "auto" : i }), K.each(["height", "width"], function(e, t) { K.cssHooks[t] = { get: function(e, n, r) {
                    return n ? 0 === e.offsetWidth && un.test(nn(e, "display")) ? K.swap(e, gn, function() {
                        return w(e, t, r) }) : w(e, t, r) : void 0 }, set: function(e, n, r) {
                    return b(e, n, r ? x(e, t, r, K.support.boxSizing && "border-box" === K.css(e, "boxSizing")) : 0) } } }), K.support.opacity || (K.cssHooks.opacity = { get: function(e, t) {
                return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" }, set: function(e, t) {
                var n = e.style,
                    r = e.currentStyle,
                    i = K.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = r && r.filter || n.filter || "";
                n.zoom = 1, t >= 1 && "" === K.trim(o.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), r && !r.filter) || (n.filter = an.test(o) ? o.replace(an, i) : o + " " + i) } }), K(function() { K.support.reliableMarginRight || (K.cssHooks.marginRight = { get: function(e, t) {
                    return K.swap(e, { display: "inline-block" }, function() {
                        return t ? nn(e, "marginRight") : void 0 }) } }), !K.support.pixelPosition && K.fn.position && K.each(["top", "left"], function(e, t) { K.cssHooks[t] = { get: function(e, n) {
                        if (n) {
                            var r = nn(e, t);
                            return dn.test(r) ? K(e).position()[t] + "px" : r } } } }) }), K.expr && K.expr.filters && (K.expr.filters.hidden = function(e) {
            return 0 === e.offsetWidth && 0 === e.offsetHeight || !K.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || nn(e, "display")) }, K.expr.filters.visible = function(e) {
            return !K.expr.filters.hidden(e) }), K.each({ margin: "", padding: "", border: "Width" }, function(e, t) { K.cssHooks[e + t] = { expand: function(n) {
                    var r, i = "string" == typeof n ? n.split(" ") : [n],
                        o = {};
                    for (r = 0; 4 > r; r++) o[e + yn[r] + t] = i[r] || i[r - 2] || i[0];
                    return o } }, cn.test(e) || (K.cssHooks[e + t].set = b) });
        var xn = /%20/g,
            wn = /\[\]$/,
            Tn = /\r?\n/g,
            kn = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
            Nn = /^(?:select|textarea)/i;
        K.fn.extend({ serialize: function() {
                return K.param(this.serializeArray()) }, serializeArray: function() {
                return this.map(function() {
                    return this.elements ? K.makeArray(this.elements) : this }).filter(function() {
                    return this.name && !this.disabled && (this.checked || Nn.test(this.nodeName) || kn.test(this.type)) }).map(function(e, t) {
                    var n = K(this).val();
                    return null == n ? null : K.isArray(n) ? K.map(n, function(e) {
                        return { name: t.name, value: e.replace(Tn, "\r\n") } }) : { name: t.name, value: n.replace(Tn, "\r\n") } }).get() } }), K.param = function(e, n) {
            var r, i = [],
                o = function(e, t) { t = K.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) };
            if (n === t && (n = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(e) || e.jquery && !K.isPlainObject(e)) K.each(e, function() { o(this.name, this.value) });
            else
                for (r in e) k(r, e[r], n, o);
            return i.join("&").replace(xn, "+") };
        var Cn, En, An = /#.*$/,
            Sn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            _n = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
            Mn = /^(?:GET|HEAD)$/,
            jn = /^\/\//,
            Ln = /\?/,
            On = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            Dn = /([?&])_=[^&]*/,
            Hn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            Rn = K.fn.load,
            Fn = {},
            Bn = {},
            qn = ["*/"] + ["*"];
        try { En = I.href } catch (Pn) { En = $.createElement("a"), En.href = "", En = En.href }
        Cn = Hn.exec(En.toLowerCase()) || [], K.fn.load = function(e, n, r) {
            if ("string" != typeof e && Rn) return Rn.apply(this, arguments);
            if (!this.length) return this;
            var i, o, a, s = this,
                l = e.indexOf(" ");
            return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), K.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"), K.ajax({ url: e, type: o, dataType: "html", data: n, complete: function(e, t) { r && s.each(r, a || [e.responseText, t, e]) } }).done(function(e) { a = arguments, s.html(i ? K("<div>").append(e.replace(On, "")).find(i) : e) }), this }, K.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) { K.fn[t] = function(e) {
                return this.on(t, e) } }), K.each(["get", "post"], function(e, n) { K[n] = function(e, r, i, o) {
                return K.isFunction(r) && (o = o || i, i = r, r = t), K.ajax({ type: n, url: e, data: r, success: i, dataType: o }) } }), K.extend({ getScript: function(e, n) {
                return K.get(e, t, n, "script") }, getJSON: function(e, t, n) {
                return K.get(e, t, n, "json") }, ajaxSetup: function(e, t) {
                return t ? E(e, K.ajaxSettings) : (t = e, e = K.ajaxSettings), E(e, t), e }, ajaxSettings: { url: En, isLocal: _n.test(Cn[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded; charset=UTF-8", processData: !0, async: !0, accepts: { xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": qn }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": e.String, "text html": !0, "text json": K.parseJSON, "text xml": K.parseXML }, flatOptions: { context: !0, url: !0 } }, ajaxPrefilter: N(Fn), ajaxTransport: N(Bn), ajax: function(e, n) {
                function r(e, n, r, a) {
                    var u, f, v, b, w, k = n;
                    2 !== x && (x = 2, l && clearTimeout(l), s = t, o = a || "", T.readyState = e > 0 ? 4 : 0, r && (b = A(d, T, r)), e >= 200 && 300 > e || 304 === e ? (d.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (K.lastModified[i] = w), w = T.getResponseHeader("Etag"), w && (K.etag[i] = w)), 304 === e ? (k = "notmodified", u = !0) : (u = S(d, b), k = u.state, f = u.data, v = u.error, u = !v)) : (v = k, (!k || e) && (k = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (n || k) + "", u ? g.resolveWith(p, [f, k, T]) : g.rejectWith(p, [T, k, v]), T.statusCode(y), y = t, c && h.trigger("ajax" + (u ? "Success" : "Error"), [T, d, u ? f : v]), m.fireWith(p, [T, k]), c && (h.trigger("ajaxComplete", [T, d]), --K.active || K.event.trigger("ajaxStop"))) } "object" == typeof e && (n = e, e = t), n = n || {};
                var i, o, a, s, l, u, c, f, d = K.ajaxSetup({}, n),
                    p = d.context || d,
                    h = p !== d && (p.nodeType || p instanceof K) ? K(p) : K.event,
                    g = K.Deferred(),
                    m = K.Callbacks("once memory"),
                    y = d.statusCode || {},
                    v = {},
                    b = {},
                    x = 0,
                    w = "canceled",
                    T = { readyState: 0, setRequestHeader: function(e, t) {
                            if (!x) {
                                var n = e.toLowerCase();
                                e = b[n] = b[n] || e, v[e] = t }
                            return this }, getAllResponseHeaders: function() {
                            return 2 === x ? o : null }, getResponseHeader: function(e) {
                            var n;
                            if (2 === x) {
                                if (!a)
                                    for (a = {}; n = Sn.exec(o);) a[n[1].toLowerCase()] = n[2];
                                n = a[e.toLowerCase()] }
                            return n === t ? null : n }, overrideMimeType: function(e) {
                            return x || (d.mimeType = e), this }, abort: function(e) {
                            return e = e || w, s && s.abort(e), r(0, e), this } };
                if (g.promise(T), T.success = T.done, T.error = T.fail, T.complete = m.add, T.statusCode = function(e) {
                        if (e) {
                            var t;
                            if (2 > x)
                                for (t in e) y[t] = [y[t], e[t]];
                            else t = e[T.status], T.always(t) }
                        return this }, d.url = ((e || d.url) + "").replace(An, "").replace(jn, Cn[1] + "//"), d.dataTypes = K.trim(d.dataType || "*").toLowerCase().split(tt), null == d.crossDomain && (u = Hn.exec(d.url.toLowerCase()), d.crossDomain = !(!u || u[1] === Cn[1] && u[2] === Cn[2] && (u[3] || ("http:" === u[1] ? 80 : 443)) == (Cn[3] || ("http:" === Cn[1] ? 80 : 443)))), d.data && d.processData && "string" != typeof d.data && (d.data = K.param(d.data, d.traditional)), C(Fn, d, n, T), 2 === x) return T;
                if (c = d.global, d.type = d.type.toUpperCase(), d.hasContent = !Mn.test(d.type), c && 0 === K.active++ && K.event.trigger("ajaxStart"), !d.hasContent && (d.data && (d.url += (Ln.test(d.url) ? "&" : "?") + d.data, delete d.data), i = d.url, d.cache === !1)) {
                    var k = K.now(),
                        N = d.url.replace(Dn, "$1_=" + k);
                    d.url = N + (N === d.url ? (Ln.test(d.url) ? "&" : "?") + "_=" + k : "") }(d.data && d.hasContent && d.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", d.contentType), d.ifModified && (i = i || d.url, K.lastModified[i] && T.setRequestHeader("If-Modified-Since", K.lastModified[i]), K.etag[i] && T.setRequestHeader("If-None-Match", K.etag[i])), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + qn + "; q=0.01" : "") : d.accepts["*"]);
                for (f in d.headers) T.setRequestHeader(f, d.headers[f]);
                if (!d.beforeSend || d.beforeSend.call(p, T, d) !== !1 && 2 !== x) { w = "abort";
                    for (f in { success: 1, error: 1, complete: 1 }) T[f](d[f]);
                    if (s = C(Bn, d, n, T)) { T.readyState = 1, c && h.trigger("ajaxSend", [T, d]), d.async && d.timeout > 0 && (l = setTimeout(function() { T.abort("timeout") }, d.timeout));
                        try { x = 1, s.send(v, r) } catch (E) {
                            if (!(2 > x)) throw E;
                            r(-1, E) } } else r(-1, "No Transport");
                    return T }
                return T.abort() }, active: 0, lastModified: {}, etag: {} });
        var $n = [],
            In = /\?/,
            Wn = /(=)\?(?=&|$)|\?\?/,
            zn = K.now();
        K.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
                var e = $n.pop() || K.expando + "_" + zn++;
                return this[e] = !0, e } }), K.ajaxPrefilter("json jsonp", function(n, r, i) {
            var o, a, s, l = n.data,
                u = n.url,
                c = n.jsonp !== !1,
                f = c && Wn.test(u),
                d = c && !f && "string" == typeof l && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Wn.test(l);
            return "jsonp" === n.dataTypes[0] || f || d ? (o = n.jsonpCallback = K.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a = e[o], f ? n.url = u.replace(Wn, "$1" + o) : d ? n.data = l.replace(Wn, "$1" + o) : c && (n.url += (In.test(u) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
                return s || K.error(o + " was not called"), s[0] }, n.dataTypes[0] = "json", e[o] = function() { s = arguments }, i.always(function() { e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, $n.push(o)), s && K.isFunction(a) && a(s[0]), s = a = t }), "script") : void 0 }), K.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /javascript|ecmascript/ }, converters: { "text script": function(e) {
                    return K.globalEval(e), e } } }), K.ajaxPrefilter("script", function(e) { e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), K.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var n, r = $.head || $.getElementsByTagName("head")[0] || $.documentElement;
                return { send: function(i, o) { n = $.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
                            (i || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success")) }, r.insertBefore(n, r.firstChild) }, abort: function() { n && n.onload(0, 1) } } } });
        var Xn, Un = e.ActiveXObject ? function() {
                for (var e in Xn) Xn[e](0, 1) } : !1,
            Yn = 0;
        K.ajaxSettings.xhr = e.ActiveXObject ? function() {
                return !this.isLocal && _() || M() } : _,
            function(e) { K.extend(K.support, { ajax: !!e, cors: !!e && "withCredentials" in e }) }(K.ajaxSettings.xhr()), K.support.ajax && K.ajaxTransport(function(n) {
                if (!n.crossDomain || K.support.cors) {
                    var r;
                    return { send: function(i, o) {
                            var a, s, l = n.xhr();
                            if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                                for (s in n.xhrFields) l[s] = n.xhrFields[s];
                            n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                            try {
                                for (s in i) l.setRequestHeader(s, i[s]) } catch (u) {}
                            l.send(n.hasContent && n.data || null), r = function(e, i) {
                                var s, u, c, f, d;
                                try {
                                    if (r && (i || 4 === l.readyState))
                                        if (r = t, a && (l.onreadystatechange = K.noop, Un && delete Xn[a]), i) 4 !== l.readyState && l.abort();
                                        else { s = l.status, c = l.getAllResponseHeaders(), f = {}, d = l.responseXML, d && d.documentElement && (f.xml = d);
                                            try { f.text = l.responseText } catch (p) {}
                                            try { u = l.statusText } catch (p) { u = "" }
                                            s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404 } } catch (h) { i || o(-1, h) }
                                f && o(s, u, f, c) }, n.async ? 4 === l.readyState ? setTimeout(r, 0) : (a = ++Yn, Un && (Xn || (Xn = {}, K(e).unload(Un)), Xn[a] = r), l.onreadystatechange = r) : r() }, abort: function() { r && r(0, 1) } } } });
        var Qn, Vn, Jn = /^(?:toggle|show|hide)$/,
            Gn = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$", "i"),
            Kn = /queueHooks$/,
            Zn = [H],
            er = { "*": [function(e, t) {
                    var n, r, i = this.createTween(e, t),
                        o = Gn.exec(t),
                        a = i.cur(),
                        s = +a || 0,
                        l = 1,
                        u = 20;
                    if (o) {
                        if (n = +o[2], r = o[3] || (K.cssNumber[e] ? "" : "px"), "px" !== r && s) { s = K.css(i.elem, e, !0) || n || 1;
                            do l = l || ".5", s /= l, K.style(i.elem, e, s + r); while (l !== (l = i.cur() / a) && 1 !== l && --u) }
                        i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n }
                    return i }] };
        K.Animation = K.extend(O, { tweener: function(e, t) { K.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], er[n] = er[n] || [], er[n].unshift(t) }, prefilter: function(e, t) { t ? Zn.unshift(e) : Zn.push(e) } }), K.Tween = R, R.prototype = { constructor: R, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (K.cssNumber[n] ? "" : "px") }, cur: function() {
                var e = R.propHooks[this.prop];
                return e && e.get ? e.get(this) : R.propHooks._default.get(this) }, run: function(e) {
                var t, n = R.propHooks[this.prop];
                return this.pos = t = this.options.duration ? K.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this } }, R.prototype.init.prototype = R.prototype, R.propHooks = { _default: { get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = K.css(e.elem, e.prop, !1, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop] }, set: function(e) { K.fx.step[e.prop] ? K.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[K.cssProps[e.prop]] || K.cssHooks[e.prop]) ? K.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, R.propHooks.scrollTop = R.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, K.each(["toggle", "show", "hide"], function(e, t) {
            var n = K.fn[t];
            K.fn[t] = function(r, i, o) {
                return null == r || "boolean" == typeof r || !e && K.isFunction(r) && K.isFunction(i) ? n.apply(this, arguments) : this.animate(F(t, !0), r, i, o) } }), K.fn.extend({ fadeTo: function(e, t, n, r) {
                return this.filter(y).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function(e, t, n, r) {
                var i = K.isEmptyObject(e),
                    o = K.speed(t, n, r),
                    a = function() {
                        var t = O(this, K.extend({}, e), o);
                        i && t.stop(!0) };
                return i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a) }, stop: function(e, n, r) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(r) };
                return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        n = null != e && e + "queueHooks",
                        o = K.timers,
                        a = K._data(this);
                    if (n) a[n] && a[n].stop && i(a[n]);
                    else
                        for (n in a) a[n] && a[n].stop && Kn.test(n) && i(a[n]);
                    for (n = o.length; n--;) o[n].elem === this && (null == e || o[n].queue === e) && (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                    (t || !r) && K.dequeue(this, e) }) } }), K.each({ slideDown: F("show"), slideUp: F("hide"), slideToggle: F("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { K.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r) } }), K.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? K.extend({}, e) : { complete: n || !n && t || K.isFunction(e) && e, duration: e, easing: n && t || t && !K.isFunction(t) && t };
            return r.duration = K.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in K.fx.speeds ? K.fx.speeds[r.duration] : K.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() { K.isFunction(r.old) && r.old.call(this), r.queue && K.dequeue(this, r.queue) }, r }, K.easing = { linear: function(e) {
                return e }, swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2 } }, K.timers = [], K.fx = R.prototype.init, K.fx.tick = function() {
            var e, n = K.timers,
                r = 0;
            for (Qn = K.now(); r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);
            n.length || K.fx.stop(), Qn = t }, K.fx.timer = function(e) { e() && K.timers.push(e) && !Vn && (Vn = setInterval(K.fx.tick, K.fx.interval)) }, K.fx.interval = 13, K.fx.stop = function() { clearInterval(Vn), Vn = null }, K.fx.speeds = { slow: 600, fast: 200, _default: 400 }, K.fx.step = {}, K.expr && K.expr.filters && (K.expr.filters.animated = function(e) {
            return K.grep(K.timers, function(t) {
                return e === t.elem }).length });
        var tr = /^(?:body|html)$/i;
        K.fn.offset = function(e) {
            if (arguments.length) return e === t ? this : this.each(function(t) { K.offset.setOffset(this, e, t) });
            var n, r, i, o, a, s, l, u = { top: 0, left: 0 },
                c = this[0],
                f = c && c.ownerDocument;
            if (f) return (r = f.body) === c ? K.offset.bodyOffset(c) : (n = f.documentElement, K.contains(n, c) ? ("undefined" != typeof c.getBoundingClientRect && (u = c.getBoundingClientRect()), i = B(f), o = n.clientTop || r.clientTop || 0, a = n.clientLeft || r.clientLeft || 0, s = i.pageYOffset || n.scrollTop, l = i.pageXOffset || n.scrollLeft, { top: u.top + s - o, left: u.left + l - a }) : u) }, K.offset = { bodyOffset: function(e) {
                var t = e.offsetTop,
                    n = e.offsetLeft;
                return K.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(K.css(e, "marginTop")) || 0, n += parseFloat(K.css(e, "marginLeft")) || 0), { top: t, left: n } }, setOffset: function(e, t, n) {
                var r = K.css(e, "position"); "static" === r && (e.style.position = "relative");
                var i, o, a = K(e),
                    s = a.offset(),
                    l = K.css(e, "top"),
                    u = K.css(e, "left"),
                    c = ("absolute" === r || "fixed" === r) && K.inArray("auto", [l, u]) > -1,
                    f = {},
                    d = {};
                c ? (d = a.position(), i = d.top, o = d.left) : (i = parseFloat(l) || 0, o = parseFloat(u) || 0), K.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + i), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : a.css(f) } }, K.fn.extend({ position: function() {
                if (this[0]) {
                    var e = this[0],
                        t = this.offsetParent(),
                        n = this.offset(),
                        r = tr.test(t[0].nodeName) ? { top: 0, left: 0 } : t.offset();
                    return n.top -= parseFloat(K.css(e, "marginTop")) || 0, n.left -= parseFloat(K.css(e, "marginLeft")) || 0, r.top += parseFloat(K.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(K.css(t[0], "borderLeftWidth")) || 0, { top: n.top - r.top, left: n.left - r.left } } }, offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || $.body; e && !tr.test(e.nodeName) && "static" === K.css(e, "position");) e = e.offsetParent;
                    return e || $.body }) } }), K.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, n) {
            var r = /Y/.test(n);
            K.fn[e] = function(i) {
                return K.access(this, function(e, i, o) {
                    var a = B(e);
                    return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? K(a).scrollLeft() : o, r ? o : K(a).scrollTop()) : e[i] = o, void 0) }, e, i, arguments.length, null) } }), K.each({ Height: "height", Width: "width" }, function(e, n) { K.each({ padding: "inner" + e, content: n, "": "outer" + e }, function(r, i) { K.fn[i] = function(i, o) {
                    var a = arguments.length && (r || "boolean" != typeof i),
                        s = r || (i === !0 || o === !0 ? "margin" : "border");
                    return K.access(this, function(n, r, i) {
                        var o;
                        return K.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? K.css(n, r, i, s) : K.style(n, r, i, s) }, n, a ? i : t, a, null) } }) }), e.jQuery = e.$ = K, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
            return K })
    }(window),
    /**
     * Cookie plugin
     *
     * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
     * Dual licensed under the MIT and GPL licenses:
     * http://www.opensource.org/licenses/mit-license.php
     * http://www.gnu.org/licenses/gpl.html
     *
     */
    function(e) { e.cookie = function(t, n, r) {
            if ("undefined" == typeof n) {
                var i = null;
                if (document.cookie && "" != document.cookie)
                    for (var o = document.cookie.split(";"), a = 0; a < o.length; a++) {
                        var s = e.trim(o[a]);
                        if (s.substring(0, t.length + 1) == t + "=") { i = decodeURIComponent(s.substring(t.length + 1));
                            break } }
                return i }
            r = r || {}, null === n && (n = "", r.expires = -1);
            var l = "";
            if (r.expires && ("number" == typeof r.expires || r.expires.toUTCString)) {
                var u; "number" == typeof r.expires ? (u = new Date, u.setTime(u.getTime() + 1e3 * 60 * 60 * 24 * r.expires)) : u = r.expires, l = "; expires=" + u.toUTCString() }
            var c = r.path ? "; path=" + r.path : "; path=/",
                f = r.domain ? "; domain=" + r.domain : "",
                d = r.secure ? "; secure" : "";
            document.cookie = [t, "=", encodeURIComponent(n), l, c, f, d].join("") } }(jQuery), WEBSITE_LIB.$ = WEBSITE_LIB.jQuery = $.noConflict(), $ = WEBSITE_LIB.theme_dollar, jQuery = WEBSITE_LIB.theme_jQuery, WEBSITE_LIB.ImageProtection = { init: function() { WEBSITE_LIB.ImageProtection.is_enabled() && (WEBSITE_LIB.$("body").delegate("img", "contextmenu", WEBSITE_LIB.ImageProtection.trap), WEBSITE_LIB.$("body").bind("mousedown", WEBSITE_LIB.ImageProtection.remove_notice), WEBSITE_LIB.$("body").delegate("img", "dragstart", function() {
                return !1 })) }, trap: function(e) {
            return WEBSITE_LIB.ImageProtection.show_notice_at_position(e.pageX, e.pageY), !1 }, notice_id: "image_protection_notice", show_notice_at_position: function(e, t) { WEBSITE_LIB.ImageProtection.remove_notice();
            var n = WEBSITE_LIB.$(document.createElement("div")).attr("id", WEBSITE_LIB.ImageProtection.notice_id).css({ position: "absolute", top: t, left: e, display: "none", "z-index": "2147483647" }).text(WEBSITE_LIB.ImageProtection.blurb());
            WEBSITE_LIB.$("body").append(n), n.show() }, remove_notice: function() { WEBSITE_LIB.$("#" + WEBSITE_LIB.ImageProtection.notice_id).remove() }, is_enabled: function() {
            return WEBSITE_LIB.$('meta[name="protect_images"][content="true"]').length > 0 }, blurb: function() {
            return WEBSITE_LIB.$('meta[name="image_protection_blurb"]').attr("content") } },
    function() { WEBSITE_LIB.Share = function() {
            var e, t, n, r, i, o, a, s, l, u, c, f, d, p, h, g, m, y, v, b, x, w, T, k, N, C, E, A, S, _, M, j, L, O, D, H, R, F;
            return e = WEBSITE_LIB.$, E = '<div class="f-share-panel" role="dialog" aria-label="Share" tabindex="1"><div class="f-share-panel-arrow"><div class="f-share-panel-arrow-stroke"></div><div class="f-share-panel-arrow-fill"></div></div><div class="f-share-panel-content"></div></div>', t = null, n = { facebook: { label: "Share to Facebook", url: "http://www.facebook.com/sharer/sharer.php?u={url}", popup: { width: 540 } }, twitter: { label: "Share to Twitter", url: "https://twitter.com/intent/tweet?text={text}", vars: { text: "{title} {url} via @useformat" }, popup: { width: 540, height: 420 } }, tumblr: { label: "Post to Tumblr", url: "http://www.tumblr.com/share/link?url={url}", popup: { width: 540 } }, pinterest: { label: "Post to Pinterest", url: "http://pinterest.com/pin/create/button/?url={url}&media={image}&description={text}", vars: { text: "{title} {url} via format.com" }, popup: { width: 750, height: 518 } } }, l = ["facebook", "twitter", "tumblr", "pinterest"], T = [], C = !1, R = null, N = { fromLink: 12, fromEdge: 12, fromArrowToEdgeOfTooltip: 12 }, m = /^#([0-9a-f]{3,6})$/i, b = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/i, g = function() {
                var t;
                t = e('[id="share_4ormat_link"]'), t.size() < 1 || (T = u(t), t.bind("click touchend", H)) }, a = function() {
                var t, n, r, i;
                r = e(E), n = e('[id="share_4ormat_link"]'), t = r.find(".f-share-panel-content"), T.forEach(function(e) { t.append(s(e)) }), i = f(), e("head").append(i), e("body").append(r) }, v = function() {
                return C }, H = function() {
                return C ? h() : O(e(this)), !1 }, O = function(t) {
                var n;
                if (!C && t) return e(".f-share-panel").size() < 1 && a(), n = e(".f-share-panel"), n.data("link", t), M(), n.removeClass("f-share-panel-out"), n.removeClass("f-share-panel-active"), n.addClass("f-share-panel-active"), n.focus(), n.bind("focusout", c), n.bind("click touchend", i), e(".f-share-panel-network").bind("click", L), e(window).bind("resize", M), e(window).bind("click touchend", h), e(document).bind("keyup", x), clearTimeout(R), C = !0, _gaq.push(["_trackEvent", "Share Panel", "Open"]), !1 }, h = function() {
                var t, n;
                C && (t = e(".f-share-panel"), e(window).unbind("resize", M), e(window).unbind("click touchend", h), e(document).unbind("keyup", x), t.addClass("f-share-panel-out"), n = d(t), R = setTimeout(F, n), t.unbind("focusout", c), t.unbind("click touchend", i)) }, L = function() {
                var t, r, i, o, a, s, l, u, c;
                return r = e(this).attr("data-network"), o = n[r], u = { title: encodeURIComponent(document.title), url: encodeURIComponent(window.location.href), image: encodeURIComponent(e('meta[property="og:image"]').attr("content")) }, o.vars && o.vars.text && (u.text = D(o.vars.text, u)), c = o.popup.width || 540, t = o.popup.height || 300, s = (e(window).height() - t) / 2, i = (e(window).width() - c) / 2, l = D(o.url, u), a = "status=1,width=" + c + ",height=" + t + ",top=" + s + ",left=" + i, window.open(l, "share-panel", a), h(), _gaq.push(["_trackEvent", "Share Panel", "Share", o]), !1 }, M = function() {
                var t, n, r, i, a, s, l, u, c, f, d, p, h, g, m, v, b, x, T, k;
                switch (b = 0, f = 0, r = e(".f-share-panel"), t = e(".f-share-panel-content"), n = e(".f-share-panel").data("link"), r.css({ display: "none" }), r.removeClass("f-share-panel-direction-top f-share-panel-direction-left f-share-panel-direction-right f-share-panel-direction-bottom"), k = { width: e(window).width(), height: e(window).height(), scrollTop: e(window).scrollTop(), scrollLeft: e(window).scrollLeft() }, r.css({ display: "block", visibility: "hidden" }), c = y(n) || !1, s = n.data("direction") || "bottom", m = N.fromLink, g = N.fromEdge, h = N.fromArrowToEdgeOfTooltip, p = w(n), v = w(t), i = w(".f-share-panel-arrow-stroke", !0), i.top = 0, i.left = 0, r.css({ display: "", visibility: "" }), c && (p.top -= k.scrollTop, p.left -= k.scrollLeft, k.scrollTop = 0, k.scrollLeft = 0), x = v.height - p.height, d = v.width - p.width, l = function() {
                    var e, t, n, r, i;
                    i = k.scrollLeft + k.width, t = f - k.scrollLeft < 0, n = f + v.width - k.scrollLeft > i, /top|bottom/.test(s) ? (t && (e = k.scrollLeft, f = e + g), n && (r = i - v.width, f = r - g)) : (n && (f = p.left - v.width - m, s = "left"), t && (f = p.left + p.width + m, s = "right")) }, u = function() {
                    var e, t, n, r, i;
                    t = null, n = null, i = k.scrollTop + k.height, /top|bottom/.test(s) ? (n = p.top - k.scrollTop - v.height < 0, t = p.top + p.height + v.height > i, n && (s = "bottom", b = p.top + p.height + m), t && (s = "top", b = p.top - v.height - m)) : (n = p.top + p.centerY - (v.centerY + g) < 0, t = p.top + p.centerY + v.centerY + g > i, n && (r = k.scrollTop, b = r + g), t && (e = i - v.height, b = e - g)) }, a = function() {
                    var e, t, n, r;
                    return /left|right/.test(s) ? (t = p.top + p.centerY, r = t - v.height + h + i.centerY, n = t - h - i.centerY, b = o(b, r, n), i.top = p.top - b + p.height - i.centerY, i.left = "left" === s ? v.width : 0) : /top|bottom/.test(s) ? (e = p.left + p.centerX, r = e - v.width + h + i.centerX, n = e - h - i.centerX, f = o(f, r, n), i.top = "top" === s ? v.height : 0, i.left = p.left - f + p.centerX) : void 0 }, s) {
                    case "top":
                        f = p.left - d / 2, b = p.top - v.height - m;
                        break;
                    case "left":
                        f = p.left - v.width - m, b = p.top - x / 2;
                        break;
                    case "right":
                        f = p.left + p.width + m, b = p.top - x / 2;
                        break;
                    case "bottom":
                        f = p.left - d / 2, b = p.top + p.height + m }
                l(), u(), r.addClass("f-share-panel-direction-" + s), a(), e(".f-share-panel-arrow").css({ left: Math.round(i.left), top: Math.round(i.top) }), T = i.left + "px " + i.top + "px 0px", r.css({ top: Math.round(b), left: Math.round(f), "transform-origin": T, "-ms-transform-origin": T, "-webkit-transform-origin": T }), c && r.css("position", "fixed") }, s = function(t) {
                var r;
                return r = n[t], e("<a href='#' class='f-share-panel-network' data-network='" + t + "' tabindex='2'>" + r.label + "</a>") }, o = function(e, t, n) {
                return Math.max(Math.min(e, n), t) }, p = function() {
                var e, t, n;
                return n = WEBSITE_CONF.theme, { background_color: A(n.background_color), body_text_color: A(null != (e = null != (t = n.text_typography) ? t.color : void 0) ? e : n.text_font_color) } }, f = function() {
                var e, t, n, i, o, a, s, l, u, c;
                return c = p(), e = c.background_color, u = c.body_text_color, i = r(e) / 255, l = 0, n = 0, a = 0, i > .92 ? (l = -.025, n = -.08, a = -.08) : .92 >= i && i >= .5 ? (l = .35, n = .2, a = .18) : .5 >= i && i >= .25 ? (l = -.2, n = -.2, a = -.35) : .25 > i && (l = .25, n = .25, a = .2), s = j(e, l), t = j(e, n), o = j(e, a), '<style id="f-share-panel-style">\n  .f-share-panel-content {\n    border: 1px rgb(' + t.r + ", " + t.g + ", " + t.b + ") solid;\n    background: rgba(" + s.r + ", " + s.g + ", " + s.b + ", 1.0);\n  }\n  .f-share-panel-network::after {\n    border-color: rgb(" + o.r + ", " + o.g + ", " + o.b + ");\n  }\n  .f-share-panel-direction-top .f-share-panel-arrow-fill { border-top-color: rgb(" + s.r + ", " + s.g + ", " + s.b + "); }\n  .f-share-panel-direction-top .f-share-panel-arrow-stroke { border-top-color: rgb(" + t.r + ", " + t.g + ", " + t.b + "); }\n  .f-share-panel-direction-left .f-share-panel-arrow-fill   { border-left-color: rgb(" + s.r + ", " + s.g + ", " + s.b + "); }\n  .f-share-panel-direction-left .f-share-panel-arrow-stroke { border-left-color: rgb(" + t.r + ", " + t.g + ", " + t.b + "); }\n  .f-share-panel-direction-right .f-share-panel-arrow-fill   { border-right-color: rgb(" + s.r + ", " + s.g + ", " + s.b + "); }\n  .f-share-panel-direction-right .f-share-panel-arrow-stroke { border-right-color: rgb(" + t.r + ", " + t.g + ", " + t.b + "); }\n  .f-share-panel-direction-bottom .f-share-panel-arrow-fill   { border-bottom-color: rgb(" + s.r + ", " + s.g + ", " + s.b + "); }\n  .f-share-panel-direction-bottom .f-share-panel-arrow-stroke { border-bottom-color: rgb(" + t.r + ", " + t.g + ", " + t.b + "); }\n  .f-share-panel-network:link,\n  .f-share-panel-network:visited { color: rgba(" + u.r + ", " + u.g + ", " + u.b + ", 1.0) !important; }\n  .f-share-panel-network:link:hover { color: rgba(" + u.r + ", " + u.g + ", " + u.b + ", 0.5) !important; }\n</style>" }, d = function(e) {
                var t;
                return t = e.css("transition-duration"), t ? Math.round(1e3 * parseFloat(t)) : 0 }, w = function(t, n) {
                var r, i, o, a;
                return null == n && (n = !1), r = e(t), o = r.offset(), a = r.outerWidth(n), i = r.outerHeight(n), { top: o.top, left: o.left, width: a, height: i, centerX: a / 2, centerY: i / 2 } }, D = function(e, t) {
                return e.replace(/\{(\w+)\}/g, function(e, n) {
                    return "undefined" == typeof t[n] ? "" : t[n] }).trim() }, u = function(e) {
                return "string" != typeof e.data("services") ? l : e.data("services").split(",").map(function(e) {
                    return e.trim() }) }, y = function(t) {
                var n;
                return n = t.parents().filter(function(t, n) {
                    return "fixed" === e(n).css("position") }), n.length ? !0 : !1 }, r = function(e) {
                return .2126 * e.r + .7152 * e.g + .0722 * e.b }, j = function(e, t) {
                var n, r, i, o, a;
                return a = 0 > t ? 0 : 255, i = 0 > t ? -1 * t : t, o = Math.round((a - e.r) * i) + e.r, r = Math.round((a - e.g) * i) + e.g, n = Math.round((a - e.b) * i) + e.b, { r: o, g: r, b: n } }, A = function(e) {
                return m.test(e) ? S(e) : b.test(e) ? _(e) : { r: 0, g: 0, b: 0 } }, _ = function(e) {
                var t, n, r, i;
                return i = e.match(b), r = i[1], n = i[2], t = i[3], { r: r, g: n, b: t } }, S = function(e) {
                var t, n, r, i;
                return r = e.replace(/^\s*#|\s*$/g, ""), 3 === r.length && (r = r.replace(/(.)/g, "$1$1")), i = parseInt(r.substr(0, 2), 16), n = parseInt(r.substr(2, 2), 16), t = parseInt(r.substr(4, 2), 16), { r: i, g: n, b: t } }, k = function(e) {
                return setTimeout(e, 1) }, x = function(e) { 27 === e.keyCode && h() }, i = function(e) { e.stopPropagation() }, c = function() {
                var t, n;
                n = e(".f-share-panel"), t = e('[id="share_4ormat_link"]'), k(function() {
                    var e, r, i;
                    return r = n.find(":focus").length > 0, i = t.is(":focus"), e = r || i, e ? void 0 : h() }) }, F = function() {
                var t;
                t = e(".f-share-panel"), t.removeClass("f-share-panel-out"), t.removeClass("f-share-panel-active"), C = !1 }, { init: g, show: O, hide: h, toggle: H, isOpen: v } }() }.call(this), WEBSITE_LIB.VideoLoader = { init: function() { WEBSITE_LIB.$(".youtube_cont.preview .load_iframe, .vimeo_cont.preview .load_iframe").click(function() {
                var e = WEBSITE_LIB.$(this).attr("href");
                return WEBSITE_LIB.$(this).parent().append("<iframe src='" + e + "' width='100%' height='100%' frameborder='0' allowfullscreen></iframe>"), !1 }) } }, WEBSITE_LIB.$(document).ready(function() { WEBSITE_LIB.ImageProtection.init(), WEBSITE_LIB.VideoLoader.init(), WEBSITE_LIB.Share.init() });
var PathHelper = { asset: function(e) {
        return WEBSITE_CONF.asset_base_path + e } };
! function() {! function() {
        var e, t, n;
        return e = this.jQuery, n = {}, this.Lazyload = n, t = n, t.priorities = [], t.images = {}, t.checkThrottled = null, t.pollms = 250, t.aggressiveness = 3, t.offsetErrorTolerance = 10, t.keepLoading = !0, t.slideshowSets = {}, t.slideshowBuffer = t.aggressiveness, t.numericReverseSort = function(e, t) {
            return t - e }, t.log = function(e) {
            return "undefined" != typeof console && null !== console ? console.log(e) : void 0 }, t.init = function() {
            return e(this.document).ready(function() {
                return t.checkThrottled = t.throttle(t.check, t.pollms), t.setupImages(), t.checkThrottled(), t.observeInteractions(), window.setTimeout(t.checkThrottled, 50), window.setInterval(t.checkThrottled, 631) }) }, t.check = function() {
            var n, r, i, o, a, s, l, u, c, f, d, p, h, g, m, y, v, b, x, w, T, k, N, C, E, A, S, _, M, j, L, O, D;
            for (t.checkOffsets(), S = e(window), M = S.height(), D = S.width(), O = S.scrollTop(), _ = O + M, j = S.scrollLeft(), L = j + D, E = Math.floor(M * t.aggressiveness), c = Math.floor(D * t.aggressiveness), o = Math.max(O - E, 0), n = _ + E, r = Math.max(j - c, 0), i = L + c, w = t.priorities, N = [], h = 0, y = w.length; y > h; h++) {
                for (x = w[h], C = !1, T = t.images[x], g = 0, v = T.length; v > g; g++) p = T[g], p[5] !== !0 ? e.contains(document.documentElement, p[0][0]) && !p[0].data("lazyloadSlideshow") && (u = p[1], a = p[2], s = p[3], l = p[4], n >= u && a >= o && i >= s && l >= r && (f = p[0], t.keepLoading === !0 && (t.loadNow(f), p[5] = !0, C = !0))) : C = !0;
                for (k = t.slideshowSets[x], m = 0, b = k.length; b > m; m++) d = k[m], A = d.filter(":visible"), A.each(function(n, r) {
                    var i, o, a, s, l, u;
                    for (r = e(r), o = d.index(r), i = t.slideshowBuffer, l = t.sliceWrap(o - i, o + i + 1, d), u = [], s = 0, a = l.length; a > s; s++) n = l[s], n = e(n), "true" !== n.attr("lazyloading") ? n.attr("lazyloaded") || (t.keepLoading === !0 ? (C = !0, t.loadNow(n), u.push(n.attr("lazyloading", "true"))) : u.push(void 0)) : C = !0;
                    return u });
                if (C) break;
                N.push(void 0) }
            return N }, t.loadNow = function(t) {
            var n;
            return t = e(t), null != t.data("src") ? (n = new Image, n.onload = function() {
                return null != t.data("lazyloadBeforeShow") && t.data("lazyloadBeforeShow")(t), t.attr("src", t.data("src")), t.data("src", null), t[0].removeAttribute("data-src"), t.removeAttr("lazyloading"), t.attr("lazyloaded", "true"), null != t.data("lazyloadComplete") ? t.data("lazyloadComplete")(t) : void 0 }, null != t.data("lazyloadBeforeLoad") && t.data("lazyloadBeforeLoad")(t), n.src = t.data("src")) : void 0 }, t.add = function(n, r) {
            var i, o, a, s, l, u, c, f, d;
            if (null == r && (r = {}), s = e(n).filter("[data-src]"), null != r.beforeLoad && s.data("lazyloadBeforeLoad", r.beforeLoad), null != r.beforeShow && s.data("lazyloadBeforeShow", r.beforeShow), null != r.complete && s.data("lazyloadComplete", r.complete), c = r.priority || 0, t.priorities.push(c), t.priorities.sort(t.numericReverseSort), null == (i = t.images)[c] && (i[c] = []), null == (o = t.slideshowSets)[c] && (o[c] = []), null != r.slideshow) return s.data("lazyloadSlideshow", !0), t.slideshowSets[c].push(s);
            for (f = e.makeArray(s), d = [], l = 0, u = f.length; u > l; l++) a = f[l], d.push(t.images[c].push([e(a)]));
            return d }, t.sliceWrap = function(t, n, r) {
            return 0 > t && n >= 0 ? (r = e(r), r.slice(t).add(r.slice(0, +n + 1 || 9e9))) : r.slice(t, n) }, t.setupImages = function() {
            var e, n, r, i, o, a, s, l, u, c, f, d;
            for (c = t.priorities, d = [], i = 0, a = c.length; a > i; i++) {
                for (u = c[i], r = [], f = t.images[u], o = 0, s = f.length; s > o; o++) n = f[o], n[5] !== !0 && (e = n[0], l = e.offset(), n = [e, l.top, l.top + e.height(), l.left, l.left + e.width(), !1], r.push(n));
                d.push(t.images[u] = r) }
            return d }, t.checkOffsets = function() {
            var e, n, r, i, o, a, s, l, u, c, f, d, p, h;
            for (p = !1, f = t.priorities, r = 0, a = f.length; a > r; r++)
                if (u = f[r], !(t.images[u].length <= 0))
                    for (o = t.images[u].length - 1, c = Math.floor(Math.random() * o), d = [t.images[u][o], t.images[u][c]], i = 0, s = d.length; s > i; i++)
                        if (n = d[i], l = n[0].offset(), h = n[1] - l.top + n[2] - (l.top + n[0].height()), e = n[3] - l.left + n[4] - (l.left + n[0].width()), Math.abs(e) > t.offsetErrorTolerance || Math.abs(h) > t.offsetErrorTolerance) { p = !0;
                            break }
            return p ? t.setupImages() : void 0 }, t.throttle = function(e, t) {
            var n, r, i, o, a, s;
            return r = n = s = a = null, o = 0, i = function() {
                    return o = new Date, s = null, a = e.apply(r, n) },
                function() {
                    var l, u;
                    return l = new Date, u = t - (l - o), r = this, n = arguments, 0 >= u ? (clearTimeout(s), s = null, o = l, a = e.apply(r, n)) : s || (s = setTimeout(i, u)), a } }, t.observeInteractions = function() {
            return e(window).bind("resize", t.checkThrottled), e(window).bind("scroll", t.checkThrottled), e(window).bind("click", t.checkThrottled) }, t.unobserveInteractions = function() {
            return e(window).unbind("resize", t.checkThrottled), e(window).unbind("scroll", t.checkThrottled), e(window).unbind("click", t.checkThrottled) } }.call("object" == typeof WEBSITE_LIB ? WEBSITE_LIB : window) }.call(this);
