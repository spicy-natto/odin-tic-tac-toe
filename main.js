/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*** Begin CSS Reset ***/\n/* Taken from https://piccalil.li/blog/a-more-modern-css-reset/) */\n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Prevent font size inflation */\nhtml {\n  -moz-text-size-adjust: none;\n  -webkit-text-size-adjust: none;\n  text-size-adjust: none;\n}\n\n/* Remove default margin in favour of better control in authored CSS */\nbody, h1, h2, h3, h4, p,\nfigure, blockquote, dl, dd {\n  margin-block-end: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  line-height: 1.5;\n}\n\n/* Set shorter line heights on headings and interactive elements */\nh1, h2, h3, h4,\nbutton, input, label {\n  line-height: 1.1;\n}\n\n/* Balance text wrapping on headings */\nh1, h2,\nh3, h4 {\n  text-wrap: balance;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n  color: currentColor;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput, button,\ntextarea, select {\n  font-family: inherit;\n  font-size: inherit;\n}\n\n/* Make sure textareas without a rows attribute are not tiny */\ntextarea:not([rows]) {\n  min-height: 10em;\n}\n\n/* Anything that has been anchored to should have extra scroll margin */\n:target {\n  scroll-margin-block: 5ex;\n}\n\n/*** End CSS Reset ***/\n\n:root {\n  --cell-width: 10rem;\n  --cell-gap: 5px;\n  --board-width: calc(calc(var(--cell-gap) * 2) + calc(var(--cell-width) * 3));\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin: 0;\n    background: #f5f3ff;\n}\n\n.game-board {\n    display: grid;\n    grid-template-columns: repeat(3, var(--cell-width));\n    grid-template-rows: repeat(3, var(--cell-width));\n    background: black;\n    gap: var(--cell-gap);\n  }\n\n  .game-board button {\n    border: none;\n    background-color: #f0fdf4;\n    font-size: 6em;\n  }\n\n  .game-board button:hover {\n    background-color: #dcfce7;\n    transition: 0.1s;\n  }\n\n  .players {\n    width: var(--board-width);\n    align-self:center;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    margin-bottom: 2rem;\n  }\n\n  .player {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .player h1 {\n    font-size: 2rem;\n    margin-bottom: .5rem;\n  }\n\n  .player-input-div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .player-input-div label {\n    font-size: 1rem;\n    margin-bottom: .5rem;\n  }\n\n  .players input {\n    font-size: 1.5rem;\n    text-transform: uppercase;\n    text-align: center;\n    width: 95%;\n    color: inherit;\n    font-weight: 900;\n    background: #f0fdf4;\n    border: 1px black solid;\n    border-radius: .5rem;\n  }\n\n  .player1 {\n    color: #1e40af;\n  }\n\n  .player2 {\n    color: #db2777;\n  }\n\n  .game-status {\n    margin-top: 0px;\n    font-size: 2rem;\n    font-weight: 800;\n    margin-bottom: 1rem;\n  }\n\n  .restart-button {\n    margin-top: 3rem;\n    padding: 1rem 2rem;\n    font-size: 1.5rem;\n    background: #dcfce7;\n    border-radius: 1rem;\n    border: 2px solid black;\n    font-weight: 800;\n  }\n\n  .restart-button:hover {\n    background-color: #bbf7d0;\n    transition: 0.1s;\n  }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/ramda/es/clone.js":
/*!****************************************!*\
  !*** ./node_modules/ramda/es/clone.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _internal_clone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/_clone.js */ \"./node_modules/ramda/es/internal/_clone.js\");\n/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1.js */ \"./node_modules/ramda/es/internal/_curry1.js\");\n\n\n\n/**\n * Creates a deep copy of the source that can be used in place of the source\n * object without retaining any references to it.\n * The source object may contain (nested) `Array`s and `Object`s,\n * `Number`s, `String`s, `Boolean`s and `Date`s.\n * `Function`s are assigned by reference rather than copied.\n *\n * Dispatches to a `clone` method if present.\n *\n * Note that if the source object has multiple nodes that share a reference,\n * the returned object will have the same structure, but the references will\n * be pointed to the location within the cloned value.\n *\n * @func\n * @memberOf R\n * @since v0.1.0\n * @category Object\n * @sig {*} -> {*}\n * @param {*} value The object or array to clone\n * @return {*} A deeply cloned copy of `val`\n * @example\n *\n *      const objects = [{}, {}, {}];\n *      const objectsClone = R.clone(objects);\n *      objects === objectsClone; //=> false\n *      objects[0] === objectsClone[0]; //=> false\n */\nvar clone = /*#__PURE__*/(0,_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function clone(value) {\n  return value != null && typeof value.clone === 'function' ? value.clone() : (0,_internal_clone_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(value, true);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clone);\n\n//# sourceURL=webpack:///./node_modules/ramda/es/clone.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_clone.js":
/*!**************************************************!*\
  !*** ./node_modules/ramda/es/internal/_clone.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _clone)\n/* harmony export */ });\n/* harmony import */ var _cloneRegExp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_cloneRegExp.js */ \"./node_modules/ramda/es/internal/_cloneRegExp.js\");\n/* harmony import */ var _type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type.js */ \"./node_modules/ramda/es/type.js\");\n\n\n\n/**\n * Copies an object.\n *\n * @private\n * @param {*} value The value to be copied\n * @param {Boolean} deep Whether or not to perform deep cloning.\n * @return {*} The copied value.\n */\nfunction _clone(value, deep, map) {\n  map || (map = new _ObjectMap());\n\n  // this avoids the slower switch with a quick if decision removing some milliseconds in each run.\n  if (_isPrimitive(value)) {\n    return value;\n  }\n  var copy = function copy(copiedValue) {\n    // Check for circular and same references on the object graph and return its corresponding clone.\n    var cachedCopy = map.get(value);\n    if (cachedCopy) {\n      return cachedCopy;\n    }\n    map.set(value, copiedValue);\n    for (var key in value) {\n      if (Object.prototype.hasOwnProperty.call(value, key)) {\n        copiedValue[key] = deep ? _clone(value[key], true, map) : value[key];\n      }\n    }\n    return copiedValue;\n  };\n  switch ((0,_type_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value)) {\n    case 'Object':\n      return copy(Object.create(Object.getPrototypeOf(value)));\n    case 'Array':\n      return copy(Array(value.length));\n    case 'Date':\n      return new Date(value.valueOf());\n    case 'RegExp':\n      return (0,_cloneRegExp_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(value);\n    case 'Int8Array':\n    case 'Uint8Array':\n    case 'Uint8ClampedArray':\n    case 'Int16Array':\n    case 'Uint16Array':\n    case 'Int32Array':\n    case 'Uint32Array':\n    case 'Float32Array':\n    case 'Float64Array':\n    case 'BigInt64Array':\n    case 'BigUint64Array':\n      return value.slice();\n    default:\n      return value;\n  }\n}\nfunction _isPrimitive(param) {\n  var type = typeof param;\n  return param == null || type != 'object' && type != 'function';\n}\nvar _ObjectMap = /*#__PURE__*/function () {\n  function _ObjectMap() {\n    this.map = {};\n    this.length = 0;\n  }\n  _ObjectMap.prototype.set = function (key, value) {\n    var hashedKey = this.hash(key);\n    var bucket = this.map[hashedKey];\n    if (!bucket) {\n      this.map[hashedKey] = bucket = [];\n    }\n    bucket.push([key, value]);\n    this.length += 1;\n  };\n  _ObjectMap.prototype.hash = function (key) {\n    var hashedKey = [];\n    for (var value in key) {\n      hashedKey.push(Object.prototype.toString.call(key[value]));\n    }\n    return hashedKey.join();\n  };\n  _ObjectMap.prototype.get = function (key) {\n    /**\n     * depending on the number of objects to be cloned is faster to just iterate over the items in the map just because the hash function is so costly,\n     * on my tests this number is 180, anything above that using the hash function is faster.\n     */\n    if (this.length <= 180) {\n      for (var p in this.map) {\n        var bucket = this.map[p];\n        for (var i = 0; i < bucket.length; i += 1) {\n          var element = bucket[i];\n          if (element[0] === key) {\n            return element[1];\n          }\n        }\n      }\n      return;\n    }\n    var hashedKey = this.hash(key);\n    var bucket = this.map[hashedKey];\n    if (!bucket) {\n      return;\n    }\n    for (var i = 0; i < bucket.length; i += 1) {\n      var element = bucket[i];\n      if (element[0] === key) {\n        return element[1];\n      }\n    }\n  };\n  return _ObjectMap;\n}();\n\n//# sourceURL=webpack:///./node_modules/ramda/es/internal/_clone.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_cloneRegExp.js":
/*!********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_cloneRegExp.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _cloneRegExp)\n/* harmony export */ });\nfunction _cloneRegExp(pattern) {\n  return new RegExp(pattern.source, pattern.flags ? pattern.flags : (pattern.global ? 'g' : '') + (pattern.ignoreCase ? 'i' : '') + (pattern.multiline ? 'm' : '') + (pattern.sticky ? 'y' : '') + (pattern.unicode ? 'u' : '') + (pattern.dotAll ? 's' : ''));\n}\n\n//# sourceURL=webpack:///./node_modules/ramda/es/internal/_cloneRegExp.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_curry1.js":
/*!***************************************************!*\
  !*** ./node_modules/ramda/es/internal/_curry1.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _curry1)\n/* harmony export */ });\n/* harmony import */ var _isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isPlaceholder.js */ \"./node_modules/ramda/es/internal/_isPlaceholder.js\");\n\n\n/**\n * Optimized internal one-arity curry function.\n *\n * @private\n * @category Function\n * @param {Function} fn The function to curry.\n * @return {Function} The curried function.\n */\nfunction _curry1(fn) {\n  return function f1(a) {\n    if (arguments.length === 0 || (0,_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a)) {\n      return f1;\n    } else {\n      return fn.apply(this, arguments);\n    }\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/ramda/es/internal/_curry1.js?");

/***/ }),

/***/ "./node_modules/ramda/es/internal/_isPlaceholder.js":
/*!**********************************************************!*\
  !*** ./node_modules/ramda/es/internal/_isPlaceholder.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _isPlaceholder)\n/* harmony export */ });\nfunction _isPlaceholder(a) {\n  return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;\n}\n\n//# sourceURL=webpack:///./node_modules/ramda/es/internal/_isPlaceholder.js?");

/***/ }),

/***/ "./node_modules/ramda/es/type.js":
/*!***************************************!*\
  !*** ./node_modules/ramda/es/type.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/_curry1.js */ \"./node_modules/ramda/es/internal/_curry1.js\");\n\n\n/**\n * Gives a single-word string description of the (native) type of a value,\n * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not\n * attempt to distinguish user Object types any further, reporting them all as\n * 'Object'.\n *\n * @func\n * @memberOf R\n * @since v0.8.0\n * @category Type\n * @sig * -> String\n * @param {*} val The value to test\n * @return {String}\n * @example\n *\n *      R.type({}); //=> \"Object\"\n *      R.type(1); //=> \"Number\"\n *      R.type(false); //=> \"Boolean\"\n *      R.type('s'); //=> \"String\"\n *      R.type(null); //=> \"Null\"\n *      R.type([]); //=> \"Array\"\n *      R.type(/[A-z]/); //=> \"RegExp\"\n *      R.type(() => {}); //=> \"Function\"\n *      R.type(async () => {}); //=> \"AsyncFunction\"\n *      R.type(undefined); //=> \"Undefined\"\n *      R.type(BigInt(123)); //=> \"BigInt\"\n */\nvar type = /*#__PURE__*/(0,_internal_curry1_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function type(val) {\n  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (type);\n\n//# sourceURL=webpack:///./node_modules/ramda/es/type.js?");

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ \"./node_modules/ramda/es/clone.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\n\n\nfunction Gameboard(sideLength, brd) {\n\n    // Initialize board\n    const emptyVal = '';\n    const board = brd ? brd : initBoard();\n\n    function initBoard() {\n        return _util_js__WEBPACK_IMPORTED_MODULE_0__.init2dArray(sideLength, sideLength, () => emptyVal);\n    }\n\n    function setCell(x, y, val) {\n        if (_util_js__WEBPACK_IMPORTED_MODULE_0__.areCoordsValid(board, x, y)) {\n            const newBrd = (0,ramda__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(board);\n            newBrd[x][y] = val;\n            return Gameboard(sideLength, newBrd);\n        }\n        return false;\n    }\n\n    function isCellEmpty(x, y) {\n        if (_util_js__WEBPACK_IMPORTED_MODULE_0__.areCoordsValid(board, x, y)) {\n            return board[x][y] === emptyVal;\n        }\n        return false;\n    }\n\n    function getCell(x, y) {\n        if (_util_js__WEBPACK_IMPORTED_MODULE_0__.areCoordsValid(board, x, y)) {\n            return board[x][y];\n        }\n    }\n\n    function getBoard() {\n        return (0,ramda__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(board);\n    } \n\n    return { getBoard, setCell, isCellEmpty, getCell };\n}\n\n\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game-controller.js":
/*!********************************!*\
  !*** ./src/game-controller.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameController: () => (/* binding */ GameController)\n/* harmony export */ });\n/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ \"./node_modules/ramda/es/clone.js\");\n/* harmony import */ var _game_logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-logic.js */ \"./src/game-logic.js\");\n/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board.js */ \"./src/board.js\");\n\n\n\n\nfunction GameController() {\n    const players = {\n        player1: {token: 'X', name: 'Player 1'},\n        player2: {token: 'O', name: 'Player 2'}\n    }\n    let activePlayer;\n    let gameStatus;\n    let board;\n    const gameLogic = _game_logic_js__WEBPACK_IMPORTED_MODULE_0__.GameLogic(players.player1, players.player2);\n\n    initialize();\n\n    function getActivePlayer() {\n        return (0,ramda__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(activePlayer);\n    }\n\n    function switchActivePlayer() {\n        activePlayer = \n            activePlayer.token === players.player1.token \n            ? players.player2\n            : players.player1;\n    }\n\n    function getPlayers() {\n        return (0,ramda__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(players);\n    }\n    \n    function setPlayerName(playerKey, name) {\n        if (playerKey in players) {\n            players[playerKey].name = name;\n        }\n    }\n\n    //todo - maybe update getBoard to actually\n    // provide board object?\n    function getBoard() {\n        return board.getBoard();\n    }\n\n    function getCell(row, col) {\n        return board.getCell(row, col);\n    }\n\n    function printBoard() {\n        return board.printBoard();\n    }\n    \n    function getGameStatus() {\n        return gameStatus;\n    }\n\n    function initialize() {\n        activePlayer = players.player1;\n        gameStatus = 'IN PROGRESS';\n        board = _board_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard(3);\n    }\n\n    function move(x, y) {\n        const token = activePlayer.token;\n        if (gameLogic.isValidMove(x, y, board)) {\n            board = board.setCell(x, y, token);\n            if (board) {\n                gameStatus = gameLogic.getGameStatus(board);\n                if(gameStatus === 'IN PROGRESS')\n                    switchActivePlayer();\n            }\n        }\n    }\n\n    return { getActivePlayer, getBoard, getCell, printBoard, \n            initialize, getGameStatus, getPlayers, move, setPlayerName};\n}\n\n\n\n//# sourceURL=webpack:///./src/game-controller.js?");

/***/ }),

/***/ "./src/game-logic.js":
/*!***************************!*\
  !*** ./src/game-logic.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameLogic: () => (/* binding */ GameLogic)\n/* harmony export */ });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\n\nfunction GameLogic(player1, player2) {\n\n   const playerVals = [player1.token, player2.token];\n\n    function isWinner(player, brd) {\n        const arrBoard = brd.getBoard();\n        const horizontalRows = _util_js__WEBPACK_IMPORTED_MODULE_0__.rotateLeft(arrBoard);\n        const diagonals = _util_js__WEBPACK_IMPORTED_MODULE_0__.getDiagonals(arrBoard);\n        const allWinPaths = [arrBoard, horizontalRows, diagonals].flat();\n    \n        return allWinPaths.some(arr => _util_js__WEBPACK_IMPORTED_MODULE_0__.onlyContains([player.token], arr));\n    };\n\n    function isFull(brd) {\n        return _util_js__WEBPACK_IMPORTED_MODULE_0__.onlyContains(playerVals, brd.getBoard());\n    };\n\n    function getGameStatus(brd) {\n        if (isWinner(player1, brd)) {\n            return player1.token;\n        } else if (isWinner(player2, brd)) {\n            return player2.token;\n        } else if (isFull(brd)) {\n            return 'TIE'\n        } else {\n            return 'IN PROGRESS'\n        }\n    };\n\n    function isValidMove(x, y, brd) {\n        return getGameStatus(brd) === 'IN PROGRESS'\n            && brd.isCellEmpty(x, y);\n    }\n\n    return { isWinner, isFull, getGameStatus, isValidMove };\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/game-logic.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n/* harmony import */ var _game_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-controller.js */ \"./src/game-controller.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\nconst domController = (function() {\n\n    // Cache DOM\n    const gameBoardDiv = document.querySelector('.game-board');\n    const statusMsg = document.querySelector('.game-status');\n    const restartBtn = document.querySelector('.restart-button');\n    const player1Name = document.querySelector('#player1-name');\n    const player2Name = document.querySelector('#player2-name');\n    const cellArray = generateCellArr(3);\n    setDomGameBoard(gameBoardDiv, cellArray);\n\n    // Initialize game controller\n    const gameController = _game_controller_js__WEBPACK_IMPORTED_MODULE_1__.GameController();\n\n    // Set event listeners\n    setCellListeners(cellArray);\n    restartBtn.addEventListener('click', restartGame);\n\n    player1Name.addEventListener('change', (e) => {\n        gameController.setPlayerName('player1', e.target.value.toUpperCase());\n    });\n    player2Name.addEventListener('change', (e) => {\n        gameController.setPlayerName('player2', e.target.value.toUpperCase());\n    });\n\n    // Render\n    render();\n\n    function render() {\n        syncBoard(cellArray, gameController.getBoard());\n        setPlayerClass(gameController.getActivePlayer().token, statusMsg);\n        statusMsg.innerText = \n            createStatusMsg(gameController.getGameStatus());\n    }\n\n    function restartGame()  {\n        gameController.initialize();\n        render();\n    }\n\n    function syncBoard(cellArr, boardArr) {\n        cellArr.forEach((row, rowInd) => {\n            row.forEach((el, colInd) => {\n                const cellToken = boardArr[rowInd][colInd];\n                el.innerText = cellToken;\n                setPlayerClass(cellToken, el);\n            })\n        });\n    }\n\n    function generateCellArr(sideLength) {\n        return _util_js__WEBPACK_IMPORTED_MODULE_0__.init2dArray(sideLength, sideLength, createCell);\n    }\n\n    function createCell() {\n        const button = document.createElement('button');\n        button.setAttribute('type', 'button');\n        button.classList.add('gameCell');\n        return button;\n    }\n\n    function setDomGameBoard(div, cellArr) {\n        div.replaceChildren(...cellArr.flat());\n    }\n\n    // todo make more flexible based on player 1 / player 2 info\n    function createStatusMsg(status) {\n        const activePlayer = gameController.getActivePlayer();\n        const playerName = activePlayer.name.toUpperCase();\n        let msg;\n        switch(status) {\n            case 'X':\n            case 'O':\n                msg = playerName + ' WINS!';\n                break;\n            case 'TIE':\n                msg = 'TIE!';\n                break;\n            case 'IN PROGRESS':\n                    msg = playerName + '\\'S TURN!';\n                break;\n            default:\n                msg = 'Error';\n        }\n\n        return msg;\n    }\n\n    // Todo - figure out consistent x / y notation\n    function setCellListeners(cellArr) {\n        cellArr.forEach((row, rowInd) => {\n            row.forEach((el, colInd) => {\n                el.addEventListener(\"click\", () => {\n                    const gameStatus = gameController.getGameStatus();\n                    if (gameStatus === 'IN PROGRESS') {\n                        gameController.move(rowInd, colInd);\n                        render();\n                    }\n                })\n            })\n        });\n    }\n\n    function setPlayerClass(token, el) {\n        if (token === 'X') {\n            el.classList.add('player1');\n            el.classList.remove('player2');\n        } else {\n            el.classList.add('player2');\n            el.classList.remove('player1');\n        };\n    }\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   areCoordsValid: () => (/* binding */ areCoordsValid),\n/* harmony export */   getDiagonals: () => (/* binding */ getDiagonals),\n/* harmony export */   init2dArray: () => (/* binding */ init2dArray),\n/* harmony export */   initXdArray: () => (/* binding */ initXdArray),\n/* harmony export */   isSquare: () => (/* binding */ isSquare),\n/* harmony export */   onlyContains: () => (/* binding */ onlyContains),\n/* harmony export */   rotateLeft: () => (/* binding */ rotateLeft)\n/* harmony export */ });\nfunction init2dArray(x, y, fun) {\n    return Array.from(Array(x), () => Array.from(Array(y), fun));\n}\n\nfunction initXdArray(fun) {\n    const [, ...rest] = arguments;\n\n    return (function nestedInit() {\n        if (arguments.length == 0)\n            return fun;\n        else {\n            const [dim, ...rest] = arguments;\n            return () => Array.from(Array(dim), nestedInit(...rest));\n        }\n    })(...rest)();    \n}\n\n// Check whether array is square and has side length of \"len\"\nfunction isSquare(array) {\n    return array\n        .filter((arr) => arr.length === array.length)\n        .length === array.length;\n}\n\nfunction onlyContains(validList, array) {\n\n    const validSet = new Set();\n    validList.forEach(el => validSet.add(el));\n\n    return (function nestedContains(array) {\n        if (array.length == 0) {\n            return true\n        } else {\n            const [currVal, ...rest] = array;\n            if (!Array.isArray(currVal))\n                return validSet.has(currVal) && nestedContains(rest);\n            else \n                return nestedContains(currVal) && nestedContains(rest);\n        }\n    })(array);\n\n}\n\nfunction areCoordsValid(arr) {\n    const args = Array.from(arguments);\n    const [, index, ...rest] = args;\n    const isIndValid = isIndexValid(index, arr);\n\n    if (rest.length === 0 && isIndValid) {\n        return true;\n    } else {\n        const nextArray = arr[index];\n        return isIndexValid\n            && Array.isArray(nextArray)\n            && areCoordsValid(nextArray, ...rest);\n    }\n}\n\nfunction isIndexValid(i, arr) {\n    return 0 <= i && i < arr.length\n}\n\nfunction rotateLeft(arr) {\n    const newArr = new Array();\n    arr.forEach(x => {\n        x.forEach((x, ind) => {\n            if (!Array.isArray(newArr[ind]))\n                newArr[ind] = new Array();\n            newArr[ind].push(x);\n        })\n    });\n    return newArr;\n}\n\nfunction getDiagonals(arr) {\n    if (isSquare(arr)) {\n        const diagArr = Array.from(Array(2), () => Array());\n        arr.forEach((rowArr, ind) => {\n            diagArr[0].push(rowArr[ind]);\n            diagArr[1].push(rowArr[arr.length - ind - 1])\n        })\n        return diagArr;\n    } else {\n        return false;\n    }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;