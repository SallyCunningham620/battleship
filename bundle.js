/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
}

h1 {
    text-align: center;
    padding: 10px;
}

h2 {
    padding: 10px;
}

.board {
    display: flex;
    flex-wrap: wrap;    
    width: 300px;
    height: 300px;
    border: 2px solid black; 
}

.cell {
    background-color: #eee;
    width: 30px;
    height: 30px;
    border: 1px solid #ccc;
    box-sizing: border-box;
}


#game-container {
    display: flex;
    justify-content: space-around;
    gap: 5px;
}

#game-message {
    padding: 10px;
}

#bottom-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.ships-container {
    width: 350px;
    height: 160px;
    margin: 30px 0;
    background-color: yellow;
    display: flex;
    flex-wrap: wrap !important;
    justify-content: center;
    align-items: center;
}

button {
    height: 30px;
    width: 50px;
}

.destroyer {
    background-color: brown;
}

.submarine {
    background-color: green;
}

.cruiser {
    background-color: purple;
}

.battleship {
    background: orange;
}

.carrier {
    background-color: blue;
}
/* Ship Styling */
.horizontal { display: flex;}
.vertical { display: flex; flex-direction: column;}

/* Dynamic Size*/
.destroyer-size.horizontal { width: 60px; height: 30px; margin: 3px}
.destroyer-size.vertical { width: 30px; height: 60px; margin: 5px}

.submarine-size.horizontal { width: 90px; height: 30px; margin: 3px}
.submarine-size.vertical { width: 30px; height: 90px; margin: 5px}

.cruiser-size.horizontal { width: 90px; height: 30px; margin: 3px}
.cruiser-size.vertical { width: 30px; height: 90px; margin: 5px}

.battleship-size.horizontal { width: 120px; height: 30px; margin: 3px}
.battleship-size.vertical { width: 30px; height: 120px; margin: 5px}

.carrier-size.horizontal { width: 150px; height: 30px; margin: 3px}
.carrier-size.vertical { width: 30px; height: 150px; margin: 5px}

.hover {
    background-color: grey;
}

.hit {
    background-color: red;
}

.miss {
    background-color: rgb(148, 147, 147);
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,sBAAsB;AAC1B;;;AAGA;IACI,aAAa;IACb,6BAA6B;IAC7B,QAAQ;AACZ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,cAAc;IACd,wBAAwB;IACxB,aAAa;IACb,0BAA0B;IAC1B,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;AAC1B;AACA,iBAAiB;AACjB,cAAc,aAAa,CAAC;AAC5B,YAAY,aAAa,EAAE,sBAAsB,CAAC;;AAElD,gBAAgB;AAChB,6BAA6B,WAAW,EAAE,YAAY,EAAE,WAAW;AACnE,2BAA2B,WAAW,EAAE,YAAY,EAAE,WAAW;;AAEjE,6BAA6B,WAAW,EAAE,YAAY,EAAE,WAAW;AACnE,2BAA2B,WAAW,EAAE,YAAY,EAAE,WAAW;;AAEjE,2BAA2B,WAAW,EAAE,YAAY,EAAE,WAAW;AACjE,yBAAyB,WAAW,EAAE,YAAY,EAAE,WAAW;;AAE/D,8BAA8B,YAAY,EAAE,YAAY,EAAE,WAAW;AACrE,4BAA4B,WAAW,EAAE,aAAa,EAAE,WAAW;;AAEnE,2BAA2B,YAAY,EAAE,YAAY,EAAE,WAAW;AAClE,yBAAyB,WAAW,EAAE,aAAa,EAAE,WAAW;;AAEhE;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,oCAAoC;AACxC","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\nh1 {\n    text-align: center;\n    padding: 10px;\n}\n\nh2 {\n    padding: 10px;\n}\n\n.board {\n    display: flex;\n    flex-wrap: wrap;    \n    width: 300px;\n    height: 300px;\n    border: 2px solid black; \n}\n\n.cell {\n    background-color: #eee;\n    width: 30px;\n    height: 30px;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}\n\n\n#game-container {\n    display: flex;\n    justify-content: space-around;\n    gap: 5px;\n}\n\n#game-message {\n    padding: 10px;\n}\n\n#bottom-box {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.ships-container {\n    width: 350px;\n    height: 160px;\n    margin: 30px 0;\n    background-color: yellow;\n    display: flex;\n    flex-wrap: wrap !important;\n    justify-content: center;\n    align-items: center;\n}\n\nbutton {\n    height: 30px;\n    width: 50px;\n}\n\n.destroyer {\n    background-color: brown;\n}\n\n.submarine {\n    background-color: green;\n}\n\n.cruiser {\n    background-color: purple;\n}\n\n.battleship {\n    background: orange;\n}\n\n.carrier {\n    background-color: blue;\n}\n/* Ship Styling */\n.horizontal { display: flex;}\n.vertical { display: flex; flex-direction: column;}\n\n/* Dynamic Size*/\n.destroyer-size.horizontal { width: 60px; height: 30px; margin: 3px}\n.destroyer-size.vertical { width: 30px; height: 60px; margin: 5px}\n\n.submarine-size.horizontal { width: 90px; height: 30px; margin: 3px}\n.submarine-size.vertical { width: 30px; height: 90px; margin: 5px}\n\n.cruiser-size.horizontal { width: 90px; height: 30px; margin: 3px}\n.cruiser-size.vertical { width: 30px; height: 90px; margin: 5px}\n\n.battleship-size.horizontal { width: 120px; height: 30px; margin: 3px}\n.battleship-size.vertical { width: 30px; height: 120px; margin: 5px}\n\n.carrier-size.horizontal { width: 150px; height: 30px; margin: 3px}\n.carrier-size.vertical { width: 30px; height: 150px; margin: 5px}\n\n.hover {\n    background-color: grey;\n}\n\n.hit {\n    background-color: red;\n}\n\n.miss {\n    background-color: rgb(148, 147, 147);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ },

/***/ "./src/gameboard.js"
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// src/gameboard.js
var Gameboard = /*#__PURE__*/function () {
  function Gameboard(user) {
    _classCallCheck(this, Gameboard);
    this.user = user;
    this.board = this.createBoard(user);
    this.ships = [];
  }
  return _createClass(Gameboard, [{
    key: "createBoard",
    value: function createBoard(user) {
      var gameBoardContainer = document.getElementById(user);
      if (gameBoardContainer) gameBoardContainer.id = user;
      return Array(10).fill(null).map(function () {
        return Array(10).fill(null);
      });
    }
  }, {
    key: "renderBoard",
    value: function renderBoard(elementId, isEnemyBoard) {
      var boardElement = document.getElementById(elementId);
      for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
          var cell = document.createElement('div');
          cell.classList.add('cell');
          cell.dataset.x = i;
          cell.dataset.y = j;
          var cellId = i * 10 + j;
          cell.id = cellId;
          boardElement.appendChild(cell);
        }
      }
    }
  }, {
    key: "resetBoard",
    value: function resetBoard(user) {
      var gameBoardContainer = document.getElementById(user);
      if (gameBoardContainer) gameBoardContainer.id = user;
      this.ships = [];
      return Array(10).fill(null).map(function () {
        return Array(10).fill(null);
      });
    }
  }, {
    key: "getValidity",
    value: function getValidity(allBoardCells, isHorizontal, startIndex, ship) {
      //boundary correction
      var validStart = isHorizontal ?
      //handle horizontal, shifts the start position to the left 
      startIndex <= 100 - ship.length ? startIndex : 100 - ship.length :
      //handle vertical, shifts the start position upward
      startIndex <= 100 - 10 * ship.length ? startIndex : startIndex - ship.length * 10 + 10;
      var shipCells = [];
      for (var i = 0; i < ship.length; i++) {
        //identify cells
        if (isHorizontal) {
          //adds 1 to the index to move across a row
          shipCells.push(allBoardCells[Number(validStart) + i]);
        } else {
          //adds 10 to the index to move down a column
          shipCells.push(allBoardCells[Number(validStart) + i * 10]);
        }
      }

      //edge wrapping protection
      var valid;
      //horizontal
      if (isHorizontal) {
        //ship stays within the same row, stopping it from wrapping around to the next line
        shipCells.every(function (_shipCell, index) {
          return valid = shipCells[0].id % 10 !== 10 - (shipCells.length - (index + 1));
        });
      } else {
        //starting ID allows the vertical ship to exist without going beyond the 100
        shipCells.every(function (_shipCell, index) {
          return valid = shipCells[0].id < 90 + (10 * index + 1);
        });
      }
      //ensures that all targeted cells are free
      var notTaken = shipCells.every(function (shipCell) {
        return !shipCell.classList.contains('taken');
      });
      return {
        shipCells: shipCells,
        valid: valid,
        notTaken: notTaken
      };
    }
  }, {
    key: "placeShip",
    value: function placeShip(user, ship, startId, isVertical) {
      //select user cells
      var allBoardCells = document.querySelectorAll("#".concat(user, " .cell"));
      var randomBoolean = Math.random() < 0.5;
      var isHorizontal = user === 'player-board' ? !isVertical : randomBoolean;
      var randomStartIndex = Math.floor(Math.random() * 100);
      var startIndex = startId ? startId : randomStartIndex;
      var _this$getValidity = this.getValidity(allBoardCells, isHorizontal, startIndex, ship),
        shipCells = _this$getValidity.shipCells,
        valid = _this$getValidity.valid,
        notTaken = _this$getValidity.notTaken;
      if (valid && notTaken) {
        shipCells.forEach(function (shipCell) {
          shipCell.classList.add(ship.name);
          shipCell.classList.add('taken');
        });
      } else {
        if (user === 'computer-board') this.placeShip(user, ship, startId);
        if (user === 'player') notDropped = true;
      }
    }
  }, {
    key: "hoverArea",
    value: function hoverArea(startIndex, ship, isVerticalInput) {
      //select all player cells
      var allBoardCells = document.querySelectorAll('#player-board .cell');
      var isHorizontal = !isVerticalInput;
      var _this$getValidity2 = this.getValidity(allBoardCells, isHorizontal, startIndex, ship),
        shipCells = _this$getValidity2.shipCells,
        valid = _this$getValidity2.valid,
        notTaken = _this$getValidity2.notTaken;
      if (valid && notTaken) {
        shipCells.forEach(function (shipCell) {
          shipCell.classList.add('hover');
          setTimeout(function () {
            return shipCell.classList.remove('hover');
          }, 500);
        });
      }
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ },

/***/ "./src/player.js"
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/gameboard.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


// src/player.js
var Player = /*#__PURE__*/function () {
  function Player(name) {
    var isComputer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    _classCallCheck(this, Player);
    this.name = name;
    this.board = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.isComputer = isComputer;
    this.usedAttacks = new Set();
  }
  return _createClass(Player, [{
    key: "computerAttack",
    value: function computerAttack(playerShips) {
      var cell;
      do {
        //select random cell as long as not hit or miss classes
        var randomComputerGo = Math.floor(Math.random() * 100);
        var allPlayerCells = document.querySelectorAll('#player-board .cell');
        cell = allPlayerCells[randomComputerGo];
      } while (cell.classList.contains('hit') || cell.classList.contains('miss'));
      if (cell.classList.contains('taken')) {
        var classes = Array.from(cell.classList);
        // find ship name after removing other classes
        var shipName = classes.find(function (c) {
          return c !== 'cell' && c !== 'taken' && c !== 'hit';
        });
        // find ship instance from your playerShips array
        var ship = playerShips.find(function (s) {
          return s.name === shipName;
        });
        return {
          ship: ship,
          cell: cell,
          shipName: shipName
        };
      } else {
        cell.classList.add('miss');
        return {
          ship: null,
          cell: cell
        };
      }
    }
  }, {
    key: "playerAttack",
    value: function playerAttack(e, computerShips) {
      if (e.target.classList.contains('hit') || e.target.classList.contains('miss')) {
        return {
          alreadyAttacked: true
        };
      } else if (e.target.classList.contains('taken') && !e.target.classList.contains('hit')) {
        // find ship name from class array
        var shipName = Array.from(e.target.classList).find(function (ship) {
          return ['destroyer', 'submarine', 'cruiser', 'battleship', 'carrier'].includes(ship);
        });
        // find ship instance from your computerShips array
        var ship = computerShips.find(function (s) {
          return s.name === shipName;
        });
        return {
          ship: ship,
          shipName: shipName,
          alreadyAttacked: false
        };
      } else {
        e.target.classList.add('miss');
        return {
          ship: null,
          alreadyAttacked: false
        };
      }
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ },

/***/ "./src/ship.js"
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// src/ship.js
var Ship = /*#__PURE__*/function () {
  function Ship(name, length) {
    _classCallCheck(this, Ship);
    this.name = name;
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }
  return _createClass(Ship, [{
    key: "hit",
    value: function hit() {
      if (!this.sunk) {
        this.hits++;
        this.isSunk();
      }
    }
  }, {
    key: "isSunk",
    value: function isSunk() {
      if (this.hits >= this.length) {
        this.sunk = true;
      }
      return this.sunk;
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ "./src/player.js");


// src/index.js


//define const and let
var player = new _player_js__WEBPACK_IMPORTED_MODULE_2__["default"]("Human");
var computer = new _player_js__WEBPACK_IMPORTED_MODULE_2__["default"]("Computer", true);
var infoDisplay = document.getElementById('game-message');
var turnDisplay = document.getElementById('turn-message');
var shipsContainer = document.querySelector('.ships-container');
var flipButton = document.getElementById('flip');
var startButton = document.getElementById('start-button');
var resetButton = document.getElementById('reset-button');
var isPlayerTurn = true;
var gameActive = true;
var isVertical = false;
var notDropped;
var draggedShip;
var alreadyAttacked;
var playerShips = shipFleet();
var computerShips = shipFleet();
var playerAttacks = [];
var computerAttacks = [];
var playerSunkShips = [];
var computerSunkShips = [];

//define all ships for players
function shipFleet() {
  return [new _ship_js__WEBPACK_IMPORTED_MODULE_1__["default"]('destroyer', 2), new _ship_js__WEBPACK_IMPORTED_MODULE_1__["default"]('submarine', 3), new _ship_js__WEBPACK_IMPORTED_MODULE_1__["default"]('cruiser', 3), new _ship_js__WEBPACK_IMPORTED_MODULE_1__["default"]('battleship', 4), new _ship_js__WEBPACK_IMPORTED_MODULE_1__["default"]('carrier', 5)];
}

//reset game
function resetGame() {
  isPlayerTurn = true;
  gameActive = true;
  isVertical = false;
  notDropped = undefined;
  draggedShip = undefined;
  alreadyAttacked;
  playerShips = shipFleet();
  computerShips = shipFleet();
  playerAttacks = [];
  computerAttacks = [];
  playerSunkShips = [];
  computerSunkShips = [];

  //reset and recreate boards
  player.board.resetBoard('player-board');
  computer.board.resetBoard('computer-board');

  //find all cells
  var allCells = document.querySelectorAll('.cell');
  allCells.forEach(function (cell) {
    cell.className = 'cell'; // remove other classes
    cell.removeEventListener('click', handleCellClick); //remove listener
  });
  shipsContainer.innerHTML = "\n            <div id=\"0\" class=\"destroyer-size destroyer horizontal\" data-size=\"2\" draggable=\"true\"></div>\n            <div id=\"1\" class=\"submarine-size submarine horizontal\" data-size=\"3\" draggable=\"true\"></div>\n            <div id=\"2\" class=\"cruiser-size cruiser horizontal\" data-size=\"3\" draggable=\"true\"></div>\n            <div id=\"3\" class=\"battleship-size battleship horizontal\" data-size=\"4\" draggable=\"true\"></div>\n            <div id=\"4\" class=\"carrier-size carrier horizontal\" data-size=\"5\" draggable=\"true\"></div>\n    ";

  //recreate ship options
  var newShipOptions = Array.from(shipsContainer.children);
  newShipOptions.forEach(function (shipOption) {
    shipOption.addEventListener('dragstart', dragStart); //drag listener
  });
  updateMessage('Game reset. Place your ships and click start.');
  turnMessage('');
  placeComputerShipsRandomly();
  dragOverNDrop();
}
resetButton.addEventListener('click', resetGame);
function flip() {
  //flip ships horizontal and vertical
  isVertical = !isVertical;
  //adjust container for flip
  shipsContainer.style.flexWrap = isVertical ? 'nowrap' : 'wrap';
  //select ships
  var shipsArr = Array.from(shipsContainer.children);
  shipsArr.forEach(function (shipArr) {
    //switch class names
    if (isVertical) {
      shipArr.classList.remove('horizontal');
      shipArr.classList.add('vertical');
    } else {
      shipArr.classList.remove('vertical');
      shipArr.classList.add('horizontal');
    }
  });
}
;
flipButton.addEventListener('click', flip);

//select and drag player ships
var shipOptions = Array.from(shipsContainer.children);
shipOptions.forEach(function (shipOption) {
  shipOption.addEventListener('dragstart', dragStart);
});
function dragStart(e) {
  notDropped = false;
  draggedShip = e.target;
}
function dragOver(e) {
  e.preventDefault();
  //select with id
  var ship = playerShips[draggedShip.id];
  player.board.hoverArea(e.target.id, ship, isVertical);
}
function dropShip(e) {
  e.preventDefault();
  if (!draggedShip) return;
  var startId = e.target.id;
  var ship = playerShips[draggedShip.id];
  //place ship when dropped
  player.board.placeShip('player-board', ship, startId, isVertical);
  if (!notDropped) {
    draggedShip.remove();
  }
}
function dragOverNDrop() {
  //select player cells
  var allPlayerCells = document.querySelectorAll("#player-board .cell");
  allPlayerCells.forEach(function (playerCell) {
    playerCell.addEventListener('dragover', dragOver);
    playerCell.addEventListener('drop', dropShip);
  });
}
function startGame() {
  if (isPlayerTurn === true) {
    //make sure ships are all placed
    if (shipsContainer.children.length != 0) {
      updateMessage('Please place all your ships first and then click start.');
    } else {
      //select all computer cells
      var allBoardCells = document.querySelectorAll('#computer-board .cell');
      allBoardCells.forEach(function (cell) {
        return cell.addEventListener('click', handleCellClick);
      });
      isPlayerTurn = true;
      turnMessage('Your turn.');
      updateMessage('Game started. Select a cell to attack on the computer board.');
    }
  }
}
startButton.addEventListener('click', startGame);
function computerTurn() {
  if (gameActive) {
    turnMessage('Computer Turn!');
    updateMessage(' The computer is thinking...');
    setTimeout(function () {
      var _computer$computerAtt = computer.computerAttack(playerShips),
        ship = _computer$computerAtt.ship,
        cell = _computer$computerAtt.cell,
        shipName = _computer$computerAtt.shipName;
      if (ship && !ship.sunk) {
        ship.hit(); //increment ship hits
        cell.classList.add('hit');
        updateMessage('The computer hit your ship!');
        computerAttacks.push(shipName); //add shipName to computerAttacks
        if (ship.isSunk()) {
          updateMessage("The computer sunk your ".concat(ship.name, "!"));
          computerSunkShips.push(ship.name);
          computerAttacks = computerAttacks.filter(function (attackName) {
            return attackName !== shipName;
          }); // remove sunkShips from computerAttacks
        }
        gameActiveCheck('computer-board', computerSunkShips);
      } else {
        updateMessage('Nothing hit this time.');
      }
    }, 2000);
    setTimeout(function () {
      isPlayerTurn = true;
      turnMessage('Player Go!');
      updateMessage('Select a cell to attack on the computer board.');
      //select computer cells
      var allComputerCells = document.querySelectorAll('#computer-board .cell');
      allComputerCells.forEach(function (cell) {
        return cell.addEventListener('click', handleCellClick);
      });
    }, 4000);
  } else {
    alert('The game is over. Reset the game to play again');
    return;
  }
}
function handleCellClick(e) {
  if (gameActive && isPlayerTurn) {
    var _player$playerAttack = player.playerAttack(e, computerShips),
      ship = _player$playerAttack.ship,
      shipName = _player$playerAttack.shipName,
      _alreadyAttacked = _player$playerAttack.alreadyAttacked;
    if (_alreadyAttacked) {
      updateMessage('Cell already attacked, please try again.');
      return;
    }
    if (ship && !ship.sunk) {
      ship.hit(); //increment ship hits
      e.target.classList.add('hit');
      updateMessage('Computer ship hit!');
      playerAttacks.push(shipName); //add shipName to playerAttacks

      if (ship.isSunk()) {
        updateMessage("You sunk the computer's ".concat(ship.name, "!"));
        playerSunkShips.push(ship.name);
        playerAttacks = playerAttacks.filter(function (attackName) {
          return attackName !== shipName;
        }); //remove sunkShips from playerAttacks
      }
      gameActiveCheck('player-board', playerSunkShips);
    } else {
      updateMessage('No ships hit.');
    }
    isPlayerTurn = false;
    //select computer cells
    var allBoardCells = document.querySelectorAll('#computer-board .cell');
    allBoardCells.forEach(function (cell) {
      return cell.replaceWith(cell.cloneNode(true));
    });
    setTimeout(computerTurn, 3000);
  } else {
    alert('The game is over. Reset the game to play again');
    return;
  }
}
function gameActiveCheck(user, userSunkShips) {
  //check after hits
  if (user === 'player-board') {
    if (userSunkShips.length === 5) {
      updateMessage('You sunk all the computer ships. YOU WON!');
      turnMessage('');
      gameActive = false;
    }
  }
  if (user === 'computer-board') {
    if (userSunkShips.length === 5) {
      updateMessage(' The computer sunk all your ships. You lost.');
      turnMessage('');
      gameActive = false;
    }
  }
}
function placeComputerShipsRandomly() {
  playerShips.forEach(function (ship) {
    return computer.board.placeShip('computer-board', ship);
  });
}
function renderBoards() {
  player.board.renderBoard('player-board', false);
  computer.board.renderBoard('computer-board', true);
}
function updateMessage(msg) {
  infoDisplay.textContent = msg;
}
function turnMessage(msg) {
  turnDisplay.textContent = msg;
}
function initGame() {
  renderBoards();
  placeComputerShipsRandomly();
  dragOverNDrop();
  updateMessage("Please place your ships and click Start.");
  turnMessage('');
}
initGame();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtFQUN4QnJELFdBQVcsQ0FBQ3NELFdBQVcsR0FBR0QsR0FBRztBQUNqQztBQUNBLFNBQVMxQixXQUFXQSxDQUFDMEIsR0FBRyxFQUFFO0VBQ3RCcEQsV0FBVyxDQUFDcUQsV0FBVyxHQUFHRCxHQUFHO0FBQ2pDO0FBRUEsU0FBU0UsUUFBUUEsQ0FBQSxFQUFHO0VBQ2hCSCxZQUFZLENBQUMsQ0FBQztFQUNkeEIsMEJBQTBCLENBQUMsQ0FBQztFQUM1QkMsYUFBYSxDQUFDLENBQUM7RUFDZkgsYUFBYSxDQUFDLDBDQUEwQyxDQUFDO0VBQ3pEQyxXQUFXLENBQUMsRUFBRSxDQUFDO0FBQ25CO0FBRUE0QixRQUFRLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG5oMiB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmJvYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDsgICAgXG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7IFxufVxuXG4uY2VsbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5cbiNnYW1lLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBnYXA6IDVweDtcbn1cblxuI2dhbWUtbWVzc2FnZSB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuI2JvdHRvbS1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNoaXBzLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogMTYwcHg7XG4gICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG59XG5cbi5kZXN0cm95ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xufVxuXG4uc3VibWFyaW5lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLmNydWlzZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbn1cblxuLmJhdHRsZXNoaXAge1xuICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcbn1cblxuLmNhcnJpZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG4vKiBTaGlwIFN0eWxpbmcgKi9cbi5ob3Jpem9udGFsIHsgZGlzcGxheTogZmxleDt9XG4udmVydGljYWwgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO31cblxuLyogRHluYW1pYyBTaXplKi9cbi5kZXN0cm95ZXItc2l6ZS5ob3Jpem9udGFsIHsgd2lkdGg6IDYwcHg7IGhlaWdodDogMzBweDsgbWFyZ2luOiAzcHh9XG4uZGVzdHJveWVyLXNpemUudmVydGljYWwgeyB3aWR0aDogMzBweDsgaGVpZ2h0OiA2MHB4OyBtYXJnaW46IDVweH1cblxuLnN1Ym1hcmluZS1zaXplLmhvcml6b250YWwgeyB3aWR0aDogOTBweDsgaGVpZ2h0OiAzMHB4OyBtYXJnaW46IDNweH1cbi5zdWJtYXJpbmUtc2l6ZS52ZXJ0aWNhbCB7IHdpZHRoOiAzMHB4OyBoZWlnaHQ6IDkwcHg7IG1hcmdpbjogNXB4fVxuXG4uY3J1aXNlci1zaXplLmhvcml6b250YWwgeyB3aWR0aDogOTBweDsgaGVpZ2h0OiAzMHB4OyBtYXJnaW46IDNweH1cbi5jcnVpc2VyLXNpemUudmVydGljYWwgeyB3aWR0aDogMzBweDsgaGVpZ2h0OiA5MHB4OyBtYXJnaW46IDVweH1cblxuLmJhdHRsZXNoaXAtc2l6ZS5ob3Jpem9udGFsIHsgd2lkdGg6IDEyMHB4OyBoZWlnaHQ6IDMwcHg7IG1hcmdpbjogM3B4fVxuLmJhdHRsZXNoaXAtc2l6ZS52ZXJ0aWNhbCB7IHdpZHRoOiAzMHB4OyBoZWlnaHQ6IDEyMHB4OyBtYXJnaW46IDVweH1cblxuLmNhcnJpZXItc2l6ZS5ob3Jpem9udGFsIHsgd2lkdGg6IDE1MHB4OyBoZWlnaHQ6IDMwcHg7IG1hcmdpbjogM3B4fVxuLmNhcnJpZXItc2l6ZS52ZXJ0aWNhbCB7IHdpZHRoOiAzMHB4OyBoZWlnaHQ6IDE1MHB4OyBtYXJnaW46IDVweH1cblxuLmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG4uaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5taXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ4LCAxNDcsIDE0Nyk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWMsYUFBYSxDQUFDO0FBQzVCLFlBQVksYUFBYSxFQUFFLHNCQUFzQixDQUFDOztBQUVsRCxnQkFBZ0I7QUFDaEIsNkJBQTZCLFdBQVcsRUFBRSxZQUFZLEVBQUUsV0FBVztBQUNuRSwyQkFBMkIsV0FBVyxFQUFFLFlBQVksRUFBRSxXQUFXOztBQUVqRSw2QkFBNkIsV0FBVyxFQUFFLFlBQVksRUFBRSxXQUFXO0FBQ25FLDJCQUEyQixXQUFXLEVBQUUsWUFBWSxFQUFFLFdBQVc7O0FBRWpFLDJCQUEyQixXQUFXLEVBQUUsWUFBWSxFQUFFLFdBQVc7QUFDakUseUJBQXlCLFdBQVcsRUFBRSxZQUFZLEVBQUUsV0FBVzs7QUFFL0QsOEJBQThCLFlBQVksRUFBRSxZQUFZLEVBQUUsV0FBVztBQUNyRSw0QkFBNEIsV0FBVyxFQUFFLGFBQWEsRUFBRSxXQUFXOztBQUVuRSwyQkFBMkIsWUFBWSxFQUFFLFlBQVksRUFBRSxXQUFXO0FBQ2xFLHlCQUF5QixXQUFXLEVBQUUsYUFBYSxFQUFFLFdBQVc7O0FBRWhFO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5oMiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5ib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDsgICAgXFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7IFxcbn1cXG5cXG4uY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcblxcbiNnYW1lLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuI2dhbWUtbWVzc2FnZSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiNib3R0b20tYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaGlwcy1jb250YWluZXIge1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogMTYwcHg7XFxuICAgIG1hcmdpbjogMzBweCAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuLmRlc3Ryb3llciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcbn1cXG5cXG4uc3VibWFyaW5lIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5jcnVpc2VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbn1cXG5cXG4uYmF0dGxlc2hpcCB7XFxuICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcXG59XFxuXFxuLmNhcnJpZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG4vKiBTaGlwIFN0eWxpbmcgKi9cXG4uaG9yaXpvbnRhbCB7IGRpc3BsYXk6IGZsZXg7fVxcbi52ZXJ0aWNhbCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47fVxcblxcbi8qIER5bmFtaWMgU2l6ZSovXFxuLmRlc3Ryb3llci1zaXplLmhvcml6b250YWwgeyB3aWR0aDogNjBweDsgaGVpZ2h0OiAzMHB4OyBtYXJnaW46IDNweH1cXG4uZGVzdHJveWVyLXNpemUudmVydGljYWwgeyB3aWR0aDogMzBweDsgaGVpZ2h0OiA2MHB4OyBtYXJnaW46IDVweH1cXG5cXG4uc3VibWFyaW5lLXNpemUuaG9yaXpvbnRhbCB7IHdpZHRoOiA5MHB4OyBoZWlnaHQ6IDMwcHg7IG1hcmdpbjogM3B4fVxcbi5zdWJtYXJpbmUtc2l6ZS52ZXJ0aWNhbCB7IHdpZHRoOiAzMHB4OyBoZWlnaHQ6IDkwcHg7IG1hcmdpbjogNXB4fVxcblxcbi5jcnVpc2VyLXNpemUuaG9yaXpvbnRhbCB7IHdpZHRoOiA5MHB4OyBoZWlnaHQ6IDMwcHg7IG1hcmdpbjogM3B4fVxcbi5jcnVpc2VyLXNpemUudmVydGljYWwgeyB3aWR0aDogMzBweDsgaGVpZ2h0OiA5MHB4OyBtYXJnaW46IDVweH1cXG5cXG4uYmF0dGxlc2hpcC1zaXplLmhvcml6b250YWwgeyB3aWR0aDogMTIwcHg7IGhlaWdodDogMzBweDsgbWFyZ2luOiAzcHh9XFxuLmJhdHRsZXNoaXAtc2l6ZS52ZXJ0aWNhbCB7IHdpZHRoOiAzMHB4OyBoZWlnaHQ6IDEyMHB4OyBtYXJnaW46IDVweH1cXG5cXG4uY2Fycmllci1zaXplLmhvcml6b250YWwgeyB3aWR0aDogMTUwcHg7IGhlaWdodDogMzBweDsgbWFyZ2luOiAzcHh9XFxuLmNhcnJpZXItc2l6ZS52ZXJ0aWNhbCB7IHdpZHRoOiAzMHB4OyBoZWlnaHQ6IDE1MHB4OyBtYXJnaW46IDVweH1cXG5cXG4uaG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDgsIDE0NywgMTQ3KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIHNyYy9nYW1lYm9hcmQuanNcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3Rvcih1c2VyKSB7XG4gICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgICAgIHRoaXMuYm9hcmQgPSB0aGlzLmNyZWF0ZUJvYXJkKHVzZXIpO1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgfVxuXG4gICAgY3JlYXRlQm9hcmQodXNlcikge1xuICAgICAgICBjb25zdCBnYW1lQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh1c2VyKTtcbiAgICAgICAgaWYgKGdhbWVCb2FyZENvbnRhaW5lcikgZ2FtZUJvYXJkQ29udGFpbmVyLmlkID0gdXNlcjtcbiAgICAgICAgcmV0dXJuIEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbChudWxsKSlcbiAgICB9XG5cbiAgICByZW5kZXJCb2FyZChlbGVtZW50SWQsIGlzRW5lbXlCb2FyZCkge1xuICAgIGNvbnN0IGJvYXJkRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQueCA9IGk7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQueSA9IGo7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxJZCA9IChpICogMTApICsgajtcbiAgICAgICAgICAgIGNlbGwuaWQgPSBjZWxsSWQ7XG4gICAgICAgICAgICBib2FyZEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiAgICByZXNldEJvYXJkKHVzZXIpIHtcbiAgICAgICAgY29uc3QgZ2FtZUJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodXNlcik7XG4gICAgICAgIGlmIChnYW1lQm9hcmRDb250YWluZXIpIGdhbWVCb2FyZENvbnRhaW5lci5pZCA9IHVzZXI7XG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICAgICAgcmV0dXJuIEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbChudWxsKSlcblxuICAgIH1cblxuICAgIGdldFZhbGlkaXR5KGFsbEJvYXJkQ2VsbHMsIGlzSG9yaXpvbnRhbCwgc3RhcnRJbmRleCwgc2hpcCkgeyAgICAgIFxuICAgICAgICAvL2JvdW5kYXJ5IGNvcnJlY3Rpb25cbiAgICAgICAgbGV0IHZhbGlkU3RhcnQgPSBpc0hvcml6b250YWwgPyBcbiAgICAgICAgLy9oYW5kbGUgaG9yaXpvbnRhbCwgc2hpZnRzIHRoZSBzdGFydCBwb3NpdGlvbiB0byB0aGUgbGVmdCBcbiAgICAgICAgKHN0YXJ0SW5kZXggPD0gMTAwIC0gc2hpcC5sZW5ndGggPyBzdGFydEluZGV4IDogMTAwIC0gc2hpcC5sZW5ndGgpIDpcbiAgICAgICAgLy9oYW5kbGUgdmVydGljYWwsIHNoaWZ0cyB0aGUgc3RhcnQgcG9zaXRpb24gdXB3YXJkXG4gICAgICAgIChzdGFydEluZGV4IDw9IDEwMCAtIDEwICogc2hpcC5sZW5ndGggPyBzdGFydEluZGV4IDogc3RhcnRJbmRleCAtIHNoaXAubGVuZ3RoICogMTAgKyAxMCk7XG5cbiAgICAgICAgbGV0IHNoaXBDZWxscyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy9pZGVudGlmeSBjZWxsc1xuICAgICAgICAgICAgaWYgKGlzSG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAgIC8vYWRkcyAxIHRvIHRoZSBpbmRleCB0byBtb3ZlIGFjcm9zcyBhIHJvd1xuICAgICAgICAgICAgICAgIHNoaXBDZWxscy5wdXNoKGFsbEJvYXJkQ2VsbHNbTnVtYmVyKHZhbGlkU3RhcnQpICsgaV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2FkZHMgMTAgdG8gdGhlIGluZGV4IHRvIG1vdmUgZG93biBhIGNvbHVtblxuICAgICAgICAgICAgICAgIHNoaXBDZWxscy5wdXNoKGFsbEJvYXJkQ2VsbHNbTnVtYmVyKHZhbGlkU3RhcnQpICsgaSAqIDEwXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vZWRnZSB3cmFwcGluZyBwcm90ZWN0aW9uXG4gICAgICAgIGxldCB2YWxpZDtcbiAgICAgICAgLy9ob3Jpem9udGFsXG4gICAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgICAgIC8vc2hpcCBzdGF5cyB3aXRoaW4gdGhlIHNhbWUgcm93LCBzdG9wcGluZyBpdCBmcm9tIHdyYXBwaW5nIGFyb3VuZCB0byB0aGUgbmV4dCBsaW5lXG4gICAgICAgICAgICBzaGlwQ2VsbHMuZXZlcnkoKF9zaGlwQ2VsbCwgaW5kZXgpID0+XG4gICAgICAgICAgICB2YWxpZCA9IHNoaXBDZWxsc1swXS5pZCAlIDEwICE9PSAxMCAtIChzaGlwQ2VsbHMubGVuZ3RoIC0gKGluZGV4ICsgMSkpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9zdGFydGluZyBJRCBhbGxvd3MgdGhlIHZlcnRpY2FsIHNoaXAgdG8gZXhpc3Qgd2l0aG91dCBnb2luZyBiZXlvbmQgdGhlIDEwMFxuICAgICAgICAgICAgc2hpcENlbGxzLmV2ZXJ5KChfc2hpcENlbGwsIGluZGV4KSA9PiBcbiAgICAgICAgICAgIHZhbGlkID0gc2hpcENlbGxzWzBdLmlkIDwgOTAgKyAoMTAgKiBpbmRleCArIDEpXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgLy9lbnN1cmVzIHRoYXQgYWxsIHRhcmdldGVkIGNlbGxzIGFyZSBmcmVlXG4gICAgICAgIGxldCBub3RUYWtlbiA9IHNoaXBDZWxscy5ldmVyeShzaGlwQ2VsbCA9PiAhc2hpcENlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YWtlbicpKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7c2hpcENlbGxzLCB2YWxpZCwgbm90VGFrZW59O1xuICAgIH1cblxuXG4gICAgcGxhY2VTaGlwKHVzZXIsIHNoaXAsIHN0YXJ0SWQsIGlzVmVydGljYWwpIHtcbiAgICAgICAgLy9zZWxlY3QgdXNlciBjZWxsc1xuICAgICAgICBjb25zdCBhbGxCb2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgIyR7dXNlcn0gLmNlbGxgKTtcbiAgICAgICAgbGV0IHJhbmRvbUJvb2xlYW4gPSBNYXRoLnJhbmRvbSgpIDwgMC41O1xuICAgICAgICBsZXQgaXNIb3Jpem9udGFsID0gdXNlciA9PT0gJ3BsYXllci1ib2FyZCcgPyAhaXNWZXJ0aWNhbCA6IHJhbmRvbUJvb2xlYW47XG4gICAgICAgIGxldCByYW5kb21TdGFydEluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTsgXG4gICAgICAgIFxuICAgICAgICBsZXQgc3RhcnRJbmRleCA9IHN0YXJ0SWQgPyBzdGFydElkIDogcmFuZG9tU3RhcnRJbmRleDsgIFxuXG4gICAgICAgIGNvbnN0IHtzaGlwQ2VsbHMsIHZhbGlkLCBub3RUYWtlbiB9ID0gdGhpcy5nZXRWYWxpZGl0eShhbGxCb2FyZENlbGxzLCBpc0hvcml6b250YWwsIHN0YXJ0SW5kZXgsIHNoaXApO1xuXG4gICAgICAgIGlmICh2YWxpZCAmJiBub3RUYWtlbikge1xuICAgICAgICAgICAgc2hpcENlbGxzLmZvckVhY2goc2hpcENlbGwgPT4ge1xuICAgICAgICAgICAgICAgIHNoaXBDZWxsLmNsYXNzTGlzdC5hZGQoc2hpcC5uYW1lKTtcbiAgICAgICAgICAgICAgICBzaGlwQ2VsbC5jbGFzc0xpc3QuYWRkKCd0YWtlbicpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHVzZXIgPT09ICdjb21wdXRlci1ib2FyZCcpIHRoaXMucGxhY2VTaGlwKHVzZXIsIHNoaXAsIHN0YXJ0SWQpO1xuICAgICAgICBpZiAodXNlciA9PT0gJ3BsYXllcicpIG5vdERyb3BwZWQgPSB0cnVlO1xuICAgIH1cbn1cbiAgICAgIFxuXG4gICAgaG92ZXJBcmVhKHN0YXJ0SW5kZXgsIHNoaXAsIGlzVmVydGljYWxJbnB1dCkge1xuICAgICAgICAvL3NlbGVjdCBhbGwgcGxheWVyIGNlbGxzXG4gICAgICAgIGNvbnN0IGFsbEJvYXJkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyLWJvYXJkIC5jZWxsJyk7XG4gICAgICAgIGxldCBpc0hvcml6b250YWwgPSAhaXNWZXJ0aWNhbElucHV0O1xuXG4gICAgICAgIGNvbnN0IHsgc2hpcENlbGxzLCB2YWxpZCwgbm90VGFrZW4gfSA9IHRoaXMuZ2V0VmFsaWRpdHkoYWxsQm9hcmRDZWxscywgaXNIb3Jpem9udGFsLCBzdGFydEluZGV4LCBzaGlwKTtcblxuICAgICAgICBpZiAodmFsaWQgJiYgbm90VGFrZW4pIHtcbiAgICAgICAgICAgIHNoaXBDZWxscy5mb3JFYWNoKHNoaXBDZWxsID0+IHtcbiAgICAgICAgICAgICAgICBzaGlwQ2VsbC5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2hpcENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKSwgNTAwKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQuanMnO1xuXG4vLyBzcmMvcGxheWVyLmpzXG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGlzQ29tcHV0ZXIgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgICAgICB0aGlzLmlzQ29tcHV0ZXIgPSBpc0NvbXB1dGVyO1xuICAgICAgICB0aGlzLnVzZWRBdHRhY2tzID0gbmV3IFNldCgpO1xuICAgIH1cblxuICAgIGNvbXB1dGVyQXR0YWNrKHBsYXllclNoaXBzKSB7XG4gICAgICAgIGxldCBjZWxsO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICAvL3NlbGVjdCByYW5kb20gY2VsbCBhcyBsb25nIGFzIG5vdCBoaXQgb3IgbWlzcyBjbGFzc2VzXG4gICAgICAgICAgICBsZXQgcmFuZG9tQ29tcHV0ZXJHbyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgICAgICBjb25zdCBhbGxQbGF5ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXItYm9hcmQgLmNlbGwnKTtcbiAgICAgICAgICAgIGNlbGwgPSBhbGxQbGF5ZXJDZWxsc1tyYW5kb21Db21wdXRlckdvXTtcbiAgICAgICAgfSB3aGlsZSAoIGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSB8fCBjZWxsLmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpXG4gICAgICAgICkgXG4gICAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygndGFrZW4nKSkge1xuICAgICAgICAgICAgbGV0IGNsYXNzZXMgPSBBcnJheS5mcm9tKGNlbGwuY2xhc3NMaXN0KTtcbiAgICAgICAgICAgIC8vIGZpbmQgc2hpcCBuYW1lIGFmdGVyIHJlbW92aW5nIG90aGVyIGNsYXNzZXNcbiAgICAgICAgICAgIGxldCBzaGlwTmFtZSA9IGNsYXNzZXMuZmluZChjID0+IGMgIT09ICdjZWxsJyAmJiBjICE9PSAndGFrZW4nICYmIGMgIT09ICdoaXQnKTtcbiAgICAgICAgICAgIC8vIGZpbmQgc2hpcCBpbnN0YW5jZSBmcm9tIHlvdXIgcGxheWVyU2hpcHMgYXJyYXlcbiAgICAgICAgICAgIGxldCBzaGlwID0gcGxheWVyU2hpcHMuZmluZChzID0+IHMubmFtZSA9PT0gc2hpcE5hbWUpOyBcbiAgICBcbiAgICAgICAgICAgIHJldHVybiB7IHNoaXAsIGNlbGwsIHNoaXBOYW1lfTsgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICByZXR1cm4geyBzaGlwOiBudWxsLCBjZWxsIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGF5ZXJBdHRhY2soZSwgY29tcHV0ZXJTaGlwcykge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSB8fCBcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpKSB7XG4gICAgICAgICAgICByZXR1cm4ge2FscmVhZHlBdHRhY2tlZDogdHJ1ZX07XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YWtlbicpICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpKSB7XG4gICAgICAgICAgICAvLyBmaW5kIHNoaXAgbmFtZSBmcm9tIGNsYXNzIGFycmF5XG4gICAgICAgICAgICBsZXQgc2hpcE5hbWUgPSBBcnJheS5mcm9tKGUudGFyZ2V0LmNsYXNzTGlzdCkuZmluZChzaGlwID0+XG4gICAgICAgICAgICAgICAgWydkZXN0cm95ZXInLCAnc3VibWFyaW5lJywgJ2NydWlzZXInLCAnYmF0dGxlc2hpcCcsICdjYXJyaWVyJ10uaW5jbHVkZXMoc2hpcClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAvLyBmaW5kIHNoaXAgaW5zdGFuY2UgZnJvbSB5b3VyIGNvbXB1dGVyU2hpcHMgYXJyYXlcbiAgICAgICAgICAgIGxldCBzaGlwID0gY29tcHV0ZXJTaGlwcy5maW5kKHMgPT4gcy5uYW1lID09PSBzaGlwTmFtZSk7XG4gICAgICAgICAgICByZXR1cm4geyBzaGlwLCBzaGlwTmFtZSwgYWxyZWFkeUF0dGFja2VkOiBmYWxzZX07ICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgICAgIHJldHVybiB7IHNoaXA6IG51bGwsIGFscmVhZHlBdHRhY2tlZDogZmFsc2UgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsIi8vIHNyYy9zaGlwLmpzXG5jbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN1bmspIHtcbiAgICAgICAgICAgIHRoaXMuaGl0cysrO1xuICAgICAgICAgICAgdGhpcy5pc1N1bmsoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgaWYodGhpcy5oaXRzID49IHRoaXMubGVuZ3RoKXtcbiAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdW5rO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbi8vIHNyYy9pbmRleC5qc1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXIuanMnO1xuLy9kZWZpbmUgY29uc3QgYW5kIGxldFxuY29uc3QgcGxheWVyID0gbmV3IFBsYXllcihcIkh1bWFuXCIpO1xuY29uc3QgY29tcHV0ZXIgPSBuZXcgUGxheWVyKFwiQ29tcHV0ZXJcIiwgdHJ1ZSk7XG5jb25zdCBpbmZvRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLW1lc3NhZ2UnKTtcbmNvbnN0IHR1cm5EaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1cm4tbWVzc2FnZScpO1xuXG5jb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwcy1jb250YWluZXInKTtcbmNvbnN0IGZsaXBCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxpcCcpO1xuY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnV0dG9uJyk7XG5jb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldC1idXR0b24nKTtcblxubGV0IGlzUGxheWVyVHVybiA9IHRydWU7XG5sZXQgZ2FtZUFjdGl2ZSA9IHRydWU7XG5sZXQgaXNWZXJ0aWNhbCA9IGZhbHNlO1xubGV0IG5vdERyb3BwZWQ7XG5sZXQgZHJhZ2dlZFNoaXA7XG5sZXQgYWxyZWFkeUF0dGFja2VkO1xubGV0IHBsYXllclNoaXBzID0gc2hpcEZsZWV0KCk7XG5sZXQgY29tcHV0ZXJTaGlwcyA9IHNoaXBGbGVldCgpO1xubGV0IHBsYXllckF0dGFja3MgPSBbXTtcbmxldCBjb21wdXRlckF0dGFja3MgPSBbXTtcbmxldCBwbGF5ZXJTdW5rU2hpcHMgPSBbXTtcbmxldCBjb21wdXRlclN1bmtTaGlwcyA9IFtdO1xuXG4vL2RlZmluZSBhbGwgc2hpcHMgZm9yIHBsYXllcnNcbmZ1bmN0aW9uIHNoaXBGbGVldCgpIHtcbiAgICByZXR1cm5bXG4gICAgICAgIG5ldyBTaGlwKCdkZXN0cm95ZXInLCAyKSxcbiAgICAgICAgbmV3IFNoaXAoJ3N1Ym1hcmluZScsIDMpLFxuICAgICAgICBuZXcgU2hpcCgnY3J1aXNlcicsIDMpLFxuICAgICAgICBuZXcgU2hpcCgnYmF0dGxlc2hpcCcsIDQpLFxuICAgICAgICBuZXcgU2hpcCgnY2FycmllcicsIDUpXG4gICAgXTtcbn1cblxuLy9yZXNldCBnYW1lXG5mdW5jdGlvbiByZXNldEdhbWUoKSB7XG4gICAgaXNQbGF5ZXJUdXJuID0gdHJ1ZTtcbiAgICBnYW1lQWN0aXZlID0gdHJ1ZTtcbiAgICBpc1ZlcnRpY2FsID0gZmFsc2U7XG4gICAgbm90RHJvcHBlZCA9IHVuZGVmaW5lZDtcbiAgICBkcmFnZ2VkU2hpcCA9IHVuZGVmaW5lZDtcbiAgICBhbHJlYWR5QXR0YWNrZWQ7XG4gICAgcGxheWVyU2hpcHMgPSBzaGlwRmxlZXQoKTtcbiAgICBjb21wdXRlclNoaXBzID0gc2hpcEZsZWV0KCk7XG4gICAgcGxheWVyQXR0YWNrcyA9IFtdO1xuICAgIGNvbXB1dGVyQXR0YWNrcyA9IFtdO1xuICAgIHBsYXllclN1bmtTaGlwcyA9IFtdO1xuICAgIGNvbXB1dGVyU3Vua1NoaXBzID0gW107XG5cbiAgICAvL3Jlc2V0IGFuZCByZWNyZWF0ZSBib2FyZHNcbiAgICBwbGF5ZXIuYm9hcmQucmVzZXRCb2FyZCgncGxheWVyLWJvYXJkJyk7XG4gICAgY29tcHV0ZXIuYm9hcmQucmVzZXRCb2FyZCgnY29tcHV0ZXItYm9hcmQnKTtcblxuICAgIC8vZmluZCBhbGwgY2VsbHNcbiAgICBjb25zdCBhbGxDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XG4gICAgYWxsQ2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnY2VsbCc7IC8vIHJlbW92ZSBvdGhlciBjbGFzc2VzXG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDZWxsQ2xpY2spOyAvL3JlbW92ZSBsaXN0ZW5lclxuICAgIH0pO1xuXG4gICAgc2hpcHNDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIjBcIiBjbGFzcz1cImRlc3Ryb3llci1zaXplIGRlc3Ryb3llciBob3Jpem9udGFsXCIgZGF0YS1zaXplPVwiMlwiIGRyYWdnYWJsZT1cInRydWVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCIxXCIgY2xhc3M9XCJzdWJtYXJpbmUtc2l6ZSBzdWJtYXJpbmUgaG9yaXpvbnRhbFwiIGRhdGEtc2l6ZT1cIjNcIiBkcmFnZ2FibGU9XCJ0cnVlXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiMlwiIGNsYXNzPVwiY3J1aXNlci1zaXplIGNydWlzZXIgaG9yaXpvbnRhbFwiIGRhdGEtc2l6ZT1cIjNcIiBkcmFnZ2FibGU9XCJ0cnVlXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiM1wiIGNsYXNzPVwiYmF0dGxlc2hpcC1zaXplIGJhdHRsZXNoaXAgaG9yaXpvbnRhbFwiIGRhdGEtc2l6ZT1cIjRcIiBkcmFnZ2FibGU9XCJ0cnVlXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiNFwiIGNsYXNzPVwiY2Fycmllci1zaXplIGNhcnJpZXIgaG9yaXpvbnRhbFwiIGRhdGEtc2l6ZT1cIjVcIiBkcmFnZ2FibGU9XCJ0cnVlXCI+PC9kaXY+XG4gICAgYDtcblxuICAgIC8vcmVjcmVhdGUgc2hpcCBvcHRpb25zXG4gICAgY29uc3QgbmV3U2hpcE9wdGlvbnMgPSBBcnJheS5mcm9tKHNoaXBzQ29udGFpbmVyLmNoaWxkcmVuKTtcbiAgICBcbiAgICBuZXdTaGlwT3B0aW9ucy5mb3JFYWNoKHNoaXBPcHRpb24gPT4ge1xuICAgICAgICBzaGlwT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdTdGFydCk7IC8vZHJhZyBsaXN0ZW5lclxuICAgIH0pO1xuXG4gICAgdXBkYXRlTWVzc2FnZSgnR2FtZSByZXNldC4gUGxhY2UgeW91ciBzaGlwcyBhbmQgY2xpY2sgc3RhcnQuJyk7XG4gICAgdHVybk1lc3NhZ2UoJycpO1xuICAgIHBsYWNlQ29tcHV0ZXJTaGlwc1JhbmRvbWx5KCk7XG4gICAgZHJhZ092ZXJORHJvcCgpO1xufVxucmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldEdhbWUpO1xuXG5mdW5jdGlvbiBmbGlwKCkge1xuICAgIC8vZmxpcCBzaGlwcyBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbFxuICAgIGlzVmVydGljYWwgPSAhaXNWZXJ0aWNhbDtcbiAgICAvL2FkanVzdCBjb250YWluZXIgZm9yIGZsaXBcbiAgICBzaGlwc0NvbnRhaW5lci5zdHlsZS5mbGV4V3JhcCA9IGlzVmVydGljYWwgPyAnbm93cmFwJyA6ICd3cmFwJztcbiAgICAvL3NlbGVjdCBzaGlwc1xuICAgIGNvbnN0IHNoaXBzQXJyID0gQXJyYXkuZnJvbShzaGlwc0NvbnRhaW5lci5jaGlsZHJlbilcbiAgICBzaGlwc0Fyci5mb3JFYWNoKHNoaXBBcnIgPT4ge1xuICAgICAgICAvL3N3aXRjaCBjbGFzcyBuYW1lc1xuICAgICAgICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgICAgICAgc2hpcEFyci5jbGFzc0xpc3QucmVtb3ZlKCdob3Jpem9udGFsJyk7XG4gICAgICAgICAgICBzaGlwQXJyLmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaGlwQXJyLmNsYXNzTGlzdC5yZW1vdmUoJ3ZlcnRpY2FsJyk7XG4gICAgICAgICAgICBzaGlwQXJyLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwnKTtcbiAgICB9XG4gICAgICAgIH0pXG4gICAgfTtcblxuZmxpcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZsaXApO1xuXG4vL3NlbGVjdCBhbmQgZHJhZyBwbGF5ZXIgc2hpcHNcbmNvbnN0IHNoaXBPcHRpb25zID0gQXJyYXkuZnJvbShzaGlwc0NvbnRhaW5lci5jaGlsZHJlbik7XG5zaGlwT3B0aW9ucy5mb3JFYWNoKHNoaXBPcHRpb24gPT4ge1xuICAgIHNoaXBPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ1N0YXJ0KVxufSk7XG5cbmZ1bmN0aW9uIGRyYWdTdGFydChlKSB7XG4gICAgbm90RHJvcHBlZCA9IGZhbHNlO1xuICAgIGRyYWdnZWRTaGlwID0gZS50YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGRyYWdPdmVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy9zZWxlY3Qgd2l0aCBpZFxuICAgIGNvbnN0IHNoaXAgPSBwbGF5ZXJTaGlwc1tkcmFnZ2VkU2hpcC5pZF07XG4gICAgcGxheWVyLmJvYXJkLmhvdmVyQXJlYShlLnRhcmdldC5pZCwgc2hpcCwgaXNWZXJ0aWNhbCk7XG59XG5cbmZ1bmN0aW9uIGRyb3BTaGlwKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCFkcmFnZ2VkU2hpcCkgcmV0dXJuO1xuICAgIGNvbnN0IHN0YXJ0SWQgPSBlLnRhcmdldC5pZDtcbiAgICBjb25zdCBzaGlwID0gcGxheWVyU2hpcHNbZHJhZ2dlZFNoaXAuaWRdO1xuICAgIC8vcGxhY2Ugc2hpcCB3aGVuIGRyb3BwZWRcbiAgICBwbGF5ZXIuYm9hcmQucGxhY2VTaGlwKCdwbGF5ZXItYm9hcmQnLCBzaGlwLCBzdGFydElkLCBpc1ZlcnRpY2FsKVxuICAgIGlmICghbm90RHJvcHBlZCkge1xuICAgICAgICBkcmFnZ2VkU2hpcC5yZW1vdmUoKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhZ092ZXJORHJvcCgpIHtcbiAgICAvL3NlbGVjdCBwbGF5ZXIgY2VsbHNcbiAgICBjb25zdCBhbGxQbGF5ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCNwbGF5ZXItYm9hcmQgLmNlbGxgKTtcbiAgICBhbGxQbGF5ZXJDZWxscy5mb3JFYWNoKHBsYXllckNlbGwgPT4ge1xuICAgICAgICBwbGF5ZXJDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ092ZXIpO1xuICAgICAgICBwbGF5ZXJDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wU2hpcCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgIGlmIChpc1BsYXllclR1cm4gPT09IHRydWUpIHtcbiAgICAgICAgLy9tYWtlIHN1cmUgc2hpcHMgYXJlIGFsbCBwbGFjZWRcbiAgICAgICAgaWYgKHNoaXBzQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICB1cGRhdGVNZXNzYWdlKCdQbGVhc2UgcGxhY2UgYWxsIHlvdXIgc2hpcHMgZmlyc3QgYW5kIHRoZW4gY2xpY2sgc3RhcnQuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3NlbGVjdCBhbGwgY29tcHV0ZXIgY2VsbHNcbiAgICAgICAgICAgIGNvbnN0IGFsbEJvYXJkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29tcHV0ZXItYm9hcmQgLmNlbGwnKTtcbiAgICAgICAgICAgIGFsbEJvYXJkQ2VsbHMuZm9yRWFjaChjZWxsID0+IGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDZWxsQ2xpY2spKTtcbiAgICAgICAgICAgIGlzUGxheWVyVHVybiA9IHRydWU7XG4gICAgICAgICAgICB0dXJuTWVzc2FnZSgnWW91ciB0dXJuLicpO1xuICAgICAgICAgICAgdXBkYXRlTWVzc2FnZSgnR2FtZSBzdGFydGVkLiBTZWxlY3QgYSBjZWxsIHRvIGF0dGFjayBvbiB0aGUgY29tcHV0ZXIgYm9hcmQuJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIgKCdjbGljaycsIHN0YXJ0R2FtZSk7XG5cbmZ1bmN0aW9uIGNvbXB1dGVyVHVybigpIHtcbiAgICBpZiAoZ2FtZUFjdGl2ZSkge1xuICAgICAgICB0dXJuTWVzc2FnZSgnQ29tcHV0ZXIgVHVybiEnKTtcbiAgICAgICAgdXBkYXRlTWVzc2FnZSgnIFRoZSBjb21wdXRlciBpcyB0aGlua2luZy4uLicpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtzaGlwLCBjZWxsLCBzaGlwTmFtZX0gPSBjb21wdXRlci5jb21wdXRlckF0dGFjayhwbGF5ZXJTaGlwcylcbiAgICAgICAgICAgIGlmIChzaGlwICYmICFzaGlwLnN1bmspIHtcbiAgICAgICAgICAgICAgICBzaGlwLmhpdCgpOyAvL2luY3JlbWVudCBzaGlwIGhpdHNcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZU1lc3NhZ2UoJ1RoZSBjb21wdXRlciBoaXQgeW91ciBzaGlwIScpO1xuICAgICAgICAgICAgICAgIGNvbXB1dGVyQXR0YWNrcy5wdXNoKHNoaXBOYW1lKTsvL2FkZCBzaGlwTmFtZSB0byBjb21wdXRlckF0dGFja3NcbiAgICAgICAgICAgICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVNZXNzYWdlKGBUaGUgY29tcHV0ZXIgc3VuayB5b3VyICR7c2hpcC5uYW1lfSFgKTtcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJTdW5rU2hpcHMucHVzaChzaGlwLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBjb21wdXRlckF0dGFja3MgPSBjb21wdXRlckF0dGFja3MuZmlsdGVyKGF0dGFja05hbWUgPT4gYXR0YWNrTmFtZSAhPT0gc2hpcE5hbWUpOyAvLyByZW1vdmUgc3Vua1NoaXBzIGZyb20gY29tcHV0ZXJBdHRhY2tzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGdhbWVBY3RpdmVDaGVjaygnY29tcHV0ZXItYm9hcmQnLCBjb21wdXRlclN1bmtTaGlwcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVwZGF0ZU1lc3NhZ2UoJ05vdGhpbmcgaGl0IHRoaXMgdGltZS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMjAwMClcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlzUGxheWVyVHVybiA9IHRydWU7XG4gICAgICAgICAgICB0dXJuTWVzc2FnZSgnUGxheWVyIEdvIScpO1xuICAgICAgICAgICAgdXBkYXRlTWVzc2FnZSgnU2VsZWN0IGEgY2VsbCB0byBhdHRhY2sgb24gdGhlIGNvbXB1dGVyIGJvYXJkLicpO1xuICAgICAgICAgICAgLy9zZWxlY3QgY29tcHV0ZXIgY2VsbHNcbiAgICAgICAgICAgIGNvbnN0IGFsbENvbXB1dGVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29tcHV0ZXItYm9hcmQgLmNlbGwnKTtcbiAgICAgICAgICAgIGFsbENvbXB1dGVyQ2VsbHMuZm9yRWFjaChjZWxsID0+IGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDZWxsQ2xpY2spKTtcbiAgICAgICAgfSwgNDAwMCk7XG5cbiAgICB9IGVsc2UgeyBcbiAgICAgICAgYWxlcnQoJ1RoZSBnYW1lIGlzIG92ZXIuIFJlc2V0IHRoZSBnYW1lIHRvIHBsYXkgYWdhaW4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2VsbENsaWNrKGUpIHtcbiAgICBpZiAoZ2FtZUFjdGl2ZSAmJiBpc1BsYXllclR1cm4pIHtcbiAgICAgICAgY29uc3QgeyBzaGlwLCBzaGlwTmFtZSwgYWxyZWFkeUF0dGFja2VkIH0gPSBwbGF5ZXIucGxheWVyQXR0YWNrKGUsIGNvbXB1dGVyU2hpcHMpO1xuICAgICAgICBpZiAoYWxyZWFkeUF0dGFja2VkKSB7XG4gICAgICAgICAgICB1cGRhdGVNZXNzYWdlKCdDZWxsIGFscmVhZHkgYXR0YWNrZWQsIHBsZWFzZSB0cnkgYWdhaW4uJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNoaXAgJiYgIXNoaXAuc3Vuaykge1xuICAgICAgICAgICAgc2hpcC5oaXQoKTsgLy9pbmNyZW1lbnQgc2hpcCBoaXRzXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgIHVwZGF0ZU1lc3NhZ2UoJ0NvbXB1dGVyIHNoaXAgaGl0IScpO1xuICAgICAgICAgICAgcGxheWVyQXR0YWNrcy5wdXNoKHNoaXBOYW1lKTsgLy9hZGQgc2hpcE5hbWUgdG8gcGxheWVyQXR0YWNrc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZU1lc3NhZ2UoYFlvdSBzdW5rIHRoZSBjb21wdXRlcidzICR7c2hpcC5uYW1lfSFgKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJTdW5rU2hpcHMucHVzaChzaGlwLm5hbWUpO1xuICAgICAgICAgICAgICAgIHBsYXllckF0dGFja3MgPSBwbGF5ZXJBdHRhY2tzLmZpbHRlcihhdHRhY2tOYW1lID0+IGF0dGFja05hbWUgIT09IHNoaXBOYW1lKTsgLy9yZW1vdmUgc3Vua1NoaXBzIGZyb20gcGxheWVyQXR0YWNrc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2FtZUFjdGl2ZUNoZWNrKCdwbGF5ZXItYm9hcmQnLCBwbGF5ZXJTdW5rU2hpcHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXBkYXRlTWVzc2FnZSgnTm8gc2hpcHMgaGl0LicpO1xuICAgICAgICB9XG4gICAgICAgIGlzUGxheWVyVHVybiA9IGZhbHNlO1xuICAgICAgICAvL3NlbGVjdCBjb21wdXRlciBjZWxsc1xuICAgICAgICBjb25zdCBhbGxCb2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbXB1dGVyLWJvYXJkIC5jZWxsJyk7XG4gICAgICAgIGFsbEJvYXJkQ2VsbHMuZm9yRWFjaChjZWxsID0+IGNlbGwucmVwbGFjZVdpdGgoY2VsbC5jbG9uZU5vZGUodHJ1ZSkpKTtcbiAgICAgICAgc2V0VGltZW91dChjb21wdXRlclR1cm4sIDMwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCdUaGUgZ2FtZSBpcyBvdmVyLiBSZXNldCB0aGUgZ2FtZSB0byBwbGF5IGFnYWluJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdhbWVBY3RpdmVDaGVjayh1c2VyLCB1c2VyU3Vua1NoaXBzKSB7XG4gICAgLy9jaGVjayBhZnRlciBoaXRzXG4gICAgaWYgKHVzZXIgPT09ICdwbGF5ZXItYm9hcmQnKXtcbiAgICAgICAgaWYgKHVzZXJTdW5rU2hpcHMubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICB1cGRhdGVNZXNzYWdlKCdZb3Ugc3VuayBhbGwgdGhlIGNvbXB1dGVyIHNoaXBzLiBZT1UgV09OIScpO1xuICAgICAgICAgICAgdHVybk1lc3NhZ2UoJycpO1xuICAgICAgICAgICAgZ2FtZUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHVzZXIgPT09ICdjb21wdXRlci1ib2FyZCcpIHtcbiAgICAgICAgaWYgKHVzZXJTdW5rU2hpcHMubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICB1cGRhdGVNZXNzYWdlKCcgVGhlIGNvbXB1dGVyIHN1bmsgYWxsIHlvdXIgc2hpcHMuIFlvdSBsb3N0LicpO1xuICAgICAgICAgICAgdHVybk1lc3NhZ2UoJycpO1xuICAgICAgICAgICAgZ2FtZUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwbGFjZUNvbXB1dGVyU2hpcHNSYW5kb21seSgpIHsgIFxuICAgIHBsYXllclNoaXBzLmZvckVhY2goc2hpcCA9PiBjb21wdXRlci5ib2FyZC5wbGFjZVNoaXAoJ2NvbXB1dGVyLWJvYXJkJywgc2hpcCkpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJCb2FyZHMoKSB7XG4gICAgcGxheWVyLmJvYXJkLnJlbmRlckJvYXJkKCdwbGF5ZXItYm9hcmQnLCBmYWxzZSk7XG4gICAgY29tcHV0ZXIuYm9hcmQucmVuZGVyQm9hcmQoJ2NvbXB1dGVyLWJvYXJkJywgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU1lc3NhZ2UobXNnKSB7XG4gICAgaW5mb0Rpc3BsYXkudGV4dENvbnRlbnQgPSBtc2c7XG59XG5mdW5jdGlvbiB0dXJuTWVzc2FnZShtc2cpIHtcbiAgICB0dXJuRGlzcGxheS50ZXh0Q29udGVudCA9IG1zZztcbn1cblxuZnVuY3Rpb24gaW5pdEdhbWUoKSB7XG4gICAgcmVuZGVyQm9hcmRzKCk7XG4gICAgcGxhY2VDb21wdXRlclNoaXBzUmFuZG9tbHkoKTtcbiAgICBkcmFnT3Zlck5Ecm9wKCk7XG4gICAgdXBkYXRlTWVzc2FnZShcIlBsZWFzZSBwbGFjZSB5b3VyIHNoaXBzIGFuZCBjbGljayBTdGFydC5cIik7XG4gICAgdHVybk1lc3NhZ2UoJycpO1xufVxuXG5pbml0R2FtZSgpO1xuIl0sIm5hbWVzIjpbIkdhbWVib2FyZCIsInVzZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJib2FyZCIsImNyZWF0ZUJvYXJkIiwic2hpcHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdhbWVCb2FyZENvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpZCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsInJlbmRlckJvYXJkIiwiZWxlbWVudElkIiwiaXNFbmVteUJvYXJkIiwiYm9hcmRFbGVtZW50IiwiaSIsImoiLCJjZWxsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImRhdGFzZXQiLCJ4IiwieSIsImNlbGxJZCIsImFwcGVuZENoaWxkIiwicmVzZXRCb2FyZCIsImdldFZhbGlkaXR5IiwiYWxsQm9hcmRDZWxscyIsImlzSG9yaXpvbnRhbCIsInN0YXJ0SW5kZXgiLCJzaGlwIiwidmFsaWRTdGFydCIsImxlbmd0aCIsInNoaXBDZWxscyIsInB1c2giLCJOdW1iZXIiLCJ2YWxpZCIsImV2ZXJ5IiwiX3NoaXBDZWxsIiwiaW5kZXgiLCJub3RUYWtlbiIsInNoaXBDZWxsIiwiY29udGFpbnMiLCJwbGFjZVNoaXAiLCJzdGFydElkIiwiaXNWZXJ0aWNhbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25jYXQiLCJyYW5kb21Cb29sZWFuIiwiTWF0aCIsInJhbmRvbSIsInJhbmRvbVN0YXJ0SW5kZXgiLCJmbG9vciIsIl90aGlzJGdldFZhbGlkaXR5IiwiZm9yRWFjaCIsIm5hbWUiLCJub3REcm9wcGVkIiwiaG92ZXJBcmVhIiwiaXNWZXJ0aWNhbElucHV0IiwiX3RoaXMkZ2V0VmFsaWRpdHkyIiwic2V0VGltZW91dCIsInJlbW92ZSIsIlBsYXllciIsImlzQ29tcHV0ZXIiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJ1c2VkQXR0YWNrcyIsIlNldCIsImNvbXB1dGVyQXR0YWNrIiwicGxheWVyU2hpcHMiLCJyYW5kb21Db21wdXRlckdvIiwiYWxsUGxheWVyQ2VsbHMiLCJjbGFzc2VzIiwiZnJvbSIsInNoaXBOYW1lIiwiZmluZCIsImMiLCJzIiwicGxheWVyQXR0YWNrIiwiZSIsImNvbXB1dGVyU2hpcHMiLCJ0YXJnZXQiLCJhbHJlYWR5QXR0YWNrZWQiLCJpbmNsdWRlcyIsIlNoaXAiLCJoaXRzIiwic3VuayIsImhpdCIsImlzU3VuayIsInBsYXllciIsImNvbXB1dGVyIiwiaW5mb0Rpc3BsYXkiLCJ0dXJuRGlzcGxheSIsInNoaXBzQ29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImZsaXBCdXR0b24iLCJzdGFydEJ1dHRvbiIsInJlc2V0QnV0dG9uIiwiaXNQbGF5ZXJUdXJuIiwiZ2FtZUFjdGl2ZSIsImRyYWdnZWRTaGlwIiwic2hpcEZsZWV0IiwicGxheWVyQXR0YWNrcyIsImNvbXB1dGVyQXR0YWNrcyIsInBsYXllclN1bmtTaGlwcyIsImNvbXB1dGVyU3Vua1NoaXBzIiwicmVzZXRHYW1lIiwiYWxsQ2VsbHMiLCJjbGFzc05hbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2VsbENsaWNrIiwiaW5uZXJIVE1MIiwibmV3U2hpcE9wdGlvbnMiLCJjaGlsZHJlbiIsInNoaXBPcHRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiZHJhZ1N0YXJ0IiwidXBkYXRlTWVzc2FnZSIsInR1cm5NZXNzYWdlIiwicGxhY2VDb21wdXRlclNoaXBzUmFuZG9tbHkiLCJkcmFnT3Zlck5Ecm9wIiwiZmxpcCIsInN0eWxlIiwiZmxleFdyYXAiLCJzaGlwc0FyciIsInNoaXBBcnIiLCJzaGlwT3B0aW9ucyIsImRyYWdPdmVyIiwicHJldmVudERlZmF1bHQiLCJkcm9wU2hpcCIsInBsYXllckNlbGwiLCJzdGFydEdhbWUiLCJjb21wdXRlclR1cm4iLCJfY29tcHV0ZXIkY29tcHV0ZXJBdHQiLCJmaWx0ZXIiLCJhdHRhY2tOYW1lIiwiZ2FtZUFjdGl2ZUNoZWNrIiwiYWxsQ29tcHV0ZXJDZWxscyIsImFsZXJ0IiwiX3BsYXllciRwbGF5ZXJBdHRhY2siLCJyZXBsYWNlV2l0aCIsImNsb25lTm9kZSIsInVzZXJTdW5rU2hpcHMiLCJyZW5kZXJCb2FyZHMiLCJtc2ciLCJ0ZXh0Q29udGVudCIsImluaXRHYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==