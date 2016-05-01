window.DATA = window.DATA || {}, window.DATA.importMobileMenu = function() {
    "use strict";
    var n, e, o, i, t, l, s = 10,
        r = function() {
            return 1 === n.length ? n.outerHeight(!1) : 0
        },
        u = function() {
            var n = r(),
                e = window.innerHeight - r();
            i.css({
                top: "" + n + "px",
                height: "" + e + "px"
            })
        },
        c = function() {
            t.attr("style", "display: none !important")
        },
        a = function() {
            t.attr("style", "")
        },
        d = function() {
            u(), i.hide().show()
        },
        f = {};
    return f.setup = function(s) {
        $(function() {
            var r = {
                menuSelector: "#menu_container",
                navSelector: ".nav",
                globalUsingMessageSelector: "body > #using",
                afterHide: null,
                afterShow: null
            };
            l = $.extend({}, r, s), n = $(l.menuSelector), e = document.documentElement, o = $(document.body), i = $(l.navSelector), t = $(l.globalUsingMessageSelector), f.bindListeners()
        })
    }, f.toggleMobileMenu = function() {
        e.classList.contains("open-mobile-menu") ? f.hide() : f.show()
    }, f.show = function() {
        u(), i.off("transitionend.mobileMenu webkitTransitionEnd.mobileMenu"), e.classList.add("open-mobile-menu"), $(window).on("resize", d), c(), "function" == typeof l.afterShow && l.afterShow()
    }, f.hide = function() {
        $(window).off("resize", d), i.on("transitionend.mobileMenu webkitTransitionEnd.mobileMenu", function() {
            i.off("transitionend.mobileMenu webkitTransitionEnd.mobileMenu"), i.css({
                top: "",
                height: ""
            })
        }), e.classList.remove("open-mobile-menu"), a(), "function" == typeof l.afterHide && l.afterHide()
    }, f.isVisible = function() {
        return e.classList.contains("open-mobile-menu")
    }, f.handleScroll = function(o) {
        var i = o.scrollTopDelta;
        return e.classList.contains("open-mobile-menu") || (i > 1 && i >= s && o.scrollTop > 0 ? n.addClass("hidden") : 1 > i && -1 * s >= i && n.removeClass("hidden"), 0 !== o.scrollTop) ? void 0 : n.removeClass("hidden")
    }, f.bindListeners = function() {
        o.on("click", ".mobile-menu-trigger", f.toggleMobileMenu), $(window).on("scrolldelta", f.handleScroll)
    }, f.unbindListeners = function() {
        o.off("click", ".mobile-menu-trigger", f.toggleMobileMenu), $(window).off("scrolldelta", f.handleScroll)
    }, f
};
