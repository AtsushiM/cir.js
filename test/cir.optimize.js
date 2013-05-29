// cir.js v0.15.4 | (c) 2013 Atsushi Mizoue.
(function(){
/* optimize: C.util C.dom C.lass C.Base C.Event C.$ C.$.methods C.$.methods.animate C.Observer C.Progress C.Async(C.Parallel) C.Sync(C.Serial) C.Ajax C.PreRender C.ImgLoad C.ScriptLoad C.WindowLoad C.Orientation C.Rollover C.Scroll C.Modal C.DateFactory C.Router C.HashQuery C.Facebook C.Twitter C.Mobile C.PC C.AnimeFrame C.Tweener C.ease C.SSAnime C.SSTrans C.ssease C.Anvas C.DataStore C.LocalStorage C.SessionStorage C.Model C.Ollection C.View C.Validate C.DragFlick C.FontImg C.LimitText C.Audio C.Sound C.Video C.Movie C.ExternalInterface C.ExternalInterface.Android C.ExternalInterface.IOS C.FPS C.ServerMeta C.Surrogate C.Throttle C.XML C.Timer C.DeviceMotion C.DeviceOrientation C.DeviceShake */
function aa(a){return function(){return this[a]}}function g(a){return"cubic-bezier("+a+")"}function ba(a,b){for(var c=j("p"),d=k,e,f=l,h=a.length,m,x=RegExp("^(.*?)"+a[0]+"$","i");h--;)if(n(c.style[a[h]])){d=p;(e=a[h].match(x)[1])?(f=e.toLowerCase(),b=f+b,f="-"+f+"-"):b=b.toLowerCase();c=q(ca("head"),j("style",{type:"text/css"}));m=c.sheet;break}return{pb:b,rb:d,prefix:e,nb:f,sheet:m}}function da(a){return JSON.parse(a)}function r(a,b){return-1!=a.indexOf(b)?p:k}
function s(a){return(l+(a||l)).match(/^(.*?)(-?[0-9\.]+)(.*)$/)}function t(a,b){var c,d;for(c in b)if(d=c.match(/^on(.+)$/))a.on(d[1],u(a,b[c]))}function ea(){this.stop();this._super()}function v(a){this.fire("complete",a)}function w(){this.fire("start")}function fa(a){this.fire("progress",a)}function ga(a){if(a){var b=this.ha,c=b[a];delete b[a];y(c[0],c[1],c[2])}}function ha(a,b,c,d,e){d=this;d.ha||(d.ha={});e=++d.Bb;z(a,b,c);d.ha[e]=[a,b,c];return e}function A(){return Date.now()}
function ia(a){D.scrollTo(0,a)}function ja(){ia(1)}function E(a,b,c){for(c in b)a[c]=b[c];return a}function ka(a,b){b=l+a;return b.match(/^{.*}$/)?da(b):b.match(/^[0-9\.]+$/)?+b:"true"===b?p:"false"===b?k:a}function la(a){var b=[];b.push.apply(b,a);return b}function F(a,b,c){return a.split(b).join(c)}function ma(a){return F(F(F(F(F(a,"&","&amp;"),'"',"&quot;"),"'","&#039;"),"<","&lt;"),">","&gt;")}function na(a,b,c,d){b=c=l;for(d in a)a[d]&&(c+=b+d+"="+encodeURIComponent(a[d]),b="&");return c}
function G(a,b){return Object.prototype.toString.call(b)=="[object "+a+"]"?p:k}function H(a){return G("Object",a)}function I(a){return G("Number",a)}function oa(a){return G("String",a)}function J(a){return G("Function",a)}function pa(a){return G("Boolean",a)}function K(a){return G("Array",a)}function n(a){return a===qa?k:p}function ra(){return"ontouchstart"in D}function L(){}function sa(a){a.preventDefault();return k}function ta(a,b){b=b||navigator.userAgent;return!!b.match(a)}
function u(a,b){return function(){return b.apply(a,arguments)}}function ua(a,b,c,d){b=b||a;c=c||b;for(d in b)J(b[d])&&(c[d]=u(a,b[d]));E(a,c);return c}function va(a,b,c,d){for(var e;p;){e=~~((a+b)/2);if(a==e)return d(e);c(e)?a=e:b=e}}function wa(a){return a.toString().match(/^\s*function.*\((.+)\)/)}function xa(a){return K(a)?a.slice(0):a}function ca(a){return M.querySelector(a)}function ya(a,b){return la(b.querySelectorAll(a))}function Aa(a,b){return 0<=a.className.indexOf(b)?p:k}
function Ba(a,b,c,d){Aa(a,b)||(c=l,(d=a.className)&&(c=" "),a.className=d+c+b)}function Ca(a,b,c,d,e){if(Aa(a,b)){d=[];c=a.className.split(" ");for(e=c.length;e--;)b!=c[e]&&d.push(c[e]);a.className=d.join(" ")}}function Da(a,b){if(Aa(a,b))return Ca(a,b);Ba(a,b)}function Ea(a,b,c,d){if(H(b)){for(d in b)b[d]&&a.setAttribute(d,b[d]);return p}return c||c==l?a.setAttribute(b,c):a.getAttribute(b)}function Fa(a,b){a.removeAttribute(b)}function j(a,b,c){c=M.createElement(a);b&&Ea(c,b);return c}
function Ga(a){var b=j("div");N(b,a);return la(b.children)}function z(a,b,c){a.addEventListener(b,c,k)}function y(a,b,c){a.removeEventListener(b,c,k)}function Ha(a,b,c,d){function e(a){var c=a.target;Aa(c,b)&&d.apply(c,arguments)}z(a,c,e);return e}function Ia(a){a.style.display="block"}function Ja(a){a.style.display="none"}function O(a,b,c,d,e,f){c=a.style;for(d in b)e=d,f=b[d],I(f)&&(f+="px"),c[e]=f}function Ka(a){return M.defaultView.getComputedStyle(a,P)}function La(a){return a.parentNode}
function q(a,b){return a.appendChild(b)}function Ma(a,b){return La(a).insertBefore(b,a)}function Na(a,b){return La(a).insertBefore(b,a.nextSibling)}function Oa(a,b){return a.insertBefore(b,a.firstChild)}function Pa(a){return La(a).removeChild(a)}function N(a,b){if(!n(b))return a.innerHTML;a.innerHTML=b}function Qa(a,b){if(!n(b))return a.value;a.value=b}function Q(a,b,c){a=a||C.lass;a=a.extend(b);n(c)&&(a.support=c);return a}function R(a,b){return Q(C.Base,a,b)}
function S(a,b){return Q(C.Observer,a,b)}function Ra(){}function T(a,b,c){var d=a.length;for(c=Sa(c);d--;)c[0]=a[d],b.apply(a,c);return a}function U(a,b,c){c=Sa(c);c[0]=a[0];return b.apply(P,c)}function Sa(a){var b=[P];b.push.apply(b,a);return b}function Ta(a){var b=j(a.type);b.controls=a.controls?p:k;b.preload=a.preload||"auto";b.autoplay=a.autoplay?p:k;b.loop=a.loop?p:k;b.src=a.dir+a.name+"."+a.suffix[0][0];return b}
function Ua(a,b){if(!D["HTML"+a+"Element"])return k;a=a.toLowerCase();for(var c=j(a),d=[],e=0,f=b.length;e<f;e++)c.canPlayType(a+"/"+b[e][1])&&d.push(b[e]);return d.length?d:k}C={};var D=window,M=document,p=!0,k=!1,P=null,l="",V={},qa=void 0,Va=ra(),Wa=g("0.19,1,0.22,1"),W=1.70158,X,Xa,Ya,Za,db,eb,Y,fb,gb,hb,ib;Date.now||(Date.now=function(){return+new Date});
C.util={pageTop:ja,override:E,replaceAll:F,template:function(a,b,c,d){for(c in b)d=b[c],a=F(F(a,"<%= "+c+" %>",ma(d)),"<%- "+c+" %>",d);return a},escape:ma,unescape:function(a){return F(F(F(F(F(a,"&gt;",">"),"&lt;","<"),"&#039;","'"),"&quot;",'"'),"&amp;","&")},windowOpen:function(a,b,c,d,e){e=[];for(d in c)pa(c[d])&&(c[d]===p?c[d]="yes":c[d]===k&&(c[d]="no")),e.push(d+"="+c[d]);return D.open(a,b,e.join(","))},typeCast:ka,makeQueryString:na,parseQueryString:function(a,b,c,d,e){a=a.replace(/^[\#\?]/,
l);b=a.split("&");c=b.length;for(e={};c--;)d=b[c].split("="),e[d[0]]=ka(decodeURIComponent(d[1]));return e},is:G,isObject:H,isNumber:I,isString:oa,isFunction:J,isBoolean:pa,isArray:K,isDefined:n,isTouchable:ra,nullFunction:L,abstraceFunction:function(){throw Error("call abstract-function.");},eventPrevent:sa,eventStop:function(a){a.stopPropagation();return k},checkUserAgent:ta,proxy:u,owner:ua,binarySearch:function(a){a=a||V;return va(a.low||0,a.high||0,a.compare||L,a.end||L)},toArray:la,copyArray:xa,
hasDeclaredArgument:wa};C.dom={win:D,doc:M,$:ca,$$:function(a){return ya(a,M)},$child:function(a,b){return b.querySelector(a)},$$child:ya,$id:function(a){return M.getElementById(a)},on:z,off:y,delegate:Ha,create:j,show:Ia,hide:Ja,hasClass:Aa,addClass:Ba,removeClass:Ca,toggleClass:Da,css:O,computedStyle:Ka,append:q,parent:La,before:Ma,after:Na,insertBefore:Oa,remove:Pa,attr:Ea,removeAttr:Fa,html:N,val:Qa,reflow:function(a){a=a||M.body;a.offsetTop},toElement:function(a){return Ga(a)[0]},toElements:Ga};
C.lass=function(){};var jb=k,kb=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;C.lass.extend=function(a){function b(){!jb&&this.init&&this.init.apply(this,arguments)}function c(c){var e=a[c],m=d.prototype[c];b.prototype[c]=J(e)&&J(m)&&kb.test(e)?function(){var a,b=this._super;this._super=m;a=e.apply(this,arguments);this._super=b;return a}:e}var d=this,e;jb=p;b.prototype=new d;jb=k;b.prototype.constructor=b;for(e in a)a.hasOwnProperty(e)&&c(e);b.extend=d.extend;return b};
C.Base=Q(qa,{Bb:0,dispose:function(a){a=this;var b=0,c=a.ha;for(b in c)y.apply(P,c[b]);for(b in a)(c=a[b])&&c.dispose&&c.dispose();a.__proto__=P;for(b in a)a[b]=P,delete a[b];return P},k:ha,contract:ha,J:ga,uncontract:ga});
X=C.Event=R({SWITCHCLICK:Va?"touchstart":"click",SWITCHDOWN:Va?"touchstart":"mousedown",SWITCHMOVE:Va?"touchmove":"mousemove",SWITCHUP:Va?"touchend":"mouseup",SWITCHOVER:Va?"touchstart":"mouseover",SWITCHOUT:Va?"touchend":"mouseout",LOAD:"load",CHANGE:"change",CLICK:"click",MOUSEDOWN:"mousedown",MOUSEMOVE:"mousemove",MOUSEUP:"mouseup",MOUSEOVER:"mouseover",MOUSEOUT:"mouseout",TOUCHSTART:"touchstart",TOUCHMOVE:"touchmove",TOUCHEND:"touchend",RESIZE:"resize"});X=C.e=new X;
C.$=function(a,b,c,d,e){c="string"==typeof a?(b||M).querySelectorAll(a):[a];d=new Ra;for(e=d.length=c.length;e--;)d[e]=c[e];return d};
ib=C.$.Xb={querySelectorAll:function(a){return this[0].querySelectorAll(a)},find:function(a){return C.$(a,this)},parent:function(){return C.$(La(this[0]))},on:function(){return T(this,z,arguments)},off:function(){return T(this,y,arguments)},delegate:function(a,b,c){var d;this.ra||(this.ra={});d=this.ra;d[b]||(d[b]={});d=d[b];d[a]||(d[a]=[]);d=d[a];return T(this,function(){var a=Ha.apply(P,arguments);d.push([c,a])},arguments)},undelegate:function(a,b,c){var d=this.ra;if(!d)return k;d=d[b];if(!d)return k;
d=d[a];if(!d)return k;a=d.length;if(c){for(;a--;)if(d[a][0]===c)return this.off(b,d[a][1]),d.splice(a,1),p;return k}for(;a--;)this.off(b,d[a][1]),d.splice(a,1);return p},show:function(){return T(this,Ia)},hide:function(){return T(this,Ja)},hasClass:function(){return U(this,Aa,arguments)},addClass:function(){return T(this,Ba,arguments)},removeClass:function(){return T(this,Ca,arguments)},toggleClass:function(){return T(this,Da,arguments)},css:function(){return T(this,O,arguments)},html:function(){return U(this,
N,arguments)},val:function(){return U(this,Qa,arguments)},attr:function(){return U(this,Ea,arguments)},removeAttr:function(){return T(this,Fa,arguments)},append:function(){return T(this,q,arguments)},before:function(){return U(this,Ma,arguments)},after:function(){return U(this,Na,arguments)},insertBefore:function(){return U(this,Oa,arguments)},remove:function(){return T(this,Pa,arguments)}};
function lb(a,b,c,d,e){J(c)&&(e=c,c=P);J(d)&&!e&&(e=d,d=P);d&&(d=mb[d]);c={duration:c,ease:d,oncomplete:e};if(nb)b=new ob(a,b,c);else{d=C.Tweener;e=a.style;var f;a=Ka(a);var h,m,x={};for(f in b)h=s(b[f]),m=a.getPropertyValue(f),m=!m||"none"==m?0:+s(m)[2],x[f]={from:m,to:+h[2]||0,prefix:h[1],suffix:h[3]};b=new d(e,x,c)}this.P.push(b)}var ob=C.SSAnime||V,nb=ob.support,mb=V;nb&&C.cssease?mb=C.cssease:C.ease&&(mb=C.ease);ib.animate=function(){this.P||(this.P=[]);return T(this,lb,arguments)};
ib.stop=function(a,b){a=this;if(a.P){for(b=a.P.length;b--;)a.P[b].stop();a.P=P}return a};
C.Observer=R({init:function(){this.va={}},on:function(a,b,c,d){d=this.va;d[a]||(d[a]=[]);d[a].push(b)},one:function(a,b,c){function d(e){b(e);c.off(a,d)}c=this;c.on(a,d)},off:function(a,b){var c=this.va,d=c[a],e;if(!b)return delete c[a];if(d)for(e=d.length;e--;)if(b==d[e])return d.splice(e,1),0==d.length&&delete c[a],p;return k},fire:function(a,b){var c=this.va[a],d,e,f,h;if(c){d=la(arguments).slice(1);f=0;for(h=c.length;f<h;f++)(e=c[f])&&e.apply(P,d)}}});
Xa=C.Progress=R({ma:0,ta:0,O:0,t:function(a,b,c){b=this;n(a)&&b.K.push(a);b.O=b.ma/b.Ga;1<b.O&&(b.O=1);b.ab(b.O);b.ta&&(c=Error("miss"));if(b.ma==b.Ga||b.ta)b.wa(c,b.K),b.wa=b.ab=L},init:function(a,b,c){b=this;c=a.waits;K(c)&&(c=c.length);b.Ga=c;b.wa=a.oncomplete;b.ab=a.onprogress||L;b.K=[]},getProgress:aa("O"),pass:function(a){this.ma++;this.t(a)},miss:function(a){this.ta++;this.t(a)},exit:function(a,b){b=this;b.ma=b.Ga;b.t(a)}});
var pb=S({init:function(a){this._super();a=a||V;var b=xa(a.queue)||[];t(this,a);this.resetQueue(b);this.Q=u(this,this.Q)},q:w,start:function(){this.q();this.U=k;this.Oa()},restart:function(a){this.resetQueue(a);this.start()},stop:function(){this.o=P;this.fire("stop")},pause:function(){this.U=p;this.fire("pause")},resume:function(){this.U&&(this.fire("resume"),this.U=k,this.Oa())},resetQueue:function(a){a&&(this.Jb=xa(a));a=this.o=xa(this.Jb);for(var b in a)a[b].resetQueue&&a[b].resetQueue();this.fire("reset")},
ua:function(){this.fire("change",this.getQueue())},setQueue:function(a){this.o=xa(a);this.ua()},getQueue:function(){return xa(this.o)},addTask:function(a,b){if(!I(b)||b>this.o.length)b=this.o.length;this.o.splice(b,0,a);this.ua()},removeTask:function(a){for(var b=0,c=this.o.length;b<c;b++)if(this.o[b]===a){this.o.splice(b,1);this.ua();break}},Oa:function(){this.U||this.sa()},Ja:function(a){var b=this;return a.one&&a.start?(a.one("complete",u(b,b.Q)),u(a,a.start)):wa(a)?u(b,a):function(c){a.call(b);
c()}}});C.Parallel=C.Async=Q(pb,{p:v,sa:function(){if(this.o){if(!this.o.length)return this.p();for(this.cb=this.o.length;!this.U&&this.o&&this.o[0];)this.Ja(this.o.shift())(this.Q)}},Z:fa,Q:function(){this.Z();this.cb--;this.cb||this.p()}});C.Serial=C.Sync=Q(pb,{p:v,sa:function(){if(this.o&&!this.U){if(this.o[0])return this.Ja(this.o.shift())(this.Q);this.p()}},Z:fa,Q:function(){this.Z();this.sa()}});
C.Ajax=S({dispose:function(){this.stop();this._super()},init:function(a){a=E({},a);var b=this,c=a.url,d=a.type||"GET",e=l,f=b.Ha=new XMLHttpRequest;b._super();"json"==a.dataType&&b.Gb(a);t(b,a);a.cache||b.wb(a);a.query&&(e=b.za(a));f.onreadystatechange=function(){if(4==f.readyState){if(200==f.status)return b.fire("complete",f.responseText,f);b.fire("error",f)}};"GET"==d&&(c=r(c,"?")?c+"&":c+"?",c+=e,e=l);this.za=e;f.open(d,c);"POST"==d&&f.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
a.manual||b.start()},q:w,start:function(){this.q();this.Ha.send(this.za)},stop:function(){this.Ha.abort();this.fire("stop",this.Ha)},za:function(a){a=a.query;H(a)&&(a=encodeURI(na(a)));return a},wb:function(a){a.query||(a.query={});a.query["cir"+A()]="0"},Gb:function(a){var b=a.oncomplete,c=a.onerror;b&&(a.oncomplete=function(a){b(da(a))});c&&(a.onerror=function(a){c(a)})}});
C.PreRender=S({init:function(a,b){b=this;b._super();b.B=a.els;b.Qa=a.guesslimit||30;b.Xa=a.looptime||100;b.Hb=b.Xa+(a.loopblur||20);t(b,a);a.manual||b.start()},dispose:function(){clearInterval(this.C);this._super()},p:v,q:w,start:function(){var a,b=this,c=A();b.q();for(a=b.B.length;a--;)Ia(b.B[a]);b.C=setInterval(function(){var a=A(),e=a-c;c=a;if(e<b.Hb&&(b.Qa--,1>b.Qa)){clearInterval(b.C);for(a=b.B.length;a--;)Ja(b.B[a]);b.p()}},b.Xa,b)}});
var qb=S({Ea:l,p:v,Z:fa,init:function(a,b){b=this;b._super();b.Aa=a.srcs;b.Ua=[];b.f=[];b.O=new Xa({waits:b.Aa,onprogress:function(a){b.Z(a)},oncomplete:function(){for(var a=b.f.length;a--;)b.J(b.f[a]);b.f=[];b.p(b.Ua)}});t(b,a);a.manual||b.start()},q:w,start:function(){function a(){b.O.pass()}var b=this,c,d=0,e=b.Aa.length;b.q();if(!b.Ba)for(b.Ba=p;d<e;d++)c=j(b.Ea),c.src=b.Aa[d],b.f.push(b.k(c,X.LOAD,a)),b.Ua.push(c),b.Va(c)},Va:L});C.ImgLoad=Q(qb,{Ea:"img"});
C.ScriptLoad=Q(qb,{Ea:"script",Va:function(a){q(M.body,a)}});var rb=k;function sb(){rb=p;y(D,X.LOAD,sb)}z(D,X.LOAD,sb);C.WindowLoad=S({init:function(a){this._super();t(this,a);a.manual||this.start()},p:v,q:w,start:function(){var a=this;a.q();if(!a.Ba)if(a.Ba=p,rb)a.p();else var b=a.k(D,X.LOAD,function(){a.J(b);a.p()})}});
C.Orientation=R({init:function(a,b){b=this;b.c=a;b.f=[];b.bb={portrait:p,landscape:k};b.Ta={portrait:k,landscape:p};b.attach()},get:function(a){a=this;return I(D.orientation)?90!=Math.abs(D.orientation)?a.bb:a.Ta:D.innerWidth<D.innerHeight?a.bb:a.Ta},fire:function(a){a=this;if(a.get().portrait)return a.c.portrait();a.c.landscape()},attach:function(a,b){b=this;var c=u(b,b.fire);b.f.push(b.k(D,X.LOAD,c),b.k(D,"orientationchange",c),b.k(D,X.RESIZE,c))},detach:function(a){a=this;for(var b=a.f.length;b--;)a.J(a.f[b]);
a.f=[]}},"onorientationchange"in D);C.Rollover=R({init:function(a,b){b=this;var c=a.toggleClass||l,d=a.over||L,e=a.out||L;b.B=a.els;b.Kb=function(){Ba(b,c);d()};b.jb=function(){Ca(b,c);e()};a.manual||b.attach()},dispose:function(){this.detach();this._super()},attach:function(){this.X(z)},detach:function(){this.X(y)},X:function(a,b,c){b=this;for(c=b.B.length;c--;)a(b.B[c],X.SWITCHOVER,b.Kb),a(b.B[c],X.SWITCHOUT,b.jb),a(b.B[c],X.MOUSEOUT,b.jb)}});
C.Scroll=R({dispose:function(){this.revival();clearInterval(this.hb);this._super()},to:ia,toTop:ja,toBottom:function(){ia(M.height)},checkBottom:function(a){return M.body.scrollHeight-D.innerHeight-M.body.scrollTop<=(a||0)?p:k},scrollY:function(a){a=D.pageYOffset;return n(a)?a:(M.documentElement||M.body.parentNode||M.body).scrollTop},smooth:function(a,b,c,d){c=this;b=b||L;c.ib||(c.ib=p,I(a)||(a=a.offsetTop),d=M.height-D.innerHeight,a>d&&(a=d),c.Ka=c.scrollY(),c.hb=setInterval(function(d){d=c.scrollY();
d=0.3*(a-d)+d;if(1>Math.abs(a-d)||c.Ka==d)return ia(a),clearInterval(c.hb),b(a),delete c.ib;c.Ka=d;ia(d)},50))},kill:function(a){a=this;a.ja||(O(M.body,{overflow:"hidden"}),a.ja=a.k(M,X.TOUCHMOVE,sa))},revival:function(a){a=this;a.ja&&(O(M.body,{overflow:"auto"}),a.J(a.ja),delete a.ja)}});
C.Modal=R({La:function(a){a=this;for(var b=a.f.length;b--;)a.J(a.f[b]);a.f=[]},init:function(a,b,c){b=this;a=a||V;b.c=a;c={display:"none",position:"absolute"};b.eb=new C.Scroll;b.f=[];b.L=j("div",{"class":"cir-modal-bg"});O(b.L,E({"z-index":"9998",top:0,left:0,width:"100%",height:"200%"},c));q(M.body,b.L);b.v=j("div",{"class":"cir-modal-content"});O(b.v,E({"z-index":"9999",top:"50%",left:"50%"},c));q(M.body,b.v);a.manual||b.open()},dispose:function(a){a=this;a.close();Pa(a.L);Pa(a.v);a._super()},
open:function(a,b){b=this;b.eb.kill();O(b.L,{top:M.body.scrollTop});Ia(b.L);b.inner(a)},close:function(a){a=this;a.La();N(a.v,l);Ja(a.v);Ja(a.L);a.eb.revival()},inner:function(a,b,c,d,e){b=this;b.La();a=a||b.c.html;N(b.v,a);Ia(b.v);c=Ka(b.v);O(b.v,{"margin-top":M.body.scrollTop-s(c.height)[2]/2,"margin-left":-(s(c.width)[2]/2)});b.c.bgClose&&b.k(b.L,X.CLICK,u(b,b.close));if(b.c.closeSelector){d=ya(b.c.closeSelector,b.v);for(e=d.length;e--;)b.f.push(b.k(d[e],X.CLICK,u(b,b.close)))}}});
function tb(a){a=+a;10>a&&(a="0"+a);return l+a}
var ub="Sun Mon Tue Wed Thu Fri Sat".split(" "),vb="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),wb="January February March April May June July August September October November December".split(" "),xb="Jan Feb Mar Apr May June July Aug Sep Oct Nov Dec".split(" "),Z={d:function(a){return tb(Z.j(a))},j:function(a){return a.getDate()},D:function(a){return ub[a.getDay()]},l:function(a){return vb[a.getDay()]},F:function(a){return wb[a.getMonth()]},M:function(a){return xb[a.getMonth()]},
m:function(a){return tb(Z.n(a))},n:function(a){return a.getMonth()+1},Y:function(a){return a.getFullYear()},y:function(a){a=Z.Y(a);a=l+a;return a.slice(a.length-2)},a:function(a){return Z.A(a).toLowerCase()},A:function(a){return 12>Z.G(a)?"AM":"PM"},g:function(a){a=Z.G(a);return 12==a||0==a||24==a?12:a%12},G:function(a){return a.getHours()},h:function(a){return tb(Z.g(a))},H:function(a){return tb(Z.G(a))},i:function(a){return tb(Z.I(a))},s:function(a){return tb(Z.S(a))},I:function(a){return a.getMinutes()},
S:function(a){return a.getSeconds()}},yb=/%([djDlFMmnYyaAgGhHisIS])/g;C.DateFactory=R({make:function(a){switch(p){case oa(a):return a=a.split(/[T:\-\+\/\s]/),new Date(+a[0],a[1]-1,+a[2],+a[3]||0,+a[4]||0,+a[5]||0);case I(a):return new Date(a);case G("Date",a):return a}return new Date},format:function(a,b){b=this.make(b);return a.replace(yb,function(a,d){return Z[d](b)})}});
C.Router=R({init:function(a){var b=this;b.c=a;a.hashchange&&(z(D,"hashchange",function(){b.fire(location.hash)}),a.target||(a.target=location.hash));a.manual||b.start()},start:function(){this.fire(this.c.target)},fire:function(a){var b,c=this.c,d=c.action;if(c.noregex&&d[a])return d[a](a);for(b in d)if(a.match(b))d[b](b)}});
C.HashQuery=R({typeCast:function(a){var b=ka(a);return a==b&&(a=a.match("^[\"'](.*)[\"']$"))?a[1]:b},makeHash:function(a){var b="#"+a.mode;a=a.vars;var c="?",d;for(d in a)b+=c+d+"="+JSON.stringify(a[d]),c="&";return encodeURI(b)},setHash:function(a){location.hash=this.makeHash(a)},parseHash:function(a){var b=decodeURIComponent(a).split("#")[1],c,d,e;if(!b)return k;b=b.split("?");a=b[0];if(b[1]){c={};b=b[1].split("&");for(e=b.length;e--;)b[e]&&(d=b[e].split("="),c[d[0]]=this.typeCast(d[1]))}return{mode:a,
vars:c}},getHash:function(){return this.parseHash(location.hash)}});C.Facebook=R({shareURL:function(a){return"https://www.facebook.com/dialog/feed?app_id="+a.app_id+"&redirect_uri="+a.redirect_uri+na({link:a.link,picture:a.picture,name:a.name,caption:a.caption,description:a.description})}});C.Twitter=R({shareURL:function(a){var b=a.name,c=a.hash,b=b?" \u300c"+b+"\u300d":l,c=c?" "+c:l;return"https://twitter.com/intent/tweet?"+na({url:a.redirect_uri,text:(a.caption||l)+b+c})}});
gb=C.Mobile=R({getZoom:function(){return M.body.clientWidth/D.innerWidth},isAndroid:function(a){return ta(/Android/i,a)},isIOS:function(a){return ta(/iPhone|iPad|iPod/i,a)},isWindows:function(a){return ta(/IEMobile/i,a)},isFBAPP:function(a){return ta(/FBAN/,a)},isMobile:function(a){a=this;return a.isAndroid()||a.isIOS()||a.isWindows()||a.isFBAPP()},hideAddress:function(){function a(){0==D.pageYOffset&&ja()}function b(){setTimeout(a,100)}this.k(D,X.LOAD,b,k);this.k(D,"orientationchange",b,k)}});
C.mobile=new gb;var zb=D.navigator.userAgent.toLowerCase(),Ab;Ab=r(zb,"opera")?"opera":r(zb,"msie")?"ie":r(zb,"chrome")?"chrome":r(zb,"safari")?"safari":r(zb,"gecko")?"gecko":"ather";hb=C.PC=R({isChrome:function(){return"chrome"==Ab},isSafari:function(){return"safari"==Ab},isGecko:function(){return"gecko"==Ab},isOpera:function(){return"opera"==Ab},isIE:function(){return"ie"==Ab}});C.pc=new hb;
var Bb={request:function(a){return this.ub.call(D,a)},cancel:function(a){return this.xb.call(D,a)}},Cb=["webkit","moz","o","ms"],Db,Eb,Fb;if(D.requestAnimationFrame)Eb=D.requestAnimationFrame,Fb=D.cancelAnimationFrame;else{for(Db=Cb.length;Db--;)if(D[Cb[Db]+"RequestAnimationFrame"]){Eb=D[Cb[Db]+"RequestAnimationFrame"];Fb=D[Cb[Db]+"CancelAnimationFrame"];break}Eb||(Eb=function(a){return setTimeout(a,1E3/C.AnimeFrame.fps)},Fb=function(a){clearTimeout(a)})}Bb.ub=Eb;Bb.xb=Fb;C.AnimeFrame=R(Bb);
C.AnimeFrame.fps=30;C.animeframe=new C.AnimeFrame;
Y=C.Tweener=S({init:function(a,b,c,d,e,f){f=this;f._super();t(f,c);c=c||V;f.kb=a;f.V=[];for(d in b)e=b[d],e.name=d,e.Qb=e.to-e.from,e.prefix=e.prefix||l,e.suffix=e.suffix||(e.suffix===l?l:"px"),f.V.push(e);f.Na=c.duration||Y.duration;f.Cb=c.ease||f.sb;c.manual||f.start()},dispose:ea,sb:function(a,b,c,d){return c*(-Math.pow(2,-10*a/d)+1)+b},p:v,R:function(){for(var a=this,b=Y.na,c,d=A(),e,f=b.length,h,m;f--;)if(c=b[f],h=c.V.length,e=d-c.Ob,e<c.Na)for(;h--;)m=c.V[h],Y.fb(c.kb,m,c.Cb(e,m.from,m.Qb,c.Na));
else{for(;h--;)m=c.V[h],Y.fb(c.kb,m,m.to);c.p();b.splice(f,1)}b.length?C.animeframe.request(function(){a.R&&a.R()}):a.ba()},q:w,start:function(a){a=this;a.q();a.Ob=A();Y.na.push(a);Y.Ia||(Y.Ia=1,C.animeframe.request(function(){a.R&&a.R()}))},ba:function(){Y.na=[];C.animeframe.cancel(Y.Ia);Y.Ia=P},stop:function(){this.fire("stop");this.ba()}});Y.fb=function(a,b,c){a[b.name]=b.prefix||b.suffix?b.prefix+c+b.suffix:c};Y.na=[];Y.duration=500;
C.ease={linear:function(a,b,c,d){return c*a/d+b},inCubic:function(a,b,c,d){return c*Math.pow(a/d,3)+b},outCubic:function(a,b,c,d){return c*(Math.pow(a/d-1,3)+1)+b},inOutCubic:function(a,b,c,d){return 1>(a/=d/2)?c/2*Math.pow(a,3)+b:c/2*(Math.pow(a-2,3)+2)+b},inQuart:function(a,b,c,d){return c*Math.pow(a/d,4)+b},outQuart:function(a,b,c,d){return-c*(Math.pow(a/d-1,4)-1)+b},inOutQuart:function(a,b,c,d){return 1>(a/=d/2)?c/2*Math.pow(a,4)+b:-c/2*(Math.pow(a-2,4)-2)+b},inQuint:function(a,b,c,d){return c*
Math.pow(a/d,5)+b},outQuint:function(a,b,c,d){return c*(Math.pow(a/d-1,5)+1)+b},inOutQuint:function(a,b,c,d){return 1>(a/=d/2)?c/2*Math.pow(a,5)+b:c/2*(Math.pow(a-2,5)+2)+b},inSine:function(a,b,c,d){return c*(1-Math.cos(a/d*(Math.PI/2)))+b},outSine:function(a,b,c,d){return c*Math.sin(a/d*(Math.PI/2))+b},inOutSine:function(a,b,c,d){return c/2*(1-Math.cos(Math.PI*a/d))+b},inExpo:function(a,b,c,d){return c*Math.pow(2,10*(a/d-1))+b},outExpo:function(a,b,c,d){return c*(-Math.pow(2,-10*a/d)+1)+b},inOutExpo:function(a,
b,c,d){return 1>(a/=d/2)?c/2*Math.pow(2,10*(a-1))+b:c/2*(-Math.pow(2,-10*--a)+2)+b},inCirc:function(a,b,c,d){return c*(1-Math.sqrt(1-(a/=d)*a))+b},outCirc:function(a,b,c,d){return c*Math.sqrt(1-(a=a/d-1)*a)+b},inOutCirc:function(a,b,c,d){return 1>(a/=d/2)?c/2*(1-Math.sqrt(1-a*a))+b:c/2*(Math.sqrt(1-(a-=2)*a)+1)+b},inQuad:function(a,b,c,d){return c*(a/=d)*a+b},outQuad:function(a,b,c,d){return-c*(a/=d)*(a-2)+b},inOutQuad:function(a,b,c,d){return 1>(a/=d/2)?c/2*a*a+b:-c/2*(--a*(a-2)-1)+b},inBack:function(a,
b,c,d){return c*(a/=d)*a*((W+1)*a-W)+b},outBack:function(a,b,c,d){return c*((a=a/d-1)*a*((W+1)*a+W)+1)+b},inOutBack:function(a,b,c,d){return 1>(a/=d/2)?c/2*a*a*(((W*=1.525)+1)*a-W)+b:c/2*((a-=2)*a*(((W*=1.525)+1)*a+W)+2)+b}};
var Gb=ba(["animation","webkitAnimation"],"Animation"),Hb=Gb.prefix,Ib=Gb.nb,Jb=Gb.pb,Kb=Gb.sheet,Lb=C.SSAnime=S({$a:function(){var a=this.b,b=this.Db;y(a,Jb+"End",b);y(a,"animationend",b)},init:function(a,b,c,d){d=this;d._super();t(d,c);c=c||V;d.wa=c.oncomplete||L;d.b=a;Lb.id++;d.u="ciranim"+Lb.id;a=c.duration||Lb.duration;var e=c.ease||Wa,f,h={};for(f in b)h[f]=b[f],I(h[f])&&(h[f]+="px");d.Ub=h;h=F(F(JSON.stringify(h),'"',l),",",";");Kb.insertRule("@"+Ib+"keyframes "+d.u+"{to"+h+"}",Kb.cssRules.length);
K(e)||(e=[e]);b=d.u;f=0;for(var h=e.length,m=l;f<h;f++)m+=Ib+"animation:"+b+" "+a+"ms "+e[f]+" 0s 1 normal both;";Kb.insertRule("."+b+"{"+m+"}",Kb.cssRules.length);c.manual||d.start()},dispose:ea,p:v,q:w,start:function(a,b){function c(c){var e=Kb.cssRules,f=e.length,h;a.$a();if("webkit"==Hb){for(;f--;)h=e[f].name||(l+e[f].selectorText).split(".")[1],h==a.u&&Kb.deleteRule(f);Ca(b,a.u);O(b,a.Ub)}a.p(c)}a=this;b=a.b;a.q();a.Db=c;z(b,Jb+"End",c);z(b,"animationend",c);Ba(b,a.u)},stop:function(){var a=
{};this.fire("stop");a[Ib+"animation-play-state"]="paused";O(this.b,a);this.$a()}},Gb.rb);Lb.id=0;Lb.duration=500;var Mb=ba(["transitionProperty","webkitTransitionProperty"],"Transition"),Nb=Mb.nb,Qb=Mb.pb,Rb=Mb.sheet,Sb;
Sb=C.SSTrans=S({init:function(a,b,c,d){d=this;d._super();t(d,c);c=c||V;Sb.id++;d.u="cirtrans"+Sb.id;var e=[];E({},b);var f,h=c.duration||Sb.duration,m=c.ease||Wa;K(m)||(m=[m]);for(f in b)e.push(f);f=0;for(var x=m.length,B=l,B=B+(Nb+"transition-property:"+e.join(" ")+";"+Nb+"transition-duration:"+h+"ms;");f<x;f++)B+=Nb+"transition-timing-function:"+m[f]+";";Rb.insertRule("."+d.u+"{"+B+"}",Rb.cssRules.length);d.b=a;d.V=b;c.manual||d.start()},dispose:ea,p:v,q:w,start:function(a){a=this;a.q();a.ia=function(b){a.ba();
setTimeout(function(){a.Sa||a.p(b)},1)};z(a.b,Qb+"End",a.ia);z(a.b,"transitionend",a.ia);Ba(a.b,a.u);O(a.b,a.V)},ba:function(a){a=this;var b=Rb.cssRules,c=b.length,d;y(a.b,Qb+"End",a.ia);y(a.b,"transitionend",a.ia);for(Ca(a.b,a.u);c--;)if(d=b[c].name||(l+b[c].selectorText).split(".")[1],d==a.u){Rb.deleteRule(c);break}},Sa:k,stop:function(){this.Sa=p;this.fire("stop");this.ba()}},Mb.rb);Sb.id=0;Sb.duration=500;
C.ssease={linear:"linear",inCubic:g("0.55,0.055,0.675,0.19"),outCubic:g("0.215,0.61,0.355,1"),inOutCubic:g("0.645,0.045,0.355,1"),inQuart:g("0.895,0.03,0.685,0.22"),outQuart:g("0.165,0.84,0.44,1"),inOutQuart:g("0.77,0,0.175,1"),inQuint:g("0.755,0.05,0.855,0.06"),outQuint:g("0.23,1,0.32,1"),inOutQuint:g("0.86,0,0.07,1"),inSine:g("0.47,0,0.745,0.715"),outSine:g("0.39,0.575,0.565,1"),inOutSine:g("0.445,0.05,0.55,0.95"),inExpo:g("0.95,0.05,0.795,0.035"),outExpo:g("0.19,1,0.22,1"),inOutExpo:g("1,0,0,1"),
inCirc:g("0.6,0.04,0.98,0.335"),outCirc:g("0.075,0.82,0.165,1"),inOutCirc:g("0.785,0.135,0.15,0.86"),inQuad:g("0.55,0.085,0.68,0.53"),outQuad:g("0.25,0.46,0.45,0.94"),inOutQuad:g("0.455,0.03,0.515,0.955"),inBack:[g("0.6,0,0.735,0.045"),g("0.6,-0.28,0.735,0.045")],outBack:[g("0.175,0.885,0.32,1"),g("0.175,0.885,0.32,1.275")],inOutBack:[g("0.68,0,0.265,1"),g("0.68,-0.55,0.265,1.55")]};
C.Anvas=R({init:function(a,b){b=this;b.ea=a.canvas;b.yb=b.ea.getContext("2d");b.setSize(a)},setSize:function(a){a.width&&(this.ea.width=a.width);a.height&&(this.ea.height=a.height)},pigment:function(a){var b=this,c=j("canvas"),d=j("img");d.onload=function(){c.width=a.width;c.height=a.height;c.getContext("2d").drawImage(d,0,0);a.onload.apply(b,[c,d])};d.src=a.src;return{image:c,x:a.x||0,y:a.y||0}},pigments:function(a,b){function c(a){var c=a.onload||L;a.onload=function(a,e){c(a,e);f--;0==f&&b.call(d,
h)};h[e]=d.pigment(a);f++}var d=this,e,f=0,h={};b=b||L;for(e in a)c(a[e]);return h},draw:function(a){var b=0,c=a.length,d=this.yb,e=this.ea;for(d.clearRect(0,0,e.width,e.height);b<c;b++)(e=a[b])&&d.drawImage(e.image,e.x,e.y)}},!!D.HTMLCanvasElement);
C.DataStore=R({fa:function(){return!this.ca?{}:[]},init:function(a){a=a||V;this.ca=a.array||k;this.reset()},set:function(a,b){var c;H(a)||(c={},c[a]=b,a=c);for(c in a)this.ga[c]=a[c]},get:function(a){var b=this.fa(),c=this.ga,d;if(a)return c[a];for(d in c)b[d]=c[d];return b},remove:function(a){n(this.ga[a])&&(this.ca?this.data.splice(a,1):delete this.ga[a])},reset:function(){this.ga=this.fa()}});
fb=R({fa:function(){return!this.ca?{}:[]},init:function(a){this.ca=a.array||k;this.T=a.namespace?a.namespace+"-":l;this.W=D[a.type+"Storage"]},set:function(a,b){var c;H(a)||(c={},c[a]=b,a=c);for(c in a)this.W.setItem(this.T+c,JSON.stringify(a[c]))},get:function(a,b){b=this;var c=this.fa(),d,e=b.W;if(a)return da(e.getItem(b.T+a));for(d in e)b.T?(a=d.split(b.T)[1])&&(c[a]=da(e[d])):c[d]=da(e[d]);return c},remove:function(a,b){b=this;a=b.T+a;n(b.W.getItem(a))&&b.W.removeItem(a)},reset:function(a,b){a=
this;if(!a.T)return a.W.clear();for(b in a.W)a.remove(b)}});C.LocalStorage=function(a){a=a||{};a.type="local";return new fb(a)};C.SessionStorage=function(a){a=a||{};a.type="session";return new fb(a)};
C.Model=R({la:function(a,b,c,d){d=this;d.w.fire(a,d.r.get());b&&d.w.fire(a+":"+b,c)},init:function(a,b){b=this;a=a||V;var c,d=a.defaults||b.defaults||V,e=a.events||b.events;b.lb=a.validate||b.validate||{};b.r=a.store||b.store||new C.DataStore;b.w=new C.Observer;for(c in d)b.set(c,d[c]);for(c in e)b.on(c,e[c])},set:function(a,b,c){c=this;var d;H(a)||(d={},d[a]=b,a=d);c.xa=c.r.get();for(d in a){b=a[d];if(c.lb[d]&&!c.lb[d](d,b))return c.la("fail",d,b);c.r.set(d,b);c.w.fire(X.CHANGE+":"+d,b)}c.w.fire(X.CHANGE,
c.r.get())},prev:function(a){return!a?this.xa:this.xa[a]},get:function(a){return this.r.get(a)},remove:function(a,b){b=this;if(a){var c=b.r.get(a),d=b.r.remove(a);b.la("remove",a,c);return d}},reset:function(){this.r.reset();this.la("reset")},on:function(a,b,c){c=u(this,b);this.w.on(a,c);return c},off:function(a,b){this.w.off(a,b)},fire:function(a,b){return this.w.fire.apply(this.w,arguments)}});
C.Ollection=Q(C.Model,{init:function(a,b){b=this;a=a||V;var c,d=a.defaults||b.defaults||[],e=a.events||b.events;b.r=a.store||b.store||new C.DataStore({array:p});b.w=new C.Observer;for(c in d)b.set(c,d[c]);for(c in e)b.on(c,e[c])},set:function(a,b,c){c=this;var d;H(a)||(d={},d[a]=b,a=d);c.xa=c.r.get();for(d in a){b=a[d];if(!I(+d))return c.la("fail",a,b);c.r.set(a,b);c.w.fire(X.CHANGE,b,+d,c.r.get())}},add:function(a){var b=this.r.get().length;this.set(b,a);return b},each:function(a){var b,c=this.get();
for(b in c)a.apply(this,[c[b],b,c])},map:function(a){var b,c=this.get();for(b in c)this.set(b,a.apply(this,[c[b],b,c]))}});C.View=R({init:function(a,b){b=this;a=a?ua(b,a):ua(b,b,{});b.el=C.$(a.el||b.el||j("div"));b.attach();a.init&&b.init()},dispose:function(){this.detach();this._super()},X:function(a,b,c,d,e,f){b=this;f=b.events;for(c in f)for(d in e="me"==c?b.el:b.el.find(c),f[c])e[a](d,b[f[c][d]])},attach:function(){this.X("on")},detach:function(){this.X("off")}});
C.Validate=R({t:function(a,b,c,d){if(a(c))return p;this.displayError(b,d)},init:function(a,b){b=this;a=a||{};b.Vb=a.level;ua(b,b,a)},displayError:function(a,b){b="Validate Error:"+a+" is "+b+".";switch(this.Wb){case "log":return console.log(b),k;case "error":throw Error(b);case "off":return k}console.warn(b);return k},isObject:function(a,b){return this.t(H,a,b,"Object")},isNumber:function(a,b){return this.t(I,a,b,"Number")},isString:function(a,b){return this.t(oa,a,b,"String")},isFunction:function(a,
b){return this.t(J,a,b,"Function")},isBoolean:function(a,b){return this.t(pa,a,b,"Boolean")},isArray:function(a,b){return this.t(K,a,b,"Array")}});C.validate=new C.Validate;
C.DragFlick=R({Da:function(a){return a.changedTouches?a.changedTouches[0]:a},tb:function(a){var b=this,c,d,e=k;b.f.push(b.k(a.el,X.SWITCHDOWN,function(a){var h=b.Da(a);c=h.pageX;d=h.pageY;e=p;sa(a)}),b.k(D,X.SWITCHUP,function(f){e&&(f=b.Da(f),a.callback({x:f.pageX-c,y:f.pageY-d}),e=k)}))},Ab:function(a){this.tb({el:a.el,callback:function(b){var c=a.boundary||0,d={change:k,top:k,right:k,bottom:k,left:k,amount:b};Math.abs(b.x)>c&&(0<b.x?d.right=p:0>b.x&&(d.left=p),d.change=p);Math.abs(b.y)>c&&(0<b.y?
d.bottom=p:0>b.y&&(d.top=p),d.change=p);a.callback(d)}})},init:function(a,b){b=this;b.f=[];a=(b.c=a)||V;a.manual||b.attach()},attach:function(){function a(a,c,d){b.f.push(b.k(a,c,function(a){d(b.Da(a))}))}var b=this,c=this.c,d=c.el,e=c.start||L,f=c.move||L,h=c.end||L,m=k,x=0,B=0;c.direction&&b.Ab({el:d,boundary:c.boundary,callback:c.direction});a(d,X.SWITCHDOWN,function(a){m=p;x=a.pageX;B=a.pageY;e({e:a,move:{x:x,y:B}})});a(M,X.SWITCHMOVE,function(a){m&&f({e:a,move:{x:a.pageX-x,y:a.pageY-B}})});a(M,
X.SWITCHUP,function(a){m&&(h({e:a,move:{x:a.pageX-x,y:a.pageY-B}}),m=k)})},detach:function(a){a=this;for(var b=a.f,c=b.length;c--;)a.J(b[c]);a.f=[]}});C.FontImg=R({init:function(a,b){a=a||V;this.Mb=(b=a.type)?b+"_":l;this.Lb=a.tag||"span"},make:function(a){a=(l+a).split(l);for(var b=this.Lb,c=l,d=a.length;d--;)c="<"+b+' class="font_'+this.Mb+a[d]+'"></'+b+">"+c;return c}});
C.LimitText=R({Ya:8,oa:function(a){N(this.N,a);q(La(this.b),this.N)},pa:function(){N(this.N,l);Pa(this.N)},init:function(a){var b=this.b=a.el;Ka(b);var b=this.N=j(b.tagName,{"class":Ea(b,"class"),style:Ea(b,"style")}),c=this.Ma=Ka(b);this.mb=a.width;this.Ra=a.height;this.oa(0);n(a.width)||(this.mb=+s(c.width)[2]);n(a.height)||(this.Ra=+s(c.height)[2]);O(b,{height:"auto"});this.Fb=+s(c.fontSize)[2];this.pa()},ka:function(){return+s(this.Ma.width)[2]<=this.mb&&+s(this.Ma.height)[2]<=this.Ra?p:k},getLimitFontSize:function(a){a=
l+a;var b=this,c=b.Fb,d;O(b.N,{fontSize:c});b.oa(a);b.ka()?d=c:va(b.Ya-1,c,function(a){O(b.N,{fontSize:a});return b.ka()},function(a){d=a});b.pa();d<b.Ya&&(d=0);return d},getLimitTextLength:function(a){a=l+a;var b=this,c=a.length,d;b.oa(a);b.ka()?d=c:va(0,c,function(c){N(b.N,a.slice(0,c));return b.ka()},function(a){d=a});b.pa();return d}});
eb=R({init:function(a){var b=this,c=a.autoplay,d=a.loop,e,f=a.el||M.body;a.preload="auto";a.autoplay=a.loop=k;switch(a.type){case "Audio":e=C.Audio(a);break;default:e=C.Video(a)}if(b.b=e){if(c){var h;h=b.k(e,"canplay",function(){b.J(h);b.play()})}d&&b.loop(p);a.oncanplay&&b.k(e,"canplay",a.oncanplay);a.onended&&b.k(e,"ended",a.onended);q(f,e)}},dispose:function(){Pa(this.b);this._super()},getElement:aa("b"),getCurrent:function(){return this.b.currentTime},getDuration:function(){return this.b.duration},
setCurrent:function(a){this.b.currentTime=a},loop:function(a,b){b=this;b.C&&(b.J(b.C),delete b.C);a&&(b.C=b.k(b.b,"ended",function(){b.stop();b.play()}))},play:function(){this.b.play()},pause:function(){this.b.pause()},stop:function(){this.setCurrent(0);this.pause()}});C.Audio=function(a){a.type="audio";a.suffix=C.Audio.support;return Ta(a)};C.Audio.support=Ua("Audio",[["mp3","mpeg"],["wav","wav"],["ogg","ogg"],["m4a","mp4"]]);C.Sound=function(a){a.type="Audio";return new eb(a)};C.Sound.support=C.Audio.support;
C.Video=function(a){a.type="video";a.suffix=C.Video.support;return Ta(a)};C.Video.support=Ua("Video",[["webm","webm"],["mp4","mp4"],["ogv","ogg"]]);C.Movie=function(a){a.type="Video";return new eb(a)};C.Movie.support=C.Video.support;C.ExternalInterface=function(a){a=a||V;return a.android?new Za(a):new db};
Za=Q(C.HashQuery,{init:function(a){this.c=a},call:function(a){this.c.android[a.mode](this.makeHash(a))},addCallback:function(a,b,c){c=this;c.c.externalObj[a]=function(a){b(c.parseHash(a).vars)}},removeCallback:function(a){delete this.c.externalObj[a]}});
db=Q(C.HashQuery,{init:function(){this.aa={}},dispose:function(a){for(a in this.aa)this.removeCallback(a);this._super()},call:function(a){this.setHash(a)},addCallback:function(a,b,c){c=this;c.aa[a]=function(d){d=c.getHash();d.mode==a&&b(d.vars)};z(D,"hashchange",c.aa[a])},removeCallback:function(a){y(D,"hashchange",this.aa[a]);delete this.aa[a]}});
C.FPS=R({ya:0,Ib:0,C:0,init:function(a,b){b=this;b.qa=b.Ca=a.criterion;b.Za=b.Pa(b.qa);b.Eb=a.enterframe;a.manual||b.start()},dispose:ea,getCriterion:aa("qa"),getSurver:aa("Ca"),getFrameTime:aa("Za"),enter:function(a){a=this;a.Eb({criterion:a.qa,surver:a.Ca})},start:function(a){a=this;a.ya=A();a.C=setInterval(a.R,a.Za,a)},R:function(a,b){b=a.Ib=A();a.Ca=a.Pa(b-a.ya);a.ya=b;a.enter()},Pa:function(a){return Math.round(1E3/a)},stop:function(){clearInterval(this.C)}});
function $(a){return Tb?Ub.getResponseHeader(a):k}function Vb(a){var b=new XMLHttpRequest;b.onload=function(){a(b)};b.open("HEAD",location.href+"?update"+A()+"=1");b.send(P);return b}var Ub,Tb=k;
C.ServerMeta=R({init:function(a){a=a||V;var b=a.callback||L;Ub?b(Ub):Ub=Vb(function(){Tb=p;b(Ub)})},date:function(a){return Vb(function(b){a(b.getResponseHeader("Date"))})},connection:function(){return $("Connection")},contentLength:function(){return $("Content-Length")},lastModified:function(){return $("Last-Modified")},server:function(){return $("Server")},contentType:function(){return $("Content-Type")},acceptRanges:function(){return $("Accept-Ranges")},keepAlive:function(){return $("Keep-Alive")}});
C.Surrogate=R({init:function(a){this.zb=a.delay;this.da=a.callback},dispose:function(){this.clear();this._super()},request:function(a,b){b=this;b.K=a;b.clear();b.Fa=setTimeout(b.flush,b.zb,b)},flush:function(a){a=a||this;a.da(a.K)},clear:function(){clearTimeout(this.Fa)}});
C.Throttle=R({init:function(a){this.Nb=a.waittime;this.da=a.callback},dispose:function(){this.unlock();this._super()},request:function(a,b){b=this;b.Wa?b.K=a:(b.da(a),b.lock(),b.Fa=setTimeout(function(){b.K&&(b.da(b.K),b.K=P);b.unlock()},b.Nb,b))},lock:function(){this.Wa=p},unlock:function(a){a=a||this;a.Wa=k;clearTimeout(a.Fa)}});C.XML=R({init:function(a){this.b=j("div");N(this.b,a.data)},$:function(a){return this.b.querySelector(a)},$$:function(a){return ya(a,this.b)}});
C.Timer=function(a){function b(){za=A();var a=f-(za-ab)/1E3;0>a&&(a=0);cb=c(a);x(cb);za>bb?(Ob.stop(),B()):Pb=setTimeout(b,m)}function c(a){var b;b=(l+a).split(".");a=b[0];b=b[1]?b[1]:l;a=d({qb:a,ob:$a.Sb});b=d({qb:b,ob:$a.Rb,Tb:p});return a+"."+b}function d(a){var b=l+a.qb,c=a.ob,d=c-b.length;return!a.Tb?-1<d?e(d,0)+b:e(c,9):0<d?b+e(d,0):b.slice(0,c)}function e(a,b){var c=l;for(b=l+b;0<a;)c+=b,a--;return c}var f=a.limit,h=1E3*f,m=1E3*a.interval,x=a.onupdate,B=a.ontimeup,$a;a=a.template.split(".");
$a={Sb:a[0].length,Rb:a[1].length};var ab=0,za=0,bb=h,cb=c(f),Pb,Ob={getLimit:function(){return f},getTime:function(){return cb},getProgress:function(){return 1-(bb-za)/h},setUpdate:function(a){x=a},setTimeup:function(a){B=a},countDown:function(){za=ab=A();bb=ab+h;b()},stop:function(){clearTimeout(Pb)}};return Ob};Ya=R({init:function(a){this.c=a;this.attach()},attach:function(a){a=this;a.detach();a.vb=a.k(D,a.c.e,a.c.callback)},detach:function(){this.J(this.vb)}});
C.DeviceMotion=function(a){a.e="devicemotion";return Ya(a)};C.DeviceMotion.support="ondevicemotion"in D;C.DeviceOrientation=function(a){a.e="deviceorientation";return Ya(a)};C.DeviceOrientation.support="ondeviceorientation"in D;var Wb,Xb;C.DeviceOrientation.support?(Wb=C.DeviceOrientation,Xb=function(a){return a}):C.DeviceMotion.support&&(Wb=C.DeviceMotion,Xb=function(a){return a.rotationRate});
C.DeviceShake=R({Pb:{x:"gamma",y:"beta",z:"alpha"},init:function(a,b){b=this;b.gb=new Wb;b.c=a;b.attach()},attach:function(){var a,b=this.c,c=this.Pb[b.direction];this.gb.attach(function(d){d=Xb(d);a||(a=d);Math.abs(d[c]-a[c])>b.limit&&(a=P,b.callback(d),setTimeout(function(){},b.waittime))})},detach:function(){this.gb.detach()}},Wb?p:k);ib&&(Ra.prototype=ib);
})();
