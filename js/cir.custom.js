var C={};
(function(){var c=C,u=window,p=function(a,b){return Object.prototype.toString.call(b)==="[object "+a+"]"?!0:!1},D=function(a){var b=""+a;return b.match("^{.*}$")?JSON.parse(b):b.match("^[0-9.]+$")?1*b:"true"===b?!0:"false"===b?!1:a};Date.now||(Date.now=function(){return+new Date});c.utility={win:u,doc:document,pageTop:function(){u.scrollTo(0,1)},override:function(a,b){for(var d in b)a[d]=b[d];return a},replaceAll:function(a,b,d){return a.split(b).join(d)},windowOpen:function(a,b){return u.open(a,b)},
typeCast:D,makeQueryString:function(a){var b="",d="",e;for(e in a)a[e]&&(d+=b+e+"="+encodeURIComponent(a[e]),b="&");return d},parseQueryString:function(a){a=a.replace(/^\#/,"").replace(/^\?/,"");a=a.split("&");var b,d,e={};for(b=a.length;b--;)d=a[b].split("="),e[d[0]]=D(decodeURIComponent(d[1]));return e},is:p,isObject:function(a){return p("Object",a)},isNumber:function(a){return p("Number",a)},isString:function(a){return p("String",a)},isFunction:function(a){return p("Function",a)},isBoolean:function(a){return p("Boolean",
a)},isTouchDevice:function(){return"ontouchstart"in u},nullFunction:function(){return null}};var E=function(a,b){var d=b.querySelectorAll(a),e=[];e.push.apply(e,d);return e},v=function(a,b){for(var d=a.className,d=d?d.split(" "):[],e=0,c=d.length;e<c;e++)if(b&&b===d[e])return!0;return!1},F=function(a,b){var d="";if(v(a,b))return!1;a.className&&(d=" ");a.className=a.className+d+b;return!0},G=function(a,b){var d,e=[],c,g;if(!v(a,b))return!1;d=a.className.split(" ");c=0;for(g=d.length;c<g;c++)b!==d[c]&&
e.push(d[c]);a.className=e.join(" ");return!0},H=function(a,b,d){var e;if(y.isObject(b)){for(e in b)a.setAttribute(e,b[e]);return!0}return d||""===d?a.setAttribute(b,d):a.getAttribute(b)},y=c.utility,r=y.doc;c.element={$:function(a){return r.querySelector(a)},$$:function(a){return E(a,r)},$child:function(a,b){return b.querySelector(a)},$$child:E,$id:function(a){return r.getElementById(a)},on:function(a,b,d){a.addEventListener(b,d)},off:function(a,b,d){a.removeEventListener(b,d)},create:function(a,
b){var d=r.createElement(a);b&&H(d,b);return d},show:function(a){a.style.display="block"},hide:function(a){a.style.display="none"},opacity:function(a,b){a.style.opacity=b},hasClass:v,addClass:F,removeClass:G,toggleClass:function(a,b){return v(a,b)?G(a,b):F(a,b)},css:function(a,b){var d=a.style,e,c,g;for(e in b)c=e,g=b[e],y.isNumber(g)&&(g+="px"),d[c]=g},computedStyle:function(a){return r.defaultView.getComputedStyle(a,null)},append:function(a,b){a.appendChild(b)},attr:H,html:function(a,b){if(b)a.innerHTML=
b;else return a.innerHTML}};c.extend=function(a,b){function d(){this.init=a}d.prototype=b.prototype;a.prototype=new d;var e=a.prototype;e._superclass=b;e._super=function(){var a=this._prevctor,a=a?a.prototype._superclass:this._prevctor=b;a.apply(this,arguments)}};c.klass=function(a){var b=c.utility.override,d=a.init||function(){},e=a.properties;(a=a.extend)&&c.extend(d,a);b(d.prototype,e);return d};var l=c.utility.isTouchDevice();c.Event=c.klass({init:function(a){a=a||{};if(a.single&&c.Event.instance)return c.Event.instance;
a.single&&(c.Event.instance=this)},properties:{switchclick:l?"touchstart":"click",switchdown:l?"touchstart":"mousedown",switchmove:l?"touchmove":"mousemove",switchup:l?"touchend":"mouseup",load:"load",hashchange:"hashchange",click:"click",mousedown:"mousedown",mousemove:"mousemove",mouseup:"mouseup",touchstart:"touchstart",touchmove:"touchmove",touchend:"touchend",orientationchange:"orientationchange",resize:"resize"}});c.Event.instance=null;c.event=new c.Event;c.$=function(a,b){var d=c.$,e=b||document,
f,g=0,h,e=c.utility.isString(a)?e.querySelectorAll(a):[a];h=e.length;f=function(){};f.prototype=d.methods;d=new f;d.length=h;for(d.selector=a;g<h;g++)d[g]=e[g];return d};var k=function(a,b,d){var e=0,c=a.length;for(d=z(d);e<c;e++)d[0]=a[e],b.apply(a,d);return a},w=function(a,b,d){d=z(d);d[0]=a[0];return b.apply(null,d)},z=function(a){var b=[null];b.push.apply(b,a);return b},j=c.element;c.$.methods={_forexe:k,_exe:w,_argary:z,querySelectorAll:function(a){return this[0].querySelectorAll(a)},find:function(a){return c.$(a,
this)},parent:function(){return c.$(this[0].parentNode)},on:function(){return k(this,j.on,arguments)},off:function(){return k(this,j.off,arguments)},show:function(){return k(this,j.show)},hide:function(){return k(this,j.hide)},opacity:function(){return k(this,j.opacity,arguments)},hasClass:function(){return w(this,j.hasClass,arguments)},addClass:function(){return k(this,j.addClass,arguments)},removeClass:function(){return k(this,j.removeClass,arguments)},toggleClass:function(){return k(this,j.toggleClass,
arguments)},css:function(){return k(this,j.css,arguments)},html:function(){return w(this,j.html,arguments)},attr:function(){return w(this,j.attr,arguments)},append:function(){return k(this,j.append,arguments)}};var T=function(a,b,d,e,f){I.isFunction(d)&&(f=d,d=null);I.isFunction(e)&&!f&&(f=e,e=null);var g=c.Tweener,h=a.style,j;a=S.computedStyle(a);var m,k={};for(j in b)m=J(b[j]),k[j]={from:1*J(a.getPropertyValue(j))[1]||0,to:1*m[1]||0,suffix:m[2]};b=new g(h,k,{duration:d,ease:e,onComplete:f});this._animate.push(b)},
J=function(a){a=""+(a||"");return a.match(/^([0-9\.]+)(.*)/)},I=c.utility,S=c.element,A=c.$.methods;A.animate=function(){this._animate||(this._animate=[]);return A._forexe(this,T,arguments)};A.stop=function(){if(this._animate){for(var a=this._animate,b=0,d=a.length;b<d;b++)a[b].stop();this._animate=null}return this};c.Tweener=c.klass({init:function(a,b,d){var e;d=d||{};this.target=a;this.property=[];for(e in b)a=b[e],a.name=e,a.distance=a.to-a.from,a.prefix=a.prefix||"",a.suffix=a.suffix||"px",this.property.push(a);
this.duration=d.duration||c.Tweener.Duration;this.ease=d.ease||this._ease;this.onComplete=d.onComplete;this.begin=Date.now();c.Tweener.Items.push(this);c.Tweener.timerId||this.start()},properties:{_ease:function(a,b,d,c){return d*a/c+b},_requestAnimationFrame:function(){var a=c.utility.win;return a.requestAnimationFrame?function(a){requestAnimationFrame(a)}:a.webkitRequestAnimationFrame?function(a){webkitRequestAnimationFrame(a)}:a.mozRequestAnimationFrame?function(a){mozRequestAnimationFrame(a)}:
a.oRequestAnimationFrame?function(a){oRequestAnimationFrame(a)}:a.msRequestAnimationFrame?function(a){msRequestAnimationFrame(a)}:function(a){setTimeout(a,1E3/c.Tweener.FPS)}}(),loop:function(){for(var a=this,b=c.Tweener.Items,d,e=Date.now(),f,g=b.length,h,j,m;g--;)if(d=b[g],j=d.property.length,f=e-d.begin,f<d.duration)for(h=0;h<j;h++)m=d.property[h],c.Tweener._setProp(d.target,m,d.ease(f,m.from,m.distance,d.duration));else{for(h=0;h<j;h++)m=d.property[h],c.Tweener._setProp(d.target,m,m.to);if(d.onComplete)d.onComplete();
b.splice(g,1)}if(b.length)return a._requestAnimationFrame(function(){a.loop()}),!0;this.stop()},start:function(){var a=this;c.Tweener.timerId=1;a._requestAnimationFrame(function(){a.loop()})},stop:function(){c.Tweener.Items=[];clearInterval(c.Tweener.timerId);c.Tweener.timerId=null}}});c.Tweener._setProp=function(a,b,d){a[b.name]=b.prefix+d+b.suffix};c.Tweener.timerId=null;c.Tweener.Items=[];c.Tweener.FPS=30;c.Tweener.Duration=500;c.ease={inCubic:function(a,b,d,c){return d*Math.pow(a/c,3)+b},outCubic:function(a,
b,d,c){return d*(Math.pow(a/c-1,3)+1)+b},inOutCubic:function(a,b,d,c){return 1>(a/=c/2)?d/2*Math.pow(a,3)+b:d/2*(Math.pow(a-2,3)+2)+b},inQuart:function(a,b,d,c){return d*Math.pow(a/c,4)+b},outQuart:function(a,b,d,c){return-d*(Math.pow(a/c-1,4)-1)+b},inOutQuart:function(a,b,d,c){return 1>(a/=c/2)?d/2*Math.pow(a,4)+b:-d/2*(Math.pow(a-2,4)-2)+b},inQuint:function(a,b,d,c){return d*Math.pow(a/c,5)+b},outQuint:function(a,b,d,c){return d*(Math.pow(a/c-1,5)+1)+b},inOutQuint:function(a,b,d,c){return 1>(a/=
c/2)?d/2*Math.pow(a,5)+b:d/2*(Math.pow(a-2,5)+2)+b},inSine:function(a,b,d,c){return d*(1-Math.cos(a/c*(Math.PI/2)))+b},outSine:function(a,b,d,c){return d*Math.sin(a/c*(Math.PI/2))+b},inOutSine:function(a,b,d,c){return d/2*(1-Math.cos(Math.PI*a/c))+b},inExpo:function(a,b,d,c){return d*Math.pow(2,10*(a/c-1))+b},outExpo:function(a,b,d,c){return d*(-Math.pow(2,-10*a/c)+1)+b},inOutExpo:function(a,b,d,c){return 1>(a/=c/2)?d/2*Math.pow(2,10*(a-1))+b:d/2*(-Math.pow(2,-10*--a)+2)+b},inCirc:function(a,b,d,
c){return d*(1-Math.sqrt(1-(a/=c)*a))+b},outCirc:function(a,b,d,c){return d*Math.sqrt(1-(a=a/c-1)*a)+b},inOutCirc:function(a,b,d,c){return 1>(a/=c/2)?d/2*(1-Math.sqrt(1-a*a))+b:d/2*(Math.sqrt(1-(a-=2)*a)+1)+b},inQuad:function(a,b,d,c){return d*(a/=c)*a+b},outQuad:function(a,b,d,c){return-d*(a/=c)*(a-2)+b},inOutQuad:function(a,b,d,c){return 1>(a/=c/2)?d/2*a*a+b:-d/2*(--a*(a-2)-1)+b}};c.Ajax=c.klass({init:function(){this.xhr=new XMLHttpRequest},properties:{_u:c.utility,request:function(a){var b=a.url,
d=a.callback||this._u.nullFunction,c=a.error||this._u.nullFunction,f=a.type||"GET",g="",h;a.cash||(a.query||(a.query={}),a.query["ajaxcash"+Date.now()]="0");a.query&&this._u.isObject(g)&&(g=this._u.makeQueryString(a.query),g=encodeURI(g));h=this.xhr=new XMLHttpRequest;h.onreadystatechange=function(){return 4!=h.readyState?!1:200==h.status?d(h.responseText):c(h)};h.open(f,b);"POST"===f&&h.setRequestHeader("Content-Type","application/x-www-form-urlencoded");h.send(g)},abort:function(){this.xhr.abort()},
getJSON:function(a){var b=a.callback,d=a.error;a.callback=function(a){b(JSON.parse(a))};a.error=function(a){d&&d(a)};this.request(a)}}});var K=function(a){a.preventDefault();return!1},x=function(a,b){a=a?a:U;return a.match(b)?!0:!1},V=function(){0===win.pageYOffset&&this._u.pageTop()},L=function(){setTimeout(V,100)},U=navigator.userAgent;c.Mobile=c.klass({properties:{_u:c.utility,_el:c.element,_ev:c.event,isAndroid:function(a){return x(a,/Android/i)},isIOS:function(a){return x(a,/iPhone|iPad|iPod/i)},
isWindows:function(a){return x(a,/IEMobile/i)},isFBAPP:function(a){return x(a,/FBAN/)},isMobile:function(){return this.isAndroid()||this.isIOS()||this.isWindows()||this.isFBAPP()},killScroll:function(a){a||this._u.pageTop();this._el.on(this._u.doc,this._ev.touchmove,K)},revivalScroll:function(a){a||this._u.pageTop();this._el.off(this._u.doc,this._ev.touchmove,K)},hideAddress:function(){this._el.on(this._u.win,this._ev.load,L,!1);this._el.on(this._u.win,this._ev.orientationchange,L,!1)},getOrientation:function(){return 90!==
Math.abs(this._u.win.orientation)&&this._u.win.innerWidth<this._u.win.innerHeight?{portrait:!0,landscape:!1}:{portrait:!1,landscape:!0}},bindOrientation:function(a){function b(a,b){a(f._u.win,f._ev.load,b);a(f._u.win,f._ev.orientationchange,b);a(f._u.win,f._ev.resize,b)}function d(){c();b(f._el.off,d)}function c(){if(f.getOrientation().portrait)return a.portrait(),!0;a.landscape()}var f=this;a.immediately&&c();if(a.one)return b(f._el.on,d),function(){b(f._el.off,d)};b(f._el.on,c);return function(){b(f._el.off,
c)}}}});c.Observer=c.klass({init:function(a){a=a||{single:!1};if(a.single&&c.Observer.instance)return c.Observer.instance;this.observed={};a.single&&(c.Observer.instance=this)},properties:{getObserved:function(){return this.observed},on:function(a,b){var d=this.observed;d[a]||(d[a]=[]);d[a].push(b)},one:function(a,b){var d=this,c=function(f){b(f);d.off(a,c)};d.on(a,c)},off:function(a,b){var d=this.observed;if(!b)return delete d[a],!0;var c=d[a],f;if(!c)return!1;for(f=c.length;f--;)if(b===c[f])return c.splice(f,
1),0===c.length&&delete d[a],!0;return!1},fire:function(a,b){var d=this.observed[a],c,f;if(!d)return!1;for(f=d.length;f--;)(c=d[f])&&c(b);return!0}}});c.Observer.instance=null;c.HashController=c.klass({properties:{utility:c.utility,typeCast:function(a){var b=this.utility.typeCast(a);return a===b&&(a=a.match("^[\"'](.*)[\"']$"))?a[1]:b},makeHash:function(a){var b="#"+a.mode;a=a.vars;var d="?",c;for(c in a)b+=d+c+"="+JSON.stringify(a[c]),d="&";return encodeURI(b)},setHash:function(a){location.hash=
this.makeHash(a);return!0},parseHash:function(a){var b,d,c,f;b=decodeURIComponent(a).split("#")[1];if(!b)return!1;b=b.split("?");a=b[0];if(b[1]){d={};b=b[1].split("&");for(f=b.length;f--;)b[f]&&(c=b[f].split("="),d[c[0]]=this.typeCast(c[1]))}return{mode:a,vars:d}},getHash:function(){return this.parseHash(location.hash)}}});c.ExternalInterface=function(a){a=a||{};var b;if(a.single&&c.ExternalInterface.instance)return c.ExternalInterface.instance;b=a.android?new c.ExternalInterface.Android(a):new c.ExternalInterface.IOS(a);
a.single&&(c.ExternalInterface.instance=b);return b};c.ExternalInterface.instance=null;c.ExternalInterface.Android=c.klass({init:function(a){a=a||{};this.android=a.android;this.externalObj=a.externalObj;this.externalObj||(c.EXTERNAL_ANDROID={},this.externalObj=c.EXTERNAL_ANDROID)},extend:c.HashController,properties:{call:function(a){this.android[a.mode](this.makeHash(a))},addCallback:function(a,b){var c=this;c.externalObj[a]=function(a){a=c.parseHash(a);return b(a.vars)}},removeCallback:function(a){delete this.externalObj[a]}}});
c.ExternalInterface.IOS=c.klass({init:function(){this.ios={}},extend:c.HashController,properties:{_u:c.utility,_el:c.element,_ev:c.event,call:function(a){this.setHash(a)},addCallback:function(a,b){var c=this;c.ios[a]=function(){var e=c.getHash();return e.mode===a?(b(e.vars),!0):!1};this._el.on(this._u.win,this._ev.hashchange,this.ios[a])},removeCallback:function(a){this._el.off(this._u.win,this._ev.hashchange,this.ios[a]);delete this.ios[a]}}});c.Facebook=c.klass({properties:{_u:c.utility,shareURLBase:"https://www.facebook.com/dialog/feed?",
getShareURL:function(a){var b=this.shareURLBase+"app_id="+a.app_id+"&redirect_uri="+a.redirect_uri;return b+=this._u.makeQueryString({link:a.link,picture:a.picture,name:a.name,caption:a.caption,description:a.description})}}});c.Twitter=c.klass({properties:{_u:c.utility,_b:"https://twitter.com/intent/tweet?",getShareURL:function(a){var b=a.redirect_uri,c=a.caption||"",e=a.name||"";a=a.hash||"";var f=this._b;return f+=this._u.makeQueryString({url:b,text:c+(e?" \u300c"+e+"\u300d":"")+(a?" "+a:"")})}}});
c.DataStore=c.klass({init:function(a){a=a||{};if(a.single&&c.DataStore.instance)return c.DataStore.instance;this.d={};a.single&&(c.DataStore.instance=this)},properties:{set:function(a,b){this.d[a]=b;return!0},get:function(a){var b=this.d;if(a)return b[a];a={};for(var c in b)a[c]=b[c];return a},remove:function(a){var b=this.d;if(!b[a])return!1;delete b[a];return!0},reset:function(){this.d={};return!0}}});c.DataStore.instance=null;c.LocalStorage=c.klass({init:function(a){a=a||{};if(a.single&&c.LocalStorage.instance)return c.LocalStorage.instance;
this._n=a.namespace?a.namespace+"-":"";a.single&&(c.LocalStorage.instance=this)},properties:{_s:c.utility.win.localStorage,set:function(a,b){this._s.setItem(this._n+a,JSON.stringify(b));return!0},get:function(a){if(a)return JSON.parse(this._s.getItem(this._n+a));var b={},c;for(c in this._s)this._n?(a=c.split(this._n)[1])&&(b[a]=JSON.parse(this._s[c])):b[c]=JSON.parse(this._s[c]);return b},remove:function(a){a=this._n+a;if(!this._s.getItem(a))return!1;this._s.removeItem(a);return!0},reset:function(){if(!this._n)return this._s.clear(),
!0;for(var a in this._s)this.remove(a)}}});c.LocalStorage.instance=null;c.SessionStorage=c.klass({init:function(a){a=a||{};if(a.single&&c.SessionStorage.instance)return c.SessionStorage.instance;this._n=a.namespace?a.namespace+"-":"";a.single&&(c.SessionStorage.instance=this)},properties:{_s:c.utility.win.sessionStorage,set:function(a,b){this._s.setItem(this._n+a,JSON.stringify(b));return!0},get:function(a){if(a)return JSON.parse(this._s.getItem(this._n+a));var b={},c;for(c in this._s)this._n?(a=
c.split(this._n)[1])&&(b[a]=JSON.parse(this._s[c])):b[c]=JSON.parse(this._s[c]);return b},remove:function(a){a=this._n+a;if(!this._s.getItem(a))return!1;this._s.removeItem(a);return!0},reset:function(){if(!this._n)return this._s.clear(),!0;for(var a in this._s)this.remove(a)}}});c.SessionStorage.instance=null;c.Bind=c.klass({init:function(a){this.handler=a;this.add()},properties:{_el:c.element,getHandler:function(){return this.handler},add:function(){return this._exe(!0)},remove:function(){return this._exe(!1)},
_exe:function(a){var b=this._el;a=a?b.on:b.off;for(var c in this.handler.events)a(this.handler.element,c,this.handler.events[c]);return this.handler}}});var M=c.element.create;c.CanvasImage=function(a){var b=M("canvas"),c=M("img"),e=a.src,f=a.width,g=a.height,h=a.onload;c.onload=function(){b.width=f;b.height=g;b.getContext("2d").drawImage(c,0,0);h(b,c)};c.src=e;return b};c.CanvasRender=c.klass({init:function(a){this.canvas=a.canvas;this.ctx=this.canvas.getContext("2d");this.canvasWidth=this.canvas.width;
this.canvasHeight=this.canvas.height;this.setSize(a)},properties:{setSize:function(a){a.width&&(this.canvas.width=this.canvasWidth=a.width);a.height&&(this.canvas.height=this.canvasHeight=a.height)},draw:function(a){this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight);for(var b=0,c=a.length,e;b<c;b++)e=a[b],this.ctx.drawImage(e.image,e.x,e.y)}}});c.DragFlick=c.klass({init:function(a){a&&this.bind(a)},properties:{_u:c.utility,_el:c.element,_ev:c.event,_getEventTarget:function(a){return a.changedTouches?
a.changedTouches[0]:a},amount:function(a){var b=this,c,e,f=!1;b._el.on(a.element,b._ev.switchdown,function(a){var h=b._getEventTarget(a);c=h.pageX;e=h.pageY;f=!0;a.preventDefault()});b._el.on(b._u.win,b._ev.switchup,function(g){f&&(g=b._getEventTarget(g),a.callback({x:g.pageX-c,y:g.pageY-e}),f=!1)})},direction:function(a){this.amount({element:a.element,callback:function(b){var c=a.boundary||0,e={change:!1,top:!1,right:!1,bottom:!1,left:!1,amount:b};Math.abs(b.x)>c&&(0<b.x?e.right=!0:0>b.x&&(e.left=
!0),e.change=!0);Math.abs(b.y)>c&&(0<b.y?e.bottom=!0:0>b.y&&(e.top=!0),e.change=!0);a.callback(e)}})},bind:function(a){function b(a,b,e){g.on(a,b,function(a){a=c._getEventTarget(a);e(a)})}var c=this,e=a.element,f=this._ev,g=this._el,h=this._u,j=a.start||h.nullFunction,m=a.move||h.nullFunction,k=a.end||h.nullFunction,l=!1,s=0,q=0;a.direction&&c.direction({element:e,boundary:a.boundary,callback:a.direction});b(e,f.switchdown,function(a){l=!0;s=a.pageX;q=a.pageY;j({e:a,move:{x:s,y:q}})});b(h.doc,f.switchmove,
function(a){l&&m({e:a,move:{x:a.pageX-s,y:a.pageY-q}})});b(h.doc,f.switchup,function(a){l&&(k({e:a,move:{x:a.pageX-s,y:a.pageY-q}}),l=!1)})}}});c.FontImage=c.klass({init:function(a){a=a||{type:""};this.type=a.type?a.type+"_":""},properties:{make:function(a){a=(""+a).split("");var b="",c;for(c=a.length;c--;)b='<span class="font_'+(this.type+a[c])+'">&nbsp;</span>'+b;return b}}});c.ImgLoad=c.klass({init:function(a){this.srcs=a.srcs;this.srccount=this.srcs.length;this.loadedsrcs=[];this.onload=a.onload||
this._u.nullFunction;this.onprogress=a.onprogress||this._u.nullFunction;this.progress=this.loadcount=0;this.started=!1;a.manual||this.start()},properties:{_u:c.utility,_el:c.element,_ev:c.event,_c:function(){this.loadcount++;this.progress=this.loadcount/this.srccount;this.onprogress(this.progress);if(this.loadcount>=this.srccount)this.onload(this.loadedsrcs)},start:function(){if(this.started)return!1;this.started=!0;var a=this,b,c,e;c=0;for(e=a.srccount;c<e;c++)b=a._el.create("img"),b.src=a.srcs[c],
a._el.on(b,a._ev.load,function(){a._c()}),a.loadedsrcs.push(b)},getProgress:function(){return this.progress}}});c.Loading=c.klass({init:function(a){if(a&&a.onload)this.onload(a.onload)},properties:{_u:c.utility,_el:c.element,_ev:c.event,onload:function(a){this._el.on(this._u.win,this._ev.load,a)}}});c.ScriptLoad=c.klass({properties:{_u:c.utility,_el:c.element,_ev:c.event,requests:function(a){for(var b=0,c=a.length;b<c;b++)this.request(a[b])},request:function(a){var b=this._el.create("script");b.type=
"text/javascript";b.src=a.src;this._el.append(this._u.doc.body,b);if(a.callback)this._el.on(b,this._ev.load,a.callback)}}});c.Deferred=c.klass({init:function(){this.queue=[];this.data=null},properties:{isResolve:function(){return!this.queue},resolve:function(a){if(this.isResolve())return this;var b=this.queue,c=b.length,e=0;this.queue=null;for(this.data=a;e<c;++e)b[e](a);return this},done:function(a){this.queue?this.queue.push(a):a(this.data);return this}}});var P=function(a){a.nexttime<=Date.now()&&
(N(a),a.nexttime=a.nowtime+a.msecFrame);1===a.loopid&&O(function(){P(a)})},N=function(a){a.nowtime=Date.now();a.surver=Math.round(1E3/(a.nowtime-a.prevtime));a.prevtime=a.nowtime;a.enter()},B,l=c.utility.win,O=l.requestAnimationFrame||l.webkitRequestAnimationFrame||l.mozRequestAnimationFrame||l.oRequestAnimationFrame||l.msRequestAnimationFrame||!1;c.FPS=c.klass({init:function(a){a=a||{};a.criterion||(a.criterion=20);if(a.single&&B)return B;this.surver=this.criterion=a.criterion;this.enterframe=a.enterframe;
this.msecFrame=Math.round(1E3/this.criterion);this.prevtime=this.nowtime=this.nexttime=this.loopid=0;a.manual||this.start();a.single&&(B=this)},properties:{getCriterion:function(){return this.criterion},getSurver:function(){return this.surver},getFrameTime:function(){return this.msecFrame},enter:function(){this.enterframe({criterion:this.criterion,surver:this.surver})},start:function(){this.prevtime=Date.now();this.nexttime=this.prevtime+this.msecFrame;O?(this.loopid=1,P(this)):this.loopid=setInterval(N,
this.msecFrame,this)},stop:function(){clearInterval(this.loopid);this.loopid=0}}});c.PreRender=c.klass({init:function(a){a=a||{};a.loopblur||(a.loopblur=20);this.elements=a.elements||[];this.guesslimit=a.guesslimit||30;this.onrendered=a.onrendered||this._u.nullFunction;this.looptime=a.looptime||100;this.loopblur=this.looptime+a.loopblur;this.loopid=this.prevtime=null;a.manual||this.start()},properties:{_u:c.utility,_el:c.element,start:function(){var a;for(a=this.elements.length;a--;)this._el.show(this.elements[a]);
this.prevtime=Date.now();this.loopid=setInterval(function(a){var c=Date.now(),e=c-a.prevtime;a.prevtime=c;if(e<a.loopblur&&(a.guesslimit--,1>a.guesslimit)){clearInterval(a.loopid);for(c=a.elements.length;c--;)a._el.hide(a.elements[c]);a.onrendered()}},this.looptime,this)}}});var n=function(a){return Q?t.getResponseHeader(a):!1},R=function(a){var b=new XMLHttpRequest;b.onload=function(){a(b)};b.open("HEAD",location.href+"?update"+Date.now()+"=1");b.send(null);return b},t,Q=!1;c.ServerMeta=c.klass({init:function(a){a=
a||{};var b=a.callback||this._u.nullFunction;t?b(t):t=R(function(){Q=!0;b(t)})},properties:{_u:c.utility,date:function(a){return R(function(b){b=new Date(b.getResponseHeader("Date"));a(b)})},connection:function(){return n("Connection")},contentLength:function(){return n("Content-Length")},lastModified:function(){return n("Last-Modified")},server:function(){return n("Server")},contentType:function(){return n("Content-Type")},acceptRanges:function(){return n("Accept-Ranges")},keepAlive:function(){return n("Keep-Alive")}}});
c.Surrogate=c.klass({init:function(a){this.delay=a.delay;this.callback=a.callback;this.waitid=this.args=null},properties:{request:function(a){this.args=a;this.clear();this.waitid=setTimeout(this.flush,this.delay,this)},flush:function(a){a=a||this;a.callback(a.args)},clear:function(){clearInterval(this.waitid)}}});c.Throttle=c.klass({init:function(a){this.waittime=a.waittime;this.callback=a.callback;this.locked=!1;this.waitarg=this.waitid=null},properties:{request:function(a){var b=this;if(b.locked)return b.waitarg=
a,!1;b.callback(a);b.lock();b.waitid=setTimeout(function(){b.waitarg&&(b.callback(b.waitarg),b.waitarg=null);b.unlock()},b.waittime,b)},lock:function(){this.locked=!0},unlock:function(a){a=a||this;a.locked=!1;clearInterval(a.waitid)}}});c.Timer=function(a){function b(){q=Date.now();var a=g-(q-s)/1E3;0>a&&(a=0);r=c(a);k(r);if(q>p)return u.stop(),l(),!0;t=setTimeout(b,j);return!1}function c(a){var b;b=(""+a).split(".");a=b[0];b=b[1]?b[1]:"";a=e({num:a,digit:n.integer});b=e({num:b,digit:n.few,isFew:!0});
return a+"."+b}function e(a){var b=""+a.num,c=a.digit,d=c-b.length;return!a.isFew?-1<d?f(d,0)+b:f(c,9):0<d?b+f(d,0):b.slice(0,c)}function f(a,b){var c="";for(b=""+b;0<a;)c+=b,a--;return c}var g=a.limit,h=1E3*g,j=1E3*a.interval,k=a.onupdate,l=a.ontimeup,n;a=a.template.split(".");n={integer:a[0].length,few:a[1].length};var s=0,q=0,p=h,r=c(g),t,u={getLimit:function(){return g},getTime:function(){return r},getProgress:function(){return 1-(p-q)/h},setUpdate:function(a){k=a},setTimeup:function(a){l=a},
countDown:function(){q=s=Date.now();p=s+h;b()},stop:function(){clearInterval(t)}};return u};c.XML=c.klass({init:function(a){this.element=this._el.create("div");this.data={};a&&a.data&&this.setData(a.data)},properties:{_el:c.element,getData:function(){return this.data},setData:function(a){this.data=this.element.innerHTML=a},$:function(a){return this._el.$child(a,this.element)},$$:function(a){return this._el.$$child(a,this.element)}}})})();
