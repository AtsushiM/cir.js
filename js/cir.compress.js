function aa(m){return function(){return this[m]}}
(function(){function m(a){return"cubic-bezier("+a+")"}function Ba(a,b){for(var c=w("p"),d=f,e,g=n,A=a.length,r,Xa=RegExp("^(.*?)"+a[0]+"$","i");A--;)if(c.style[a[A]]!==ja){d=k;(e=a[A].match(Xa)[1])?(g=e.toLowerCase(),b=g+b,g="-"+g+"-"):b=b.toLowerCase();c=N(Ca("head"),w("style",{type:"text/css"}));r=c.sheet;break}return{ib:b,kb:d,prefix:e,gb:g,sheet:r}}function ba(a){return JSON.parse(a)}function S(a,b){return-1!=a.indexOf(b)?k:f}function J(a){return(n+(a||n)).match(/^(.*?)(-?[0-9\.]+)(.*)$/)}function O(a,
b){var c,d;for(c in b)if(d=c.match(/^on(.+)$/))a.on(d[1],G(a,b[c]))}function ka(){this.stop();this._super()}function H(){return Date.now()}function ca(a){h.scrollTo(0,a)}function qa(){ca(1)}function T(a,b,c){for(c in b)a[c]=b[c];return a}function ra(a,b){b=n+a;return b.match(/^{.*}$/)?ba(b):b.match(/^[0-9\.]+$/)?+b:"true"===b?k:"false"===b?f:a}function la(a){var b=[];b.push.apply(b,a);return b}function v(a,b,c){return a.split(b).join(c)}function Da(a){return v(v(v(v(v(a,"&","&amp;"),'"',"&quot;"),
"'","&#039;"),"<","&lt;"),">","&gt;")}function ma(a,b,c,d){b=c=n;for(d in a)a[d]&&(c+=b+d+"="+encodeURIComponent(a[d]),b="&");return c}function P(a,b){return Object.prototype.toString.call(b)=="[object "+a+"]"?k:f}function na(a){return P("Object",a)}function K(a){return P("Number",a)}function sa(a){return P("String",a)}function Q(a){return P("Function",a)}function ta(a){return P("Boolean",a)}function U(a){return P("Array",a)}function L(a){return a===ja?f:k}function Ea(){return"ontouchstart"in h}function u(){}
function ua(){throw Error("abstract-function was executed without being implemented.");}function va(a){a.preventDefault();return f}function da(a,b){b=b||navigator.userAgent;return!!b.match(a)}function G(a,b){return function(){return b.apply(a,arguments)}}function oa(a,b,c,d){b=b||a;c=c||b;for(d in b)Q(b[d])&&(c[d]=G(a,b[d]));T(a,c);return c}function wa(a,b,c,d){for(var e;k;){e=~~((a+b)/2);if(a==e)return d(e);c(e)?a=e:b=e}}function Fa(a){return a.toString().match(/^\s*function.*\((.+)\)/)}function V(a){return U(a)?
a.slice(0):a}function Ca(a){return p.querySelector(a)}function pa(a,b){return la(b.querySelectorAll(a))}function W(a,b){return 0<=a.className.indexOf(b)?k:f}function X(a,b,c,d){W(a,b)||(c=n,(d=a.className)&&(c=" "),a.className=d+c+b)}function Y(a,b,c,d,e){if(W(a,b)){d=[];c=a.className.split(" ");for(e=c.length;e--;)b!=c[e]&&d.push(c[e]);a.className=d.join(" ")}}function Ga(a,b){if(W(a,b))return Y(a,b);X(a,b)}function ea(a,b,c,d){if(na(b)){for(d in b)b[d]&&a.setAttribute(d,b[d]);return k}return c||
c==n?a.setAttribute(b,c):a.getAttribute(b)}function Ha(a,b){a.removeAttribute(b)}function w(a,b,c){c=p.createElement(a);b&&ea(c,b);return c}function Ia(a){var b=w("div");M(b,a);return la(b.children)}function E(a,b,c){a.addEventListener(b,c,f)}function F(a,b,c){a.removeEventListener(b,c,f)}function Ja(a,b,c,d){function e(a){var c=a.target;W(c,b)&&d.apply(c,arguments)}E(a,c,e);return e}function fa(a){a.style.display="block"}function ga(a){a.style.display="none"}function x(a,b,c,d,e,g){c=a.style;for(d in b)e=
d,g=b[d],K(g)&&(g+="px"),c[e]=g}function ha(a){return p.defaultView.getComputedStyle(a,s)}function Z(a){return a.parentNode}function N(a,b){return a.appendChild(b)}function Ka(a,b){return Z(a).insertBefore(b,a)}function La(a,b){return Z(a).insertBefore(b,a.nextSibling)}function Ma(a,b){return a.insertBefore(b,a.firstChild)}function $(a){return Z(a).removeChild(a)}function M(a,b){if(!L(b))return a.innerHTML;a.innerHTML=b}function Na(a,b){if(!L(b))return a.value;a.value=b}function t(a,b,c){a=a||C.lass;
a=a.extend(b);L(c)&&(a.support=c);return a}function l(a,b){return t(C.Base,a,b)}function Oa(){}function B(a,b,c){var d=a.length;for(c=Pa(c);d--;)c[0]=a[d],b.apply(a,c);return a}function R(a,b,c){c=Pa(c);c[0]=a[0];return b.apply(s,c)}function Pa(a){var b=[s];b.push.apply(b,a);return b}function Qa(a){var b=w(a.type);b.controls=a.controls?k:f;b.preload=a.preload||"auto";b.autoplay=a.autoplay?k:f;b.loop=a.loop?k:f;b.src=a.dir+a.name+"."+a.suffix[0][0];return b}function Ra(a,b){if(!h["HTML"+a+"Element"])return f;
a=a.toLowerCase();for(var c=w(a),d=[],e=0,g=b.length;e<g;e++)c.canPlayType(a+"/"+b[e][1])&&d.push(b[e]);return d.length?d:f}C={};var h=window,p=document,k=!0,f=!1,s=null,n="",D={},ja=void 0,y=Ea(),Sa=m("0.19,1,0.22,1"),I=1.70158,q,Ta,xa,Ua,Va,ya,z,za,Wa,ia;Date.now||(Date.now=function(){return+new Date});C.util={pageTop:qa,override:T,replaceAll:v,template:function(a,b,c,d){for(c in b)d=b[c],a=v(v(a,"<%= "+c+" %>",Da(d)),"<%- "+c+" %>",d);return a},escape:Da,unescape:function(a){return v(v(v(v(v(a,
"&gt;",">"),"&lt;","<"),"&#039;","'"),"&quot;",'"'),"&amp;","&")},windowOpen:function(a,b,c,d,e){e=[];for(d in c)ta(c[d])&&(c[d]===k?c[d]="yes":c[d]===f&&(c[d]="no")),e.push(d+"="+c[d]);return h.open(a,b,e.join(","))},typeCast:ra,makeQueryString:ma,parseQueryString:function(a,b,c,d,e){a=a.replace(/^[\#\?]/,n);b=a.split("&");c=b.length;for(e={};c--;)d=b[c].split("="),e[d[0]]=ra(decodeURIComponent(d[1]));return e},is:P,isObject:na,isNumber:K,isString:sa,isFunction:Q,isBoolean:ta,isArray:U,isDefined:L,
isTouchable:Ea,nullFunction:u,abstraceFunction:ua,eventPrevent:va,eventStop:function(a){a.stopPropagation();return f},checkUserAgent:da,proxy:G,owner:oa,binarySearch:function(a){a=a||D;return wa(a.low||0,a.high||0,a.compare||u,a.end||u)},toArray:la,copyArray:V,hasDeclaredArgument:Fa};C.dom={win:h,doc:p,$:Ca,$$:function(a){return pa(a,p)},$child:function(a,b){return b.querySelector(a)},$$child:pa,$id:function(a){return p.getElementById(a)},on:E,off:F,delegate:Ja,create:w,show:fa,hide:ga,hasClass:W,
addClass:X,removeClass:Y,toggleClass:Ga,css:x,computedStyle:ha,append:N,parent:Z,before:Ka,after:La,insertBefore:Ma,remove:$,attr:ea,removeAttr:Ha,html:M,val:Na,reflow:function(a){a=a||p.body;a.offsetTop},toElement:function(a){return Ia(a)[0]},toElements:Ia};(function(){C.lass=function(){};var a=f,b=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;C.lass.extend=function(c){function d(){!a&&this.init&&this.init.apply(this,arguments)}function e(a){var e=c[a],A=g.prototype[a];Q(e)&&Q(A)&&b.test(e)?d.prototype[a]=
function(){var a,b=this._super;this._super=A;a=e.apply(this,arguments);this._super=b;return a}:d.prototype[a]=e}var g=this,A;a=k;d.prototype=new g;a=f;d.prototype.constructor=d;for(A in c)c.hasOwnProperty(A)&&e(A);d.extend=g.extend;return d}})();C.Base=t(ja,{ub:0,dispose:function(a){a=this;var b=0,c=a.ca;for(b in c)F.apply(s,c[b]);for(b in a)(c=a[b])&&Q(c.dispose)&&c.dispose();a.__proto__=s;for(b in a)a[b]=s,delete a[b];return s},contract:function(a,b,c,d,e){d=this;d.ca||(d.ca={});e=++d.ub;E(a,b,
c);d.ca[e]=[a,b,c];return e},uncontract:function(a){if(a){var b=this.ca,c=b[a];delete b[a];F(c[0],c[1],c[2])}}});C.Observer=l({init:function(){this.pa={}},on:function(a,b,c,d){d=this.pa;d[a]||(d[a]=[]);d[a].push(b)},one:function(a,b,c){function d(e){b(e);c.off(a,d)}c=this;c.on(a,d)},off:function(a,b){var c=this.pa,d=c[a],e;if(!b)return delete c[a];if(d)for(e=d.length;e--;)if(b==d[e])return d.splice(e,1),0==d.length&&delete c[a],k;return f},fire:function(a,b){var c=this.pa[a],d,e,g,A;if(c){d=la(arguments).slice(1);
g=0;for(A=c.length;g<A;g++)(e=c[g])&&e.apply(null,d)}}});q=C.Event=l({SWITCHCLICK:y?"touchstart":"click",SWITCHDOWN:y?"touchstart":"mousedown",SWITCHMOVE:y?"touchmove":"mousemove",SWITCHUP:y?"touchend":"mouseup",SWITCHOVER:y?"touchstart":"mouseover",SWITCHOUT:y?"touchend":"mouseout",LOAD:"load",CHANGE:"change",CLICK:"click",MOUSEDOWN:"mousedown",MOUSEMOVE:"mousemove",MOUSEUP:"mouseup",MOUSEOVER:"mouseover",MOUSEOUT:"mouseout",TOUCHSTART:"touchstart",TOUCHMOVE:"touchmove",TOUCHEND:"touchend",RESIZE:"resize"});
q=C.e=new q;C.ease={linear:function(a,b,c,d){return c*a/d+b},inCubic:function(a,b,c,d){return c*Math.pow(a/d,3)+b},outCubic:function(a,b,c,d){return c*(Math.pow(a/d-1,3)+1)+b},inOutCubic:function(a,b,c,d){return 1>(a/=d/2)?c/2*Math.pow(a,3)+b:c/2*(Math.pow(a-2,3)+2)+b},inQuart:function(a,b,c,d){return c*Math.pow(a/d,4)+b},outQuart:function(a,b,c,d){return-c*(Math.pow(a/d-1,4)-1)+b},inOutQuart:function(a,b,c,d){return 1>(a/=d/2)?c/2*Math.pow(a,4)+b:-c/2*(Math.pow(a-2,4)-2)+b},inQuint:function(a,b,
c,d){return c*Math.pow(a/d,5)+b},outQuint:function(a,b,c,d){return c*(Math.pow(a/d-1,5)+1)+b},inOutQuint:function(a,b,c,d){return 1>(a/=d/2)?c/2*Math.pow(a,5)+b:c/2*(Math.pow(a-2,5)+2)+b},inSine:function(a,b,c,d){return c*(1-Math.cos(a/d*(Math.PI/2)))+b},outSine:function(a,b,c,d){return c*Math.sin(a/d*(Math.PI/2))+b},inOutSine:function(a,b,c,d){return c/2*(1-Math.cos(Math.PI*a/d))+b},inExpo:function(a,b,c,d){return c*Math.pow(2,10*(a/d-1))+b},outExpo:function(a,b,c,d){return c*(-Math.pow(2,-10*a/
d)+1)+b},inOutExpo:function(a,b,c,d){return 1>(a/=d/2)?c/2*Math.pow(2,10*(a-1))+b:c/2*(-Math.pow(2,-10*--a)+2)+b},inCirc:function(a,b,c,d){return c*(1-Math.sqrt(1-(a/=d)*a))+b},outCirc:function(a,b,c,d){return c*Math.sqrt(1-(a=a/d-1)*a)+b},inOutCirc:function(a,b,c,d){return 1>(a/=d/2)?c/2*(1-Math.sqrt(1-a*a))+b:c/2*(Math.sqrt(1-(a-=2)*a)+1)+b},inQuad:function(a,b,c,d){return c*(a/=d)*a+b},outQuad:function(a,b,c,d){return-c*(a/=d)*(a-2)+b},inOutQuad:function(a,b,c,d){return 1>(a/=d/2)?c/2*a*a+b:-c/
2*(--a*(a-2)-1)+b},inBack:function(a,b,c,d){return c*(a/=d)*a*((I+1)*a-I)+b},outBack:function(a,b,c,d){return c*((a=a/d-1)*a*((I+1)*a+I)+1)+b},inOutBack:function(a,b,c,d){return 1>(a/=d/2)?c/2*a*a*(((I*=1.525)+1)*a-I)+b:c/2*((a-=2)*a*(((I*=1.525)+1)*a+I)+2)+b}};C.ssease={linear:"linear",inCubic:m("0.55,0.055,0.675,0.19"),outCubic:m("0.215,0.61,0.355,1"),inOutCubic:m("0.645,0.045,0.355,1"),inQuart:m("0.895,0.03,0.685,0.22"),outQuart:m("0.165,0.84,0.44,1"),inOutQuart:m("0.77,0,0.175,1"),inQuint:m("0.755,0.05,0.855,0.06"),
outQuint:m("0.23,1,0.32,1"),inOutQuint:m("0.86,0,0.07,1"),inSine:m("0.47,0,0.745,0.715"),outSine:m("0.39,0.575,0.565,1"),inOutSine:m("0.445,0.05,0.55,0.95"),inExpo:m("0.95,0.05,0.795,0.035"),outExpo:m("0.19,1,0.22,1"),inOutExpo:m("1,0,0,1"),inCirc:m("0.6,0.04,0.98,0.335"),outCirc:m("0.075,0.82,0.165,1"),inOutCirc:m("0.785,0.135,0.15,0.86"),inQuad:m("0.55,0.085,0.68,0.53"),outQuad:m("0.25,0.46,0.45,0.94"),inOutQuad:m("0.455,0.03,0.515,0.955"),inBack:[m("0.6,0,0.735,0.045"),m("0.6,-0.28,0.735,0.045")],
outBack:[m("0.175,0.885,0.32,1"),m("0.175,0.885,0.32,1.275")],inOutBack:[m("0.68,0,0.265,1"),m("0.68,-0.55,0.265,1.55")]};(function(){var a=Ba(["animation","webkitAnimation"],"Animation"),b=a.prefix,c=a.gb,d=a.ib,e=a.sheet,g=C.SSAnime=t(C.Observer,{Ta:function(){var a=this.b,b=this.wb;F(a,d+"End",b);F(a,"animationend",b)},init:function(a,b,d,f){f=this;f._super();O(f,d);d=d||D;f.qa=d.oncomplete||u;f.b=a;g.id++;f.q="ciranim"+g.id;a=d.duration||g.duration;var k=d.ease||Sa,h,l={};for(h in b)l[h]=b[h],
K(l[h])&&(l[h]+="px");f.Ob=l;l=v(v(JSON.stringify(l),'"',n),",",";");e.insertRule("@"+c+"keyframes "+f.q+"{to"+l+"}",e.cssRules.length);U(k)||(k=[k]);b=f.q;h=0;for(var l=k.length,m=n;h<l;h++)m+=c+"animation:"+b+" "+a+"ms "+k[h]+" 0s 1 normal both;";e.insertRule("."+b+"{"+m+"}",e.cssRules.length);d.manual||f.start()},dispose:ka,start:function(a,c){function g(d){var f=e.cssRules,h=f.length,k;a.Ta();if("webkit"==b){for(;h--;)k=f[h].name||(n+f[h].selectorText).split(".")[1],k==a.q&&e.deleteRule(h);Y(c,
a.q);x(c,a.Ob)}a.fire("complete",d)}a=this;c=a.b;a.fire("start");a.wb=g;E(c,d+"End",g);E(c,"animationend",g);X(c,a.q)},stop:function(){var a={};this.fire("stop");a[c+"animation-play-state"]="paused";x(this.b,a);this.Ta()}},a.kb);g.id=0;g.duration=500})();(function(){var a=Ba(["transitionProperty","webkitTransitionProperty"],"Transition"),b=a.gb,c=a.ib,d=a.sheet,e;e=C.SSTrans=t(C.Observer,{init:function(a,c,r,f){f=this;f._super();O(f,r);r=r||D;e.id++;f.q="cirtrans"+e.id;var h=[];T({},c);var k,l=r.duration||
e.duration,m=r.ease||Sa;U(m)||(m=[m]);for(k in c)h.push(k);k=0;for(var p=m.length,q=n,q=q+(b+"transition-property:"+h.join(" ")+";"+b+"transition-duration:"+l+"ms;");k<p;k++)q+=b+"transition-timing-function:"+m[k]+";";d.insertRule("."+f.q+"{"+q+"}",d.cssRules.length);f.b=a;f.R=c;r.manual||f.start()},dispose:ka,start:function(a){a=this;a.fire("start");a.da=function(b){a.W();setTimeout(function(){a.La||a.fire("complete",b)},1)};E(a.b,c+"End",a.da);E(a.b,"transitionend",a.da);X(a.b,a.q);x(a.b,a.R)},
W:function(a){a=this;var b=d.cssRules,e=b.length,f;F(a.b,c+"End",a.da);F(a.b,"transitionend",a.da);for(Y(a.b,a.q);e--;)if(f=b[e].name||(n+b[e].selectorText).split(".")[1],f==a.q){d.deleteRule(e);break}},La:f,stop:function(){this.La=k;this.fire("stop");this.W()}},a.kb);e.id=0;e.duration=500})();var Aa={request:function(a){return this.nb.call(h,a)},cancel:function(a){return this.qb.call(h,a)}};(function(){var a=["webkit","moz","o","ms"],b,c,d;if(h.requestAnimationFrame)c=h.requestAnimationFrame,d=h.cancelAnimationFrame;
else{for(b=a.length;b--;)if(h[a[b]+"RequestAnimationFrame"]){c=h[a[b]+"RequestAnimationFrame"];d=h[a[b]+"CancelAnimationFrame"];break}c||(c=function(a){return setTimeout(a,1E3/C.AnimeFrame.fps)},d=function(a){clearTimeout(a)})}Aa.nb=c;Aa.qb=d})();C.AnimeFrame=l(Aa);C.AnimeFrame.fps=30;C.animeframe=new C.AnimeFrame;z=C.Tweener=t(C.Observer,{init:function(a,b,c,d,e,g){g=this;g._super();O(g,c);c=c||D;g.cb=a;g.R=[];for(d in b)e=b[d],e.name=d,e.Kb=e.to-e.from,e.prefix=e.prefix||n,e.suffix=e.suffix||(e.suffix===
n?n:"px"),g.R.push(e);g.Ga=c.duration||z.duration;g.vb=c.ease||g.lb;c.manual||g.start()},dispose:ka,lb:function(a,b,c,d){return c*(-Math.pow(2,-10*a/d)+1)+b},V:function(){for(var a=this,b=z.ja,c,d=H(),e,g=b.length,f,r;g--;)if(c=b[g],f=c.R.length,e=d-c.Ib,e<c.Ga)for(;f--;)r=c.R[f],z.Ya(c.cb,r,c.vb(e,r.from,r.Kb,c.Ga));else{for(;f--;)r=c.R[f],z.Ya(c.cb,r,r.to);c.fire("complete");b.splice(g,1)}b.length?C.animeframe.request(function(){a.V()}):a.W()},start:function(a){a=this;a.fire("start");a.Ib=H();z.ja.push(a);
z.Ba||(z.Ba=1,C.animeframe.request(function(){a.V&&a.V()}))},W:function(){z.ja=[];C.animeframe.cancel(z.Ba);z.Ba=s},stop:function(){this.fire("stop");this.W()}});z.Ya=function(a,b,c){a[b.name]=b.prefix||b.suffix?b.prefix+c+b.suffix:c};z.ja=[];z.duration=500;C.$=function(a,b,c,d,e){c="string"==typeof a?(b||p).querySelectorAll(a):[a];d=new Oa;for(e=d.length=c.length;e--;)d[e]=c[e];return d};ia=C.$.Sb={querySelectorAll:function(a){return this[0].querySelectorAll(a)},find:function(a){return C.$(a,this)},
parent:function(){return C.$(Z(this[0]))},on:function(){return B(this,E,arguments)},off:function(){return B(this,F,arguments)},delegate:function(a,b,c){var d;this.na||(this.na={});d=this.na;d[b]||(d[b]={});d=d[b];d[a]||(d[a]=[]);d=d[a];return B(this,function(){var a=Ja.apply(s,arguments);d.push([c,a])},arguments)},undelegate:function(a,b,c){var d=this.na;if(!d)return f;d=d[b];if(!d)return f;d=d[a];if(!d)return f;a=d.length;if(c){for(;a--;)if(d[a][0]===c)return this.off(b,d[a][1]),d.splice(a,1),k;
return f}for(;a--;)this.off(b,d[a][1]),d.splice(a,1);return k},show:function(){return B(this,fa)},hide:function(){return B(this,ga)},hasClass:function(){return R(this,W,arguments)},addClass:function(){return B(this,X,arguments)},removeClass:function(){return B(this,Y,arguments)},toggleClass:function(){return B(this,Ga,arguments)},css:function(){return B(this,x,arguments)},html:function(){return R(this,M,arguments)},val:function(){return R(this,Na,arguments)},attr:function(){return R(this,ea,arguments)},
removeAttr:function(){return B(this,Ha,arguments)},append:function(){return B(this,N,arguments)},before:function(){return R(this,Ka,arguments)},after:function(){return R(this,La,arguments)},insertBefore:function(){return R(this,Ma,arguments)},remove:function(){return B(this,$,arguments)}};(function(){function a(a,g,f,r,h){Q(f)&&(h=f,f=s);Q(r)&&!h&&(h=r,r=s);r&&(r=d[r]);f={duration:f,ease:r,oncomplete:h};if(c)g=new b(a,g,f);else{r=C.Tweener;h=a.style;var k;a=ha(a);var l,m,n={};for(k in g)l=J(g[k]),
m=a.getPropertyValue(k),m=!m||"none"==m?0:+J(m)[2],n[k]={from:m,to:+l[2]||0,prefix:l[1],suffix:l[3]};g=new r(h,n,f)}this.N.push(g)}var b=C.SSAnime||{},c=b.support,d={};c&&C.cssease?d=C.cssease:C.ease&&(d=C.ease);ia.animate=function(){this.N||(this.N=[]);return B(this,a,arguments)};ia.stop=function(a,b){a=this;if(a.N){for(b=a.N.length;b--;)a.N[b].stop();a.N=s}return a}})();C.HashQuery=l({typeCast:function(a){var b=ra(a);return a==b&&(a=a.match("^[\"'](.*)[\"']$"))?a[1]:b},makeHash:function(a){var b=
"#"+a.mode;a=a.vars;var c="?",d;for(d in a)b+=c+d+"="+JSON.stringify(a[d]),c="&";return encodeURI(b)},setHash:function(a){location.hash=this.makeHash(a)},parseHash:function(a){var b=decodeURIComponent(a).split("#")[1],c,d,e;if(!b)return f;b=b.split("?");a=b[0];if(b[1]){c={};b=b[1].split("&");for(e=b.length;e--;)b[e]&&(d=b[e].split("="),c[d[0]]=this.typeCast(d[1]))}return{mode:a,vars:c}},getHash:function(){return this.parseHash(location.hash)}});ya=l({init:function(a){var b=this,c=a.autoplay,d=a.loop,
e,g=a.el||p.body;a.preload="auto";a.autoplay=a.loop=f;switch(a.type){case "Audio":e=C.Audio(a);break;default:e=C.Video(a)}if(b.b=e){if(c){var h;h=b.contract(e,"canplay",function(){b.uncontract(h);b.play()})}d&&b.loop(k);a.oncanplay&&b.contract(e,"canplay",a.oncanplay);a.onended&&b.contract(e,"ended",a.onended);N(g,e)}},dispose:function(){$(this.b);this._super()},getElement:aa("b"),getCurrent:function(){return this.b.currentTime},getDuration:function(){return this.b.duration},setCurrent:function(a){this.b.currentTime=
a},loop:function(a,b){b=this;b.v&&(b.uncontract(b.v),delete b.v);a&&(b.v=b.contract(b.b,"ended",function(){b.stop();b.play()}))},play:function(){this.b.play()},pause:function(){this.b.pause()},stop:function(){this.setCurrent(0);this.pause()}});C.Audio=function(a){a.type="audio";a.suffix=C.Audio.support;return Qa(a)};C.Audio.support=Ra("Audio",[["mp3","mpeg"],["wav","wav"],["ogg","ogg"],["m4a","mp4"]]);C.Sound=function(a){a.type="Audio";return new ya(a)};C.Sound.support=C.Audio.support;C.Video=function(a){a.type=
"video";a.suffix=C.Video.support;return Qa(a)};C.Video.support=Ra("Video",[["webm","webm"],["mp4","mp4"],["ogv","ogg"]]);C.Movie=function(a){a.type="Video";return new ya(a)};C.Movie.support=C.Video.support;C.Ajax=t(C.Observer,{dispose:function(){this.stop();this._super()},init:function(a){this._super(a);a=T({},a);var b=this,c=a.url,d=a.type||"GET",e=n,g=b.Aa=new XMLHttpRequest;"json"==a.dataType&&b.zb(a);O(b,a);a.cache||b.pb(a);a.query&&(e=b.ta(a));g.onreadystatechange=function(){if(4==g.readyState){if(200==
g.status)return b.fire("complete",g.responseText,g);b.fire("error",g)}};"GET"==d&&(c=S(c,"?")?c+"&":c+"?",c+=e,e=n);this.ta=e;g.open(d,c);"POST"==d&&g.setRequestHeader("Content-Type","application/x-www-form-urlencoded");a.manual||b.start()},start:function(){this.fire("start");this.Aa.send(this.ta)},stop:function(){this.Aa.abort();this.fire("stop",this.Aa)},ta:function(a){a=a.query;na(a)&&(a=encodeURI(ma(a)));return a},pb:function(a){a.query||(a.query={});a.query["cir"+H()]="0"},zb:function(a){var b=
a.oncomplete,c=a.onerror;b&&(a.oncomplete=function(a){b(ba(a))});c&&(a.onerror=function(a){c(a)})}});Ta=C.Progress=l({ia:0,oa:0,L:0,p:function(a,b,c){b=this;L(a)&&b.w.push(a);b.L=b.ia/b.za;1<b.L&&(b.L=1);b.Ua(b.L);b.oa&&(c=Error("miss"));if(b.ia==b.za||b.oa)b.qa(c,b.w),b.qa=b.Ua=u},init:function(a,b,c){b=this;c=a.waits;U(c)&&(c=c.length);b.za=c;b.qa=a.oncomplete;b.Ua=a.onprogress||u;b.w=[]},getProgress:aa("L"),pass:function(a){this.ia++;this.p(a)},miss:function(a){this.oa++;this.p(a)},exit:function(a,
b){b=this;b.ia=b.za;b.p(a)}});y=t(C.Observer,{init:function(a){this._super();a=a||D;var b=V(a.queue)||[];O(this,a);this.resetQueue(b);this.K=G(this,this.K)},start:function(){this.fire("start");this.Q=f;this.Ha()},restart:function(a){this.resetQueue(a);this.start()},stop:function(){this.c=s;this.fire("stop")},pause:function(){this.Q=k;this.fire("pause")},resume:function(){this.Q&&(this.fire("resume"),this.Q=f,this.Ha())},resetQueue:function(a){a&&(this.Cb=V(a));a=this.c=V(this.Cb);for(var b in a)a[b].resetQueue&&
a[b].resetQueue();this.fire("reset")},setQueue:function(a){this.c=V(a);this.fire("change",this.getQueue())},getQueue:function(){return V(this.c)},addTask:function(a,b){if(!K(b)||b>this.c.length)b=this.c.length;this.c.splice(b,0,a);this.fire("change",this.getQueue())},removeTask:function(a){for(var b=0,c=this.c.length;b<c;b++)if(this.c[b]===a){this.c.splice(b,1);this.fire("change",this.getQueue());break}},ea:ua,Ha:function(){this.Q||this.ea()},Ca:function(a){var b=this;return a.one&&a.start?(a.one("complete",
G(b,b.K)),G(a,a.start)):Fa(a)?G(b,a):function(c){a.call(b);c()}},K:ua});C.Parallel=C.Async=t(y,{ea:function(){if(this.c){if(0===this.c.length)return this.fire("complete");for(this.Wa=this.c.length;!this.Q&&this.c&&this.c[0];)this.Ca(this.c.shift())(this.K)}},K:function(){this.fire("progress");this.Wa--;0==this.Wa&&this.fire("complete")}});C.Serial=C.Sync=t(y,{ea:function(){if(this.c&&!this.Q){if(this.c[0])return this.Ca(this.c.shift())(this.K);this.fire("complete")}},K:function(){this.fire("progress");
this.ea()}});C.Handle=l({init:function(a){this.f=a;this.attach()},dispose:function(){this.detach();this._super()},attach:function(){this.B(E)},detach:function(){this.B(F)},B:function(a){var b,c=this.f,d=c.events;for(b in d)a(c.el,b,d[b])}});C.Anvas=l({init:function(a,b){b=this;b.aa=a.canvas;b.rb=b.aa.getContext("2d");b.setSize(a)},setSize:function(a){a.width&&(this.aa.width=a.width);a.height&&(this.aa.height=a.height)},pigment:function(a){var b=this,c=w("canvas"),d=w("img");d.onload=function(){c.width=
a.width;c.height=a.height;c.getContext("2d").drawImage(d,0,0);a.onload.apply(b,[c,d])};d.src=a.src;return{image:c,x:a.x||0,y:a.y||0}},pigments:function(a,b){function c(a){var c=a.onload||u;a.onload=function(a,e){c(a,e);g--;0==g&&b.call(d,f)};f[e]=d.pigment(a);g++}var d=this,e,g=0,f={};b=b||u;for(e in a)c(a[e]);return f},draw:function(a){var b=0,c=a.length,d=this.rb,e=this.aa;for(d.clearRect(0,0,e.width,e.height);b<c;b++)(e=a[b])&&d.drawImage(e.image,e.x,e.y)}},!!h.HTMLCanvasElement);(function(){function a(a){a=
+a;10>a&&(a="0"+a);return""+a}var b="Sun Mon Tue Wed Thu Fri Sat".split(" "),c="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),d="January February March April May June July August September October November December".split(" "),e="Jan Feb Mar Apr May June July Aug Sep Oct Nov Dec".split(" "),g={d:function(b){return a(g.j(b))},j:function(a){return a.getDate()},D:function(a){return b[a.getDay()]},l:function(a){return c[a.getDay()]},F:function(a){return d[a.getMonth()]},M:function(a){return e[a.getMonth()]},
m:function(b){return a(g.n(b))},n:function(a){return a.getMonth()+1},Y:function(a){return a.getFullYear()},y:function(a){a=g.Y(a);a=""+a;return a.slice(a.length-2)},a:function(a){return g.A(a).toLowerCase()},A:function(a){return 12>g.G(a)?"AM":"PM"},g:function(a){a=g.G(a);return 12==a||0==a||24==a?12:a%12},G:function(a){return a.getHours()},h:function(b){return a(g.g(b))},H:function(b){return a(g.G(b))},i:function(b){return a(g.I(b))},s:function(b){return a(g.S(b))},I:function(a){return a.getMinutes()},
S:function(a){return a.getSeconds()}},f=/%([djDlFMmnYyaAgGhHisIS])/g;C.DateFactory=l({make:function(a){switch(k){case sa(a):return a=a.split(/[T:\-\+\/\s]/),new Date(+a[0],a[1]-1,+a[2],+a[3]||0,+a[4]||0,+a[5]||0);case K(a):return new Date(a);case P("Date",a):return a}return new Date},format:function(a,b){b=this.make(b);return a.replace(f,function(a,c){return g[c](b)})}})})();C.Rollover=l({init:function(a,b){b=this;var c=a.toggleClass||n,d=a.over||u,e=a.out||u;b.u=a.els;b.Eb=function(){X(b,c);d()};
b.bb=function(){Y(b,c);e()};a.manual||b.attach()},dispose:function(){this.detach();this._super()},attach:function(){this.B(E)},detach:function(){this.B(F)},B:function(a,b,c){b=this;for(c=b.u.length;c--;)a(b.u[c],q.SWITCHOVER,b.Eb),a(b.u[c],q.SWITCHOUT,b.bb),a(b.u[c],q.MOUSEOUT,b.bb)}});C.DataStore=l({ba:function(){return!this.X?{}:[]},init:function(a){a=a||D;this.X=a.array||f;this.reset()},set:function(a,b){var c;"object"!==typeof a&&(c={},c[a]=b,a=c);for(c in a)this.O[c]=a[c]},get:function(a){var b=
this.ba(),c=this.O,d;if(a)return c[a];for(d in c)b[d]=c[d];return b},remove:function(a){L(this.O[a])&&(this.X?this.data.splice(a,1):delete this.O[a])},reset:function(){this.O=this.ba()}});za=l({ba:function(){return!this.X?{}:[]},init:function(a){this.X=a.array||f;this.P=a.namespace?a.namespace+"-":n;this.T=h[a.type+"Storage"]},set:function(a,b){var c;"object"!==typeof a&&(c={},c[a]=b,a=c);for(c in a)this.T.setItem(this.P+c,JSON.stringify(a[c]))},get:function(a,b){b=this;var c=this.ba(),d,e=b.T;if(a)return ba(e.getItem(b.P+
a));for(d in e)b.P?(a=d.split(b.P)[1])&&(c[a]=ba(e[d])):c[d]=ba(e[d]);return c},remove:function(a,b){b=this;a=b.P+a;L(b.T.getItem(a))&&b.T.removeItem(a)},reset:function(a,b){a=this;if(!a.P)return a.T.clear();for(b in a.T)a.remove(b)}});C.LocalStorage=function(a){a=a||{};a.type="local";return new za(a)};C.SessionStorage=function(a){a=a||{};a.type="session";return new za(a)};C.Deferred=l({init:function(){this.c=[]},isResolve:function(){return!this.c},resolve:function(a,b){b=this;if(b.isResolve())return b;
var c=b.c,d=c.length,e=0;b.c=s;for(b.O=a;e<d;++e)c[e](a);return b},done:function(a,b){b=this;b.c?b.c.push(a):a(b.O);return b}});C.DragFlick=l({wa:function(a){return a.changedTouches?a.changedTouches[0]:a},mb:function(a){var b=this,c,d,e=f;b.k.push(b.contract(a.el,q.SWITCHDOWN,function(a){var f=b.wa(a);c=f.pageX;d=f.pageY;e=k;va(a)}),b.contract(h,q.SWITCHUP,function(g){e&&(g=b.wa(g),a.callback({x:g.pageX-c,y:g.pageY-d}),e=f)}))},tb:function(a){this.mb({el:a.el,callback:function(b){var c=a.boundary||
0,d={change:f,top:f,right:f,bottom:f,left:f,amount:b};Math.abs(b.x)>c&&(0<b.x?d.right=k:0>b.x&&(d.left=k),d.change=k);Math.abs(b.y)>c&&(0<b.y?d.bottom=k:0>b.y&&(d.top=k),d.change=k);a.callback(d)}})},init:function(a,b){b=this;b.k=[];a=(b.f=a)||D;a.manual||b.attach()},attach:function(){function a(a,c,d){b.k.push(b.contract(a,c,function(a){d(b.wa(a))}))}var b=this,c=this.f,d=c.el,e=c.start||u,g=c.move||u,h=c.end||u,l=f,m=0,n=0;c.direction&&b.tb({el:d,boundary:c.boundary,callback:c.direction});a(d,q.SWITCHDOWN,
function(a){l=k;m=a.pageX;n=a.pageY;e({e:a,move:{x:m,y:n}})});a(p,q.SWITCHMOVE,function(a){l&&g({e:a,move:{x:a.pageX-m,y:a.pageY-n}})});a(p,q.SWITCHUP,function(a){l&&(h({e:a,move:{x:a.pageX-m,y:a.pageY-n}}),l=f)})},detach:function(a){a=this;for(var b=a.k,c=b.length;c--;)a.uncontract(b[c]);a.k=[]}});C.ExternalInterface=function(a){a=a||D;return a.android?new Ua(a):new Va};Ua=t(C.HashQuery,{init:function(a){this.f=a},call:function(a){this.f.android[a.mode](this.makeHash(a))},addCallback:function(a,
b,c){c=this;c.f.externalObj[a]=function(a){b(c.parseHash(a).vars)}},removeCallback:function(a){delete this.f.externalObj[a]}});Va=t(C.HashQuery,{init:function(){this.U={}},dispose:function(a){for(a in this.U)this.removeCallback(a);this._super()},call:function(a){this.setHash(a)},addCallback:function(a,b,c){c=this;c.U[a]=function(d){d=c.getHash();d.mode==a&&b(d.vars)};E(h,"hashchange",c.U[a])},removeCallback:function(a){F(h,"hashchange",this.U[a]);delete this.U[a]}});C.Facebook=l({shareURL:function(a){return"https://www.facebook.com/dialog/feed?app_id="+
a.app_id+"&redirect_uri="+a.redirect_uri+ma({link:a.link,picture:a.picture,name:a.name,caption:a.caption,description:a.description})}});C.FPS=l({sa:0,Bb:0,v:0,init:function(a,b){b=this;b.ma=b.va=a.criterion;b.Sa=b.Ia(b.ma);b.xb=a.enterframe;a.manual||b.start()},dispose:ka,getCriterion:aa("ma"),getSurver:aa("va"),getFrameTime:aa("Sa"),enter:function(a){a=this;a.xb({criterion:a.ma,surver:a.va})},start:function(a){a=this;a.sa=H();a.v=setInterval(a.V,a.Sa,a)},V:function(a,b){b=a.Bb=H();a.va=a.Ia(b-a.sa);
a.sa=b;a.enter()},Ia:function(a){return Math.round(1E3/a)},stop:function(){clearInterval(this.v)}});y=t(C.Observer,{xa:"",init:function(a,b){this._super(a);b=this;b.ua=a.srcs;b.Na=[];b.k=[];b.L=new Ta({waits:b.ua,onprogress:function(a){b.fire("progress",a)},oncomplete:function(){for(var a=b.k.length;a--;)b.uncontract(b.k[a]);b.k=[];b.fire("complete",b.Na)}});O(b,a);a.manual||b.start()},start:function(){function a(){b.L.pass()}var b=this,c,d=0,e=b.ua.length;this.fire("start");if(!b.Db)for(b.Db=k;d<
e;d++)c=w(b.xa),c.src=b.ua[d],b.k.push(b.contract(c,q.LOAD,a)),b.Na.push(c),b.Oa(c)},Oa:u});C.ImgLoad=t(y,{xa:"img"});C.ScriptLoad=t(y,{xa:"script",Oa:function(a){N(p.body,a)}});(function(){function a(){b=k;F(h,q.LOAD,a)}var b=f;E(h,q.LOAD,a);C.WindowLoad=t(C.Observer,{init:function(a){this._super();O(this,a);a.manual||this.start()},start:function(){var a=this;a.fire("start");if(!a.Pb)if(a.Pb=k,b)a.fire("complete");else var d=a.contract(h,q.LOAD,function(){a.uncontract(d);a.fire("complete")})}})})();
y=C.Mobile=l({getZoom:function(){return p.body.clientWidth/h.innerWidth},isAndroid:function(a){return da(/Android/i,a)},isIOS:function(a){return da(/iPhone|iPad|iPod/i,a)},isWindows:function(a){return da(/IEMobile/i,a)},isFBAPP:function(a){return da(/FBAN/,a)},isMobile:function(a){a=this;return a.isAndroid()||a.isIOS()||a.isWindows()||a.isFBAPP()},hideAddress:function(){function a(){0==h.pageYOffset&&qa()}function b(){setTimeout(a,100)}this.contract(h,q.LOAD,b,f);this.contract(h,"orientationchange",
b,f)}});C.mobile=new y;(function(){var a=h.navigator.userAgent.toLowerCase(),b;b=S(a,"opera")?"opera":S(a,"msie")?"ie":S(a,"chrome")?"chrome":S(a,"safari")?"safari":S(a,"gecko")?"gecko":"ather";Wa=C.PC=l({isChrome:function(){return"chrome"==b},isSafari:function(){return"safari"==b},isGecko:function(){return"gecko"==b},isOpera:function(){return"opera"==b},isIE:function(){return"ie"==b}});C.pc=new Wa})();C.Orientation=l({init:function(a,b){b=this;b.f=a;b.k=[];b.Va={portrait:k,landscape:f};b.Ma={portrait:f,
landscape:k};b.attach()},get:function(a){a=this;return K(h.orientation)?90!=Math.abs(h.orientation)?a.Va:a.Ma:h.innerWidth<h.innerHeight?a.Va:a.Ma},fire:function(a){a=this;if(a.get().portrait)return a.f.portrait();a.f.landscape()},attach:function(a,b){b=this;var c=G(b,b.fire);b.k.push(b.contract(h,q.LOAD,c),b.contract(h,"orientationchange",c),b.contract(h,q.RESIZE,c))},detach:function(a){a=this;for(var b=a.k.length;b--;)a.uncontract(a.k[b]);a.k=[]}},"onorientationchange"in h);C.Modal=l({Ea:function(a){a=
this;for(var b=a.k.length;b--;)a.uncontract(a.k[b]);a.k=[]},init:function(a,b,c){b=this;a=a||D;b.f=a;c={display:"none",position:"absolute"};b.Xa=new C.Scroll;b.k=[];b.C=w("div",{"class":"cir-modal-bg"});x(b.C,T({"z-index":"9998",top:0,left:0,width:"100%",height:"200%"},c));N(p.body,b.C);b.r=w("div",{"class":"cir-modal-content"});x(b.r,T({"z-index":"9999",top:"50%",left:"50%"},c));N(p.body,b.r);a.manual||b.open()},dispose:function(a){a=this;a.close();$(a.C);$(a.r);this._super()},open:function(a,b){b=
this;b.Xa.kill();x(b.C,{top:p.body.scrollTop});fa(b.C);b.inner(a)},close:function(a){a=this;a.Ea();M(a.r,n);ga(a.r);ga(a.C);a.Xa.revival()},inner:function(a,b,c,d,e){b=this;b.Ea();a=a||b.f.html;M(b.r,a);fa(b.r);c=ha(b.r);x(b.r,{"margin-top":p.body.scrollTop-J(c.height)[2]/2,"margin-left":-(J(c.width)[2]/2)});b.f.bgClose&&b.contract(b.C,q.CLICK,G(b,b.close));if(b.f.closeSelector){d=pa(b.f.closeSelector,b.r);for(e=d.length;e--;)b.k.push(b.contract(d[e],q.CLICK,G(b,b.close)))}}});xa=l({init:function(a){this.f=
a;this.attach()},attach:function(a){a=this;a.detach();a.ob=a.contract(h,a.f.e,a.f.callback)},detach:function(){this.uncontract(this.ob)}});C.DeviceOrientation=function(a){a.e="deviceorientation";return xa(a)};C.DeviceOrientation.support="ondeviceorientation"in h;C.DeviceMotion=function(a){a.e="devicemotion";return xa(a)};C.DeviceMotion.support="ondevicemotion"in h;(function(){var a,b;C.DeviceOrientation.support?(a=C.DeviceOrientation,b=function(a){return a}):C.DeviceMotion.support&&(a=C.DeviceMotion,
b=function(a){return a.rotationRate});C.DeviceShake=l({Jb:{x:"gamma",y:"beta",z:"alpha"},init:function(b,d){d=this;d.Za=new a;d.f=b;d.attach()},attach:function(){var a,d=this.f,e=this.Jb[d.direction];this.Za.attach(function(g){g=b(g);a||(a=g);Math.abs(g[e]-a[e])>d.limit&&(a=s,d.callback(g),setTimeout(function(){},d.waittime))})},detach:function(){this.Za.detach()}},a?k:f)})();C.FontImg=l({init:function(a,b){a=a||D;this.Gb=(b=a.type)?b+"_":n;this.Fb=a.tag||"span"},make:function(a){a=(n+a).split(n);
for(var b=this.Fb,c=n,d=a.length;d--;)c="<"+b+' class="font_'+this.Gb+a[d]+'"></'+b+">"+c;return c}});C.PreRender=t(C.Observer,{init:function(a,b){b=this;b._super();b.u=a.els;b.Ja=a.guesslimit||30;b.Qa=a.looptime||100;b.Ab=b.Qa+(a.loopblur||20);O(b,a);a.manual||b.start()},dispose:function(){clearInterval(this.v);this._super()},start:function(){var a,b=this,c=H();b.fire("start");for(a=b.u.length;a--;)fa(b.u[a]);b.v=setInterval(function(){var a=H(),e=a-c;c=a;if(e<b.Ab&&(b.Ja--,1>b.Ja)){clearInterval(b.v);
for(a=b.u.length;a--;)ga(b.u[a]);b.fire("complete")}},b.Qa,b)}});C.Route=l({init:function(a){this.f=a;a.manual||this.start()},start:function(){this.fire(this.f.target)},fire:function(a){var b,c=this.f,d=c.action;if(c.noregex&&d[a])return d[a](a);for(b in d)if(a.match(b))d[b](b)}});(function(){function a(a){return d?c.getResponseHeader(a):f}function b(a){var b=new XMLHttpRequest;b.onload=function(){a(b)};b.open("HEAD",location.href+"?update"+H()+"=1");b.send(s);return b}var c,d=f;C.ServerMeta=l({init:function(a){a=
a||D;var g=a.callback||u;c?g(c):c=b(function(){d=k;g(c)})},date:function(a){return b(function(b){a(b.getResponseHeader("Date"))})},connection:function(){return a("Connection")},contentLength:function(){return a("Content-Length")},lastModified:function(){return a("Last-Modified")},server:function(){return a("Server")},contentType:function(){return a("Content-Type")},acceptRanges:function(){return a("Accept-Ranges")},keepAlive:function(){return a("Keep-Alive")}})})();C.Surrogate=l({init:function(a){this.sb=
a.delay;this.Z=a.callback},dispose:function(){this.clear();this._super()},request:function(a,b){b=this;b.w=a;b.clear();b.ya=setTimeout(b.flush,b.sb,b)},flush:function(a){a=a||this;a.Z(a.w)},clear:function(){clearTimeout(this.ya)}});C.Throttle=l({init:function(a){this.Hb=a.waittime;this.Z=a.callback},dispose:function(){this.unlock();this._super()},request:function(a,b){b=this;b.Pa?b.w=a:(b.Z(a),b.lock(),b.ya=setTimeout(function(){b.w&&(b.Z(b.w),b.w=s);b.unlock()},b.Hb,b))},lock:function(){this.Pa=
k},unlock:function(a){a=a||this;a.Pa=f;clearTimeout(a.ya)}});C.Timer=function(a){function b(){s=H();var a=g-(s-p)/1E3;0>a&&(a=0);u=c(a);l(u);s>t?(w.stop(),m()):v=setTimeout(b,h)}function c(a){var b;b=(n+a).split(".");a=b[0];b=b[1]?b[1]:n;a=d({jb:a,hb:q.Mb});b=d({jb:b,hb:q.Lb,Nb:k});return a+"."+b}function d(a){var b=n+a.jb,c=a.hb,d=c-b.length;return!a.Nb?-1<d?e(d,0)+b:e(c,9):0<d?b+e(d,0):b.slice(0,c)}function e(a,b){var c=n;for(b=n+b;0<a;)c+=b,a--;return c}var g=a.limit,f=1E3*g,h=1E3*a.interval,l=
a.onupdate,m=a.ontimeup,q=function(a){a=a.split(".");return{Mb:a[0].length,Lb:a[1].length}}(a.template),p=0,s=0,t=f,u=c(g),v,w={getLimit:function(){return g},getTime:function(){return u},getProgress:function(){return 1-(t-s)/f},setUpdate:function(a){l=a},setTimeup:function(a){m=a},countDown:function(){s=p=H();t=p+f;b()},stop:function(){clearTimeout(v)}};return w};C.Twitter=l({shareURL:function(a){var b=a.name,c=a.hash,b=b?" \u300c"+b+"\u300d":n,c=c?" "+c:n;return"https://twitter.com/intent/tweet?"+
ma({url:a.redirect_uri,text:(a.caption||n)+b+c})}});C.XML=l({init:function(a){this.b=w("div");M(this.b,a.data)},$:function(a){return this.b.querySelector(a)},$$:function(a){return pa(a,this.b)}});C.Model=l({ha:function(a,b,c,d){d=this;d.t.fire(a,d.o.get());b&&d.t.fire(a+":"+b,c)},init:function(a,b){b=this;a=a||D;var c,d=a.defaults||b.defaults||{},e=a.events||b.events;b.eb=a.validate||b.validate||{};b.o=a.store||b.store||new C.DataStore;b.t=new C.Observer;for(c in d)b.set(c,d[c]);for(c in e)b.on(c,
e[c])},set:function(a,b,c){c=this;var d;"object"!==typeof a&&(d={},d[a]=b,a=d);c.ra=c.o.get();for(d in a){b=a[d];if(c.eb[d]&&!c.eb[d](d,b))return c.ha("fail",d,b);c.o.set(d,b);c.t.fire(q.CHANGE+":"+d,b)}c.t.fire(q.CHANGE,c.o.get())},prev:function(a){return!a?this.ra:this.ra[a]},get:function(a){return this.o.get(a)},remove:function(a,b){b=this;if(a){var c=b.o.get(a),d=b.o.remove(a);b.ha("remove",a,c);return d}},reset:function(){this.o.reset();this.ha("reset")},on:function(a,b,c){c=G(this,b);this.t.on(a,
c);return c},off:function(a,b){this.t.off(a,b)},fire:function(a,b){return this.t.fire.apply(this.t,arguments)}});C.View=l({init:function(a,b){b=this;a=a?oa(b,a):oa(b,b,{});b.el=C.$(a.el||b.el||w("div"));b.attach();a.init&&b.init()},dispose:function(){this.detach();this._super()},B:function(a,b,c,d,e,f){b=this;f=b.events;for(c in f)for(d in e="me"==c?b.el:b.el.find(c),f[c])e[a](d,b[f[c][d]])},attach:function(){this.B("on")},detach:function(){this.B("off")}});C.Ollection=t(C.Model,{init:function(a,
b){b=this;a=a||D;var c,d=a.defaults||b.defaults||[],e=a.events||b.events;b.o=a.store||b.store||new C.DataStore({array:k});b.t=new C.Observer;for(c in d)b.set(c,d[c]);for(c in e)b.on(c,e[c])},set:function(a,b,c){c=this;var d;"object"!==typeof a&&(d={},d[a]=b,a=d);c.ra=c.o.get();for(d in a){b=a[d];if(!K(+d))return c.ha("fail",a,b);c.o.set(a,b);c.t.fire(q.CHANGE,b,+d,c.o.get())}},add:function(a){var b=this.o.get().length;this.set(b,a);return b},each:function(a){var b,c=this.get();for(b in c)a.apply(this,
[c[b],b,c])},map:function(a){var b,c=this.get();for(b in c)this.set(b,a.apply(this,[c[b],b,c]))}});C.Validate=l({p:function(a,b,c,d){if(a(c))return k;this.displayError(b,d)},init:function(a,b){b=this;a=a||{};b.Qb=a.level;oa(b,b,a)},displayError:function(a,b){b="Validate Error:"+a+" is "+b+".";switch(this.Rb){case "log":return console.log(b),f;case "error":throw Error(b);case "off":return f}console.warn(b);return f},isObject:function(a,b){return this.p(na,a,b,"Object")},isNumber:function(a,b){return this.p(K,
a,b,"Number")},isString:function(a,b){return this.p(sa,a,b,"String")},isFunction:function(a,b){return this.p(Q,a,b,"Function")},isBoolean:function(a,b){return this.p(ta,a,b,"Boolean")},isArray:function(a,b){return this.p(U,a,b,"Array")}});C.validate=new C.Validate;C.Scroll=l({dispose:function(){this.revival();clearInterval(this.$a);this._super()},to:ca,toTop:qa,toBottom:function(){ca(p.height)},checkBottom:function(a){return p.body.scrollHeight-h.innerHeight-p.body.scrollTop<=(a||0)?k:f},scrollY:function(a){a=
h.pageYOffset;return a!==ja?a:(p.documentElement||p.body.parentNode||p.body).scrollTop},smooth:function(a,b,c,d){c=this;b=b||u;c.ab||(c.ab=k,K(a)||(a=a.offsetTop),d=p.height-h.innerHeight,a>d&&(a=d),c.Da=c.scrollY(),c.$a=setInterval(function(d){d=c.scrollY();d=0.3*(a-d)+d;if(1>Math.abs(a-d)||c.Da==d)return ca(a),clearInterval(c.$a),b(a),delete c.ab;c.Da=d;ca(d)},50))},kill:function(a){a=this;a.fa||(x(p.body,{overflow:"hidden"}),a.fa=a.contract(p,q.TOUCHMOVE,va))},revival:function(a){a=this;a.fa&&
(x(p.body,{overflow:"auto"}),a.uncontract(a.fa),delete a.fa)}});C.LimitText=l({Ra:8,ka:function(a){M(this.J,a);N(Z(this.b),this.J)},la:function(){M(this.J,n);$(this.J)},init:function(a){var b=this.b=a.el,c=ha(b),b=this.J=w(b.tagName,{"class":ea(b,"class"),style:ea(b,"style")}),d=this.Fa=ha(b);this.fb=a.width;this.Ka=a.height;L(a.width)||(this.fb=+J(c.width)[2]);L(a.height)||(this.Ka=+J(c.height)[2]);x(b,{position:"fixed",top:0,left:0,visibility:"hidden"});this.ka(0);this.yb=+J(d.fontSize)[2];this.la()},
ga:function(){return+J(this.Fa.width)[2]<=this.fb&&+J(this.Fa.height)[2]<=this.Ka?k:f},getLimitFontSize:function(a){a=n+a;var b=this,c=b.yb,d;x(b.J,{fontSize:c});b.ka(a);b.ga()?d=c:wa(b.Ra-1,c,function(a){x(b.J,{fontSize:a});return b.ga()},function(a){d=a});b.la();d<b.Ra&&(d=0);return d},getLimitTextLength:function(a){a=n+a;var b=this,c=a.length,d;b.ka(a);b.ga()?d=c:wa(0,c,function(c){M(b.J,a.slice(0,c));return b.ga()},function(a){d=a});b.la();return d}});ia&&(Oa.prototype=ia)})();
