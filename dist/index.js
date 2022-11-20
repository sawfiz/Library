/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Architects+Daughter);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\nbody {\n  background: #94b49f;\n}\n\n.content-container {\n  background: #fcf8e8;\n  width: clamp(460px, 100%, 1000px);\n  margin: auto;\n  position: relative;\n  min-height: 100vh;\n}\n\nmain {\n  width: clamp(460px, 80%, 800px);\n  margin: auto;\n}\n\n/* Header */\nheader {\n  background: #fcf8e8;\n  padding: 0 0.5rem 0 0.5rem;\n  height: 8rem;\n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: sticky;\n  top: 0;\n}\n\n.logo {\n  width: 80px;\n  pointer-events: none;\n}\n\nh1 {\n  font-family: 'Architects Daughter';\n  font-weight: bold;\n}\n\n.addBookImg {\n  width: 60px;\n}\n\n/*  */\n/* Table styling */\ntable {\n  border-collapse: collapse;\n  margin: auto;\n}\n\n/* Table header */\nthead {\n  position: sticky;\n  top: 8rem;\n  background-color: #ecb390;\n  font-size: 1.4rem;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);\n}\nth {\n  padding: 0.5rem;\n}\nthead > tr > :nth-child(1) {\n  text-align: left;\n  padding-left: 0.5rem;\n}\nthead > tr > :nth-child(2) {\n  text-align: left;\n  padding-left: 0.5rem;\n}\nthead > tr > :nth-child(3) {\n  text-align: right;\n  padding-left: 0.5rem;\n}\nthead > tr > :nth-child(4) {\n  text-align: center;\n  padding-left: 0.5rem;\n}\n.sort-img {\n  width: 1.3rem;\n}\n\n/* Table body columns */\ntbody > tr > :nth-child(1) {\n  width: 40%;\n  text-align: left;\n  padding: 0.5rem;\n  font-weight: bold;\n}\ntbody > tr > :nth-child(2) {\n  width: 20%;\n  text-align: left;\n  padding: 0.5rem;\n}\ntbody > tr > :nth-child(3) {\n  width: 15%;\n  text-align: right;\n  padding-right: 0.2rem;\n}\ntbody > tr > :nth-child(4) {\n  width: 15%;\n  text-align: center;\n}\ntbody > tr > :nth-child(5) {\n  width: 10%;\n  text-align: center;\n}\n\n/* Images */\nimg {\n  width: 2rem;\n  cursor: pointer;\n}\nimg:active {\n  transform: translateY(5%);\n}\n\n/* Table rows */\ntr:nth-child(even) {\n  background-color: #cee5d0;\n}\ntbody > tr:hover {\n  background-color: honeydew;\n}\n\n/* Table cells */\ntd {\n  font-size: 1.2rem;\n  font-family: 'Architects Daughter';\n  padding: 0.2rem 0;\n  border-bottom: 2px dashed #ddd;\n}\n\n/* Form */\n#book-form {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 480px;\n  background: #9ab3a0;\n  padding: 1rem;\n}\n\n.book-form-header {\n  display: flex;\n  justify-content: space-between;\n  font-size: 1.7rem;\n  font-weight: bold;\n  margin: 1rem 0.5rem;\n}\n\n.book-form-close {\n  cursor: pointer;\n}\n\n.book-form-close:hover {\n  scale: 1.2;\n  color: darkred;\n}\n\nfieldset {\n  background: #fcf8ea;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  color: #111;\n}\n\n.entry-line {\n  display: flex;\n  margin: 0.5rem;\n}\n\nlabel {\n  flex: 2;\n  padding-right: 1rem;\n  font-family: 'Architects Daughter';\n  font-size: 1.5rem;\n}\n\ninput {\n  flex: 5;\n  font-size: 1rem;\n  padding-left: 0.5rem;\n  outline: none;\n}\n\ninput:valid {\n  background-color: #f3fff1;\n}\n\ninput:invalid {\n  background-color: #ee78786c;\n}\n\n.button-container {\n  display: flex;\n  justify-content: space-around;\n}\n\nbutton {\n  background: #94d4f6;\n  padding: 0.3rem 1rem;\n  margin: 1rem 0;\n  width: 100px;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\n  cursor: pointer;\n  font-weight: bold;\n}\n\nbutton:hover {\n  scale: 1.1;\n}\n\n/* Delete confirmation popup */\n#delete-alert {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 410px;\n  background-color: #ee7c78;\n  padding: 1rem 1rem 0 1rem;\n}\n\n.delete-alert-container {\n  background: #fbf8ea;\n  text-align: center;\n  padding: 1rem;\n}\n\n#book-title {\n  font-weight: bold;\n  overflow-wrap: break-word;\n}\n\n/* Bottom of the page */\n.care {\n  padding: 2rem;\n  font-weight: bolder;\n  text-align: center;\n}\n\nfooter {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  text-align: center;\n  font-size: 0.8rem;\n  height: 1rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Architects+Daughter');\n\n* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n\nbody {\n  background: #94b49f;\n}\n\n.content-container {\n  background: #fcf8e8;\n  width: clamp(460px, 100%, 1000px);\n  margin: auto;\n  position: relative;\n  min-height: 100vh;\n}\n\nmain {\n  width: clamp(460px, 80%, 800px);\n  margin: auto;\n}\n\n/* Header */\nheader {\n  background: #fcf8e8;\n  padding: 0 0.5rem 0 0.5rem;\n  height: 8rem;\n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: sticky;\n  top: 0;\n}\n\n.logo {\n  width: 80px;\n  pointer-events: none;\n}\n\nh1 {\n  font-family: 'Architects Daughter';\n  font-weight: bold;\n}\n\n.addBookImg {\n  width: 60px;\n}\n\n/*  */\n/* Table styling */\ntable {\n  border-collapse: collapse;\n  margin: auto;\n}\n\n/* Table header */\nthead {\n  position: sticky;\n  top: 8rem;\n  background-color: #ecb390;\n  font-size: 1.4rem;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);\n}\nth {\n  padding: 0.5rem;\n}\nthead > tr > :nth-child(1) {\n  text-align: left;\n  padding-left: 0.5rem;\n}\nthead > tr > :nth-child(2) {\n  text-align: left;\n  padding-left: 0.5rem;\n}\nthead > tr > :nth-child(3) {\n  text-align: right;\n  padding-left: 0.5rem;\n}\nthead > tr > :nth-child(4) {\n  text-align: center;\n  padding-left: 0.5rem;\n}\n.sort-img {\n  width: 1.3rem;\n}\n\n/* Table body columns */\ntbody > tr > :nth-child(1) {\n  width: 40%;\n  text-align: left;\n  padding: 0.5rem;\n  font-weight: bold;\n}\ntbody > tr > :nth-child(2) {\n  width: 20%;\n  text-align: left;\n  padding: 0.5rem;\n}\ntbody > tr > :nth-child(3) {\n  width: 15%;\n  text-align: right;\n  padding-right: 0.2rem;\n}\ntbody > tr > :nth-child(4) {\n  width: 15%;\n  text-align: center;\n}\ntbody > tr > :nth-child(5) {\n  width: 10%;\n  text-align: center;\n}\n\n/* Images */\nimg {\n  width: 2rem;\n  cursor: pointer;\n}\nimg:active {\n  transform: translateY(5%);\n}\n\n/* Table rows */\ntr:nth-child(even) {\n  background-color: #cee5d0;\n}\ntbody > tr:hover {\n  background-color: honeydew;\n}\n\n/* Table cells */\ntd {\n  font-size: 1.2rem;\n  font-family: 'Architects Daughter';\n  padding: 0.2rem 0;\n  border-bottom: 2px dashed #ddd;\n}\n\n/* Form */\n#book-form {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 480px;\n  background: #9ab3a0;\n  padding: 1rem;\n}\n\n.book-form-header {\n  display: flex;\n  justify-content: space-between;\n  font-size: 1.7rem;\n  font-weight: bold;\n  margin: 1rem 0.5rem;\n}\n\n.book-form-close {\n  cursor: pointer;\n}\n\n.book-form-close:hover {\n  scale: 1.2;\n  color: darkred;\n}\n\nfieldset {\n  background: #fcf8ea;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  color: #111;\n}\n\n.entry-line {\n  display: flex;\n  margin: 0.5rem;\n}\n\nlabel {\n  flex: 2;\n  padding-right: 1rem;\n  font-family: 'Architects Daughter';\n  font-size: 1.5rem;\n}\n\ninput {\n  flex: 5;\n  font-size: 1rem;\n  padding-left: 0.5rem;\n  outline: none;\n}\n\ninput:valid {\n  background-color: #f3fff1;\n}\n\ninput:invalid {\n  background-color: #ee78786c;\n}\n\n.button-container {\n  display: flex;\n  justify-content: space-around;\n}\n\nbutton {\n  background: #94d4f6;\n  padding: 0.3rem 1rem;\n  margin: 1rem 0;\n  width: 100px;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);\n  cursor: pointer;\n  font-weight: bold;\n}\n\nbutton:hover {\n  scale: 1.1;\n}\n\n/* Delete confirmation popup */\n#delete-alert {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 410px;\n  background-color: #ee7c78;\n  padding: 1rem 1rem 0 1rem;\n}\n\n.delete-alert-container {\n  background: #fbf8ea;\n  text-align: center;\n  padding: 1rem;\n}\n\n#book-title {\n  font-weight: bold;\n  overflow-wrap: break-word;\n}\n\n/* Bottom of the page */\n.care {\n  padding: 2rem;\n  font-weight: bolder;\n  text-align: center;\n}\n\nfooter {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  text-align: center;\n  font-size: 0.8rem;\n  height: 1rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



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
  } // For old IE

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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



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

/***/ }),

/***/ "./src/book.js":
/*!*********************!*\
  !*** ./src/book.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const bookFactory = (number, title, author, pages, isRead) => {
  return { number, title, author, pages, isRead };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bookFactory);


/***/ }),

/***/ "./src/clicks.js":
/*!***********************!*\
  !*** ./src/clicks.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/controller.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals */ "./src/modals.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "./src/view.js");




const clickHandler = (() => {
  // Button to add a book
  const addBookImgEl = document.querySelector('.addBookImg');
  addBookImgEl.addEventListener('click', () => {
    _modals__WEBPACK_IMPORTED_MODULE_1__["default"].openBookModal();
  });

  // Buttons to sort books
  const sortTitleEl = document.querySelector('#sort-title');
  const sortAuthorEl = document.querySelector('#sort-author');
  const sortPagesEl = document.querySelector('#sort-pages');
  const sortReadEl = document.querySelector('#sort-read');

  sortTitleEl.addEventListener('click', () => {
    _controller__WEBPACK_IMPORTED_MODULE_0__["default"].sortBooks('title');
    _view__WEBPACK_IMPORTED_MODULE_2__["default"].displayBookList();
  });

  sortAuthorEl.addEventListener('click', () => {
    _controller__WEBPACK_IMPORTED_MODULE_0__["default"].sortBooks('author');
    _view__WEBPACK_IMPORTED_MODULE_2__["default"].displayBookList();
  });

  sortPagesEl.addEventListener('click', () => {
    _controller__WEBPACK_IMPORTED_MODULE_0__["default"].sortBooks('pages');
    _view__WEBPACK_IMPORTED_MODULE_2__["default"].displayBookList();
  });

  sortReadEl.addEventListener('click', () => {
    _controller__WEBPACK_IMPORTED_MODULE_0__["default"].sortBooks('isRead');
    _view__WEBPACK_IMPORTED_MODULE_2__["default"].displayBookList();
  });
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clickHandler);


/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library */ "./src/library.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view.js");



const controller = (() => {
  // Table header sort buttons
  let sortTitleAscend = true;
  let sortAuthorAscend = true;
  let sortPagesAscend = true;
  let sortReadAscend = true;

  let number = 1;

  function addBook(book) {
    book.number = number;
    number++;

    _library__WEBPACK_IMPORTED_MODULE_0__["default"].push(book);
    _view__WEBPACK_IMPORTED_MODULE_1__["default"].displayBookList(_library__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }

  function toggleRead(book) {
    book.isRead = !book.isRead;
    _view__WEBPACK_IMPORTED_MODULE_1__["default"].displayBookList(_library__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }

  function updateBook(book) {
    _view__WEBPACK_IMPORTED_MODULE_1__["default"].displayBookList(_library__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }

  function deleteBook(book) {
    _library__WEBPACK_IMPORTED_MODULE_0__["default"].splice(_library__WEBPACK_IMPORTED_MODULE_0__["default"].indexOf(book), 1);
    _view__WEBPACK_IMPORTED_MODULE_1__["default"].displayBookList(_library__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }

  function sortByKey(array, key, sortAscend) {
    return array.sort((a, b) => {
      if (sortAscend) {
        return a[key] < b[key] ? -1 : 1;
      }
      return a[key] > b[key] ? -1 : 1;
    });
  }

  function sortBooks(key) {
    switch (key) {
      case 'title':
        sortByKey(_library__WEBPACK_IMPORTED_MODULE_0__["default"], key, sortTitleAscend);
        sortTitleAscend = !sortTitleAscend;
        break;
      case 'author':
        sortByKey(_library__WEBPACK_IMPORTED_MODULE_0__["default"], key, sortAuthorAscend);
        sortAuthorAscend = !sortAuthorAscend;
        break;
      case 'pages':
        sortByKey(_library__WEBPACK_IMPORTED_MODULE_0__["default"], key, sortPagesAscend);
        sortPagesAscend = !sortPagesAscend;
        break;
      case 'isRead':
        sortByKey(_library__WEBPACK_IMPORTED_MODULE_0__["default"], key, sortReadAscend);
        sortReadAscend = !sortReadAscend;
        break;

      default:
        break;
    }
    // view.displayBookList(library);
  }

  return { addBook, toggleRead, updateBook, deleteBook, sortBooks };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controller);


/***/ }),

/***/ "./src/library.js":
/*!************************!*\
  !*** ./src/library.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const library = [];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (library);


/***/ }),

/***/ "./src/modals.js":
/*!***********************!*\
  !*** ./src/modals.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book */ "./src/book.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/controller.js");


// import view from './view';

const modals = (() => {
  // Book details form elements
  const formEl = document.querySelector('#book-form');
  const titleEl = document.querySelector('#title');
  const authorEl = document.querySelector('#author');
  const pagesEl = document.querySelector('#pages');
  const readEl = document.querySelector('#read');
  const formCloselBtn = document.querySelector('.book-form-close');
  const formConfirmBtn = document.querySelector('#addBookBtn');

  function clearInputs() {
    titleEl.value = '';
    authorEl.value = '';
    pagesEl.value = null;
    readEl.checked = false;
  }

  function openBookModal(book) {
    clearInputs();
    formEl.showModal();

    // Fill in book deatils if editing an existing book
    if (book !== undefined) {
      titleEl.value = book.title;
      authorEl.value = book.author;
      pagesEl.value = book.pages;
      readEl.checked = book.isRead;
    }

    formConfirmBtn.addEventListener(
      'click',
      (e) => {
        e.preventDefault();
        if (book === undefined) { // Adding a new book
          if (
            titleEl.value.length >= 1 &&
            authorEl.value.length >= 1 &&
            pagesEl.value >= 1
          ) {
            const newBook = (0,_book__WEBPACK_IMPORTED_MODULE_0__["default"])(
              0, // Default book number
              titleEl.value,
              authorEl.value,
              pagesEl.value,
              readEl.checked
            );
            _controller__WEBPACK_IMPORTED_MODULE_1__["default"].addBook(newBook);
          }
        } else { // Editing an existing book
          book.title = titleEl.value;
          book.author = authorEl.value;
          book.pages = pagesEl.value;
          book.isRead = readEl.checked;
        }
        formEl.close();
        // * I do not really need to do this.
        // * I can just call view.displayBookList() here
        _controller__WEBPACK_IMPORTED_MODULE_1__["default"].updateBook();  
      },
      { once: true } // !Fire this event listener only once since it is in a function
    );
  }

  // Buttons for the book details form
  formCloselBtn.addEventListener('click', () => {
    formEl.close();
    clearInputs();
  });

  // Delete book alert elements
  const deleteAlertEl = document.querySelector('#delete-alert');
  const deleteBookTitleEl = document.querySelector('#book-title');
  const deleteCancelBtn = document.querySelector('#delete-cancel');
  const deleteConfirmBtn = document.querySelector('#delete-confirm');

  function openDeleteModal(book) {
    deleteAlertEl.showModal();
    deleteBookTitleEl.innerText = book.title;
    deleteConfirmBtn.addEventListener(
      'click',
      () => {
        deleteAlertEl.close();
        _controller__WEBPACK_IMPORTED_MODULE_1__["default"].deleteBook(book);
      },
      { once: true } // !Fire this event listener only once since it is in a function
    );
  }

  // Buttons for the book deletion alert
  deleteCancelBtn.addEventListener('click', () => {
    deleteAlertEl.close();
  });

  return { openBookModal, openDeleteModal };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);


/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library */ "./src/library.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/controller.js");
/* harmony import */ var _images_icons8_checked_checkbox_96_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/icons8-checked-checkbox-96.png */ "./src/images/icons8-checked-checkbox-96.png");
/* harmony import */ var _images_icons8_process_96_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/icons8-process-96.png */ "./src/images/icons8-process-96.png");
/* harmony import */ var _images_icons8_compose_96_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/icons8-compose-96.png */ "./src/images/icons8-compose-96.png");
/* harmony import */ var _images_remove_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/remove.png */ "./src/images/remove.png");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals */ "./src/modals.js");









const view = (() => {
  const tableBodyEl = document.querySelector('tbody');

  function displayBook(book) {
    const bookRow = document.createElement('tr');

    const bookTitle = document.createElement('td');
    bookTitle.innerText = book.title;
    bookRow.appendChild(bookTitle);

    const bookAuthor = document.createElement('td');
    bookAuthor.innerText = book.author;
    bookRow.appendChild(bookAuthor);

    const bookPages = document.createElement('td');
    bookPages.innerText = book.pages;
    bookRow.appendChild(bookPages);

    const bookRead = document.createElement('td');
    const bookReadImg = document.createElement('img');
    bookReadImg.classList.add('read-status');
    bookRead.appendChild(bookReadImg);
    bookReadImg.src = book.isRead ? _images_icons8_checked_checkbox_96_png__WEBPACK_IMPORTED_MODULE_2__ : _images_icons8_process_96_png__WEBPACK_IMPORTED_MODULE_3__;
    bookRow.appendChild(bookRead);

    // Toggle book read status and icon image when the icon is clicked on
    bookReadImg.addEventListener('click', () => {
      _controller__WEBPACK_IMPORTED_MODULE_1__["default"].toggleRead(book);
    });

    const bookEdit = document.createElement('td');

    const bookEditImg = document.createElement('img');
    bookEditImg.src = _images_icons8_compose_96_png__WEBPACK_IMPORTED_MODULE_4__;
    bookEdit.appendChild(bookEditImg);

    const bookRemoveImg = document.createElement('img');
    bookRemoveImg.src = _images_remove_png__WEBPACK_IMPORTED_MODULE_5__;
    bookEdit.appendChild(bookRemoveImg);

    bookRow.appendChild(bookEdit);

    bookEditImg.addEventListener('click', () => {
      _modals__WEBPACK_IMPORTED_MODULE_6__["default"].openBookModal(book);
    });

    bookRemoveImg.addEventListener('click', () => {
      _modals__WEBPACK_IMPORTED_MODULE_6__["default"].openDeleteModal(book);
    });

    tableBodyEl.appendChild(bookRow);
  }

  function displayBookList() {
    tableBodyEl.innerHTML = '';
    _library__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((book) => {
      displayBook(book);
    });
    console.log(_library__WEBPACK_IMPORTED_MODULE_0__["default"]);
  }

  return { displayBookList };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (view);


/***/ }),

/***/ "./src/images/icons8-checked-checkbox-96.png":
/*!***************************************************!*\
  !*** ./src/images/icons8-checked-checkbox-96.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d67e31457c13f5e0d3a5.png";

/***/ }),

/***/ "./src/images/icons8-compose-96.png":
/*!******************************************!*\
  !*** ./src/images/icons8-compose-96.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9141883d3e28157fc403.png";

/***/ }),

/***/ "./src/images/icons8-process-96.png":
/*!******************************************!*\
  !*** ./src/images/icons8-process-96.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "687279c9f3ffa800a2f3.png";

/***/ }),

/***/ "./src/images/remove.png":
/*!*******************************!*\
  !*** ./src/images/remove.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3fdbe949496d74a85016.png";

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book */ "./src/book.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ "./src/controller.js");
/* harmony import */ var _clicks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clicks */ "./src/clicks.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view */ "./src/view.js");






let book;

book = (0,_book__WEBPACK_IMPORTED_MODULE_1__["default"])(0, 'Lord of the Rings', 'J. R. R.Tolkin', 9250, true);
_controller__WEBPACK_IMPORTED_MODULE_2__["default"].addBook(book);

book = (0,_book__WEBPACK_IMPORTED_MODULE_1__["default"])(0, 'A Game of Thrones', 'George R. R. Martin', 694, false);
_controller__WEBPACK_IMPORTED_MODULE_2__["default"].addBook(book);

book = (0,_book__WEBPACK_IMPORTED_MODULE_1__["default"])(
  0,
  'Harry Potter and the Deathly Hallows',
  'J. K. Rowling',
  607,
  false
);
_controller__WEBPACK_IMPORTED_MODULE_2__["default"].addBook(book);

_view__WEBPACK_IMPORTED_MODULE_4__["default"].displayBookList();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxpREFBVztBQUNsQiwyREFBa0I7O0FBRWxCLE9BQU8saURBQVc7QUFDbEIsMkRBQWtCOztBQUVsQixPQUFPLGlEQUFXO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUFrQjs7QUFFbEIsNkRBQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL2Jvb2suanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9jbGlja3MuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvbGlicmFyeS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL21vZGFscy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QXJjaGl0ZWN0cytEYXVnaHRlcik7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogIzk0YjQ5ZjtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmY2Y4ZTg7XFxuICB3aWR0aDogY2xhbXAoNDYwcHgsIDEwMCUsIDEwMDBweCk7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxubWFpbiB7XFxuICB3aWR0aDogY2xhbXAoNDYwcHgsIDgwJSwgODAwcHgpO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogI2ZjZjhlODtcXG4gIHBhZGRpbmc6IDAgMC41cmVtIDAgMC41cmVtO1xcbiAgaGVpZ2h0OiA4cmVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4ubG9nbyB7XFxuICB3aWR0aDogODBweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogJ0FyY2hpdGVjdHMgRGF1Z2h0ZXInO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hZGRCb29rSW1nIHtcXG4gIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG4vKiAgKi9cXG4vKiBUYWJsZSBzdHlsaW5nICovXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLyogVGFibGUgaGVhZGVyICovXFxudGhlYWQge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogOHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2IzOTA7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxudGgge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG50aGVhZCA+IHRyID4gOm50aC1jaGlsZCgxKSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxufVxcbnRoZWFkID4gdHIgPiA6bnRoLWNoaWxkKDIpIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxudGhlYWQgPiB0ciA+IDpudGgtY2hpbGQoMykge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxudGhlYWQgPiB0ciA+IDpudGgtY2hpbGQoNCkge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxufVxcbi5zb3J0LWltZyB7XFxuICB3aWR0aDogMS4zcmVtO1xcbn1cXG5cXG4vKiBUYWJsZSBib2R5IGNvbHVtbnMgKi9cXG50Ym9keSA+IHRyID4gOm50aC1jaGlsZCgxKSB7XFxuICB3aWR0aDogNDAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG50Ym9keSA+IHRyID4gOm50aC1jaGlsZCgyKSB7XFxuICB3aWR0aDogMjAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxudGJvZHkgPiB0ciA+IDpudGgtY2hpbGQoMykge1xcbiAgd2lkdGg6IDE1JTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgcGFkZGluZy1yaWdodDogMC4ycmVtO1xcbn1cXG50Ym9keSA+IHRyID4gOm50aC1jaGlsZCg0KSB7XFxuICB3aWR0aDogMTUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG50Ym9keSA+IHRyID4gOm50aC1jaGlsZCg1KSB7XFxuICB3aWR0aDogMTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBJbWFnZXMgKi9cXG5pbWcge1xcbiAgd2lkdGg6IDJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmltZzphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUlKTtcXG59XFxuXFxuLyogVGFibGUgcm93cyAqL1xcbnRyOm50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VlNWQwO1xcbn1cXG50Ym9keSA+IHRyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhvbmV5ZGV3O1xcbn1cXG5cXG4vKiBUYWJsZSBjZWxscyAqL1xcbnRkIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdBcmNoaXRlY3RzIERhdWdodGVyJztcXG4gIHBhZGRpbmc6IDAuMnJlbSAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjZGRkO1xcbn1cXG5cXG4vKiBGb3JtICovXFxuI2Jvb2stZm9ybSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDQ4MHB4O1xcbiAgYmFja2dyb3VuZDogIzlhYjNhMDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5ib29rLWZvcm0taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcXG59XFxuXFxuLmJvb2stZm9ybS1jbG9zZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ib29rLWZvcm0tY2xvc2U6aG92ZXIge1xcbiAgc2NhbGU6IDEuMjtcXG4gIGNvbG9yOiBkYXJrcmVkO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBiYWNrZ3JvdW5kOiAjZmNmOGVhO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBjb2xvcjogIzExMTtcXG59XFxuXFxuLmVudHJ5LWxpbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMC41cmVtO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmbGV4OiAyO1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnQXJjaGl0ZWN0cyBEYXVnaHRlcic7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuaW5wdXQge1xcbiAgZmxleDogNTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXQ6dmFsaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZmZmMTtcXG59XFxuXFxuaW5wdXQ6aW52YWxpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU3ODc4NmM7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6ICM5NGQ0ZjY7XFxuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBzY2FsZTogMS4xO1xcbn1cXG5cXG4vKiBEZWxldGUgY29uZmlybWF0aW9uIHBvcHVwICovXFxuI2RlbGV0ZS1hbGVydCB7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDQxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlN2M3ODtcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAwIDFyZW07XFxufVxcblxcbi5kZWxldGUtYWxlcnQtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmYmY4ZWE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jYm9vay10aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi8qIEJvdHRvbSBvZiB0aGUgcGFnZSAqL1xcbi5jYXJlIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0FBQ2Q7O0FBRUEsV0FBVztBQUNYO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixNQUFNO0FBQ1I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQSxLQUFLO0FBQ0wsa0JBQWtCO0FBQ2xCO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBLFdBQVc7QUFDWDtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsZUFBZTtBQUNmO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsaUJBQWlCO0VBQ2pCLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsOEJBQThCO0FBQ2hDOztBQUVBLFNBQVM7QUFDVDtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QXJjaGl0ZWN0cytEYXVnaHRlcicpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogIzk0YjQ5ZjtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmY2Y4ZTg7XFxuICB3aWR0aDogY2xhbXAoNDYwcHgsIDEwMCUsIDEwMDBweCk7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxubWFpbiB7XFxuICB3aWR0aDogY2xhbXAoNDYwcHgsIDgwJSwgODAwcHgpO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogI2ZjZjhlODtcXG4gIHBhZGRpbmc6IDAgMC41cmVtIDAgMC41cmVtO1xcbiAgaGVpZ2h0OiA4cmVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4ubG9nbyB7XFxuICB3aWR0aDogODBweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogJ0FyY2hpdGVjdHMgRGF1Z2h0ZXInO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hZGRCb29rSW1nIHtcXG4gIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG4vKiAgKi9cXG4vKiBUYWJsZSBzdHlsaW5nICovXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLyogVGFibGUgaGVhZGVyICovXFxudGhlYWQge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogOHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2IzOTA7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxudGgge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG50aGVhZCA+IHRyID4gOm50aC1jaGlsZCgxKSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxufVxcbnRoZWFkID4gdHIgPiA6bnRoLWNoaWxkKDIpIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxudGhlYWQgPiB0ciA+IDpudGgtY2hpbGQoMykge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxudGhlYWQgPiB0ciA+IDpudGgtY2hpbGQoNCkge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxufVxcbi5zb3J0LWltZyB7XFxuICB3aWR0aDogMS4zcmVtO1xcbn1cXG5cXG4vKiBUYWJsZSBib2R5IGNvbHVtbnMgKi9cXG50Ym9keSA+IHRyID4gOm50aC1jaGlsZCgxKSB7XFxuICB3aWR0aDogNDAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG50Ym9keSA+IHRyID4gOm50aC1jaGlsZCgyKSB7XFxuICB3aWR0aDogMjAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxudGJvZHkgPiB0ciA+IDpudGgtY2hpbGQoMykge1xcbiAgd2lkdGg6IDE1JTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgcGFkZGluZy1yaWdodDogMC4ycmVtO1xcbn1cXG50Ym9keSA+IHRyID4gOm50aC1jaGlsZCg0KSB7XFxuICB3aWR0aDogMTUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG50Ym9keSA+IHRyID4gOm50aC1jaGlsZCg1KSB7XFxuICB3aWR0aDogMTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBJbWFnZXMgKi9cXG5pbWcge1xcbiAgd2lkdGg6IDJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmltZzphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUlKTtcXG59XFxuXFxuLyogVGFibGUgcm93cyAqL1xcbnRyOm50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VlNWQwO1xcbn1cXG50Ym9keSA+IHRyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhvbmV5ZGV3O1xcbn1cXG5cXG4vKiBUYWJsZSBjZWxscyAqL1xcbnRkIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdBcmNoaXRlY3RzIERhdWdodGVyJztcXG4gIHBhZGRpbmc6IDAuMnJlbSAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjZGRkO1xcbn1cXG5cXG4vKiBGb3JtICovXFxuI2Jvb2stZm9ybSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDQ4MHB4O1xcbiAgYmFja2dyb3VuZDogIzlhYjNhMDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5ib29rLWZvcm0taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcXG59XFxuXFxuLmJvb2stZm9ybS1jbG9zZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ib29rLWZvcm0tY2xvc2U6aG92ZXIge1xcbiAgc2NhbGU6IDEuMjtcXG4gIGNvbG9yOiBkYXJrcmVkO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBiYWNrZ3JvdW5kOiAjZmNmOGVhO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBjb2xvcjogIzExMTtcXG59XFxuXFxuLmVudHJ5LWxpbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMC41cmVtO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmbGV4OiAyO1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnQXJjaGl0ZWN0cyBEYXVnaHRlcic7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuaW5wdXQge1xcbiAgZmxleDogNTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXQ6dmFsaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZmZmMTtcXG59XFxuXFxuaW5wdXQ6aW52YWxpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU3ODc4NmM7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6ICM5NGQ0ZjY7XFxuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBzY2FsZTogMS4xO1xcbn1cXG5cXG4vKiBEZWxldGUgY29uZmlybWF0aW9uIHBvcHVwICovXFxuI2RlbGV0ZS1hbGVydCB7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDQxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlN2M3ODtcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAwIDFyZW07XFxufVxcblxcbi5kZWxldGUtYWxlcnQtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmYmY4ZWE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jYm9vay10aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi8qIEJvdHRvbSBvZiB0aGUgcGFnZSAqL1xcbi5jYXJlIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBib29rRmFjdG9yeSA9IChudW1iZXIsIHRpdGxlLCBhdXRob3IsIHBhZ2VzLCBpc1JlYWQpID0+IHtcbiAgcmV0dXJuIHsgbnVtYmVyLCB0aXRsZSwgYXV0aG9yLCBwYWdlcywgaXNSZWFkIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBib29rRmFjdG9yeTtcbiIsImltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgbW9kYWxzIGZyb20gJy4vbW9kYWxzJztcbmltcG9ydCB2aWV3IGZyb20gJy4vdmlldyc7XG5cbmNvbnN0IGNsaWNrSGFuZGxlciA9ICgoKSA9PiB7XG4gIC8vIEJ1dHRvbiB0byBhZGQgYSBib29rXG4gIGNvbnN0IGFkZEJvb2tJbWdFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRCb29rSW1nJyk7XG4gIGFkZEJvb2tJbWdFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtb2RhbHMub3BlbkJvb2tNb2RhbCgpO1xuICB9KTtcblxuICAvLyBCdXR0b25zIHRvIHNvcnQgYm9va3NcbiAgY29uc3Qgc29ydFRpdGxlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC10aXRsZScpO1xuICBjb25zdCBzb3J0QXV0aG9yRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC1hdXRob3InKTtcbiAgY29uc3Qgc29ydFBhZ2VzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC1wYWdlcycpO1xuICBjb25zdCBzb3J0UmVhZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvcnQtcmVhZCcpO1xuXG4gIHNvcnRUaXRsZUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnRyb2xsZXIuc29ydEJvb2tzKCd0aXRsZScpO1xuICAgIHZpZXcuZGlzcGxheUJvb2tMaXN0KCk7XG4gIH0pO1xuXG4gIHNvcnRBdXRob3JFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb250cm9sbGVyLnNvcnRCb29rcygnYXV0aG9yJyk7XG4gICAgdmlldy5kaXNwbGF5Qm9va0xpc3QoKTtcbiAgfSk7XG5cbiAgc29ydFBhZ2VzRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29udHJvbGxlci5zb3J0Qm9va3MoJ3BhZ2VzJyk7XG4gICAgdmlldy5kaXNwbGF5Qm9va0xpc3QoKTtcbiAgfSk7XG5cbiAgc29ydFJlYWRFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb250cm9sbGVyLnNvcnRCb29rcygnaXNSZWFkJyk7XG4gICAgdmlldy5kaXNwbGF5Qm9va0xpc3QoKTtcbiAgfSk7XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGlja0hhbmRsZXI7XG4iLCJpbXBvcnQgbGlicmFyeSBmcm9tICcuL2xpYnJhcnknO1xuaW1wb3J0IHZpZXcgZnJvbSAnLi92aWV3JztcblxuY29uc3QgY29udHJvbGxlciA9ICgoKSA9PiB7XG4gIC8vIFRhYmxlIGhlYWRlciBzb3J0IGJ1dHRvbnNcbiAgbGV0IHNvcnRUaXRsZUFzY2VuZCA9IHRydWU7XG4gIGxldCBzb3J0QXV0aG9yQXNjZW5kID0gdHJ1ZTtcbiAgbGV0IHNvcnRQYWdlc0FzY2VuZCA9IHRydWU7XG4gIGxldCBzb3J0UmVhZEFzY2VuZCA9IHRydWU7XG5cbiAgbGV0IG51bWJlciA9IDE7XG5cbiAgZnVuY3Rpb24gYWRkQm9vayhib29rKSB7XG4gICAgYm9vay5udW1iZXIgPSBudW1iZXI7XG4gICAgbnVtYmVyKys7XG5cbiAgICBsaWJyYXJ5LnB1c2goYm9vayk7XG4gICAgdmlldy5kaXNwbGF5Qm9va0xpc3QobGlicmFyeSk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVSZWFkKGJvb2spIHtcbiAgICBib29rLmlzUmVhZCA9ICFib29rLmlzUmVhZDtcbiAgICB2aWV3LmRpc3BsYXlCb29rTGlzdChsaWJyYXJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUJvb2soYm9vaykge1xuICAgIHZpZXcuZGlzcGxheUJvb2tMaXN0KGxpYnJhcnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlQm9vayhib29rKSB7XG4gICAgbGlicmFyeS5zcGxpY2UobGlicmFyeS5pbmRleE9mKGJvb2spLCAxKTtcbiAgICB2aWV3LmRpc3BsYXlCb29rTGlzdChsaWJyYXJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNvcnRCeUtleShhcnJheSwga2V5LCBzb3J0QXNjZW5kKSB7XG4gICAgcmV0dXJuIGFycmF5LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChzb3J0QXNjZW5kKSB7XG4gICAgICAgIHJldHVybiBhW2tleV0gPCBiW2tleV0gPyAtMSA6IDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gYVtrZXldID4gYltrZXldID8gLTEgOiAxO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc29ydEJvb2tzKGtleSkge1xuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlICd0aXRsZSc6XG4gICAgICAgIHNvcnRCeUtleShsaWJyYXJ5LCBrZXksIHNvcnRUaXRsZUFzY2VuZCk7XG4gICAgICAgIHNvcnRUaXRsZUFzY2VuZCA9ICFzb3J0VGl0bGVBc2NlbmQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYXV0aG9yJzpcbiAgICAgICAgc29ydEJ5S2V5KGxpYnJhcnksIGtleSwgc29ydEF1dGhvckFzY2VuZCk7XG4gICAgICAgIHNvcnRBdXRob3JBc2NlbmQgPSAhc29ydEF1dGhvckFzY2VuZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwYWdlcyc6XG4gICAgICAgIHNvcnRCeUtleShsaWJyYXJ5LCBrZXksIHNvcnRQYWdlc0FzY2VuZCk7XG4gICAgICAgIHNvcnRQYWdlc0FzY2VuZCA9ICFzb3J0UGFnZXNBc2NlbmQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaXNSZWFkJzpcbiAgICAgICAgc29ydEJ5S2V5KGxpYnJhcnksIGtleSwgc29ydFJlYWRBc2NlbmQpO1xuICAgICAgICBzb3J0UmVhZEFzY2VuZCA9ICFzb3J0UmVhZEFzY2VuZDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyB2aWV3LmRpc3BsYXlCb29rTGlzdChsaWJyYXJ5KTtcbiAgfVxuXG4gIHJldHVybiB7IGFkZEJvb2ssIHRvZ2dsZVJlYWQsIHVwZGF0ZUJvb2ssIGRlbGV0ZUJvb2ssIHNvcnRCb29rcyB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbGxlcjtcbiIsImNvbnN0IGxpYnJhcnkgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgbGlicmFyeTtcbiIsImltcG9ydCBib29rRmFjdG9yeSBmcm9tICcuL2Jvb2snO1xuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcbi8vIGltcG9ydCB2aWV3IGZyb20gJy4vdmlldyc7XG5cbmNvbnN0IG1vZGFscyA9ICgoKSA9PiB7XG4gIC8vIEJvb2sgZGV0YWlscyBmb3JtIGVsZW1lbnRzXG4gIGNvbnN0IGZvcm1FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib29rLWZvcm0nKTtcbiAgY29uc3QgdGl0bGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICBjb25zdCBhdXRob3JFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdXRob3InKTtcbiAgY29uc3QgcGFnZXNFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYWdlcycpO1xuICBjb25zdCByZWFkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVhZCcpO1xuICBjb25zdCBmb3JtQ2xvc2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2stZm9ybS1jbG9zZScpO1xuICBjb25zdCBmb3JtQ29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRCb29rQnRuJyk7XG5cbiAgZnVuY3Rpb24gY2xlYXJJbnB1dHMoKSB7XG4gICAgdGl0bGVFbC52YWx1ZSA9ICcnO1xuICAgIGF1dGhvckVsLnZhbHVlID0gJyc7XG4gICAgcGFnZXNFbC52YWx1ZSA9IG51bGw7XG4gICAgcmVhZEVsLmNoZWNrZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9wZW5Cb29rTW9kYWwoYm9vaykge1xuICAgIGNsZWFySW5wdXRzKCk7XG4gICAgZm9ybUVsLnNob3dNb2RhbCgpO1xuXG4gICAgLy8gRmlsbCBpbiBib29rIGRlYXRpbHMgaWYgZWRpdGluZyBhbiBleGlzdGluZyBib29rXG4gICAgaWYgKGJvb2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGl0bGVFbC52YWx1ZSA9IGJvb2sudGl0bGU7XG4gICAgICBhdXRob3JFbC52YWx1ZSA9IGJvb2suYXV0aG9yO1xuICAgICAgcGFnZXNFbC52YWx1ZSA9IGJvb2sucGFnZXM7XG4gICAgICByZWFkRWwuY2hlY2tlZCA9IGJvb2suaXNSZWFkO1xuICAgIH1cblxuICAgIGZvcm1Db25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAnY2xpY2snLFxuICAgICAgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoYm9vayA9PT0gdW5kZWZpbmVkKSB7IC8vIEFkZGluZyBhIG5ldyBib29rXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGl0bGVFbC52YWx1ZS5sZW5ndGggPj0gMSAmJlxuICAgICAgICAgICAgYXV0aG9yRWwudmFsdWUubGVuZ3RoID49IDEgJiZcbiAgICAgICAgICAgIHBhZ2VzRWwudmFsdWUgPj0gMVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY29uc3QgbmV3Qm9vayA9IGJvb2tGYWN0b3J5KFxuICAgICAgICAgICAgICAwLCAvLyBEZWZhdWx0IGJvb2sgbnVtYmVyXG4gICAgICAgICAgICAgIHRpdGxlRWwudmFsdWUsXG4gICAgICAgICAgICAgIGF1dGhvckVsLnZhbHVlLFxuICAgICAgICAgICAgICBwYWdlc0VsLnZhbHVlLFxuICAgICAgICAgICAgICByZWFkRWwuY2hlY2tlZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuYWRkQm9vayhuZXdCb29rKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7IC8vIEVkaXRpbmcgYW4gZXhpc3RpbmcgYm9va1xuICAgICAgICAgIGJvb2sudGl0bGUgPSB0aXRsZUVsLnZhbHVlO1xuICAgICAgICAgIGJvb2suYXV0aG9yID0gYXV0aG9yRWwudmFsdWU7XG4gICAgICAgICAgYm9vay5wYWdlcyA9IHBhZ2VzRWwudmFsdWU7XG4gICAgICAgICAgYm9vay5pc1JlYWQgPSByZWFkRWwuY2hlY2tlZDtcbiAgICAgICAgfVxuICAgICAgICBmb3JtRWwuY2xvc2UoKTtcbiAgICAgICAgLy8gKiBJIGRvIG5vdCByZWFsbHkgbmVlZCB0byBkbyB0aGlzLlxuICAgICAgICAvLyAqIEkgY2FuIGp1c3QgY2FsbCB2aWV3LmRpc3BsYXlCb29rTGlzdCgpIGhlcmVcbiAgICAgICAgY29udHJvbGxlci51cGRhdGVCb29rKCk7ICBcbiAgICAgIH0sXG4gICAgICB7IG9uY2U6IHRydWUgfSAvLyAhRmlyZSB0aGlzIGV2ZW50IGxpc3RlbmVyIG9ubHkgb25jZSBzaW5jZSBpdCBpcyBpbiBhIGZ1bmN0aW9uXG4gICAgKTtcbiAgfVxuXG4gIC8vIEJ1dHRvbnMgZm9yIHRoZSBib29rIGRldGFpbHMgZm9ybVxuICBmb3JtQ2xvc2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZvcm1FbC5jbG9zZSgpO1xuICAgIGNsZWFySW5wdXRzKCk7XG4gIH0pO1xuXG4gIC8vIERlbGV0ZSBib29rIGFsZXJ0IGVsZW1lbnRzXG4gIGNvbnN0IGRlbGV0ZUFsZXJ0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVsZXRlLWFsZXJ0Jyk7XG4gIGNvbnN0IGRlbGV0ZUJvb2tUaXRsZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2stdGl0bGUnKTtcbiAgY29uc3QgZGVsZXRlQ2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlbGV0ZS1jYW5jZWwnKTtcbiAgY29uc3QgZGVsZXRlQ29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWxldGUtY29uZmlybScpO1xuXG4gIGZ1bmN0aW9uIG9wZW5EZWxldGVNb2RhbChib29rKSB7XG4gICAgZGVsZXRlQWxlcnRFbC5zaG93TW9kYWwoKTtcbiAgICBkZWxldGVCb29rVGl0bGVFbC5pbm5lclRleHQgPSBib29rLnRpdGxlO1xuICAgIGRlbGV0ZUNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZUFsZXJ0RWwuY2xvc2UoKTtcbiAgICAgICAgY29udHJvbGxlci5kZWxldGVCb29rKGJvb2spO1xuICAgICAgfSxcbiAgICAgIHsgb25jZTogdHJ1ZSB9IC8vICFGaXJlIHRoaXMgZXZlbnQgbGlzdGVuZXIgb25seSBvbmNlIHNpbmNlIGl0IGlzIGluIGEgZnVuY3Rpb25cbiAgICApO1xuICB9XG5cbiAgLy8gQnV0dG9ucyBmb3IgdGhlIGJvb2sgZGVsZXRpb24gYWxlcnRcbiAgZGVsZXRlQ2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRlbGV0ZUFsZXJ0RWwuY2xvc2UoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHsgb3BlbkJvb2tNb2RhbCwgb3BlbkRlbGV0ZU1vZGFsIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBtb2RhbHM7XG4iLCJpbXBvcnQgbGlicmFyeSBmcm9tICcuL2xpYnJhcnknO1xuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcblxuaW1wb3J0IHJlYWRJY29uIGZyb20gJy4vaW1hZ2VzL2ljb25zOC1jaGVja2VkLWNoZWNrYm94LTk2LnBuZyc7XG5pbXBvcnQgcmVhZGluZ0ljb24gZnJvbSAnLi9pbWFnZXMvaWNvbnM4LXByb2Nlc3MtOTYucG5nJztcbmltcG9ydCBlZGl0SWNvbiBmcm9tICcuL2ltYWdlcy9pY29uczgtY29tcG9zZS05Ni5wbmcnO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnLi9pbWFnZXMvcmVtb3ZlLnBuZyc7XG5pbXBvcnQgbW9kYWxzIGZyb20gJy4vbW9kYWxzJztcblxuY29uc3QgdmlldyA9ICgoKSA9PiB7XG4gIGNvbnN0IHRhYmxlQm9keUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGJvZHknKTtcblxuICBmdW5jdGlvbiBkaXNwbGF5Qm9vayhib29rKSB7XG4gICAgY29uc3QgYm9va1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG5cbiAgICBjb25zdCBib29rVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGJvb2tUaXRsZS5pbm5lclRleHQgPSBib29rLnRpdGxlO1xuICAgIGJvb2tSb3cuYXBwZW5kQ2hpbGQoYm9va1RpdGxlKTtcblxuICAgIGNvbnN0IGJvb2tBdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGJvb2tBdXRob3IuaW5uZXJUZXh0ID0gYm9vay5hdXRob3I7XG4gICAgYm9va1Jvdy5hcHBlbmRDaGlsZChib29rQXV0aG9yKTtcblxuICAgIGNvbnN0IGJvb2tQYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgYm9va1BhZ2VzLmlubmVyVGV4dCA9IGJvb2sucGFnZXM7XG4gICAgYm9va1Jvdy5hcHBlbmRDaGlsZChib29rUGFnZXMpO1xuXG4gICAgY29uc3QgYm9va1JlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IGJvb2tSZWFkSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYm9va1JlYWRJbWcuY2xhc3NMaXN0LmFkZCgncmVhZC1zdGF0dXMnKTtcbiAgICBib29rUmVhZC5hcHBlbmRDaGlsZChib29rUmVhZEltZyk7XG4gICAgYm9va1JlYWRJbWcuc3JjID0gYm9vay5pc1JlYWQgPyByZWFkSWNvbiA6IHJlYWRpbmdJY29uO1xuICAgIGJvb2tSb3cuYXBwZW5kQ2hpbGQoYm9va1JlYWQpO1xuXG4gICAgLy8gVG9nZ2xlIGJvb2sgcmVhZCBzdGF0dXMgYW5kIGljb24gaW1hZ2Ugd2hlbiB0aGUgaWNvbiBpcyBjbGlja2VkIG9uXG4gICAgYm9va1JlYWRJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb250cm9sbGVyLnRvZ2dsZVJlYWQoYm9vayk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBib29rRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cbiAgICBjb25zdCBib29rRWRpdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGJvb2tFZGl0SW1nLnNyYyA9IGVkaXRJY29uO1xuICAgIGJvb2tFZGl0LmFwcGVuZENoaWxkKGJvb2tFZGl0SW1nKTtcblxuICAgIGNvbnN0IGJvb2tSZW1vdmVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBib29rUmVtb3ZlSW1nLnNyYyA9IGRlbGV0ZUljb247XG4gICAgYm9va0VkaXQuYXBwZW5kQ2hpbGQoYm9va1JlbW92ZUltZyk7XG5cbiAgICBib29rUm93LmFwcGVuZENoaWxkKGJvb2tFZGl0KTtcblxuICAgIGJvb2tFZGl0SW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbW9kYWxzLm9wZW5Cb29rTW9kYWwoYm9vayk7XG4gICAgfSk7XG5cbiAgICBib29rUmVtb3ZlSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbW9kYWxzLm9wZW5EZWxldGVNb2RhbChib29rKTtcbiAgICB9KTtcblxuICAgIHRhYmxlQm9keUVsLmFwcGVuZENoaWxkKGJvb2tSb3cpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzcGxheUJvb2tMaXN0KCkge1xuICAgIHRhYmxlQm9keUVsLmlubmVySFRNTCA9ICcnO1xuICAgIGxpYnJhcnkuZm9yRWFjaCgoYm9vaykgPT4ge1xuICAgICAgZGlzcGxheUJvb2soYm9vayk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cobGlicmFyeSk7XG4gIH1cblxuICByZXR1cm4geyBkaXNwbGF5Qm9va0xpc3QgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHZpZXc7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgYm9va0ZhY3RvcnkgZnJvbSAnLi9ib29rJztcbmltcG9ydCBjb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XG5pbXBvcnQgY2xpY2tIYW5kbGVyIGZyb20gJy4vY2xpY2tzJztcbmltcG9ydCB2aWV3IGZyb20gJy4vdmlldyc7XG5cbmxldCBib29rO1xuXG5ib29rID0gYm9va0ZhY3RvcnkoMCwgJ0xvcmQgb2YgdGhlIFJpbmdzJywgJ0ouIFIuIFIuVG9sa2luJywgOTI1MCwgdHJ1ZSk7XG5jb250cm9sbGVyLmFkZEJvb2soYm9vayk7XG5cbmJvb2sgPSBib29rRmFjdG9yeSgwLCAnQSBHYW1lIG9mIFRocm9uZXMnLCAnR2VvcmdlIFIuIFIuIE1hcnRpbicsIDY5NCwgZmFsc2UpO1xuY29udHJvbGxlci5hZGRCb29rKGJvb2spO1xuXG5ib29rID0gYm9va0ZhY3RvcnkoXG4gIDAsXG4gICdIYXJyeSBQb3R0ZXIgYW5kIHRoZSBEZWF0aGx5IEhhbGxvd3MnLFxuICAnSi4gSy4gUm93bGluZycsXG4gIDYwNyxcbiAgZmFsc2Vcbik7XG5jb250cm9sbGVyLmFkZEJvb2soYm9vayk7XG5cbnZpZXcuZGlzcGxheUJvb2tMaXN0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=