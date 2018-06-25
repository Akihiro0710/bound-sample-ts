/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Component.ts":
/*!**************************!*\
  !*** ./src/Component.ts ***!
  \**************************/
/*! exports provided: Defaults, Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Defaults\", function() { return Defaults; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\nvar __assign = (undefined && undefined.__assign) || Object.assign || function(t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n        s = arguments[i];\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n            t[p] = s[p];\n    }\n    return t;\n};\nvar Defaults = {\n    location: {\n        x: 200,\n        y: 150\n    },\n    speed: {\n        x: 6.0,\n        y: 6.0\n    },\n    color: '#3399FF',\n    size: 4\n};\nvar Component = /** @class */ (function () {\n    function Component(props) {\n        if (props === void 0) { props = null; }\n        this.props = __assign({}, JSON.parse(JSON.stringify(Defaults)), (props || {}));\n    }\n    Component.prototype.move = function (size) {\n        var props = this.props;\n        var location = props.location;\n        var speed = props.speed;\n        location.x += speed.x;\n        location.y += speed.y;\n        if (location.x < 0 || location.x > size.width) {\n            speed.x *= -1;\n        }\n        if (location.y < 0 || location.y > size.height) {\n            speed.y *= -1;\n            if (location.y < 0)\n                location.y = 0;\n            if (location.y > size.height)\n                location.y = size.height;\n        }\n        if (location.x < 0)\n            location.x = 0;\n        if (location.x > size.width)\n            location.x = size.width;\n        if (location.y < 0)\n            location.y = 0;\n        if (location.y > size.height)\n            location.y = size.height;\n    };\n    Component.prototype.draw = function (context) {\n        var props = this.props;\n        var location = props.location;\n        context.beginPath();\n        context.fillStyle = props.color;\n        context.arc(location.x, location.y, props.size, 0, Math.PI * 2.0);\n        context.fill();\n    };\n    return Component;\n}());\n\n\n\n//# sourceURL=webpack:///./src/Component.ts?");

/***/ }),

/***/ "./src/Field.ts":
/*!**********************!*\
  !*** ./src/Field.ts ***!
  \**********************/
/*! exports provided: Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Field\", function() { return Field; });\nvar Field = /** @class */ (function () {\n    function Field(e) {\n        var _this = this;\n        this.canvas = e;\n        this.context = this.canvas.getContext('2d');\n        this.context.globalCompositeOperation = \"source-over\";\n        var parent = e.parentElement;\n        this.size = { width: parent.clientWidth, height: parent.clientHeight };\n        this.components = [];\n        setInterval(function () { return _this.draw(); }, 33);\n    }\n    Field.prototype.clear = function () {\n        var context = this.context;\n        if (!context)\n            return;\n        var size = this.size;\n        context.fillStyle = \"#000\";\n        context.fillRect(0, 0, size.width, size.height);\n    };\n    Field.prototype.resize = function (parent) {\n        var width = parent.clientWidth;\n        var height = parent.clientHeight;\n        console.log(width);\n        this.size.width = width;\n        this.canvas.width = width;\n        this.size.height = height;\n        this.canvas.height = height;\n    };\n    Field.prototype.add = function (component) {\n        this.components.push(component);\n    };\n    Field.prototype.draw = function () {\n        var _this = this;\n        this.clear();\n        if (this.components.length < 1)\n            return;\n        this.components.forEach(function (component) {\n            component.move(_this.size);\n            component.draw(_this.context);\n        });\n    };\n    return Field;\n}());\n\n\n\n//# sourceURL=webpack:///./src/Field.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/Component.ts\");\n/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field */ \"./src/Field.ts\");\n\n\nwindow.onload = function () {\n    var canvas = document.getElementById('canvas');\n    var field = new _Field__WEBPACK_IMPORTED_MODULE_1__[\"Field\"](canvas);\n    var outputArea = document.getElementById('output-area');\n    var resize = function () { return field.resize(outputArea); };\n    var getInputElementById = function (id) { return document.getElementById(id); };\n    resize();\n    field.add(new _Component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]());\n    window.addEventListener('resize', resize);\n    var inputs = {\n        locationX: getInputElementById(\"location-x\"),\n        locationY: getInputElementById(\"location-y\"),\n        speedX: getInputElementById(\"speed-x\"),\n        speedY: getInputElementById(\"speed-y\"),\n        color: getInputElementById(\"color\"),\n        size: getInputElementById(\"size\")\n    };\n    var setValue = function (props) {\n        inputs.locationX.value = props.location.x;\n        inputs.locationY.value = props.location.y;\n        inputs.speedX.value = props.speed.x;\n        inputs.speedY.value = props.speed.y;\n        inputs.color.value = props.color;\n        inputs.size.value = props.size;\n    };\n    var getValue = function () {\n        return {\n            location: {\n                x: parseInt(inputs.locationX.value),\n                y: parseInt(inputs.locationY.value)\n            },\n            speed: {\n                x: parseInt(inputs.speedX.value),\n                y: parseInt(inputs.speedY.value)\n            },\n            color: inputs.color.value,\n            size: parseInt(inputs.size.value)\n        };\n    };\n    var addComponent = function () { return field.add(new _Component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"](getValue())); };\n    setValue(_Component__WEBPACK_IMPORTED_MODULE_0__[\"Defaults\"]);\n    document.getElementById(\"add-button\").addEventListener('click', addComponent);\n    canvas.addEventListener('click', function (ev) {\n        inputs.locationX.value = ev.clientX.toString();\n        inputs.locationY.value = ev.clientY.toString();\n        addComponent();\n    });\n};\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

/******/ });