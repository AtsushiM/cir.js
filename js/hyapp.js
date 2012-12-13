var HYAPP={};
(function(){var c=HYAPP;(function(a,b){function d(a,b){var d=b.querySelectorAll(a),c=[],e,i;e=0;for(i=d.length;e<i;e++)c[e]=d[e];return c}function e(a){var b=""+a;return b.match("^{.*}$")?JSON.parse(b):b.match("^[0-9.]+$")?1*b:"true"===b?!0:"false"===b?!1:a}Date.now||(Date.now=function(){return+new Date});c.utility={win:a,doc:b,body:b.body,$:function(a){return b.querySelector(a)},$$:function(a){return d(a,b)},$child:function(a,b){return b.querySelector(a)},$$child:d,$id:function(a){return b.getElementById(a)},pageTop:function(){a.scrollTo(0,
1)},onEvent:function(a,b,d){a.addEventListener(b,d)},offEvent:function(a,b,d){a.removeEventListener(b,d)},makeElement:function(a){return b.createElement(a)},showElement:function(a){a.style.display="block"},hideElement:function(a){a.style.display="none"},opacityElement:function(a,b){a.style.opacity=b},override:function(a,b){for(var d in b)a[d]=b[d];return a},replaceAll:function(a,b,d){return a.split(b).join(d)},windowOpen:function(b,d){return a.open(b,d)},typeCast:e,makeQueryString:function(a){var b=
"",d="",e;for(e in a)if(a[e]){d=d+(b+e+"="+encodeURIComponent(a[e]));b="&"}return d},parseQueryString:function(a){var a=a.replace(/^\#/,"").replace(/^\?/,""),a=a.split("&"),b,d,c={};for(b=a.length;b--;){d=a[b].split("=");c[d[0]]=e(decodeURIComponent(d[1]))}return c},nullFunction:function(){return null}}})(window,document);c.klass=function(a){var b=c.utility.override,d=a.init,e=a.properties;(a=a.extend)&&c.extend(d,a);b(d.prototype,e);return d};c.extend=function(a,b){function d(){this.init=a}d.prototype=
b.prototype;a.prototype=new d;var e=a.prototype;e._superclass=b;e._super=function(){var a=this._prevctor,a=a?a.prototype._superclass:this._prevctor=b;a.apply(this,arguments)}};c.HashController=c.klass({init:function(){},properties:{utility:c.utility,typeCast:function(a){var b=this.utility.typeCast(a);return a===b&&(a=a.match("^[\"'](.*)[\"']$"))?a[1]:b},makeHash:function(a){var b="#"+a.mode,a=a.vars,d="?",e;for(e in a)b+=d+e+"="+JSON.stringify(a[e]),d="&";return encodeURI(b)},setHash:function(a){location.hash=
this.makeHash(a);return!0},parseHash:function(a){var b,d,e,c;b=decodeURIComponent(a).split("#")[1];if(!b)return!1;b=b.split("?");a=b[0];if(b[1]){d={};b=b[1].split("&");for(c=b.length;c--;)b[c]&&(e=b[c].split("="),d[e[0]]=this.typeCast(e[1]))}return{mode:a,vars:d}},getHash:function(){return this.parseHash(location.hash)}}});c.Ajax=c.klass({init:function(){this.xhr=new XMLHttpRequest},properties:{utility:c.utility,request:function(a){var b=a.url,d=a.callback,c=a.error,f=a.type||"GET",g="",h;a.cash||
(a.query||(a.query={}),a.query["ajaxcash"+Date.now()]="0");a.query&&(g=this.utility.makeQueryString(a.query),g=encodeURI(g));h=this.xhr=new XMLHttpRequest;h.onreadystatechange=function(){if(h.readyState!=4)return false;h.status==200?d(h.responseText):c&&c(h)};h.open(f,b);"POST"===f&&h.setRequestHeader("Content-Type","application/x-www-form-urlencoded");h.send(g)},abort:function(){this.xhr.abort()},getJSON:function(a){this.request({type:a.type,url:a.url,callback:function(b){a.callback(JSON.parse(b))},
error:function(b){a.error&&a.error(b)}})}}});c.Bind=c.klass({init:function(){},properties:{utility:c.utility,add:function(a){return this.exe(a,!0)},remove:function(a){return this.exe(a,!1)},exe:function(a,b){var d=this.utility,c=a.element,f=a.events,d=b?d.onEvent:d.offEvent,g;for(g in f)d(c,g,f[g]);return a}}});(function(){var a=c.utility.makeElement;c.CanvasImage=function(b){var d=a("canvas"),c=a("img"),f=b.src,g=b.width,h=b.height,k=b.onload;c.onload=function(){d.width=g;d.height=h;d.getContext("2d").drawImage(c,
0,0);k(d,c)};c.src=f;return d}})();c.CanvasRender=c.klass({init:function(a){this.canvas=a.canvas;this.ctx=this.canvas.getContext("2d");this.canvasWidth=this.canvas.width;this.canvasHeight=this.canvas.height;this.setSize(a)},properties:{setSize:function(a){a.width&&(this.canvas.width=this.canvasWidth=a.width);a.height&&(this.canvas.height=this.canvasHeight=a.height)},draw:function(a){this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight);for(var b=0,d=a.length,c;b<d;b++)c=a[b],this.ctx.drawImage(c.image,
c.x,c.y)}}});(function(){var a;c.DataStore=c.klass({init:function(b){b=b||{};if(b.single&&a)return a;this.data={};b.single&&(a=this)},properties:{set:function(a,d){this.data[a]=d;return!0},get:function(a){var d=this.data;if(a)return d[a];var a={},c;for(c in d)a[c]=d[c];return a},remove:function(a){var d=this.data;if(!d[a])return!1;delete d[a];return!0},reset:function(){this.data={};return!0}}})})();(function(){var a;c.Event=c.klass({init:function(b){b=b||{};if(b.single&&a)return a;b.mobileMode?(this.switchdown=
this.switchclick="touchstart",this.switchmove="touchmove",this.switchup="touchend"):(this.switchclick="click",this.switchdown="mousedown",this.switchmove="mousemove",this.switchup="mouseup");b.single&&(a=this)},properties:{click:"click",mousedown:"mousedown",mousemove:"mousemove",mouseup:"mouseup",touchstart:"touchstart",touchmove:"touchmove",touchend:"touchend"}})})();(function(){var a;c.ExternalInterface=function(b){var b=b||{},d;if(b.single&&a)return a;d=b.android?new c.ExternalAndroidInterface(b):
new c.ExternalIOSInterface(b);b.single&&(a=d);return d}})();(function(){var a;c.ExternalAndroidInterface=c.klass({init:function(b){b=b||{};if(b.single&&a)return a;this.android=b.android;this.externalObj=b.externalObj;this.externalObj||(c.EXTERNAL_ANDROID={},this.externalObj=c.EXTERNAL_ANDROID);b.single&&(a=this)},properties:{hashCtrl:new c.HashController,call:function(a){this.android[a.mode](this.hashCtrl.makeHash(a))},addCallback:function(a,d){var c=this;c.externalObj[a]=function(a){a=c.hashCtrl.parseHash(a);
return d(a.vars)}},removeCallback:function(a){delete this.externalObj[a]}}})})();(function(){var a=c.utility.win,b;c.ExternalIOSInterface=c.klass({init:function(a){a=a||{};if(a.single&&b)return b;this.ios={};a.single&&(b=this)},properties:{hashCtrl:new c.HashController,call:function(a){this.hashCtrl.setHash(a)},addCallback:function(b,c){var f=this;f.ios[b]=function(){var a=f.hashCtrl.getHash();return a.mode===b?(c(a.vars),!0):!1};a.addEventListener("hashchange",this.ios[b])},removeCallback:function(b){a.removeEventListener("hashchange",
this.ios[b]);delete this.ios[b]}}})})();c.Facebook=c.klass({init:function(){},properties:{utility:c.utility,shareURLBase:"https://www.facebook.com/dialog/feed?",getShareURL:function(a){var b=this.shareURLBase+"app_id="+a.app_id+"&redirect_uri="+a.redirect_uri;return b+=this.utility.makeQueryString({link:a.link,picture:a.picture,name:a.name,caption:a.caption,description:a.description})}}});(function(){function a(d){d.nexttime<=Date.now()&&(b(d),d.nexttime=d.nowtime+d.msecFrame);1===d.loopid&&f(function(){a(d)})}
function b(a){a.nowtime=Date.now();a.surver=Math.round(1E3/(a.nowtime-a.prevtime));a.prevtime=a.nowtime;a.enter()}var d,e=c.utility.win,f=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||!1;c.FPS=c.klass({init:function(a){a=a||{};a.criterion||(a.criterion=20);if(a.single&&d)return d;this.surver=this.criterion=a.criterion;this.enterframe=a.enterframe;this.msecFrame=Math.round(1E3/this.criterion);this.prevtime=this.nowtime=
this.nexttime=this.loopid=0;a.single&&(d=this)},properties:{getCriterion:function(){return this.criterion},getSurver:function(){return this.surver},getFrameTime:function(){return this.msecFrame},enter:function(){this.enterframe({criterion:this.criterion,surver:this.surver})},start:function(){this.prevtime=Date.now();this.nexttime=this.prevtime+this.msecFrame;f?(this.loopid=1,a(this)):this.loopid=setInterval(b,this.msecFrame,this)},stop:function(){clearInterval(this.loopid);this.loopid=0}}})})();c.ImgLoad=
c.klass({init:function(a){var b=this;b.srcs=a.srcs;b.srccount=b.srcs.length;b.loadedsrcs=[];b.onload=a.onload||b.utility.nullFunction;b.onprogress=a.onprogress||b.utility.nullFunction;b.loadcount=0;b.progress=0;b.check=function(){b.loadcount++;b.progress=b.loadcount/b.srccount;b.onprogress(b.progress);if(b.loadcount>=b.srccount)b.onload(b.loadedsrcs)}},properties:{utility:c.utility,start:function(){var a,b,d;b=0;for(d=this.srccount;b<d;b++)a=this.utility.makeElement("img"),a.src=this.srcs[b],a.onload=
this.check,this.loadedsrcs.push(a)},getProgress:function(){return this.progress}}});c.Loading=c.klass({init:function(a){if(a&&a.onload)this.onload(a.onload)},properties:{utility:c.utility,onload:function(a){this.utility.win.addEventListener("load",a)}}});(function(){var a;c.LocalStorage=c.klass({init:function(b){b=b||{};if(b.single&&a)return a;b.single&&(a=this)},properties:{utility:c.utility,storage:c.utility.win.localStorage,set:function(a,d){this.storage.setItem(a,JSON.stringify(d));return!0},
get:function(a){if(a)return JSON.parse(this.storage.getItem(a));var a={},d;for(d in this.storage)a[d]=JSON.parse(this.storage[d]);return a},remove:function(a){if(!this.storage.getItem(a))return!1;this.storage.removeItem(a);return!0},reset:function(){this.storage.clear();return!0}}})})();(function(){function a(a){a.preventDefault();return!1}function b(a,b){a=a?a:f;return a.match(b)?!0:!1}function d(){0===win.pageYOffset&&this.utility.pageTop()}function e(){setTimeout(d,100)}var f=navigator.userAgent;
c.Mobile=c.klass({init:function(){},properties:{utility:c.utility,isAndroid:function(a){return b(a,/Android/i)},isIOS:function(a){return b(a,/iPhone|iPad|iPod/i)},isWindows:function(a){return b(a,/IEMobile/i)},isFBAPP:function(a){return b(a,/FBAN/)},isMobile:function(){return this.isAndroid()||this.isIOS()||this.isWindows()||this.isFBAPP()},killScroll:function(b){b||this.utility.pageTop();this.utility.onEvent(this.utility.doc,"touchmove",a)},revivalScroll:function(b){b||this.utility.pageTop();this.utility.offEvent(this.utility.doc,
"touchmove",a)},hideAddress:function(){this.utility.onEvent(this.utility.win,"load",e,!1);this.utility.onEvent(this.utility.win,"orientationchange",e,!1)},orientationCheck:function(){return 90!==Math.abs(this.utility.win.orientation)&&this.utility.win.innerWidth<this.utility.win.innerHeight?{portrait:!0,landscape:!1}:{portrait:!1,landscape:!0}},orientationChange:function(a){function b(a,d){a(e.utility.win,"load",d);a(e.utility.win,"orientationchange",d);a(e.utility.win,"resize",d)}function d(){c();
b(e.utility.offEvent,d)}function c(){if(e.orientationCheck().portrait)return a.portrait(),!0;a.landscape()}var e=this;a.immediately&&c();if(a.one)return b(e.utility.onEvent,d),function(){b(e.utility.offEvent,d)};b(e.utility.onEvent,c);return function(){b(e.utility.offEvent,c)}}}})})();c.NumberImage=c.klass({init:function(a){a=a||{type:""};this.type=a.type},properties:{make:function(a){var a=(""+a).split(""),b="",d;for(d=a.length;d--;)b='<span class="num_'+(this.type+a[d])+'">&nbsp;</span>'+b;return b}}});
(function(){var a;c.Observer=c.klass({init:function(b){b=b||{single:!1};if(b.single&&a)return a;this.observed={};b.single&&(a=this)},properties:{getObserved:function(){return this.observed},on:function(a,d){var c=this.observed;c[a]||(c[a]=[]);c[a].push(d)},one:function(a,d){var c=this,f=function(g){d(g);c.off(a,f)};c.on(a,f)},off:function(a,d){var c=this.observed;if(!d)return delete c[a],!0;var f=c[a],g;if(!f)return!1;for(g=f.length;g--;)if(d===f[g])return f.splice(g,1),0===f.length&&delete c[a],
!0;return!1},fire:function(a,d){var c=this.observed[a],f,g;if(!c)return!1;for(g=c.length;g--;)(f=c[g])&&f(d);return!0}}})})();c.PreRender=c.klass({init:function(a){a=a||{};a.loopblur||(a.loopblur=20);this.elements=a.elements||[];this.guesslimit=a.guesslimit||30;this.onrendered=a.onrendered||this.utility.nullFunction;this.looptime=a.looptime||100;this.loopblur=this.looptime+a.loopblur;this.loopid=this.prevtime=null},properties:{utility:c.utility,start:function(){var a;for(a=this.elements.length;a--;)this.utility.showElement(this.elements[a]);
this.prevtime=Date.now();this.loopid=setInterval(function(a){var c=Date.now(),e=c-a.prevtime;a.prevtime=c;if(e<a.loopblur&&(a.guesslimit--,1>a.guesslimit)){clearInterval(a.loopid);for(c=a.elements.length;c--;)a.utility.hideElement(a.elements[c]);a.onrendered()}},this.looptime,this)}}});(function(){function a(a){return e?d.getResponseHeader(a):!1}function b(a){var b=new XMLHttpRequest;b.onload=function(){a(b)};b.open("HEAD",location.href+"?update"+Date.now()+"=1");b.send(null);return b}var d,e=!1;
c.ServerMeta=c.klass({init:function(a){var a=a||{},c=a.callback||this.utility.nullFunction;d?c(d):d=b(function(){e=!0;c(d)})},properties:{utility:c.utility,date:function(a){return b(function(b){b=new Date(b.getResponseHeader("Date"));a(b)})},connection:function(){return a("Connection")},contentLength:function(){return a("Content-Length")},lastModified:function(){return a("Last-Modified")},server:function(){return a("Server")},contentType:function(){return a("Content-Type")},acceptRanges:function(){return a("Accept-Ranges")},
keepAlive:function(){return a("Keep-Alive")}}})})();c.Surrogate=c.klass({init:function(a){this.delay=a.delay;this.callback=a.callback;this.waitid=this.args=null},properties:{request:function(a){this.args=a;this.clear();this.waitid=setTimeout(this.flush,this.delay,this)},flush:function(a){a=a||this;a.callback(a.args)},clear:function(){clearInterval(this.waitid)}}});c.Throttle=c.klass({init:function(a){this.waittime=a.waittime;this.callback=a.callback;this.locked=!1;this.waitid=null},properties:{exec:function(a){if(this.locked)return!1;
this.callback(a);this.lock();this.waitid=setTimeout(this.unlock,this.waittime,this)},lock:function(){this.locked=!0},unlock:function(a){a=a||this;a.locked=!1;clearInterval(a.waitid)}}});c.Timer=function(a){function b(){j=Date.now();var a=g-(j-l)/1E3;0>a&&(a=0);m=c(a);o(m);if(j>n)return q.stop(),i(),!0;r=setTimeout(b,k);return!1}function c(a){var b;b=(""+a).split(".");a=b[0];b=b[1]?b[1]:"";a=e({num:a,digit:p.integer});b=e({num:b,digit:p.few,isFew:!0});return a+"."+b}function e(a){var b=""+a.num,c=
a.digit,d=c-b.length;return!a.isFew?-1<d?f(d,0)+b:f(c,9):0<d?b+f(d,0):b.slice(0,c)}function f(a,b){for(var c="",b=""+b;0<a;)c+=b,a--;return c}var g=a.limit,h=1E3*g,k=1E3*a.interval,o=a.onupdate,i=a.ontimeup,p=function(a){a=a.split(".");return{integer:a[0].length,few:a[1].length}}(a.template),l=0,j=0,n=h,m=c(g),r,q={getLimit:function(){return g},getTime:function(){return m},getProgress:function(){return 1-(n-j)/h},setUpdate:function(a){o=a},setTimeup:function(a){i=a},countDown:function(){j=l=Date.now();
n=l+h;b()},stop:function(){clearInterval(r)}};return q};c.Twitter=c.klass({init:function(){},properties:{utility:c.utility,shareURLBase:"https://twitter.com/intent/tweet?",getShareURL:function(a){var b=a.redirect_uri,c=a.caption||"",e=a.name||"",a=a.hash||"",f=this.shareURLBase;return f+=this.utility.makeQueryString({url:b,text:c+(e?" \u300c"+e+"\u300d":"")+(a?" "+a:"")})}}});c.XML=c.klass({init:function(a){this.element=this.utility.makeElement("div");this.data={};a&&a.data&&this.setData(a.data)},
properties:{utility:c.utility,getData:function(){return this.data},setData:function(a){this.data=this.element.innerHTML=a},$:function(a){return this.utility.$child(a,this.element)},$$:function(a){return this.utility.$$child(a,this.element)}}})})();
