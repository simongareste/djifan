jQuery.event.special.scrolldelta = { delegateType: "scroll", bindType: "scroll", handle: function(l) {
        var e = l.handleObj,
            t = jQuery.data(l.target),
            o = null,
            r = l.target,
            c = r === document,
            p = t.top || 0,
            s = t.left || 0;
        return t.top = c ? r.documentElement.scrollTop + r.body.scrollTop : r.scrollTop, t.left = c ? r.documentElement.scrollLeft + r.body.scrollLeft : r.scrollLeft, l.scrollTopDelta = t.top - p, l.scrollTop = t.top, l.scrollLeftDelta = t.left - s, l.scrollLeft = t.left, l.type = e.origType, o = e.handler.apply(this, arguments), l.type = e.type, o } };