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

body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
}

/*Portfolio Nav*/
.port-nav {
  position: absolute;
  top: 20px;
  left: 50px;
  padding: 5px;
}

.port-nav a {
  text-decoration: none;
  color: blue;
}

.port-nav a:hover {
  color:#fd9047;
}

/*Main page*/
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
    gap: 30px;
}

#game-message {
    padding: 10px;
    width: 150px;
}

#turn-message {
    width: 100px;
}

#bottom-box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
}

.ships-container {
    width: 300px;
    height: auto;
    margin: 30px 0;
    padding: 20px;
    background-color: yellow;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}

.btn-box {
    display: flex;
    flex-direction: column;
}

button {
    height: 30px;
    width: 60px;
    padding: 5px;
    margin: 5px;
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

#computer-board .destroyer,
#computer-board .submarine,
#computer-board .cruiser,
#computer-board .battleship,
#computer-board .carrier {
    background-color: #eee
}

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
    background-color: red !important;
}

.miss {
    background-color: rgb(148, 147, 147) !important;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA,gBAAgB;AAChB;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA,YAAY;AACZ;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,sBAAsB;AAC1B;;;AAGA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,aAAa;IACb,wBAAwB;IACxB,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;;;;IAKI;AACJ;;AAEA,gBAAgB;AAChB,6BAA6B,WAAW,EAAE,YAAY,EAAE,WAAW;AACnE,2BAA2B,WAAW,EAAE,YAAY,EAAE,WAAW;;AAEjE,6BAA6B,WAAW,EAAE,YAAY,EAAE,WAAW;AACnE,2BAA2B,WAAW,EAAE,YAAY,EAAE,WAAW;;AAEjE,2BAA2B,WAAW,EAAE,YAAY,EAAE,WAAW;AACjE,yBAAyB,WAAW,EAAE,YAAY,EAAE,WAAW;;AAE/D,8BAA8B,YAAY,EAAE,YAAY,EAAE,WAAW;AACrE,4BAA4B,WAAW,EAAE,aAAa,EAAE,WAAW;;AAEnE,2BAA2B,YAAY,EAAE,YAAY,EAAE,WAAW;AAClE,yBAAyB,WAAW,EAAE,aAAa,EAAE,WAAW;;AAEhE;IACI,sBAAsB;AAC1B;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,+CAA+C;AACnD","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 30px;\n}\n\n/*Portfolio Nav*/\n.port-nav {\n  position: absolute;\n  top: 20px;\n  left: 50px;\n  padding: 5px;\n}\n\n.port-nav a {\n  text-decoration: none;\n  color: blue;\n}\n\n.port-nav a:hover {\n  color:#fd9047;\n}\n\n/*Main page*/\nh1 {\n    text-align: center;\n    padding: 10px;\n}\n\nh2 {\n    padding: 10px;\n}\n\n.board {\n    display: flex;\n    flex-wrap: wrap;    \n    width: 300px;\n    height: 300px;\n    border: 2px solid black; \n}\n\n.cell {\n    background-color: #eee;\n    width: 30px;\n    height: 30px;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}\n\n\n#game-container {\n    display: flex;\n    gap: 30px;\n}\n\n#game-message {\n    padding: 10px;\n    width: 150px;\n}\n\n#turn-message {\n    width: 100px;\n}\n\n#bottom-box {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    gap: 20px;\n}\n\n.ships-container {\n    width: 300px;\n    height: auto;\n    margin: 30px 0;\n    padding: 20px;\n    background-color: yellow;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.btn-box {\n    display: flex;\n    flex-direction: column;\n}\n\nbutton {\n    height: 30px;\n    width: 60px;\n    padding: 5px;\n    margin: 5px;\n}\n\n.destroyer {\n    background-color: brown;\n}\n\n.submarine {\n    background-color: green;\n}\n\n.cruiser {\n    background-color: purple;\n}\n\n.battleship {\n    background: orange;\n}\n\n.carrier {\n    background-color: blue;\n}\n\n#computer-board .destroyer,\n#computer-board .submarine,\n#computer-board .cruiser,\n#computer-board .battleship,\n#computer-board .carrier {\n    background-color: #eee\n}\n\n/* Dynamic Size*/\n.destroyer-size.horizontal { width: 60px; height: 30px; margin: 3px}\n.destroyer-size.vertical { width: 30px; height: 60px; margin: 5px}\n\n.submarine-size.horizontal { width: 90px; height: 30px; margin: 3px}\n.submarine-size.vertical { width: 30px; height: 90px; margin: 5px}\n\n.cruiser-size.horizontal { width: 90px; height: 30px; margin: 3px}\n.cruiser-size.vertical { width: 30px; height: 90px; margin: 5px}\n\n.battleship-size.horizontal { width: 120px; height: 30px; margin: 3px}\n.battleship-size.vertical { width: 30px; height: 120px; margin: 5px}\n\n.carrier-size.horizontal { width: 150px; height: 30px; margin: 3px}\n.carrier-size.vertical { width: 30px; height: 150px; margin: 5px}\n\n.hover {\n    background-color: grey; \n}\n\n.hit {\n    background-color: red !important;\n}\n\n.miss {\n    background-color: rgb(148, 147, 147) !important;\n}"],"sourceRoot":""}]);
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
    value: function getValidity(allBoardCells, isHorizontal, startRow, startCol, ship) {
      if (isHorizontal) {
        if (startCol + ship.length > 10) return {
          valid: false,
          notTaken: false,
          shipCells: []
        }; // Ship goes off right edge
      } else {
        if (startRow + ship.length > 10) return {
          valid: false,
          notTaken: false,
          shipCells: []
        };
        ; // Ship goes off bottom edge
      }
      ;
      var shipCells = [];
      for (var i = 0; i < ship.length; i++) {
        var r = isHorizontal ? startRow : startRow + i;
        var c = isHorizontal ? startCol + i : startCol;
        var index = r * 10 + c;
        if (index < 0 || index >= allBoardCells.length) {
          return {
            valid: false,
            notTaken: false,
            shipCells: []
          };
        }
        shipCells.push(allBoardCells[index]);
      }
      //ensures that all targeted cells are free
      var notTaken = shipCells.every(function (shipCell) {
        return !shipCell.classList.contains('taken');
      });
      var valid = true;
      return {
        shipCells: shipCells,
        valid: valid,
        notTaken: notTaken
      };
    }
  }, {
    key: "placeShip",
    value: function placeShip(user, ship, row, col, isVertical) {
      var attempts = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      if (attempts >= 5) {
        return false; // Stop recursion
      }

      //select user cells
      var allBoardCells = document.querySelectorAll("#".concat(user, " .cell"));
      var randomBoolean = Math.random() < 0.5;
      var isHorizontal = user === 'player-board' ? !isVertical : randomBoolean;
      var randomRowIndex = Math.floor(Math.random() * 10);
      var randomColIndex = Math.floor(Math.random() * 10);
      var startRow = row !== null && row !== undefined ? row : randomRowIndex;
      var startCol = col !== null && col !== undefined ? col : randomColIndex;
      var _this$getValidity = this.getValidity(allBoardCells, isHorizontal, startRow, startCol, ship),
        shipCells = _this$getValidity.shipCells,
        valid = _this$getValidity.valid,
        notTaken = _this$getValidity.notTaken;
      if (valid && notTaken) {
        shipCells.forEach(function (shipCell) {
          shipCell.classList.add(ship.name);
          shipCell.classList.add('taken');
        });
        return true;
      } else {
        if (user === 'computer-board') return this.placeShip(user, ship, null, null, null, attempts + 1);
        if (user === 'player-board') return false;
      }
    }
  }, {
    key: "hoverArea",
    value: function hoverArea(startRow, startCol, ship, isVerticalInput) {
      //select all player cells
      var allBoardCells = document.querySelectorAll('#player-board .cell');
      var isHorizontal = !isVerticalInput;
      var _this$getValidity2 = this.getValidity(allBoardCells, isHorizontal, startRow, startCol, ship),
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

/***/ "./src/main.js"
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dragStart: () => (/* binding */ dragStart),
/* harmony export */   dropShip: () => (/* binding */ dropShip),
/* harmony export */   flip: () => (/* binding */ flip),
/* harmony export */   initGame: () => (/* binding */ initGame),
/* harmony export */   resetGame: () => (/* binding */ resetGame),
/* harmony export */   shipFleet: () => (/* binding */ shipFleet)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ "./src/player.js");
// src/main.js



//define const and let
globalThis.player = new _player_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Human");
globalThis.computer = new _player_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Computer", true);
var infoDisplay = document.getElementById('game-message');
var turnDisplay = document.getElementById('turn-message');
var shipsContainer = document.querySelector('.ships-container');
var isPlayerTurn = true;
__webpack_require__.g.gameActive = false;
var computerTurnTimer;
var playerTurnTimer;
__webpack_require__.g.isVertical = false;
var notDropped = true;
__webpack_require__.g.draggedShip;
var alreadyAttacked;
var playerShips = shipFleet();
var playerShipsPlaced = [];
var computerShips = shipFleet();
var playerAttacks = [];
var computerAttacks = [];
var playerSunkShips = [];
var computerSunkShips = [];

//define all ships for players
function shipFleet() {
  return [new _ship_js__WEBPACK_IMPORTED_MODULE_0__["default"]('destroyer', 2), new _ship_js__WEBPACK_IMPORTED_MODULE_0__["default"]('submarine', 3), new _ship_js__WEBPACK_IMPORTED_MODULE_0__["default"]('cruiser', 3), new _ship_js__WEBPACK_IMPORTED_MODULE_0__["default"]('battleship', 4), new _ship_js__WEBPACK_IMPORTED_MODULE_0__["default"]('carrier', 5)];
}

//reset game
function resetGame() {
  console.log('resetGame');
  isPlayerTurn = true;
  __webpack_require__.g.gameActive = false;
  clearTimeout(computerTurnTimer);
  clearTimeout(playerTurnTimer);
  __webpack_require__.g.isVertical = false;
  notDropped = true;
  __webpack_require__.g.draggedShip = undefined;
  alreadyAttacked;
  playerShips = shipFleet();
  playerShipsPlaced = [];
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
  if (shipsContainer) {
    shipsContainer.style.flexWrap = 'wrap'; //return to wrap
    shipsContainer.innerHTML = "\n            <div id=\"0\" class=\"destroyer-size destroyer horizontal\" data-size=\"2\" draggable=\"true\"></div>\n            <div id=\"1\" class=\"submarine-size submarine horizontal\" data-size=\"3\" draggable=\"true\"></div>\n            <div id=\"2\" class=\"cruiser-size cruiser horizontal\" data-size=\"3\" draggable=\"true\"></div>\n            <div id=\"3\" class=\"battleship-size battleship horizontal\" data-size=\"4\" draggable=\"true\"></div>\n            <div id=\"4\" class=\"carrier-size carrier horizontal\" data-size=\"5\" draggable=\"true\"></div>\n    ";
    //recreate ship options
    var newShipOptions = Array.from(shipsContainer.children);
    newShipOptions.forEach(function (shipOption) {
      shipOption.addEventListener('dragstart', dragStart); //drag listener
    });
  }
  updateMessage('Game reset. Place your ships and click start.');
  turnMessage('');
  placeComputerShipsRandomly();
  dragOverNDrop();
}

//flip, start, and reset eventlistener after page load
document.addEventListener('DOMContentLoaded', function (event) {
  var flipButton = document.getElementById('flip-button');
  var startButton = document.getElementById('start-button');
  var resetButton = document.getElementById('reset-button');
  if (resetButton) {
    resetButton.addEventListener('click', resetGame);
  } else {
    console.log('Reset button element not found!');
  }
  if (flipButton) {
    flipButton.addEventListener('click', flip);
  } else {
    console.log('Flip button element not found!');
  }
  if (startButton) {
    startButton.addEventListener('click', startGame);
  } else {
    console.log('Start button element not found!');
  }
});
function flip() {
  var currentShipsContainer = document.querySelector('.ships-container');
  //flip ships horizontal and vertical
  __webpack_require__.g.isVertical = !__webpack_require__.g.isVertical;

  //adjust container for flip
  if (currentShipsContainer) {
    currentShipsContainer.classList.toggle('vertical', __webpack_require__.g.isVertical);
    currentShipsContainer.classList.toggle('horizontal', !__webpack_require__.g.isVertical);
    currentShipsContainer.style.flexWrap = __webpack_require__.g.isVertical ? 'nowrap' : 'wrap';
    //select ships
    var shipsArr = Array.from(currentShipsContainer.children);
    shipsArr.forEach(function (shipArr) {
      if (__webpack_require__.g.isVertical) {
        shipArr.classList.add('vertical');
        shipArr.classList.remove('horizontal');
      } else {
        shipArr.classList.add('horizontal');
        shipArr.classList.remove('vertical');
      }
    });
  }
}
;
function dragStart(e) {
  __webpack_require__.g.draggedShip = e.target;
}
function dragOver(e) {
  e.preventDefault();
  //select with id
  var ship = playerShips[__webpack_require__.g.draggedShip.id];
  player.board.hoverArea(Number(e.target.dataset.x), Number(e.target.dataset.y), ship, __webpack_require__.g.isVertical);
}
function dropShip(e) {
  e.preventDefault();
  if (!__webpack_require__.g.draggedShip) return;
  var startRow = Number(e.target.dataset.x);
  var startCol = Number(e.target.dataset.y);
  var ship = playerShips[__webpack_require__.g.draggedShip.id];
  //place ship when dropped
  var success = globalThis.player.board.placeShip('player-board', ship, startRow, startCol, __webpack_require__.g.isVertical);
  if (success) {
    playerShipsPlaced.push(ship);
    __webpack_require__.g.draggedShip.remove();
    notDropped = false;
    //all ships placed before gameActive
    if (playerShipsPlaced.length >= 5) {
      __webpack_require__.g.gameActive = true;
    }
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
      isPlayerTurn = true;
      //select all computer cells
      var allBoardCells = document.querySelectorAll('#computer-board .cell');
      allBoardCells.forEach(function (cell) {
        return cell.addEventListener('click', handleCellClick);
      });
      turnMessage('Your turn.');
      updateMessage('Game started. Select a cell to attack on the computer board.');
    }
  }
}
function computerTurn() {
  //requires gameActive
  if (__webpack_require__.g.gameActive) {
    turnMessage('Computer Turn!');
    updateMessage(' The computer is thinking...');
    //reset computerTurnTimer will be reset above
    computerTurnTimer = setTimeout(function () {
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

    //reset playerTurnTimer will be reset above
    playerTurnTimer = setTimeout(function () {
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
    console.log('Error with computerTurn');
    alert('The game is over. Reset the game to play again');
    return;
  }
}
function handleCellClick(e) {
  if (__webpack_require__.g.gameActive && isPlayerTurn) {
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
    computerTurnTimer = setTimeout(computerTurn, 3000);
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
      __webpack_require__.g.gameActive = false;
    }
  }
  if (user === 'computer-board') {
    if (userSunkShips.length === 5) {
      updateMessage(' The computer sunk all your ships. You lost.');
      turnMessage('');
      __webpack_require__.g.gameActive = false;
    }
  }
}
function placeComputerShipsRandomly() {
  playerShips.forEach(function (ship) {
    return computer.board.placeShip('computer-board', ship);
  });
  turnMessage('Computer ships are placed.');
}
function renderBoards() {
  player.board.renderBoard('player-board', false);
  computer.board.renderBoard('computer-board', true);
}
function updateMessage(msg) {
  if (infoDisplay) {
    infoDisplay.textContent = msg;
  }
}
function turnMessage(msg) {
  if (turnDisplay) {
    turnDisplay.textContent = msg;
  }
}
function initGame() {
  renderBoards();
  placeComputerShipsRandomly();

  //select and drag player ships
  var shipOptions = Array.from(shipsContainer.children);
  shipOptions.forEach(function (shipOption) {
    shipOption.addEventListener('dragstart', dragStart);
  });
  dragOverNDrop();
  updateMessage("Please place your ships and click Start.");
}


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
    key: "getHits",
    value: function getHits() {
      return this.hits;
    }
  }, {
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ "./src/main.js");


(0,_main_js__WEBPACK_IMPORTED_MODULE_1__.initGame)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsbUM7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDZTtBQUNyQ3FGLGtEQUFRLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLypQb3J0Zm9saW8gTmF2Ki9cbi5wb3J0LW5hdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiA1MHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5wb3J0LW5hdiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLnBvcnQtbmF2IGE6aG92ZXIge1xuICBjb2xvcjojZmQ5MDQ3O1xufVxuXG4vKk1haW4gcGFnZSovXG5oMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbmgyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uYm9hcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwOyAgICBcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgXG59XG5cbi5jZWxsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cblxuI2dhbWUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMzBweDtcbn1cblxuI2dhbWUtbWVzc2FnZSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG59XG5cbiN0dXJuLW1lc3NhZ2Uge1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuI2JvdHRvbS1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi5zaGlwcy1jb250YWluZXIge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAzMHB4IDA7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYnRuLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5idXR0b24ge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogNjBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbi5kZXN0cm95ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xufVxuXG4uc3VibWFyaW5lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLmNydWlzZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbn1cblxuLmJhdHRsZXNoaXAge1xuICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcbn1cblxuLmNhcnJpZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5cbiNjb21wdXRlci1ib2FyZCAuZGVzdHJveWVyLFxuI2NvbXB1dGVyLWJvYXJkIC5zdWJtYXJpbmUsXG4jY29tcHV0ZXItYm9hcmQgLmNydWlzZXIsXG4jY29tcHV0ZXItYm9hcmQgLmJhdHRsZXNoaXAsXG4jY29tcHV0ZXItYm9hcmQgLmNhcnJpZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVcbn1cblxuLyogRHluYW1pYyBTaXplKi9cbi5kZXN0cm95ZXItc2l6ZS5ob3Jpem9udGFsIHsgd2lkdGg6IDYwcHg7IGhlaWdodDogMzBweDsgbWFyZ2luOiAzcHh9XG4uZGVzdHJveWVyLXNpemUudmVydGljYWwgeyB3aWR0aDogMzBweDsgaGVpZ2h0OiA2MHB4OyBtYXJnaW46IDVweH1cblxuLnN1Ym1hcmluZS1zaXplLmhvcml6b250YWwgeyB3aWR0aDogOTBweDsgaGVpZ2h0OiAzMHB4OyBtYXJnaW46IDNweH1cbi5zdWJtYXJpbmUtc2l6ZS52ZXJ0aWNhbCB7IHdpZHRoOiAzMHB4OyBoZWlnaHQ6IDkwcHg7IG1hcmdpbjogNXB4fVxuXG4uY3J1aXNlci1zaXplLmhvcml6b250YWwgeyB3aWR0aDogOTBweDsgaGVpZ2h0OiAzMHB4OyBtYXJnaW46IDNweH1cbi5jcnVpc2VyLXNpemUudmVydGljYWwgeyB3aWR0aDogMzBweDsgaGVpZ2h0OiA5MHB4OyBtYXJnaW46IDVweH1cblxuLmJhdHRsZXNoaXAtc2l6ZS5ob3Jpem9udGFsIHsgd2lkdGg6IDEyMHB4OyBoZWlnaHQ6IDMwcHg7IG1hcmdpbjogM3B4fVxuLmJhdHRsZXNoaXAtc2l6ZS52ZXJ0aWNhbCB7IHdpZHRoOiAzMHB4OyBoZWlnaHQ6IDEyMHB4OyBtYXJnaW46IDVweH1cblxuLmNhcnJpZXItc2l6ZS5ob3Jpem9udGFsIHsgd2lkdGg6IDE1MHB4OyBoZWlnaHQ6IDMwcHg7IG1hcmdpbjogM3B4fVxuLmNhcnJpZXItc2l6ZS52ZXJ0aWNhbCB7IHdpZHRoOiAzMHB4OyBoZWlnaHQ6IDE1MHB4OyBtYXJnaW46IDVweH1cblxuLmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5OyBcbn1cblxuLmhpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5taXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ4LCAxNDcsIDE0NykgIWltcG9ydGFudDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLFlBQVk7QUFDWjtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBOzs7OztJQUtJO0FBQ0o7O0FBRUEsZ0JBQWdCO0FBQ2hCLDZCQUE2QixXQUFXLEVBQUUsWUFBWSxFQUFFLFdBQVc7QUFDbkUsMkJBQTJCLFdBQVcsRUFBRSxZQUFZLEVBQUUsV0FBVzs7QUFFakUsNkJBQTZCLFdBQVcsRUFBRSxZQUFZLEVBQUUsV0FBVztBQUNuRSwyQkFBMkIsV0FBVyxFQUFFLFlBQVksRUFBRSxXQUFXOztBQUVqRSwyQkFBMkIsV0FBVyxFQUFFLFlBQVksRUFBRSxXQUFXO0FBQ2pFLHlCQUF5QixXQUFXLEVBQUUsWUFBWSxFQUFFLFdBQVc7O0FBRS9ELDhCQUE4QixZQUFZLEVBQUUsWUFBWSxFQUFFLFdBQVc7QUFDckUsNEJBQTRCLFdBQVcsRUFBRSxhQUFhLEVBQUUsV0FBVzs7QUFFbkUsMkJBQTJCLFlBQVksRUFBRSxZQUFZLEVBQUUsV0FBVztBQUNsRSx5QkFBeUIsV0FBVyxFQUFFLGFBQWEsRUFBRSxXQUFXOztBQUVoRTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLCtDQUErQztBQUNuRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxufVxcblxcbi8qUG9ydGZvbGlvIE5hdiovXFxuLnBvcnQtbmF2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjBweDtcXG4gIGxlZnQ6IDUwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5wb3J0LW5hdiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4ucG9ydC1uYXYgYTpob3ZlciB7XFxuICBjb2xvcjojZmQ5MDQ3O1xcbn1cXG5cXG4vKk1haW4gcGFnZSovXFxuaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbmgyIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwOyAgICBcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgXFxufVxcblxcbi5jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuXFxuI2dhbWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4jZ2FtZS1tZXNzYWdlIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4jdHVybi1tZXNzYWdlIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4jYm90dG9tLWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5zaGlwcy1jb250YWluZXIge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWFyZ2luOiAzMHB4IDA7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJ0bi1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4uZGVzdHJveWVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxufVxcblxcbi5zdWJtYXJpbmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmNydWlzZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxufVxcblxcbi5iYXR0bGVzaGlwIHtcXG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xcbn1cXG5cXG4uY2FycmllciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbiNjb21wdXRlci1ib2FyZCAuZGVzdHJveWVyLFxcbiNjb21wdXRlci1ib2FyZCAuc3VibWFyaW5lLFxcbiNjb21wdXRlci1ib2FyZCAuY3J1aXNlcixcXG4jY29tcHV0ZXItYm9hcmQgLmJhdHRsZXNoaXAsXFxuI2NvbXB1dGVyLWJvYXJkIC5jYXJyaWVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZVxcbn1cXG5cXG4vKiBEeW5hbWljIFNpemUqL1xcbi5kZXN0cm95ZXItc2l6ZS5ob3Jpem9udGFsIHsgd2lkdGg6IDYwcHg7IGhlaWdodDogMzBweDsgbWFyZ2luOiAzcHh9XFxuLmRlc3Ryb3llci1zaXplLnZlcnRpY2FsIHsgd2lkdGg6IDMwcHg7IGhlaWdodDogNjBweDsgbWFyZ2luOiA1cHh9XFxuXFxuLnN1Ym1hcmluZS1zaXplLmhvcml6b250YWwgeyB3aWR0aDogOTBweDsgaGVpZ2h0OiAzMHB4OyBtYXJnaW46IDNweH1cXG4uc3VibWFyaW5lLXNpemUudmVydGljYWwgeyB3aWR0aDogMzBweDsgaGVpZ2h0OiA5MHB4OyBtYXJnaW46IDVweH1cXG5cXG4uY3J1aXNlci1zaXplLmhvcml6b250YWwgeyB3aWR0aDogOTBweDsgaGVpZ2h0OiAzMHB4OyBtYXJnaW46IDNweH1cXG4uY3J1aXNlci1zaXplLnZlcnRpY2FsIHsgd2lkdGg6IDMwcHg7IGhlaWdodDogOTBweDsgbWFyZ2luOiA1cHh9XFxuXFxuLmJhdHRsZXNoaXAtc2l6ZS5ob3Jpem9udGFsIHsgd2lkdGg6IDEyMHB4OyBoZWlnaHQ6IDMwcHg7IG1hcmdpbjogM3B4fVxcbi5iYXR0bGVzaGlwLXNpemUudmVydGljYWwgeyB3aWR0aDogMzBweDsgaGVpZ2h0OiAxMjBweDsgbWFyZ2luOiA1cHh9XFxuXFxuLmNhcnJpZXItc2l6ZS5ob3Jpem9udGFsIHsgd2lkdGg6IDE1MHB4OyBoZWlnaHQ6IDMwcHg7IG1hcmdpbjogM3B4fVxcbi5jYXJyaWVyLXNpemUudmVydGljYWwgeyB3aWR0aDogMzBweDsgaGVpZ2h0OiAxNTBweDsgbWFyZ2luOiA1cHh9XFxuXFxuLmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTsgXFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ4LCAxNDcsIDE0NykgIWltcG9ydGFudDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIHNyYy9nYW1lYm9hcmQuanNcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3Rvcih1c2VyKSB7XG4gICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgICAgIHRoaXMuYm9hcmQgPSB0aGlzLmNyZWF0ZUJvYXJkKHVzZXIpO1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgfVxuXG4gICAgY3JlYXRlQm9hcmQodXNlcikge1xuICAgICAgICBjb25zdCBnYW1lQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh1c2VyKTtcbiAgICAgICAgaWYgKGdhbWVCb2FyZENvbnRhaW5lcikgZ2FtZUJvYXJkQ29udGFpbmVyLmlkID0gdXNlcjtcbiAgICAgICAgcmV0dXJuIEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbChudWxsKSlcbiAgICB9XG5cbiAgICByZW5kZXJCb2FyZChlbGVtZW50SWQsIGlzRW5lbXlCb2FyZCkge1xuICAgIGNvbnN0IGJvYXJkRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQueCA9IGk7XG4gICAgICAgICAgICBjZWxsLmRhdGFzZXQueSA9IGo7XG5cbiAgICAgICAgICAgIGNvbnN0IGNlbGxJZCA9IChpICogMTApICsgajtcbiAgICAgICAgICAgIGNlbGwuaWQgPSBjZWxsSWQ7XG4gICAgICAgICAgICBib2FyZEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiAgICByZXNldEJvYXJkKHVzZXIpIHtcbiAgICAgICAgY29uc3QgZ2FtZUJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodXNlcik7XG4gICAgICAgIGlmIChnYW1lQm9hcmRDb250YWluZXIpIGdhbWVCb2FyZENvbnRhaW5lci5pZCA9IHVzZXI7XG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICAgICAgcmV0dXJuIEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbChudWxsKSlcblxuICAgIH1cblxuICAgIGdldFZhbGlkaXR5KGFsbEJvYXJkQ2VsbHMsIGlzSG9yaXpvbnRhbCwgc3RhcnRSb3csIHN0YXJ0Q29sLCBzaGlwKSB7ICAgICAgXG4gICAgICAgIGlmIChpc0hvcml6b250YWwpIHtcbiAgICAgICAgICAgIGlmIChzdGFydENvbCArIHNoaXAubGVuZ3RoID4gMTApIHJldHVybiB7IHZhbGlkOiBmYWxzZSwgbm90VGFrZW46IGZhbHNlLCBzaGlwQ2VsbHM6IFtdIH07IC8vIFNoaXAgZ29lcyBvZmYgcmlnaHQgZWRnZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHN0YXJ0Um93ICsgc2hpcC5sZW5ndGggPiAxMCkgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBub3RUYWtlbjogZmFsc2UsIHNoaXBDZWxsczogW10gfTs7IC8vIFNoaXAgZ29lcyBvZmYgYm90dG9tIGVkZ2VcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgc2hpcENlbGxzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgciA9IGlzSG9yaXpvbnRhbCA/IHN0YXJ0Um93IDogc3RhcnRSb3cgKyBpO1xuICAgICAgICAgICAgbGV0IGMgPSBpc0hvcml6b250YWwgPyBzdGFydENvbCArIGkgOiBzdGFydENvbDtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IChyICogMTApICsgYztcblxuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleD49IGFsbEJvYXJkQ2VsbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsaWQ6IGZhbHNlLCBub3RUYWtlbjogZmFsc2UsIHNoaXBDZWxsczogW10gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoaXBDZWxscy5wdXNoKGFsbEJvYXJkQ2VsbHNbaW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgICAvL2Vuc3VyZXMgdGhhdCBhbGwgdGFyZ2V0ZWQgY2VsbHMgYXJlIGZyZWVcbiAgICAgICAgbGV0IG5vdFRha2VuID0gc2hpcENlbGxzLmV2ZXJ5KHNoaXBDZWxsID0+ICFzaGlwQ2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rha2VuJykpO1xuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlOyAgICAgXG5cbiAgICAgICAgcmV0dXJuIHtzaGlwQ2VsbHMsIHZhbGlkLCBub3RUYWtlbn07XG4gICAgfVxuXG5cbiAgICBwbGFjZVNoaXAodXNlciwgc2hpcCwgcm93LCBjb2wsIGlzVmVydGljYWwsIGF0dGVtcHRzID0gMCkge1xuICAgICAgICBpZiAoYXR0ZW1wdHMgPj0gNSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBTdG9wIHJlY3Vyc2lvblxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvL3NlbGVjdCB1c2VyIGNlbGxzXG4gICAgICAgIGNvbnN0IGFsbEJvYXJkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjJHt1c2VyfSAuY2VsbGApO1xuICAgICAgICBsZXQgcmFuZG9tQm9vbGVhbiA9IE1hdGgucmFuZG9tKCkgPCAwLjU7XG4gICAgICAgIGxldCBpc0hvcml6b250YWwgPSB1c2VyID09PSAncGxheWVyLWJvYXJkJyA/ICFpc1ZlcnRpY2FsIDogcmFuZG9tQm9vbGVhbjtcbiAgICAgICAgbGV0IHJhbmRvbVJvd0luZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBsZXQgcmFuZG9tQ29sSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7IFxuXG4gICAgICAgIGxldCBzdGFydFJvdyA9IChyb3cgIT09IG51bGwgJiYgcm93ICE9PSB1bmRlZmluZWQpID8gcm93IDogcmFuZG9tUm93SW5kZXg7XG4gICAgICAgIGxldCBzdGFydENvbCA9IChjb2wgIT09IG51bGwgJiYgY29sICE9PSB1bmRlZmluZWQpID8gY29sIDogcmFuZG9tQ29sSW5kZXg7ICBcblxuICAgICAgICBjb25zdCB7c2hpcENlbGxzLCB2YWxpZCwgbm90VGFrZW4gfSA9IHRoaXMuZ2V0VmFsaWRpdHkoYWxsQm9hcmRDZWxscywgaXNIb3Jpem9udGFsLCBzdGFydFJvdywgc3RhcnRDb2wsIHNoaXApO1xuICAgICAgICBpZiAodmFsaWQgJiYgbm90VGFrZW4pIHtcbiAgICAgICAgICAgIHNoaXBDZWxscy5mb3JFYWNoKHNoaXBDZWxsID0+IHtcbiAgICAgICAgICAgICAgICBzaGlwQ2VsbC5jbGFzc0xpc3QuYWRkKHNoaXAubmFtZSk7XG4gICAgICAgICAgICAgICAgc2hpcENlbGwuY2xhc3NMaXN0LmFkZCgndGFrZW4nKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh1c2VyID09PSAnY29tcHV0ZXItYm9hcmQnKSByZXR1cm4gdGhpcy5wbGFjZVNoaXAodXNlciwgc2hpcCwgbnVsbCwgbnVsbCwgbnVsbCwgYXR0ZW1wdHMgKyAxKTtcbiAgICAgICAgICAgIGlmICh1c2VyID09PSAncGxheWVyLWJvYXJkJykgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiAgICAgIFxuXG4gICAgaG92ZXJBcmVhKHN0YXJ0Um93LCBzdGFydENvbCwgc2hpcCwgaXNWZXJ0aWNhbElucHV0KSB7XG4gICAgICAgIC8vc2VsZWN0IGFsbCBwbGF5ZXIgY2VsbHNcbiAgICAgICAgY29uc3QgYWxsQm9hcmRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXItYm9hcmQgLmNlbGwnKTtcbiAgICAgICAgbGV0IGlzSG9yaXpvbnRhbCA9ICFpc1ZlcnRpY2FsSW5wdXQ7XG5cbiAgICAgICAgY29uc3QgeyBzaGlwQ2VsbHMsIHZhbGlkLCBub3RUYWtlbiB9ID0gdGhpcy5nZXRWYWxpZGl0eShhbGxCb2FyZENlbGxzLCBpc0hvcml6b250YWwsIHN0YXJ0Um93LCBzdGFydENvbCwgc2hpcCk7XG5cbiAgICAgICAgaWYgKHZhbGlkICYmIG5vdFRha2VuKSB7XG4gICAgICAgICAgICBzaGlwQ2VsbHMuZm9yRWFjaChzaGlwQ2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgc2hpcENlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNoaXBDZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyJyksIDUwMCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCIvLyBzcmMvbWFpbi5qc1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXIuanMnO1xuXG4vL2RlZmluZSBjb25zdCBhbmQgbGV0XG5nbG9iYWxUaGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoXCJIdW1hblwiKTtcbmdsb2JhbFRoaXMuY29tcHV0ZXIgPSBuZXcgUGxheWVyKFwiQ29tcHV0ZXJcIiwgdHJ1ZSk7XG5jb25zdCBpbmZvRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLW1lc3NhZ2UnKTtcbmNvbnN0IHR1cm5EaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1cm4tbWVzc2FnZScpO1xuXG5jb25zdCBzaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwcy1jb250YWluZXInKTtcblxubGV0IGlzUGxheWVyVHVybiA9IHRydWU7XG5nbG9iYWwuZ2FtZUFjdGl2ZSA9IGZhbHNlO1xubGV0IGNvbXB1dGVyVHVyblRpbWVyO1xubGV0IHBsYXllclR1cm5UaW1lcjtcbmdsb2JhbC5pc1ZlcnRpY2FsID0gZmFsc2U7XG5sZXQgbm90RHJvcHBlZCA9IHRydWU7XG5nbG9iYWwuZHJhZ2dlZFNoaXA7XG5sZXQgYWxyZWFkeUF0dGFja2VkO1xubGV0IHBsYXllclNoaXBzID0gc2hpcEZsZWV0KCk7XG5sZXQgcGxheWVyU2hpcHNQbGFjZWQgPSBbXTtcbmxldCBjb21wdXRlclNoaXBzID0gc2hpcEZsZWV0KCk7XG5sZXQgcGxheWVyQXR0YWNrcyA9IFtdO1xubGV0IGNvbXB1dGVyQXR0YWNrcyA9IFtdO1xubGV0IHBsYXllclN1bmtTaGlwcyA9IFtdO1xubGV0IGNvbXB1dGVyU3Vua1NoaXBzID0gW107XG5cbi8vZGVmaW5lIGFsbCBzaGlwcyBmb3IgcGxheWVyc1xuZnVuY3Rpb24gc2hpcEZsZWV0KCkge1xuICAgIHJldHVybltcbiAgICAgICAgbmV3IFNoaXAoJ2Rlc3Ryb3llcicsIDIpLFxuICAgICAgICBuZXcgU2hpcCgnc3VibWFyaW5lJywgMyksXG4gICAgICAgIG5ldyBTaGlwKCdjcnVpc2VyJywgMyksXG4gICAgICAgIG5ldyBTaGlwKCdiYXR0bGVzaGlwJywgNCksXG4gICAgICAgIG5ldyBTaGlwKCdjYXJyaWVyJywgNSlcbiAgICBdO1xufVxuXG4vL3Jlc2V0IGdhbWVcbmZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcbiAgICBjb25zb2xlLmxvZygncmVzZXRHYW1lJyk7XG4gICAgaXNQbGF5ZXJUdXJuID0gdHJ1ZTtcbiAgICBnbG9iYWwuZ2FtZUFjdGl2ZSA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dChjb21wdXRlclR1cm5UaW1lcik7XG4gICAgY2xlYXJUaW1lb3V0KHBsYXllclR1cm5UaW1lcik7XG4gICAgZ2xvYmFsLmlzVmVydGljYWwgPSBmYWxzZTtcbiAgICBub3REcm9wcGVkID0gdHJ1ZTtcbiAgICBnbG9iYWwuZHJhZ2dlZFNoaXAgPSB1bmRlZmluZWQ7XG4gICAgYWxyZWFkeUF0dGFja2VkO1xuICAgIHBsYXllclNoaXBzID0gc2hpcEZsZWV0KCk7XG4gICAgcGxheWVyU2hpcHNQbGFjZWQgPSBbXTtcbiAgICBjb21wdXRlclNoaXBzID0gc2hpcEZsZWV0KCk7XG4gICAgcGxheWVyQXR0YWNrcyA9IFtdO1xuICAgIGNvbXB1dGVyQXR0YWNrcyA9IFtdO1xuICAgIHBsYXllclN1bmtTaGlwcyA9IFtdO1xuICAgIGNvbXB1dGVyU3Vua1NoaXBzID0gW107XG5cbiAgICAvL3Jlc2V0IGFuZCByZWNyZWF0ZSBib2FyZHNcbiAgICBwbGF5ZXIuYm9hcmQucmVzZXRCb2FyZCgncGxheWVyLWJvYXJkJyk7XG4gICAgY29tcHV0ZXIuYm9hcmQucmVzZXRCb2FyZCgnY29tcHV0ZXItYm9hcmQnKTtcblxuICAgIC8vZmluZCBhbGwgY2VsbHNcbiAgICBjb25zdCBhbGxDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XG4gICAgYWxsQ2VsbHMuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnY2VsbCc7IC8vIHJlbW92ZSBvdGhlciBjbGFzc2VzXG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDZWxsQ2xpY2spOyAvL3JlbW92ZSBsaXN0ZW5lclxuICAgIH0pO1xuXG4gICAgaWYoc2hpcHNDb250YWluZXIpIHtcbiAgICAgICAgc2hpcHNDb250YWluZXIuc3R5bGUuZmxleFdyYXAgPSAnd3JhcCc7IC8vcmV0dXJuIHRvIHdyYXBcbiAgICAgICAgc2hpcHNDb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBpZD1cIjBcIiBjbGFzcz1cImRlc3Ryb3llci1zaXplIGRlc3Ryb3llciBob3Jpem9udGFsXCIgZGF0YS1zaXplPVwiMlwiIGRyYWdnYWJsZT1cInRydWVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCIxXCIgY2xhc3M9XCJzdWJtYXJpbmUtc2l6ZSBzdWJtYXJpbmUgaG9yaXpvbnRhbFwiIGRhdGEtc2l6ZT1cIjNcIiBkcmFnZ2FibGU9XCJ0cnVlXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiMlwiIGNsYXNzPVwiY3J1aXNlci1zaXplIGNydWlzZXIgaG9yaXpvbnRhbFwiIGRhdGEtc2l6ZT1cIjNcIiBkcmFnZ2FibGU9XCJ0cnVlXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiM1wiIGNsYXNzPVwiYmF0dGxlc2hpcC1zaXplIGJhdHRsZXNoaXAgaG9yaXpvbnRhbFwiIGRhdGEtc2l6ZT1cIjRcIiBkcmFnZ2FibGU9XCJ0cnVlXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiNFwiIGNsYXNzPVwiY2Fycmllci1zaXplIGNhcnJpZXIgaG9yaXpvbnRhbFwiIGRhdGEtc2l6ZT1cIjVcIiBkcmFnZ2FibGU9XCJ0cnVlXCI+PC9kaXY+XG4gICAgYDtcbiAgICAvL3JlY3JlYXRlIHNoaXAgb3B0aW9uc1xuICAgIGNvbnN0IG5ld1NoaXBPcHRpb25zID0gQXJyYXkuZnJvbShzaGlwc0NvbnRhaW5lci5jaGlsZHJlbik7XG5cbiAgICBuZXdTaGlwT3B0aW9ucy5mb3JFYWNoKHNoaXBPcHRpb24gPT4ge1xuICAgICAgICBzaGlwT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdTdGFydCk7IC8vZHJhZyBsaXN0ZW5lclxuICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZU1lc3NhZ2UoJ0dhbWUgcmVzZXQuIFBsYWNlIHlvdXIgc2hpcHMgYW5kIGNsaWNrIHN0YXJ0LicpO1xuICAgIHR1cm5NZXNzYWdlKCcnKTtcbiAgICBwbGFjZUNvbXB1dGVyU2hpcHNSYW5kb21seSgpO1xuICAgIGRyYWdPdmVyTkRyb3AoKTtcbn1cblxuLy9mbGlwLCBzdGFydCwgYW5kIHJlc2V0IGV2ZW50bGlzdGVuZXIgYWZ0ZXIgcGFnZSBsb2FkXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZmxpcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbGlwLWJ1dHRvbicpO1xuICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ1dHRvbicpO1xuICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0LWJ1dHRvbicpO1xuICAgIGlmIChyZXNldEJ1dHRvbikge1xuICAgICAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0R2FtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc2V0IGJ1dHRvbiBlbGVtZW50IG5vdCBmb3VuZCEnKTtcbiAgICB9XG4gICAgaWYgKGZsaXBCdXR0b24pIHtcbiAgICAgICAgZmxpcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZsaXApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGbGlwIGJ1dHRvbiBlbGVtZW50IG5vdCBmb3VuZCEnKTtcbiAgICB9XG4gICAgaWYgKHN0YXJ0QnV0dG9uKSB7XG4gICAgICAgIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIgKCdjbGljaycsIHN0YXJ0R2FtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1N0YXJ0IGJ1dHRvbiBlbGVtZW50IG5vdCBmb3VuZCEnKTtcbiAgICB9XG59KVxuXG5mdW5jdGlvbiBmbGlwKCkge1xuICAgIGNvbnN0IGN1cnJlbnRTaGlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwcy1jb250YWluZXInKTtcbiAgICAvL2ZsaXAgc2hpcHMgaG9yaXpvbnRhbCBhbmQgdmVydGljYWxcbiAgICBnbG9iYWwuaXNWZXJ0aWNhbCA9ICFnbG9iYWwuaXNWZXJ0aWNhbDtcblxuICAgIC8vYWRqdXN0IGNvbnRhaW5lciBmb3IgZmxpcFxuICAgIGlmKGN1cnJlbnRTaGlwc0NvbnRhaW5lcikge1xuICAgICAgICBjdXJyZW50U2hpcHNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgndmVydGljYWwnLCBnbG9iYWwuaXNWZXJ0aWNhbCk7XG4gICAgICAgIGN1cnJlbnRTaGlwc0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdob3Jpem9udGFsJywgIWdsb2JhbC5pc1ZlcnRpY2FsKTtcblxuICAgICAgICBjdXJyZW50U2hpcHNDb250YWluZXIuc3R5bGUuZmxleFdyYXAgPSBnbG9iYWwuaXNWZXJ0aWNhbCA/ICdub3dyYXAnIDogJ3dyYXAnO1xuICAgICAgICAvL3NlbGVjdCBzaGlwc1xuICAgICAgICBjb25zdCBzaGlwc0FyciA9IEFycmF5LmZyb20oY3VycmVudFNoaXBzQ29udGFpbmVyLmNoaWxkcmVuKVxuICAgICAgICBzaGlwc0Fyci5mb3JFYWNoKHNoaXBBcnIgPT4ge1xuICAgICAgICAgICAgaWYgKGdsb2JhbC5pc1ZlcnRpY2FsKSB7XG4gICAgICAgICAgICAgICAgc2hpcEFyci5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xuICAgICAgICAgICAgICAgIHNoaXBBcnIuY2xhc3NMaXN0LnJlbW92ZSgnaG9yaXpvbnRhbCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaGlwQXJyLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwnKTtcbiAgICAgICAgICAgICAgICBzaGlwQXJyLmNsYXNzTGlzdC5yZW1vdmUoJ3ZlcnRpY2FsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufTtcblxuZnVuY3Rpb24gZHJhZ1N0YXJ0KGUpIHtcbiAgICBnbG9iYWwuZHJhZ2dlZFNoaXAgPSBlLnRhcmdldDtcbn1cblxuZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvL3NlbGVjdCB3aXRoIGlkXG4gICAgY29uc3Qgc2hpcCA9IHBsYXllclNoaXBzW2dsb2JhbC5kcmFnZ2VkU2hpcC5pZF07XG4gICAgcGxheWVyLmJvYXJkLmhvdmVyQXJlYShOdW1iZXIoZS50YXJnZXQuZGF0YXNldC54KSwgTnVtYmVyKGUudGFyZ2V0LmRhdGFzZXQueSksIHNoaXAsIGdsb2JhbC5pc1ZlcnRpY2FsKTtcbn1cblxuZnVuY3Rpb24gZHJvcFNoaXAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIWdsb2JhbC5kcmFnZ2VkU2hpcCkgcmV0dXJuO1xuXG4gICAgY29uc3Qgc3RhcnRSb3cgPSBOdW1iZXIoZS50YXJnZXQuZGF0YXNldC54KTtcbiAgICBjb25zdCBzdGFydENvbCA9IE51bWJlcihlLnRhcmdldC5kYXRhc2V0LnkpO1xuICAgIGNvbnN0IHNoaXAgPSBwbGF5ZXJTaGlwc1tnbG9iYWwuZHJhZ2dlZFNoaXAuaWRdO1xuICAgIC8vcGxhY2Ugc2hpcCB3aGVuIGRyb3BwZWRcbiAgICBjb25zdCBzdWNjZXNzID0gZ2xvYmFsVGhpcy5wbGF5ZXIuYm9hcmQucGxhY2VTaGlwKCdwbGF5ZXItYm9hcmQnLCBzaGlwLCBzdGFydFJvdywgc3RhcnRDb2wsIGdsb2JhbC5pc1ZlcnRpY2FsKVxuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgIHBsYXllclNoaXBzUGxhY2VkLnB1c2goc2hpcCk7XG4gICAgICAgIGdsb2JhbC5kcmFnZ2VkU2hpcC5yZW1vdmUoKTtcbiAgICAgICAgbm90RHJvcHBlZCA9IGZhbHNlO1xuICAgICAgICAvL2FsbCBzaGlwcyBwbGFjZWQgYmVmb3JlIGdhbWVBY3RpdmVcbiAgICAgICAgaWYgKHBsYXllclNoaXBzUGxhY2VkLmxlbmd0aCA+PSA1KSB7XG4gICAgICAgICAgICBnbG9iYWwuZ2FtZUFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWdPdmVyTkRyb3AoKSB7XG4gICAgLy9zZWxlY3QgcGxheWVyIGNlbGxzXG4gICAgY29uc3QgYWxsUGxheWVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjcGxheWVyLWJvYXJkIC5jZWxsYCk7XG4gICAgYWxsUGxheWVyQ2VsbHMuZm9yRWFjaChwbGF5ZXJDZWxsID0+IHtcbiAgICAgICAgcGxheWVyQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdPdmVyKTtcbiAgICAgICAgcGxheWVyQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJvcFNoaXApO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICBpZiAoaXNQbGF5ZXJUdXJuID09PSB0cnVlKSB7XG4gICAgICAgIC8vbWFrZSBzdXJlIHNoaXBzIGFyZSBhbGwgcGxhY2VkXG4gICAgICAgIGlmIChzaGlwc0NvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgdXBkYXRlTWVzc2FnZSgnUGxlYXNlIHBsYWNlIGFsbCB5b3VyIHNoaXBzIGZpcnN0IGFuZCB0aGVuIGNsaWNrIHN0YXJ0LicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNQbGF5ZXJUdXJuID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vc2VsZWN0IGFsbCBjb21wdXRlciBjZWxsc1xuICAgICAgICAgICAgY29uc3QgYWxsQm9hcmRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb21wdXRlci1ib2FyZCAuY2VsbCcpO1xuICAgICAgICAgICAgYWxsQm9hcmRDZWxscy5mb3JFYWNoKGNlbGwgPT4gY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNlbGxDbGljaykpO1xuICAgICAgICAgICAgdHVybk1lc3NhZ2UoJ1lvdXIgdHVybi4nKTtcbiAgICAgICAgICAgIHVwZGF0ZU1lc3NhZ2UoJ0dhbWUgc3RhcnRlZC4gU2VsZWN0IGEgY2VsbCB0byBhdHRhY2sgb24gdGhlIGNvbXB1dGVyIGJvYXJkLicpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb21wdXRlclR1cm4oKSB7XG4gICAgLy9yZXF1aXJlcyBnYW1lQWN0aXZlXG4gICAgaWYgKGdsb2JhbC5nYW1lQWN0aXZlKSB7XG4gICAgICAgIHR1cm5NZXNzYWdlKCdDb21wdXRlciBUdXJuIScpO1xuICAgICAgICB1cGRhdGVNZXNzYWdlKCcgVGhlIGNvbXB1dGVyIGlzIHRoaW5raW5nLi4uJyk7XG4gICAgICAgIC8vcmVzZXQgY29tcHV0ZXJUdXJuVGltZXIgd2lsbCBiZSByZXNldCBhYm92ZVxuICAgICAgICBjb21wdXRlclR1cm5UaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qge3NoaXAsIGNlbGwsIHNoaXBOYW1lfSA9IGNvbXB1dGVyLmNvbXB1dGVyQXR0YWNrKHBsYXllclNoaXBzKVxuICAgICAgICAgICAgaWYgKHNoaXAgJiYgIXNoaXAuc3Vuaykge1xuICAgICAgICAgICAgICAgIHNoaXAuaGl0KCk7IC8vaW5jcmVtZW50IHNoaXAgaGl0c1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICAgICAgdXBkYXRlTWVzc2FnZSgnVGhlIGNvbXB1dGVyIGhpdCB5b3VyIHNoaXAhJyk7XG4gICAgICAgICAgICAgICAgY29tcHV0ZXJBdHRhY2tzLnB1c2goc2hpcE5hbWUpOy8vYWRkIHNoaXBOYW1lIHRvIGNvbXB1dGVyQXR0YWNrc1xuICAgICAgICAgICAgICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZU1lc3NhZ2UoYFRoZSBjb21wdXRlciBzdW5rIHlvdXIgJHtzaGlwLm5hbWV9IWApO1xuICAgICAgICAgICAgICAgICAgICBjb21wdXRlclN1bmtTaGlwcy5wdXNoKHNoaXAubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVyQXR0YWNrcyA9IGNvbXB1dGVyQXR0YWNrcy5maWx0ZXIoYXR0YWNrTmFtZSA9PiBhdHRhY2tOYW1lICE9PSBzaGlwTmFtZSk7IC8vIHJlbW92ZSBzdW5rU2hpcHMgZnJvbSBjb21wdXRlckF0dGFja3NcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZ2FtZUFjdGl2ZUNoZWNrKCdjb21wdXRlci1ib2FyZCcsIGNvbXB1dGVyU3Vua1NoaXBzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlTWVzc2FnZSgnTm90aGluZyBoaXQgdGhpcyB0aW1lLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyMDAwKVxuXG4gICAgICAgIC8vcmVzZXQgcGxheWVyVHVyblRpbWVyIHdpbGwgYmUgcmVzZXQgYWJvdmVcbiAgICAgICAgcGxheWVyVHVyblRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpc1BsYXllclR1cm4gPSB0cnVlO1xuICAgICAgICAgICAgdHVybk1lc3NhZ2UoJ1BsYXllciBHbyEnKTtcbiAgICAgICAgICAgIHVwZGF0ZU1lc3NhZ2UoJ1NlbGVjdCBhIGNlbGwgdG8gYXR0YWNrIG9uIHRoZSBjb21wdXRlciBib2FyZC4nKTtcbiAgICAgICAgICAgIC8vc2VsZWN0IGNvbXB1dGVyIGNlbGxzXG4gICAgICAgICAgICBjb25zdCBhbGxDb21wdXRlckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbXB1dGVyLWJvYXJkIC5jZWxsJyk7XG4gICAgICAgICAgICBhbGxDb21wdXRlckNlbGxzLmZvckVhY2goY2VsbCA9PiBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2VsbENsaWNrKSk7XG4gICAgICAgIH0sIDQwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciB3aXRoIGNvbXB1dGVyVHVybicpO1xuICAgICAgICBhbGVydCgnVGhlIGdhbWUgaXMgb3Zlci4gUmVzZXQgdGhlIGdhbWUgdG8gcGxheSBhZ2FpbicpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNlbGxDbGljayhlKSB7XG4gICAgaWYgKGdsb2JhbC5nYW1lQWN0aXZlICYmIGlzUGxheWVyVHVybikge1xuICAgICAgICBjb25zdCB7IHNoaXAsIHNoaXBOYW1lLCBhbHJlYWR5QXR0YWNrZWQgfSA9IHBsYXllci5wbGF5ZXJBdHRhY2soZSwgY29tcHV0ZXJTaGlwcyk7XG4gICAgICAgIGlmIChhbHJlYWR5QXR0YWNrZWQpIHtcbiAgICAgICAgICAgIHVwZGF0ZU1lc3NhZ2UoJ0NlbGwgYWxyZWFkeSBhdHRhY2tlZCwgcGxlYXNlIHRyeSBhZ2Fpbi4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hpcCAmJiAhc2hpcC5zdW5rKSB7XG4gICAgICAgICAgICBzaGlwLmhpdCgpOyAvL2luY3JlbWVudCBzaGlwIGhpdHNcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgdXBkYXRlTWVzc2FnZSgnQ29tcHV0ZXIgc2hpcCBoaXQhJyk7XG4gICAgICAgICAgICBwbGF5ZXJBdHRhY2tzLnB1c2goc2hpcE5hbWUpOyAvL2FkZCBzaGlwTmFtZSB0byBwbGF5ZXJBdHRhY2tzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlTWVzc2FnZShgWW91IHN1bmsgdGhlIGNvbXB1dGVyJ3MgJHtzaGlwLm5hbWV9IWApO1xuICAgICAgICAgICAgICAgIHBsYXllclN1bmtTaGlwcy5wdXNoKHNoaXAubmFtZSk7XG4gICAgICAgICAgICAgICAgcGxheWVyQXR0YWNrcyA9IHBsYXllckF0dGFja3MuZmlsdGVyKGF0dGFja05hbWUgPT4gYXR0YWNrTmFtZSAhPT0gc2hpcE5hbWUpOyAvL3JlbW92ZSBzdW5rU2hpcHMgZnJvbSBwbGF5ZXJBdHRhY2tzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnYW1lQWN0aXZlQ2hlY2soJ3BsYXllci1ib2FyZCcsIHBsYXllclN1bmtTaGlwcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cGRhdGVNZXNzYWdlKCdObyBzaGlwcyBoaXQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaXNQbGF5ZXJUdXJuID0gZmFsc2U7XG4gICAgICAgIC8vc2VsZWN0IGNvbXB1dGVyIGNlbGxzXG4gICAgICAgIGNvbnN0IGFsbEJvYXJkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29tcHV0ZXItYm9hcmQgLmNlbGwnKTtcbiAgICAgICAgYWxsQm9hcmRDZWxscy5mb3JFYWNoKGNlbGwgPT4gY2VsbC5yZXBsYWNlV2l0aChjZWxsLmNsb25lTm9kZSh0cnVlKSkpO1xuICAgICAgICBjb21wdXRlclR1cm5UaW1lciA9IHNldFRpbWVvdXQoY29tcHV0ZXJUdXJuLCAzMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydCgnVGhlIGdhbWUgaXMgb3Zlci4gUmVzZXQgdGhlIGdhbWUgdG8gcGxheSBhZ2FpbicpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnYW1lQWN0aXZlQ2hlY2sodXNlciwgdXNlclN1bmtTaGlwcykge1xuICAgIC8vY2hlY2sgYWZ0ZXIgaGl0c1xuICAgIGlmICh1c2VyID09PSAncGxheWVyLWJvYXJkJyl7XG4gICAgICAgIGlmICh1c2VyU3Vua1NoaXBzLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgdXBkYXRlTWVzc2FnZSgnWW91IHN1bmsgYWxsIHRoZSBjb21wdXRlciBzaGlwcy4gWU9VIFdPTiEnKTtcbiAgICAgICAgICAgIHR1cm5NZXNzYWdlKCcnKTtcbiAgICAgICAgICAgIGdsb2JhbC5nYW1lQWN0aXZlID0gZmFsc2U7XG4gICAgICAgfVxuICAgIH1cbiAgICBpZiAodXNlciA9PT0gJ2NvbXB1dGVyLWJvYXJkJykge1xuICAgICAgICBpZiAodXNlclN1bmtTaGlwcy5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgIHVwZGF0ZU1lc3NhZ2UoJyBUaGUgY29tcHV0ZXIgc3VuayBhbGwgeW91ciBzaGlwcy4gWW91IGxvc3QuJyk7XG4gICAgICAgICAgICB0dXJuTWVzc2FnZSgnJyk7XG4gICAgICAgICAgICBnbG9iYWwuZ2FtZUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwbGFjZUNvbXB1dGVyU2hpcHNSYW5kb21seSgpIHsgIFxuICAgIHBsYXllclNoaXBzLmZvckVhY2goc2hpcCA9PiBjb21wdXRlci5ib2FyZC5wbGFjZVNoaXAoJ2NvbXB1dGVyLWJvYXJkJywgc2hpcCkpO1xuICAgIHR1cm5NZXNzYWdlKCdDb21wdXRlciBzaGlwcyBhcmUgcGxhY2VkLicpXG59XG5cbmZ1bmN0aW9uIHJlbmRlckJvYXJkcygpIHtcbiAgICBwbGF5ZXIuYm9hcmQucmVuZGVyQm9hcmQoJ3BsYXllci1ib2FyZCcsIGZhbHNlKTtcbiAgICBjb21wdXRlci5ib2FyZC5yZW5kZXJCb2FyZCgnY29tcHV0ZXItYm9hcmQnLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTWVzc2FnZShtc2cpIHtcbiAgICBpZiAoaW5mb0Rpc3BsYXkpIHtcbiAgICAgICAgaW5mb0Rpc3BsYXkudGV4dENvbnRlbnQgPSBtc2c7XG4gICAgfVxufVxuZnVuY3Rpb24gdHVybk1lc3NhZ2UobXNnKSB7XG4gICAgaWYodHVybkRpc3BsYXkpIHtcbiAgICAgICAgdHVybkRpc3BsYXkudGV4dENvbnRlbnQgPSBtc2c7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbml0R2FtZSgpIHtcbiAgICByZW5kZXJCb2FyZHMoKTtcbiAgICBwbGFjZUNvbXB1dGVyU2hpcHNSYW5kb21seSgpO1xuXG4gICAgLy9zZWxlY3QgYW5kIGRyYWcgcGxheWVyIHNoaXBzXG4gICAgY29uc3Qgc2hpcE9wdGlvbnMgPSBBcnJheS5mcm9tKHNoaXBzQ29udGFpbmVyLmNoaWxkcmVuKTtcbiAgICBzaGlwT3B0aW9ucy5mb3JFYWNoKHNoaXBPcHRpb24gPT4ge1xuICAgICAgICBzaGlwT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdTdGFydClcbiAgICB9KTtcbiAgICBkcmFnT3Zlck5Ecm9wKCk7XG4gICAgdXBkYXRlTWVzc2FnZShcIlBsZWFzZSBwbGFjZSB5b3VyIHNoaXBzIGFuZCBjbGljayBTdGFydC5cIik7XG59XG5leHBvcnQge3NoaXBGbGVldCwgZHJhZ1N0YXJ0LCBkcm9wU2hpcCwgcmVzZXRHYW1lLCBmbGlwLCBpbml0R2FtZX0iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkLmpzJztcblxuLy8gc3JjL3BsYXllci5qc1xuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBpc0NvbXB1dGVyID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICAgICAgdGhpcy5pc0NvbXB1dGVyID0gaXNDb21wdXRlcjtcbiAgICAgICAgdGhpcy51c2VkQXR0YWNrcyA9IG5ldyBTZXQoKTtcbiAgICB9XG5cbiAgICBjb21wdXRlckF0dGFjayhwbGF5ZXJTaGlwcykge1xuICAgICAgICBsZXQgY2VsbDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgLy9zZWxlY3QgcmFuZG9tIGNlbGwgYXMgbG9uZyBhcyBub3QgaGl0IG9yIG1pc3MgY2xhc3Nlc1xuICAgICAgICAgICAgbGV0IHJhbmRvbUNvbXB1dGVyR28gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgICAgICAgY29uc3QgYWxsUGxheWVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjcGxheWVyLWJvYXJkIC5jZWxsJyk7XG4gICAgICAgICAgICBjZWxsID0gYWxsUGxheWVyQ2VsbHNbcmFuZG9tQ29tcHV0ZXJHb107XG4gICAgICAgIH0gd2hpbGUgKCBjZWxsLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykgfHwgY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKVxuICAgICAgICApIFxuICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rha2VuJykpIHtcbiAgICAgICAgICAgIGxldCBjbGFzc2VzID0gQXJyYXkuZnJvbShjZWxsLmNsYXNzTGlzdCk7XG4gICAgICAgICAgICAvLyBmaW5kIHNoaXAgbmFtZSBhZnRlciByZW1vdmluZyBvdGhlciBjbGFzc2VzXG4gICAgICAgICAgICBsZXQgc2hpcE5hbWUgPSBjbGFzc2VzLmZpbmQoYyA9PiBjICE9PSAnY2VsbCcgJiYgYyAhPT0gJ3Rha2VuJyAmJiBjICE9PSAnaGl0Jyk7XG4gICAgICAgICAgICAvLyBmaW5kIHNoaXAgaW5zdGFuY2UgZnJvbSB5b3VyIHBsYXllclNoaXBzIGFycmF5XG4gICAgICAgICAgICBsZXQgc2hpcCA9IHBsYXllclNoaXBzLmZpbmQocyA9PiBzLm5hbWUgPT09IHNoaXBOYW1lKTsgXG4gICAgICAgICAgICByZXR1cm4geyBzaGlwLCBjZWxsLCBzaGlwTmFtZX07ICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICAgICAgcmV0dXJuIHsgc2hpcDogbnVsbCwgY2VsbCB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxheWVyQXR0YWNrKGUsIGNvbXB1dGVyU2hpcHMpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaGl0JykgfHwgXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSkge1xuICAgICAgICAgICAgcmV0dXJuIHthbHJlYWR5QXR0YWNrZWQ6IHRydWV9O1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFrZW4nKSAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSkge1xuICAgICAgICAgICAgLy8gZmluZCBzaGlwIG5hbWUgZnJvbSBjbGFzcyBhcnJheVxuICAgICAgICAgICAgbGV0IHNoaXBOYW1lID0gQXJyYXkuZnJvbShlLnRhcmdldC5jbGFzc0xpc3QpLmZpbmQoc2hpcCA9PlxuICAgICAgICAgICAgICAgIFsnZGVzdHJveWVyJywgJ3N1Ym1hcmluZScsICdjcnVpc2VyJywgJ2JhdHRsZXNoaXAnLCAnY2FycmllciddLmluY2x1ZGVzKHNoaXApXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgLy8gZmluZCBzaGlwIGluc3RhbmNlIGZyb20geW91ciBjb21wdXRlclNoaXBzIGFycmF5XG4gICAgICAgICAgICBsZXQgc2hpcCA9IGNvbXB1dGVyU2hpcHMuZmluZChzID0+IHMubmFtZSA9PT0gc2hpcE5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHsgc2hpcCwgc2hpcE5hbWUsIGFscmVhZHlBdHRhY2tlZDogZmFsc2V9OyAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICByZXR1cm4geyBzaGlwOiBudWxsLCBhbHJlYWR5QXR0YWNrZWQ6IGZhbHNlIH07XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCIvLyBzcmMvc2hpcC5qc1xuY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgbGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmhpdHMgPSAwO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRIaXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oaXRzO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN1bmspIHtcbiAgICAgICAgICAgIHRoaXMuaGl0cysrO1xuICAgICAgICAgICAgdGhpcy5pc1N1bmsoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgaWYodGhpcy5oaXRzID49IHRoaXMubGVuZ3RoKXtcbiAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zdW5rO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IGluaXRHYW1lIH0gZnJvbSBcIi4vbWFpbi5qc1wiO1xuaW5pdEdhbWUoKTsiXSwibmFtZXMiOlsiR2FtZWJvYXJkIiwidXNlciIsIl9jbGFzc0NhbGxDaGVjayIsImJvYXJkIiwiY3JlYXRlQm9hcmQiLCJzaGlwcyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2FtZUJvYXJkQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwicmVuZGVyQm9hcmQiLCJlbGVtZW50SWQiLCJpc0VuZW15Qm9hcmQiLCJib2FyZEVsZW1lbnQiLCJpIiwiaiIsImNlbGwiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGF0YXNldCIsIngiLCJ5IiwiY2VsbElkIiwiYXBwZW5kQ2hpbGQiLCJyZXNldEJvYXJkIiwiZ2V0VmFsaWRpdHkiLCJhbGxCb2FyZENlbGxzIiwiaXNIb3Jpem9udGFsIiwic3RhcnRSb3ciLCJzdGFydENvbCIsInNoaXAiLCJsZW5ndGgiLCJ2YWxpZCIsIm5vdFRha2VuIiwic2hpcENlbGxzIiwiciIsImMiLCJpbmRleCIsInB1c2giLCJldmVyeSIsInNoaXBDZWxsIiwiY29udGFpbnMiLCJwbGFjZVNoaXAiLCJyb3ciLCJjb2wiLCJpc1ZlcnRpY2FsIiwiYXR0ZW1wdHMiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uY2F0IiwicmFuZG9tQm9vbGVhbiIsIk1hdGgiLCJyYW5kb20iLCJyYW5kb21Sb3dJbmRleCIsImZsb29yIiwicmFuZG9tQ29sSW5kZXgiLCJfdGhpcyRnZXRWYWxpZGl0eSIsImZvckVhY2giLCJuYW1lIiwiaG92ZXJBcmVhIiwiaXNWZXJ0aWNhbElucHV0IiwiX3RoaXMkZ2V0VmFsaWRpdHkyIiwic2V0VGltZW91dCIsInJlbW92ZSIsIlNoaXAiLCJQbGF5ZXIiLCJnbG9iYWxUaGlzIiwicGxheWVyIiwiY29tcHV0ZXIiLCJpbmZvRGlzcGxheSIsInR1cm5EaXNwbGF5Iiwic2hpcHNDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiaXNQbGF5ZXJUdXJuIiwiZ2xvYmFsIiwiZ2FtZUFjdGl2ZSIsImNvbXB1dGVyVHVyblRpbWVyIiwicGxheWVyVHVyblRpbWVyIiwibm90RHJvcHBlZCIsImRyYWdnZWRTaGlwIiwiYWxyZWFkeUF0dGFja2VkIiwicGxheWVyU2hpcHMiLCJzaGlwRmxlZXQiLCJwbGF5ZXJTaGlwc1BsYWNlZCIsImNvbXB1dGVyU2hpcHMiLCJwbGF5ZXJBdHRhY2tzIiwiY29tcHV0ZXJBdHRhY2tzIiwicGxheWVyU3Vua1NoaXBzIiwiY29tcHV0ZXJTdW5rU2hpcHMiLCJyZXNldEdhbWUiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJUaW1lb3V0IiwiYWxsQ2VsbHMiLCJjbGFzc05hbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2VsbENsaWNrIiwic3R5bGUiLCJmbGV4V3JhcCIsImlubmVySFRNTCIsIm5ld1NoaXBPcHRpb25zIiwiZnJvbSIsImNoaWxkcmVuIiwic2hpcE9wdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJkcmFnU3RhcnQiLCJ1cGRhdGVNZXNzYWdlIiwidHVybk1lc3NhZ2UiLCJwbGFjZUNvbXB1dGVyU2hpcHNSYW5kb21seSIsImRyYWdPdmVyTkRyb3AiLCJldmVudCIsImZsaXBCdXR0b24iLCJzdGFydEJ1dHRvbiIsInJlc2V0QnV0dG9uIiwiZmxpcCIsInN0YXJ0R2FtZSIsImN1cnJlbnRTaGlwc0NvbnRhaW5lciIsInRvZ2dsZSIsInNoaXBzQXJyIiwic2hpcEFyciIsImUiLCJ0YXJnZXQiLCJkcmFnT3ZlciIsInByZXZlbnREZWZhdWx0IiwiTnVtYmVyIiwiZHJvcFNoaXAiLCJzdWNjZXNzIiwiYWxsUGxheWVyQ2VsbHMiLCJwbGF5ZXJDZWxsIiwiY29tcHV0ZXJUdXJuIiwiX2NvbXB1dGVyJGNvbXB1dGVyQXR0IiwiY29tcHV0ZXJBdHRhY2siLCJzaGlwTmFtZSIsInN1bmsiLCJoaXQiLCJpc1N1bmsiLCJmaWx0ZXIiLCJhdHRhY2tOYW1lIiwiZ2FtZUFjdGl2ZUNoZWNrIiwiYWxsQ29tcHV0ZXJDZWxscyIsImFsZXJ0IiwiX3BsYXllciRwbGF5ZXJBdHRhY2siLCJwbGF5ZXJBdHRhY2siLCJyZXBsYWNlV2l0aCIsImNsb25lTm9kZSIsInVzZXJTdW5rU2hpcHMiLCJyZW5kZXJCb2FyZHMiLCJtc2ciLCJ0ZXh0Q29udGVudCIsImluaXRHYW1lIiwic2hpcE9wdGlvbnMiLCJpc0NvbXB1dGVyIiwidXNlZEF0dGFja3MiLCJTZXQiLCJyYW5kb21Db21wdXRlckdvIiwiY2xhc3NlcyIsImZpbmQiLCJzIiwiaW5jbHVkZXMiLCJoaXRzIiwiZ2V0SGl0cyJdLCJzb3VyY2VSb290IjoiIn0=