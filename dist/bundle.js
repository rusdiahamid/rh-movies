/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var n="https://api.themoviedb.org/3/",e="739949faaf1aeda8232538dbe179ea8d",r=function(){function r(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r)}var o,i;return o=r,i=[{key:"getPlayingMovies",value:function(){return fetch("".concat(n,"movie/now_playing?api_key=").concat(e,"&language=en-EN&page=1&region=ID")).then((function(t){return t.json()})).then((function(t){return t.results}))}},{key:"getUpcomingMovies",value:function(){return fetch("".concat(n,"movie/upcoming?api_key=").concat(e,"&language=en-EN&page=1&region=ID")).then((function(t){return t.json()})).then((function(t){return t.results}))}},{key:"getMovieDetail",value:function(t){return fetch("".concat(n,"movie/").concat(t,"?api_key=").concat(e,"&language=en-EN")).then((function(t){return t.json()})).then((function(t){return t}))}},{key:"getMovieCredits",value:function(t){return fetch("".concat(n,"movie/").concat(t,"/credits?api_key=").concat(e,"&language=id-ID")).then((function(t){return t.json()})).then((function(t){return t}))}}],null&&t(o.prototype,null),i&&t(o,i),Object.defineProperty(o,"prototype",{writable:!1}),r}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(){i=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",u=r.toStringTag||"@@toStringTag";function s(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(t){s=function(t,n,e){return t[n]=e}}function l(t,n,e,r){var o=n&&n.prototype instanceof p?n:p,i=Object.create(o.prototype),a=new j(r||[]);return i._invoke=function(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var u=f(t,n,e);if("normal"===u.type){if(r=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r="completed",e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h={};function p(){}function v(){}function d(){}var y={};s(y,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(k([])));m&&m!==n&&e.call(m,a)&&(y=m);var w=d.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function b(t,n){function r(i,a,c,u){var s=f(t[i],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==o(h)&&e.call(h,"__await")?n.resolve(h.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):n.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}}function L(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,L(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=f(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,h;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,h):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function E(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function _(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:M}}function M(){return{value:void 0,done:!0}}return v.prototype=d,s(w,"constructor",d),s(d,"constructor",v),v.displayName=s(d,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===v||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(b.prototype),s(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new b(l(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),s(w,u,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),h},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),h}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;_(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:k(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}function a(t,n,e,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,o)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var i=t.apply(n,e);function c(t){a(i,r,o,c,u,"next",t)}function u(t){a(i,r,o,c,u,"throw",t)}c(void 0)}))}}document.addEventListener("DOMContentLoaded",(function(){document.addEventListener("click",function(){var n=c(i().mark((function n(e){var o,a,c;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.target.classList.contains("movie-title")){n.next=9;break}return o=e.target.id,n.next=4,r.getMovieDetail(o);case 4:return a=n.sent,n.next=7,r.getMovieCredits(o);case 7:c=n.sent,t(a,c);case 9:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}());var t=function(t,n){var e=function(t,n){var e=t.genres,r=60*t.runtime,o=Math.floor(r/3600);r-=3600*o;var i=Math.floor(r/60),a=n.cast,c=n.crew,u=c.filter((function(t){return"Director"===t.job})).map((function(t){return t.name})),s=c.filter((function(t){return"Writer"===t.job})).map((function(t){return t.name.trim()})).join(" • ");return'\n    <div class="container">\n      <h1 class="text-white text-2xl font-semibold mb-2">'.concat(t.original_title,'</h1>\n    \n      <p class="rating-text">⭐ <strong>').concat(t.vote_average,"</strong>/10  •  <span>").concat(o," Jam ").concat(i,' Menit</span></p>\n      <div class="flex flex-col lg:flex-row">\n        <div class="">\n          <img src="https://image.tmdb.org/t/p/w500').concat(t.poster_path,'" alt="').concat(t.original_title,'" class="rounded-md my-3 mx-auto" />\n        </div>\n        <div class="lg:ml-6">\n        <div class="my-2">\n        ').concat(e.map((function(t){return'<span class="text-white rounded-full bg-secondary border-white px-2 mb-3">'.concat(t.name,"</span>").trim()})).join(" "),'\n          <p class="text-white text-lg leading-relaxed mt-3">').concat(t.overview,'</p>       \n        </div>\n        <ul class="text-white">\n          <li class="font-bold">Director</li>\n          <li>').concat(u,'</li>\n          <li class="font-bold">Writer</li>\n          <li>').concat(s,'</li>\n        </ul>\n        <div class="mt-3">\n          <h1 class="text-white text-2xl mb-2">Top Cast</h1>\n            <div class="flex min-w-[200px] gap-3 overflow-x-scroll">\n              ').concat(a.slice(0,9).map((function(t){return'\n              <div class="max-w-[120px]">          \n              <img src="https://image.tmdb.org/t/p/w500'.concat(t.profile_path,'" width="100px" class="min-w-[120px] rounded-md">\n                <figcation class="text-center">\n                <h5 class="text-white font-bold">').concat(t.name,'</h5>\n                <h6 class="text-gray-400 text-xs">').concat(t.character,"</h6>\n                </figcation>\n             </div>\n               ").trim()})).join(""),"\n            </div>\n        </div>\n      </div>\n    </div>\n    </div>\n        \n    ")}(t,n);document.querySelector("main").innerHTML=e},n=function(){var t=c(i().mark((function t(){var n,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.getPlayingMovies();case 2:n=t.sent,e="",n.forEach((function(t){return e+=o(t)})),document.querySelector("#nowPlayingMovies").innerHTML=e;case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),e=function(){var t=c(i().mark((function t(){var n,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.getUpcomingMovies();case 2:n=t.sent,e="",n.forEach((function(t){return e+=o(t)})),document.querySelector("#upcomingMovies").innerHTML=e;case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function o(t){return'\n    <div class="movie-card">\n      <img src="https://image.tmdb.org/t/p/w500'.concat(t.poster_path,'" alt="').concat(t.title,'" class="rounded-md bg-cover" />\n      <span class="rating-text">⭐ ').concat(t.vote_average,'</span>\n      <h5 class="movie-title" id="').concat(t.id,'">').concat(t.original_title,"</h5>\n    </div>\n    ")}n(),e()}))})();