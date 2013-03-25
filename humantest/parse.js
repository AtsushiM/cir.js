 /*! cir.js v0.9.01 | (c) 2013 Atsushi Mizoue. */(function() {
    function h(a) {
        return function() {
            return this[a]
        }
    }
    function j(a) {
        return "cubic-bezier(" + a + ")"
    }
    function aa(a, b) {
        for (var c = l("p"), d = m, e, f = n, g = a.length, k, u = RegExp("^(.*?)" + a[0] + "$", "i"); g--; )
            if (c.style[a[g]] !== ba) {
                d = p;
                (e = a[g].match(u)[1]) ? (f = e.toLowerCase(), b = f + b, f = "-" + f + "-") : b = b.toLowerCase();
                c = q(ca("head"), l("style", {type: "text/css"}));
                k = c.sheet;
                break
            }
        return {ua: b,wa: d,prefix: e,sa: f,sheet: k}
    }
    function r(a) {
        return JSON.parse(a)
    }
    function da(a) {
        a = a || n;
        a = n + a;
        return a.match(/^(.*?)([0-9\.]+)(.*)$/)
    }
    function ea() {
        this.stop();
        this._super()
    }
    function s() {
        return Date.now()
    }
    function t(a) {
        v.scrollTo(0, a)
    }
    function fa() {
        t(1)
    }
    function w(a, b, c) {
        for (c in b)
            a[c] = b[c];
        return a
    }
    function ga(a, b) {
        b = n + a;
        return b.match("^{.*}$") ? r(b) : b.match("^[0-9.]+$") ? 1 * b : "true" === b ? p : "false" === b ? m : a
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
    function y(a, b) {
        return Object.prototype.toString.call(b) == "[object " + a + "]" ? p : m
    }
    function ka(a) {
        return y("Object", a)
    }
    function z(a) {
        return y("Number", a)
    }
    function la(a) {
        return y("String", a)
    }
    function A(a) {
        return y("Function", a)
    }
    function ma(a) {
        return y("Boolean", a)
    }
    function B(a) {
        return y("Array", a)
    }
    function D(a) {
        return a === ba ? m : p
    }
    function na() {
        return "ontouchstart" in v
    }
    function E() {
    }
    function oa(a) {
        a.preventDefault();
        return m
    }
    function F(a, b) {
        b = b || navigator.userAgent;
        return !!b.match(a)
    }
    function G(a, b) {
        return function() {
            return b.apply(a, arguments)
        }
    }
    function pa(a, b, c, d) {
        b = b || a;
        c = c || b;
        for (d in b)
            A(b[d]) && (c[d] = G(a, b[d]));
        w(a, c);
        return c
    }
    function ca(a) {
        return H.querySelector(a)
    }
    function qa(a, b, c, d) {
        c = b.querySelectorAll(a);
        d = [];
        d.push.apply(d, c);
        return d
    }
    function I(a, b, c, d, e) {
        d = (c = a.className) ? c.split(" ") : [];
        for (e = d.length; e--; )
            if (b == d[e])
                return p;
        return m
    }
    function J(a, b, c, d) {
        I(a, b) || (c = n, (d = a.className) && (c = " "), a.className = d + c + b)
    }
    function K(a, b, c, d, e) {
        if (I(a, b)) {
            d = [];
            c = a.className.split(" ");
            for (e = c.length; e--; )
                b != c[e] && d.push(c[e]);
            a.className = d.join(" ")
        }
    }
    function ra(a, b) {
        if (I(a, b))
            return K(a, b);
        J(a, b)
    }
    function sa(a, b, c, d) {
        if (ka(b)) {
            for (d in b)
                a.setAttribute(d, b[d]);
            return p
        }
        return c || c == n ? a.setAttribute(b, c) : a.getAttribute(b)
    }
    function ta(a, b) {
        a.removeAttribute(b)
    }
    function l(a, b, c) {
        c = H.createElement(a);
        b && sa(c, b);
        return c
    }
    function L(a, b, c) {
        a.addEventListener(b, c, m)
    }
    function M(a, b, c) {
        a.removeEventListener(b, c, m)
    }
    function ua(a) {
        a.style.display = "block"
    }
    function va(a) {
        a.style.display = "none"
    }
    function N(a, b, c, d, e, f) {
        c = a.style;
        for (d in b)
            e = d, f = b[d], z(f) && (f += "px"), c[e] = f
    }
    function wa(a) {
        return H.defaultView.getComputedStyle(a, O)
    }
    function xa(a) {
        return a.parentNode
    }
    function q(a, b) {
        return a.appendChild(b)
    }
    function ya(a, b) {
        return xa(a).insertBefore(b, a)
    }
    function za(a, b) {
        return xa(a).insertBefore(b, a.nextSibling)
    }
    function Aa(a) {
        return xa(a).removeChild(a)
    }
    function Ba(a, b) {
        if (!b)
            return a.innerHTML;
        a.innerHTML = b
    }
    function Ca(a, b, c) {
        a = a || C.lass;
        a = a.extend(b);
        D(c) && (a.support = c);
        return a
    }
    function P(a, b) {
        return Ca(C.Base, a, b)
    }
    function Da() {
    }
    function Q(a, b, c) {
        var d = a.length;
        for (c = Ea(c); d--; )
            c[0] = a[d], b.apply(a, c);
        return a
    }
    function Fa(a, b, c) {
        c = Ea(c);
        c[0] = a[0];
        return b.apply(O, c)
    }
    function Ea(a) {
        var b = [O];
        b.push.apply(b, a);
        return b
    }
    function Ga(a) {
        var b = l(a.type);
        b.controls = a.controls ? p : m;
        b.preload = a.preload || "auto";
        b.autoplay = a.autoplay ? p : m;
        b.loop = a.loop ? p : m;
        b.src = a.dir + a.name + "." + a.suffix[0][0];
        return b
    }
    function Ha(a, b) {
        if (!v["HTML" + a + "Element"])
            return m;
        a = a.toLowerCase();
        for (var c = l(a), d = [], e = 0, f = b.length; e < f; e++)
            c.canPlayType(a + "/" + b[e][1]) && d.push(b[e]);
        return d.length ? d : m
    }
    C = {};
    var v = window, H = document, R = H.body, p = !0, m = !1, O = null, n = "", S = {}, ba = void 0, T = na(), Ia = j("0.19,1,0.22,1"), U = 1.70158, V, Ja, Ka, La, Pa, Ra, W, Sa, Ta, Ua, Va;
    Date.now || (Date.now = function() {
        return 1 * new Date
    });
    C.util = {win: v,doc: H,pageTop: fa,override: w,replaceAll: ha,template: function(a, b, c) {
            for (c in b)
                a = ha(a, "<%= " + c + " %>", b[c]);
            return a
        },windowOpen: function(a, b, c, d, e) {
            e = [];
            for (d in c)
                ma(c[d]) && (c[d] === p ? c[d] = "yes" : c[d] === m && (c[d] = "no")), e.push(d + "=" + c[d]);
            return v.open(a, b, e.join(","))
        },typeCast: ga,makeQueryString: ia,parseQueryString: function(a, b, c, d, e) {
            a = a.replace(/^[\#\?]/, n);
            b = a.split("&");
            c = b.length;
            for (e = {}; c--; )
                d = b[c].split("="), e[d[0]] = ga(decodeURIComponent(d[1]));
            return e
        },is: y,isObject: ka,isNumber: z,
        isString: la,isFunction: A,isBoolean: ma,isArray: B,isDefined: D,isTouchable: na,nullFunction: E,eventPrevent: oa,eventStop: function(a) {
            a.stopPropagation();
            return m
        },checkUserAgent: F,proxy: G,owner: pa};
    C.dom = {$: ca,$$: function(a) {
            return qa(a, H)
        },$child: function(a, b) {
            return b.querySelector(a)
        },$$child: qa,$id: function(a) {
            return H.getElementById(a)
        },on: L,off: M,create: l,show: ua,hide: va,hasClass: I,addClass: J,removeClass: K,toggleClass: ra,css: N,computedStyle: wa,append: q,parent: xa,before: ya,after: za,remove: Aa,attr: sa,removeAttr: ta,html: Ba,reflow: function(a) {
            (a || R).offsetTop
        }};
    C.lass = function() {
    };
    var Wa = m, Xa = /xyz/.test(function() {
        xyz
    }) ? /\b_super\b/ : /.*/;
    C.lass.extend = function(a) {
        function b() {
            !Wa && this.init && this.init.apply(this, arguments)
        }
        function c(c) {
            var e = a[c], k = d.prototype[c];
            b.prototype[c] = A(e) && A(k) && Xa.test(e) ? function() {
                var a, b = this._super;
                this._super = k;
                a = e.apply(this, arguments);
                this._super = b;
                return a
            } : e
        }
        var d = this, e;
        Wa = p;
        b.prototype = new d;
        Wa = m;
        b.prototype.constructor = b;
        for (e in a)
            a.hasOwnProperty(e) && c(e);
        b.extend = d.extend;
        return b
    };
    C.Base = Ca(ba, {Ea: 0,dispose: function(a) {
            a = this;
            var b = 0, c = a.C;
            for (b in c)
                M.apply(O, c[b]);
            for (b in a)
                (c = a[b]) && A(c.dispose) && c.dispose();
            a.__proto__ = O;
            for (b in a)
                a[b] = O, delete a[b];
            return O
        },contract: function(a, b, c, d, e) {
            d = this;
            d.C || (d.C = {});
            e = ++d.Ea;
            L(a, b, c);
            d.C[e] = [a, b, c];
            return e
        },uncontract: function(a) {
            if (a) {
                var b = this.C, c = b[a];
                delete b[a];
                M(c[0], c[1], c[2])
            }
        }});
    V = C.Event = P({SWITCHCLICK: T ? "touchstart" : "click",SWITCHDOWN: T ? "touchstart" : "mousedown",SWITCHMOVE: T ? "touchmove" : "mousemove",SWITCHUP: T ? "touchend" : "mouseup",SWITCHOVER: T ? "touchstart" : "mouseover",SWITCHOUT: T ? "touchend" : "mouseout",LOAD: "load",CHANGE: "change",CLICK: "click",MOUSEDOWN: "mousedown",MOUSEMOVE: "mousemove",MOUSEUP: "mouseup",MOUSEOVER: "mouseover",MOUSEOUT: "mouseout",TOUCHSTART: "touchstart",TOUCHMOVE: "touchmove",TOUCHEND: "touchend",RESIZE: "resize"});
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
    var Ya = aa(["animation", "webkitAnimation"], "Animation"), Za = Ya.prefix, $a = Ya.sa, ab = Ya.ua, X = Ya.sheet, bb = C.Animation = P({ea: function() {
            var a = this.a, b = this.Ga;
            M(a, ab + "End", b);
            M(a, "animationend", b)
        },init: function(a, b, c, d) {
            d = this;
            c = c || S;
            d.r = c.onComplete || E;
            d.a = a;
            bb.id++;
            d.g = "ciranim" + bb.id;
            a = c.duration || bb.duration;
            var e = c.ease || Ia, f, g = {};
            for (f in b)
                g[f] = b[f], z(g[f]) && (g[f] += "px");
            d.Xa = g;
            g = ha(ha(JSON.stringify(g), '"', n), ",", ";");
            X.insertRule("@" + $a + "keyframes " + d.g + "{to" + g + "}", X.cssRules.length);
            B(e) || (e =
            [e]);
            b = d.g;
            f = 0;
            for (var g = e.length, k = n; f < g; f++)
                k += $a + "animation:" + b + " " + a + "ms " + e[f] + " 0s 1 normal both;";
            X.insertRule("." + b + "{" + k + "}", X.cssRules.length);
            c.manual || d.start()
        },dispose: ea,start: function(a, b) {
            function c(c) {
                var e = X.cssRules, f = e.length, g;
                a.ea();
                if ("webkit" == Za) {
                    for (; f--; )
                        g = e[f].name || (n + e[f].selectorText).split(".")[1], g == a.g && X.deleteRule(f);
                    K(b, a.g);
                    N(b, a.Xa)
                }
                a.r(c)
            }
            a = this;
            b = a.a;
            a.Ga = c;
            L(b, ab + "End", c);
            L(b, "animationend", c);
            J(b, a.g)
        },stop: function() {
            var a = {};
            a[$a + "animation-play-state"] =
            "paused";
            N(this.a, a);
            this.ea()
        }}, Ya.wa);
    bb.id = 0;
    bb.duration = 500;
    var cb = aa(["transitionProperty", "webkitTransitionProperty"], "Transition"), db = cb.sa, eb = cb.ua, fb = cb.sheet, Y;
    Y = C.Transition = P({init: function(a, b, c, d) {
            d = this;
            c = c || S;
            Y.id++;
            d.g = "cirtrans" + Y.id;
            var e = [];
            w({}, b);
            var f, g = c.duration || Y.duration, k = c.ease || Ia;
            B(k) || (k = [k]);
            for (f in b)
                e.push(f);
            f = 0;
            for (var u = k.length, x = n, x = x + (db + "transition-property:" + e.join(" ") + ";" + db + "transition-duration:" + g + "ms;"); f < u; f++)
                x += db + "transition-timing-function:" + k[f] + ";";
            fb.insertRule("." + d.g + "{" + x + "}", fb.cssRules.length);
            d.a = a;
            d.s = b;
            d.r = c.onComplete || E;
            c.manual || d.start()
        },dispose: ea,start: function(a) {
            a = this;
            a.D = function(b) {
                a.stop();
                setTimeout(function() {
                    a.r(b)
                }, 1)
            };
            L(a.a, eb + "End", a.D);
            L(a.a, "transitionend", a.D);
            J(a.a, a.g);
            N(a.a, a.s)
        },stop: function(a) {
            a = this;
            var b = fb.cssRules, c = b.length, d;
            M(a.a, eb + "End", a.D);
            M(a.a, "transitionend", a.D);
            for (K(a.a, a.g); c--; )
                if (d = b[c].name || (n + b[c].selectorText).split(".")[1], d == a.g) {
                    fb.deleteRule(c);
                    break
                }
        }}, cb.wa);
    Y.id = 0;
    Y.duration = 500;
    W = C.Tweener = P({init: function(a, b, c, d, e, f) {
            f = this;
            c = c || S;
            f.pa = a;
            f.s = [];
            for (d in b)
                e = b[d], e.name = d, e.Ta = e.to - e.from, e.prefix = e.prefix || n, e.suffix = e.suffix || "px", f.s.push(e);
            f.W = c.duration || W.duration;
            f.Fa = c.ease || f.xa;
            f.r = c.onComplete;
            c.manual || f.start()
        },dispose: ea,xa: function(a, b, c, d) {
            return c * (-Math.pow(2, -10 * a / d) + 1) + b
        },ia: v.requestAnimationFrame ? function(a) {
            requestAnimationFrame(a)
        } : v.webkitRequestAnimationFrame ? function(a) {
            webkitRequestAnimationFrame(a)
        } : v.mozRequestAnimationFrame ? function(a) {
            mozRequestAnimationFrame(a)
        } :
        v.oRequestAnimationFrame ? function(a) {
            oRequestAnimationFrame(a)
        } : v.msRequestAnimationFrame ? function(a) {
            msRequestAnimationFrame(a)
        } : function(a) {
            setTimeout(a, 1E3 / W.Za)
        },G: function() {
            for (var a = this, b = W.J, c, d = s(), e, f = b.length, g, k; f--; )
                if (c = b[f], g = c.s.length, e = d - c.Ra, e < c.W)
                    for (; g--; )
                        k = c.s[g], W.ka(c.pa, k, c.Fa(e, k.from, k.Ta, c.W));
                else {
                    for (; g--; )
                        k = c.s[g], W.ka(c.pa, k, k.to);
                    c.r && c.r();
                    b.splice(f, 1)
                }
            b.length ? a.ia(function() {
                a.G()
            }) : a.stop()
        },start: function(a) {
            a = this;
            a.Ra = s();
            W.J.push(a);
            W.T || (W.T = 1, a.ia(function() {
                a.G()
            }))
        },
        stop: function() {
            W.J = [];
            clearInterval(W.T);
            W.T = O
        }});
    W.ka = function(a, b, c) {
        a[b.name] = b.prefix + c + b.suffix
    };
    W.J = [];
    W.fps = 30;
    W.duration = 500;
    C.$ = function(a, b, c, d, e) {
        c = "string" == typeof a ? (b || H).querySelectorAll(a) : [a];
        e = c.length;
        d = new Da;
        for (d.length = e; e--; )
            d[e] = c[e];
        return d
    };
    Va = C.$.ab = {querySelectorAll: function(a) {
            return this[0].querySelectorAll(a)
        },find: function(a) {
            return C.$(a, this)
        },parent: function() {
            return C.$(xa(this[0]))
        },on: function() {
            return Q(this, L, arguments)
        },off: function() {
            return Q(this, M, arguments)
        },show: function() {
            return Q(this, ua)
        },hide: function() {
            return Q(this, va)
        },hasClass: function() {
            return Fa(this, I, arguments)
        },addClass: function() {
            return Q(this, J, arguments)
        },removeClass: function() {
            return Q(this, K, arguments)
        },toggleClass: function() {
            return Q(this, ra, arguments)
        },
        css: function() {
            return Q(this, N, arguments)
        },html: function() {
            return Fa(this, Ba, arguments)
        },attr: function() {
            return Fa(this, sa, arguments)
        },removeAttr: function() {
            return Q(this, ta, arguments)
        },append: function() {
            return Q(this, q, arguments)
        },before: function() {
            return Fa(this, ya, arguments)
        },after: function() {
            return Fa(this, za, arguments)
        },remove: function() {
            return Q(this, Aa, arguments)
        }};
    function gb(a, b, c, d, e) {
        A(c) && (e = c, c = O);
        A(d) && !e && (e = d, d = O);
        d && (d = hb[d]);
        c = {duration: c,ease: d,onComplete: e};
        if (ib)
            b = new jb(a, b, c);
        else {
            d = C.Tweener;
            e = a.style;
            var f;
            a = wa(a);
            var g, k, u = {};
            for (f in b)
                g = da(b[f]), k = a.getPropertyValue(f), k = !k || "none" == k ? 0 : 1 * da(k)[2], u[f] = {from: k,to: 1 * g[2] || 0,prefix: g[1],suffix: g[3]};
            b = new d(e, u, c)
        }
        this.p.push(b)
    }
    var jb = C.Animation || {}, ib = jb.support, hb = {};
    ib && C.cssease ? hb = C.cssease : C.ease && (hb = C.ease);
    Va.animate = function() {
        this.p || (this.p = []);
        return Q(this, gb, arguments)
    };
    Va.stop = function(a, b) {
        a = this;
        if (a.p) {
            for (b = a.p.length; b--; )
                a.p[b].stop();
            a.p = O
        }
        return a
    };
    C.HashQuery = P({typeCast: function(a) {
            var b = ga(a);
            return a == b && (a = a.match("^[\"'](.*)[\"']$")) ? a[1] : b
        },makeHash: function(a) {
            var b = "#" + a.mode;
            a = a.vars;
            var c = "?", d;
            for (d in a)
                b += c + d + "=" + JSON.stringify(a[d]), c = "&";
            return encodeURI(b)
        },setHash: function(a) {
            location.hash = this.makeHash(a)
        },parseHash: function(a) {
            var b = decodeURIComponent(a).split("#")[1], c, d, e;
            if (!b)
                return m;
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
    Ra = P({init: function(a) {
            var b = this, c = a.autoplay, d = a.loop, e, f = a.el || R;
            a.preload = "auto";
            a.autoplay = a.loop = m;
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
                d && b.loop(p);
                a.oncanplay && b.contract(e, "canplay", a.oncanplay);
                a.onended && b.contract(e, "ended", a.onended);
                q(f, e)
            }
        },dispose: function() {
            Aa(this.a);
            this._super()
        },getElement: h("a"),getCurrent: function() {
            return this.a.currentTime
        },getDuration: function() {
            return this.a.duration
        },
        setCurrent: function(a) {
            this.a.currentTime = a
        },loop: function(a, b) {
            b = this;
            b.i && (b.uncontract(b.i), delete b.i);
            a && (b.i = b.contract(b.a, "ended", function() {
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
        return Ga(a)
    };
    C.Audio.support = Ha("Audio", [["mp3", "mpeg"], ["wav", "wav"], ["ogg", "ogg"], ["m4a", "mp4"]]);
    C.Sound = function(a) {
        a.type = "Audio";
        return new Ra(a)
    };
    C.Sound.support = C.Audio.support;
    C.Video = function(a) {
        a.type = "video";
        a.suffix = C.Video.support;
        return Ga(a)
    };
    C.Video.support = Ha("Video", [["webm", "webm"], ["mp4", "mp4"], ["ogv", "ogg"]]);
    C.Movie = function(a) {
        a.type = "Video";
        return new Ra(a)
    };
    C.Movie.support = C.Video.support;
    C.Ajax = P({init: function(a) {
            a && this.request(a)
        },request: function(a) {
            var b = a.url, c = a.callback || E, d = a.error || E, e = a.type || "GET", f = n, g = this.ra = new XMLHttpRequest;
            if ("json" == a.dataType)
                return delete a.dataType, this.json(a);
            a.cash || (a.query || (a.query = {}), a.query["cir" + s()] = "0");
            a.query && (f = a.query, ka(f) && (f = encodeURI(ia(f))));
            g.onreadystatechange = function() {
                if (4 == g.readyState) {
                    if (200 == g.status)
                        return c(g.responseText, g);
                    d(g)
                }
            };
            "GET" == e && (b = -1 != b.indexOf("?") ? b + "&" : b + "?", b += f, f = n);
            g.open(e, b);
            "POST" == e &&
            g.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            g.send(f)
        },abort: function() {
            this.ra && this.ra.abort()
        },json: function(a) {
            var b = a.callback, c = a.error;
            a.callback = function(a) {
                b(r(a))
            };
            a.error = function(a) {
                c && c(a)
            };
            this.request(a)
        }});
    Ja = C.Async = P({I: 0,L: 0,w: 0,f: function(a, b, c) {
            b = this;
            D(a) && b.j.push(a);
            b.w = b.I / b.S;
            1 < b.w && (b.w = 1);
            b.fa(b.w);
            b.L && (c = Error("miss"));
            if (b.I == b.S || b.L)
                b.m(c, b.j), b.m = b.fa = E
        },init: function(a, b, c) {
            b = this;
            c = a.waits;
            B(c) && (c = c.length);
            b.S = c;
            b.m = a.callback;
            b.fa = a.onprogress || E;
            b.j = []
        },getProgress: h("w"),pass: function(a) {
            this.I++;
            this.f(a)
        },miss: function(a) {
            this.L++;
            this.f(a)
        },exit: function(a, b) {
            b = this;
            b.I = b.S;
            b.f(a)
        }});
    C.Handle = P({init: function(a) {
            this.b = a;
            this.attach()
        },dispose: function() {
            this.detach();
            this._super()
        },attach: function() {
            this.k(L)
        },detach: function() {
            this.k(M)
        },k: function(a) {
            var b, c = this.b, d = c.events;
            for (b in d)
                a(c.el, b, d[b])
        }});
    C.Brush = P({init: function(a, b) {
            b = this;
            b.B = a.canvas;
            b.Ba = b.B.getContext("2d");
            b.setSize(a)
        },setSize: function(a) {
            a.width && (this.B.width = a.width);
            a.height && (this.B.height = a.height)
        },pigment: function(a) {
            var b = l("canvas"), c = l("img");
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
                var c = a.onload || E;
                a.onload = function(a, d) {
                    c(a, d);
                    f--;
                    0 == f && b(g)
                };
                g[e] = d.pigment(a);
                f++
            }
            var d = this, e, f = 0, g = {};
            b = b || E;
            for (e in a)
                c(a[e]);
            return g
        },draw: function(a) {
            var b = 0, c = a.length, d = this.Ba, e = this.B;
            for (d.clearRect(0, 0, e.width, e.height); b < c; b++)
                e = a[b], d.drawImage(e.image, e.x, e.y)
        }}, !!v.HTMLCanvasElement);
    C.Datetime = function(a) {
        return a && !z(a) ? (a = a.split(/[T:\-\+\/\s]/), 3 == a.length && a.push(0, 0, 0), new Date(1 * a[0], a[1] - 1, 1 * a[2], 1 * a[3], 1 * a[4], 1 * a[5])) : new Date(a)
    };
    C.Rollover = P({init: function(a, b) {
            b = this;
            var c = a.toggleClass || n, d = a.over || E, e = a.out || E;
            b.d = a.els;
            b.Na = function() {
                J(b, c);
                d()
            };
            b.oa = function() {
                K(b, c);
                e()
            };
            a.manual || b.attach()
        },dispose: function() {
            this.detach();
            this._super()
        },attach: function() {
            this.k(L)
        },detach: function() {
            this.k(M)
        },k: function(a, b, c) {
            b = this;
            for (c = b.d.length; c--; )
                a(b.d[c], V.SWITCHOVER, b.Na), a(b.d[c], V.SWITCHOUT, b.oa), a(b.d[c], V.MOUSEOUT, b.oa)
        }});
    C.DataStore = P({init: function() {
            this.n = {}
        },set: function(a, b) {
            this.n[a] = b
        },get: function(a) {
            var b = {}, c = this.n, d;
            if (a)
                return c[a];
            for (d in c)
                b[d] = c[d];
            return b
        },remove: function(a) {
            D(this.n[a]) && delete this.n[a]
        },reset: function() {
            this.n = {}
        }});
    Sa = P({init: function(a) {
            this.q = a.namespace ? a.namespace + "-" : n;
            this.t = v[a.type + "Storage"]
        },set: function(a, b) {
            this.t.setItem(this.q + a, JSON.stringify(b))
        },get: function(a, b) {
            b = this;
            var c = {}, d, e = b.t;
            if (a)
                return r(e.getItem(b.q + a));
            for (d in e)
                b.q ? (a = d.split(b.q)[1]) && (c[a] = r(e[d])) : c[d] = r(e[d]);
            return c
        },remove: function(a, b) {
            b = this;
            a = b.q + a;
            D(b.t.getItem(a)) && b.t.removeItem(a)
        },reset: function(a, b) {
            a = this;
            if (!a.q)
                return a.t.clear();
            for (b in a.t)
                a.remove(b)
        }});
    C.LocalStorage = function(a) {
        a = a || {};
        a.type = "local";
        return new Sa(a)
    };
    C.SessionStorage = function(a) {
        a = a || {};
        a.type = "session";
        return new Sa(a)
    };
    C.Deferred = P({init: function() {
            this.A = []
        },isResolve: function() {
            return !this.A
        },resolve: function(a, b) {
            b = this;
            if (b.isResolve())
                return b;
            var c = b.A, d = c.length, e = 0;
            b.A = O;
            for (b.n = a; e < d; ++e)
                c[e](a);
            return b
        },done: function(a, b) {
            b = this;
            b.A ? b.A.push(a) : a(b.n);
            return b
        }});
    C.DragFlick = P({Q: function(a) {
            return a.changedTouches ? a.changedTouches[0] : a
        },ya: function(a) {
            var b = this, c, d, e = m;
            b.c.push(b.contract(a.el, V.SWITCHDOWN, function(a) {
                var g = b.Q(a);
                c = g.pageX;
                d = g.pageY;
                e = p;
                oa(a)
            }), b.contract(v, V.SWITCHUP, function(f) {
                e && (f = b.Q(f), a.callback({x: f.pageX - c,y: f.pageY - d}), e = m)
            }))
        },Da: function(a) {
            this.ya({el: a.el,callback: function(b) {
                    var c = a.boundary || 0, d = {change: m,top: m,right: m,bottom: m,left: m,amount: b};
                    Math.abs(b.x) > c && (0 < b.x ? d.right = p : 0 > b.x && (d.left = p), d.change = p);
                    Math.abs(b.y) >
                    c && (0 < b.y ? d.bottom = p : 0 > b.y && (d.top = p), d.change = p);
                    a.callback(d)
                }})
        },init: function(a, b) {
            b = this;
            b.c = [];
            a = (b.b = a) || S;
            a.manual || b.attach()
        },attach: function() {
            function a(a, c, d) {
                b.c.push(b.contract(a, c, function(a) {
                    d(b.Q(a))
                }))
            }
            var b = this, c = this.b, d = c.el, e = c.start || E, f = c.move || E, g = c.end || E, k = m, u = 0, x = 0;
            c.direction && b.Da({el: d,boundary: c.boundary,callback: c.direction});
            a(d, V.SWITCHDOWN, function(a) {
                k = p;
                u = a.pageX;
                x = a.pageY;
                e({e: a,move: {x: u,y: x}})
            });
            a(H, V.SWITCHMOVE, function(a) {
                k && f({e: a,move: {x: a.pageX - u,y: a.pageY -
                        x}})
            });
            a(H, V.SWITCHUP, function(a) {
                k && (g({e: a,move: {x: a.pageX - u,y: a.pageY - x}}), k = m)
            })
        },detach: function(a) {
            a = this;
            for (var b = a.c, c = b.length; c--; )
                a.uncontract(b[c]);
            a.c = []
        }});
    C.ExternalInterface = function(a) {
        a = a || S;
        return a.android ? new La(a) : new Pa
    };
    La = Ca(C.HashQuery, {init: function(a) {
            this.b = a
        },call: function(a) {
            this.b.android[a.mode](this.makeHash(a))
        },addCallback: function(a, b, c) {
            c = this;
            c.b.externalObj[a] = function(a) {
                b(c.parseHash(a).vars)
            }
        },removeCallback: function(a) {
            delete this.b.externalObj[a]
        }});
    Pa = Ca(C.HashQuery, {init: function() {
            this.u = {}
        },dispose: function(a) {
            for (a in this.u)
                this.removeCallback(a);
            this._super()
        },call: function(a) {
            this.setHash(a)
        },addCallback: function(a, b, c) {
            c = this;
            c.u[a] = function(d) {
                d = c.getHash();
                d.mode == a && b(d.vars)
            };
            L(v, "hashchange", c.u[a])
        },removeCallback: function(a) {
            M(v, "hashchange", this.u[a]);
            delete this.u[a]
        }});
    C.Facebook = P({shareURL: function(a) {
            return "https://www.facebook.com/dialog/feed?app_id=" + a.app_id + "&redirect_uri=" + a.redirect_uri + ia({link: a.link,picture: a.picture,name: a.name,caption: a.caption,description: a.description})
        }});
    C.FPS = P({N: 0,Ja: 0,i: 0,init: function(a, b) {
            b = this;
            b.K = b.P = a.criterion;
            b.da = b.X(b.K);
            b.Ha = a.enterframe;
            a.manual || b.start()
        },dispose: ea,getCriterion: h("K"),getSurver: h("P"),getFrameTime: h("da"),enter: function(a) {
            a = this;
            a.Ha({criterion: a.K,surver: a.P})
        },start: function(a) {
            a = this;
            a.N = s();
            a.i = setInterval(a.G, a.da, a)
        },G: function(a, b) {
            b = a.Ja = s();
            a.P = a.X(b - a.N);
            a.N = b;
            a.enter()
        },X: function(a) {
            return Math.round(1E3 / a)
        },stop: function() {
            clearInterval(this.i)
        }});
    C.ImgLoad = P({init: function(a, b) {
            b = this;
            b.O = a.srcs;
            b.aa = [];
            b.c = [];
            b.za = new Ja({waits: b.O,onprogress: a.onprogress,callback: function() {
                    for (var c = b.c.length; c--; )
                        b.uncontract(b.c[c]);
                    b.c = [];
                    (a.onload || E)(b.aa)
                }});
            a.manual || b.start()
        },start: function() {
            function a() {
                b.za.pass()
            }
            var b = this, c, d = b.O.length;
            if (!b.Ma)
                for (b.Ma = p; d--; )
                    c = l("img"), c.src = b.O[d], b.c.push(b.contract(c, V.LOAD, a)), b.aa.push(c)
        }});
    C.WindowLoad = P({Ka: function(a, b, c) {
            b = this;
            c = b.contract(v, V.LOAD, function() {
                b.uncontract(c);
                a()
            })
        },init: function(a) {
            a && this.Ka(a.onload)
        }});
    Ta = C.Mobile = P({getZoom: function() {
            return R.clientWidth / v.innerWidth
        },isAndroid: function(a) {
            return F(/Android/i, a)
        },isIOS: function(a) {
            return F(/iPhone|iPad|iPod/i, a)
        },isWindows: function(a) {
            return F(/IEMobile/i, a)
        },isFBAPP: function(a) {
            return F(/FBAN/, a)
        },isMobile: function(a) {
            a = this;
            return a.isAndroid() || a.isIOS() || a.isWindows() || a.isFBAPP()
        },hideAddress: function() {
            function a() {
                0 == v.pageYOffset && fa()
            }
            function b() {
                setTimeout(a, 100)
            }
            this.contract(v, V.LOAD, b, m);
            this.contract(v, "orientationchange", b, m)
        }});
    C.mobile = new Ta;
    var kb = v.navigator.userAgent.toLowerCase(), Z;
    Z = -1 != kb.indexOf("opera") ? "opera" : -1 != kb.indexOf("msie") ? "ie" : -1 != kb.indexOf("chrome") ? "chrome" : -1 != kb.indexOf("safari") ? "safari" : -1 != kb.indexOf("gecko") ? "gecko" : "ather";
    Ua = C.PC = P({isChrome: function() {
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
    C.pc = new Ua;
    C.Orientation = P({init: function(a, b) {
            b = this;
            b.b = a;
            b.c = [];
            b.ga = {portrait: p,landscape: m};
            b.Z = {portrait: m,landscape: p};
            b.attach()
        },get: function(a) {
            a = this;
            return z(v.orientation) ? 90 != Math.abs(v.orientation) ? a.ga : a.Z : v.innerWidth < v.innerHeight ? a.ga : a.Z
        },fire: function(a) {
            a = this;
            if (a.get().portrait)
                return a.b.portrait();
            a.b.landscape()
        },attach: function(a, b) {
            b = this;
            var c = G(b, b.fire);
            b.c.push(b.contract(v, V.LOAD, c), b.contract(v, "orientationchange", c), b.contract(v, V.RESIZE, c))
        },detach: function(a) {
            a = this;
            for (var b =
            a.c.length; b--; )
                a.uncontract(a.c[b]);
            a.c = []
        }}, "onorientationchange" in v);
    C.Modal = P({V: function(a) {
            a = this;
            for (var b = a.c.length; b--; )
                a.uncontract(a.c[b]);
            a.c = []
        },init: function(a, b, c) {
            b = this;
            a = a || S;
            b.b = a;
            c = {display: "none",position: "absolute"};
            b.ja = new C.Scroll;
            b.c = [];
            b.l = l("div", {"class": "cir-modal-bg"});
            N(b.l, w({"z-ndex": 9998,top: 0,left: 0,width: "100%",height: "300%"}, c));
            q(R, b.l);
            b.h = l("div", {"class": "cir-modal-content"});
            N(b.h, w({"z-index": 9999,top: "50%",left: "50%"}, c));
            q(R, b.h);
            a.manual || b.open()
        },dispose: function(a) {
            a = this;
            a.close();
            Aa(a.l);
            Aa(a.h);
            this._super()
        },open: function(a,
        b) {
            b = this;
            b.ja.kill();
            N(b.l, {top: R.scrollTop});
            ua(b.l);
            b.inner(a)
        },close: function(a) {
            a = this;
            a.V();
            Ba(a.h, n);
            va(a.h);
            va(a.l);
            a.ja.revival()
        },inner: function(a, b, c, d) {
            b = this;
            b.V();
            a = a || b.b.html;
            Ba(b.h, a);
            ua(b.h);
            c = wa(b.h);
            N(b.h, {"margin-top": R.scrollTop - da(c.height)[2] / 2,"margin-left": -(da(c.width)[2] / 2)});
            b.b.bgClose && b.contract(b.l, V.CLICK, G(b, b.close));
            if (b.b.closeSelector) {
                d = qa(b.b.closeSelector, b.h);
                for (i = d.length; i--; )
                    b.c.push(b.contract(d[i], V.CLICK, G(b, b.close)))
            }
        }});
    Ka = P({init: function(a) {
            this.b = a;
            this.attach()
        },attach: function(a) {
            a = this;
            a.detach();
            a.Aa = a.contract(v, a.b.e, a.b.callback)
        },detach: function() {
            this.uncontract(this.Aa)
        }});
    C.DeviceOrientation = function(a) {
        a.e = "deviceorientation";
        return Ka(a)
    };
    C.DeviceOrientation.support = "ondeviceorientation" in v;
    C.DeviceMotion = function(a) {
        a.e = "devicemotion";
        return Ka(a)
    };
    C.DeviceMotion.support = "ondevicemotion" in v;
    var lb, mb;
    C.DeviceOrientation.support ? (lb = C.DeviceOrientation, mb = function(a) {
        return a
    }) : C.DeviceMotion.support && (lb = C.DeviceMotion, mb = function(a) {
        return a.rotationRate
    });
    C.DeviceShake = P({Sa: {x: "gamma",y: "beta",z: "alpha"},init: function(a, b) {
            b = this;
            b.la = new lb;
            b.b = a;
            b.attach()
        },attach: function() {
            var a, b = this.b, c = this.Sa[b.direction];
            this.la.attach(function(d) {
                d = mb(d);
                a || (a = d);
                Math.abs(d[c] - a[c]) > b.limit && (a = O, b.callback(d), setTimeout(function() {
                }, b.waittime))
            })
        },detach: function() {
            this.la.detach()
        }}, lb ? p : m);
    C.FontImg = P({init: function(a, b) {
            a = a || S;
            this.Pa = (b = a.type) ? b + "_" : n;
            this.Oa = a.tag || "span"
        },make: function(a) {
            a = (n + a).split(n);
            for (var b = this.Oa, c = n, d = a.length; d--; )
                c = "<" + b + ' class="font_' + this.Pa + a[d] + '"></' + b + ">" + c;
            return c
        }});
    C.Observer = P({init: function() {
            this.M = {}
        },on: function(a, b, c, d) {
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
                        return d.splice(e, 1), 0 == d.length && delete c[a], p;
            return m
        },fire: function(a, b) {
            var c = this.M[a], d, e;
            if (c)
                for (e = c.length; e--; )
                    (d = c[e]) && d(b)
        }});
    C.PreRender = P({init: function(a, b) {
            b = this;
            b.d = a.els;
            b.Y = a.guesslimit || 30;
            b.La = a.onrendered;
            b.ca = a.looptime || 100;
            b.Ia = b.ca + (a.loopblur || 20);
            a.manual || b.start()
        },dispose: function() {
            clearInterval(this.i);
            this._super()
        },start: function() {
            var a, b = this, c = s();
            for (a = b.d.length; a--; )
                ua(b.d[a]);
            b.i = setInterval(function() {
                var a = s(), e = a - c;
                c = a;
                if (e < b.Ia && (b.Y--, 1 > b.Y)) {
                    clearInterval(b.i);
                    for (a = b.d.length; a--; )
                        va(b.d[a]);
                    b.La()
                }
            }, b.ca, b)
        }});
    C.Route = P({init: function(a) {
            this.b = a;
            a.manual || this.start()
        },start: function() {
            this.fire(this.b.target)
        },fire: function(a) {
            var b, c = this.b, d = c.action;
            if (c.noregex && d[a])
                return d[a](a);
            for (b in d)
                if (a.match(b))
                    d[b](b)
        }});
    C.ScriptLoad = P({init: function(a) {
            this.d = [];
            a && this.requests(a)
        },requests: function(a, b) {
            for (var c = this, d = 0, e = a.length, f = new Ja({waits: a,callback: function() {
                    b(c.d)
                }}), g; d < e; d++)
                g = a[d].callback, a[d].callback = function(a) {
                    g(a);
                    f.pass()
                }, c.request(a[d])
        },request: function(a) {
            var b = this, c = l("script"), d;
            c.src = a.src;
            q(R, c);
            b.d.push(c);
            a.callback && (d = b.contract(c, V.LOAD, function() {
                b.uncontract(d);
                a.callback.apply(this, arguments)
            }))
        }});
    function $(a) {
        return pb ? qb.getResponseHeader(a) : m
    }
    function rb(a) {
        var b = new XMLHttpRequest;
        b.onload = function() {
            a(b)
        };
        b.open("HEAD", location.href + "?update" + s() + "=1");
        b.send(O);
        return b
    }
    var qb, pb = m;
    C.ServerMeta = P({init: function(a) {
            a = a || S;
            var b = a.callback || E;
            qb ? b(qb) : qb = rb(function() {
                pb = p;
                b(qb)
            })
        },date: function(a) {
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
    C.Surrogate = P({init: function(a) {
            this.Ca = a.delay;
            this.m = a.callback
        },dispose: function() {
            this.clear();
            this._super()
        },request: function(a, b) {
            b = this;
            b.j = a;
            b.clear();
            b.R = setTimeout(b.flush, b.Ca, b)
        },flush: function(a) {
            a = a || this;
            a.m(a.j)
        },clear: function() {
            clearInterval(this.R)
        }});
    C.Throttle = P({init: function(a) {
            this.Qa = a.waittime;
            this.m = a.callback
        },dispose: function() {
            this.unlock();
            this._super()
        },request: function(a, b) {
            b = this;
            b.ba ? b.j = a : (b.m(a), b.lock(), b.R = setTimeout(function() {
                b.j && (b.m(b.j), b.j = O);
                b.unlock()
            }, b.Qa, b))
        },lock: function() {
            this.ba = p
        },unlock: function(a) {
            a = a || this;
            a.ba = m;
            clearInterval(a.R)
        }});
    C.Timer = function(a) {
        function b() {
            ja = s();
            var a = f - (ja - Na) / 1E3;
            0 > a && (a = 0);
            Qa = c(a);
            u(Qa);
            ja > Oa ? (nb.stop(), x()) : ob = setTimeout(b, k)
        }
        function c(a) {
            var b;
            b = (n + a).split(".");
            a = b[0];
            b = b[1] ? b[1] : n;
            a = d({va: a,ta: Ma.Va});
            b = d({va: b,ta: Ma.Ua,Wa: p});
            return a + "." + b
        }
        function d(a) {
            var b = n + a.va, c = a.ta, d = c - b.length;
            return !a.Wa ? -1 < d ? e(d, 0) + b : e(c, 9) : 0 < d ? b + e(d, 0) : b.slice(0, c)
        }
        function e(a, b) {
            var c = n;
            for (b = n + b; 0 < a; )
                c += b, a--;
            return c
        }
        var f = a.limit, g = 1E3 * f, k = 1E3 * a.interval, u = a.onupdate, x = a.ontimeup, Ma;
        a = a.template.split(".");
        Ma = {Va: a[0].length,Ua: a[1].length};
        var Na = 0, ja = 0, Oa = g, Qa = c(f), ob, nb = {getLimit: function() {
                return f
            },getTime: function() {
                return Qa
            },getProgress: function() {
                return 1 - (Oa - ja) / g
            },setUpdate: function(a) {
                u = a
            },setTimeup: function(a) {
                x = a
            },countDown: function() {
                ja = Na = s();
                Oa = Na + g;
                b()
            },stop: function() {
                clearInterval(ob)
            }};
        return nb
    };
    C.Twitter = P({shareURL: function(a) {
            var b = a.name, c = a.hash, b = b ? " \u300c" + b + "\u300d" : n, c = c ? " " + c : n;
            return "https://twitter.com/intent/tweet?" + ia({url: a.redirect_uri,text: (a.caption || n) + b + c})
        }});
    C.XML = P({init: function(a) {
            this.a = l("div");
            Ba(this.a, a.data)
        },$: function(a) {
            return this.a.querySelector(a)
        },$$: function(a) {
            return qa(a, this.a)
        }});
    C.Model = P({H: function(a, b, c, d) {
            d = this;
            d.v.fire(a, d.o.get());
            b && d.v.fire(a + ":" + b, c)
        },init: function(a, b) {
            b = this;
            a = a || S;
            var c, d = a.defaults || b.defaults || {}, e = a.events || b.events;
            b.qa = a.validate || b.validate || {};
            b.o = a.store || b.store || new C.DataStore;
            b.v = new C.Observer;
            for (c in d)
                b.set(c, d[c]);
            for (c in e)
                b.on(c, e[c])
        },set: function(a, b, c) {
            c = this;
            if (c.qa[a] && !c.qa[a](a, b))
                return c.H("fail", a, b);
            c.ha = c.o.get();
            c.o.set(a, b);
            c.H(V.CHANGE, a, b)
        },prev: function(a) {
            return !a ? this.ha : this.ha[a]
        },get: function(a) {
            return this.o.get(a)
        },
        remove: function(a, b) {
            b = this;
            if (a) {
                var c = b.o.get(a), d = b.o.remove(a);
                b.H("remove", a, c);
                return d
            }
        },reset: function() {
            this.o.reset();
            this.H("reset")
        },on: function(a, b, c) {
            c = G(this, b);
            this.v.on(a, c);
            return c
        },off: function(a, b) {
            this.v.off(a, b)
        },fire: function(a, b) {
            return this.v.fire(a, b)
        }});
    C.View = P({init: function(a, b) {
            b = this;
            a = a ? pa(b, a) : pa(b, b, {});
            b.el = C.$(a.el || b.el || l("div"));
            b.attach();
            a.init && b.init()
        },dispose: function() {
            this.detach();
            this._super()
        },k: function(a, b, c, d, e, f) {
            b = this;
            f = b.events;
            for (c in f)
                for (d in e = "me" == c ? b.el : b.el.find(c), f[c])
                    e[a](d, b[f[c][d]])
        },attach: function() {
            this.k("on")
        },detach: function() {
            this.k("off")
        }});
    C.Validate = P({f: function(a, b, c, d) {
            if (a(c))
                return p;
            this.displayError(b, d)
        },init: function(a, b) {
            b = this;
            a = a || {};
            b.Ya = a.level;
            pa(b, b, a)
        },displayError: function(a, b) {
            b = "Validate Error:" + a + " is " + b + ".";
            switch (this.$a) {
                case "log":
                    return console.log(b), m;
                case "error":
                    throw Error(b);
                case "off":
                    return m;
                default:
                    return console.warn(b), m
            }
        },isObject: function(a, b) {
            return this.f(ka, a, b, "Object")
        },isNumber: function(a, b) {
            return this.f(z, a, b, "Number")
        },isString: function(a, b) {
            return this.f(la, a, b, "String")
        },isFunction: function(a,
        b) {
            return this.f(A, a, b, "Function")
        },isBoolean: function(a, b) {
            return this.f(ma, a, b, "Boolean")
        },isArray: function(a, b) {
            return this.f(B, a, b, "Array")
        }});
    C.validate = new C.Validate;
    C.Scroll = P({dispose: function() {
            this.revival();
            clearInterval(this.ma);
            this._super()
        },to: t,toTop: fa,toBottom: function() {
            t(H.height)
        },scrollY: function(a) {
            a = v.pageYOffset;
            return a !== ba ? a : (H.documentElement || R.parentNode || R).scrollTop
        },smooth: function(a, b, c, d) {
            c = this;
            b = b || E;
            c.na || (c.na = p, z(a) || (a = a.offsetTop), d = H.height - v.innerHeight, a > d && (a = d), c.U = c.scrollY(), c.ma = setInterval(function(d) {
                d = c.scrollY();
                d = 0.3 * (a - d) + d;
                if (1 > Math.abs(a - d) || c.U == d)
                    return t(a), clearInterval(c.ma), b(a), delete c.na;
                c.U = d;
                t(d)
            },
            50))
        },kill: function(a) {
            a = this;
            a.F || (N(R, {overflow: "hidden"}), a.F = a.contract(H, V.TOUCHMOVE, oa))
        },revival: function(a) {
            a = this;
            a.F && (N(R, {overflow: "auto"}), a.uncontract(a.F), delete a.F)
        }});
    C.beer = function() {
        console.log("\n   \u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000,. -\u2010\uff1d=\uff64\uff64\n\u3000\u3000\u3000\u3000\u3000\u3000 \u3000\u3000\u3000\u3000\u3000\u3000 ,. =\uff1d=\uff64\uff64\u3000\uff4f \u3000 \u25cbo. \u3000i \u3000\u3000 \u3000\u3000 :::\u30c8\uff64\n\u3000\u3000\u3000\u3000\u3000\u3000 \u3000\u3000\u3000\u3000\u3000_,/ \u3000 \u3000 \u3000\uff40\u30fe\u00b4\u00b4`\u30fd\u3001\u3000\uff9f\u3000.\uff4c \u3000 \u3000\u3000 \u3000:::\uff84\uff64\uff3cYEAHHHHHHHHHHHHHHHHHHHH!\n\u3000\u3000\u3000\u3000\u3000 \u3000\u3000\u3000\u3000\u3000 // \u3000\u3000\u3000\u3000 .::::/\u3000\u3000:::::!=\uff1d=l\u3000\u3000\u3000\u3000\u3000 :::|\uff7d.\u3000',\n\u3000 \u3000 \u3000 \u3000 \u3000\u3000 \u3000 /./ \u3000 \u3000 \u3000 .::::/\u3000\u3000 ::::l\u3000\u3000\u3000 |\u3000 __ ..... _::::|} \u30fd l-\uff64\n  \u3000 \u3000 \u3000 \u3000 \u3000 ,\uff68\uff78 ,'..__ \u3000\u3000\u3000.::::/ \u3000\u3000 ::::l\u3000\u3000\u3000 :l '\u00b4\u3000\u3000\u3000\u3000\uff40)'\uff40\u30fd \u30fe;\uff3c\n\u3000\u3000\u3000\u3000\u3000 \u3000\uff0f::{\uff9e\u3000\u30fd\u3001 \uff40`\u4e36\uff64;/\u2010\u2010- \uff64::::l\u3000\u3000 \u3000 `'::\u252c\u2010--\uff1c_ \u3000 } ./;:::::\uff3c\n\u3000\u3000\u3000\u3000\u3000\uff0f::::::::!\u3000\u3000 ,\uff1e---\u2010'\uff9e\uff70- ...__)\uff72\u3000,.\u3000-\u2010\u2010-\uff64\uff84\uff64\u3000\u3000 |l::\u30fd \uff0f;';';';';::::\uff3c\n  \u3000 \u3000 \uff0f|::::::;';';'\uff3c\uff0f\uff5d\u3000\uff08\u30fd\u3001\u3000\u3000_/| \u3000 (\u00b4\u3000\u3000\u3000 _,.\uff68!::\u30fd. \u3000\u30fe\uff70'\u00b4;';';';';';';';';:: /\u30fd\u3001\n")
    };
    Va && (Da.prototype = Va);
})();
