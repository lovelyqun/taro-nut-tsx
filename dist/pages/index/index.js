"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "../node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/index/index.tsx":
/*!**********************************************************************************!*\
  !*** ../node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/index/index.tsx ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../node_modules/vue/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "../node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* unplugin-vue-components disabled */


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MwCtn",
  props: {
    attrs: {
      type: Object,
      default: function _default() {}
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      refresherEnabled: true,
      refresherTriggered: false
    });
    var onPullDownRefresh = function onPullDownRefresh() {
      state.refresherTriggered = true;
      setTimeout(function () {
        state.refresherTriggered = false;
      }, 1000);
    };
    return function () {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.ScrollView, {
        "scroll-y": true,
        "refresherTriggered": state.refresherTriggered,
        "refresherEnabled": state.refresherEnabled,
        "onRefresherrefresh": onPullDownRefresh
      }, {
        default: function _default() {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            "style": "height:80vh"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            "style": "height:200px;overflow:auto"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            "style": 'height:50px'
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("dddd")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            "style": 'height:50px'
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("dddd")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            "style": 'height:50px'
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("dddd")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            "style": 'height:50px'
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("dddd")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            "style": 'height:50px'
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("dddd")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            "style": 'height:50px'
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("dddd")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            "style": 'height:50px'
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("dddd")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            "style": 'height:50px'
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("dddd")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            "style": 'height:50px'
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("dddd")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            "style": 'height:50px'
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("dddd")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            "style": 'height:50px'
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("dddd")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            "style": 'height:50px'
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("dddd")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            "style": 'height:50px'
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("dddd")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            "style": 'height:50px'
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("dddd")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            "style": 'height:50px'
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("dddd")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            "style": 'height:50px'
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("dddd")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            "style": 'height:50px'
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("dddd")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            "style": 'height:50px'
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("dddd")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            "style": 'height:50px'
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("dddd")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
            "style": 'height:50px'
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("dddd")])])])];
        }
      });
    };
  }
});

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "../node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.tsx */ "../node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/index/index.tsx");


var config = {"navigationBarTitleText":"首页"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_raw_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_raw_js_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors"], function() { return __webpack_exec__("./src/pages/index/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map