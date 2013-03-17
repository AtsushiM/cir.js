 /*! cir.js v0.8.15 | (c) 2013 Atsushi Mizoue. */(function() {
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
        return {ta: b,va: d,prefix: e,ra: f,sheet: m}
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
    function ia(a, b, c) {
        return a.split(b).join(c)
    }
    function ja(a, b, c, d) {
        b = c = n;
        for (d in a)
            a[d] && (c += b + d + "=" + encodeURIComponent(a[d]), b = "&");
        return c
    }
    function z(a, b) {
        return Object.prototype.toString.call(b) == "[object " + a + "]" ? q : l
    }
    function ka(a) {
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
    function na(a) {
        return z("Array", a)
    }
    function oa(a) {
        return a === p ? l : q
    }
    function pa() {
        return "ontouchstart" in t
    }
    function D() {
    }
    function qa(a) {
        a.preventDefault();
        return l
    }
    function E(a, b) {
        b = b || navigator.userAgent;
        return !!b.match(a)
    }
    function F(a, b) {
        return function() {
            return b.apply(a, arguments)
        }
    }
    function ra(a, b, c, d) {
        b = b || a;
        c = c || b;
        for (d in b)
            B(b[d]) && (c[d] = F(a, b[d]));
        y(a, c);
        return c
    }
    function ba(a) {
        return G.querySelector(a)
    }
    function sa(a, b, c, d) {
        c = b.querySelectorAll(a);
        d = [];
        d.push.apply(d, c);
        return d
    }
    function H(a, b, c, d, e) {
        d = (c = a.className) ? c.split(" ") : [];
        for (e = d.length; e--; )
            if (b == d[e])
                return q;
        return l
    }
    function I(a, b, c, d) {
        H(a, b) || (c = n, (d = a.className) && (c = " "), a.className = d + c + b)
    }
    function J(a, b, c, d, e) {
        if (H(a, b)) {
            d = [];
            c = a.className.split(" ");
            for (e = c.length; e--; )
                b != c[e] && d.push(c[e]);
            a.className = d.join(" ")
        }
    }
    function ta(a, b) {
        if (H(a, b))
            return J(a, b);
        I(a, b)
    }
    function ua(a, b, c, d) {
        if (ka(b)) {
            for (d in b)
                a.setAttribute(d, b[d]);
            return q
        }
        return c || c == n ? a.setAttribute(b, c) : a.getAttribute(b)
    }
    function va(a, b) {
        a.removeAttribute(b)
    }
    function k(a, b, c) {
        c = G.createElement(a);
        b && ua(c, b);
        return c
    }
    function K(a, b, c) {
        a.addEventListener(b, c, l)
    }
    function L(a, b, c) {
        a.removeEventListener(b, c, l)
    }
    function M(a) {
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
        return G.defaultView.getComputedStyle(a, O)
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
            a[b] && c[c.length - 1] != a[b] && c.push(a[b]), a.N && a.N.prototype ? a = a.N.prototype : d = q;
        return c
    }
    function Ea(a, b, c, d) {
        a = C.klass({extend: a,init: b,prop: c});
        oa(d) && (a.support = d);
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
    var t = window, G = document, R = G.body, q = !0, l = !1, O = null, n = "", S = {}, p = void 0, T = pa(), U, Ka = j("0.19,1,0.22,1"), V = 1.70158, La, Pa, Ra, Sa, W, Ta, Ua, Va;
    C = {};
    Date.now || (Date.now = function() {
        return 1 * new Date
    });
    C.util = {win: t,doc: G,pageTop: fa,override: y,replaceAll: ia,template: function(a, b, c) {
            for (c in b)
                a = ia(a, "<%= " + c + " %>", b[c]);
            return a
        },windowOpen: function(a, b, c, d, e) {
            e = [];
            for (d in c)
                ma(c[d]) && (c[d] === q ? c[d] = "yes" : c[d] === l && (c[d] = "no")), e.push(d + "=" + c[d]);
            return t.open(a, b, e.join(","))
        },typeCast: ga,makeQueryString: ja,parseQueryString: function(a, b, c, d, e) {
            a = a.replace(/^[\#\?]/, n);
            b = a.split("&");
            c = b.length;
            for (e = {}; c--; )
                d = b[c].split("="), e[d[0]] = ga(decodeURIComponent(d[1]));
            return e
        },is: z,isObject: ka,isNumber: A,
        isString: la,isFunction: B,isBoolean: ma,isArray: na,isDefined: oa,isTouchable: pa,nullFunction: D,eventPrevent: qa,eventStop: function(a) {
            a.stopPropagation();
            return l
        },checkUserAgent: E,proxy: F,owner: ra};
    C.dom = {$: ba,$$: function(a) {
            return sa(a, G)
        },$child: function(a, b) {
            return b.querySelector(a)
        },$$child: sa,$id: function(a) {
            return G.getElementById(a)
        },on: K,off: L,create: k,show: M,hide: wa,hasClass: H,addClass: I,removeClass: J,toggleClass: ta,css: N,computedStyle: xa,append: r,parent: ya,before: za,after: Aa,remove: Ba,attr: ua,removeAttr: va,html: Ca,reflow: function(a) {
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
        a.prototype.N = b
    };
    C.Base = Ea(p, function() {
        this.I = {}
    }, {Da: 0,dispose: function(a) {
            a = this;
            for (var b = Da(a, "disposeInternal"), c = 0, d = a.I; c < b.length; c++)
                b[c].call(a);
            for (c in d)
                L.apply(O, d[c]);
            for (c in a)
                (d = a[c]) && B(d.dispose) && d.dispose();
            a.__proto__ = O;
            for (c in a)
                a[c] = O, delete a[c];
            return O
        },contract: function(a, b, c) {
            var d = ++this.Da;
            K(a, b, c);
            this.I[d] = [a, b, c];
            return d
        },uncontract: function(a) {
            if (a) {
                var b = this.I, c = b[a];
                delete b[a];
                L(c[0], c[1], c[2])
            }
        }});
    U = P(p, {SWITCHCLICK: T ? "touchstart" : "click",SWITCHDOWN: T ? "touchstart" : "mousedown",SWITCHMOVE: T ? "touchmove" : "mousemove",SWITCHUP: T ? "touchend" : "mouseup",SWITCHOVER: T ? "touchstart" : "mouseover",SWITCHOUT: T ? "touchend" : "mouseout",LOAD: "load",CHANGE: "change",CLICK: "click",MOUSEDOWN: "mousedown",MOUSEMOVE: "mousemove",MOUSEUP: "mouseup",MOUSEOVER: "mouseover",MOUSEOUT: "mouseout",TOUCHSTART: "touchstart",TOUCHMOVE: "touchmove",TOUCHEND: "touchend",RESIZE: "resize"});
    C.Event = U;
    U = C.e = new U;
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
            return c * (a /= d) * a * ((V + 1) * a - V) + b
        },outBack: function(a, b, c, d) {
            return c * ((a = a / d - 1) * a * ((V + 1) * a + V) + 1) + b
        },inOutBack: function(a, b, c, d) {
            return 1 > (a /= d / 2) ? c / 2 * a * a * (((V *= 1.525) + 1) * a - V) + b : c / 2 * ((a -= 2) * a * (((V *= 1.525) + 1) * a + V) + 2) + b
        }};
    C.cssease = {linear: "linear",inCubic: j("0.55,0.055,0.675,0.19"),outCubic: j("0.215,0.61,0.355,1"),inOutCubic: j("0.645,0.045,0.355,1"),inQuart: j("0.895,0.03,0.685,0.22"),outQuart: j("0.165,0.84,0.44,1"),inOutQuart: j("0.77,0,0.175,1"),inQuint: j("0.755,0.05,0.855,0.06"),outQuint: j("0.23,1,0.32,1"),inOutQuint: j("0.86,0,0.07,1"),inSine: j("0.47,0,0.745,0.715"),outSine: j("0.39,0.575,0.565,1"),inOutSine: j("0.445,0.05,0.55,0.95"),inExpo: j("0.95,0.05,0.795,0.035"),outExpo: j("0.19,1,0.22,1"),inOutExpo: j("1,0,0,1"),
        inCirc: j("0.6,0.04,0.98,0.335"),outCirc: j("0.075,0.82,0.165,1"),inOutCirc: j("0.785,0.135,0.15,0.86"),inQuad: j("0.55,0.085,0.68,0.53"),outQuad: j("0.25,0.46,0.45,0.94"),inOutQuad: j("0.455,0.03,0.515,0.955"),inBack: [j("0.6,0,0.735,0.045"), j("0.6,-0.28,0.735,0.045")],outBack: [j("0.175,0.885,0.32,1"), j("0.175,0.885,0.32,1.275")],inOutBack: [j("0.68,0,0.265,1"), j("0.68,-0.55,0.265,1.55")]};
    var Wa = aa(["animation", "webkitAnimation"], "Animation"), Xa = Wa.prefix, Ya = Wa.ra, Za = Wa.ta, X = Wa.sheet, $a = C.Animation = P(function(a, b, c, d) {
        d = this;
        c = c || S;
        d.p = c.onComplete || D;
        d.b = a;
        $a.id++;
        d.f = "ciranim" + $a.id;
        a = c.duration || $a.duration;
        var e = c.ease || Ka, f, g = {};
        for (f in b)
            g[f] = b[f], A(g[f]) && (g[f] += "px");
        d.Wa = g;
        g = ia(ia(ca(g), '"', n), ",", ";");
        X.insertRule("@" + Ya + "keyframes " + d.f + "{to" + g + "}", X.cssRules.length);
        na(e) || (e = [e]);
        b = d.f;
        f = 0;
        for (var g = e.length, m = n; f < g; f++)
            m += Ya + "animation:" + b + " " + a + "ms " + e[f] + " 0s 1 normal both;";
        X.insertRule("." + b + "{" + m + "}", X.cssRules.length);
        c.manual || d.start()
    }, {da: function() {
            var a = this.b, b = this.Fa;
            L(a, Za + "End", b);
            L(a, "animationend", b)
        },disposeInternal: ea,start: function() {
            function a(a) {
                var e = X.cssRules, f = e.length, g;
                b.da();
                if ("webkit" == Xa) {
                    for (; f--; )
                        g = e[f].name || (n + e[f].selectorText).split(".")[1], g == b.f && X.deleteRule(f);
                    J(c, b.f);
                    N(c, b.Wa)
                }
                b.p(a)
            }
            var b = this, c = b.b;
            b.Fa = a;
            K(c, Za + "End", a);
            K(c, "animationend", a);
            I(c, b.f)
        },stop: function() {
            var a = {};
            a[Ya + "animation-play-state"] = "paused";
            N(this.b,
            a);
            this.da()
        }}, Wa.va);
    $a.id = 0;
    $a.duration = 500;
    var ab = aa(["transitionProperty", "webkitTransitionProperty"], "Transition"), bb = ab.ra, cb = ab.ta, db = ab.sheet, Y;
    Y = C.Transition = P(function(a, b, c, d) {
        d = this;
        c = c || S;
        Y.id++;
        d.f = "cirtrans" + Y.id;
        var e = [];
        y({}, b);
        var f, g = c.duration || Y.duration, m = c.ease || Ka;
        na(m) || (m = [m]);
        for (f in b)
            e.push(f);
        f = 0;
        for (var u = m.length, x = n, x = x + (bb + "transition-property:" + e.join(" ") + ";" + bb + "transition-duration:" + g + "ms;"); f < u; f++)
            x += bb + "transition-timing-function:" + m[f] + ";";
        db.insertRule("." + d.f + "{" + x + "}", db.cssRules.length);
        d.b = a;
        d.q = b;
        d.p = c.onComplete || D;
        c.manual || d.start()
    }, {disposeInternal: ea,start: function() {
            var a = this;
            a.B = function(b) {
                a.stop();
                setTimeout(function() {
                    a.p(b)
                }, 1)
            };
            K(a.b, cb + "End", a.B);
            K(a.b, "transitionend", a.B);
            I(a.b, a.f);
            N(a.b, a.q)
        },stop: function(a) {
            a = this;
            var b = db.cssRules, c = b.length, d;
            L(a.b, cb + "End", a.B);
            L(a.b, "transitionend", a.B);
            for (J(a.b, a.f); c--; )
                if (d = b[c].name || (n + b[c].selectorText).split(".")[1], d == a.f) {
                    db.deleteRule(c);
                    break
                }
        }}, ab.va);
    Y.id = 0;
    Y.duration = 500;
    W = C.Tweener = P(function(a, b, c, d, e, f) {
        f = this;
        c = c || S;
        f.oa = a;
        f.q = [];
        for (d in b)
            e = b[d], e.name = d, e.Sa = e.to - e.from, e.prefix = e.prefix || n, e.suffix = e.suffix || "px", f.q.push(e);
        f.U = c.duration || W.duration;
        f.Ea = c.ease || f.wa;
        f.p = c.onComplete;
        c.manual || f.start()
    }, {disposeInternal: ea,wa: function(a, b, c, d) {
            return c * (-Math.pow(2, -10 * a / d) + 1) + b
        },ga: t.requestAnimationFrame ? function(a) {
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
            setTimeout(a, 1E3 / W.Za)
        },D: function() {
            for (var a = this, b = W.G, c, d = v(), e, f = b.length, g, m; f--; )
                if (c = b[f], g = c.q.length, e = d - c.Qa, e < c.U)
                    for (; g--; )
                        m = c.q[g], W.ia(c.oa, m, c.Ea(e, m.from, m.Sa, c.U));
                else {
                    for (; g--; )
                        m = c.q[g], W.ia(c.oa, m, m.to);
                    c.p && c.p();
                    b.splice(f, 1)
                }
            b.length ? a.ga(function() {
                a.D()
            }) : a.stop()
        },start: function() {
            var a = this;
            a.Qa = v();
            W.G.push(a);
            W.R || (W.R = 1, a.ga(function() {
                a.D()
            }))
        },
        stop: function() {
            W.G = [];
            clearInterval(W.R);
            W.R = O
        }});
    W.ia = function(a, b, c) {
        a[b.name] = b.prefix + c + b.suffix
    };
    W.G = [];
    W.fps = 30;
    W.duration = 500;
    C.$ = function(a, b, c, d, e) {
        c = "string" == typeof a ? (b || G).querySelectorAll(a) : [a];
        e = c.length;
        d = new Fa;
        for (d.length = e; e--; )
            d[e] = c[e];
        return d
    };
    var eb = C.$.ab = {querySelectorAll: function(a) {
            return this[0].querySelectorAll(a)
        },find: function(a) {
            return C.$(a, this)
        },parent: function() {
            return C.$(ya(this[0]))
        },on: function() {
            return Q(this, K, arguments)
        },off: function() {
            return Q(this, L, arguments)
        },show: function() {
            return Q(this, M)
        },hide: function() {
            return Q(this, wa)
        },hasClass: function() {
            return Ha(this, H, arguments)
        },addClass: function() {
            return Q(this, I, arguments)
        },removeClass: function() {
            return Q(this, J, arguments)
        },toggleClass: function() {
            return Q(this, ta,
            arguments)
        },css: function() {
            return Q(this, N, arguments)
        },html: function() {
            return Ha(this, Ca, arguments)
        },attr: function() {
            return Ha(this, ua, arguments)
        },removeAttr: function() {
            return Q(this, va, arguments)
        },append: function() {
            return Q(this, r, arguments)
        },before: function() {
            return Ha(this, za, arguments)
        },after: function() {
            return Ha(this, Aa, arguments)
        },remove: function() {
            return Q(this, Ba, arguments)
        }};
    function fb(a, b, c, d, e) {
        B(c) && (e = c, c = O);
        B(d) && !e && (e = d, d = O);
        d && (d = gb[d]);
        c = {duration: c,ease: d,onComplete: e};
        if (hb)
            b = new ib(a, b, c);
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
    var ib = C.Animation || {}, hb = ib.support, gb = {};
    hb && C.cssease ? gb = C.cssease : C.ease && (gb = C.ease);
    eb.animate = function() {
        this.n || (this.n = []);
        return Q(this, fb, arguments)
    };
    eb.stop = function(a) {
        a = this;
        if (a.n) {
            for (var b = a.n.length; b--; )
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
    Sa = P(function(a) {
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
        if (b.b = e) {
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
            Ba(this.b)
        },getElement: h("b"),getCurrent: function() {
            return this.b.currentTime
        },getDuration: function() {
            return this.b.duration
        },
        setCurrent: function(a) {
            this.b.currentTime = a
        },loop: function(a) {
            var b = this;
            b.r && (b.uncontract(b.r), delete b.r);
            a && (b.r = b.contract(b.b, "ended", function() {
                b.stop();
                b.play()
            }))
        },play: function() {
            this.b.play()
        },pause: function() {
            this.b.pause()
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
        return new Sa(a)
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
        return new Sa(a)
    };
    C.Movie.support = C.Video.support;
    C.Ajax = P(function(a) {
        a && this.request(a)
    }, {request: function(a) {
            var b = a.url, c = a.callback || D, d = a.error || D, e = a.type || "GET", f = n, g = this.qa = new XMLHttpRequest;
            if ("json" == a.dataType)
                return delete a.dataType, this.json(a);
            a.cash || (a.query || (a.query = {}), a.query["cir" + v()] = "0");
            a.query && (f = a.query, ka(f) && (f = encodeURI(ja(f))));
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
            this.qa && this.qa.abort()
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
    C.Handle = P(function(a) {
        this.a = a;
        this.attach()
    }, {disposeInternal: function() {
            this.detach()
        },attach: function() {
            this.h(K)
        },detach: function() {
            this.h(L)
        },h: function(a) {
            var b, c = this.a, d = c.events;
            for (b in d)
                a(c.el, b, d[b])
        }});
    C.Brush = P(function(a, b) {
        b = this;
        b.A = a.canvas;
        b.Aa = b.A.getContext("2d");
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
                var c = a.onload || D;
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
            b = b || D;
            for (e in a)
                c(a[e]);
            return g
        },draw: function(a) {
            var b = 0, c = a.length, d = this.Aa, e = this.A;
            for (d.clearRect(0, 0, e.width, e.height); b < c; b++)
                e = a[b], d.drawImage(e.image, e.x, e.y)
        }}, !!t.HTMLCanvasElement);
    C.Datetime = function(a) {
        return a && !A(a) ? (a = a.split(/[T:\-\+\/\s]/), 3 == a.length && a.push(0, 0, 0), new Date(1 * a[0], a[1] - 1, 1 * a[2], 1 * a[3], 1 * a[4], 1 * a[5])) : new Date(a)
    };
    C.Rollover = P(function(a, b) {
        b = this;
        var c = a.toggleClass || n, d = a.over || D, e = a.out || D;
        b.d = a.els;
        b.Ma = function() {
            I(b, c);
            d()
        };
        b.na = function() {
            J(b, c);
            e()
        };
        a.manual || b.attach()
    }, {disposeInternal: function() {
            this.detach()
        },attach: function() {
            this.h(K)
        },detach: function() {
            this.h(L)
        },h: function(a, b) {
            b = this;
            for (var c = b.d.length; c--; )
                a(b.d[c], U.SWITCHOVER, b.Ma), a(b.d[c], U.SWITCHOUT, b.na), a(b.d[c], U.MOUSEOUT, b.na)
        }});
    C.DataStore = P(function() {
        this.k = {}
    }, {set: function(a, b) {
            this.k[a] = b
        },get: function(a) {
            var b = {}, c = this.k, d;
            if (a)
                return c[a];
            for (d in c)
                b[d] = c[d];
            return b
        },remove: function(a) {
            oa(this.k[a]) && delete this.k[a]
        },reset: function() {
            this.k = {}
        }});
    Ta = P(function(a) {
        this.o = a.namespace ? a.namespace + "-" : n;
        this.i = t[a.type + "Storage"]
    }, {set: function(a, b) {
            this.i.setItem(this.o + a, ca(b))
        },get: function(a, b) {
            b = this;
            var c = {}, d;
            if (a)
                return s(b.i.getItem(b.o + a));
            for (d in b.i)
                b.o ? (a = d.split(b.o)[1]) && (c[a] = s(b.i[d])) : c[d] = s(b.i[d]);
            return c
        },remove: function(a, b) {
            b = this;
            a = b.o + a;
            oa(b.i.getItem(a)) && b.i.removeItem(a)
        },reset: function(a) {
            a = this;
            if (!a.o)
                return a.i.clear();
            for (var b in a.i)
                a.remove(b)
        }});
    C.LocalStorage = function(a) {
        a = a || {};
        a.type = "local";
        return new Ta(a)
    };
    C.SessionStorage = function(a) {
        a = a || {};
        a.type = "session";
        return new Ta(a)
    };
    C.Deferred = P(function() {
        this.v = []
    }, {isResolve: function() {
            return !this.v
        },resolve: function(a, b) {
            b = this;
            if (b.isResolve())
                return b;
            var c = b.v, d = c.length, e = 0;
            b.v = O;
            for (b.k = a; e < d; ++e)
                c[e](a);
            return b
        },done: function(a, b) {
            b = this;
            b.v ? b.v.push(a) : a(b.k);
            return b
        }});
    C.DragFlick = P(function(a, b) {
        b = this;
        b.c = [];
        a = (b.a = a) || S;
        a.manual || b.attach()
    }, {P: function(a) {
            return a.changedTouches ? a.changedTouches[0] : a
        },xa: function(a) {
            var b = this, c, d, e = l;
            b.c.push(b.contract(a.el, U.SWITCHDOWN, function(a) {
                var g = b.P(a);
                c = g.pageX;
                d = g.pageY;
                e = q;
                qa(a)
            }), b.contract(t, U.SWITCHUP, function(f) {
                e && (f = b.P(f), a.callback({x: f.pageX - c,y: f.pageY - d}), e = l)
            }))
        },Ca: function(a) {
            this.xa({el: a.el,callback: function(b) {
                    var c = a.boundary || 0, d = {change: l,top: l,right: l,bottom: l,left: l,amount: b};
                    Math.abs(b.x) >
                    c && (0 < b.x ? d.right = q : 0 > b.x && (d.left = q), d.change = q);
                    Math.abs(b.y) > c && (0 < b.y ? d.bottom = q : 0 > b.y && (d.top = q), d.change = q);
                    a.callback(d)
                }})
        },attach: function() {
            function a(a, c, d) {
                b.c.push(b.contract(a, c, function(a) {
                    d(b.P(a))
                }))
            }
            var b = this, c = this.a, d = c.el, e = c.start || D, f = c.move || D, g = c.end || D, m = l, u = 0, x = 0;
            c.direction && b.Ca({el: d,boundary: c.boundary,callback: c.direction});
            a(d, U.SWITCHDOWN, function(a) {
                m = q;
                u = a.pageX;
                x = a.pageY;
                e({e: a,move: {x: u,y: x}})
            });
            a(G, U.SWITCHMOVE, function(a) {
                m && f({e: a,move: {x: a.pageX - u,y: a.pageY -
                        x}})
            });
            a(G, U.SWITCHUP, function(a) {
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
        return a.android ? new Pa(a) : new Ra
    };
    Pa = Ea(C.HashQuery, function(a) {
        this.a = a
    }, {call: function(a) {
            this.a.android[a.mode](this.makeHash(a))
        },addCallback: function(a, b) {
            var c = this;
            c.a.externalObj[a] = function(a) {
                b(c.parseHash(a).vars)
            }
        },removeCallback: function(a) {
            delete this.a.externalObj[a]
        }});
    Ra = Ea(C.HashQuery, function() {
        this.t = {}
    }, {disposeInternal: function() {
            for (var a in this.t)
                this.removeCallback(a)
        },call: function(a) {
            this.setHash(a)
        },addCallback: function(a, b) {
            var c = this;
            c.t[a] = function() {
                var d = c.getHash();
                d.mode == a && b(d.vars)
            };
            K(t, "hashchange", c.t[a])
        },removeCallback: function(a) {
            L(t, "hashchange", this.t[a]);
            delete this.t[a]
        }});
    C.Facebook = P(p, {shareURL: function(a) {
            return "https://www.facebook.com/dialog/feed?app_id=" + a.app_id + "&redirect_uri=" + a.redirect_uri + ja({link: a.link,picture: a.picture,name: a.name,caption: a.caption,description: a.description})
        }});
    C.FPS = P(function(a, b) {
        b = this;
        b.H = b.O = a.criterion;
        b.ca = b.V(b.H);
        b.Ga = a.enterframe;
        a.manual || b.start()
    }, {K: 0,Ja: 0,aa: 0,disposeInternal: ea,getCriterion: h("H"),getSurver: h("O"),getFrameTime: h("ca"),enter: function(a) {
            a = this;
            a.Ga({criterion: a.H,surver: a.O})
        },start: function(a) {
            a = this;
            a.K = v();
            a.aa = setInterval(a.D, a.ca, a)
        },D: function(a, b) {
            b = a.Ja = v();
            a.O = a.V(b - a.K);
            a.K = b;
            a.enter()
        },V: function(a) {
            return Math.round(1E3 / a)
        },stop: function() {
            clearInterval(this.aa)
        }});
    C.ImgLoad = P(function(a, b) {
        b = this;
        b.ma = a.srcs;
        b.M = b.ma.length;
        b.Y = [];
        b.c = [];
        b.J = a.onload || D;
        b.Ka = a.onprogress || D;
        a.manual || b.start()
    }, {Ha: 0,L: 0,za: function(a) {
            a = this;
            var b;
            b = ++a.Ha;
            a.L = b / a.M;
            a.Ka(a.L);
            if (b >= a.M) {
                for (b = a.c.length; b--; )
                    a.uncontract(a.c[b]);
                a.c = [];
                a.J(a.Y)
            }
        },start: function() {
            function a() {
                b.za()
            }
            var b = this, c, d = b.M;
            if (!b.Xa)
                for (b.Xa = q; d--; )
                    c = k("img"), c.src = b.ma[d], b.c.push(b.contract(c, U.LOAD, a)), b.Y.push(c)
        },getProgress: h("L")});
    C.WindowLoad = P(function(a) {
        a && this.J(a.onload)
    }, {J: function(a) {
            var b = this, c;
            c = b.contract(t, U.LOAD, function() {
                b.uncontract(c);
                a()
            })
        }});
    Ua = C.Mobile = P(p, {getZoom: function() {
            return R.clientWidth / t.innerWidth
        },isAndroid: function(a) {
            return E(/Android/i, a)
        },isIOS: function(a) {
            return E(/iPhone|iPad|iPod/i, a)
        },isWindows: function(a) {
            return E(/IEMobile/i, a)
        },isFBAPP: function(a) {
            return E(/FBAN/, a)
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
            this.contract(t, U.LOAD, b, l);
            this.contract(t, "orientationchange", b, l)
        }});
    C.mobile = new Ua;
    var jb = t.navigator.userAgent.toLowerCase(), Z;
    Z = -1 != jb.indexOf("opera") ? "opera" : -1 != jb.indexOf("msie") ? "ie" : -1 != jb.indexOf("chrome") ? "chrome" : -1 != jb.indexOf("safari") ? "safari" : -1 != jb.indexOf("gecko") ? "gecko" : "ather";
    Va = C.PC = P(p, {isChrome: function() {
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
    C.pc = new Va;
    C.Orientation = P(function(a, b) {
        b = this;
        b.a = a;
        b.c = [];
        b.ea = {portrait: q,landscape: l};
        b.X = {portrait: l,landscape: q};
        b.attach()
    }, {get: function(a) {
            a = this;
            return A(t.orientation) ? 90 != Math.abs(t.orientation) ? a.ea : a.X : t.innerWidth < t.innerHeight ? a.ea : a.X
        },fire: function(a) {
            a = this;
            if (a.get().portrait)
                return a.a.portrait();
            a.a.landscape()
        },attach: function(a, b) {
            b = this;
            var c = F(b, b.fire);
            b.c.push(b.contract(t, U.LOAD, c), b.contract(t, "orientationchange", c), b.contract(t, U.RESIZE, c))
        },detach: function(a) {
            a = this;
            for (var b =
            a.c.length; b--; )
                a.uncontract(a.c[b]);
            a.c = []
        }}, "onorientationchange" in t);
    C.Modal = P(function(a, b) {
        b = this;
        a = a || S;
        b.a = a;
        var c = {display: "none",position: "absolute"};
        b.ha = new C.Scroll;
        b.c = [];
        b.j = k("div", {"class": "cir-modal-bg"});
        N(b.j, y({"z-ndex": 9998,top: 0,left: 0,width: "100%",height: "300%"}, c));
        r(R, b.j);
        b.g = k("div", {"class": "cir-modal-content"});
        N(b.g, y({"z-index": 9999,top: "50%",left: "50%"}, c));
        r(R, b.g);
        a.manual || b.open()
    }, {T: function(a) {
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
            b.ha.kill();
            N(b.j, {top: R.scrollTop});
            M(b.j);
            b.inner(a)
        },close: function(a) {
            a = this;
            a.T();
            Ca(a.g, n);
            wa(a.g);
            wa(a.j);
            a.ha.revival()
        },inner: function(a, b) {
            b = this;
            b.T();
            a = a || b.a.html;
            Ca(b.g, a);
            M(b.g);
            var c = xa(b.g);
            N(b.g, {"margin-top": R.scrollTop - da(c.height)[2] / 2,"margin-left": -(da(c.width)[2] / 2)});
            b.a.bgClose && b.contract(b.j, U.CLICK, F(b, b.close));
            if (b.a.closeSelector)
                for (var c = sa(b.a.closeSelector, b.g), d = c.length; d--; )
                    b.c.push(b.contract(c[d], U.CLICK, F(b, b.close)))
        }});
    La = P(function(a) {
        this.a = a;
        this.attach()
    }, {attach: function(a) {
            a = this;
            a.detach();
            a.ya = a.contract(t, a.a.e, a.a.callback)
        },detach: function() {
            this.uncontract(this.ya)
        }});
    C.DeviceOrientation = function(a) {
        a.e = "deviceorientation";
        return La(a)
    };
    C.DeviceOrientation.support = "ondeviceorientation" in t;
    C.DeviceMotion = function(a) {
        a.e = "devicemotion";
        return La(a)
    };
    C.DeviceMotion.support = "ondevicemotion" in t;
    var kb, lb;
    C.DeviceOrientation.support ? (kb = C.DeviceOrientation, lb = function(a) {
        return a
    }) : C.DeviceMotion.support && (kb = C.DeviceMotion, lb = function(a) {
        return a.rotationRate
    });
    C.DeviceShake = P(function(a, b) {
        b = this;
        b.ja = new kb;
        b.a = a;
        b.attach()
    }, {Ra: {x: "gamma",y: "beta",z: "alpha"},attach: function() {
            var a, b = this.a, c = this.Ra[b.direction];
            this.ja.attach(function(d) {
                d = lb(d);
                a || (a = d);
                Math.abs(d[c] - a[c]) > b.limit && (a = O, b.callback(d), setTimeout(function() {
                }, b.waittime))
            })
        },detach: function() {
            this.ja.detach()
        }}, kb ? q : l);
    C.FontImg = P(function(a) {
        a = a || S;
        this.Oa = a.type ? a.type + "_" : n;
        this.Na = a.tag || "span"
    }, {make: function(a) {
            a = (n + a).split(n);
            for (var b = this.Na, c = n, d = a.length; d--; )
                c = "<" + b + ' class="font_' + this.Oa + a[d] + '"></' + b + ">" + c;
            return c
        }});
    C.Observer = P(function() {
        this.l = {}
    }, {on: function(a, b, c) {
            c = this;
            c.l[a] || (c.l[a] = []);
            c.l[a].push(b)
        },one: function(a, b) {
            function c(e) {
                b(e);
                d.off(a, c)
            }
            var d = this;
            d.on(a, c)
        },off: function(a, b, c) {
            c = this;
            if (!b)
                return delete c.l[a];
            var d = c.l[a], e;
            if (d)
                for (e = d.length; e--; )
                    if (b == d[e])
                        return d.splice(e, 1), 0 == d.length && delete c.l[a], q;
            return l
        },fire: function(a, b) {
            var c = this.l[a], d, e;
            if (c)
                for (e = c.length; e--; )
                    (d = c[e]) && d(b)
        }});
    C.PreRender = P(function(a, b) {
        b = this;
        b.d = a.els;
        b.W = a.guesslimit || 30;
        b.La = a.onrendered;
        b.ba = a.looptime || 100;
        b.Ia = b.ba + (a.loopblur || 20);
        a.manual || b.start()
    }, {disposeInternal: function() {
            clearInterval(this.r)
        },start: function() {
            var a, b = this, c = v();
            for (a = b.d.length; a--; )
                M(b.d[a]);
            b.r = setInterval(function() {
                var a = v(), e = a - c;
                c = a;
                if (e < b.Ia && (b.W--, 1 > b.W)) {
                    clearInterval(b.r);
                    for (a = b.d.length; a--; )
                        wa(b.d[a]);
                    b.La()
                }
            }, b.ba, b)
        }});
    C.Route = P(function(a) {
        this.a = a;
        a.manual || this.start()
    }, {start: function() {
            this.fire(this.a.target)
        },fire: function(a, b) {
            b = this;
            var c;
            if (b.a.noregex && b.a.action[a])
                return b.a.action[a](a);
            for (c in b.a.action)
                if (a.match(c))
                    b.a.action[c](c)
        }});
    C.ScriptLoad = P(function(a) {
        this.d = [];
        a && this.requests(a)
    }, {requests: function(a, b) {
            function c(c) {
                var f = a[c].callback;
                a[c].callback = function(a) {
                    f(a);
                    e--;
                    0 == e && b(d.d)
                };
                d.request(a[c])
            }
            for (var d = this, e = 0, f = a.length; e < f; e++)
                c(e)
        },request: function(a) {
            var b = this, c = k("script"), d;
            c.src = a.src;
            r(R, c);
            b.d.push(c);
            a.callback && (d = b.contract(c, U.LOAD, function() {
                b.uncontract(d);
                a.callback.apply(this, arguments)
            }))
        }});
    function $(a) {
        return mb ? pb.getResponseHeader(a) : l
    }
    function qb(a) {
        var b = new XMLHttpRequest;
        b.onload = function() {
            a(b)
        };
        b.open("HEAD", location.href + "?update" + v() + "=1");
        b.send(O);
        return b
    }
    var pb, mb = l;
    C.ServerMeta = P(function(a) {
        a = a || S;
        var b = a.callback || D;
        pb ? b(pb) : pb = qb(function() {
            mb = q;
            b(pb)
        })
    }, {date: function(a) {
            return qb(function(b) {
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
        this.Ba = a.delay;
        this.w = a.callback
    }, {disposeInternal: function() {
            this.clear()
        },request: function(a, b) {
            b = this;
            b.s = a;
            b.clear();
            b.Q = setTimeout(b.flush, b.Ba, b)
        },flush: function(a) {
            a = a || this;
            a.w(a.s)
        },clear: function() {
            clearInterval(this.Q)
        }});
    C.Throttle = P(function(a) {
        this.Pa = a.waittime;
        this.w = a.callback
    }, {disposeInternal: function() {
            this.unlock()
        },request: function(a) {
            var b = this;
            b.Z ? b.s = a : (b.w(a), b.lock(), b.Q = setTimeout(function() {
                b.s && (b.w(b.s), b.s = O);
                b.unlock()
            }, b.Pa, b))
        },lock: function() {
            this.Z = q
        },unlock: function(a) {
            a = a || this;
            a.Z = l;
            clearInterval(a.Q)
        }});
    C.Timer = function(a) {
        function b() {
            ha = v();
            var a = f - (ha - Na) / 1E3;
            0 > a && (a = 0);
            Qa = c(a);
            u(Qa);
            ha > Oa ? (nb.stop(), x()) : ob = setTimeout(b, m)
        }
        function c(a) {
            var b;
            b = (n + a).split(".");
            a = b[0];
            b = b[1] ? b[1] : n;
            a = d({ua: a,sa: Ma.Ua});
            b = d({ua: b,sa: Ma.Ta,Va: q});
            return a + "." + b
        }
        function d(a) {
            var b = n + a.ua, c = a.sa, d = c - b.length;
            return !a.Va ? -1 < d ? e(d, 0) + b : e(c, 9) : 0 < d ? b + e(d, 0) : b.slice(0, c)
        }
        function e(a, b) {
            var c = n;
            for (b = n + b; 0 < a; )
                c += b, a--;
            return c
        }
        var f = a.limit, g = 1E3 * f, m = 1E3 * a.interval, u = a.onupdate, x = a.ontimeup, Ma;
        a = a.template.split(".");
        Ma = {Ua: a[0].length,Ta: a[1].length};
        var Na = 0, ha = 0, Oa = g, Qa = c(f), ob, nb = {getLimit: function() {
                return f
            },getTime: function() {
                return Qa
            },getProgress: function() {
                return 1 - (Oa - ha) / g
            },setUpdate: function(a) {
                u = a
            },setTimeup: function(a) {
                x = a
            },countDown: function() {
                ha = Na = v();
                Oa = Na + g;
                b()
            },stop: function() {
                clearInterval(ob)
            }};
        return nb
    };
    C.Twitter = P(p, {shareURL: function(a) {
            var b = a.name, c = a.hash, b = b ? " \u300c" + b + "\u300d" : n, c = c ? " " + c : n;
            return "https://twitter.com/intent/tweet?" + ja({url: a.redirect_uri,text: (a.caption || n) + b + c})
        }});
    C.XML = P(function(a) {
        this.b = k("div");
        Ca(this.b, a.data)
    }, {$: function(a) {
            return this.b.querySelector(a)
        },$$: function(a) {
            return sa(a, this.b)
        }});
    C.Model = P(function(a, b) {
        b = this;
        a = a || S;
        var c, d = a.defaults || b.defaults || {}, e = a.events || b.events;
        b.pa = a.validate || b.validate || {};
        b.m = a.store || b.store || new C.DataStore;
        b.u = new C.Observer;
        for (c in d)
            b.set(c, d[c]);
        for (c in e)
            b.on(c, e[c])
    }, {F: function(a, b, c, d) {
            d = this;
            d.u.fire(a, d.m.get());
            b && d.u.fire(a + ":" + b, c)
        },set: function(a, b, c) {
            c = this;
            if (c.pa[a] && !c.pa[a](a, b))
                return c.F("fail", a, b);
            c.fa = c.m.get();
            c.m.set(a, b);
            c.F(U.CHANGE, a, b)
        },prev: function(a) {
            return !a ? this.fa : this.fa[a]
        },get: function(a) {
            return this.m.get(a)
        },
        remove: function(a, b) {
            b = this;
            if (a) {
                var c = b.m.get(a), d = b.m.remove(a);
                b.F("remove", a, c);
                return d
            }
        },reset: function() {
            this.m.reset();
            this.F("reset")
        },on: function(a, b) {
            var c = F(this, b);
            this.u.on(a, c);
            return c
        },off: function(a, b) {
            this.u.off(a, b)
        },fire: function(a, b) {
            return this.u.fire(a, b)
        }});
    C.View = P(function(a, b) {
        b = this;
        a = a ? ra(b, a) : ra(b, b, {});
        b.el = C.$(a.el || b.el || k("div"));
        b.attach();
        a.init && b.init()
    }, {disposeInternal: function() {
            this.h("off")
        },h: function(a, b) {
            b = this;
            var c, d, e, f = b.events;
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
        b.Ya = a.level;
        ra(b, b, a)
    }, {displayError: function(a, b) {
            b = "Validate Error:" + a + " is " + b + ".";
            switch (this.$a) {
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
            if (ka(b))
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
            if (na(b))
                return q;
            this.displayError(a, "Array")
        }});
    C.validate = new C.Validate;
    C.Scroll = P(p, {disposeInternal: function() {
            this.revival();
            clearInterval(this.ka)
        },to: w,toTop: fa,toBottom: function() {
            w(G.height)
        },scrollY: function() {
            return t.pageYOffset !== p ? t.pageYOffset : (G.documentElement || R.parentNode || R).scrollTop
        },smooth: function(a, b) {
            var c = this, d;
            b = b || D;
            c.la || (c.la = q, A(a) || (a = a.offsetTop), d = G.height - t.innerHeight, a > d && (a = d), c.S = c.scrollY(), c.ka = setInterval(function() {
                var d = c.scrollY(), d = 0.3 * (a - d) + d;
                if (1 > Math.abs(a - d) || c.S == d)
                    return w(a), clearInterval(c.ka), b(a), delete c.la;
                c.S =
                d;
                w(d)
            }, 50))
        },kill: function(a) {
            a = this;
            a.C || (N(R, {overflow: "hidden"}), a.C = a.contract(G, U.TOUCHMOVE, qa))
        },revival: function(a) {
            a = this;
            a.C && (N(R, {overflow: "auto"}), a.uncontract(a.C), delete a.C)
        }});
    C.beer = function() {
        console.log("\n   \u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000,. -\u2010\uff1d=\uff64\uff64\n\u3000\u3000\u3000\u3000\u3000\u3000 \u3000\u3000\u3000\u3000\u3000\u3000 ,. =\uff1d=\uff64\uff64\u3000\uff4f \u3000 \u25cbo. \u3000i \u3000\u3000 \u3000\u3000 :::\u30c8\uff64\n\u3000\u3000\u3000\u3000\u3000\u3000 \u3000\u3000\u3000\u3000\u3000_,/ \u3000 \u3000 \u3000\uff40\u30fe\u00b4\u00b4`\u30fd\u3001\u3000\uff9f\u3000.\uff4c \u3000 \u3000\u3000 \u3000:::\uff84\uff64\uff3cYEAHHHHHHHHHHHHHHHHHHHH!\n\u3000\u3000\u3000\u3000\u3000 \u3000\u3000\u3000\u3000\u3000 // \u3000\u3000\u3000\u3000 .::::/\u3000\u3000:::::!=\uff1d=l\u3000\u3000\u3000\u3000\u3000 :::|\uff7d.\u3000',\n\u3000 \u3000 \u3000 \u3000 \u3000\u3000 \u3000 /./ \u3000 \u3000 \u3000 .::::/\u3000\u3000 ::::l\u3000\u3000\u3000 |\u3000 __ ..... _::::|} \u30fd l-\uff64\n  \u3000 \u3000 \u3000 \u3000 \u3000 ,\uff68\uff78 ,'..__ \u3000\u3000\u3000.::::/ \u3000\u3000 ::::l\u3000\u3000\u3000 :l '\u00b4\u3000\u3000\u3000\u3000\uff40)'\uff40\u30fd \u30fe;\uff3c\n\u3000\u3000\u3000\u3000\u3000 \u3000\uff0f::{\uff9e\u3000\u30fd\u3001 \uff40`\u4e36\uff64;/\u2010\u2010- \uff64::::l\u3000\u3000 \u3000 `'::\u252c\u2010--\uff1c_ \u3000 } ./;:::::\uff3c\n\u3000\u3000\u3000\u3000\u3000\uff0f::::::::!\u3000\u3000 ,\uff1e---\u2010'\uff9e\uff70- ...__)\uff72\u3000,.\u3000-\u2010\u2010-\uff64\uff84\uff64\u3000\u3000 |l::\u30fd \uff0f;';';';';::::\uff3c\n  \u3000 \u3000 \uff0f|::::::;';';'\uff3c\uff0f\uff5d\u3000\uff08\u30fd\u3001\u3000\u3000_/| \u3000 (\u00b4\u3000\u3000\u3000 _,.\uff68!::\u30fd. \u3000\u30fe\uff70'\u00b4;';';';';';';';';:: /\u30fd\u3001\n")
    };
    eb && (Fa.prototype = eb);
})();
