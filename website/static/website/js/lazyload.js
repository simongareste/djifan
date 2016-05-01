"undefined" == typeof DATA && (DATA = {}), DATA.theme_dollar = null, DATA.theme_jQuery = null, DATA.$ = null, DATA.jQuery = null, DATA.theme_dollar = "undefined" == typeof $ ? void 0 : $, DATA.theme_jQuery = "undefined" == typeof jQuery ? void 0 : jQuery,

    DATA.$ = DATA.jQuery = $.noConflict(), $ = DATA.theme_dollar, jQuery = DATA.theme_jQuery, DATA.ImageProtection = {
        init: function() {
            DATA.ImageProtection.is_enabled() && (DATA.$("body").delegate("img", "contextmenu", DATA.ImageProtection.trap), DATA.$("assets").bind("mousedown", DATA.ImageProtection.remove_notice), DATA.$("body").delegate("img", "dragstart", function() {
                return !1
            }))
        },
        trap: function(e) {
            return DATA.ImageProtection.show_notice_at_position(e.pageX, e.pageY), !1
        },
        notice_id: "image_protection_notice",
        show_notice_at_position: function(e, t) {
            DATA.ImageProtection.remove_notice();
            var n = DATA.$(document.createElement("div")).attr("id", DATA.ImageProtection.notice_id).css({
                position: "absolute",
                top: t,
                left: e,
                display: "none",
                "z-index": "2147483647"
            }).text(DATA.ImageProtection.blurb());
            DATA.$("body").append(n), n.show()
        },
        remove_notice: function() {
            //DATA.$("#" + DATA.ImageProtection.notice_id).remove()
        },
        is_enabled: function() {
            return DATA.$('meta[name="protect_images"][content="true"]').length > 0
        },
        blurb: function() {
            return DATA.$('meta[name="image_protection_blurb"]').attr("content")
        }
    },
    /*
    function() {
        DATA.Share = function() {
            var e, t, n, r, i, o, a, s, l, u, c, f, d, p, h, m, g, v, y, b, x, w, T, N, k, C, A, S, E, L, M, _, j, D, F, O, R, P;
            return e = DATA.$, A = '<div class="f-share-panel" role="dialog" aria-label="Share" tabindex="1"><div class="f-share-panel-arrow"><div class="f-share-panel-arrow-stroke"></div><div class="f-share-panel-arrow-fill"></div></div><div class="f-share-panel-content"></div></div>', t = null, n = {
                facebook: {
                    label: "Share to Facebook",
                    url: "http://www.facebook.com/sharer/sharer.php?u={url}",
                    popup: {
                        width: 540
                    }
                },
                twitter: {
                    label: "Share to Twitter",
                    url: "https://twitter.com/intent/tweet?text={text}",
                    vars: {
                        text: "{title} {url} via @useformat"
                    },
                    popup: {
                        width: 540,
                        height: 420
                    }
                },
                tumblr: {
                    label: "Post to Tumblr",
                    url: "http://www.tumblr.com/share/link?url={url}",
                    popup: {
                        width: 540
                    }
                },
                pinterest: {
                    label: "Post to Pinterest",
                    url: "http://pinterest.com/pin/create/button/?url={url}&media={image}&description={text}",
                    vars: {
                        text: "{title} {url} via format.com"
                    },
                    popup: {
                        width: 750,
                        height: 518
                    }
                }
            }, l = ["facebook", "twitter", "tumblr", "pinterest"], T = [], C = !1, R = null, k = {
                fromLink: 12,
                fromEdge: 12,
                fromArrowToEdgeOfTooltip: 12
            }, g = /^#([0-9a-f]{3,6})$/i, b = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/i, m = function() {
                var t;
                t = e('[id="shareDATA_link"]'), t.size() < 1 || (T = u(t), t.bind("click touchend", O))
            }, a = function() {
                var t, n, r, i;
                r = e(A), n = e('[id="shareDATA_link"]'), t = r.find(".f-share-panel-content"), T.forEach(function(e) {
                    t.append(s(e))
                }), i = f(), e("head").append(i), e("body").append(r)
            }, y = function() {
                return C
            }, O = function() {
                return C ? h() : D(e(this)), !1
            }, D = function(t) {
                var n;
                if (!C && t) return e(".f-share-panel").size() < 1 && a(), n = e(".f-share-panel"), n.data("link", t), M(), n.removeClass("f-share-panel-out"), n.removeClass("f-share-panel-active"), n.addClass("f-share-panel-active"), n.focus(), n.bind("focusout", c), n.bind("click touchend", i), e(".f-share-panel-network").bind("click", j), e(window).bind("resize", M), e(window).bind("click touchend", h), e(document).bind("keyup", x), clearTimeout(R), C = !0, _gaq.push(["_trackEvent", "Share Panel", "Open"]), !1
            }, h = function() {
                var t, n;
                C && (t = e(".f-share-panel"), e(window).unbind("resize", M), e(window).unbind("click touchend", h), e(document).unbind("keyup", x), t.addClass("f-share-panel-out"), n = d(t), R = setTimeout(P, n), t.unbind("focusout", c), t.unbind("click touchend", i))
            }, j = function() {
                var t, r, i, o, a, s, l, u, c;
                return r = e(this).attr("data-network"), o = n[r], u = {
                    title: encodeURIComponent(document.title),
                    url: encodeURIComponent(window.location.href),
                    image: encodeURIComponent(e('meta[property="og:image"]').attr("content"))
                }, o.vars && o.vars.text && (u.text = F(o.vars.text, u)), c = o.popup.width || 540, t = o.popup.height || 300, s = (e(window).height() - t) / 2, i = (e(window).width() - c) / 2, l = F(o.url, u), a = "status=1,width=" + c + ",height=" + t + ",top=" + s + ",left=" + i, window.open(l, "share-panel", a), h(), _gaq.push(["_trackEvent", "Share Panel", "Share", o]), !1
            }, M = function() {
                var t, n, r, i, a, s, l, u, c, f, d, p, h, m, g, y, b, x, T, N;
                switch (b = 0, f = 0, r = e(".f-share-panel"), t = e(".f-share-panel-content"), n = e(".f-share-panel").data("link"), r.css({
                    display: "none"
                }), r.removeClass("f-share-panel-direction-top f-share-panel-direction-left f-share-panel-direction-right f-share-panel-direction-bottom"), N = {
                    width: e(window).width(),
                    height: e(window).height(),
                    scrollTop: e(window).scrollTop(),
                    scrollLeft: e(window).scrollLeft()
                }, r.css({
                    display: "block",
                    visibility: "hidden"
                }), c = v(n) || !1, s = n.data("direction") || "bottom", g = k.fromLink, m = k.fromEdge, h = k.fromArrowToEdgeOfTooltip, p = w(n), y = w(t), i = w(".f-share-panel-arrow-stroke", !0), i.top = 0, i.left = 0, r.css({
                    display: "",
                    visibility: ""
                }), c && (p.top -= N.scrollTop, p.left -= N.scrollLeft, N.scrollTop = 0, N.scrollLeft = 0), x = y.height - p.height, d = y.width - p.width, l = function() {
                    var e, t, n, r, i;
                    i = N.scrollLeft + N.width, t = f - N.scrollLeft < 0, n = f + y.width - N.scrollLeft > i, /top|bottom/.test(s) ? (t && (e = N.scrollLeft, f = e + m), n && (r = i - y.width, f = r - m)) : (n && (f = p.left - y.width - g, s = "left"), t && (f = p.left + p.width + g, s = "right"))
                }, u = function() {
                    var e, t, n, r, i;
                    t = null, n = null, i = N.scrollTop + N.height, /top|bottom/.test(s) ? (n = p.top - N.scrollTop - y.height < 0, t = p.top + p.height + y.height > i, n && (s = "bottom", b = p.top + p.height + g), t && (s = "top", b = p.top - y.height - g)) : (n = p.top + p.centerY - (y.centerY + m) < 0, t = p.top + p.centerY + y.centerY + m > i, n && (r = N.scrollTop, b = r + m), t && (e = i - y.height, b = e - m))
                }, a = function() {
                    var e, t, n, r;
                    return /left|right/.test(s) ? (t = p.top + p.centerY, r = t - y.height + h + i.centerY, n = t - h - i.centerY, b = o(b, r, n), i.top = p.top - b + p.height - i.centerY, i.left = "left" === s ? y.width : 0) : /top|bottom/.test(s) ? (e = p.left + p.centerX, r = e - y.width + h + i.centerX, n = e - h - i.centerX, f = o(f, r, n), i.top = "top" === s ? y.height : 0, i.left = p.left - f + p.centerX) : void 0
                }, s) {
                    case "top":
                        f = p.left - d / 2, b = p.top - y.height - g;
                        break;
                    case "left":
                        f = p.left - y.width - g, b = p.top - x / 2;
                        break;
                    case "right":
                        f = p.left + p.width + g, b = p.top - x / 2;
                        break;
                    case "bottom":
                        f = p.left - d / 2, b = p.top + p.height + g
                }
                l(), u(), r.addClass("f-share-panel-direction-" + s), a(), e(".f-share-panel-arrow").css({
                    left: Math.round(i.left),
                    top: Math.round(i.top)
                }), T = i.left + "px " + i.top + "px 0px", r.css({
                    top: Math.round(b),
                    left: Math.round(f),
                    "transform-origin": T,
                    "-ms-transform-origin": T,
                    "-webkit-transform-origin": T
                }), c && r.css("position", "fixed")
            }, s = function(t) {
                var r;
                return r = n[t], e("<a href='#' class='f-share-panel-network' data-network='" + t + "' tabindex='2'>" + r.label + "</a>")
            }, o = function(e, t, n) {
                return Math.max(Math.min(e, n), t)
            }, p = function() {
                var e, t, n;
                return n = DATA_DATA.theme, {
                    background_color: S(n.background_color),
                    body_text_color: S(null != (e = null != (t = n.text_typography) ? t.color : void 0) ? e : n.text_font_color)
                }
            }, f = function() {
                var e, t, n, i, o, a, s, l, u, c;
                return c = p(), e = c.background_color, u = c.body_text_color, i = r(e) / 255, l = 0, n = 0, a = 0, i > .92 ? (l = -.025, n = -.08, a = -.08) : .92 >= i && i >= .5 ? (l = .35, n = .2, a = .18) : .5 >= i && i >= .25 ? (l = -.2, n = -.2, a = -.35) : .25 > i && (l = .25, n = .25, a = .2), s = _(e, l), t = _(e, n), o = _(e, a), '<style id="f-share-panel-style">\n  .f-share-panel-content {\n    border: 1px rgb(' + t.r + ", " + t.g + ", " + t.b + ") solid;\n    background: rgba(" + s.r + ", " + s.g + ", " + s.b + ", 1.0);\n  }\n  .f-share-panel-network::after {\n    border-color: rgb(" + o.r + ", " + o.g + ", " + o.b + ");\n  }\n  .f-share-panel-direction-top .f-share-panel-arrow-fill { border-top-color: rgb(" + s.r + ", " + s.g + ", " + s.b + "); }\n  .f-share-panel-direction-top .f-share-panel-arrow-stroke { border-top-color: rgb(" + t.r + ", " + t.g + ", " + t.b + "); }\n  .f-share-panel-direction-left .f-share-panel-arrow-fill   { border-left-color: rgb(" + s.r + ", " + s.g + ", " + s.b + "); }\n  .f-share-panel-direction-left .f-share-panel-arrow-stroke { border-left-color: rgb(" + t.r + ", " + t.g + ", " + t.b + "); }\n  .f-share-panel-direction-right .f-share-panel-arrow-fill   { border-right-color: rgb(" + s.r + ", " + s.g + ", " + s.b + "); }\n  .f-share-panel-direction-right .f-share-panel-arrow-stroke { border-right-color: rgb(" + t.r + ", " + t.g + ", " + t.b + "); }\n  .f-share-panel-direction-bottom .f-share-panel-arrow-fill   { border-bottom-color: rgb(" + s.r + ", " + s.g + ", " + s.b + "); }\n  .f-share-panel-direction-bottom .f-share-panel-arrow-stroke { border-bottom-color: rgb(" + t.r + ", " + t.g + ", " + t.b + "); }\n  .f-share-panel-network:link,\n  .f-share-panel-network:visited { color: rgba(" + u.r + ", " + u.g + ", " + u.b + ", 1.0) !important; }\n  .f-share-panel-network:link:hover { color: rgba(" + u.r + ", " + u.g + ", " + u.b + ", 0.5) !important; }\n</style>"
            }, d = function(e) {
                var t;
                return t = e.css("transition-duration"), t ? Math.round(1e3 * parseFloat(t)) : 0
            }, w = function(t, n) {
                var r, i, o, a;
                return null == n && (n = !1), r = e(t), o = r.offset(), a = r.outerWidth(n), i = r.outerHeight(n), {
                    top: o.top,
                    left: o.left,
                    width: a,
                    height: i,
                    centerX: a / 2,
                    centerY: i / 2
                }
            }, F = function(e, t) {
                return e.replace(/\{(\w+)\}/g, function(e, n) {
                    return "undefined" == typeof t[n] ? "" : t[n]
                }).trim()
            }, u = function(e) {
                return "string" != typeof e.data("services") ? l : e.data("services").split(",").map(function(e) {
                    return e.trim()
                })
            }, v = function(t) {
                var n;
                return n = t.parents().filter(function(t, n) {
                    return "fixed" === e(n).css("position")
                }), n.length ? !0 : !1
            }, r = function(e) {
                return .2126 * e.r + .7152 * e.g + .0722 * e.b
            }, _ = function(e, t) {
                var n, r, i, o, a;
                return a = 0 > t ? 0 : 255, i = 0 > t ? -1 * t : t, o = Math.round((a - e.r) * i) + e.r, r = Math.round((a - e.g) * i) + e.g, n = Math.round((a - e.b) * i) + e.b, {
                    r: o,
                    g: r,
                    b: n
                }
            }, S = function(e) {
                return g.test(e) ? E(e) : b.test(e) ? L(e) : {
                    r: 0,
                    g: 0,
                    b: 0
                }
            }, L = function(e) {
                var t, n, r, i;
                return i = e.match(b), r = i[1], n = i[2], t = i[3], {
                    r: r,
                    g: n,
                    b: t
                }
            }, E = function(e) {
                var t, n, r, i;
                return r = e.replace(/^\s*#|\s*$/g, ""), 3 === r.length && (r = r.replace(/(.)/g, "$1$1")), i = parseInt(r.substr(0, 2), 16), n = parseInt(r.substr(2, 2), 16), t = parseInt(r.substr(4, 2), 16), {
                    r: i,
                    g: n,
                    b: t
                }
            }, N = function(e) {
                return setTimeout(e, 1)
            }, x = function(e) {
                27 === e.keyCode && h()
            }, i = function(e) {
                e.stopPropagation()
            }, c = function() {
                var t, n;
                n = e(".f-share-panel"), t = e('[id="shareDATA_link"]'), N(function() {
                    var e, r, i;
                    return r = n.find(":focus").length > 0, i = t.is(":focus"), e = r || i, e ? void 0 : h()
                })
            }, P = function() {
                var t;
                t = e(".f-share-panel"), t.removeClass("f-share-panel-out"), t.removeClass("f-share-panel-active"), C = !1
            }, {
                init: m,
                show: D,
                hide: h,
                toggle: O,
                isOpen: y
            }
        }()
    }.call(this),*/ DATA.VideoLoader = {
        init: function() {
            DATA.$(".youtube_cont.preview .load_iframe, .vimeo_cont.preview .load_iframe").click(function() {
                var e = DATA.$(this).attr("href");
                return DATA.$(this).parent().append("<iframe src='" + e + "' width='100%' height='100%' frameborder='0' allowfullscreen></iframe>"), !1
            })
        }
    }, DATA.$(document).ready(function() {
        /*DATA.ImageProtection.init(), DATA.VideoLoader.init(), DATA.Share.init()*/
    });
var PathHelper = {
    asset: function(e) {
        return DATA_DATA.asset_base_path + e
    }
};
! function() {
    ! function() {
        var e, t, n;
        return e = this.jQuery, n = {}, this.Lazyload = n, t = n, t.priorities = [], t.images = {}, t.checkThrottled = null, t.pollms = 250, t.aggressiveness = 3, t.offsetErrorTolerance = 10, t.keepLoading = !0, t.slideshowSets = {}, t.slideshowBuffer = t.aggressiveness, t.numericReverseSort = function(e, t) {
            return t - e
        }, t.log = function(e) {
            return "undefined" != typeof console && null !== console ? console.log(e) : void 0
        }, t.init = function() {
            return e(this.document).ready(function() {
                return t.checkThrottled = t.throttle(t.check, t.pollms), t.setupImages(), t.checkThrottled(), t.observeInteractions(), window.setTimeout(t.checkThrottled, 50), window.setInterval(t.checkThrottled, 631)
            })
        }, t.check = function() {
            var n, r, i, o, a, s, l, u, c, f, d, p, h, m, g, v, y, b, x, w, T, N, k, C, A, S, E, L, M, _, j, D, F;
            for (t.checkOffsets(), E = e(window), M = E.height(), F = E.width(), D = E.scrollTop(), L = D + M, _ = E.scrollLeft(), j = _ + F, A = Math.floor(M * t.aggressiveness), c = Math.floor(F * t.aggressiveness), o = Math.max(D - A, 0), n = L + A, r = Math.max(_ - c, 0), i = j + c, w = t.priorities, k = [], h = 0, v = w.length; v > h; h++) {
                for (x = w[h], C = !1, T = t.images[x], m = 0, y = T.length; y > m; m++) p = T[m], p[5] !== !0 ? e.contains(document.documentElement, p[0][0]) && !p[0].data("lazyloadSlideshow") && (u = p[1], a = p[2], s = p[3], l = p[4], n >= u && a >= o && i >= s && l >= r && (f = p[0], t.keepLoading === !0 && (t.loadNow(f), p[5] = !0, C = !0))) : C = !0;
                for (N = t.slideshowSets[x], g = 0, b = N.length; b > g; g++) d = N[g], S = d.filter(":visible"), S.each(function(n, r) {
                    var i, o, a, s, l, u;
                    for (r = e(r), o = d.index(r), i = t.slideshowBuffer, l = t.sliceWrap(o - i, o + i + 1, d), u = [], s = 0, a = l.length; a > s; s++) n = l[s], n = e(n), "true" !== n.attr("lazyloading") ? n.attr("lazyloaded") || (t.keepLoading === !0 ? (C = !0, t.loadNow(n), u.push(n.attr("lazyloading", "true"))) : u.push(void 0)) : C = !0;
                    return u
                });
                if (C) break;
                k.push(void 0)
            }
            return k
        }, t.loadNow = function(t) {
            var n;
            return t = e(t), null != t.data("src") ? (n = new Image, n.onload = function() {
                return null != t.data("lazyloadBeforeShow") && t.data("lazyloadBeforeShow")(t), t.attr("src", t.data("src")), t.data("src", null), t[0].removeAttribute("data-src"), t.removeAttr("lazyloading"), t.attr("lazyloaded", "true"), null != t.data("lazyloadComplete") ? t.data("lazyloadComplete")(t) : void 0
            }, null != t.data("lazyloadBeforeLoad") && t.data("lazyloadBeforeLoad")(t), n.src = t.data("src")) : void 0
        }, t.add = function(n, r) {
            var i, o, a, s, l, u, c, f, d;
            if (null == r && (r = {}), s = e(n).filter("[data-src]"), null != r.beforeLoad && s.data("lazyloadBeforeLoad", r.beforeLoad), null != r.beforeShow && s.data("lazyloadBeforeShow", r.beforeShow), null != r.complete && s.data("lazyloadComplete", r.complete), c = r.priority || 0, t.priorities.push(c), t.priorities.sort(t.numericReverseSort), null == (i = t.images)[c] && (i[c] = []), null == (o = t.slideshowSets)[c] && (o[c] = []), null != r.slideshow) return s.data("lazyloadSlideshow", !0), t.slideshowSets[c].push(s);
            for (f = e.makeArray(s), d = [], l = 0, u = f.length; u > l; l++) a = f[l], d.push(t.images[c].push([e(a)]));
            return d
        }, t.sliceWrap = function(t, n, r) {
            return 0 > t && n >= 0 ? (r = e(r), r.slice(t).add(r.slice(0, +n + 1 || 9e9))) : r.slice(t, n)
        }, t.setupImages = function() {
            var e, n, r, i, o, a, s, l, u, c, f, d;
            for (c = t.priorities, d = [], i = 0, a = c.length; a > i; i++) {
                for (u = c[i], r = [], f = t.images[u], o = 0, s = f.length; s > o; o++) n = f[o], n[5] !== !0 && (e = n[0], l = e.offset(), n = [e, l.top, l.top + e.height(), l.left, l.left + e.width(), !1], r.push(n));
                d.push(t.images[u] = r)
            }
            return d
        }, t.checkOffsets = function() {
            var e, n, r, i, o, a, s, l, u, c, f, d, p, h;
            for (p = !1, f = t.priorities, r = 0, a = f.length; a > r; r++)
                if (u = f[r], !(t.images[u].length <= 0))
                    for (o = t.images[u].length - 1, c = Math.floor(Math.random() * o), d = [t.images[u][o], t.images[u][c]], i = 0, s = d.length; s > i; i++)
                        if (n = d[i], l = n[0].offset(), h = n[1] - l.top + n[2] - (l.top + n[0].height()), e = n[3] - l.left + n[4] - (l.left + n[0].width()), Math.abs(e) > t.offsetErrorTolerance || Math.abs(h) > t.offsetErrorTolerance) {
                            p = !0;
                            break
                        }
            return p ? t.setupImages() : void 0
        }, t.throttle = function(e, t) {
            var n, r, i, o, a, s;
            return r = n = s = a = null, o = 0, i = function() {
                    return o = new Date, s = null, a = e.apply(r, n)
                },
                function() {
                    var l, u;
                    return l = new Date, u = t - (l - o), r = this, n = arguments, 0 >= u ? (clearTimeout(s), s = null, o = l, a = e.apply(r, n)) : s || (s = setTimeout(i, u)), a
                }
        }, t.observeInteractions = function() {
            return e(window).bind("resize", t.checkThrottled), e(window).bind("scroll", t.checkThrottled)/*, e(window).bind("click", t.checkThrottled)*/
        }, t.unobserveInteractions = function() {
            return e(window).unbind("resize", t.checkThrottled), e(window).unbind("scroll", t.checkThrottled)/*, e(window).unbind("click", t.checkThrottled)*/
        }
    }.call("object" == typeof DATA ? DATA : window)
}.call(this);
