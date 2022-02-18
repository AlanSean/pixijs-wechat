/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _window2 = __webpack_require__(1);

	var _window = _interopRequireWildcard(_window2);

	var _HTMLElement = __webpack_require__(3);

	var _HTMLElement2 = _interopRequireDefault(_HTMLElement);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var global = GameGlobal;

	function inject() {
	  _window.addEventListener = function (type, listener) {
	    _window.document.addEventListener(type, listener);
	  };
	  _window.removeEventListener = function (type, listener) {
	    _window.document.removeEventListener(type, listener);
	  };

	  if (_window.canvas) {
	    _window.canvas.addEventListener = _window.addEventListener;
	    _window.canvas.removeEventListener = _window.removeEventListener;
	  }

	  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
	      platform = _wx$getSystemInfoSync.platform;

	  // 开发者工具无法重定义 window


	  if (platform === 'devtools') {
	    for (var key in _window) {
	      var descriptor = Object.getOwnPropertyDescriptor(global, key);

	      if (!descriptor || descriptor.configurable === true) {
	        Object.defineProperty(window, key, {
	          value: _window[key]
	        });
	      }
	    }

	    for (var _key in _window.document) {
	      var _descriptor = Object.getOwnPropertyDescriptor(global.document, _key);

	      if (!_descriptor || _descriptor.configurable === true) {
	        Object.defineProperty(global.document, _key, {
	          value: _window.document[_key]
	        });
	      }
	    }
	    window.parent = window;
	  } else {
	    for (var _key2 in _window) {
	      global[_key2] = _window[_key2];
	    }
	    global.window = _window;
	    window = global;
	    window.top = window.parent = window;
	  }
	}

	if (!GameGlobal.__isAdapterInjected) {
	  GameGlobal.__isAdapterInjected = true;
	  inject();
	}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.cancelAnimationFrame = exports.requestAnimationFrame = exports.clearInterval = exports.clearTimeout = exports.setInterval = exports.setTimeout = exports.canvas = exports.location = exports.localStorage = exports.HTMLElement = exports.FileReader = exports.Audio = exports.Image = exports.WebSocket = exports.XMLHttpRequest = exports.navigator = exports.document = undefined;

	var _document = __webpack_require__(2);

	Object.defineProperty(exports, 'document', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_document).default;
	  }
	});

	var _navigator = __webpack_require__(18);

	Object.defineProperty(exports, 'navigator', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_navigator).default;
	  }
	});

	var _XMLHttpRequest = __webpack_require__(19);

	Object.defineProperty(exports, 'XMLHttpRequest', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_XMLHttpRequest).default;
	  }
	});

	var _WebSocket = __webpack_require__(20);

	Object.defineProperty(exports, 'WebSocket', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_WebSocket).default;
	  }
	});

	var _Image = __webpack_require__(10);

	Object.defineProperty(exports, 'Image', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Image).default;
	  }
	});

	var _Audio = __webpack_require__(11);

	Object.defineProperty(exports, 'Audio', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Audio).default;
	  }
	});

	var _FileReader = __webpack_require__(21);

	Object.defineProperty(exports, 'FileReader', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_FileReader).default;
	  }
	});

	var _HTMLElement = __webpack_require__(3);

	Object.defineProperty(exports, 'HTMLElement', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_HTMLElement).default;
	  }
	});

	var _localStorage = __webpack_require__(22);

	Object.defineProperty(exports, 'localStorage', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_localStorage).default;
	  }
	});

	var _location = __webpack_require__(23);

	Object.defineProperty(exports, 'location', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_location).default;
	  }
	});

	var _WindowProperties = __webpack_require__(8);

	Object.keys(_WindowProperties).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _WindowProperties[key];
	    }
	  });
	});

	var _constructor = __webpack_require__(24);

	Object.keys(_constructor).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _constructor[key];
	    }
	  });
	});

	var _Canvas = __webpack_require__(14);

	var _Canvas2 = _interopRequireDefault(_Canvas);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 暴露全局的 canvas
	var canvas = new _Canvas2.default();

	exports.canvas = canvas;
	exports.setTimeout = setTimeout;
	exports.setInterval = setInterval;
	exports.clearTimeout = clearTimeout;
	exports.clearInterval = clearInterval;
	exports.requestAnimationFrame = requestAnimationFrame;
	exports.cancelAnimationFrame = cancelAnimationFrame;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _window = __webpack_require__(1);

	var window = _interopRequireWildcard(_window);

	var _HTMLElement = __webpack_require__(3);

	var _HTMLElement2 = _interopRequireDefault(_HTMLElement);

	var _Image = __webpack_require__(10);

	var _Image2 = _interopRequireDefault(_Image);

	var _Audio = __webpack_require__(11);

	var _Audio2 = _interopRequireDefault(_Audio);

	var _Canvas = __webpack_require__(14);

	var _Canvas2 = _interopRequireDefault(_Canvas);

	var _HTMLVideoElement = __webpack_require__(15);

	var _HTMLVideoElement2 = _interopRequireDefault(_HTMLVideoElement);

	__webpack_require__(16);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var events = {};

	var document = {
	  readyState: 'complete',
	  visibilityState: 'visible',
	  documentElement: window,
	  hidden: false,
	  style: {},
	  location: window.location,
	  ontouchstart: null,
	  ontouchmove: null,
	  ontouchend: null,

	  head: new _HTMLElement2.default('head'),
	  body: new _HTMLElement2.default('body'),

	  createElement: function createElement(tagName) {
	    if (tagName === 'canvas') {
	      return new _Canvas2.default();
	    } else if (tagName === 'audio') {
	      return new _Audio2.default();
	    } else if (tagName === 'img') {
	      return new _Image2.default();
	    } else if (tagName === 'video') {
	      return new _HTMLVideoElement2.default();
	    }

	    return new _HTMLElement2.default(tagName);
	  },
	  getElementById: function getElementById(id) {
	    if (id === window.canvas.id) {
	      return window.canvas;
	    }
	    return null;
	  },
	  getElementsByTagName: function getElementsByTagName(tagName) {
	    if (tagName === 'head') {
	      return [document.head];
	    } else if (tagName === 'body') {
	      return [document.body];
	    } else if (tagName === 'canvas') {
	      return [window.canvas];
	    }
	    return [];
	  },
	  getElementsByName: function getElementsByName(tagName) {
	    if (tagName === 'head') {
	      return [document.head];
	    } else if (tagName === 'body') {
	      return [document.body];
	    } else if (tagName === 'canvas') {
	      return [window.canvas];
	    }
	    return [];
	  },
	  querySelector: function querySelector(query) {
	    if (query === 'head') {
	      return document.head;
	    } else if (query === 'body') {
	      return document.body;
	    } else if (query === 'canvas') {
	      return window.canvas;
	    } else if (query === '#' + window.canvas.id) {
	      return window.canvas;
	    }
	    return null;
	  },
	  querySelectorAll: function querySelectorAll(query) {
	    if (query === 'head') {
	      return [document.head];
	    } else if (query === 'body') {
	      return [document.body];
	    } else if (query === 'canvas') {
	      return [window.canvas];
	    }
	    return [];
	  },
	  addEventListener: function addEventListener(type, listener) {
	    if (!events[type]) {
	      events[type] = [];
	    }
	    events[type].push(listener);
	  },
	  removeEventListener: function removeEventListener(type, listener) {
	    var listeners = events[type];

	    if (listeners && listeners.length > 0) {
	      for (var i = listeners.length; i--; i > 0) {
	        if (listeners[i] === listener) {
	          listeners.splice(i, 1);
	          break;
	        }
	      }
	    }
	  },
	  dispatchEvent: function dispatchEvent(event) {
	    var listeners = events[event.type];

	    if (listeners) {
	      for (var i = 0; i < listeners.length; i++) {
	        listeners[i](event);
	      }
	    }
	  }
	};

	exports.default = document;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Element2 = __webpack_require__(4);

	var _Element3 = _interopRequireDefault(_Element2);

	var _util = __webpack_require__(7);

	var _WindowProperties = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HTMLElement = function (_Element) {
	  _inherits(HTMLElement, _Element);

	  function HTMLElement() {
	    var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	    _classCallCheck(this, HTMLElement);

	    var _this = _possibleConstructorReturn(this, (HTMLElement.__proto__ || Object.getPrototypeOf(HTMLElement)).call(this));

	    _this.className = '';
	    _this.childern = [];
	    _this.style = {
	      width: _WindowProperties.innerWidth + 'px',
	      height: _WindowProperties.innerHeight + 'px'
	    };
	    _this.insertBefore = _util.noop;
	    _this.innerHTML = '';

	    _this.tagName = tagName.toUpperCase();
	    return _this;
	  }

	  _createClass(HTMLElement, [{
	    key: 'setAttribute',
	    value: function setAttribute(name, value) {
	      this[name] = value;
	    }
	  }, {
	    key: 'getAttribute',
	    value: function getAttribute(name) {
	      return this[name];
	    }
	  }, {
	    key: 'getBoundingClientRect',
	    value: function getBoundingClientRect() {
	      return {
	        top: 0,
	        left: 0,
	        width: _WindowProperties.innerWidth,
	        height: _WindowProperties.innerHeight
	      };
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {}
	  }, {
	    key: 'clientWidth',
	    get: function get() {
	      var ret = parseInt(this.style.fontSize, 10) * this.innerHTML.length;

	      return Number.isNaN(ret) ? 0 : ret;
	    }
	  }, {
	    key: 'clientHeight',
	    get: function get() {
	      var ret = parseInt(this.style.fontSize, 10);

	      return Number.isNaN(ret) ? 0 : ret;
	    }
	  }]);

	  return HTMLElement;
	}(_Element3.default);

	exports.default = HTMLElement;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Node2 = __webpack_require__(5);

	var _Node3 = _interopRequireDefault(_Node2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ELement = function (_Node) {
	  _inherits(ELement, _Node);

	  function ELement() {
	    _classCallCheck(this, ELement);

	    var _this = _possibleConstructorReturn(this, (ELement.__proto__ || Object.getPrototypeOf(ELement)).call(this));

	    _this.className = '';
	    _this.children = [];
	    return _this;
	  }

	  return ELement;
	}(_Node3.default);

	exports.default = ELement;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _EventTarget2 = __webpack_require__(6);

	var _EventTarget3 = _interopRequireDefault(_EventTarget2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Node = function (_EventTarget) {
	  _inherits(Node, _EventTarget);

	  function Node() {
	    _classCallCheck(this, Node);

	    var _this = _possibleConstructorReturn(this, (Node.__proto__ || Object.getPrototypeOf(Node)).call(this));

	    _this.childNodes = [];
	    return _this;
	  }

	  _createClass(Node, [{
	    key: 'appendChild',
	    value: function appendChild(node) {
	      if (node instanceof Node) {
	        this.childNodes.push(node);
	      } else {
	        throw new TypeError('Failed to executed \'appendChild\' on \'Node\': parameter 1 is not of type \'Node\'.');
	      }
	    }
	  }, {
	    key: 'cloneNode',
	    value: function cloneNode() {
	      var copyNode = Object.create(this);

	      Object.assign(copyNode, this);
	      return copyNode;
	    }
	  }, {
	    key: 'removeChild',
	    value: function removeChild(node) {
	      var index = this.childNodes.findIndex(function (child) {
	        return child === node;
	      });

	      if (index > -1) {
	        return this.childNodes.splice(index, 1);
	      }
	      return null;
	    }
	  }]);

	  return Node;
	}(_EventTarget3.default);

	exports.default = Node;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _events = new WeakMap();

	var EventTarget = function () {
	  function EventTarget() {
	    _classCallCheck(this, EventTarget);

	    _events.set(this, {});
	  }

	  _createClass(EventTarget, [{
	    key: 'addEventListener',
	    value: function addEventListener(type, listener) {
	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      var events = _events.get(this);

	      if (!events) {
	        events = {};
	        _events.set(this, events);
	      }
	      if (!events[type]) {
	        events[type] = [];
	      }
	      events[type].push(listener);

	      if (options.capture) {
	        console.warn('EventTarget.addEventListener: options.capture is not implemented.');
	      }
	      if (options.once) {
	        console.warn('EventTarget.addEventListener: options.once is not implemented.');
	      }
	      if (options.passive) {
	        console.warn('EventTarget.addEventListener: options.passive is not implemented.');
	      }
	    }
	  }, {
	    key: 'removeEventListener',
	    value: function removeEventListener(type, listener) {
	      var listeners = _events.get(this)[type];

	      if (listeners && listeners.length > 0) {
	        for (var i = listeners.length; i--; i > 0) {
	          if (listeners[i] === listener) {
	            listeners.splice(i, 1);
	            break;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'dispatchEvent',
	    value: function dispatchEvent() {
	      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	      var listeners = _events.get(this)[event.type];

	      if (listeners) {
	        for (var i = 0; i < listeners.length; i++) {
	          listeners[i](event);
	        }
	      }
	    }
	  }]);

	  return EventTarget;
	}();

	exports.default = EventTarget;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.noop = noop;
	function noop() {}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.performance = exports.ontouchend = exports.ontouchmove = exports.ontouchstart = exports.screen = exports.devicePixelRatio = exports.innerHeight = exports.innerWidth = undefined;

	var _performance2 = __webpack_require__(9);

	var _performance3 = _interopRequireDefault(_performance2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
	    screenWidth = _wx$getSystemInfoSync.screenWidth,
	    screenHeight = _wx$getSystemInfoSync.screenHeight,
	    devicePixelRatio = _wx$getSystemInfoSync.devicePixelRatio;

	var innerWidth = exports.innerWidth = screenWidth;
	var innerHeight = exports.innerHeight = screenHeight;
	exports.devicePixelRatio = devicePixelRatio;
	var screen = exports.screen = {
	  availWidth: innerWidth,
	  availHeight: innerHeight
	};
	var ontouchstart = exports.ontouchstart = null;
	var ontouchmove = exports.ontouchmove = null;
	var ontouchend = exports.ontouchend = null;

	exports.performance = _performance3.default;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var performance = void 0;

	if (wx.getPerformance) {
	  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
	      platform = _wx$getSystemInfoSync.platform;

	  var wxPerf = wx.getPerformance();
	  var initTime = wxPerf.now();

	  var clientPerfAdapter = Object.assign({}, wxPerf, {
	    now: function now() {
	      return (wxPerf.now() - initTime) / 1000;
	    }
	  });

	  performance = platform === 'devtools' ? wxPerf : clientPerfAdapter;
	}

	exports.default = performance;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Image;
	function Image() {
	  var image = wx.createImage();

	  return image;
	}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _HTMLAudioElement2 = __webpack_require__(12);

	var _HTMLAudioElement3 = _interopRequireDefault(_HTMLAudioElement2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HAVE_NOTHING = 0;
	var HAVE_METADATA = 1;
	var HAVE_CURRENT_DATA = 2;
	var HAVE_FUTURE_DATA = 3;
	var HAVE_ENOUGH_DATA = 4;

	var _innerAudioContext = new WeakMap();
	var _src = new WeakMap();

	// const _loop = new WeakMap()
	// const _autoplay = new WeakMap()

	var Audio = function (_HTMLAudioElement) {
	  _inherits(Audio, _HTMLAudioElement);

	  function Audio(url) {
	    _classCallCheck(this, Audio);

	    var _this = _possibleConstructorReturn(this, (Audio.__proto__ || Object.getPrototypeOf(Audio)).call(this));

	    _this.HAVE_NOTHING = HAVE_NOTHING;
	    _this.HAVE_METADATA = HAVE_METADATA;
	    _this.HAVE_CURRENT_DATA = HAVE_CURRENT_DATA;
	    _this.HAVE_FUTURE_DATA = HAVE_FUTURE_DATA;
	    _this.HAVE_ENOUGH_DATA = HAVE_ENOUGH_DATA;
	    _this.readyState = HAVE_NOTHING;


	    _src.set(_this, '');

	    var innerAudioContext = wx.createInnerAudioContext();

	    _innerAudioContext.set(_this, innerAudioContext);

	    innerAudioContext.onCanplay(function () {
	      _this.dispatchEvent({ type: 'load' });
	      _this.dispatchEvent({ type: 'loadend' });
	      _this.dispatchEvent({ type: 'canplay' });
	      _this.dispatchEvent({ type: 'canplaythrough' });
	      _this.dispatchEvent({ type: 'loadedmetadata' });
	      _this.readyState = HAVE_CURRENT_DATA;
	    });
	    innerAudioContext.onPlay(function () {
	      _this.dispatchEvent({ type: 'play' });
	    });
	    innerAudioContext.onPause(function () {
	      _this.dispatchEvent({ type: 'pause' });
	    });
	    innerAudioContext.onEnded(function () {
	      _this.dispatchEvent({ type: 'ended' });
	      _this.readyState = HAVE_ENOUGH_DATA;
	    });
	    innerAudioContext.onError(function () {
	      _this.dispatchEvent({ type: 'error' });
	    });

	    if (url) {
	      _innerAudioContext.get(_this).src = url;
	    }
	    return _this;
	  }

	  _createClass(Audio, [{
	    key: 'load',
	    value: function load() {
	      console.warn('HTMLAudioElement.load() is not implemented.');
	    }
	  }, {
	    key: 'play',
	    value: function play() {
	      _innerAudioContext.get(this).play();
	    }
	  }, {
	    key: 'pause',
	    value: function pause() {
	      _innerAudioContext.get(this).pause();
	    }
	  }, {
	    key: 'canPlayType',
	    value: function canPlayType() {
	      var mediaType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	      if (typeof mediaType !== 'string') {
	        return '';
	      }

	      if (mediaType.indexOf('audio/mpeg') > -1 || mediaType.indexOf('audio/mp4')) {
	        return 'probably';
	      }
	      return '';
	    }
	  }, {
	    key: 'cloneNode',
	    value: function cloneNode() {
	      var newAudio = new Audio();

	      newAudio.loop = _innerAudioContext.get(this).loop;
	      newAudio.autoplay = _innerAudioContext.get(this).autoplay;
	      newAudio.src = this.src;
	      return newAudio;
	    }
	  }, {
	    key: 'currentTime',
	    get: function get() {
	      return _innerAudioContext.get(this).currentTime;
	    },
	    set: function set(value) {
	      _innerAudioContext.get(this).seek(value);
	    }
	  }, {
	    key: 'src',
	    get: function get() {
	      return _src.get(this);
	    },
	    set: function set(value) {
	      _src.set(this, value);
	      _innerAudioContext.get(this).src = value;
	    }
	  }, {
	    key: 'loop',
	    get: function get() {
	      return _innerAudioContext.get(this).loop;
	    },
	    set: function set(value) {
	      _innerAudioContext.get(this).loop = value;
	    }
	  }, {
	    key: 'autoplay',
	    get: function get() {
	      return _innerAudioContext.get(this).autoplay;
	    },
	    set: function set(value) {
	      _innerAudioContext.get(this).autoplay = value;
	    }
	  }, {
	    key: 'paused',
	    get: function get() {
	      return _innerAudioContext.get(this).paused;
	    }
	  }]);

	  return Audio;
	}(_HTMLAudioElement3.default);

	exports.default = Audio;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _HTMLMediaElement2 = __webpack_require__(13);

	var _HTMLMediaElement3 = _interopRequireDefault(_HTMLMediaElement2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HTMLAudioElement = function (_HTMLMediaElement) {
	  _inherits(HTMLAudioElement, _HTMLMediaElement);

	  function HTMLAudioElement() {
	    _classCallCheck(this, HTMLAudioElement);

	    return _possibleConstructorReturn(this, (HTMLAudioElement.__proto__ || Object.getPrototypeOf(HTMLAudioElement)).call(this, 'audio'));
	  }

	  return HTMLAudioElement;
	}(_HTMLMediaElement3.default);

	exports.default = HTMLAudioElement;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _HTMLElement2 = __webpack_require__(3);

	var _HTMLElement3 = _interopRequireDefault(_HTMLElement2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HTMLMediaElement = function (_HTMLElement) {
	  _inherits(HTMLMediaElement, _HTMLElement);

	  function HTMLMediaElement(type) {
	    _classCallCheck(this, HTMLMediaElement);

	    return _possibleConstructorReturn(this, (HTMLMediaElement.__proto__ || Object.getPrototypeOf(HTMLMediaElement)).call(this, type));
	  }

	  _createClass(HTMLMediaElement, [{
	    key: 'addTextTrack',
	    value: function addTextTrack() {}
	  }, {
	    key: 'captureStream',
	    value: function captureStream() {}
	  }, {
	    key: 'fastSeek',
	    value: function fastSeek() {}
	  }, {
	    key: 'load',
	    value: function load() {}
	  }, {
	    key: 'pause',
	    value: function pause() {}
	  }, {
	    key: 'play',
	    value: function play() {}
	  }]);

	  return HTMLMediaElement;
	}(_HTMLElement3.default);

	exports.default = HTMLMediaElement;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Canvas;
	// import { HTMLCanvasElement } from './constructor'

	function Canvas() {
	  var canvas = wx.createCanvas();

	  canvas.type = 'canvas';
	  // canvas.__proto__.__proto__.__proto__ = new HTMLCanvasElement()
	  canvas.getBoundingClientRect = function () {
	    var ret = {
	      top: 0,
	      left: 0,
	      width: window.innerWidth,
	      height: window.innerHeight
	    };

	    return ret;
	  };

	  return canvas;
	}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _HTMLMediaElement2 = __webpack_require__(13);

	var _HTMLMediaElement3 = _interopRequireDefault(_HTMLMediaElement2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HTMLVideoElement = function (_HTMLMediaElement) {
	  _inherits(HTMLVideoElement, _HTMLMediaElement);

	  function HTMLVideoElement() {
	    _classCallCheck(this, HTMLVideoElement);

	    return _possibleConstructorReturn(this, (HTMLVideoElement.__proto__ || Object.getPrototypeOf(HTMLVideoElement)).call(this, 'video'));
	  }

	  return HTMLVideoElement;
	}(_HTMLMediaElement3.default);

	exports.default = HTMLVideoElement;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(17);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _window = __webpack_require__(1);

	var window = _interopRequireWildcard(_window);

	var _document = __webpack_require__(2);

	var _document2 = _interopRequireDefault(_document);

	var _util = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TouchEvent = function TouchEvent(type) {
	  _classCallCheck(this, TouchEvent);

	  this.target = window.canvas;
	  this.currentTarget = window.canvas;
	  this.touches = [];
	  this.targetTouches = [];
	  this.changedTouches = [];
	  this.preventDefault = _util.noop;
	  this.stopPropagation = _util.noop;

	  this.type = type;
	};

	function touchEventHandlerFactory(type) {
	  return function (event) {
	    var touchEvent = new TouchEvent(type);

	    touchEvent.touches = event.touches;
	    touchEvent.targetTouches = Array.prototype.slice.call(event.touches);
	    touchEvent.changedTouches = event.changedTouches;
	    touchEvent.timeStamp = event.timeStamp;
	    _document2.default.dispatchEvent(touchEvent);
	  };
	}

	wx.onTouchStart(touchEventHandlerFactory('touchstart'));
	wx.onTouchMove(touchEventHandlerFactory('touchmove'));
	wx.onTouchEnd(touchEventHandlerFactory('touchend'));
	wx.onTouchCancel(touchEventHandlerFactory('touchcancel'));

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(7);

	// TODO 需要 wx.getSystemInfo 获取更详细信息
	var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
	    platform = _wx$getSystemInfoSync.platform;

	var navigator = {
	  platform: platform,
	  language: 'zh-cn',
	  appVersion: '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
	  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN',
	  onLine: true, // TODO 用 wx.getNetworkStateChange 和 wx.onNetworkStateChange 来返回真实的状态

	  // TODO 用 wx.getLocation 来封装 geolocation
	  geolocation: {
	    getCurrentPosition: _util.noop,
	    watchPosition: _util.noop,
	    clearWatch: _util.noop
	  }
	};

	exports.default = navigator;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _url = new WeakMap();
	var _method = new WeakMap();
	var _requestHeader = new WeakMap();
	var _responseHeader = new WeakMap();
	var _requestTask = new WeakMap();

	function _triggerEvent(type) {
	  if (typeof this['on' + type] === 'function') {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    this['on' + type].apply(this, args);
	  }
	}

	function _changeReadyState(readyState) {
	  this.readyState = readyState;
	  _triggerEvent.call(this, 'readystatechange');
	}

	var XMLHttpRequest = function () {
	  // TODO 没法模拟 HEADERS_RECEIVED 和 LOADING 两个状态
	  function XMLHttpRequest() {
	    _classCallCheck(this, XMLHttpRequest);

	    this.onabort = null;
	    this.onerror = null;
	    this.onload = null;
	    this.onloadstart = null;
	    this.onprogress = null;
	    this.ontimeout = null;
	    this.onloadend = null;
	    this.onreadystatechange = null;
	    this.readyState = 0;
	    this.response = null;
	    this.responseText = null;
	    this.responseType = '';
	    this.responseXML = null;
	    this.status = 0;
	    this.statusText = '';
	    this.upload = {};
	    this.withCredentials = false;

	    _requestHeader.set(this, {
	      'content-type': 'application/x-www-form-urlencoded'
	    });
	    _responseHeader.set(this, {});
	  }

	  /*
	   * TODO 这一批事件应该是在 XMLHttpRequestEventTarget.prototype 上面的
	   */


	  _createClass(XMLHttpRequest, [{
	    key: 'abort',
	    value: function abort() {
	      var myRequestTask = _requestTask.get(this);

	      if (myRequestTask) {
	        myRequestTask.abort();
	      }
	    }
	  }, {
	    key: 'getAllResponseHeaders',
	    value: function getAllResponseHeaders() {
	      var responseHeader = _responseHeader.get(this);

	      return Object.keys(responseHeader).map(function (header) {
	        return header + ': ' + responseHeader[header];
	      }).join('\n');
	    }
	  }, {
	    key: 'getResponseHeader',
	    value: function getResponseHeader(header) {
	      return _responseHeader.get(this)[header];
	    }
	  }, {
	    key: 'open',
	    value: function open(method, url /* async, user, password 这几个参数在小程序内不支持*/) {
	      _method.set(this, method);
	      _url.set(this, url);
	      _changeReadyState.call(this, XMLHttpRequest.OPENED);
	    }
	  }, {
	    key: 'overrideMimeType',
	    value: function overrideMimeType() {}
	  }, {
	    key: 'send',
	    value: function send() {
	      var _this = this;

	      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	      if (this.readyState !== XMLHttpRequest.OPENED) {
	        throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
	      } else {
	        wx.request({
	          data: data,
	          url: _url.get(this),
	          method: _method.get(this),
	          header: _requestHeader.get(this),
	          responseType: this.responseType,
	          success: function success(_ref) {
	            var data = _ref.data,
	                statusCode = _ref.statusCode,
	                header = _ref.header;

	            if (typeof data !== 'string' && !(data instanceof ArrayBuffer)) {
	              try {
	                data = JSON.stringify(data);
	              } catch (e) {
	                data = data;
	              }
	            }

	            _this.status = statusCode;
	            _responseHeader.set(_this, header);
	            _triggerEvent.call(_this, 'loadstart');
	            _changeReadyState.call(_this, XMLHttpRequest.HEADERS_RECEIVED);
	            _changeReadyState.call(_this, XMLHttpRequest.LOADING);

	            _this.response = data;

	            if (data instanceof ArrayBuffer) {
	              _this.responseText = '';
	              var bytes = new Uint8Array(data);
	              var len = bytes.byteLength;

	              for (var i = 0; i < len; i++) {
	                _this.responseText += String.fromCharCode(bytes[i]);
	              }
	            } else {
	              _this.responseText = data;
	            }
	            _changeReadyState.call(_this, XMLHttpRequest.DONE);
	            _triggerEvent.call(_this, 'load');
	            _triggerEvent.call(_this, 'loadend');
	          },
	          fail: function fail(_ref2) {
	            var errMsg = _ref2.errMsg;

	            // TODO 规范错误
	            if (errMsg.indexOf('abort') !== -1) {
	              _triggerEvent.call(_this, 'abort');
	            } else {
	              _triggerEvent.call(_this, 'error', errMsg);
	            }
	            _triggerEvent.call(_this, 'loadend');
	          }
	        });
	      }
	    }
	  }, {
	    key: 'setRequestHeader',
	    value: function setRequestHeader(header, value) {
	      var myHeader = _requestHeader.get(this);

	      myHeader[header] = value;
	      _requestHeader.set(this, myHeader);
	    }
	  }]);

	  return XMLHttpRequest;
	}();

	XMLHttpRequest.UNSEND = 0;
	XMLHttpRequest.OPENED = 1;
	XMLHttpRequest.HEADERS_RECEIVED = 2;
	XMLHttpRequest.LOADING = 3;
	XMLHttpRequest.DONE = 4;
	exports.default = XMLHttpRequest;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _socketTask = new WeakMap();

	var WebSocket = function () {
	  // TODO 更新 binaryType
	  // The connection is in the process of closing.
	  // The connection is not yet open.
	  function WebSocket(url) {
	    var _this = this;

	    var protocols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	    _classCallCheck(this, WebSocket);

	    this.binaryType = '';
	    this.bufferedAmount = 0;
	    this.extensions = '';
	    this.onclose = null;
	    this.onerror = null;
	    this.onmessage = null;
	    this.onopen = null;
	    this.protocol = '';
	    this.readyState = 3;

	    if (typeof url !== 'string' || !/(^ws:\/\/)|(^wss:\/\/)/.test(url)) {
	      throw new TypeError('Failed to construct \'WebSocket\': The URL \'' + url + '\' is invalid');
	    }

	    this.url = url;
	    this.readyState = WebSocket.CONNECTING;

	    var socketTask = wx.connectSocket({
	      url: url,
	      protocols: Array.isArray(protocols) ? protocols : [protocols]
	    });

	    _socketTask.set(this, socketTask);

	    socketTask.onClose(function (res) {
	      _this.readyState = WebSocket.CLOSED;
	      if (typeof _this.onclose === 'function') {
	        _this.onclose(res);
	      }
	    });

	    socketTask.onMessage(function (res) {
	      if (typeof _this.onmessage === 'function') {
	        _this.onmessage(res);
	      }
	    });

	    socketTask.onOpen(function () {
	      _this.readyState = WebSocket.OPEN;
	      if (typeof _this.onopen === 'function') {
	        _this.onopen();
	      }
	    });

	    socketTask.onError(function (res) {
	      if (typeof _this.onerror === 'function') {
	        _this.onerror(new Error(res.errMsg));
	      }
	    });

	    return this;
	  } // TODO 小程序内目前获取不到，实际上需要根据服务器选择的 sub-protocol 返回
	  // TODO 更新 bufferedAmount
	  // The connection is closed or couldn't be opened.

	  // The connection is open and ready to communicate.


	  _createClass(WebSocket, [{
	    key: 'close',
	    value: function close(code, reason) {
	      this.readyState = WebSocket.CLOSING;
	      var socketTask = _socketTask.get(this);

	      socketTask.close({
	        code: code,
	        reason: reason
	      });
	    }
	  }, {
	    key: 'send',
	    value: function send(data) {
	      if (typeof data !== 'string' && !(data instanceof ArrayBuffer)) {
	        throw new TypeError('Failed to send message: The data ' + data + ' is invalid');
	      }

	      var socketTask = _socketTask.get(this);

	      socketTask.send({
	        data: data
	      });
	    }
	  }]);

	  return WebSocket;
	}();

	WebSocket.CONNECTING = 0;
	WebSocket.OPEN = 1;
	WebSocket.CLOSING = 2;
	WebSocket.CLOSED = 3;
	exports.default = WebSocket;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	 * TODO 使用 wx.readFile 来封装 FileReader
	 */
	var FileReader = function () {
	  function FileReader() {
	    _classCallCheck(this, FileReader);
	  }

	  _createClass(FileReader, [{
	    key: "construct",
	    value: function construct() {}
	  }]);

	  return FileReader;
	}();

	exports.default = FileReader;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var localStorage = {
	  get length() {
	    var _wx$getStorageInfoSyn = wx.getStorageInfoSync(),
	        keys = _wx$getStorageInfoSyn.keys;

	    return keys.length;
	  },

	  key: function key(n) {
	    var _wx$getStorageInfoSyn2 = wx.getStorageInfoSync(),
	        keys = _wx$getStorageInfoSyn2.keys;

	    return keys[n];
	  },
	  getItem: function getItem(key) {
	    return wx.getStorageSync(key);
	  },
	  setItem: function setItem(key, value) {
	    return wx.setStorageSync(key, value);
	  },
	  removeItem: function removeItem(key) {
	    wx.removeStorageSync(key);
	  },
	  clear: function clear() {
	    wx.clearStorageSync();
	  }
	};

	exports.default = localStorage;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var location = {
	  href: 'game.js',
	  reload: function reload() {}
	};

	exports.default = location;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DOMParser = exports.XMLDocument = exports.WebGLRenderingContext = exports.CanvasRenderingContext2D = exports.HTMLImageElement = exports.HTMLCanvasElement = undefined;

	var _xmldom = __webpack_require__(25);

	// import HTMLElement from './HTMLElement'

	// export class HTMLImageElement extends HTMLElement {
	//   constructor() {
	//     super('img')
	//   }
	// }
	// export class HTMLCanvasElement extends HTMLElement {
	//   constructor() {
	//     super('canvas')
	//   }
	// }

	var HTMLCanvasElement = exports.HTMLCanvasElement = wx.createCanvas().constructor;
	var HTMLImageElement = exports.HTMLImageElement = wx.createImage().constructor;
	var CanvasRenderingContext2D = exports.CanvasRenderingContext2D = wx.createCanvas().getContext('2d').constructor;
	var WebGLRenderingContext = exports.WebGLRenderingContext = wx.createCanvas().getContext('webgl').constructor;
	var XMLDocument = exports.XMLDocument = new _xmldom.DOMParser().parseFromString('123', 'text/xml').constructor;
	exports.DOMParser = _xmldom.DOMParser;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var DOMParser = function DOMParser(a) {
	  this.options = a || { locator: {} };
	};DOMParser.prototype.parseFromString = function (a, b) {
	  var d = this.options,
	      c = new XMLReader(),
	      e = d.domBuilder || new DOMHandler(),
	      h = d.errorHandler,
	      f = d.locator,
	      g = d.xmlns || {},
	      k = { lt: "\x3c", gt: "\x3e", amp: "\x26", quot: '"', apos: "'" };f && e.setDocumentLocator(f);c.errorHandler = buildErrorHandler(h, e, f);c.domBuilder = d.domBuilder || e;/\/x?html?$/.test(b) && (k.nbsp = "\xA0", k.copy = "\xA9", g[""] = "http://www.w3.org/1999/xhtml");g.xml = g.xml || "http://www.w3.org/XML/1998/namespace";a ? c.parse(a, g, k) : c.errorHandler.error("invalid doc source");return e.doc;
	};function buildErrorHandler(a, b, d) {
	  function c(b) {
	    var c = a[b];!c && h && (c = 2 == a.length ? function (c) {
	      a(b, c);
	    } : a);e[b] = c && function (a) {
	      c("[xmldom " + b + "]\t" + a + _locator(d));
	    } || function () {};
	  }if (!a) {
	    if (b instanceof DOMHandler) return b;a = b;
	  }var e = {},
	      h = a instanceof Function;d = d || {};c("warning");c("error");c("fatalError");return e;
	}function DOMHandler() {
	  this.cdata = !1;
	}function position(a, b) {
	  b.lineNumber = a.lineNumber;b.columnNumber = a.columnNumber;
	}DOMHandler.prototype = { startDocument: function startDocument() {
	    this.doc = new DOMImplementation().createDocument(null, null, null);this.locator && (this.doc.documentURI = this.locator.systemId);
	  }, startElement: function startElement(a, b, d, c) {
	    var e = this.doc;b = e.createElementNS(a, d || b);var h = c.length;appendElement(this, b);this.currentElement = b;this.locator && position(this.locator, b);for (var f = 0; f < h; f++) {
	      a = c.getURI(f);var g = c.getValue(f);d = c.getQName(f);a = e.createAttributeNS(a, d);this.locator && position(c.getLocator(f), a);a.value = a.nodeValue = g;b.setAttributeNode(a);
	    }
	  }, endElement: function endElement(a, b, d) {
	    this.currentElement = this.currentElement.parentNode;
	  }, startPrefixMapping: function startPrefixMapping(a, b) {}, endPrefixMapping: function endPrefixMapping(a) {}, processingInstruction: function processingInstruction(a, b) {
	    var d = this.doc.createProcessingInstruction(a, b);this.locator && position(this.locator, d);appendElement(this, d);
	  }, ignorableWhitespace: function ignorableWhitespace(a, b, d) {}, characters: function characters(a, b, d) {
	    if (a = _toString.apply(this, arguments)) {
	      var c = this.cdata ? this.doc.createCDATASection(a) : this.doc.createTextNode(a);this.currentElement ? this.currentElement.appendChild(c) : /^\s*$/.test(a) && this.doc.appendChild(c);this.locator && position(this.locator, c);
	    }
	  }, skippedEntity: function skippedEntity(a) {}, endDocument: function endDocument() {
	    this.doc.normalize();
	  }, setDocumentLocator: function setDocumentLocator(a) {
	    if (this.locator = a) a.lineNumber = 0;
	  }, comment: function comment(a, b, d) {
	    a = _toString.apply(this, arguments);var c = this.doc.createComment(a);this.locator && position(this.locator, c);appendElement(this, c);
	  }, startCDATA: function startCDATA() {
	    this.cdata = !0;
	  }, endCDATA: function endCDATA() {
	    this.cdata = !1;
	  }, startDTD: function startDTD(a, b, d) {
	    var c = this.doc.implementation;c && c.createDocumentType && (a = c.createDocumentType(a, b, d), this.locator && position(this.locator, a), appendElement(this, a));
	  }, warning: function warning(a) {
	    console.warn("[xmldom warning]\t" + a, _locator(this.locator));
	  }, error: function error(a) {
	    console.error("[xmldom error]\t" + a, _locator(this.locator));
	  }, fatalError: function fatalError(a) {
	    console.error("[xmldom fatalError]\t" + a, _locator(this.locator));throw a;
	  } };function _locator(a) {
	  if (a) return "\n@" + (a.systemId || "") + "#[line:" + a.lineNumber + ",col:" + a.columnNumber + "]";
	}function _toString(a, b, d) {
	  return "string" == typeof a ? a.substr(b, d) : a.length >= b + d || b ? new java.lang.String(a, b, d) + "" : a;
	}"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (a) {
	  DOMHandler.prototype[a] = function () {
	    return null;
	  };
	});function appendElement(a, b) {
	  a.currentElement ? a.currentElement.appendChild(b) : a.doc.appendChild(b);
	}var XMLReader = __webpack_require__(26).XMLReader,
	    DOMImplementation = exports.DOMImplementation = __webpack_require__(27).DOMImplementation;exports.XMLSerializer = __webpack_require__(27).XMLSerializer;exports.DOMParser = DOMParser;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	"use strict";

	var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
	    nameChar = new RegExp("[\\-\\.0-9" + nameStartChar.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),
	    tagNamePattern = new RegExp("^" + nameStartChar.source + nameChar.source + "*(?::" + nameStartChar.source + nameChar.source + "*)?$"),
	    S_TAG = 0,
	    S_ATTR = 1,
	    S_ATTR_SPACE = 2,
	    S_EQ = 3,
	    S_ATTR_NOQUOT_VALUE = 4,
	    S_ATTR_END = 5,
	    S_TAG_SPACE = 6,
	    S_TAG_CLOSE = 7;function XMLReader() {}XMLReader.prototype = { parse: function parse(a, b, c) {
	    var e = this.domBuilder;e.startDocument();_copy(b, b = {});_parse(a, b, c, e, this.errorHandler);e.endDocument();
	  } };function _parse(a, b, c, e, d) {
	  function h(a) {
	    var b = a.slice(1, -1);if (b in c) return c[b];if ("#" === b.charAt(0)) return a = parseInt(b.substr(1).replace("x", "0x")), 65535 < a ? (a -= 65536, a = String.fromCharCode(55296 + (a >> 10), 56320 + (a & 1023))) : a = String.fromCharCode(a), a;d.error("entity not found:" + a);return a;
	  }function l(b) {
	    if (b > r) {
	      var c = a.substring(r, b).replace(/&#?\w+;/g, h);u && g(r);e.characters(c, 0, b - r);r = b;
	    }
	  }function g(b, c) {
	    for (; b >= f && (c = m.exec(a));) {
	      k = c.index, f = k + c[0].length, u.lineNumber++;
	    }u.columnNumber = b - k + 1;
	  }var k = 0,
	      f = 0,
	      m = /.*(?:\r\n?|\n)|.*$/g,
	      u = e.locator;b = [{ currentNSMap: b }];for (var F = {}, r = 0;;) {
	    try {
	      var n = a.indexOf("\x3c", r);if (0 > n) {
	        if (!a.substr(r).match(/^\s*$/)) {
	          var y = e.doc,
	              z = y.createTextNode(a.substr(r));y.appendChild(z);e.currentElement = z;
	        }break;
	      }n > r && l(n);switch (a.charAt(n + 1)) {case "/":
	          var p = a.indexOf("\x3e", n + 3),
	              t = a.substring(n + 2, p),
	              v = b.pop();0 > p ? (t = a.substring(n + 2).replace(/[\s<].*/, ""), d.error("end tag name: " + t + " is not complete:" + v.tagName), p = n + 1 + t.length) : t.match(/\s</) && (t = t.replace(/[\s<].*/, ""), d.error("end tag name: " + t + " maybe not complete"), p = n + 1 + t.length);var A = v.localNSMap,
	              B = v.tagName == t;if (B || v.tagName && v.tagName.toLowerCase() == t.toLowerCase()) {
	            e.endElement(v.uri, v.localName, t);if (A) for (var G in A) {
	              e.endPrefixMapping(G);
	            }B || d.fatalError("end tag name: " + t + " is not match the current start tagName:" + v.tagName);
	          } else b.push(v);p++;break;case "?":
	          u && g(n);p = parseInstruction(a, n, e);break;case "!":
	          u && g(n);p = parseDCC(a, n, e, d);break;default:
	          u && g(n);var q = new ElementAttributes(),
	              w = b[b.length - 1].currentNSMap,
	              p = parseElementStartPart(a, n, q, w, h, d),
	              C = q.length;!q.closed && fixSelfClosed(a, p, q.tagName, F) && (q.closed = !0, c.nbsp || d.warning("unclosed xml attribute"));if (u && C) {
	            for (var H = copyLocator(u, {}), x = 0; x < C; x++) {
	              var D = q[x];g(D.offset);D.locator = copyLocator(u, {});
	            }e.locator = H;appendElement(q, e, w) && b.push(q);e.locator = u;
	          } else appendElement(q, e, w) && b.push(q);"http://www.w3.org/1999/xhtml" !== q.uri || q.closed ? p++ : p = parseHtmlSpecialContent(a, p, q.tagName, h, e);}
	    } catch (E) {
	      d.error("element parse error: " + E), p = -1;
	    }p > r ? r = p : l(Math.max(n, r) + 1);
	  }
	}function copyLocator(a, b) {
	  b.lineNumber = a.lineNumber;b.columnNumber = a.columnNumber;return b;
	}function parseElementStartPart(a, b, c, e, d, h) {
	  for (var l, g, k = ++b, f = S_TAG;;) {
	    var m = a.charAt(k);switch (m) {case "\x3d":
	        if (f === S_ATTR) l = a.slice(b, k), f = S_EQ;else if (f === S_ATTR_SPACE) f = S_EQ;else throw Error("attribute equal must after attrName");break;case "'":case '"':
	        if (f === S_EQ || f === S_ATTR) {
	          if (f === S_ATTR && (h.warning('attribute value must after "\x3d"'), l = a.slice(b, k)), b = k + 1, k = a.indexOf(m, b), 0 < k) g = a.slice(b, k).replace(/&#?\w+;/g, d), c.add(l, g, b - 1), f = S_ATTR_END;else throw Error("attribute value no end '" + m + "' match");
	        } else if (f == S_ATTR_NOQUOT_VALUE) g = a.slice(b, k).replace(/&#?\w+;/g, d), c.add(l, g, b), h.warning('attribute "' + l + '" missed start quot(' + m + ")!!"), b = k + 1, f = S_ATTR_END;else throw Error('attribute value must after "\x3d"');break;case "/":
	        switch (f) {case S_TAG:
	            c.setTagName(a.slice(b, k));case S_ATTR_END:case S_TAG_SPACE:case S_TAG_CLOSE:
	            f = S_TAG_CLOSE, c.closed = !0;case S_ATTR_NOQUOT_VALUE:case S_ATTR:case S_ATTR_SPACE:
	            break;default:
	            throw Error("attribute invalid close char('/')");}break;case "":
	        return h.error("unexpected end of input"), f == S_TAG && c.setTagName(a.slice(b, k)), k;case "\x3e":
	        switch (f) {case S_TAG:
	            c.setTagName(a.slice(b, k));case S_ATTR_END:case S_TAG_SPACE:case S_TAG_CLOSE:
	            break;case S_ATTR_NOQUOT_VALUE:case S_ATTR:
	            g = a.slice(b, k), "/" === g.slice(-1) && (c.closed = !0, g = g.slice(0, -1));case S_ATTR_SPACE:
	            f === S_ATTR_SPACE && (g = l);f == S_ATTR_NOQUOT_VALUE ? (h.warning('attribute "' + g + '" missed quot(")!!'), c.add(l, g.replace(/&#?\w+;/g, d), b)) : ("http://www.w3.org/1999/xhtml" === e[""] && g.match(/^(?:disabled|checked|selected)$/i) || h.warning('attribute "' + g + '" missed value!! "' + g + '" instead!!'), c.add(g, g, b));break;case S_EQ:
	            throw Error("attribute value missed!!");}return k;case "\x80":
	        m = " ";default:
	        if (" " >= m) switch (f) {case S_TAG:
	            c.setTagName(a.slice(b, k));f = S_TAG_SPACE;break;case S_ATTR:
	            l = a.slice(b, k);f = S_ATTR_SPACE;break;case S_ATTR_NOQUOT_VALUE:
	            g = a.slice(b, k).replace(/&#?\w+;/g, d), h.warning('attribute "' + g + '" missed quot(")!!'), c.add(l, g, b);case S_ATTR_END:
	            f = S_TAG_SPACE;} else switch (f) {case S_ATTR_SPACE:
	            "http://www.w3.org/1999/xhtml" === e[""] && l.match(/^(?:disabled|checked|selected)$/i) || h.warning('attribute "' + l + '" missed value!! "' + l + '" instead2!!');c.add(l, l, b);b = k;f = S_ATTR;break;case S_ATTR_END:
	            h.warning('attribute space is required"' + l + '"!!');case S_TAG_SPACE:
	            f = S_ATTR;b = k;break;case S_EQ:
	            f = S_ATTR_NOQUOT_VALUE;b = k;break;case S_TAG_CLOSE:
	            throw Error("elements closed character '/' and '\x3e' must be connected to");}}k++;
	  }
	}function appendElement(a, b, c) {
	  for (var e = a.tagName, d = null, h = a.length; h--;) {
	    var l = a[h],
	        g = l.qName,
	        k = l.value,
	        f = g.indexOf(":");if (0 < f) var m = l.prefix = g.slice(0, f),
	        f = g.slice(f + 1),
	        m = "xmlns" === m && f;else f = g, m = "xmlns" === g && "";l.localName = f;!1 !== m && (null == d && (d = {}, _copy(c, c = {})), c[m] = d[m] = k, l.uri = "http://www.w3.org/2000/xmlns/", b.startPrefixMapping(m, k));
	  }for (h = a.length; h--;) {
	    if (l = a[h], m = l.prefix) "xml" === m && (l.uri = "http://www.w3.org/XML/1998/namespace"), "xmlns" !== m && (l.uri = c[m || ""]);
	  }f = e.indexOf(":");0 < f ? (m = a.prefix = e.slice(0, f), f = a.localName = e.slice(f + 1)) : (m = null, f = a.localName = e);h = a.uri = c[m || ""];b.startElement(h, f, e, a);if (a.closed) {
	    if (b.endElement(h, f, e), d) for (m in d) {
	      b.endPrefixMapping(m);
	    }
	  } else return a.currentNSMap = c, a.localNSMap = d, !0;
	}function parseHtmlSpecialContent(a, b, c, e, d) {
	  if (/^(?:script|textarea)$/i.test(c)) {
	    var h = a.indexOf("\x3c/" + c + "\x3e", b);a = a.substring(b + 1, h);if (/[&<]/.test(a)) {
	      if (/^script$/i.test(c)) return d.characters(a, 0, a.length), h;a = a.replace(/&#?\w+;/g, e);d.characters(a, 0, a.length);return h;
	    }
	  }return b + 1;
	}function fixSelfClosed(a, b, c, e) {
	  var d = e[c];null == d && (d = a.lastIndexOf("\x3c/" + c + "\x3e"), d < b && (d = a.lastIndexOf("\x3c/" + c)), e[c] = d);return d < b;
	}function _copy(a, b) {
	  for (var c in a) {
	    b[c] = a[c];
	  }
	}function parseDCC(a, b, c, e) {
	  switch (a.charAt(b + 2)) {case "-":
	      if ("-" === a.charAt(b + 3)) {
	        var d = a.indexOf("--\x3e", b + 4);if (d > b) return c.comment(a, b + 4, d - b - 4), d + 3;e.error("Unclosed comment");
	      }break;default:
	      if ("CDATA[" == a.substr(b + 3, 6)) return d = a.indexOf("]]\x3e", b + 9), c.startCDATA(), c.characters(a, b + 9, d - b - 9), c.endCDATA(), d + 3;var d = split(a, b),
	          h = d.length;if (1 < h && /!doctype/i.test(d[0][0])) return a = d[1][0], b = 3 < h && /^public$/i.test(d[2][0]) && d[3][0], e = 4 < h && d[4][0], d = d[h - 1], c.startDTD(a, b && b.replace(/^(['"])(.*?)\1$/, "$2"), e && e.replace(/^(['"])(.*?)\1$/, "$2")), c.endDTD(), d.index + d[0].length;}return -1;
	}function parseInstruction(a, b, c) {
	  var e = a.indexOf("?\x3e", b);return e && (a = a.substring(b, e).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/)) ? (c.processingInstruction(a[1], a[2]), e + 2) : -1;
	}function ElementAttributes(a) {}ElementAttributes.prototype = { setTagName: function setTagName(a) {
	    if (!tagNamePattern.test(a)) throw Error("invalid tagName:" + a);this.tagName = a;
	  }, add: function add(a, b, c) {
	    if (!tagNamePattern.test(a)) throw Error("invalid attribute:" + a);this[this.length++] = { qName: a, value: b, offset: c };
	  }, length: 0, getLocalName: function getLocalName(a) {
	    return this[a].localName;
	  }, getLocator: function getLocator(a) {
	    return this[a].locator;
	  }, getQName: function getQName(a) {
	    return this[a].qName;
	  }, getURI: function getURI(a) {
	    return this[a].uri;
	  }, getValue: function getValue(a) {
	    return this[a].value;
	  } };function _set_proto_(a, b) {
	  a.__proto__ = b;return a;
	}_set_proto_({}, _set_proto_.prototype) instanceof _set_proto_ || (_set_proto_ = function _set_proto_(a, b) {
	  function c() {}c.prototype = b;c = new c();for (b in a) {
	    c[b] = a[b];
	  }return c;
	});function split(a, b) {
	  var c,
	      e = [],
	      d = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;d.lastIndex = b;for (d.exec(a); c = d.exec(a);) {
	    if (e.push(c), c[1]) return e;
	  }
	}exports.XMLReader = XMLReader;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function copy(a, b) {
	  for (var c in a) {
	    b[c] = a[c];
	  }
	}function _extends(a, b) {
	  var c = a.prototype;if (Object.create) {
	    var d = Object.create(b.prototype);c.__proto__ = d;
	  }c instanceof b || (d = function d() {}, d.prototype = b.prototype, d = new d(), copy(c, d), a.prototype = c = d);c.constructor != a && ("function" != typeof a && console.error("unknow Class:" + a), c.constructor = a);
	}var htmlns = "http://www.w3.org/1999/xhtml",
	    NodeType = {},
	    ELEMENT_NODE = NodeType.ELEMENT_NODE = 1,
	    ATTRIBUTE_NODE = NodeType.ATTRIBUTE_NODE = 2,
	    TEXT_NODE = NodeType.TEXT_NODE = 3,
	    CDATA_SECTION_NODE = NodeType.CDATA_SECTION_NODE = 4,
	    ENTITY_REFERENCE_NODE = NodeType.ENTITY_REFERENCE_NODE = 5,
	    ENTITY_NODE = NodeType.ENTITY_NODE = 6,
	    PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7,
	    COMMENT_NODE = NodeType.COMMENT_NODE = 8,
	    DOCUMENT_NODE = NodeType.DOCUMENT_NODE = 9,
	    DOCUMENT_TYPE_NODE = NodeType.DOCUMENT_TYPE_NODE = 10,
	    DOCUMENT_FRAGMENT_NODE = NodeType.DOCUMENT_FRAGMENT_NODE = 11,
	    NOTATION_NODE = NodeType.NOTATION_NODE = 12,
	    ExceptionCode = {},
	    ExceptionMessage = {},
	    INDEX_SIZE_ERR = ExceptionCode.INDEX_SIZE_ERR = (ExceptionMessage[1] = "Index size error", 1),
	    DOMSTRING_SIZE_ERR = ExceptionCode.DOMSTRING_SIZE_ERR = (ExceptionMessage[2] = "DOMString size error", 2),
	    HIERARCHY_REQUEST_ERR = ExceptionCode.HIERARCHY_REQUEST_ERR = (ExceptionMessage[3] = "Hierarchy request error", 3),
	    WRONG_DOCUMENT_ERR = ExceptionCode.WRONG_DOCUMENT_ERR = (ExceptionMessage[4] = "Wrong document", 4),
	    INVALID_CHARACTER_ERR = ExceptionCode.INVALID_CHARACTER_ERR = (ExceptionMessage[5] = "Invalid character", 5),
	    NO_DATA_ALLOWED_ERR = ExceptionCode.NO_DATA_ALLOWED_ERR = (ExceptionMessage[6] = "No data allowed", 6),
	    NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = (ExceptionMessage[7] = "No modification allowed", 7),
	    NOT_FOUND_ERR = ExceptionCode.NOT_FOUND_ERR = (ExceptionMessage[8] = "Not found", 8),
	    NOT_SUPPORTED_ERR = ExceptionCode.NOT_SUPPORTED_ERR = (ExceptionMessage[9] = "Not supported", 9),
	    INUSE_ATTRIBUTE_ERR = ExceptionCode.INUSE_ATTRIBUTE_ERR = (ExceptionMessage[10] = "Attribute in use", 10),
	    INVALID_STATE_ERR = ExceptionCode.INVALID_STATE_ERR = (ExceptionMessage[11] = "Invalid state", 11),
	    SYNTAX_ERR = ExceptionCode.SYNTAX_ERR = (ExceptionMessage[12] = "Syntax error", 12),
	    INVALID_MODIFICATION_ERR = ExceptionCode.INVALID_MODIFICATION_ERR = (ExceptionMessage[13] = "Invalid modification", 13),
	    NAMESPACE_ERR = ExceptionCode.NAMESPACE_ERR = (ExceptionMessage[14] = "Invalid namespace", 14),
	    INVALID_ACCESS_ERR = ExceptionCode.INVALID_ACCESS_ERR = (ExceptionMessage[15] = "Invalid access", 15);function DOMException(a, b) {
	  if (b instanceof Error) var c = b;else c = this, Error.call(this, ExceptionMessage[a]), this.message = ExceptionMessage[a], Error.captureStackTrace && Error.captureStackTrace(this, DOMException);c.code = a;b && (this.message = this.message + ": " + b);return c;
	}DOMException.prototype = Error.prototype;copy(ExceptionCode, DOMException);function NodeList() {}NodeList.prototype = { length: 0, item: function item(a) {
	    return this[a] || null;
	  }, toString: function toString(a, b) {
	    for (var c = [], d = 0; d < this.length; d++) {
	      serializeToString(this[d], c, a, b);
	    }return c.join("");
	  } };function LiveNodeList(a, b) {
	  this._node = a;this._refresh = b;_updateLiveList(this);
	}function _updateLiveList(a) {
	  var b = a._node._inc || a._node.ownerDocument._inc;if (a._inc != b) {
	    var c = a._refresh(a._node);__set__(a, "length", c.length);copy(c, a);a._inc = b;
	  }
	}LiveNodeList.prototype.item = function (a) {
	  _updateLiveList(this);return this[a];
	};_extends(LiveNodeList, NodeList);function NamedNodeMap() {}function _findNodeIndex(a, b) {
	  for (var c = a.length; c--;) {
	    if (a[c] === b) return c;
	  }
	}function _addNamedNode(a, b, c, d) {
	  d ? b[_findNodeIndex(b, d)] = c : b[b.length++] = c;a && (c.ownerElement = a, b = a.ownerDocument) && (d && _onRemoveAttribute(b, a, d), _onAddAttribute(b, a, c));
	}function _removeNamedNode(a, b, c) {
	  var d = _findNodeIndex(b, c);if (0 <= d) {
	    for (var e = b.length - 1; d < e;) {
	      b[d] = b[++d];
	    }b.length = e;a && (b = a.ownerDocument) && (_onRemoveAttribute(b, a, c), c.ownerElement = null);
	  } else throw DOMException(NOT_FOUND_ERR, Error(a.tagName + "@" + c));
	}NamedNodeMap.prototype = { length: 0, item: NodeList.prototype.item, getNamedItem: function getNamedItem(a) {
	    for (var b = this.length; b--;) {
	      var c = this[b];if (c.nodeName == a) return c;
	    }
	  }, setNamedItem: function setNamedItem(a) {
	    var b = a.ownerElement;if (b && b != this._ownerElement) throw new DOMException(INUSE_ATTRIBUTE_ERR);b = this.getNamedItem(a.nodeName);_addNamedNode(this._ownerElement, this, a, b);return b;
	  }, setNamedItemNS: function setNamedItemNS(a) {
	    var b = a.ownerElement;if (b && b != this._ownerElement) throw new DOMException(INUSE_ATTRIBUTE_ERR);b = this.getNamedItemNS(a.namespaceURI, a.localName);_addNamedNode(this._ownerElement, this, a, b);return b;
	  }, removeNamedItem: function removeNamedItem(a) {
	    a = this.getNamedItem(a);_removeNamedNode(this._ownerElement, this, a);return a;
	  }, removeNamedItemNS: function removeNamedItemNS(a, b) {
	    var c = this.getNamedItemNS(a, b);_removeNamedNode(this._ownerElement, this, c);return c;
	  }, getNamedItemNS: function getNamedItemNS(a, b) {
	    for (var c = this.length; c--;) {
	      var d = this[c];if (d.localName == b && d.namespaceURI == a) return d;
	    }return null;
	  } };function DOMImplementation(a) {
	  this._features = {};if (a) for (var b in a) {
	    this._features = a[b];
	  }
	}DOMImplementation.prototype = { hasFeature: function hasFeature(a, b) {
	    var c = this._features[a.toLowerCase()];return c && (!b || b in c) ? !0 : !1;
	  }, createDocument: function createDocument(a, b, c) {
	    var d = new Document();d.implementation = this;d.childNodes = new NodeList();(d.doctype = c) && d.appendChild(c);b && (a = d.createElementNS(a, b), d.appendChild(a));return d;
	  }, createDocumentType: function createDocumentType(a, b, c) {
	    var d = new DocumentType();d.name = a;d.nodeName = a;d.publicId = b;d.systemId = c;return d;
	  } };function Node() {}Node.prototype = { firstChild: null, lastChild: null, previousSibling: null, nextSibling: null, attributes: null, parentNode: null, childNodes: null, ownerDocument: null, nodeValue: null, namespaceURI: null, prefix: null, localName: null, insertBefore: function insertBefore(a, b) {
	    return _insertBefore(this, a, b);
	  }, replaceChild: function replaceChild(a, b) {
	    this.insertBefore(a, b);b && this.removeChild(b);
	  }, removeChild: function removeChild(a) {
	    return _removeChild(this, a);
	  }, appendChild: function appendChild(a) {
	    return this.insertBefore(a, null);
	  }, hasChildNodes: function hasChildNodes() {
	    return null != this.firstChild;
	  }, cloneNode: function cloneNode(a) {
	    return _cloneNode(this.ownerDocument || this, this, a);
	  }, normalize: function normalize() {
	    for (var a = this.firstChild; a;) {
	      var b = a.nextSibling;b && b.nodeType == TEXT_NODE && a.nodeType == TEXT_NODE ? (this.removeChild(b), a.appendData(b.data)) : (a.normalize(), a = b);
	    }
	  }, isSupported: function isSupported(a, b) {
	    return this.ownerDocument.implementation.hasFeature(a, b);
	  }, hasAttributes: function hasAttributes() {
	    return 0 < this.attributes.length;
	  }, lookupPrefix: function lookupPrefix(a) {
	    for (var b = this; b;) {
	      var c = b._nsMap;if (c) for (var d in c) {
	        if (c[d] == a) return d;
	      }b = b.nodeType == ATTRIBUTE_NODE ? b.ownerDocument : b.parentNode;
	    }return null;
	  }, lookupNamespaceURI: function lookupNamespaceURI(a) {
	    for (var b = this; b;) {
	      var c = b._nsMap;if (c && a in c) return c[a];b = b.nodeType == ATTRIBUTE_NODE ? b.ownerDocument : b.parentNode;
	    }return null;
	  }, isDefaultNamespace: function isDefaultNamespace(a) {
	    return null == this.lookupPrefix(a);
	  } };function _xmlEncoder(a) {
	  return "\x3c" == a && "\x26lt;" || "\x3e" == a && "\x26gt;" || "\x26" == a && "\x26amp;" || '"' == a && "\x26quot;" || "\x26#" + a.charCodeAt() + ";";
	}copy(NodeType, Node);copy(NodeType, Node.prototype);function _visitNode(a, b) {
	  if (b(a)) return !0;if (a = a.firstChild) {
	    do {
	      if (_visitNode(a, b)) return !0;
	    } while (a = a.nextSibling);
	  }
	}function Document() {}function _onAddAttribute(a, b, c) {
	  a && a._inc++;"http://www.w3.org/2000/xmlns/" == c.namespaceURI && (b._nsMap[c.prefix ? c.localName : ""] = c.value);
	}function _onRemoveAttribute(a, b, c, d) {
	  a && a._inc++;"http://www.w3.org/2000/xmlns/" == c.namespaceURI && delete b._nsMap[c.prefix ? c.localName : ""];
	}function _onUpdateChild(a, b, c) {
	  if (a && a._inc) if (a._inc++, a = b.childNodes, c) a[a.length++] = c;else {
	    b = b.firstChild;for (c = 0; b;) {
	      a[c++] = b, b = b.nextSibling;
	    }a.length = c;
	  }
	}function _removeChild(a, b) {
	  var c = b.previousSibling,
	      d = b.nextSibling;c ? c.nextSibling = d : a.firstChild = d;d ? d.previousSibling = c : a.lastChild = c;_onUpdateChild(a.ownerDocument, a);return b;
	}function _insertBefore(a, b, c) {
	  var d = b.parentNode;d && d.removeChild(b);if (b.nodeType === DOCUMENT_FRAGMENT_NODE) {
	    d = b.firstChild;if (null == d) return b;var e = b.lastChild;
	  } else d = e = b;var f = c ? c.previousSibling : a.lastChild;d.previousSibling = f;e.nextSibling = c;f ? f.nextSibling = d : a.firstChild = d;null == c ? a.lastChild = e : c.previousSibling = e;do {
	    d.parentNode = a;
	  } while (d !== e && (d = d.nextSibling));_onUpdateChild(a.ownerDocument || a, a);b.nodeType == DOCUMENT_FRAGMENT_NODE && (b.firstChild = b.lastChild = null);return b;
	}function _appendSingleChild(a, b) {
	  var c = b.parentNode;c && c.removeChild(b);c = a.lastChild;b.parentNode = a;b.previousSibling = c;b.nextSibling = null;c ? c.nextSibling = b : a.firstChild = b;a.lastChild = b;_onUpdateChild(a.ownerDocument, a, b);return b;
	}Document.prototype = { nodeName: "#document", nodeType: DOCUMENT_NODE, doctype: null, documentElement: null, _inc: 1, insertBefore: function insertBefore(a, b) {
	    if (a.nodeType == DOCUMENT_FRAGMENT_NODE) {
	      for (var c = a.firstChild; c;) {
	        var d = c.nextSibling;this.insertBefore(c, b);c = d;
	      }return a;
	    }null == this.documentElement && a.nodeType == ELEMENT_NODE && (this.documentElement = a);return _insertBefore(this, a, b), a.ownerDocument = this, a;
	  }, removeChild: function removeChild(a) {
	    this.documentElement == a && (this.documentElement = null);return _removeChild(this, a);
	  }, importNode: function importNode(a, b) {
	    return _importNode(this, a, b);
	  }, getElementById: function getElementById(a) {
	    var b = null;_visitNode(this.documentElement, function (c) {
	      if (c.nodeType == ELEMENT_NODE && c.getAttribute("id") == a) return b = c, !0;
	    });return b;
	  }, createElement: function createElement(a) {
	    var b = new Element();b.ownerDocument = this;b.nodeName = a;b.tagName = a;b.childNodes = new NodeList();return (b.attributes = new NamedNodeMap())._ownerElement = b;
	  }, createDocumentFragment: function createDocumentFragment() {
	    var a = new DocumentFragment();a.ownerDocument = this;a.childNodes = new NodeList();return a;
	  }, createTextNode: function createTextNode(a) {
	    var b = new Text();b.ownerDocument = this;b.appendData(a);return b;
	  }, createComment: function createComment(a) {
	    var b = new Comment();b.ownerDocument = this;b.appendData(a);return b;
	  }, createCDATASection: function createCDATASection(a) {
	    var b = new CDATASection();b.ownerDocument = this;b.appendData(a);return b;
	  }, createProcessingInstruction: function createProcessingInstruction(a, b) {
	    var c = new ProcessingInstruction();c.ownerDocument = this;c.tagName = c.target = a;c.nodeValue = c.data = b;return c;
	  }, createAttribute: function createAttribute(a) {
	    var b = new Attr();b.ownerDocument = this;b.name = a;b.nodeName = a;b.localName = a;b.specified = !0;return b;
	  }, createEntityReference: function createEntityReference(a) {
	    var b = new EntityReference();b.ownerDocument = this;b.nodeName = a;return b;
	  }, createElementNS: function createElementNS(a, b) {
	    var c = new Element(),
	        d = b.split(":"),
	        e = c.attributes = new NamedNodeMap();c.childNodes = new NodeList();c.ownerDocument = this;c.nodeName = b;c.tagName = b;c.namespaceURI = a;2 == d.length ? (c.prefix = d[0], c.localName = d[1]) : c.localName = b;return e._ownerElement = c;
	  }, createAttributeNS: function createAttributeNS(a, b) {
	    var c = new Attr(),
	        d = b.split(":");c.ownerDocument = this;c.nodeName = b;c.name = b;c.namespaceURI = a;c.specified = !0;2 == d.length ? (c.prefix = d[0], c.localName = d[1]) : c.localName = b;return c;
	  } };_extends(Document, Node);function Element() {
	  this._nsMap = {};
	}Element.prototype = { nodeType: ELEMENT_NODE, hasAttribute: function hasAttribute(a) {
	    return null != this.getAttributeNode(a);
	  }, getAttribute: function getAttribute(a) {
	    return (a = this.getAttributeNode(a)) && a.value || "";
	  }, getAttributeNode: function getAttributeNode(a) {
	    return this.attributes.getNamedItem(a);
	  }, setAttribute: function setAttribute(a, b) {
	    var c = this.ownerDocument.createAttribute(a);c.value = c.nodeValue = "" + b;this.setAttributeNode(c);
	  }, removeAttribute: function removeAttribute(a) {
	    (a = this.getAttributeNode(a)) && this.removeAttributeNode(a);
	  }, appendChild: function appendChild(a) {
	    return a.nodeType === DOCUMENT_FRAGMENT_NODE ? this.insertBefore(a, null) : _appendSingleChild(this, a);
	  }, setAttributeNode: function setAttributeNode(a) {
	    return this.attributes.setNamedItem(a);
	  }, setAttributeNodeNS: function setAttributeNodeNS(a) {
	    return this.attributes.setNamedItemNS(a);
	  }, removeAttributeNode: function removeAttributeNode(a) {
	    return this.attributes.removeNamedItem(a.nodeName);
	  }, removeAttributeNS: function removeAttributeNS(a, b) {
	    var c = this.getAttributeNodeNS(a, b);c && this.removeAttributeNode(c);
	  }, hasAttributeNS: function hasAttributeNS(a, b) {
	    return null != this.getAttributeNodeNS(a, b);
	  }, getAttributeNS: function getAttributeNS(a, b) {
	    var c = this.getAttributeNodeNS(a, b);return c && c.value || "";
	  }, setAttributeNS: function setAttributeNS(a, b, c) {
	    a = this.ownerDocument.createAttributeNS(a, b);a.value = a.nodeValue = "" + c;this.setAttributeNode(a);
	  }, getAttributeNodeNS: function getAttributeNodeNS(a, b) {
	    return this.attributes.getNamedItemNS(a, b);
	  }, getElementsByTagName: function getElementsByTagName(a) {
	    return new LiveNodeList(this, function (b) {
	      var c = [];_visitNode(b, function (d) {
	        d === b || d.nodeType != ELEMENT_NODE || "*" !== a && d.tagName != a || c.push(d);
	      });return c;
	    });
	  }, getElementsByTagNameNS: function getElementsByTagNameNS(a, b) {
	    return new LiveNodeList(this, function (c) {
	      var d = [];_visitNode(c, function (e) {
	        e === c || e.nodeType !== ELEMENT_NODE || "*" !== a && e.namespaceURI !== a || "*" !== b && e.localName != b || d.push(e);
	      });return d;
	    });
	  } };Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;_extends(Element, Node);function Attr() {}Attr.prototype.nodeType = ATTRIBUTE_NODE;_extends(Attr, Node);function CharacterData() {}CharacterData.prototype = { data: "", substringData: function substringData(a, b) {
	    return this.data.substring(a, a + b);
	  }, appendData: function appendData(a) {
	    this.nodeValue = this.data = a = this.data + a;this.length = a.length;
	  }, insertData: function insertData(a, b) {
	    this.replaceData(a, 0, b);
	  }, appendChild: function appendChild(a) {
	    throw Error(ExceptionMessage[HIERARCHY_REQUEST_ERR]);
	  }, deleteData: function deleteData(a, b) {
	    this.replaceData(a, b, "");
	  }, replaceData: function replaceData(a, b, c) {
	    var d = this.data.substring(0, a);a = this.data.substring(a + b);this.nodeValue = this.data = c = d + c + a;this.length = c.length;
	  } };_extends(CharacterData, Node);function Text() {}Text.prototype = { nodeName: "#text", nodeType: TEXT_NODE, splitText: function splitText(a) {
	    var b = this.data,
	        c = b.substring(a);this.data = this.nodeValue = b = b.substring(0, a);this.length = b.length;a = this.ownerDocument.createTextNode(c);this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);return a;
	  } };_extends(Text, CharacterData);function Comment() {}Comment.prototype = { nodeName: "#comment", nodeType: COMMENT_NODE };_extends(Comment, CharacterData);function CDATASection() {}CDATASection.prototype = { nodeName: "#cdata-section", nodeType: CDATA_SECTION_NODE };_extends(CDATASection, CharacterData);function DocumentType() {}DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;_extends(DocumentType, Node);function Notation() {}Notation.prototype.nodeType = NOTATION_NODE;_extends(Notation, Node);function Entity() {}Entity.prototype.nodeType = ENTITY_NODE;_extends(Entity, Node);function EntityReference() {}EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;_extends(EntityReference, Node);function DocumentFragment() {}DocumentFragment.prototype.nodeName = "#document-fragment";DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;_extends(DocumentFragment, Node);function ProcessingInstruction() {}ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;_extends(ProcessingInstruction, Node);function XMLSerializer() {}XMLSerializer.prototype.serializeToString = function (a, b, c) {
	  return nodeSerializeToString.call(a, b, c);
	};Node.prototype.toString = nodeSerializeToString;function nodeSerializeToString(a, b) {
	  var c = [],
	      d = 9 == this.nodeType ? this.documentElement : this,
	      e = d.prefix,
	      f = d.namespaceURI;if (f && null == e && (e = d.lookupPrefix(f), null == e)) var h = [{ namespace: f, prefix: null }];serializeToString(this, c, a, b, h);return c.join("");
	}function needNamespaceDefine(a, b, c) {
	  b = a.prefix || "";a = a.namespaceURI;if (!b && !a || "xml" === b && "http://www.w3.org/XML/1998/namespace" === a || "http://www.w3.org/2000/xmlns/" == a) return !1;for (var d = c.length; d--;) {
	    var e = c[d];if (e.prefix == b) return e.namespace != a;
	  }return !0;
	}function serializeToString(a, b, c, d, e) {
	  if (d) if (a = d(a)) {
	    if ("string" == typeof a) {
	      b.push(a);return;
	    }
	  } else return;switch (a.nodeType) {case ELEMENT_NODE:
	      e || (e = []);var f = a.attributes,
	          h = f.length,
	          g = a.firstChild,
	          p = a.tagName;c = htmlns === a.namespaceURI || c;b.push("\x3c", p);for (var l = 0; l < h; l++) {
	        var k = f.item(l);"xmlns" == k.prefix ? e.push({ prefix: k.localName, namespace: k.value }) : "xmlns" == k.nodeName && e.push({ prefix: "", namespace: k.value });
	      }for (l = 0; l < h; l++) {
	        k = f.item(l);if (needNamespaceDefine(k, c, e)) {
	          var m = k.prefix || "",
	              n = k.namespaceURI;b.push(m ? " xmlns:" + m : " xmlns", '\x3d"', n, '"');e.push({ prefix: m, namespace: n });
	        }serializeToString(k, b, c, d, e);
	      }needNamespaceDefine(a, c, e) && (m = a.prefix || "", n = a.namespaceURI, b.push(m ? " xmlns:" + m : " xmlns", '\x3d"', n, '"'), e.push({ prefix: m, namespace: n }));if (g || c && !/^(?:meta|link|img|br|hr|input)$/i.test(p)) {
	        b.push("\x3e");if (c && /^script$/i.test(p)) for (; g;) {
	          g.data ? b.push(g.data) : serializeToString(g, b, c, d, e), g = g.nextSibling;
	        } else for (; g;) {
	          serializeToString(g, b, c, d, e), g = g.nextSibling;
	        }b.push("\x3c/", p, "\x3e");
	      } else b.push("/\x3e");break;case DOCUMENT_NODE:case DOCUMENT_FRAGMENT_NODE:
	      for (g = a.firstChild; g;) {
	        serializeToString(g, b, c, d, e), g = g.nextSibling;
	      }break;case ATTRIBUTE_NODE:
	      return b.push(" ", a.name, '\x3d"', a.value.replace(/[<&"]/g, _xmlEncoder), '"');case TEXT_NODE:
	      return b.push(a.data.replace(/[<&]/g, _xmlEncoder));case CDATA_SECTION_NODE:
	      return b.push("\x3c![CDATA[", a.data, "]]\x3e");case COMMENT_NODE:
	      return b.push("\x3c!--", a.data, "--\x3e");case DOCUMENT_TYPE_NODE:
	      c = a.publicId;d = a.systemId;b.push("\x3c!DOCTYPE ", a.name);c ? (b.push(' PUBLIC "', c), d && "." != d && b.push('" "', d), b.push('"\x3e')) : d && "." != d ? b.push(' SYSTEM "', d, '"\x3e') : ((a = a.internalSubset) && b.push(" [", a, "]"), b.push("\x3e"));break;case PROCESSING_INSTRUCTION_NODE:
	      return b.push("\x3c?", a.target, " ", a.data, "?\x3e");case ENTITY_REFERENCE_NODE:
	      return b.push("\x26", a.nodeName, ";");default:
	      b.push("??", a.nodeName);}
	}function _importNode(a, b, c) {
	  var d;switch (b.nodeType) {case ELEMENT_NODE:
	      d = b.cloneNode(!1), d.ownerDocument = a;case DOCUMENT_FRAGMENT_NODE:
	      break;case ATTRIBUTE_NODE:
	      c = !0;}d || (d = b.cloneNode(!1));d.ownerDocument = a;d.parentNode = null;if (c) for (b = b.firstChild; b;) {
	    d.appendChild(_importNode(a, b, c)), b = b.nextSibling;
	  }return d;
	}function _cloneNode(a, b, c) {
	  var d = new b.constructor(),
	      e;for (e in b) {
	    var f = b[e];"object" != (typeof f === "undefined" ? "undefined" : _typeof(f)) && f != d[e] && (d[e] = f);
	  }b.childNodes && (d.childNodes = new NodeList());d.ownerDocument = a;switch (d.nodeType) {case ELEMENT_NODE:
	      e = b.attributes;var h = d.attributes = new NamedNodeMap(),
	          f = e.length;h._ownerElement = d;for (h = 0; h < f; h++) {
	        d.setAttributeNode(_cloneNode(a, e.item(h), !0));
	      }break;case ATTRIBUTE_NODE:
	      c = !0;}if (c) for (b = b.firstChild; b;) {
	    d.appendChild(_cloneNode(a, b, c)), b = b.nextSibling;
	  }return d;
	}function __set__(a, b, c) {
	  a[b] = c;
	}try {
	  if (Object.defineProperty) {
	    var getTextContent = function getTextContent(a) {
	      switch (a.nodeType) {case ELEMENT_NODE:case DOCUMENT_FRAGMENT_NODE:
	          var b = [];for (a = a.firstChild; a;) {
	            7 !== a.nodeType && 8 !== a.nodeType && b.push(getTextContent(a)), a = a.nextSibling;
	          }return b.join("");default:
	          return a.nodeValue;}
	    };Object.defineProperty(LiveNodeList.prototype, "length", { get: function get() {
	        _updateLiveList(this);return this.$$length;
	      } });Object.defineProperty(Node.prototype, "textContent", { get: function get() {
	        return getTextContent(this);
	      }, set: function set(a) {
	        switch (this.nodeType) {case ELEMENT_NODE:case DOCUMENT_FRAGMENT_NODE:
	            for (; this.firstChild;) {
	              this.removeChild(this.firstChild);
	            }(a || String(a)) && this.appendChild(this.ownerDocument.createTextNode(a));break;default:
	            this.nodeValue = this.value = this.data = a;}
	      } });__set__ = function __set__(a, b, c) {
	      a["$$" + b] = c;
	    };
	  }
	} catch (a) {}exports.DOMImplementation = DOMImplementation;exports.XMLSerializer = XMLSerializer;

/***/ })
/******/ ]);