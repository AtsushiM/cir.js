 /*! cir.js v0.8.1 | (c) 2013 Atsushi Mizoue. */(function() {
    function g(a) {
        return function() {
            return this[a]
        }
    }
    function h() {
        k.scrollTo(0, 1)
    }
    function l(a, b) {
        for (var c in b)
            a[c] = b[c];
        return a
    }
    function m(a) {
        var b = "" + a;
        return b.match("^{.*}$") ? JSON.parse(b) : b.match("^[0-9.]+$") ? 1 * b : "true" === b ? n : "false" === b ? r : a
    }
    function aa(a, b, c) {
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
    function ba(a) {
        return t("Object", a)
    }
    function ca(a) {
        return t("Number", a)
    }
    function da(a) {
        return t("String", a)
    }
    function ea(a) {
        return t("Function", a)
    }
    function fa(a) {
        return t("Array", a)
    }
    function ga() {
        return "ontouchstart" in k
    }
    function u() {
        return v
    }
    function ha(a) {
        a.preventDefault();
        return r
    }
    function w(a, b) {
        b = b ? b : navigator.userAgent;
        return b.match(a) ? n : r
    }
    function ia(a) {
        return x.querySelector(a)
    }
    function ja(a, b) {
        var c = b.querySelectorAll(a), d = [];
        d.push.apply(d, c);
        return d
    }
    function y(a, b) {
        for (var c = a.className, c = c ? c.split(" ") : [], d = 0, e = c.length; d < e; d++)
            if (b && b === c[d])
                return n;
        return r
    }
    function z(a, b) {
        var c = "";
        if (y(a, b))
            return r;
        a.className && (c = " ");
        a.className = a.className + c + b;
        return n
    }
    function A(a, b) {
        var c, d = [], e, f;
        if (!y(a, b))
            return r;
        c = a.className.split(" ");
        e = 0;
        for (f = c.length; e < f; e++)
            b !== c[e] && d.push(c[e]);
        a.className = d.join(" ");
        return n
    }
    function ka(a, b) {
        return y(a, b) ? A(a, b) : z(a, b)
    }
    function la(a, b, c) {
        var d;
        if (ba(b)) {
            for (d in b)
                a.setAttribute(d, b[d]);
            return n
        }
        return c || "" === c ? a.setAttribute(b, c) : a.getAttribute(b)
    }
    function ma(a, b) {
        a.removeAttribute(b)
    }
    function B(a, b) {
        var c = x.createElement(a);
        b && la(c, b);
        return c
    }
    function C(a, b, c) {
        a.addEventListener(b, c, r)
    }
    function D(a, b, c) {
        a.removeEventListener(b, c, r)
    }
    function na(a) {
        a.style.display = "block"
    }
    function oa(a) {
        a.style.display = "none"
    }
    function pa(a, b) {
        a.style.opacity = b
    }
    function E(a, b) {
        var c = a.style, d, e, f;
        for (d in b)
            e = d, f = b[d], ca(f) && (f += "px"), c[e] = f
    }
    function qa(a) {
        return x.defaultView.getComputedStyle(a, v)
    }
    function F(a, b) {
        return a.appendChild(b)
    }
    function ra(a) {
        return a.parentNode.removeChild(a)
    }
    function sa(a, b) {
        if (!b)
            return a.innerHTML;
        a.innerHTML = b
    }
    var k = window, x = document, n = !0, r = !1, v = null, H = ga(), I, J, ta = "orientationchange", K = 1.70158, L, M = k.C = {};
    Date.now || (Date.now = function() {
        return +new Date
    });
    M.utility = {win: k,doc: x,pageTop: h,override: l,replaceAll: aa,windowOpen: function(a, b) {
            return k.open(a, b)
        },typeCast: m,makeQueryString: s,parseQueryString: function(a) {
            a = a.replace(/^\#/, "").replace(/^\?/, "");
            a = a.split("&");
            var b, c, d = {};
            for (b = a.length; b--; )
                c = a[b].split("="), d[c[0]] = m(decodeURIComponent(c[1]));
            return d
        },is: t,isObject: ba,isNumber: ca,isString: da,isFunction: ea,isBoolean: function(a) {
            return t("Boolean", a)
        },isArray: fa,isTouchDevice: ga,nullFunction: u,eventPrevent: ha,checkUserAgent: w};
    M.element = {$: ia,$$: function(a) {
            return ja(a, x)
        },$child: function(a, b) {
            return b.querySelector(a)
        },$$child: ja,$id: function(a) {
            return x.getElementById(a)
        },on: C,off: D,create: B,show: na,hide: oa,opacity: pa,hasClass: y,addClass: z,removeClass: A,toggleClass: ka,css: E,computedStyle: qa,append: F,parent: function(a) {
            return a.parentNode
        },remove: ra,attr: la,removeAttr: ma,html: sa};
    I = M.klass = function(a) {
        var b = a.init || function() {
        }, c = a.properties;
        (a = a.extend) && M.extend(b, a);
        l(b.prototype, c);
        return b
    };
    M.extend = function(a, b) {
        function c() {
            this.init = a
        }
        c.prototype = b.prototype;
        a.prototype = new c;
        var d = a.prototype;
        d._superclass = b;
        d._super = function() {
            var a = this.va, a = a ? a.prototype.Na : this.va = b;
            a.apply(this, arguments)
        }
    };
    J = I({init: function(a) {
            a = a || {};
            if (a.single && M.Event.a)
                return M.Event.a;
            a.single && (M.Event.a = this)
        },properties: {switchclick: H ? "touchstart" : "click",switchdown: H ? "touchstart" : "mousedown",switchmove: H ? "touchmove" : "mousemove",switchup: H ? "touchend" : "mouseup",load: "load",change: "change",click: "click",mousedown: "mousedown",mousemove: "mousemove",mouseup: "mouseup",touchstart: "touchstart",touchmove: "touchmove",touchend: "touchend",resize: "resize"}});
    M.Event = J;
    J = M.event = new J;
    L = M.Base = I({init: function() {
            this.l = {}
        },properties: {H: 0,dispose: function() {
                var a;
                if (this.l)
                    for (a in this.l)
                        D.apply(v, this.l[a]);
                for (a in this)
                    delete this[a];
                return this.__proto__ = v
            },contract: function(a, b, c) {
                C(a, b, c);
                this.H++;
                this.l[this.H] = [a, b, c];
                return this.H
            },uncontract: function(a) {
                var b = this.l[a];
                delete this.l[a];
                D(b[0], b[1], b[2])
            },g: function() {
                this.__proto__.__proto__.dispose.call(this)
            }}});
    M.ease = {linear: function(a, b, c, d) {
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
            return c * (a /= d) * a * ((K + 1) * a - K) + b
        },outBack: function(a, b, c, d) {
            return c * ((a = a / d - 1) * a * ((K + 1) * a + K) + 1) + b
        },inOutBack: function(a, b, c, d) {
            return 1 > (a /= d / 2) ? c / 2 * a * a * (((K *= 1.525) + 1) * a - K) + b : c / 2 * ((a -= 2) * a * (((K *= 1.525) + 1) * a + K) + 2) + b
        }};
    M.cssease = {linear: "linear",inCubic: "cubic-bezier(0.550, 0.055, 0.675, 0.190)",outCubic: "cubic-bezier(0.215, 0.610, 0.355, 1.000)",inOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1.000)",inQuart: "cubic-bezier(0.895, 0.030, 0.685, 0.220)",outQuart: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",inOutQuart: "cubic-bezier(0.770, 0.000, 0.175, 1.000)",inQuint: "cubic-bezier(0.755, 0.050, 0.855, 0.060)",outQuint: "cubic-bezier(0.230, 1.000, 0.320, 1.000)",inOutQuint: "cubic-bezier(0.860, 0.000, 0.070, 1.000)",inSine: "cubic-bezier(0.470, 0.000, 0.745, 0.715)",
        outSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",inOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)",inExpo: "cubic-bezier(0.950, 0.050, 0.795, 0.035)",outExpo: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",inOutExpo: "cubic-bezier(1.000, 0.000, 0.000, 1.000)",inCirc: "cubic-bezier(0.600, 0.040, 0.980, 0.335)",outCirc: "cubic-bezier(0.075, 0.820, 0.165, 1.000)",inOutCirc: "cubic-bezier(0.785, 0.135, 0.150, 0.860)",inQuad: "cubic-bezier(0.550, 0.085, 0.680, 0.530)",outQuad: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
        inOutQuad: "cubic-bezier(0.455, 0.030, 0.515, 0.955)",inBack: ["cubic-bezier(0.600, 0, 0.735, 0.045)", "cubic-bezier(0.600, -0.280, 0.735, 0.045)"],outBack: ["cubic-bezier(0.175, 0.885, 0.320, 1)", "cubic-bezier(0.175, 0.885, 0.320, 1.275)"],inOutBack: ["cubic-bezier(0.680, 0, 0.265, 1)", "cubic-bezier(0.680, -0.550, 0.265, 1.550)"]};
    for (var ua = ["webkitAnimation", "animation"], za = B("p"), Aa = r, N, P = "", Ba = "animation", Q = 0, Ca = ua.length, Da, R, S; Q < Ca; Q++)
        if (void 0 !== za.style[ua[Q]]) {
            Aa = n;
            if (N = ua[Q].match(/^(.*?)animation$/i)[1])
                P = "-" + N.toLowerCase() + "-", Ba = N + "Animation";
            Da = F(ia("head"), B("style", {type: "text/css"}));
            R = Da.sheet;
            break
        }
    S = M.Animation = I({extend: L,init: function(a, b, c) {
            if (!Aa)
                return r;
            c = c || {};
            this.D = c.onComplete || u;
            this.b = a;
            S.id++;
            this.f = "ciranim" + S.id;
            a = c.duration || S.Duration;
            var d = c.ease || "ease", e, f = {};
            for (e in b)
                f[e] = b[e], ca(f[e]) && (f[e] += "px");
            this.h = f;
            f = aa(aa(JSON.stringify(f), '"', ""), ",", ";");
            R.insertRule("@" + P + "keyframes " + this.f + "{to" + f + "}", R.cssRules.length);
            fa(d) || (d = [d]);
            b = this.f;
            e = P;
            for (var f = 0, j = d.length, p = ""; f < j; f++)
                p += e + "animation:" + b + " " + a + "ms " + d[f] + " 0s 1 normal both;";
            R.insertRule("." + b + "{" + p + "}",
            R.cssRules.length);
            c.manual || this.start()
        },properties: {X: function() {
                D(this.b, Ba + "End", this.end);
                D(this.b, "animationend", this.end)
            },dispose: function() {
                this.stop();
                this.g()
            },start: function() {
                function a(a) {
                    var d = R.cssRules, e = d.length, f;
                    b.X();
                    if ("webkit" === N) {
                        for (; e--; )
                            f = d[e].name || ("" + d[e].selectorText).split(".")[1], f === b.f && R.deleteRule(e);
                        A(b.b, b.f);
                        E(b.b, b.h)
                    }
                    b.D(a)
                }
                var b = this;
                b.end = a;
                C(b.b, Ba + "End", a);
                C(b.b, "animationend", a);
                z(b.b, b.f)
            },stop: function() {
                var a = {};
                a[P + "animation-play-state"] = "paused";
                E(this.b, a);
                this.X()
            }}});
    S.id = 0;
    S.Duration = 500;
    S.support = Aa;
    for (var Ea = ["webkitTransitionProperty", "transitionProperty"], Fa = B("p"), Ga = r, Ha, Ia = "", Ja = "transition", T = 0, Ka = Ea.length, La, U, V; T < Ka; T++)
        if (void 0 !== Fa.style[Ea[T]]) {
            Ga = n;
            if (Ha = Ea[T].match(/^(.*?)transitionproperty$/i)[1])
                Ia = "-" + Ha.toLowerCase() + "-", Ja = Ha.toLowerCase() + "Transition";
            La = F(ia("head"), B("style", {type: "text/css"}));
            U = La.sheet;
            break
        }
    V = M.Transition = I({extend: L,init: function(a, b, c) {
            if (!Ga)
                return r;
            c = c || {};
            c.onComplete = c.onComplete || u;
            V.id++;
            this.f = "cirtrans" + V.id;
            var d = [];
            l({}, b);
            var e, f = c.duration || V.Duration, j = c.ease || "ease";
            fa(j) || (j = [j]);
            for (e in b)
                d.push(e);
            e = Ia;
            for (var p = 0, q = j.length, d = "" + (e + "transition-property:" + d.join(" ") + ";" + e + "transition-duration:" + f + "ms;"); p < q; p++)
                d += e + "transition-timing-function:" + j[p] + ";";
            U.insertRule("." + this.f + "{" + d + "}", U.cssRules.length);
            this.b = a;
            this.h = b;
            this.Ia = c;
            c.manual || this.start()
        },properties: {dispose: function() {
                this.stop();
                this.g()
            },start: function() {
                var a = this;
                a.s = function(b) {
                    a.stop();
                    setTimeout(function() {
                        a.Ia.onComplete(b)
                    }, 1)
                };
                C(a.b, Ja + "End", a.s);
                C(a.b, "transitionend", a.s);
                z(a.b, a.f);
                E(a.b, a.h)
            },stop: function() {
                var a = U.cssRules, b = a.length, c;
                D(this.b, Ja + "End", this.s);
                D(this.b, "transitionend", this.s);
                for (A(this.b, this.f); b--; )
                    if (c = a[b].name || ("" + a[b].selectorText).split(".")[1], c === this.f) {
                        U.deleteRule(b);
                        break
                    }
            }}});
    V.id = 0;
    V.support = Ga;
    V.Duration = 500;
    var W = M.Tweener = I({extend: L,init: function(a, b, c) {
            var d;
            c = c || {};
            this.t = a;
            this.h = [];
            for (d in b)
                a = b[d], a.name = d, a.Aa = a.to - a.from, a.prefix = a.prefix || "", a.suffix = a.suffix || "px", this.h.push(a);
            this.U = c.duration || W.Duration;
            this.Ba = c.ease || this.oa;
            this.D = c.onComplete;
            c.manual || this.start()
        },properties: {dispose: function() {
                this.stop();
                this.g()
            },oa: function(a, b, c, d) {
                return c * (-Math.pow(2, -10 * a / d) + 1) + b
            },Y: k.requestAnimationFrame ? function(a) {
                requestAnimationFrame(a)
            } : k.webkitRequestAnimationFrame ? function(a) {
                webkitRequestAnimationFrame(a)
            } :
            k.mozRequestAnimationFrame ? function(a) {
                mozRequestAnimationFrame(a)
            } : k.oRequestAnimationFrame ? function(a) {
                oRequestAnimationFrame(a)
            } : k.msRequestAnimationFrame ? function(a) {
                msRequestAnimationFrame(a)
            } : function(a) {
                setTimeout(a, 1E3 / W.Ka)
            },loop: function() {
                for (var a = this, b = W.F, c, d = Date.now(), e, f = b.length, j, p, q; f--; )
                    if (c = b[f], p = c.h.length, e = d - c.ya, e < c.U)
                        for (j = 0; j < p; j++)
                            q = c.h[j], W.Z(c.t, q, c.Ba(e, q.from, q.Aa, c.U));
                    else {
                        for (j = 0; j < p; j++)
                            q = c.h[j], W.Z(c.t, q, q.to);
                        c.D && c.D();
                        b.splice(f, 1)
                    }
                if (b.length)
                    return a.Y(function() {
                        a.loop()
                    }),
                    n;
                this.stop()
            },start: function() {
                var a = this;
                a.ya = Date.now();
                W.F.push(a);
                W.P || (W.P = 1, a.Y(function() {
                    a.loop()
                }))
            },stop: function() {
                W.F = [];
                clearInterval(W.P);
                W.P = v
            }}});
    W.Z = function(a, b, c) {
        a[b.name] = b.prefix + c + b.suffix
    };
    W.F = [];
    W.FPS = 30;
    W.Duration = 500;
    M.$ = function(a, b) {
        var c, d, e = 0, f;
        b = b || x;
        da(a) ? c = b.querySelectorAll(a) : (c = [a], a = "");
        f = c.length;
        d = function() {
        };
        d.prototype = M.$.ha;
        d = new d;
        d.length = f;
        for (d.ua = b; e < f; e++)
            d[e] = c[e];
        return d
    };
    function X(a, b, c) {
        var d = 0, e = a.length;
        for (c = Ma(c); d < e; d++)
            c[0] = a[d], b.apply(a, c);
        return a
    }
    function Y(a, b, c) {
        c = Ma(c);
        c[0] = a[0];
        return b.apply(v, c)
    }
    function Ma(a) {
        var b = [v];
        b.push.apply(b, a);
        return b
    }
    M.$.ha = {pa: X,Ma: Y,La: Ma,querySelectorAll: function(a) {
            return this[0].querySelectorAll(a)
        },find: function(a) {
            return M.$(a, this.ua)
        },parent: function() {
            return M.$(this[0].parentNode)
        },on: function() {
            return X(this, C, arguments)
        },off: function() {
            return X(this, D, arguments)
        },show: function() {
            return X(this, na)
        },hide: function() {
            return X(this, oa)
        },opacity: function() {
            return X(this, pa, arguments)
        },hasClass: function() {
            return Y(this, y, arguments)
        },addClass: function() {
            return X(this, z, arguments)
        },removeClass: function() {
            return X(this,
            A, arguments)
        },toggleClass: function() {
            return X(this, ka, arguments)
        },css: function() {
            return X(this, E, arguments)
        },html: function() {
            return Y(this, sa, arguments)
        },attr: function() {
            return Y(this, la, arguments)
        },removeAttr: function() {
            return X(this, ma, arguments)
        },append: function() {
            return X(this, F, arguments)
        },remove: function() {
            return X(this, ra, arguments)
        }};
    function Na(a, b, c, d, e) {
        ea(c) && (e = c, c = v);
        ea(d) && !e && (e = d, d = v);
        d && (d = Oa[d]);
        c = {duration: c,ease: d,onComplete: e};
        if (Pa)
            b = new Sa(a, b, c);
        else {
            d = M.Tweener;
            e = a.style;
            var f;
            a = qa(a);
            var j, p, q = {};
            for (f in b)
                j = Ta(b[f]), p = a.getPropertyValue(f), p = !p || "none" === p ? 0 : 1 * Ta(p)[2], q[f] = {from: p,to: 1 * j[2] || 0,prefix: j[1],suffix: j[3]};
            b = new d(e, q, c)
        }
        this.j.push(b)
    }
    function Ta(a) {
        a = "" + (a || "");
        return a.match(/^(.*?)([0-9\.]+)(.*)$/)
    }
    var Ua = M.$.ha, Sa = M.Animation || {}, Pa = Sa.support, Oa = {};
    Pa && M.cssease ? Oa = M.cssease : M.ease && (Oa = M.ease);
    Ua.animate = function() {
        this.j || (this.j = []);
        return Ua.pa(this, Na, arguments)
    };
    Ua.stop = function() {
        if (this.j) {
            for (var a = 0, b = this.j.length; a < b; a++)
                this.j[a].stop();
            this.j = v
        }
        return this
    };
    M.HashQuery = I({extend: L,properties: {typeCast: function(a) {
                var b = m(a);
                return a === b && (a = a.match("^[\"'](.*)[\"']$")) ? a[1] : b
            },makeHash: function(a) {
                var b = "#" + a.mode;
                a = a.vars;
                var c = "?", d;
                for (d in a)
                    b += c + d + "=" + JSON.stringify(a[d]), c = "&";
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
                        b[e] && (d = b[e].split("="), c[d[0]] =
                        this.typeCast(d[1]))
                }
                return {mode: a,vars: c}
            },getHash: function() {
                return this.parseHash(location.hash)
            }}});
    M.Audio = function(a) {
        if (!k.HTMLAudioElement)
            return r;
        for (var b = new Audio(""), c = a.suffix || [["mp3", "mpeg"], ["wav", "wav"], ["ogg", "ogg"], ["m4a", "mp4"]], d = [], e = 0, f = c.length; e < f; e++)
            b.canPlayType("audio/" + c[e][1]) && d.push([c[e][0]]);
        if (0 === d.length)
            return r;
        b.controls = a.controls ? n : r;
        b.preload = a.preload || "auto";
        b.autoplay = a.autoplay ? n : r;
        b.loop = a.loop ? n : r;
        b.src = a.dir + a.name + "." + d[0];
        return b
    };
    M.Sound = I({extend: L,init: function(a) {
            this._super();
            var b = this, c = a.autoplay, d = a.loop, e, f = a.element || x.body;
            a.preload = "auto";
            a.autoplay = a.loop = r;
            e = new M.Audio(a);
            b.k = e;
            if (!e)
                return r;
            c && this.contract(e, "canplay", function() {
                b.play()
            });
            d && this.contract(e, "ended", function() {
                b.stop();
                b.play()
            });
            a.oncanplay && this.contract(e, "canplay", a.oncanplay);
            a.onended && this.contract(e, "ended", a.onended);
            f.appendChild(e)
        },properties: {getAudio: g("k"),getCurrent: function() {
                return this.k.currentTime
            },getDuration: function() {
                return this.k.duration
            },
            setCurrent: function(a) {
                this.k.currentTime = a
            },play: function() {
                this.k.play()
            },pause: function() {
                this.k.pause()
            },stop: function() {
                this.setCurrent(0);
                this.pause()
            }}});
    M.Video = function(a) {
        if (!k.HTMLVideoElement)
            return r;
        for (var b = B("video"), c = a.suffix || [["webm", "webm"], ["mp4", "mp4"], ["ogv", "ogg"]], d = [], e = 0, f = c.length; e < f; e++)
            b.canPlayType("video/" + c[e][1]) && d.push([c[e][0]]);
        if (0 === d.length)
            return r;
        b.controls = a.controls ? n : r;
        b.preload = a.preload || "auto";
        b.autoplay = a.autoplay ? n : r;
        b.loop = a.loop ? n : r;
        b.src = a.dir + a.name + "." + d[0];
        return b
    };
    M.Movie = I({extend: L,init: function(a) {
            this._super();
            var b = this, c = a.autoplay, d = a.loop, e, f = a.element || x.body;
            a.preload = "auto";
            a.autoplay = a.loop = r;
            e = M.Video(a);
            b.m = e;
            if (!e)
                return r;
            c && this.contract(e, "canplay", function() {
                b.play()
            });
            d && this.contract(e, "ended", function() {
                b.stop();
                b.play()
            });
            a.oncanplay && this.contract(e, "canplay", a.oncanplay);
            a.onended && this.contract(e, "ended", a.onended);
            f.appendChild(e)
        },properties: {getVideo: g("m"),getCurrent: function() {
                return this.m.currentTime
            },getDuration: function() {
                return this.m.duration
            },
            setCurrent: function(a) {
                this.m.currentTime = a
            },play: function() {
                this.m.play()
            },pause: function() {
                this.m.pause()
            },stop: function() {
                this.setCurrent(0);
                this.pause()
            }}});
    M.Ajax = I({extend: L,init: function(a) {
            a && this.request(a)
        },properties: {request: function(a) {
                if ("json" === a.dataType)
                    return delete a.dataType, this.Oa(a);
                var b = a.url, c = a.callback || u, d = a.error || u, e = a.type || "GET", f = "", j;
                a.cash || (a.query || (a.query = {}), a.query["cirajaxcash" + Date.now()] = "0");
                a.query && (f = a.query, ba(f) && (f = s(f), f = encodeURI(f)));
                j = this.S = new XMLHttpRequest;
                j.onreadystatechange = function() {
                    return 4 != j.readyState ? r : 200 == j.status ? c(j.responseText, j) : d(j)
                };
                "GET" === e && (b = -1 !== b.indexOf("?") ? b + "&" : b + "?",
                b += f, f = "");
                j.open(e, b);
                "POST" === e && j.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                j.send(f)
            },abort: function() {
                this.S && this.S.abort()
            },json: function(a) {
                var b = a.callback, c = a.error;
                a.callback = function(a) {
                    b(JSON.parse(a))
                };
                a.error = function(a) {
                    c && c(a)
                };
                this.request(a)
            }}});
    M.Bind = I({extend: L,init: function(a) {
            this.z = a;
            this.add()
        },properties: {dispose: function() {
                this.remove();
                this.g()
            },getHandler: g("z"),add: function() {
                this.V(n)
            },remove: function() {
                this.V(r)
            },V: function(a) {
                a = a ? C : D;
                for (var b in this.z.events)
                    a(this.z.element, b, this.z.events[b])
            }}});
    M.Brush = I({extend: L,init: function(a) {
            this.o = a.canvas;
            this.aa = this.o.getContext("2d");
            this.setSize(a)
        },properties: {setSize: function(a) {
                a.width && (this.o.width = a.width);
                a.height && (this.o.height = a.height)
            },pigment: function(a) {
                var b = B("canvas"), c = B("img");
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
                        f--;
                        0 === f && b(j)
                    };
                    j[e] = d.pigment(a);
                    f++
                }
                var d = this, e, f = 0, j = {};
                b = b || u;
                for (e in a)
                    c(a[e]);
                return j
            },draw: function(a) {
                var b = 0, c = a.length, d;
                for (this.aa.clearRect(0, 0, this.o.width, this.o.height); b < c; b++)
                    d = a[b], this.aa.drawImage(d.image, d.x, d.y)
            }}});
    M.DataStore = I({extend: L,init: function(a) {
            a = a || {};
            if (a.single && M.DataStore.a)
                return M.DataStore.a;
            this.data = {};
            a.single && (M.DataStore.a = this)
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
    M.Deferred = I({extend: L,init: function() {
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
    M.DragFlick = I({extend: L,init: function(a) {
            this._super();
            a && this.bind(a)
        },properties: {I: function(a) {
                return a.changedTouches ? a.changedTouches[0] : a
            },amount: function(a) {
                var b = this, c, d, e = r;
                this.contract(a.element, J.switchdown, function(a) {
                    var j = b.I(a);
                    c = j.pageX;
                    d = j.pageY;
                    e = n;
                    ha(a)
                });
                this.contract(k, J.switchup, function(f) {
                    e && (f = b.I(f), a.callback({x: f.pageX - c,y: f.pageY - d}), e = r)
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
                        d(c.I(a))
                    })
                }
                var c = this, d = a.element, e = a.start || u, f = a.move || u, j = a.end || u, p = r, q = 0, G = 0;
                a.direction && c.direction({element: d,boundary: a.boundary,callback: a.direction});
                b(d, J.switchdown, function(a) {
                    p = n;
                    q = a.pageX;
                    G = a.pageY;
                    e({e: a,move: {x: q,y: G}})
                });
                b(x, J.switchmove, function(a) {
                    p && f({e: a,
                        move: {x: a.pageX - q,y: a.pageY - G}})
                });
                b(x, J.switchup, function(a) {
                    p && (j({e: a,move: {x: a.pageX - q,y: a.pageY - G}}), p = r)
                })
            }}});
    M.ExternalInterface = function(a) {
        a = a || {};
        var b = M.ExternalInterface, c;
        if (a.single && b.a)
            return b.a;
        c = a.android ? new b.Android(a) : new b.IOS(a);
        a.single && (b.a = c);
        return c
    };
    M.ExternalInterface.Android = I({extend: M.HashQuery,init: function(a) {
            a = a || {};
            this.wa = a.android;
            this.ca = a.externalObj
        },properties: {call: function(a) {
                this.wa[a.mode](this.makeHash(a))
            },addCallback: function(a, b) {
                var c = this;
                c.ca[a] = function(a) {
                    a = c.parseHash(a);
                    return b(a.vars)
                }
            },removeCallback: function(a) {
                delete this.ca[a]
            }}});
    M.ExternalInterface.IOS = I({extend: M.HashQuery,init: function() {
            this.p = {}
        },properties: {dispose: function() {
                for (var a in this.p)
                    this.removeCallback(a);
                this.g()
            },call: function(a) {
                this.setHash(a)
            },addCallback: function(a, b) {
                var c = this;
                c.p[a] = function() {
                    var d = c.getHash();
                    return d.mode === a ? (b(d.vars), n) : r
                };
                C(k, "hashchange", c.p[a])
            },removeCallback: function(a) {
                D(k, "hashchange", this.p[a]);
                delete this.p[a]
            }}});
    M.Facebook = I({extend: L,properties: {G: "https://www.facebook.com/dialog/feed?",shareURL: function(a) {
                var b = this.G + "app_id=" + a.app_id + "&redirect_uri=" + a.redirect_uri;
                return b += s({link: a.link,picture: a.picture,name: a.name,caption: a.caption,description: a.description})
            }}});
    M.FPS = I({extend: L,init: function(a) {
            a = a || {};
            a.criterion || (a.criterion = 20);
            if (a.single && M.FPS.a)
                return M.FPS.a;
            this.O = this.v = a.criterion;
            this.Ca = a.enterframe;
            this.ia = this.W(this.v);
            this.n = this.K = this.B = 0;
            a.manual || this.start();
            a.single && (M.FPS.a = this)
        },properties: {dispose: function() {
                this.stop();
                this.g()
            },getCriterion: g("v"),getSurver: g("O"),getFrameTime: g("ia"),enter: function() {
                this.Ca({criterion: this.v,surver: this.O})
            },start: function() {
                this.n = Date.now();
                this.B = setInterval(this.qa, this.ia, this)
            },qa: function(a) {
                a.K =
                Date.now();
                a.O = a.W(a.K - a.n);
                a.n = a.K;
                a.enter()
            },W: function(a) {
                return Math.round(1E3 / a)
            },stop: function() {
                clearInterval(this.B)
            }}});
    M.ImgLoad = I({extend: L,init: function(a) {
            this._super();
            this.ka = a.srcs;
            this.N = this.ka.length;
            this.ea = [];
            this.w = [];
            this.sa = a.onload || u;
            this.ta = a.onprogress || u;
            this.M = this.J = 0;
            this.la = r;
            a.manual || this.start()
        },properties: {na: function() {
                this.J++;
                this.M = this.J / this.N;
                this.ta(this.M);
                if (this.J >= this.N) {
                    for (var a = this.w.length; a--; )
                        this.uncontract(this.w[a]);
                    this.w = [];
                    this.sa(this.ea)
                }
            },start: function() {
                function a() {
                    b.na()
                }
                if (this.la)
                    return r;
                this.la = n;
                for (var b = this, c, d = 0, e = b.N; d < e; d++)
                    c = B("img"), c.src = b.ka[d],
                    b.w.push(b.contract(c, J.load, a)), b.ea.push(c)
            },getProgress: g("M")}});
    M.WindowLoad = I({extend: L,init: function(a) {
            this._super();
            if (a && a.onload)
                this.onload(a.onload)
        },properties: {onload: function(a) {
                var b = this, c;
                c = this.contract(k, J.load, function() {
                    b.uncontract(c);
                    a()
                })
            }}});
    M.LocalStorage = I({extend: L,init: function(a) {
            a = a || {};
            if (a.single && M.LocalStorage.a)
                return M.LocalStorage.a;
            this.d = a.namespace ? a.namespace + "-" : "";
            a.single && (M.LocalStorage.a = this)
        },properties: {c: k.localStorage,set: function(a, b) {
                this.c.setItem(this.d + a, JSON.stringify(b));
                return n
            },get: function(a) {
                var b = {}, c;
                if (a)
                    return JSON.parse(this.c.getItem(this.d + a));
                for (c in this.c)
                    this.d ? (a = c.split(this.d)[1]) && (b[a] = JSON.parse(this.c[c])) : b[c] = JSON.parse(this.c[c]);
                return b
            },remove: function(a) {
                a = this.d + a;
                if (!this.c.getItem(a))
                    return r;
                this.c.removeItem(a);
                return n
            },reset: function() {
                if (!this.d)
                    return this.c.clear(), n;
                for (var a in this.c)
                    this.remove(a)
            }}});
    M.Mobile = I({extend: L,init: function() {
            this._super()
        },properties: {getZoom: function() {
                return x.body.clientWidth / k.innerWidth
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
                a || h();
                this.A = this.contract(x, J.touchmove, ha)
            },revivalScroll: function(a) {
                if (!this.A)
                    return r;
                a || h();
                this.uncontract(this.A);
                delete this.A
            },hideAddress: function() {
                function a() {
                    0 === k.pageYOffset && h()
                }
                function b() {
                    setTimeout(a, 100)
                }
                this.contract(k, J.load, b, r);
                this.contract(k, ta, b, r)
            },getOrientation: function() {
                return 90 !== Math.abs(k.orientation) && k.innerWidth < k.innerHeight ? {portrait: n,landscape: r} : {portrait: r,landscape: n}
            },bindOrientation: function(a) {
                function b(a) {
                    j.push(f.contract(k, J.load, a));
                    j.push(f.contract(k, ta, a));
                    j.push(f.contract(k, J.resize, a))
                }
                function c() {
                    for (var a = j.length; a--; )
                        f.uncontract(j[a]);
                    j = []
                }
                function d() {
                    e();
                    c()
                }
                function e() {
                    if (f.getOrientation().portrait)
                        return a.portrait(), n;
                    a.landscape()
                }
                var f = this, j = [];
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
    M.FontImg = I({extend: L,init: function(a) {
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
    M.Observer = I({extend: L,init: function(a) {
            a = a || {};
            if (a.single && M.Observer.a)
                return M.Observer.a;
            this.L = {};
            a.single && (M.Observer.a = this)
        },properties: {on: function(a, b) {
                var c = this.L;
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
                var c = this.L;
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
                var c = this.L[a], d, e;
                if (!c)
                    return r;
                for (e = c.length; e--; )
                    (d = c[e]) && d(b);
                return n
            }}});
    M.PreRender = I({extend: L,init: function(a) {
            a = a || {};
            a.loopblur || (a.loopblur = 20);
            this.i = a.elements || [];
            this.da = a.guesslimit || 30;
            this.Ha = a.onrendered || u;
            this.ga = a.looptime || 100;
            this.Ga = this.ga + a.loopblur;
            a.manual || this.start()
        },properties: {start: function() {
                var a;
                for (a = this.i.length; a--; )
                    na(this.i[a]);
                this.n = Date.now();
                this.B = setInterval(function(a) {
                    var c = Date.now(), d = c - a.n;
                    a.n = c;
                    if (d < a.Ga && (a.da--, 1 > a.da)) {
                        clearInterval(a.B);
                        for (c = a.i.length; c--; )
                            oa(a.i[c]);
                        a.Ha()
                    }
                }, this.ga, this)
            }}});
    M.Route = I({extend: L,init: function(a) {
            if (a.single && M.Route.a)
                return M.Route.a;
            this.t = a.target || "";
            this.ra = a.noregex;
            this.r = a.action;
            a.manual || this.start();
            a.single && (M.Route.a = this)
        },properties: {start: function() {
                this.fire(this.t)
            },fire: function(a) {
                var b;
                if (this.ra && this.r[a])
                    return this.r[a](a);
                for (b in this.r)
                    if (a.match(b))
                        this.r[b](b)
            }}});
    M.ScriptLoad = I({extend: L,init: function() {
            this._super();
            this.i = []
        },properties: {requests: function(a, b) {
                function c(c) {
                    var f = a[c].callback;
                    a[c].callback = function(a) {
                        f(a);
                        e--;
                        0 === e && b(d.i)
                    };
                    d.request(a[c])
                }
                for (var d = this, e = 0, f = a.length; e < f; e++)
                    c(e)
            },request: function(a) {
                var b = this, c = B("script"), d;
                c.src = a.src;
                x.body.appendChild(c);
                b.i.push(c);
                a.callback && (d = b.contract(c, J.load, function() {
                    b.uncontract(d);
                    a.callback.apply(this, arguments)
                }))
            }}});
    function Z(a) {
        return Va ? $.getResponseHeader(a) : r
    }
    function Wa(a) {
        var b = new XMLHttpRequest;
        b.onload = function() {
            a(b)
        };
        b.open("HEAD", location.href + "?update" + Date.now() + "=1");
        b.send(v);
        return b
    }
    var $, Va = r;
    M.ServerMeta = I({extend: L,init: function(a) {
            a = a || {};
            var b = a.callback || u;
            $ ? b($) : $ = Wa(function() {
                Va = n;
                b($)
            })
        },properties: {date: function(a) {
                return Wa(function(b) {
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
    M.SessionStorage = I({extend: L,init: function(a) {
            a = a || {};
            if (a.single && M.SessionStorage.a)
                return M.SessionStorage.a;
            this.d = a.namespace ? a.namespace + "-" : "";
            a.single && (M.SessionStorage.a = this)
        },properties: {c: k.sessionStorage,set: function(a, b) {
                this.c.setItem(this.d + a, JSON.stringify(b));
                return n
            },get: function(a) {
                var b = {}, c;
                if (a)
                    return JSON.parse(this.c.getItem(this.d + a));
                for (c in this.c)
                    this.d ? (a = c.split(this.d)[1]) && (b[a] = JSON.parse(this.c[c])) : b[c] = JSON.parse(this.c[c]);
                return b
            },remove: function(a) {
                a = this.d +
                a;
                if (!this.c.getItem(a))
                    return r;
                this.c.removeItem(a);
                return n
            },reset: function() {
                if (!this.d)
                    return this.c.clear(), n;
                for (var a in this.c)
                    this.remove(a)
            }}});
    M.Surrogate = I({extend: L,init: function(a) {
            this.za = a.delay;
            this.u = a.callback
        },properties: {dispose: function() {
                this.clear();
                this.g()
            },request: function(a) {
                this.xa = a;
                this.clear();
                this.R = setTimeout(this.flush, this.za, this)
            },flush: function(a) {
                a = a || this;
                a.u(a.xa)
            },clear: function() {
                clearInterval(this.R)
            }}});
    M.Throttle = I({extend: L,init: function(a) {
            this.Ja = a.waittime;
            this.u = a.callback
        },properties: {dispose: function() {
                this.unlock();
                this.g()
            },request: function(a) {
                var b = this;
                if (b.fa)
                    return b.Q = a, r;
                b.u(a);
                b.lock();
                b.R = setTimeout(function() {
                    b.Q && (b.u(b.Q), b.Q = v);
                    b.unlock()
                }, b.Ja, b)
            },lock: function() {
                this.fa = n
            },unlock: function(a) {
                a = a || this;
                a.fa = r;
                clearInterval(a.R)
            }}});
    M.Timer = function(a) {
        function b() {
            O = Date.now();
            var a = f - (O - wa) / 1E3;
            0 > a && (a = 0);
            ya = c(a);
            q(ya);
            if (O > xa)
                return Qa.stop(), G(), n;
            Ra = setTimeout(b, p);
            return r
        }
        function c(a) {
            var b;
            b = ("" + a).split(".");
            a = b[0];
            b = b[1] ? b[1] : "";
            a = d({ja: a,ba: va.Ea});
            b = d({ja: b,ba: va.Da,Fa: n});
            return a + "." + b
        }
        function d(a) {
            var b = "" + a.ja, c = a.ba, d = c - b.length;
            return !a.Fa ? -1 < d ? e(d, 0) + b : e(c, 9) : 0 < d ? b + e(d, 0) : b.slice(0, c)
        }
        function e(a, b) {
            var c = "";
            for (b = "" + b; 0 < a; )
                c += b, a--;
            return c
        }
        var f = a.limit, j = 1E3 * f, p = 1E3 * a.interval, q = a.onupdate, G = a.ontimeup,
        va;
        a = a.template.split(".");
        va = {Ea: a[0].length,Da: a[1].length};
        var wa = 0, O = 0, xa = j, ya = c(f), Ra, Qa = {getLimit: function() {
                return f
            },getTime: function() {
                return ya
            },getProgress: function() {
                return 1 - (xa - O) / j
            },setUpdate: function(a) {
                q = a
            },setTimeup: function(a) {
                G = a
            },countDown: function() {
                O = wa = Date.now();
                xa = wa + j;
                b()
            },stop: function() {
                clearInterval(Ra)
            }};
        return Qa
    };
    M.Twitter = I({extend: L,properties: {G: "https://twitter.com/intent/tweet?",shareURL: function(a) {
                var b = a.caption || "", c = a.name, d = a.hash, e = this.G;
                return e += s({url: a.redirect_uri,text: b + (c ? " \u300c" + c + "\u300d" : "") + (d ? " " + d : "")})
            }}});
    M.XML = I({extend: L,init: function(a) {
            this.b = B("div");
            this.T = {};
            a && a.data && this.setData(a.data)
        },properties: {getData: g("T"),setData: function(a) {
                this.T = this.b.innerHTML = a
            },$: function(a) {
                return this.b.querySelector(a)
            },$$: function(a) {
                return ja(a, this.b)
            }}});
}());
