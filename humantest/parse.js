 // cir.js v0.16.1 | (c) 2013 Atsushi Mizoue.
(function() {
    function aa(a) {
        return function() {
            return this[a]
        }
    }
    C = {};
    function g(a) {
        return "cubic-bezier(" + a + ")"
    }
    function ba(a, b) {
        for (var c = h("p"), d = k, e, f = l, m = a.length, n, p = RegExp("^(.*?)" + a[0] + "$", "i"); m--; )
            if (q(c.style[a[m]])) {
                d = r;
                (e = a[m].match(p)[1]) ? (f = ca(e), b = f + b, f = "-" + f + "-") : b = ca(b);
                c = t(da("head"), h("style", {type: "text/css"}));
                n = c.sheet;
                break
            }
        return {pb: b,rb: d,prefix: e,nb: f,sheet: n}
    }
    function ea(a) {
        return JSON.parse(a)
    }
    function ca(a) {
        return a.toLowerCase()
    }
    function v(a) {
        return (l + (a || l)).match(/^(.*?)(-?[0-9\.]+)(.*)$/)
    }
    function y(a, b) {
        var c, d;
        for (c in b)
            if (d = c.match(/^on(.+)$/))
                a.on(d[1], z(a, b[c]))
    }
    function fa() {
        this.stop();
        this._super()
    }
    function A(a) {
        this.fire("complete", a)
    }
    function B() {
        this.fire("start")
    }
    function ga(a) {
        this.fire("progress", a)
    }
    function ha(a) {
        if (a) {
            var b = this.ha, c = b[a];
            delete b[a];
            D(c[0], c[1], c[2])
        }
    }
    function ia(a, b, c, d, e) {
        d = this;
        d.ha || (d.ha = {});
        e = ++d.Bb;
        E(a, b, c);
        d.ha[e] = [a, b, c];
        return e
    }
    var F = window, G = document, r = !0, k = !1, H = null, l = "", I = {}, ja = void 0, la = ka(), ma = g("0.19,1,0.22,1"), J = 1.70158, na = k, oa = /0/.test(function() {
        0
    }) ? /\b_super\b/ : /.*/, pa, K, qa, ra, sa, ta, ua, va, wa, L, xa, ya, za, Aa, Ba, Ca, Da, Ea, Fa, Ga, Ha, Ia, Ja;
    Date.now || (Date.now = function() {
        return +new Date
    });
    function M() {
        return Date.now()
    }
    function Ka(a) {
        F.scrollTo(0, a)
    }
    function La() {
        Ka(1)
    }
    function Ma(a, b, c) {
        for (c in b)
            a[c] = b[c];
        return a
    }
    function Na(a, b) {
        b = l + a;
        return b.match(/^{.*}$/) ? ea(b) : b.match(/^[0-9\.]+$/) ? +b : "true" === b ? r : "false" === b ? k : a
    }
    function Oa(a) {
        var b = [];
        b.push.apply(b, a);
        return b
    }
    function N(a, b, c) {
        return a.split(b).join(c)
    }
    function escape(a) {
        return N(N(N(N(N(a, "&", "&amp;"), '"', "&quot;"), "'", "&#039;"), "<", "&lt;"), ">", "&gt;")
    }
    function unescape(a) {
        return N(N(N(N(N(a, "&gt;", ">"), "&lt;", "<"), "&#039;", "'"), "&quot;", '"'), "&amp;", "&")
    }
    function Pa(a, b, c, d) {
        b = c = l;
        for (d in a)
            a[d] && (c += b + d + "=" + encodeURIComponent(a[d]), b = "&");
        return c
    }
    function O(a, b) {
        return Object.prototype.toString.call(b) == "[object " + a + "]" ? r : k
    }
    function P(a) {
        return O("Object", a)
    }
    function Q(a) {
        return O("Number", a)
    }
    function Qa(a) {
        return O("String", a)
    }
    function Ra(a) {
        return O("Function", a)
    }
    function Sa(a) {
        return O("Boolean", a)
    }
    function Ta(a) {
        return O("Array", a)
    }
    function q(a) {
        return a === ja ? k : r
    }
    function ka() {
        return "ontouchstart" in F
    }
    function R() {
    }
    function Ua(a) {
        a.preventDefault();
        return k
    }
    function U(a, b) {
        b = b || navigator.userAgent;
        return !!b.match(a)
    }
    function z(a, b) {
        return function() {
            return b.apply(a, arguments)
        }
    }
    function Va(a, b, c, d) {
        b = b || a;
        c = c || b;
        for (d in b)
            Ra(b[d]) && (c[d] = z(a, b[d]));
        Ma(a, c);
        return c
    }
    function Wa(a, b, c, d) {
        for (var e; r; ) {
            e = ~~((a + b) / 2);
            if (a == e)
                return d(e);
            c(e) ? a = e : b = e
        }
    }
    function Xa(a) {
        return a.toString().match(/^\s*function.*\((.+)\)/)
    }
    function Ya(a) {
        return Ta(a) ? a.slice(0) : a
    }
    C.util = {pageTop: La,override: Ma,replaceAll: N,template: function(a, b, c, d) {
            for (c in b)
                d = b[c], a = N(N(a, "<%= " + c + " %>", escape(d)), "<%- " + c + " %>", d);
            return a
        },escape: escape,unescape: unescape,windowOpen: function(a, b, c, d, e) {
            e = [];
            for (d in c)
                Sa(c[d]) && (c[d] === r ? c[d] = "yes" : c[d] === k && (c[d] = "no")), e.push(d + "=" + c[d]);
            return F.open(a, b, e.join(","))
        },typeCast: Na,makeQueryString: Pa,parseQueryString: function(a, b, c, d, e) {
            a = a.replace(/^[\#\?]/, l);
            b = a.split("&");
            c = b.length;
            for (e = {}; c--; )
                d = b[c].split("="), e[d[0]] = Na(decodeURIComponent(d[1]));
            return e
        },is: O,isObject: P,isNumber: Q,isString: Qa,isFunction: Ra,isBoolean: Sa,isArray: Ta,isDefined: q,isTouchable: ka,nullFunction: R,abstraceFunction: function() {
            throw Error("call abstract-function.");
        },eventPrevent: Ua,eventStop: function(a) {
            a.stopPropagation();
            return k
        },checkUserAgent: U,proxy: z,owner: Va,binarySearch: function(a) {
            a = a || I;
            return Wa(a.low || 0, a.high || 0, a.compare || R, a.end || R)
        },toArray: Oa,copyArray: Ya,hasDeclaredArgument: Xa};
    function da(a) {
        return G.querySelector(a)
    }
    function Za(a, b) {
        return Oa(b.querySelectorAll(a))
    }
    function $a(a, b) {
        return 0 <= a.className.indexOf(b) ? r : k
    }
    function ab(a, b, c, d) {
        $a(a, b) || (c = l, (d = a.className) && (c = " "), a.className = d + c + b)
    }
    function bb(a, b, c, d, e) {
        if ($a(a, b)) {
            d = [];
            c = a.className.split(" ");
            for (e = c.length; e--; )
                b != c[e] && d.push(c[e]);
            a.className = d.join(" ")
        }
    }
    function cb(a, b) {
        if ($a(a, b))
            return bb(a, b);
        ab(a, b)
    }
    function db(a, b, c, d) {
        if (P(b)) {
            for (d in b)
                b[d] && a.setAttribute(d, b[d]);
            return r
        }
        return c || c == l ? a.setAttribute(b, c) : a.getAttribute(b)
    }
    function eb(a, b) {
        a.removeAttribute(b)
    }
    function h(a, b, c) {
        c = G.createElement(a);
        b && db(c, b);
        return c
    }
    function fb(a) {
        var b = h("div");
        V(b, a);
        return Oa(b.children)
    }
    function E(a, b, c) {
        a.addEventListener(b, c, k)
    }
    function D(a, b, c) {
        a.removeEventListener(b, c, k)
    }
    function gb(a, b, c, d) {
        function e(a) {
            var c = a.target;
            $a(c, b) && d.apply(c, arguments)
        }
        E(a, c, e);
        return e
    }
    function hb(a) {
        a.style.display = "block"
    }
    function ib(a) {
        a.style.display = "none"
    }
    function W(a, b, c, d, e, f) {
        c = a.style;
        for (d in b)
            e = d, f = b[d], Q(f) && (f += "px"), c[e] = f
    }
    function jb(a) {
        return G.defaultView.getComputedStyle(a, H)
    }
    function kb(a) {
        return a.parentNode
    }
    function t(a, b) {
        return a.appendChild(b)
    }
    function lb(a, b) {
        return kb(a).insertBefore(b, a)
    }
    function mb(a, b) {
        return kb(a).insertBefore(b, a.nextSibling)
    }
    function nb(a, b) {
        return a.insertBefore(b, a.firstChild)
    }
    function ob(a) {
        return kb(a).removeChild(a)
    }
    function V(a, b) {
        if (!q(b))
            return a.innerHTML;
        a.innerHTML = b
    }
    function pb(a, b) {
        if (!q(b))
            return a.value;
        a.value = b
    }
    C.dom = {win: F,doc: G,$: da,$$: function(a) {
            return Za(a, G)
        },$child: function(a, b) {
            return b.querySelector(a)
        },$$child: Za,$id: function(a) {
            return G.getElementById(a)
        },on: E,off: D,delegate: gb,create: h,show: hb,hide: ib,hasClass: $a,addClass: ab,removeClass: bb,toggleClass: cb,css: W,computedStyle: jb,append: t,parent: kb,before: lb,after: mb,insertBefore: nb,remove: ob,attr: db,removeAttr: eb,html: V,val: pb,reflow: function(a) {
            a = a || G.body;
            a.offsetTop
        },toElement: function(a) {
            return fb(a)[0]
        },toElements: fb};
    C.lass = function() {
    };
    C.lass.extend = function(a) {
        function b() {
            !na && this.init && this.init.apply(this, arguments)
        }
        function c(c) {
            var e = a[c], n = d.prototype[c];
            Ra(e) && Ra(n) && oa.test(e) ? b.prototype[c] = function() {
                var a, b = this._super;
                this._super = n;
                a = e.apply(this, arguments);
                this._super = b;
                return a
            } : b.prototype[c] = e
        }
        var d = this, e;
        na = r;
        b.prototype = new d;
        na = k;
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
        return X(C.Base, a, b)
    }
    function Z(a, b) {
        return X(C.Observer, a, b)
    }
    C.Base = X(ja, {Bb: 0,dispose: function(a) {
            a = this;
            var b = 0, c = a.ha;
            for (b in c)
                D.apply(H, c[b]);
            for (b in a)
                (c = a[b]) && c.dispose && c.dispose();
            a.__proto__ = H;
            for (b in a)
                a[b] = H, delete a[b];
            return H
        },k: ia,contract: ia,J: ha,uncontract: ha});
    C.Observer = Y({init: function() {
            this.va = {}
        },on: function(a, b, c, d) {
            d = this.va;
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
            var c = this.va, d = c[a], e;
            if (!b)
                return delete c[a];
            if (d)
                for (e = d.length; e--; )
                    if (b == d[e])
                        return d.splice(e, 1), 0 == d.length && delete c[a], r;
            return k
        },fire: function(a, b) {
            var c = this.va[a], d, e, f, m;
            if (c) {
                d = Oa(arguments).slice(1);
                f = 0;
                for (m = c.length; f < m; f++)
                    (e = c[f]) && e.apply(H, d)
            }
        }});
    K = C.Event = Y({SWITCHCLICK: la ? "touchstart" : "click",SWITCHDOWN: la ? "touchstart" : "mousedown",SWITCHMOVE: la ? "touchmove" : "mousemove",SWITCHUP: la ? "touchend" : "mouseup",SWITCHOVER: la ? "touchstart" : "mouseover",SWITCHOUT: la ? "touchend" : "mouseout",LOAD: "load",CHANGE: "change",CLICK: "click",MOUSEDOWN: "mousedown",MOUSEMOVE: "mousemove",MOUSEUP: "mouseup",MOUSEOVER: "mouseover",MOUSEOUT: "mouseout",TOUCHSTART: "touchstart",TOUCHMOVE: "touchmove",TOUCHEND: "touchend",RESIZE: "resize"});
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
            return c * (a /= d) * a * ((J + 1) * a - J) + b
        },outBack: function(a, b, c, d) {
            return c * ((a = a / d - 1) * a * ((J + 1) * a + J) + 1) + b
        },inOutBack: function(a, b, c, d) {
            return 1 > (a /= d / 2) ? c / 2 * a * a * (((J *= 1.525) + 1) * a - J) + b : c / 2 * ((a -= 2) * a * (((J *= 1.525) + 1) * a + J) + 2) + b
        }};
    C.ssease = {linear: "linear",inCubic: g("0.55,0.055,0.675,0.19"),outCubic: g("0.215,0.61,0.355,1"),inOutCubic: g("0.645,0.045,0.355,1"),inQuart: g("0.895,0.03,0.685,0.22"),outQuart: g("0.165,0.84,0.44,1"),inOutQuart: g("0.77,0,0.175,1"),inQuint: g("0.755,0.05,0.855,0.06"),outQuint: g("0.23,1,0.32,1"),inOutQuint: g("0.86,0,0.07,1"),inSine: g("0.47,0,0.745,0.715"),outSine: g("0.39,0.575,0.565,1"),inOutSine: g("0.445,0.05,0.55,0.95"),inExpo: g("0.95,0.05,0.795,0.035"),outExpo: g("0.19,1,0.22,1"),inOutExpo: g("1,0,0,1"),
        inCirc: g("0.6,0.04,0.98,0.335"),outCirc: g("0.075,0.82,0.165,1"),inOutCirc: g("0.785,0.135,0.15,0.86"),inQuad: g("0.55,0.085,0.68,0.53"),outQuad: g("0.25,0.46,0.45,0.94"),inOutQuad: g("0.455,0.03,0.515,0.955"),inBack: [g("0.6,0,0.735,0.045"), g("0.6,-0.28,0.735,0.045")],outBack: [g("0.175,0.885,0.32,1"), g("0.175,0.885,0.32,1.275")],inOutBack: [g("0.68,0,0.265,1"), g("0.68,-0.55,0.265,1.55")]};
    (function() {
        var a = ba(["animation", "webkitAnimation"], "Animation"), b = a.prefix, c = a.nb, d = a.pb, e = a.sheet, f = C.SSAnime = Z({$a: function() {
                var a = this.b, b = this.Db;
                D(a, d + "End", b);
                D(a, "animationend", b)
            },init: function(a, b, d, u) {
                u = this;
                u._super();
                y(u, d);
                d = d || I;
                u.wa = d.oncomplete || R;
                u.b = a;
                f.id++;
                u.u = "ciranim" + f.id;
                a = d.duration || f.duration;
                var w = d.ease || ma, x, s = {};
                for (x in b)
                    s[x] = b[x], Q(s[x]) && (s[x] += "px");
                u.Ub = s;
                s = N(N(JSON.stringify(s), '"', l), ",", ";");
                e.insertRule("@" + c + "keyframes " + u.u + "{to" + s + "}", e.cssRules.length);
                Ta(w) || (w = [w]);
                b = u.u;
                x = 0;
                for (var s = w.length, S = l; x < s; x++)
                    S += c + "animation:" + b + " " + a + "ms " + w[x] + " 0s 1 normal both;";
                e.insertRule("." + b + "{" + S + "}", e.cssRules.length);
                d.manual || u.start()
            },dispose: fa,p: A,q: B,start: function(a, c) {
                function f(d) {
                    var w = e.cssRules, p = w.length, s;
                    a.$a();
                    if ("webkit" == b) {
                        for (; p--; )
                            s = w[p].name || (l + w[p].selectorText).split(".")[1], s == a.u && e.deleteRule(p);
                        bb(c, a.u);
                        W(c, a.Ub)
                    }
                    a.p(d)
                }
                a = this;
                c = a.b;
                a.q();
                a.Db = f;
                E(c, d + "End", f);
                E(c, "animationend", f);
                ab(c, a.u)
            },stop: function() {
                var a = {};
                this.fire("stop");
                a[c + "animation-play-state"] = "paused";
                W(this.b, a);
                this.$a()
            }}, a.rb);
        f.id = 0;
        f.duration = 500
    })();
    (function() {
        var a = ba(["transitionProperty", "webkitTransitionProperty"], "Transition"), b = a.nb, c = a.pb, d = a.sheet, e = C.SSTrans = Z({init: function(a, c, n, p) {
                p = this;
                p._super();
                y(p, n);
                n = n || I;
                e.id++;
                p.u = "cirtrans" + e.id;
                var u = [];
                Ma({}, c);
                var w, x = n.duration || e.duration, s = n.ease || ma;
                Ta(s) || (s = [s]);
                for (w in c)
                    u.push(w);
                w = 0;
                for (var S = s.length, T = l, T = T + (b + "transition-property:" + u.join(" ") + ";" + b + "transition-duration:" + x + "ms;"); w < S; w++)
                    T += b + "transition-timing-function:" + s[w] + ";";
                d.insertRule("." + p.u + "{" + T + "}", d.cssRules.length);
                p.b = a;
                p.V = c;
                n.manual || p.start()
            },dispose: fa,p: A,q: B,start: function(a) {
                a = this;
                a.q();
                a.ia = function(b) {
                    a.ba();
                    setTimeout(function() {
                        a.Sa || a.p(b)
                    }, 1)
                };
                E(a.b, c + "End", a.ia);
                E(a.b, "transitionend", a.ia);
                ab(a.b, a.u);
                W(a.b, a.V)
            },ba: function(a) {
                a = this;
                var b = d.cssRules, e = b.length, p;
                D(a.b, c + "End", a.ia);
                D(a.b, "transitionend", a.ia);
                for (bb(a.b, a.u); e--; )
                    if (p = b[e].name || (l + b[e].selectorText).split(".")[1], p == a.u) {
                        d.deleteRule(e);
                        break
                    }
            },Sa: k,stop: function() {
                this.Sa = r;
                this.fire("stop");
                this.ba()
            }}, a.rb);
        e.id = 0;
        e.duration =
        500
    })();
    pa = {request: function(a) {
            return this.ub.call(F, a)
        },cancel: function(a) {
            return this.xb.call(F, a)
        }};
    Ca = ["webkit", "moz", "o", "ms"];
    if (F.requestAnimationFrame)
        Ea = F.requestAnimationFrame, Fa = F.cancelAnimationFrame;
    else {
        for (Da = Ca.length; Da--; )
            if (F[Ca[Da] + "RequestAnimationFrame"]) {
                Ea = F[Ca[Da] + "RequestAnimationFrame"];
                Fa = F[Ca[Da] + "CancelAnimationFrame"];
                break
            }
        Ea || (Ea = function(a) {
            return setTimeout(a, 1E3 / C.AnimeFrame.fps)
        }, Fa = function(a) {
            clearTimeout(a)
        })
    }
    pa.ub = Ea;
    pa.xb = Fa;
    pa = C.AnimeFrame = Y(pa);
    pa.fps = 30;
    C.animeframe = new pa;
    L = C.Tweener = Z({init: function(a, b, c, d, e, f) {
            f = this;
            f._super();
            y(f, c);
            c = c || I;
            f.kb = a;
            f.V = [];
            for (d in b)
                e = b[d], e.name = d, e.Qb = e.to - e.from, e.prefix = e.prefix || l, e.suffix = e.suffix || (e.suffix === l ? l : "px"), f.V.push(e);
            f.Na = c.duration || L.duration;
            f.Cb = c.ease || f.sb;
            c.manual || f.start()
        },dispose: fa,sb: function(a, b, c, d) {
            return c * (-Math.pow(2, -10 * a / d) + 1) + b
        },p: A,R: function() {
            for (var a = this, b = L.na, c, d = M(), e, f = b.length, m, n; f--; )
                if (c = b[f], m = c.V.length, e = d - c.Ob, e < c.Na)
                    for (; m--; )
                        n = c.V[m], L.fb(c.kb, n, c.Cb(e, n.from, n.Qb, c.Na));
                else {
                    for (; m--; )
                        n = c.V[m], L.fb(c.kb, n, n.to);
                    c.p();
                    b.splice(f, 1)
                }
            b.length ? C.animeframe.request(function() {
                a.R && a.R()
            }) : a.ba()
        },q: B,start: function(a) {
            a = this;
            a.q();
            a.Ob = M();
            L.na.push(a);
            L.Ia || (L.Ia = 1, C.animeframe.request(function() {
                a.R && a.R()
            }))
        },ba: function() {
            L.na = [];
            C.animeframe.cancel(L.Ia);
            L.Ia = H
        },stop: function() {
            this.fire("stop");
            this.ba()
        }});
    L.fb = function(a, b, c) {
        a[b.name] = b.prefix || b.suffix ? b.prefix + c + b.suffix : c
    };
    L.na = [];
    L.duration = 500;
    function qb() {
    }
    C.$ = function(a, b, c, d, e) {
        c = "string" == typeof a ? (b || G).querySelectorAll(a) : [a];
        d = new qb;
        for (e = d.length = c.length; e--; )
            d[e] = c[e];
        return d
    };
    function $(a, b, c) {
        var d = a.length;
        for (c = rb(c); d--; )
            c[0] = a[d], b.apply(a, c);
        return a
    }
    function sb(a, b, c) {
        c = rb(c);
        c[0] = a[0];
        return b.apply(H, c)
    }
    function rb(a) {
        var b = [H];
        b.push.apply(b, a);
        return b
    }
    Ba = C.$.Xb = {querySelectorAll: function(a) {
            return this[0].querySelectorAll(a)
        },find: function(a) {
            return C.$(a, this)
        },parent: function() {
            return C.$(kb(this[0]))
        },on: function() {
            return $(this, E, arguments)
        },off: function() {
            return $(this, D, arguments)
        },delegate: function(a, b, c) {
            var d;
            this.ra || (this.ra = {});
            d = this.ra;
            d[b] || (d[b] = {});
            d = d[b];
            d[a] || (d[a] = []);
            d = d[a];
            return $(this, function() {
                var a = gb.apply(H, arguments);
                d.push([c, a])
            }, arguments)
        },undelegate: function(a, b, c) {
            var d = this.ra;
            if (!d)
                return k;
            d = d[b];
            if (!d)
                return k;
            d = d[a];
            if (!d)
                return k;
            a = d.length;
            if (c) {
                for (; a--; )
                    if (d[a][0] === c)
                        return this.off(b, d[a][1]), d.splice(a, 1), r;
                return k
            }
            for (; a--; )
                this.off(b, d[a][1]), d.splice(a, 1);
            return r
        },show: function() {
            return $(this, hb)
        },hide: function() {
            return $(this, ib)
        },hasClass: function() {
            return sb(this, $a, arguments)
        },addClass: function() {
            return $(this, ab, arguments)
        },removeClass: function() {
            return $(this, bb, arguments)
        },toggleClass: function() {
            return $(this, cb, arguments)
        },css: function() {
            return $(this, W, arguments)
        },html: function() {
            return sb(this,
            V, arguments)
        },val: function() {
            return sb(this, pb, arguments)
        },attr: function() {
            return sb(this, db, arguments)
        },removeAttr: function() {
            return $(this, eb, arguments)
        },append: function() {
            return $(this, t, arguments)
        },before: function() {
            return sb(this, lb, arguments)
        },after: function() {
            return sb(this, mb, arguments)
        },insertBefore: function() {
            return sb(this, nb, arguments)
        },remove: function() {
            return $(this, ob, arguments)
        }};
    (function() {
        function a(a, f, m, n, p) {
            Ra(m) && (p = m, m = H);
            Ra(n) && !p && (p = n, n = H);
            n && (n = d[n]);
            m = {duration: m,ease: n,oncomplete: p};
            if (c)
                f = new b(a, f, m);
            else {
                n = C.Tweener;
                p = a.style;
                var u;
                a = jb(a);
                var w, x, s = {};
                for (u in f)
                    w = v(f[u]), x = a.getPropertyValue(u), x = !x || "none" == x ? 0 : +v(x)[2], s[u] = {from: x,to: +w[2] || 0,prefix: w[1],suffix: w[3]};
                f = new n(p, s, m)
            }
            this.P.push(f)
        }
        var b = C.SSAnime || I, c = b.support, d = I;
        c && C.cssease ? d = C.cssease : C.ease && (d = C.ease);
        Ba.animate = function() {
            this.P || (this.P = []);
            return $(this, a, arguments)
        };
        Ba.stop =
        function(a, b) {
            a = this;
            if (a.P) {
                for (b = a.P.length; b--; )
                    a.P[b].stop();
                a.P = H
            }
            return a
        }
    })();
    C.HashQuery = Y({typeCast: function(a) {
            var b = Na(a);
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
                return k;
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
    function tb(a) {
        var b = h(a.type);
        b.controls = a.controls ? r : k;
        b.preload = a.preload || "auto";
        b.autoplay = a.autoplay ? r : k;
        b.loop = a.loop ? r : k;
        b.src = a.dir + a.name + "." + a.suffix[0][0];
        return b
    }
    function wb(a, b) {
        if (!F["HTML" + a + "Element"])
            return k;
        a = ca(a);
        for (var c = h(a), d = [], e = 0, f = b.length; e < f; e++)
            c.canPlayType(a + "/" + b[e][1]) && d.push(b[e]);
        return d.length ? d : k
    }
    wa = Y({init: function(a) {
            var b = this, c = a.autoplay, d = a.loop, e, f = a.el || G.body;
            a.preload = "auto";
            a.autoplay = a.loop = k;
            switch (a.type) {
                case "Audio":
                    e = C.Audio(a);
                    break;
                default:
                    e = C.Video(a)
            }
            if (b.b = e) {
                if (c) {
                    var m;
                    m = b.k(e, "canplay", function() {
                        b.J(m);
                        b.play()
                    })
                }
                d && b.loop(r);
                a.oncanplay && b.k(e, "canplay", a.oncanplay);
                a.onended && b.k(e, "ended", a.onended);
                t(f, e)
            }
        },dispose: function() {
            ob(this.b);
            this._super()
        },getElement: aa("b"),getCurrent: function() {
            return this.b.currentTime
        },getDuration: function() {
            return this.b.duration
        },
        setCurrent: function(a) {
            this.b.currentTime = a
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
    C.Audio = function(a) {
        a.type = "audio";
        a.suffix = C.Audio.support;
        return tb(a)
    };
    C.Audio.support = wb("Audio", [["mp3", "mpeg"], ["wav", "wav"], ["ogg", "ogg"], ["m4a", "mp4"]]);
    C.Sound = function(a) {
        a.type = "Audio";
        return new wa(a)
    };
    C.Sound.support = C.Audio.support;
    C.Video = function(a) {
        a.type = "video";
        a.suffix = C.Video.support;
        return tb(a)
    };
    C.Video.support = wb("Video", [["webm", "webm"], ["mp4", "mp4"], ["ogv", "ogg"]]);
    C.Movie = function(a) {
        a.type = "Video";
        return new wa(a)
    };
    C.Movie.support = C.Video.support;
    C.Ajax = Z({dispose: function() {
            this.stop();
            this._super()
        },init: function(a) {
            a = Ma({}, a);
            var b = this, c = a.url, d = a.type || "GET", e = l, f = b.Ha = new XMLHttpRequest;
            b._super();
            "json" == a.dataType && b.Gb(a);
            y(b, a);
            a.cache || b.wb(a);
            a.query && (e = b.za(a));
            f.onreadystatechange = function() {
                if (4 == f.readyState) {
                    if (200 == f.status)
                        return b.fire("complete", f.responseText, f);
                    b.fire("error", f)
                }
            };
            "GET" == d && (c = (-1 != c.indexOf("?") ? r : k) ? c + "&" : c + "?", c += e, e = l);
            this.za = e;
            f.open(d, c);
            "POST" == d && f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            a.manual || b.start()
        },q: B,start: function() {
            this.q();
            this.Ha.send(this.za)
        },stop: function() {
            this.Ha.abort();
            this.fire("stop", this.Ha)
        },za: function(a) {
            a = a.query;
            P(a) && (a = encodeURI(Pa(a)));
            return a
        },wb: function(a) {
            a.query || (a.query = {});
            a.query["cir" + M()] = "0"
        },Gb: function(a) {
            var b = a.oncomplete, c = a.onerror;
            b && (a.oncomplete = function(a) {
                b(ea(a))
            });
            c && (a.onerror = function(a) {
                c(a)
            })
        }});
    sa = C.Progress = Y({ma: 0,ta: 0,O: 0,t: function(a, b, c) {
            b = this;
            q(a) && b.K.push(a);
            b.O = b.ma / b.Ga;
            1 < b.O && (b.O = 1);
            b.ab(b.O);
            b.ta && (c = Error("miss"));
            if (b.ma == b.Ga || b.ta)
                b.wa(c, b.K), b.wa = b.ab = R
        },init: function(a, b, c) {
            b = this;
            c = a.waits;
            Ta(c) && (c = c.length);
            b.Ga = c;
            b.wa = a.oncomplete;
            b.ab = a.onprogress || R;
            b.K = []
        },getProgress: aa("O"),pass: function(a) {
            this.ma++;
            this.t(a)
        },miss: function(a) {
            this.ta++;
            this.t(a)
        },exit: function(a, b) {
            b = this;
            b.ma = b.Ga;
            b.t(a)
        }});
    qa = Z({init: function(a) {
            this._super();
            a = a || I;
            var b = Ya(a.queue) || [];
            y(this, a);
            this.resetQueue(b);
            this.Q = z(this, this.Q)
        },q: B,start: function() {
            this.q();
            this.U = k;
            this.Oa()
        },restart: function(a) {
            this.resetQueue(a);
            this.start()
        },stop: function() {
            this.o = H;
            this.fire("stop")
        },pause: function() {
            this.U = r;
            this.fire("pause")
        },resume: function() {
            this.U && (this.fire("resume"), this.U = k, this.Oa())
        },resetQueue: function(a) {
            a && (this.Jb = Ya(a));
            a = this.o = Ya(this.Jb);
            for (var b in a)
                a[b].resetQueue && a[b].resetQueue();
            this.fire("reset")
        },
        ua: function() {
            this.fire("change", this.getQueue())
        },setQueue: function(a) {
            this.o = Ya(a);
            this.ua()
        },getQueue: function() {
            return Ya(this.o)
        },addTask: function(a, b) {
            if (!Q(b) || b > this.o.length)
                b = this.o.length;
            this.o.splice(b, 0, a);
            this.ua()
        },removeTask: function(a) {
            for (var b = 0, c = this.o.length; b < c; b++)
                if (this.o[b] === a) {
                    this.o.splice(b, 1);
                    this.ua();
                    break
                }
        },Oa: function() {
            this.U || this.sa()
        },Ja: function(a) {
            var b = this;
            return a.one && a.start ? (a.one("complete", z(b, b.Q)), z(a, a.start)) : Xa(a) ? z(b, a) : function(c) {
                a.call(b);
                c()
            }
        }});
    C.Parallel = C.Async = X(qa, {p: A,sa: function() {
            if (this.o) {
                if (!this.o.length)
                    return this.p();
                for (this.cb = this.o.length; !this.U && this.o && this.o[0]; )
                    this.Ja(this.o.shift())(this.Q)
            }
        },Z: ga,Q: function() {
            this.Z();
            this.cb--;
            this.cb || this.p()
        }});
    C.Serial = C.Sync = X(qa, {p: A,sa: function() {
            if (this.o && !this.U) {
                if (this.o[0])
                    return this.Ja(this.o.shift())(this.Q);
                this.p()
            }
        },Z: ga,Q: function() {
            this.Z();
            this.sa()
        }});
    C.Anvas = Y({init: function(a, b) {
            b = this;
            b.ea = a.canvas;
            b.yb = b.ea.getContext("2d");
            b.setSize(a)
        },setSize: function(a) {
            a.width && (this.ea.width = a.width);
            a.height && (this.ea.height = a.height)
        },pigment: function(a) {
            var b = this, c = h("canvas"), d = h("img");
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
                var c = a.onload || R;
                a.onload = function(a, e) {
                    c(a, e);
                    f--;
                    0 == f && b.call(d,
                    m)
                };
                m[e] = d.pigment(a);
                f++
            }
            var d = this, e, f = 0, m = {};
            b = b || R;
            for (e in a)
                c(a[e]);
            return m
        },draw: function(a) {
            var b = 0, c = a.length, d = this.yb, e = this.ea;
            for (d.clearRect(0, 0, e.width, e.height); b < c; b++)
                (e = a[b]) && d.drawImage(e.image, e.x, e.y)
        }}, !!F.HTMLCanvasElement);
    (function() {
        function a(a) {
            a = +a;
            10 > a && (a = "0" + a);
            return l + a
        }
        var b = "Sun Mon Tue Wed Thu Fri Sat".split(" "), c = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), d = "January February March April May June July August September October November December".split(" "), e = "Jan Feb Mar Apr May June July Aug Sep Oct Nov Dec".split(" "), f = {d: function(b) {
                return a(f.j(b))
            },j: function(a) {
                return a.getDate()
            },D: function(a) {
                return b[a.getDay()]
            },l: function(a) {
                return c[a.getDay()]
            },F: function(a) {
                return d[a.getMonth()]
            },
            M: function(a) {
                return e[a.getMonth()]
            },m: function(b) {
                return a(f.n(b))
            },n: function(a) {
                return a.getMonth() + 1
            },Y: function(a) {
                return a.getFullYear()
            },y: function(a) {
                a = f.Y(a);
                a = l + a;
                return a.slice(a.length - 2)
            },a: function(a) {
                return ca(f.A(a))
            },A: function(a) {
                return 12 > f.G(a) ? "AM" : "PM"
            },g: function(a) {
                a = f.G(a);
                return 12 == a || 0 == a || 24 == a ? 12 : a % 12
            },G: function(a) {
                return a.getHours()
            },h: function(b) {
                return a(f.g(b))
            },H: function(b) {
                return a(f.G(b))
            },i: function(b) {
                return a(f.I(b))
            },s: function(b) {
                return a(f.S(b))
            },I: function(a) {
                return a.getMinutes()
            },
            S: function(a) {
                return a.getSeconds()
            }}, m = /%([djDlFMmnYyaAgGhHisIS])/g;
        C.DateFactory = Y({make: function(a) {
                switch (r) {
                    case Qa(a):
                        return a = a.split(/[T:\-\+\/\s]/), new Date(+a[0], a[1] - 1, +a[2], +a[3] || 0, +a[4] || 0, +a[5] || 0);
                    case Q(a):
                        return new Date(a);
                    case O("Date", a):
                        return a
                }
                return new Date
            },format: function(a, b) {
                b = this.make(b);
                return a.replace(m, function(a, c) {
                    return f[c](b)
                })
            }})
    })();
    C.Rollover = Y({init: function(a, b) {
            b = this;
            var c = a.toggleClass || l, d = a.over || R, e = a.out || R;
            b.B = a.els;
            b.Kb = function() {
                ab(b, c);
                d()
            };
            b.jb = function() {
                bb(b, c);
                e()
            };
            a.manual || b.attach()
        },dispose: function() {
            this.detach();
            this._super()
        },attach: function() {
            this.X(E)
        },detach: function() {
            this.X(D)
        },X: function(a, b, c) {
            b = this;
            for (c = b.B.length; c--; )
                a(b.B[c], K.SWITCHOVER, b.Kb), a(b.B[c], K.SWITCHOUT, b.jb), a(b.B[c], K.MOUSEOUT, b.jb)
        }});
    C.DataStore = Y({fa: function() {
            return !this.ca ? {} : []
        },init: function(a) {
            a = a || I;
            this.ca = a.array || k;
            this.reset()
        },set: function(a, b) {
            var c;
            P(a) || (c = {}, c[a] = b, a = c);
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
    xa = Y({fa: function() {
            return !this.ca ? {} : []
        },init: function(a) {
            this.ca = a.array || k;
            this.T = a.namespace ? a.namespace + "-" : l;
            this.W = F[a.type + "Storage"]
        },set: function(a, b) {
            var c;
            P(a) || (c = {}, c[a] = b, a = c);
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
        return new xa(a)
    };
    C.SessionStorage = function(a) {
        a = a || {};
        a.type = "session";
        return new xa(a)
    };
    C.DragFlick = Y({Da: function(a) {
            return a.changedTouches ? a.changedTouches[0] : a
        },tb: function(a) {
            var b = this, c, d, e = k;
            b.f.push(b.k(a.el, K.SWITCHDOWN, function(a) {
                var m = b.Da(a);
                c = m.pageX;
                d = m.pageY;
                e = r;
                Ua(a)
            }), b.k(F, K.SWITCHUP, function(f) {
                e && (f = b.Da(f), a.callback({x: f.pageX - c,y: f.pageY - d}), e = k)
            }))
        },Ab: function(a) {
            this.tb({el: a.el,callback: function(b) {
                    var c = a.boundary || 0, d = {change: k,top: k,right: k,bottom: k,left: k,amount: b};
                    Math.abs(b.x) > c && (0 < b.x ? d.right = r : 0 > b.x && (d.left = r), d.change = r);
                    Math.abs(b.y) > c && (0 < b.y ?
                    d.bottom = r : 0 > b.y && (d.top = r), d.change = r);
                    a.callback(d)
                }})
        },init: function(a, b) {
            b = this;
            b.f = [];
            a = (b.c = a) || I;
            a.manual || b.attach()
        },attach: function() {
            function a(a, c, d) {
                b.f.push(b.k(a, c, function(a) {
                    d(b.Da(a))
                }))
            }
            var b = this, c = this.c, d = c.el, e = c.start || R, f = c.move || R, m = c.end || R, n = k, p = 0, u = 0;
            c.direction && b.Ab({el: d,boundary: c.boundary,callback: c.direction});
            a(d, K.SWITCHDOWN, function(a) {
                n = r;
                p = a.pageX;
                u = a.pageY;
                e({e: a,move: {x: p,y: u}})
            });
            a(G, K.SWITCHMOVE, function(a) {
                n && f({e: a,move: {x: a.pageX - p,y: a.pageY - u}})
            });
            a(G,
            K.SWITCHUP, function(a) {
                n && (m({e: a,move: {x: a.pageX - p,y: a.pageY - u}}), n = k)
            })
        },detach: function(a) {
            a = this;
            for (var b = a.f, c = b.length; c--; )
                a.J(b[c]);
            a.f = []
        }});
    C.ExternalInterface = function(a) {
        a = a || I;
        return a.android ? new ua(a) : new va
    };
    ua = X(C.HashQuery, {init: function(a) {
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
    va = X(C.HashQuery, {init: function() {
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
            E(F, "hashchange", c.aa[a])
        },removeCallback: function(a) {
            D(F, "hashchange", this.aa[a]);
            delete this.aa[a]
        }});
    C.Facebook = Y({shareURL: function(a) {
            return "https://www.facebook.com/dialog/feed?app_id=" + a.app_id + "&redirect_uri=" + a.redirect_uri + Pa({link: a.link,picture: a.picture,name: a.name,caption: a.caption,description: a.description})
        }});
    C.FPS = Y({ya: 0,Ib: 0,C: 0,init: function(a, b) {
            b = this;
            b.qa = b.Ca = a.criterion;
            b.Za = b.Pa(b.qa);
            b.Eb = a.enterframe;
            a.manual || b.start()
        },dispose: fa,getCriterion: aa("qa"),getSurver: aa("Ca"),getFrameTime: aa("Za"),enter: function(a) {
            a = this;
            a.Eb({criterion: a.qa,surver: a.Ca})
        },start: function(a) {
            a = this;
            a.ya = M();
            a.C = setInterval(a.R, a.Za, a)
        },R: function(a, b) {
            b = a.Ib = M();
            a.Ca = a.Pa(b - a.ya);
            a.ya = b;
            a.enter()
        },Pa: function(a) {
            return Math.round(1E3 / a)
        },stop: function() {
            clearInterval(this.C)
        }});
    ra = Z({Ea: l,p: A,Z: ga,init: function(a, b) {
            b = this;
            b._super();
            b.Aa = a.srcs;
            b.Ua = [];
            b.f = [];
            b.O = new sa({waits: b.Aa,onprogress: function(a) {
                    b.Z(a)
                },oncomplete: function() {
                    for (var a = b.f.length; a--; )
                        b.J(b.f[a]);
                    b.f = [];
                    b.p(b.Ua)
                }});
            y(b, a);
            a.manual || b.start()
        },q: B,start: function() {
            function a() {
                b.O.pass()
            }
            var b = this, c, d = 0, e = b.Aa.length;
            b.q();
            if (!b.Ba)
                for (b.Ba = r; d < e; d++)
                    c = h(b.Ea), c.src = b.Aa[d], b.f.push(b.k(c, K.LOAD, a)), b.Ua.push(c), b.Va(c)
        },Va: R});
    C.ImgLoad = X(ra, {Ea: "img"});
    C.ScriptLoad = X(ra, {Ea: "script",Va: function(a) {
            t(G.body, a)
        }});
    Ha = function() {
        Ga = r;
        D(F, K.LOAD, Ha)
    };
    E(F, K.LOAD, Ha);
    C.WindowLoad = Z({init: function(a) {
            this._super();
            y(this, a);
            a.manual || this.start()
        },p: A,q: B,start: function() {
            var a = this, b;
            a.q();
            a.Ba || (a.Ba = r, Ga ? a.p() : b = a.k(F, K.LOAD, function() {
                a.J(b);
                a.p()
            }))
        }});
    ya = C.Mobile = Y({getZoom: function() {
            return G.body.clientWidth / F.innerWidth
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
                0 == F.pageYOffset && La()
            }
            function b() {
                setTimeout(a, 100)
            }
            this.k(F, K.LOAD, b, k);
            this.k(F, "orientationchange", b, k)
        }});
    C.mobile = new ya;
    Aa = U(/opera/i) ? "opera" : U(/msie/i) ? "ie" : U(/chrome/i) ? "chrome" : U(/safari/i) ? "safari" : U(/gecko/i) ? "gecko" : "ather";
    za = C.PC = Y({isChrome: function() {
            return "chrome" == Aa
        },isSafari: function() {
            return "safari" == Aa
        },isGecko: function() {
            return "gecko" == Aa
        },isOpera: function() {
            return "opera" == Aa
        },isIE: function() {
            return "ie" == Aa
        }});
    C.pc = new za;
    C.Orientation = Y({init: function(a, b) {
            b = this;
            b.c = a;
            b.f = [];
            b.bb = {portrait: r,landscape: k};
            b.Ta = {portrait: k,landscape: r};
            b.attach()
        },get: function(a) {
            a = this;
            return Q(F.orientation) ? 90 != Math.abs(F.orientation) ? a.bb : a.Ta : F.innerWidth < F.innerHeight ? a.bb : a.Ta
        },fire: function(a) {
            a = this;
            if (a.get().portrait)
                return a.c.portrait();
            a.c.landscape()
        },attach: function(a, b) {
            b = this;
            var c = z(b, b.fire);
            b.f.push(b.k(F, K.LOAD, c), b.k(F, "orientationchange", c), b.k(F, K.RESIZE, c))
        },detach: function(a) {
            a = this;
            for (var b = a.f.length; b--; )
                a.J(a.f[b]);
            a.f = []
        }}, "onorientationchange" in F);
    C.Modal = Y({La: function(a) {
            a = this;
            for (var b = a.f.length; b--; )
                a.J(a.f[b]);
            a.f = []
        },init: function(a, b, c) {
            b = this;
            a = a || I;
            b.c = a;
            c = {display: "none",position: "absolute"};
            b.eb = new C.Scroll;
            b.f = [];
            b.L = h("div", {"class": "cir-modal-bg"});
            W(b.L, Ma({"z-index": "9998",top: 0,left: 0,width: "100%",height: "200%"}, c));
            t(G.body, b.L);
            b.v = h("div", {"class": "cir-modal-content"});
            W(b.v, Ma({"z-index": "9999",top: "50%",left: "50%"}, c));
            t(G.body, b.v);
            a.manual || b.open()
        },dispose: function(a) {
            a = this;
            a.close();
            ob(a.L);
            ob(a.v);
            a._super()
        },
        open: function(a, b) {
            b = this;
            b.eb.kill();
            W(b.L, {top: G.body.scrollTop});
            hb(b.L);
            b.inner(a)
        },close: function(a) {
            a = this;
            a.La();
            V(a.v, l);
            ib(a.v);
            ib(a.L);
            a.eb.revival()
        },inner: function(a, b, c, d, e) {
            b = this;
            b.La();
            a = a || b.c.html;
            V(b.v, a);
            hb(b.v);
            c = jb(b.v);
            W(b.v, {"margin-top": G.body.scrollTop - v(c.height)[2] / 2,"margin-left": -(v(c.width)[2] / 2)});
            b.c.bgClose && b.k(b.L, K.CLICK, z(b, b.close));
            if (b.c.closeSelector) {
                d = Za(b.c.closeSelector, b.v);
                for (e = d.length; e--; )
                    b.f.push(b.k(d[e], K.CLICK, z(b, b.close)))
            }
        }});
    ta = Y({init: function(a) {
            this.c = a;
            this.attach()
        },attach: function(a) {
            a = this;
            a.detach();
            a.vb = a.k(F, a.c.e, a.c.callback)
        },detach: function() {
            this.J(this.vb)
        }});
    C.DeviceOrientation = function(a) {
        a.e = "deviceorientation";
        return ta(a)
    };
    C.DeviceOrientation.support = "ondeviceorientation" in F;
    C.DeviceMotion = function(a) {
        a.e = "devicemotion";
        return ta(a)
    };
    C.DeviceMotion.support = "ondevicemotion" in F;
    C.DeviceOrientation.support ? (Ia = C.DeviceOrientation, Ja = function(a) {
        return a
    }) : C.DeviceMotion.support && (Ia = C.DeviceMotion, Ja = function(a) {
        return a.rotationRate
    });
    C.DeviceShake = Y({Pb: {x: "gamma",y: "beta",z: "alpha"},init: function(a, b) {
            b = this;
            b.gb = new Ia;
            b.c = a;
            b.attach()
        },attach: function() {
            var a, b = this.c, c = this.Pb[b.direction];
            this.gb.attach(function(d) {
                d = Ja(d);
                a || (a = d);
                Math.abs(d[c] - a[c]) > b.limit && (a = H, b.callback(d), setTimeout(function() {
                }, b.waittime))
            })
        },detach: function() {
            this.gb.detach()
        }}, Ia ? r : k);
    C.FontImg = Y({init: function(a, b) {
            a = a || I;
            this.Mb = (b = a.type) ? b + "_" : l;
            this.Lb = a.tag || "span"
        },make: function(a) {
            a = (l + a).split(l);
            for (var b = this.Lb, c = l, d = a.length; d--; )
                c = "<" + b + ' class="font_' + this.Mb + a[d] + '"></' + b + ">" + c;
            return c
        }});
    C.PreRender = Z({init: function(a, b) {
            b = this;
            b._super();
            b.B = a.els;
            b.Qa = a.guesslimit || 30;
            b.Xa = a.looptime || 100;
            b.Hb = b.Xa + (a.loopblur || 20);
            y(b, a);
            a.manual || b.start()
        },dispose: function() {
            clearInterval(this.C);
            this._super()
        },p: A,q: B,start: function() {
            var a, b = this, c = M();
            b.q();
            for (a = b.B.length; a--; )
                hb(b.B[a]);
            b.C = setInterval(function() {
                var a = M(), e = a - c;
                c = a;
                if (e < b.Hb && (b.Qa--, 1 > b.Qa)) {
                    clearInterval(b.C);
                    for (a = b.B.length; a--; )
                        ib(b.B[a]);
                    b.p()
                }
            }, b.Xa, b)
        }});
    C.Router = Y({init: function(a) {
            var b = this;
            b.c = a;
            a.hashchange && (E(F, "hashchange", function() {
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
    (function() {
        function a(a) {
            return d ? c.getResponseHeader(a) : k
        }
        function b(a) {
            var b = new XMLHttpRequest;
            b.onload = function() {
                a(b)
            };
            b.open("HEAD", location.href + "?update" + M() + "=1");
            b.send(H);
            return b
        }
        var c, d = k;
        C.ServerMeta = Y({init: function(a) {
                a = a || I;
                var f = a.callback || R;
                c ? f(c) : c = b(function() {
                    d = r;
                    f(c)
                })
            },date: function(a) {
                return b(function(b) {
                    a(b.getResponseHeader("Date"))
                })
            },connection: function() {
                return a("Connection")
            },contentLength: function() {
                return a("Content-Length")
            },lastModified: function() {
                return a("Last-Modified")
            },
            server: function() {
                return a("Server")
            },contentType: function() {
                return a("Content-Type")
            },acceptRanges: function() {
                return a("Accept-Ranges")
            },keepAlive: function() {
                return a("Keep-Alive")
            }})
    })();
    C.Surrogate = Y({init: function(a) {
            this.zb = a.delay;
            this.da = a.callback
        },dispose: function() {
            this.clear();
            this._super()
        },request: function(a, b) {
            b = this;
            b.K = a;
            b.clear();
            b.Fa = setTimeout(b.flush, b.zb, b)
        },flush: function(a) {
            a = a || this;
            a.da(a.K)
        },clear: function() {
            clearTimeout(this.Fa)
        }});
    C.Throttle = Y({init: function(a) {
            this.Nb = a.waittime;
            this.da = a.callback
        },dispose: function() {
            this.unlock();
            this._super()
        },request: function(a, b) {
            b = this;
            b.Wa ? b.K = a : (b.da(a), b.lock(), b.Fa = setTimeout(function() {
                b.K && (b.da(b.K), b.K = H);
                b.unlock()
            }, b.Nb, b))
        },lock: function() {
            this.Wa = r
        },unlock: function(a) {
            a = a || this;
            a.Wa = k;
            clearTimeout(a.Fa)
        }});
    C.Timer = function(a) {
        function b() {
            s = M();
            var a = f - (s - x) / 1E3;
            0 > a && (a = 0);
            T = c(a);
            p(T);
            s > S ? (ub.stop(), u()) : vb = setTimeout(b, n)
        }
        function c(a) {
            var b;
            b = (l + a).split(".");
            a = b[0];
            b = b[1] ? b[1] : l;
            a = d({qb: a,ob: w.Sb});
            b = d({qb: b,ob: w.Rb,Tb: r});
            return a + "." + b
        }
        function d(a) {
            var b = l + a.qb, c = a.ob, d = c - b.length;
            return !a.Tb ? -1 < d ? e(d, 0) + b : e(c, 9) : 0 < d ? b + e(d, 0) : b.slice(0, c)
        }
        function e(a, b) {
            var c = l;
            for (b = l + b; 0 < a; )
                c += b, a--;
            return c
        }
        var f = a.limit, m = 1E3 * f, n = 1E3 * a.interval, p = a.onupdate, u = a.ontimeup, w = function(a) {
            a = a.split(".");
            return {Sb: a[0].length,
                Rb: a[1].length}
        }(a.template), x = 0, s = 0, S = m, T = c(f), vb, ub = {getLimit: function() {
                return f
            },getTime: function() {
                return T
            },getProgress: function() {
                return 1 - (S - s) / m
            },setUpdate: function(a) {
                p = a
            },setTimeup: function(a) {
                u = a
            },countDown: function() {
                s = x = M();
                S = x + m;
                b()
            },stop: function() {
                clearTimeout(vb)
            }};
        return ub
    };
    C.Twitter = Y({shareURL: function(a) {
            var b = a.name, c = a.hash, b = b ? " \u300c" + b + "\u300d" : l, c = c ? " " + c : l;
            return "https://twitter.com/intent/tweet?" + Pa({url: a.redirect_uri,text: (a.caption || l) + b + c})
        }});
    C.XML = Y({init: function(a) {
            this.b = h("div");
            V(this.b, a.data)
        },$: function(a) {
            return this.b.querySelector(a)
        },$$: function(a) {
            return Za(a, this.b)
        }});
    C.Model = Y({la: function(a, b, c, d) {
            d = this;
            d.w.fire(a, d.r.get());
            b && d.w.fire(a + ":" + b, c)
        },init: function(a, b) {
            b = this;
            a = a || I;
            var c, d = a.defaults || b.defaults || I, e = a.events || b.events;
            b.lb = a.validate || b.validate || {};
            b.r = a.store || b.store || new C.DataStore;
            b.w = new C.Observer;
            for (c in d)
                b.set(c, d[c]);
            for (c in e)
                b.on(c, e[c])
        },set: function(a, b, c) {
            c = this;
            var d;
            P(a) || (d = {}, d[a] = b, a = d);
            c.xa = c.r.get();
            for (d in a) {
                b = a[d];
                if (c.lb[d] && !c.lb[d](d, b))
                    return c.la("fail", d, b);
                c.r.set(d, b);
                c.w.fire(K.CHANGE + ":" + d, b)
            }
            c.w.fire(K.CHANGE,
            c.r.get())
        },prev: function(a) {
            return !a ? this.xa : this.xa[a]
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
            c = z(this, b);
            this.w.on(a, c);
            return c
        },off: function(a, b) {
            this.w.off(a, b)
        },fire: function(a, b) {
            return this.w.fire.apply(this.w, arguments)
        }});
    C.View = Y({init: function(a, b) {
            b = this;
            a = a ? Va(b, a) : Va(b, b, {});
            b.el = C.$(a.el || b.el || h("div"));
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
            a = a || I;
            var c, d = a.defaults || b.defaults || [], e = a.events || b.events;
            b.r = a.store || b.store || new C.DataStore({array: r});
            b.w = new C.Observer;
            for (c in d)
                b.set(c, d[c]);
            for (c in e)
                b.on(c, e[c])
        },set: function(a, b, c) {
            c = this;
            var d;
            P(a) || (d = {}, d[a] = b, a = d);
            c.xa = c.r.get();
            for (d in a) {
                b = a[d];
                if (!Q(+d))
                    return c.la("fail", a, b);
                c.r.set(a, b);
                c.w.fire(K.CHANGE, b, +d, c.r.get())
            }
        },add: function(a) {
            var b = this.r.get().length;
            this.set(b, a);
            return b
        },each: function(a) {
            var b, c = this.get();
            for (b in c)
                a.apply(this, [c[b], b, c])
        },map: function(a) {
            var b, c = this.get();
            for (b in c)
                this.set(b, a.apply(this, [c[b], b, c]))
        }});
    C.Validate = Y({t: function(a, b, c, d) {
            if (a(c))
                return r;
            this.displayError(b, d)
        },init: function(a, b) {
            b = this;
            a = a || {};
            b.Vb = a.level;
            Va(b, b, a)
        },displayError: function(a, b) {
            b = "Validate Error:" + a + " is " + b + ".";
            switch (this.Wb) {
                case "log":
                    return console.log(b), k;
                case "error":
                    throw Error(b);
                case "off":
                    return k
            }
            console.warn(b);
            return k
        },isObject: function(a, b) {
            return this.t(P, a, b, "Object")
        },isNumber: function(a, b) {
            return this.t(Q, a, b, "Number")
        },isString: function(a, b) {
            return this.t(Qa, a, b, "String")
        },isFunction: function(a,
        b) {
            return this.t(Ra, a, b, "Function")
        },isBoolean: function(a, b) {
            return this.t(Sa, a, b, "Boolean")
        },isArray: function(a, b) {
            return this.t(Ta, a, b, "Array")
        }});
    C.validate = new C.Validate;
    C.Scroll = Y({dispose: function() {
            this.revival();
            clearInterval(this.hb);
            this._super()
        },to: Ka,toTop: La,toBottom: function() {
            Ka(G.height)
        },checkBottom: function(a) {
            return G.body.scrollHeight - F.innerHeight - G.body.scrollTop <= (a || 0) ? r : k
        },scrollY: function(a) {
            a = F.pageYOffset;
            return q(a) ? a : (G.documentElement || G.body.parentNode || G.body).scrollTop
        },smooth: function(a, b, c, d) {
            c = this;
            b = b || R;
            c.ib || (c.ib = r, Q(a) || (a = a.offsetTop), d = G.height - F.innerHeight, a > d && (a = d), c.Ka = c.scrollY(), c.hb = setInterval(function(d) {
                d = c.scrollY();
                d = 0.3 * (a - d) + d;
                if (1 > Math.abs(a - d) || c.Ka == d)
                    return Ka(a), clearInterval(c.hb), b(a), delete c.ib;
                c.Ka = d;
                Ka(d)
            }, 50))
        },kill: function(a) {
            a = this;
            a.ja || (W(G.body, {overflow: "hidden"}), a.ja = a.k(G, K.TOUCHMOVE, Ua))
        },revival: function(a) {
            a = this;
            a.ja && (W(G.body, {overflow: "auto"}), a.J(a.ja), delete a.ja)
        }});
    C.LimitText = Y({Ya: 8,oa: function(a) {
            V(this.N, a);
            t(kb(this.b), this.N)
        },pa: function() {
            V(this.N, l);
            ob(this.N)
        },init: function(a) {
            var b = this.b = a.el;
            jb(b);
            var b = this.N = h(b.tagName, {"class": db(b, "class"),style: db(b, "style")}), c = this.Ma = jb(b);
            this.mb = a.width;
            this.Ra = a.height;
            this.oa(0);
            q(a.width) || (this.mb = +v(c.width)[2]);
            q(a.height) || (this.Ra = +v(c.height)[2]);
            W(b, {height: "auto"});
            this.Fb = +v(c.fontSize)[2];
            this.pa()
        },ka: function() {
            return +v(this.Ma.width)[2] <= this.mb && +v(this.Ma.height)[2] <= this.Ra ? r : k
        },getLimitFontSize: function(a) {
            a =
            l + a;
            var b = this, c = b.Fb, d;
            W(b.N, {fontSize: c});
            b.oa(a);
            b.ka() ? d = c : Wa(b.Ya - 1, c, function(a) {
                W(b.N, {fontSize: a});
                return b.ka()
            }, function(a) {
                d = a
            });
            b.pa();
            d < b.Ya && (d = 0);
            return d
        },getLimitTextLength: function(a) {
            a = l + a;
            var b = this, c = a.length, d;
            b.oa(a);
            b.ka() ? d = c : Wa(0, c, function(c) {
                V(b.N, a.slice(0, c));
                return b.ka()
            }, function(a) {
                d = a
            });
            b.pa();
            return d
        }});
    Ba && (qb.prototype = Ba);
})();
