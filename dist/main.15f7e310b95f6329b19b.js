(self["webpackChunkrh_movies"] = self["webpackChunkrh_movies"] || []).push([[179,736],{

/***/ 6881:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./src/vendor.js
var vendor = __webpack_require__(1270);
// EXTERNAL MODULE: ./src/script/component/app-bar.js
var app_bar = __webpack_require__(6618);
// EXTERNAL MODULE: ./node_modules/query-selector-shadow-dom/src/querySelectorDeep.js + 1 modules
var querySelectorDeep = __webpack_require__(1480);
;// CONCATENATED MODULE: ./src/script/component/search-bar.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var feather = __webpack_require__(8508);
var SearchBar = /*#__PURE__*/function (_HTMLElement) {
  _inherits(SearchBar, _HTMLElement);
  var _super = _createSuper(SearchBar);
  function SearchBar() {
    var _this;
    _classCallCheck(this, SearchBar);
    _this = _super.call(this);
    _this.shadowDOM = _this.attachShadow({
      mode: 'open'
    });
    return _this;
  }
  _createClass(SearchBar, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "keyupEvent",
    set: function set(event) {
      this._keyupEvent = event;
      this.render();
    }
  }, {
    key: "value",
    get: function get() {
      return this.shadowDOM.querySelector('#inputSearch').value;
    }
  }, {
    key: "render",
    value: function render() {
      this.shadowDOM.innerHTML = "\n    <style>\n      *,\n    ::before,\n    ::after {\n      box-sizing: border-box;\n      /* 1 */\n      border-width: 0;\n      /* 2 */\n      border-style: solid;\n      /* 2 */\n      border-color: #e5e7eb;\n      /* 2 */\n    }\n    .absolute {\n      position: absolute;\n    }\n    \n    .relative {\n      position: relative;\n    }\n    .hidden {\n      display: none;\n    }\n    :host{\n      margin-top: auto;\n      margin-bottom: auto;\n      margin-left: auto;\n      padding-top: 1rem;\n      padding-bottom: 1rem;\n    }\n    \n    @media (min-width: 768px) {\n      :host{\n        width: 24rem;\n      }\n    }\n    \n    .input-search {\n      margin-left: auto;\n      width: 100%;\n      border-radius: 0.5rem;\n      border-width: 1px;\n      border-top-width: 0px;\n      border-right-width: 0px;\n      border-left-width: 0px;\n      --tw-border-opacity: 1;\n      border-bottom-color: rgb(6 70 99 / var(--tw-border-opacity));\n      --tw-bg-opacity: 1;\n      background-color: rgb(4 28 50 / var(--tw-bg-opacity));\n      padding-top: 0.5rem;\n      padding-bottom: 0.5rem;\n      padding-left: 0.75rem;\n      padding-right: 2.5rem;\n      --tw-text-opacity: 1;\n      color: rgb(255 255 255 / var(--tw-text-opacity));\n    }\n    \n    .input-search:focus {\n      --tw-border-opacity: 1;\n      border-color: rgb(236 179 101 / var(--tw-border-opacity));\n      outline: 2px solid transparent;\n      outline-offset: 2px;\n      --tw-ring-opacity: 1;\n      --tw-ring-color: rgb(236 179 101 / var(--tw-ring-opacity));\n    }\n    \n    @media (min-width: 768px) {\n      .input-search {\n        display: block;\n        width: 24rem;\n      }\n    }\n    .loader-icon {\n      position: absolute;\n      top: -10px;\n      right: -0.25rem;\n      z-index: 10;\n      margin-top: auto;\n      margin-bottom: auto;\n    }\n    \n    @-webkit-keyframes spin {\n      to {\n        transform: rotate(360deg);\n      }\n    }\n    \n    @keyframes spin {\n      to {\n        transform: rotate(360deg);\n      }\n    }\n    \n    .loader-icon {\n      -webkit-animation: spin 5s linear infinite;\n              animation: spin 5s linear infinite;\n      border-top-right-radius: 0.75rem;\n      border-bottom-right-radius: 0.75rem;\n      padding-top: 0.5rem;\n      padding-bottom: 0.5rem;\n      padding-left: 0.5rem;\n      padding-right: 0.5rem;\n      --tw-text-opacity: 1;\n      color: rgb(255 255 255 / var(--tw-text-opacity));\n    }\n    \n    @media (min-width: 768px) {\n      .loader-icon {\n        top: -10px;\n      }\n    }\n    .btn-show-search {\n      position: absolute;\n      top: -10px;\n      right: 0.75rem;\n      margin-top: auto;\n      margin-bottom: auto;\n      --tw-text-opacity: 1;\n      color: rgb(255 255 255 / var(--tw-text-opacity));\n    }\n    \n    .btn-show-search:hover {\n      cursor: pointer;\n    }\n    \n    @media (min-width: 768px) {\n      .btn-show-search {\n        top: 0;\n        opacity: 0.5;\n      }\n    }\n    \n    \n    \n\n    </style>\n    <div class=\"relative\">\n    <input placeholder=\"Search Movie...\" type=\"text\" id=\"inputSearch\" class=\"input-search hidden  \"/>\n    <span class=\"loader hidden loader-icon\">".concat(feather.icons.loader.toSvg(), "</span>\n    <span class=\"btn-show-search\">").concat(feather.icons.search.toSvg(), "</span>\n    </div>\n    ");
      this.shadowDOM.querySelector('.btn-show-search').addEventListener('click', function () {
        (0,querySelectorDeep/* querySelectorDeep */.wF)('#inputSearch').classList.remove('hidden');
        (0,querySelectorDeep/* querySelectorDeep */.wF)('#inputSearch').focus();
        (0,querySelectorDeep/* querySelectorDeep */.wF)('.btn-show-search').classList.add('hidden');
        (0,querySelectorDeep/* querySelectorDeep */.wF)('.loader').classList.add('top-0');
        (0,querySelectorDeep/* querySelectorDeep */.wF)('.btn-show-search').classList.remove('-top-[10px]');
        (0,querySelectorDeep/* querySelectorDeep */.wF)('.logo').classList.add('hidden', 'lg:block');
        (0,querySelectorDeep/* querySelectorDeep */.wF)('search-bar').classList.add('w-full', 'lg:w-fit');
      });
      this.shadowDOM.querySelector('#inputSearch').addEventListener('blur', function () {
        (0,querySelectorDeep/* querySelectorDeep */.wF)('#inputSearch').classList.add('hidden');
        (0,querySelectorDeep/* querySelectorDeep */.wF)('#inputSearch').placeholder = 'Search Movie...';
        (0,querySelectorDeep/* querySelectorDeep */.wF)('.btn-show-search').classList.remove('hidden');
        (0,querySelectorDeep/* querySelectorDeep */.wF)('.btn-show-search').classList.add('-top-[10px]');
        (0,querySelectorDeep/* querySelectorDeep */.wF)('.loader').classList.add('hidden');
        (0,querySelectorDeep/* querySelectorDeep */.wF)('.logo').classList.remove('hidden');
        (0,querySelectorDeep/* querySelectorDeep */.wF)('search-bar').classList.remove('w-full');
      });
      this.shadowDOM.querySelector('#inputSearch').addEventListener('focus', function () {
        (0,querySelectorDeep/* querySelectorDeep */.wF)('#inputSearch').placeholder = 'Type the Movie title, then click enter...';
      });
      this.shadowDOM.querySelector('#inputSearch').addEventListener('keyup', this._keyupEvent);
    }
  }]);
  return SearchBar;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('search-bar', SearchBar);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
;// CONCATENATED MODULE: ./src/script/component/movie-item.js
function movie_item_typeof(obj) { "@babel/helpers - typeof"; return movie_item_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, movie_item_typeof(obj); }
function movie_item_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function movie_item_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function movie_item_createClass(Constructor, protoProps, staticProps) { if (protoProps) movie_item_defineProperties(Constructor.prototype, protoProps); if (staticProps) movie_item_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function movie_item_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) movie_item_setPrototypeOf(subClass, superClass); }
function movie_item_createSuper(Derived) { var hasNativeReflectConstruct = movie_item_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = movie_item_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = movie_item_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return movie_item_possibleConstructorReturn(this, result); }; }
function movie_item_possibleConstructorReturn(self, call) { if (call && (movie_item_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return movie_item_assertThisInitialized(self); }
function movie_item_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function movie_item_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; movie_item_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !movie_item_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return movie_item_construct(Class, arguments, movie_item_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return movie_item_setPrototypeOf(Wrapper, Class); }; return movie_item_wrapNativeSuper(Class); }
function movie_item_construct(Parent, args, Class) { if (movie_item_isNativeReflectConstruct()) { movie_item_construct = Reflect.construct.bind(); } else { movie_item_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) movie_item_setPrototypeOf(instance, Class.prototype); return instance; }; } return movie_item_construct.apply(null, arguments); }
function movie_item_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function movie_item_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function movie_item_setPrototypeOf(o, p) { movie_item_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return movie_item_setPrototypeOf(o, p); }
function movie_item_getPrototypeOf(o) { movie_item_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return movie_item_getPrototypeOf(o); }

var MovieItem = /*#__PURE__*/function (_HTMLElement) {
  movie_item_inherits(MovieItem, _HTMLElement);
  var _super = movie_item_createSuper(MovieItem);
  function MovieItem() {
    movie_item_classCallCheck(this, MovieItem);
    return _super.apply(this, arguments);
  }
  movie_item_createClass(MovieItem, [{
    key: "movie",
    set: function set(movie) {
      this._movie = movie;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n    <div class=\"movie-card\">\n      <img src=\"https://image.tmdb.org/t/p/w500".concat(this._movie.poster_path, "\"  alt=\"").concat(this._movie.title, "\" class=\"movie-card-poster\" width=\"160px\"/>\n      <span class=\"rating-text\">\u2B50 ").concat(this._movie.vote_average, "</span>\n      <h5 class=\"movie-title show-detail\" id=\"").concat(this._movie.id, "\">").concat(this._movie.title, "</h5>\n      <small class=\"text-white\">").concat(moment_default()(this._movie.release_date, 'YYYY-MM-DD').format('YYYY'), "</small>\n    </div>\n    ");
      this.querySelector('.show-detail').addEventListener('click', function () {});
    }
  }]);
  return MovieItem;
}( /*#__PURE__*/movie_item_wrapNativeSuper(HTMLElement));
customElements.define('movie-item', MovieItem);
;// CONCATENATED MODULE: ./src/script/component/search-result.js
function search_result_typeof(obj) { "@babel/helpers - typeof"; return search_result_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, search_result_typeof(obj); }
function search_result_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function search_result_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function search_result_createClass(Constructor, protoProps, staticProps) { if (protoProps) search_result_defineProperties(Constructor.prototype, protoProps); if (staticProps) search_result_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function search_result_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) search_result_setPrototypeOf(subClass, superClass); }
function search_result_createSuper(Derived) { var hasNativeReflectConstruct = search_result_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = search_result_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = search_result_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return search_result_possibleConstructorReturn(this, result); }; }
function search_result_possibleConstructorReturn(self, call) { if (call && (search_result_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return search_result_assertThisInitialized(self); }
function search_result_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function search_result_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; search_result_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !search_result_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return search_result_construct(Class, arguments, search_result_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return search_result_setPrototypeOf(Wrapper, Class); }; return search_result_wrapNativeSuper(Class); }
function search_result_construct(Parent, args, Class) { if (search_result_isNativeReflectConstruct()) { search_result_construct = Reflect.construct.bind(); } else { search_result_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) search_result_setPrototypeOf(instance, Class.prototype); return instance; }; } return search_result_construct.apply(null, arguments); }
function search_result_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function search_result_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function search_result_setPrototypeOf(o, p) { search_result_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return search_result_setPrototypeOf(o, p); }
function search_result_getPrototypeOf(o) { search_result_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return search_result_getPrototypeOf(o); }

var SearchResult = /*#__PURE__*/function (_HTMLElement) {
  search_result_inherits(SearchResult, _HTMLElement);
  var _super = search_result_createSuper(SearchResult);
  function SearchResult() {
    search_result_classCallCheck(this, SearchResult);
    return _super.apply(this, arguments);
  }
  search_result_createClass(SearchResult, [{
    key: "movies",
    set: function set(movies) {
      this._movies = movies;
      this.render();
    }
  }, {
    key: "value",
    get: function get() {
      return document.querySelector('#inputSearch').value;
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "<h1 class=\"text-white text-xl px-3\">Search Results</h1>";
      var movieContainer = document.createElement('movie-container');
      this.append(movieContainer);
      if (!this._movies) {
        movieContainer.innerHTML = "<h1 class=\"text-white mx-auto text-xl\">you haven't typed anything yet!</h1>";
      } else if (this._movies.length < 1) {
        movieContainer.innerHTML = "<h1 class=\"text-white mx-auto text-xl\">No results found.</h1>";
      } else {
        this._movies.filter(function (movie) {
          return movie.backdrop_path !== null;
        }).forEach(function (movie) {
          var resultItemElement = document.createElement('movie-item');
          resultItemElement.movie = movie;
          movieContainer.appendChild(resultItemElement);
        });
      }
    }
  }]);
  return SearchResult;
}( /*#__PURE__*/search_result_wrapNativeSuper(HTMLElement));
customElements.define('search-result', SearchResult);
;// CONCATENATED MODULE: ./src/script/component/popular-movies.js
function popular_movies_typeof(obj) { "@babel/helpers - typeof"; return popular_movies_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, popular_movies_typeof(obj); }
function popular_movies_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function popular_movies_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function popular_movies_createClass(Constructor, protoProps, staticProps) { if (protoProps) popular_movies_defineProperties(Constructor.prototype, protoProps); if (staticProps) popular_movies_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function popular_movies_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) popular_movies_setPrototypeOf(subClass, superClass); }
function popular_movies_createSuper(Derived) { var hasNativeReflectConstruct = popular_movies_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = popular_movies_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = popular_movies_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return popular_movies_possibleConstructorReturn(this, result); }; }
function popular_movies_possibleConstructorReturn(self, call) { if (call && (popular_movies_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return popular_movies_assertThisInitialized(self); }
function popular_movies_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function popular_movies_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; popular_movies_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !popular_movies_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return popular_movies_construct(Class, arguments, popular_movies_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return popular_movies_setPrototypeOf(Wrapper, Class); }; return popular_movies_wrapNativeSuper(Class); }
function popular_movies_construct(Parent, args, Class) { if (popular_movies_isNativeReflectConstruct()) { popular_movies_construct = Reflect.construct.bind(); } else { popular_movies_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) popular_movies_setPrototypeOf(instance, Class.prototype); return instance; }; } return popular_movies_construct.apply(null, arguments); }
function popular_movies_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function popular_movies_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function popular_movies_setPrototypeOf(o, p) { popular_movies_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return popular_movies_setPrototypeOf(o, p); }
function popular_movies_getPrototypeOf(o) { popular_movies_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return popular_movies_getPrototypeOf(o); }

var PopularMovies = /*#__PURE__*/function (_HTMLElement) {
  popular_movies_inherits(PopularMovies, _HTMLElement);
  var _super = popular_movies_createSuper(PopularMovies);
  function PopularMovies() {
    popular_movies_classCallCheck(this, PopularMovies);
    return _super.apply(this, arguments);
  }
  popular_movies_createClass(PopularMovies, [{
    key: "movies",
    set: function set(movies) {
      this._movies = movies;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "<h1 class=\"section-title\">Popular Movies</h1>";
      var movieContainer = document.createElement('movie-container');
      this.appendChild(movieContainer);
      movieContainer.movies = this._movies;
    }
  }, {
    key: "renderError",
    value: function renderError(error) {
      this.innerHTML = "<h1 class=\"section-title\">Popular Movies</h1>";
      var movieContainer = document.createElement('movie-container');
      this.appendChild(movieContainer);
      movieContainer.innerHTML = "<h1 class=\"text-white mx-auto text-xl\">".concat(error, "</h1>");
    }
  }]);
  return PopularMovies;
}( /*#__PURE__*/popular_movies_wrapNativeSuper(HTMLElement));
customElements.define('popular-movies', PopularMovies);
;// CONCATENATED MODULE: ./src/script/component/movie-container.js
function movie_container_typeof(obj) { "@babel/helpers - typeof"; return movie_container_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, movie_container_typeof(obj); }
function movie_container_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function movie_container_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function movie_container_createClass(Constructor, protoProps, staticProps) { if (protoProps) movie_container_defineProperties(Constructor.prototype, protoProps); if (staticProps) movie_container_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function movie_container_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) movie_container_setPrototypeOf(subClass, superClass); }
function movie_container_createSuper(Derived) { var hasNativeReflectConstruct = movie_container_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = movie_container_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = movie_container_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return movie_container_possibleConstructorReturn(this, result); }; }
function movie_container_possibleConstructorReturn(self, call) { if (call && (movie_container_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return movie_container_assertThisInitialized(self); }
function movie_container_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function movie_container_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; movie_container_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !movie_container_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return movie_container_construct(Class, arguments, movie_container_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return movie_container_setPrototypeOf(Wrapper, Class); }; return movie_container_wrapNativeSuper(Class); }
function movie_container_construct(Parent, args, Class) { if (movie_container_isNativeReflectConstruct()) { movie_container_construct = Reflect.construct.bind(); } else { movie_container_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) movie_container_setPrototypeOf(instance, Class.prototype); return instance; }; } return movie_container_construct.apply(null, arguments); }
function movie_container_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function movie_container_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function movie_container_setPrototypeOf(o, p) { movie_container_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return movie_container_setPrototypeOf(o, p); }
function movie_container_getPrototypeOf(o) { movie_container_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return movie_container_getPrototypeOf(o); }

var MovieContainer = /*#__PURE__*/function (_HTMLElement) {
  movie_container_inherits(MovieContainer, _HTMLElement);
  var _super = movie_container_createSuper(MovieContainer);
  function MovieContainer() {
    movie_container_classCallCheck(this, MovieContainer);
    return _super.apply(this, arguments);
  }
  movie_container_createClass(MovieContainer, [{
    key: "movies",
    set: function set(movies) {
      this._movies = movies;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      this._movies.filter(function (movie) {
        return movie.poster_path !== null;
      }).forEach(function (movie) {
        var movieItemElement = document.createElement('movie-item');
        movieItemElement.movie = movie;
        _this.appendChild(movieItemElement);
      });
    }
  }]);
  return MovieContainer;
}( /*#__PURE__*/movie_container_wrapNativeSuper(HTMLElement));
customElements.define('movie-container', MovieContainer);
;// CONCATENATED MODULE: ./src/script/component/playing-movies.js
function playing_movies_typeof(obj) { "@babel/helpers - typeof"; return playing_movies_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, playing_movies_typeof(obj); }
function playing_movies_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function playing_movies_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function playing_movies_createClass(Constructor, protoProps, staticProps) { if (protoProps) playing_movies_defineProperties(Constructor.prototype, protoProps); if (staticProps) playing_movies_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function playing_movies_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) playing_movies_setPrototypeOf(subClass, superClass); }
function playing_movies_createSuper(Derived) { var hasNativeReflectConstruct = playing_movies_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = playing_movies_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = playing_movies_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return playing_movies_possibleConstructorReturn(this, result); }; }
function playing_movies_possibleConstructorReturn(self, call) { if (call && (playing_movies_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return playing_movies_assertThisInitialized(self); }
function playing_movies_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function playing_movies_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; playing_movies_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !playing_movies_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return playing_movies_construct(Class, arguments, playing_movies_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return playing_movies_setPrototypeOf(Wrapper, Class); }; return playing_movies_wrapNativeSuper(Class); }
function playing_movies_construct(Parent, args, Class) { if (playing_movies_isNativeReflectConstruct()) { playing_movies_construct = Reflect.construct.bind(); } else { playing_movies_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) playing_movies_setPrototypeOf(instance, Class.prototype); return instance; }; } return playing_movies_construct.apply(null, arguments); }
function playing_movies_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function playing_movies_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function playing_movies_setPrototypeOf(o, p) { playing_movies_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return playing_movies_setPrototypeOf(o, p); }
function playing_movies_getPrototypeOf(o) { playing_movies_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return playing_movies_getPrototypeOf(o); }

var PlayingMovies = /*#__PURE__*/function (_HTMLElement) {
  playing_movies_inherits(PlayingMovies, _HTMLElement);
  var _super = playing_movies_createSuper(PlayingMovies);
  function PlayingMovies() {
    playing_movies_classCallCheck(this, PlayingMovies);
    return _super.apply(this, arguments);
  }
  playing_movies_createClass(PlayingMovies, [{
    key: "movies",
    set: function set(movies) {
      this._movies = movies;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n    <h1 class=\"section-title\">Now Playing</h1>\n    ";
      var movieContainer = document.createElement('movie-container');
      this.appendChild(movieContainer);
      movieContainer.movies = this._movies;
    }
  }, {
    key: "renderError",
    value: function renderError(error) {
      this.innerHTML = "<h1 class=\"section-title\">Popular Movies</h1>";
      var movieContainer = document.createElement('movie-container');
      this.appendChild(movieContainer);
      movieContainer.innerHTML = "<h1 class=\"text-white mx-auto text-xl\">".concat(error, "</h1>");
    }
  }]);
  return PlayingMovies;
}( /*#__PURE__*/playing_movies_wrapNativeSuper(HTMLElement));
customElements.define('playing-movies', PlayingMovies);
;// CONCATENATED MODULE: ./src/script/component/ralated-movies.js
function ralated_movies_typeof(obj) { "@babel/helpers - typeof"; return ralated_movies_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, ralated_movies_typeof(obj); }
function ralated_movies_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function ralated_movies_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function ralated_movies_createClass(Constructor, protoProps, staticProps) { if (protoProps) ralated_movies_defineProperties(Constructor.prototype, protoProps); if (staticProps) ralated_movies_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function ralated_movies_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) ralated_movies_setPrototypeOf(subClass, superClass); }
function ralated_movies_createSuper(Derived) { var hasNativeReflectConstruct = ralated_movies_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ralated_movies_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ralated_movies_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ralated_movies_possibleConstructorReturn(this, result); }; }
function ralated_movies_possibleConstructorReturn(self, call) { if (call && (ralated_movies_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return ralated_movies_assertThisInitialized(self); }
function ralated_movies_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function ralated_movies_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; ralated_movies_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !ralated_movies_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return ralated_movies_construct(Class, arguments, ralated_movies_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return ralated_movies_setPrototypeOf(Wrapper, Class); }; return ralated_movies_wrapNativeSuper(Class); }
function ralated_movies_construct(Parent, args, Class) { if (ralated_movies_isNativeReflectConstruct()) { ralated_movies_construct = Reflect.construct.bind(); } else { ralated_movies_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) ralated_movies_setPrototypeOf(instance, Class.prototype); return instance; }; } return ralated_movies_construct.apply(null, arguments); }
function ralated_movies_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function ralated_movies_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function ralated_movies_setPrototypeOf(o, p) { ralated_movies_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ralated_movies_setPrototypeOf(o, p); }
function ralated_movies_getPrototypeOf(o) { ralated_movies_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ralated_movies_getPrototypeOf(o); }


var RelatedMovies = /*#__PURE__*/function (_HTMLElement) {
  ralated_movies_inherits(RelatedMovies, _HTMLElement);
  var _super = ralated_movies_createSuper(RelatedMovies);
  function RelatedMovies() {
    ralated_movies_classCallCheck(this, RelatedMovies);
    return _super.apply(this, arguments);
  }
  ralated_movies_createClass(RelatedMovies, [{
    key: "movies",
    set: function set(movies) {
      this._movies = movies;
      this.render();
    }
  }, {
    key: "details",
    set: function set(details) {
      this._details = details;
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "<h1 class=\"text-white text-xl px-3\">Related Movies</h1>";
      var movieContainer = document.createElement('movie-container');
      this.append(movieContainer);
      if (this._movies.length === 0) {
        movieContainer.innerHTML = "<h1 class=\"text-white text-lg leading-relaxed\">Sorry we cannot find related movies for <span class=\"font-bold\">".concat(this._details.title, "</span>.</h1>");
      }
      this._movies.filter(function (movie) {
        return movie.poster_path !== null;
      }).forEach(function (movie) {
        var movieItemElement = document.createElement('movie-item');
        movieItemElement.movie = movie;
        movieContainer.appendChild(movieItemElement);
      });
    }
  }]);
  return RelatedMovies;
}( /*#__PURE__*/ralated_movies_wrapNativeSuper(HTMLElement));
customElements.define('related-movies', RelatedMovies);
;// CONCATENATED MODULE: ./src/script/component/detail-movie.js
function detail_movie_typeof(obj) { "@babel/helpers - typeof"; return detail_movie_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, detail_movie_typeof(obj); }
function detail_movie_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function detail_movie_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function detail_movie_createClass(Constructor, protoProps, staticProps) { if (protoProps) detail_movie_defineProperties(Constructor.prototype, protoProps); if (staticProps) detail_movie_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function detail_movie_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) detail_movie_setPrototypeOf(subClass, superClass); }
function detail_movie_createSuper(Derived) { var hasNativeReflectConstruct = detail_movie_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = detail_movie_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = detail_movie_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return detail_movie_possibleConstructorReturn(this, result); }; }
function detail_movie_possibleConstructorReturn(self, call) { if (call && (detail_movie_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return detail_movie_assertThisInitialized(self); }
function detail_movie_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function detail_movie_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; detail_movie_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !detail_movie_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return detail_movie_construct(Class, arguments, detail_movie_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return detail_movie_setPrototypeOf(Wrapper, Class); }; return detail_movie_wrapNativeSuper(Class); }
function detail_movie_construct(Parent, args, Class) { if (detail_movie_isNativeReflectConstruct()) { detail_movie_construct = Reflect.construct.bind(); } else { detail_movie_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) detail_movie_setPrototypeOf(instance, Class.prototype); return instance; }; } return detail_movie_construct.apply(null, arguments); }
function detail_movie_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function detail_movie_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function detail_movie_setPrototypeOf(o, p) { detail_movie_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return detail_movie_setPrototypeOf(o, p); }
function detail_movie_getPrototypeOf(o) { detail_movie_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return detail_movie_getPrototypeOf(o); }



var DetailMovie = /*#__PURE__*/function (_HTMLElement) {
  detail_movie_inherits(DetailMovie, _HTMLElement);
  var _super = detail_movie_createSuper(DetailMovie);
  function DetailMovie() {
    detail_movie_classCallCheck(this, DetailMovie);
    return _super.apply(this, arguments);
  }
  detail_movie_createClass(DetailMovie, [{
    key: "details",
    set: function set(details) {
      this._details = details;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      var runtime = this._details.runtime * 60;
      var hours = Math.floor(runtime / 3600);
      runtime -= hours * 3600;
      var minutes = Math.floor(runtime / 60);
      var genres = this._details.genres;
      var casts = this._details.cast;
      var crews = this._details.crew;
      var director = crews.filter(function (crew) {
        return crew.job === 'Director';
      }).map(function (director) {
        return director.name.trim();
      }).join(' • ');
      var writer = crews.filter(function (crew) {
        return crew.job === 'Writer';
      }).map(function (writer) {
        return writer.name.trim();
      }).join(' • ');
      this.innerHTML = "\n    <div class=\"container mb-7\">\n    <h1 class=\"text-white text-2xl font-semibold mb-2\">".concat(this._details.title, " (").concat(moment_default()(this._details.release_date, 'YYYY-MM-DD').format('YYYY'), ")</h1>\n      <p class=\"rating-text\">\u2B50 <strong>").concat(this._details.vote_average, "</strong>/10  \u2022  <span>").concat(hours, " h ").concat(minutes, " m</span></p>\n      <div class=\"flex flex-col lg:flex-row\">\n        <div class=\"flex\">\n          <img src=\"https://image.tmdb.org/t/p/w500").concat(this._details.poster_path, "\" alt=\"").concat(this._details.title, "\" class=\"lg:max-w-[350px] object-cover rounded-md my-3 mx-auto\" />\n        </div>\n        <div class=\"lg:ml-6 flex-wrap overflow-x-scroll\">\n        <div class=\"my-2\">\n        ").concat(genres.map(function (genre) {
        return "<span class=\"text-white rounded-full bg-secondary border-white px-2 mb-3\">".concat(genre.name, "</span>").trim();
      }).join(' '), "\n          <h3 class=\"text-primary italic mt-3\">").concat(this._details.tagline, "</h3>\n          <p class=\"text-white text-lg leading-relaxed mt-3\">").concat(this._details.overview, "</p>       \n        </div>\n        <ul class=\"text-white\">\n          <li class=\"font-bold\">Director</li>\n          <li>").concat(director, "</li>\n          <li class=\"font-bold\">Writer</li>\n          <li>").concat(writer, "</li>\n        </ul>\n        <div class=\"mt-3 max-w-max\">\n        <h1 class=\"text-white text-2xl mb-2\">Top Cast</h1>\n          <div class=\"flex gap-3 overflow-x-scroll\">\n            ").concat(casts.filter(function (cast) {
        return cast.profile_path !== null;
      }).slice(0, 15).map(function (cast) {
        return "\n            <div class=\"max-w-[150px]\">          \n              <img src=\"https://image.tmdb.org/t/p/w500".concat(cast.profile_path, "\" class=\"rounded-full min-w-[120px] h-[120px] object-cover object-top\">\n              <figcation class=\"text-center\">\n              <h5 class=\"text-white text-sm font-semibold\">").concat(cast.name, "</h5>\n              <h6 class=\"text-gray-400 text-xs\">").concat(cast.character, "</h6>\n              </figcation>\n           </div>\n             ").trim();
      }).join(''), "\n          </div>\n      </div>\n    </div>\n    </div>\n    </div>\n    ");
      var recommendPage = document.createElement('related-movies');
      this.append(recommendPage);
      recommendPage.details = this._details;
    }
  }]);
  return DetailMovie;
}( /*#__PURE__*/detail_movie_wrapNativeSuper(HTMLElement));
customElements.define('detail-movie', DetailMovie);
// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(6455);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);
;// CONCATENATED MODULE: ./src/script/data/movie-source.js
function movie_source_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function movie_source_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function movie_source_createClass(Constructor, protoProps, staticProps) { if (protoProps) movie_source_defineProperties(Constructor.prototype, protoProps); if (staticProps) movie_source_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var baseUrl = 'https://api.themoviedb.org/3/';
var apiKey = '739949faaf1aeda8232538dbe179ea8d';
var MovieSource = /*#__PURE__*/function () {
  function MovieSource() {
    movie_source_classCallCheck(this, MovieSource);
  }
  movie_source_createClass(MovieSource, null, [{
    key: "searchMovie",
    value: function searchMovie(keyword) {
      return fetch("".concat(baseUrl, "search/movie?api_key=").concat(apiKey, "&language=en-US&query=").concat(keyword, "&page=1&include_adult=false&region=ID")).then(function (response) {
        if (!response.ok) {
          response.json().then(function (response) {
            if (response.status_code) {
              sweetalert2_all_default().fire('something went wrong!', "".concat(response.status_message), 'error');
            }
            sweetalert2_all_default().fire('something went wrong!', "".concat(response.errors[0]), 'error');
          });
        } else {
          return response.json().then(function (response) {
            return response.results;
          });
        }
      });
    }
  }, {
    key: "getPlayingMovies",
    value: function getPlayingMovies() {
      return fetch("".concat(baseUrl, "movie/now_playing?api_key=").concat(apiKey, "&language=en-US&page=1&region=ID")).then(function (response) {
        return response.json();
      }).then(function (response) {
        {
          if (response.results) {
            return Promise.resolve(response.results);
          } else {
            return Promise.reject("Movie is not found");
          }
        }
      });
    }
  }, {
    key: "getPopularMovies",
    value: function getPopularMovies() {
      return fetch("".concat(baseUrl, "movie/popular?api_key=").concat(apiKey, "&language=en-US&page=1&region=ID")).then(function (response) {
        return response.json();
      }).then(function (response) {
        if (response.results) {
          return Promise.resolve(response.results);
        } else {
          return Promise.reject("Movie is not found");
        }
      });
    }
  }, {
    key: "getMovieDetail",
    value: function getMovieDetail(id) {
      return fetch("".concat(baseUrl, "movie/").concat(id, "?api_key=").concat(apiKey, "&language=en-US")).then(function (response) {
        return response.json();
      }).then(function (response) {
        return response;
      });
    }
  }, {
    key: "getMovieCredits",
    value: function getMovieCredits(id) {
      return fetch("".concat(baseUrl, "movie/").concat(id, "/credits?api_key=").concat(apiKey, "&language=en-US")).then(function (response) {
        return response.json();
      }).then(function (response) {
        return response;
      });
    }
  }, {
    key: "getRelatedMovie",
    value: function getRelatedMovie(id) {
      return fetch("".concat(baseUrl, "movie/").concat(id, "/recommendations?api_key=").concat(apiKey, "&language=en-US&page=1")).then(function (response) {
        return response.json();
      }).then(function (response) {
        return response.results;
      });
    }
  }]);
  return MovieSource;
}();
;// CONCATENATED MODULE: ./src/script/view/main.js
function main_typeof(obj) { "@babel/helpers - typeof"; return main_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, main_typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == main_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var main = function main() {
  var main = document.querySelector('main');
  var popularMoviesList = document.querySelector('popular-movies');
  var playingMoviesList = document.querySelector('playing-movies');
  var searchElement = document.querySelector('search-bar');
  var popularMovies = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var movies, fallbackResult;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return MovieSource.getPopularMovies();
            case 3:
              movies = _context.sent;
              popularMoviesList.movies = movies;
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              fallbackResult = function fallbackResult(message) {
                return popularMoviesList.renderError(message);
              };
              fallbackResult(_context.t0);
            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function popularMovies() {
      return _ref.apply(this, arguments);
    };
  }();
  var nowPlayingMovies = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var movies, fallbackResult;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return MovieSource.getPlayingMovies();
            case 3:
              movies = _context2.sent;
              playingMoviesList.movies = movies;
              _context2.next = 11;
              break;
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              fallbackResult = function fallbackResult(message) {
                return playingMoviesList.renderError(message);
              };
              fallbackResult(_context2.t0);
            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function nowPlayingMovies() {
      return _ref2.apply(this, arguments);
    };
  }();
  var onInputSearch = function onInputSearch(e) {
    (0,querySelectorDeep/* querySelectorDeep */.wF)('.loader').classList.remove('hidden');
    (0,querySelectorDeep/* querySelectorDeep */.wF)('.btn-show-search').classList.add('hidden');
    if (e.keyCode === 13) {
      searchExecute();
    }
  };
  var searchExecute = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var makeSearchResult, searchResult, movies;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              main.innerHTML = '';
              if (document.querySelector('search-result') === null) {
                makeSearchResult = document.createElement('search-result');
                main.appendChild(makeSearchResult);
              }
              searchResult = (0,querySelectorDeep/* querySelectorDeep */.wF)('search-result');
              searchResult.classList.remove('hidden');
              _context3.next = 6;
              return MovieSource.searchMovie(searchElement.value);
            case 6:
              movies = _context3.sent;
              searchResult.movies = movies;
            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return function searchExecute() {
      return _ref3.apply(this, arguments);
    };
  }();
  searchElement.keyupEvent = onInputSearch;
  document.addEventListener('click', /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {
      var detailMoviePage, detailMovie, id, movieDetail, movieCredits, relatedMovies, details, relatedContainer;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!e.target.classList.contains('show-detail')) {
                _context4.next = 20;
                break;
              }
              main.innerHTML = '';
              detailMoviePage = document.createElement('detail-movie');
              main.append(detailMoviePage);
              (0,querySelectorDeep/* querySelectorDeep */.wF)('#inputSearch').value = '';
              detailMovie = document.querySelector('detail-movie');
              id = e.target.id;
              _context4.next = 9;
              return MovieSource.getMovieDetail(id);
            case 9:
              movieDetail = _context4.sent;
              _context4.next = 12;
              return MovieSource.getMovieCredits(id);
            case 12:
              movieCredits = _context4.sent;
              _context4.next = 15;
              return MovieSource.getRelatedMovie(id);
            case 15:
              relatedMovies = _context4.sent;
              details = _objectSpread(_objectSpread({}, movieDetail), movieCredits);
              detailMovie.details = details;
              relatedContainer = document.querySelector('related-movies');
              relatedContainer.movies = relatedMovies;
            case 20:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return function (_x) {
      return _ref4.apply(this, arguments);
    };
  }());
  var movieOnload = function movieOnload() {
    nowPlayingMovies();
    popularMovies();
  };
  movieOnload();
};
/* harmony default export */ const view_main = (main);
;// CONCATENATED MODULE: ./src/app.js




document.addEventListener('DOMContentLoaded', view_main);

/***/ }),

/***/ 6618:
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var AppBar = /*#__PURE__*/function (_HTMLElement) {
  _inherits(AppBar, _HTMLElement);
  var _super = _createSuper(AppBar);
  function AppBar() {
    var _this;
    _classCallCheck(this, AppBar);
    _this = _super.call(this);
    _this.shadowDOM = _this.attachShadow({
      mode: 'open'
    });
    return _this;
  }
  _createClass(AppBar, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.shadowDOM.innerHTML = "\n    <style>\n    *,\n    ::before,\n    ::after {\n      box-sizing: border-box;\n      /* 1 */\n      border-width: 0;\n      /* 2 */\n      border-style: solid;\n      /* 2 */\n      border-color: #e5e7eb;\n      /* 2 */\n    }\n    :host{\n      padding-top: 1rem;\n      padding-bottom: 1rem;\n    }\n    .logo {\n      margin-top: auto;\n      margin-bottom: auto;\n      background-image: linear-gradient(to top right, var(--tw-gradient-stops));\n      --tw-gradient-from: #fff;\n      --tw-gradient-to: rgb(255 255 255 / 0);\n      --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n      --tw-gradient-to: #ECB365;\n      -webkit-background-clip: text;\n              background-clip: text;\n      padding-left: 0.75rem;\n      padding-right: 0.75rem;\n      font-size: 1.5rem;\n      line-height: 2rem;\n      font-weight: 700;\n      color: transparent;\n    }\n    .hidden {\n      display: none;\n    }\n    .lg:block {\n      display: block;\n    }\n    \n\n    </style>\n        <a href=\"\" class=\"logo\">RH Movies</a>\n         ";
    }
  }]);
  return AppBar;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('app-bar', AppBar);

/***/ }),

/***/ 1270:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3076);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6455);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);




var feather = __webpack_require__(8508);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [849], () => (__webpack_exec__(6881)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);