 /*! cir.js v0.8.16 | (c) 2013 Atsushi Mizoue. */(function() {
    function h(a) {
        return function() {
            return this[a]
        }
    }
    function j(a) {
        return "cubic-bezier(" + a + ")"
    }
    function aa(a, b) {
        for (var c = k("p"), d = l, e, f = n, g = a.length, m, u = RegExp("^(.*?)" + a[0] + "$", "i"); g--; )
            if (c.style[a[g]] !== p) {
                d = q;
                (e = a[g].match(u)[1]) ? (f = e.toLowerCase(), b = f + b, f = "-" + f + "-") : b = b.toLowerCase();
                c = r(ba("head"), k("style", {type: "text/css"}));
                m = c.sheet;
                break
            }
        return {wa: b,ya: d,prefix: e,ua: f,sheet: m}
    }
    function s(a) {
        return t.JSON.parse(a)
    }
    function ca(a) {
        return t.JSON.stringify(a)
    }
    function da(a) {
        a = a || n;
        a = n + a;
        return a.match(/^(.*?)([0-9\.]+)(.*)$/)
    }
    function ea() {
        this.stop()
    }
    function v() {
        return Date.now()
    }
    function w(a) {
        t.scrollTo(0, a)
    }
    function fa() {
        w(1)
    }
    function y(a, b, c) {
        for (c in b)
            a[c] = b[c];
        return a
    }
    function ga(a, b) {
        b = n + a;
        return b.match("^{.*}$") ? s(b) : b.match("^[0-9.]+$") ? 1 * b : "true" === b ? q : "false" === b ? l : a
    }
    function ha(a, b, c) {
        return a.split(b).join(c)
    }
    function ia(a, b, c, d) {
        b = c = n;
        for (d in a)
            a[d] && (c += b + d + "=" + encodeURIComponent(a[d]), b = "&");
        return c
    }
    function z(a, b) {
        return Object.prototype.toString.call(b) == "[object " + a + "]" ? q : l
    }
    function ja(a) {
        return z("Object", a)
    }
    function A(a) {
        return z("Number", a)
    }
    function la(a) {
        return z("String", a)
    }
    function B(a) {
        return z("Function", a)
    }
    function ma(a) {
        return z("Boolean", a)
    }
    function D(a) {
        return z("Array", a)
    }
    function E(a) {
        return a === p ? l : q
    }
    function na() {
        return "ontouchstart" in t
    }
    function F() {
    }
    function oa(a) {
        a.preventDefault();
        return l
    }
    function G(a, b) {
        b = b || navigator.userAgent;
        return !!b.match(a)
    }
    function H(a, b) {
        return function() {
            return b.apply(a, arguments)
        }
    }
    function pa(a, b, c, d) {
        b = b || a;
        c = c || b;
        for (d in b)
            B(b[d]) && (c[d] = H(a, b[d]));
        y(a, c);
        return c
    }
    function ba(a) {
        return I.querySelector(a)
    }
    function qa(a, b, c, d) {
        c = b.querySelectorAll(a);
        d = [];
        d.push.apply(d, c);
        return d
    }
    function ra(a, b, c, d, e) {
        d = (c = a.className) ? c.split(" ") : [];
        for (e = d.length; e--; )
            if (b == d[e])
                return q;
        return l
    }
    function J(a, b, c, d) {
        ra(a, b) || (c = n, (d = a.className) && (c = " "), a.className = d + c + b)
    }
    function K(a, b, c, d, e) {
        if (ra(a, b)) {
            d = [];
            c = a.className.split(" ");
            for (e = c.length; e--; )
                b != c[e] && d.push(c[e]);
            a.className = d.join(" ")
        }
    }
    function sa(a, b) {
        if (ra(a, b))
            return K(a, b);
        J(a, b)
    }
    function ta(a, b, c, d) {
        if (ja(b)) {
            for (d in b)
                a.setAttribute(d, b[d]);
            return q
        }
        return c || c == n ? a.setAttribute(b, c) : a.getAttribute(b)
    }
    function ua(a, b) {
        a.removeAttribute(b)
    }
    function k(a, b, c) {
        c = I.createElement(a);
        b && ta(c, b);
        return c
    }
    function L(a, b, c) {
        a.addEventListener(b, c, l)
    }
    function M(a, b, c) {
        a.removeEventListener(b, c, l)
    }
    function va(a) {
        a.style.display = "block"
    }
    function wa(a) {
        a.style.display = "none"
    }
    function N(a, b, c, d, e, f) {
        c = a.style;
        for (d in b)
            e = d, f = b[d], A(f) && (f += "px"), c[e] = f
    }
    function xa(a) {
        return I.defaultView.getComputedStyle(a, O)
    }
    function ya(a) {
        return a.parentNode
    }
    function r(a, b) {
        return a.appendChild(b)
    }
    function za(a, b) {
        return ya(a).insertBefore(b, a)
    }
    function Aa(a, b) {
        return ya(a).insertBefore(b, a.nextSibling)
    }
    function Ba(a) {
        return ya(a).removeChild(a)
    }
    function Ca(a, b) {
        if (!b)
            return a.innerHTML;
        a.innerHTML = b
    }
    function Da(a, b, c, d) {
        for (c = []; !d; )
            a[b] && c[c.length - 1] != a[b] && c.push(a[b]), a.P && a.P.prototype ? a = a.P.prototype : d = q;
        return c
    }
    function Ea(a, b, c, d) {
        a = C.klass({extend: a,init: b,prop: c});
        E(d) && (a.support = d);
        return a
    }
    function P(a, b, c) {
        return Ea(C.Base, a, b, c)
    }
    function Fa() {
    }
    function Q(a, b, c) {
        var d = a.length;
        for (c = Ga(c); d--; )
            c[0] = a[d], b.apply(a, c);
        return a
    }
    function Ha(a, b, c) {
        c = Ga(c);
        c[0] = a[0];
        return b.apply(O, c)
    }
    function Ga(a) {
        var b = [O];
        b.push.apply(b, a);
        return b
    }
    function Ia(a) {
        var b = k(a.type);
        b.controls = a.controls ? q : l;
        b.preload = a.preload || "auto";
        b.autoplay = a.autoplay ? q : l;
        b.loop = a.loop ? q : l;
        b.src = a.dir + a.name + "." + a.suffix[0][0];
        return b
    }
    function Ja(a, b) {
        if (!t["HTML" + a + "Element"])
            return l;
        a = a.toLowerCase();
        for (var c = k(a), d = [], e = 0, f = b.length; e < f; e++)
            c.canPlayType(a + "/" + b[e][1]) && d.push(b[e]);
        return d.length ? d : l
    }
    C = {};
    var t = window, I = document, R = I.body, q = !0, l = !1, O = null, n = "", S = {}, p = void 0, T = na(), Ka = j("0.19,1,0.22,1"), U = 1.70158, V, La, Ma, Qa, Sa, Ta, W, Ua, Va, Wa, Xa;
    Date.now || (Date.now = function() {
        return 1 * new Date
    });
    C.util = {win: t,doc: I,pageTop: fa,override: y,replaceAll: ha,template: function(a, b, c) {
            for (c in b)
                a = ha(a, "<%= " + c + " %>", b[c]);
            return a
        },windowOpen: function(a, b, c, d, e) {
            e = [];
            for (d in c)
                ma(c[d]) && (c[d] === q ? c[d] = "yes" : c[d] === l && (c[d] = "no")), e.push(d + "=" + c[d]);
            return t.open(a, b, e.join(","))
        },typeCast: ga,makeQueryString: ia,parseQueryString: function(a, b, c, d, e) {
            a = a.replace(/^[\#\?]/, n);
            b = a.split("&");
            c = b.length;
            for (e = {}; c--; )
                d = b[c].split("="), e[d[0]] = ga(decodeURIComponent(d[1]));
            return e
        },is: z,isObject: ja,isNumber: A,
        isString: la,isFunction: B,isBoolean: ma,isArray: D,isDefined: E,isTouchable: na,nullFunction: F,eventPrevent: oa,eventStop: function(a) {
            a.stopPropagation();
            return l
        },checkUserAgent: G,proxy: H,owner: pa};
    C.dom = {$: ba,$$: function(a) {
            return qa(a, I)
        },$child: function(a, b) {
            return b.querySelector(a)
        },$$child: qa,$id: function(a) {
            return I.getElementById(a)
        },on: L,off: M,create: k,show: va,hide: wa,hasClass: ra,addClass: J,removeClass: K,toggleClass: sa,css: N,computedStyle: xa,append: r,parent: ya,before: za,after: Aa,remove: Ba,attr: ta,removeAttr: ua,html: Ca,reflow: function(a) {
            (a || R).offsetTop
        }};
    C.klass = function(a) {
        function b() {
            for (var a = Da(this, "_init"), b = a.length; b--; )
                a[b].apply(this, arguments)
        }
        var c = a.init || function() {
        }, d = a.prop;
        (a = a.extend) && C.extend(b, a);
        b.prototype._init = c;
        y(b.prototype, d);
        return b
    };
    C.klass.ancestors = Da;
    C.extend = function(a, b) {
        function c() {
        }
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.P = b
    };
    C.Base = Ea(p, function() {
        this.K = {}
    }, {Ga: 0,dispose: function(a) {
            a = this;
            for (var b = Da(a, "disposeInternal"), c = 0, d = a.K; c < b.length; c++)
                b[c].call(a);
            for (c in d)
                M.apply(O, d[c]);
            for (c in a)
                (d = a[c]) && B(d.dispose) && d.dispose();
            a.__proto__ = O;
            for (c in a)
                a[c] = O, delete a[c];
            return O
        },contract: function(a, b, c, d) {
            d = ++this.Ga;
            L(a, b, c);
            this.K[d] = [a, b, c];
            return d
        },uncontract: function(a) {
            if (a) {
                var b = this.K, c = b[a];
                delete b[a];
                M(c[0], c[1], c[2])
            }
        }});
    V = C.Event = P(p, {SWITCHCLICK: T ? "touchstart" : "click",SWITCHDOWN: T ? "touchstart" : "mousedown",SWITCHMOVE: T ? "touchmove" : "mousemove",SWITCHUP: T ? "touchend" : "mouseup",SWITCHOVER: T ? "touchstart" : "mouseover",SWITCHOUT: T ? "touchend" : "mouseout",LOAD: "load",CHANGE: "change",CLICK: "click",MOUSEDOWN: "mousedown",MOUSEMOVE: "mousemove",MOUSEUP: "mouseup",MOUSEOVER: "mouseover",MOUSEOUT: "mouseout",TOUCHSTART: "touchstart",TOUCHMOVE: "touchmove",TOUCHEND: "touchend",RESIZE: "resize"});
    V = C.e = new V;
    C.ease = {linear: function(a, b, c, d) {
            return c * a / d + b
        },inCubic: function(a, b, c, d) {
            return c * Math.pow(a / d, 3) + b
        },outCubic: function(a, b, c, d) {
            return c * (Math.pow(a / d - 1, 3) + 1) + b
        },inOutCubic: function(a, b, c, d) {
            return 1 > (a /= d / 2) ? c / 2 * Math.pow(a, 3) + b : c / 2 * (Math.pow(a - 2, 3) + 2) + b
        },inQuart: function(a, b, c, d) {
            return c * Math.pow(a / d, 4) + b
        },outQuart: function(a, b, c, d) {
            return -c * (Math.pow(a / d - 1, 4) - 1) + b
        },inOutQuart: function(a, b, c, d) {
            return 1 > (a /= d / 2) ? c / 2 * Math.pow(a, 4) + b : -c / 2 * (Math.pow(a - 2, 4) - 2) + b
        },inQuint: function(a, b, c, d) {
            return c *
            Math.pow(a / d, 5) + b
        },outQuint: function(a, b, c, d) {
            return c * (Math.pow(a / d - 1, 5) + 1) + b
        },inOutQuint: function(a, b, c, d) {
            return 1 > (a /= d / 2) ? c / 2 * Math.pow(a, 5) + b : c / 2 * (Math.pow(a - 2, 5) + 2) + b
        },inSine: function(a, b, c, d) {
            return c * (1 - Math.cos(a / d * (Math.PI / 2))) + b
        },outSine: function(a, b, c, d) {
            return c * Math.sin(a / d * (Math.PI / 2)) + b
        },inOutSine: function(a, b, c, d) {
            return c / 2 * (1 - Math.cos(Math.PI * a / d)) + b
        },inExpo: function(a, b, c, d) {
            return c * Math.pow(2, 10 * (a / d - 1)) + b
        },outExpo: function(a, b, c, d) {
            return c * (-Math.pow(2, -10 * a / d) + 1) + b
        },inOutExpo: function(a,
        b, c, d) {
            return 1 > (a /= d / 2) ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : c / 2 * (-Math.pow(2, -10 * --a) + 2) + b
        },inCirc: function(a, b, c, d) {
            return c * (1 - Math.sqrt(1 - (a /= d) * a)) + b
        },outCirc: function(a, b, c, d) {
            return c * Math.sqrt(1 - (a = a / d - 1) * a) + b
        },inOutCirc: function(a, b, c, d) {
            return 1 > (a /= d / 2) ? c / 2 * (1 - Math.sqrt(1 - a * a)) + b : c / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + b
        },inQuad: function(a, b, c, d) {
            return c * (a /= d) * a + b
        },outQuad: function(a, b, c, d) {
            return -c * (a /= d) * (a - 2) + b
        },inOutQuad: function(a, b, c, d) {
            return 1 > (a /= d / 2) ? c / 2 * a * a + b : -c / 2 * (--a * (a - 2) - 1) + b
        },inBack: function(a,
        b, c, d) {
            return c * (a /= d) * a * ((U + 1) * a - U) + b
        },outBack: function(a, b, c, d) {
            return c * ((a = a / d - 1) * a * ((U + 1) * a + U) + 1) + b
        },inOutBack: function(a, b, c, d) {
            return 1 > (a /= d / 2) ? c / 2 * a * a * (((U *= 1.525) + 1) * a - U) + b : c / 2 * ((a -= 2) * a * (((U *= 1.525) + 1) * a + U) + 2) + b
        }};
    C.cssease = {linear: "linear",inCubic: j("0.55,0.055,0.675,0.19"),outCubic: j("0.215,0.61,0.355,1"),inOutCubic: j("0.645,0.045,0.355,1"),inQuart: j("0.895,0.03,0.685,0.22"),outQuart: j("0.165,0.84,0.44,1"),inOutQuart: j("0.77,0,0.175,1"),inQuint: j("0.755,0.05,0.855,0.06"),outQuint: j("0.23,1,0.32,1"),inOutQuint: j("0.86,0,0.07,1"),inSine: j("0.47,0,0.745,0.715"),outSine: j("0.39,0.575,0.565,1"),inOutSine: j("0.445,0.05,0.55,0.95"),inExpo: j("0.95,0.05,0.795,0.035"),outExpo: j("0.19,1,0.22,1"),inOutExpo: j("1,0,0,1"),
        inCirc: j("0.6,0.04,0.98,0.335"),outCirc: j("0.075,0.82,0.165,1"),inOutCirc: j("0.785,0.135,0.15,0.86"),inQuad: j("0.55,0.085,0.68,0.53"),outQuad: j("0.25,0.46,0.45,0.94"),inOutQuad: j("0.455,0.03,0.515,0.955"),inBack: [j("0.6,0,0.735,0.045"), j("0.6,-0.28,0.735,0.045")],outBack: [j("0.175,0.885,0.32,1"), j("0.175,0.885,0.32,1.275")],inOutBack: [j("0.68,0,0.265,1"), j("0.68,-0.55,0.265,1.55")]};
    var Ya = aa(["animation", "webkitAnimation"], "Animation"), Za = Ya.prefix, $a = Ya.ua, ab = Ya.wa, X = Ya.sheet, bb = C.Animation = P(function(a, b, c, d) {
        d = this;
        c = c || S;
        d.p = c.onComplete || F;
        d.a = a;
        bb.id++;
        d.f = "ciranim" + bb.id;
        a = c.duration || bb.duration;
        var e = c.ease || Ka, f, g = {};
        for (f in b)
            g[f] = b[f], A(g[f]) && (g[f] += "px");
        d.Za = g;
        g = ha(ha(ca(g), '"', n), ",", ";");
        X.insertRule("@" + $a + "keyframes " + d.f + "{to" + g + "}", X.cssRules.length);
        D(e) || (e = [e]);
        b = d.f;
        f = 0;
        for (var g = e.length, m = n; f < g; f++)
            m += $a + "animation:" + b + " " + a + "ms " + e[f] + " 0s 1 normal both;";
        X.insertRule("." + b + "{" + m + "}", X.cssRules.length);
        c.manual || d.start()
    }, {ga: function() {
            var a = this.a, b = this.Ia;
            M(a, ab + "End", b);
            M(a, "animationend", b)
        },disposeInternal: ea,start: function(a, b) {
            function c(c) {
                var e = X.cssRules, f = e.length, g;
                a.ga();
                if ("webkit" == Za) {
                    for (; f--; )
                        g = e[f].name || (n + e[f].selectorText).split(".")[1], g == a.f && X.deleteRule(f);
                    K(b, a.f);
                    N(b, a.Za)
                }
                a.p(c)
            }
            a = this;
            b = a.a;
            a.Ia = c;
            L(b, ab + "End", c);
            L(b, "animationend", c);
            J(b, a.f)
        },stop: function() {
            var a = {};
            a[$a + "animation-play-state"] = "paused";
            N(this.a,
            a);
            this.ga()
        }}, Ya.ya);
    bb.id = 0;
    bb.duration = 500;
    var cb = aa(["transitionProperty", "webkitTransitionProperty"], "Transition"), db = cb.ua, eb = cb.wa, fb = cb.sheet, Y;
    Y = C.Transition = P(function(a, b, c, d) {
        d = this;
        c = c || S;
        Y.id++;
        d.f = "cirtrans" + Y.id;
        var e = [];
        y({}, b);
        var f, g = c.duration || Y.duration, m = c.ease || Ka;
        D(m) || (m = [m]);
        for (f in b)
            e.push(f);
        f = 0;
        for (var u = m.length, x = n, x = x + (db + "transition-property:" + e.join(" ") + ";" + db + "transition-duration:" + g + "ms;"); f < u; f++)
            x += db + "transition-timing-function:" + m[f] + ";";
        fb.insertRule("." + d.f + "{" + x + "}", fb.cssRules.length);
        d.a = a;
        d.q = b;
        d.p = c.onComplete || F;
        c.manual || d.start()
    }, {disposeInternal: ea,start: function(a) {
            a = this;
            a.B = function(b) {
                a.stop();
                setTimeout(function() {
                    a.p(b)
                }, 1)
            };
            L(a.a, eb + "End", a.B);
            L(a.a, "transitionend", a.B);
            J(a.a, a.f);
            N(a.a, a.q)
        },stop: function(a) {
            a = this;
            var b = fb.cssRules, c = b.length, d;
            M(a.a, eb + "End", a.B);
            M(a.a, "transitionend", a.B);
            for (K(a.a, a.f); c--; )
                if (d = b[c].name || (n + b[c].selectorText).split(".")[1], d == a.f) {
                    fb.deleteRule(c);
                    break
                }
        }}, cb.ya);
    Y.id = 0;
    Y.duration = 500;
    W = C.Tweener = P(function(a, b, c, d, e, f) {
        f = this;
        c = c || S;
        f.ra = a;
        f.q = [];
        for (d in b)
            e = b[d], e.name = d, e.Va = e.to - e.from, e.prefix = e.prefix || n, e.suffix = e.suffix || "px", f.q.push(e);
        f.X = c.duration || W.duration;
        f.Ha = c.ease || f.za;
        f.p = c.onComplete;
        c.manual || f.start()
    }, {disposeInternal: ea,za: function(a, b, c, d) {
            return c * (-Math.pow(2, -10 * a / d) + 1) + b
        },ka: t.requestAnimationFrame ? function(a) {
            requestAnimationFrame(a)
        } : t.webkitRequestAnimationFrame ? function(a) {
            webkitRequestAnimationFrame(a)
        } : t.mozRequestAnimationFrame ? function(a) {
            mozRequestAnimationFrame(a)
        } :
        t.oRequestAnimationFrame ? function(a) {
            oRequestAnimationFrame(a)
        } : t.msRequestAnimationFrame ? function(a) {
            msRequestAnimationFrame(a)
        } : function(a) {
            setTimeout(a, 1E3 / W.ab)
        },D: function() {
            for (var a = this, b = W.H, c, d = v(), e, f = b.length, g, m; f--; )
                if (c = b[f], g = c.q.length, e = d - c.Ta, e < c.X)
                    for (; g--; )
                        m = c.q[g], W.ma(c.ra, m, c.Ha(e, m.from, m.Va, c.X));
                else {
                    for (; g--; )
                        m = c.q[g], W.ma(c.ra, m, m.to);
                    c.p && c.p();
                    b.splice(f, 1)
                }
            b.length ? a.ka(function() {
                a.D()
            }) : a.stop()
        },start: function(a) {
            a = this;
            a.Ta = v();
            W.H.push(a);
            W.U || (W.U = 1, a.ka(function() {
                a.D()
            }))
        },
        stop: function() {
            W.H = [];
            clearInterval(W.U);
            W.U = O
        }});
    W.ma = function(a, b, c) {
        a[b.name] = b.prefix + c + b.suffix
    };
    W.H = [];
    W.fps = 30;
    W.duration = 500;
    C.$ = function(a, b, c, d, e) {
        c = "string" == typeof a ? (b || I).querySelectorAll(a) : [a];
        e = c.length;
        d = new Fa;
        for (d.length = e; e--; )
            d[e] = c[e];
        return d
    };
    Xa = C.$.cb = {querySelectorAll: function(a) {
            return this[0].querySelectorAll(a)
        },find: function(a) {
            return C.$(a, this)
        },parent: function() {
            return C.$(ya(this[0]))
        },on: function() {
            return Q(this, L, arguments)
        },off: function() {
            return Q(this, M, arguments)
        },show: function() {
            return Q(this, va)
        },hide: function() {
            return Q(this, wa)
        },hasClass: function() {
            return Ha(this, ra, arguments)
        },addClass: function() {
            return Q(this, J, arguments)
        },removeClass: function() {
            return Q(this, K, arguments)
        },toggleClass: function() {
            return Q(this, sa, arguments)
        },
        css: function() {
            return Q(this, N, arguments)
        },html: function() {
            return Ha(this, Ca, arguments)
        },attr: function() {
            return Ha(this, ta, arguments)
        },removeAttr: function() {
            return Q(this, ua, arguments)
        },append: function() {
            return Q(this, r, arguments)
        },before: function() {
            return Ha(this, za, arguments)
        },after: function() {
            return Ha(this, Aa, arguments)
        },remove: function() {
            return Q(this, Ba, arguments)
        }};
    function gb(a, b, c, d, e) {
        B(c) && (e = c, c = O);
        B(d) && !e && (e = d, d = O);
        d && (d = hb[d]);
        c = {duration: c,ease: d,onComplete: e};
        if (ib)
            b = new jb(a, b, c);
        else {
            d = C.Tweener;
            e = a.style;
            var f;
            a = xa(a);
            var g, m, u = {};
            for (f in b)
                g = da(b[f]), m = a.getPropertyValue(f), m = !m || "none" == m ? 0 : 1 * da(m)[2], u[f] = {from: m,to: 1 * g[2] || 0,prefix: g[1],suffix: g[3]};
            b = new d(e, u, c)
        }
        this.n.push(b)
    }
    var jb = C.Animation || {}, ib = jb.support, hb = {};
    ib && C.cssease ? hb = C.cssease : C.ease && (hb = C.ease);
    Xa.animate = function() {
        this.n || (this.n = []);
        return Q(this, gb, arguments)
    };
    Xa.stop = function(a, b) {
        a = this;
        if (a.n) {
            for (b = a.n.length; b--; )
                a.n[b].stop();
            a.n = O
        }
        return a
    };
    C.HashQuery = P(p, {typeCast: function(a) {
            var b = ga(a);
            return a == b && (a = a.match("^[\"'](.*)[\"']$")) ? a[1] : b
        },makeHash: function(a) {
            var b = "#" + a.mode;
            a = a.vars;
            var c = "?", d;
            for (d in a)
                b += c + d + "=" + ca(a[d]), c = "&";
            return encodeURI(b)
        },setHash: function(a) {
            location.hash = this.makeHash(a)
        },parseHash: function(a) {
            var b = decodeURIComponent(a).split("#")[1], c, d, e;
            if (!b)
                return l;
            b = b.split("?");
            a = b[0];
            if (b[1]) {
                c = {};
                b = b[1].split("&");
                for (e = b.length; e--; )
                    b[e] && (d = b[e].split("="), c[d[0]] = this.typeCast(d[1]))
            }
            return {mode: a,vars: c}
        },
        getHash: function() {
            return this.parseHash(location.hash)
        }});
    Ta = P(function(a) {
        var b = this, c = a.autoplay, d = a.loop, e, f = a.el || R;
        a.preload = "auto";
        a.autoplay = a.loop = l;
        switch (a.type) {
            case "Audio":
                e = C.Audio(a);
                break;
            default:
                e = C.Video(a)
        }
        if (b.a = e) {
            if (c) {
                var g;
                g = b.contract(e, "canplay", function() {
                    b.uncontract(g);
                    b.play()
                })
            }
            d && b.loop(q);
            a.oncanplay && b.contract(e, "canplay", a.oncanplay);
            a.onended && b.contract(e, "ended", a.onended);
            r(f, e)
        }
    }, {disposeInternal: function() {
            Ba(this.a)
        },getElement: h("a"),getCurrent: function() {
            return this.a.currentTime
        },getDuration: function() {
            return this.a.duration
        },
        setCurrent: function(a) {
            this.a.currentTime = a
        },loop: function(a, b) {
            b = this;
            b.s && (b.uncontract(b.s), delete b.s);
            a && (b.s = b.contract(b.a, "ended", function() {
                b.stop();
                b.play()
            }))
        },play: function() {
            this.a.play()
        },pause: function() {
            this.a.pause()
        },stop: function() {
            this.setCurrent(0);
            this.pause()
        }});
    C.Audio = function(a) {
        a.type = "audio";
        a.suffix = C.Audio.support;
        return Ia(a)
    };
    C.Audio.support = Ja("Audio", [["mp3", "mpeg"], ["wav", "wav"], ["ogg", "ogg"], ["m4a", "mp4"]]);
    C.Sound = function(a) {
        a.type = "Audio";
        return new Ta(a)
    };
    C.Sound.support = C.Audio.support;
    C.Video = function(a) {
        a.type = "video";
        a.suffix = C.Video.support;
        return Ia(a)
    };
    C.Video.support = Ja("Video", [["webm", "webm"], ["mp4", "mp4"], ["ogv", "ogg"]]);
    C.Movie = function(a) {
        a.type = "Video";
        return new Ta(a)
    };
    C.Movie.support = C.Video.support;
    C.Ajax = P(function(a) {
        a && this.request(a)
    }, {request: function(a) {
            var b = a.url, c = a.callback || F, d = a.error || F, e = a.type || "GET", f = n, g = this.ta = new XMLHttpRequest;
            if ("json" == a.dataType)
                return delete a.dataType, this.json(a);
            a.cash || (a.query || (a.query = {}), a.query["cir" + v()] = "0");
            a.query && (f = a.query, ja(f) && (f = encodeURI(ia(f))));
            g.onreadystatechange = function() {
                if (4 == g.readyState) {
                    if (200 == g.status)
                        return c(g.responseText, g);
                    d(g)
                }
            };
            "GET" == e && (b = -1 != b.indexOf("?") ? b + "&" : b + "?", b += f, f = n);
            g.open(e, b);
            "POST" == e && g.setRequestHeader("Content-Type",
            "application/x-www-form-urlencoded");
            g.send(f)
        },abort: function() {
            this.ta && this.ta.abort()
        },json: function(a) {
            var b = a.callback, c = a.error;
            a.callback = function(a) {
                b(s(a))
            };
            a.error = function(a) {
                c && c(a)
            };
            this.request(a)
        }});
    La = C.Async = P(function(a, b, c) {
        b = this;
        c = a.waits;
        D(c) && (c = c.length);
        b.T = c;
        b.k = a.callback;
        b.ha = a.onprogress || F;
        b.i = []
    }, {F: 0,L: 0,v: 0,I: function(a, b, c) {
            b = this;
            E(a) && b.i.push(a);
            b.v = b.F / b.T;
            1 < b.v && (b.v = 1);
            b.ha(b.v);
            b.L && (c = Error("miss"));
            if (b.F == b.T || b.L)
                b.k(c, b.i), b.k = b.ha = F
        },getProgress: h("v"),pass: function(a) {
            this.F++;
            this.I(a)
        },miss: function(a) {
            this.L++;
            this.I(a)
        },exit: function(a, b) {
            b = this;
            b.F = b.T;
            b.I(a)
        }});
    C.Handle = P(function(a) {
        this.b = a;
        this.attach()
    }, {disposeInternal: function() {
            this.detach()
        },attach: function() {
            this.h(L)
        },detach: function() {
            this.h(M)
        },h: function(a) {
            var b, c = this.b, d = c.events;
            for (b in d)
                a(c.el, b, d[b])
        }});
    C.Brush = P(function(a, b) {
        b = this;
        b.A = a.canvas;
        b.Da = b.A.getContext("2d");
        b.setSize(a)
    }, {setSize: function(a) {
            a.width && (this.A.width = a.width);
            a.height && (this.A.height = a.height)
        },pigment: function(a) {
            var b = k("canvas"), c = k("img");
            c.onload = function() {
                b.width = a.width;
                b.height = a.height;
                b.getContext("2d").drawImage(c, 0, 0);
                a.onload(b, c)
            };
            c.src = a.src;
            return {image: b,x: a.x || 0,y: a.y || 0}
        },pigments: function(a, b) {
            function c(a) {
                var c = a.onload || F;
                a.onload = function(a, d) {
                    c(a, d);
                    f--;
                    0 == f && b(g)
                };
                g[e] = d.pigment(a);
                f++
            }
            var d =
            this, e, f = 0, g = {};
            b = b || F;
            for (e in a)
                c(a[e]);
            return g
        },draw: function(a) {
            var b = 0, c = a.length, d = this.Da, e = this.A;
            for (d.clearRect(0, 0, e.width, e.height); b < c; b++)
                e = a[b], d.drawImage(e.image, e.x, e.y)
        }}, !!t.HTMLCanvasElement);
    C.Datetime = function(a) {
        return a && !A(a) ? (a = a.split(/[T:\-\+\/\s]/), 3 == a.length && a.push(0, 0, 0), new Date(1 * a[0], a[1] - 1, 1 * a[2], 1 * a[3], 1 * a[4], 1 * a[5])) : new Date(a)
    };
    C.Rollover = P(function(a, b) {
        b = this;
        var c = a.toggleClass || n, d = a.over || F, e = a.out || F;
        b.d = a.els;
        b.Pa = function() {
            J(b, c);
            d()
        };
        b.qa = function() {
            K(b, c);
            e()
        };
        a.manual || b.attach()
    }, {disposeInternal: function() {
            this.detach()
        },attach: function() {
            this.h(L)
        },detach: function() {
            this.h(M)
        },h: function(a, b, c) {
            b = this;
            for (c = b.d.length; c--; )
                a(b.d[c], V.SWITCHOVER, b.Pa), a(b.d[c], V.SWITCHOUT, b.qa), a(b.d[c], V.MOUSEOUT, b.qa)
        }});
    C.DataStore = P(function() {
        this.l = {}
    }, {set: function(a, b) {
            this.l[a] = b
        },get: function(a) {
            var b = {}, c = this.l, d;
            if (a)
                return c[a];
            for (d in c)
                b[d] = c[d];
            return b
        },remove: function(a) {
            E(this.l[a]) && delete this.l[a]
        },reset: function() {
            this.l = {}
        }});
    Ua = P(function(a) {
        this.o = a.namespace ? a.namespace + "-" : n;
        this.r = t[a.type + "Storage"]
    }, {set: function(a, b) {
            this.r.setItem(this.o + a, ca(b))
        },get: function(a, b) {
            b = this;
            var c = {}, d, e = b.r;
            if (a)
                return s(e.getItem(b.o + a));
            for (d in e)
                b.o ? (a = d.split(b.o)[1]) && (c[a] = s(e[d])) : c[d] = s(e[d]);
            return c
        },remove: function(a, b) {
            b = this;
            a = b.o + a;
            E(b.r.getItem(a)) && b.r.removeItem(a)
        },reset: function(a, b) {
            a = this;
            if (!a.o)
                return a.r.clear();
            for (b in a.r)
                a.remove(b)
        }});
    C.LocalStorage = function(a) {
        a = a || {};
        a.type = "local";
        return new Ua(a)
    };
    C.SessionStorage = function(a) {
        a = a || {};
        a.type = "session";
        return new Ua(a)
    };
    C.Deferred = P(function() {
        this.w = []
    }, {isResolve: function() {
            return !this.w
        },resolve: function(a, b) {
            b = this;
            if (b.isResolve())
                return b;
            var c = b.w, d = c.length, e = 0;
            b.w = O;
            for (b.l = a; e < d; ++e)
                c[e](a);
            return b
        },done: function(a, b) {
            b = this;
            b.w ? b.w.push(a) : a(b.l);
            return b
        }});
    C.DragFlick = P(function(a, b) {
        b = this;
        b.c = [];
        a = (b.b = a) || S;
        a.manual || b.attach()
    }, {R: function(a) {
            return a.changedTouches ? a.changedTouches[0] : a
        },Aa: function(a) {
            var b = this, c, d, e = l;
            b.c.push(b.contract(a.el, V.SWITCHDOWN, function(a) {
                var g = b.R(a);
                c = g.pageX;
                d = g.pageY;
                e = q;
                oa(a)
            }), b.contract(t, V.SWITCHUP, function(f) {
                e && (f = b.R(f), a.callback({x: f.pageX - c,y: f.pageY - d}), e = l)
            }))
        },Fa: function(a) {
            this.Aa({el: a.el,callback: function(b) {
                    var c = a.boundary || 0, d = {change: l,top: l,right: l,bottom: l,left: l,amount: b};
                    Math.abs(b.x) >
                    c && (0 < b.x ? d.right = q : 0 > b.x && (d.left = q), d.change = q);
                    Math.abs(b.y) > c && (0 < b.y ? d.bottom = q : 0 > b.y && (d.top = q), d.change = q);
                    a.callback(d)
                }})
        },attach: function() {
            function a(a, c, d) {
                b.c.push(b.contract(a, c, function(a) {
                    d(b.R(a))
                }))
            }
            var b = this, c = this.b, d = c.el, e = c.start || F, f = c.move || F, g = c.end || F, m = l, u = 0, x = 0;
            c.direction && b.Fa({el: d,boundary: c.boundary,callback: c.direction});
            a(d, V.SWITCHDOWN, function(a) {
                m = q;
                u = a.pageX;
                x = a.pageY;
                e({e: a,move: {x: u,y: x}})
            });
            a(I, V.SWITCHMOVE, function(a) {
                m && f({e: a,move: {x: a.pageX - u,y: a.pageY -
                        x}})
            });
            a(I, V.SWITCHUP, function(a) {
                m && (g({e: a,move: {x: a.pageX - u,y: a.pageY - x}}), m = l)
            })
        },detach: function(a) {
            a = this;
            for (var b = a.c, c = b.length; c--; )
                a.uncontract(b[c]);
            a.c = []
        }});
    C.ExternalInterface = function(a) {
        a = a || S;
        return a.android ? new Qa(a) : new Sa
    };
    Qa = Ea(C.HashQuery, function(a) {
        this.b = a
    }, {call: function(a) {
            this.b.android[a.mode](this.makeHash(a))
        },addCallback: function(a, b, c) {
            c = this;
            c.b.externalObj[a] = function(a) {
                b(c.parseHash(a).vars)
            }
        },removeCallback: function(a) {
            delete this.b.externalObj[a]
        }});
    Sa = Ea(C.HashQuery, function() {
        this.t = {}
    }, {disposeInternal: function() {
            for (var a in this.t)
                this.removeCallback(a)
        },call: function(a) {
            this.setHash(a)
        },addCallback: function(a, b, c) {
            c = this;
            c.t[a] = function() {
                var d = c.getHash();
                d.mode == a && b(d.vars)
            };
            L(t, "hashchange", c.t[a])
        },removeCallback: function(a) {
            M(t, "hashchange", this.t[a]);
            delete this.t[a]
        }});
    C.Facebook = P(p, {shareURL: function(a) {
            return "https://www.facebook.com/dialog/feed?app_id=" + a.app_id + "&redirect_uri=" + a.redirect_uri + ia({link: a.link,picture: a.picture,name: a.name,caption: a.caption,description: a.description})
        }});
    C.FPS = P(function(a, b) {
        b = this;
        b.J = b.Q = a.criterion;
        b.fa = b.Y(b.J);
        b.Ja = a.enterframe;
        a.manual || b.start()
    }, {N: 0,La: 0,da: 0,disposeInternal: ea,getCriterion: h("J"),getSurver: h("Q"),getFrameTime: h("fa"),enter: function(a) {
            a = this;
            a.Ja({criterion: a.J,surver: a.Q})
        },start: function(a) {
            a = this;
            a.N = v();
            a.da = setInterval(a.D, a.fa, a)
        },D: function(a, b) {
            b = a.La = v();
            a.Q = a.Y(b - a.N);
            a.N = b;
            a.enter()
        },Y: function(a) {
            return Math.round(1E3 / a)
        },stop: function() {
            clearInterval(this.da)
        }});
    C.ImgLoad = P(function(a, b) {
        b = this;
        b.O = a.srcs;
        b.ba = [];
        b.c = [];
        b.Ba = new La({waits: b.O,onprogress: a.onprogress,callback: function() {
                for (var c = b.c.length; c--; )
                    b.uncontract(b.c[c]);
                b.c = [];
                (a.onload || F)(b.ba)
            }});
        a.manual || b.start()
    }, {start: function() {
            function a() {
                b.Ba.pass()
            }
            var b = this, c, d = b.O.length;
            if (!b.Oa)
                for (b.Oa = q; d--; )
                    c = k("img"), c.src = b.O[d], b.c.push(b.contract(c, V.LOAD, a)), b.ba.push(c)
        }});
    C.WindowLoad = P(function(a) {
        a && this.Ma(a.onload)
    }, {Ma: function(a, b, c) {
            b = this;
            c = b.contract(t, V.LOAD, function() {
                b.uncontract(c);
                a()
            })
        }});
    Va = C.Mobile = P(p, {getZoom: function() {
            return R.clientWidth / t.innerWidth
        },isAndroid: function(a) {
            return G(/Android/i, a)
        },isIOS: function(a) {
            return G(/iPhone|iPad|iPod/i, a)
        },isWindows: function(a) {
            return G(/IEMobile/i, a)
        },isFBAPP: function(a) {
            return G(/FBAN/, a)
        },isMobile: function(a) {
            a = this;
            return a.isAndroid() || a.isIOS() || a.isWindows() || a.isFBAPP()
        },hideAddress: function() {
            function a() {
                0 == t.pageYOffset && fa()
            }
            function b() {
                setTimeout(a, 100)
            }
            this.contract(t, V.LOAD, b, l);
            this.contract(t, "orientationchange", b, l)
        }});
    C.mobile = new Va;
    var kb = t.navigator.userAgent.toLowerCase(), Z;
    Z = -1 != kb.indexOf("opera") ? "opera" : -1 != kb.indexOf("msie") ? "ie" : -1 != kb.indexOf("chrome") ? "chrome" : -1 != kb.indexOf("safari") ? "safari" : -1 != kb.indexOf("gecko") ? "gecko" : "ather";
    Wa = C.PC = P(p, {isChrome: function() {
            return "chrome" == Z
        },isSafari: function() {
            return "safari" == Z
        },isGecko: function() {
            return "gecko" == Z
        },isOpera: function() {
            return "opera" == Z
        },isIE: function() {
            return "ie" == Z
        }});
    C.pc = new Wa;
    C.Orientation = P(function(a, b) {
        b = this;
        b.b = a;
        b.c = [];
        b.ia = {portrait: q,landscape: l};
        b.aa = {portrait: l,landscape: q};
        b.attach()
    }, {get: function(a) {
            a = this;
            return A(t.orientation) ? 90 != Math.abs(t.orientation) ? a.ia : a.aa : t.innerWidth < t.innerHeight ? a.ia : a.aa
        },fire: function(a) {
            a = this;
            if (a.get().portrait)
                return a.b.portrait();
            a.b.landscape()
        },attach: function(a, b) {
            b = this;
            var c = H(b, b.fire);
            b.c.push(b.contract(t, V.LOAD, c), b.contract(t, "orientationchange", c), b.contract(t, V.RESIZE, c))
        },detach: function(a) {
            a = this;
            for (var b =
            a.c.length; b--; )
                a.uncontract(a.c[b]);
            a.c = []
        }}, "onorientationchange" in t);
    C.Modal = P(function(a, b, c) {
        b = this;
        a = a || S;
        b.b = a;
        c = {display: "none",position: "absolute"};
        b.la = new C.Scroll;
        b.c = [];
        b.j = k("div", {"class": "cir-modal-bg"});
        N(b.j, y({"z-ndex": 9998,top: 0,left: 0,width: "100%",height: "300%"}, c));
        r(R, b.j);
        b.g = k("div", {"class": "cir-modal-content"});
        N(b.g, y({"z-index": 9999,top: "50%",left: "50%"}, c));
        r(R, b.g);
        a.manual || b.open()
    }, {W: function(a) {
            a = this;
            for (var b = a.c.length; b--; )
                a.uncontract(a.c[b]);
            a.c = []
        },disposeInternal: function(a) {
            a = this;
            a.close();
            Ba(a.j);
            Ba(a.g)
        },open: function(a,
        b) {
            b = this;
            b.la.kill();
            N(b.j, {top: R.scrollTop});
            va(b.j);
            b.inner(a)
        },close: function(a) {
            a = this;
            a.W();
            Ca(a.g, n);
            wa(a.g);
            wa(a.j);
            a.la.revival()
        },inner: function(a, b, c, d) {
            b = this;
            b.W();
            a = a || b.b.html;
            Ca(b.g, a);
            va(b.g);
            c = xa(b.g);
            N(b.g, {"margin-top": R.scrollTop - da(c.height)[2] / 2,"margin-left": -(da(c.width)[2] / 2)});
            b.b.bgClose && b.contract(b.j, V.CLICK, H(b, b.close));
            if (b.b.closeSelector) {
                d = qa(b.b.closeSelector, b.g);
                for (i = d.length; i--; )
                    b.c.push(b.contract(d[i], V.CLICK, H(b, b.close)))
            }
        }});
    Ma = P(function(a) {
        this.b = a;
        this.attach()
    }, {attach: function(a) {
            a = this;
            a.detach();
            a.Ca = a.contract(t, a.b.e, a.b.callback)
        },detach: function() {
            this.uncontract(this.Ca)
        }});
    C.DeviceOrientation = function(a) {
        a.e = "deviceorientation";
        return Ma(a)
    };
    C.DeviceOrientation.support = "ondeviceorientation" in t;
    C.DeviceMotion = function(a) {
        a.e = "devicemotion";
        return Ma(a)
    };
    C.DeviceMotion.support = "ondevicemotion" in t;
    var lb, mb;
    C.DeviceOrientation.support ? (lb = C.DeviceOrientation, mb = function(a) {
        return a
    }) : C.DeviceMotion.support && (lb = C.DeviceMotion, mb = function(a) {
        return a.rotationRate
    });
    C.DeviceShake = P(function(a, b) {
        b = this;
        b.na = new lb;
        b.b = a;
        b.attach()
    }, {Ua: {x: "gamma",y: "beta",z: "alpha"},attach: function() {
            var a, b = this.b, c = this.Ua[b.direction];
            this.na.attach(function(d) {
                d = mb(d);
                a || (a = d);
                Math.abs(d[c] - a[c]) > b.limit && (a = O, b.callback(d), setTimeout(function() {
                }, b.waittime))
            })
        },detach: function() {
            this.na.detach()
        }}, lb ? q : l);
    C.FontImg = P(function(a) {
        a = a || S;
        this.Ra = a.type ? a.type + "_" : n;
        this.Qa = a.tag || "span"
    }, {make: function(a) {
            a = (n + a).split(n);
            for (var b = this.Qa, c = n, d = a.length; d--; )
                c = "<" + b + ' class="font_' + this.Ra + a[d] + '"></' + b + ">" + c;
            return c
        }});
    C.Observer = P(function() {
        this.M = {}
    }, {on: function(a, b, c, d) {
            d = this.M;
            d[a] || (d[a] = []);
            d[a].push(b)
        },one: function(a, b, c) {
            function d(e) {
                b(e);
                c.off(a, d)
            }
            c = this;
            c.on(a, d)
        },off: function(a, b) {
            var c = this.M, d = c[a], e;
            if (!b)
                return delete c[a];
            if (d)
                for (e = d.length; e--; )
                    if (b == d[e])
                        return d.splice(e, 1), 0 == d.length && delete c[a], q;
            return l
        },fire: function(a, b) {
            var c = this.M[a], d, e;
            if (c)
                for (e = c.length; e--; )
                    (d = c[e]) && d(b)
        }});
    C.PreRender = P(function(a, b) {
        b = this;
        b.d = a.els;
        b.Z = a.guesslimit || 30;
        b.Na = a.onrendered;
        b.ea = a.looptime || 100;
        b.Ka = b.ea + (a.loopblur || 20);
        a.manual || b.start()
    }, {disposeInternal: function() {
            clearInterval(this.s)
        },start: function() {
            var a, b = this, c = v();
            for (a = b.d.length; a--; )
                va(b.d[a]);
            b.s = setInterval(function() {
                var a = v(), e = a - c;
                c = a;
                if (e < b.Ka && (b.Z--, 1 > b.Z)) {
                    clearInterval(b.s);
                    for (a = b.d.length; a--; )
                        wa(b.d[a]);
                    b.Na()
                }
            }, b.ea, b)
        }});
    C.Route = P(function(a) {
        this.b = a;
        a.manual || this.start()
    }, {start: function() {
            this.fire(this.b.target)
        },fire: function(a) {
            var b, c = this.b, d = c.action;
            if (c.noregex && d[a])
                return d[a](a);
            for (b in d)
                if (a.match(b))
                    d[b](b)
        }});
    C.ScriptLoad = P(function(a) {
        this.d = [];
        a && this.requests(a)
    }, {requests: function(a, b) {
            for (var c = this, d = 0, e = a.length, f = new La({waits: a,callback: function() {
                    b(c.d)
                }}), g; d < e; d++)
                g = a[d].callback, a[d].callback = function(a) {
                    g(a);
                    f.pass()
                }, c.request(a[d])
        },request: function(a) {
            var b = this, c = k("script"), d;
            c.src = a.src;
            r(R, c);
            b.d.push(c);
            a.callback && (d = b.contract(c, V.LOAD, function() {
                b.uncontract(d);
                a.callback.apply(this, arguments)
            }))
        }});
    function $(a) {
        return nb ? qb.getResponseHeader(a) : l
    }
    function rb(a) {
        var b = new XMLHttpRequest;
        b.onload = function() {
            a(b)
        };
        b.open("HEAD", location.href + "?update" + v() + "=1");
        b.send(O);
        return b
    }
    var qb, nb = l;
    C.ServerMeta = P(function(a) {
        a = a || S;
        var b = a.callback || F;
        qb ? b(qb) : qb = rb(function() {
            nb = q;
            b(qb)
        })
    }, {date: function(a) {
            return rb(function(b) {
                a(b.getResponseHeader("Date"))
            })
        },connection: function() {
            return $("Connection")
        },contentLength: function() {
            return $("Content-Length")
        },lastModified: function() {
            return $("Last-Modified")
        },server: function() {
            return $("Server")
        },contentType: function() {
            return $("Content-Type")
        },acceptRanges: function() {
            return $("Accept-Ranges")
        },keepAlive: function() {
            return $("Keep-Alive")
        }});
    C.Surrogate = P(function(a) {
        this.Ea = a.delay;
        this.k = a.callback
    }, {disposeInternal: function() {
            this.clear()
        },request: function(a, b) {
            b = this;
            b.i = a;
            b.clear();
            b.S = setTimeout(b.flush, b.Ea, b)
        },flush: function(a) {
            a = a || this;
            a.k(a.i)
        },clear: function() {
            clearInterval(this.S)
        }});
    C.Throttle = P(function(a) {
        this.Sa = a.waittime;
        this.k = a.callback
    }, {disposeInternal: function() {
            this.unlock()
        },request: function(a, b) {
            b = this;
            b.ca ? b.i = a : (b.k(a), b.lock(), b.S = setTimeout(function() {
                b.i && (b.k(b.i), b.i = O);
                b.unlock()
            }, b.Sa, b))
        },lock: function() {
            this.ca = q
        },unlock: function(a) {
            a = a || this;
            a.ca = l;
            clearInterval(a.S)
        }});
    C.Timer = function(a) {
        function b() {
            ka = v();
            var a = f - (ka - Oa) / 1E3;
            0 > a && (a = 0);
            Ra = c(a);
            u(Ra);
            ka > Pa ? (ob.stop(), x()) : pb = setTimeout(b, m)
        }
        function c(a) {
            var b;
            b = (n + a).split(".");
            a = b[0];
            b = b[1] ? b[1] : n;
            a = d({xa: a,va: Na.Xa});
            b = d({xa: b,va: Na.Wa,Ya: q});
            return a + "." + b
        }
        function d(a) {
            var b = n + a.xa, c = a.va, d = c - b.length;
            return !a.Ya ? -1 < d ? e(d, 0) + b : e(c, 9) : 0 < d ? b + e(d, 0) : b.slice(0, c)
        }
        function e(a, b) {
            var c = n;
            for (b = n + b; 0 < a; )
                c += b, a--;
            return c
        }
        var f = a.limit, g = 1E3 * f, m = 1E3 * a.interval, u = a.onupdate, x = a.ontimeup, Na;
        a = a.template.split(".");
        Na = {Xa: a[0].length,Wa: a[1].length};
        var Oa = 0, ka = 0, Pa = g, Ra = c(f), pb, ob = {getLimit: function() {
                return f
            },getTime: function() {
                return Ra
            },getProgress: function() {
                return 1 - (Pa - ka) / g
            },setUpdate: function(a) {
                u = a
            },setTimeup: function(a) {
                x = a
            },countDown: function() {
                ka = Oa = v();
                Pa = Oa + g;
                b()
            },stop: function() {
                clearInterval(pb)
            }};
        return ob
    };
    C.Twitter = P(p, {shareURL: function(a) {
            var b = a.name, c = a.hash, b = b ? " \u300c" + b + "\u300d" : n, c = c ? " " + c : n;
            return "https://twitter.com/intent/tweet?" + ia({url: a.redirect_uri,text: (a.caption || n) + b + c})
        }});
    C.XML = P(function(a) {
        this.a = k("div");
        Ca(this.a, a.data)
    }, {$: function(a) {
            return this.a.querySelector(a)
        },$$: function(a) {
            return qa(a, this.a)
        }});
    C.Model = P(function(a, b) {
        b = this;
        a = a || S;
        var c, d = a.defaults || b.defaults || {}, e = a.events || b.events;
        b.sa = a.validate || b.validate || {};
        b.m = a.store || b.store || new C.DataStore;
        b.u = new C.Observer;
        for (c in d)
            b.set(c, d[c]);
        for (c in e)
            b.on(c, e[c])
    }, {G: function(a, b, c, d) {
            d = this;
            d.u.fire(a, d.m.get());
            b && d.u.fire(a + ":" + b, c)
        },set: function(a, b, c) {
            c = this;
            if (c.sa[a] && !c.sa[a](a, b))
                return c.G("fail", a, b);
            c.ja = c.m.get();
            c.m.set(a, b);
            c.G(V.CHANGE, a, b)
        },prev: function(a) {
            return !a ? this.ja : this.ja[a]
        },get: function(a) {
            return this.m.get(a)
        },
        remove: function(a, b) {
            b = this;
            if (a) {
                var c = b.m.get(a), d = b.m.remove(a);
                b.G("remove", a, c);
                return d
            }
        },reset: function() {
            this.m.reset();
            this.G("reset")
        },on: function(a, b, c) {
            c = H(this, b);
            this.u.on(a, c);
            return c
        },off: function(a, b) {
            this.u.off(a, b)
        },fire: function(a, b) {
            return this.u.fire(a, b)
        }});
    C.View = P(function(a, b) {
        b = this;
        a = a ? pa(b, a) : pa(b, b, {});
        b.el = C.$(a.el || b.el || k("div"));
        b.attach();
        a.init && b.init()
    }, {disposeInternal: function() {
            this.h("off")
        },h: function(a, b, c, d, e, f) {
            b = this;
            f = b.events;
            for (c in f)
                for (d in e = "me" == c ? b.el : b.el.find(c), f[c])
                    e[a](d, b[f[c][d]])
        },attach: function() {
            this.h("on")
        },detach: function() {
            this.h("off")
        }});
    C.Validate = P(function(a, b) {
        b = this;
        a = a || {};
        b.$a = a.level;
        pa(b, b, a)
    }, {displayError: function(a, b) {
            b = "Validate Error:" + a + " is " + b + ".";
            switch (this.bb) {
                case "log":
                    return console.log(b), l;
                case "error":
                    throw Error(b);
                case "off":
                    return l;
                default:
                    return console.warn(b), l
            }
        },isObject: function(a, b) {
            if (ja(b))
                return q;
            this.displayError(a, "Object")
        },isNumber: function(a, b) {
            if (A(b))
                return q;
            this.displayError(a, "Number")
        },isString: function(a, b) {
            if (la(b))
                return q;
            this.displayError(a, "String")
        },isFunction: function(a, b) {
            if (B(b))
                return q;
            this.displayError(a, "Function")
        },isBoolean: function(a, b) {
            if (ma(b))
                return q;
            this.displayError(a, "Boolean")
        },isArray: function(a, b) {
            if (D(b))
                return q;
            this.displayError(a, "Array")
        }});
    C.validate = new C.Validate;
    C.Scroll = P(p, {disposeInternal: function() {
            this.revival();
            clearInterval(this.oa)
        },to: w,toTop: fa,toBottom: function() {
            w(I.height)
        },scrollY: function() {
            return t.pageYOffset !== p ? t.pageYOffset : (I.documentElement || R.parentNode || R).scrollTop
        },smooth: function(a, b, c, d) {
            c = this;
            b = b || F;
            c.pa || (c.pa = q, A(a) || (a = a.offsetTop), d = I.height - t.innerHeight, a > d && (a = d), c.V = c.scrollY(), c.oa = setInterval(function(d) {
                d = c.scrollY();
                d = 0.3 * (a - d) + d;
                if (1 > Math.abs(a - d) || c.V == d)
                    return w(a), clearInterval(c.oa), b(a), delete c.pa;
                c.V = d;
                w(d)
            },
            50))
        },kill: function(a) {
            a = this;
            a.C || (N(R, {overflow: "hidden"}), a.C = a.contract(I, V.TOUCHMOVE, oa))
        },revival: function(a) {
            a = this;
            a.C && (N(R, {overflow: "auto"}), a.uncontract(a.C), delete a.C)
        }});
    C.beer = function() {
        console.log("\n   \u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000,. -\u2010\uff1d=\uff64\uff64\n\u3000\u3000\u3000\u3000\u3000\u3000 \u3000\u3000\u3000\u3000\u3000\u3000 ,. =\uff1d=\uff64\uff64\u3000\uff4f \u3000 \u25cbo. \u3000i \u3000\u3000 \u3000\u3000 :::\u30c8\uff64\n\u3000\u3000\u3000\u3000\u3000\u3000 \u3000\u3000\u3000\u3000\u3000_,/ \u3000 \u3000 \u3000\uff40\u30fe\u00b4\u00b4`\u30fd\u3001\u3000\uff9f\u3000.\uff4c \u3000 \u3000\u3000 \u3000:::\uff84\uff64\uff3cYEAHHHHHHHHHHHHHHHHHHHH!\n\u3000\u3000\u3000\u3000\u3000 \u3000\u3000\u3000\u3000\u3000 // \u3000\u3000\u3000\u3000 .::::/\u3000\u3000:::::!=\uff1d=l\u3000\u3000\u3000\u3000\u3000 :::|\uff7d.\u3000',\n\u3000 \u3000 \u3000 \u3000 \u3000\u3000 \u3000 /./ \u3000 \u3000 \u3000 .::::/\u3000\u3000 ::::l\u3000\u3000\u3000 |\u3000 __ ..... _::::|} \u30fd l-\uff64\n  \u3000 \u3000 \u3000 \u3000 \u3000 ,\uff68\uff78 ,'..__ \u3000\u3000\u3000.::::/ \u3000\u3000 ::::l\u3000\u3000\u3000 :l '\u00b4\u3000\u3000\u3000\u3000\uff40)'\uff40\u30fd \u30fe;\uff3c\n\u3000\u3000\u3000\u3000\u3000 \u3000\uff0f::{\uff9e\u3000\u30fd\u3001 \uff40`\u4e36\uff64;/\u2010\u2010- \uff64::::l\u3000\u3000 \u3000 `'::\u252c\u2010--\uff1c_ \u3000 } ./;:::::\uff3c\n\u3000\u3000\u3000\u3000\u3000\uff0f::::::::!\u3000\u3000 ,\uff1e---\u2010'\uff9e\uff70- ...__)\uff72\u3000,.\u3000-\u2010\u2010-\uff64\uff84\uff64\u3000\u3000 |l::\u30fd \uff0f;';';';';::::\uff3c\n  \u3000 \u3000 \uff0f|::::::;';';'\uff3c\uff0f\uff5d\u3000\uff08\u30fd\u3001\u3000\u3000_/| \u3000 (\u00b4\u3000\u3000\u3000 _,.\uff68!::\u30fd. \u3000\u30fe\uff70'\u00b4;';';';';';';';';:: /\u30fd\u3001\n")
    };
    Xa && (Fa.prototype = Xa);
})();
