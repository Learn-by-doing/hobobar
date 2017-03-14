/*! vue-onsenui v2.0.0-alpha.0 - Thu Feb 02 2017 15:26:53 GMT+0900 (JST) */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"), require("onsenui"));
	else if(typeof define === 'function' && define.amd)
		define("VueOnsen", ["vue", "onsenui"], factory);
	else if(typeof exports === 'object')
		exports["VueOnsen"] = factory(require("vue"), require("onsenui"));
	else
		root["VueOnsen"] = factory(root["Vue"], root["ons"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_49__, __WEBPACK_EXTERNAL_MODULE_51__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(1);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _components = __webpack_require__(36);
	
	var components = _interopRequireWildcard(_components);
	
	var _directives = __webpack_require__(133);
	
	var directives = _interopRequireWildcard(_directives);
	
	var _onsenui = __webpack_require__(51);
	
	var _onsenui2 = _interopRequireDefault(_onsenui);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var register = function register(Vue, type, items) {
	  (0, _keys2.default)(items).forEach(function (key) {
	    var value = items[key];
	    key = key.replace(/([a-zA-Z])([A-Z])/g, '$1-$2').toLowerCase();
	    Vue[type](key, value);
	  });
	};
	
	var install = function install(Vue) {
	  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  register(Vue, 'component', components);
	
	  register(Vue, 'directive', directives);
	
	  Vue.mixin({
	    methods: {
	      getComponent: function getComponent(query) {
	        if (query.startsWith('v-')) {
	          query = name.slice(2);
	        }
	        var component = _onsenui2.default._util.findParent(this.$el, query);
	        return component && component.__vue__ || null;
	      }
	    },
	
	    computed: {
	      tabbar: function tabbar() {
	        return this.getComponent('ons-tabbar');
	      },
	      navigator: function navigator() {
	        return this.getComponent('ons-navigator');
	      },
	      splitter: function splitter() {
	        return this.getComponent('ons-splitter');
	      }
	    },
	
	    beforeMount: function beforeMount() {
	      if (this.$el) {
	        var countOfOnsElements = Array.prototype.slice.call(this.$el.querySelectorAll('*')).filter(function (element) {
	          return (/^ons-.+/i.test(element.tagName)
	          );
	        }).length;
	
	        if (countOfOnsElements > 0) {
	          console.error('[vue-onsenui] Vue templates must not contain ons-* elements directly.');
	        }
	      }
	    }
	  });
	
	  Vue.prototype.$notification = _onsenui2.default.notification;
	
	  Vue.prototype.$platform = _onsenui2.default.platform;
	};
	
	if (typeof window !== 'undefined' && window.Vue) {
	  window.Vue.use({ install: install });
	}
	
	exports.default = install;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(23).Object.keys;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(4)
	  , $keys    = __webpack_require__(6);
	
	__webpack_require__(21)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(5);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(7)
	  , enumBugKeys = __webpack_require__(20);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(8)
	  , toIObject    = __webpack_require__(9)
	  , arrayIndexOf = __webpack_require__(12)(false)
	  , IE_PROTO     = __webpack_require__(16)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(10)
	  , defined = __webpack_require__(5);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(11);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(9)
	  , toLength  = __webpack_require__(13)
	  , toIndex   = __webpack_require__(15);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(14)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(14)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(17)('keys')
	  , uid    = __webpack_require__(19);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(18)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 19 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(22)
	  , core    = __webpack_require__(23)
	  , fails   = __webpack_require__(32);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(18)
	  , core      = __webpack_require__(23)
	  , ctx       = __webpack_require__(24)
	  , hide      = __webpack_require__(26)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 23 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(25);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(27)
	  , createDesc = __webpack_require__(35);
	module.exports = __webpack_require__(31) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(28)
	  , IE8_DOM_DEFINE = __webpack_require__(30)
	  , toPrimitive    = __webpack_require__(34)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(31) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(31) && !__webpack_require__(32)(function(){
	  return Object.defineProperty(__webpack_require__(33)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(32)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29)
	  , document = __webpack_require__(18).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(29);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.VOnsBackButton = exports.VOnsSplitterSide = exports.VOnsSplitterContent = exports.VOnsSplitter = exports.VOnsModal = exports.VOnsDialog = exports.VOnsFab = exports.VOnsPage = exports.VOnsCarousel = exports.VOnsCarouselItem = exports.VOnsPullHook = exports.VOnsSplitterMask = exports.VOnsProgressCircular = exports.VOnsProgressBar = exports.VOnsCol = exports.VOnsRow = exports.VOnsRipple = exports.VOnsListHeader = exports.VOnsListItem = exports.VOnsList = exports.VOnsSpeedDialItem = exports.VOnsBottomToolbar = exports.VOnsSelect = exports.VOnsRange = exports.VOnsInput = exports.VOnsSwitch = exports.VOnsIcon = exports.VOnsButton = exports.VOnsToolbarButton = exports.VOnsToolbar = exports.VOnsNavigator = exports.VOnsTabbar = exports.VOnsTab = exports.VOnsSpeedDial = exports.VOnsAlertDialog = exports.VOnsPopover = undefined;
	
	var _VOnsPopover = __webpack_require__(37);
	
	Object.defineProperty(exports, 'VOnsPopover', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsPopover).default;
	  }
	});
	
	var _VOnsAlertDialog = __webpack_require__(61);
	
	Object.defineProperty(exports, 'VOnsAlertDialog', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsAlertDialog).default;
	  }
	});
	
	var _VOnsSpeedDial = __webpack_require__(64);
	
	Object.defineProperty(exports, 'VOnsSpeedDial', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsSpeedDial).default;
	  }
	});
	
	var _VOnsTab = __webpack_require__(67);
	
	Object.defineProperty(exports, 'VOnsTab', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsTab).default;
	  }
	});
	
	var _VOnsTabbar = __webpack_require__(93);
	
	Object.defineProperty(exports, 'VOnsTabbar', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsTabbar).default;
	  }
	});
	
	var _VOnsNavigator = __webpack_require__(96);
	
	Object.defineProperty(exports, 'VOnsNavigator', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsNavigator).default;
	  }
	});
	
	var _VGeneric = __webpack_require__(130);
	
	var _VGeneric2 = _interopRequireDefault(_VGeneric);
	
	var _api = __webpack_require__(46);
	
	var _pageLoader = __webpack_require__(69);
	
	var _common = __webpack_require__(47);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var extend = function extend(component) {
	  var mixins = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	  return { name: 'v-ons-' + component, mixins: mixins, extends: _VGeneric2.default };
	};
	
	var VOnsToolbar = exports.VOnsToolbar = extend('toolbar');
	var VOnsToolbarButton = exports.VOnsToolbarButton = extend('toolbar-button');
	var VOnsButton = exports.VOnsButton = extend('button');
	var VOnsIcon = exports.VOnsIcon = extend('icon');
	var VOnsSwitch = exports.VOnsSwitch = extend('switch');
	var VOnsInput = exports.VOnsInput = extend('input');
	var VOnsRange = exports.VOnsRange = extend('range');
	var VOnsSelect = exports.VOnsSelect = extend('select');
	var VOnsBottomToolbar = exports.VOnsBottomToolbar = extend('bottom-toolbar');
	var VOnsSpeedDialItem = exports.VOnsSpeedDialItem = extend('speed-dial-item');
	var VOnsList = exports.VOnsList = extend('list');
	var VOnsListItem = exports.VOnsListItem = extend('list-item');
	var VOnsListHeader = exports.VOnsListHeader = extend('list-header');
	var VOnsRipple = exports.VOnsRipple = extend('ripple');
	var VOnsRow = exports.VOnsRow = extend('row');
	var VOnsCol = exports.VOnsCol = extend('col');
	var VOnsProgressBar = exports.VOnsProgressBar = extend('progress-bar');
	var VOnsProgressCircular = exports.VOnsProgressCircular = extend('progress-circular');
	var VOnsSplitterMask = exports.VOnsSplitterMask = extend('splitter-mask');
	var VOnsPullHook = exports.VOnsPullHook = extend('pull-hook');
	var VOnsCarouselItem = exports.VOnsCarouselItem = extend('carousel-item');
	var VOnsCarousel = exports.VOnsCarousel = extend('carousel', [_common.hasOptions]);
	var VOnsPage = exports.VOnsPage = extend('page', [_common.destroyable]);
	var VOnsFab = exports.VOnsFab = extend('fab', [_api.fabAPI]);
	var VOnsDialog = exports.VOnsDialog = extend('dialog', [_api.dialogAPI]);
	var VOnsModal = exports.VOnsModal = extend('modal', [_api.dialogAPI]);
	var VOnsSplitter = exports.VOnsSplitter = extend('splitter', [_common.destroyable]);
	var VOnsSplitterContent = exports.VOnsSplitterContent = extend('splitter-content', [_pageLoader.VuePageLoader, _common.destroyable]);
	var VOnsSplitterSide = exports.VOnsSplitterSide = extend('splitter-side', [_pageLoader.VuePageLoader, _common.destroyable, _common.hasOptions]);
	var VOnsBackButton = exports.VOnsBackButton = extend('back-button', [_common.clickable, _common.hasOptions]);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(38)
	
	/* template */
	var __vue_template__ = __webpack_require__(60)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(39);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _api = __webpack_require__(46);
	
	var _derive = __webpack_require__(48);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_api.dialogAPI, _derive.deriveEvents, _derive.deriveMethods, _derive.deriveProperties],
	
	  props: {
	    target: {
	      validator: function validator(value) {
	        if (value._isVue || typeof value === 'string' || value instanceof Event || value instanceof HTMLElement) {
	          return true;
	        }
	        return false;
	      }
	    }
	  },
	
	  computed: {
	    normalizedTarget: function normalizedTarget() {
	      if (this.target && this.target._isVue) {
	        return this.target.$el;
	      }
	      return this.target;
	    },
	    normalizedOptions: function normalizedOptions() {
	      if (this.target) {
	        return (0, _extends3.default)({
	          target: this.normalizedTarget
	        }, this.options);
	      }
	      return this.options;
	    }
	  }
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(40);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(41), __esModule: true };

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(42);
	module.exports = __webpack_require__(23).Object.assign;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(22);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(43)});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(6)
	  , gOPS     = __webpack_require__(44)
	  , pIE      = __webpack_require__(45)
	  , toObject = __webpack_require__(4)
	  , IObject  = __webpack_require__(10)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(32)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 44 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 45 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fabAPI = exports.dialogAPI = undefined;
	
	var _common = __webpack_require__(47);
	
	var dialogAPI = {
	  mixins: [_common.visibilityToggle, _common.hasOptions],
	
	  mounted: function mounted() {
	    var _this = this;
	
	    this.$el._cancel = function () {
	      _this.$emit('mask');
	    };
	  }
	};
	
	var fabAPI = {
	  mixins: [_common.clickable, _common.visibilityToggle]
	};
	
	exports.dialogAPI = dialogAPI;
	exports.fabAPI = fabAPI;

/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var visibilityToggle = {
	  props: {
	    visible: {
	      type: Boolean,
	      default: undefined }
	  },
	
	  watch: {
	    visible: function visible() {
	      if (this.visible !== this.$el.visible) {
	        this.$el[this.visible ? 'show' : 'hide'].call(this.$el, this.normalizedOptions || this.options);
	      }
	    }
	  },
	
	  mounted: function mounted() {
	    var _this = this;
	
	    this.$nextTick(function () {
	      if (typeof _this.visible === 'boolean' && _this.visible !== _this.$el.visible) {
	        _this.$el[_this.visible ? 'show' : 'hide'].call(_this.$el, _this.normalizedOptions || _this.options);
	      }
	    });
	  }
	};
	
	var clickable = {
	  props: {
	    onClick: {
	      type: Function
	    }
	  },
	
	  watch: {
	    onClick: function onClick() {
	      this.$el.onClick = this.onClick;
	    }
	  },
	
	  mounted: function mounted() {
	    this.$el.onClick = this.onClick;
	  }
	};
	
	var hasOptions = {
	  props: {
	    options: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    }
	  }
	};
	
	var destroyable = {
	  beforeDestroy: function beforeDestroy() {
	    if (this.$el._destroy instanceof Function) {
	      this.$el._destroy();
	    }
	  }
	};
	
	exports.visibilityToggle = visibilityToggle;
	exports.clickable = clickable;
	exports.hasOptions = hasOptions;
	exports.destroyable = destroyable;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deriveProperties = exports.deriveMethods = exports.deriveEvents = undefined;
	
	var _keys = __webpack_require__(1);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _assign = __webpack_require__(40);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _vue = __webpack_require__(49);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _util = __webpack_require__(50);
	
	var _optionsObjectHelper = __webpack_require__(52);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var deriveEvents = {
	  beforeCreate: function beforeCreate() {
	    var _this = this;
	
	    this._boundEvents = (0, _util.getClassFromTag)(this.$options._componentTag.slice(2)).events || ['click'];
	    this.$options.methods = (0, _assign2.default)({}, this._boundEvents.reduce(function (result, key) {
	      result[(0, _util.eventToHandler)(key)] = function (event) {
	        return _this.$emit(key, event);
	      };
	      return result;
	    }, {}), this.$options.methods);
	  },
	  mounted: function mounted() {
	    var _this2 = this;
	
	    this._boundEvents.forEach(function (key) {
	      _this2.$el.addEventListener(key, _this2[(0, _util.eventToHandler)(key)]);
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    var _this3 = this;
	
	    this._boundEvents.forEach(function (key) {
	      _this3.$el.removeEventListener(key, _this3[(0, _util.eventToHandler)(key)]);
	    });
	    this._boundEvents = null;
	  }
	};
	
	var deriveMethods = {
	  beforeCreate: function beforeCreate() {
	    this.$options.methods = (0, _assign2.default)({}, (0, _optionsObjectHelper.createMethodsFor)((0, _util.getClassFromTag)(this.$options._componentTag.slice(2))), this.$options.methods);
	  }
	};
	
	var deriveProperties = {
	  beforeCreate: function beforeCreate() {
	    var _this4 = this;
	
	    this._propertyHandlers = [];
	    var derivedProperties = (0, _optionsObjectHelper.createComputedPropertiesFor)((0, _util.getClassFromTag)(this.$options._componentTag.slice(2)));
	
	    derivedProperties = (0, _keys2.default)(derivedProperties).reduce(function (result, propertyName) {
	      if (/^on[A-Z]/.test(propertyName)) {
	        _this4._propertyHandlers.push(propertyName);
	      } else {
	        result[propertyName] = derivedProperties[propertyName];
	      }
	      return result;
	    }, {});
	
	    this.$options.computed = (0, _assign2.default)({}, derivedProperties, this.$options.computed);
	  },
	  mounted: function mounted() {
	    var _this5 = this;
	
	    this._propertyHandlers.forEach(function (propertyName) {
	      _this5.$el[propertyName] = function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        var name = propertyName.slice(2);
	        _this5.$emit.apply(_this5, [name.charAt(0).toLowerCase() + name.slice(1)].concat(args));
	      };
	    });
	  }
	};
	
	exports.deriveEvents = deriveEvents;
	exports.deriveMethods = deriveMethods;
	exports.deriveProperties = deriveProperties;

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_49__;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.eventToHandler = exports.getClassFromTag = exports.camelize = exports.hyphenate = undefined;
	
	var _onsenui = __webpack_require__(51);
	
	var _onsenui2 = _interopRequireDefault(_onsenui);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var hyphenate = exports.hyphenate = function hyphenate(string) {
	  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	};
	
	var camelize = exports.camelize = function camelize(string) {
	  return string.toLowerCase().replace(/-([a-z])/g, function (m, l) {
	    return l.toUpperCase();
	  });
	};
	
	var getClassFromTag = exports.getClassFromTag = function getClassFromTag(tagName) {
	  var className = camelize(tagName.slice(3)) + 'Element';
	  return _onsenui2.default[className];
	};
	
	var eventToHandler = exports.eventToHandler = function eventToHandler(name) {
	  return '_on' + name.charAt(0).toUpperCase() + name.slice(1);
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_51__;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createMethodsFor = exports.createComputedPropertiesFor = undefined;
	
	var _keys = __webpack_require__(1);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _getOwnPropertyDescriptors = __webpack_require__(53);
	
	var _getOwnPropertyDescriptors2 = _interopRequireDefault(_getOwnPropertyDescriptors);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _reservedProperties = [/^_.*$/, /^init$/, /^constructor$/, /^connectedCallback$/, /^disconnectedCallback$/, /^attributeChangedCallback$/, /^adoptedCallback$/];
	
	var _blackListedProperties = ['page', 'pageLoader', 'visible', 'options'];
	
	var _isReserved = function _isReserved(propertyName) {
	  return _reservedProperties.map(function (v) {
	    return v.test(propertyName);
	  }).reduce(function (a, b) {
	    return a || b;
	  });
	};
	
	var _isMethod = function _isMethod(propertyDescriptor) {
	  return typeof propertyDescriptor.value !== 'undefined';
	};
	
	var _scanNonReservedProperties = function _scanNonReservedProperties(targetClass, callback) {
	  var propertyDescriptors = (0, _getOwnPropertyDescriptors2.default)(targetClass.prototype);
	
	  (0, _keys2.default)(propertyDescriptors).forEach(function (propertyName) {
	    if (!_isReserved(propertyName) && !_blackListedProperties.includes(propertyName)) {
	      callback(propertyName, propertyDescriptors[propertyName]);
	    }
	  });
	};
	
	var createComputedPropertiesFor = function createComputedPropertiesFor(targetClass) {
	  var computed = {};
	
	  _scanNonReservedProperties(targetClass, function (propertyName, propertyDescriptor) {
	    if (!_isMethod(propertyDescriptor)) {
	      computed[propertyName] = {
	        cache: false,
	        get: function get() {
	          return this.$el[propertyName] && this.$el[propertyName].__vue__ || this.$el[propertyName];
	        },
	        set: function set(newValue) {
	          this.$el[propertyName] = newValue;
	        }
	      };
	    }
	  });
	
	  return computed;
	};
	
	var createMethodsFor = function createMethodsFor(targetClass) {
	  var methods = {};
	
	  _scanNonReservedProperties(targetClass, function (propertyName, propertyDescriptor) {
	    if (_isMethod(propertyDescriptor)) {
	      methods[propertyName] = function () {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }
	
	        return this.$el[propertyName].apply(this.$el, args);
	      };
	    }
	  });
	
	  return methods;
	};
	
	exports.createComputedPropertiesFor = createComputedPropertiesFor;
	exports.createMethodsFor = createMethodsFor;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(54), __esModule: true };

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(55);
	module.exports = __webpack_require__(23).Object.getOwnPropertyDescriptors;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(22)
	  , ownKeys        = __webpack_require__(56)
	  , toIObject      = __webpack_require__(9)
	  , gOPD           = __webpack_require__(58)
	  , createProperty = __webpack_require__(59);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(57)
	  , gOPS     = __webpack_require__(44)
	  , anObject = __webpack_require__(28)
	  , Reflect  = __webpack_require__(18).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(7)
	  , hiddenKeys = __webpack_require__(20).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(45)
	  , createDesc     = __webpack_require__(35)
	  , toIObject      = __webpack_require__(9)
	  , toPrimitive    = __webpack_require__(34)
	  , has            = __webpack_require__(8)
	  , IE8_DOM_DEFINE = __webpack_require__(30)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(31) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(27)
	  , createDesc      = __webpack_require__(35);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-popover', [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(62)
	
	/* template */
	var __vue_template__ = __webpack_require__(63)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(1);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _api = __webpack_require__(46);
	
	var _derive = __webpack_require__(48);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_api.dialogAPI, _derive.deriveEvents, _derive.deriveMethods, _derive.deriveProperties],
	
	  props: {
	    title: {
	      type: String
	    },
	    footer: {
	      type: Object,
	      validator: function validator(value) {
	        var buttons = (0, _keys2.default)(value);
	        for (var i = 0; i < buttons.length; i++) {
	          if (!(value[buttons[i]] instanceof Function)) {
	            return false;
	          }
	        }
	        return true;
	      }
	    }
	  },
	
	  methods: {
	    _addButtonClasses: function _addButtonClasses() {
	      if (!this.$slots.hasOwnProperty('footer')) return;
	      this.$slots.footer.forEach(function (el) {
	        return el.data && (el.data.staticClass = (el.data.staticClass || '') + ' alert-dialog-button');
	      });
	    }
	  },
	
	  beforeMount: function beforeMount() {
	    this._addButtonClasses();
	  },
	  beforeUpdate: function beforeUpdate() {
	    this._addButtonClasses();
	  }
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-alert-dialog', [_c('div', {
	    staticClass: "alert-dialog-title"
	  }, [_vm._t("title", [_vm._v(_vm._s(_vm.title))])], 2), _vm._v(" "), _c('div', {
	    staticClass: "alert-dialog-content"
	  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
	    staticClass: "alert-dialog-footer"
	  }, [_vm._t("footer", _vm._l((_vm.footer), function(handler, key) {
	    return _c('button', {
	      staticClass: "alert-dialog-button",
	      on: {
	        "click": handler
	      }
	    }, [_vm._v(_vm._s(key))])
	  }))], 2)])
	},staticRenderFns: []}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(65)
	
	/* template */
	var __vue_template__ = __webpack_require__(66)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _derive = __webpack_require__(48);
	
	var _api = __webpack_require__(46);
	
	exports.default = {
	  mixins: [_derive.deriveEvents, _derive.deriveMethods, _derive.deriveProperties, _api.fabAPI],
	
	  props: {
	    open: {
	      type: Boolean
	    }
	  },
	
	  watch: {
	    open: function open() {
	      if (this.open !== this.$el.isOpen()) {
	        this.$el[this.open ? 'showItems' : 'hideItems'].call(this.$el);
	      }
	    }
	  },
	
	  mounted: function mounted() {
	    var _this = this;
	
	    this.$nextTick(function () {
	      if (_this.open !== _this.$el.isOpen()) {
	        _this.$el[_this.open ? 'showItems' : 'hideItems'].call(_this.$el);
	      }
	    });
	  }
	};

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-speed-dial', [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(68)
	
	/* template */
	var __vue_template__ = __webpack_require__(92)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _derive = __webpack_require__(48);
	
	var _pageLoader = __webpack_require__(69);
	
	var _common = __webpack_require__(47);
	
	exports.default = {
	  mixins: [_derive.deriveMethods, _pageLoader.VueTabLoader, _common.clickable],
	
	  props: {
	    active: {
	      type: Boolean
	    }
	  },
	
	  watch: {
	    active: function active() {
	      if (this.active === true) {
	        this.$el.setActive();
	      } else {
	        this.$el.setInactive();
	      }
	    }
	  },
	
	  mounted: function mounted() {
	    if (this.active === true) {
	      this.$el.setAttribute('active', '');
	    }
	  }
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.VueTabLoader = exports.VuePageLoader = undefined;
	
	var _toConsumableArray2 = __webpack_require__(70);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _extends2 = __webpack_require__(39);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _keys = __webpack_require__(1);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _assign = __webpack_require__(40);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _vue = __webpack_require__(49);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _onsenui = __webpack_require__(51);
	
	var _common = __webpack_require__(47);
	
	var _util = __webpack_require__(50);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _getParentVM = function _getParentVM(element) {
	  var parent = element;
	  while (!parent.hasOwnProperty('__vue__')) {
	    parent = parent.parentElement;
	    if (!parent) {
	      return;
	    }
	  }
	  return parent.__vue__;
	};
	
	var _inheritProps = {
	  beforeCreate: function beforeCreate() {
	    if (!this.$options.hasOwnProperty('props')) {
	      return;
	    }
	
	    var parentVnode = this.$options.parent.$options._parentVnode;
	    var parentProps = (0, _assign2.default)({}, parentVnode.data.attrs, parentVnode.componentOptions.propsData);
	    this.$options.propsData = (0, _assign2.default)((0, _keys2.default)(this.$options.props).reduce(function (result, key) {
	      var hyphenKey = (0, _util.hyphenate)(key);
	      result[key] = {};
	      if (parentProps.hasOwnProperty(hyphenKey)) {
	        result[key] = parentProps[hyphenKey];
	      }
	      return result;
	    }, {}), this.$options.propsData || {});
	  }
	};
	
	var VuePageLoader = {
	  mixins: [_common.destroyable],
	
	  props: {
	    page: {
	      type: Object
	    }
	  },
	
	  mounted: function mounted() {
	    this.$el.page = this.page || this.$el.page;
	
	    this.$el.pageLoader = new _onsenui.PageLoader(function (_ref, done) {
	      var page = _ref.page,
	          parent = _ref.parent,
	          _ref$params = _ref.params,
	          params = _ref$params === undefined ? {} : _ref$params;
	
	      if (!page) {
	        throw new Error('PageLoader: Expected a VOnsPage Component but got "' + page + '" for "' + parent.tagName.toLowerCase() + '"');
	      }
	
	      if (page.hasOwnProperty('_isVue')) {
	        page.$parent = page.$parent || _getParentVM(parent);
	      } else {
	        page = new _vue2.default((0, _extends3.default)({
	          parent: _getParentVM(parent)
	        }, page, {
	          mixins: [].concat((0, _toConsumableArray3.default)(page.mixins || []), [_inheritProps]),
	          computed: (0, _extends3.default)({}, page.computed || {}, { data: function data() {
	              return params;
	            } })
	        }));
	      }
	
	      page.$mount();
	      parent.appendChild(page.$el);
	      done(page.$el);
	    }, function (pageElement) {
	      if (pageElement._destroy instanceof Function) {
	        pageElement._destroy();
	      } else {
	        pageElement.remove();
	      }
	      pageElement.__vue__ && pageElement.__vue__.$destroy();
	    });
	  }
	};
	
	var VueTabLoader = {
	  mixins: [VuePageLoader],
	
	  mounted: function mounted() {
	    if (this.page === undefined) {
	      var contentElement = this.$parent.$el._contentElement;
	      var tabIndex = this.$el._findTabIndex();
	      if (contentElement && contentElement.children.length - 1 >= tabIndex) {
	        this.$el.page = contentElement.children[tabIndex].__vue__;
	      }
	    }
	  }
	};
	
	exports.VuePageLoader = VuePageLoader;
	exports.VueTabLoader = VueTabLoader;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _from = __webpack_require__(71);
	
	var _from2 = _interopRequireDefault(_from);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }
	
	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(72), __esModule: true };

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(73);
	__webpack_require__(86);
	module.exports = __webpack_require__(23).Array.from;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(74)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(75)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(14)
	  , defined   = __webpack_require__(5);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(76)
	  , $export        = __webpack_require__(22)
	  , redefine       = __webpack_require__(77)
	  , hide           = __webpack_require__(26)
	  , has            = __webpack_require__(8)
	  , Iterators      = __webpack_require__(78)
	  , $iterCreate    = __webpack_require__(79)
	  , setToStringTag = __webpack_require__(83)
	  , getPrototypeOf = __webpack_require__(85)
	  , ITERATOR       = __webpack_require__(84)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(26);

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(80)
	  , descriptor     = __webpack_require__(35)
	  , setToStringTag = __webpack_require__(83)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(26)(IteratorPrototype, __webpack_require__(84)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(28)
	  , dPs         = __webpack_require__(81)
	  , enumBugKeys = __webpack_require__(20)
	  , IE_PROTO    = __webpack_require__(16)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(33)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(82).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(27)
	  , anObject = __webpack_require__(28)
	  , getKeys  = __webpack_require__(6);
	
	module.exports = __webpack_require__(31) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18).document && document.documentElement;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(27).f
	  , has = __webpack_require__(8)
	  , TAG = __webpack_require__(84)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(17)('wks')
	  , uid        = __webpack_require__(19)
	  , Symbol     = __webpack_require__(18).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(8)
	  , toObject    = __webpack_require__(4)
	  , IE_PROTO    = __webpack_require__(16)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(24)
	  , $export        = __webpack_require__(22)
	  , toObject       = __webpack_require__(4)
	  , call           = __webpack_require__(87)
	  , isArrayIter    = __webpack_require__(88)
	  , toLength       = __webpack_require__(13)
	  , createProperty = __webpack_require__(59)
	  , getIterFn      = __webpack_require__(89);
	
	$export($export.S + $export.F * !__webpack_require__(91)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(28);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(78)
	  , ITERATOR   = __webpack_require__(84)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(90)
	  , ITERATOR  = __webpack_require__(84)('iterator')
	  , Iterators = __webpack_require__(78);
	module.exports = __webpack_require__(23).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(11)
	  , TAG = __webpack_require__(84)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(84)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-tab')
	},staticRenderFns: []}

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(94)
	
	/* template */
	var __vue_template__ = __webpack_require__(95)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _derive = __webpack_require__(48);
	
	var _common = __webpack_require__(47);
	
	exports.default = {
	  mixins: [_derive.deriveEvents, _derive.deriveMethods, _derive.deriveProperties, _common.hasOptions, _common.visibilityToggle]
	};

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-tabbar', [_c('div', {
	    staticClass: "tab-bar__content"
	  }, [_vm._t("pages")], 2), _vm._v(" "), _c('div', {
	    staticClass: "tab-bar"
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(97)
	
	/* template */
	var __vue_template__ = __webpack_require__(129)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = __webpack_require__(98);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _extends2 = __webpack_require__(39);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _promise = __webpack_require__(118);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	var _derive = __webpack_require__(48);
	
	var _pageLoader = __webpack_require__(69);
	
	var _common = __webpack_require__(47);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_derive.deriveEvents, _derive.deriveMethods, _derive.deriveProperties, _pageLoader.VuePageLoader, _common.destroyable, _common.hasOptions],
	
	  methods: {
	    isReady: function isReady() {
	      if (this.hasOwnProperty('_ready') && this._ready instanceof _promise2.default) {
	        return this._ready;
	      }
	      return _promise2.default.resolve();
	    },
	    _setPagesVisibility: function _setPagesVisibility(start, end, visibility) {
	      for (var i = start; i < end - 1; i++) {
	        this.$children[i].$el.style.visibility = visibility;
	      }
	    },
	    _reattachPage: function _reattachPage(pageElement) {
	      var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
	      this.$el.insertBefore(pageElement, position);
	      pageElement._isShown = true;
	    },
	    _redetachPage: function _redetachPage(pageElement) {
	      pageElement._destroy();
	      return _promise2.default.resolve();
	    },
	    _animate: function _animate(_ref) {
	      var _this = this;
	
	      var lastLength = _ref.lastLength,
	          currentLength = _ref.currentLength,
	          lastTopPage = _ref.lastTopPage,
	          currentTopPage = _ref.currentTopPage;
	
	      if (currentLength > lastLength) {
	        var _ret = function () {
	          var isReattached = false;
	          if (lastTopPage.parentElement !== _this.$el) {
	            _this._reattachPage(lastTopPage, _this.$el.children[lastLength - 1]);
	            isReattached = true;
	            lastLength--;
	          }
	          _this._setPagesVisibility(lastLength, currentLength, 'hidden');
	
	          return {
	            v: _this.$el._pushPage((0, _extends3.default)({}, _this.options, { leavePage: lastTopPage })).then(function () {
	              _this._setPagesVisibility(lastLength, currentLength, '');
	              if (isReattached) {
	                _this._redetachPage(lastTopPage);
	              }
	            })
	          };
	        }();
	
	        if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	      }
	
	      if (currentLength < lastLength) {
	        this._reattachPage(lastTopPage, null);
	        return this.$el._popPage(this.options, function () {
	          return _this._redetachPage(lastTopPage);
	        });
	      }
	
	      this._reattachPage(lastTopPage, currentTopPage);
	      return this.$el._pushPage(this.options).then(function () {
	        _this._redetachPage(lastTopPage);
	      });
	    }
	  },
	
	  beforeUpdate: function beforeUpdate() {
	    this._lastLength = this.$children.length;
	    this._lastTopPage = this.$children[this.$children.length - 1];
	  },
	  updated: function updated() {
	    var lastLength = this._lastLength;
	    var currentLength = this.$children.length;
	    var lastTopPage = this._lastTopPage.$el;
	    var currentTopPage = this.$children[currentLength - 1].$el;
	
	    if (currentTopPage !== lastTopPage) {
	      this._ready = this._animate({ lastLength: lastLength, currentLength: currentLength, lastTopPage: lastTopPage, currentTopPage: currentTopPage });
	    } else if (currentLength !== lastLength) {
	      currentTopPage.updateBackButton(currentLength > 1);
	    }
	
	    this._lastTopPage = null;
	  }
	};

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(99);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(106);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(73);
	__webpack_require__(101);
	module.exports = __webpack_require__(105).f('iterator');

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(102);
	var global        = __webpack_require__(18)
	  , hide          = __webpack_require__(26)
	  , Iterators     = __webpack_require__(78)
	  , TO_STRING_TAG = __webpack_require__(84)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(103)
	  , step             = __webpack_require__(104)
	  , Iterators        = __webpack_require__(78)
	  , toIObject        = __webpack_require__(9);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(75)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(84);

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(108);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	module.exports = __webpack_require__(23).Symbol;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(18)
	  , has            = __webpack_require__(8)
	  , DESCRIPTORS    = __webpack_require__(31)
	  , $export        = __webpack_require__(22)
	  , redefine       = __webpack_require__(77)
	  , META           = __webpack_require__(109).KEY
	  , $fails         = __webpack_require__(32)
	  , shared         = __webpack_require__(17)
	  , setToStringTag = __webpack_require__(83)
	  , uid            = __webpack_require__(19)
	  , wks            = __webpack_require__(84)
	  , wksExt         = __webpack_require__(105)
	  , wksDefine      = __webpack_require__(110)
	  , keyOf          = __webpack_require__(111)
	  , enumKeys       = __webpack_require__(112)
	  , isArray        = __webpack_require__(113)
	  , anObject       = __webpack_require__(28)
	  , toIObject      = __webpack_require__(9)
	  , toPrimitive    = __webpack_require__(34)
	  , createDesc     = __webpack_require__(35)
	  , _create        = __webpack_require__(80)
	  , gOPNExt        = __webpack_require__(114)
	  , $GOPD          = __webpack_require__(58)
	  , $DP            = __webpack_require__(27)
	  , $keys          = __webpack_require__(6)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(57).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(45).f  = $propertyIsEnumerable;
	  __webpack_require__(44).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(76)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(26)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(19)('meta')
	  , isObject = __webpack_require__(29)
	  , has      = __webpack_require__(8)
	  , setDesc  = __webpack_require__(27).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(32)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(18)
	  , core           = __webpack_require__(23)
	  , LIBRARY        = __webpack_require__(76)
	  , wksExt         = __webpack_require__(105)
	  , defineProperty = __webpack_require__(27).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(6)
	  , toIObject = __webpack_require__(9);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(6)
	  , gOPS    = __webpack_require__(44)
	  , pIE     = __webpack_require__(45);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(11);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(9)
	  , gOPN      = __webpack_require__(57).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 115 */
/***/ function(module, exports) {



/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(110)('asyncIterator');

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(110)('observable');

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(119), __esModule: true };

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(115);
	__webpack_require__(73);
	__webpack_require__(101);
	__webpack_require__(120);
	module.exports = __webpack_require__(23).Promise;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(76)
	  , global             = __webpack_require__(18)
	  , ctx                = __webpack_require__(24)
	  , classof            = __webpack_require__(90)
	  , $export            = __webpack_require__(22)
	  , isObject           = __webpack_require__(29)
	  , aFunction          = __webpack_require__(25)
	  , anInstance         = __webpack_require__(121)
	  , forOf              = __webpack_require__(122)
	  , speciesConstructor = __webpack_require__(123)
	  , task               = __webpack_require__(124).set
	  , microtask          = __webpack_require__(126)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(84)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(127)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(83)($Promise, PROMISE);
	__webpack_require__(128)(PROMISE);
	Wrapper = __webpack_require__(23)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(91)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(24)
	  , call        = __webpack_require__(87)
	  , isArrayIter = __webpack_require__(88)
	  , anObject    = __webpack_require__(28)
	  , toLength    = __webpack_require__(13)
	  , getIterFn   = __webpack_require__(89)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(28)
	  , aFunction = __webpack_require__(25)
	  , SPECIES   = __webpack_require__(84)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(24)
	  , invoke             = __webpack_require__(125)
	  , html               = __webpack_require__(82)
	  , cel                = __webpack_require__(33)
	  , global             = __webpack_require__(18)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(11)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 125 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(18)
	  , macrotask = __webpack_require__(124).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(11)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(26);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(18)
	  , core        = __webpack_require__(23)
	  , dP          = __webpack_require__(27)
	  , DESCRIPTORS = __webpack_require__(31)
	  , SPECIES     = __webpack_require__(84)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ons-navigator', [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(131)
	
	/* template */
	var __vue_template__ = __webpack_require__(132)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _derive = __webpack_require__(48);
	
	exports.default = {
	  mixins: [_derive.deriveEvents, _derive.deriveMethods, _derive.deriveProperties]
	};

/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c(_vm.$options._componentTag.slice(2), {
	    tag: "div"
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _VOnsIndex = __webpack_require__(134);
	
	Object.defineProperty(exports, 'OnsIndex', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsIndex).default;
	  }
	});
	
	var _VOnsModel = __webpack_require__(135);
	
	Object.defineProperty(exports, 'OnsModel', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsModel).default;
	  }
	});
	
	var _VOnsOpen = __webpack_require__(136);
	
	Object.defineProperty(exports, 'OnsOpen', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_VOnsOpen).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 134 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _isTabbar = function _isTabbar(el) {
	  return el.tagName.toLowerCase() === 'ons-tabbar';
	};
	var _getIndex = function _getIndex(event) {
	  return event[_isTabbar(event.target) ? 'index' : 'activeIndex'];
	};
	var _getActiveIndex = function _getActiveIndex(el) {
	  return el[_isTabbar(el) ? 'getActiveTabIndex' : 'getActiveIndex']();
	};
	var _setInitialIndex = function _setInitialIndex(el, value) {
	  var attr = _isTabbar(el) ? 'activeIndex' : 'initial-index';
	  if (!el.hasAttribute(attr)) {
	    el.setAttribute(attr, value);
	  }
	};
	
	exports.default = {
	  bind: function bind(el, binding, vnode) {
	    if (!['ons-tabbar', 'ons-carousel'].includes(el.tagName.toLowerCase())) {
	      throw new Error('"v-ons-index" directive cannot be used with "' + tag + '" element.');
	    }
	
	    _setInitialIndex(el, binding.value);
	
	    if (vnode.context.hasOwnProperty(binding.expression)) {
	      vnode.child.$on('postchange', function (event) {
	        vnode.context[binding.expression] = _getIndex(event);
	      });
	    }
	  },
	  update: function update(el, binding, vnode) {
	    if (binding.value !== _getActiveIndex(el)) {
	      if (_isTabbar(el)) {
	        var tab = el._getTabElement(binding.value);
	        if (tab && tab.onClick instanceof Function) {
	          tab.onClick();
	        } else {
	          el.setActiveTab(binding.value, vnode.child.options);
	        }
	        tab = null;
	      } else {
	        el.setActiveIndex(binding.value, vnode.child.options);
	      }
	    }
	  }
	};

/***/ },
/* 135 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _formatOutput = function _formatOutput() {
	  var modifiers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var output = arguments[1];
	
	  if (Object.hasOwnProperty.call(modifiers, 'number')) {
	    return Number(output);
	  }
	  if (Object.hasOwnProperty.call(modifiers, 'trim')) {
	    return output.trim();
	  }
	  return output;
	};
	var _bindOn = function _bindOn(eventName, modelKey, vnode, handler) {
	  if (vnode.context.hasOwnProperty(modelKey)) {
	    vnode.child.$on(eventName, handler);
	  }
	};
	var _bindSimpleInputOn = function _bindSimpleInputOn(eventName, modelKey, vnode, propName) {
	  _bindOn(eventName, modelKey, vnode, function (event) {
	    vnode.context[modelKey] = event.target[propName];
	  });
	};
	var _bindModifierInputOn = function _bindModifierInputOn(eventName, modelKey, vnode, modifiers) {
	  _bindOn(eventName, modelKey, vnode, function (event) {
	    vnode.context[modelKey] = _formatOutput(modifiers, event.target.value);
	  });
	};
	var _bindArrayInputOn = function _bindArrayInputOn(eventName, modelKey, vnode) {
	  _bindOn(eventName, modelKey, vnode, function (event) {
	    if (vnode.context[modelKey].includes(event.target.value)) {
	      !event.target.checked && vnode.context[modelKey].splice(vnode.context[modelKey].indexOf(event.target.value), 1);
	    } else {
	      event.target.checked && vnode.context[modelKey].push(event.target.value);
	    }
	  });
	};
	
	exports.default = {
	  bind: function bind(el, binding, vnode) {
	    var modelKey = binding.expression.trim();
	    var tag = el.tagName.toLowerCase();
	
	    switch (tag) {
	      case 'ons-select':
	        el.querySelector('option[value=' + binding.value + ']').setAttribute('selected', 'selected');
	        _bindSimpleInputOn('change', modelKey, vnode, 'value');
	        break;
	
	      case 'ons-switch':
	        el.checked = binding.value;
	        _bindSimpleInputOn('change', modelKey, vnode, 'checked');
	        break;
	
	      case 'ons-range':
	        el.value = binding.value;
	        _bindModifierInputOn(Object.hasOwnProperty.call(binding.modifiers, 'lazy') ? 'change' : 'input', modelKey, vnode, binding.modifiers);
	        break;
	
	      case 'ons-input':
	        switch (el.type) {
	          case 'radio':
	            el.checked = el.value === binding.value;
	            _bindSimpleInputOn('change', modelKey, vnode, 'value');
	            break;
	
	          case 'checkbox':
	            el.checked = binding.value.includes(el.value);
	            _bindArrayInputOn('change', modelKey, vnode);
	            break;
	
	          default:
	            el.value = binding.value;
	            _bindModifierInputOn(Object.hasOwnProperty.call(binding.modifiers, 'lazy') ? 'change' : 'input', modelKey, vnode, binding.modifiers);
	        }
	        break;
	
	      default:
	        throw new Error('"v-ons-model" directive cannot be used with "' + tag + '" element.');
	    }
	  },
	  update: function update(el, binding, vnode) {
	    var modelKey = binding.expression.trim();
	    var tag = el.tagName.toLowerCase();
	
	    switch (tag) {
	      case 'ons-select':
	        el.querySelectorAll('option').forEach(function (option) {
	          option.value == binding.value ? option.setAttribute('selected', 'selected') : option.removeAttribute('selected');
	        });
	        break;
	
	      case 'ons-switch':
	        el.checked = binding.value;
	        break;
	
	      case 'ons-range':
	        el.value = binding.value;
	        break;
	
	      case 'ons-input':
	        switch (el.type) {
	          case 'radio':
	            el.checked = vnode.context[modelKey] === el.value;
	            break;
	
	          case 'checkbox':
	            el.checked = (vnode.context[modelKey] || []).includes(el.value);
	            break;
	
	          default:
	            el.value = binding.value;
	        }
	        break;
	    }
	  }
	};

/***/ },
/* 136 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _addHandler = function _addHandler(binding, vnode, eventName) {
	  var modelKey = binding.expression.trim();
	  if (vnode.context.hasOwnProperty(modelKey)) {
	    vnode.child.$on('post' + eventName, function (event) {
	      vnode.context[modelKey] = eventName === 'open';
	    });
	  }
	};
	var _updateState = function _updateState(el, binding, vnode) {
	  if (binding.value !== el.isOpen) {
	    el[binding.value ? 'open' : 'close'].call(el, vnode.child.options);
	  }
	};
	
	exports.default = {
	  bind: function bind(el, binding, vnode) {
	    var tag = el.tagName.toLowerCase();
	    if (tag !== 'ons-splitter-side') {
	      throw new Error('"v-ons-open" directive cannot be used with "' + tag + '" element.');
	    }
	
	    _updateState(el, binding, vnode);
	
	    _addHandler(binding, vnode, 'open');
	    _addHandler(binding, vnode, 'close');
	  },
	  update: function update(el, binding, vnode) {
	    _updateState(el, binding, vnode);
	  }
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0ODcyNjIyZGEzYWI3Yzc2YTlmOCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZPbnNQb3BvdmVyLnZ1ZSIsIndlYnBhY2s6Ly8vVk9uc1BvcG92ZXIudnVlIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcm5hbC9taXhpbnMvYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcm5hbC9taXhpbnMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnRlcm5hbC9taXhpbnMvZGVyaXZlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJWdWVcIixcImNvbW1vbmpzXCI6XCJ2dWVcIixcImNvbW1vbmpzMlwiOlwidnVlXCIsXCJhbWRcIjpcInZ1ZVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJuYWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwib25zXCIsXCJjb21tb25qc1wiOlwib25zZW51aVwiLFwiY29tbW9uanMyXCI6XCJvbnNlbnVpXCIsXCJhbWRcIjpcIm9uc2VudWlcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVybmFsL29wdGlvbnNPYmplY3RIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb3duLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZPbnNQb3BvdmVyLnZ1ZT9jNGMzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZPbnNBbGVydERpYWxvZy52dWUiLCJ3ZWJwYWNrOi8vL1ZPbnNBbGVydERpYWxvZy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc0FsZXJ0RGlhbG9nLnZ1ZT8wNGVjIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZPbnNTcGVlZERpYWwudnVlIiwid2VicGFjazovLy9WT25zU3BlZWREaWFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WT25zU3BlZWREaWFsLnZ1ZT85ODdjIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZPbnNUYWIudnVlIiwid2VicGFjazovLy9WT25zVGFiLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZXJuYWwvbWl4aW5zL3BhZ2VMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvYXJyYXkvZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZPbnNUYWIudnVlP2NlNWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc1RhYmJhci52dWUiLCJ3ZWJwYWNrOi8vL1ZPbnNUYWJiYXIudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZPbnNUYWJiYXIudnVlP2UzOTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc05hdmlnYXRvci52dWUiLCJ3ZWJwYWNrOi8vL1ZPbnNOYXZpZ2F0b3IudnVlIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVk9uc05hdmlnYXRvci52dWU/NWM5ZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WR2VuZXJpYy52dWUiLCJ3ZWJwYWNrOi8vL1ZHZW5lcmljLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WR2VuZXJpYy52dWU/ZTkwMSIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlyZWN0aXZlcy9WT25zSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpcmVjdGl2ZXMvVk9uc01vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3RpdmVzL1ZPbnNPcGVuLmpzIl0sIm5hbWVzIjpbImNvbXBvbmVudHMiLCJkaXJlY3RpdmVzIiwicmVnaXN0ZXIiLCJWdWUiLCJ0eXBlIiwiaXRlbXMiLCJmb3JFYWNoIiwia2V5IiwidmFsdWUiLCJ1dGlsIiwiaHlwaGVuYXRlIiwiaW5zdGFsbCIsInBhcmFtcyIsIm1peGluIiwibWV0aG9kcyIsImdldENvbXBvbmVudCIsInF1ZXJ5Iiwic3RhcnRzV2l0aCIsIm5hbWUiLCJzbGljZSIsImNvbXBvbmVudCIsIl91dGlsIiwiZmluZFBhcmVudCIsIiRlbCIsIl9fdnVlX18iLCJjb21wdXRlZCIsInRhYmJhciIsIm5hdmlnYXRvciIsInNwbGl0dGVyIiwiYmVmb3JlTW91bnQiLCJjb3VudE9mT25zRWxlbWVudHMiLCJBcnJheSIsInByb3RvdHlwZSIsImNhbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmlsdGVyIiwiZWxlbWVudCIsInRlc3QiLCJ0YWdOYW1lIiwibGVuZ3RoIiwiY29uc29sZSIsImVycm9yIiwiJG5vdGlmaWNhdGlvbiIsIm5vdGlmaWNhdGlvbiIsIiRwbGF0Zm9ybSIsInBsYXRmb3JtIiwid2luZG93IiwidXNlIiwiZGVmYXVsdCIsImV4dGVuZCIsIm1peGlucyIsImV4dGVuZHMiLCJWT25zVG9vbGJhciIsIlZPbnNUb29sYmFyQnV0dG9uIiwiVk9uc0J1dHRvbiIsIlZPbnNJY29uIiwiVk9uc1N3aXRjaCIsIlZPbnNJbnB1dCIsIlZPbnNSYW5nZSIsIlZPbnNTZWxlY3QiLCJWT25zQm90dG9tVG9vbGJhciIsIlZPbnNTcGVlZERpYWxJdGVtIiwiVk9uc0xpc3QiLCJWT25zTGlzdEl0ZW0iLCJWT25zTGlzdEhlYWRlciIsIlZPbnNSaXBwbGUiLCJWT25zUm93IiwiVk9uc0NvbCIsIlZPbnNQcm9ncmVzc0JhciIsIlZPbnNQcm9ncmVzc0NpcmN1bGFyIiwiVk9uc1NwbGl0dGVyTWFzayIsIlZPbnNQdWxsSG9vayIsIlZPbnNDYXJvdXNlbEl0ZW0iLCJWT25zQ2Fyb3VzZWwiLCJWT25zUGFnZSIsIlZPbnNGYWIiLCJWT25zRGlhbG9nIiwiVk9uc01vZGFsIiwiVk9uc1NwbGl0dGVyIiwiVk9uc1NwbGl0dGVyQ29udGVudCIsIlZPbnNTcGxpdHRlclNpZGUiLCJWT25zQmFja0J1dHRvbiIsImRpYWxvZ0FQSSIsIm1vdW50ZWQiLCJfY2FuY2VsIiwiJGVtaXQiLCJmYWJBUEkiLCJ2aXNpYmlsaXR5VG9nZ2xlIiwicHJvcHMiLCJ2aXNpYmxlIiwiQm9vbGVhbiIsInVuZGVmaW5lZCIsIndhdGNoIiwibm9ybWFsaXplZE9wdGlvbnMiLCJvcHRpb25zIiwiJG5leHRUaWNrIiwiY2xpY2thYmxlIiwib25DbGljayIsIkZ1bmN0aW9uIiwiaGFzT3B0aW9ucyIsIk9iamVjdCIsImRlc3Ryb3lhYmxlIiwiYmVmb3JlRGVzdHJveSIsIl9kZXN0cm95IiwiZGVyaXZlRXZlbnRzIiwiYmVmb3JlQ3JlYXRlIiwiX2JvdW5kRXZlbnRzIiwiJG9wdGlvbnMiLCJfY29tcG9uZW50VGFnIiwiZXZlbnRzIiwicmVkdWNlIiwicmVzdWx0IiwiZXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRlcml2ZU1ldGhvZHMiLCJkZXJpdmVQcm9wZXJ0aWVzIiwiX3Byb3BlcnR5SGFuZGxlcnMiLCJkZXJpdmVkUHJvcGVydGllcyIsInByb3BlcnR5TmFtZSIsInB1c2giLCJhcmdzIiwiY2hhckF0IiwidG9Mb3dlckNhc2UiLCJzdHJpbmciLCJyZXBsYWNlIiwiY2FtZWxpemUiLCJtIiwibCIsInRvVXBwZXJDYXNlIiwiZ2V0Q2xhc3NGcm9tVGFnIiwiY2xhc3NOYW1lIiwiZXZlbnRUb0hhbmRsZXIiLCJfcmVzZXJ2ZWRQcm9wZXJ0aWVzIiwiX2JsYWNrTGlzdGVkUHJvcGVydGllcyIsIl9pc1Jlc2VydmVkIiwibWFwIiwidiIsImEiLCJiIiwiX2lzTWV0aG9kIiwicHJvcGVydHlEZXNjcmlwdG9yIiwiX3NjYW5Ob25SZXNlcnZlZFByb3BlcnRpZXMiLCJ0YXJnZXRDbGFzcyIsImNhbGxiYWNrIiwicHJvcGVydHlEZXNjcmlwdG9ycyIsImluY2x1ZGVzIiwiY3JlYXRlQ29tcHV0ZWRQcm9wZXJ0aWVzRm9yIiwiY2FjaGUiLCJnZXQiLCJzZXQiLCJuZXdWYWx1ZSIsImNyZWF0ZU1ldGhvZHNGb3IiLCJhcHBseSIsIl9nZXRQYXJlbnRWTSIsInBhcmVudCIsImhhc093blByb3BlcnR5IiwicGFyZW50RWxlbWVudCIsIl9pbmhlcml0UHJvcHMiLCJwYXJlbnRWbm9kZSIsIl9wYXJlbnRWbm9kZSIsInBhcmVudFByb3BzIiwiZGF0YSIsImF0dHJzIiwiY29tcG9uZW50T3B0aW9ucyIsInByb3BzRGF0YSIsImh5cGhlbktleSIsIlZ1ZVBhZ2VMb2FkZXIiLCJwYWdlIiwicGFnZUxvYWRlciIsImRvbmUiLCJFcnJvciIsIiRwYXJlbnQiLCIkbW91bnQiLCJhcHBlbmRDaGlsZCIsInBhZ2VFbGVtZW50IiwicmVtb3ZlIiwiJGRlc3Ryb3kiLCJWdWVUYWJMb2FkZXIiLCJjb250ZW50RWxlbWVudCIsIl9jb250ZW50RWxlbWVudCIsInRhYkluZGV4IiwiX2ZpbmRUYWJJbmRleCIsImNoaWxkcmVuIiwiX2lzVGFiYmFyIiwiZWwiLCJfZ2V0SW5kZXgiLCJ0YXJnZXQiLCJfZ2V0QWN0aXZlSW5kZXgiLCJfc2V0SW5pdGlhbEluZGV4IiwiYXR0ciIsImhhc0F0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImJpbmQiLCJiaW5kaW5nIiwidm5vZGUiLCJ0YWciLCJjb250ZXh0IiwiZXhwcmVzc2lvbiIsImNoaWxkIiwiJG9uIiwidXBkYXRlIiwidGFiIiwiX2dldFRhYkVsZW1lbnQiLCJzZXRBY3RpdmVUYWIiLCJzZXRBY3RpdmVJbmRleCIsIl9mb3JtYXRPdXRwdXQiLCJtb2RpZmllcnMiLCJvdXRwdXQiLCJOdW1iZXIiLCJ0cmltIiwiX2JpbmRPbiIsImV2ZW50TmFtZSIsIm1vZGVsS2V5IiwiaGFuZGxlciIsIl9iaW5kU2ltcGxlSW5wdXRPbiIsInByb3BOYW1lIiwiX2JpbmRNb2RpZmllcklucHV0T24iLCJfYmluZEFycmF5SW5wdXRPbiIsImNoZWNrZWQiLCJzcGxpY2UiLCJpbmRleE9mIiwicXVlcnlTZWxlY3RvciIsIm9wdGlvbiIsInJlbW92ZUF0dHJpYnV0ZSIsIl9hZGRIYW5kbGVyIiwiX3VwZGF0ZVN0YXRlIiwiaXNPcGVuIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7S0FBWUEsVTs7QUFDWjs7S0FBWUMsVTs7QUFFWjs7Ozs7Ozs7QUFFQSxLQUFNQyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQVlDLEtBQVosRUFBc0I7QUFDckMsdUJBQVlBLEtBQVosRUFBbUJDLE9BQW5CLENBQTJCLFVBQUNDLEdBQUQsRUFBUztBQUNsQyxTQUFNQyxRQUFRSCxNQUFNRSxHQUFOLENBQWQ7QUFDQUEsV0FBTUosSUFBSU0sSUFBSixDQUFTQyxTQUFULENBQW1CSCxHQUFuQixDQUFOO0FBQ0FKLFNBQUlDLElBQUosRUFBVUcsR0FBVixFQUFlQyxLQUFmO0FBQ0QsSUFKRDtBQUtELEVBTkQ7O0FBUUEsS0FBTUcsVUFBVSxT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RUFBNEIsT0FBNUI7QUFDRCxJQVhZO0FBYWJNLFNBYmEsa0JBYU5oQixFQWJNLEVBYUZTLE9BYkUsRUFhT0MsS0FiUCxFQWFjO0FBQ3pCK0Isa0JBQWF6QyxFQUFiLEVBQWlCUyxPQUFqQixFQUEwQkMsS0FBMUI7QUFDRDtBQWZZLEUiLCJmaWxlIjoidnVlLW9uc2VudWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJ2dWVcIiksIHJlcXVpcmUoXCJvbnNlbnVpXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiVnVlT25zZW5cIiwgW1widnVlXCIsIFwib25zZW51aVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJWdWVPbnNlblwiXSA9IGZhY3RvcnkocmVxdWlyZShcInZ1ZVwiKSwgcmVxdWlyZShcIm9uc2VudWlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlZ1ZU9uc2VuXCJdID0gZmFjdG9yeShyb290W1wiVnVlXCJdLCByb290W1wib25zXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNDlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81MV9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQ4NzI2MjJkYTNhYjdjNzZhOWY4IiwiaW1wb3J0ICogYXMgY29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0ICogYXMgZGlyZWN0aXZlcyBmcm9tICcuL2RpcmVjdGl2ZXMnO1xuXG5pbXBvcnQgb25zIGZyb20gJ29uc2VudWknO1xuXG5jb25zdCByZWdpc3RlciA9IChWdWUsIHR5cGUsIGl0ZW1zKSA9PiB7XG4gIE9iamVjdC5rZXlzKGl0ZW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGl0ZW1zW2tleV07XG4gICAga2V5ID0gVnVlLnV0aWwuaHlwaGVuYXRlKGtleSk7XG4gICAgVnVlW3R5cGVdKGtleSwgdmFsdWUpO1xuICB9KTtcbn07XG5cbmNvbnN0IGluc3RhbGwgPSAoVnVlLCBwYXJhbXMgPSB7fSkgPT4ge1xuICAvKipcbiAgICogUmVnaXN0ZXIgY29tcG9uZW50cyBvZiB2dWUtb25zZW51aS5cbiAgICovXG4gIHJlZ2lzdGVyKFZ1ZSwgJ2NvbXBvbmVudCcsIGNvbXBvbmVudHMpO1xuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBkaXJlY3RpdmVzIG9mIHZ1ZS1vbnNlbnVpLlxuICAgKi9cbiAgcmVnaXN0ZXIoVnVlLCAnZGlyZWN0aXZlJywgZGlyZWN0aXZlcyk7XG5cbiAgLyoqXG4gICAqIEFwcGx5IGEgbWl4aW4gZ2xvYmFsbHkgdG8gcHJldmVudCBvbnMtKiBlbGVtZW50c1xuICAgKiBmcm9tIGJlaW5nIGluY2x1ZGVkIGRpcmVjdGx5IGluIFZ1ZSBpbnN0YW5jZSB0ZW1wbGF0ZXMuXG4gICAqXG4gICAqIE5vdGU6IFRoaXMgYWZmZWN0cyBldmVyeSBWdWUgaW5zdGFuY2UuXG4gICAqL1xuICBWdWUubWl4aW4oe1xuICAgIG1ldGhvZHM6IHtcbiAgICAgIGdldENvbXBvbmVudChxdWVyeSkge1xuICAgICAgICBpZiAocXVlcnkuc3RhcnRzV2l0aCgndi0nKSkge1xuICAgICAgICAgIHF1ZXJ5ID0gbmFtZS5zbGljZSgyKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBvbnMuX3V0aWwuZmluZFBhcmVudCh0aGlzLiRlbCwgcXVlcnkpO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50ICYmIGNvbXBvbmVudC5fX3Z1ZV9fIHx8IG51bGw7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICB0YWJiYXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbXBvbmVudCgnb25zLXRhYmJhcicpO1xuICAgICAgfSxcbiAgICAgIG5hdmlnYXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29tcG9uZW50KCdvbnMtbmF2aWdhdG9yJyk7XG4gICAgICB9LFxuICAgICAgc3BsaXR0ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbXBvbmVudCgnb25zLXNwbGl0dGVyJyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGJlZm9yZU1vdW50KCkge1xuICAgICAgLy8gV2hlbiB0aGlzIGJlZm9yZU1vdW50IGhvb2sgaXMgY2FsbGVkLCB0aGlzLiRlbCBoYXMgbm90IHlldCByZXBsYWNlZCBieSBWdWUuXG4gICAgICAvLyBTbyB3ZSBjYW4gZGV0ZWN0IHdoZXRoZXIgb3Igbm90IGFueSBjdXN0b20gZWxlbWVudHMgZXhpc3QgaW4gdGhlIHRlbXBsYXRlIG9mIHRoZSBWdWUgaW5zdGFuY2UuXG4gICAgICBpZiAodGhpcy4kZWwpIHsgLy8gaWYgdm0uJG1vdW50IGlzIGNhbGxlZCB3aXRoIG5vIGFyZ3VtZW50cywgdGhpcy4kZWwgd2lsbCBiZSB1bmRlZmluZWRcbiAgICAgICAgLy8gY291bnQgb25zLSogZWxlbWVudHMgaW4gdGhpcy4kZWxcbiAgICAgICAgY29uc3QgY291bnRPZk9uc0VsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy4kZWwucXVlcnlTZWxlY3RvckFsbCgnKicpKS5maWx0ZXIoXG4gICAgICAgICAgKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAvXm9ucy0uKy9pLnRlc3QoZWxlbWVudC50YWdOYW1lKTsgLy8gTm90ZTogaW4gSFRNTCBkb2N1bWVudCwgRWxlbWVudCN0YWdOYW1lIHJldHVybnMgYSBjYXBpdGFsaXplZCB0YWcgbmFtZVxuICAgICAgICAgIH1cbiAgICAgICAgKS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGNvdW50T2ZPbnNFbGVtZW50cyA+IDApIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBbdnVlLW9uc2VudWldIFZ1ZSB0ZW1wbGF0ZXMgbXVzdCBub3QgY29udGFpbiBvbnMtKiBlbGVtZW50cyBkaXJlY3RseS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIEV4cG9zZSBub3RpZmljYXRpb24gbWV0aG9kcy5cbiAgICovXG4gIFZ1ZS5wcm90b3R5cGUuJG5vdGlmaWNhdGlvbiA9IG9ucy5ub3RpZmljYXRpb247XG5cbiAgLyoqXG4gICAqIEV4cG9zZSBwbGF0Zm9ybSBtZXRob2RzLlxuICAgKi9cbiAgVnVlLnByb3RvdHlwZS4kcGxhdGZvcm0gPSBvbnMucGxhdGZvcm07XG59O1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlZ1ZSkge1xuICB3aW5kb3cuVnVlLnVzZSh7aW5zdGFsbH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbnN0YWxsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmtleXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGtleXMgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB7IGRlZmF1bHQgYXMgVk9uc1BvcG92ZXIgfSBmcm9tICcuL1ZPbnNQb3BvdmVyLnZ1ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFZPbnNBbGVydERpYWxvZyB9IGZyb20gJy4vVk9uc0FsZXJ0RGlhbG9nLnZ1ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFZPbnNTcGVlZERpYWwgfSBmcm9tICcuL1ZPbnNTcGVlZERpYWwudnVlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVk9uc1RhYiB9IGZyb20gJy4vVk9uc1RhYi52dWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBWT25zVGFiYmFyIH0gZnJvbSAnLi9WT25zVGFiYmFyLnZ1ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFZPbnNOYXZpZ2F0b3IgfSBmcm9tICcuL1ZPbnNOYXZpZ2F0b3IudnVlJztcblxuLy8gR2VuZXJpYyBjb21wb25lbnRzXG5pbXBvcnQgVkdlbmVyaWMgZnJvbSAnLi9WR2VuZXJpYy52dWUnO1xuaW1wb3J0IHsgZGlhbG9nQVBJLCBmYWJBUEkgfSBmcm9tICcuLi9pbnRlcm5hbC9taXhpbnMvYXBpJztcbmltcG9ydCB7IFZ1ZVBhZ2VMb2FkZXIgfSBmcm9tICcuLi9pbnRlcm5hbC9taXhpbnMvcGFnZUxvYWRlcic7XG5pbXBvcnQgeyBjbGlja2FibGUsIGhhc09wdGlvbnMsIGRlc3Ryb3lhYmxlIH0gZnJvbSAnLi4vaW50ZXJuYWwvbWl4aW5zL2NvbW1vbic7XG5cbmNvbnN0IGV4dGVuZCA9IChjb21wb25lbnQsIG1peGlucyA9IFtdKSA9PiAoeyBuYW1lOiAndi1vbnMtJyArIGNvbXBvbmVudCwgbWl4aW5zLCBleHRlbmRzOiBWR2VuZXJpYyB9KTtcblxuZXhwb3J0IGNvbnN0IFZPbnNUb29sYmFyID0gZXh0ZW5kKCd0b29sYmFyJyk7XG5leHBvcnQgY29uc3QgVk9uc1Rvb2xiYXJCdXR0b24gPSBleHRlbmQoJ3Rvb2xiYXItYnV0dG9uJyk7XG5leHBvcnQgY29uc3QgVk9uc0J1dHRvbiA9IGV4dGVuZCgnYnV0dG9uJyk7XG5leHBvcnQgY29uc3QgVk9uc0ljb24gPSBleHRlbmQoJ2ljb24nKTtcbmV4cG9ydCBjb25zdCBWT25zU3dpdGNoID0gZXh0ZW5kKCdzd2l0Y2gnKTtcbmV4cG9ydCBjb25zdCBWT25zSW5wdXQgPSBleHRlbmQoJ2lucHV0Jyk7XG5leHBvcnQgY29uc3QgVk9uc1JhbmdlID0gZXh0ZW5kKCdyYW5nZScpO1xuZXhwb3J0IGNvbnN0IFZPbnNTZWxlY3QgPSBleHRlbmQoJ3NlbGVjdCcpO1xuZXhwb3J0IGNvbnN0IFZPbnNCb3R0b21Ub29sYmFyID0gZXh0ZW5kKCdib3R0b20tdG9vbGJhcicpO1xuZXhwb3J0IGNvbnN0IFZPbnNTcGVlZERpYWxJdGVtID0gZXh0ZW5kKCdzcGVlZC1kaWFsLWl0ZW0nKTtcbmV4cG9ydCBjb25zdCBWT25zTGlzdCA9IGV4dGVuZCgnbGlzdCcpO1xuZXhwb3J0IGNvbnN0IFZPbnNMaXN0SXRlbSA9IGV4dGVuZCgnbGlzdC1pdGVtJyk7XG5leHBvcnQgY29uc3QgVk9uc0xpc3RIZWFkZXIgPSBleHRlbmQoJ2xpc3QtaGVhZGVyJyk7XG5leHBvcnQgY29uc3QgVk9uc1JpcHBsZSA9IGV4dGVuZCgncmlwcGxlJyk7XG5leHBvcnQgY29uc3QgVk9uc1JvdyA9IGV4dGVuZCgncm93Jyk7XG5leHBvcnQgY29uc3QgVk9uc0NvbCA9IGV4dGVuZCgnY29sJyk7XG5leHBvcnQgY29uc3QgVk9uc1Byb2dyZXNzQmFyID0gZXh0ZW5kKCdwcm9ncmVzcy1iYXInKTtcbmV4cG9ydCBjb25zdCBWT25zUHJvZ3Jlc3NDaXJjdWxhciA9IGV4dGVuZCgncHJvZ3Jlc3MtY2lyY3VsYXInKTtcbmV4cG9ydCBjb25zdCBWT25zU3BsaXR0ZXJNYXNrID0gZXh0ZW5kKCdzcGxpdHRlci1tYXNrJyk7XG5leHBvcnQgY29uc3QgVk9uc1B1bGxIb29rID0gZXh0ZW5kKCdwdWxsLWhvb2snKTtcbmV4cG9ydCBjb25zdCBWT25zQ2Fyb3VzZWxJdGVtID0gZXh0ZW5kKCdjYXJvdXNlbC1pdGVtJyk7XG5leHBvcnQgY29uc3QgVk9uc0Nhcm91c2VsPSBleHRlbmQoJ2Nhcm91c2VsJywgW2hhc09wdGlvbnNdKTtcbmV4cG9ydCBjb25zdCBWT25zUGFnZSA9IGV4dGVuZCgncGFnZScsIFtkZXN0cm95YWJsZV0pO1xuZXhwb3J0IGNvbnN0IFZPbnNGYWIgPSBleHRlbmQoJ2ZhYicsIFtmYWJBUEldKTtcbmV4cG9ydCBjb25zdCBWT25zRGlhbG9nID0gZXh0ZW5kKCdkaWFsb2cnLCBbZGlhbG9nQVBJXSk7XG5leHBvcnQgY29uc3QgVk9uc01vZGFsID0gZXh0ZW5kKCdtb2RhbCcsIFtkaWFsb2dBUEldKTtcbmV4cG9ydCBjb25zdCBWT25zU3BsaXR0ZXIgPSBleHRlbmQoJ3NwbGl0dGVyJywgW2Rlc3Ryb3lhYmxlXSk7XG5leHBvcnQgY29uc3QgVk9uc1NwbGl0dGVyQ29udGVudCA9IGV4dGVuZCgnc3BsaXR0ZXItY29udGVudCcsIFtWdWVQYWdlTG9hZGVyLCBkZXN0cm95YWJsZV0pO1xuZXhwb3J0IGNvbnN0IFZPbnNTcGxpdHRlclNpZGUgPSBleHRlbmQoJ3NwbGl0dGVyLXNpZGUnLCBbVnVlUGFnZUxvYWRlciwgZGVzdHJveWFibGUsIGhhc09wdGlvbnNdKTtcbmV4cG9ydCBjb25zdCBWT25zQmFja0J1dHRvbiA9IGV4dGVuZCgnYmFjay1idXR0b24nLCBbY2xpY2thYmxlLCBoYXNPcHRpb25zXSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVk9uc1BvcG92ZXIudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi03NjMwODZkNyF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WT25zUG9wb3Zlci52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cblxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvVk9uc1BvcG92ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxvbnMtcG9wb3Zlcj5cbiAgICA8c2xvdD48L3Nsb3Q+XG4gIDwvb25zLXBvcG92ZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBkaWFsb2dBUEkgfSBmcm9tICcuLi9pbnRlcm5hbC9taXhpbnMvYXBpJztcbiAgaW1wb3J0IHsgZGVyaXZlRXZlbnRzLCBkZXJpdmVNZXRob2RzLCBkZXJpdmVQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vaW50ZXJuYWwvbWl4aW5zL2Rlcml2ZSc7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG1peGluczogW2RpYWxvZ0FQSSwgZGVyaXZlRXZlbnRzLCBkZXJpdmVNZXRob2RzLCBkZXJpdmVQcm9wZXJ0aWVzXSxcblxuICAgIHByb3BzOiB7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIGlmICh2YWx1ZS5faXNWdWUgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB2YWx1ZSBpbnN0YW5jZW9mIEV2ZW50IHx8IHZhbHVlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIG5vcm1hbGl6ZWRUYXJnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQgJiYgdGhpcy50YXJnZXQuX2lzVnVlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0LiRlbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQ7XG4gICAgICB9LFxuICAgICAgbm9ybWFsaXplZE9wdGlvbnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLm5vcm1hbGl6ZWRUYXJnZXQsXG4gICAgICAgICAgICAuLi50aGlzLm9wdGlvbnNcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnM7XG4gICAgICB9XG4gICAgfVxuICB9O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVk9uc1BvcG92ZXIudnVlPzQ4YTlmZjQ5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKTtcblxudmFyIF9hc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2Fzc2lnbjIuZGVmYXVsdCB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyB2aXNpYmlsaXR5VG9nZ2xlLCBjbGlja2FibGUsIGhhc09wdGlvbnMgfSBmcm9tICcuL2NvbW1vbic7XG5cbmNvbnN0IGRpYWxvZ0FQSSA9IHtcbiAgbWl4aW5zOiBbdmlzaWJpbGl0eVRvZ2dsZSwgaGFzT3B0aW9uc10sXG5cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLiRlbC5fY2FuY2VsID0gKCkgPT4ge1xuICAgICAgdGhpcy4kZW1pdCgnbWFzaycpO1xuICAgIH07XG4gIH1cbn07XG5cbmNvbnN0IGZhYkFQSSA9IHtcbiAgbWl4aW5zOiBbY2xpY2thYmxlLCB2aXNpYmlsaXR5VG9nZ2xlXVxufTtcblxuZXhwb3J0IHsgZGlhbG9nQVBJLCBmYWJBUEkgfTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ludGVybmFsL21peGlucy9hcGkuanMiLCJjb25zdCB2aXNpYmlsaXR5VG9nZ2xlID0ge1xuICBwcm9wczoge1xuICAgIHZpc2libGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB1bmRlZmluZWQgLy8gQXZvaWQgY2FzdGluZyB0byBmYWxzZVxuICAgIH1cbiAgfSxcblxuICB3YXRjaDoge1xuICAgIHZpc2libGU6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMudmlzaWJsZSAhPT0gdGhpcy4kZWwudmlzaWJsZSkge1xuICAgICAgICB0aGlzLiRlbFt0aGlzLnZpc2libGUgPyAnc2hvdycgOiAnaGlkZSddLmNhbGwodGhpcy4kZWwsIHRoaXMubm9ybWFsaXplZE9wdGlvbnMgfHwgdGhpcy5vcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7IC8vIEZBQiB0YWtlcyAxIGN5Y2xlIGluIHNob3dpbmdcbiAgICAgIGlmICh0eXBlb2YgdGhpcy52aXNpYmxlID09PSAnYm9vbGVhbicgJiYgdGhpcy52aXNpYmxlICE9PSB0aGlzLiRlbC52aXNpYmxlKSB7XG4gICAgICAgIHRoaXMuJGVsW3RoaXMudmlzaWJsZSA/ICdzaG93JyA6ICdoaWRlJ10uY2FsbCh0aGlzLiRlbCwgdGhpcy5ub3JtYWxpemVkT3B0aW9ucyB8fCB0aGlzLm9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBjbGlja2FibGUgPSB7XG4gIHByb3BzOiB7XG4gICAgb25DbGljazoge1xuICAgICAgdHlwZTogRnVuY3Rpb25cbiAgICB9XG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBvbkNsaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuJGVsLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2s7XG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy4kZWwub25DbGljayA9IHRoaXMub25DbGljaztcbiAgfVxufTtcblxuY29uc3QgaGFzT3B0aW9ucyA9IHtcbiAgcHJvcHM6IHtcbiAgICBvcHRpb25zOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZGVzdHJveWFibGUgPSB7XG4gIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuJGVsLl9kZXN0cm95IGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHRoaXMuJGVsLl9kZXN0cm95KCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgeyB2aXNpYmlsaXR5VG9nZ2xlLCBjbGlja2FibGUsIGhhc09wdGlvbnMsIGRlc3Ryb3lhYmxlIH07XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbnRlcm5hbC9taXhpbnMvY29tbW9uLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgaHlwaGVuYXRlLCBnZXRDbGFzc0Zyb21UYWcsIGV2ZW50VG9IYW5kbGVyIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgeyBjcmVhdGVNZXRob2RzRm9yLCBjcmVhdGVDb21wdXRlZFByb3BlcnRpZXNGb3IgfSBmcm9tICcuLi9vcHRpb25zT2JqZWN0SGVscGVyJztcblxuY29uc3QgZGVyaXZlRXZlbnRzID0ge1xuICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgdGhpcy5fYm91bmRFdmVudHMgPSBnZXRDbGFzc0Zyb21UYWcodGhpcy4kb3B0aW9ucy5fY29tcG9uZW50VGFnLnNsaWNlKDIpKS5ldmVudHMgfHwgWydjbGljayddO1xuICAgIHRoaXMuJG9wdGlvbnMubWV0aG9kcyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIHRoaXMuX2JvdW5kRXZlbnRzLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICAgICAgcmVzdWx0W2V2ZW50VG9IYW5kbGVyKGtleSldID0gZXZlbnQgPT4gdGhpcy4kZW1pdChrZXksIGV2ZW50KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0sIHt9KSxcbiAgICAgIHRoaXMuJG9wdGlvbnMubWV0aG9kc1xuICAgICk7XG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLl9ib3VuZEV2ZW50cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKGtleSwgdGhpc1tldmVudFRvSGFuZGxlcihrZXkpXSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICB0aGlzLl9ib3VuZEV2ZW50cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICB0aGlzLiRlbC5yZW1vdmVFdmVudExpc3RlbmVyKGtleSwgdGhpc1tldmVudFRvSGFuZGxlcihrZXkpXSk7XG4gICAgfSk7XG4gICAgdGhpcy5fYm91bmRFdmVudHMgPSBudWxsO1xuICB9XG59O1xuXG5jb25zdCBkZXJpdmVNZXRob2RzID0ge1xuICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgdGhpcy4kb3B0aW9ucy5tZXRob2RzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgY3JlYXRlTWV0aG9kc0ZvcihnZXRDbGFzc0Zyb21UYWcodGhpcy4kb3B0aW9ucy5fY29tcG9uZW50VGFnLnNsaWNlKDIpKSksXG4gICAgICB0aGlzLiRvcHRpb25zLm1ldGhvZHNcbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBkZXJpdmVQcm9wZXJ0aWVzID0ge1xuICBiZWZvcmVDcmVhdGUoKSB7XG4gICAgdGhpcy5fcHJvcGVydHlIYW5kbGVycyA9IFtdO1xuICAgIGxldCBkZXJpdmVkUHJvcGVydGllcyA9IGNyZWF0ZUNvbXB1dGVkUHJvcGVydGllc0ZvcihnZXRDbGFzc0Zyb21UYWcodGhpcy4kb3B0aW9ucy5fY29tcG9uZW50VGFnLnNsaWNlKDIpKSk7XG5cbiAgICBkZXJpdmVkUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKGRlcml2ZWRQcm9wZXJ0aWVzKS5yZWR1Y2UoKHJlc3VsdCwgcHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICBpZiAoL15vbltBLVpdLy50ZXN0KHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgdGhpcy5fcHJvcGVydHlIYW5kbGVycy5wdXNoKHByb3BlcnR5TmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRbcHJvcGVydHlOYW1lXSA9IGRlcml2ZWRQcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIHt9KTtcblxuICAgIHRoaXMuJG9wdGlvbnMuY29tcHV0ZWQgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBkZXJpdmVkUHJvcGVydGllcyxcbiAgICAgIHRoaXMuJG9wdGlvbnMuY29tcHV0ZWRcbiAgICApO1xuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5fcHJvcGVydHlIYW5kbGVycy5mb3JFYWNoKHByb3BlcnR5TmFtZSA9PiB7XG4gICAgICB0aGlzLiRlbFtwcm9wZXJ0eU5hbWVdID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHByb3BlcnR5TmFtZS5zbGljZSgyKTtcbiAgICAgICAgdGhpcy4kZW1pdChuYW1lLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgbmFtZS5zbGljZSgxKSwgLi4uYXJncyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgeyBkZXJpdmVFdmVudHMsIGRlcml2ZU1ldGhvZHMsIGRlcml2ZVByb3BlcnRpZXMgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbnRlcm5hbC9taXhpbnMvZGVyaXZlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzQ5X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiVnVlXCIsXCJjb21tb25qc1wiOlwidnVlXCIsXCJjb21tb25qczJcIjpcInZ1ZVwiLFwiYW1kXCI6XCJ2dWVcIn1cbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBvbnMgZnJvbSAnb25zZW51aSc7XG5cbmV4cG9ydCBjb25zdCBoeXBoZW5hdGUgPSBzdHJpbmcgPT4gc3RyaW5nLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG5cbmV4cG9ydCBjb25zdCBjYW1lbGl6ZSA9IHN0cmluZyA9PiBzdHJpbmcudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8tKFthLXpdKS9nLCAobSwgbCkgPT4gbC50b1VwcGVyQ2FzZSgpKTtcblxuZXhwb3J0IGNvbnN0IGdldENsYXNzRnJvbVRhZyA9IHRhZ05hbWUgPT4ge1xuICBjb25zdCBjbGFzc05hbWUgPSBjYW1lbGl6ZSh0YWdOYW1lLnNsaWNlKDMpKSArICdFbGVtZW50JztcbiAgcmV0dXJuIG9uc1tjbGFzc05hbWVdO1xufTtcblxuZXhwb3J0IGNvbnN0IGV2ZW50VG9IYW5kbGVyID0gbmFtZSA9PiAnX29uJyArIG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2ludGVybmFsL3V0aWwuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNTFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJvbnNcIixcImNvbW1vbmpzXCI6XCJvbnNlbnVpXCIsXCJjb21tb25qczJcIjpcIm9uc2VudWlcIixcImFtZFwiOlwib25zZW51aVwifVxuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBQcm9wZXJ0aWVzIHJlc2VydmVkIGJ5IEN1c3RvbSBFbGVtZW50cyB2MSBhbmQgT25zZW4gVUkgQ29yZS5cbiAqL1xuY29uc3QgX3Jlc2VydmVkUHJvcGVydGllcyA9IFtcbiAgL15fLiokLyxcbiAgL15pbml0JC8sIC8vIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIE9uc2VuIFVJIENvcmUgKGJ1dCBzdGlsbCBleGlzdHMgaW4gMi4wLjUpXG4gIC9eY29uc3RydWN0b3IkLyxcbiAgL15jb25uZWN0ZWRDYWxsYmFjayQvLFxuICAvXmRpc2Nvbm5lY3RlZENhbGxiYWNrJC8sXG4gIC9eYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrJC8sXG4gIC9eYWRvcHRlZENhbGxiYWNrJC8sXG5dO1xuXG5jb25zdCBfYmxhY2tMaXN0ZWRQcm9wZXJ0aWVzID0gW1xuICAncGFnZScsXG4gICdwYWdlTG9hZGVyJyxcbiAgJ3Zpc2libGUnLFxuICAnb3B0aW9ucycsXG5dO1xuXG4vKipcbiAqIENoZWNrIGlmIG9yIG5vdCB0aGUgcHJvcGVydHkgaXMgcmVzZXJ2ZWQuXG4gKi9cbmNvbnN0IF9pc1Jlc2VydmVkID0gKHByb3BlcnR5TmFtZSkgPT4ge1xuICByZXR1cm4gX3Jlc2VydmVkUHJvcGVydGllc1xuICAubWFwKCh2KSA9PiB2LnRlc3QocHJvcGVydHlOYW1lKSkgLy8gT3V0cHV0IGV4YW1wbGU6IFtmYWxzZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2VdXG4gIC5yZWR1Y2UoKGEsIGIpID0+IGEgfHwgYik7IC8vIE91dHB1dCBleGFtcGxlOiB0cnVlXG59O1xuXG4vKipcbiAqIENoZWNrIGlmIG9yIG5vdCB0aGUgcHJvcGVydHkgaXMgbWV0aG9kLlxuICovXG5jb25zdCBfaXNNZXRob2QgPSAocHJvcGVydHlEZXNjcmlwdG9yKSA9PiB7XG4gIHJldHVybiB0eXBlb2YgcHJvcGVydHlEZXNjcmlwdG9yLnZhbHVlICE9PSAndW5kZWZpbmVkJztcbn07XG5cbmNvbnN0IF9zY2FuTm9uUmVzZXJ2ZWRQcm9wZXJ0aWVzID0gKHRhcmdldENsYXNzLCBjYWxsYmFjaykgPT4ge1xuICAvLyBDYXV0aW9uOlxuICAvLyBUaGlzIHN0YXRlbWVudCBhc3N1bWVzIHRoYXRcbiAgLy8gZWFjaCBlbGVtZW50IGlzIGltcGxlbWVudGVkIGluIGp1c3Qgb25lIGNsYXNzLlxuICAvL1xuICAvLyBFdmVuIGlmIDxvbnMtZm9vPiBpcyBpbXBsZW1lbnRlZCBpbiBvbnMuRm9vRWxlbWVudCBhbmQgb25zLkJhckVsZW1lbnQsXG4gIC8vIHRoaXMgc3RhdGVtZW50IHdpbGwgaWdub3JlIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgZGVmaW5lZCBpbiBvbnMuQmFyRWxlbWVudC5cbiAgY29uc3QgcHJvcGVydHlEZXNjcmlwdG9ycyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHRhcmdldENsYXNzLnByb3RvdHlwZSk7XG5cbiAgT2JqZWN0LmtleXMocHJvcGVydHlEZXNjcmlwdG9ycykuZm9yRWFjaChcbiAgICAocHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICBpZiAoIV9pc1Jlc2VydmVkKHByb3BlcnR5TmFtZSkgJiYgIV9ibGFja0xpc3RlZFByb3BlcnRpZXMuaW5jbHVkZXMocHJvcGVydHlOYW1lKSkgeyAvLyBpZ25vcmUgcmVzZXJ2ZWQgIGFuZCBibGFjayBsaXN0ZWQgcHJvcGVydGllc1xuICAgICAgICBjYWxsYmFjayhwcm9wZXJ0eU5hbWUsIHByb3BlcnR5RGVzY3JpcHRvcnNbcHJvcGVydHlOYW1lXSk7XG4gICAgICB9XG4gICAgfVxuICApO1xufTtcblxuY29uc3QgY3JlYXRlQ29tcHV0ZWRQcm9wZXJ0aWVzRm9yID0gKHRhcmdldENsYXNzKSA9PiB7XG4gIGNvbnN0IGNvbXB1dGVkID0ge307XG5cbiAgX3NjYW5Ob25SZXNlcnZlZFByb3BlcnRpZXModGFyZ2V0Q2xhc3MsIChwcm9wZXJ0eU5hbWUsIHByb3BlcnR5RGVzY3JpcHRvcikgPT4ge1xuICAgIGlmICghX2lzTWV0aG9kKHByb3BlcnR5RGVzY3JpcHRvcikpIHtcbiAgICAgIC8vIElmIHRoZSBwcm9wZXJ0eSBpcyBub3QgYSBtZXRob2QsXG4gICAgICAvLyByZWdpc3RlciBhIGNvbXB1dGVkIHByb3BlcnR5XG4gICAgICAvLyB3aGljaCByZWxheSBzZXQvZ2V0IG9wZXJhdGlvbnMgdG8gaXRzIGNvcnJlc3BvbmRpbmcgcHJvcGVydHkgb2YgRE9NIGVsZW1lbnRcbiAgICAgIGNvbXB1dGVkW3Byb3BlcnR5TmFtZV0gPSB7XG4gICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgZ2V0KCkgeyByZXR1cm4gKHRoaXMuJGVsW3Byb3BlcnR5TmFtZV0gJiYgdGhpcy4kZWxbcHJvcGVydHlOYW1lXS5fX3Z1ZV9fKSB8fCB0aGlzLiRlbFtwcm9wZXJ0eU5hbWVdOyB9LFxuICAgICAgICBzZXQobmV3VmFsdWUpIHsgdGhpcy4kZWxbcHJvcGVydHlOYW1lXSA9IG5ld1ZhbHVlOyB9XG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvbXB1dGVkO1xufTtcblxuY29uc3QgY3JlYXRlTWV0aG9kc0ZvciA9ICh0YXJnZXRDbGFzcykgPT4ge1xuICBjb25zdCBtZXRob2RzID0ge307XG5cbiAgX3NjYW5Ob25SZXNlcnZlZFByb3BlcnRpZXModGFyZ2V0Q2xhc3MsIChwcm9wZXJ0eU5hbWUsIHByb3BlcnR5RGVzY3JpcHRvcikgPT4ge1xuICAgIGlmIChfaXNNZXRob2QocHJvcGVydHlEZXNjcmlwdG9yKSkge1xuICAgICAgLy8gSWYgdGhlIHByb3BlcnR5IGlzIGEgbWV0aG9kLFxuICAgICAgLy8gcmVnaXN0ZXIgYSBtZXRob2RcbiAgICAgIC8vIHdoaWNoIHJlbGF5IGZ1bmN0aW9uIGNhbGwgYW5kIGl0cyBhcmd1bWVudHMgdG8gaXRzIGNvcnJlc3BvbmRpbmcgbWV0aG9kIG9mIERPTSBlbGVtZW50XG4gICAgICBtZXRob2RzW3Byb3BlcnR5TmFtZV0gPSBmdW5jdGlvbiguLi5hcmdzKSB7IHJldHVybiB0aGlzLiRlbFtwcm9wZXJ0eU5hbWVdLmFwcGx5KHRoaXMuJGVsLCBhcmdzKTsgfTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuZXhwb3J0IHtjcmVhdGVDb21wdXRlZFByb3BlcnRpZXNGb3IsIGNyZWF0ZU1ldGhvZHNGb3IgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbnRlcm5hbC9vcHRpb25zT2JqZWN0SGVscGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JzXG52YXIgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIG93bktleXMgICAgICAgID0gcmVxdWlyZSgnLi9fb3duLWtleXMnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgZ09QRCAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpXG4gICwgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnM6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqZWN0KXtcbiAgICB2YXIgTyAgICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgICAsIGdldERlc2MgPSBnT1BELmZcbiAgICAgICwga2V5cyAgICA9IG93bktleXMoTylcbiAgICAgICwgcmVzdWx0ICA9IHt9XG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShrZXlzLmxlbmd0aCA+IGkpY3JlYXRlUHJvcGVydHkocmVzdWx0LCBrZXkgPSBrZXlzW2krK10sIGdldERlc2MoTywga2V5KSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xudmFyIGdPUE4gICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBSZWZsZWN0ICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlJlZmxlY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IFJlZmxlY3QgJiYgUmVmbGVjdC5vd25LZXlzIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpe1xuICB2YXIga2V5cyAgICAgICA9IGdPUE4uZihhbk9iamVjdChpdCkpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICByZXR1cm4gZ2V0U3ltYm9scyA/IGtleXMuY29uY2F0KGdldFN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb3duLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHBJRSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgZ09QRCAgICAgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKXtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKGhhcyhPLCBQKSlyZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGluZGV4LCB2YWx1ZSl7XG4gIGlmKGluZGV4IGluIG9iamVjdCkkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9jO1xuICByZXR1cm4gX2MoJ29ucy1wb3BvdmVyJywgW192bS5fdChcImRlZmF1bHRcIildLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNzYzMDg2ZDchLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1ZPbnNQb3BvdmVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVk9uc0FsZXJ0RGlhbG9nLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMWQwNjNkMTQhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVk9uc0FsZXJ0RGlhbG9nLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9WT25zQWxlcnREaWFsb2cudnVlXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxvbnMtYWxlcnQtZGlhbG9nPlxuICAgIDxkaXYgY2xhc3M9XCJhbGVydC1kaWFsb2ctdGl0bGVcIj5cbiAgICAgIDxzbG90IG5hbWU9XCJ0aXRsZVwiPnt7dGl0bGV9fTwvc2xvdD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYWxlcnQtZGlhbG9nLWNvbnRlbnRcIj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYWxlcnQtZGlhbG9nLWZvb3RlclwiPlxuICAgICAgPHNsb3QgbmFtZT1cImZvb3RlclwiPlxuICAgICAgICA8YnV0dG9uIHYtZm9yPVwiKGhhbmRsZXIsIGtleSkgaW4gZm9vdGVyXCIgY2xhc3M9XCJhbGVydC1kaWFsb2ctYnV0dG9uXCIgQGNsaWNrPVwiaGFuZGxlclwiPnt7a2V5fX08L2J1dHRvbj5cbiAgICAgIDwvc2xvdD5cbiAgICA8L2Rpdj5cbiAgPC9vbnMtYWxlcnQtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgZGlhbG9nQVBJIH0gZnJvbSAnLi4vaW50ZXJuYWwvbWl4aW5zL2FwaSc7XG4gIGltcG9ydCB7IGRlcml2ZUV2ZW50cywgZGVyaXZlTWV0aG9kcywgZGVyaXZlUHJvcGVydGllcyB9IGZyb20gJy4uL2ludGVybmFsL21peGlucy9kZXJpdmUnO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBtaXhpbnM6IFtkaWFsb2dBUEksIGRlcml2ZUV2ZW50cywgZGVyaXZlTWV0aG9kcywgZGVyaXZlUHJvcGVydGllc10sXG5cbiAgICBwcm9wczoge1xuICAgICAgdGl0bGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuICAgICAgZm9vdGVyOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoISh2YWx1ZVtidXR0b25zW2ldXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIF9hZGRCdXR0b25DbGFzc2VzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLiRzbG90cy5oYXNPd25Qcm9wZXJ0eSgnZm9vdGVyJykpIHJldHVybjtcbiAgICAgICAgdGhpcy4kc2xvdHMuZm9vdGVyLmZvckVhY2goZWwgPT4gZWwuZGF0YSAmJiAoZWwuZGF0YS5zdGF0aWNDbGFzcyA9IChlbC5kYXRhLnN0YXRpY0NsYXNzIHx8ICcnKSArICcgYWxlcnQtZGlhbG9nLWJ1dHRvbicpKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYmVmb3JlTW91bnQoKSB7XG4gICAgICB0aGlzLl9hZGRCdXR0b25DbGFzc2VzKCk7XG4gICAgfSxcblxuICAgIGJlZm9yZVVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuX2FkZEJ1dHRvbkNsYXNzZXMoKTtcbiAgICB9XG4gIH07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBWT25zQWxlcnREaWFsb2cudnVlPzQ4MmZmY2FlIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9jO1xuICByZXR1cm4gX2MoJ29ucy1hbGVydC1kaWFsb2cnLCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbGVydC1kaWFsb2ctdGl0bGVcIlxuICB9LCBbX3ZtLl90KFwidGl0bGVcIiwgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKV0sIDIpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0LWRpYWxvZy1jb250ZW50XCJcbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhbGVydC1kaWFsb2ctZm9vdGVyXCJcbiAgfSwgW192bS5fdChcImZvb3RlclwiLCBfdm0uX2woKF92bS5mb290ZXIpLCBmdW5jdGlvbihoYW5kbGVyLCBrZXkpIHtcbiAgICByZXR1cm4gX2MoJ2J1dHRvbicsIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0LWRpYWxvZy1idXR0b25cIixcbiAgICAgIG9uOiB7XG4gICAgICAgIFwiY2xpY2tcIjogaGFuZGxlclxuICAgICAgfVxuICAgIH0sIFtfdm0uX3YoX3ZtLl9zKGtleSkpXSlcbiAgfSkpXSwgMildKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMWQwNjNkMTQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1ZPbnNBbGVydERpYWxvZy52dWVcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZPbnNTcGVlZERpYWwudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zODFlNjUwOSF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WT25zU3BlZWREaWFsLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9WT25zU3BlZWREaWFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8b25zLXNwZWVkLWRpYWw+XG4gICAgPHNsb3Q+PC9zbG90PlxuICA8L29ucy1zcGVlZC1kaWFsPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgZGVyaXZlRXZlbnRzLCBkZXJpdmVNZXRob2RzLCBkZXJpdmVQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vaW50ZXJuYWwvbWl4aW5zL2Rlcml2ZSc7XG4gIGltcG9ydCB7IGZhYkFQSSB9IGZyb20gJy4uL2ludGVybmFsL21peGlucy9hcGknO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBtaXhpbnM6IFtkZXJpdmVFdmVudHMsIGRlcml2ZU1ldGhvZHMsIGRlcml2ZVByb3BlcnRpZXMsIGZhYkFQSV0sXG5cbiAgICBwcm9wczoge1xuICAgICAgb3Blbjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuXG4gICAgICB9XG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICBvcGVuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMub3BlbiAhPT0gdGhpcy4kZWwuaXNPcGVuKCkpIHtcbiAgICAgICAgICB0aGlzLiRlbFt0aGlzLm9wZW4gPyAnc2hvd0l0ZW1zJyA6ICdoaWRlSXRlbXMnXS5jYWxsKHRoaXMuJGVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5vcGVuICE9PSB0aGlzLiRlbC5pc09wZW4oKSkge1xuICAgICAgICAgIHRoaXMuJGVsW3RoaXMub3BlbiA/ICdzaG93SXRlbXMnIDogJ2hpZGVJdGVtcyddLmNhbGwodGhpcy4kZWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBWT25zU3BlZWREaWFsLnZ1ZT8xYmU4ZWQxYSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fYztcbiAgcmV0dXJuIF9jKCdvbnMtc3BlZWQtZGlhbCcsIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTM4MWU2NTA5IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9WT25zU3BlZWREaWFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVk9uc1RhYi52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTZiNDYwY2M3IXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1ZPbnNUYWIudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5cbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL1ZPbnNUYWIudnVlXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XG4gIDxvbnMtdGFiPlxuICA8L29ucy10YWI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBkZXJpdmVNZXRob2RzIH0gZnJvbSAnLi4vaW50ZXJuYWwvbWl4aW5zL2Rlcml2ZSc7XG4gIGltcG9ydCB7IFZ1ZVRhYkxvYWRlciB9IGZyb20gJy4uL2ludGVybmFsL21peGlucy9wYWdlTG9hZGVyJztcbiAgaW1wb3J0IHsgY2xpY2thYmxlIH0gZnJvbSAnLi4vaW50ZXJuYWwvbWl4aW5zL2NvbW1vbic7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG1peGluczogW2Rlcml2ZU1ldGhvZHMsIFZ1ZVRhYkxvYWRlciwgY2xpY2thYmxlXSxcblxuICAgIHByb3BzOiB7XG4gICAgICBhY3RpdmU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhblxuICAgICAgfVxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgYWN0aXZlKCkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLiRlbC5zZXRBY3RpdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLiRlbC5zZXRJbmFjdGl2ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy4kZWwuc2V0QXR0cmlidXRlKCdhY3RpdmUnLCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuPC9zY3JpcHQ+XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBWT25zVGFiLnZ1ZT85NDFhODhkOCIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCB7IFBhZ2VMb2FkZXIgfSBmcm9tICdvbnNlbnVpJztcbmltcG9ydCB7IGRlc3Ryb3lhYmxlIH0gZnJvbSAnLi9jb21tb24nO1xuaW1wb3J0IHsgaHlwaGVuYXRlIH0gZnJvbSAnLi4vdXRpbCc7XG5cbmNvbnN0IF9nZXRQYXJlbnRWTSA9IGVsZW1lbnQgPT4ge1xuICBsZXQgcGFyZW50ID0gZWxlbWVudDtcbiAgd2hpbGUgKCFwYXJlbnQuaGFzT3duUHJvcGVydHkoJ19fdnVlX18nKSkge1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xuICAgIGlmICghcGFyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHJldHVybiBwYXJlbnQuX192dWVfXztcbn07XG5cbmNvbnN0IF9pbmhlcml0UHJvcHMgPSB7XG4gIGJlZm9yZUNyZWF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuJG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3Byb3BzJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnRWbm9kZSA9IHRoaXMuJG9wdGlvbnMucGFyZW50LiRvcHRpb25zLl9wYXJlbnRWbm9kZTtcbiAgICBjb25zdCBwYXJlbnRQcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHBhcmVudFZub2RlLmRhdGEuYXR0cnMsIHBhcmVudFZub2RlLmNvbXBvbmVudE9wdGlvbnMucHJvcHNEYXRhKTtcbiAgICB0aGlzLiRvcHRpb25zLnByb3BzRGF0YSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLiRvcHRpb25zLnByb3BzKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IGh5cGhlbktleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgICByZXN1bHRba2V5XSA9IHt9O1xuICAgICAgICBpZiAocGFyZW50UHJvcHMuaGFzT3duUHJvcGVydHkoaHlwaGVuS2V5KSkge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gcGFyZW50UHJvcHNbaHlwaGVuS2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSwge30pLFxuICAgICAgdGhpcy4kb3B0aW9ucy5wcm9wc0RhdGEgfHwge30pO1xuICB9XG59O1xuXG5jb25zdCBWdWVQYWdlTG9hZGVyID0ge1xuICBtaXhpbnM6IFtkZXN0cm95YWJsZV0sXG5cbiAgcHJvcHM6IHtcbiAgICBwYWdlOiB7XG4gICAgICB0eXBlOiBPYmplY3RcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLiRlbC5wYWdlID0gdGhpcy5wYWdlIHx8IHRoaXMuJGVsLnBhZ2U7XG5cbiAgICB0aGlzLiRlbC5wYWdlTG9hZGVyID0gbmV3IFBhZ2VMb2FkZXIoXG4gICAgICAoe3BhZ2UsIHBhcmVudCwgcGFyYW1zID0ge319LCBkb25lKSA9PiB7XG4gICAgICAgIGlmICghcGFnZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUGFnZUxvYWRlcjogRXhwZWN0ZWQgYSBWT25zUGFnZSBDb21wb25lbnQgYnV0IGdvdCBcIiR7cGFnZX1cIiBmb3IgXCIke3BhcmVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCl9XCJgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYWdlLmhhc093blByb3BlcnR5KCdfaXNWdWUnKSkge1xuICAgICAgICAgIHBhZ2UuJHBhcmVudCA9IHBhZ2UuJHBhcmVudCB8fCBfZ2V0UGFyZW50Vk0ocGFyZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYWdlID0gbmV3IFZ1ZSh7XG4gICAgICAgICAgICBwYXJlbnQ6IF9nZXRQYXJlbnRWTShwYXJlbnQpLFxuICAgICAgICAgICAgLi4ucGFnZSxcbiAgICAgICAgICAgIG1peGluczogWy4uLihwYWdlLm1peGlucyB8fCBbXSksIF9pbmhlcml0UHJvcHNdLFxuICAgICAgICAgICAgY29tcHV0ZWQ6IHsgLi4uKHBhZ2UuY29tcHV0ZWQgfHwge30pLCBkYXRhOiAoKSA9PiBwYXJhbXMgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFnZS4kbW91bnQoKTtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHBhZ2UuJGVsKTtcbiAgICAgICAgZG9uZShwYWdlLiRlbCk7XG4gICAgICB9LFxuICAgICAgKHBhZ2VFbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChwYWdlRWxlbWVudC5fZGVzdHJveSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgcGFnZUVsZW1lbnQuX2Rlc3Ryb3koKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYWdlRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBwYWdlRWxlbWVudC5fX3Z1ZV9fICYmIHBhZ2VFbGVtZW50Ll9fdnVlX18uJGRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG59O1xuXG5jb25zdCBWdWVUYWJMb2FkZXIgPSB7XG4gIG1peGluczogW1Z1ZVBhZ2VMb2FkZXJdLFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgaWYgKHRoaXMucGFnZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjb250ZW50RWxlbWVudCA9IHRoaXMuJHBhcmVudC4kZWwuX2NvbnRlbnRFbGVtZW50O1xuICAgICAgY29uc3QgdGFiSW5kZXggPSB0aGlzLiRlbC5fZmluZFRhYkluZGV4KCk7XG4gICAgICBpZiAoY29udGVudEVsZW1lbnQgJiYgY29udGVudEVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoIC0gMSA+PSB0YWJJbmRleCkge1xuICAgICAgICB0aGlzLiRlbC5wYWdlID0gY29udGVudEVsZW1lbnQuY2hpbGRyZW5bdGFiSW5kZXhdLl9fdnVlX187XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgeyBWdWVQYWdlTG9hZGVyLCBWdWVUYWJMb2FkZXIgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbnRlcm5hbC9taXhpbnMvcGFnZUxvYWRlci5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Zyb20gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9hcnJheS9mcm9tXCIpO1xuXG52YXIgX2Zyb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFycjJbaV0gPSBhcnJbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICgwLCBfZnJvbTIuZGVmYXVsdCkoYXJyKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvYXJyYXkvZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5mcm9tO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBjYWxsICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCB0b0xlbmd0aCAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKVxuICAsIGdldEl0ZXJGbiAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcbiAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgQyAgICAgICA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXlcbiAgICAgICwgYUxlbiAgICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgICwgbWFwZm4gICA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAsIGluZGV4ICAgPSAwXG4gICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcbiAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmKG1hcHBpbmcpbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSl7XG4gICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEM7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX2M7XG4gIHJldHVybiBfYygnb25zLXRhYicpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02YjQ2MGNjNyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvVk9uc1RhYi52dWVcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZPbnNUYWJiYXIudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0yNzc1YjA5YyF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WT25zVGFiYmFyLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9WT25zVGFiYmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8b25zLXRhYmJhcj5cbiAgICA8ZGl2IGNsYXNzPVwidGFiLWJhcl9fY29udGVudFwiPlxuICAgICAgPHNsb3QgbmFtZT1cInBhZ2VzXCI+PC9zbG90PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0YWItYmFyXCI+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG4gIDwvb25zLXRhYmJhcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGRlcml2ZUV2ZW50cywgZGVyaXZlTWV0aG9kcywgZGVyaXZlUHJvcGVydGllcyB9IGZyb20gJy4uL2ludGVybmFsL21peGlucy9kZXJpdmUnO1xuICBpbXBvcnQgeyBoYXNPcHRpb25zLCB2aXNpYmlsaXR5VG9nZ2xlIH0gZnJvbSAnLi4vaW50ZXJuYWwvbWl4aW5zL2NvbW1vbic7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG1peGluczogW2Rlcml2ZUV2ZW50cywgZGVyaXZlTWV0aG9kcywgZGVyaXZlUHJvcGVydGllcywgaGFzT3B0aW9ucywgdmlzaWJpbGl0eVRvZ2dsZV1cbiAgfTtcbjwvc2NyaXB0PlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVk9uc1RhYmJhci52dWU/NzJhZTM1NmUiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX2M7XG4gIHJldHVybiBfYygnb25zLXRhYmJhcicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRhYi1iYXJfX2NvbnRlbnRcIlxuICB9LCBbX3ZtLl90KFwicGFnZXNcIildLCAyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0YWItYmFyXCJcbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yNzc1YjA5YyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvVk9uc1RhYmJhci52dWVcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0ge31cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1ZPbnNOYXZpZ2F0b3IudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1hMDJlZTllZSF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WT25zTmF2aWdhdG9yLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9WT25zTmF2aWdhdG9yLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8b25zLW5hdmlnYXRvcj5cbiAgICA8c2xvdD48L3Nsb3Q+XG4gIDwvb25zLW5hdmlnYXRvcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGRlcml2ZUV2ZW50cywgZGVyaXZlTWV0aG9kcywgZGVyaXZlUHJvcGVydGllcyB9IGZyb20gJy4uL2ludGVybmFsL21peGlucy9kZXJpdmUnO1xuICBpbXBvcnQgeyBWdWVQYWdlTG9hZGVyIH0gZnJvbSAnLi4vaW50ZXJuYWwvbWl4aW5zL3BhZ2VMb2FkZXInO1xuICBpbXBvcnQgeyBkZXN0cm95YWJsZSwgaGFzT3B0aW9ucyB9IGZyb20gJy4uL2ludGVybmFsL21peGlucy9jb21tb24nO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBtaXhpbnM6IFtkZXJpdmVFdmVudHMsIGRlcml2ZU1ldGhvZHMsIGRlcml2ZVByb3BlcnRpZXMsIFZ1ZVBhZ2VMb2FkZXIsIGRlc3Ryb3lhYmxlLCBoYXNPcHRpb25zXSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGlzUmVhZHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KCdfcmVhZHknKSAmJiB0aGlzLl9yZWFkeSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5fcmVhZHk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfSxcbiAgICAgIF9zZXRQYWdlc1Zpc2liaWxpdHkoc3RhcnQsIGVuZCwgdmlzaWJpbGl0eSkge1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQgLSAxOyBpKyspIHtcbiAgICAgICAgICB0aGlzLiRjaGlsZHJlbltpXS4kZWwuc3R5bGUudmlzaWJpbGl0eSA9IHZpc2liaWxpdHk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfcmVhdHRhY2hQYWdlKHBhZ2VFbGVtZW50LCBwb3NpdGlvbiA9IG51bGwpIHtcbiAgICAgICAgdGhpcy4kZWwuaW5zZXJ0QmVmb3JlKHBhZ2VFbGVtZW50LCBwb3NpdGlvbik7XG4gICAgICAgIHBhZ2VFbGVtZW50Ll9pc1Nob3duID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICBfcmVkZXRhY2hQYWdlKHBhZ2VFbGVtZW50KSB7XG4gICAgICAgIHBhZ2VFbGVtZW50Ll9kZXN0cm95KCk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIH0sXG4gICAgICBfYW5pbWF0ZSh7IGxhc3RMZW5ndGgsIGN1cnJlbnRMZW5ndGgsIGxhc3RUb3BQYWdlLCBjdXJyZW50VG9wUGFnZX0pIHtcblxuICAgICAgICAvLyBQdXNoXG4gICAgICAgIGlmIChjdXJyZW50TGVuZ3RoID4gbGFzdExlbmd0aCkge1xuICAgICAgICAgIGxldCBpc1JlYXR0YWNoZWQgPSBmYWxzZTtcbiAgICAgICAgICBpZiAobGFzdFRvcFBhZ2UucGFyZW50RWxlbWVudCAhPT0gdGhpcy4kZWwpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlYXR0YWNoUGFnZShsYXN0VG9wUGFnZSwgdGhpcy4kZWwuY2hpbGRyZW5bbGFzdExlbmd0aCAtIDFdKTtcbiAgICAgICAgICAgIGlzUmVhdHRhY2hlZCA9IHRydWU7XG4gICAgICAgICAgICBsYXN0TGVuZ3RoLS07XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX3NldFBhZ2VzVmlzaWJpbGl0eShsYXN0TGVuZ3RoLCBjdXJyZW50TGVuZ3RoLCAnaGlkZGVuJyk7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy4kZWwuX3B1c2hQYWdlKHsgLi4udGhpcy5vcHRpb25zLCBsZWF2ZVBhZ2U6IGxhc3RUb3BQYWdlIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX3NldFBhZ2VzVmlzaWJpbGl0eShsYXN0TGVuZ3RoLCBjdXJyZW50TGVuZ3RoLCAnJyk7XG4gICAgICAgICAgICAgIGlmIChpc1JlYXR0YWNoZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWRldGFjaFBhZ2UobGFzdFRvcFBhZ2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBvcFxuICAgICAgICBpZiAoY3VycmVudExlbmd0aCA8IGxhc3RMZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLl9yZWF0dGFjaFBhZ2UobGFzdFRvcFBhZ2UsIG51bGwpO1xuICAgICAgICAgIHJldHVybiB0aGlzLiRlbC5fcG9wUGFnZSh0aGlzLm9wdGlvbnMsICgpID0+IHRoaXMuX3JlZGV0YWNoUGFnZShsYXN0VG9wUGFnZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVwbGFjZSBwYWdlXG4gICAgICAgIHRoaXMuX3JlYXR0YWNoUGFnZShsYXN0VG9wUGFnZSwgY3VycmVudFRvcFBhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy4kZWwuX3B1c2hQYWdlKHRoaXMub3B0aW9ucykudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fcmVkZXRhY2hQYWdlKGxhc3RUb3BQYWdlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGJlZm9yZVVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuX2xhc3RMZW5ndGggPSB0aGlzLiRjaGlsZHJlbi5sZW5ndGg7XG4gICAgICB0aGlzLl9sYXN0VG9wUGFnZSA9IHRoaXMuJGNoaWxkcmVuW3RoaXMuJGNoaWxkcmVuLmxlbmd0aCAtIDFdO1xuICAgIH0sXG5cbiAgICB1cGRhdGVkKCkge1xuICAgICAgY29uc3QgbGFzdExlbmd0aCA9IHRoaXMuX2xhc3RMZW5ndGg7XG4gICAgICBjb25zdCBjdXJyZW50TGVuZ3RoID0gdGhpcy4kY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgY29uc3QgbGFzdFRvcFBhZ2UgPSB0aGlzLl9sYXN0VG9wUGFnZS4kZWw7XG4gICAgICBjb25zdCBjdXJyZW50VG9wUGFnZSA9IHRoaXMuJGNoaWxkcmVuW2N1cnJlbnRMZW5ndGggLSAxXS4kZWw7XG5cbiAgICAgIC8vIFRPRE8gY2hlY2sgcGVyZm9ybWFuY2UgYW5kIG1lbW9yeSBsZWFrc1xuXG4gICAgICBpZiAoY3VycmVudFRvcFBhZ2UgIT09IGxhc3RUb3BQYWdlKSB7XG4gICAgICAgIHRoaXMuX3JlYWR5ID0gdGhpcy5fYW5pbWF0ZSh7IGxhc3RMZW5ndGgsIGN1cnJlbnRMZW5ndGgsIGxhc3RUb3BQYWdlLCBjdXJyZW50VG9wUGFnZX0pO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50TGVuZ3RoICE9PSBsYXN0TGVuZ3RoKSB7XG4gICAgICAgIGN1cnJlbnRUb3BQYWdlLnVwZGF0ZUJhY2tCdXR0b24oY3VycmVudExlbmd0aCA+IDEpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9sYXN0VG9wUGFnZSA9IG51bGw7XG4gICAgfVxuICB9O1xuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVk9uc05hdmlnYXRvci52dWU/N2MxYmEyZjciLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBNRVRBICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVlcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBzaGFyZWQgICAgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIHdrcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIHdrc0RlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpXG4gICwga2V5T2YgICAgICAgICAgPSByZXF1aXJlKCcuL19rZXlvZicpXG4gICwgZW51bUtleXMgICAgICAgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKVxuICAsIGlzQXJyYXkgICAgICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIF9jcmVhdGUgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZ09QTkV4dCAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKVxuICAsICRHT1BEICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsICREUCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCAka2V5cyAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BEICAgICAgICAgICA9ICRHT1BELmZcbiAgLCBkUCAgICAgICAgICAgICA9ICREUC5mXG4gICwgZ09QTiAgICAgICAgICAgPSBnT1BORXh0LmZcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBQUk9UT1RZUEUgICAgICA9ICdwcm90b3R5cGUnXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIFRPX1BSSU1JVElWRSAgID0gd2tzKCd0b1ByaW1pdGl2ZScpXG4gICwgaXNFbnVtICAgICAgICAgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCBPUFN5bWJvbHMgICAgICA9IHNoYXJlZCgnb3Atc3ltYm9scycpXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3RbUFJPVE9UWVBFXVxuICAsIFVTRV9OQVRJVkUgICAgID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJ1xuICAsIFFPYmplY3QgICAgICAgID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBkUCh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKWRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90bykkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZihoYXMoQWxsU3ltYm9scywga2V5KSl7XG4gICAgaWYoIUQuZW51bWVyYWJsZSl7XG4gICAgICBpZighaGFzKGl0LCBISURERU4pKWRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICBpdCAgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdPUE4odG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuICB2YXIgSVNfT1AgID0gaXQgPT09IE9iamVjdFByb3RvXG4gICAgLCBuYW1lcyAgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmKCFVU0VfTkFUSVZFKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8pJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmKERFU0NSSVBUT1JTICYmIHNldHRlcilzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mICAgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH1cbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1N5bWJvbDogJFN5bWJvbH0pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrcyhzeW1ib2xzW2krK10pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzRGVmaW5lKHN5bWJvbHNbaSsrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgaWYoaXNTeW1ib2woa2V5KSlyZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gICAgdGhyb3cgVHlwZUVycm9yKGtleSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuICAgIGlmKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKXJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIHZhciBhcmdzID0gW2l0XVxuICAgICAgLCBpICAgID0gMVxuICAgICAgLCByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICAgIGlmKCRyZXBsYWNlcil2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE1FVEEgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKVxuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBoYXMgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgc2V0RGVzYyAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaWQgICAgICAgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24oaXQpe1xuICBzZXREZXNjKGl0LCBNRVRBLCB7dmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9fSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKXNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiAgICAgIE1FVEEsXG4gIE5FRUQ6ICAgICBmYWxzZSxcbiAgZmFzdEtleTogIGZhc3RLZXksXG4gIGdldFdlYWs6ICBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZihuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKWRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHt2YWx1ZTogd2tzRXh0LmYobmFtZSl9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldEtleXMgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgZWwpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGtleXMgICA9IGdldEtleXMoTylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKGxlbmd0aCA+IGluZGV4KWlmKE9ba2V5ID0ga2V5c1tpbmRleCsrXV0gPT09IGVsKXJldHVybiBrZXk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanNcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciByZXN1bHQgICAgID0gZ2V0S2V5cyhpdClcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmKGdldFN5bWJvbHMpe1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdClcbiAgICAgICwgaXNFbnVtICA9IHBJRS5mXG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShzeW1ib2xzLmxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpe1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BOICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjbGFzc29mICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCAkZXhwb3J0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGlzT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgdGFzayAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIG1pY3JvdGFzayAgICAgICAgICA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKClcbiAgLCBQUk9NSVNFICAgICAgICAgICAgPSAnUHJvbWlzZSdcbiAgLCBUeXBlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCAkUHJvbWlzZSAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgICAgICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgZW1wdHkgICAgICAgICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIEludGVybmFsLCBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlICAgICA9ICRQcm9taXNlLnJlc29sdmUoMSlcbiAgICAgICwgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uKGV4ZWMpeyBleGVjKGVtcHR5LCBlbXB0eSk7IH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgPyBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICA6IG5ldyBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3Qpe1xuICAgIGlmKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ICA9IGFGdW5jdGlvbihyZWplY3QpO1xufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHByb21pc2UsIGlzUmVqZWN0KXtcbiAgaWYocHJvbWlzZS5fbilyZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIG9rICAgID0gcHJvbWlzZS5fcyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIGRvbWFpbiAgPSByZWFjdGlvbi5kb21haW5cbiAgICAgICAgLCByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZihoYW5kbGVyKXtcbiAgICAgICAgICBpZighb2spe1xuICAgICAgICAgICAgaWYocHJvbWlzZS5faCA9PSAyKW9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGhhbmRsZXIgPT09IHRydWUpcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdCAmJiAhcHJvbWlzZS5faClvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBhYnJ1cHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmKGFicnVwdCl0aHJvdyBhYnJ1cHQuZXJyb3I7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICBpZihwcm9taXNlLl9oID09IDEpcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2NcbiAgICAsIGkgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZihyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlyZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYoaXNOb2RlKXtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCl7XG4gICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3Z9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmKCFwcm9taXNlLl9hKXByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihwcm9taXNlID09PSB2YWx1ZSl0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge193OiBwcm9taXNlLCBfZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG4gICAgICB2YXIgcmVhY3Rpb24gICAgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rICAgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCAgID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fYSl0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fcylub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvbWlzZSAgPSBuZXcgSW50ZXJuYWw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ICA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6ICRQcm9taXNlfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZWplY3QgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpcmV0dXJuIHg7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmFsdWVzICAgID0gW11cbiAgICAgICAgLCBpbmRleCAgICAgPSAwXG4gICAgICAgICwgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIHZhciAkaW5kZXggICAgICAgID0gaW5kZXgrK1xuICAgICAgICAgICwgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIFNQRUNJRVMgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ludm9rZScpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faHRtbCcpXG4gICwgY2VsICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6ICAgc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanNcbi8vIG1vZHVsZSBpZCA9IDEyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgT2JzZXJ2ZXIgID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcbiAgLCBwcm9jZXNzICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIFByb21pc2UgICA9IGdsb2JhbC5Qcm9taXNlXG4gICwgaXNOb2RlICAgID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZihpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSlwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlKGhlYWQpe1xuICAgICAgZm4gICA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIGlmKGhlYWQpbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYocGFyZW50KXBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYoaXNOb2RlKXtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZihPYnNlcnZlcil7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWVcbiAgICAgICwgbm9kZSAgID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZihQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSl7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oZm4pe1xuICAgIHZhciB0YXNrID0ge2ZuOiBmbiwgbmV4dDogdW5kZWZpbmVkfTtcbiAgICBpZihsYXN0KWxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYoIWhlYWQpe1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYyl7XG4gICAgaWYoc2FmZSAmJiB0YXJnZXRba2V5XSl0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSlkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuLy8gbW9kdWxlIGlkID0gMTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fYztcbiAgcmV0dXJuIF9jKCdvbnMtbmF2aWdhdG9yJywgW192bS5fdChcImRlZmF1bHRcIildLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtYTAyZWU5ZWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL1ZPbnNOYXZpZ2F0b3IudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSB7fVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVkdlbmVyaWMudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi01MjY0ZDA4MSF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WR2VuZXJpYy52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cblxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvVkdlbmVyaWMudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxuICA8ZGl2IDppcz1cIiRvcHRpb25zLl9jb21wb25lbnRUYWcuc2xpY2UoMilcIj5cbiAgICA8c2xvdD48L3Nsb3Q+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgZGVyaXZlRXZlbnRzLCBkZXJpdmVNZXRob2RzLCBkZXJpdmVQcm9wZXJ0aWVzIH0gZnJvbSAnLi4vaW50ZXJuYWwvbWl4aW5zL2Rlcml2ZSc7XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBtaXhpbnM6IFtkZXJpdmVFdmVudHMsIGRlcml2ZU1ldGhvZHMsIGRlcml2ZVByb3BlcnRpZXNdXG4gIH07XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBWR2VuZXJpYy52dWU/ODAzMGI1OWMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX2M7XG4gIHJldHVybiBfYyhfdm0uJG9wdGlvbnMuX2NvbXBvbmVudFRhZy5zbGljZSgyKSwge1xuICAgIHRhZzogXCJkaXZcIlxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi01MjY0ZDA4MSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvVkdlbmVyaWMudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBPbnNJbmRleCB9IGZyb20gJy4vVk9uc0luZGV4JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgT25zTW9kZWwgfSBmcm9tICcuL1ZPbnNNb2RlbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE9uc09wZW4gfSBmcm9tICcuL1ZPbnNPcGVuJztcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RpcmVjdGl2ZXMvaW5kZXguanMiLCJjb25zdCBfaXNUYWJiYXIgPSBlbCA9PiBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdvbnMtdGFiYmFyJztcbmNvbnN0IF9nZXRJbmRleCA9IGV2ZW50ID0+IGV2ZW50W19pc1RhYmJhcihldmVudC50YXJnZXQpID8gJ2luZGV4JyA6ICdhY3RpdmVJbmRleCddO1xuY29uc3QgX2dldEFjdGl2ZUluZGV4ID0gZWwgPT4gZWxbX2lzVGFiYmFyKGVsKSA/ICdnZXRBY3RpdmVUYWJJbmRleCcgOiAnZ2V0QWN0aXZlSW5kZXgnXSgpO1xuY29uc3QgX3NldEluaXRpYWxJbmRleCA9IChlbCwgdmFsdWUpID0+IHtcbiAgY29uc3QgYXR0ciA9IF9pc1RhYmJhcihlbCkgPyAnYWN0aXZlSW5kZXgnIDogJ2luaXRpYWwtaW5kZXgnO1xuICBpZiAoIWVsLmhhc0F0dHJpYnV0ZShhdHRyKSkge1xuICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7XG4gIH1cbn07XG5cbi8vIFZPbnNJbmRleCBkaXJlY3RpdmVcbmV4cG9ydCBkZWZhdWx0IHtcbiAgYmluZChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICBpZiAoIVsnb25zLXRhYmJhcicsICdvbnMtY2Fyb3VzZWwnXS5pbmNsdWRlcyhlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1widi1vbnMtaW5kZXhcIiBkaXJlY3RpdmUgY2Fubm90IGJlIHVzZWQgd2l0aCBcIicgKyB0YWcgKyAnXCIgZWxlbWVudC4nKTtcbiAgICB9XG5cbiAgICBfc2V0SW5pdGlhbEluZGV4KGVsLCBiaW5kaW5nLnZhbHVlKTtcblxuICAgIGlmICh2bm9kZS5jb250ZXh0Lmhhc093blByb3BlcnR5KGJpbmRpbmcuZXhwcmVzc2lvbikpIHtcbiAgICAgIHZub2RlLmNoaWxkLiRvbigncG9zdGNoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgdm5vZGUuY29udGV4dFtiaW5kaW5nLmV4cHJlc3Npb25dID0gX2dldEluZGV4KGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICB1cGRhdGUoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgaWYgKGJpbmRpbmcudmFsdWUgIT09IF9nZXRBY3RpdmVJbmRleChlbCkpIHtcbiAgICAgIGlmIChfaXNUYWJiYXIoZWwpKSB7XG4gICAgICAgIGxldCB0YWIgPSBlbC5fZ2V0VGFiRWxlbWVudChiaW5kaW5nLnZhbHVlKTtcbiAgICAgICAgaWYgKHRhYiAmJiB0YWIub25DbGljayBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgdGFiLm9uQ2xpY2soKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbC5zZXRBY3RpdmVUYWIoYmluZGluZy52YWx1ZSwgdm5vZGUuY2hpbGQub3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgdGFiID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnNldEFjdGl2ZUluZGV4KGJpbmRpbmcudmFsdWUsIHZub2RlLmNoaWxkLm9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaXJlY3RpdmVzL1ZPbnNJbmRleC5qcyIsImNvbnN0IF9mb3JtYXRPdXRwdXQgPSAobW9kaWZpZXJzID0ge30sIG91dHB1dCkgPT4ge1xuICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kaWZpZXJzLCAnbnVtYmVyJykpIHtcbiAgICByZXR1cm4gTnVtYmVyKG91dHB1dCk7XG4gIH1cbiAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZGlmaWVycywgJ3RyaW0nKSkge1xuICAgIHJldHVybiBvdXRwdXQudHJpbSgpO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59O1xuY29uc3QgX2JpbmRPbiA9IChldmVudE5hbWUsIG1vZGVsS2V5LCB2bm9kZSwgaGFuZGxlcikgPT4ge1xuICBpZiAodm5vZGUuY29udGV4dC5oYXNPd25Qcm9wZXJ0eShtb2RlbEtleSkpIHtcbiAgICB2bm9kZS5jaGlsZC4kb24oZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgfVxufTtcbmNvbnN0IF9iaW5kU2ltcGxlSW5wdXRPbiA9IChldmVudE5hbWUsIG1vZGVsS2V5LCB2bm9kZSwgcHJvcE5hbWUpID0+IHtcbiAgX2JpbmRPbihldmVudE5hbWUsIG1vZGVsS2V5LCB2bm9kZSwgZXZlbnQgPT4ge1xuICAgIHZub2RlLmNvbnRleHRbbW9kZWxLZXldID0gZXZlbnQudGFyZ2V0W3Byb3BOYW1lXTtcbiAgfSk7XG59O1xuY29uc3QgX2JpbmRNb2RpZmllcklucHV0T24gPSAoZXZlbnROYW1lLCBtb2RlbEtleSwgdm5vZGUsIG1vZGlmaWVycykgPT4ge1xuICBfYmluZE9uKGV2ZW50TmFtZSwgbW9kZWxLZXksIHZub2RlLCBldmVudCA9PiB7XG4gICAgdm5vZGUuY29udGV4dFttb2RlbEtleV0gPSBfZm9ybWF0T3V0cHV0KG1vZGlmaWVycywgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfSk7XG59O1xuY29uc3QgX2JpbmRBcnJheUlucHV0T24gPSAoZXZlbnROYW1lLCBtb2RlbEtleSwgdm5vZGUpID0+IHtcbiAgX2JpbmRPbihldmVudE5hbWUsIG1vZGVsS2V5LCB2bm9kZSwgZXZlbnQgPT4ge1xuICAgIGlmICh2bm9kZS5jb250ZXh0W21vZGVsS2V5XS5pbmNsdWRlcyhldmVudC50YXJnZXQudmFsdWUpKSB7XG4gICAgICAhZXZlbnQudGFyZ2V0LmNoZWNrZWQgJiYgdm5vZGUuY29udGV4dFttb2RlbEtleV0uc3BsaWNlKHZub2RlLmNvbnRleHRbbW9kZWxLZXldLmluZGV4T2YoZXZlbnQudGFyZ2V0LnZhbHVlKSwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50LnRhcmdldC5jaGVja2VkICYmIHZub2RlLmNvbnRleHRbbW9kZWxLZXldLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gVk9uc01vZGVsIGRpcmVjdGl2ZVxuZXhwb3J0IGRlZmF1bHQge1xuICBiaW5kKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgIGNvbnN0IG1vZGVsS2V5ID0gYmluZGluZy5leHByZXNzaW9uLnRyaW0oKTtcbiAgICBjb25zdCB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBzd2l0Y2ggKHRhZykge1xuICAgICAgY2FzZSAnb25zLXNlbGVjdCc6XG4gICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJ29wdGlvblt2YWx1ZT0nICsgYmluZGluZy52YWx1ZSArICddJykuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuICAgICAgICBfYmluZFNpbXBsZUlucHV0T24oJ2NoYW5nZScsIG1vZGVsS2V5LCB2bm9kZSwgJ3ZhbHVlJyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvbnMtc3dpdGNoJzpcbiAgICAgICAgZWwuY2hlY2tlZCA9IGJpbmRpbmcudmFsdWU7XG4gICAgICAgIF9iaW5kU2ltcGxlSW5wdXRPbignY2hhbmdlJywgbW9kZWxLZXksIHZub2RlLCAnY2hlY2tlZCcpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb25zLXJhbmdlJzpcbiAgICAgICAgZWwudmFsdWUgPSBiaW5kaW5nLnZhbHVlO1xuICAgICAgICBfYmluZE1vZGlmaWVySW5wdXRPbihPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChiaW5kaW5nLm1vZGlmaWVycywgJ2xhenknKSA/ICdjaGFuZ2UnIDogJ2lucHV0JywgbW9kZWxLZXksIHZub2RlLCBiaW5kaW5nLm1vZGlmaWVycyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvbnMtaW5wdXQnOlxuICAgICAgICBzd2l0Y2ggKGVsLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgICBlbC5jaGVja2VkID0gZWwudmFsdWUgPT09IGJpbmRpbmcudmFsdWU7XG4gICAgICAgICAgICBfYmluZFNpbXBsZUlucHV0T24oJ2NoYW5nZScsIG1vZGVsS2V5LCB2bm9kZSwgJ3ZhbHVlJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgIGVsLmNoZWNrZWQgPSBiaW5kaW5nLnZhbHVlLmluY2x1ZGVzKGVsLnZhbHVlKTtcbiAgICAgICAgICAgIF9iaW5kQXJyYXlJbnB1dE9uKCdjaGFuZ2UnLCBtb2RlbEtleSwgdm5vZGUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZWwudmFsdWUgPSBiaW5kaW5nLnZhbHVlO1xuICAgICAgICAgICAgX2JpbmRNb2RpZmllcklucHV0T24oT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoYmluZGluZy5tb2RpZmllcnMsICdsYXp5JykgPyAnY2hhbmdlJyA6ICdpbnB1dCcsIG1vZGVsS2V5LCB2bm9kZSwgYmluZGluZy5tb2RpZmllcnMpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1widi1vbnMtbW9kZWxcIiBkaXJlY3RpdmUgY2Fubm90IGJlIHVzZWQgd2l0aCBcIicgKyB0YWcgKyAnXCIgZWxlbWVudC4nKTtcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgIGNvbnN0IG1vZGVsS2V5ID0gYmluZGluZy5leHByZXNzaW9uLnRyaW0oKTtcbiAgICBjb25zdCB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBzd2l0Y2ggKHRhZykge1xuICAgICAgY2FzZSAnb25zLXNlbGVjdCc6XG4gICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGlvbicpLmZvckVhY2goZnVuY3Rpb24gKG9wdGlvbikgeyBvcHRpb24udmFsdWUgPT0gYmluZGluZy52YWx1ZSA/IG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJykgOiBvcHRpb24ucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpIH0pO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb25zLXN3aXRjaCc6XG4gICAgICAgIGVsLmNoZWNrZWQgPSBiaW5kaW5nLnZhbHVlO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb25zLXJhbmdlJzpcbiAgICAgICAgZWwudmFsdWUgPSBiaW5kaW5nLnZhbHVlO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb25zLWlucHV0JzpcbiAgICAgICAgc3dpdGNoIChlbC50eXBlKSB7XG4gICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgZWwuY2hlY2tlZCA9IHZub2RlLmNvbnRleHRbbW9kZWxLZXldID09PSBlbC52YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgZWwuY2hlY2tlZCA9ICh2bm9kZS5jb250ZXh0W21vZGVsS2V5XSB8fCBbXSkuaW5jbHVkZXMoZWwudmFsdWUpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZWwudmFsdWUgPSBiaW5kaW5nLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9kaXJlY3RpdmVzL1ZPbnNNb2RlbC5qcyIsImNvbnN0IF9hZGRIYW5kbGVyID0gKGJpbmRpbmcsIHZub2RlLCBldmVudE5hbWUpID0+IHtcbiAgY29uc3QgbW9kZWxLZXkgPSBiaW5kaW5nLmV4cHJlc3Npb24udHJpbSgpO1xuICBpZiAodm5vZGUuY29udGV4dC5oYXNPd25Qcm9wZXJ0eShtb2RlbEtleSkpIHtcbiAgICB2bm9kZS5jaGlsZC4kb24oJ3Bvc3QnICsgZXZlbnROYW1lLCBldmVudCA9PiB7XG4gICAgICB2bm9kZS5jb250ZXh0W21vZGVsS2V5XSA9IGV2ZW50TmFtZSA9PT0gJ29wZW4nO1xuICAgIH0pO1xuICB9XG59O1xuY29uc3QgX3VwZGF0ZVN0YXRlID0gKGVsLCBiaW5kaW5nLCB2bm9kZSkgPT4ge1xuICBpZiAoYmluZGluZy52YWx1ZSAhPT0gZWwuaXNPcGVuKSB7XG4gICAgZWxbYmluZGluZy52YWx1ZSA/ICdvcGVuJyA6ICdjbG9zZSddLmNhbGwoZWwsIHZub2RlLmNoaWxkLm9wdGlvbnMpO1xuICB9XG59O1xuXG4vLyBWT25zT3BlbiBkaXJlY3RpdmVcbmV4cG9ydCBkZWZhdWx0IHtcbiAgYmluZChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICBjb25zdCB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHRhZyAhPT0gJ29ucy1zcGxpdHRlci1zaWRlJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcInYtb25zLW9wZW5cIiBkaXJlY3RpdmUgY2Fubm90IGJlIHVzZWQgd2l0aCBcIicgKyB0YWcgKyAnXCIgZWxlbWVudC4nKTtcbiAgICB9XG5cbiAgICBfdXBkYXRlU3RhdGUoZWwsIGJpbmRpbmcsIHZub2RlKVxuXG4gICAgX2FkZEhhbmRsZXIoYmluZGluZywgdm5vZGUsICdvcGVuJyk7XG4gICAgX2FkZEhhbmRsZXIoYmluZGluZywgdm5vZGUsICdjbG9zZScpO1xuICB9LFxuXG4gIHVwZGF0ZShlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICBfdXBkYXRlU3RhdGUoZWwsIGJpbmRpbmcsIHZub2RlKVxuICB9XG59O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZGlyZWN0aXZlcy9WT25zT3Blbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=