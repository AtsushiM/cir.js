var C={};
(function(){var e=C;(function(a,b){function c(a,b){return Object.prototype.toString.call(b)==="[object "+a+"]"?!0:!1}function d(a){return c("Object",a)}function g(a,b,c){var f;if(d(b)){for(f in b)a.setAttribute(f,b[f]);return!0}return c||""===c?a.setAttribute(b,c):a.getAttribute(b)}function f(a,b){for(var c=a.className,c=c?c.split(" "):[],d=0,f=c.length;d<f;d++)if(b&&b===c[d])return!0;return!1}function h(a,b){var c="";if(f(a,b))return!1;a.className&&(c=" ");a.className=a.className+c+b;return!0}function i(a,
b){var c,d=[],e,g;if(!f(a,b))return!1;c=a.className.split(" ");e=0;for(g=c.length;e<g;e++)b!==c[e]&&d.push(c[e]);a.className=d.join(" ");return!0}function k(a,b){var c=b.querySelectorAll(a),d=[],f,e;f=0;for(e=c.length;f<e;f++)d[f]=c[f];return d}function j(a){var b=""+a;return b.match("^{.*}$")?JSON.parse(b):b.match("^[0-9.]+$")?1*b:"true"===b?!0:"false"===b?!1:a}Date.now||(Date.now=function(){return+new Date});e.utility={win:a,doc:b,body:b.body,$:function(a){return b.querySelector(a)},$$:function(a){return k(a,
b)},$child:function(a,b){return b.querySelector(a)},$$child:k,$id:function(a){return b.getElementById(a)},pageTop:function(){a.scrollTo(0,1)},onEvent:function(a,b,c){a.addEventListener(b,c)},offEvent:function(a,b,c){a.removeEventListener(b,c)},makeElement:function(a,c){var d=b.createElement(a);c&&g(d,c);return d},showElement:function(a){a.style.display="block"},hideElement:function(a){a.style.display="none"},opacityElement:function(a,b){a.style.opacity=b},hasClass:f,addClass:h,removeClass:i,toggleClass:function(a,
b){return f(a,b)?i(a,b):h(a,b)},styleElement:function(a,b){var c=a.style,d,f,e;for(d in b){f=d;e=b[d];isFinite(e)&&(e=e+"px");c[f]=e}},appendElement:function(a,b){a.appendChild(b)},attrElement:g,innerHTML:function(a,b){if(b)a.innerHTML=b;else return a.innerHTML},override:function(a,b){for(var c in b)a[c]=b[c];return a},replaceAll:function(a,b,c){return a.split(b).join(c)},windowOpen:function(b,c){return a.open(b,c)},typeCast:j,makeQueryString:function(a){var b="",c="",d;for(d in a)if(a[d]){c=c+(b+
d+"="+encodeURIComponent(a[d]));b="&"}return c},parseQueryString:function(a){var a=a.replace(/^\#/,"").replace(/^\?/,""),a=a.split("&"),b,c,d={};for(b=a.length;b--;){c=a[b].split("=");d[c[0]]=j(decodeURIComponent(c[1]))}return d},is:c,isObject:d,isNumber:function(a){return c("Number",a)},isString:function(a){return c("String",a)},isFunction:function(a){return c("Function",a)},isBoolean:function(a){return c("Boolean",a)},isTouchDevice:function(){return"ontouchstart"in a},nullFunction:function(){return null}}})(window,
document);e.klass=function(a){var b=e.utility.override,c=a.init||function(){},d=a.properties;(a=a.extend)&&e.extend(c,a);b(c.prototype,d);return c};e.extend=function(a,b){function c(){this.init=a}c.prototype=b.prototype;a.prototype=new c;var d=a.prototype;d._superclass=b;d._super=function(){var a=this._prevctor,a=a?a.prototype._superclass:this._prevctor=b;a.apply(this,arguments)}};e.selector=function(a,b){var c=e.selector,d=(b||document).querySelectorAll(a),g,f=0,h=d.length;g=function(){};g.prototype=
c.methods;c=new g;c.length=h;for(c.selector=a;f<h;f++)c[f]=d[f];return c};(function(){function a(a,b,d){for(var e=0,k=a.length,d=c(d);e<k;e++)d[0]=a[e],b.apply(null,d);return a}function b(a,b,d){d=c(d);d[0]=a[0];return b.apply(null,d)}function c(a){for(var b=[null],c=0,d=a?a.length:0;c<d;c++)b[c+1]=a[c];return b}var d=e.utility;e.selector.methods={querySelectorAll:function(a){return this[0].querySelectorAll(a)},find:function(a){return e.selector(a,this)},on:function(){return a(this,d.onEvent,arguments)},
off:function(){return a(this,d.offEvent,arguments)},show:function(){return a(this,d.showElement)},hide:function(){return a(this,d.hideElement)},opacity:function(){return a(this,d.opacityElement,arguments)},hasClass:function(){return b(this,d.hasClass,arguments)},addClass:function(){return a(this,d.addClass,arguments)},removeClass:function(){return a(this,d.removeClass,arguments)},toggleClass:function(){return a(this,d.toggleClass,arguments)},css:function(){return a(this,d.styleElement,arguments)},
html:function(){return b(this,d.innerHTML,arguments)},attr:function(){return b(this,d.attrElement,arguments)},append:function(){return a(this,d.appendElement,arguments)}}})();e.easing={easeInCubic:function(a,b,c,d){return c*Math.pow(a/d,3)+b},easeOutCubic:function(a,b,c,d){return c*(Math.pow(a/d-1,3)+1)+b},easeInOutCubic:function(a,b,c,d){return 1>(a/=d/2)?c/2*Math.pow(a,3)+b:c/2*(Math.pow(a-2,3)+2)+b},easeInQuart:function(a,b,c,d){return c*Math.pow(a/d,4)+b},easeOutQuart:function(a,b,c,d){return-c*
(Math.pow(a/d-1,4)-1)+b},easeInOutQuart:function(a,b,c,d){return 1>(a/=d/2)?c/2*Math.pow(a,4)+b:-c/2*(Math.pow(a-2,4)-2)+b},easeInQuint:function(a,b,c,d){return c*Math.pow(a/d,5)+b},easeOutQuint:function(a,b,c,d){return c*(Math.pow(a/d-1,5)+1)+b},easeInOutQuint:function(a,b,c,d){return 1>(a/=d/2)?c/2*Math.pow(a,5)+b:c/2*(Math.pow(a-2,5)+2)+b},easeInSine:function(a,b,c,d){return c*(1-Math.cos(a/d*(Math.PI/2)))+b},easeOutSine:function(a,b,c,d){return c*Math.sin(a/d*(Math.PI/2))+b},easeInOutSine:function(a,
b,c,d){return c/2*(1-Math.cos(Math.PI*a/d))+b},easeInExpo:function(a,b,c,d){return c*Math.pow(2,10*(a/d-1))+b},easeOutExpo:function(a,b,c,d){return c*(-Math.pow(2,-10*a/d)+1)+b},easeInOutExpo:function(a,b,c,d){return 1>(a/=d/2)?c/2*Math.pow(2,10*(a-1))+b:c/2*(-Math.pow(2,-10*--a)+2)+b},easeInCirc:function(a,b,c,d){return c*(1-Math.sqrt(1-(a/=d)*a))+b},easeOutCirc:function(a,b,c,d){return c*Math.sqrt(1-(a=a/d-1)*a)+b},easeInOutCirc:function(a,b,c,d){return 1>(a/=d/2)?c/2*(1-Math.sqrt(1-a*a))+b:c/2*
(Math.sqrt(1-(a-=2)*a)+1)+b},easeInQuad:function(a,b,c,d){return c*(a/=d)*a+b},easeOutQuad:function(a,b,c,d){return-c*(a/=d)*(a-2)+b},easeInOutQuad:function(a,b,c,d){return 1>(a/=d/2)?c/2*a*a+b:-c/2*(--a*(a-2)-1)+b}};(function(){var a,b=e.utility.isTouchDevice();e.Event=e.klass({init:function(b){b=b||{};if(b.single&&a)return a;b.single&&(a=this)},properties:{utility:e.utility,switchclick:b?"touchstart":"click",switchdown:b?"touchstart":"mousedown",switchmove:b?"touchmove":"mousemove",switchup:b?"touchend":
"mouseup",load:"load",hashchange:"hashchange",click:"click",mousedown:"mousedown",mousemove:"mousemove",mouseup:"mouseup",touchstart:"touchstart",touchmove:"touchmove",touchend:"touchend",orientationchange:"orientationchange",resize:"resize"}})})();e.HashController=e.klass({properties:{utility:e.utility,typeCast:function(a){var b=this.utility.typeCast(a);return a===b&&(a=a.match("^[\"'](.*)[\"']$"))?a[1]:b},makeHash:function(a){var b="#"+a.mode,a=a.vars,c="?",d;for(d in a)b+=c+d+"="+JSON.stringify(a[d]),
c="&";return encodeURI(b)},setHash:function(a){location.hash=this.makeHash(a);return!0},parseHash:function(a){var b,c,d,e;b=decodeURIComponent(a).split("#")[1];if(!b)return!1;b=b.split("?");a=b[0];if(b[1]){c={};b=b[1].split("&");for(e=b.length;e--;)b[e]&&(d=b[e].split("="),c[d[0]]=this.typeCast(d[1]))}return{mode:a,vars:c}},getHash:function(){return this.parseHash(location.hash)}}});e.Ajax=e.klass({init:function(){this.xhr=new XMLHttpRequest},properties:{utility:e.utility,request:function(a){var b=
a.url,c=a.callback,d=a.error,e=a.type||"GET",f="",h;a.cash||(a.query||(a.query={}),a.query["ajaxcash"+Date.now()]="0");a.query&&(f=this.utility.makeQueryString(a.query),f=encodeURI(f));h=this.xhr=new XMLHttpRequest;h.onreadystatechange=function(){if(h.readyState!=4)return false;h.status==200?c(h.responseText):d&&d(h)};h.open(e,b);"POST"===e&&h.setRequestHeader("Content-Type","application/x-www-form-urlencoded");h.send(f)},abort:function(){this.xhr.abort()},getJSON:function(a){this.request({type:a.type,
url:a.url,callback:function(b){a.callback(JSON.parse(b))},error:function(b){a.error&&a.error(b)}})}}});e.Bind=e.klass({properties:{utility:e.utility,add:function(a){return this.exe(a,!0)},remove:function(a){return this.exe(a,!1)},exe:function(a,b){var c=this.utility,d=a.element,e=a.events,c=b?c.onEvent:c.offEvent,f;for(f in e)c(d,f,e[f]);return a}}});(function(){var a=e.utility.makeElement;e.CanvasImage=function(b){var c=a("canvas"),d=a("img"),e=b.src,f=b.width,h=b.height,i=b.onload;d.onload=function(){c.width=
f;c.height=h;c.getContext("2d").drawImage(d,0,0);i(c,d)};d.src=e;return c}})();e.CanvasRender=e.klass({init:function(a){this.canvas=a.canvas;this.ctx=this.canvas.getContext("2d");this.canvasWidth=this.canvas.width;this.canvasHeight=this.canvas.height;this.setSize(a)},properties:{setSize:function(a){a.width&&(this.canvas.width=this.canvasWidth=a.width);a.height&&(this.canvas.height=this.canvasHeight=a.height)},draw:function(a){this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight);for(var b=0,
c=a.length,d;b<c;b++)d=a[b],this.ctx.drawImage(d.image,d.x,d.y)}}});(function(){var a;e.DataStore=e.klass({init:function(b){b=b||{};if(b.single&&a)return a;this.data={};b.single&&(a=this)},properties:{set:function(a,c){this.data[a]=c;return!0},get:function(a){var c=this.data;if(a)return c[a];var a={},d;for(d in c)a[d]=c[d];return a},remove:function(a){var c=this.data;if(!c[a])return!1;delete c[a];return!0},reset:function(){this.data={};return!0}}})})();e.DragFlick=e.klass({init:function(a){a&&this.bind(a)},
properties:{utility:e.utility,_event:new e.Event,_getEventTarget:function(a){return a.changedTouches?a.changedTouches[0]:a},amount:function(a){var b=this,c,d,e=!1;b.utility.onEvent(a.element,b._event.switchdown,function(a){var h=b._getEventTarget(a);c=h.pageX;d=h.pageY;e=!0;a.preventDefault()});b.utility.onEvent(b.utility.win,b._event.switchup,function(f){e&&(f=b._getEventTarget(f),a.callback({x:f.pageX-c,y:f.pageY-d}),e=!1)})},direction:function(a){this.amount({element:a.element,callback:function(b){var c=
a.boundary||0,d={change:!1,top:!1,right:!1,bottom:!1,left:!1,amount:b};Math.abs(b.x)>c&&(0<b.x?d.right=!0:0>b.x&&(d.left=!0),d.change=!0);Math.abs(b.y)>c&&(0<b.y?d.bottom=!0:0>b.y&&(d.top=!0),d.change=!0);a.callback(d)}})},bind:function(a){function b(a,b,d){f.onEvent(a,b,function(a){a=c._getEventTarget(a);d(a)})}var c=this,d=a.element,e=this._event,f=this.utility,h=a.start||f.nullFunction,i=a.move||f.nullFunction,k=a.end||f.nullFunction,j=!1,m=0,l=0;a.direction&&c.direction({element:d,boundary:a.boundary,
callback:a.direction});b(d,e.switchdown,function(a){j=!0;m=a.pageX;l=a.pageY;h({e:a,move:{x:m,y:l}})});b(f.doc,e.switchmove,function(a){j&&i({e:a,move:{x:a.pageX-m,y:a.pageY-l}})});b(f.doc,e.switchup,function(a){j&&(k({e:a,move:{x:a.pageX-m,y:a.pageY-l}}),j=!1)})}}});(function(){var a;e.ExternalInterface=function(b){var b=b||{},c;if(b.single&&a)return a;c=b.android?new e.ExternalAndroidInterface(b):new e.ExternalIOSInterface(b);b.single&&(a=c);return c}})();(function(){var a;e.ExternalAndroidInterface=
e.klass({init:function(b){b=b||{};if(b.single&&a)return a;this.android=b.android;this.externalObj=b.externalObj;this.externalObj||(e.EXTERNAL_ANDROID={},this.externalObj=e.EXTERNAL_ANDROID);b.single&&(a=this)},properties:{hashCtrl:new e.HashController,call:function(a){this.android[a.mode](this.hashCtrl.makeHash(a))},addCallback:function(a,c){var d=this;d.externalObj[a]=function(a){a=d.hashCtrl.parseHash(a);return c(a.vars)}},removeCallback:function(a){delete this.externalObj[a]}}})})();(function(){var a;
e.ExternalIOSInterface=e.klass({init:function(b){b=b||{};if(b.single&&a)return a;this.ios={};b.single&&(a=this)},properties:{utility:e.utility,_event:new e.Event,hashCtrl:new e.HashController,call:function(a){this.hashCtrl.setHash(a)},addCallback:function(a,c){var d=this;d.ios[a]=function(){var e=d.hashCtrl.getHash();return e.mode===a?(c(e.vars),!0):!1};this.utility.onEvent(this.utility.win,this._event.hashchange,this.ios[a])},removeCallback:function(a){this.utility.offEvent(this.utility.win,this._event.hashchange,
this.ios[a]);delete this.ios[a]}}})})();e.Facebook=e.klass({properties:{utility:e.utility,shareURLBase:"https://www.facebook.com/dialog/feed?",getShareURL:function(a){var b=this.shareURLBase+"app_id="+a.app_id+"&redirect_uri="+a.redirect_uri;return b+=this.utility.makeQueryString({link:a.link,picture:a.picture,name:a.name,caption:a.caption,description:a.description})}}});(function(){function a(c){c.nexttime<=Date.now()&&(b(c),c.nexttime=c.nowtime+c.msecFrame);1===c.loopid&&g(function(){a(c)})}function b(a){a.nowtime=
Date.now();a.surver=Math.round(1E3/(a.nowtime-a.prevtime));a.prevtime=a.nowtime;a.enter()}var c,d=e.utility.win,g=d.requestAnimationFrame||d.webkitRequestAnimationFrame||d.mozRequestAnimationFrame||d.oRequestAnimationFrame||d.msRequestAnimationFrame||!1;e.FPS=e.klass({init:function(a){a=a||{};a.criterion||(a.criterion=20);if(a.single&&c)return c;this.surver=this.criterion=a.criterion;this.enterframe=a.enterframe;this.msecFrame=Math.round(1E3/this.criterion);this.prevtime=this.nowtime=this.nexttime=
this.loopid=0;a.single&&(c=this)},properties:{getCriterion:function(){return this.criterion},getSurver:function(){return this.surver},getFrameTime:function(){return this.msecFrame},enter:function(){this.enterframe({criterion:this.criterion,surver:this.surver})},start:function(){this.prevtime=Date.now();this.nexttime=this.prevtime+this.msecFrame;g?(this.loopid=1,a(this)):this.loopid=setInterval(b,this.msecFrame,this)},stop:function(){clearInterval(this.loopid);this.loopid=0}}})})();e.ImgLoad=e.klass({init:function(a){var b=
this;b.srcs=a.srcs;b.srccount=b.srcs.length;b.loadedsrcs=[];b.onload=a.onload||b.utility.nullFunction;b.onprogress=a.onprogress||b.utility.nullFunction;b.loadcount=0;b.progress=0;b.check=function(){b.loadcount++;b.progress=b.loadcount/b.srccount;b.onprogress(b.progress);if(b.loadcount>=b.srccount)b.onload(b.loadedsrcs)}},properties:{utility:e.utility,_event:new e.Event,start:function(){var a,b,c;b=0;for(c=this.srccount;b<c;b++)a=this.utility.makeElement("img"),a.src=this.srcs[b],this.utility.onEvent(a,
this._event.load,this.check),this.loadedsrcs.push(a)},getProgress:function(){return this.progress}}});e.Loading=e.klass({init:function(a){if(a&&a.onload)this.onload(a.onload)},properties:{utility:e.utility,_event:new e.Event,onload:function(a){this.utility.onEvent(this.utility.win,this._event.load,a)}}});(function(){var a;e.LocalStorage=e.klass({init:function(b){b=b||{};if(b.single&&a)return a;b.single&&(a=this)},properties:{utility:e.utility,storage:e.utility.win.localStorage,set:function(a,c){this.storage.setItem(a,
JSON.stringify(c));return!0},get:function(a){if(a)return JSON.parse(this.storage.getItem(a));var a={},c;for(c in this.storage)a[c]=JSON.parse(this.storage[c]);return a},remove:function(a){if(!this.storage.getItem(a))return!1;this.storage.removeItem(a);return!0},reset:function(){this.storage.clear();return!0}}})})();(function(){function a(a){a.preventDefault();return!1}function b(a,b){a=a?a:g;return a.match(b)?!0:!1}function c(){0===win.pageYOffset&&this.utility.pageTop()}function d(){setTimeout(c,
100)}var g=navigator.userAgent;e.Mobile=e.klass({properties:{utility:e.utility,_event:new e.Event,isAndroid:function(a){return b(a,/Android/i)},isIOS:function(a){return b(a,/iPhone|iPad|iPod/i)},isWindows:function(a){return b(a,/IEMobile/i)},isFBAPP:function(a){return b(a,/FBAN/)},isMobile:function(){return this.isAndroid()||this.isIOS()||this.isWindows()||this.isFBAPP()},killScroll:function(b){b||this.utility.pageTop();this.utility.onEvent(this.utility.doc,this._event.touchmove,a)},revivalScroll:function(b){b||
this.utility.pageTop();this.utility.offEvent(this.utility.doc,this._event.touchmove,a)},hideAddress:function(){this.utility.onEvent(this.utility.win,this._event.load,d,!1);this.utility.onEvent(this.utility.win,this._event.orientationchange,d,!1)},orientationCheck:function(){return 90!==Math.abs(this.utility.win.orientation)&&this.utility.win.innerWidth<this.utility.win.innerHeight?{portrait:!0,landscape:!1}:{portrait:!1,landscape:!0}},orientationChange:function(a){function b(a,c){a(e.utility.win,
e._event.load,c);a(e.utility.win,e._event.orientationchange,c);a(e.utility.win,e._event.resize,c)}function c(){d();b(e.utility.offEvent,c)}function d(){if(e.orientationCheck().portrait)return a.portrait(),!0;a.landscape()}var e=this;a.immediately&&d();if(a.one)return b(e.utility.onEvent,c),function(){b(e.utility.offEvent,c)};b(e.utility.onEvent,d);return function(){b(e.utility.offEvent,d)}}}})})();e.NumberImage=e.klass({init:function(a){a=a||{type:""};this.type=a.type},properties:{make:function(a){var a=
(""+a).split(""),b="",c;for(c=a.length;c--;)b='<span class="num_'+(this.type+a[c])+'">&nbsp;</span>'+b;return b}}});(function(){var a;e.Observer=e.klass({init:function(b){b=b||{single:!1};if(b.single&&a)return a;this.observed={};b.single&&(a=this)},properties:{getObserved:function(){return this.observed},on:function(a,c){var d=this.observed;d[a]||(d[a]=[]);d[a].push(c)},one:function(a,c){var d=this,e=function(f){c(f);d.off(a,e)};d.on(a,e)},off:function(a,c){var d=this.observed;if(!c)return delete d[a],
!0;var e=d[a],f;if(!e)return!1;for(f=e.length;f--;)if(c===e[f])return e.splice(f,1),0===e.length&&delete d[a],!0;return!1},fire:function(a,c){var d=this.observed[a],e,f;if(!d)return!1;for(f=d.length;f--;)(e=d[f])&&e(c);return!0}}})})();e.PreRender=e.klass({init:function(a){a=a||{};a.loopblur||(a.loopblur=20);this.elements=a.elements||[];this.guesslimit=a.guesslimit||30;this.onrendered=a.onrendered||this.utility.nullFunction;this.looptime=a.looptime||100;this.loopblur=this.looptime+a.loopblur;this.loopid=
this.prevtime=null},properties:{utility:e.utility,start:function(){var a;for(a=this.elements.length;a--;)this.utility.showElement(this.elements[a]);this.prevtime=Date.now();this.loopid=setInterval(function(a){var c=Date.now(),d=c-a.prevtime;a.prevtime=c;if(d<a.loopblur&&(a.guesslimit--,1>a.guesslimit)){clearInterval(a.loopid);for(c=a.elements.length;c--;)a.utility.hideElement(a.elements[c]);a.onrendered()}},this.looptime,this)}}});e.ScriptLoad=e.klass({properties:{utility:e.utility,_event:new e.Event,
requests:function(a){for(var b=0,c=a.length;b<c;b++)this.request(a[b])},request:function(a){var b=this.utility.makeElement("script");b.type="text/javascript";b.src=a.src;this.utility.body.appendChild(b);if(a.callback)this.utility.onEvent(b,this._event.load,a.callback)}}});(function(){function a(a){return d?c.getResponseHeader(a):!1}function b(a){var b=new XMLHttpRequest;b.onload=function(){a(b)};b.open("HEAD",location.href+"?update"+Date.now()+"=1");b.send(null);return b}var c,d=!1;e.ServerMeta=e.klass({init:function(a){var a=
a||{},e=a.callback||this.utility.nullFunction;c?e(c):c=b(function(){d=!0;e(c)})},properties:{utility:e.utility,date:function(a){return b(function(b){b=new Date(b.getResponseHeader("Date"));a(b)})},connection:function(){return a("Connection")},contentLength:function(){return a("Content-Length")},lastModified:function(){return a("Last-Modified")},server:function(){return a("Server")},contentType:function(){return a("Content-Type")},acceptRanges:function(){return a("Accept-Ranges")},keepAlive:function(){return a("Keep-Alive")}}})})();
(function(){var a;e.SessionStorage=e.klass({init:function(b){b=b||{};if(b.single&&a)return a;b.single&&(a=this)},properties:{utility:e.utility,storage:e.utility.win.sessionStorage,set:function(a,c){this.storage.setItem(a,JSON.stringify(c));return!0},get:function(a){if(a)return JSON.parse(this.storage.getItem(a));var a={},c;for(c in this.storage)a[c]=JSON.parse(this.storage[c]);return a},remove:function(a){if(!this.storage.getItem(a))return!1;this.storage.removeItem(a);return!0},reset:function(){this.storage.clear();
return!0}}})})();e.Surrogate=e.klass({init:function(a){this.delay=a.delay;this.callback=a.callback;this.waitid=this.args=null},properties:{request:function(a){this.args=a;this.clear();this.waitid=setTimeout(this.flush,this.delay,this)},flush:function(a){a=a||this;a.callback(a.args)},clear:function(){clearInterval(this.waitid)}}});e.Throttle=e.klass({init:function(a){this.waittime=a.waittime;this.callback=a.callback;this.locked=!1;this.waitid=null},properties:{request:function(a){if(this.locked)return!1;
this.callback(a);this.lock();this.waitid=setTimeout(this.unlock,this.waittime,this)},lock:function(){this.locked=!0},unlock:function(a){a=a||this;a.locked=!1;clearInterval(a.waitid)}}});e.Timer=function(a){function b(){n=Date.now();var a=f-(n-l)/1E3;0>a&&(a=0);p=c(a);k(p);if(n>o)return r.stop(),j(),!0;q=setTimeout(b,i);return!1}function c(a){var b;b=(""+a).split(".");a=b[0];b=b[1]?b[1]:"";a=d({num:a,digit:m.integer});b=d({num:b,digit:m.few,isFew:!0});return a+"."+b}function d(a){var b=""+a.num,c=
a.digit,d=c-b.length;return!a.isFew?-1<d?e(d,0)+b:e(c,9):0<d?b+e(d,0):b.slice(0,c)}function e(a,b){for(var c="",b=""+b;0<a;)c+=b,a--;return c}var f=a.limit,h=1E3*f,i=1E3*a.interval,k=a.onupdate,j=a.ontimeup,m=function(a){a=a.split(".");return{integer:a[0].length,few:a[1].length}}(a.template),l=0,n=0,o=h,p=c(f),q,r={getLimit:function(){return f},getTime:function(){return p},getProgress:function(){return 1-(o-n)/h},setUpdate:function(a){k=a},setTimeup:function(a){j=a},countDown:function(){n=l=Date.now();
o=l+h;b()},stop:function(){clearInterval(q)}};return r};e.Tweener=e.klass({init:function(a,b,c){var d,g,c=c||{};this.target=a;this.property=[];for(d in b){g=b[d];g.name=d;if(!g.from&&(a[d]&&(g.from=1*a[d].match(/^[0-9]+/)[0]),!g.from))g.from=0;g.distance=g.to-g.from;g.prefix=g.prefix||"";g.suffix=g.suffix||"px";this.property.push(g)}this.duration=c.duration||e.Tweener.Duration;this.easing=c.easing||this._easing;this.onComplete=c.onComplete;this.begin=Date.now();e.Tweener.Items.push(this);e.Tweener.timerId||
this.start()},properties:{_easing:function(a,b,c,d){return c*a/d+b},setProp:function(a,b,c){a[b.name]=b.prefix+c+b.suffix},loop:function(){for(var a=e.Tweener.Items,b,c=Date.now(),d,g=a.length,f,h,i;g--;)if(b=a[g],h=b.property.length,d=c-b.begin,d<b.duration)for(f=0;f<h;f++)i=b.property[f],this.setProp(b.target,i,b.easing(d,i.from,i.distance,b.duration));else{for(f=0;f<h;f++)i=b.property[f],this.setProp(b.target,i,i.to);if(b.onComplete)b.onComplete();a.splice(g,1)}a.length||this.end()},start:function(){var a=
this;e.Tweener.timerId=setInterval(function(){a.loop()},1E3/e.Tweener.FPS)},end:function(){e.Tweener.Items=[];clearInterval(e.Tweener.timerId);e.Tweener.timerId=null}}});e.Tweener.timerId=null;e.Tweener.Items=[];e.Tweener.FPS=30;e.Tweener.Duration=500;e.Twitter=e.klass({properties:{utility:e.utility,shareURLBase:"https://twitter.com/intent/tweet?",getShareURL:function(a){var b=a.redirect_uri,c=a.caption||"",d=a.name||"",a=a.hash||"",e=this.shareURLBase;return e+=this.utility.makeQueryString({url:b,
text:c+(d?" \u300c"+d+"\u300d":"")+(a?" "+a:"")})}}});e.XML=e.klass({init:function(a){this.element=this.utility.makeElement("div");this.data={};a&&a.data&&this.setData(a.data)},properties:{utility:e.utility,getData:function(){return this.data},setData:function(a){this.data=this.element.innerHTML=a},$:function(a){return this.utility.$child(a,this.element)},$$:function(a){return this.utility.$$child(a,this.element)}}})})();
element)}}})})();