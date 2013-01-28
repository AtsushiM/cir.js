 /*! cir.js v0.8.2 | (c) 2013 Atsushi Mizoue. */(function() {
    function f(a) {
        return function() {
            return this[a]
        }
    }
    function j() {
        return Date.now()
    }
    function k() {
        l.scrollTo(0, 1)
    }
    function aa(a, b) {
        for (var c in b)
            a[c] = b[c];
        return a
    }
    function ba(a) {
        var b = "" + a;
        return b.match("^{.*}$") ? m(b) : b.match("^[0-9.]+$") ? 1 * b : "true" === b ? n : "false" === b ? r : a
    }
    function ca(a, b, c) {
        return a.split(b).join(c)
    }
    function s(a) {
        var b = "", c = "", d;
        for (d in a)
            a[d] && (c += b + d + "=" + encodeURIComponent(a[d]), b = "&");
        return c
    }
    function t(a, b) {
        return Object.prototype.toString.call(b) === "[object " + a + "]" ? n : r
    }
    function da(a) {
        return t("Object", a)
    }
    function ea(a) {
        return t("Number", a)
    }
    function fa(a) {
        return t("String", a)
    }
    function ga(a) {
        return t("Function", a)
    }
    function ha(a) {
        return t("Array", a)
    }
    function ia() {
        return "ontouchstart" in l
    }
    function u() {
        return v
    }
    function ja(a) {
        a.preventDefault();
        return r
    }
    function w(a, b) {
        b = b ? b : navigator.userAgent;
        return b.match(a) ? n : r
    }
    function x(a) {
        l.clearInterval(a)
    }
    function y() {
        return l.setTimeout.apply(v, arguments)
    }
    function m(a) {
        return l.JSON.parse(a)
    }
    function ka(a) {
        return l.JSON.stringify(a)
    }
    function la(a) {
        return z.querySelector(a)
    }
    function ma(a, b) {
        var c = b.querySelectorAll(a), d = [];
        d.push.apply(d, c);
        return d
    }
    function A(a, b) {
        for (var c = a.className, c = c ? c.split(" ") : [], d = 0, e = c.length; d < e; d++)
            if (b && b === c[d])
                return n;
        return r
    }
    function B(a, b) {
        var c = "";
        if (A(a, b))
            return r;
        a.className && (c = " ");
        a.className = a.className + c + b;
        return n
    }
    function D(a, b) {
        var c, d = [], e, g;
        if (!A(a, b))
            return r;
        c = a.className.split(" ");
        e = 0;
        for (g = c.length; e < g; e++)
            b !== c[e] && d.push(c[e]);
        a.className = d.join(" ");
        return n
    }
    function na(a, b) {
        return A(a, b) ? D(a, b) : B(a, b)
    }
    function oa(a, b, c) {
        var d;
        if (da(b)) {
            for (d in b)
                a.setAttribute(d, b[d]);
            return n
        }
        return c || "" === c ? a.setAttribute(b, c) : a.getAttribute(b)
    }
    function pa(a, b) {
        a.removeAttribute(b)
    }
    function E(a, b) {
        var c = z.createElement(a);
        b && oa(c, b);
        return c
    }
    function F(a, b, c) {
        a.addEventListener(b, c, r)
    }
    function G(a, b, c) {
        a.removeEventListener(b, c, r)
    }
    function qa(a) {
        a.style.display = "block"
    }
    function ra(a) {
        a.style.display = "none"
    }
    function sa(a, b) {
        a.style.opacity = b
    }
    function H(a, b) {
        var c = a.style, d, e, g;
        for (d in b)
            e = d, g = b[d], ea(g) && (g += "px"), c[e] = g
    }
    function ta(a) {
        return z.defaultView.getComputedStyle(a, v)
    }
    function I(a, b) {
        return a.appendChild(b)
    }
    function ua(a) {
        return a.parentNode.removeChild(a)
    }
    function va(a, b) {
        if (!b)
            return a.innerHTML;
        a.innerHTML = b
    }
    function K(a) {
        if (!l["HTML" + a.type + "Element"])
            return r;
        var b = a.type.toLowerCase(), c = E(b);
        a = a.suffix;
        for (var d = [], e = 0, g = a.length; e < g; e++)
            c.canPlayType(b + "/" + a[e][1]) && d.push(a[e]);
        return !d.length ? r : d
    }
    var l = window, z = document, n = !0, r = !1, v = null, L = ia(), M, N, wa = "orientationchange", O = 1.70158, P, Q = l.C = {};
    Date.now || (Date.now = function() {
        return +new Date
    });
    Q.utility = {win: l,doc: z,pageTop: k,override: aa,replaceAll: ca,windowOpen: function(a, b) {
            return l.open(a, b)
        },typeCast: ba,makeQueryString: s,parseQueryString: function(a) {
            a = a.replace(/^\#/, "").replace(/^\?/, "");
            a = a.split("&");
            var b, c, d = {};
            for (b = a.length; b--; )
                c = a[b].split("="), d[c[0]] = ba(decodeURIComponent(c[1]));
            return d
        },is: t,isObject: da,isNumber: ea,isString: fa,isFunction: ga,isBoolean: function(a) {
            return t("Boolean", a)
        },isArray: ha,isTouchDevice: ia,nullFunction: u,eventPrevent: ja,checkUserAgent: w};
    Q.dom = {$: la,$$: function(a) {
            return ma(a, z)
        },$child: function(a, b) {
            return b.querySelector(a)
        },$$child: ma,$id: function(a) {
            return z.getElementById(a)
        },on: F,off: G,create: E,show: qa,hide: ra,opacity: sa,hasClass: A,addClass: B,removeClass: D,toggleClass: na,css: H,computedStyle: ta,append: I,parent: function(a) {
            return a.parentNode
        },remove: ua,attr: oa,removeAttr: pa,html: va};
    M = Q.klass = function(a) {
        var b = a.init || function() {
        }, c = a.properties;
        (a = a.extend) && Q.extend(b, a);
        aa(b.prototype, c);
        return b
    };
    Q.extend = function(a, b) {
        function c() {
            this.init = a
        }
        c.prototype = b.prototype;
        a.prototype = new c;
        var d = a.prototype;
        d._superclass = b;
        d._super = function() {
            var a = this.xa, a = a ? a.prototype.Ra : this.xa = b;
            a.apply(this, arguments)
        }
    };
    N = M({init: function(a) {
            a = a || {};
            if (a.single && Q.Event.b)
                return Q.Event.b;
            a.single && (Q.Event.b = this)
        },properties: {switchclick: L ? "touchstart" : "click",switchdown: L ? "touchstart" : "mousedown",switchmove: L ? "touchmove" : "mousemove",switchup: L ? "touchend" : "mouseup",load: "load",change: "change",click: "click",mousedown: "mousedown",mousemove: "mousemove",mouseup: "mouseup",touchstart: "touchstart",touchmove: "touchmove",touchend: "touchend",resize: "resize"}});
    Q.Event = N;
    N = Q.event = new N;
    P = Q.Base = M({init: function() {
            this.l = {}
        },properties: {G: 0,dispose: function() {
                var a;
                if (this.l)
                    for (a in this.l)
                        G.apply(v, this.l[a]);
                for (a in this)
                    delete this[a];
                return this.__proto__ = v
            },contract: function(a, b, c) {
                F(a, b, c);
                this.G++;
                this.l[this.G] = [a, b, c];
                return this.G
            },uncontract: function(a) {
                var b = this.l[a];
                delete this.l[a];
                G(b[0], b[1], b[2])
            },d: function() {
                this.__proto__.__proto__.dispose.call(this)
            }}});
    Q.ease = {linear: function(a, b, c, d) {
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
            return c * (a /= d) * a * ((O + 1) * a - O) + b
        },outBack: function(a, b, c, d) {
            return c * ((a = a / d - 1) * a * ((O + 1) * a + O) + 1) + b
        },inOutBack: function(a, b, c, d) {
            return 1 > (a /= d / 2) ? c / 2 * a * a * (((O *= 1.525) + 1) * a - O) + b : c / 2 * ((a -= 2) * a * (((O *= 1.525) + 1) * a + O) + 2) + b
        }};
    Q.cssease = {linear: "linear",inCubic: "cubic-bezier(0.550, 0.055, 0.675, 0.190)",outCubic: "cubic-bezier(0.215, 0.610, 0.355, 1.000)",inOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",inQuart: "cubic-bezier(0.895, 0.030, 0.685, 0.220)",outQuart: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",inOutQuart: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",inQuint: "cubic-bezier(0.755, 0.050, 0.855, 0.060)",outQuint: "cubic-bezier(0.230, 1.000, 0.320, 1.000)",inOutQuint: "cubic-bezier(0.860, 0.000, 0.070, 1.000)",inSine: "cubic-bezier(0.470, 0.000, 0.745, 0.715)",
        outSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",inOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)",inExpo: "cubic-bezier(0.950, 0.050, 0.795, 0.035)",outExpo: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",inOutExpo: "cubic-bezier(1.000, 0.000, 0.000, 1.000)",inCirc: "cubic-bezier(0.600, 0.040, 0.980, 0.335)",outCirc: "cubic-bezier(0.075, 0.820, 0.165, 1.000)",inOutCirc: "cubic-bezier(0.785, 0.135, 0.150, 0.860)",inQuad: "cubic-bezier(0.550, 0.085, 0.680, 0.530)",outQuad: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
        inOutQuad: "cubic-bezier(0.455, 0.030, 0.515, 0.955)",inBack: ["cubic-bezier(0.600, 0, 0.735, 0.045)", "cubic-bezier(0.600, -0.280, 0.735, 0.045)"],outBack: ["cubic-bezier(0.175, 0.885, 0.320, 1)", "cubic-bezier(0.175, 0.885, 0.320, 1.275)"],inOutBack: ["cubic-bezier(0.680, 0, 0.265, 1)", "cubic-bezier(0.680, -0.550, 0.265, 1.550)"]};
    for (var xa = ["webkitAnimation", "animation"], ya = E("p"), za = r, R, Aa = "", Ba = "animation", Ca = 0, Da = xa.length, Ea, S, T; Ca < Da; Ca++)
        if (void 0 !== ya.style[xa[Ca]]) {
            za = n;
            if (R = xa[Ca].match(/^(.*?)animation$/i)[1])
                Aa = "-" + R.toLowerCase() + "-", Ba = R + "Animation";
            Ea = I(la("head"), E("style", {type: "text/css"}));
            S = Ea.sheet;
            break
        }
    T = za ? Q.Animation = M({extend: P,init: function(a, b, c) {
            c = c || {};
            this.B = c.onComplete || u;
            this.a = a;
            T.id++;
            this.c = "ciranim" + T.id;
            a = c.duration || T.Duration;
            var d = c.ease || "ease", e, g = {};
            for (e in b)
                g[e] = b[e], ea(g[e]) && (g[e] += "px");
            this.i = g;
            g = ca(ca(ka(g), '"', ""), ",", ";");
            S.insertRule("@" + Aa + "keyframes " + this.c + "{to" + g + "}", S.cssRules.length);
            ha(d) || (d = [d]);
            b = this.c;
            e = Aa;
            for (var g = 0, h = d.length, p = ""; g < h; g++)
                p += e + "animation:" + b + " " + a + "ms " + d[g] + " 0s 1 normal both;";
            S.insertRule("." + b + "{" + p + "}", S.cssRules.length);
            c.manual ||
            this.start()
        },properties: {W: function() {
                G(this.a, Ba + "End", this.end);
                G(this.a, "animationend", this.end)
            },dispose: function() {
                this.stop();
                this.d()
            },start: function() {
                function a(a) {
                    var d = S.cssRules, e = d.length, g;
                    b.W();
                    if ("webkit" === R) {
                        for (; e--; )
                            g = d[e].name || ("" + d[e].selectorText).split(".")[1], g === b.c && S.deleteRule(e);
                        D(b.a, b.c);
                        H(b.a, b.i)
                    }
                    b.B(a)
                }
                var b = this;
                b.end = a;
                F(b.a, Ba + "End", a);
                F(b.a, "animationend", a);
                B(b.a, b.c)
            },stop: function() {
                var a = {};
                a[Aa + "animation-play-state"] = "paused";
                H(this.a, a);
                this.W()
            }}}) :
    Q.Animation = {};
    T.id = 0;
    T.Duration = 500;
    T.support = za;
    for (var Ia = ["webkitTransitionProperty", "transitionProperty"], Ka = E("p"), La = r, Ma, Na = "", Oa = "transition", Pa = 0, Qa = Ia.length, Ra, V, W; Pa < Qa; Pa++)
        if (void 0 !== Ka.style[Ia[Pa]]) {
            La = n;
            if (Ma = Ia[Pa].match(/^(.*?)transitionproperty$/i)[1])
                Na = "-" + Ma.toLowerCase() + "-", Oa = Ma.toLowerCase() + "Transition";
            Ra = I(la("head"), E("style", {type: "text/css"}));
            V = Ra.sheet;
            break
        }
    W = La ? Q.Transition = M({extend: P,init: function(a, b, c) {
            c = c || {};
            c.onComplete = c.onComplete || u;
            W.id++;
            this.c = "cirtrans" + W.id;
            var d = [];
            aa({}, b);
            var e, g = c.duration || W.Duration, h = c.ease || "ease";
            ha(h) || (h = [h]);
            for (e in b)
                d.push(e);
            e = Na;
            for (var p = 0, q = h.length, d = "" + (e + "transition-property:" + d.join(" ") + ";" + e + "transition-duration:" + g + "ms;"); p < q; p++)
                d += e + "transition-timing-function:" + h[p] + ";";
            V.insertRule("." + this.c + "{" + d + "}", V.cssRules.length);
            this.a = a;
            this.i = b;
            this.Ma = c;
            c.manual || this.start()
        },properties: {dispose: function() {
                this.stop();
                this.d()
            },start: function() {
                var a = this;
                a.s = function(b) {
                    a.stop();
                    y(function() {
                        a.Ma.onComplete(b)
                    }, 1)
                };
                F(a.a, Oa + "End", a.s);
                F(a.a, "transitionend", a.s);
                B(a.a, a.c);
                H(a.a, a.i)
            },stop: function() {
                var a = V.cssRules, b = a.length, c;
                G(this.a, Oa + "End", this.s);
                G(this.a, "transitionend", this.s);
                for (D(this.a, this.c); b--; )
                    if (c = a[b].name || ("" + a[b].selectorText).split(".")[1], c === this.c) {
                        V.deleteRule(b);
                        break
                    }
            }}}) : Q.Transition = {};
    W.id = 0;
    W.support = La;
    W.Duration = 500;
    var X = Q.Tweener = M({extend: P,init: function(a, b, c) {
            var d;
            c = c || {};
            this.t = a;
            this.i = [];
            for (d in b)
                a = b[d], a.name = d, a.Da = a.to - a.from, a.prefix = a.prefix || "", a.suffix = a.suffix || "px", this.i.push(a);
            this.T = c.duration || X.Duration;
            this.Fa = c.ease || this.pa;
            this.B = c.onComplete;
            c.manual || this.start()
        },properties: {dispose: function() {
                this.stop();
                this.d()
            },pa: function(a, b, c, d) {
                return c * (-Math.pow(2, -10 * a / d) + 1) + b
            },X: l.requestAnimationFrame ? function(a) {
                requestAnimationFrame(a)
            } : l.webkitRequestAnimationFrame ? function(a) {
                webkitRequestAnimationFrame(a)
            } :
            l.mozRequestAnimationFrame ? function(a) {
                mozRequestAnimationFrame(a)
            } : l.oRequestAnimationFrame ? function(a) {
                oRequestAnimationFrame(a)
            } : l.msRequestAnimationFrame ? function(a) {
                msRequestAnimationFrame(a)
            } : function(a) {
                y(a, 1E3 / X.Oa)
            },loop: function() {
                for (var a = this, b = X.D, c, d = j(), e, g = b.length, h, p, q; g--; )
                    if (c = b[g], p = c.i.length, e = d - c.Ba, e < c.T)
                        for (h = 0; h < p; h++)
                            q = c.i[h], X.Y(c.t, q, c.Fa(e, q.from, q.Da, c.T));
                    else {
                        for (h = 0; h < p; h++)
                            q = c.i[h], X.Y(c.t, q, q.to);
                        c.B && c.B();
                        b.splice(g, 1)
                    }
                if (b.length)
                    return a.X(function() {
                        a.loop()
                    }),
                    n;
                this.stop()
            },start: function() {
                var a = this;
                a.Ba = j();
                X.D.push(a);
                X.O || (X.O = 1, a.X(function() {
                    a.loop()
                }))
            },stop: function() {
                X.D = [];
                x(X.O);
                X.O = v
            }}});
    X.Y = function(a, b, c) {
        a[b.name] = b.prefix + c + b.suffix
    };
    X.D = [];
    X.FPS = 30;
    X.Duration = 500;
    Q.$ = function(a, b) {
        var c, d, e = 0, g;
        b = b || z;
        fa(a) ? c = b.querySelectorAll(a) : (c = [a], a = "");
        g = c.length;
        d = function() {
        };
        d.prototype = Q.$.ha;
        d = new d;
        d.length = g;
        for (d.wa = b; e < g; e++)
            d[e] = c[e];
        return d
    };
    function Y(a, b, c) {
        var d = 0, e = a.length;
        for (c = Sa(c); d < e; d++)
            c[0] = a[d], b.apply(a, c);
        return a
    }
    function Ta(a, b, c) {
        c = Sa(c);
        c[0] = a[0];
        return b.apply(v, c)
    }
    function Sa(a) {
        var b = [v];
        b.push.apply(b, a);
        return b
    }
    Q.$.ha = {qa: Y,Qa: Ta,Pa: Sa,querySelectorAll: function(a) {
            return this[0].querySelectorAll(a)
        },find: function(a) {
            return Q.$(a, this.wa)
        },parent: function() {
            return Q.$(this[0].parentNode)
        },on: function() {
            return Y(this, F, arguments)
        },off: function() {
            return Y(this, G, arguments)
        },show: function() {
            return Y(this, qa)
        },hide: function() {
            return Y(this, ra)
        },opacity: function() {
            return Y(this, sa, arguments)
        },hasClass: function() {
            return Ta(this, A, arguments)
        },addClass: function() {
            return Y(this, B, arguments)
        },removeClass: function() {
            return Y(this,
            D, arguments)
        },toggleClass: function() {
            return Y(this, na, arguments)
        },css: function() {
            return Y(this, H, arguments)
        },html: function() {
            return Ta(this, va, arguments)
        },attr: function() {
            return Ta(this, oa, arguments)
        },removeAttr: function() {
            return Y(this, pa, arguments)
        },append: function() {
            return Y(this, I, arguments)
        },remove: function() {
            return Y(this, ua, arguments)
        }};
    function Ua(a, b, c, d, e) {
        ga(c) && (e = c, c = v);
        ga(d) && !e && (e = d, d = v);
        d && (d = Va[d]);
        c = {duration: c,ease: d,onComplete: e};
        if (Wa)
            b = new Xa(a, b, c);
        else {
            d = Q.Tweener;
            e = a.style;
            var g;
            a = ta(a);
            var h, p, q = {};
            for (g in b)
                h = Ya(b[g]), p = a.getPropertyValue(g), p = !p || "none" === p ? 0 : 1 * Ya(p)[2], q[g] = {from: p,to: 1 * h[2] || 0,prefix: h[1],suffix: h[3]};
            b = new d(e, q, c)
        }
        this.k.push(b)
    }
    function Ya(a) {
        a = "" + (a || "");
        return a.match(/^(.*?)([0-9\.]+)(.*)$/)
    }
    var Za = Q.$.ha, Xa = Q.Animation || {}, Wa = Xa.support, Va = {};
    Wa && Q.cssease ? Va = Q.cssease : Q.ease && (Va = Q.ease);
    Za.animate = function() {
        this.k || (this.k = []);
        return Za.qa(this, Ua, arguments)
    };
    Za.stop = function() {
        if (this.k) {
            for (var a = 0, b = this.k.length; a < b; a++)
                this.k[a].stop();
            this.k = v
        }
        return this
    };
    Q.HashQuery = M({extend: P,properties: {typeCast: function(a) {
                var b = ba(a);
                return a === b && (a = a.match("^[\"'](.*)[\"']$")) ? a[1] : b
            },makeHash: function(a) {
                var b = "#" + a.mode;
                a = a.vars;
                var c = "?", d;
                for (d in a)
                    b += c + d + "=" + ka(a[d]), c = "&";
                return encodeURI(b)
            },setHash: function(a) {
                location.hash = this.makeHash(a);
                return n
            },parseHash: function(a) {
                var b, c, d, e;
                b = decodeURIComponent(a).split("#")[1];
                if (!b)
                    return r;
                b = b.split("?");
                a = b[0];
                if (b[1]) {
                    c = {};
                    b = b[1].split("&");
                    for (e = b.length; e--; )
                        b[e] && (d = b[e].split("="), c[d[0]] = this.typeCast(d[1]))
                }
                return {mode: a,
                    vars: c}
            },getHash: function() {
                return this.parseHash(location.hash)
            }}});
    Q.Embed = function(a) {
        var b = E(a.type.toLowerCase());
        b.controls = a.controls ? n : r;
        b.preload = a.preload || "auto";
        b.autoplay = a.autoplay ? n : r;
        b.loop = a.loop ? n : r;
        b.src = a.dir + a.name + "." + a.suffix[0][0];
        return b
    };
    Q.Embed.supportcheck = K;
    Q.Media = M({extend: P,init: function(a) {
            this._super();
            var b = this, c = a.autoplay, d = a.loop, e, g = a.element || z.body;
            a.preload = "auto";
            a.autoplay = a.loop = r;
            switch (a.type) {
                case "Audio":
                    e = Q.Audio(a);
                    break;
                case "Video":
                    e = Q.Video(a)
            }
            b.g = e;
            if (!e)
                return r;
            if (c) {
                var h;
                h = this.contract(e, "canplay", function() {
                    b.uncontract(h);
                    b.play()
                })
            }
            d && this.loop(n);
            a.oncanplay && this.contract(e, "canplay", a.oncanplay);
            a.onended && this.contract(e, "ended", a.onended);
            I(g, e)
        },properties: {dispose: function() {
                ua(this.g);
                this.d()
            },getElement: f("g"),
            getCurrent: function() {
                return this.g.currentTime
            },getDuration: function() {
                return this.g.duration
            },setCurrent: function(a) {
                this.g.currentTime = a
            },loop: function(a) {
                var b = this;
                b.h && (b.uncontract(b.h), delete b.h);
                a && (b.h = b.contract(b.g, "ended", function() {
                    b.stop();
                    b.play()
                }))
            },autoplay: function() {
            },play: function() {
                this.g.play()
            },pause: function() {
                this.g.pause()
            },stop: function() {
                this.setCurrent(0);
                this.pause()
            }}});
    Q.Media.supportcheck = K;
    Q.Audio = function(a) {
        a.type = "Audio";
        a.suffix = Q.Audio.support;
        return Q.Embed(a)
    };
    Q.Audio.support = K({type: "Audio",suffix: [["mp3", "mpeg"], ["wav", "wav"], ["ogg", "ogg"], ["m4a", "mp4"]]});
    Q.Sound = function(a) {
        a.type = "Audio";
        return new Q.Media(a)
    };
    Q.Sound.support = Q.Audio.support;
    Q.Video = function(a) {
        a.type = "Video";
        a.suffix = Q.Video.support;
        return new Q.Embed(a)
    };
    Q.Video.support = K({type: "Video",suffix: [["webm", "webm"], ["mp4", "mp4"], ["ogv", "ogg"]]});
    Q.Movie = function(a) {
        a.type = "Video";
        return new Q.Media(a)
    };
    Q.Movie.support = Q.Video.support;
    Q.Ajax = M({extend: P,init: function(a) {
            a && this.request(a)
        },properties: {request: function(a) {
                if ("json" === a.dataType)
                    return delete a.dataType, this.Sa(a);
                var b = a.url, c = a.callback || u, d = a.error || u, e = a.type || "GET", g = "", h;
                a.cash || (a.query || (a.query = {}), a.query["cirajaxcash" + j()] = "0");
                a.query && (g = a.query, da(g) && (g = s(g), g = encodeURI(g)));
                h = this.R = new XMLHttpRequest;
                h.onreadystatechange = function() {
                    return 4 != h.readyState ? r : 200 == h.status ? c(h.responseText, h) : d(h)
                };
                "GET" === e && (b = -1 !== b.indexOf("?") ? b + "&" : b + "?", b += g,
                g = "");
                h.open(e, b);
                "POST" === e && h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                h.send(g)
            },abort: function() {
                this.R && this.R.abort()
            },json: function(a) {
                var b = a.callback, c = a.error;
                a.callback = function(a) {
                    b(m(a))
                };
                a.error = function(a) {
                    c && c(a)
                };
                this.request(a)
            }}});
    Q.Bind = M({extend: P,init: function(a) {
            this.z = a;
            this.add()
        },properties: {dispose: function() {
                this.remove();
                this.d()
            },getHandler: f("z"),add: function() {
                this.U(n)
            },remove: function() {
                this.U(r)
            },U: function(a) {
                a = a ? F : G;
                for (var b in this.z.events)
                    a(this.z.element, b, this.z.events[b])
            }}});
    Q.Brush = M({extend: P,init: function(a) {
            this.o = a.canvas;
            this.aa = this.o.getContext("2d");
            this.setSize(a)
        },properties: {setSize: function(a) {
                a.width && (this.o.width = a.width);
                a.height && (this.o.height = a.height)
            },pigment: function(a) {
                var b = E("canvas"), c = E("img");
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
                    var c = a.onload || u;
                    a.onload = function(a, d) {
                        c(a, d);
                        g--;
                        0 === g && b(h)
                    };
                    h[e] = d.pigment(a);
                    g++
                }
                var d = this, e, g = 0, h = {};
                b = b || u;
                for (e in a)
                    c(a[e]);
                return h
            },draw: function(a) {
                var b = 0, c = a.length, d;
                for (this.aa.clearRect(0, 0, this.o.width, this.o.height); b < c; b++)
                    d = a[b], this.aa.drawImage(d.image, d.x, d.y)
            }}});
    Q.Brush.support = !!l.HTMLCanvasElement;
    Q.DataStore = M({extend: P,init: function(a) {
            a = a || {};
            if (a.single && Q.DataStore.b)
                return Q.DataStore.b;
            this.data = {};
            a.single && (Q.DataStore.b = this)
        },properties: {set: function(a, b) {
                this.data[a] = b
            },get: function(a) {
                var b = {}, c;
                if (a)
                    return this.data[a];
                for (c in this.data)
                    b[c] = this.data[c];
                return b
            },remove: function(a) {
                if (!this.data[a])
                    return r;
                delete this.data[a]
            },reset: function() {
                this.data = {}
            }}});
    Q.WebStorage = M({extend: P,init: function(a) {
            var b = a.type + "Storage";
            if (a.single && Q[b].b)
                return Q[b].b;
            this.m = a.namespace ? a.namespace + "-" : "";
            this.f = l[a.type.toLowerCase() + "Storage"];
            a.single && (Q[b].b = this)
        },properties: {set: function(a, b) {
                this.f.setItem(this.m + a, ka(b));
                return n
            },get: function(a) {
                var b = {}, c;
                if (a)
                    return m(this.f.getItem(this.m + a));
                for (c in this.f)
                    this.m ? (a = c.split(this.m)[1]) && (b[a] = m(this.f[c])) : b[c] = m(this.f[c]);
                return b
            },remove: function(a) {
                a = this.m + a;
                if (!this.f.getItem(a))
                    return r;
                this.f.removeItem(a);
                return n
            },reset: function() {
                if (!this.m)
                    return this.f.clear(), n;
                for (var a in this.f)
                    this.remove(a)
            }}});
    Q.LocalStorage = function(a) {
        a = a || {};
        a.type = "Local";
        return new Q.WebStorage(a)
    };
    Q.SessionStorage = function(a) {
        a = a || {};
        a.type = "Session";
        return new Q.WebStorage(a)
    };
    Q.Deferred = M({extend: P,init: function() {
            this.q = []
        },properties: {isResolve: function() {
                return !this.q
            },resolve: function(a) {
                if (this.isResolve())
                    return this;
                var b = this.q, c = b.length, d = 0;
                this.q = v;
                for (this.data = a; d < c; ++d)
                    b[d](a);
                return this
            },done: function(a) {
                this.q ? this.q.push(a) : a(this.data);
                return this
            }}});
    Q.DragFlick = M({extend: P,init: function(a) {
            this._super();
            a && this.bind(a)
        },properties: {H: function(a) {
                return a.changedTouches ? a.changedTouches[0] : a
            },amount: function(a) {
                var b = this, c, d, e = r;
                this.contract(a.element, N.switchdown, function(a) {
                    var h = b.H(a);
                    c = h.pageX;
                    d = h.pageY;
                    e = n;
                    ja(a)
                });
                this.contract(l, N.switchup, function(g) {
                    e && (g = b.H(g), a.callback({x: g.pageX - c,y: g.pageY - d}), e = r)
                })
            },direction: function(a) {
                this.amount({element: a.element,callback: function(b) {
                        var c = a.boundary || 0, d = {change: r,top: r,right: r,bottom: r,
                            left: r,amount: b};
                        Math.abs(b.x) > c && (0 < b.x ? d.right = n : 0 > b.x && (d.left = n), d.change = n);
                        Math.abs(b.y) > c && (0 < b.y ? d.bottom = n : 0 > b.y && (d.top = n), d.change = n);
                        a.callback(d)
                    }})
            },bind: function(a) {
                function b(a, b, d) {
                    c.contract(a, b, function(a) {
                        d(c.H(a))
                    })
                }
                var c = this, d = a.element, e = a.start || u, g = a.move || u, h = a.end || u, p = r, q = 0, J = 0;
                a.direction && c.direction({element: d,boundary: a.boundary,callback: a.direction});
                b(d, N.switchdown, function(a) {
                    p = n;
                    q = a.pageX;
                    J = a.pageY;
                    e({e: a,move: {x: q,y: J}})
                });
                b(z, N.switchmove, function(a) {
                    p && g({e: a,
                        move: {x: a.pageX - q,y: a.pageY - J}})
                });
                b(z, N.switchup, function(a) {
                    p && (h({e: a,move: {x: a.pageX - q,y: a.pageY - J}}), p = r)
                })
            }}});
    Q.ExternalInterface = function(a) {
        a = a || {};
        var b = Q.ExternalInterface, c;
        if (a.single && b.b)
            return b.b;
        c = a.android ? new b.Android(a) : new b.IOS(a);
        a.single && (b.b = c);
        return c
    };
    Q.ExternalInterface.Android = M({extend: Q.HashQuery,init: function(a) {
            a = a || {};
            this.za = a.android;
            this.ca = a.externalObj
        },properties: {call: function(a) {
                this.za[a.mode](this.makeHash(a))
            },addCallback: function(a, b) {
                var c = this;
                c.ca[a] = function(a) {
                    a = c.parseHash(a);
                    return b(a.vars)
                }
            },removeCallback: function(a) {
                delete this.ca[a]
            }}});
    Q.ExternalInterface.IOS = M({extend: Q.HashQuery,init: function() {
            this.p = {}
        },properties: {dispose: function() {
                for (var a in this.p)
                    this.removeCallback(a);
                this.d()
            },call: function(a) {
                this.setHash(a)
            },addCallback: function(a, b) {
                var c = this;
                c.p[a] = function() {
                    var d = c.getHash();
                    return d.mode === a ? (b(d.vars), n) : r
                };
                F(l, "hashchange", c.p[a])
            },removeCallback: function(a) {
                G(l, "hashchange", this.p[a]);
                delete this.p[a]
            }}});
    Q.Facebook = M({extend: P,properties: {F: "https://www.facebook.com/dialog/feed?",shareURL: function(a) {
                var b = this.F + "app_id=" + a.app_id + "&redirect_uri=" + a.redirect_uri;
                return b += s({link: a.link,picture: a.picture,name: a.name,caption: a.caption,description: a.description})
            }}});
    Q.FPS = M({extend: P,init: function(a) {
            a = a || {};
            a.criterion || (a.criterion = 20);
            if (a.single && Q.FPS.b)
                return Q.FPS.b;
            this.N = this.v = a.criterion;
            this.Ga = a.enterframe;
            this.ia = this.V(this.v);
            this.n = this.J = this.h = 0;
            a.manual || this.start();
            a.single && (Q.FPS.b = this)
        },properties: {dispose: function() {
                this.stop();
                this.d()
            },getCriterion: f("v"),getSurver: f("N"),getFrameTime: f("ia"),enter: function() {
                this.Ga({criterion: this.v,surver: this.N})
            },start: function() {
                this.n = j();
                this.h = setInterval(this.sa, this.ia, this)
            },sa: function(a) {
                a.J =
                j();
                a.N = a.V(a.J - a.n);
                a.n = a.J;
                a.enter()
            },V: function(a) {
                return Math.round(1E3 / a)
            },stop: function() {
                x(this.h)
            }}});
    Q.ImgLoad = M({extend: P,init: function(a) {
            this._super();
            this.ka = a.srcs;
            this.M = this.ka.length;
            this.ea = [];
            this.w = [];
            this.ua = a.onload || u;
            this.va = a.onprogress || u;
            this.L = this.I = 0;
            this.la = r;
            a.manual || this.start()
        },properties: {oa: function() {
                this.I++;
                this.L = this.I / this.M;
                this.va(this.L);
                if (this.I >= this.M) {
                    for (var a = this.w.length; a--; )
                        this.uncontract(this.w[a]);
                    this.w = [];
                    this.ua(this.ea)
                }
            },start: function() {
                function a() {
                    b.oa()
                }
                if (this.la)
                    return r;
                this.la = n;
                for (var b = this, c, d = 0, e = b.M; d < e; d++)
                    c = E("img"), c.src = b.ka[d],
                    b.w.push(b.contract(c, N.load, a)), b.ea.push(c)
            },getProgress: f("L")}});
    Q.WindowLoad = M({extend: P,init: function(a) {
            this._super();
            if (a && a.onload)
                this.onload(a.onload)
        },properties: {onload: function(a) {
                var b = this, c;
                c = this.contract(l, N.load, function() {
                    b.uncontract(c);
                    a()
                })
            }}});
    Q.Mobile = M({extend: P,init: function() {
            this._super()
        },properties: {getZoom: function() {
                return z.body.clientWidth / l.innerWidth
            },isAndroid: function(a) {
                return w(/Android/i, a)
            },isIOS: function(a) {
                return w(/iPhone|iPad|iPod/i, a)
            },isWindows: function(a) {
                return w(/IEMobile/i, a)
            },isFBAPP: function(a) {
                return w(/FBAN/, a)
            },isMobile: function() {
                return this.isAndroid() || this.isIOS() || this.isWindows() || this.isFBAPP()
            },killScroll: function(a) {
                if (this.A)
                    return r;
                a || k();
                this.A = this.contract(z, N.touchmove, ja)
            },revivalScroll: function(a) {
                if (!this.A)
                    return r;
                a || k();
                this.uncontract(this.A);
                delete this.A
            },hideAddress: function() {
                function a() {
                    0 === l.pageYOffset && k()
                }
                function b() {
                    y(a, 100)
                }
                this.contract(l, N.load, b, r);
                this.contract(l, wa, b, r)
            },getOrientation: function() {
                return 90 !== Math.abs(l.orientation) && l.innerWidth < l.innerHeight ? {portrait: n,landscape: r} : {portrait: r,landscape: n}
            },bindOrientation: function(a) {
                function b(a) {
                    h.push(g.contract(l, N.load, a));
                    h.push(g.contract(l, wa, a));
                    h.push(g.contract(l, N.resize, a))
                }
                function c() {
                    for (var a = h.length; a--; )
                        g.uncontract(h[a]);
                    h = []
                }
                function d() {
                    e();
                    c()
                }
                function e() {
                    if (g.getOrientation().portrait)
                        return a.portrait(), n;
                    a.landscape()
                }
                var g = this, h = [];
                a.immediately && e();
                if (a.one)
                    return b(d), function() {
                        c()
                    };
                b(e);
                return function() {
                    c()
                }
            }}});
    Q.DeviceOrientation = function(a) {
        a.Ea = "deviceorientation";
        return new Glogal.na(a)
    };
    Q.DeviceOrientation.support = "ondeviceorientation" in l;
    Q.DeviceMotion = function(a) {
        a.Ea = "devicemotion";
        return new Glogal.na(a)
    };
    Q.DeviceMotion.support = "ondevicemotion" in l;
    var bb, cb, db = new C.Mobile;
    db.isMobile() && (Q.DeviceOrientation.support ? (bb = Q.DeviceOrientation, cb = function(a) {
        return a
    }) : Q.DeviceMotion.support && (bb = Q.DeviceMotion, cb = function(a) {
        return a.rotationRate
    }));
    db.dispose();
    Q.DeviceShake = M({extend: P,init: function(a) {
            var b;
            this._super();
            this.Z = new bb;
            this.ra = a.limit;
            this.ya = a.waittime;
            if (a.callback && a.direction) {
                switch (a.direction) {
                    case "x":
                        b = "gamma";
                        break;
                    case "y":
                        b = "beta";
                        break;
                    case "z":
                        b = "alpha"
                }
                this.bind(b, a.callback)
            }
        },properties: {dispose: function() {
                this.unbind();
                this.d()
            },bind: function(a, b) {
                var c = this, d, e;
                return c.Z.bind(function(g) {
                    g = cb(g);
                    d || (d = g);
                    e = Math.abs(g[a] - d[a]);
                    e > c.ra && (d = v, b(g), y(function() {
                    }, c.ya))
                })
            },unbind: function() {
                this.Z.unbind()
            }}});
    Q.DeviceShake.support = bb ? n : r;
    Q.FontImg = M({extend: P,init: function(a) {
            a = a || {type: ""};
            this.type = a.type ? a.type + "_" : "";
            this.ma = a.tag || "span"
        },properties: {make: function(a) {
                a = ("" + a).split("");
                var b = "", c;
                for (c = a.length; c--; )
                    b = "<" + this.ma + ' class="font_' + this.type + a[c] + '">&nbsp;</' + this.ma + ">" + b;
                return b
            }}});
    Q.Observer = M({extend: P,init: function(a) {
            a = a || {};
            if (a.single && Q.Observer.b)
                return Q.Observer.b;
            this.K = {};
            a.single && (Q.Observer.b = this)
        },properties: {on: function(a, b) {
                var c = this.K;
                c[a] || (c[a] = []);
                c[a].push(b)
            },one: function(a, b) {
                function c(e) {
                    b(e);
                    d.off(a, c)
                }
                var d = this;
                d.on(a, c)
            },off: function(a, b) {
                var c = this.K;
                if (!b)
                    return delete c[a], n;
                var d = c[a], e;
                if (!d)
                    return r;
                for (e = d.length; e--; )
                    if (b === d[e])
                        return d.splice(e, 1), 0 === d.length && delete c[a], n;
                return r
            },fire: function(a, b) {
                var c = this.K[a], d, e;
                if (!c)
                    return r;
                for (e = c.length; e--; )
                    (d = c[e]) && d(b);
                return n
            }}});
    Q.PreRender = M({extend: P,init: function(a) {
            a = a || {};
            a.loopblur || (a.loopblur = 20);
            this.j = a.elements || [];
            this.da = a.guesslimit || 30;
            this.La = a.onrendered || u;
            this.ga = a.looptime || 100;
            this.Ka = this.ga + a.loopblur;
            a.manual || this.start()
        },properties: {start: function() {
                var a;
                for (a = this.j.length; a--; )
                    qa(this.j[a]);
                this.n = j();
                this.h = setInterval(function(a) {
                    var c = j(), d = c - a.n;
                    a.n = c;
                    if (d < a.Ka && (a.da--, 1 > a.da)) {
                        x(a.h);
                        for (c = a.j.length; c--; )
                            ra(a.j[c]);
                        a.La()
                    }
                }, this.ga, this)
            }}});
    Q.Route = M({extend: P,init: function(a) {
            if (a.single && Q.Route.b)
                return Q.Route.b;
            this.t = a.target || "";
            this.ta = a.noregex;
            this.r = a.action;
            a.manual || this.start();
            a.single && (Q.Route.b = this)
        },properties: {start: function() {
                this.fire(this.t)
            },fire: function(a) {
                var b;
                if (this.ta && this.r[a])
                    return this.r[a](a);
                for (b in this.r)
                    if (a.match(b))
                        this.r[b](b)
            }}});
    Q.ScriptLoad = M({extend: P,init: function() {
            this._super();
            this.j = []
        },properties: {requests: function(a, b) {
                function c(c) {
                    var g = a[c].callback;
                    a[c].callback = function(a) {
                        g(a);
                        e--;
                        0 === e && b(d.j)
                    };
                    d.request(a[c])
                }
                for (var d = this, e = 0, g = a.length; e < g; e++)
                    c(e)
            },request: function(a) {
                var b = this, c = E("script"), d;
                c.src = a.src;
                I(z.body, c);
                b.j.push(c);
                a.callback && (d = b.contract(c, N.load, function() {
                    b.uncontract(d);
                    a.callback.apply(this, arguments)
                }))
            }}});
    function Z(a) {
        return eb ? $.getResponseHeader(a) : r
    }
    function fb(a) {
        var b = new XMLHttpRequest;
        b.onload = function() {
            a(b)
        };
        b.open("HEAD", location.href + "?update" + j() + "=1");
        b.send(v);
        return b
    }
    var $, eb = r;
    Q.ServerMeta = M({extend: P,init: function(a) {
            a = a || {};
            var b = a.callback || u;
            $ ? b($) : $ = fb(function() {
                eb = n;
                b($)
            })
        },properties: {date: function(a) {
                return fb(function(b) {
                    b = new Date(b.getResponseHeader("Date"));
                    a(b)
                })
            },connection: function() {
                return Z("Connection")
            },contentLength: function() {
                return Z("Content-Length")
            },lastModified: function() {
                return Z("Last-Modified")
            },server: function() {
                return Z("Server")
            },contentType: function() {
                return Z("Content-Type")
            },acceptRanges: function() {
                return Z("Accept-Ranges")
            },keepAlive: function() {
                return Z("Keep-Alive")
            }}});
    Q.Surrogate = M({extend: P,init: function(a) {
            this.Ca = a.delay;
            this.u = a.callback
        },properties: {dispose: function() {
                this.clear();
                this.d()
            },request: function(a) {
                this.Aa = a;
                this.clear();
                this.Q = y(this.flush, this.Ca, this)
            },flush: function(a) {
                a = a || this;
                a.u(a.Aa)
            },clear: function() {
                x(this.Q)
            }}});
    Q.Throttle = M({extend: P,init: function(a) {
            this.Na = a.waittime;
            this.u = a.callback
        },properties: {dispose: function() {
                this.unlock();
                this.d()
            },request: function(a) {
                var b = this;
                if (b.fa)
                    return b.P = a, r;
                b.u(a);
                b.lock();
                b.Q = y(function() {
                    b.P && (b.u(b.P), b.P = v);
                    b.unlock()
                }, b.Na, b)
            },lock: function() {
                this.fa = n
            },unlock: function(a) {
                a = a || this;
                a.fa = r;
                x(a.Q)
            }}});
    Q.Timer = function(a) {
        function b() {
            U = j();
            var a = g - (U - Ga) / 1E3;
            0 > a && (a = 0);
            Ja = c(a);
            q(Ja);
            if (U > Ha)
                return $a.stop(), J(), n;
            ab = y(b, p);
            return r
        }
        function c(a) {
            var b;
            b = ("" + a).split(".");
            a = b[0];
            b = b[1] ? b[1] : "";
            a = d({ja: a,ba: Fa.Ia});
            b = d({ja: b,ba: Fa.Ha,Ja: n});
            return a + "." + b
        }
        function d(a) {
            var b = "" + a.ja, c = a.ba, d = c - b.length;
            return !a.Ja ? -1 < d ? e(d, 0) + b : e(c, 9) : 0 < d ? b + e(d, 0) : b.slice(0, c)
        }
        function e(a, b) {
            var c = "";
            for (b = "" + b; 0 < a; )
                c += b, a--;
            return c
        }
        var g = a.limit, h = 1E3 * g, p = 1E3 * a.interval, q = a.onupdate, J = a.ontimeup, Fa;
        a = a.template.split(".");
        Fa = {Ia: a[0].length,Ha: a[1].length};
        var Ga = 0, U = 0, Ha = h, Ja = c(g), ab, $a = {getLimit: function() {
                return g
            },getTime: function() {
                return Ja
            },getProgress: function() {
                return 1 - (Ha - U) / h
            },setUpdate: function(a) {
                q = a
            },setTimeup: function(a) {
                J = a
            },countDown: function() {
                U = Ga = j();
                Ha = Ga + h;
                b()
            },stop: function() {
                x(ab)
            }};
        return $a
    };
    Q.Twitter = M({extend: P,properties: {F: "https://twitter.com/intent/tweet?",shareURL: function(a) {
                var b = a.caption || "", c = a.name, d = a.hash, e = this.F;
                return e += s({url: a.redirect_uri,text: b + (c ? " \u300c" + c + "\u300d" : "") + (d ? " " + d : "")})
            }}});
    Q.XML = M({extend: P,init: function(a) {
            this.a = E("div");
            this.S = {};
            a && a.data && this.setData(a.data)
        },properties: {getData: f("S"),setData: function(a) {
                this.S = a;
                va(this.a, a)
            },$: function(a) {
                return this.a.querySelector(a)
            },$$: function(a) {
                return ma(a, this.a)
            }}});
}());
