var Global={};
(function(b,a){function c(a,b){var c=b.querySelectorAll(a),d=[],g,j;g=0;for(j=c.length;g<j;g++)d[g]=c[g];return d}function d(a){var c=""+a;return c.match("^{.*}$")?JSON.parse(c):c.match("^[0-9.]+$")?1*c:"true"===c?!0:"false"===c?!1:a}Date.now||(Date.now=function(){return+new Date});Global.utility={win:b,doc:a,body:a.body,$:function(e){return a.querySelector(e)},$$:function(e){return c(e,a)},$child:function(a,c){return c.querySelector(a)},$$child:c,$id:function(e){return a.getElementById(e)},pageTop:function(){b.scrollTo(0,
1)},onEvent:function(a,c,b){a.addEventListener(c,b)},offEvent:function(a,c,b){a.removeEventListener(c,b)},makeElement:function(c){return a.createElement(c)},showElement:function(a){a.style.display="block"},hideElement:function(a){a.style.display="none"},opacityElement:function(a,c){a.style.opacity=c},override:function(a,c){for(var b in c)a[b]=c[b];return a},replaceAll:function(a,c,b){return a.split(c).join(b)},windowOpen:function(a,c){return b.open(a,c)},typeCast:d,makeQueryString:function(a){var c=
"",b="",d;for(d in a)if(a[d]){b=b+(c+d+"="+encodeURIComponent(a[d]));c="&"}return b},parseQueryString:function(a){var a=a.replace(/^\#/,"").replace(/^\?/,""),a=a.split("&"),c,b,h={};for(c=a.length;c--;){b=a[c].split("=");h[b[0]]=d(decodeURIComponent(b[1]))}return h}}})(window,document);Global.klass=function(b){var a=Global.utility.override,c=b.init,d=b.properties;(b=b.extend)&&Global.extend(c,b);a(c.prototype,d);return c};
Global.extend=function(b,a){function c(){this.init=b}c.prototype=a.prototype;b.prototype=new c;var d=b.prototype;d._superclass=a;d._super=function(){var c=this._prevctor,c=c?c.prototype._superclass:this._prevctor=a;c.apply(this,arguments)}};
Global.Ajax=Global.klass({init:function(){this.xhr=new XMLHttpRequest},properties:{utility:Global.utility,request:function(b){var a=b.url,c=b.callback,d=b.type||"GET",e="",f;b.cash||(b.query||(b.query={}),b.query["ajaxcash"+Date.now()]="0");b.query&&(e=this.utility.makeQueryString(b.query),e=encodeURI(e));f=this.xhr=new XMLHttpRequest;f.onload=function(){c(f.responseText)};f.open(d,a);"POST"===d&&f.setRequestHeader("Content-Type","application/x-www-form-urlencoded");f.send(e)},abort:function(){this.xhr.abort()},
getJSON:function(b){this.request({type:b.type,url:b.url,callback:function(a){b.callback(JSON.parse(a))}})}}});(function(){var b=Global.utility.makeElement;Global.CanvasImage=function(a){var c=b("canvas"),d=b("img"),e=a.src,f=a.width,i=a.height,h=a.onload;d.onload=function(){c.width=f;c.height=i;c.getContext("2d").drawImage(d,0,0);h(c,d)};d.src=e;return c}})();
Global.CanvasRender=Global.klass({init:function(b){this.canvas=b.canvas;this.ctx=this.canvas.getContext("2d");this.canvasWidth=this.canvas.width;this.canvasHeight=this.canvas.height;this.setSize(b)},properties:{setSize:function(b){b.width&&(this.canvas.width=this.canvasWidth=b.width);b.height&&(this.canvas.height=this.canvasHeight=b.height)},draw:function(b){this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight);for(var a=0,c=b.length,d;a<c;a++)d=b[a],this.ctx.drawImage(d.image,d.x,d.y)}}});
(function(){var b;Global.DataStore=Global.klass({init:function(a){a=a||{};if(a.single&&b)return b;this.data={};a.single&&(b=this)},properties:{set:function(a,c){this.data[a]=c;return!0},get:function(a){var c=this.data;if(a)return c[a];var a={},b;for(b in c)a[b]=c[b];return a},remove:function(a){var c=this.data;if(!c[a])return!1;delete c[a];return!0},reset:function(){this.data={};return!0}}})})();
(function(){var b;Global.Event=Global.klass({init:function(a){a=a||{};if(a.single&&b)return b;this.click="click";this.mousedown="mousedown";this.mousemove="mousemove";this.mouseup="mouseup";this.touchstart="touchstart";this.touchmove="touchmove";this.touchend="touchend";this.switchdown=this.switchclick="touchstart";this.switchmove="touchmove";this.switchup="touchend";a.mobileMode||(this.switchclick="click",this.switchdown="mousedown",this.switchmove="mousemove",this.switchup="mouseup");a.single&&
(b=this)}})})();(function(){var b;Global.ExternalInterface=function(a){var a=a||{},c;if(a.single&&b)return b;c=a.android?new Global.ExternalAndroidInterface(a):new Global.ExternalIOSInterface(a);a.single&&(b=c);return c}})();
(function(){var b;Global.ExternalAndroidInterface=Global.klass({init:function(a){a=a||{};if(a.single&&b)return b;this.android=a.android;this.externalObj=a.externalObj;this.hashCtrl=new Global.HashController;this.externalObj||(Global.EXTERNAL_ANDROID={},this.externalObj=Global.EXTERNAL_ANDROID);a.single&&(b=this)},properties:{call:function(a){this.android[a.mode](this.hashCtrl.makeHash(a))},addCallback:function(a,c){var b=this;b.externalObj[a]=function(a){a=b.hashCtrl.parseHash(a);return c(a.vars)}},
removeCallback:function(a){delete this.externalObj[a]}}})})();
(function(){var b=Global.utility.win,a;Global.ExternalIOSInterface=Global.klass({init:function(c){c=c||{};if(c.single&&a)return a;this.ios={};this.hashCtrl=new Global.HashController;c.single&&(a=this)},properties:{call:function(a){this.hashCtrl.setHash(a)},addCallback:function(a,d){var e=this;e.ios[a]=function(){var b=e.hashCtrl.getHash();return b.mode===a?(d(b.vars),!0):!1};b.addEventListener("hashchange",this.ios[a])},removeCallback:function(a){b.removeEventListener("hashchange",this.ios[a]);delete this.ios[a]}}})})();
(function(){var b=Global.utility.makeQueryString;Global.Facebook=Global.klass({init:function(){},properties:{getShareURL:function(a){var c="https://www.facebook.com/dialog/feed?app_id="+a.app_id+"&redirect_uri="+a.redirect_uri;return c+=b({link:a.link,picture:a.picture,name:a.name,caption:a.caption,description:a.description})}}})})();
(function(){function b(c){c.nexttime<=Date.now()&&(a(c),c.nexttime=c.nowtime+c.msecFrame);1===c.loopid&&e(function(){b(c)})}function a(a){a.nowtime=Date.now();a.surver=Math.round(1E3/(a.nowtime-a.prevtime));a.prevtime=a.nowtime;a.enter()}var c,d=Global.utility.win,e=d.requestAnimationFrame||d.webkitRequestAnimationFrame||d.mozRequestAnimationFrame||d.oRequestAnimationFrame||d.msRequestAnimationFrame||!1;Global.FPS=Global.klass({init:function(a){a=a||{};a.criterion||(a.criterion=20);if(a.single&&c)return c;
this.surver=this.criterion=a.criterion;this.enterframe=a.enterframe;this.msecFrame=Math.round(1E3/this.criterion);this.prevtime=this.nowtime=this.nexttime=this.loopid=0;a.single&&(c=this)},properties:{getCriterion:function(){return this.criterion},getSurver:function(){return this.surver},getFrameTime:function(){return this.msecFrame},enter:function(){this.enterframe({criterion:this.criterion,surver:this.surver})},start:function(){this.prevtime=Date.now();this.nexttime=this.prevtime+this.msecFrame;
e?(this.loopid=1,b(this)):this.loopid=setInterval(a,this.msecFrame,this)},stop:function(){clearInterval(this.loopid);this.loopid=0}}})})();
(function(){var b=Global.utility.typeCast;Global.HashController=Global.klass({init:function(){},properties:{makeHash:function(a){var c="#"+a.mode,a=a.vars,b="?",e;for(e in a)c+=b+e+"="+JSON.stringify(a[e]),b="&";return encodeURI(c)},setHash:function(a){location.hash=this.makeHash(a);return!0},parseHash:function(a){var c,d=null;c=decodeURIComponent(a).split("#")[1];if(!c)return!1;c=c.split("?");a=c[0];if(c[1]){d={};c=c[1].split("&");var e,f;for(f=c.length;f--;)if(c[f]){e=c[f].split("=");var i=d,h=
e[0];e=e[1];var g=b(e);e=e===g&&e.match("^[\"'](.*)[\"']$")?e.match("^[\"'](.*)[\"']$")[1]:g;i[h]=e}return{mode:a,vars:d}}return{mode:a}},getHash:function(){return this.parseHash(location.hash)}}})})();
(function(){var b=Global.utility.makeElement,a=function(){};Global.ImgLoad=Global.klass({init:function(c){var b=this;b.srcs=c.srcs;b.srccount=this.srcs.length;b.loadedsrcs=[];b.onload=c.onload||a;b.onprogress=c.onprogress||a;b.loadcount=0;b.progress=0;b.check=function(){b.loadcount++;b.progress=b.loadcount/b.srccount;b.onprogress(b.progress);if(b.loadcount>=b.srccount)b.onload(b.loadedsrcs)}},properties:{start:function(){var a,d,e;d=0;for(e=this.srccount;d<e;d++)a=b("img"),a.src=this.srcs[d],a.onload=
this.check,this.loadedsrcs.push(a)},getProgress:function(){return this.progress}}})})();(function(){var b=Global.utility.win;Global.Loading=Global.klass({init:function(a){if(a&&a.onload)this.onload(a.onload)},properties:{onload:function(a){b.addEventListener("load",a)}}})})();
(function(){var b,a=Global.utility.win.localStorage;Global.LocalStorage=Global.klass({init:function(a){a=a||{};if(a.single&&b)return b;a.single&&(b=this)},properties:{set:function(b,d){a.setItem(b,JSON.stringify(d));return!0},get:function(b){if(b)return JSON.parse(a.getItem(b));var b={},d;for(d in a)b[d]=JSON.parse(a[d]);return b},remove:function(b){if(!a.getItem(b))return!1;a.removeItem(b);return!0},reset:function(){a.clear();return!0}}})})();
(function(){function b(a){a.preventDefault();return!1}function a(a,b){a=a?a:l;return a.match(b)?!0:!1}function c(){0===f.pageYOffset&&j()}function d(){setTimeout(c,100)}var e=Global.utility,f=e.win,i=e.doc,h=e.onEvent,g=e.offEvent,j=e.pageTop,l=navigator.userAgent;Global.Mobile=Global.klass({init:function(){},properties:{isAndroid:function(b){return a(b,/Android/i)},isIOS:function(b){return a(b,/iPhone|iPad|iPod/i)},isWindows:function(b){return a(b,/IEMobile/i)},isFBAPP:function(b){return a(b,/FBAN/)},
isMobile:function(){return this.isAndroid()||this.isIOS()||this.isWindows()||this.isFBAPP()},killScroll:function(a){a||j();h(i,"touchmove",b)},revivalScroll:function(a){a||j();g(i,"touchmove",b)},hideAddress:function(){h(f,"load",d,!1);h(f,"orientationchange",d,!1)},orientationCheck:function(){return 90!==Math.abs(f.orientation)&&f.innerWidth<f.innerHeight?{portrait:!0,landscape:!1}:{portrait:!1,landscape:!0}},orientationChange:function(a){function b(a,c){a(f,"load",c);a(f,"orientationchange",c);
a(f,"resize",c)}function c(){e();b(g,c)}function e(){if(d.orientationCheck().portrait)return a.portrait(),!0;a.landscape()}var d=this;a.immediately&&e();if(a.one)return b(h,c),function(){b(g,c)};b(h,e);return function(){b(g,e)}}}})})();(function(){Global.NumberImage=Global.klass({init:function(b){b=b||{type:""};this.type=b.type},properties:{make:function(b){var b=(""+b).split(""),a="",c;for(c=b.length;c--;)a='<span class="num_'+(this.type+b[c])+'">&nbsp;</span>'+a;return a}}})})();
(function(){var b;Global.Observer=Global.klass({init:function(a){a=a||{single:!1};if(a.single&&b)return b;this.observed={};a.single&&(b=this)},properties:{getObserved:function(){return this.observed},on:function(a,b){var d=this.observed;d[a]||(d[a]=[]);d[a].push(b)},forOn:function(a){for(var b in a)this.on(b,a[b])},one:function(a,b){var d=this,e=function(f){b(f);d.off(a,e)};d.on(a,e)},off:function(a,b){var d=this.observed;if(!b)return delete d[a],!0;var e=d[a],f;if(!e)return!1;for(f=e.length;f--;)if(b===
e[f])return e.splice(f,1),0===e.length&&delete d[a],!0;return!1},forOff:function(a){for(var b in a)this.off(b,a[b])},fire:function(a,b){var d=this.observed[a],e,f;if(!d)return!1;for(f=d.length;f--;)(e=d[f])&&e(b);return!0}}})})();
(function(){function b(a){var b=Date.now(),c=b-a.prevtime;a.prevtime=b;if(c<a.loopblur&&(a.guesslimit--,1>a.guesslimit)){clearInterval(a.loopid);for(b=a.elements.length;b--;)d(a.elements[b]);a.onrendered()}}var a=Global.utility,c=a.showElement,d=a.hideElement;Global.PreRender=Global.klass({init:function(a){a=a||{};a.elements||(a.elements=[]);a.guesslimit||(a.guesslimit=30);a.looptime||(a.looptime=100);a.loopblur||(a.loopblur=20);a.onrendered||(a.onrendered=function(){});this.elements=a.elements;this.guesslimit=
a.guesslimit;this.onrendered=a.onrendered;this.looptime=a.looptime;this.loopblur=this.looptime+a.loopblur;this.prevtime=this.loopid=null},properties:{start:function(){var a;for(a=this.elements.length;a--;)c(this.elements[a]);this.prevtime=Date.now();this.loopid=setInterval(b,this.looptime,this)}}})})();
(function(){function b(a){return d?c.getResponseHeader(a):!1}function a(a){var b=new XMLHttpRequest;b.onload=function(){a(b)};b.open("HEAD",location.href+"?update"+Date.now()+"=1");b.send(null);return b}var c,d=!1;Global.ServerMeta=Global.klass({init:function(b){var b=b||{},f=b.callback||function(){};c?f(c):c=a(function(){d=!0;f(c)})},properties:{date:function(b){return a(function(a){a=new Date(a.getResponseHeader("Date"));b(a)})},connection:function(){return b("Connection")},contentLength:function(){return b("Content-Length")},
lastModified:function(){return b("Last-Modified")},server:function(){return b("Server")},contentType:function(){return b("Content-Type")},acceptRanges:function(){return b("Accept-Ranges")},keepAlive:function(){return b("Keep-Alive")}}})})();
Global.Surrogate=Global.klass({init:function(b){this.delay=b.delay;this.callback=b.callback;this.waitid=this.args=null},properties:{request:function(b){this.args=b;this.clear();this.waitid=setTimeout(this.flush,this.delay,this)},flush:function(b){b=b||this;b.callback(b.args)},clear:function(){clearInterval(this.waitid)}}});
Global.Throttle=Global.klass({init:function(b){this.waittime=b.waittime;this.callback=b.callback;this.locked=!1;this.waitid=null},properties:{exec:function(b){if(this.locked)return!1;this.callback(b);this.lock();this.waitid=setTimeout(this.unlock,this.waittime,this)},lock:function(){this.locked=!0},unlock:function(b){b=b||this;b.locked=!1;clearInterval(b.waitid)}}});
Global.Timer=function(b){function a(){k=Date.now();var b=f-(k-m)/1E3;0>b&&(b=0);o=c(b);g(o);if(k>n)return p.stop(),j(),!0;q=setTimeout(a,h);return!1}function c(a){var b;b=(""+a).split(".");a=b[0];b=b[1]?b[1]:"";a=d({num:a,digit:l.integer});b=d({num:b,digit:l.few,isFew:!0});return a+"."+b}function d(a){var b=""+a.num,c=a.digit,d=c-b.length;return!a.isFew?-1<d?e(d,0)+b:e(c,9):0<d?b+e(d,0):b.slice(0,c)}function e(a,b){for(var c="",b=""+b;0<a;)c+=b,a--;return c}var f=b.limit,i=1E3*f,h=1E3*b.interval,
g=b.onupdate,j=b.ontimeup,l=function(a){a=a.split(".");return{integer:a[0].length,few:a[1].length}}(b.template),m=0,k=0,n=i,o=c(f),q,p={getLimit:function(){return f},getTime:function(){return o},getProgress:function(){return 1-(n-k)/i},setUpdate:function(a){g=a},setTimeup:function(a){j=a},countDown:function(){k=m=Date.now();n=m+i;a()},stop:function(){clearInterval(q)}};return p};
(function(){var b=Global.utility.makeQueryString;Global.Twitter=Global.klass({init:function(){},properties:{getShareURL:function(a){var c=a.redirect_uri,d=a.caption||"",e=a.name||"",a=a.hash||"";return c="https://twitter.com/intent/tweet?"+b({url:c,text:d+(e?" \u300c"+e+"\u300d":"")+(a?" "+a:"")})}}})})();
(function(){var b=Global.utility,a=b.$child,c=b.$$child,d=b.makeElement;Global.XML=Global.klass({init:function(a){this.element=d("div");this.data={};a&&a.data&&this.setData(a.data)},properties:{getData:function(){return this.data},setData:function(a){this.data=this.element.innerHTML=a},$:function(b){return a(b,this.element)},$$:function(a){return c(a,this.element)}}})})();
