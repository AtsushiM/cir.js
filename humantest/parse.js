 // cir.js v1.0.0 (c) 2013 Atsushi Mizoue.
(function() {
    var g = void 0;
    function aa(a) {
        return function() {
            return this[a]
        }
    }
    C = {};
    function k(a) {
        return "cubic-bezier(" + a + ")"
    }
    function ba(a, b) {
        for (var c = l("p"), d = n, e, f = p, h = a.length, m, E = RegExp("^(.*?)" + a[0] + "$", "i"); h--; )
            if (q(c.style[a[h]])) {
                d = r;
                (e = a[h].match(E)[1]) ? (f = ca(e), b = f + b, f = "-" + f + "-") : b = ca(b);
                c = s(da("head"), l("style", {type: "text/css"}));
                m = c.sheet;
                break
            }
        return {pb: b,qb: d,prefix: e,ob: f,sheet: m}
    }
    function ea(a) {
        return JSON.parse(a)
    }
    function ca(a) {
        return a.toLowerCase()
    }
    function t(a) {
        return (p + (a || p)).match(/^(.*?)(-?[0-9\.]+)(.*)$/)
    }
    function u(a, b) {
        var c, d;
        for (c in b)
            if (d = c.match(/^on(.+)$/))
                a.on(d[1], v(a, b[c]))
    }
    function fa() {
        this.stop();
        this._super()
    }
    function w(a) {
        this.fire("complete", a)
    }
    function x() {
        this.fire("start")
    }
    function ga(a) {
        this.fire("progress", a)
    }
    function ha(a) {
        if (a) {
            var b = this.ha, c = b[a];
            delete b[a];
            y(c[0], c[1], c[2])
        }
    }
    function ia(a, b, c, d, e) {
        d = this;
        d.ha || (d.ha = {});
        e = ++d.Ab;
        z(a, b, c);
        d.ha[e] = [a, b, c];
        return e
    }
    function ja(a, b) {
        ka(a) || la(l("script", {id: a,src: b}), da("script"))
    }
    var A = window, B = document, ma = B.head || da("head"), r = !0, n = !1, D = null, p = "", F = {}, na = g, pa = oa(), qa = k("0.19,1,0.22,1"), G = 1.70158, ra = n, sa = /0/.test(function() {
        0
    }) ? /\b_super\b/ : /.*/, ta = {}, H, ua, I, va, wa, J, xa, ya, za, Aa, Ba, Ca, Da, K, Ea, Fa, Ga, Ha, Ia, Ja, Ka, La, Ma, Na, Oa, Pa, Qa, Ra, Sa, Ta, Ua, Va, Wa, Xa, Ya, Za, $a;
    Date.now || (Date.now = function() {
        return +new Date
    });
    function L() {
        return Date.now()
    }
    function ab(a) {
        A.scrollTo(0, a)
    }
    function bb() {
        ab(1)
    }
    function M(a, b, c) {
        for (c in b)
            a[c] = b[c];
        return a
    }
    function cb(a, b) {
        b = p + a;
        return b.match(/^{.*}$/) ? ea(b) : b.match(/^[0-9\.]+$/) ? +b : "true" === b ? r : "false" === b ? n : a
    }
    function db(a) {
        var b = [];
        b.push.apply(b, a);
        return b
    }
    function O(a, b, c) {
        return a.split(b).join(c)
    }
    function eb(a) {
        return O(O(O(O(O(a, "&", "&amp;"), '"', "&quot;"), "'", "&#039;"), "<", "&lt;"), ">", "&gt;")
    }
    function fb(a, b, c, d) {
        b = c = p;
        for (d in a)
            a[d] && (c += b + d + "=" + encodeURIComponent(a[d]), b = "&");
        return c
    }
    function P(a, b) {
        return Object.prototype.toString.call(b) == "[object " + a + "]" ? r : n
    }
    function Q(a) {
        return P("Object", a)
    }
    function R(a) {
        return P("Number", a)
    }
    function gb(a) {
        return P("String", a)
    }
    function S(a) {
        return P("Function", a)
    }
    function hb(a) {
        return P("Boolean", a)
    }
    function ib(a) {
        return P("Array", a)
    }
    function q(a) {
        return a === na ? n : r
    }
    function oa() {
        return "ontouchstart" in A
    }
    function T() {
    }
    function jb(a) {
        a.preventDefault();
        return n
    }
    function U(a, b) {
        b = b || navigator.userAgent;
        return !!b.match(a)
    }
    function v(a, b) {
        return function() {
            return b.apply(a, arguments)
        }
    }
    function kb(a, b, c, d) {
        b = b || a;
        c = c || b;
        for (d in b)
            S(b[d]) && (c[d] = v(a, b[d]));
        M(a, c);
        return c
    }
    function lb(a, b, c, d) {
        for (var e; r; ) {
            e = ~~((a + b) / 2);
            if (a == e)
                return d(e);
            c(e) ? a = e : b = e
        }
    }
    function mb(a) {
        return a.toString().match(/^\s*function.*\((.+)\)/)
    }
    function nb(a) {
        return ib(a) ? a.slice(0) : a
    }
    C.util = {pageTop: bb,override: M,replaceAll: O,template: function(a, b, c, d) {
            for (c in b)
                d = b[c], a = O(O(a, "<%= " + c + " %>", eb(d)), "<%- " + c + " %>", d);
            return a
        },escape: eb,unescape: function(a) {
            return O(O(O(O(O(a, "&gt;", ">"), "&lt;", "<"), "&#039;", "'"), "&quot;", '"'), "&amp;", "&")
        },windowOpen: function(a, b, c, d, e) {
            e = [];
            for (d in c)
                hb(c[d]) && (c[d] === r ? c[d] = "yes" : c[d] === n && (c[d] = "no")), e.push(d + "=" + c[d]);
            return A.open(a, b, e.join(","))
        },typeCast: cb,makeQueryString: fb,parseQueryString: function(a, b, c, d, e) {
            a = a.replace(/^[\#\?]/,
            p);
            b = a.split("&");
            c = b.length;
            for (e = {}; c--; )
                d = b[c].split("="), e[d[0]] = cb(decodeURIComponent(d[1]));
            return e
        },is: P,isObject: Q,isNumber: R,isString: gb,isFunction: S,isBoolean: hb,isArray: ib,isDefined: q,isTouchable: oa,nullFunction: T,abstraceFunction: function() {
            throw Error("call abstract-function.");
        },eventPrevent: jb,eventStop: function(a) {
            a.stopPropagation();
            return n
        },checkUserAgent: U,proxy: v,owner: kb,binarySearch: function(a) {
            a = a || F;
            return lb(a.low || 0, a.high || 0, a.compare || T, a.end || T)
        },toArray: db,copyArray: nb,
        hasDeclaredArgument: mb};
    function da(a) {
        return B.querySelector(a)
    }
    function ob(a, b) {
        return db(b.querySelectorAll(a))
    }
    function ka(a) {
        return B.getElementById(a)
    }
    function pb(a, b) {
        return 0 <= a.className.indexOf(b) ? r : n
    }
    function qb(a, b, c, d) {
        pb(a, b) || (c = p, (d = a.className) && (c = " "), a.className = d + c + b)
    }
    function rb(a, b, c, d, e) {
        if (pb(a, b)) {
            d = [];
            c = a.className.split(" ");
            for (e = c.length; e--; )
                b != c[e] && d.push(c[e]);
            a.className = d.join(" ")
        }
    }
    function sb(a, b) {
        if (pb(a, b))
            return rb(a, b);
        qb(a, b)
    }
    function tb(a, b, c, d) {
        if (Q(b)) {
            for (d in b)
                b[d] && a.setAttribute(d, b[d]);
            return r
        }
        return c || c == p ? a.setAttribute(b, c) : a.getAttribute(b)
    }
    function ub(a, b) {
        a.removeAttribute(b)
    }
    function l(a, b, c) {
        c = B.createElement(a);
        b && tb(c, b);
        return c
    }
    function vb(a) {
        var b = l("div");
        V(b, a);
        return db(b.children)
    }
    function z(a, b, c) {
        a.addEventListener(b, c, n)
    }
    function y(a, b, c) {
        a.removeEventListener(b, c, n)
    }
    function wb(a, b, c, d) {
        function e(a) {
            var c = a.target;
            pb(c, b) && d.apply(c, arguments)
        }
        z(a, c, e);
        return e
    }
    function xb(a) {
        a.style.display = "block"
    }
    function yb(a) {
        a.style.display = "none"
    }
    function W(a, b, c, d, e, f) {
        c = a.style;
        for (d in b)
            e = d, f = b[d], R(f) && (f += "px"), c[e] = f
    }
    function zb(a) {
        return B.defaultView.getComputedStyle(a, D)
    }
    function Ab(a) {
        return a.parentNode
    }
    function s(a, b) {
        return a.appendChild(b)
    }
    function la(a, b) {
        return Ab(a).insertBefore(b, a)
    }
    function Bb(a, b) {
        return Ab(a).insertBefore(b, a.nextSibling)
    }
    function Cb(a, b) {
        return a.insertBefore(b, a.firstChild)
    }
    function Db(a) {
        return Ab(a).removeChild(a)
    }
    function V(a, b) {
        if (!q(b))
            return a.innerHTML;
        a.innerHTML = b
    }
    function Eb(a, b) {
        if (!q(b))
            return a.value;
        a.value = b
    }
    C.dom = {win: A,doc: B,$: da,$$: function(a) {
            return ob(a, B)
        },$child: function(a, b) {
            return b.querySelector(a)
        },$$child: ob,$id: ka,on: z,off: y,delegate: wb,create: l,show: xb,hide: yb,hasClass: pb,addClass: qb,removeClass: rb,toggleClass: sb,css: W,computedStyle: zb,append: s,parent: Ab,before: la,after: Bb,insertBefore: Cb,remove: Db,attr: tb,removeAttr: ub,html: V,val: Eb,reflow: function(a) {
            a = a || B.body;
            a.offsetTop
        },toElement: function(a) {
            return vb(a)[0]
        },toElements: vb};
    C.lass = function() {
    };
    C.lass.extend = function(a) {
        function b() {
            !ra && this.init && this.init.apply(this, arguments)
        }
        function c(c) {
            var e = a[c], m = d.prototype[c];
            S(e) && S(m) && sa.test(e) ? b.prototype[c] = function() {
                var a, b = this._super;
                this._super = m;
                a = e.apply(this, arguments);
                this._super = b;
                return a
            } : b.prototype[c] = e
        }
        var d = this, e;
        ra = r;
        b.prototype = new d;
        ra = n;
        b.prototype.constructor = b;
        for (e in a)
            a.hasOwnProperty(e) && c(e);
        b.extend = d.extend;
        return b
    };
    function X(a, b, c) {
        a = a || C.lass;
        a = a.extend(b);
        q(c) && (a.support = c);
        return a
    }
    function Y(a, b) {
        return X(ua, a, b)
    }
    ua = C.Base = X(na, {Ab: 0,dispose: function(a) {
            a = this;
            var b = 0, c = a.ha;
            for (b in c)
                y.apply(D, c[b]);
            for (b in a)
                (c = a[b]) && c.dispose && c.dispose();
            a.__proto__ = D;
            for (b in a)
                a[b] = D, delete a[b];
            return D
        },k: ia,contract: ia,J: ha,uncontract: ha});
    I = C.Observer = Y({init: function() {
            this.wa = {}
        },on: function(a, b, c, d) {
            d = this.wa;
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
            var c = this.wa, d = c[a], e;
            if (!b)
                return delete c[a];
            if (d)
                for (e = d.length; e--; )
                    if (b == d[e])
                        return d.splice(e, 1), 0 == d.length && delete c[a], r;
            return n
        },fire: function(a, b) {
            var c = this.wa[a], d, e, f, h;
            if (c) {
                d = db(arguments).slice(1);
                f = 0;
                for (h = c.length; f < h; f++)
                    (e = c[f]) && e.apply(D, d)
            }
        }});
    J = C.Event = Y({SWITCHCLICK: pa ? "touchstart" : "click",SWITCHDOWN: pa ? "touchstart" : "mousedown",SWITCHMOVE: pa ? "touchmove" : "mousemove",SWITCHUP: pa ? "touchend" : "mouseup",SWITCHOVER: pa ? "touchstart" : "mouseover",SWITCHOUT: pa ? "touchend" : "mouseout",LOAD: "load",CHANGE: "change",CLICK: "click",MOUSEDOWN: "mousedown",MOUSEMOVE: "mousemove",MOUSEUP: "mouseup",MOUSEOVER: "mouseover",MOUSEOUT: "mouseout",TOUCHSTART: "touchstart",TOUCHMOVE: "touchmove",TOUCHEND: "touchend",RESIZE: "resize"});
    J = C.e = new J;
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
            return c * (a /= d) * a * ((G + 1) * a - G) + b
        },outBack: function(a, b, c, d) {
            return c * ((a = a / d - 1) * a * ((G + 1) * a + G) + 1) + b
        },inOutBack: function(a, b, c, d) {
            return 1 > (a /= d / 2) ? c / 2 * a * a * (((G *= 1.525) + 1) * a - G) + b : c / 2 * ((a -= 2) * a * (((G *= 1.525) + 1) * a + G) + 2) + b
        }};
    C.ssease = {linear: "linear",inCubic: k("0.55,0.055,0.675,0.19"),outCubic: k("0.215,0.61,0.355,1"),inOutCubic: k("0.645,0.045,0.355,1"),inQuart: k("0.895,0.03,0.685,0.22"),outQuart: k("0.165,0.84,0.44,1"),inOutQuart: k("0.77,0,0.175,1"),inQuint: k("0.755,0.05,0.855,0.06"),outQuint: k("0.23,1,0.32,1"),inOutQuint: k("0.86,0,0.07,1"),inSine: k("0.47,0,0.745,0.715"),outSine: k("0.39,0.575,0.565,1"),inOutSine: k("0.445,0.05,0.55,0.95"),inExpo: k("0.95,0.05,0.795,0.035"),outExpo: k("0.19,1,0.22,1"),inOutExpo: k("1,0,0,1"),
        inCirc: k("0.6,0.04,0.98,0.335"),outCirc: k("0.075,0.82,0.165,1"),inOutCirc: k("0.785,0.135,0.15,0.86"),inQuad: k("0.55,0.085,0.68,0.53"),outQuad: k("0.25,0.46,0.45,0.94"),inOutQuad: k("0.455,0.03,0.515,0.955"),inBack: [k("0.6,0,0.735,0.045"), k("0.6,-0.28,0.735,0.045")],outBack: [k("0.175,0.885,0.32,1"), k("0.175,0.885,0.32,1.275")],inOutBack: [k("0.68,0,0.265,1"), k("0.68,-0.55,0.265,1.55")]};
    var Fb = ba(["animation", "webkitAnimation"], "Animation"), Gb = Fb.prefix, Hb = Fb.ob, Ib = Fb.pb, Jb = Fb.sheet, Kb = C.SSAnime = X(I, {ab: function() {
            var a = this.b, b = this.Cb;
            y(a, Ib + "End", b);
            y(a, "animationend", b)
        },init: function(a, b, c, d) {
            d = this;
            d._super();
            u(d, c);
            c = c || F;
            d.xa = c.oncomplete || T;
            d.b = a;
            Kb.id++;
            d.u = "ciranim" + Kb.id;
            a = c.duration || Kb.duration;
            var e = c.ease || qa, f, h = {};
            for (f in b)
                h[f] = b[f], R(h[f]) && (h[f] += "px");
            d.Qb = h;
            h = O(O(JSON.stringify(h), '"', p), ",", ";");
            Jb.insertRule("@" + Hb + "keyframes " + d.u + "{to" + h + "}", Jb.cssRules.length);
            ib(e) || (e = [e]);
            b = d.u;
            f = 0;
            for (var h = e.length, m = p; f < h; f++)
                m += Hb + "animation:" + b + " " + a + "ms " + e[f] + " 0s 1 normal both;";
            Jb.insertRule("." + b + "{" + m + "}", Jb.cssRules.length);
            c.manual || d.start()
        },dispose: fa,p: w,q: x,start: function(a, b) {
            function c(c) {
                var e = Jb.cssRules, f = e.length, h;
                a.ab();
                if ("webkit" == Gb) {
                    for (; f--; )
                        h = e[f].name || (p + e[f].selectorText).split(".")[1], h == a.u && Jb.deleteRule(f);
                    rb(b, a.u);
                    W(b, a.Qb)
                }
                a.p(c)
            }
            a = this;
            b = a.b;
            a.q();
            a.Cb = c;
            z(b, Ib + "End", c);
            z(b, "animationend", c);
            qb(b, a.u)
        },stop: function() {
            var a =
            {};
            this.fire("stop");
            a[Hb + "animation-play-state"] = "paused";
            W(this.b, a);
            this.ab()
        }}, Fb.qb);
    Kb.id = 0;
    Kb.duration = 500;
    var Lb = ba(["transitionProperty", "webkitTransitionProperty"], "Transition"), Mb = Lb.ob, Nb = Lb.pb, Ob = Lb.sheet, Pb = C.SSTrans = X(I, {init: function(a, b, c, d) {
            d = this;
            d._super();
            u(d, c);
            c = c || F;
            Pb.id++;
            d.u = "cirtrans" + Pb.id;
            var e = [];
            M({}, b);
            var f, h = c.duration || Pb.duration, m = c.ease || qa;
            ib(m) || (m = [m]);
            for (f in b)
                e.push(f);
            f = 0;
            for (var E = m.length, N = p, N = N + (Mb + "transition-property:" + e.join(" ") + ";" + Mb + "transition-duration:" + h + "ms;"); f < E; f++)
                N += Mb + "transition-timing-function:" + m[f] + ";";
            Ob.insertRule("." + d.u + "{" + N + "}", Ob.cssRules.length);
            d.b = a;
            d.V = b;
            c.manual || d.start()
        },dispose: fa,p: w,q: x,start: function(a) {
            a = this;
            a.q();
            a.ia = function(b) {
                a.ba();
                setTimeout(function() {
                    a.Ta || a.p(b)
                }, 1)
            };
            z(a.b, Nb + "End", a.ia);
            z(a.b, "transitionend", a.ia);
            qb(a.b, a.u);
            W(a.b, a.V)
        },ba: function(a) {
            a = this;
            var b = Ob.cssRules, c = b.length, d;
            y(a.b, Nb + "End", a.ia);
            y(a.b, "transitionend", a.ia);
            for (rb(a.b, a.u); c--; )
                if (d = b[c].name || (p + b[c].selectorText).split(".")[1], d == a.u) {
                    Ob.deleteRule(c);
                    break
                }
        },Ta: n,stop: function() {
            this.Ta = r;
            this.fire("stop");
            this.ba()
        }}, Lb.qb);
    Pb.id = 0;
    Pb.duration = 500;
    H = {request: function(a) {
            return this.tb.call(A, a)
        },cancel: function(a) {
            return this.wb.call(A, a)
        }};
    Oa = ["webkit", "moz", "o", "ms"];
    if (A.requestAnimationFrame)
        Qa = A.requestAnimationFrame, Ra = A.cancelAnimationFrame;
    else {
        for (Pa = Oa.length; Pa--; )
            if (A[Oa[Pa] + "RequestAnimationFrame"]) {
                Qa = A[Oa[Pa] + "RequestAnimationFrame"];
                Ra = A[Oa[Pa] + "CancelAnimationFrame"];
                break
            }
        Qa || (Qa = function(a) {
            return setTimeout(a, 1E3 / C.AnimeFrame.fps)
        }, Ra = function(a) {
            clearTimeout(a)
        })
    }
    H.tb = Qa;
    H.wb = Ra;
    H = C.AnimeFrame = Y(H);
    H.fps = 30;
    C.animeframe = new H;
    K = C.Tweener = X(I, {init: function(a, b, c, d, e, f) {
            f = this;
            f._super();
            u(f, c);
            c = c || F;
            f.lb = a;
            f.V = [];
            for (d in b)
                e = b[d], e.name = d, e.Pb = e.to - e.from, e.prefix = e.prefix || p, e.suffix = e.suffix || (e.suffix === p ? p : "px"), f.V.push(e);
            f.Oa = c.duration || K.duration;
            f.Bb = c.ease || f.rb;
            c.manual || f.start()
        },dispose: fa,rb: function(a, b, c, d) {
            return c * (-Math.pow(2, -10 * a / d) + 1) + b
        },p: w,R: function() {
            for (var a = this, b = K.na, c, d = L(), e, f = b.length, h, m; f--; )
                if (c = b[f], h = c.V.length, e = d - c.Nb, e < c.Oa)
                    for (; h--; )
                        m = c.V[h], K.gb(c.lb, m, c.Bb(e, m.from, m.Pb,
                        c.Oa));
                else {
                    for (; h--; )
                        m = c.V[h], K.gb(c.lb, m, m.to);
                    c.p();
                    b.splice(f, 1)
                }
            b.length ? C.animeframe.request(function() {
                a.R && a.R()
            }) : a.ba()
        },q: x,start: function(a) {
            a = this;
            a.q();
            a.Nb = L();
            K.na.push(a);
            K.Ja || (K.Ja = 1, C.animeframe.request(function() {
                a.R && a.R()
            }))
        },ba: function() {
            K.na = [];
            C.animeframe.cancel(K.Ja);
            K.Ja = D
        },stop: function() {
            this.fire("stop");
            this.ba()
        }}, g);
    K.gb = function(a, b, c) {
        a[b.name] = b.prefix || b.suffix ? b.prefix + c + b.suffix : c
    };
    K.na = [];
    K.duration = 500;
    function Qb() {
    }
    C.$ = function(a, b, c, d, e) {
        c = "string" == typeof a ? (b || B).querySelectorAll(a) : [a];
        d = new Qb;
        for (e = d.length = c.length; e--; )
            d[e] = c[e];
        return d
    };
    function Z(a, b, c) {
        var d = a.length;
        for (c = Rb(c); d--; )
            c[0] = a[d], b.apply(a, c);
        return a
    }
    function Sb(a, b, c) {
        c = Rb(c);
        c[0] = a[0];
        return b.apply(D, c)
    }
    function Rb(a) {
        var b = [D];
        b.push.apply(b, a);
        return b
    }
    Na = C.$.Tb = {querySelectorAll: function(a) {
            return this[0].querySelectorAll(a)
        },find: function(a) {
            return C.$(a, this)
        },parent: function() {
            return C.$(Ab(this[0]))
        },on: function() {
            return Z(this, z, arguments)
        },off: function() {
            return Z(this, y, arguments)
        },delegate: function(a, b, c) {
            var d;
            this.ra || (this.ra = {});
            d = this.ra;
            d[b] || (d[b] = {});
            d = d[b];
            d[a] || (d[a] = []);
            d = d[a];
            return Z(this, function() {
                var a = wb.apply(D, arguments);
                d.push([c, a])
            }, arguments)
        },undelegate: function(a, b, c) {
            var d = this.ra;
            if (!d)
                return n;
            d = d[b];
            if (!d)
                return n;
            d = d[a];
            if (!d)
                return n;
            a = d.length;
            if (c) {
                for (; a--; )
                    if (d[a][0] === c)
                        return this.off(b, d[a][1]), d.splice(a, 1), r;
                return n
            }
            for (; a--; )
                this.off(b, d[a][1]), d.splice(a, 1);
            return r
        },show: function() {
            return Z(this, xb)
        },hide: function() {
            return Z(this, yb)
        },hasClass: function() {
            return Sb(this, pb, arguments)
        },addClass: function() {
            return Z(this, qb, arguments)
        },removeClass: function() {
            return Z(this, rb, arguments)
        },toggleClass: function() {
            return Z(this, sb, arguments)
        },css: function() {
            return Z(this, W, arguments)
        },html: function() {
            return Sb(this,
            V, arguments)
        },val: function() {
            return Sb(this, Eb, arguments)
        },attr: function() {
            return Sb(this, tb, arguments)
        },removeAttr: function() {
            return Z(this, ub, arguments)
        },append: function() {
            return Z(this, s, arguments)
        },before: function() {
            return Sb(this, la, arguments)
        },after: function() {
            return Sb(this, Bb, arguments)
        },insertBefore: function() {
            return Sb(this, Cb, arguments)
        },remove: function() {
            return Z(this, Db, arguments)
        }};
    Sa = Kb || F;
    Ta = Sa.support;
    Ua = F;
    Ta && C.cssease ? Ua = C.cssease : C.ease && (Ua = C.ease);
    Na.animate = function() {
        this.P || (this.P = []);
        return Z(this, Tb, arguments)
    };
    Na.stop = function(a, b) {
        a = this;
        if (a.P) {
            for (b = a.P.length; b--; )
                a.P[b].stop();
            a.P = D
        }
        return a
    };
    function Tb(a, b, c, d, e) {
        S(c) && (e = c, c = D);
        S(d) && !e && (e = d, d = D);
        d && (d = Ua[d]);
        c = {duration: c,ease: d,oncomplete: e};
        if (Ta)
            b = new Sa(a, b, c);
        else {
            d = C.Tweener;
            e = a.style;
            var f;
            a = zb(a);
            var h, m, E = {};
            for (f in b)
                h = t(b[f]), m = a.getPropertyValue(f), m = !m || "none" == m ? 0 : +t(m)[2], E[f] = {from: m,to: +h[2] || 0,prefix: h[1],suffix: h[3]};
            b = new d(e, E, c)
        }
        this.P.push(b)
    }
    Fa = C.HashQuery = Y({typeCast: function(a) {
            var b = cb(a);
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
                return n;
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
    function Ub(a) {
        var b = l(a.type);
        b.controls = a.controls ? r : n;
        b.preload = a.preload || "auto";
        b.autoplay = a.autoplay ? r : n;
        b.loop = a.loop ? r : n;
        b.src = a.dir + a.name + "." + a.suffix[0][0];
        return b
    }
    function Vb(a, b) {
        if (!A["HTML" + a + "Element"])
            return n;
        a = ca(a);
        for (var c = l(a), d = [], e = 0, f = b.length; e < f; e++)
            c.canPlayType(a + "/" + b[e][1]) && d.push(b[e]);
        return d.length ? d : n
    }
    Da = Y({init: function(a) {
            var b = this, c = a.autoplay, d = a.loop, e, f = a.el || B.body;
            a.preload = "auto";
            a.autoplay = a.loop = n;
            switch (a.type) {
                case "Audio":
                    e = va(a);
                    break;
                default:
                    e = wa(a)
            }
            if (b.b = e) {
                if (c) {
                    var h;
                    h = b.k(e, "canplay", function() {
                        b.J(h);
                        b.play()
                    })
                }
                d && b.loop(r);
                a.oncanplay && b.k(e, "canplay", a.oncanplay);
                a.onended && b.k(e, "ended", a.onended);
                s(f, e)
            }
        },dispose: function() {
            Db(this.b);
            this._super()
        },getElement: aa("b"),getCurrent: function() {
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
        return Ub(a)
    };
    va.support = Vb("Audio", [["mp3", "mpeg"], ["wav", "wav"], ["ogg", "ogg"], ["m4a", "mp4"]]);
    (C.Sound = function(a) {
        a.type = "Audio";
        return new Da(a)
    }).support = va.support;
    wa = C.Video = function(a) {
        a.type = "video";
        a.suffix = wa.support;
        return Ub(a)
    };
    wa.support = Vb("Video", [["webm", "webm"], ["mp4", "mp4"], ["ogv", "ogg"]]);
    (C.Movie = function(a) {
        a.type = "Video";
        return new Da(a)
    }).support = wa.support;
    C.Ajax = X(I, {dispose: function() {
            this.stop();
            this._super()
        },init: function(a) {
            a = M({}, a);
            var b = this, c = a.url, d = a.type || "GET", e = p, f = b.Ia = new XMLHttpRequest;
            b._super();
            "json" == a.dataType && b.Fb(a);
            u(b, a);
            a.cache || b.vb(a);
            a.query && (e = b.Aa(a));
            f.onreadystatechange = function() {
                if (4 == f.readyState) {
                    if (200 == f.status)
                        return b.fire("complete", f.responseText, f);
                    b.fire("error", f)
                }
            };
            "GET" == d && (c = (-1 != c.indexOf("?") ? r : n) ? c + "&" : c + "?", c += e, e = p);
            this.Aa = e;
            c = [d, c];
            a.sync && c.push(n);
            f.open.apply(f, c);
            "POST" == d && f.setRequestHeader("Content-Type",
            "application/x-www-form-urlencoded");
            a.manual || b.start()
        },q: x,start: function() {
            this.q();
            this.Ia.send(this.Aa)
        },stop: function() {
            this.Ia.abort();
            this.fire("stop", this.Ia)
        },Aa: function(a) {
            a = a.query;
            Q(a) && (a = encodeURI(fb(a)));
            return a
        },vb: function(a) {
            a.query || (a.query = {});
            a.query["cir" + L()] = "0"
        },Fb: function(a) {
            var b = a.oncomplete, c = a.onerror;
            b && (a.oncomplete = function(a) {
                b(ea(a))
            });
            c && (a.onerror = function(a) {
                c(a)
            })
        }}, g);
    za = C.Progress = Y({ma: 0,ua: 0,O: 0,t: function(a, b, c) {
            b = this;
            q(a) && b.K.push(a);
            b.O = b.ma / b.Ha;
            1 < b.O && (b.O = 1);
            b.bb(b.O);
            b.ua && (c = Error("miss"));
            if (b.ma == b.Ha || b.ua)
                b.xa(c, b.K), b.xa = b.bb = T
        },init: function(a, b, c) {
            b = this;
            c = a.waits;
            ib(c) && (c = c.length);
            b.Ha = c;
            b.xa = a.oncomplete;
            b.bb = a.onprogress || T;
            b.K = []
        },getProgress: aa("O"),pass: function(a) {
            this.ma++;
            this.t(a)
        },miss: function(a) {
            this.ua++;
            this.t(a)
        },exit: function(a, b) {
            b = this;
            b.ma = b.Ha;
            b.t(a)
        }});
    xa = X(I, {init: function(a) {
            this._super();
            a = a || F;
            var b = nb(a.queue) || [];
            u(this, a);
            this.resetQueue(b);
            this.Q = v(this, this.Q)
        },q: x,start: function() {
            this.q();
            this.U = n;
            this.Pa()
        },restart: function(a) {
            this.resetQueue(a);
            this.start()
        },stop: function() {
            this.o = D;
            this.fire("stop")
        },pause: function() {
            this.U = r;
            this.fire("pause")
        },resume: function() {
            this.U && (this.fire("resume"), this.U = n, this.Pa())
        },resetQueue: function(a) {
            a && (this.Ib = nb(a));
            a = this.o = nb(this.Ib);
            for (var b in a)
                a[b].resetQueue && a[b].resetQueue();
            this.fire("reset")
        },
        va: function() {
            this.fire("change", this.getQueue())
        },setQueue: function(a) {
            this.o = nb(a);
            this.va()
        },getQueue: function() {
            return nb(this.o)
        },addTask: function(a, b) {
            if (!R(b) || b > this.o.length)
                b = this.o.length;
            this.o.splice(b, 0, a);
            this.va()
        },removeTask: function(a) {
            for (var b = 0, c = this.o.length; b < c; b++)
                if (this.o[b] === a) {
                    this.o.splice(b, 1);
                    this.va();
                    break
                }
        },Pa: function() {
            this.U || this.sa()
        },Ka: function(a) {
            var b = this;
            return a.one && a.start ? (a.one("complete", v(b, b.Q)), v(a, a.start)) : mb(a) ? v(b, a) : function(c) {
                a.call(b);
                c()
            }
        }}, g);
    C.Parallel = C.Async = X(xa, {p: w,sa: function() {
            if (this.o) {
                if (!this.o.length)
                    return this.p();
                for (this.eb = this.o.length; !this.U && this.o && this.o[0]; )
                    this.Ka(this.o.shift())(this.Q)
            }
        },Z: ga,Q: function() {
            this.Z();
            this.eb--;
            this.eb || this.p()
        }});
    C.Serial = C.Sync = X(xa, {p: w,sa: function() {
            if (this.o && !this.U) {
                if (this.o[0])
                    return this.Ka(this.o.shift())(this.Q);
                this.p()
            }
        },Z: ga,Q: function() {
            this.Z();
            this.sa()
        }});
    C.Anvas = Y({init: function(a, b) {
            b = this;
            b.ea = a.canvas;
            b.xb = b.ea.getContext("2d");
            b.setSize(a)
        },setSize: function(a) {
            a.width && (this.ea.width = a.width);
            a.height && (this.ea.height = a.height)
        },pigment: function(a) {
            var b = this, c = l("canvas"), d = l("img");
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
            var b = 0, c = a.length, d = this.xb, e = this.ea;
            for (d.clearRect(0, 0, e.width, e.height); b < c; b++)
                (e = a[b]) && d.drawImage(e.image, e.x, e.y)
        }}, !!A.HTMLCanvasElement);
    var Wb = "Sun Mon Tue Wed Thu Fri Sat".split(" "), Xb = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), Yb = "January February March April May June July August September October November December".split(" "), Zb = "Jan Feb Mar Apr May June July Aug Sep Oct Nov Dec".split(" "), $ = {d: function(a) {
            return $b($.j(a))
        },j: function(a) {
            return a.getDate()
        },D: function(a) {
            return Wb[a.getDay()]
        },l: function(a) {
            return Xb[a.getDay()]
        },F: function(a) {
            return Yb[a.getMonth()]
        },M: function(a) {
            return Zb[a.getMonth()]
        },
        m: function(a) {
            return $b($.n(a))
        },n: function(a) {
            return a.getMonth() + 1
        },Y: function(a) {
            return a.getFullYear()
        },y: function(a) {
            a = $.Y(a);
            a = p + a;
            return a.slice(a.length - 2)
        },a: function(a) {
            return ca($.A(a))
        },A: function(a) {
            return 12 > $.G(a) ? "AM" : "PM"
        },g: function(a) {
            a = $.G(a);
            return 12 == a || 0 == a || 24 == a ? 12 : a % 12
        },G: function(a) {
            return a.getHours()
        },h: function(a) {
            return $b($.g(a))
        },H: function(a) {
            return $b($.G(a))
        },i: function(a) {
            return $b($.I(a))
        },s: function(a) {
            return $b($.S(a))
        },I: function(a) {
            return a.getMinutes()
        },
        S: function(a) {
            return a.getSeconds()
        }}, ac = /%([djDlFMmnYyaAgGhHisIS])/g;
    function $b(a) {
        a = +a;
        10 > a && (a = "0" + a);
        return p + a
    }
    C.DateFactory = Y({make: function(a) {
            switch (r) {
                case gb(a):
                    return a = a.split(/[T:\-\+\/\s]/), new Date(+a[0], a[1] - 1, +a[2], +a[3] || 0, +a[4] || 0, +a[5] || 0);
                case R(a):
                    return new Date(a);
                case P("Date", a):
                    return a
            }
            return new Date
        },format: function(a, b) {
            b = this.make(b);
            return a.replace(ac, function(a, d) {
                return $[d](b)
            })
        }});
    C.Rollover = Y({init: function(a, b) {
            b = this;
            var c = a.toggleClass || p, d = a.over || T, e = a.out || T;
            b.B = a.els;
            b.Jb = function() {
                qb(b, c);
                d()
            };
            b.kb = function() {
                rb(b, c);
                e()
            };
            a.manual || b.attach()
        },dispose: function() {
            this.detach();
            this._super()
        },attach: function() {
            this.X(z)
        },detach: function() {
            this.X(y)
        },X: function(a, b, c) {
            b = this;
            for (c = b.B.length; c--; )
                a(b.B[c], J.SWITCHOVER, b.Jb), a(b.B[c], J.SWITCHOUT, b.kb), a(b.B[c], J.MOUSEOUT, b.kb)
        }});
    C.DataStore = Y({fa: function() {
            return !this.ca ? {} : []
        },init: function(a) {
            a = a || F;
            this.ca = a.array || n;
            this.reset()
        },set: function(a, b) {
            var c;
            Q(a) || (c = {}, c[a] = b, a = c);
            for (c in a)
                this.ga[c] = a[c]
        },get: function(a) {
            var b = this.fa(), c = this.ga, d;
            if (a)
                return c[a];
            for (d in c)
                b[d] = c[d];
            return b
        },remove: function(a) {
            q(this.ga[a]) && (this.ca ? this.data.splice(a, 1) : delete this.ga[a])
        },reset: function() {
            this.ga = this.fa()
        }});
    Ea = Y({fa: function() {
            return !this.ca ? {} : []
        },init: function(a) {
            this.ca = a.array || n;
            this.T = a.namespace ? a.namespace + "-" : p;
            this.W = A[a.type + "Storage"]
        },set: function(a, b) {
            var c;
            Q(a) || (c = {}, c[a] = b, a = c);
            for (c in a)
                this.W.setItem(this.T + c, JSON.stringify(a[c]))
        },get: function(a, b) {
            b = this;
            var c = this.fa(), d, e = b.W;
            if (a)
                return ea(e.getItem(b.T + a));
            for (d in e)
                b.T ? (a = d.split(b.T)[1]) && (c[a] = ea(e[d])) : c[d] = ea(e[d]);
            return c
        },remove: function(a, b) {
            b = this;
            a = b.T + a;
            q(b.W.getItem(a)) && b.W.removeItem(a)
        },reset: function(a, b) {
            a =
            this;
            if (!a.T)
                return a.W.clear();
            for (b in a.W)
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
    C.DragFlick = Y({Ea: function(a) {
            return a.changedTouches ? a.changedTouches[0] : a
        },sb: function(a) {
            var b = this, c, d, e = n;
            b.f.push(b.k(a.el, J.SWITCHDOWN, function(a) {
                var h = b.Ea(a);
                c = h.pageX;
                d = h.pageY;
                e = r;
                jb(a)
            }), b.k(A, J.SWITCHUP, function(f) {
                e && (f = b.Ea(f), a.callback({x: f.pageX - c,y: f.pageY - d}), e = n)
            }))
        },zb: function(a) {
            this.sb({el: a.el,callback: function(b) {
                    var c = a.boundary || 0, d = {change: n,top: n,right: n,bottom: n,left: n,amount: b};
                    Math.abs(b.x) > c && (0 < b.x ? d.right = r : 0 > b.x && (d.left = r), d.change = r);
                    Math.abs(b.y) > c && (0 < b.y ?
                    d.bottom = r : 0 > b.y && (d.top = r), d.change = r);
                    a.callback(d)
                }})
        },init: function(a, b) {
            b = this;
            b.f = [];
            a = (b.c = a) || F;
            a.manual || b.attach()
        },attach: function() {
            function a(a, c, d) {
                b.f.push(b.k(a, c, function(a) {
                    d(b.Ea(a))
                }))
            }
            var b = this, c = this.c, d = c.el, e = c.start || T, f = c.move || T, h = c.end || T, m = n, E = 0, N = 0;
            c.direction && b.zb({el: d,boundary: c.boundary,callback: c.direction});
            a(d, J.SWITCHDOWN, function(a) {
                m = r;
                E = a.pageX;
                N = a.pageY;
                e({e: a,move: {x: E,y: N}})
            });
            a(B, J.SWITCHMOVE, function(a) {
                m && f({e: a,move: {x: a.pageX - E,y: a.pageY - N}})
            });
            a(B,
            J.SWITCHUP, function(a) {
                m && (h({e: a,move: {x: a.pageX - E,y: a.pageY - N}}), m = n)
            })
        },detach: function(a) {
            a = this;
            for (var b = a.f, c = b.length; c--; )
                a.J(b[c]);
            a.f = []
        }});
    C.ExternalInterface = function(a) {
        a = a || F;
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
            this.aa = {}
        },dispose: function(a) {
            for (a in this.aa)
                this.removeCallback(a);
            this._super()
        },call: function(a) {
            this.setHash(a)
        },addCallback: function(a, b, c) {
            c = this;
            c.aa[a] = function(d) {
                d = c.getHash();
                d.mode == a && b(d.vars)
            };
            z(A, "hashchange", c.aa[a])
        },removeCallback: function(a) {
            y(A, "hashchange", this.aa[a]);
            delete this.aa[a]
        }});
    C.Facebook = Y({ta: ja,includeAPI: function() {
            ka("fb-root") && s(B.body, l("div", {id: "fb-root"}));
            this.ta("facebook-jssdk", "//connect.facebook.net/ja_JP/all.js#xfbml=1")
        },shareURL: function(a) {
            return "https://www.facebook.com/dialog/feed?app_id=" + a.app_id + "&redirect_uri=" + a.redirect_uri + fb({link: a.link,picture: a.picture,name: a.name,caption: a.caption,description: a.description})
        }});
    C.FPS = Y({za: 0,Hb: 0,C: 0,init: function(a, b) {
            b = this;
            b.qa = b.Da = a.criterion;
            b.$a = b.Qa(b.qa);
            b.Db = a.enterframe;
            a.manual || b.start()
        },dispose: fa,getCriterion: aa("qa"),getSurver: aa("Da"),getFrameTime: aa("$a"),enter: function(a) {
            a = this;
            a.Db({criterion: a.qa,surver: a.Da})
        },start: function(a) {
            a = this;
            a.za = L();
            a.C = setInterval(a.R, a.$a, a)
        },R: function(a, b) {
            b = a.Hb = L();
            a.Da = a.Qa(b - a.za);
            a.za = b;
            a.enter()
        },Qa: function(a) {
            return Math.round(1E3 / a)
        },stop: function() {
            clearInterval(this.C)
        }});
    ya = X(I, {Fa: p,p: w,Z: ga,init: function(a, b) {
            b = this;
            b._super();
            b.Ba = a.srcs;
            b.Va = [];
            b.f = [];
            b.O = new za({waits: b.Ba,onprogress: function(a) {
                    b.Z(a)
                },oncomplete: function() {
                    for (var a = b.f.length; a--; )
                        b.J(b.f[a]);
                    b.f = [];
                    b.p(b.Va)
                }});
            u(b, a);
            a.manual || b.start()
        },q: x,start: function() {
            function a() {
                b.O.pass()
            }
            var b = this, c, d = 0, e = b.Ba.length;
            b.q();
            if (!b.Ca)
                for (b.Ca = r; d < e; d++)
                    c = l(b.Fa), c.src = b.Ba[d], b.f.push(b.k(c, J.LOAD, a)), b.Va.push(c), b.Wa(c)
        },Wa: T}, g);
    C.ImgLoad = X(ya, {Fa: "img"});
    Ga = C.ScriptLoad = X(ya, {Fa: "script",Wa: function(a) {
            s(ma, a)
        }});
    Wa = function() {
        Va = r;
        y(A, J.LOAD, Wa)
    };
    z(A, J.LOAD, Wa);
    C.WindowLoad = X(I, {init: function(a) {
            this._super();
            u(this, a);
            a.manual || this.start()
        },p: w,q: x,start: function() {
            var a = this, b;
            a.q();
            a.Ca || (a.Ca = r, Va ? a.p() : b = a.k(A, J.LOAD, function() {
                a.J(b);
                a.p()
            }))
        }}, g);
    Ka = C.Mobile = Y({getZoom: function() {
            return B.body.clientWidth / A.innerWidth
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
                0 == A.pageYOffset && bb()
            }
            function b() {
                setTimeout(a, 100)
            }
            this.k(A, J.LOAD, b, n);
            this.k(A, "orientationchange", b, n)
        }});
    C.mobile = new Ka;
    Ma = U(/opera/i) ? "opera" : U(/msie/i) ? "ie" : U(/chrome/i) ? "chrome" : U(/safari/i) ? "safari" : U(/gecko/i) ? "gecko" : "ather";
    La = C.PC = Y({isChrome: function() {
            return "chrome" == Ma
        },isSafari: function() {
            return "safari" == Ma
        },isGecko: function() {
            return "gecko" == Ma
        },isOpera: function() {
            return "opera" == Ma
        },isIE: function() {
            return "ie" == Ma
        }});
    C.pc = new La;
    C.Orientation = Y({init: function(a, b) {
            b = this;
            b.c = a;
            b.f = [];
            b.cb = {portrait: r,landscape: n};
            b.Ua = {portrait: n,landscape: r};
            b.attach()
        },get: function(a) {
            a = this;
            return R(A.orientation) ? 90 != Math.abs(A.orientation) ? a.cb : a.Ua : A.innerWidth < A.innerHeight ? a.cb : a.Ua
        },fire: function(a) {
            a = this;
            if (a.get().portrait)
                return a.c.portrait();
            a.c.landscape()
        },attach: function(a, b) {
            b = this;
            var c = v(b, b.fire);
            b.f.push(b.k(A, J.LOAD, c), b.k(A, "orientationchange", c), b.k(A, J.RESIZE, c))
        },detach: function(a) {
            a = this;
            for (var b = a.f.length; b--; )
                a.J(a.f[b]);
            a.f = []
        }}, "onorientationchange" in A);
    C.Modal = Y({Ma: function(a) {
            a = this;
            for (var b = a.f.length; b--; )
                a.J(a.f[b]);
            a.f = []
        },init: function(a, b, c) {
            b = this;
            a = a || F;
            b.c = a;
            c = {display: "none",position: "absolute"};
            b.fb = new C.Scroll;
            b.f = [];
            b.L = l("div", {"class": "cir-modal-bg"});
            W(b.L, M({"z-index": "9998",top: 0,left: 0,width: "100%",height: "200%"}, c));
            s(B.body, b.L);
            b.v = l("div", {"class": "cir-modal-content"});
            W(b.v, M({"z-index": "9999",top: "50%",left: "50%"}, c));
            s(B.body, b.v);
            a.manual || b.open()
        },dispose: function(a) {
            a = this;
            a.close();
            Db(a.L);
            Db(a.v);
            a._super()
        },
        open: function(a, b) {
            b = this;
            b.fb.kill();
            W(b.L, {top: B.body.scrollTop});
            xb(b.L);
            b.inner(a)
        },close: function(a) {
            a = this;
            a.Ma();
            V(a.v, p);
            yb(a.v);
            yb(a.L);
            a.fb.revival()
        },inner: function(a, b, c, d, e) {
            b = this;
            b.Ma();
            a = a || b.c.html;
            V(b.v, a);
            xb(b.v);
            c = zb(b.v);
            W(b.v, {"margin-top": B.body.scrollTop - t(c.height)[2] / 2,"margin-left": -(t(c.width)[2] / 2)});
            b.c.bgClose && b.k(b.L, J.CLICK, v(b, b.close));
            if (b.c.closeSelector) {
                d = ob(b.c.closeSelector, b.v);
                for (e = d.length; e--; )
                    b.f.push(b.k(d[e], J.CLICK, v(b, b.close)))
            }
        }});
    Aa = Y({init: function(a) {
            this.c = a;
            this.attach()
        },attach: function(a) {
            a = this;
            a.detach();
            a.ub = a.k(A, a.c.e, a.c.callback)
        },detach: function() {
            this.J(this.ub)
        }});
    Ha = C.DeviceOrientation = function(a) {
        a.e = "deviceorientation";
        return Aa(a)
    };
    Ha.support = "ondeviceorientation" in A;
    Ia = C.DeviceMotion = function(a) {
        a.e = "devicemotion";
        return Aa(a)
    };
    Ia.support = "ondevicemotion" in A;
    Ha.support ? (Xa = Ha, Ya = function(a) {
        return a
    }) : Ia.support && (Xa = Ia, Ya = function(a) {
        return a.rotationRate
    });
    C.DeviceShake = Y({Ob: {x: "gamma",y: "beta",z: "alpha"},init: function(a, b) {
            b = this;
            b.hb = new Xa;
            b.c = a;
            b.attach()
        },attach: function() {
            var a, b = this.c, c = this.Ob[b.direction];
            this.hb.attach(function(d) {
                d = Ya(d);
                a || (a = d);
                Math.abs(d[c] - a[c]) > b.limit && (a = D, b.callback(d), setTimeout(function() {
                }, b.waittime))
            })
        },detach: function() {
            this.hb.detach()
        }}, Xa ? r : n);
    C.FontImg = Y({init: function(a, b) {
            a = a || F;
            this.Lb = (b = a.type) ? b + "_" : p;
            this.Kb = a.tag || "span"
        },make: function(a) {
            a = (p + a).split(p);
            for (var b = this.Kb, c = p, d = a.length; d--; )
                c = "<" + b + ' class="font_' + this.Lb + a[d] + '"></' + b + ">" + c;
            return c
        }});
    C.PreRender = X(I, {init: function(a, b) {
            b = this;
            b._super();
            b.B = a.els;
            b.Ra = a.guesslimit || 30;
            b.Ya = a.looptime || 100;
            b.Gb = b.Ya + (a.loopblur || 20);
            u(b, a);
            a.manual || b.start()
        },dispose: function() {
            clearInterval(this.C);
            this._super()
        },p: w,q: x,start: function() {
            var a, b = this, c = L();
            b.q();
            for (a = b.B.length; a--; )
                xb(b.B[a]);
            b.C = setInterval(function() {
                var a = L(), e = a - c;
                c = a;
                if (e < b.Gb && (b.Ra--, 1 > b.Ra)) {
                    clearInterval(b.C);
                    for (a = b.B.length; a--; )
                        yb(b.B[a]);
                    b.p()
                }
            }, b.Ya, b)
        }}, g);
    C.Router = Y({init: function(a) {
            var b = this;
            b.c = a;
            a.hashchange && (z(A, "hashchange", function() {
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
    C.ServerMeta = Y({init: function(a) {
            a = a || F;
            var b = a.callback || T;
            Za ? b(Za) : Za = bc(function() {
                $a = r;
                b(Za)
            })
        },date: function(a) {
            return bc(function(b) {
                a(b.getResponseHeader("Date"))
            })
        },connection: function() {
            return cc("Connection")
        },contentLength: function() {
            return cc("Content-Length")
        },lastModified: function() {
            return cc("Last-Modified")
        },server: function() {
            return cc("Server")
        },contentType: function() {
            return cc("Content-Type")
        },acceptRanges: function() {
            return cc("Accept-Ranges")
        },keepAlive: function() {
            return cc("Keep-Alive")
        }});
    function cc(a) {
        return $a ? Za.getResponseHeader(a) : n
    }
    function bc(a) {
        var b = new XMLHttpRequest;
        b.onload = function() {
            a(b)
        };
        b.open("HEAD", location.href + "?update" + L() + "=1");
        b.send(D);
        return b
    }
    C.Surrogate = Y({init: function(a) {
            this.yb = a.delay;
            this.da = a.callback
        },dispose: function() {
            this.clear();
            this._super()
        },request: function(a, b) {
            b = this;
            b.K = a;
            b.clear();
            b.Ga = setTimeout(b.flush, b.yb, b)
        },flush: function(a) {
            a = a || this;
            a.da(a.K)
        },clear: function() {
            clearTimeout(this.Ga)
        }});
    C.Throttle = Y({init: function(a) {
            this.Mb = a.waittime;
            this.da = a.callback
        },dispose: function() {
            this.unlock();
            this._super()
        },request: function(a, b) {
            b = this;
            b.Xa ? b.K = a : (b.da(a), b.lock(), b.Ga = setTimeout(function() {
                b.K && (b.da(b.K), b.K = D);
                b.unlock()
            }, b.Mb, b))
        },lock: function() {
            this.Xa = r
        },unlock: function(a) {
            a = a || this;
            a.Xa = n;
            clearTimeout(a.Ga)
        }});
    C.Twitter = Y({ta: ja,includeAPI: function() {
            this.ta("twitter-wjs", "//platform.twitter.com/widgets.js")
        },shareURL: function(a) {
            var b = a.name, c = a.hash, b = b ? " \u300c" + b + "\u300d" : p, c = c ? " " + c : p;
            return "https://twitter.com/intent/tweet?" + fb({url: a.redirect_uri,text: (a.caption || p) + b + c})
        }});
    C.XML = Y({init: function(a) {
            this.b = l("div");
            V(this.b, a.data)
        },$: function(a) {
            return this.b.querySelector(a)
        },$$: function(a) {
            return ob(a, this.b)
        }});
    C.Model = Y({la: function(a, b, c, d) {
            d = this;
            d.w.fire(a, d.r.get());
            b && d.w.fire(a + ":" + b, c)
        },init: function(a, b) {
            b = this;
            a = a || F;
            var c, d = a.defaults || b.defaults || F, e = a.events || b.events;
            b.mb = a.validate || b.validate || {};
            b.r = a.store || b.store || new C.DataStore;
            b.w = new I;
            for (c in d)
                b.set(c, d[c]);
            for (c in e)
                b.on(c, e[c])
        },set: function(a, b, c) {
            c = this;
            var d;
            Q(a) || (d = {}, d[a] = b, a = d);
            c.ya = c.r.get();
            for (d in a) {
                b = a[d];
                if (c.mb[d] && !c.mb[d](d, b))
                    return c.la("fail", d, b);
                c.r.set(d, b);
                c.w.fire(J.CHANGE + ":" + d, b)
            }
            c.w.fire(J.CHANGE,
            c.r.get())
        },prev: function(a) {
            return !a ? this.ya : this.ya[a]
        },get: function(a) {
            return this.r.get(a)
        },remove: function(a, b) {
            b = this;
            if (a) {
                var c = b.r.get(a), d = b.r.remove(a);
                b.la("remove", a, c);
                return d
            }
        },reset: function() {
            this.r.reset();
            this.la("reset")
        },on: function(a, b, c) {
            c = v(this, b);
            this.w.on(a, c);
            return c
        },off: function(a, b) {
            this.w.off(a, b)
        },fire: function(a, b) {
            return this.w.fire.apply(this.w, arguments)
        }});
    C.View = Y({init: function(a, b) {
            b = this;
            a = a ? kb(b, a) : kb(b, b, {});
            b.el = C.$(a.el || b.el || l("div"));
            b.attach();
            a.init && b.init()
        },dispose: function() {
            this.detach();
            this._super()
        },X: function(a, b, c, d, e, f) {
            b = this;
            f = b.events;
            for (c in f)
                for (d in e = "me" == c ? b.el : b.el.find(c), f[c])
                    e[a](d, b[f[c][d]])
        },attach: function() {
            this.X("on")
        },detach: function() {
            this.X("off")
        }});
    C.Ollection = X(C.Model, {init: function(a, b) {
            b = this;
            a = a || F;
            var c, d = a.defaults || b.defaults || [], e = a.events || b.events;
            b.r = a.store || b.store || new C.DataStore({array: r});
            b.w = new I;
            for (c in d)
                b.set(c, d[c]);
            for (c in e)
                b.on(c, e[c])
        },set: function(a, b, c) {
            c = this;
            var d;
            Q(a) || (d = {}, d[a] = b, a = d);
            c.ya = c.r.get();
            for (d in a) {
                b = a[d];
                if (!R(+d))
                    return c.la("fail", a, b);
                c.r.set(a, b);
                c.w.fire(J.CHANGE, b, +d, c.r.get())
            }
        },add: function(a) {
            var b = this.r.get().length;
            this.set(b, a);
            return b
        },each: function(a) {
            var b, c = this.get();
            for (b in c)
                a.apply(this,
                [c[b], b, c])
        },map: function(a) {
            var b, c = this.get();
            for (b in c)
                this.set(b, a.apply(this, [c[b], b, c]))
        }});
    Ja = C.Validate = Y({t: function(a, b, c, d) {
            if (a(c))
                return r;
            this.displayError(b, d)
        },init: function(a, b) {
            b = this;
            a = a || {};
            b.Rb = a.level;
            kb(b, b, a)
        },displayError: function(a, b) {
            b = "Validate Error:" + a + " is " + b + ".";
            switch (this.Sb) {
                case "log":
                    return console.log(b), n;
                case "error":
                    throw Error(b);
                case "off":
                    return n
            }
            console.warn(b);
Validate Error:test is Object.
Validate Error:test is Number.
Validate Error:test is String.
Validate Error:test is Function.
Validate Error:test is Boolean.
Validate Error:test is Array.
            return n
        },isObject: function(a, b) {
            return this.t(Q, a, b, "Object")
        },isNumber: function(a, b) {
            return this.t(R, a, b, "Number")
        },isString: function(a, b) {
            return this.t(gb, a, b, "String")
        },isFunction: function(a,
        b) {
            return this.t(S, a, b, "Function")
        },isBoolean: function(a, b) {
            return this.t(hb, a, b, "Boolean")
        },isArray: function(a, b) {
            return this.t(ib, a, b, "Array")
        }});
    C.validate = new Ja;
    C.Scroll = Y({dispose: function() {
            this.revival();
            clearInterval(this.ib);
            this._super()
        },to: ab,toTop: bb,toBottom: function() {
            ab(B.height)
        },checkBottom: function(a) {
            return B.body.scrollHeight - A.innerHeight - B.body.scrollTop <= (a || 0) ? r : n
        },scrollY: function(a) {
            a = A.pageYOffset;
            return q(a) ? a : (B.documentElement || B.body.parentNode || B.body).scrollTop
        },smooth: function(a, b, c, d) {
            c = this;
            b = b || T;
            c.jb || (c.jb = r, R(a) || (a = a.offsetTop), d = B.height - A.innerHeight, a > d && (a = d), c.La = c.scrollY(), c.ib = setInterval(function(d) {
                d = c.scrollY();
                d = 0.3 * (a - d) + d;
                if (1 > Math.abs(a - d) || c.La == d)
                    return ab(a), clearInterval(c.ib), b(a), delete c.jb;
                c.La = d;
                ab(d)
            }, 50))
        },kill: function(a) {
            a = this;
            a.ja || (W(B.body, {overflow: "hidden"}), a.ja = a.k(B, J.TOUCHMOVE, jb))
        },revival: function(a) {
            a = this;
            a.ja && (W(B.body, {overflow: "auto"}), a.J(a.ja), delete a.ja)
        }});
    C.LimitText = Y({Za: 8,oa: function(a) {
            V(this.N, a);
            s(Ab(this.b), this.N)
        },pa: function() {
            V(this.N, p);
            Db(this.N)
        },init: function(a) {
            var b = this.b = a.el;
            zb(b);
            var b = this.N = l(b.tagName, {"class": tb(b, "class"),style: tb(b, "style")}), c = this.Na = zb(b);
            this.nb = a.width;
            this.Sa = a.height;
            this.oa(0);
            q(a.width) || (this.nb = +t(c.width)[2]);
            q(a.height) || (this.Sa = +t(c.height)[2]);
            W(b, {height: "auto"});
            this.Eb = +t(c.fontSize)[2];
            this.pa()
        },ka: function() {
            return +t(this.Na.width)[2] <= this.nb && +t(this.Na.height)[2] <= this.Sa ? r : n
        },getLimitFontSize: function(a) {
            a =
            p + a;
            var b = this, c = b.Eb, d;
            W(b.N, {fontSize: c});
            b.oa(a);
            b.ka() ? d = c : lb(b.Za - 1, c, function(a) {
                W(b.N, {fontSize: a});
                return b.ka()
            }, function(a) {
                d = a
            });
            b.pa();
            d < b.Za && (d = 0);
            return d
        },getLimitTextLength: function(a) {
            a = p + a;
            var b = this, c = a.length, d;
            b.oa(a);
            b.ka() ? d = c : lb(0, c, function(c) {
                V(b.N, a.slice(0, c));
                return b.ka()
            }, function(a) {
                d = a
            });
            b.pa();
            return d
        }});
    C.require = function(a, b, c) {
        var d = dc(a), e = c ? ec : fc;
        if (!d && (!b || ta[b]))
            throw Error("not found " + a);
        b && (ta[b] = r);
        return e(d, a, b, c)
    };
    function ec(a, b, c, d) {
        if (a)
            return d(a);
        new Ga({srcs: [c],oncomplete: function() {
                a = dc(b);
                if (!a)
                    throw Error("not found " + b);
                d(a)
            }})
    }
    function fc(a, b, c) {
        if (a)
            return a;
        new C.Ajax({url: c,sync: r,oncomplete: function(a) {
                var b = l("script");
                s(ma, b);
                b.text = a
            }});
        if (a = dc(b))
            return a;
        throw Error("not found " + b);
    }
    function dc(a) {
        a = a.split(".");
        for (var b = 0, c = a.length, d = A; b < c; b++) {
            if (!d[a[b]])
                return;
            d = d[a[b]]
        }
        return d
    }
    C.namespace = function(a, b) {
        for (var c = a.split("."), d = 0, e = c.length, f = A, h; d < e && f[c[d]]; d++)
            h = f, f = f[c[d]];
        for (; d < e; d++)
            h = f, f = f[c[d]] = {};
        b && (M(b, f), f = h[c[e - 1]] = b);
        return f
    };
    Na && (Qb.prototype = Na);
})();
