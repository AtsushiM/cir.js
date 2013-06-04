 // cir.js v1.2.0 (c) 2013 Atsushi Mizoue.
(function() {
    var g = void 0;
    function k(a) {
        return function() {
            return this[a]
        }
    }
    C = {};
    function m(a) {
        return "cubic-bezier(" + a + ")"
    }
    function aa(a, b) {
        for (var c = n("p"), d = p, e, f = q, h = a.length, l, x = RegExp("^(.*?)" + a[0] + "$", "i"); h--; )
            if (r(c.style[a[h]])) {
                d = s;
                (e = a[h].match(x)[1]) ? (f = ba(e), b = f + b, f = "-" + f + "-") : b = ba(b);
                c = t(ca("head"), n("style", {type: "text/css"}));
                l = c.sheet;
                break
            }
        return {tb: b,ub: d,prefix: e,sb: f,sheet: l}
    }
    function da(a) {
        return JSON.parse(a)
    }
    function ba(a) {
        return a.toLowerCase()
    }
    function u(a) {
        return (q + (a || q)).match(/^(.*?)(-?[0-9\.]+)(.*)$/)
    }
    function v(a, b) {
        var c, d;
        for (c in b)
            if (d = c.match(/^on(.+)$/))
                a.on(d[1], w(a, b[c]))
    }
    function ea() {
        this.stop();
        this._super()
    }
    function y(a) {
        this.fire("complete", a)
    }
    function z() {
        this.fire("start")
    }
    function fa(a) {
        this.fire("progress", a)
    }
    function ga(a) {
        if (a) {
            var b = this.ka, c = b[a];
            delete b[a];
            A(c[0], c[1], c[2])
        }
    }
    function ha(a, b, c, d, e) {
        d = this;
        d.ka || (d.ka = {});
        e = ++d.Eb;
        B(a, b, c);
        d.ka[e] = [a, b, c];
        return e
    }
    function ia(a, b) {
        ja(a) || ka(n("script", {id: a,src: b}), ca("script"))
    }
    var D = window, E = document, la = E.head || ca("head"), s = !0, p = !1, F = null, q = "", G = {}, ma = g, oa = na(), pa = m("0.19,1,0.22,1"), H = 1.70158, qa = p, ra = /0/.test(function() {
        0
    }) ? /\b_super\b/ : /.*/, sa = {}, I, ta, ua, J, va, wa, K, xa, ya, za, Aa, Ba, Ca, Da, L, Ea, Fa, Ga, Ha, Ia, Ja, M, Ka, La, Ma, Na, Oa, Pa, Qa, Ra, Sa, Ta, Ua, Va, Wa, Xa, Ya, Za, $a, ab;
    Date.now || (Date.now = function() {
        return +new Date
    });
    function N() {
        return Date.now()
    }
    function bb(a) {
        D.scrollTo(0, a)
    }
    function cb() {
        bb(1)
    }
    function db(a, b, c) {
        for (c in b)
            a[c] = b[c];
        return a
    }
    function eb(a, b) {
        b = q + a;
        return b.match(/^{.*}$/) ? da(b) : b.match(/^[0-9\.]+$/) ? +b : "true" === b ? s : "false" === b ? p : a
    }
    function fb(a, b) {
        b = [];
        b.push.apply(b, a);
        return b
    }
    function P(a, b, c) {
        return a.split(b).join(c)
    }
    function gb(a, b, c, d) {
        b = c = q;
        for (d in a)
            a[d] && (c += b + d + "=" + encodeURIComponent(a[d]), b = "&");
        return c
    }
    function Q(a, b) {
        return Object.prototype.toString.call(b) == "[object " + a + "]" ? s : p
    }
    function R(a) {
        return Q("Object", a)
    }
    function S(a) {
        return Q("Number", a)
    }
    function hb(a) {
        return Q("String", a)
    }
    function ib(a) {
        return Q("Function", a)
    }
    function jb(a) {
        return Q("Boolean", a)
    }
    function kb(a) {
        return Q("Array", a)
    }
    function r(a) {
        return a === ma ? p : s
    }
    function na() {
        return "ontouchstart" in D
    }
    function T() {
    }
    function lb(a) {
        a.preventDefault();
        return p
    }
    function U(a, b) {
        b = b || navigator.userAgent;
        return !!b.match(a)
    }
    function w(a, b) {
        return function() {
            return b.apply(a, arguments)
        }
    }
    function mb(a, b, c, d) {
        b = b || a;
        c = c || b;
        for (d in b)
            ib(b[d]) && (c[d] = w(a, b[d]));
        db(a, c);
        return c
    }
    function nb(a, b, c, d) {
        for (var e; s; ) {
            e = ~~((a + b) / 2);
            if (a == e)
                return d(e);
            c(e) ? a = e : b = e
        }
    }
    function ob(a) {
        return a.toString().match(/^\s*function.*\((.+)\)/)
    }
    function pb(a) {
        return kb(a) ? a.slice(0) : a
    }
    C.util = {pageTop: cb,override: db,replaceAll: P,escape: function(a) {
            return P(P(P(P(P("" + a, "&", "&amp;"), '"', "&quot;"), "'", "&#039;"), "<", "&lt;"), ">", "&gt;")
        },unescape: function(a) {
            return P(P(P(P(P("" + a, "&gt;", ">"), "&lt;", "<"), "&#039;", "'"), "&quot;", '"'), "&amp;", "&")
        },windowOpen: function(a, b, c, d, e) {
            e = [];
            for (d in c)
                jb(c[d]) && (c[d] === s ? c[d] = "yes" : c[d] === p && (c[d] = "no")), e.push(d + "=" + c[d]);
            return D.open(a, b, e.join(","))
        },typeCast: eb,makeQueryString: gb,parseQueryString: function(a, b, c, d, e) {
            a = a.replace(/^[\#\?]/,
            q);
            b = a.split("&");
            c = b.length;
            for (e = {}; c--; )
                d = b[c].split("="), e[d[0]] = eb(decodeURIComponent(d[1]));
            return e
        },is: Q,isObject: R,isNumber: S,isString: hb,isFunction: ib,isBoolean: jb,isArray: kb,isDefined: r,isTouchable: na,nullFunction: T,abstraceFunction: function() {
            throw Error("call abstract-function.");
        },eventPrevent: lb,eventStop: function(a) {
            a.stopPropagation();
            return p
        },checkUserAgent: U,proxy: w,owner: mb,binarySearch: function(a) {
            a = a || G;
            return nb(a.low || 0, a.high || 0, a.compare || T, a.end || T)
        },toArray: fb,copyArray: pb,
        hasDeclaredArgument: ob};
    function ca(a) {
        return E.querySelector(a)
    }
    function qb(a, b) {
        return fb(b.querySelectorAll(a))
    }
    function ja(a) {
        return E.getElementById(a)
    }
    function rb(a, b) {
        return 0 <= a.className.indexOf(b) ? s : p
    }
    function sb(a, b, c, d) {
        rb(a, b) || (c = q, (d = a.className) && (c = " "), a.className = d + c + b)
    }
    function tb(a, b, c, d, e) {
        if (rb(a, b)) {
            d = [];
            c = a.className.split(" ");
            for (e = c.length; e--; )
                b != c[e] && d.push(c[e]);
            a.className = d.join(" ")
        }
    }
    function ub(a, b) {
        if (rb(a, b))
            return tb(a, b);
        sb(a, b)
    }
    function vb(a, b, c, d) {
        if (R(b)) {
            for (d in b)
                b[d] && a.setAttribute(d, b[d]);
            return s
        }
        return c || c == q ? a.setAttribute(b, c) : a.getAttribute(b)
    }
    function wb(a, b) {
        a.removeAttribute(b)
    }
    function n(a, b, c) {
        c = E.createElement(a);
        b && vb(c, b);
        return c
    }
    function xb(a) {
        var b = n("div");
        V(b, a);
        return fb(b.children)
    }
    function B(a, b, c) {
        a.addEventListener(b, c, p)
    }
    function A(a, b, c) {
        a.removeEventListener(b, c, p)
    }
    function yb(a, b, c, d) {
        function e(a) {
            var c = a.target;
            rb(c, b) && d.apply(c, arguments)
        }
        B(a, c, e);
        return e
    }
    function zb(a) {
        a.style.display = "block"
    }
    function Ab(a) {
        a.style.display = "none"
    }
    function W(a, b, c, d, e, f) {
        c = a.style;
        for (d in b)
            e = d, f = b[d], S(f) && (f += "px"), c[e] = f
    }
    function Bb(a) {
        return E.defaultView.getComputedStyle(a, F)
    }
    function Cb(a) {
        return a.parentNode
    }
    function t(a, b) {
        return a.appendChild(b)
    }
    function ka(a, b) {
        return Cb(a).insertBefore(b, a)
    }
    function Db(a, b) {
        return Cb(a).insertBefore(b, a.nextSibling)
    }
    function Eb(a, b) {
        return a.insertBefore(b, a.firstChild)
    }
    function Fb(a) {
        return Cb(a).removeChild(a)
    }
    function V(a, b) {
        if (!r(b))
            return a.innerHTML;
        a.innerHTML = b
    }
    function Gb(a, b) {
        if (!r(b))
            return a.value;
        a.value = b
    }
    C.dom = {win: D,doc: E,$: ca,$$: function(a) {
            return qb(a, E)
        },$child: function(a, b) {
            return b.querySelector(a)
        },$$child: qb,$id: ja,on: B,off: A,delegate: yb,create: n,show: zb,hide: Ab,hasClass: rb,addClass: sb,removeClass: tb,toggleClass: ub,css: W,computedStyle: Bb,append: t,parent: Cb,before: ka,after: Db,insertBefore: Eb,remove: Fb,attr: vb,removeAttr: wb,html: V,val: Gb,reflow: function(a) {
            a = a || E.body;
            a.offsetTop
        },toElement: function(a) {
            return xb(a)[0]
        },toElements: xb};
    ta = C.lass = function() {
    };
    ta.extend = function(a, b, c) {
        function d() {
            !qa && this.init && this.init.apply(this, arguments)
        }
        function e(c) {
            var e = a[c], l = b.prototype[c];
            ib(e) && ib(l) && ra.test(e) ? d.prototype[c] = function() {
                var a, b = this._super;
                this._super = l;
                a = e.apply(this, arguments);
                this._super = b;
                return a
            } : d.prototype[c] = e
        }
        b = this;
        qa = s;
        d.prototype = new b;
        qa = p;
        d.prototype.constructor = d;
        for (c in a)
            a.hasOwnProperty(c) && e(c);
        d.extend = b.extend;
        return d
    };
    function X(a, b, c) {
        a = a || ta;
        a = a.extend(b);
        r(c) && (a.support = c);
        return a
    }
    function Y(a, b) {
        return X(ua, a, b)
    }
    ua = C.Base = X(ma, {Eb: 0,dispose: function(a, b, c) {
            a = this;
            c = a.ka;
            for (b in c)
                A.apply(F, c[b]);
            for (b in a)
                (c = a[b]) && c.dispose && c.dispose();
            a.__proto__ = F;
            for (b in a)
                a[b] = F, delete a[b];
            return F
        },k: ha,contract: ha,J: ga,uncontract: ga});
    J = C.Observer = Y({init: function() {
            this.za = {}
        },on: function(a, b, c, d) {
            d = this.za;
            d[a] || (d[a] = []);
            d[a].push(b)
        },one: function(a, b, c) {
            function d(e) {
                b(e);
                c.off(a, d)
            }
            c = this;
            c.on(a, d)
        },off: function(a, b, c, d, e, f) {
            d = this.za;
            if (b) {
                if (e = d[a])
                    for (f = e.length; f--; )
                        if (b == e[f])
                            return e.splice(f, 1), 0 == e.length && delete d[a], s;
                return p
            }
            return delete d[a]
        },fire: function(a) {
            var b = this.za[a], c, d, e, f;
            if (b) {
                c = fb(arguments).slice(1);
                e = 0;
                for (f = b.length; e < f; e++)
                    (d = b[e]) && d.apply(F, c)
            }
        }});
    K = C.Event = Y({SWITCHCLICK: oa ? "touchstart" : "click",SWITCHDOWN: oa ? "touchstart" : "mousedown",SWITCHMOVE: oa ? "touchmove" : "mousemove",SWITCHUP: oa ? "touchend" : "mouseup",SWITCHOVER: oa ? "touchstart" : "mouseover",SWITCHOUT: oa ? "touchend" : "mouseout",LOAD: "load",CHANGE: "change",CLICK: "click",MOUSEDOWN: "mousedown",MOUSEMOVE: "mousemove",MOUSEUP: "mouseup",MOUSEOVER: "mouseover",MOUSEOUT: "mouseout",TOUCHSTART: "touchstart",TOUCHMOVE: "touchmove",TOUCHEND: "touchend",RESIZE: "resize"});
    K = C.e = new K;
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
            return c * (a /= d) * a * ((H + 1) * a - H) + b
        },outBack: function(a, b, c, d) {
            return c * ((a = a / d - 1) * a * ((H + 1) * a + H) + 1) + b
        },inOutBack: function(a, b, c, d) {
            return 1 > (a /= d / 2) ? c / 2 * a * a * (((H *= 1.525) + 1) * a - H) + b : c / 2 * ((a -= 2) * a * (((H *= 1.525) + 1) * a + H) + 2) + b
        }};
    C.ssease = {linear: "linear",inCubic: m("0.55,0.055,0.675,0.19"),outCubic: m("0.215,0.61,0.355,1"),inOutCubic: m("0.645,0.045,0.355,1"),inQuart: m("0.895,0.03,0.685,0.22"),outQuart: m("0.165,0.84,0.44,1"),inOutQuart: m("0.77,0,0.175,1"),inQuint: m("0.755,0.05,0.855,0.06"),outQuint: m("0.23,1,0.32,1"),inOutQuint: m("0.86,0,0.07,1"),inSine: m("0.47,0,0.745,0.715"),outSine: m("0.39,0.575,0.565,1"),inOutSine: m("0.445,0.05,0.55,0.95"),inExpo: m("0.95,0.05,0.795,0.035"),outExpo: m("0.19,1,0.22,1"),inOutExpo: m("1,0,0,1"),
        inCirc: m("0.6,0.04,0.98,0.335"),outCirc: m("0.075,0.82,0.165,1"),inOutCirc: m("0.785,0.135,0.15,0.86"),inQuad: m("0.55,0.085,0.68,0.53"),outQuad: m("0.25,0.46,0.45,0.94"),inOutQuad: m("0.455,0.03,0.515,0.955"),inBack: [m("0.6,0,0.735,0.045"), m("0.6,-0.28,0.735,0.045")],outBack: [m("0.175,0.885,0.32,1"), m("0.175,0.885,0.32,1.275")],inOutBack: [m("0.68,0,0.265,1"), m("0.68,-0.55,0.265,1.55")]};
    var Hb = aa(["animation", "webkitAnimation"], "Animation"), Ib = Hb.prefix, Jb = Hb.sb, Kb = Hb.tb, Lb = Hb.sheet;
    M = C.SSAnime = X(J, {eb: function(a, b) {
            a = this.b;
            b = this.Gb;
            A(a, Kb + "End", b);
            A(a, "animationend", b)
        },init: function(a, b, c, d, e, f, h, l) {
            d = this;
            d._super();
            v(d, c);
            c = c || G;
            d.Aa = c.oncomplete || T;
            d.b = a;
            M.id++;
            d.u = "ciranim" + M.id;
            e = c.duration || M.duration;
            f = c.ease || pa;
            l = {};
            for (h in b)
                l[h] = b[h], S(l[h]) && (l[h] += "px");
            d.Vb = l;
            l = P(P(JSON.stringify(l), '"', q), ",", ";");
            Lb.insertRule("@" + Jb + "keyframes " + d.u + "{to" + l + "}", Lb.cssRules.length);
            kb(f) || (f = [f]);
            a = d.u;
            b = 0;
            h = f.length;
            for (l = q; b < h; b++)
                l += Jb + "animation:" + a + " " + e + "ms " + f[b] +
                " 0s 1 normal both;";
            Lb.insertRule("." + a + "{" + l + "}", Lb.cssRules.length);
            c.manual || d.start()
        },dispose: ea,p: y,q: z,start: function(a, b) {
            function c(c) {
                var e = Lb.cssRules, f = e.length, h;
                a.eb();
                if ("webkit" == Ib) {
                    for (; f--; )
                        h = e[f].name || (q + e[f].selectorText).split(".")[1], h == a.u && Lb.deleteRule(f);
                    tb(b, a.u);
                    W(b, a.Vb)
                }
                a.p(c)
            }
            a = this;
            b = a.b;
            a.q();
            a.Gb = c;
            B(b, Kb + "End", c);
            B(b, "animationend", c);
            sb(b, a.u)
        },stop: function(a) {
            a = {};
            this.fire("stop");
            a[Jb + "animation-play-state"] = "paused";
            W(this.b, a);
            this.eb()
        }}, Hb.ub);
    M.id = 0;
    M.duration = 500;
    var Mb = aa(["transitionProperty", "webkitTransitionProperty"], "Transition"), Nb = Mb.sb, Ob = Mb.tb, Pb = Mb.sheet, Qb = C.SSTrans = X(J, {init: function(a, b, c, d) {
            d = this;
            d._super();
            v(d, c);
            c = c || G;
            Qb.id++;
            d.u = "cirtrans" + Qb.id;
            var e = [];
            db({}, b);
            var f, h = c.duration || Qb.duration, l = c.ease || pa;
            kb(l) || (l = [l]);
            for (f in b)
                e.push(f);
            f = 0;
            for (var x = l.length, O = q, O = O + (Nb + "transition-property:" + e.join(" ") + ";" + Nb + "transition-duration:" + h + "ms;"); f < x; f++)
                O += Nb + "transition-timing-function:" + l[f] + ";";
            Pb.insertRule("." + d.u + "{" + O + "}", Pb.cssRules.length);
            d.b = a;
            d.X = b;
            c.manual || d.start()
        },dispose: ea,p: y,q: z,start: function(a) {
            a = this;
            a.q();
            a.la = function(b) {
                a.da();
                setTimeout(function() {
                    a.Wa || a.p(b)
                }, 1)
            };
            B(a.b, Ob + "End", a.la);
            B(a.b, "transitionend", a.la);
            sb(a.b, a.u);
            W(a.b, a.X)
        },da: function(a) {
            a = this;
            var b = Pb.cssRules, c = b.length, d;
            A(a.b, Ob + "End", a.la);
            A(a.b, "transitionend", a.la);
            for (tb(a.b, a.u); c--; )
                if (d = b[c].name || (q + b[c].selectorText).split(".")[1], d == a.u) {
                    Pb.deleteRule(c);
                    break
                }
        },Wa: p,stop: function(a) {
            a = this;
            a.Wa = s;
            a.fire("stop");
            a.da()
        }}, Mb.ub);
    Qb.id = 0;
    Qb.duration = 500;
    I = {request: function(a) {
            return this.xb.call(D, a)
        },cancel: function(a) {
            return this.Ab.call(D, a)
        }};
    Pa = ["webkit", "moz", "o", "ms"];
    if (D.requestAnimationFrame)
        Ra = D.requestAnimationFrame, Sa = D.cancelAnimationFrame;
    else {
        for (Qa = Pa.length; Qa--; )
            if (D[Pa[Qa] + "RequestAnimationFrame"]) {
                Ra = D[Pa[Qa] + "RequestAnimationFrame"];
                Sa = D[Pa[Qa] + "CancelAnimationFrame"];
                break
            }
        Ra || (Ra = function(a) {
            return setTimeout(a, 1E3 / C.AnimeFrame.fps)
        }, Sa = function(a) {
            clearTimeout(a)
        })
    }
    I.xb = Ra;
    I.Ab = Sa;
    I = C.AnimeFrame = Y(I);
    I.fps = 30;
    C.animeframe = new I;
    L = C.Tweener = X(J, {init: function(a, b, c, d, e, f) {
            f = this;
            f._super();
            v(f, c);
            c = c || G;
            f.pb = a;
            f.X = [];
            for (d in b)
                e = b[d], e.name = d, e.Ub = e.to - e.from, e.prefix = e.prefix || q, e.suffix = e.suffix || (e.suffix === q ? q : "px"), f.X.push(e);
            f.Qa = c.duration || L.duration;
            f.Fb = c.ease || f.vb;
            c.manual || f.start()
        },dispose: ea,vb: function(a, b, c, d) {
            return c * (-Math.pow(2, -10 * a / d) + 1) + b
        },p: y,U: function(a) {
            for (var b = this, c = L.qa, d, e = N(), f, h = c.length, l; h--; )
                if (d = c[h], a = d.X.length, f = e - d.Sb, f < d.Qa)
                    for (; a--; )
                        l = d.X[a], L.kb(d.pb, l, d.Fb(f, l.from, l.Ub,
                        d.Qa));
                else {
                    for (; a--; )
                        l = d.X[a], L.kb(d.pb, l, l.to);
                    d.p();
                    c.splice(h, 1)
                }
            c.length ? C.animeframe.request(function() {
                b.U && b.U()
            }) : b.da()
        },q: z,start: function(a) {
            a = this;
            a.q();
            a.Sb = N();
            L.qa.push(a);
            L.Ma || (L.Ma = 1, C.animeframe.request(function() {
                a.U && a.U()
            }))
        },da: function() {
            L.qa = [];
            C.animeframe.cancel(L.Ma);
            L.Ma = F
        },stop: function() {
            this.fire("stop");
            this.da()
        }}, g);
    L.kb = function(a, b, c) {
        a[b.name] = b.prefix || b.suffix ? b.prefix + c + b.suffix : c
    };
    L.qa = [];
    L.duration = 500;
    function Rb() {
    }
    C.$ = function(a, b, c, d, e) {
        c = "string" == typeof a ? (b || E).querySelectorAll(a) : [a];
        d = new Rb;
        for (e = d.length = c.length; e--; )
            d[e] = c[e];
        return d
    };
    function Z(a, b, c) {
        var d = a.length;
        for (c = Sb(c); d--; )
            c[0] = a[d], b.apply(a, c);
        return a
    }
    function Tb(a, b, c) {
        c = Sb(c);
        c[0] = a[0];
        return b.apply(F, c)
    }
    function Sb(a) {
        var b = [F];
        b.push.apply(b, a);
        return b
    }
    Oa = C.$.Yb = {querySelectorAll: function(a) {
            return this[0].querySelectorAll(a)
        },find: function(a) {
            return C.$(a, this)
        },parent: function() {
            return C.$(Cb(this[0]))
        },on: function() {
            return Z(this, B, arguments)
        },off: function() {
            return Z(this, A, arguments)
        },delegate: function(a, b, c, d, e) {
            d = this;
            d.ua || (d.ua = {});
            e = d.ua;
            e[b] || (e[b] = {});
            e = e[b];
            e[a] || (e[a] = []);
            e = e[a];
            return Z(d, function() {
                var a = yb.apply(F, arguments);
                e.push([c, a])
            }, arguments)
        },undelegate: function(a, b, c) {
            var d = this.ua;
            if (!d)
                return p;
            d = d[b];
            if (!d)
                return p;
            d = d[a];
            if (!d)
                return p;
            a = d.length;
            if (c) {
                for (; a--; )
                    if (d[a][0] === c)
                        return this.off(b, d[a][1]), d.splice(a, 1), s;
                return p
            }
            for (; a--; )
                this.off(b, d[a][1]), d.splice(a, 1);
            return s
        },show: function() {
            return Z(this, zb)
        },hide: function() {
            return Z(this, Ab)
        },hasClass: function() {
            return Tb(this, rb, arguments)
        },addClass: function() {
            return Z(this, sb, arguments)
        },removeClass: function() {
            return Z(this, tb, arguments)
        },toggleClass: function() {
            return Z(this, ub, arguments)
        },css: function() {
            return Z(this, W, arguments)
        },html: function() {
            return Tb(this,
            V, arguments)
        },val: function() {
            return Tb(this, Gb, arguments)
        },attr: function() {
            return Tb(this, vb, arguments)
        },removeAttr: function() {
            return Z(this, wb, arguments)
        },append: function() {
            return Z(this, t, arguments)
        },before: function() {
            return Tb(this, ka, arguments)
        },after: function() {
            return Tb(this, Db, arguments)
        },insertBefore: function() {
            return Tb(this, Eb, arguments)
        },remove: function() {
            return Z(this, Fb, arguments)
        }};
    Ta = M || G;
    Ua = Ta.support;
    Va = G;
    Ua && C.cssease ? Va = C.cssease : C.ease && (Va = C.ease);
    Oa.animate = function() {
        this.R || (this.R = []);
        return Z(this, Ub, arguments)
    };
    Oa.stop = function(a, b) {
        a = this;
        if (a.R) {
            for (b = a.R.length; b--; )
                a.R[b].stop();
            a.R = F
        }
        return a
    };
    function Ub(a, b, c, d, e, f, h, l) {
        ib(c) && (e = c, c = F);
        ib(d) && !e && (e = d, d = F);
        d && (d = Va[d]);
        l = {duration: c,ease: d,oncomplete: e};
        if (Ua)
            b = new Ta(a, b, l);
        else {
            c = C.Tweener;
            d = a.style;
            var x;
            a = Bb(a);
            h = {};
            for (x in b)
                e = u(b[x]), f = a.getPropertyValue(x), f = !f || "none" == f ? 0 : +u(f)[2], h[x] = {from: f,to: +e[2] || 0,prefix: e[1],suffix: e[3]};
            b = new c(d, h, l)
        }
        this.R.push(b)
    }
    Fa = C.HashQuery = Y({typeCast: function(a, b, c) {
            b = eb(a);
            return a == b && (c = a.match("^[\"'](.*)[\"']$")) ? c[1] : b
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
                return p;
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
    function Vb(a) {
        var b = n(a.type);
        b.controls = a.controls ? s : p;
        b.preload = a.preload || "auto";
        b.autoplay = a.autoplay ? s : p;
        b.loop = a.loop ? s : p;
        b.src = a.dir + a.name + "." + a.suffix[0][0];
        return b
    }
    function Wb(a, b) {
        if (!D["HTML" + a + "Element"])
            return p;
        a = ba(a);
        for (var c = n(a), d = [], e = 0, f = b.length; e < f; e++)
            c.canPlayType(a + "/" + b[e][1]) && d.push(b[e]);
        return d.length ? d : p
    }
    Da = Y({init: function(a) {
            var b = this, c = a.autoplay, d = a.loop, e, f, h = a.el || E.body;
            a.preload = "auto";
            a.autoplay = a.loop = p;
            switch (a.type) {
                case "Audio":
                    e = va(a);
                    break;
                default:
                    e = wa(a)
            }
            if (b.b = e)
                c && (f = b.k(e, "canplay", function() {
                    b.J(f);
                    b.play()
                })), d && b.loop(s), a.oncanplay && b.k(e, "canplay", a.oncanplay), a.onended && b.k(e, "ended", a.onended), t(h, e)
        },dispose: function() {
            Fb(this.b);
            this._super()
        },getElement: k("b"),getCurrent: function() {
            return this.b.currentTime
        },getDuration: function() {
            return this.b.duration
        },setCurrent: function(a) {
            this.b.currentTime =
            a
        },loop: function(a, b) {
            b = this;
            b.C && (b.J(b.C), delete b.C);
            a && (b.C = b.k(b.b, "ended", function() {
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
    va = C.Audio = function(a) {
        a.type = "audio";
        a.suffix = va.support;
        return Vb(a)
    };
    va.support = Wb("Audio", [["mp3", "mpeg"], ["wav", "wav"], ["ogg", "ogg"], ["m4a", "mp4"]]);
    (C.Sound = function(a) {
        a.type = "Audio";
        return new Da(a)
    }).support = va.support;
    wa = C.Video = function(a) {
        a.type = "video";
        a.suffix = wa.support;
        return Vb(a)
    };
    wa.support = Wb("Video", [["webm", "webm"], ["mp4", "mp4"], ["ogv", "ogg"]]);
    (C.Movie = function(a) {
        a.type = "Video";
        return new Da(a)
    }).support = wa.support;
    C.Ajax = X(J, {dispose: function() {
            this.stop();
            this._super()
        },init: function(a) {
            a = db({}, a);
            var b = this, c = a.url, d = a.type || "GET", e = q, f = b.La = new XMLHttpRequest;
            b._super();
            "json" == a.dataType && b.Jb(a);
            v(b, a);
            a.cache || b.zb(a);
            a.query && (e = b.Da(a));
            f.onreadystatechange = function() {
                if (4 == f.readyState) {
                    if (200 == f.status)
                        return b.fire("complete", f.responseText, f);
                    b.fire("error", f)
                }
            };
            "GET" == d && (c = (-1 != c.indexOf("?") ? s : p) ? c + "&" : c + "?", c += e, e = q);
            b.Da = e;
            c = [d, c];
            a.sync && c.push(p);
            f.open.apply(f, c);
            "POST" == d && f.setRequestHeader("Content-Type",
            "application/x-www-form-urlencoded");
            a.manual || b.start()
        },q: z,start: function(a) {
            a = this;
            a.q();
            a.La.send(a.Da)
        },stop: function(a) {
            a = this;
            a.La.abort();
            a.fire("stop", a.La)
        },Da: function(a) {
            a = a.query;
            R(a) && (a = encodeURI(gb(a)));
            return a
        },zb: function(a) {
            a.query || (a.query = {});
            a.query["cir" + N()] = "0"
        },Jb: function(a) {
            var b = a.oncomplete, c = a.onerror;
            b && (a.oncomplete = function(a) {
                b(da(a))
            });
            c && (a.onerror = function(a) {
                c(a)
            })
        }}, g);
    za = C.Progress = Y({pa: 0,xa: 0,Q: 0,t: function(a, b, c) {
            b = this;
            r(a) && b.K.push(a);
            b.Q = b.pa / b.Ka;
            1 < b.Q && (b.Q = 1);
            b.fb(b.Q);
            b.xa && (c = Error("miss"));
            if (b.pa == b.Ka || b.xa)
                b.Aa(c, b.K), b.Aa = b.fb = T
        },init: function(a, b, c) {
            b = this;
            c = a.waits;
            kb(c) && (c = c.length);
            b.Ka = c;
            b.Aa = a.oncomplete;
            b.fb = a.onprogress || T;
            b.K = []
        },getProgress: k("Q"),pass: function(a) {
            this.pa++;
            this.t(a)
        },miss: function(a) {
            this.xa++;
            this.t(a)
        },exit: function(a, b) {
            b = this;
            b.pa = b.Ka;
            b.t(a)
        }});
    xa = X(J, {init: function(a, b, c) {
            b = this;
            b._super();
            a = a || G;
            c = pb(a.queue) || [];
            v(b, a);
            b.resetQueue(c);
            b.T = w(b, b.T)
        },q: z,start: function(a) {
            a = this;
            a.q();
            a.W = p;
            a.Ra()
        },restart: function(a) {
            this.resetQueue(a);
            this.start()
        },stop: function() {
            this.o = F;
            this.fire("stop")
        },pause: function() {
            this.W = s;
            this.fire("pause")
        },resume: function(a) {
            a = this;
            a.W && (a.fire("resume"), a.W = p, a.Ra())
        },resetQueue: function(a, b, c) {
            b = this;
            a && (b.Mb = pb(a));
            a = b.o = pb(b.Mb);
            for (c in a)
                a[c].resetQueue && a[c].resetQueue();
            b.fire("reset")
        },ya: function() {
            this.fire("change",
            this.getQueue())
        },setQueue: function(a) {
            this.o = pb(a);
            this.ya()
        },getQueue: function() {
            return pb(this.o)
        },addTask: function(a, b, c) {
            c = this;
            if (!S(b) || b > c.o.length)
                b = c.o.length;
            c.o.splice(b, 0, a);
            c.ya()
        },removeTask: function(a, b, c, d) {
            b = this;
            c = 0;
            for (d = b.o.length; c < d; c++)
                if (b.o[c] === a) {
                    b.o.splice(c, 1);
                    b.ya();
                    break
                }
        },Ra: function() {
            this.W || this.va()
        },Na: function(a, b) {
            b = this;
            return a.one && a.start ? (a.one("complete", w(b, b.T)), w(a, a.start)) : ob(a) ? w(b, a) : function(c) {
                a.call(b);
                c()
            }
        }}, g);
    C.Parallel = C.Async = X(xa, {p: y,va: function(a) {
            a = this;
            if (a.o) {
                if (!a.o.length)
                    return a.p();
                for (a.hb = a.o.length; !a.W && a.o && a.o[0]; )
                    a.Na(a.o.shift())(a.T)
            }
        },ba: fa,T: function(a) {
            a = this;
            a.ba();
            a.hb--;
            a.hb || a.p()
        }});
    C.Serial = C.Sync = X(xa, {p: y,va: function(a) {
            a = this;
            if (a.o && !a.W) {
                if (a.o[0])
                    return a.Na(a.o.shift())(a.T);
                a.p()
            }
        },ba: fa,T: function() {
            this.ba();
            this.va()
        }});
    C.Anvas = Y({init: function(a, b) {
            b = this;
            b.ha = a.canvas;
            b.Bb = b.ha.getContext("2d");
            b.setSize(a)
        },setSize: function(a) {
            a.width && (this.ha.width = a.width);
            a.height && (this.ha.height = a.height)
        },pigment: function(a) {
            var b = this, c = n("canvas"), d = n("img");
            d.onload = function() {
                c.width = a.width;
                c.height = a.height;
                c.getContext("2d").drawImage(d, 0, 0);
                a.onload.apply(b, [c, d])
            };
            d.src = a.src;
            return {image: c,x: a.x || 0,y: a.y || 0}
        },pigments: function(a, b) {
            function c(a) {
                var c = a.onload || T;
                a.onload = function(a, e) {
                    c(a, e);
                    f--;
                    0 == f && b.call(d,
                    h)
                };
                h[e] = d.pigment(a);
                f++
            }
            var d = this, e, f = 0, h = {};
            b = b || T;
            for (e in a)
                c(a[e]);
            return h
        },draw: function(a) {
            var b = 0, c = a.length, d = this.Bb, e = this.ha;
            for (d.clearRect(0, 0, e.width, e.height); b < c; b++)
                (e = a[b]) && d.drawImage(e.image, e.x, e.y)
        }}, !!D.HTMLCanvasElement);
    var Xb = "Sun Mon Tue Wed Thu Fri Sat".split(" "), Yb = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), Zb = "January February March April May June July August September October November December".split(" "), $b = "Jan Feb Mar Apr May June July Aug Sep Oct Nov Dec".split(" "), $ = {d: function(a) {
            return ac($.j(a))
        },j: function(a) {
            return a.getDate()
        },D: function(a) {
            return Xb[a.getDay()]
        },l: function(a) {
            return Yb[a.getDay()]
        },F: function(a) {
            return Zb[a.getMonth()]
        },M: function(a) {
            return $b[a.getMonth()]
        },
        m: function(a) {
            return ac($.n(a))
        },n: function(a) {
            return a.getMonth() + 1
        },Y: function(a) {
            return a.getFullYear()
        },y: function(a) {
            a = $.Y(a);
            a = q + a;
            return a.slice(a.length - 2)
        },a: function(a) {
            return ba($.A(a))
        },A: function(a) {
            return 12 > $.G(a) ? "AM" : "PM"
        },g: function(a) {
            a = $.G(a);
            return 12 == a || 0 == a || 24 == a ? 12 : a % 12
        },G: function(a) {
            return a.getHours()
        },h: function(a) {
            return ac($.g(a))
        },H: function(a) {
            return ac($.G(a))
        },i: function(a) {
            return ac($.I(a))
        },s: function(a) {
            return ac($.S(a))
        },I: function(a) {
            return a.getMinutes()
        },
        S: function(a) {
            return a.getSeconds()
        }}, bc = /%([djDlFMmnYyaAgGhHisIS])/g;
    function ac(a) {
        a = +a;
        10 > a && (a = "0" + a);
        return q + a
    }
    C.DateFactory = Y({make: function(a) {
            switch (s) {
                case hb(a):
                    return a = a.split(/[T:\-\+\/\s]/), new Date(+a[0], a[1] - 1, +a[2], +a[3] || 0, +a[4] || 0, +a[5] || 0);
                case S(a):
                    return new Date(a);
                case Q("Date", a):
                    return a
            }
            return new Date
        },format: function(a, b) {
            b = this.make(b);
            return a.replace(bc, function(a, d) {
                return $[d](b)
            })
        }});
    C.Rollover = Y({init: function(a, b) {
            b = this;
            var c = a.toggleClass || q, d = a.over || T, e = a.out || T;
            b.B = a.els;
            b.Ob = function() {
                sb(b, c);
                d()
            };
            b.ob = function() {
                tb(b, c);
                e()
            };
            a.manual || b.attach()
        },dispose: function() {
            this.detach();
            this._super()
        },attach: function() {
            this.aa(B)
        },detach: function() {
            this.aa(A)
        },aa: function(a, b, c) {
            b = this;
            for (c = b.B.length; c--; )
                a(b.B[c], K.SWITCHOVER, b.Ob), a(b.B[c], K.SWITCHOUT, b.ob), a(b.B[c], K.MOUSEOUT, b.ob)
        }});
    C.DataStore = Y({ia: function() {
            return !this.fa ? {} : []
        },init: function(a) {
            a = a || G;
            this.fa = a.array || p;
            this.reset()
        },set: function(a, b, c) {
            R(a) || (c = {}, c[a] = b, a = c);
            for (c in a)
                this.ja[c] = a[c]
        },get: function(a) {
            var b = this.ia(), c = this.ja, d;
            if (a)
                return c[a];
            for (d in c)
                b[d] = c[d];
            return b
        },remove: function(a, b) {
            b = this;
            r(b.ja[a]) && (b.fa ? b.data.splice(a, 1) : delete b.ja[a])
        },reset: function() {
            this.ja = this.ia()
        }});
    Ea = Y({ia: function() {
            return !this.fa ? {} : []
        },init: function(a) {
            this.fa = a.array || p;
            this.V = a.namespace ? a.namespace + "-" : q;
            this.Z = D[a.type + "Storage"]
        },set: function(a, b, c) {
            R(a) || (c = {}, c[a] = b, a = c);
            for (c in a)
                this.Z.setItem(this.V + c, JSON.stringify(a[c]))
        },get: function(a, b) {
            b = this;
            var c = this.ia(), d, e = b.Z;
            if (a)
                return da(e.getItem(b.V + a));
            for (d in e)
                b.V ? (a = d.split(b.V)[1]) && (c[a] = da(e[d])) : c[d] = da(e[d]);
            return c
        },remove: function(a, b) {
            b = this;
            a = b.V + a;
            r(b.Z.getItem(a)) && b.Z.removeItem(a)
        },reset: function(a, b) {
            a = this;
            if (!a.V)
                return a.Z.clear();
            for (b in a.Z)
                a.remove(b)
        }});
    C.LocalStorage = function(a) {
        a = a || {};
        a.type = "local";
        return new Ea(a)
    };
    C.SessionStorage = function(a) {
        a = a || {};
        a.type = "session";
        return new Ea(a)
    };
    C.DragFlick = Y({Ha: function(a) {
            return a.changedTouches ? a.changedTouches[0] : a
        },wb: function(a, b, c, d, e) {
            b = this;
            b.f.push(b.k(a.el, K.SWITCHDOWN, function(a) {
                var h = b.Ha(a);
                c = h.pageX;
                d = h.pageY;
                e = s;
                lb(a)
            }), b.k(D, K.SWITCHUP, function(f) {
                e && (f = b.Ha(f), a.callback({x: f.pageX - c,y: f.pageY - d}), e = p)
            }))
        },Db: function(a) {
            this.wb({el: a.el,callback: function(b) {
                    var c = a.boundary || 0, d = {change: p,top: p,right: p,bottom: p,left: p,amount: b};
                    Math.abs(b.x) > c && (0 < b.x ? d.right = s : 0 > b.x && (d.left = s), d.change = s);
                    Math.abs(b.y) > c && (0 < b.y ? d.bottom =
                    s : 0 > b.y && (d.top = s), d.change = s);
                    a.callback(d)
                }})
        },init: function(a, b) {
            b = this;
            b.f = [];
            a = (b.c = a) || G;
            a.manual || b.attach()
        },attach: function(a, b) {
            function c(b, c, d) {
                a.f.push(a.k(b, c, function(b) {
                    d(a.Ha(b))
                }))
            }
            a = this;
            var d = this.c, e = d.el, f = d.start || T, h = d.move || T, l = d.end || T, x = 0, O = 0;
            d.direction && a.Db({el: e,boundary: d.boundary,callback: d.direction});
            c(e, K.SWITCHDOWN, function(a) {
                b = s;
                x = a.pageX;
                O = a.pageY;
                f({e: a,move: {x: x,y: O}})
            });
            c(E, K.SWITCHMOVE, function(a) {
                b && h({e: a,move: {x: a.pageX - x,y: a.pageY - O}})
            });
            c(E, K.SWITCHUP,
            function(a) {
                b && (l({e: a,move: {x: a.pageX - x,y: a.pageY - O}}), b = p)
            })
        },detach: function(a) {
            a = this;
            for (var b = a.f, c = b.length; c--; )
                a.J(b[c]);
            a.f = []
        }});
    C.ExternalInterface = function(a) {
        a = a || G;
        return a.android ? new Ba(a) : new Ca
    };
    Ba = X(Fa, {init: function(a) {
            this.c = a
        },call: function(a) {
            this.c.android[a.mode](this.makeHash(a))
        },addCallback: function(a, b, c) {
            c = this;
            c.c.externalObj[a] = function(a) {
                b(c.parseHash(a).vars)
            }
        },removeCallback: function(a) {
            delete this.c.externalObj[a]
        }});
    Ca = X(Fa, {init: function() {
            this.ca = {}
        },dispose: function(a, b) {
            a = this;
            for (b in a.ca)
                a.removeCallback(b);
            a._super()
        },call: function(a) {
            this.setHash(a)
        },addCallback: function(a, b, c) {
            c = this;
            c.ca[a] = function(d) {
                d = c.getHash();
                d.mode == a && b(d.vars)
            };
            B(D, "hashchange", c.ca[a])
        },removeCallback: function(a) {
            A(D, "hashchange", this.ca[a]);
            delete this.ca[a]
        }});
    C.Facebook = Y({wa: ia,includeAPI: function() {
            ja("fb-root") && t(E.body, n("div", {id: "fb-root"}));
            this.wa("facebook-jssdk", "//connect.facebook.net/ja_JP/all.js#xfbml=1")
        },shareURL: function(a) {
            return "https://www.facebook.com/dialog/feed?app_id=" + a.app_id + "&redirect_uri=" + a.redirect_uri + gb({link: a.link,picture: a.picture,name: a.name,caption: a.caption,description: a.description})
        }});
    C.FPS = Y({Ca: 0,Lb: 0,C: 0,init: function(a, b) {
            b = this;
            b.ta = b.Ga = a.criterion;
            b.cb = b.Ta(b.ta);
            b.Hb = a.enterframe;
            a.manual || b.start()
        },dispose: ea,getCriterion: k("ta"),getSurver: k("Ga"),getFrameTime: k("cb"),enter: function(a) {
            a = this;
            a.Hb({criterion: a.ta,surver: a.Ga})
        },start: function(a) {
            a = this;
            a.Ca = N();
            a.C = setInterval(a.U, a.cb, a)
        },U: function(a, b) {
            b = a.Lb = N();
            a.Ga = a.Ta(b - a.Ca);
            a.Ca = b;
            a.enter()
        },Ta: function(a) {
            return Math.round(1E3 / a)
        },stop: function() {
            clearInterval(this.C)
        }});
    ya = X(J, {Ia: q,p: y,ba: fa,init: function(a, b) {
            b = this;
            b._super();
            b.Ea = a.srcs;
            b.Ya = [];
            b.f = [];
            b.Q = new za({waits: b.Ea,onprogress: function(a) {
                    b.ba(a)
                },oncomplete: function() {
                    for (var a = b.f.length; a--; )
                        b.J(b.f[a]);
                    b.f = [];
                    b.p(b.Ya)
                }});
            v(b, a);
            a.manual || b.start()
        },q: z,start: function(a) {
            function b() {
                c.Q.pass()
            }
            var c = this, d = 0, e = c.Ea.length;
            c.q();
            if (!c.Fa)
                for (c.Fa = s; d < e; d++)
                    a = n(c.Ia), a.src = c.Ea[d], c.f.push(c.k(a, K.LOAD, b)), c.Ya.push(a), c.Za(a)
        },Za: T}, g);
    C.ImgLoad = X(ya, {Ia: "img"});
    Ga = C.ScriptLoad = X(ya, {Ia: "script",Za: function(a) {
            t(la, a)
        }});
    Xa = function() {
        Wa = s;
        A(D, K.LOAD, Xa)
    };
    B(D, K.LOAD, Xa);
    C.WindowLoad = X(J, {init: function(a) {
            this._super();
            v(this, a);
            a.manual || this.start()
        },p: y,q: z,start: function(a, b) {
            a = this;
            a.q();
            a.Fa || (a.Fa = s, Wa ? a.p() : b = a.k(D, K.LOAD, function() {
                a.J(b);
                a.p()
            }))
        }}, g);
    La = C.Mobile = Y({getZoom: function() {
            return E.body.clientWidth / D.innerWidth
        },isAndroid: function(a) {
            return U(/Android/i, a)
        },isIOS: function(a) {
            return U(/iPhone|iPad|iPod/i, a)
        },isWindows: function(a) {
            return U(/IEMobile/i, a)
        },isFBAPP: function(a) {
            return U(/FBAN/, a)
        },isMobile: function(a) {
            a = this;
            return a.isAndroid() || a.isIOS() || a.isWindows() || a.isFBAPP()
        },hideAddress: function() {
            function a() {
                0 == D.pageYOffset && cb()
            }
            function b() {
                setTimeout(a, 100)
            }
            this.k(D, K.LOAD, b, p);
            this.k(D, "orientationchange", b, p)
        }});
    C.mobile = new La;
    Na = U(/opera/i) ? "opera" : U(/msie/i) ? "ie" : U(/chrome/i) ? "chrome" : U(/safari/i) ? "safari" : U(/gecko/i) ? "gecko" : "ather";
    Ma = C.PC = Y({isChrome: function() {
            return "chrome" == Na
        },isSafari: function() {
            return "safari" == Na
        },isGecko: function() {
            return "gecko" == Na
        },isOpera: function() {
            return "opera" == Na
        },isIE: function() {
            return "ie" == Na
        }});
    C.pc = new Ma;
    C.Orientation = Y({init: function(a, b) {
            b = this;
            b.c = a;
            b.f = [];
            b.gb = {portrait: s,landscape: p};
            b.Xa = {portrait: p,landscape: s};
            b.attach()
        },get: function(a) {
            a = this;
            return S(D.orientation) ? 90 != Math.abs(D.orientation) ? a.gb : a.Xa : D.innerWidth < D.innerHeight ? a.gb : a.Xa
        },fire: function(a) {
            a = this;
            if (a.get().portrait)
                return a.c.portrait();
            a.c.landscape()
        },attach: function(a, b, c) {
            b = this;
            c = w(b, b.fire);
            b.f.push(b.k(D, K.LOAD, c), b.k(D, "orientationchange", c), b.k(D, K.RESIZE, c))
        },detach: function(a, b) {
            a = this;
            for (b = a.f.length; b--; )
                a.J(a.f[b]);
            a.f = []
        }}, "onorientationchange" in D);
    C.Modal = Y({Oa: function(a) {
            a = this;
            for (var b = a.f.length; b--; )
                a.J(a.f[b]);
            a.f = []
        },init: function(a, b, c) {
            b = this;
            a = a || G;
            b.c = a;
            c = {display: "none",position: "absolute"};
            b.jb = new C.Scroll;
            b.f = [];
            b.O = n("div", {"class": "cir-modal-bg"});
            W(b.O, db({"z-index": "9998",top: 0,left: 0,width: "100%",height: "200%"}, c));
            t(E.body, b.O);
            b.v = n("div", {"class": "cir-modal-content"});
            W(b.v, db({"z-index": "9999",top: "50%",left: "50%"}, c));
            t(E.body, b.v);
            a.manual || b.open()
        },dispose: function(a) {
            a = this;
            a.close();
            Fb(a.O);
            Fb(a.v);
            a._super()
        },
        open: function(a, b) {
            b = this;
            b.jb.kill();
            W(b.O, {top: E.body.scrollTop});
            zb(b.O);
            b.inner(a)
        },close: function(a) {
            a = this;
            a.Oa();
            V(a.v, q);
            Ab(a.v);
            Ab(a.O);
            a.jb.revival()
        },inner: function(a, b, c, d, e) {
            b = this;
            b.Oa();
            a = a || b.c.html;
            V(b.v, a);
            zb(b.v);
            c = Bb(b.v);
            W(b.v, {"margin-top": E.body.scrollTop - u(c.height)[2] / 2,"margin-left": -(u(c.width)[2] / 2)});
            b.c.bgClose && b.k(b.O, K.CLICK, w(b, b.close));
            if (b.c.closeSelector) {
                d = qb(b.c.closeSelector, b.v);
                for (e = d.length; e--; )
                    b.f.push(b.k(d[e], K.CLICK, w(b, b.close)))
            }
        }});
    Aa = Y({init: function(a) {
            this.c = a;
            this.attach()
        },attach: function(a) {
            a = this;
            a.detach();
            a.yb = a.k(D, a.c.e, a.c.callback)
        },detach: function() {
            this.J(this.yb)
        }});
    Ha = C.DeviceOrientation = function(a) {
        a.e = "deviceorientation";
        return Aa(a)
    };
    Ha.support = "ondeviceorientation" in D;
    Ia = C.DeviceMotion = function(a) {
        a.e = "devicemotion";
        return Aa(a)
    };
    Ia.support = "ondevicemotion" in D;
    Ha.support ? (Ya = Ha, Za = function(a) {
        return a
    }) : Ia.support && (Ya = Ia, Za = function(a) {
        return a.rotationRate
    });
    C.DeviceShake = Y({Tb: {x: "gamma",y: "beta",z: "alpha"},init: function(a, b) {
            b = this;
            b.lb = new Ya;
            b.c = a;
            b.attach()
        },attach: function(a, b) {
            a = this;
            var c = a.c, d = a.Tb[c.direction];
            a.lb.attach(function(a) {
                a = Za(a);
                b || (b = a);
                Math.abs(a[d] - b[d]) > c.limit && (b = F, c.callback(a), setTimeout(function() {
                }, c.waittime))
            })
        },detach: function() {
            this.lb.detach()
        }}, Ya ? s : p);
    C.FontImg = Y({init: function(a, b) {
            a = a || G;
            this.Qb = (b = a.type) ? b + "_" : q;
            this.Pb = a.tag || "span"
        },make: function(a) {
            a = (q + a).split(q);
            for (var b = this.Pb, c = q, d = a.length; d--; )
                c = "<" + b + ' class="font_' + this.Qb + a[d] + '"></' + b + ">" + c;
            return c
        }});
    C.PreRender = X(J, {init: function(a, b) {
            b = this;
            b._super();
            b.B = a.els;
            b.Ua = a.guesslimit || 30;
            b.ab = a.looptime || 100;
            b.Kb = b.ab + (a.loopblur || 20);
            v(b, a);
            a.manual || b.start()
        },dispose: function() {
            clearInterval(this.C);
            this._super()
        },p: y,q: z,start: function(a, b, c, d, e) {
            a = this;
            c = N();
            a.q();
            for (b = a.B.length; b--; )
                zb(a.B[b]);
            a.C = setInterval(function() {
                d = N();
                e = d - c;
                c = d;
                if (e < a.Kb && (a.Ua--, 1 > a.Ua)) {
                    clearInterval(a.C);
                    for (b = a.B.length; b--; )
                        Ab(a.B[b]);
                    a.p()
                }
            }, a.ab, a)
        }}, g);
    C.Router = Y({init: function(a, b) {
            b = this;
            b.c = a;
            a.hashchange && (B(D, "hashchange", function() {
                b.fire(location.hash)
            }), a.target || (a.target = location.hash));
            a.manual || b.start()
        },start: function() {
            this.fire(this.c.target)
        },fire: function(a) {
            var b, c = this.c, d = c.action;
            if (c.noregex && d[a])
                return d[a](a);
            for (b in d)
                if (a.match(b))
                    d[b](b)
        }});
    C.ServerMeta = Y({init: function(a, b) {
            a = a || G;
            b = a.callback || T;
            $a ? b($a) : $a = cc(function() {
                ab = s;
                b($a)
            })
        },date: function(a) {
            return cc(function(b) {
                a(b.getResponseHeader("Date"))
            })
        },connection: function() {
            return dc("Connection")
        },contentLength: function() {
            return dc("Content-Length")
        },lastModified: function() {
            return dc("Last-Modified")
        },server: function() {
            return dc("Server")
        },contentType: function() {
            return dc("Content-Type")
        },acceptRanges: function() {
            return dc("Accept-Ranges")
        },keepAlive: function() {
            return dc("Keep-Alive")
        }});
    function dc(a) {
        return ab ? $a.getResponseHeader(a) : p
    }
    function cc(a) {
        var b = new XMLHttpRequest;
        b.onload = function() {
            a(b)
        };
        b.open("HEAD", location.href + "?update" + N() + "=1");
        b.send(F);
        return b
    }
    C.Surrogate = Y({init: function(a) {
            this.Cb = a.delay;
            this.ga = a.callback
        },dispose: function() {
            this.clear();
            this._super()
        },request: function(a, b) {
            b = this;
            b.K = a;
            b.clear();
            b.Ja = setTimeout(b.flush, b.Cb, b)
        },flush: function(a) {
            a = a || this;
            a.ga(a.K)
        },clear: function() {
            clearTimeout(this.Ja)
        }});
    C.Throttle = Y({init: function(a) {
            this.Rb = a.waittime;
            this.ga = a.callback
        },dispose: function() {
            this.unlock();
            this._super()
        },request: function(a, b) {
            b = this;
            b.$a ? b.K = a : (b.ga(a), b.lock(), b.Ja = setTimeout(function() {
                b.K && (b.ga(b.K), b.K = F);
                b.unlock()
            }, b.Rb, b))
        },lock: function() {
            this.$a = s
        },unlock: function(a) {
            a = a || this;
            a.$a = p;
            clearTimeout(a.Ja)
        }});
    C.Twitter = Y({wa: ia,includeAPI: function() {
            this.wa("twitter-wjs", "//platform.twitter.com/widgets.js")
        },shareURL: function(a) {
            var b = a.name, c = a.hash, b = b ? " \u300c" + b + "\u300d" : q, c = c ? " " + c : q;
            return "https://twitter.com/intent/tweet?" + gb({url: a.redirect_uri,text: (a.caption || q) + b + c})
        }});
    C.XML = Y({init: function(a) {
            this.b = n("div");
            V(this.b, a.data)
        },$: function(a) {
            return this.b.querySelector(a)
        },$$: function(a) {
            return qb(a, this.b)
        }});
    C.Model = Y({oa: function(a, b, c, d) {
            d = this;
            d.w.fire(a, d.r.get());
            b && d.w.fire(a + ":" + b, c)
        },init: function(a, b) {
            b = this;
            a = a || G;
            var c, d = a.defaults || b.defaults || G, e = a.events || b.events;
            b.qb = a.validate || b.validate || {};
            b.r = a.store || b.store || new C.DataStore;
            b.w = new J;
            for (c in d)
                b.set(c, d[c]);
            for (c in e)
                b.on(c, e[c])
        },set: function(a, b, c, d) {
            c = this;
            R(a) || (d = {}, d[a] = b, a = d);
            c.Ba = c.r.get();
            for (d in a) {
                b = a[d];
                if (c.qb[d] && !c.qb[d](d, b))
                    return c.oa("fail", d, b);
                c.r.set(d, b);
                c.w.fire(K.CHANGE + ":" + d, b)
            }
            c.w.fire(K.CHANGE, c.r.get())
        },
        prev: function(a) {
            return !a ? this.Ba : this.Ba[a]
        },get: function(a) {
            return this.r.get(a)
        },remove: function(a, b) {
            b = this;
            if (a) {
                var c = b.r.get(a), d = b.r.remove(a);
                b.oa("remove", a, c);
                return d
            }
        },reset: function() {
            this.r.reset();
            this.oa("reset")
        },on: function(a, b, c) {
            c = w(this, b);
            this.w.on(a, c);
            return c
        },off: function(a, b) {
            this.w.off(a, b)
        },fire: function(a, b) {
            return this.w.fire.apply(this.w, arguments)
        }});
    C.View = Y({init: function(a, b) {
            b = this;
            a = a ? mb(b, a) : mb(b, b, {});
            b.el = C.$(a.el || b.el || n("div"));
            b.attach();
            a.init && b.init()
        },dispose: function() {
            this.detach();
            this._super()
        },aa: function(a, b, c, d, e, f) {
            b = this;
            f = b.events;
            for (c in f)
                for (d in e = "me" == c ? b.el : b.el.find(c), f[c])
                    e[a](d, b[f[c][d]])
        },attach: function() {
            this.aa("on")
        },detach: function() {
            this.aa("off")
        }});
    C.Ollection = X(C.Model, {init: function(a, b, c, d, e) {
            b = this;
            a = a || G;
            d = a.defaults || b.defaults || [];
            e = a.events || b.events;
            b.r = a.store || b.store || new C.DataStore({array: s});
            b.w = new J;
            for (c in d)
                b.set(c, d[c]);
            for (c in e)
                b.on(c, e[c])
        },set: function(a, b, c, d) {
            c = this;
            R(a) || (d = {}, d[a] = b, a = d);
            c.Ba = c.r.get();
            for (d in a)
                return b = a[d], S(+d) && (c.r.set(a, b), c.w.fire(K.CHANGE, b, +d, c.r.get())), c.oa("fail", a, b)
        },add: function(a, b) {
            b = this.r.get().length;
            this.set(b, a);
            return b
        },each: function(a, b, c) {
            c = this.get();
            for (b in c)
                a.apply(this,
                [c[b], b, c])
        },map: function(a, b, c, d) {
            b = this;
            d = b.get();
            for (c in d)
                b.set(c, a.apply(b, [d[c], c, d]))
        }});
    Ja = C.Validate = Y({t: function(a, b, c, d) {
            if (a(c))
                return s;
            this.displayError(b, d)
        },init: function(a, b) {
            b = this;
            a = a || {};
            b.Wb = a.level;
            mb(b, b, a)
        },displayError: function(a, b) {
            b = "Validate Error:" + a + " is " + b + ".";
            switch (this.Xb) {
                case "log":
                    return console.log(b), p;
                case "error":
                    throw Error(b);
                case "off":
                    return p
            }
            console.warn(b);
            return p
        },isObject: function(a, b) {
            return this.t(R, a, b, "Object")
        },isNumber: function(a, b) {
            return this.t(S, a, b, "Number")
        },isString: function(a, b) {
            return this.t(hb, a, b, "String")
        },isFunction: function(a,
        b) {
            return this.t(ib, a, b, "Function")
        },isBoolean: function(a, b) {
            return this.t(jb, a, b, "Boolean")
        },isArray: function(a, b) {
            return this.t(kb, a, b, "Array")
        }});
    C.validate = new Ja;
    C.Scroll = Y({dispose: function(a) {
            a = this;
            a.revival();
            clearInterval(a.mb);
            a._super()
        },to: bb,toTop: cb,toBottom: function() {
            bb(E.height)
        },checkBottom: function(a) {
            return E.body.scrollHeight - D.innerHeight - E.body.scrollTop <= (a || 0) ? s : p
        },scrollY: function(a) {
            a = D.pageYOffset;
            return r(a) ? a : (E.documentElement || E.body.parentNode || E.body).scrollTop
        },smooth: function(a, b, c, d) {
            c = this;
            b = b || T;
            c.nb || (c.nb = s, S(a) || (a = a.offsetTop), d = E.height - D.innerHeight, a > d && (a = d), c.N = c.scrollY(), c.mb = setInterval(function(d) {
                d = c.scrollY();
                d = 0.3 * (a - d) + d;
                if (1 > Math.abs(a - d) || c.N == d)
                    return bb(a), clearInterval(c.mb), b(a), delete c.nb;
                c.N = d;
                bb(d)
            }, 50))
        },kill: function(a) {
            a = this;
            a.ma || (W(E.body, {overflow: "hidden"}), a.ma = a.k(E, K.TOUCHMOVE, lb))
        },revival: function(a) {
            a = this;
            a.ma && (W(E.body, {overflow: "auto"}), a.J(a.ma), delete a.ma)
        }});
    C.LimitText = Y({bb: 8,ra: function(a, b) {
            b = this;
            V(b.P, a);
            t(Cb(b.b), b.P)
        },sa: function() {
            V(this.P, q);
            Fb(this.P)
        },init: function(a, b) {
            b = this;
            var c = b.b = a.el;
            Bb(c);
            var c = b.P = n(c.tagName, {"class": vb(c, "class"),style: vb(c, "style")}), d = b.Pa = Bb(c);
            b.rb = a.width;
            b.Va = a.height;
            b.ra(0);
            r(a.width) || (b.rb = +u(d.width)[2]);
            r(a.height) || (b.Va = +u(d.height)[2]);
            W(c, {height: "auto"});
            b.Ib = +u(d.fontSize)[2];
            b.sa()
        },na: function(a) {
            a = this;
            return +u(a.Pa.width)[2] <= a.rb && +u(a.Pa.height)[2] <= a.Va ? s : p
        },getLimitFontSize: function(a) {
            a =
            q + a;
            var b = this, c = b.Ib, d;
            W(b.P, {fontSize: c});
            b.ra(a);
            b.na() ? d = c : nb(b.bb - 1, c, function(a) {
                W(b.P, {fontSize: a});
                return b.na()
            }, function(a) {
                d = a
            });
            b.sa();
            d < b.bb && (d = 0);
            return d
        },getLimitTextLength: function(a) {
            a = q + a;
            var b = this, c = a.length, d;
            b.ra(a);
            b.na() ? d = c : nb(0, c, function(c) {
                V(b.P, a.slice(0, c));
                return b.na()
            }, function(a) {
                d = a
            });
            b.sa();
            return d
        }});
    C.require = function(a, b, c) {
        var d = ec(a), e = c ? fc : gc;
        if (!d && (!b || sa[b]))
            throw Error("not found " + a);
        b && (sa[b] = s);
        return e(d, a, b, c)
    };
    function fc(a, b, c, d) {
        if (a)
            return d(a);
        new Ga({srcs: [c],oncomplete: function() {
                a = ec(b);
                if (!a)
                    throw Error("not found " + b);
                d(a)
            }})
    }
    function gc(a, b, c) {
        if (a)
            return a;
        new C.Ajax({url: c,sync: s,oncomplete: function(a) {
                var b = n("script");
                t(la, b);
                b.text = a
            }});
        if (a = ec(b))
            return a;
        throw Error("not found " + b);
    }
    function ec(a) {
        a = a.split(".");
        for (var b = 0, c = a.length, d = D; b < c; b++) {
            if (!d[a[b]])
                return;
            d = d[a[b]]
        }
        return d
    }
    C.namespace = function(a, b) {
        for (var c = a.split("."), d = 0, e = c.length, f = D, h; d < e && f[c[d]]; d++)
            h = f, f = f[c[d]];
        for (; d < e; d++)
            h = f, f = f[c[d]] = {};
        if (b) {
            for (d in f)
                r(b[d]) || (b[d] = f[d]);
            f = h[c[e - 1]] = b
        }
        return f
    };
    Ka = C.Calc = Y({init: function(a) {
            a = a || G;
            a = a.fewdigit || 8;
            for (var b = "1"; a--; )
                b += "0";
            this.Sa = +b
        },L: function(a) {
            return a * this.Sa
        },ea: function(a) {
            return a / this.Sa
        },addition: function(a, b) {
            return this.ea(this.L(a) + this.L(b))
        },subtraction: function(a, b) {
            return this.ea(this.L(a) - this.L(b))
        },multiplication: function(a, b, c) {
            c = this;
            return c.ea(c.ea(c.L(a) * c.L(b)))
        },division: function(a, b) {
            return this.L(a) / this.L(b)
        }});
    C.calc = new Ka;
    C.LowPassFilter = X(Ka, {init: function(a) {
            a = a || G;
            this._super(a);
            this.setBefore(a.before || 0);
            this.setRate(a.rate)
        },setBefore: function(a) {
            this.N = a
        },getBefore: k("N"),setRate: function(a) {
            a = a || 0.1;
            if (1 <= a)
                throw Error("rate < 1.");
            this.ib = a;
            this.Nb = this.subtraction(1, a)
        },getRate: k("ib"),forecast: function(a, b) {
            b = this;
            b.N = b.N * b.Nb + a * b.ib;
            return b.N
        }});
    var hc = /<%-(.+?)%>|<%=(.+?)%>|<%(.+?)%>|$/g, ic = /\\|'|\r|\n|\t/g, jc = {"'": "'","\\": "\\","\r": "r","\n": "n","\t": "t"}, kc = C.template = function(a, b, c, d) {
        d = "__r+=";
        a.replace(hc, function(b, f, h, l, x) {
            d += "'" + a.slice(c, x).replace(ic, function(a) {
                return "\\" + jc[a]
            }) + "'+";
            f ? d += "((__t=" + f + ")==null?'':C.util.escape(__t))+" : h ? d += "((__t=" + h + ")==null?'':__t)+" : l && (d += "'';" + l + ";__r+=");
            c = x + b.length;
            return b
        });
        return (new Function("a", "var __t,__r='';with(a){" + d + "''}return __r"))(b || {})
    };
    kc.fetch = function(a, b) {
        return kc(V(ja(a)), b)
    };
    Oa && (Rb.prototype = Oa);
})();
