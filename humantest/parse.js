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
        for (var c = k("p"), d = l, e, g = m, h = a.length, q, r = RegExp("^(.*?)" + a[0] + "$", "i"); h--; )
            if (c.style[a[h]] !== n) {
                d = p;
                (e = a[h].match(r)[1]) ? (g = e.toLowerCase(), b = g + b, g = "-" + g + "-") : b = b.toLowerCase();
                c = s(ba("head"), k("style", {type: "text/css"}));
                q = c.sheet;
                break
            }
        return {fa: b,pa: d,prefix: e,ca: g,sheet: q}
    }
    function t(a) {
        return u.JSON.parse(a)
    }
    function ca(a) {
        return u.JSON.stringify(a)
    }
    function v() {
        return Date.now()
    }
    function da() {
        u.scrollTo(0, 1)
    }
    function ea(a, b) {
        for (var c in b)
            a[c] = b[c];
        return a
    }
    function fa(a) {
        var b = m + a;
        return b.match("^{.*}$") ? t(b) : b.match("^[0-9.]+$") ? 1 * b : "true" === b ? p : "false" === b ? l : a
    }
    function ga(a, b, c) {
        return a.split(b).join(c)
    }
    function ha(a) {
        var b = m, c = m, d;
        for (d in a)
            a[d] && (c += b + d + "=" + encodeURIComponent(a[d]), b = "&");
        return c
    }
    function w(a, b) {
        return Object.prototype.toString.call(b) === "[object " + a + "]" ? p : l
    }
    function ia(a) {
        return w("Object", a)
    }
    function x(a) {
        return w("Number", a)
    }
    function ja(a) {
        return w("String", a)
    }
    function y(a) {
        return w("Function", a)
    }
    function ka(a) {
        return w("Boolean", a)
    }
    function la(a) {
        return w("Array", a)
    }
    function ma() {
        return "ontouchstart" in u
    }
    function z() {
    }
    function na(a) {
        a.preventDefault();
        return l
    }
    function A(a, b) {
        b = b || navigator.userAgent;
        return !!b.match(a)
    }
    function oa(a, b) {
        return function() {
            return b.apply(a, arguments)
        }
    }
    function pa(a, b, c) {
        b = b || a;
        c = c || b;
        for (i in b)
            y(b[i]) && (c[i] = oa(a, b[i]));
        ea(a, c);
        return c
    }
    function ba(a) {
        return B.querySelector(a)
    }
    function qa(a, b) {
        var c = b.querySelectorAll(a), d = [];
        d.push.apply(d, c);
        return d
    }
    function D(a, b) {
        for (var c = a.className, c = c ? c.split(" ") : [], d = c.length; d--; )
            if (b === c[d])
                return p;
        return l
    }
    function E(a, b) {
        if (!D(a, b)) {
            var c = m, d = a.className;
            d && (c = " ");
            a.className = d + c + b
        }
    }
    function F(a, b) {
        if (D(a, b)) {
            var c, d = [], e;
            c = a.className.split(" ");
            for (e = c.length; e--; )
                b !== c[e] && d.push(c[e]);
            a.className = d.join(" ")
        }
    }
    function ra(a, b) {
        if (D(a, b))
            return F(a, b);
        E(a, b)
    }
    function sa(a, b, c) {
        var d;
        if (ia(b)) {
            for (d in b)
                a.setAttribute(d, b[d]);
            return p
        }
        return c || c === m ? a.setAttribute(b, c) : a.getAttribute(b)
    }
    function ta(a, b) {
        a.removeAttribute(b)
    }
    function k(a, b) {
        var c = B.createElement(a);
        b && sa(c, b);
        return c
    }
    function G(a, b, c) {
        a.addEventListener(b, c, l)
    }
    function H(a, b, c) {
        a.removeEventListener(b, c, l)
    }
    function ua(a) {
        a.style.display = "block"
    }
    function va(a) {
        a.style.display = "none"
    }
    function wa(a, b) {
        a.style.opacity = b
    }
    function J(a, b) {
        var c = a.style, d, e, g;
        for (d in b)
            e = d, g = b[d], x(g) && (g += "px"), c[e] = g
    }
    function xa(a) {
        return B.defaultView.getComputedStyle(a, K)
    }
    function L(a) {
        return a.parentNode
    }
    function s(a, b) {
        return a.appendChild(b)
    }
    function ya(a, b) {
        return L(a).insertBefore(b, a)
    }
    function za(a, b) {
        return L(a).insertBefore(b, a.nextSibling)
    }
    function Aa(a) {
        return L(a).removeChild(a)
    }
    function Ba(a, b) {
        if (!b)
            return a.innerHTML;
        a.innerHTML = b
    }
    function Ca(a, b) {
        for (var c = [], d = p; d; )
            a[b] && c[c.length - 1] !== a[b] && c.push(a[b]), a._superclass && a._superclass.prototype ? a = a._superclass.prototype : d = l;
        return c
    }
    function Da(a, b, c) {
        return M.klass({extend: a,init: b,prop: c})
    }
    function N(a, b) {
        return Da(M.Base, a, b)
    }
    function Ha(a) {
        var b = k(a.type);
        b.controls = a.controls ? p : l;
        b.preload = a.preload || "auto";
        b.autoplay = a.autoplay ? p : l;
        b.loop = a.loop ? p : l;
        b.src = a.dir + a.name + "." + a.suffix[0][0];
        return b
    }
    function Ja(a, b) {
        if (!u["HTML" + a + "Element"])
            return l;
        a = a.toLowerCase();
        for (var c = k(a), d = [], e = 0, g = b.length; e < g; e++)
            c.canPlayType(a + "/" + b[e][1]) && d.push(b[e]);
        return d.length ? d : l
    }
    var u = window, B = document, p = !0, l = !1, K = null, m = "", O = {}, n = void 0, P = ma(), Q, Ka = "orientationchange", La = j("0.19,1,0.22,1"), R = 1.70158, M = C = {};
    Date.now || (Date.now = function() {
        return 1 * new Date
    });
    M.util = {win: u,doc: B,pageTop: da,override: ea,replaceAll: ga,template: function(a, b) {
            for (var c in b)
                a = ga(a, "<%= " + c + " %>", b[c]);
            return a
        },windowOpen: function(a, b, c) {
            var d, e = [];
            for (d in c)
                ka(c[d]) && (c[d] === p ? c[d] = "yes" : c[d] === l && (c[d] = "no")), e.push(d + "=" + c[d]);
            return u.open(a, b, e.join(","))
        },typeCast: fa,makeQueryString: ha,parseQueryString: function(a) {
            a = a.replace(/^[\#\?]/, m);
            a = a.split("&");
            for (var b = a.length, c, d = {}; b--; )
                c = a[b].split("="), d[c[0]] = fa(decodeURIComponent(c[1]));
            return d
        },is: w,isObject: ia,isNumber: x,
        isString: ja,isFunction: y,isBoolean: ka,isArray: la,isTouchable: ma,nullFunction: z,eventPrevent: na,eventStop: function(a) {
            a.stopPropagation();
            return l
        },checkUserAgent: A,bind: oa,owner: pa};
    M.dom = {$: ba,$$: function(a) {
            return qa(a, B)
        },$child: function(a, b) {
            return b.querySelector(a)
        },$$child: qa,$id: function(a) {
            return B.getElementById(a)
        },on: G,off: H,create: k,show: ua,hide: va,opacity: wa,hasClass: D,addClass: E,removeClass: F,toggleClass: ra,css: J,computedStyle: xa,append: s,parent: L,before: ya,after: za,remove: Aa,attr: sa,removeAttr: ta,html: Ba};
    M.klass = function(a) {
        function b() {
            for (var a = Ca(this, "__init__"), b = a.length; b--; )
                a[b].apply(this, arguments)
        }
        var c = a.init || function() {
        }, d = a.prop;
        (a = a.extend) && M.extend(b, a);
        b.prototype.__init__ = c;
        ea(b.prototype, d);
        return b
    };
    M.klass.ancestors = Ca;
    M.extend = function(a, b) {
        function c() {
        }
        c.prototype = b.prototype;
        a.prototype = new c;
        var d = a.prototype;
        d._superclass = b;
        d._super = function() {
            var a = this.Ca, a = a ? a.prototype._superclass : this.Ca = b;
            a.apply(this, arguments)
        }
    };
    M.Base = Da(n, function() {
        this.o = {}
    }, {D: 0,dispose: function() {
            for (var a = Ca(this, "disposeInternal"), b = 0, c = a.length; b < c; b++)
                a[b].call(this);
            for (b in this.o)
                H.apply(K, this.o[b]);
            for (b in this)
                this[b] && y(this[b].dispose) && this[b].dispose();
            this.__proto__ = K;
            for (b in this)
                delete this[b];
            return K
        },contract: function(a, b, c) {
            G(a, b, c);
            this.D++;
            this.o[this.D] = [a, b, c];
            return this.D
        },uncontract: function(a) {
            if (a) {
                var b = this.o[a];
                delete this.o[a];
                H(b[0], b[1], b[2])
            }
        }});
    Q = N(n, {SWITCHCLICK: P ? "touchstart" : "click",SWITCHDOWN: P ? "touchstart" : "mousedown",SWITCHMOVE: P ? "touchmove" : "mousemove",SWITCHUP: P ? "touchend" : "mouseup",SWITCHOVER: P ? "touchstart" : "mouseover",SWITCHOUT: P ? "touchend" : "mouseout",LOAD: "load",CHANGE: "change",CLICK: "click",MOUSEDOWN: "mousedown",MOUSEMOVE: "mousemove",MOUSEUP: "mouseup",MOUSEOVER: "mouseover",MOUSEOUT: "mouseout",TOUCHSTART: "touchstart",TOUCHMOVE: "touchmove",TOUCHEND: "touchend",RESIZE: "resize"});
    M.Event = Q;
    Q = M.e = new Q;
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
            return c * (a /= d) * a * ((R + 1) * a - R) + b
        },outBack: function(a, b, c, d) {
            return c * ((a = a / d - 1) * a * ((R + 1) * a + R) + 1) + b
        },inOutBack: function(a, b, c, d) {
            return 1 > (a /= d / 2) ? c / 2 * a * a * (((R *= 1.525) + 1) * a - R) + b : c / 2 * ((a -= 2) * a * (((R *= 1.525) + 1) * a + R) + 2) + b
        }};
    M.cssease = {linear: "linear",inCubic: j("0.55,0.055,0.675,0.19"),outCubic: j("0.215,0.61,0.355,1"),inOutCubic: j("0.645,0.045,0.355,1"),inQuart: j("0.895,0.03,0.685,0.22"),outQuart: j("0.165,0.84,0.44,1"),inOutQuart: j("0.77,0,0.175,1"),inQuint: j("0.755,0.05,0.855,0.06"),outQuint: j("0.23,1,0.32,1"),inOutQuint: j("0.86,0,0.07,1"),inSine: j("0.47,0,0.745,0.715"),outSine: j("0.39,0.575,0.565,1"),inOutSine: j("0.445,0.05,0.55,0.95"),inExpo: j("0.95,0.05,0.795,0.035"),outExpo: j("0.19,1,0.22,1"),inOutExpo: j("1,0,0,1"),
        inCirc: j("0.6,0.04,0.98,0.335"),outCirc: j("0.075,0.82,0.165,1"),inOutCirc: j("0.785,0.135,0.15,0.86"),inQuad: j("0.55,0.085,0.68,0.53"),outQuad: j("0.25,0.46,0.45,0.94"),inOutQuad: j("0.455,0.03,0.515,0.955"),inBack: [j("0.6,0,0.735,0.045"), j("0.6,-0.28,0.735,0.045")],outBack: [j("0.175,0.885,0.32,1"), j("0.175,0.885,0.32,1.275")],inOutBack: [j("0.68,0,0.265,1"), j("0.68,-0.55,0.265,1.55")]};
    var S = aa(["animation", "webkitAnimation"], "Animation"), Ma = S.pa, Na = S.prefix, Oa = S.ca, Pa = S.fa, T = S.sheet, U;
    U = M.Animation = N(function(a, b, c) {
        c = c || O;
        this.m = c.onComplete || z;
        this.a = a;
        U.id++;
        this.b = "ciranim" + U.id;
        a = c.duration || U.duration;
        var d = c.ease || La, e, g = {};
        for (e in b)
            g[e] = b[e], x(g[e]) && (g[e] += "px");
        this.h = g;
        g = ga(ga(ca(g), '"', m), ",", ";");
        T.insertRule("@" + Oa + "keyframes " + this.b + "{to" + g + "}", T.cssRules.length);
        la(d) || (d = [d]);
        b = this.b;
        e = 0;
        for (var g = d.length, h = m; e < g; e++)
            h += Oa + "animation:" + b + " " + a + "ms " + d[e] + " 0s 1 normal both;";
        T.insertRule("." + b + "{" + h + "}", T.cssRules.length);
        c.manual || this.start()
    }, {W: function() {
            H(this.a,
            Pa + "End", this.U);
            H(this.a, "animationend", this.U)
        },disposeInternal: function() {
            this.stop()
        },start: function() {
            function a(a) {
                var d = T.cssRules, e = d.length, g;
                b.W();
                if ("webkit" === Na) {
                    for (; e--; )
                        g = d[e].name || (m + d[e].selectorText).split(".")[1], g === b.b && T.deleteRule(e);
                    F(b.a, b.b);
                    J(b.a, b.h)
                }
                b.m(a)
            }
            var b = this;
            b.U = a;
            G(b.a, Pa + "End", a);
            G(b.a, "animationend", a);
            E(b.a, b.b)
        },stop: function() {
            var a = {};
            a[Oa + "animation-play-state"] = "paused";
            J(this.a, a);
            this.W()
        }});
    U.id = 0;
    U.duration = 500;
    U.support = Ma;
    var Qa = aa(["transitionProperty", "webkitTransitionProperty"], "Transition"), Ra = Qa.pa, Sa = Qa.ca, Ta = Qa.fa, Ua = Qa.sheet, V;
    V = M.Transition = N(function(a, b, c) {
        c = c || O;
        V.id++;
        this.b = "cirtrans" + V.id;
        var d = [];
        ea({}, b);
        var e, g = c.duration || V.duration, h = c.ease || La;
        la(h) || (h = [h]);
        for (e in b)
            d.push(e);
        e = 0;
        for (var q = h.length, r = m, r = r + (Sa + "transition-property:" + d.join(" ") + ";" + Sa + "transition-duration:" + g + "ms;"); e < q; e++)
            r += Sa + "transition-timing-function:" + h[e] + ";";
        Ua.insertRule("." + this.b + "{" + r + "}", Ua.cssRules.length);
        this.a = a;
        this.h = b;
        this.m = c.onComplete || z;
        c.manual || this.start()
    }, {disposeInternal: function() {
            this.stop()
        },start: function() {
            var a =
            this;
            a.t = function(b) {
                a.stop();
                setTimeout(function() {
                    a.m(b)
                }, 1)
            };
            G(a.a, Ta + "End", a.t);
            G(a.a, "transitionend", a.t);
            E(a.a, a.b);
            J(a.a, a.h)
        },stop: function() {
            var a = Ua.cssRules, b = a.length, c;
            H(this.a, Ta + "End", this.t);
            H(this.a, "transitionend", this.t);
            for (F(this.a, this.b); b--; )
                if (c = a[b].name || (m + a[b].selectorText).split(".")[1], c === this.b) {
                    Ua.deleteRule(b);
                    break
                }
        }});
    V.id = 0;
    V.support = Ra;
    V.duration = 500;
    var W = M.Tweener = N(function(a, b, c) {
        var d;
        c = c || {};
        this.u = a;
        this.h = [];
        for (d in b)
            a = b[d], a.name = d, a.Ja = a.to - a.from, a.prefix = a.prefix || m, a.suffix = a.suffix || "px", this.h.push(a);
        this.T = c.duration || W.duration;
        this.Ka = c.ease || this.ua;
        this.m = c.onComplete;
        c.manual || this.start()
    }, {disposeInternal: function() {
            this.stop()
        },ua: function(a, b, c, d) {
            return c * (-Math.pow(2, -10 * a / d) + 1) + b
        },Y: u.requestAnimationFrame ? function(a) {
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
            setTimeout(a, 1E3 / W.Va)
        },loop: function() {
            for (var a = this, b = W.C, c, d = v(), e, g = b.length, h; g--; )
                if (c = b[g], i = c.h.length, e = d - c.Ga, e < c.T)
                    for (; i--; )
                        h = c.h[i], W.Z(c.u, h, c.Ka(e, h.from, h.Ja, c.T));
                else {
                    for (; i--; )
                        h = c.h[i], W.Z(c.u, h, h.to);
                    c.m && c.m();
                    b.splice(g, 1)
                }
            b.length ? a.Y(function() {
                a.loop()
            }) : this.stop()
        },
        start: function() {
            var a = this;
            a.Ga = v();
            W.C.push(a);
            W.P || (W.P = 1, a.Y(function() {
                a.loop()
            }))
        },stop: function() {
            W.C = [];
            clearInterval(W.P);
            W.P = K
        }});
    W.Z = function(a, b, c) {
        a[b.name] = b.prefix + c + b.suffix
    };
    W.C = [];
    W.fps = 30;
    W.duration = 500;
    M.$ = function(a, b) {
        var c, d, e;
        b = b || B;
        ja(a) ? c = b.querySelectorAll(a) : (c = [a], a = m);
        e = c.length;
        d = function() {
        };
        d.prototype = M.$.la;
        d = new d;
        d.length = e;
        for (d.Ba = b; e--; )
            d[e] = c[e];
        return d
    };
    function X(a, b, c) {
        var d = a.length;
        for (c = Va(c); d--; )
            c[0] = a[d], b.apply(a, c);
        return a
    }
    function Y(a, b, c) {
        c = Va(c);
        c[0] = a[0];
        return b.apply(K, c)
    }
    function Va(a) {
        var b = [K];
        b.push.apply(b, a);
        return b
    }
    M.$.la = {va: X,Ua: Y,Ta: Va,querySelectorAll: function(a) {
            return this[0].querySelectorAll(a)
        },find: function(a) {
            return M.$(a, this.Ba)
        },parent: function() {
            return M.$(L(this[0]))
        },on: function() {
            return X(this, G, arguments)
        },off: function() {
            return X(this, H, arguments)
        },show: function() {
            return X(this, ua)
        },hide: function() {
            return X(this, va)
        },opacity: function() {
            return X(this, wa, arguments)
        },hasClass: function() {
            return Y(this, D, arguments)
        },addClass: function() {
            return X(this, E, arguments)
        },removeClass: function() {
            return X(this,
            F, arguments)
        },toggleClass: function() {
            return X(this, ra, arguments)
        },css: function() {
            return X(this, J, arguments)
        },html: function() {
            return Y(this, Ba, arguments)
        },attr: function() {
            return Y(this, sa, arguments)
        },removeAttr: function() {
            return X(this, ta, arguments)
        },append: function() {
            return X(this, s, arguments)
        },before: function() {
            return Y(this, ya, arguments)
        },after: function() {
            return Y(this, za, arguments)
        },remove: function() {
            return X(this, Aa, arguments)
        }};
    function Wa(a, b, c, d, e) {
        y(c) && (e = c, c = K);
        y(d) && !e && (e = d, d = K);
        d && (d = Xa[d]);
        c = {duration: c,ease: d,onComplete: e};
        if (Ya)
            b = new Za(a, b, c);
        else {
            d = M.Tweener;
            e = a.style;
            var g;
            a = xa(a);
            var h, q, r = {};
            for (g in b)
                h = $a(b[g]), q = a.getPropertyValue(g), q = !q || "none" === q ? 0 : 1 * $a(q)[2], r[g] = {from: q,to: 1 * h[2] || 0,prefix: h[1],suffix: h[3]};
            b = new d(e, r, c)
        }
        this.k.push(b)
    }
    function $a(a) {
        a = a || m;
        a = m + a;
        return a.match(/^(.*?)([0-9\.]+)(.*)$/)
    }
    var ab = M.$.la, Za = M.Animation || {}, Ya = Za.support, Xa = {};
    Ya && M.cssease ? Xa = M.cssease : M.ease && (Xa = M.ease);
    ab.animate = function() {
        this.k || (this.k = []);
        return ab.va(this, Wa, arguments)
    };
    ab.stop = function() {
        if (this.k) {
            for (var a = this.k.length; a--; )
                this.k[a].stop();
            this.k = K
        }
        return this
    };
    M.HashQuery = N(n, {typeCast: function(a) {
            var b = fa(a);
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
    var bb = N(function(a) {
        var b = this, c = a.autoplay, d = a.loop, e, g = a.el || B.body;
        a.preload = "auto";
        a.autoplay = a.loop = l;
        switch (a.type) {
            case "Audio":
                e = M.Audio(a);
                break;
            case "Video":
                e = M.Video(a)
        }
        if (b.g = e) {
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
            s(g, e)
        }
    }, {disposeInternal: function() {
            Aa(this.g)
        },getElement: f("g"),getCurrent: function() {
            return this.g.currentTime
        },getDuration: function() {
            return this.g.duration
        },
        setCurrent: function(a) {
            this.g.currentTime = a
        },loop: function(a) {
            var b = this;
            b.d && (b.uncontract(b.d), delete b.d);
            a && (b.d = b.contract(b.g, "ended", function() {
                b.stop();
                b.play()
            }))
        },play: function() {
            this.g.play()
        },pause: function() {
            this.g.pause()
        },stop: function() {
            this.setCurrent(0);
            this.pause()
        }});
    M.Audio = function(a) {
        a.type = "audio";
        a.suffix = M.Audio.support;
        return Ha(a)
    };
    M.Audio.support = Ja("Audio", [["mp3", "mpeg"], ["wav", "wav"], ["ogg", "ogg"], ["m4a", "mp4"]]);
    M.Sound = function(a) {
        a.type = "Audio";
        return new bb(a)
    };
    M.Sound.support = M.Audio.support;
    M.Video = function(a) {
        a.type = "video";
        a.suffix = M.Video.support;
        return Ha(a)
    };
    M.Video.support = Ja("Video", [["webm", "webm"], ["mp4", "mp4"], ["ogv", "ogg"]]);
    M.Movie = function(a) {
        a.type = "Video";
        return new bb(a)
    };
    M.Movie.support = M.Video.support;
    M.Ajax = N(function(a) {
        a && this.request(a)
    }, {request: function(a) {
            if ("json" === a.dataType)
                return delete a.dataType, this.Wa(a);
            var b = a.url, c = a.callback || z, d = a.error || z, e = a.type || "GET", g = m, h = this.ra = new XMLHttpRequest;
            a.cash || (a.query || (a.query = {}), a.query["cir" + v()] = "0");
            a.query && (g = a.query, ia(g) && (g = encodeURI(ha(g))));
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
            this.ra && this.ra.abort()
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
    M.Handle = N(function(a) {
        this.H = a;
        this.attach()
    }, {disposeInternal: function() {
            this.detach()
        },attach: function() {
            this.f(G)
        },detach: function() {
            this.f(H)
        },f: function(a) {
            for (var b in this.H.events)
                a(this.H.el, b, this.H.events[b])
        }});
    M.Brush = N(function(a) {
        this.n = a.canvas;
        this.da = this.n.getContext("2d");
        this.setSize(a)
    }, {setSize: function(a) {
            a.width && (this.n.width = a.width);
            a.height && (this.n.height = a.height)
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
                var c = a.onload || z;
                a.onload = function(a, d) {
                    c(a, d);
                    g--;
                    0 === g && b(h)
                };
                h[e] = d.pigment(a);
                g++
            }
            var d = this, e, g = 0, h = {};
            b = b || z;
            for (e in a)
                c(a[e]);
            return h
        },draw: function(a) {
            var b = 0, c = a.length, d;
            for (this.da.clearRect(0, 0, this.n.width, this.n.height); b < c; b++)
                d = a[b], this.da.drawImage(d.image, d.x, d.y)
        }});
    M.Brush.support = !!u.HTMLCanvasElement;
    M.Datetime = function(a) {
        if (!a || x(a))
            return new Date(a);
        a = a.split(/[T:\-\+\/\s]/);
        3 === a.length && (a[3] = 0, a[4] = 0, a[5] = 0);
        return new Date(1 * a[0], a[1] - 1, 1 * a[2], 1 * a[3], 1 * a[4], 1 * a[5])
    };
    M.DataStore = N(function() {
        this.data = {}
    }, {set: function(a, b) {
            this.data[a] = b
        },get: function(a) {
            if (a)
                return this.data[a];
            a = {};
            for (var b in this.data)
                a[b] = this.data[b];
            return a
        },remove: function(a) {
            w("Undefind", this.data[a]) || delete this.data[a]
        },reset: function() {
            this.data = {}
        }});
    var cb = N(function(a) {
        this.l = a.namespace ? a.namespace + "-" : m;
        this.c = u[a.type + "Storage"]
    }, {set: function(a, b) {
            this.c.setItem(this.l + a, ca(b))
        },get: function(a) {
            var b = {}, c;
            if (a)
                return t(this.c.getItem(this.l + a));
            for (c in this.c)
                this.l ? (a = c.split(this.l)[1]) && (b[a] = t(this.c[c])) : b[c] = t(this.c[c]);
            return b
        },remove: function(a) {
            a = this.l + a;
            this.c.getItem(a) && this.c.removeItem(a)
        },reset: function() {
            if (!this.l)
                return this.c.clear();
            for (var a in this.c)
                this.remove(a)
        }});
    M.LocalStorage = function(a) {
        a = a || {};
        a.type = "local";
        return new cb(a)
    };
    M.SessionStorage = function(a) {
        a = a || {};
        a.type = "session";
        return new cb(a)
    };
    M.Deferred = N(function() {
        this.r = []
    }, {isResolve: function() {
            return !this.r
        },resolve: function(a) {
            if (this.isResolve())
                return this;
            var b = this.r, c = b.length, d = 0;
            this.r = K;
            for (this.data = a; d < c; ++d)
                b[d](a);
            return this
        },done: function(a) {
            this.r ? this.r.push(a) : a(this.data);
            return this
        }});
    M.DragFlick = N(function(a) {
        a && this.attach(a)
    }, {F: function(a) {
            return a.changedTouches ? a.changedTouches[0] : a
        },amount: function(a) {
            var b = this, c, d, e = l;
            this.contract(a.el, Q.SWITCHDOWN, function(a) {
                var h = b.F(a);
                c = h.pageX;
                d = h.pageY;
                e = p;
                na(a)
            });
            this.contract(u, Q.SWITCHUP, function(g) {
                e && (g = b.F(g), a.callback({x: g.pageX - c,y: g.pageY - d}), e = l)
            })
        },direction: function(a) {
            this.amount({el: a.el,callback: function(b) {
                    var c = a.boundary || 0, d = {change: l,top: l,right: l,bottom: l,left: l,amount: b};
                    Math.abs(b.x) > c && (0 < b.x ? d.right = p :
                    0 > b.x && (d.left = p), d.change = p);
                    Math.abs(b.y) > c && (0 < b.y ? d.bottom = p : 0 > b.y && (d.top = p), d.change = p);
                    a.callback(d)
                }})
        },attach: function(a) {
            function b(a, b, d) {
                c.contract(a, b, function(a) {
                    d(c.F(a))
                })
            }
            var c = this, d = a.el, e = a.start || z, g = a.move || z, h = a.end || z, q = l, r = 0, I = 0;
            a.direction && c.direction({el: d,boundary: a.boundary,callback: a.direction});
            b(d, Q.SWITCHDOWN, function(a) {
                q = p;
                r = a.pageX;
                I = a.pageY;
                e({e: a,move: {x: r,y: I}})
            });
            b(B, Q.SWITCHMOVE, function(a) {
                q && g({e: a,move: {x: a.pageX - r,y: a.pageY - I}})
            });
            b(B, Q.SWITCHUP, function(a) {
                q &&
                (h({e: a,move: {x: a.pageX - r,y: a.pageY - I}}), q = l)
            })
        }});
    M.ExternalInterface = function(a) {
        a = a || O;
        return a.android ? new db(a) : new eb(a)
    };
    var db = Da(M.HashQuery, function(a) {
        this.Ea = a.android;
        this.ga = a.externalObj
    }, {call: function(a) {
            this.Ea[a.mode](this.makeHash(a))
        },addCallback: function(a, b) {
            var c = this;
            c.ga[a] = function(a) {
                b(c.parseHash(a).vars)
            }
        },removeCallback: function(a) {
            delete this.ga[a]
        }}), eb = Da(M.HashQuery, function() {
        this.q = {}
    }, {disposeInternal: function() {
            for (var a in this.q)
                this.removeCallback(a)
        },call: function(a) {
            this.setHash(a)
        },addCallback: function(a, b) {
            var c = this;
            c.q[a] = function() {
                var d = c.getHash();
                d.mode === a && b(d.vars)
            };
            G(u,
            "hashchange", c.q[a])
        },removeCallback: function(a) {
            H(u, "hashchange", this.q[a]);
            delete this.q[a]
        }});
    M.Facebook = N(n, {shareURL: function(a) {
            return "https://www.facebook.com/dialog/feed?app_id=" + a.app_id + "&redirect_uri=" + a.redirect_uri + ha({link: a.link,picture: a.picture,name: a.name,caption: a.caption,description: a.description})
        }});
    M.FPS = N(function(a) {
        this.G = this.O = a.criterion;
        this.ma = this.V(this.G);
        this.La = a.enterframe;
        this.L = this.J = this.d = 0;
        a.manual || this.start()
    }, {disposeInternal: function() {
            this.stop()
        },getCriterion: f("G"),getSurver: f("O"),getFrameTime: f("ma"),enter: function() {
            this.La({criterion: this.G,surver: this.O})
        },start: function() {
            this.L = v();
            this.d = setInterval(this.xa, this.ma, this)
        },xa: function(a) {
            a.J = v();
            a.O = a.V(a.J - a.L);
            a.L = a.J;
            a.enter()
        },V: function(a) {
            return Math.round(1E3 / a)
        },stop: function() {
            clearInterval(this.d)
        }});
    M.ImgLoad = N(function(a) {
        this.oa = a.srcs;
        this.N = this.oa.length;
        this.ia = [];
        this.w = [];
        this.za = a.onload || z;
        this.Aa = a.onprogress || z;
        this.M = this.I = 0;
        a.manual || this.start()
    }, {ta: function() {
            this.I++;
            this.M = this.I / this.N;
            this.Aa(this.M);
            if (this.I >= this.N) {
                for (var a = this.w.length; a--; )
                    this.uncontract(this.w[a]);
                this.w = [];
                this.za(this.ia)
            }
        },start: function() {
            function a() {
                b.ta()
            }
            if (!this.Ra) {
                this.Ra = p;
                for (var b = this, c, d = b.N; d--; )
                    c = k("img"), c.src = b.oa[d], b.w.push(b.contract(c, Q.LOAD, a)), b.ia.push(c)
            }
        },getProgress: f("M")});
    M.WindowLoad = N(function(a) {
        if (a)
            this.onload(a.onload)
    }, {onload: function(a) {
            var b;
            b = this.contract(u, Q.LOAD, oa(this, function() {
                this.uncontract(b);
                a()
            }))
        }});
    M.Mobile = N(function() {
    }, {getZoom: function() {
            return B.body.clientWidth / u.innerWidth
        },isAndroid: function(a) {
            return A(/Android/i, a)
        },isIOS: function(a) {
            return A(/iPhone|iPad|iPod/i, a)
        },isWindows: function(a) {
            return A(/IEMobile/i, a)
        },isFBAPP: function(a) {
            return A(/FBAN/, a)
        },isMobile: function() {
            return this.isAndroid() || this.isIOS() || this.isWindows() || this.isFBAPP()
        },killScroll: function(a) {
            this.A || (a || da(), this.A = this.contract(B, Q.TOUCHMOVE, na))
        },revivalScroll: function(a) {
            this.A && (a || da(), this.uncontract(this.A),
            delete this.A)
        },hideAddress: function() {
            function a() {
                0 === u.pageYOffset && da()
            }
            function b() {
                setTimeout(a, 100)
            }
            this.contract(u, Q.LOAD, b, l);
            this.contract(u, Ka, b, l)
        },getOrientation: function() {
            return 90 !== Math.abs(u.orientation) && u.innerWidth < u.innerHeight ? {portrait: p,landscape: l} : {portrait: l,landscape: p}
        },attachOrientation: function(a) {
            function b(a) {
                h.push(g.contract(u, Q.LOAD, a));
                h.push(g.contract(u, Ka, a));
                h.push(g.contract(u, Q.RESIZE, a))
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
    M.mobile = new M.Mobile;
    var hb = N(function(a) {
        this.f = a.e;
        a.callback && this.attach(a.callback)
    }, {attach: function(a) {
            this.detach();
            this.sa = this.contract(u, this.f, a)
        },detach: function() {
            this.uncontract(this.sa)
        }});
    M.DeviceOrientation = function(a) {
        a = a || {};
        a.e = "deviceorientation";
        return hb(a)
    };
    M.DeviceOrientation.support = "ondeviceorientation" in u;
    M.DeviceMotion = function(a) {
        a = a || {};
        a.e = "devicemotion";
        return hb(a)
    };
    M.DeviceMotion.support = "ondevicemotion" in u;
    var ib, jb;
    M.DeviceOrientation.support ? (ib = M.DeviceOrientation, jb = function(a) {
        return a
    }) : M.DeviceMotion.support && (ib = M.DeviceMotion, jb = function(a) {
        return a.rotationRate
    });
    M.DeviceShake = N(function(a) {
        this.wa = a.limit;
        this.Da = a.waittime;
        a.callback && a.direction && this.attach(a.direction, a.callback)
    }, {aa: new ib,Ha: {x: "gamma",y: "beta",z: "alpha"},attach: function(a, b) {
            a = this.Ha[a];
            var c = this, d;
            c.aa.attach(function(e) {
                e = jb(e);
                d || (d = e);
                Math.abs(e[a] - d[a]) > c.wa && (d = K, b(e), setTimeout(function() {
                }, c.Da))
            })
        },detach: function() {
            this.aa.detach()
        }});
    M.DeviceShake.support = ib ? p : l;
    M.FontImg = N(function(a) {
        a = a || O;
        this.type = a.type ? a.type + "_" : m;
        this.qa = a.tag || "span"
    }, {make: function(a) {
            a = (m + a).split(m);
            for (var b = m, c = a.length; c--; )
                b = "<" + this.qa + ' class="font_' + this.type + a[c] + '"></' + this.qa + ">" + b;
            return b
        }});
    M.Observer = N(function() {
        this.K = {}
    }, {on: function(a, b) {
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
                return delete c[a];
            var d = c[a], e;
            if (d)
                for (e = d.length; e--; )
                    if (b === d[e])
                        return d.splice(e, 1), 0 === d.length && delete c[a], p;
            return l
        },fire: function(a, b) {
            var c = this.K[a], d, e;
            if (c)
                for (e = c.length; e--; )
                    (d = c[e]) && d(b)
        }});
    M.PreRender = N(function(a) {
        a = a || O;
        this.j = a.els || [];
        this.ha = a.guesslimit || 30;
        this.Qa = a.onrendered || z;
        this.ka = a.looptime || 100;
        this.Pa = this.ka + (a.loopblur || 20);
        a.manual || this.start()
    }, {disposeInternal: function() {
            clearInterval(this.d)
        },start: function() {
            var a, b = this, c = v();
            for (a = b.j.length; a--; )
                ua(b.j[a]);
            b.d = setInterval(function() {
                var a = v(), e = a - c;
                c = a;
                if (e < b.Pa && (b.ha--, 1 > b.ha)) {
                    clearInterval(b.d);
                    for (a = b.j.length; a--; )
                        va(b.j[a]);
                    b.Qa()
                }
            }, this.ka, this)
        }});
    M.Route = N(function(a) {
        this.u = a.target || m;
        this.ya = a.noregex;
        this.s = a.action;
        a.manual || this.start()
    }, {start: function() {
            this.fire(this.u)
        },fire: function(a) {
            var b;
            if (this.ya && this.s[a])
                return this.s[a](a);
            for (b in this.s)
                if (a.match(b))
                    this.s[b](b)
        }});
    M.ScriptLoad = N(function() {
        this.j = []
    }, {requests: function(a, b) {
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
            var b = this, c = k("script"), d;
            c.src = a.src;
            s(B.body, c);
            b.j.push(c);
            a.callback && (d = b.contract(c, Q.LOAD, function() {
                b.uncontract(d);
                a.callback.apply(this, arguments)
            }))
        }});
    function Z(a) {
        return kb ? lb.getResponseHeader(a) : l
    }
    function mb(a) {
        var b = new XMLHttpRequest;
        b.onload = function() {
            a(b)
        };
        b.open("HEAD", location.href + "?update" + v() + "=1");
        b.send(K);
        return b
    }
    var lb, kb = l;
    M.ServerMeta = N(function(a) {
        a = a || O;
        var b = a.callback || z;
        lb ? b(lb) : lb = mb(function() {
            kb = p;
            b(lb)
        })
    }, {date: function(a) {
            return mb(function(b) {
                a(b.getResponseHeader("Date"))
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
        }});
    M.Surrogate = N(function(a) {
        this.Ia = a.delay;
        this.v = a.callback
    }, {disposeInternal: function() {
            this.clear()
        },request: function(a) {
            this.Fa = a;
            this.clear();
            this.R = setTimeout(this.flush, this.Ia, this)
        },flush: function(a) {
            a = a || this;
            a.v(a.Fa)
        },clear: function() {
            clearInterval(this.R)
        }});
    M.Throttle = N(function(a) {
        this.Sa = a.waittime;
        this.v = a.callback
    }, {disposeInternal: function() {
            this.unlock()
        },request: function(a) {
            var b = this;
            b.ja ? b.Q = a : (b.v(a), b.lock(), b.R = setTimeout(function() {
                b.Q && (b.v(b.Q), b.Q = K);
                b.unlock()
            }, b.Sa, b))
        },lock: function() {
            this.ja = p
        },unlock: function(a) {
            a = a || this;
            a.ja = l;
            clearInterval(a.R)
        }});
    M.Timer = function(a) {
        function b() {
            $ = v();
            var a = g - ($ - Fa) / 1E3;
            0 > a && (a = 0);
            Ia = c(a);
            r(Ia);
            $ > Ga ? (fb.stop(), I()) : gb = setTimeout(b, q)
        }
        function c(a) {
            var b;
            b = (m + a).split(".");
            a = b[0];
            b = b[1] ? b[1] : m;
            a = d({na: a,ea: Ea.Na});
            b = d({na: b,ea: Ea.Ma,Oa: p});
            return a + "." + b
        }
        function d(a) {
            var b = m + a.na, c = a.ea, d = c - b.length;
            return !a.Oa ? -1 < d ? e(d, 0) + b : e(c, 9) : 0 < d ? b + e(d, 0) : b.slice(0, c)
        }
        function e(a, b) {
            var c = m;
            for (b = m + b; 0 < a; )
                c += b, a--;
            return c
        }
        var g = a.limit, h = 1E3 * g, q = 1E3 * a.interval, r = a.onupdate, I = a.ontimeup, Ea;
        a = a.template.split(".");
        Ea =
        {Na: a[0].length,Ma: a[1].length};
        var Fa = 0, $ = 0, Ga = h, Ia = c(g), gb, fb = {getLimit: function() {
                return g
            },getTime: function() {
                return Ia
            },getProgress: function() {
                return 1 - (Ga - $) / h
            },setUpdate: function(a) {
                r = a
            },setTimeup: function(a) {
                I = a
            },countDown: function() {
                $ = Fa = v();
                Ga = Fa + h;
                b()
            },stop: function() {
                clearInterval(gb)
            }};
        return fb
    };
    M.Twitter = N(n, {shareURL: function(a) {
            var b = a.name, c = a.hash, b = b ? " \u300c" + b + "\u300d" : m, c = c ? " " + c : m;
            return "https://twitter.com/intent/tweet?" + ha({url: a.redirect_uri,text: (a.caption || m) + b + c})
        }});
    M.XML = N(function(a) {
        this.a = k("div");
        this.S = {};
        a && this.setData(a.data)
    }, {getData: f("S"),setData: function(a) {
            this.S = a;
            Ba(this.a, a)
        },$: function(a) {
            return this.a.querySelector(a)
        },$$: function(a) {
            return qa(a, this.a)
        }});
    M.Model = N(function(a) {
        a = a || O;
        var b, c = a.defaults || this.defaults || {}, d = a.events || this.events;
        this.ba = a.validate || this.validate;
        this.i = a.store || this.store || new C.DataStore;
        this.p = new C.Observer;
        for (b in c)
            this.set(b, c[b]);
        for (b in d)
            this.on(b, d[b])
    }, {B: function(a, b, c) {
            this.p.fire(a, this.i.get());
            b && this.p.fire(a + ":" + b, c)
        },set: function(a, b) {
            if (this.ba[a] && !this.ba[a](a, b))
                return this.B("fail", a, b);
            this.X = this.i.get();
            this.i.set(a, b);
            this.B(Q.CHANGE, a, b)
        },prev: function(a) {
            return !a ? this.X : this.X[a]
        },get: function(a) {
            return this.i.get(a)
        },
        remove: function(a) {
            if (a) {
                var b = this.i.get(a), c = this.i.remove(a);
                this.B("remove", a, b);
                return c
            }
        },reset: function() {
            this.i.reset();
            this.B("reset")
        },on: function(a, b) {
            var c = oa(this, b);
            this.p.on(a, c);
            return c
        },off: function(a, b) {
            this.p.off(a, b)
        },fire: function(a, b) {
            return this.p.fire(a, b)
        }});
    M.View = N(function(a) {
        a = a ? pa(this, a) : pa(this, this, {});
        this.el = M.$(a.el || this.el || k("div"));
        this.attach();
        a.init && this.init()
    }, {disposeInternal: function() {
            this.f("off")
        },f: function(a) {
            var b, c, d, e = this.events;
            for (b in e)
                for (c in d = "me" === b ? this.el : this.el.find(b), e[b])
                    d[a](c, this[e[b][c]])
        },attach: function() {
            this.f("on")
        },detach: function() {
            this.f("off")
        }});
    M.Validate = N(function(a) {
        a = a || {};
        this.level = a.level || "warn";
        pa(this, this, a)
    }, {displayError: function(a, b) {
            b = "Validate Error: " + a + " is " + b + ".";
            switch (this.level) {
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
            if (ia(b))
                return p;
            this.displayError(a, "Object")
        },isNumber: function(a, b) {
            if (x(b))
                return p;
            this.displayError(a, "Number")
        },isString: function(a, b) {
            if (ja(b))
                return p;
            this.displayError(a, "String")
        },isFunction: function(a,
        b) {
            if (y(b))
                return p;
            this.displayError(a, "Function")
        },isBoolean: function(a, b) {
            if (ka(b))
                return p;
            this.displayError(a, "Boolean")
        },isArray: function(a, b) {
            if (la(b))
                return p;
            this.displayError(a, "Array")
        }});
    M.validate = new M.Validate;
}());
