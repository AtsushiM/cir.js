 // cir.js v0.17.1 | (c) 2013 Atsushi Mizoue.
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
        for (var c = h("p"), d = k, e, f = l, p = a.length, m, s = RegExp("^(.*?)" + a[0] + "$", "i"); p--; )
            if (n(c.style[a[p]])) {
                d = q;
                (e = a[p].match(s)[1]) ? (f = ca(e), b = f + b, f = "-" + f + "-") : b = ca(b);
                c = r(da("head"), h("style", {type: "text/css"}));
                m = c.sheet;
                break
            }
        return {ob: b,pb: d,prefix: e,nb: f,sheet: m}
    }
    function ea(a) {
        return JSON.parse(a)
    }
    function ca(a) {
        return a.toLowerCase()
    }
    function t(a) {
        return (l + (a || l)).match(/^(.*?)(-?[0-9\.]+)(.*)$/)
    }
    function w(a, b) {
        var c, d;
        for (c in b)
            if (d = c.match(/^on(.+)$/))
                a.on(d[1], x(a, b[c]))
    }
    function fa() {
        this.stop();
        this._super()
    }
    function y(a) {
        this.fire("complete", a)
    }
    function A() {
        this.fire("start")
    }
    function ga(a) {
        this.fire("progress", a)
    }
    function ha(a) {
        if (a) {
            var b = this.ha, c = b[a];
            delete b[a];
            B(c[0], c[1], c[2])
        }
    }
    function ia(a, b, c, d, e) {
        d = this;
        d.ha || (d.ha = {});
        e = ++d.zb;
        D(a, b, c);
        d.ha[e] = [a, b, c];
        return e
    }
    var E = window, F = document, q = !0, k = !1, G = null, l = "", I = {}, ja = void 0, la = ka(), ma = g("0.19,1,0.22,1"), J = 1.70158, na = k, oa = /0/.test(function() {
        0
    }) ? /\b_super\b/ : /.*/, pa = {}, K, L, qa, ra, sa, ta, ua, va, wa, M, xa, Aa, Ba, Ca, Da, Ea, Fa, Ga, Ha, Ia, Ja, Ka, La, Ma, Na;
    Date.now || (Date.now = function() {
        return +new Date
    });
    function N() {
        return Date.now()
    }
    function Oa(a) {
        E.scrollTo(0, a)
    }
    function Pa() {
        Oa(1)
    }
    function Qa(a, b, c) {
        for (c in b)
            a[c] = b[c];
        return a
    }
    function Ra(a, b) {
        b = l + a;
        return b.match(/^{.*}$/) ? ea(b) : b.match(/^[0-9\.]+$/) ? +b : "true" === b ? q : "false" === b ? k : a
    }
    function Sa(a) {
        var b = [];
        b.push.apply(b, a);
        return b
    }
    function O(a, b, c) {
        return a.split(b).join(c)
    }
    function Ta(a) {
        return O(O(O(O(O(a, "&", "&amp;"), '"', "&quot;"), "'", "&#039;"), "<", "&lt;"), ">", "&gt;")
    }
    function Ua(a, b, c, d) {
        b = c = l;
        for (d in a)
            a[d] && (c += b + d + "=" + encodeURIComponent(a[d]), b = "&");
        return c
    }
    function P(a, b) {
        return Object.prototype.toString.call(b) == "[object " + a + "]" ? q : k
    }
    function Q(a) {
        return P("Object", a)
    }
    function R(a) {
        return P("Number", a)
    }
    function Va(a) {
        return P("String", a)
    }
    function S(a) {
        return P("Function", a)
    }
    function Wa(a) {
        return P("Boolean", a)
    }
    function Xa(a) {
        return P("Array", a)
    }
    function n(a) {
        return a === ja ? k : q
    }
    function ka() {
        return "ontouchstart" in E
    }
    function T() {
    }
    function Ya(a) {
        a.preventDefault();
        return k
    }
    function U(a, b) {
        b = b || navigator.userAgent;
        return !!b.match(a)
    }
    function x(a, b) {
        return function() {
            return b.apply(a, arguments)
        }
    }
    function Za(a, b, c, d) {
        b = b || a;
        c = c || b;
        for (d in b)
            S(b[d]) && (c[d] = x(a, b[d]));
        Qa(a, c);
        return c
    }
    function $a(a, b, c, d) {
        for (var e; q; ) {
            e = ~~((a + b) / 2);
            if (a == e)
                return d(e);
            c(e) ? a = e : b = e
        }
    }
    function ab(a) {
        return a.toString().match(/^\s*function.*\((.+)\)/)
    }
    function bb(a) {
        return Xa(a) ? a.slice(0) : a
    }
    C.util = {pageTop: Pa,override: Qa,replaceAll: O,template: function(a, b, c, d) {
            for (c in b)
                d = b[c], a = O(O(a, "<%= " + c + " %>", Ta(d)), "<%- " + c + " %>", d);
            return a
        },escape: Ta,unescape: function(a) {
            return O(O(O(O(O(a, "&gt;", ">"), "&lt;", "<"), "&#039;", "'"), "&quot;", '"'), "&amp;", "&")
        },windowOpen: function(a, b, c, d, e) {
            e = [];
            for (d in c)
                Wa(c[d]) && (c[d] === q ? c[d] = "yes" : c[d] === k && (c[d] = "no")), e.push(d + "=" + c[d]);
            return E.open(a, b, e.join(","))
        },typeCast: Ra,makeQueryString: Ua,parseQueryString: function(a, b, c, d, e) {
            a = a.replace(/^[\#\?]/,
            l);
            b = a.split("&");
            c = b.length;
            for (e = {}; c--; )
                d = b[c].split("="), e[d[0]] = Ra(decodeURIComponent(d[1]));
            return e
        },is: P,isObject: Q,isNumber: R,isString: Va,isFunction: S,isBoolean: Wa,isArray: Xa,isDefined: n,isTouchable: ka,nullFunction: T,abstraceFunction: function() {
            throw Error("call abstract-function.");
        },eventPrevent: Ya,eventStop: function(a) {
            a.stopPropagation();
            return k
        },checkUserAgent: U,proxy: x,owner: Za,binarySearch: function(a) {
            a = a || I;
            return $a(a.low || 0, a.high || 0, a.compare || T, a.end || T)
        },toArray: Sa,copyArray: bb,
        hasDeclaredArgument: ab};
    function da(a) {
        return F.querySelector(a)
    }
    function cb(a, b) {
        return Sa(b.querySelectorAll(a))
    }
    function db(a, b) {
        return 0 <= a.className.indexOf(b) ? q : k
    }
    function eb(a, b, c, d) {
        db(a, b) || (c = l, (d = a.className) && (c = " "), a.className = d + c + b)
    }
    function fb(a, b, c, d, e) {
        if (db(a, b)) {
            d = [];
            c = a.className.split(" ");
            for (e = c.length; e--; )
                b != c[e] && d.push(c[e]);
            a.className = d.join(" ")
        }
    }
    function gb(a, b) {
        if (db(a, b))
            return fb(a, b);
        eb(a, b)
    }
    function hb(a, b, c, d) {
        if (Q(b)) {
            for (d in b)
                b[d] && a.setAttribute(d, b[d]);
            return q
        }
        return c || c == l ? a.setAttribute(b, c) : a.getAttribute(b)
    }
    function ib(a, b) {
        a.removeAttribute(b)
    }
    function h(a, b, c) {
        c = F.createElement(a);
        b && hb(c, b);
        return c
    }
    function jb(a) {
        var b = h("div");
        V(b, a);
        return Sa(b.children)
    }
    function D(a, b, c) {
        a.addEventListener(b, c, k)
    }
    function B(a, b, c) {
        a.removeEventListener(b, c, k)
    }
    function kb(a, b, c, d) {
        function e(a) {
            var c = a.target;
            db(c, b) && d.apply(c, arguments)
        }
        D(a, c, e);
        return e
    }
    function lb(a) {
        a.style.display = "block"
    }
    function mb(a) {
        a.style.display = "none"
    }
    function W(a, b, c, d, e, f) {
        c = a.style;
        for (d in b)
            e = d, f = b[d], R(f) && (f += "px"), c[e] = f
    }
    function nb(a) {
        return F.defaultView.getComputedStyle(a, G)
    }
    function ob(a) {
        return a.parentNode
    }
    function r(a, b) {
        return a.appendChild(b)
    }
    function pb(a, b) {
        return ob(a).insertBefore(b, a)
    }
    function qb(a, b) {
        return ob(a).insertBefore(b, a.nextSibling)
    }
    function rb(a, b) {
        return a.insertBefore(b, a.firstChild)
    }
    function sb(a) {
        return ob(a).removeChild(a)
    }
    function V(a, b) {
        if (!n(b))
            return a.innerHTML;
        a.innerHTML = b
    }
    function tb(a, b) {
        if (!n(b))
            return a.value;
        a.value = b
    }
    C.dom = {win: E,doc: F,$: da,$$: function(a) {
            return cb(a, F)
        },$child: function(a, b) {
            return b.querySelector(a)
        },$$child: cb,$id: function(a) {
            return F.getElementById(a)
        },on: D,off: B,delegate: kb,create: h,show: lb,hide: mb,hasClass: db,addClass: eb,removeClass: fb,toggleClass: gb,css: W,computedStyle: nb,append: r,parent: ob,before: pb,after: qb,insertBefore: rb,remove: sb,attr: hb,removeAttr: ib,html: V,val: tb,reflow: function(a) {
            a = a || F.body;
            a.offsetTop
        },toElement: function(a) {
            return jb(a)[0]
        },toElements: jb};
    C.lass = function() {
    };
    C.lass.extend = function(a) {
        function b() {
            !na && this.init && this.init.apply(this, arguments)
        }
        function c(c) {
            var e = a[c], m = d.prototype[c];
            S(e) && S(m) && oa.test(e) ? b.prototype[c] = function() {
                var a, b = this._super;
                this._super = m;
                a = e.apply(this, arguments);
                this._super = b;
                return a
            } : b.prototype[c] = e
        }
        var d = this, e;
        na = q;
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
        n(c) && (a.support = c);
        return a
    }
    function Y(a, b) {
        return X(C.Base, a, b)
    }
    function Z(a, b) {
        return X(C.Observer, a, b)
    }
    C.Base = X(ja, {zb: 0,dispose: function(a) {
            a = this;
            var b = 0, c = a.ha;
            for (b in c)
                B.apply(G, c[b]);
            for (b in a)
                (c = a[b]) && c.dispose && c.dispose();
            a.__proto__ = G;
            for (b in a)
                a[b] = G, delete a[b];
            return G
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
                        return d.splice(e, 1), 0 == d.length && delete c[a], q;
            return k
        },fire: function(a, b) {
            var c = this.va[a], d, e, f, p;
            if (c) {
                d = Sa(arguments).slice(1);
                f = 0;
                for (p = c.length; f < p; f++)
                    (e = c[f]) && e.apply(G, d)
            }
        }});
    L = C.Event = Y({SWITCHCLICK: la ? "touchstart" : "click",SWITCHDOWN: la ? "touchstart" : "mousedown",SWITCHMOVE: la ? "touchmove" : "mousemove",SWITCHUP: la ? "touchend" : "mouseup",SWITCHOVER: la ? "touchstart" : "mouseover",SWITCHOUT: la ? "touchend" : "mouseout",LOAD: "load",CHANGE: "change",CLICK: "click",MOUSEDOWN: "mousedown",MOUSEMOVE: "mousemove",MOUSEUP: "mouseup",MOUSEOVER: "mouseover",MOUSEOUT: "mouseout",TOUCHSTART: "touchstart",TOUCHMOVE: "touchmove",TOUCHEND: "touchend",RESIZE: "resize"});
    L = C.e = new L;
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
        var a = ba(["animation", "webkitAnimation"], "Animation"), b = a.prefix, c = a.nb, d = a.ob, e = a.sheet, f = C.SSAnime = Z({$a: function() {
                var a = this.b, b = this.Bb;
                B(a, d + "End", b);
                B(a, "animationend", b)
            },init: function(a, b, d, v) {
                v = this;
                v._super();
                w(v, d);
                d = d || I;
                v.wa = d.oncomplete || T;
                v.b = a;
                f.id++;
                v.u = "ciranim" + f.id;
                a = d.duration || f.duration;
                var z = d.ease || ma, H, u = {};
                for (H in b)
                    u[H] = b[H], R(u[H]) && (u[H] += "px");
                v.Pb = u;
                u = O(O(JSON.stringify(u), '"', l), ",", ";");
                e.insertRule("@" + c + "keyframes " + v.u + "{to" + u + "}", e.cssRules.length);
                Xa(z) || (z = [z]);
                b = v.u;
                H = 0;
                for (var u = z.length, ya = l; H < u; H++)
                    ya += c + "animation:" + b + " " + a + "ms " + z[H] + " 0s 1 normal both;";
                e.insertRule("." + b + "{" + ya + "}", e.cssRules.length);
                d.manual || v.start()
            },dispose: fa,p: y,q: A,start: function(a, c) {
                function f(d) {
                    var z = e.cssRules, s = z.length, u;
                    a.$a();
                    if ("webkit" == b) {
                        for (; s--; )
                            u = z[s].name || (l + z[s].selectorText).split(".")[1], u == a.u && e.deleteRule(s);
                        fb(c, a.u);
                        W(c, a.Pb)
                    }
                    a.p(d)
                }
                a = this;
                c = a.b;
                a.q();
                a.Bb = f;
                D(c, d + "End", f);
                D(c, "animationend", f);
                eb(c, a.u)
            },stop: function() {
                var a = {};
                this.fire("stop");
                a[c + "animation-play-state"] = "paused";
                W(this.b, a);
                this.$a()
            }}, a.pb);
        f.id = 0;
        f.duration = 500
    })();
    (function() {
        var a = ba(["transitionProperty", "webkitTransitionProperty"], "Transition"), b = a.nb, c = a.ob, d = a.sheet, e = C.SSTrans = Z({init: function(a, c, m, s) {
                s = this;
                s._super();
                w(s, m);
                m = m || I;
                e.id++;
                s.u = "cirtrans" + e.id;
                var v = [];
                Qa({}, c);
                var z, H = m.duration || e.duration, u = m.ease || ma;
                Xa(u) || (u = [u]);
                for (z in c)
                    v.push(z);
                z = 0;
                for (var ya = u.length, za = l, za = za + (b + "transition-property:" + v.join(" ") + ";" + b + "transition-duration:" + H + "ms;"); z < ya; z++)
                    za += b + "transition-timing-function:" + u[z] + ";";
                d.insertRule("." + s.u + "{" + za + "}",
                d.cssRules.length);
                s.b = a;
                s.V = c;
                m.manual || s.start()
            },dispose: fa,p: y,q: A,start: function(a) {
                a = this;
                a.q();
                a.ia = function(b) {
                    a.ba();
                    setTimeout(function() {
                        a.Sa || a.p(b)
                    }, 1)
                };
                D(a.b, c + "End", a.ia);
                D(a.b, "transitionend", a.ia);
                eb(a.b, a.u);
                W(a.b, a.V)
            },ba: function(a) {
                a = this;
                var b = d.cssRules, e = b.length, s;
                B(a.b, c + "End", a.ia);
                B(a.b, "transitionend", a.ia);
                for (fb(a.b, a.u); e--; )
                    if (s = b[e].name || (l + b[e].selectorText).split(".")[1], s == a.u) {
                        d.deleteRule(e);
                        break
                    }
            },Sa: k,stop: function() {
                this.Sa = q;
                this.fire("stop");
                this.ba()
            }},
        a.pb);
        e.id = 0;
        e.duration = 500
    })();
    K = {request: function(a) {
            return this.sb.call(E, a)
        },cancel: function(a) {
            return this.vb.call(E, a)
        }};
    Ea = ["webkit", "moz", "o", "ms"];
    if (E.requestAnimationFrame)
        Ga = E.requestAnimationFrame, Ha = E.cancelAnimationFrame;
    else {
        for (Fa = Ea.length; Fa--; )
            if (E[Ea[Fa] + "RequestAnimationFrame"]) {
                Ga = E[Ea[Fa] + "RequestAnimationFrame"];
                Ha = E[Ea[Fa] + "CancelAnimationFrame"];
                break
            }
        Ga || (Ga = function(a) {
            return setTimeout(a, 1E3 / C.AnimeFrame.fps)
        }, Ha = function(a) {
            clearTimeout(a)
        })
    }
    K.sb = Ga;
    K.vb = Ha;
    K = C.AnimeFrame = Y(K);
    K.fps = 30;
    C.animeframe = new K;
    M = C.Tweener = Z({init: function(a, b, c, d, e, f) {
            f = this;
            f._super();
            w(f, c);
            c = c || I;
            f.kb = a;
            f.V = [];
            for (d in b)
                e = b[d], e.name = d, e.Ob = e.to - e.from, e.prefix = e.prefix || l, e.suffix = e.suffix || (e.suffix === l ? l : "px"), f.V.push(e);
            f.Na = c.duration || M.duration;
            f.Ab = c.ease || f.qb;
            c.manual || f.start()
        },dispose: fa,qb: function(a, b, c, d) {
            return c * (-Math.pow(2, -10 * a / d) + 1) + b
        },p: y,R: function() {
            for (var a = this, b = M.na, c, d = N(), e, f = b.length, p, m; f--; )
                if (c = b[f], p = c.V.length, e = d - c.Mb, e < c.Na)
                    for (; p--; )
                        m = c.V[p], M.fb(c.kb, m, c.Ab(e, m.from, m.Ob, c.Na));
                else {
                    for (; p--; )
                        m = c.V[p], M.fb(c.kb, m, m.to);
                    c.p();
                    b.splice(f, 1)
                }
            b.length ? C.animeframe.request(function() {
                a.R && a.R()
            }) : a.ba()
        },q: A,start: function(a) {
            a = this;
            a.q();
            a.Mb = N();
            M.na.push(a);
            M.Ia || (M.Ia = 1, C.animeframe.request(function() {
                a.R && a.R()
            }))
        },ba: function() {
            M.na = [];
            C.animeframe.cancel(M.Ia);
            M.Ia = G
        },stop: function() {
            this.fire("stop");
            this.ba()
        }});
    M.fb = function(a, b, c) {
        a[b.name] = b.prefix || b.suffix ? b.prefix + c + b.suffix : c
    };
    M.na = [];
    M.duration = 500;
    function ub() {
    }
    C.$ = function(a, b, c, d, e) {
        c = "string" == typeof a ? (b || F).querySelectorAll(a) : [a];
        d = new ub;
        for (e = d.length = c.length; e--; )
            d[e] = c[e];
        return d
    };
    function $(a, b, c) {
        var d = a.length;
        for (c = vb(c); d--; )
            c[0] = a[d], b.apply(a, c);
        return a
    }
    function wb(a, b, c) {
        c = vb(c);
        c[0] = a[0];
        return b.apply(G, c)
    }
    function vb(a) {
        var b = [G];
        b.push.apply(b, a);
        return b
    }
    Da = C.$.Sb = {querySelectorAll: function(a) {
            return this[0].querySelectorAll(a)
        },find: function(a) {
            return C.$(a, this)
        },parent: function() {
            return C.$(ob(this[0]))
        },on: function() {
            return $(this, D, arguments)
        },off: function() {
            return $(this, B, arguments)
        },delegate: function(a, b, c) {
            var d;
            this.ra || (this.ra = {});
            d = this.ra;
            d[b] || (d[b] = {});
            d = d[b];
            d[a] || (d[a] = []);
            d = d[a];
            return $(this, function() {
                var a = kb.apply(G, arguments);
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
                        return this.off(b, d[a][1]), d.splice(a, 1), q;
                return k
            }
            for (; a--; )
                this.off(b, d[a][1]), d.splice(a, 1);
            return q
        },show: function() {
            return $(this, lb)
        },hide: function() {
            return $(this, mb)
        },hasClass: function() {
            return wb(this, db, arguments)
        },addClass: function() {
            return $(this, eb, arguments)
        },removeClass: function() {
            return $(this, fb, arguments)
        },toggleClass: function() {
            return $(this, gb, arguments)
        },css: function() {
            return $(this, W, arguments)
        },html: function() {
            return wb(this,
            V, arguments)
        },val: function() {
            return wb(this, tb, arguments)
        },attr: function() {
            return wb(this, hb, arguments)
        },removeAttr: function() {
            return $(this, ib, arguments)
        },append: function() {
            return $(this, r, arguments)
        },before: function() {
            return wb(this, pb, arguments)
        },after: function() {
            return wb(this, qb, arguments)
        },insertBefore: function() {
            return wb(this, rb, arguments)
        },remove: function() {
            return $(this, sb, arguments)
        }};
    var xb = C.SSAnime || I, yb = xb.support, zb = I;
    yb && C.cssease ? zb = C.cssease : C.ease && (zb = C.ease);
    Da.animate = function() {
        this.P || (this.P = []);
        return $(this, Ab, arguments)
    };
    Da.stop = function(a, b) {
        a = this;
        if (a.P) {
            for (b = a.P.length; b--; )
                a.P[b].stop();
            a.P = G
        }
        return a
    };
    function Ab(a, b, c, d, e) {
        S(c) && (e = c, c = G);
        S(d) && !e && (e = d, d = G);
        d && (d = zb[d]);
        c = {duration: c,ease: d,oncomplete: e};
        if (yb)
            b = new xb(a, b, c);
        else {
            d = C.Tweener;
            e = a.style;
            var f;
            a = nb(a);
            var p, m, s = {};
            for (f in b)
                p = t(b[f]), m = a.getPropertyValue(f), m = !m || "none" == m ? 0 : +t(m)[2], s[f] = {from: m,to: +p[2] || 0,prefix: p[1],suffix: p[3]};
            b = new d(e, s, c)
        }
        this.P.push(b)
    }
    C.HashQuery = Y({typeCast: function(a) {
            var b = Ra(a);
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
    function Bb(a) {
        var b = h(a.type);
        b.controls = a.controls ? q : k;
        b.preload = a.preload || "auto";
        b.autoplay = a.autoplay ? q : k;
        b.loop = a.loop ? q : k;
        b.src = a.dir + a.name + "." + a.suffix[0][0];
        return b
    }
    function Cb(a, b) {
        if (!E["HTML" + a + "Element"])
            return k;
        a = ca(a);
        for (var c = h(a), d = [], e = 0, f = b.length; e < f; e++)
            c.canPlayType(a + "/" + b[e][1]) && d.push(b[e]);
        return d.length ? d : k
    }
    wa = Y({init: function(a) {
            var b = this, c = a.autoplay, d = a.loop, e, f = a.el || F.body;
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
                    var p;
                    p = b.k(e, "canplay", function() {
                        b.J(p);
                        b.play()
                    })
                }
                d && b.loop(q);
                a.oncanplay && b.k(e, "canplay", a.oncanplay);
                a.onended && b.k(e, "ended", a.onended);
                r(f, e)
            }
        },dispose: function() {
            sb(this.b);
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
        return Bb(a)
    };
    C.Audio.support = Cb("Audio", [["mp3", "mpeg"], ["wav", "wav"], ["ogg", "ogg"], ["m4a", "mp4"]]);
    C.Sound = function(a) {
        a.type = "Audio";
        return new wa(a)
    };
    C.Sound.support = C.Audio.support;
    C.Video = function(a) {
        a.type = "video";
        a.suffix = C.Video.support;
        return Bb(a)
    };
    C.Video.support = Cb("Video", [["webm", "webm"], ["mp4", "mp4"], ["ogv", "ogg"]]);
    C.Movie = function(a) {
        a.type = "Video";
        return new wa(a)
    };
    C.Movie.support = C.Video.support;
    C.Ajax = Z({dispose: function() {
            this.stop();
            this._super()
        },init: function(a) {
            a = Qa({}, a);
            var b = this, c = a.url, d = a.type || "GET", e = l, f = b.Ha = new XMLHttpRequest;
            b._super();
            "json" == a.dataType && b.Eb(a);
            w(b, a);
            a.cache || b.ub(a);
            a.query && (e = b.za(a));
            f.onreadystatechange = function() {
                if (4 == f.readyState) {
                    if (200 == f.status)
                        return b.fire("complete", f.responseText, f);
                    b.fire("error", f)
                }
            };
            "GET" == d && (c = (-1 != c.indexOf("?") ? q : k) ? c + "&" : c + "?", c += e, e = l);
            this.za = e;
            c = [d, c];
            a.sync && c.push(k);
            f.open.apply(f, c);
            "POST" == d && f.setRequestHeader("Content-Type",
            "application/x-www-form-urlencoded");
            a.manual || b.start()
        },q: A,start: function() {
            this.q();
            this.Ha.send(this.za)
        },stop: function() {
            this.Ha.abort();
            this.fire("stop", this.Ha)
        },za: function(a) {
            a = a.query;
            Q(a) && (a = encodeURI(Ua(a)));
            return a
        },ub: function(a) {
            a.query || (a.query = {});
            a.query["cir" + N()] = "0"
        },Eb: function(a) {
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
            n(a) && b.K.push(a);
            b.O = b.ma / b.Ga;
            1 < b.O && (b.O = 1);
            b.ab(b.O);
            b.ta && (c = Error("miss"));
            if (b.ma == b.Ga || b.ta)
                b.wa(c, b.K), b.wa = b.ab = T
        },init: function(a, b, c) {
            b = this;
            c = a.waits;
            Xa(c) && (c = c.length);
            b.Ga = c;
            b.wa = a.oncomplete;
            b.ab = a.onprogress || T;
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
            var b = bb(a.queue) || [];
            w(this, a);
            this.resetQueue(b);
            this.Q = x(this, this.Q)
        },q: A,start: function() {
            this.q();
            this.U = k;
            this.Oa()
        },restart: function(a) {
            this.resetQueue(a);
            this.start()
        },stop: function() {
            this.o = G;
            this.fire("stop")
        },pause: function() {
            this.U = q;
            this.fire("pause")
        },resume: function() {
            this.U && (this.fire("resume"), this.U = k, this.Oa())
        },resetQueue: function(a) {
            a && (this.Hb = bb(a));
            a = this.o = bb(this.Hb);
            for (var b in a)
                a[b].resetQueue && a[b].resetQueue();
            this.fire("reset")
        },
        ua: function() {
            this.fire("change", this.getQueue())
        },setQueue: function(a) {
            this.o = bb(a);
            this.ua()
        },getQueue: function() {
            return bb(this.o)
        },addTask: function(a, b) {
            if (!R(b) || b > this.o.length)
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
            return a.one && a.start ? (a.one("complete", x(b, b.Q)), x(a, a.start)) : ab(a) ? x(b, a) : function(c) {
                a.call(b);
                c()
            }
        }});
    C.Parallel = C.Async = X(qa, {p: y,sa: function() {
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
    C.Serial = C.Sync = X(qa, {p: y,sa: function() {
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
            b.wb = b.ea.getContext("2d");
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
                var c = a.onload || T;
                a.onload = function(a, e) {
                    c(a, e);
                    f--;
                    0 == f && b.call(d,
                    p)
                };
                p[e] = d.pigment(a);
                f++
            }
            var d = this, e, f = 0, p = {};
            b = b || T;
            for (e in a)
                c(a[e]);
            return p
        },draw: function(a) {
            var b = 0, c = a.length, d = this.wb, e = this.ea;
            for (d.clearRect(0, 0, e.width, e.height); b < c; b++)
                (e = a[b]) && d.drawImage(e.image, e.x, e.y)
        }}, !!E.HTMLCanvasElement);
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
            }}, p = /%([djDlFMmnYyaAgGhHisIS])/g;
        C.DateFactory = Y({make: function(a) {
                switch (q) {
                    case Va(a):
                        return a = a.split(/[T:\-\+\/\s]/), new Date(+a[0], a[1] - 1, +a[2], +a[3] || 0, +a[4] || 0, +a[5] || 0);
                    case R(a):
                        return new Date(a);
                    case P("Date", a):
                        return a
                }
                return new Date
            },format: function(a, b) {
                b = this.make(b);
                return a.replace(p, function(a, c) {
                    return f[c](b)
                })
            }})
    })();
    C.Rollover = Y({init: function(a, b) {
            b = this;
            var c = a.toggleClass || l, d = a.over || T, e = a.out || T;
            b.B = a.els;
            b.Ib = function() {
                eb(b, c);
                d()
            };
            b.jb = function() {
                fb(b, c);
                e()
            };
            a.manual || b.attach()
        },dispose: function() {
            this.detach();
            this._super()
        },attach: function() {
            this.X(D)
        },detach: function() {
            this.X(B)
        },X: function(a, b, c) {
            b = this;
            for (c = b.B.length; c--; )
                a(b.B[c], L.SWITCHOVER, b.Ib), a(b.B[c], L.SWITCHOUT, b.jb), a(b.B[c], L.MOUSEOUT, b.jb)
        }});
    C.DataStore = Y({fa: function() {
            return !this.ca ? {} : []
        },init: function(a) {
            a = a || I;
            this.ca = a.array || k;
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
            n(this.ga[a]) && (this.ca ? this.data.splice(a, 1) : delete this.ga[a])
        },reset: function() {
            this.ga = this.fa()
        }});
    xa = Y({fa: function() {
            return !this.ca ? {} : []
        },init: function(a) {
            this.ca = a.array || k;
            this.T = a.namespace ? a.namespace + "-" : l;
            this.W = E[a.type + "Storage"]
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
            n(b.W.getItem(a)) && b.W.removeItem(a)
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
        },rb: function(a) {
            var b = this, c, d, e = k;
            b.f.push(b.k(a.el, L.SWITCHDOWN, function(a) {
                var p = b.Da(a);
                c = p.pageX;
                d = p.pageY;
                e = q;
                Ya(a)
            }), b.k(E, L.SWITCHUP, function(f) {
                e && (f = b.Da(f), a.callback({x: f.pageX - c,y: f.pageY - d}), e = k)
            }))
        },yb: function(a) {
            this.rb({el: a.el,callback: function(b) {
                    var c = a.boundary || 0, d = {change: k,top: k,right: k,bottom: k,left: k,amount: b};
                    Math.abs(b.x) > c && (0 < b.x ? d.right = q : 0 > b.x && (d.left = q), d.change = q);
                    Math.abs(b.y) > c && (0 < b.y ?
                    d.bottom = q : 0 > b.y && (d.top = q), d.change = q);
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
            var b = this, c = this.c, d = c.el, e = c.start || T, f = c.move || T, p = c.end || T, m = k, s = 0, v = 0;
            c.direction && b.yb({el: d,boundary: c.boundary,callback: c.direction});
            a(d, L.SWITCHDOWN, function(a) {
                m = q;
                s = a.pageX;
                v = a.pageY;
                e({e: a,move: {x: s,y: v}})
            });
            a(F, L.SWITCHMOVE, function(a) {
                m && f({e: a,move: {x: a.pageX - s,y: a.pageY - v}})
            });
            a(F,
            L.SWITCHUP, function(a) {
                m && (p({e: a,move: {x: a.pageX - s,y: a.pageY - v}}), m = k)
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
            D(E, "hashchange", c.aa[a])
        },removeCallback: function(a) {
            B(E, "hashchange", this.aa[a]);
            delete this.aa[a]
        }});
    C.Facebook = Y({shareURL: function(a) {
            return "https://www.facebook.com/dialog/feed?app_id=" + a.app_id + "&redirect_uri=" + a.redirect_uri + Ua({link: a.link,picture: a.picture,name: a.name,caption: a.caption,description: a.description})
        }});
    C.FPS = Y({ya: 0,Gb: 0,C: 0,init: function(a, b) {
            b = this;
            b.qa = b.Ca = a.criterion;
            b.Za = b.Pa(b.qa);
            b.Cb = a.enterframe;
            a.manual || b.start()
        },dispose: fa,getCriterion: aa("qa"),getSurver: aa("Ca"),getFrameTime: aa("Za"),enter: function(a) {
            a = this;
            a.Cb({criterion: a.qa,surver: a.Ca})
        },start: function(a) {
            a = this;
            a.ya = N();
            a.C = setInterval(a.R, a.Za, a)
        },R: function(a, b) {
            b = a.Gb = N();
            a.Ca = a.Pa(b - a.ya);
            a.ya = b;
            a.enter()
        },Pa: function(a) {
            return Math.round(1E3 / a)
        },stop: function() {
            clearInterval(this.C)
        }});
    ra = Z({Ea: l,p: y,Z: ga,init: function(a, b) {
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
            w(b, a);
            a.manual || b.start()
        },q: A,start: function() {
            function a() {
                b.O.pass()
            }
            var b = this, c, d = 0, e = b.Aa.length;
            b.q();
            if (!b.Ba)
                for (b.Ba = q; d < e; d++)
                    c = h(b.Ea), c.src = b.Aa[d], b.f.push(b.k(c, L.LOAD, a)), b.Ua.push(c), b.Va(c)
        },Va: T});
    C.ImgLoad = X(ra, {Ea: "img"});
    C.ScriptLoad = X(ra, {Ea: "script",Va: function(a) {
            r(F.body, a)
        }});
    Ja = function() {
        Ia = q;
        B(E, L.LOAD, Ja)
    };
    D(E, L.LOAD, Ja);
    C.WindowLoad = Z({init: function(a) {
            this._super();
            w(this, a);
            a.manual || this.start()
        },p: y,q: A,start: function() {
            var a = this, b;
            a.q();
            a.Ba || (a.Ba = q, Ia ? a.p() : b = a.k(E, L.LOAD, function() {
                a.J(b);
                a.p()
            }))
        }});
    Aa = C.Mobile = Y({getZoom: function() {
            return F.body.clientWidth / E.innerWidth
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
                0 == E.pageYOffset && Pa()
            }
            function b() {
                setTimeout(a, 100)
            }
            this.k(E, L.LOAD, b, k);
            this.k(E, "orientationchange", b, k)
        }});
    C.mobile = new Aa;
    Ca = U(/opera/i) ? "opera" : U(/msie/i) ? "ie" : U(/chrome/i) ? "chrome" : U(/safari/i) ? "safari" : U(/gecko/i) ? "gecko" : "ather";
    Ba = C.PC = Y({isChrome: function() {
            return "chrome" == Ca
        },isSafari: function() {
            return "safari" == Ca
        },isGecko: function() {
            return "gecko" == Ca
        },isOpera: function() {
            return "opera" == Ca
        },isIE: function() {
            return "ie" == Ca
        }});
    C.pc = new Ba;
    C.Orientation = Y({init: function(a, b) {
            b = this;
            b.c = a;
            b.f = [];
            b.bb = {portrait: q,landscape: k};
            b.Ta = {portrait: k,landscape: q};
            b.attach()
        },get: function(a) {
            a = this;
            return R(E.orientation) ? 90 != Math.abs(E.orientation) ? a.bb : a.Ta : E.innerWidth < E.innerHeight ? a.bb : a.Ta
        },fire: function(a) {
            a = this;
            if (a.get().portrait)
                return a.c.portrait();
            a.c.landscape()
        },attach: function(a, b) {
            b = this;
            var c = x(b, b.fire);
            b.f.push(b.k(E, L.LOAD, c), b.k(E, "orientationchange", c), b.k(E, L.RESIZE, c))
        },detach: function(a) {
            a = this;
            for (var b = a.f.length; b--; )
                a.J(a.f[b]);
            a.f = []
        }}, "onorientationchange" in E);
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
            W(b.L, Qa({"z-index": "9998",top: 0,left: 0,width: "100%",height: "200%"}, c));
            r(F.body, b.L);
            b.v = h("div", {"class": "cir-modal-content"});
            W(b.v, Qa({"z-index": "9999",top: "50%",left: "50%"}, c));
            r(F.body, b.v);
            a.manual || b.open()
        },dispose: function(a) {
            a = this;
            a.close();
            sb(a.L);
            sb(a.v);
            a._super()
        },
        open: function(a, b) {
            b = this;
            b.eb.kill();
            W(b.L, {top: F.body.scrollTop});
            lb(b.L);
            b.inner(a)
        },close: function(a) {
            a = this;
            a.La();
            V(a.v, l);
            mb(a.v);
            mb(a.L);
            a.eb.revival()
        },inner: function(a, b, c, d, e) {
            b = this;
            b.La();
            a = a || b.c.html;
            V(b.v, a);
            lb(b.v);
            c = nb(b.v);
            W(b.v, {"margin-top": F.body.scrollTop - t(c.height)[2] / 2,"margin-left": -(t(c.width)[2] / 2)});
            b.c.bgClose && b.k(b.L, L.CLICK, x(b, b.close));
            if (b.c.closeSelector) {
                d = cb(b.c.closeSelector, b.v);
                for (e = d.length; e--; )
                    b.f.push(b.k(d[e], L.CLICK, x(b, b.close)))
            }
        }});
    ta = Y({init: function(a) {
            this.c = a;
            this.attach()
        },attach: function(a) {
            a = this;
            a.detach();
            a.tb = a.k(E, a.c.e, a.c.callback)
        },detach: function() {
            this.J(this.tb)
        }});
    C.DeviceOrientation = function(a) {
        a.e = "deviceorientation";
        return ta(a)
    };
    C.DeviceOrientation.support = "ondeviceorientation" in E;
    C.DeviceMotion = function(a) {
        a.e = "devicemotion";
        return ta(a)
    };
    C.DeviceMotion.support = "ondevicemotion" in E;
    C.DeviceOrientation.support ? (Ka = C.DeviceOrientation, La = function(a) {
        return a
    }) : C.DeviceMotion.support && (Ka = C.DeviceMotion, La = function(a) {
        return a.rotationRate
    });
    C.DeviceShake = Y({Nb: {x: "gamma",y: "beta",z: "alpha"},init: function(a, b) {
            b = this;
            b.gb = new Ka;
            b.c = a;
            b.attach()
        },attach: function() {
            var a, b = this.c, c = this.Nb[b.direction];
            this.gb.attach(function(d) {
                d = La(d);
                a || (a = d);
                Math.abs(d[c] - a[c]) > b.limit && (a = G, b.callback(d), setTimeout(function() {
                }, b.waittime))
            })
        },detach: function() {
            this.gb.detach()
        }}, Ka ? q : k);
    C.FontImg = Y({init: function(a, b) {
            a = a || I;
            this.Kb = (b = a.type) ? b + "_" : l;
            this.Jb = a.tag || "span"
        },make: function(a) {
            a = (l + a).split(l);
            for (var b = this.Jb, c = l, d = a.length; d--; )
                c = "<" + b + ' class="font_' + this.Kb + a[d] + '"></' + b + ">" + c;
            return c
        }});
    C.PreRender = Z({init: function(a, b) {
            b = this;
            b._super();
            b.B = a.els;
            b.Qa = a.guesslimit || 30;
            b.Xa = a.looptime || 100;
            b.Fb = b.Xa + (a.loopblur || 20);
            w(b, a);
            a.manual || b.start()
        },dispose: function() {
            clearInterval(this.C);
            this._super()
        },p: y,q: A,start: function() {
            var a, b = this, c = N();
            b.q();
            for (a = b.B.length; a--; )
                lb(b.B[a]);
            b.C = setInterval(function() {
                var a = N(), e = a - c;
                c = a;
                if (e < b.Fb && (b.Qa--, 1 > b.Qa)) {
                    clearInterval(b.C);
                    for (a = b.B.length; a--; )
                        mb(b.B[a]);
                    b.p()
                }
            }, b.Xa, b)
        }});
    C.Router = Y({init: function(a) {
            var b = this;
            b.c = a;
            a.hashchange && (D(E, "hashchange", function() {
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
            a = a || I;
            var b = a.callback || T;
            Ma ? b(Ma) : Ma = Db(function() {
                Na = q;
                b(Ma)
            })
        },date: function(a) {
            return Db(function(b) {
                a(b.getResponseHeader("Date"))
            })
        },connection: function() {
            return Eb("Connection")
        },contentLength: function() {
            return Eb("Content-Length")
        },lastModified: function() {
            return Eb("Last-Modified")
        },server: function() {
            return Eb("Server")
        },contentType: function() {
            return Eb("Content-Type")
        },acceptRanges: function() {
            return Eb("Accept-Ranges")
        },keepAlive: function() {
            return Eb("Keep-Alive")
        }});
    function Eb(a) {
        return Na ? Ma.getResponseHeader(a) : k
    }
    function Db(a) {
        var b = new XMLHttpRequest;
        b.onload = function() {
            a(b)
        };
        b.open("HEAD", location.href + "?update" + N() + "=1");
        b.send(G);
        return b
    }
    C.Surrogate = Y({init: function(a) {
            this.xb = a.delay;
            this.da = a.callback
        },dispose: function() {
            this.clear();
            this._super()
        },request: function(a, b) {
            b = this;
            b.K = a;
            b.clear();
            b.Fa = setTimeout(b.flush, b.xb, b)
        },flush: function(a) {
            a = a || this;
            a.da(a.K)
        },clear: function() {
            clearTimeout(this.Fa)
        }});
    C.Throttle = Y({init: function(a) {
            this.Lb = a.waittime;
            this.da = a.callback
        },dispose: function() {
            this.unlock();
            this._super()
        },request: function(a, b) {
            b = this;
            b.Wa ? b.K = a : (b.da(a), b.lock(), b.Fa = setTimeout(function() {
                b.K && (b.da(b.K), b.K = G);
                b.unlock()
            }, b.Lb, b))
        },lock: function() {
            this.Wa = q
        },unlock: function(a) {
            a = a || this;
            a.Wa = k;
            clearTimeout(a.Fa)
        }});
    C.Twitter = Y({shareURL: function(a) {
            var b = a.name, c = a.hash, b = b ? " \u300c" + b + "\u300d" : l, c = c ? " " + c : l;
            return "https://twitter.com/intent/tweet?" + Ua({url: a.redirect_uri,text: (a.caption || l) + b + c})
        }});
    C.XML = Y({init: function(a) {
            this.b = h("div");
            V(this.b, a.data)
        },$: function(a) {
            return this.b.querySelector(a)
        },$$: function(a) {
            return cb(a, this.b)
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
            Q(a) || (d = {}, d[a] = b, a = d);
            c.xa = c.r.get();
            for (d in a) {
                b = a[d];
                if (c.lb[d] && !c.lb[d](d, b))
                    return c.la("fail", d, b);
                c.r.set(d, b);
                c.w.fire(L.CHANGE + ":" + d, b)
            }
            c.w.fire(L.CHANGE,
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
            c = x(this, b);
            this.w.on(a, c);
            return c
        },off: function(a, b) {
            this.w.off(a, b)
        },fire: function(a, b) {
            return this.w.fire.apply(this.w, arguments)
        }});
    C.View = Y({init: function(a, b) {
            b = this;
            a = a ? Za(b, a) : Za(b, b, {});
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
            b.r = a.store || b.store || new C.DataStore({array: q});
            b.w = new C.Observer;
            for (c in d)
                b.set(c, d[c]);
            for (c in e)
                b.on(c, e[c])
        },set: function(a, b, c) {
            c = this;
            var d;
            Q(a) || (d = {}, d[a] = b, a = d);
            c.xa = c.r.get();
            for (d in a) {
                b = a[d];
                if (!R(+d))
                    return c.la("fail", a, b);
                c.r.set(a, b);
                c.w.fire(L.CHANGE, b, +d, c.r.get())
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
                return q;
            this.displayError(b, d)
        },init: function(a, b) {
            b = this;
            a = a || {};
            b.Qb = a.level;
            Za(b, b, a)
        },displayError: function(a, b) {
            b = "Validate Error:" + a + " is " + b + ".";
            switch (this.Rb) {
                case "log":
                    return console.log(b), k;
                case "error":
                    throw Error(b);
                case "off":
                    return k
            }
            console.warn(b);
Validate Error:test is Object.
Validate Error:test is Number.
Validate Error:test is String.
Validate Error:test is Function.
Validate Error:test is Boolean.
Validate Error:test is Array.
            return k
        },isObject: function(a, b) {
            return this.t(Q, a, b, "Object")
        },isNumber: function(a, b) {
            return this.t(R, a, b, "Number")
        },isString: function(a, b) {
            return this.t(Va, a, b, "String")
        },isFunction: function(a,
        b) {
            return this.t(S, a, b, "Function")
        },isBoolean: function(a, b) {
            return this.t(Wa, a, b, "Boolean")
        },isArray: function(a, b) {
            return this.t(Xa, a, b, "Array")
        }});
    C.validate = new C.Validate;
    C.Scroll = Y({dispose: function() {
            this.revival();
            clearInterval(this.hb);
            this._super()
        },to: Oa,toTop: Pa,toBottom: function() {
            Oa(F.height)
        },checkBottom: function(a) {
            return F.body.scrollHeight - E.innerHeight - F.body.scrollTop <= (a || 0) ? q : k
        },scrollY: function(a) {
            a = E.pageYOffset;
            return n(a) ? a : (F.documentElement || F.body.parentNode || F.body).scrollTop
        },smooth: function(a, b, c, d) {
            c = this;
            b = b || T;
            c.ib || (c.ib = q, R(a) || (a = a.offsetTop), d = F.height - E.innerHeight, a > d && (a = d), c.Ka = c.scrollY(), c.hb = setInterval(function(d) {
                d = c.scrollY();
                d = 0.3 * (a - d) + d;
                if (1 > Math.abs(a - d) || c.Ka == d)
                    return Oa(a), clearInterval(c.hb), b(a), delete c.ib;
                c.Ka = d;
                Oa(d)
            }, 50))
        },kill: function(a) {
            a = this;
            a.ja || (W(F.body, {overflow: "hidden"}), a.ja = a.k(F, L.TOUCHMOVE, Ya))
        },revival: function(a) {
            a = this;
            a.ja && (W(F.body, {overflow: "auto"}), a.J(a.ja), delete a.ja)
        }});
    C.LimitText = Y({Ya: 8,oa: function(a) {
            V(this.N, a);
            r(ob(this.b), this.N)
        },pa: function() {
            V(this.N, l);
            sb(this.N)
        },init: function(a) {
            var b = this.b = a.el;
            nb(b);
            var b = this.N = h(b.tagName, {"class": hb(b, "class"),style: hb(b, "style")}), c = this.Ma = nb(b);
            this.mb = a.width;
            this.Ra = a.height;
            this.oa(0);
            n(a.width) || (this.mb = +t(c.width)[2]);
            n(a.height) || (this.Ra = +t(c.height)[2]);
            W(b, {height: "auto"});
            this.Db = +t(c.fontSize)[2];
            this.pa()
        },ka: function() {
            return +t(this.Ma.width)[2] <= this.mb && +t(this.Ma.height)[2] <= this.Ra ? q : k
        },getLimitFontSize: function(a) {
            a =
            l + a;
            var b = this, c = b.Db, d;
            W(b.N, {fontSize: c});
            b.oa(a);
            b.ka() ? d = c : $a(b.Ya - 1, c, function(a) {
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
            b.ka() ? d = c : $a(0, c, function(c) {
                V(b.N, a.slice(0, c));
                return b.ka()
            }, function(a) {
                d = a
            });
            b.pa();
            return d
        }});
    C.require = function(a, b, c) {
        var d = Fb(a), e = c ? Gb : Hb;
        if (!d && (!b || pa[b]))
            throw Error("not found " + a);
        b && (pa[b] = q);
        return e(d, a, b, c)
    };
    function Gb(a, b, c, d) {
        if (a)
            return d(a);
        new C.ScriptLoad({srcs: [c],oncomplete: function() {
                a = Fb(b);
                if (!a)
                    throw Error("not found " + b);
                d(a)
            }})
    }
    function Hb(a, b, c) {
        if (a)
            return a;
        new C.Ajax({url: c,sync: q,oncomplete: function(a) {
                (new Function(a))()
            }});
        if (a = Fb(b))
            return a;
        throw Error("not found " + b);
    }
    function Fb(a) {
        a = a.split(".");
        for (var b = 0, c = a.length, d = E; b < c; b++) {
            if (!d[a[b]])
                return;
            d = d[a[b]]
        }
        return d
    }
    Da && (ub.prototype = Da);
})();
