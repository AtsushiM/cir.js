 // cir.js v1.6.7 (c) 2013 Atsushi Mizoue.
!function() {
    var g = void 0;
    function ba(a) {
        return function() {
            return this[a]
        }
    }
    C = {};
    function k(a) {
        return "cubic-bezier(" + a + ")"
    }
    function ca(a) {
        return JSON.parse(a)
    }
    function da(a) {
        return a.toLowerCase()
    }
    function l(a) {
        return (m + (a || m)).match(/^(.*?)(-?[0-9\.]+)(.*)$/)
    }
    function n(a, b) {
        var c, d;
        for (c in b)
            if (d = c.match(/^on(.+)$/))
                a.on(d[1], b[c])
    }
    function p(a, b, c) {
        if (!b.manual)
            a[c || "start"]()
    }
    function ea() {
        this.stop();
        this._super()
    }
    function fa(a) {
        if (a) {
            var b = this.ea, c = b[a];
            delete b[a];
            q(c[0], c[1], c[2])
        }
    }
    function ga(a, b, c, d, e) {
        d = this;
        d.ea || (d.ea = {});
        e = ++d.ob;
        s(a, b, c);
        d.ea[e] = [a, b, c];
        return e
    }
    function t(a, b) {
        a.emit("complete", b)
    }
    function u(a) {
        a.emit("start")
    }
    function ha(a, b) {
        a.emit("progress", b)
    }
    var v, w = window, y = document, ja = y.head || ia("head"), z = !0, A = !1, B = null, m = "", D = {}, E = ka(), la = k("0.19,1,0.22,1"), F = 1.70158, ma = A, na = /0/.test(function() {
        0
    }) ? /\b_super\b/ : /.*/, oa = {}, pa, qa, G, Storage, ra, sa, H, ta, ua, va, wa, xa, ya, I, za, Aa, Ba, Ca, Da, Ea, Fa, Ga, Ha, Ia, Ja, Ka, La, Ma, Na, Oa, Pa, Qa, Ra, Sa, Ta, Ua, Va, Wa;
    Date.now || (Date.now = function() {
        return +new Date
    });
    function J() {
        return Date.now()
    }
    function Xa(a) {
        w.scrollTo(0, a)
    }
    function Ya() {
        Xa(1)
    }
    function Za(a, b, c) {
        for (c in b)
            a[c] = b[c];
        return a
    }
    function $a(a, b) {
        b = m + a;
        return b.match(/^{.*}$/) ? ca(b) : b.match(/^[0-9\.]+$/) ? +b : "true" == b ? z : "false" == b ? A : a
    }
    function ab(a, b) {
        b = [];
        b.push.apply(b, a);
        return b
    }
    function K(a, b, c) {
        return a.split(b).join(c)
    }
    function bb(a, b, c, d) {
        b = c = m;
        for (d in a)
            a[d] && (c += b + d + "=" + encodeURIComponent(a[d]), b = "&");
        return c
    }
    function L(a, b) {
        return Object.prototype.toString.call(b) == "[object " + a + "]" ? z : A
    }
    function M(a) {
        return L("Object", a)
    }
    function N(a) {
        return L("Number", a)
    }
    function cb(a) {
        return L("String", a)
    }
    function O(a) {
        return L("Function", a)
    }
    function db(a) {
        return L("Boolean", a)
    }
    function eb(a) {
        return L("Array", a)
    }
    function P(a) {
        return a === g ? A : z
    }
    function ka() {
        return "ontouchstart" in w
    }
    function Q() {
    }
    function fb(a) {
        a.preventDefault();
        return A
    }
    function R(a, b) {
        return !!(b || navigator.userAgent).match(a)
    }
    function S(a, b) {
        return function() {
            return b.apply(a, arguments)
        }
    }
    function gb(a, b, c, d) {
        b = b || a;
        c = c || b;
        for (d in b)
            O(b[d]) && (c[d] = S(a, b[d]));
        Za(a, c);
        return c
    }
    function hb(a, b, c, d) {
        for (var e; z; ) {
            e = ~~((a + b) / 2);
            if (a == e)
                return d(e);
            c(e) ? a = e : b = e
        }
    }
    function ib(a) {
        return eb(a) ? a.slice(0) : a
    }
    function jb(a) {
        return M(a) ? Za({}, a) : a
    }
    function kb(a, b) {
        lb(a) || mb(T("script", {id: a,src: b}), ia("script"))
    }
    C.util = {pageTop: Ya,override: Za,replaceAll: K,escape: function(a) {
            return K(K(K(K(K(m + a, "&", "&amp;"), '"', "&quot;"), "'", "&#039;"), "<", "&lt;"), ">", "&gt;")
        },unescape: function(a) {
            return K(K(K(K(K(m + a, "&gt;", ">"), "&lt;", "<"), "&#039;", "'"), "&quot;", '"'), "&amp;", "&")
        },windowOpen: function(a, b, c, d, e) {
            e = [];
            for (d in c)
                c[d] === z ? c[d] = "yes" : c[d] === A && (c[d] = "no"), e.push(d + "=" + c[d]);
            return w.open(a, b, e.join(","))
        },typeCast: $a,makeQueryString: bb,parseQueryString: function(a, b, c, d, e) {
            a = a.replace(/^[\#\?]/, m);
            b = a.split("&");
            c = b.length;
            for (e = {}; c--; )
                d = b[c].split("="), e[d[0]] = $a(decodeURIComponent(d[1]));
            return e
        },is: L,isObject: M,isNumber: N,isString: cb,isFunction: O,isBoolean: db,isArray: eb,isDefined: P,isTouchable: ka,nullFunction: Q,abstraceFunction: function() {
            throw Error("call abstract-function.");
        },eventPrevent: fb,eventStop: function(a) {
            a.stopPropagation();
            return A
        },checkUserAgent: R,proxy: S,owner: gb,binarySearch: function(a) {
            a = a || D;
            return hb(a.low || 0, a.high || 0, a.compare || Q, a.end || Q)
        },toArray: ab,copyArray: ib,copyObject: jb,
        includeAPI: kb};
    function ia(a) {
        return y.querySelector(a)
    }
    function nb(a, b) {
        return ab(b.querySelectorAll(a))
    }
    function lb(a) {
        return y.getElementById(a)
    }
    function ob(a, b) {
        return 0 <= a.className.indexOf(b) ? z : A
    }
    function pb(a, b, c, d) {
        ob(a, b) || (c = m, (d = a.className) && (c = " "), a.className = d + c + b)
    }
    function qb(a, b, c, d, e) {
        if (ob(a, b)) {
            d = [];
            c = a.className.split(" ");
            for (e = c.length; e--; )
                b != c[e] && d.push(c[e]);
            a.className = d.join(" ")
        }
    }
    function rb(a, b) {
        ob(a, b) ? qb(a, b) : pb(a, b)
    }
    function sb(a, b, c, d) {
        if (M(b)) {
            for (d in b)
                P(b[d]) && a.setAttribute(d, b[d]);
            return z
        }
        if (!P(c))
            return a.getAttribute(b);
        a.setAttribute(b, c)
    }
    function tb(a, b) {
        a.removeAttribute(b)
    }
    function T(a, b, c) {
        c = y.createElement(a);
        b && sb(c, b);
        return c
    }
    function ub(a) {
        var b = T("div");
        U(b, a);
        return ab(b.children)
    }
    function s(a, b, c) {
        a.addEventListener(b, c, A)
    }
    function q(a, b, c) {
        a.removeEventListener(b, c, A)
    }
    function vb(a, b, c, d) {
        function e(c) {
            for (var e = c.target, r = nb(b, a), x = r.length, aa; x--; )
                if (aa = r[x].compareDocumentPosition(e), 0 == aa || aa & Node.DOCUMENT_POSITION_CONTAINED_BY) {
                    d.apply(r[x], arguments);
                    break
                }
        }
        s(a, c, e);
        return e
    }
    function wb(a) {
        a.style.display = "block"
    }
    function xb(a) {
        a.style.display = "none"
    }
    function V(a, b, c, d, e, f) {
        c = a.style;
        for (d in b)
            e = d, f = b[d], N(f) && (f += "px"), c[e] = f
    }
    function yb(a) {
        return y.defaultView.getComputedStyle(a, B)
    }
    function zb(a) {
        return a.parentNode
    }
    function W(a, b) {
        return a.appendChild(b)
    }
    function mb(a, b) {
        return zb(a).insertBefore(b, a)
    }
    function Ab(a, b) {
        return zb(a).insertBefore(b, a.nextSibling)
    }
    function Bb(a, b) {
        return a.insertBefore(b, a.firstChild)
    }
    function Cb(a) {
        return zb(a).removeChild(a)
    }
    function U(a, b) {
        if (!P(b))
            return a.innerHTML;
        a.innerHTML = b
    }
    function Db(a, b) {
        if (!P(b))
            return a.value;
        a.value = b
    }
    C.dom = {win: w,doc: y,$: ia,$$: function(a) {
            return nb(a, y)
        },$child: function(a, b) {
            return b.querySelector(a)
        },$$child: nb,$id: lb,on: s,off: q,delegate: vb,create: T,show: wb,hide: xb,hasClass: ob,addClass: pb,removeClass: qb,toggleClass: rb,css: V,computedStyle: yb,append: W,parent: zb,before: mb,after: Ab,insertBefore: Bb,remove: Cb,attr: sb,removeAttr: tb,html: U,val: Db,reflow: function(a) {
            a = a || y.body;
            a.offsetTop
        },toElement: function(a) {
            return ub(a)[0]
        },toElements: ub};
    pa = C.lass = function() {
    };
    pa.extend = function(a, b, c) {
        function d() {
            !ma && this.init && this.init.apply(this, arguments)
        }
        function e(c) {
            var e = a[c], r = b.prototype[c];
            O(e) && O(r) && na.test(e) ? d.prototype[c] = function() {
                var a, b = this._super;
                this._super = r;
                a = e.apply(this, arguments);
                this._super = b;
                return a
            } : d.prototype[c] = e
        }
        b = this;
        ma = z;
        d.prototype = new b;
        ma = A;
        d.prototype.constructor = d;
        for (c in a)
            a.hasOwnProperty(c) && e(c);
        d.extend = b.extend;
        return d
    };
    function X(a, b, c) {
        a = a || pa;
        a = a.extend(b);
        P(c) && (a.support = c);
        return a
    }
    function Y(a, b) {
        return X(qa, a, b)
    }
    qa = C.Base = X(B, {ob: 0,dispose: function(a, b, c) {
            a = this;
            c = a.ea;
            for (b in c)
                q.apply(B, c[b]);
            for (b in a)
                (c = a[b]) && c.dispose && c.dispose();
            a.__proto__ = B;
            for (b in a)
                a[b] = B, delete a[b]
        },c: ga,contract: ga,r: fa,uncontract: fa});
    G = C.Observer = Y({init: function() {
            this.oa = {}
        },on: function(a, b, c, d) {
            d = this.oa;
            d[a] || (d[a] = []);
            d[a].push(b)
        },one: function(a, b, c, d) {
            c = this;
            d = function(e) {
                b.apply(c, e);
                c.off(a, d)
            };
            d.Lb = b;
            c.on(a, d)
        },off: function(a, b, c, d, e, f) {
            d = this.oa;
            if (b) {
                if (e = d[a])
                    for (f = e.length; f--; )
                        if (b == e[f] || b == e[f].Lb)
                            return e.splice(f, 1), 0 == e.length && delete d[a], z;
                return A
            }
            return delete d[a]
        },emit: function(a) {
            var b = this.oa[a], c, d, e, f;
            if (b) {
                c = ab(arguments).slice(1);
                e = 0;
                for (f = b.length; e < f; e++)
                    (d = b[e]) && d.apply(this, c)
            }
        }});
    H = C.Event = Y({SWITCHCLICK: E ? "touchstart" : "click",SWITCHDOWN: E ? "touchstart" : "mousedown",SWITCHMOVE: E ? "touchmove" : "mousemove",SWITCHUP: E ? "touchend" : "mouseup",SWITCHOVER: E ? "touchstart" : "mouseover",SWITCHOUT: E ? "touchend" : "mouseout",LOAD: "load",CHANGE: "change",CLICK: "click",MOUSEDOWN: "mousedown",MOUSEMOVE: "mousemove",MOUSEUP: "mouseup",MOUSEOVER: "mouseover",MOUSEOUT: "mouseout",TOUCHSTART: "touchstart",TOUCHMOVE: "touchmove",TOUCHEND: "touchend",RESIZE: "resize"});
    H = C.e = new H;
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
            return c * (a /= d) * a * ((F + 1) * a - F) + b
        },outBack: function(a, b, c, d) {
            return c * ((a = a / d - 1) * a * ((F + 1) * a + F) + 1) + b
        },inOutBack: function(a, b, c, d) {
            return 1 > (a /= d / 2) ? c / 2 * a * a * (((F *= 1.525) + 1) * a - F) + b : c / 2 * ((a -= 2) * a * (((F *= 1.525) + 1) * a + F) + 2) + b
        }};
    C.ssease = {linear: "linear",inCubic: k("0.55,0.055,0.675,0.19"),outCubic: k("0.215,0.61,0.355,1"),inOutCubic: k("0.645,0.045,0.355,1"),inQuart: k("0.895,0.03,0.685,0.22"),outQuart: k("0.165,0.84,0.44,1"),inOutQuart: k("0.77,0,0.175,1"),inQuint: k("0.755,0.05,0.855,0.06"),outQuint: k("0.23,1,0.32,1"),inOutQuint: k("0.86,0,0.07,1"),inSine: k("0.47,0,0.745,0.715"),outSine: k("0.39,0.575,0.565,1"),inOutSine: k("0.445,0.05,0.55,0.95"),inExpo: k("0.95,0.05,0.795,0.035"),outExpo: k("0.19,1,0.22,1"),inOutExpo: k("1,0,0,1"),
        inCirc: k("0.6,0.04,0.98,0.335"),outCirc: k("0.075,0.82,0.165,1"),inOutCirc: k("0.785,0.135,0.15,0.86"),inQuad: k("0.55,0.085,0.68,0.53"),outQuad: k("0.25,0.46,0.45,0.94"),inOutQuad: k("0.455,0.03,0.515,0.955"),inBack: [k("0.6,0,0.735,0.045"), k("0.6,-0.28,0.735,0.045")],outBack: [k("0.175,0.885,0.32,1"), k("0.175,0.885,0.32,1.275")],inOutBack: [k("0.68,0,0.265,1"), k("0.68,-0.55,0.265,1.55")]};
    for (var Eb = ["animation", "webkitAnimation"], Fb = "Animation", Gb = T("p"), Hb = A, Ib, Jb = m, Kb = Eb.length, Lb, Mb, Nb = RegExp("^(.*?)" + Eb[0] + "$", "i"); Kb--; )
        if (P(Gb.style[Eb[Kb]])) {
            Hb = z;
            (Ib = Eb[Kb].match(Nb)[1]) ? (Jb = da(Ib), Fb = Jb + Fb, Jb = "-" + Jb + "-") : Fb = da(Fb);
            Lb = W(ia("head"), T("style", {type: "text/css"}));
            Mb = Lb.sheet;
            break
        }
    v = {Kb: Fb,Nb: Hb,prefix: Ib,Ib: Jb,sheet: Mb};
    var Ob = v.prefix, Pb = v.Ib, Qb = v.Kb, Rb = v.sheet;
    Fa = C.SSAnime = X(G, {Sa: function(a, b) {
            a = this.o;
            b = this.qb;
            q(a, Qb + "End", b);
            q(a, "animationend", b)
        },init: function(a, b, c, d, e, f, h, r) {
            d = this;
            d._super();
            n(d, c);
            c = c || D;
            d.Pb = c.oncomplete || Q;
            d.o = a;
            Fa.id++;
            d.K = "ciranim" + Fa.id;
            e = c.duration || Fa.duration;
            f = c.ease || la;
            r = {};
            for (h in b)
                r[h] = b[h], N(r[h]) && (r[h] += "px");
            d.Mb = r;
            r = K(K(JSON.stringify(r), '"', m), ",", ";");
            Rb.insertRule("@" + Pb + "keyframes " + d.K + "{to" + r + "}", Rb.cssRules.length);
            eb(f) || (f = [f]);
            a = d.K;
            h = 0;
            r = f.length;
            for (b = m; h < r; h++)
                b += Pb + "animation:" + a + " " + e + "ms " + f[h] +
                " 0s 1 normal both;";
            e = Rb;
            e.insertRule("." + a + "{" + b + "}", e.cssRules.length);
            p(d, c)
        },dispose: ea,start: function(a, b) {
            function c(c) {
                var e = Rb.cssRules, f = e.length, h;
                a.Sa();
                if ("webkit" == Ob) {
                    for (; f--; )
                        h = e[f].name || (m + e[f].selectorText).split(".")[1], h == a.K && Rb.deleteRule(f);
                    qb(b, a.K);
                    V(b, a.Mb)
                }
                t(a, c)
            }
            a = this;
            b = a.o;
            u(a);
            a.qb = c;
            s(b, Qb + "End", c);
            s(b, "animationend", c);
            pb(b, a.K)
        },stop: function(a) {
            a = {};
            this.emit("stop");
            a[Pb + "animation-play-state"] = "paused";
            V(this.o, a);
            this.Sa()
        }}, v.Nb);
    Fa.id = 0;
    Fa.duration = 500;
    Ka = ["webkit", "moz", "o", "ms"];
    if (w.requestAnimationFrame)
        Ma = w.requestAnimationFrame, Na = w.cancelAnimationFrame;
    else {
        for (La = Ka.length; La--; )
            if (w[Ka[La] + "RequestAnimationFrame"]) {
                Ma = w[Ka[La] + "RequestAnimationFrame"];
                Na = w[Ka[La] + "CancelAnimationFrame"];
                break
            }
        Ma || (Ma = function(a) {
            return setTimeout(a, 1E3 / C.AnimeFrame.fps)
        }, Na = function(a) {
            clearTimeout(a)
        })
    }
    v = C.AnimeFrame = Y({request: function(a) {
            return Ma.call(w, a)
        },cancel: function(a) {
            Na.call(w, a)
        }});
    v.fps = 30;
    C.animeframe = new v;
    I = C.Tweener = X(G, {init: function(a, b, c, d, e, f) {
            f = this;
            f._super();
            n(f, c);
            c = c || D;
            f.fb = a;
            f.ha = [];
            for (d in b)
                e = b[d], e.name = d, e.Jb = e.to - e.from, e.prefix = e.prefix || m, e.suffix = e.suffix || (e.suffix === m ? m : "px"), f.ha.push(e);
            f.Ea = c.duration || I.duration;
            f.pb = c.ease || f.jb;
            p(f, c)
        },dispose: ea,jb: function(a, b, c, d) {
            return c * (-Math.pow(2, -10 * a / d) + 1) + b
        },P: function(a) {
            for (var b = this, c, d = J(), e, f = za.length, h; f--; )
                if (c = za[f], a = c.ha.length, e = d - c.Gb, e < c.Ea)
                    for (; a--; )
                        h = c.ha[a], Sb(c.fb, h, c.pb(e, h.from, h.Jb, c.Ea));
                else {
                    for (; a--; )
                        h =
                        c.ha[a], Sb(c.fb, h, h.to);
                    t(c);
                    za.splice(f, 1)
                }
            za.length ? C.animeframe.request(function() {
                b.P && b.P()
            }) : b.bb()
        },start: function(a) {
            a = this;
            u(a);
            a.Gb = J();
            za.push(a);
            I.xa || (I.xa = 1, C.animeframe.request(function() {
                a.P && a.P()
            }))
        },bb: function() {
            za = [];
            C.animeframe.cancel(I.xa);
            I.xa = B
        },stop: function() {
            this.emit("stop");
            this.bb()
        }}, g);
    function Sb(a, b, c) {
        a[b.name] = b.prefix || b.suffix ? b.prefix + c + b.suffix : c
    }
    za = [];
    I.duration = 500;
    function Tb() {
    }
    C.$ = function(a, b, c, d, e) {
        c = "string" == typeof a ? (b || y).querySelectorAll(a) : [a];
        d = new Tb;
        for (e = d.length = c.length; e--; )
            d[e] = c[e];
        return d
    };
    function Z(a, b, c) {
        var d = a.length;
        for (c = Ub(c); d--; )
            c[0] = a[d], b.apply(a, c);
        return a
    }
    function Vb(a, b, c) {
        c = Ub(c);
        c[0] = a[0];
        return b.apply(B, c)
    }
    function Ub(a) {
        var b = [B];
        b.push.apply(b, a);
        return b
    }
    Ja = C.$.Rb = {querySelectorAll: function(a) {
            return this[0].querySelectorAll(a)
        },find: function(a) {
            return C.$(a, this)
        },parent: function() {
            return C.$(zb(this[0]))
        },on: function() {
            return Z(this, s, arguments)
        },off: function() {
            return Z(this, q, arguments)
        },delegate: function(a, b, c, d, e) {
            d = this;
            d.la || (d.la = {});
            e = d.la;
            e[b] || (e[b] = {});
            e = e[b];
            e[a] || (e[a] = []);
            e = e[a];
            return Z(d, function() {
                e.push([c, vb.apply(B, arguments)])
            }, arguments)
        },undelegate: function(a, b, c) {
            var d = this.la;
            if (d && (d = d[b]) && (d = d[a])) {
                a = d.length;
                if (!c) {
                    for (; a--; )
                        c =
                        a, this.off(b, d[c][1]), d.splice(c, 1);
                    return z
                }
                for (; a--; )
                    if (d[a][0] == c)
                        return c = a, this.off(b, d[c][1]), d.splice(c, 1), z
            }
        },show: function() {
            return Z(this, wb)
        },hide: function() {
            return Z(this, xb)
        },hasClass: function() {
            return Vb(this, ob, arguments)
        },addClass: function() {
            return Z(this, pb, arguments)
        },removeClass: function() {
            return Z(this, qb, arguments)
        },toggleClass: function() {
            return Z(this, rb, arguments)
        },css: function() {
            return Z(this, V, arguments)
        },html: function() {
            return Vb(this, U, arguments)
        },val: function() {
            return Vb(this,
            Db, arguments)
        },attr: function() {
            return Vb(this, sb, arguments)
        },removeAttr: function() {
            return Z(this, tb, arguments)
        },append: function() {
            return Z(this, W, arguments)
        },before: function() {
            return Vb(this, mb, arguments)
        },after: function() {
            return Vb(this, Ab, arguments)
        },insertBefore: function() {
            return Vb(this, Bb, arguments)
        },remove: function() {
            return Z(this, Cb, arguments)
        }};
    Oa = Fa || D;
    Pa = Oa.support;
    Qa = D;
    Pa && C.ssease ? Qa = C.ssease : C.ease && (Qa = C.ease);
    Ja.animate = function() {
        this.L || (this.L = []);
        return Z(this, Wb, arguments)
    };
    Ja.stop = function(a, b) {
        a = this;
        if (a.L) {
            for (b = a.L.length; b--; )
                a.L[b].stop();
            a.L = B
        }
        return a
    };
    function Wb(a, b, c, d, e, f, h, r) {
        O(c) && (e = c, c = B);
        O(d) && !e && (e = d, d = B);
        d && (d = Qa[d]);
        r = {duration: c,ease: d,oncomplete: e};
        if (Pa)
            b = new Oa(a, b, r);
        else {
            c = I;
            d = a.style;
            var x;
            a = yb(a);
            h = {};
            for (x in b)
                e = l(b[x]), f = a.getPropertyValue(x), f = !f || "none" == f ? 0 : +l(f)[2], h[x] = {from: f,to: +e[2] || 0,prefix: e[1],suffix: e[3]};
            b = new c(d, h, r)
        }
        this.L.push(b)
    }
    Ba = C.HashQuery = Y({typeCast: function(a, b, c) {
            b = $a(a);
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
            if (b) {
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
            }
        },getHash: function() {
            return this.parseHash(location.hash)
        }});
    function Xb(a) {
        var b = T(a.type);
        b.controls = a.controls ? z : A;
        b.preload = a.preload || "auto";
        b.autoplay = a.autoplay ? z : A;
        b.loop = a.loop ? z : A;
        b.src = a.dir + a.name + "." + a.suffix[0][0];
        return b
    }
    function Yb(a, b) {
        if (w["HTML" + a + "Element"]) {
            a = da(a);
            for (var c = T(a), d = [], e = 0, f = b.length; e < f; e++)
                c.canPlayType(a + "/" + b[e][1]) && d.push(b[e]);
            if (d.length)
                return d
        }
    }
    ya = Y({init: function(a) {
            var b = this, c = a.autoplay, d = a.loop, e = ra, f, h = a.el || y.body;
            a.preload = "auto";
            a.autoplay = a.loop = A;
            "Video" == a.type && (e = sa);
            e = e(a);
            if (b.o = e)
                c && (f = b.c(e, "canplay", function() {
                    b.r(f);
                    b.play()
                })), d && b.loop(z), a.oncanplay && b.c(e, "canplay", a.oncanplay), a.onended && b.c(e, "ended", a.onended), W(h, e)
        },dispose: function() {
            Cb(this.o);
            this._super()
        },getElement: ba("o"),getCurrent: function() {
            return this.o.currentTime
        },getDuration: function() {
            return this.o.duration
        },setCurrent: function(a) {
            this.o.currentTime =
            a
        },loop: function(a, b) {
            b = this;
            b.u && (b.r(b.u), delete b.u);
            a && (b.u = b.c(b.o, "ended", function() {
                b.stop();
                b.play()
            }))
        },play: function() {
            this.o.play()
        },pause: function() {
            this.o.pause()
        },stop: function() {
            this.setCurrent(0);
            this.pause()
        }});
    ra = C.Audio = function(a) {
        a.type = "audio";
        a.suffix = ra.support;
        return Xb(a)
    };
    ra.support = Yb("Audio", [["mp3", "mpeg"], ["wav", "wav"], ["ogg", "ogg"], ["m4a", "mp4"]]);
    v = C.Sound = function(a) {
        a.type = "Audio";
        return new ya(a)
    };
    v.support = ra.support;
    sa = C.Video = function(a) {
        a.type = "video";
        a.suffix = sa.support;
        return Xb(a)
    };
    sa.support = Yb("Video", [["webm", "webm"], ["mp4", "mp4"], ["ogv", "ogg"]]);
    v = C.Movie = function(a) {
        a.type = "Video";
        return new ya(a)
    };
    v.support = sa.support;
    C.Ajax = X(G, {dispose: ea,init: function(a) {
            a = jb(a);
            var b = this, c = a.url, d = a.type || "GET", e = a.query || m, f = b.wa = new XMLHttpRequest;
            b._super();
            "json" == a.dataType && b.ub(a);
            n(b, a);
            a.cache || (e || (e = {}), e["cir" + J()] = "0");
            e && M(e) && (e = encodeURI(bb(e)));
            f.onreadystatechange = function() {
                4 == f.readyState && (200 == f.status ? b.emit("complete", f.responseText, f) : b.emit("error", f))
            };
            "GET" == d && (c = (-1 != c.indexOf("?") ? z : A) ? c + "&" : c + "?", c += e, e = m);
            b.yb = e;
            c = [d, c];
            a.sync && c.push(A);
            f.open.apply(f, c);
            "POST" == d && f.setRequestHeader("Content-Type",
            "application/x-www-form-urlencoded");
            p(b, a)
        },start: function(a) {
            a = this;
            u(a);
            a.wa.send(a.yb)
        },stop: function(a) {
            a = this;
            a.wa.abort();
            a.emit("stop", a.wa)
        },ub: function(a) {
            var b = a.oncomplete, c = a.onerror;
            b && (a.oncomplete = function(a) {
                b(ca(a))
            });
            c && (a.onerror = function(a) {
                c(a)
            })
        }}, g);
    ta = X(G, {init: function(a, b, c) {
            b = this;
            b._super();
            a = a || D;
            c = ib(a.queue) || [];
            n(b, a);
            b.resetQueue(c);
            b.O = S(b, b.O)
        },start: function(a) {
            a = this;
            u(a);
            a.R = A;
            a.Ga()
        },restart: function(a) {
            this.resetQueue(a);
            this.start()
        },stop: function() {
            this.k = B;
            this.emit("stop")
        },pause: function() {
            this.R = z;
            this.emit("pause")
        },resume: function(a) {
            a = this;
            a.R && (a.emit("resume"), a.R = A, a.Ga())
        },resetQueue: function(a, b, c) {
            b = this;
            a && (b.xb = ib(a));
            a = b.k = ib(b.xb);
            for (c in a)
                a[c].resetQueue && a[c].resetQueue();
            b.emit("reset")
        },na: function() {
            this.emit("change",
            this.getQueue())
        },setQueue: function(a) {
            this.k = ib(a);
            this.na()
        },getQueue: function() {
            return ib(this.k)
        },addTask: function(a, b, c) {
            c = this;
            if (!N(b) || b > c.k.length)
                b = c.k.length;
            c.k.splice(b, 0, a);
            c.na()
        },removeTask: function(a, b, c, d) {
            b = this;
            c = 0;
            for (d = b.k.length; c < d; c++)
                if (b.k[c] === a) {
                    b.k.splice(c, 1);
                    b.na();
                    break
                }
        },Ga: function() {
            this.R || this.ma()
        },ya: function(a, b) {
            b = this;
            return a.one && a.start ? (a.one("complete", b.O), S(a, a.start)) : O(a) && a.length ? S(b, a) : function(c) {
                a.call(b);
                c()
            }
        }}, g);
    C.Parallel = C.Async = X(ta, {ma: function(a) {
            a = this;
            if (a.k) {
                if (!a.k.length)
                    return t(a);
                for (a.Ua = a.k.length; !a.R && a.k && a.k[0]; )
                    a.ya(a.k.shift())(a.O)
            }
        },O: function(a) {
            a = this;
            ha(a);
            a.Ua--;
            a.Ua || t(a)
        }});
    C.Serial = C.Sync = X(ta, {ma: function(a) {
            a = this;
            if (a.k && !a.R) {
                if (a.k[0])
                    return a.ya(a.k.shift())(a.O);
                t(a)
            }
        },O: function() {
            ha(this);
            this.ma()
        }});
    C.Anvas = Y({init: function(a, b) {
            b = this;
            b.ba = a.canvas;
            b.ca = b.ba.getContext(a.ctxtype || "2d");
            b.setSize(a)
        },setSize: function(a) {
            a.width && (this.ba.width = a.width);
            a.height && (this.ba.height = a.height)
        },pigment: function(a) {
            var b = this, c = T("canvas"), d;
            if (a.src)
                return d = T("img"), d.onload = function() {
                    c.width = a.width;
                    c.height = a.height;
                    c.getContext("2d").drawImage(d, 0, 0);
                    a.onload.call(b, c, d)
                }, d.src = a.src, Za(a, {image: c,x: a.x || 0,y: a.y || 0});
            a.onload.call(b, c);
            return Za(a, {x: a.x || 0,y: a.y || 0})
        },pigments: function(a, b) {
            function c(a) {
                var c =
                a.onload || Q;
                a.onload = function() {
                    c.apply(a, arguments);
                    f--;
                    0 == f && b.call(d, h)
                };
                h[e] = d.pigment(a);
                f++
            }
            var d = this, e, f = 0, h = {};
            b = b || Q;
            for (e in a)
                c(a[e]);
            return h
        },getCtx: ba("ca"),render: function(a, b) {
            b = this;
            var c = 0, d = a.length, e = b.ca, f = b.ba;
            for (e.clearRect(0, 0, f.width, f.height); c < d; c++)
                if (f = a[c])
                    f.render ? f.render(e, b) : b.draw(f)
        },draw: function(a) {
            this.ca.drawImage(a.image, a.x, a.y)
        },sandboxCtx: function(a, b) {
            b = this.ca;
            b.save();
            a.call(this, b);
            b.restore()
        }}, !!w.HTMLCanvasElement);
    var Zb = "Sun Mon Tue Wed Thu Fri Sat".split(" "), $b = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), ac = "January February March April May June July August September October November December".split(" "), bc = "Jan Feb Mar Apr May June July Aug Sep Oct Nov Dec".split(" "), $ = {d: function(a) {
            return cc($.j(a))
        },j: function(a) {
            return a.getDate()
        },D: function(a) {
            return Zb[a.getDay()]
        },l: function(a) {
            return $b[a.getDay()]
        },F: function(a) {
            return ac[a.getMonth()]
        },M: function(a) {
            return bc[a.getMonth()]
        },
        m: function(a) {
            return cc($.n(a))
        },n: function(a) {
            return a.getMonth() + 1
        },Y: function(a) {
            return a.getFullYear()
        },y: function(a) {
            a = $.Y(a);
            a = m + a;
            return a.slice(a.length - 2)
        },a: function(a) {
            return da($.A(a))
        },A: function(a) {
            return 12 > $.G(a) ? "AM" : "PM"
        },g: function(a) {
            a = $.G(a);
            return 12 == a || 0 == a || 24 == a ? 12 : a % 12
        },G: function(a) {
            return a.getHours()
        },h: function(a) {
            return cc($.g(a))
        },H: function(a) {
            return cc($.G(a))
        },i: function(a) {
            return cc($.I(a))
        },s: function(a) {
            return cc($.S(a))
        },I: function(a) {
            return a.getMinutes()
        },
        S: function(a) {
            return a.getSeconds()
        }}, dc = /%([djDlFMmnYyaAgGhHisIS])/g;
    function cc(a) {
        a = +a;
        10 > a && (a = "0" + a);
        return m + a
    }
    C.DateFactory = Y({make: function(a) {
            return cb(a) ? (a = a.split(/[T:\-\+\/\s]/), new Date(+a[0], a[1] - 1, +a[2], +a[3] || 0, +a[4] || 0, +a[5] || 0)) : L("Date", a) ? a : new Date(a || B)
        },format: function(a, b) {
            b = this.make(b);
            return a.replace(dc, function(a, d) {
                return $[d](b)
            })
        }});
    C.Rollover = Y({init: function(a, b) {
            b = this;
            var c = a.toggleClass || m, d = a.over || Q, e = a.out || Q;
            b.t = a.els;
            b.Cb = function() {
                pb(this, c);
                d()
            };
            b.cb = function() {
                qb(this, c);
                e()
            };
            p(b, a, "attach")
        },dispose: function() {
            this.detach();
            this._super()
        },attach: function() {
            this.V(s)
        },detach: function() {
            this.V(q)
        },V: function(a, b, c) {
            b = this;
            for (c = b.t.length; c--; )
                a(b.t[c], H.SWITCHOVER, b.Cb), a(b.t[c], H.SWITCHOUT, b.cb), a(b.t[c], H.MOUSEOUT, b.cb)
        }});
    Storage = C.Storage = Y({Da: function() {
            return this.Z ? [] : {}
        },init: function(a) {
            this.Z = (a || D).array || A;
            this.reset()
        },set: function(a, b, c) {
            M(a) || (c = {}, c[a] = b, a = c);
            for (c in a)
                this.da[c] = a[c]
        },get: function(a) {
            var b = this.Da(), c = this.da, d;
            if (a)
                return c[a];
            for (d in c)
                b[d] = c[d];
            return b
        },remove: function(a, b) {
            b = this;
            P(b.da[a]) && (b.Z ? b.data.splice(a, 1) : delete b.da[a])
        },reset: function() {
            this.da = this.Da()
        }});
    Aa = Y({init: function(a) {
            this.Z = a.array || A;
            this.Q = a.namespace ? a.namespace + "-" : m;
            this.T = w[a.type + "Storage"]
        },set: function(a, b, c) {
            M(a) || (c = {}, c[a] = b, a = c);
            for (c in a)
                this.T.setItem(this.Q + c, JSON.stringify(a[c]))
        },get: function(a, b) {
            b = this;
            var c = this.Z ? [] : {}, d, e = b.T;
            if (a)
                return ca(e.getItem(b.Q + a));
            for (d in e)
                b.Q ? (a = d.split(b.Q)[1]) && (c[a] = ca(e[d])) : c[d] = ca(e[d]);
            return c
        },remove: function(a, b) {
            b = this;
            a = b.Q + a;
            P(b.T.getItem(a)) && b.T.removeItem(a)
        },reset: function(a, b) {
            a = this;
            if (!a.Q)
                return a.T.clear();
            for (b in a.T)
                a.remove(b)
        }});
    C.LocalStorage = function(a) {
        a = a || {};
        a.type = "local";
        return new Aa(a)
    };
    C.SessionStorage = function(a) {
        a = a || {};
        a.type = "session";
        return new Aa(a)
    };
    C.DragFlick = Y({ua: function(a) {
            return a.changedTouches ? a.changedTouches[0] : a
        },kb: function(a, b, c, d, e) {
            b = this;
            b.f.push(b.c(a.el, H.SWITCHDOWN, function(a) {
                var h = b.ua(a);
                c = h.pageX;
                d = h.pageY;
                e = z;
                fb(a)
            }), b.c(w, H.SWITCHUP, function(f) {
                e && (f = b.ua(f), a.callback({x: f.pageX - c,y: f.pageY - d}), e = A)
            }))
        },nb: function(a) {
            this.kb({el: a.el,callback: function(b) {
                    var c = a.boundary || 0, d = {change: A,top: A,right: A,bottom: A,left: A,amount: b};
                    Math.abs(b.x) > c && (0 < b.x ? d.right = z : 0 > b.x && (d.left = z), d.change = z);
                    Math.abs(b.y) > c && (0 < b.y ? d.bottom =
                    z : 0 > b.y && (d.top = z), d.change = z);
                    a.callback(d)
                }})
        },init: function(a, b) {
            b = this;
            b.f = [];
            a = (b.b = a) || D;
            p(b, a, "attach")
        },attach: function(a, b) {
            function c(b, c, d) {
                a.f.push(a.c(b, c, function(b) {
                    d(a.ua(b))
                }))
            }
            a = this;
            var d = this.b, e = d.el, f = d.start || Q, h = d.move || Q, r = d.end || Q, x = 0, aa = 0;
            d.direction && a.nb({el: e,boundary: d.boundary,callback: d.direction});
            c(e, H.SWITCHDOWN, function(a) {
                b = z;
                x = a.pageX;
                aa = a.pageY;
                f({e: a,move: {x: x,y: aa}})
            });
            c(y, H.SWITCHMOVE, function(a) {
                b && h({e: a,move: {x: a.pageX - x,y: a.pageY - aa}})
            });
            c(y, H.SWITCHUP,
            function(a) {
                b && (r({e: a,move: {x: a.pageX - x,y: a.pageY - aa}}), b = A)
            })
        },detach: function(a) {
            a = this;
            for (var b = a.f, c = b.length; c--; )
                a.r(b[c]);
            a.f = []
        }});
    C.ExternalInterface = function(a) {
        a = a || D;
        return a.android ? new wa(a) : new xa
    };
    wa = X(Ba, {init: function(a) {
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
    xa = X(Ba, {init: function() {
            this.W = {}
        },dispose: function(a, b) {
            a = this;
            for (b in a.W)
                a.removeCallback(b);
            a._super()
        },call: function(a) {
            this.setHash(a)
        },addCallback: function(a, b, c) {
            c = this;
            c.W[a] = function(d) {
                d = c.getHash();
                d.mode == a && b(d.vars)
            };
            s(w, "hashchange", c.W[a])
        },removeCallback: function(a) {
            q(w, "hashchange", this.W[a]);
            delete this.W[a]
        }});
    C.Facebook = Y({includeAPI: function() {
            lb("fb-root") && W(y.body, T("div", {id: "fb-root"}));
            kb("facebook-jssdk", "//connect.facebook.net/ja_JP/all.js#xfbml=1")
        },shareURL: function(a) {
            return "https://www.facebook.com/dialog/feed?app_id=" + a.app_id + "&redirect_uri=" + a.redirect_uri + bb({link: a.link,picture: a.picture,name: a.name,caption: a.caption,description: a.description})
        }});
    C.FPS = Y({qa: 0,wb: 0,u: 0,init: function(a, b) {
            b = this;
            b.ka = b.ta = a.criterion;
            b.Ra = b.Ia(b.ka);
            b.rb = a.enterframe;
            p(b, a)
        },dispose: ea,getCriterion: ba("ka"),getSurver: ba("ta"),getFrameTime: ba("Ra"),enter: function(a) {
            a = this;
            a.rb({criterion: a.ka,surver: a.ta})
        },start: function(a) {
            a = this;
            a.qa = J();
            a.u = setInterval(a.P, a.Ra, a)
        },P: function(a, b) {
            b = a.wb = J();
            a.ta = a.Ia(b - a.qa);
            a.qa = b;
            a.enter()
        },Ia: function(a) {
            return Math.round(1E3 / a)
        },stop: function() {
            clearInterval(this.u)
        }});
    ua = X(G, {init: function(a, b) {
            b = this;
            b._super();
            b.ab = a.srcs;
            b.Ma = [];
            b.f = [];
            n(b, a);
            p(b, a)
        },start: function(a) {
            function b() {
                e++;
                ha(c, e / d);
                if (d == e) {
                    for (d = c.f.length; d--; )
                        c.r(c.f.pop());
                    t(c, c.Ma)
                }
            }
            var c = this, d = 0, e = 0, f = c.ab.length;
            u(c);
            if (!c.sa)
                for (c.sa = z; d < f; d++)
                    a = T(c.eb), a.src = c.ab[d], c.f.push(c.c(a, H.LOAD, b)), c.Ma.push(a), c.Na(a)
        },Na: Q}, g);
    C.ImgLoad = X(ua, {eb: "img"});
    Ca = C.ScriptLoad = X(ua, {eb: "script",Na: function(a) {
            W(ja, a)
        }});
    Sa = function() {
        Ra = z;
        q(w, "load", Sa)
    };
    s(w, "load", Sa);
    C.WindowLoad = X(G, {init: function(a) {
            this._super();
            n(this, a);
            p(this, a)
        },start: function(a, b) {
            a = this;
            u(a);
            a.sa || (a.sa = z, Ra ? t(a) : b = a.c(w, "load", function() {
                a.r(b);
                t(a)
            }))
        }}, g);
    C.Scroll = X(G, {init: function() {
            this._super()
        },dispose: function(a) {
            a = this;
            a.revival();
            clearInterval(a.Za);
            a._super()
        },to: Xa,toTop: Ya,toBottom: function() {
            Xa(y.height)
        },isBottom: function(a) {
            return this.getLimit() - this.getY() <= (a || 0) ? z : A
        },getRatio: function(a) {
            a = a || D;
            var b = a.low || 0, c = a.high || this.getLimit();
            a = (a.now || this.getY()) - b;
            (b = c - b) || (b = a);
            return a / b
        },getY: function(a) {
            a = w.pageYOffset;
            return P(a) ? a : (y.documentElement || y.body.parentNode || y.body).scrollTop
        },getLimit: function() {
            return y.body.scrollHeight -
            w.innerHeight
        },toSmooth: function(a, b, c, d) {
            c = this;
            b = b || Q;
            c.$a || (c.$a = z, N(a) || (a = a.offsetTop), d = y.height - w.innerHeight, a > d && (a = d), c.B = c.getY(), c.Za = setInterval(function(d) {
                d = c.getY();
                d = 0.3 * (a - d) + d;
                if (1 > Math.abs(a - d) || c.B == d)
                    return Xa(a), clearInterval(c.Za), b(a), delete c.$a;
                c.B = d;
                Xa(d)
            }, 50))
        },kill: function(a) {
            a = this;
            a.v || (V(y.body, {overflow: "hidden"}), E && (a.v = a.c(y, H.TOUCHMOVE, fb)))
        },revival: function(a) {
            a = this;
            V(y.body, {overflow: "auto"});
            E && (a.r(a.v), delete a.v)
        }}, g);
    C.Mobile = Y({getZoom: function() {
            return y.body.clientWidth / w.innerWidth
        },isAndroid: function(a) {
            return R(/Android/i, a)
        },isIOS: function(a) {
            return R(/iPhone|iPad|iPod/i, a)
        },isWindows: function(a) {
            return R(/IEMobile/i, a)
        },isFBAPP: function(a) {
            return R(/FBAN/, a)
        },isMobile: function(a) {
            a = this;
            return a.isAndroid() || a.isIOS() || a.isWindows() || a.isFBAPP()
        },hideAddress: function() {
            function a() {
                0 == w.pageYOffset && Ya()
            }
            function b() {
                setTimeout(a, 100)
            }
            this.c(w, H.LOAD, b, A);
            this.c(w, "orientationchange", b, A)
        }});
    Ia = R(/opera/i) ? "opera" : R(/msie/i) ? "ie" : R(/chrome/i) ? "chrome" : R(/safari/i) ? "safari" : R(/gecko/i) ? "gecko" : "ather";
    C.PC = Y({isChrome: function() {
            return "chrome" == Ia
        },isSafari: function() {
            return "safari" == Ia
        },isGecko: function() {
            return "gecko" == Ia
        },isOpera: function() {
            return "opera" == Ia
        },isIE: function() {
            return "ie" == Ia
        }});
    C.Orientation = Y({init: function(a, b) {
            b = this;
            b.b = a;
            b.f = [];
            b.Ta = {portrait: z,landscape: A};
            b.La = {portrait: A,landscape: z};
            b.attach()
        },get: function(a) {
            a = this;
            return N(w.orientation) ? 90 != Math.abs(w.orientation) ? a.Ta : a.La : w.innerWidth < w.innerHeight ? a.Ta : a.La
        },emit: function(a) {
            a = this;
            if (a.get().portrait)
                return a.b.portrait();
            a.b.landscape()
        },attach: function(a, b, c) {
            b = this;
            c = S(b, b.emit);
            b.f.push(b.c(w, H.LOAD, c), b.c(w, "orientationchange", c), b.c(w, H.RESIZE, c))
        },detach: function(a, b) {
            a = this;
            for (b = a.f.length; b--; )
                a.r(a.f[b]);
            a.f = []
        }}, "onorientationchange" in w);
    C.Modal = X(C.Scroll, {Ba: function(a) {
            a = this;
            for (var b = a.f.length; b--; )
                a.r(a.f[b]);
            a.f = []
        },init: function(a, b, c) {
            b = this;
            a = a || D;
            b._super();
            b.b = a;
            c = {display: "none",position: "absolute"};
            b.f = [];
            b.C = T("div", {"class": "cir-modal-bg"});
            V(b.C, Za({zIndex: "9998",top: 0,left: 0,width: "100%",height: "200%"}, c));
            W(y.body, b.C);
            b.q = T("div", {"class": "cir-modal-content"});
            V(b.q, Za({zIndex: "9999",top: "50%",left: "50%"}, c));
            W(y.body, b.q);
            p(b, a, "open")
        },dispose: function(a) {
            a = this;
            a.close();
            Cb(a.C);
            Cb(a.q);
            a._super()
        },open: function(a,
        b) {
            b = this;
            b.kill();
            V(b.C, {top: y.body.scrollTop});
            wb(b.C);
            b.inner(a)
        },close: function(a) {
            a = this;
            a.Ba();
            U(a.q, m);
            xb(a.q);
            xb(a.C);
            a.revival()
        },inner: function(a, b, c, d, e) {
            b = this;
            b.Ba();
            a = a || b.b.html;
            U(b.q, a);
            wb(b.q);
            c = yb(b.q);
            V(b.q, {marginTop: y.body.scrollTop - l(c.height)[2] / 2,marginLeft: -(l(c.width)[2] / 2)});
            b.b.bgClose && b.c(b.C, H.CLICK, S(b, b.close));
            if (b.b.closeSelector) {
                d = nb(b.b.closeSelector, b.q);
                for (e = d.length; e--; )
                    b.f.push(b.c(d[e], H.CLICK, S(b, b.close)))
            }
        }});
    va = Y({init: function(a) {
            this.b = a;
            this.attach()
        },attach: function(a) {
            a = this;
            a.detach();
            a.lb = a.c(w, a.b.e, a.b.callback)
        },detach: function() {
            this.r(this.lb)
        }});
    Da = C.DeviceOrientation = function(a) {
        a.e = "deviceorientation";
        return va(a)
    };
    Da.support = "ondeviceorientation" in w;
    Ea = C.DeviceMotion = function(a) {
        a.e = "devicemotion";
        return va(a)
    };
    Ea.support = "ondevicemotion" in w;
    Da.support ? (Ta = Da, Ua = function(a) {
        return a
    }) : Ea.support && (Ta = Ea, Ua = function(a) {
        return a.rotationRate
    });
    C.DeviceShake = Y({Hb: {x: "gamma",y: "beta",z: "alpha"},init: function(a, b) {
            b = this;
            b.Ya = new Ta;
            b.b = a;
            b.attach()
        },attach: function(a, b) {
            a = this;
            var c = a.b, d = a.Hb[c.direction];
            a.Ya.attach(function(a) {
                a = Ua(a);
                b || (b = a);
                Math.abs(a[d] - b[d]) > c.limit && (b = B, c.callback(a), setTimeout(function() {
                }, c.waittime))
            })
        },detach: function() {
            this.Ya.detach()
        }}, Ta ? z : A);
    C.FontImg = Y({init: function(a, b) {
            a = a || D;
            this.Eb = (b = a.type) ? b + "_" : m;
            this.Db = a.tag || "span"
        },make: function(a) {
            a = (m + a).split(m);
            for (var b = this.Db, c = m, d = a.length; d--; )
                c = "<" + b + ' class="font_' + this.Eb + a[d] + '"></' + b + ">" + c;
            return c
        }});
    C.PreRender = X(G, {init: function(a, b) {
            b = this;
            b._super();
            b.t = a.els;
            b.Ja = a.guesslimit || 30;
            b.Pa = a.looptime || 100;
            b.vb = b.Pa + (a.loopblur || 20);
            n(b, a);
            p(b, a)
        },dispose: function() {
            clearInterval(this.u);
            this._super()
        },start: function(a, b, c, d, e) {
            a = this;
            c = J();
            u(a);
            for (b = a.t.length; b--; )
                wb(a.t[b]);
            a.u = setInterval(function() {
                d = J();
                e = d - c;
                c = d;
                if (e < a.vb && (a.Ja--, 1 > a.Ja)) {
                    clearInterval(a.u);
                    for (b = a.t.length; b--; )
                        xb(a.t[b]);
                    t(a)
                }
            }, a.Pa, a)
        }}, g);
    C.Router = Y({init: function(a, b) {
            b = this;
            b.b = a;
            a.hashchange && (s(w, "hashchange", function() {
                b.emit(location.hash)
            }), a.target || (a.target = location.hash));
            p(b, a)
        },start: function() {
            this.emit(this.b.target)
        },emit: function(a) {
            var b, c = this.b, d = c.action;
            if (c.noregex && d[a])
                return d[a](a);
            for (b in d)
                if (a.match(b))
                    d[b](b)
        }});
    C.ServerMeta = Y({init: function(a, b) {
            a = a || D;
            b = a.callback || Q;
            Va ? b(Va) : Va = ec(function() {
                Wa = z;
                b(Va)
            })
        },date: function(a) {
            return ec(function(b) {
                a(b.getResponseHeader("Date"))
            })
        },connection: function() {
            return fc("Connection")
        },contentLength: function() {
            return fc("Content-Length")
        },lastModified: function() {
            return fc("Last-Modified")
        },server: function() {
            return fc("Server")
        },contentType: function() {
            return fc("Content-Type")
        },acceptRanges: function() {
            return fc("Accept-Ranges")
        },keepAlive: function() {
            return fc("Keep-Alive")
        }});
    function fc(a) {
        return Wa ? Va.getResponseHeader(a) : A
    }
    function ec(a) {
        var b = new XMLHttpRequest;
        b.onload = function() {
            a(b)
        };
        b.open("HEAD", location.href + "?update" + J() + "=1");
        b.send(B);
        return b
    }
    C.Surrogate = Y({init: function(a) {
            this.mb = a.delay;
            this.aa = a.callback
        },dispose: function() {
            this.clear();
            this._super()
        },request: function(a, b) {
            b = this;
            b.U = a;
            b.clear();
            b.va = setTimeout(b.flush, b.mb, b)
        },flush: function(a) {
            a = a || this;
            a.aa(a.U)
        },clear: function() {
            clearTimeout(this.va)
        }});
    C.Throttle = Y({init: function(a) {
            this.Fb = a.waittime;
            this.aa = a.callback
        },dispose: function() {
            this.unlock();
            this._super()
        },request: function(a, b) {
            b = this;
            b.Oa ? b.U = a : (b.aa(a), b.lock(), b.va = setTimeout(function() {
                b.U && (b.aa(b.U), b.U = B);
                b.unlock()
            }, b.Fb, b))
        },lock: function() {
            this.Oa = z
        },unlock: function(a) {
            a = a || this;
            a.Oa = A;
            clearTimeout(a.va)
        }});
    C.Twitter = Y({includeAPI: function() {
            kb("twitter-wjs", "//platform.twitter.com/widgets.js")
        },shareURL: function(a) {
            var b = a.name, c = a.hash, b = b ? " \u300c" + b + "\u300d" : m, c = c ? " " + c : m;
            return "https://twitter.com/intent/tweet?" + bb({url: a.redirect_uri,text: (a.caption || m) + b + c})
        }});
    C.XML = Y({init: function(a) {
            U(this.o = T("div"), a.data)
        },$: function(a) {
            return this.o.querySelector(a)
        },$$: function(a) {
            return nb(a, this.o)
        }});
    Ga = C.Model = X(G, {ga: function(a, b, c, d) {
            d = this;
            d.emit(a, d.p.get());
            b && d.emit(a + ":" + b, c)
        },init: function(a, b) {
            b = this;
            a = a || D;
            b._super();
            var c, d = a.defaults || b.defaults || D, e = a.events || b.events;
            b.gb = a.validate || b.validate || {};
            b.p = a.store || b.store || new C.Storage;
            for (c in d)
                b.set(c, d[c]);
            for (c in e)
                b.on(c, e[c])
        },set: function(a, b, c, d) {
            c = this;
            M(a) || (d = {}, d[a] = b, a = d);
            c.pa = c.p.get();
            for (d in a) {
                b = a[d];
                if (c.gb[d] && !c.gb[d](d, b))
                    return c.ga("fail", d, b);
                c.p.set(d, b);
                c.emit(H.CHANGE + ":" + d, b)
            }
            c.emit(H.CHANGE, c.p.get())
        },
        prev: function(a) {
            return !a ? this.pa : this.pa[a]
        },get: function(a) {
            return this.p.get(a)
        },remove: function(a, b) {
            b = this;
            if (a) {
                var c = b.p.get(a), d = b.p.remove(a);
                b.ga("remove", a, c);
                return d
            }
        },reset: function() {
            this.p.reset();
            this.ga("reset")
        }}, g);
    C.View = Y({init: function(a, b) {
            b = this;
            a = a ? gb(b, a) : gb(b, b, {});
            b.el = C.$(a.el || b.el || T("div"));
            b.attach();
            a.init && b.init()
        },dispose: function() {
            this.detach();
            this._super()
        },V: function(a, b, c, d, e, f) {
            b = this;
            f = b.events;
            for (c in f)
                for (d in e = "&" == c ? b.el : b.el.find(c), f[c])
                    e[a](d, b[f[c][d]])
        },attach: function() {
            this.V("on")
        },detach: function() {
            this.V("off")
        }});
    C.Ollection = X(Ga, {init: function(a, b) {
            b = this;
            a = a || {};
            a.defaults = a.defaults || b.defaults || [];
            a.store = a.store || b.store || new Storage({array: z});
            b._super(a)
        },set: function(a, b, c, d) {
            c = this;
            M(a) || (d = {}, d[a] = b, a = d);
            c.pa = c.p.get();
            for (d in a)
                return b = a[d], N(+d) && (c.p.set(a, b), c.emit(H.CHANGE, b, +d, c.p.get())), c.ga("fail", a, b)
        },add: function(a, b) {
            b = this.p.get().length;
            this.set(b, a);
            return b
        },each: function(a, b, c) {
            c = this.get();
            for (b in c)
                a.apply(this, [c[b], b, c])
        },map: function(a, b, c, d) {
            b = this;
            d = b.get();
            for (c in d)
                b.set(c,
                a.apply(b, [d[c], c, d]))
        }});
    C.Validate = Y({N: function(a, b, c, d) {
            return a(c) ? z : !!this.displayError(b, d)
        },init: function(a, b) {
            b = this;
            a = a || {};
            b.Ob = a.level;
            gb(b, b, a)
        },displayError: function(a, b, c) {
            b = "Validate Error:" + a + " is " + b + ".";
            c = this.Qb;
            if ("log" == c)
                console.log(b);
            else {
                if ("error" == c)
                    throw Error(b);
                "off" != c && console.warn(b)
            }
        },isObject: function(a, b) {
            return this.N(M, a, b, "Object")
        },isNumber: function(a, b) {
            return this.N(N, a, b, "Number")
        },isString: function(a, b) {
            return this.N(cb, a, b, "String")
        },isFunction: function(a, b) {
            return this.N(O, a,
            b, "Function")
        },isBoolean: function(a, b) {
            return this.N(db, a, b, "Boolean")
        },isArray: function(a, b) {
            return this.N(eb, a, b, "Array")
        }});
    C.LimitText = Y({Qa: 8,ia: function(a, b) {
            b = this;
            U(b.J, a);
            W(zb(b.o), b.J)
        },ja: function() {
            U(this.J, m);
            Cb(this.J)
        },init: function(a, b) {
            b = this;
            var c = b.o = a.el;
            yb(c);
            var c = b.J = T(c.tagName, {"class": sb(c, "class"),style: sb(c, "style")}), d = b.Ca = yb(c);
            b.hb = a.width;
            b.Ka = a.height;
            b.ia(0);
            P(a.width) || (b.hb = +l(d.width)[2]);
            P(a.height) || (b.Ka = +l(d.height)[2]);
            V(c, {height: "auto"});
            b.tb = +l(d.fontSize)[2];
            b.ja()
        },fa: function(a) {
            a = this;
            if (+l(a.Ca.width)[2] <= a.hb && +l(a.Ca.height)[2] <= a.Ka)
                return z
        },getLimitFontSize: function(a) {
            a =
            m + a;
            var b = this, c = b.tb, d;
            V(b.J, {fontSize: c});
            b.ia(a);
            b.fa() ? d = c : hb(b.Qa - 1, c, function(a) {
                V(b.J, {fontSize: a});
                return b.fa()
            }, function(a) {
                d = a
            });
            b.ja();
            d < b.Qa && (d = 0);
            return d
        },getLimitTextLength: function(a) {
            a = m + a;
            var b = this, c = a.length, d;
            b.ia(a);
            b.fa() ? d = c : hb(0, c, function(c) {
                U(b.J, a.slice(0, c));
                return b.fa()
            }, function(a) {
                d = a
            });
            b.ja();
            return d
        }});
    C.require = function(a, b, c) {
        var d = gc(a), e = c ? hc : ic;
        if (!d && (!b || oa[b]))
            throw Error("not found " + a);
        b && (oa[b] = z);
        return e(d, a, b, c)
    };
    function hc(a, b, c, d) {
        if (a)
            return d(a);
        new Ca({srcs: [c],oncomplete: function() {
                a = gc(b);
                if (!a)
                    throw Error("not found " + b);
                d(a)
            }})
    }
    function ic(a, b, c) {
        if (a)
            return a;
        new C.Ajax({url: c,sync: z,oncomplete: function(a) {
                var b = T("script");
                W(ja, b);
                b.text = a
            }});
        if (a = gc(b))
            return a;
        throw Error("not found " + b);
    }
    function gc(a) {
        a = a.split(".");
        for (var b = 0, c = a.length, d = w; b < c; b++) {
            if (!d[a[b]])
                return;
            d = d[a[b]]
        }
        return d
    }
    C.namespace = function(a, b) {
        for (var c = a.split("."), d = 0, e = c.length, f = w, h; d < e && f[c[d]]; d++)
            h = f, f = f[c[d]];
        for (; d < e; d++)
            h = f, f = f[c[d]] = {};
        if (b) {
            for (d in f)
                P(b[d]) || (b[d] = f[d]);
            f = h[c[e - 1]] = b
        }
        return f
    };
    Ha = C.Calc = Y({init: function(a) {
            a = a || D;
            a = a.fewdigit || 8;
            for (var b = "1"; a--; )
                b += "0";
            this.Ha = +b
        },w: function(a) {
            return a * this.Ha
        },X: function(a) {
            return a / this.Ha
        },addition: function(a, b) {
            return this.X(this.w(a) + this.w(b))
        },subtraction: function(a, b) {
            return this.X(this.w(a) - this.w(b))
        },multiplication: function(a, b, c) {
            c = this;
            return c.X(c.X(c.w(a) * c.w(b)))
        },division: function(a, b) {
            return this.w(a) / this.w(b)
        }});
    C.LowPassFilter = X(Ha, {init: function(a) {
            a = a || D;
            this._super(a);
            this.setBefore(a.before || 0);
            this.setRate(a.rate)
        },setBefore: function(a) {
            this.B = a
        },getBefore: ba("B"),setRate: function(a) {
            a = a || 0.1;
            if (1 <= a)
                throw Error("rate < 1.");
            this.Va = a;
            this.zb = this.subtraction(1, a)
        },getRate: ba("Va"),forecast: function(a, b) {
            b = this;
            b.B = b.B * b.zb + a * b.Va;
            return b.B
        }});
    var jc = /<%-(.+?)%>|<%=(.+?)%>|<%(.+?)%>|$/g, kc = /\\|'|\r|\n|\t/g, lc = {"'": "'","\\": "\\","\r": "r","\n": "n","\t": "t"};
    v = C.template = function(a, b, c, d) {
        d = "__r+=";
        a.replace(jc, function(b, f, h, r, x) {
            d += "'" + a.slice(c, x).replace(kc, function(a) {
                return "\\" + lc[a]
            }) + "'+";
            f ? d += "((__t=" + f + ")==null?'':C.util.escape(__t))+" : h ? d += "((__t=" + h + ")==null?'':__t)+" : r && (d += "'';" + r + ";__r+=");
            c = x + b.length;
            return b
        });
        return (new Function("a", "var __t,__r='';with(a){" + d + "''}return __r"))(b || {})
    };
    v.fetch = function(a, b) {
        return C.template(U(lb(a)), b)
    };
    C.BackForwardCache = Y({kill: function(a) {
            a = this;
            a.v || (a.v = a.c(w, "unload", preventDefault))
        },revival: function(a) {
            a = this;
            a.v && (a.r(a.v), delete a.v)
        }});
    var mc = C.SocketReqRes = X(G, {init: function(a) {
            a = jb(a);
            var b = this;
            b.Wa = mc.K++;
            b.Xa = function(a, d) {
                b.Wa === a && (b.stop(), b.emit("complete", d))
            };
            b.Fa = mc.responseEvent;
            b.sb = mc.requestEvent;
            b.ra = a.socket || mc.socket || (mc.socket = io.connect());
            delete a.socket;
            b.ra.on(b.Fa, b.Xa);
            b._super();
            n(b, a);
            b.b = a;
            p(b, a)
        },start: function() {
            u(this);
            this.ra.emit(this.sb, this.Wa, this.b)
        },stop: function() {
            this.emit("stop");
            this.ra.removeListener(this.Fa, this.Xa)
        }}, g);
    mc.K = 0;
    mc.responseEvent = "CIRSocket-Response";
    mc.requestEvent = "CIRSocket-Request";
    C.Forin = Y({init: function(a) {
            this.ib = a
        },map: function(a) {
            var b = this.ib, c, d = eb(b) ? [] : {};
            for (c in b)
                d[c] = a.call(this, b[c]);
            return d
        },filter: function(a) {
            var b = this.ib, c, d, e = eb(b), f = e ? [] : {};
            for (c in b)
                d = b[c], a(d) && (e ? f.push(d) : f[c] = d);
            return f
        }});
    C.Parallax = X(C.Scroll, {dispose: function() {
            this.detach();
            this._super()
        },init: function(a) {
            var b = this;
            b._super();
            b.Aa = b.getY();
            b.Bb = a.switcher;
            n(b, a);
            b.za = function() {
                b.Ab(b.getY())
            };
            p(b, a, "attach")
        },attach: function() {
            C.$(w).on("scroll", this.za)
        },detach: function() {
            C.$(w).off("scroll", this.za)
        },Ab: function(a) {
            var b = this.Aa, c = this.Bb(a, b), d = 0, e;
            if (eb(c))
                for (e = c.length; d < e; d++)
                    this.emit(c[d], a, b);
            else
                cb(c) && this.emit(c, a, b);
            this.Aa = a
        }});
    Ja && (Tb.prototype = Ja);
}();
