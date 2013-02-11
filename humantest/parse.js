 /*! cir.js v0.8.4 | (c) 2013 Atsushi Mizoue. */(function() {
    function f(a) {
        return function() {
            return this[a]
        }
    }
    function j(a) {
        return "cubic-bezier(" + a + ")"
    }
    function aa(a, b) {
        for (var c = k("p"), d = l, e, g = m, h = a.length, r, s = RegExp("^(.*?)" + a[0] + "$", "i"); h--; )
            if (c.style[a[h]] !== n) {
                d = p;
                (e = a[h].match(s)[1]) ? (g = e.toLowerCase(), b = g + b, g = "-" + g + "-") : b = b.toLowerCase();
                c = q(ba("head"), k("style", {type: "text/css"}));
                r = c.sheet;
                break
            }
        return {ka: b,ua: d,prefix: e,ia: g,sheet: r}
    }
    function t(a) {
        return u.JSON.parse(a)
    }
    function ca(a) {
        return u.JSON.stringify(a)
    }
    function da(a) {
        a = a || m;
        a = m + a;
        return a.match(/^(.*?)([0-9\.]+)(.*)$/)
    }
    function v() {
        return Date.now()
    }
    function w() {
        u.scrollTo(0, 1)
    }
    function ea(a, b) {
        for (var c in b)
            a[c] = b[c];
        return a
    }
    function ga(a) {
        var b = m + a;
        return b.match("^{.*}$") ? t(b) : b.match("^[0-9.]+$") ? 1 * b : "true" === b ? p : "false" === b ? l : a
    }
    function ha(a, b, c) {
        return a.split(b).join(c)
    }
    function ia(a) {
        var b = m, c = m, d;
        for (d in a)
            a[d] && (c += b + d + "=" + encodeURIComponent(a[d]), b = "&");
        return c
    }
    function x(a, b) {
        return Object.prototype.toString.call(b) === "[object " + a + "]" ? p : l
    }
    function ja(a) {
        return x("Object", a)
    }
    function y(a) {
        return x("Number", a)
    }
    function ka(a) {
        return x("String", a)
    }
    function z(a) {
        return x("Function", a)
    }
    function la(a) {
        return x("Boolean", a)
    }
    function ma(a) {
        return x("Array", a)
    }
    function na(a) {
        return !x("Undefind", a)
    }
    function oa() {
        return "ontouchstart" in u
    }
    function A() {
    }
    function pa(a) {
        a.preventDefault();
        return l
    }
    function B(a, b) {
        b = b || navigator.userAgent;
        return !!b.match(a)
    }
    function D(a, b) {
        return function() {
            return b.apply(a, arguments)
        }
    }
    function qa(a, b, c) {
        b = b || a;
        c = c || b;
        for (i in b)
            z(b[i]) && (c[i] = D(a, b[i]));
        ea(a, c);
        return c
    }
    function ba(a) {
        return E.querySelector(a)
    }
    function ra(a, b) {
        var c = b.querySelectorAll(a), d = [];
        d.push.apply(d, c);
        return d
    }
    function F(a, b) {
        for (var c = a.className, c = c ? c.split(" ") : [], d = c.length; d--; )
            if (b === c[d])
                return p;
        return l
    }
    function G(a, b) {
        if (!F(a, b)) {
            var c = m, d = a.className;
            d && (c = " ");
            a.className = d + c + b
        }
    }
    function H(a, b) {
        if (F(a, b)) {
            var c, d = [], e;
            c = a.className.split(" ");
            for (e = c.length; e--; )
                b !== c[e] && d.push(c[e]);
            a.className = d.join(" ")
        }
    }
    function sa(a, b) {
        if (F(a, b))
            return H(a, b);
        G(a, b)
    }
    function ta(a, b, c) {
        var d;
        if (ja(b)) {
            for (d in b)
                a.setAttribute(d, b[d]);
            return p
        }
        return c || c === m ? a.setAttribute(b, c) : a.getAttribute(b)
    }
    function ua(a, b) {
        a.removeAttribute(b)
    }
    function k(a, b) {
        var c = E.createElement(a);
        b && ta(c, b);
        return c
    }
    function I(a, b, c) {
        a.addEventListener(b, c, l)
    }
    function J(a, b, c) {
        a.removeEventListener(b, c, l)
    }
    function K(a) {
        a.style.display = "block"
    }
    function va(a) {
        a.style.display = "none"
    }
    function wa(a, b) {
        a.style.opacity = b
    }
    function L(a, b) {
        var c = a.style, d, e, g;
        for (d in b)
            e = d, g = b[d], y(g) && (g += "px"), c[e] = g
    }
    function xa(a) {
        return E.defaultView.getComputedStyle(a, N)
    }
    function ya(a) {
        return a.parentNode
    }
    function q(a, b) {
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
    function Da(a, b) {
        for (var c = [], d = p; d; )
            a[b] && c[c.length - 1] !== a[b] && c.push(a[b]), a._superclass && a._superclass.prototype ? a = a._superclass.prototype : d = l;
        return c
    }
    function Ea(a, b, c) {
        return O.klass({extend: a,init: b,prop: c})
    }
    function P(a, b) {
        return Ea(O.Base, a, b)
    }
    function Fa(a) {
        var b = k(a.type);
        b.controls = a.controls ? p : l;
        b.preload = a.preload || "auto";
        b.autoplay = a.autoplay ? p : l;
        b.loop = a.loop ? p : l;
        b.src = a.dir + a.name + "." + a.suffix[0][0];
        return b
    }
    function Ga(a, b) {
        if (!u["HTML" + a + "Element"])
            return l;
        a = a.toLowerCase();
        for (var c = k(a), d = [], e = 0, g = b.length; e < g; e++)
            c.canPlayType(a + "/" + b[e][1]) && d.push(b[e]);
        return d.length ? d : l
    }
    var u = window, E = document, p = !0, l = !1, N = null, m = "", Q = {}, n = void 0, R = oa(), S, Ka = "orientationchange", Ma = j("0.19,1,0.22,1"), T = 1.70158, O = C = {};
    Date.now || (Date.now = function() {
        return 1 * new Date
    });
    O.util = {win: u,doc: E,pageTop: w,override: ea,replaceAll: ha,template: function(a, b) {
            for (var c in b)
                a = ha(a, "<%= " + c + " %>", b[c]);
            return a
        },windowOpen: function(a, b, c) {
            var d, e = [];
            for (d in c)
                la(c[d]) && (c[d] === p ? c[d] = "yes" : c[d] === l && (c[d] = "no")), e.push(d + "=" + c[d]);
            return u.open(a, b, e.join(","))
        },typeCast: ga,makeQueryString: ia,parseQueryString: function(a) {
            a = a.replace(/^[\#\?]/, m);
            a = a.split("&");
            for (var b = a.length, c, d = {}; b--; )
                c = a[b].split("="), d[c[0]] = ga(decodeURIComponent(c[1]));
            return d
        },is: x,isObject: ja,isNumber: y,
        isString: ka,isFunction: z,isBoolean: la,isArray: ma,isDefined: na,isTouchable: oa,nullFunction: A,eventPrevent: pa,eventStop: function(a) {
            a.stopPropagation();
            return l
        },checkUserAgent: B,bind: D,owner: qa};
    O.dom = {$: ba,$$: function(a) {
            return ra(a, E)
        },$child: function(a, b) {
            return b.querySelector(a)
        },$$child: ra,$id: function(a) {
            return E.getElementById(a)
        },on: I,off: J,create: k,show: K,hide: va,opacity: wa,hasClass: F,addClass: G,removeClass: H,toggleClass: sa,css: L,computedStyle: xa,append: q,parent: ya,before: za,after: Aa,remove: Ba,attr: ta,removeAttr: ua,html: Ca};
    O.klass = function(a) {
        function b() {
            for (var a = Da(this, "__init__"), b = a.length; b--; )
                a[b].apply(this, arguments)
        }
        var c = a.init || function() {
        }, d = a.prop;
        (a = a.extend) && O.extend(b, a);
        b.prototype.__init__ = c;
        ea(b.prototype, d);
        return b
    };
    O.klass.ancestors = Da;
    O.extend = function(a, b) {
        function c() {
        }
        c.prototype = b.prototype;
        a.prototype = new c;
        var d = a.prototype;
        d._superclass = b;
        d._super = function() {
            var a = this.Ja, a = a ? a.prototype._superclass : this.Ja = b;
            a.apply(this, arguments)
        }
    };
    O.Base = Ea(n, function() {
        this.s = {}
    }, {J: 0,dispose: function() {
            for (var a = Da(this, "disposeInternal"), b = 0, c = a.length; b < c; b++)
                a[b].call(this);
            for (b in this.s)
                J.apply(N, this.s[b]);
            for (b in this)
                this[b] && z(this[b].dispose) && this[b].dispose();
            this.__proto__ = N;
            for (b in this)
                delete this[b];
            return N
        },contract: function(a, b, c) {
            I(a, b, c);
            this.J++;
            this.s[this.J] = [a, b, c];
            return this.J
        },uncontract: function(a) {
            if (a) {
                var b = this.s[a];
                delete this.s[a];
                J(b[0], b[1], b[2])
            }
        }});
    S = P(n, {SWITCHCLICK: R ? "touchstart" : "click",SWITCHDOWN: R ? "touchstart" : "mousedown",SWITCHMOVE: R ? "touchmove" : "mousemove",SWITCHUP: R ? "touchend" : "mouseup",SWITCHOVER: R ? "touchstart" : "mouseover",SWITCHOUT: R ? "touchend" : "mouseout",LOAD: "load",CHANGE: "change",CLICK: "click",MOUSEDOWN: "mousedown",MOUSEMOVE: "mousemove",MOUSEUP: "mouseup",MOUSEOVER: "mouseover",MOUSEOUT: "mouseout",TOUCHSTART: "touchstart",TOUCHMOVE: "touchmove",TOUCHEND: "touchend",RESIZE: "resize"});
    O.Event = S;
    S = O.e = new S;
    O.ease = {linear: function(a, b, c, d) {
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
            return c * (a /= d) * a * ((T + 1) * a - T) + b
        },outBack: function(a, b, c, d) {
            return c * ((a = a / d - 1) * a * ((T + 1) * a + T) + 1) + b
        },inOutBack: function(a, b, c, d) {
            return 1 > (a /= d / 2) ? c / 2 * a * a * (((T *= 1.525) + 1) * a - T) + b : c / 2 * ((a -= 2) * a * (((T *= 1.525) + 1) * a + T) + 2) + b
        }};
    O.cssease = {linear: "linear",inCubic: j("0.55,0.055,0.675,0.19"),outCubic: j("0.215,0.61,0.355,1"),inOutCubic: j("0.645,0.045,0.355,1"),inQuart: j("0.895,0.03,0.685,0.22"),outQuart: j("0.165,0.84,0.44,1"),inOutQuart: j("0.77,0,0.175,1"),inQuint: j("0.755,0.05,0.855,0.06"),outQuint: j("0.23,1,0.32,1"),inOutQuint: j("0.86,0,0.07,1"),inSine: j("0.47,0,0.745,0.715"),outSine: j("0.39,0.575,0.565,1"),inOutSine: j("0.445,0.05,0.55,0.95"),inExpo: j("0.95,0.05,0.795,0.035"),outExpo: j("0.19,1,0.22,1"),inOutExpo: j("1,0,0,1"),
        inCirc: j("0.6,0.04,0.98,0.335"),outCirc: j("0.075,0.82,0.165,1"),inOutCirc: j("0.785,0.135,0.15,0.86"),inQuad: j("0.55,0.085,0.68,0.53"),outQuad: j("0.25,0.46,0.45,0.94"),inOutQuad: j("0.455,0.03,0.515,0.955"),inBack: [j("0.6,0,0.735,0.045"), j("0.6,-0.28,0.735,0.045")],outBack: [j("0.175,0.885,0.32,1"), j("0.175,0.885,0.32,1.275")],inOutBack: [j("0.68,0,0.265,1"), j("0.68,-0.55,0.265,1.55")]};
    var Na = aa(["animation", "webkitAnimation"], "Animation"), Oa = Na.ua, Pa = Na.prefix, Qa = Na.ia, Ra = Na.ka, U = Na.sheet, V;
    V = O.Animation = P(function(a, b, c) {
        c = c || Q;
        this.q = c.onComplete || A;
        this.a = a;
        V.id++;
        this.d = "ciranim" + V.id;
        a = c.duration || V.duration;
        var d = c.ease || Ma, e, g = {};
        for (e in b)
            g[e] = b[e], y(g[e]) && (g[e] += "px");
        this.k = g;
        g = ha(ha(ca(g), '"', m), ",", ";");
        U.insertRule("@" + Qa + "keyframes " + this.d + "{to" + g + "}", U.cssRules.length);
        ma(d) || (d = [d]);
        b = this.d;
        e = 0;
        for (var g = d.length, h = m; e < g; e++)
            h += Qa + "animation:" + b + " " + a + "ms " + d[e] + " 0s 1 normal both;";
        U.insertRule("." + b + "{" + h + "}", U.cssRules.length);
        c.manual || this.start()
    }, {ba: function() {
            J(this.a,
            Ra + "End", this.Z);
            J(this.a, "animationend", this.Z)
        },disposeInternal: function() {
            this.stop()
        },start: function() {
            function a(a) {
                var d = U.cssRules, e = d.length, g;
                b.ba();
                if ("webkit" === Pa) {
                    for (; e--; )
                        g = d[e].name || (m + d[e].selectorText).split(".")[1], g === b.d && U.deleteRule(e);
                    H(b.a, b.d);
                    L(b.a, b.k)
                }
                b.q(a)
            }
            var b = this;
            b.Z = a;
            I(b.a, Ra + "End", a);
            I(b.a, "animationend", a);
            G(b.a, b.d)
        },stop: function() {
            var a = {};
            a[Qa + "animation-play-state"] = "paused";
            L(this.a, a);
            this.ba()
        }});
    V.id = 0;
    V.duration = 500;
    V.support = Oa;
    var Sa = aa(["transitionProperty", "webkitTransitionProperty"], "Transition"), Ta = Sa.ua, Ua = Sa.ia, Va = Sa.ka, Wa = Sa.sheet, W;
    W = O.Transition = P(function(a, b, c) {
        c = c || Q;
        W.id++;
        this.d = "cirtrans" + W.id;
        var d = [];
        ea({}, b);
        var e, g = c.duration || W.duration, h = c.ease || Ma;
        ma(h) || (h = [h]);
        for (e in b)
            d.push(e);
        e = 0;
        for (var r = h.length, s = m, s = s + (Ua + "transition-property:" + d.join(" ") + ";" + Ua + "transition-duration:" + g + "ms;"); e < r; e++)
            s += Ua + "transition-timing-function:" + h[e] + ";";
        Wa.insertRule("." + this.d + "{" + s + "}", Wa.cssRules.length);
        this.a = a;
        this.k = b;
        this.q = c.onComplete || A;
        c.manual || this.start()
    }, {disposeInternal: function() {
            this.stop()
        },start: function() {
            var a =
            this;
            a.C = function(b) {
                a.stop();
                setTimeout(function() {
                    a.q(b)
                }, 1)
            };
            I(a.a, Va + "End", a.C);
            I(a.a, "transitionend", a.C);
            G(a.a, a.d);
            L(a.a, a.k)
        },stop: function() {
            var a = Wa.cssRules, b = a.length, c;
            J(this.a, Va + "End", this.C);
            J(this.a, "transitionend", this.C);
            for (H(this.a, this.d); b--; )
                if (c = a[b].name || (m + a[b].selectorText).split(".")[1], c === this.d) {
                    Wa.deleteRule(b);
                    break
                }
        }});
    W.id = 0;
    W.support = Ta;
    W.duration = 500;
    var X = O.Tweener = P(function(a, b, c) {
        var d;
        c = c || {};
        this.D = a;
        this.k = [];
        for (d in b)
            a = b[d], a.name = d, a.Sa = a.to - a.from, a.prefix = a.prefix || m, a.suffix = a.suffix || "px", this.k.push(a);
        this.Y = c.duration || X.duration;
        this.Ta = c.ease || this.Aa;
        this.q = c.onComplete;
        c.manual || this.start()
    }, {disposeInternal: function() {
            this.stop()
        },Aa: function(a, b, c, d) {
            return c * (-Math.pow(2, -10 * a / d) + 1) + b
        },da: u.requestAnimationFrame ? function(a) {
            requestAnimationFrame(a)
        } : u.webkitRequestAnimationFrame ? function(a) {
            webkitRequestAnimationFrame(a)
        } :
        u.mozRequestAnimationFrame ? function(a) {
            mozRequestAnimationFrame(a)
        } : u.oRequestAnimationFrame ? function(a) {
            oRequestAnimationFrame(a)
        } : u.msRequestAnimationFrame ? function(a) {
            msRequestAnimationFrame(a)
        } : function(a) {
            setTimeout(a, 1E3 / X.hb)
        },loop: function() {
            for (var a = this, b = X.I, c, d = v(), e, g = b.length, h; g--; )
                if (c = b[g], i = c.k.length, e = d - c.Oa, e < c.Y)
                    for (; i--; )
                        h = c.k[i], X.ea(c.D, h, c.Ta(e, h.from, h.Sa, c.Y));
                else {
                    for (; i--; )
                        h = c.k[i], X.ea(c.D, h, h.to);
                    c.q && c.q();
                    b.splice(g, 1)
                }
            b.length ? a.da(function() {
                a.loop()
            }) : this.stop()
        },
        start: function() {
            var a = this;
            a.Oa = v();
            X.I.push(a);
            X.T || (X.T = 1, a.da(function() {
                a.loop()
            }))
        },stop: function() {
            X.I = [];
            clearInterval(X.T);
            X.T = N
        }});
    X.ea = function(a, b, c) {
        a[b.name] = b.prefix + c + b.suffix
    };
    X.I = [];
    X.fps = 30;
    X.duration = 500;
    O.$ = function(a, b, c, d, e) {
        function g() {
        }
        g.prototype = O.$.qa;
        ka(a) ? (b = b || E, c = b.querySelectorAll(a)) : (c = [a], a = m);
        e = c.length;
        d = new g;
        for (d.length = e; e--; )
            d[e] = c[e];
        return d
    };
    function Y(a, b, c) {
        var d = a.length;
        for (c = Xa(c); d--; )
            c[0] = a[d], b.apply(a, c);
        return a
    }
    function Z(a, b, c) {
        c = Xa(c);
        c[0] = a[0];
        return b.apply(N, c)
    }
    function Xa(a) {
        var b = [N];
        b.push.apply(b, a);
        return b
    }
    O.$.qa = {Ba: Y,eb: Z,bb: Xa,querySelectorAll: function(a) {
            return this[0].querySelectorAll(a)
        },find: function(a) {
            return O.$(a, this.gb)
        },parent: function() {
            return O.$(ya(this[0]))
        },on: function() {
            return Y(this, I, arguments)
        },off: function() {
            return Y(this, J, arguments)
        },show: function() {
            return Y(this, K)
        },hide: function() {
            return Y(this, va)
        },opacity: function() {
            return Y(this, wa, arguments)
        },hasClass: function() {
            return Z(this, F, arguments)
        },addClass: function() {
            return Y(this, G, arguments)
        },removeClass: function() {
            return Y(this,
            H, arguments)
        },toggleClass: function() {
            return Y(this, sa, arguments)
        },css: function() {
            return Y(this, L, arguments)
        },html: function() {
            return Z(this, Ca, arguments)
        },attr: function() {
            return Z(this, ta, arguments)
        },removeAttr: function() {
            return Y(this, ua, arguments)
        },append: function() {
            return Y(this, q, arguments)
        },before: function() {
            return Z(this, za, arguments)
        },after: function() {
            return Z(this, Aa, arguments)
        },remove: function() {
            return Y(this, Ba, arguments)
        }};
    function Ya(a, b, c, d, e) {
        z(c) && (e = c, c = N);
        z(d) && !e && (e = d, d = N);
        d && (d = Za[d]);
        c = {duration: c,ease: d,onComplete: e};
        if ($a)
            b = new ab(a, b, c);
        else {
            d = O.Tweener;
            e = a.style;
            var g;
            a = xa(a);
            var h, r, s = {};
            for (g in b)
                h = da(b[g]), r = a.getPropertyValue(g), r = !r || "none" === r ? 0 : 1 * da(r)[2], s[g] = {from: r,to: 1 * h[2] || 0,prefix: h[1],suffix: h[3]};
            b = new d(e, s, c)
        }
        this.o.push(b)
    }
    var bb = O.$.qa, ab = O.Animation || {}, $a = ab.support, Za = {};
    $a && O.cssease ? Za = O.cssease : O.ease && (Za = O.ease);
    bb.animate = function() {
        this.o || (this.o = []);
        return bb.Ba(this, Ya, arguments)
    };
    bb.stop = function() {
        if (this.o) {
            for (var a = this.o.length; a--; )
                this.o[a].stop();
            this.o = N
        }
        return this
    };
    O.HashQuery = P(n, {typeCast: function(a) {
            var b = ga(a);
            return a === b && (a = a.match("^[\"'](.*)[\"']$")) ? a[1] : b
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
            var b, c, d, e;
            b = decodeURIComponent(a).split("#")[1];
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
            return {mode: a,
                vars: c}
        },getHash: function() {
            return this.parseHash(location.hash)
        }});
    var cb = P(function(a) {
        var b = this, c = a.autoplay, d = a.loop, e, g = a.el || E.body;
        a.preload = "auto";
        a.autoplay = a.loop = l;
        switch (a.type) {
            case "Audio":
                e = O.Audio(a);
                break;
            default:
                e = O.Video(a)
        }
        if (b.j = e) {
            if (c) {
                var h;
                h = this.contract(e, "canplay", function() {
                    b.uncontract(h);
                    b.play()
                })
            }
            d && this.loop(p);
            a.oncanplay && this.contract(e, "canplay", a.oncanplay);
            a.onended && this.contract(e, "ended", a.onended);
            q(g, e)
        }
    }, {disposeInternal: function() {
            Ba(this.j)
        },getElement: f("j"),getCurrent: function() {
            return this.j.currentTime
        },getDuration: function() {
            return this.j.duration
        },
        setCurrent: function(a) {
            this.j.currentTime = a
        },loop: function(a) {
            var b = this;
            b.h && (b.uncontract(b.h), delete b.h);
            a && (b.h = b.contract(b.j, "ended", function() {
                b.stop();
                b.play()
            }))
        },play: function() {
            this.j.play()
        },pause: function() {
            this.j.pause()
        },stop: function() {
            this.setCurrent(0);
            this.pause()
        }});
    O.Audio = function(a) {
        a.type = "audio";
        a.suffix = O.Audio.support;
        return Fa(a)
    };
    O.Audio.support = Ga("Audio", [["mp3", "mpeg"], ["wav", "wav"], ["ogg", "ogg"], ["m4a", "mp4"]]);
    O.Sound = function(a) {
        a.type = "Audio";
        return new cb(a)
    };
    O.Sound.support = O.Audio.support;
    O.Video = function(a) {
        a.type = "video";
        a.suffix = O.Video.support;
        return Fa(a)
    };
    O.Video.support = Ga("Video", [["webm", "webm"], ["mp4", "mp4"], ["ogv", "ogg"]]);
    O.Movie = function(a) {
        a.type = "Video";
        return new cb(a)
    };
    O.Movie.support = O.Video.support;
    O.Ajax = P(function(a) {
        a && this.request(a)
    }, {request: function(a) {
            if ("json" === a.dataType)
                return delete a.dataType, this.ib(a);
            var b = a.url, c = a.callback || A, d = a.error || A, e = a.type || "GET", g = m, h = this.va = new XMLHttpRequest;
            a.cash || (a.query || (a.query = {}), a.query["cir" + v()] = "0");
            a.query && (g = a.query, ja(g) && (g = encodeURI(ia(g))));
            h.onreadystatechange = function() {
                if (4 == h.readyState) {
                    if (200 == h.status)
                        return c(h.responseText, h);
                    d(h)
                }
            };
            "GET" === e && (b = -1 !== b.indexOf("?") ? b + "&" : b + "?", b += g, g = m);
            h.open(e, b);
            "POST" === e && h.setRequestHeader("Content-Type",
            "application/x-www-form-urlencoded");
            h.send(g)
        },abort: function() {
            this.va && this.va.abort()
        },json: function(a) {
            var b = a.callback, c = a.error;
            a.callback = function(a) {
                b(t(a))
            };
            a.error = function(a) {
                c && c(a)
            };
            this.request(a)
        }});
    O.Handle = P(function(a) {
        this.v = a;
        this.attach()
    }, {disposeInternal: function() {
            this.detach()
        },attach: function() {
            this.i(I)
        },detach: function() {
            this.i(J)
        },i: function(a) {
            for (var b in this.v.events)
                a(this.v.el, b, this.v.events[b])
        }});
    O.Brush = P(function(a) {
        this.r = a.canvas;
        this.cb = this.r.getContext("2d");
        this.setSize(a)
    }, {setSize: function(a) {
            a.width && (this.r.width = a.width);
            a.height && (this.r.height = a.height)
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
                var c = a.onload || A;
                a.onload = function(a, d) {
                    c(a, d);
                    g--;
                    0 === g && b(h)
                };
                h[e] = d.pigment(a);
                g++
            }
            var d = this, e, g = 0, h = {};
            b = b || A;
            for (e in a)
                c(a[e]);
            return h
        },draw: function(a) {
            var b = 0, c = a.length, d;
            for (this.Qa.clearRect(0, 0, this.r.width, this.r.height); b < c; b++)
                d = a[b], this.Qa.drawImage(d.image, d.x, d.y)
        }});
    O.Brush.support = !!u.HTMLCanvasElement;
    O.Datetime = function(a) {
        if (!a || y(a))
            return new Date(a);
        a = a.split(/[T:\-\+\/\s]/);
        3 === a.length && (a = a.concat([0, 0, 0]));
        return new Date(1 * a[0], a[1] - 1, 1 * a[2], 1 * a[3], 1 * a[4], 1 * a[5])
    };
    O.DataStore = P(function() {
        this.c = {}
    }, {set: function(a, b) {
            this.c[a] = b
        },get: function(a) {
            if (a)
                return this.c[a];
            a = {};
            for (var b in this.c)
                a[b] = this.c[b];
            return a
        },remove: function(a) {
            na(this.c[a]) && delete this.c[a]
        },reset: function() {
            this.c = {}
        }});
    var db = P(function(a) {
        this.p = a.namespace ? a.namespace + "-" : m;
        this.g = u[a.type + "Storage"]
    }, {set: function(a, b) {
            this.g.setItem(this.p + a, ca(b))
        },get: function(a) {
            var b = {}, c;
            if (a)
                return t(this.g.getItem(this.p + a));
            for (c in this.g)
                this.p ? (a = c.split(this.p)[1]) && (b[a] = t(this.g[c])) : b[c] = t(this.g[c]);
            return b
        },remove: function(a) {
            a = this.p + a;
            na(this.g.getItem(a)) && this.g.removeItem(a)
        },reset: function() {
            if (!this.p)
                return this.g.clear();
            for (var a in this.g)
                this.remove(a)
        }});
    O.LocalStorage = function(a) {
        a = a || {};
        a.type = "local";
        return new db(a)
    };
    O.SessionStorage = function(a) {
        a = a || {};
        a.type = "session";
        return new db(a)
    };
    O.Deferred = P(function() {
        this.A = []
    }, {isResolve: function() {
            return !this.A
        },resolve: function(a) {
            if (this.isResolve())
                return this;
            var b = this.A, c = b.length, d = 0;
            this.A = N;
            for (this.data = a; d < c; ++d)
                b[d](a);
            return this
        },done: function(a) {
            this.A ? this.A.push(a) : a(this.data);
            return this
        }});
    O.DragFlick = P(function(a) {
        this.b = [];
        a = (this.v = a) || Q;
        a.manual || this.attach()
    }, {K: function(a) {
            return a.changedTouches ? a.changedTouches[0] : a
        },wa: function(a) {
            var b = this, c, d, e = l;
            this.b.push(this.contract(a.el, S.SWITCHDOWN, function(a) {
                var h = b.K(a);
                c = h.pageX;
                d = h.pageY;
                e = p;
                pa(a)
            }), this.contract(u, S.SWITCHUP, function(g) {
                e && (g = b.K(g), a.callback({x: g.pageX - c,y: g.pageY - d}), e = l)
            }))
        },za: function(a) {
            this.wa({el: a.el,callback: function(b) {
                    var c = a.boundary || 0, d = {change: l,top: l,right: l,bottom: l,left: l,amount: b};
                    Math.abs(b.x) >
                    c && (0 < b.x ? d.right = p : 0 > b.x && (d.left = p), d.change = p);
                    Math.abs(b.y) > c && (0 < b.y ? d.bottom = p : 0 > b.y && (d.top = p), d.change = p);
                    a.callback(d)
                }})
        },attach: function() {
            function a(a, c, d) {
                b.b.push(b.contract(a, c, function(a) {
                    d(b.K(a))
                }))
            }
            var b = this, c = this.v, d = c.el, e = c.start || A, g = c.move || A, h = c.end || A, r = l, s = 0, M = 0;
            c.direction && b.za({el: d,boundary: c.boundary,callback: c.direction});
            a(d, S.SWITCHDOWN, function(a) {
                r = p;
                s = a.pageX;
                M = a.pageY;
                e({e: a,move: {x: s,y: M}})
            });
            a(E, S.SWITCHMOVE, function(a) {
                r && g({e: a,move: {x: a.pageX - s,y: a.pageY -
                        M}})
            });
            a(E, S.SWITCHUP, function(a) {
                r && (h({e: a,move: {x: a.pageX - s,y: a.pageY - M}}), r = l)
            })
        },detach: function() {
            for (var a = this.b.length; a--; )
                this.uncontract(this.b[a]);
            this.b = []
        }});
    O.ExternalInterface = function(a) {
        a = a || Q;
        var b = eb;
        a.android && (b = fb);
        return new b(a)
    };
    var fb = Ea(O.HashQuery, function(a) {
        this.Ma = a.android;
        this.la = a.externalObj
    }, {call: function(a) {
            this.Ma[a.mode](this.makeHash(a))
        },addCallback: function(a, b) {
            var c = this;
            c.la[a] = function(a) {
                b(c.parseHash(a).vars)
            }
        },removeCallback: function(a) {
            delete this.la[a]
        }}), eb = Ea(O.HashQuery, function() {
        this.w = {}
    }, {disposeInternal: function() {
            for (var a in this.w)
                this.removeCallback(a)
        },call: function(a) {
            this.setHash(a)
        },addCallback: function(a, b) {
            var c = this;
            c.w[a] = function() {
                var d = c.getHash();
                d.mode === a && b(d.vars)
            };
            I(u,
            "hashchange", c.w[a])
        },removeCallback: function(a) {
            J(u, "hashchange", this.w[a]);
            delete this.w[a]
        }});
    O.Facebook = P(n, {shareURL: function(a) {
            return "https://www.facebook.com/dialog/feed?app_id=" + a.app_id + "&redirect_uri=" + a.redirect_uri + ia({link: a.link,picture: a.picture,name: a.name,caption: a.caption,description: a.description})
        }});
    O.FPS = P(function(a) {
        this.L = this.S = a.criterion;
        this.ra = this.aa(this.L);
        this.Ua = a.enterframe;
        this.P = this.N = this.h = 0;
        a.manual || this.start()
    }, {disposeInternal: function() {
            this.stop()
        },getCriterion: f("L"),getSurver: f("S"),getFrameTime: f("ra"),enter: function() {
            this.Ua({criterion: this.L,surver: this.S})
        },start: function() {
            this.P = v();
            this.h = setInterval(this.Ea, this.ra, this)
        },Ea: function(a) {
            a.N = v();
            a.S = a.aa(a.N - a.P);
            a.P = a.N;
            a.enter()
        },aa: function(a) {
            return Math.round(1E3 / a)
        },stop: function() {
            clearInterval(this.h)
        }});
    O.ImgLoad = P(function(a) {
        this.ta = a.srcs;
        this.R = this.ta.length;
        this.na = [];
        this.b = [];
        this.Ga = a.onload || A;
        this.Ha = a.onprogress || A;
        a.manual || this.start()
    }, {M: 0,Q: 0,ya: function() {
            this.M++;
            this.Q = this.M / this.R;
            this.Ha(this.Q);
            if (this.M >= this.R) {
                for (var a = this.b.length; a--; )
                    this.uncontract(this.b[a]);
                this.b = [];
                this.Ga(this.na)
            }
        },start: function() {
            function a() {
                b.ya()
            }
            if (!this.$a) {
                this.$a = p;
                for (var b = this, c, d = b.R; d--; )
                    c = k("img"), c.src = b.ta[d], b.b.push(b.contract(c, S.LOAD, a)), b.na.push(c)
            }
        },getProgress: f("Q")});
    O.WindowLoad = P(function(a) {
        if (a)
            this.onload(a.onload)
    }, {onload: function(a) {
            var b;
            b = this.contract(u, S.LOAD, D(this, function() {
                this.uncontract(b);
                a()
            }))
        }});
    var gb = O.Mobile = P(n, {getZoom: function() {
            return E.body.clientWidth / u.innerWidth
        },isAndroid: function(a) {
            return B(/Android/i, a)
        },isIOS: function(a) {
            return B(/iPhone|iPad|iPod/i, a)
        },isWindows: function(a) {
            return B(/IEMobile/i, a)
        },isFBAPP: function(a) {
            return B(/FBAN/, a)
        },isMobile: function() {
            return this.isAndroid() || this.isIOS() || this.isWindows() || this.isFBAPP()
        },killScroll: function(a) {
            this.G || (a || w(), this.G = this.contract(E, S.TOUCHMOVE, pa))
        },revivalScroll: function(a) {
            this.G && (a || w(), this.uncontract(this.G),
            delete this.G)
        },hideAddress: function() {
            function a() {
                0 === u.pageYOffset && w()
            }
            function b() {
                setTimeout(a, 100)
            }
            this.contract(u, S.LOAD, b, l);
            this.contract(u, Ka, b, l)
        },getOrientation: function() {
            return 90 !== Math.abs(u.orientation) && u.innerWidth < u.innerHeight ? {portrait: p,landscape: l} : {portrait: l,landscape: p}
        },attachOrientation: function(a) {
            function b(a) {
                h.push(g.contract(u, S.LOAD, a), g.contract(u, Ka, a), g.contract(u, S.RESIZE, a))
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
                    return a.portrait();
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
        }});
    O.mobile = new gb;
    var hb = O.PC = P(n, {u: function(a, b) {
            a || w();
            L(E.body, {overflow: b})
        },killScroll: function(a) {
            this.u(a, "hidden")
        },revivalScroll: function(a) {
            this.u(a, "auto")
        }});
    O.pc = new hb;
    O.Modal = P(function(a) {
        a = a || Q;
        this.Ca = a.html;
        this.Ia = a.overlayClose;
        this.X = a.closeSelector;
        this.u = new (R ? gb : hb);
        this.b = [];
        this.l = k("div", {"class": "cir-modal-bg"});
        L(this.l, {display: "none",position: "absolute",zIndex: 1E4,top: 0,left: 0,width: "100%",height: "300%"});
        q(E.body, this.l);
        this.f = k("div", {"class": "cir-modal-content"});
        L(this.f, {display: "none",position: "absolute",zindex: 10001,top: "50%",left: "50%"});
        q(E.body, this.f);
        a.manual || this.open(a.html)
    }, {W: function() {
            for (var a = this.b.length; a--; )
                this.uncontract(this.b[a]);
            this.b = []
        },disposeInternal: function() {
            this.close();
            Ba(this.l);
            Ba(this.f)
        },open: function(a) {
            this.u.killScroll(!0);
            L(this.l, {top: E.body.scrollTop});
            K(this.l);
            this.inner(a)
        },close: function() {
            this.W();
            Ca(this.f, "");
            va(this.f);
            va(this.l);
            this.u.revivalScroll(!0)
        },inner: function(a) {
            this.W();
            a = a || this.Ca;
            Ca(this.f, a);
            K(this.f);
            a = xa(this.f);
            L(this.f, {"margin-top": E.body.scrollTop - da(a.height)[2] / 2,"margin-left": -(da(a.width)[2] / 2)});
            this.Ia && this.contract(this.l, S.CLICK, D(this, this.close));
            if (this.X) {
                a = ra(this.X,
                this.f);
                for (var b = a.length; b--; )
                    this.b.push(this.contract(a[b], S.CLICK, D(this, this.close)))
            }
        }});
    var kb = P(function(a) {
        this.i = a.e;
        a.callback && this.attach(a.callback)
    }, {attach: function(a) {
            this.detach();
            this.xa = this.contract(u, this.i, a)
        },detach: function() {
            this.uncontract(this.xa)
        }});
    O.DeviceOrientation = function(a) {
        a = a || {};
        a.e = "deviceorientation";
        return kb(a)
    };
    O.DeviceOrientation.support = "ondeviceorientation" in u;
    O.DeviceMotion = function(a) {
        a = a || {};
        a.e = "devicemotion";
        return kb(a)
    };
    O.DeviceMotion.support = "ondevicemotion" in u;
    var lb, mb;
    O.DeviceOrientation.support ? (lb = O.DeviceOrientation, mb = function(a) {
        return a
    }) : O.DeviceMotion.support && (lb = O.DeviceMotion, mb = function(a) {
        return a.rotationRate
    });
    O.DeviceShake = P(function(a) {
        this.Da = a.limit;
        this.La = a.waittime;
        a.callback && a.direction && this.attach(a.direction, a.callback)
    }, {fa: new lb,Pa: {x: "gamma",y: "beta",z: "alpha"},attach: function(a, b) {
            a = this.Pa[a];
            var c = this, d;
            c.fa.attach(function(e) {
                e = mb(e);
                d || (d = e);
                Math.abs(e[a] - d[a]) > c.Da && (d = N, b(e), setTimeout(function() {
                }, c.La))
            })
        },detach: function() {
            this.fa.detach()
        }});
    O.DeviceShake.support = lb ? p : l;
    O.FontImg = P(function(a) {
        a = a || Q;
        this.Ka = a.type ? a.type + "_" : m;
        this.ga = a.tag || "span"
    }, {make: function(a) {
            a = (m + a).split(m);
            for (var b = m, c = a.length; c--; )
                b = "<" + this.ga + ' class="font_' + this.Ka + a[c] + '"></' + this.ga + ">" + b;
            return b
        }});
    O.Observer = P(function() {
        this.O = {}
    }, {on: function(a, b) {
            var c = this.O;
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
            var c = this.O;
            if (!b)
                return delete c[a];
            var d = c[a], e;
            if (d)
                for (e = d.length; e--; )
                    if (b === d[e])
                        return d.splice(e, 1), 0 === d.length && delete c[a], p;
            return l
        },fire: function(a, b) {
            var c = this.O[a], d, e;
            if (c)
                for (e = c.length; e--; )
                    (d = c[e]) && d(b)
        }});
    O.PreRender = P(function(a) {
        a = a || Q;
        this.n = a.els || [];
        this.ma = a.guesslimit || 30;
        this.Za = a.onrendered || A;
        this.pa = a.looptime || 100;
        this.Ya = this.pa + (a.loopblur || 20);
        a.manual || this.start()
    }, {disposeInternal: function() {
            clearInterval(this.h)
        },start: function() {
            var a, b = this, c = v();
            for (a = b.n.length; a--; )
                K(b.n[a]);
            b.h = setInterval(function() {
                var a = v(), e = a - c;
                c = a;
                if (e < b.Ya && (b.ma--, 1 > b.ma)) {
                    clearInterval(b.h);
                    for (a = b.n.length; a--; )
                        va(b.n[a]);
                    b.Za()
                }
            }, this.pa, this)
        }});
    O.Route = P(function(a) {
        this.D = a.target || m;
        this.Fa = a.noregex;
        this.B = a.action;
        a.manual || this.start()
    }, {start: function() {
            this.fire(this.D)
        },fire: function(a) {
            var b;
            if (this.Fa && this.B[a])
                return this.B[a](a);
            for (b in this.B)
                if (a.match(b))
                    this.B[b](b)
        }});
    O.ScriptLoad = P(function() {
        this.n = []
    }, {requests: function(a, b) {
            function c(c) {
                var g = a[c].callback;
                a[c].callback = function(a) {
                    g(a);
                    e--;
                    0 === e && b(d.n)
                };
                d.request(a[c])
            }
            for (var d = this, e = 0, g = a.length; e < g; e++)
                c(e)
        },request: function(a) {
            var b = this, c = k("script"), d;
            c.src = a.src;
            q(E.body, c);
            b.n.push(c);
            a.callback && (d = b.contract(c, S.LOAD, function() {
                b.uncontract(d);
                a.callback.apply(this, arguments)
            }))
        }});
    function $(a) {
        return nb ? ob.getResponseHeader(a) : l
    }
    function pb(a) {
        var b = new XMLHttpRequest;
        b.onload = function() {
            a(b)
        };
        b.open("HEAD", location.href + "?update" + v() + "=1");
        b.send(N);
        return b
    }
    var ob, nb = l;
    O.ServerMeta = P(function(a) {
        a = a || Q;
        var b = a.callback || A;
        ob ? b(ob) : ob = pb(function() {
            nb = p;
            b(ob)
        })
    }, {date: function(a) {
            return pb(function(b) {
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
    O.Surrogate = P(function(a) {
        this.Ra = a.delay;
        this.F = a.callback
    }, {disposeInternal: function() {
            this.clear()
        },request: function(a) {
            this.Na = a;
            this.clear();
            this.V = setTimeout(this.flush, this.Ra, this)
        },flush: function(a) {
            a = a || this;
            a.F(a.Na)
        },clear: function() {
            clearInterval(this.V)
        }});
    O.Throttle = P(function(a) {
        this.ab = a.waittime;
        this.F = a.callback
    }, {disposeInternal: function() {
            this.unlock()
        },request: function(a) {
            var b = this;
            b.oa ? b.U = a : (b.F(a), b.lock(), b.V = setTimeout(function() {
                b.U && (b.F(b.U), b.U = N);
                b.unlock()
            }, b.ab, b))
        },lock: function() {
            this.oa = p
        },unlock: function(a) {
            a = a || this;
            a.oa = l;
            clearInterval(a.V)
        }});
    O.Timer = function(a) {
        function b() {
            fa = v();
            var a = g - (fa - Ia) / 1E3;
            0 > a && (a = 0);
            La = c(a);
            s(La);
            fa > Ja ? (ib.stop(), M()) : jb = setTimeout(b, r)
        }
        function c(a) {
            var b;
            b = (m + a).split(".");
            a = b[0];
            b = b[1] ? b[1] : m;
            a = d({sa: a,ja: Ha.Wa});
            b = d({sa: b,ja: Ha.Va,Xa: p});
            return a + "." + b
        }
        function d(a) {
            var b = m + a.sa, c = a.ja, d = c - b.length;
            return !a.Xa ? -1 < d ? e(d, 0) + b : e(c, 9) : 0 < d ? b + e(d, 0) : b.slice(0, c)
        }
        function e(a, b) {
            var c = m;
            for (b = m + b; 0 < a; )
                c += b, a--;
            return c
        }
        var g = a.limit, h = 1E3 * g, r = 1E3 * a.interval, s = a.onupdate, M = a.ontimeup, Ha;
        a = a.template.split(".");
        Ha = {Wa: a[0].length,Va: a[1].length};
        var Ia = 0, fa = 0, Ja = h, La = c(g), jb, ib = {getLimit: function() {
                return g
            },getTime: function() {
                return La
            },getProgress: function() {
                return 1 - (Ja - fa) / h
            },setUpdate: function(a) {
                s = a
            },setTimeup: function(a) {
                M = a
            },countDown: function() {
                fa = Ia = v();
                Ja = Ia + h;
                b()
            },stop: function() {
                clearInterval(jb)
            }};
        return ib
    };
    O.Twitter = P(n, {shareURL: function(a) {
            var b = a.name, c = a.hash, b = b ? " \u300c" + b + "\u300d" : m, c = c ? " " + c : m;
            return "https://twitter.com/intent/tweet?" + ia({url: a.redirect_uri,text: (a.caption || m) + b + c})
        }});
    O.XML = P(function(a) {
        this.a = k("div");
        this.c = {};
        a && this.setData(a.data)
    }, {getData: f("c"),setData: function(a) {
            this.c = a;
            Ca(this.a, a)
        },$: function(a) {
            return this.a.querySelector(a)
        },$$: function(a) {
            return ra(a, this.a)
        }});
    O.Model = P(function(a) {
        a = a || Q;
        var b, c = a.defaults || this.defaults || {}, d = a.events || this.events;
        this.ha = a.validate || this.validate;
        this.m = a.store || this.store || new C.DataStore;
        this.t = new C.Observer;
        for (b in c)
            this.set(b, c[b]);
        for (b in d)
            this.on(b, d[b])
    }, {H: function(a, b, c) {
            this.t.fire(a, this.m.get());
            b && this.t.fire(a + ":" + b, c)
        },set: function(a, b) {
            if (this.ha[a] && !this.ha[a](a, b))
                return this.H("fail", a, b);
            this.ca = this.m.get();
            this.m.set(a, b);
            this.H(S.CHANGE, a, b)
        },prev: function(a) {
            return !a ? this.ca : this.ca[a]
        },
        get: function(a) {
            return this.m.get(a)
        },remove: function(a) {
            if (a) {
                var b = this.m.get(a), c = this.m.remove(a);
                this.H("remove", a, b);
                return c
            }
        },reset: function() {
            this.m.reset();
            this.H("reset")
        },on: function(a, b) {
            var c = D(this, b);
            this.t.on(a, c);
            return c
        },off: function(a, b) {
            this.t.off(a, b)
        },fire: function(a, b) {
            return this.t.fire(a, b)
        }});
    O.View = P(function(a) {
        a = a ? qa(this, a) : qa(this, this, {});
        this.el = O.$(a.el || this.el || k("div"));
        this.attach();
        a.init && this.init()
    }, {disposeInternal: function() {
            this.i("off")
        },i: function(a) {
            var b, c, d, e = this.events;
            for (b in e)
                for (c in d = "me" === b ? this.el : this.el.find(b), e[b])
                    d[a](c, this[e[b][c]])
        },attach: function() {
            this.i("on")
        },detach: function() {
            this.i("off")
        }});
    O.Validate = P(function(a) {
        a = a || {};
        this.fb = a.level;
        qa(this, this, a)
    }, {displayError: function(a, b) {
            b = "Validate Error:" + a + " is " + b + ".";
            switch (this.jb) {
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
                return p;
            this.displayError(a, "Object")
        },isNumber: function(a, b) {
            if (y(b))
                return p;
            this.displayError(a, "Number")
        },isString: function(a, b) {
            if (ka(b))
                return p;
            this.displayError(a, "String")
        },isFunction: function(a, b) {
            if (z(b))
                return p;
            this.displayError(a, "Function")
        },isBoolean: function(a, b) {
            if (la(b))
                return p;
            this.displayError(a, "Boolean")
        },isArray: function(a, b) {
            if (ma(b))
                return p;
            this.displayError(a, "Array")
        }});
    O.validate = new O.Validate;
}());
