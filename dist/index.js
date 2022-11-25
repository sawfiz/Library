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

/***/ "./src/Book.js":
/*!*********************!*\
  !*** ./src/Book.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Book = (title, author, pages, read) => ({
  title,
  author,
  pages,
  // Using a getter get without a setter set makes it so that you can read that property
  // of the object, but you cannot change it's value.
  // The only way to change the value of read in this case is to use the toggleRead function.
  get read() {
    return read;
  },
  // I added this setter because I want user to be able to change it's value
  set read(value) {
    read = value;
  },
  // If I do not have the getter/setter, toggleRead() does not work
  // It toggles the value of read in the function,
  // but does not toggle the value of read in the object
  toggleRead() {
    read = !read;
  },
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Book);

// TODO: Consider using Object.freeze


/***/ }),

/***/ "./src/BookDisplay.js":
/*!****************************!*\
  !*** ./src/BookDisplay.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/createElement.js");
/* harmony import */ var _images_icons8_checked_checkbox_96_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/icons8-checked-checkbox-96.png */ "./src/images/icons8-checked-checkbox-96.png");
/* harmony import */ var _images_icons8_process_96_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/icons8-process-96.png */ "./src/images/icons8-process-96.png");
/* harmony import */ var _images_icons8_compose_96_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/icons8-compose-96.png */ "./src/images/icons8-compose-96.png");
/* harmony import */ var _images_remove_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/remove.png */ "./src/images/remove.png");






const BookDisplay = (() => {
  const displayEl = document.querySelector('tbody');

  function displayBook(book, index) {
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
    const bookReadImg = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('img', ['read-status'], {
      'data-key': index,
    });
    bookRead.appendChild(bookReadImg);
    bookReadImg.src = book.read ? _images_icons8_checked_checkbox_96_png__WEBPACK_IMPORTED_MODULE_1__ : _images_icons8_process_96_png__WEBPACK_IMPORTED_MODULE_2__;
    bookRow.appendChild(bookRead);

    const bookEdit = document.createElement('td');
    const bookEditImg = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('img', ['edit-btn'], {
      'data-key': index,
    });
    bookEditImg.src = _images_icons8_compose_96_png__WEBPACK_IMPORTED_MODULE_3__;
    bookEdit.appendChild(bookEditImg);

    const bookRemoveImg = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('img', ['del-btn'], {
      'data-key': index,
    });
    bookRemoveImg.src = _images_remove_png__WEBPACK_IMPORTED_MODULE_4__;
    bookEdit.appendChild(bookRemoveImg);

    bookRow.appendChild(bookEdit);

    displayEl.appendChild(bookRow);
  }
  
  function render(books) {
    displayEl.innerText = '';
    books.forEach((book) => {
      displayBook(book, books.indexOf(book));
    });
  }

  return {
    render,
    get displayEl() {
      return displayEl;
    },
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookDisplay);


/***/ }),

/***/ "./src/Library.js":
/*!************************!*\
  !*** ./src/Library.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Book */ "./src/Book.js");
/* eslint-disable no-use-before-define */


// Library is an object that includes the library array and the associated methods
const Library = (() => {
  const library = [];

  function saveToLocalStorage() {
    localStorage.setItem('myLibrary', JSON.stringify(library));
  }

  function getFromLocalStorage() {
    const jsonArray = JSON.parse(localStorage.getItem('myLibrary'));
    if (!jsonArray || jsonArray.length === 0) {
      // If array is empty, populate it with a few books
      addBook('Lord of the Rings', 'J. R. R.Tolkin', 9250, true);
      addBook('A Game of Thrones', 'George R. R. Martin', 694, false);
      addBook('Harry Potter', 'J. K. Rowling', 607, false);
    }

    // Convert jasonArray into a list of Book objects
    // because Book objects have methods in addition to properties
    // Then push each Book object into the const library
    library.push(
      ...jsonArray.map((jsonBook) =>
        (0,_Book__WEBPACK_IMPORTED_MODULE_0__["default"])(jsonBook.title, jsonBook.author, jsonBook.pages, jsonBook.read)
      )
    );
  }

  function addBook(title, author, pages, read) {
    const newBook = (0,_Book__WEBPACK_IMPORTED_MODULE_0__["default"])(title, author, pages, read);
    library.push(newBook);
    saveToLocalStorage();
  }

  function updateBook(index, title, author, pages, read) {
    const book = library[index];
    book.title = title;
    book.author = author;
    book.pages = pages;
    book.read = read;
    saveToLocalStorage();
  }

  function toggleBook(index) {
    library[index].toggleRead();
    saveToLocalStorage();
  }

  function delBook(index) {
    library.splice(index, 1);
    saveToLocalStorage();
  }

  // Sorting functions
  let sortTitleAscend = true;
  let sortAuthorAscend = true;
  let sortPagesAscend = true;
  let sortReadAscend = true;

  function sortByKey(array, key, sortAscend) {
    return array.sort((a, b) => {
      // Sort pages as numbers
      if (key === 'pages') {
        if (sortAscend) {
          return +a[key] < +b[key] ? -1 : 1;
        }
        return +a[key] > +b[key] ? -1 : 1;
      }
      // Sort title, author as strings
      if (sortAscend) {
        return a[key] < b[key] ? -1 : 1;
      }
      return a[key] > b[key] ? -1 : 1;
    });
  }

  function sortBooks(key) {
    switch (key) {
      case 'title':
        sortByKey(library, key, sortTitleAscend);
        sortTitleAscend = !sortTitleAscend;
        break;
      case 'author':
        sortByKey(library, key, sortAuthorAscend);
        sortAuthorAscend = !sortAuthorAscend;
        break;
      case 'pages':
        sortByKey(library, key, sortPagesAscend);
        sortPagesAscend = !sortPagesAscend;
        break;
      case 'read':
        sortByKey(library, key, sortReadAscend);
        sortReadAscend = !sortReadAscend;
        break;

      default:
        break;
    }
  }

  return {
    addBook,
    updateBook,
    toggleBook,
    delBook,
    sortBooks,
    getFromLocalStorage,
    saveToLocalStorage,
    // ? What is difference between using get and access library[]
    // Even if you freeze the object, the array could still be modified.
    // Even if you used a getter- the array could still be modified if you aren't careful!
    // To protect the array, you can use a getter function that only ever returns
    // a copy of the array (hence a different area in memory,
    // preventing the original area in memory from being changed).
    get books() {
      return [...library];
    },
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Library);


/***/ }),

/***/ "./src/Modal-delete.js":
/*!*****************************!*\
  !*** ./src/Modal-delete.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/createElement.js");
/* harmony import */ var _images_icons8_error_96_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/icons8-error-96.png */ "./src/images/icons8-error-96.png");



const deleteModal = (() => {
  const modalEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('dialog', [], {
    id: 'delete-alert',
  });

  // Alert message
  const alertContainerDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
    'div',
    ['delete-alert-container'],
    {}
  );
  const imgEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('img', [], { src: _images_icons8_error_96_png__WEBPACK_IMPORTED_MODULE_1__ });
  alertContainerDiv.appendChild(imgEl);
  const pEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('p', [], {});
  pEl.innerText = "Please confirm that you'd like to delete the book ";
  alertContainerDiv.appendChild(pEl);
  const spanEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('span', [], { id: 'book-title' });
  pEl.appendChild(spanEl);
  modalEl.appendChild(alertContainerDiv);

  // Buttons
  const btnContainerDiv = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', ['button-container'], {});
  // Cancel button
  const cancelBtnEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', [], {
    id: 'delete-cancel',
  });
  cancelBtnEl.innerText = 'Cancel';
  btnContainerDiv.appendChild(cancelBtnEl);
  cancelBtnEl.addEventListener('click', () => deleteModal.modalEl.close());
  // Confirm button
  const confirmBtnEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', [], {
    id: 'delete-confirm',
  });
  confirmBtnEl.innerText = 'Confirm';
  btnContainerDiv.appendChild(confirmBtnEl);
  modalEl.appendChild(btnContainerDiv);

  return {
    get modalEl() {
      return modalEl;
    },
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteModal);


/***/ }),

/***/ "./src/Model-book-details.js":
/*!***********************************!*\
  !*** ./src/Model-book-details.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/createElement.js");


const bookModal = (() => {
  const modalEl = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('dialog', [], { id: 'book-form' });
  const form = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('form', [], {id: 'book-details-form'});
  modalEl.appendChild(form);

  // Form header
  const header = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', ['book-form-header'], {});
  const formTitle = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', ['book-form-title'], {});
  formTitle.innerText = 'Book details';
  header.appendChild(formTitle);
  const formClose = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', ['book-form-close'], {});
  formClose.innerText = 'x';
  formClose.addEventListener('click', () => modalEl.close());
  header.appendChild(formClose);
  form.appendChild(header);

  // Fieldset
  const fieldSet = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('fieldset', [], {});
  form.appendChild(fieldSet);

  // Title entry line
  const titleLine = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', ['entry-line'], {});
  const titleLabel = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('label', [], { for: 'title' });
  titleLabel.innerText = 'Title';
  titleLine.appendChild(titleLabel);
  const titleInput = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', ['titleInput'], {
    type: 'text',
    id: 'title',
    placeholder: 'title',
    name: 'title',
    required: true,
    minlength: 1,
  });
  titleLine.appendChild(titleInput);
  fieldSet.appendChild(titleLine);

  // Author entry line
  const authorLine = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', ['entry-line'], {});
  const authorLabel = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('label', [], { for: 'author' });
  authorLabel.innerText = 'Author';
  authorLine.appendChild(authorLabel);
  const authorInput = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', ['authorInput'], {
    type: 'text',
    id: 'author',
    placeholder: 'author',
    name: 'author',
    required: true,
    minlength: 1,
  });
  authorLine.appendChild(authorInput);
  fieldSet.appendChild(authorLine);

  // Pages entry line
  const pagesLine = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', ['entry-line'], {});
  const pagesLabel = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('label', [], { for: 'pages' });
  pagesLabel.innerText = 'pages';
  pagesLine.appendChild(pagesLabel);
  const pagesInput = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', ['pagesInput'], {
    type: 'number',
    id: 'pages',
    placeholder: 'pages',
    name: 'pages',
    required: true,
    minlength: 1,
  });
  pagesLine.appendChild(pagesInput);
  fieldSet.appendChild(pagesLine);

  // Read entry line
  const readLine = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', ['entry-line'], {});
  const readLabel = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('label', [], { for: 'read' });
  readLabel.innerText = 'Read';
  readLine.appendChild(readLabel);
  const readInput = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', ['readInput'], {
    type: 'checkbox',
    id: 'read',
    name: 'read',
  });
  readLine.appendChild(readInput);
  fieldSet.appendChild(readLine);

  // Buttons
  const buttons = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', ['button-container'], {});
  const resetBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', ['resetBtn'], {
    type: 'reset',
    name: 'reser',
  });
  resetBtn.textContent = 'Reset';
  buttons.appendChild(resetBtn);

  const submitBtn = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', ['submitBtn'], {
    type: 'submit',
    name: 'submit',
  });
  submitBtn.textContent = 'Submit';
  buttons.appendChild(submitBtn);
  form.appendChild(buttons);

  function clearInputs() {
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readInput.checked = false;
  }

  return {
    clearInputs,
    get modalEl() {
      return modalEl;
    },
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bookModal);


/***/ }),

/***/ "./src/ScreenController.js":
/*!*********************************!*\
  !*** ./src/ScreenController.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Library */ "./src/Library.js");
/* harmony import */ var _BookDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookDisplay */ "./src/BookDisplay.js");
/* harmony import */ var _Modal_delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal-delete */ "./src/Modal-delete.js");
/* harmony import */ var _Model_book_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Model-book-details */ "./src/Model-book-details.js");





const ScreenController = ((library, display) => {
  const contentContainerEl = document.querySelector('.content-container');

  // Append the modals
  contentContainerEl.appendChild(_Modal_delete__WEBPACK_IMPORTED_MODULE_2__["default"].modalEl);
  contentContainerEl.appendChild(_Model_book_details__WEBPACK_IMPORTED_MODULE_3__["default"].modalEl);

  // Delete confirmation modal buttons event listeners
  const delConfirmBtn = document.querySelector('#delete-confirm');

  function deleteBook(e, index) {
    library.delBook(index);
    _Modal_delete__WEBPACK_IMPORTED_MODULE_2__["default"].modalEl.close();
    display.render(library.books);
  }

  function showDelModal(index) {
    _Modal_delete__WEBPACK_IMPORTED_MODULE_2__["default"].modalEl.showModal();
    const booktitleEl = document.querySelector('#book-title');
    booktitleEl.innerText = library.books[index].title;
    delConfirmBtn.addEventListener('click', (evt) => deleteBook(evt, index), {
      once: true,
    });
  }

  function addBook(e) {
    e.preventDefault();
    const formElems = e.target.elements;
    library.addBook(
      formElems.title.value,
      formElems.author.value,
      formElems.pages.value,
      formElems.read.checked
    );
    _Model_book_details__WEBPACK_IMPORTED_MODULE_3__["default"].modalEl.close();
    display.render(library.books);
  }

  function openAddBookModal() {
    _Model_book_details__WEBPACK_IMPORTED_MODULE_3__["default"].modalEl.showModal();
    _Model_book_details__WEBPACK_IMPORTED_MODULE_3__["default"].clearInputs();
    _Model_book_details__WEBPACK_IMPORTED_MODULE_3__["default"].modalEl.addEventListener('submit', addBook, { once: true });
  }

  function sortBooks(e) {
    if (e.target.className === 'sort-img') {
      const sortKey = e.target.getAttribute('data-key');
      library.sortBooks(sortKey);
      display.render(library.books);
    }
  }

  function updateBook(e, index) {
    e.preventDefault();
    const formElems = e.target.elements;
    library.updateBook(
      index,
      formElems.title.value,
      formElems.author.value,
      formElems.pages.value,
      formElems.read.checked
    );
    _Model_book_details__WEBPACK_IMPORTED_MODULE_3__["default"].modalEl.close();
    display.render(library.books);
  }

  function modifyBook(e) {
    if (e.target.className === 'read-status') {
      const index = e.target.getAttribute('data-key');
      library.toggleBook(index);
      display.render(library.books);
    } else if (e.target.className === 'del-btn') {
      const index = e.target.getAttribute('data-key');
      showDelModal(index);
    } else if (e.target.className === 'edit-btn') {
      const index = e.target.getAttribute('data-key');
      const book = library.books[index];

      _Model_book_details__WEBPACK_IMPORTED_MODULE_3__["default"].modalEl.showModal();

      // Book details form elements
      const formEl = document.querySelector('#book-details-form');
      const formElems = formEl.elements;

      // Fill the form with selected book details
      formElems.title.value = book.title;
      formElems.author.value = book.author;
      formElems.pages.value = book.pages;
      formElems.read.checked = book.read;

      _Model_book_details__WEBPACK_IMPORTED_MODULE_3__["default"].modalEl.addEventListener(
        'submit',
        (evt) => updateBook(evt, index),
        {
          once: true,
        }
      );
    }
  }

  function init() {
    // Event listner for the add book button
    const addBookImgEl = document.querySelector('.addBookImg');
    addBookImgEl.addEventListener('click', openAddBookModal);

    // Event listeners for the sort buttons in the table head
    const theadEl = document.querySelector('thead');
    theadEl.addEventListener('click', sortBooks);

    // Event listener for the buttons in the book list
    library.getFromLocalStorage();
    _BookDisplay__WEBPACK_IMPORTED_MODULE_1__["default"].render(library.books);
    display.displayEl.addEventListener('click', modifyBook);
  }

  return { init };
})(_Library__WEBPACK_IMPORTED_MODULE_0__["default"], _BookDisplay__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScreenController);


/***/ }),

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElement)
/* harmony export */ });
// A utiity funciton that simplifies HTML element creation

function createElement(type, classArray, attrObj) {
  const element = document.createElement(type);

  element.classList.add(...classArray);

  for (const attr in attrObj) {
    element.setAttribute(attr, attrObj[attr]);
  }

  return element;
}


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

/***/ "./src/images/icons8-error-96.png":
/*!****************************************!*\
  !*** ./src/images/icons8-error-96.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6754905c29724abc9082.png";

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
/* harmony import */ var _ScreenController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScreenController */ "./src/ScreenController.js");



_ScreenController__WEBPACK_IMPORTED_MODULE_1__["default"].init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDZjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDNkI7O0FBRWxELDhEQUFxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2xpYnJhcnkvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9Cb29rLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvQm9va0Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9MaWJyYXJ5LmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvTW9kYWwtZGVsZXRlLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvTW9kZWwtYm9vay1kZXRhaWxzLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvU2NyZWVuQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL2NyZWF0ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QXJjaGl0ZWN0cytEYXVnaHRlcik7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogIzk0YjQ5ZjtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmY2Y4ZTg7XFxuICB3aWR0aDogY2xhbXAoNDYwcHgsIDEwMCUsIDEwMDBweCk7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxubWFpbiB7XFxuICB3aWR0aDogY2xhbXAoNDYwcHgsIDgwJSwgODAwcHgpO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogI2ZjZjhlODtcXG4gIHBhZGRpbmc6IDAgMC41cmVtIDAgMC41cmVtO1xcbiAgaGVpZ2h0OiA4cmVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4ubG9nbyB7XFxuICB3aWR0aDogODBweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogJ0FyY2hpdGVjdHMgRGF1Z2h0ZXInO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hZGRCb29rSW1nIHtcXG4gIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG4vKiAgKi9cXG4vKiBUYWJsZSBzdHlsaW5nICovXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLyogVGFibGUgaGVhZGVyICovXFxudGhlYWQge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogOHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2IzOTA7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxudGgge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG50aGVhZCA+IHRyID4gOm50aC1jaGlsZCgxKSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxufVxcbnRoZWFkID4gdHIgPiA6bnRoLWNoaWxkKDIpIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxudGhlYWQgPiB0ciA+IDpudGgtY2hpbGQoMykge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxudGhlYWQgPiB0ciA+IDpudGgtY2hpbGQoNCkge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxufVxcbi5zb3J0LWltZyB7XFxuICB3aWR0aDogMS4zcmVtO1xcbn1cXG5cXG4vKiBUYWJsZSBib2R5IGNvbHVtbnMgKi9cXG50Ym9keSA+IHRyID4gOm50aC1jaGlsZCgxKSB7XFxuICB3aWR0aDogNDAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG50Ym9keSA+IHRyID4gOm50aC1jaGlsZCgyKSB7XFxuICB3aWR0aDogMjAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxudGJvZHkgPiB0ciA+IDpudGgtY2hpbGQoMykge1xcbiAgd2lkdGg6IDE1JTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgcGFkZGluZy1yaWdodDogMC4ycmVtO1xcbn1cXG50Ym9keSA+IHRyID4gOm50aC1jaGlsZCg0KSB7XFxuICB3aWR0aDogMTUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG50Ym9keSA+IHRyID4gOm50aC1jaGlsZCg1KSB7XFxuICB3aWR0aDogMTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBJbWFnZXMgKi9cXG5pbWcge1xcbiAgd2lkdGg6IDJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmltZzphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUlKTtcXG59XFxuXFxuLyogVGFibGUgcm93cyAqL1xcbnRyOm50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VlNWQwO1xcbn1cXG50Ym9keSA+IHRyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhvbmV5ZGV3O1xcbn1cXG5cXG4vKiBUYWJsZSBjZWxscyAqL1xcbnRkIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdBcmNoaXRlY3RzIERhdWdodGVyJztcXG4gIHBhZGRpbmc6IDAuMnJlbSAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjZGRkO1xcbn1cXG5cXG4vKiBGb3JtICovXFxuI2Jvb2stZm9ybSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDQ4MHB4O1xcbiAgYmFja2dyb3VuZDogIzlhYjNhMDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5ib29rLWZvcm0taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcXG59XFxuXFxuLmJvb2stZm9ybS1jbG9zZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ib29rLWZvcm0tY2xvc2U6aG92ZXIge1xcbiAgc2NhbGU6IDEuMjtcXG4gIGNvbG9yOiBkYXJrcmVkO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBiYWNrZ3JvdW5kOiAjZmNmOGVhO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBjb2xvcjogIzExMTtcXG59XFxuXFxuLmVudHJ5LWxpbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMC41cmVtO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmbGV4OiAyO1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnQXJjaGl0ZWN0cyBEYXVnaHRlcic7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuaW5wdXQge1xcbiAgZmxleDogNTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXQ6dmFsaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZmZmMTtcXG59XFxuXFxuaW5wdXQ6aW52YWxpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU3ODc4NmM7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6ICM5NGQ0ZjY7XFxuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBzY2FsZTogMS4xO1xcbn1cXG5cXG4vKiBEZWxldGUgY29uZmlybWF0aW9uIHBvcHVwICovXFxuI2RlbGV0ZS1hbGVydCB7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDQxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlN2M3ODtcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAwIDFyZW07XFxufVxcblxcbi5kZWxldGUtYWxlcnQtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmYmY4ZWE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jYm9vay10aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi8qIEJvdHRvbSBvZiB0aGUgcGFnZSAqL1xcbi5jYXJlIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0FBQ2Q7O0FBRUEsV0FBVztBQUNYO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixNQUFNO0FBQ1I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQSxLQUFLO0FBQ0wsa0JBQWtCO0FBQ2xCO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsMENBQTBDO0FBQzVDO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBLFdBQVc7QUFDWDtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsZUFBZTtBQUNmO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsaUJBQWlCO0VBQ2pCLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsOEJBQThCO0FBQ2hDOztBQUVBLFNBQVM7QUFDVDtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QXJjaGl0ZWN0cytEYXVnaHRlcicpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogIzk0YjQ5ZjtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmY2Y4ZTg7XFxuICB3aWR0aDogY2xhbXAoNDYwcHgsIDEwMCUsIDEwMDBweCk7XFxuICBtYXJnaW46IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxubWFpbiB7XFxuICB3aWR0aDogY2xhbXAoNDYwcHgsIDgwJSwgODAwcHgpO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogI2ZjZjhlODtcXG4gIHBhZGRpbmc6IDAgMC41cmVtIDAgMC41cmVtO1xcbiAgaGVpZ2h0OiA4cmVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4ubG9nbyB7XFxuICB3aWR0aDogODBweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogJ0FyY2hpdGVjdHMgRGF1Z2h0ZXInO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hZGRCb29rSW1nIHtcXG4gIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG4vKiAgKi9cXG4vKiBUYWJsZSBzdHlsaW5nICovXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLyogVGFibGUgaGVhZGVyICovXFxudGhlYWQge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogOHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2IzOTA7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxudGgge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG50aGVhZCA+IHRyID4gOm50aC1jaGlsZCgxKSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxufVxcbnRoZWFkID4gdHIgPiA6bnRoLWNoaWxkKDIpIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxudGhlYWQgPiB0ciA+IDpudGgtY2hpbGQoMykge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxudGhlYWQgPiB0ciA+IDpudGgtY2hpbGQoNCkge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxufVxcbi5zb3J0LWltZyB7XFxuICB3aWR0aDogMS4zcmVtO1xcbn1cXG5cXG4vKiBUYWJsZSBib2R5IGNvbHVtbnMgKi9cXG50Ym9keSA+IHRyID4gOm50aC1jaGlsZCgxKSB7XFxuICB3aWR0aDogNDAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG50Ym9keSA+IHRyID4gOm50aC1jaGlsZCgyKSB7XFxuICB3aWR0aDogMjAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxudGJvZHkgPiB0ciA+IDpudGgtY2hpbGQoMykge1xcbiAgd2lkdGg6IDE1JTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgcGFkZGluZy1yaWdodDogMC4ycmVtO1xcbn1cXG50Ym9keSA+IHRyID4gOm50aC1jaGlsZCg0KSB7XFxuICB3aWR0aDogMTUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG50Ym9keSA+IHRyID4gOm50aC1jaGlsZCg1KSB7XFxuICB3aWR0aDogMTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBJbWFnZXMgKi9cXG5pbWcge1xcbiAgd2lkdGg6IDJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmltZzphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUlKTtcXG59XFxuXFxuLyogVGFibGUgcm93cyAqL1xcbnRyOm50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VlNWQwO1xcbn1cXG50Ym9keSA+IHRyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhvbmV5ZGV3O1xcbn1cXG5cXG4vKiBUYWJsZSBjZWxscyAqL1xcbnRkIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdBcmNoaXRlY3RzIERhdWdodGVyJztcXG4gIHBhZGRpbmc6IDAuMnJlbSAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCAjZGRkO1xcbn1cXG5cXG4vKiBGb3JtICovXFxuI2Jvb2stZm9ybSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDQ4MHB4O1xcbiAgYmFja2dyb3VuZDogIzlhYjNhMDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5ib29rLWZvcm0taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcXG59XFxuXFxuLmJvb2stZm9ybS1jbG9zZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ib29rLWZvcm0tY2xvc2U6aG92ZXIge1xcbiAgc2NhbGU6IDEuMjtcXG4gIGNvbG9yOiBkYXJrcmVkO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBiYWNrZ3JvdW5kOiAjZmNmOGVhO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBjb2xvcjogIzExMTtcXG59XFxuXFxuLmVudHJ5LWxpbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMC41cmVtO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmbGV4OiAyO1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnQXJjaGl0ZWN0cyBEYXVnaHRlcic7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuaW5wdXQge1xcbiAgZmxleDogNTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXQ6dmFsaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZmZmMTtcXG59XFxuXFxuaW5wdXQ6aW52YWxpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU3ODc4NmM7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6ICM5NGQ0ZjY7XFxuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICBzY2FsZTogMS4xO1xcbn1cXG5cXG4vKiBEZWxldGUgY29uZmlybWF0aW9uIHBvcHVwICovXFxuI2RlbGV0ZS1hbGVydCB7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDQxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlN2M3ODtcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAwIDFyZW07XFxufVxcblxcbi5kZWxldGUtYWxlcnQtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmYmY4ZWE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jYm9vay10aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi8qIEJvdHRvbSBvZiB0aGUgcGFnZSAqL1xcbi5jYXJlIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBCb29rID0gKHRpdGxlLCBhdXRob3IsIHBhZ2VzLCByZWFkKSA9PiAoe1xuICB0aXRsZSxcbiAgYXV0aG9yLFxuICBwYWdlcyxcbiAgLy8gVXNpbmcgYSBnZXR0ZXIgZ2V0IHdpdGhvdXQgYSBzZXR0ZXIgc2V0IG1ha2VzIGl0IHNvIHRoYXQgeW91IGNhbiByZWFkIHRoYXQgcHJvcGVydHlcbiAgLy8gb2YgdGhlIG9iamVjdCwgYnV0IHlvdSBjYW5ub3QgY2hhbmdlIGl0J3MgdmFsdWUuXG4gIC8vIFRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIHZhbHVlIG9mIHJlYWQgaW4gdGhpcyBjYXNlIGlzIHRvIHVzZSB0aGUgdG9nZ2xlUmVhZCBmdW5jdGlvbi5cbiAgZ2V0IHJlYWQoKSB7XG4gICAgcmV0dXJuIHJlYWQ7XG4gIH0sXG4gIC8vIEkgYWRkZWQgdGhpcyBzZXR0ZXIgYmVjYXVzZSBJIHdhbnQgdXNlciB0byBiZSBhYmxlIHRvIGNoYW5nZSBpdCdzIHZhbHVlXG4gIHNldCByZWFkKHZhbHVlKSB7XG4gICAgcmVhZCA9IHZhbHVlO1xuICB9LFxuICAvLyBJZiBJIGRvIG5vdCBoYXZlIHRoZSBnZXR0ZXIvc2V0dGVyLCB0b2dnbGVSZWFkKCkgZG9lcyBub3Qgd29ya1xuICAvLyBJdCB0b2dnbGVzIHRoZSB2YWx1ZSBvZiByZWFkIGluIHRoZSBmdW5jdGlvbixcbiAgLy8gYnV0IGRvZXMgbm90IHRvZ2dsZSB0aGUgdmFsdWUgb2YgcmVhZCBpbiB0aGUgb2JqZWN0XG4gIHRvZ2dsZVJlYWQoKSB7XG4gICAgcmVhZCA9ICFyZWFkO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2s7XG5cbi8vIFRPRE86IENvbnNpZGVyIHVzaW5nIE9iamVjdC5mcmVlemVcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vY3JlYXRlRWxlbWVudCc7XG5pbXBvcnQgcmVhZEljb24gZnJvbSAnLi9pbWFnZXMvaWNvbnM4LWNoZWNrZWQtY2hlY2tib3gtOTYucG5nJztcbmltcG9ydCByZWFkaW5nSWNvbiBmcm9tICcuL2ltYWdlcy9pY29uczgtcHJvY2Vzcy05Ni5wbmcnO1xuaW1wb3J0IGVkaXRJY29uIGZyb20gJy4vaW1hZ2VzL2ljb25zOC1jb21wb3NlLTk2LnBuZyc7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuL2ltYWdlcy9yZW1vdmUucG5nJztcblxuY29uc3QgQm9va0Rpc3BsYXkgPSAoKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0Ym9keScpO1xuXG4gIGZ1bmN0aW9uIGRpc3BsYXlCb29rKGJvb2ssIGluZGV4KSB7XG4gICAgY29uc3QgYm9va1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG5cbiAgICBjb25zdCBib29rVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGJvb2tUaXRsZS5pbm5lclRleHQgPSBib29rLnRpdGxlO1xuICAgIGJvb2tSb3cuYXBwZW5kQ2hpbGQoYm9va1RpdGxlKTtcblxuICAgIGNvbnN0IGJvb2tBdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGJvb2tBdXRob3IuaW5uZXJUZXh0ID0gYm9vay5hdXRob3I7XG4gICAgYm9va1Jvdy5hcHBlbmRDaGlsZChib29rQXV0aG9yKTtcblxuICAgIGNvbnN0IGJvb2tQYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgYm9va1BhZ2VzLmlubmVyVGV4dCA9IGJvb2sucGFnZXM7XG4gICAgYm9va1Jvdy5hcHBlbmRDaGlsZChib29rUGFnZXMpO1xuXG4gICAgY29uc3QgYm9va1JlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IGJvb2tSZWFkSW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJywgWydyZWFkLXN0YXR1cyddLCB7XG4gICAgICAnZGF0YS1rZXknOiBpbmRleCxcbiAgICB9KTtcbiAgICBib29rUmVhZC5hcHBlbmRDaGlsZChib29rUmVhZEltZyk7XG4gICAgYm9va1JlYWRJbWcuc3JjID0gYm9vay5yZWFkID8gcmVhZEljb24gOiByZWFkaW5nSWNvbjtcbiAgICBib29rUm93LmFwcGVuZENoaWxkKGJvb2tSZWFkKTtcblxuICAgIGNvbnN0IGJvb2tFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjb25zdCBib29rRWRpdEltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIFsnZWRpdC1idG4nXSwge1xuICAgICAgJ2RhdGEta2V5JzogaW5kZXgsXG4gICAgfSk7XG4gICAgYm9va0VkaXRJbWcuc3JjID0gZWRpdEljb247XG4gICAgYm9va0VkaXQuYXBwZW5kQ2hpbGQoYm9va0VkaXRJbWcpO1xuXG4gICAgY29uc3QgYm9va1JlbW92ZUltZyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIFsnZGVsLWJ0biddLCB7XG4gICAgICAnZGF0YS1rZXknOiBpbmRleCxcbiAgICB9KTtcbiAgICBib29rUmVtb3ZlSW1nLnNyYyA9IGRlbGV0ZUljb247XG4gICAgYm9va0VkaXQuYXBwZW5kQ2hpbGQoYm9va1JlbW92ZUltZyk7XG5cbiAgICBib29rUm93LmFwcGVuZENoaWxkKGJvb2tFZGl0KTtcblxuICAgIGRpc3BsYXlFbC5hcHBlbmRDaGlsZChib29rUm93KTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gcmVuZGVyKGJvb2tzKSB7XG4gICAgZGlzcGxheUVsLmlubmVyVGV4dCA9ICcnO1xuICAgIGJvb2tzLmZvckVhY2goKGJvb2spID0+IHtcbiAgICAgIGRpc3BsYXlCb29rKGJvb2ssIGJvb2tzLmluZGV4T2YoYm9vaykpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZW5kZXIsXG4gICAgZ2V0IGRpc3BsYXlFbCgpIHtcbiAgICAgIHJldHVybiBkaXNwbGF5RWw7XG4gICAgfSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tEaXNwbGF5O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCBCb29rIGZyb20gJy4vQm9vayc7XG5cbi8vIExpYnJhcnkgaXMgYW4gb2JqZWN0IHRoYXQgaW5jbHVkZXMgdGhlIGxpYnJhcnkgYXJyYXkgYW5kIHRoZSBhc3NvY2lhdGVkIG1ldGhvZHNcbmNvbnN0IExpYnJhcnkgPSAoKCkgPT4ge1xuICBjb25zdCBsaWJyYXJ5ID0gW107XG5cbiAgZnVuY3Rpb24gc2F2ZVRvTG9jYWxTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteUxpYnJhcnknLCBKU09OLnN0cmluZ2lmeShsaWJyYXJ5KSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgIGNvbnN0IGpzb25BcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215TGlicmFyeScpKTtcbiAgICBpZiAoIWpzb25BcnJheSB8fCBqc29uQXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBJZiBhcnJheSBpcyBlbXB0eSwgcG9wdWxhdGUgaXQgd2l0aCBhIGZldyBib29rc1xuICAgICAgYWRkQm9vaygnTG9yZCBvZiB0aGUgUmluZ3MnLCAnSi4gUi4gUi5Ub2xraW4nLCA5MjUwLCB0cnVlKTtcbiAgICAgIGFkZEJvb2soJ0EgR2FtZSBvZiBUaHJvbmVzJywgJ0dlb3JnZSBSLiBSLiBNYXJ0aW4nLCA2OTQsIGZhbHNlKTtcbiAgICAgIGFkZEJvb2soJ0hhcnJ5IFBvdHRlcicsICdKLiBLLiBSb3dsaW5nJywgNjA3LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLy8gQ29udmVydCBqYXNvbkFycmF5IGludG8gYSBsaXN0IG9mIEJvb2sgb2JqZWN0c1xuICAgIC8vIGJlY2F1c2UgQm9vayBvYmplY3RzIGhhdmUgbWV0aG9kcyBpbiBhZGRpdGlvbiB0byBwcm9wZXJ0aWVzXG4gICAgLy8gVGhlbiBwdXNoIGVhY2ggQm9vayBvYmplY3QgaW50byB0aGUgY29uc3QgbGlicmFyeVxuICAgIGxpYnJhcnkucHVzaChcbiAgICAgIC4uLmpzb25BcnJheS5tYXAoKGpzb25Cb29rKSA9PlxuICAgICAgICBCb29rKGpzb25Cb29rLnRpdGxlLCBqc29uQm9vay5hdXRob3IsIGpzb25Cb29rLnBhZ2VzLCBqc29uQm9vay5yZWFkKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRCb29rKHRpdGxlLCBhdXRob3IsIHBhZ2VzLCByZWFkKSB7XG4gICAgY29uc3QgbmV3Qm9vayA9IEJvb2sodGl0bGUsIGF1dGhvciwgcGFnZXMsIHJlYWQpO1xuICAgIGxpYnJhcnkucHVzaChuZXdCb29rKTtcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUJvb2soaW5kZXgsIHRpdGxlLCBhdXRob3IsIHBhZ2VzLCByZWFkKSB7XG4gICAgY29uc3QgYm9vayA9IGxpYnJhcnlbaW5kZXhdO1xuICAgIGJvb2sudGl0bGUgPSB0aXRsZTtcbiAgICBib29rLmF1dGhvciA9IGF1dGhvcjtcbiAgICBib29rLnBhZ2VzID0gcGFnZXM7XG4gICAgYm9vay5yZWFkID0gcmVhZDtcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUJvb2soaW5kZXgpIHtcbiAgICBsaWJyYXJ5W2luZGV4XS50b2dnbGVSZWFkKCk7XG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxCb29rKGluZGV4KSB7XG4gICAgbGlicmFyeS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICB9XG5cbiAgLy8gU29ydGluZyBmdW5jdGlvbnNcbiAgbGV0IHNvcnRUaXRsZUFzY2VuZCA9IHRydWU7XG4gIGxldCBzb3J0QXV0aG9yQXNjZW5kID0gdHJ1ZTtcbiAgbGV0IHNvcnRQYWdlc0FzY2VuZCA9IHRydWU7XG4gIGxldCBzb3J0UmVhZEFzY2VuZCA9IHRydWU7XG5cbiAgZnVuY3Rpb24gc29ydEJ5S2V5KGFycmF5LCBrZXksIHNvcnRBc2NlbmQpIHtcbiAgICByZXR1cm4gYXJyYXkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgLy8gU29ydCBwYWdlcyBhcyBudW1iZXJzXG4gICAgICBpZiAoa2V5ID09PSAncGFnZXMnKSB7XG4gICAgICAgIGlmIChzb3J0QXNjZW5kKSB7XG4gICAgICAgICAgcmV0dXJuICthW2tleV0gPCArYltrZXldID8gLTEgOiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiArYVtrZXldID4gK2Jba2V5XSA/IC0xIDogMTtcbiAgICAgIH1cbiAgICAgIC8vIFNvcnQgdGl0bGUsIGF1dGhvciBhcyBzdHJpbmdzXG4gICAgICBpZiAoc29ydEFzY2VuZCkge1xuICAgICAgICByZXR1cm4gYVtrZXldIDwgYltrZXldID8gLTEgOiAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFba2V5XSA+IGJba2V5XSA/IC0xIDogMTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNvcnRCb29rcyhrZXkpIHtcbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgY2FzZSAndGl0bGUnOlxuICAgICAgICBzb3J0QnlLZXkobGlicmFyeSwga2V5LCBzb3J0VGl0bGVBc2NlbmQpO1xuICAgICAgICBzb3J0VGl0bGVBc2NlbmQgPSAhc29ydFRpdGxlQXNjZW5kO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2F1dGhvcic6XG4gICAgICAgIHNvcnRCeUtleShsaWJyYXJ5LCBrZXksIHNvcnRBdXRob3JBc2NlbmQpO1xuICAgICAgICBzb3J0QXV0aG9yQXNjZW5kID0gIXNvcnRBdXRob3JBc2NlbmQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGFnZXMnOlxuICAgICAgICBzb3J0QnlLZXkobGlicmFyeSwga2V5LCBzb3J0UGFnZXNBc2NlbmQpO1xuICAgICAgICBzb3J0UGFnZXNBc2NlbmQgPSAhc29ydFBhZ2VzQXNjZW5kO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JlYWQnOlxuICAgICAgICBzb3J0QnlLZXkobGlicmFyeSwga2V5LCBzb3J0UmVhZEFzY2VuZCk7XG4gICAgICAgIHNvcnRSZWFkQXNjZW5kID0gIXNvcnRSZWFkQXNjZW5kO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRCb29rLFxuICAgIHVwZGF0ZUJvb2ssXG4gICAgdG9nZ2xlQm9vayxcbiAgICBkZWxCb29rLFxuICAgIHNvcnRCb29rcyxcbiAgICBnZXRGcm9tTG9jYWxTdG9yYWdlLFxuICAgIHNhdmVUb0xvY2FsU3RvcmFnZSxcbiAgICAvLyA/IFdoYXQgaXMgZGlmZmVyZW5jZSBiZXR3ZWVuIHVzaW5nIGdldCBhbmQgYWNjZXNzIGxpYnJhcnlbXVxuICAgIC8vIEV2ZW4gaWYgeW91IGZyZWV6ZSB0aGUgb2JqZWN0LCB0aGUgYXJyYXkgY291bGQgc3RpbGwgYmUgbW9kaWZpZWQuXG4gICAgLy8gRXZlbiBpZiB5b3UgdXNlZCBhIGdldHRlci0gdGhlIGFycmF5IGNvdWxkIHN0aWxsIGJlIG1vZGlmaWVkIGlmIHlvdSBhcmVuJ3QgY2FyZWZ1bCFcbiAgICAvLyBUbyBwcm90ZWN0IHRoZSBhcnJheSwgeW91IGNhbiB1c2UgYSBnZXR0ZXIgZnVuY3Rpb24gdGhhdCBvbmx5IGV2ZXIgcmV0dXJuc1xuICAgIC8vIGEgY29weSBvZiB0aGUgYXJyYXkgKGhlbmNlIGEgZGlmZmVyZW50IGFyZWEgaW4gbWVtb3J5LFxuICAgIC8vIHByZXZlbnRpbmcgdGhlIG9yaWdpbmFsIGFyZWEgaW4gbWVtb3J5IGZyb20gYmVpbmcgY2hhbmdlZCkuXG4gICAgZ2V0IGJvb2tzKCkge1xuICAgICAgcmV0dXJuIFsuLi5saWJyYXJ5XTtcbiAgICB9LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTGlicmFyeTtcbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vY3JlYXRlRWxlbWVudCc7XG5pbXBvcnQgYWxlcnRJY29uIGZyb20gJy4vaW1hZ2VzL2ljb25zOC1lcnJvci05Ni5wbmcnO1xuXG5jb25zdCBkZWxldGVNb2RhbCA9ICgoKSA9PiB7XG4gIGNvbnN0IG1vZGFsRWwgPSBjcmVhdGVFbGVtZW50KCdkaWFsb2cnLCBbXSwge1xuICAgIGlkOiAnZGVsZXRlLWFsZXJ0JyxcbiAgfSk7XG5cbiAgLy8gQWxlcnQgbWVzc2FnZVxuICBjb25zdCBhbGVydENvbnRhaW5lckRpdiA9IGNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgWydkZWxldGUtYWxlcnQtY29udGFpbmVyJ10sXG4gICAge31cbiAgKTtcbiAgY29uc3QgaW1nRWwgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCBbXSwgeyBzcmM6IGFsZXJ0SWNvbiB9KTtcbiAgYWxlcnRDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoaW1nRWwpO1xuICBjb25zdCBwRWwgPSBjcmVhdGVFbGVtZW50KCdwJywgW10sIHt9KTtcbiAgcEVsLmlubmVyVGV4dCA9IFwiUGxlYXNlIGNvbmZpcm0gdGhhdCB5b3UnZCBsaWtlIHRvIGRlbGV0ZSB0aGUgYm9vayBcIjtcbiAgYWxlcnRDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQocEVsKTtcbiAgY29uc3Qgc3BhbkVsID0gY3JlYXRlRWxlbWVudCgnc3BhbicsIFtdLCB7IGlkOiAnYm9vay10aXRsZScgfSk7XG4gIHBFbC5hcHBlbmRDaGlsZChzcGFuRWwpO1xuICBtb2RhbEVsLmFwcGVuZENoaWxkKGFsZXJ0Q29udGFpbmVyRGl2KTtcblxuICAvLyBCdXR0b25zXG4gIGNvbnN0IGJ0bkNvbnRhaW5lckRpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnYnV0dG9uLWNvbnRhaW5lciddLCB7fSk7XG4gIC8vIENhbmNlbCBidXR0b25cbiAgY29uc3QgY2FuY2VsQnRuRWwgPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBbXSwge1xuICAgIGlkOiAnZGVsZXRlLWNhbmNlbCcsXG4gIH0pO1xuICBjYW5jZWxCdG5FbC5pbm5lclRleHQgPSAnQ2FuY2VsJztcbiAgYnRuQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ0bkVsKTtcbiAgY2FuY2VsQnRuRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkZWxldGVNb2RhbC5tb2RhbEVsLmNsb3NlKCkpO1xuICAvLyBDb25maXJtIGJ1dHRvblxuICBjb25zdCBjb25maXJtQnRuRWwgPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBbXSwge1xuICAgIGlkOiAnZGVsZXRlLWNvbmZpcm0nLFxuICB9KTtcbiAgY29uZmlybUJ0bkVsLmlubmVyVGV4dCA9ICdDb25maXJtJztcbiAgYnRuQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGNvbmZpcm1CdG5FbCk7XG4gIG1vZGFsRWwuYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyRGl2KTtcblxuICByZXR1cm4ge1xuICAgIGdldCBtb2RhbEVsKCkge1xuICAgICAgcmV0dXJuIG1vZGFsRWw7XG4gICAgfSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZU1vZGFsO1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcblxuY29uc3QgYm9va01vZGFsID0gKCgpID0+IHtcbiAgY29uc3QgbW9kYWxFbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycsIFtdLCB7IGlkOiAnYm9vay1mb3JtJyB9KTtcbiAgY29uc3QgZm9ybSA9IGNyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCBbXSwge2lkOiAnYm9vay1kZXRhaWxzLWZvcm0nfSk7XG4gIG1vZGFsRWwuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgLy8gRm9ybSBoZWFkZXJcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydib29rLWZvcm0taGVhZGVyJ10sIHt9KTtcbiAgY29uc3QgZm9ybVRpdGxlID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydib29rLWZvcm0tdGl0bGUnXSwge30pO1xuICBmb3JtVGl0bGUuaW5uZXJUZXh0ID0gJ0Jvb2sgZGV0YWlscyc7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuICBjb25zdCBmb3JtQ2xvc2UgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2Jvb2stZm9ybS1jbG9zZSddLCB7fSk7XG4gIGZvcm1DbG9zZS5pbm5lclRleHQgPSAneCc7XG4gIGZvcm1DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1vZGFsRWwuY2xvc2UoKSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChmb3JtQ2xvc2UpO1xuICBmb3JtLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgLy8gRmllbGRzZXRcbiAgY29uc3QgZmllbGRTZXQgPSBjcmVhdGVFbGVtZW50KCdmaWVsZHNldCcsIFtdLCB7fSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGRTZXQpO1xuXG4gIC8vIFRpdGxlIGVudHJ5IGxpbmVcbiAgY29uc3QgdGl0bGVMaW5lID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydlbnRyeS1saW5lJ10sIHt9KTtcbiAgY29uc3QgdGl0bGVMYWJlbCA9IGNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgW10sIHsgZm9yOiAndGl0bGUnIH0pO1xuICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9ICdUaXRsZSc7XG4gIHRpdGxlTGluZS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgWyd0aXRsZUlucHV0J10sIHtcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgaWQ6ICd0aXRsZScsXG4gICAgcGxhY2Vob2xkZXI6ICd0aXRsZScsXG4gICAgbmFtZTogJ3RpdGxlJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBtaW5sZW5ndGg6IDEsXG4gIH0pO1xuICB0aXRsZUxpbmUuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gIGZpZWxkU2V0LmFwcGVuZENoaWxkKHRpdGxlTGluZSk7XG5cbiAgLy8gQXV0aG9yIGVudHJ5IGxpbmVcbiAgY29uc3QgYXV0aG9yTGluZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnZW50cnktbGluZSddLCB7fSk7XG4gIGNvbnN0IGF1dGhvckxhYmVsID0gY3JlYXRlRWxlbWVudCgnbGFiZWwnLCBbXSwgeyBmb3I6ICdhdXRob3InIH0pO1xuICBhdXRob3JMYWJlbC5pbm5lclRleHQgPSAnQXV0aG9yJztcbiAgYXV0aG9yTGluZS5hcHBlbmRDaGlsZChhdXRob3JMYWJlbCk7XG4gIGNvbnN0IGF1dGhvcklucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBbJ2F1dGhvcklucHV0J10sIHtcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgaWQ6ICdhdXRob3InLFxuICAgIHBsYWNlaG9sZGVyOiAnYXV0aG9yJyxcbiAgICBuYW1lOiAnYXV0aG9yJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBtaW5sZW5ndGg6IDEsXG4gIH0pO1xuICBhdXRob3JMaW5lLmFwcGVuZENoaWxkKGF1dGhvcklucHV0KTtcbiAgZmllbGRTZXQuYXBwZW5kQ2hpbGQoYXV0aG9yTGluZSk7XG5cbiAgLy8gUGFnZXMgZW50cnkgbGluZVxuICBjb25zdCBwYWdlc0xpbmUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2VudHJ5LWxpbmUnXSwge30pO1xuICBjb25zdCBwYWdlc0xhYmVsID0gY3JlYXRlRWxlbWVudCgnbGFiZWwnLCBbXSwgeyBmb3I6ICdwYWdlcycgfSk7XG4gIHBhZ2VzTGFiZWwuaW5uZXJUZXh0ID0gJ3BhZ2VzJztcbiAgcGFnZXNMaW5lLmFwcGVuZENoaWxkKHBhZ2VzTGFiZWwpO1xuICBjb25zdCBwYWdlc0lucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBbJ3BhZ2VzSW5wdXQnXSwge1xuICAgIHR5cGU6ICdudW1iZXInLFxuICAgIGlkOiAncGFnZXMnLFxuICAgIHBsYWNlaG9sZGVyOiAncGFnZXMnLFxuICAgIG5hbWU6ICdwYWdlcycsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbWlubGVuZ3RoOiAxLFxuICB9KTtcbiAgcGFnZXNMaW5lLmFwcGVuZENoaWxkKHBhZ2VzSW5wdXQpO1xuICBmaWVsZFNldC5hcHBlbmRDaGlsZChwYWdlc0xpbmUpO1xuXG4gIC8vIFJlYWQgZW50cnkgbGluZVxuICBjb25zdCByZWFkTGluZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnZW50cnktbGluZSddLCB7fSk7XG4gIGNvbnN0IHJlYWRMYWJlbCA9IGNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgW10sIHsgZm9yOiAncmVhZCcgfSk7XG4gIHJlYWRMYWJlbC5pbm5lclRleHQgPSAnUmVhZCc7XG4gIHJlYWRMaW5lLmFwcGVuZENoaWxkKHJlYWRMYWJlbCk7XG4gIGNvbnN0IHJlYWRJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgWydyZWFkSW5wdXQnXSwge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgaWQ6ICdyZWFkJyxcbiAgICBuYW1lOiAncmVhZCcsXG4gIH0pO1xuICByZWFkTGluZS5hcHBlbmRDaGlsZChyZWFkSW5wdXQpO1xuICBmaWVsZFNldC5hcHBlbmRDaGlsZChyZWFkTGluZSk7XG5cbiAgLy8gQnV0dG9uc1xuICBjb25zdCBidXR0b25zID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydidXR0b24tY29udGFpbmVyJ10sIHt9KTtcbiAgY29uc3QgcmVzZXRCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBbJ3Jlc2V0QnRuJ10sIHtcbiAgICB0eXBlOiAncmVzZXQnLFxuICAgIG5hbWU6ICdyZXNlcicsXG4gIH0pO1xuICByZXNldEJ0bi50ZXh0Q29udGVudCA9ICdSZXNldCc7XG4gIGJ1dHRvbnMuYXBwZW5kQ2hpbGQocmVzZXRCdG4pO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIFsnc3VibWl0QnRuJ10sIHtcbiAgICB0eXBlOiAnc3VibWl0JyxcbiAgICBuYW1lOiAnc3VibWl0JyxcbiAgfSk7XG4gIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICBidXR0b25zLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XG5cbiAgZnVuY3Rpb24gY2xlYXJJbnB1dHMoKSB7XG4gICAgdGl0bGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIGF1dGhvcklucHV0LnZhbHVlID0gJyc7XG4gICAgcGFnZXNJbnB1dC52YWx1ZSA9ICcnO1xuICAgIHJlYWRJbnB1dC5jaGVja2VkID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNsZWFySW5wdXRzLFxuICAgIGdldCBtb2RhbEVsKCkge1xuICAgICAgcmV0dXJuIG1vZGFsRWw7XG4gICAgfSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGJvb2tNb2RhbDtcbiIsImltcG9ydCBMaWJyYXJ5IGZyb20gJy4vTGlicmFyeSc7XG5pbXBvcnQgQm9va0Rpc3BsYXkgZnJvbSAnLi9Cb29rRGlzcGxheSc7XG5pbXBvcnQgZGVsZXRlTW9kYWwgZnJvbSAnLi9Nb2RhbC1kZWxldGUnO1xuaW1wb3J0IGJvb2tNb2RhbCBmcm9tICcuL01vZGVsLWJvb2stZGV0YWlscyc7XG5cbmNvbnN0IFNjcmVlbkNvbnRyb2xsZXIgPSAoKGxpYnJhcnksIGRpc3BsYXkpID0+IHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtY29udGFpbmVyJyk7XG5cbiAgLy8gQXBwZW5kIHRoZSBtb2RhbHNcbiAgY29udGVudENvbnRhaW5lckVsLmFwcGVuZENoaWxkKGRlbGV0ZU1vZGFsLm1vZGFsRWwpO1xuICBjb250ZW50Q29udGFpbmVyRWwuYXBwZW5kQ2hpbGQoYm9va01vZGFsLm1vZGFsRWwpO1xuXG4gIC8vIERlbGV0ZSBjb25maXJtYXRpb24gbW9kYWwgYnV0dG9ucyBldmVudCBsaXN0ZW5lcnNcbiAgY29uc3QgZGVsQ29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWxldGUtY29uZmlybScpO1xuXG4gIGZ1bmN0aW9uIGRlbGV0ZUJvb2soZSwgaW5kZXgpIHtcbiAgICBsaWJyYXJ5LmRlbEJvb2soaW5kZXgpO1xuICAgIGRlbGV0ZU1vZGFsLm1vZGFsRWwuY2xvc2UoKTtcbiAgICBkaXNwbGF5LnJlbmRlcihsaWJyYXJ5LmJvb2tzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dEZWxNb2RhbChpbmRleCkge1xuICAgIGRlbGV0ZU1vZGFsLm1vZGFsRWwuc2hvd01vZGFsKCk7XG4gICAgY29uc3QgYm9va3RpdGxlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9vay10aXRsZScpO1xuICAgIGJvb2t0aXRsZUVsLmlubmVyVGV4dCA9IGxpYnJhcnkuYm9va3NbaW5kZXhdLnRpdGxlO1xuICAgIGRlbENvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiBkZWxldGVCb29rKGV2dCwgaW5kZXgpLCB7XG4gICAgICBvbmNlOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQm9vayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm1FbGVtcyA9IGUudGFyZ2V0LmVsZW1lbnRzO1xuICAgIGxpYnJhcnkuYWRkQm9vayhcbiAgICAgIGZvcm1FbGVtcy50aXRsZS52YWx1ZSxcbiAgICAgIGZvcm1FbGVtcy5hdXRob3IudmFsdWUsXG4gICAgICBmb3JtRWxlbXMucGFnZXMudmFsdWUsXG4gICAgICBmb3JtRWxlbXMucmVhZC5jaGVja2VkXG4gICAgKTtcbiAgICBib29rTW9kYWwubW9kYWxFbC5jbG9zZSgpO1xuICAgIGRpc3BsYXkucmVuZGVyKGxpYnJhcnkuYm9va3MpO1xuICB9XG5cbiAgZnVuY3Rpb24gb3BlbkFkZEJvb2tNb2RhbCgpIHtcbiAgICBib29rTW9kYWwubW9kYWxFbC5zaG93TW9kYWwoKTtcbiAgICBib29rTW9kYWwuY2xlYXJJbnB1dHMoKTtcbiAgICBib29rTW9kYWwubW9kYWxFbC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGRCb29rLCB7IG9uY2U6IHRydWUgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzb3J0Qm9va3MoZSkge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdzb3J0LWltZycpIHtcbiAgICAgIGNvbnN0IHNvcnRLZXkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5Jyk7XG4gICAgICBsaWJyYXJ5LnNvcnRCb29rcyhzb3J0S2V5KTtcbiAgICAgIGRpc3BsYXkucmVuZGVyKGxpYnJhcnkuYm9va3MpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUJvb2soZSwgaW5kZXgpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybUVsZW1zID0gZS50YXJnZXQuZWxlbWVudHM7XG4gICAgbGlicmFyeS51cGRhdGVCb29rKFxuICAgICAgaW5kZXgsXG4gICAgICBmb3JtRWxlbXMudGl0bGUudmFsdWUsXG4gICAgICBmb3JtRWxlbXMuYXV0aG9yLnZhbHVlLFxuICAgICAgZm9ybUVsZW1zLnBhZ2VzLnZhbHVlLFxuICAgICAgZm9ybUVsZW1zLnJlYWQuY2hlY2tlZFxuICAgICk7XG4gICAgYm9va01vZGFsLm1vZGFsRWwuY2xvc2UoKTtcbiAgICBkaXNwbGF5LnJlbmRlcihsaWJyYXJ5LmJvb2tzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vZGlmeUJvb2soZSkge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdyZWFkLXN0YXR1cycpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWtleScpO1xuICAgICAgbGlicmFyeS50b2dnbGVCb29rKGluZGV4KTtcbiAgICAgIGRpc3BsYXkucmVuZGVyKGxpYnJhcnkuYm9va3MpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnZGVsLWJ0bicpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWtleScpO1xuICAgICAgc2hvd0RlbE1vZGFsKGluZGV4KTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2VkaXQtYnRuJykge1xuICAgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5Jyk7XG4gICAgICBjb25zdCBib29rID0gbGlicmFyeS5ib29rc1tpbmRleF07XG5cbiAgICAgIGJvb2tNb2RhbC5tb2RhbEVsLnNob3dNb2RhbCgpO1xuXG4gICAgICAvLyBCb29rIGRldGFpbHMgZm9ybSBlbGVtZW50c1xuICAgICAgY29uc3QgZm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2stZGV0YWlscy1mb3JtJyk7XG4gICAgICBjb25zdCBmb3JtRWxlbXMgPSBmb3JtRWwuZWxlbWVudHM7XG5cbiAgICAgIC8vIEZpbGwgdGhlIGZvcm0gd2l0aCBzZWxlY3RlZCBib29rIGRldGFpbHNcbiAgICAgIGZvcm1FbGVtcy50aXRsZS52YWx1ZSA9IGJvb2sudGl0bGU7XG4gICAgICBmb3JtRWxlbXMuYXV0aG9yLnZhbHVlID0gYm9vay5hdXRob3I7XG4gICAgICBmb3JtRWxlbXMucGFnZXMudmFsdWUgPSBib29rLnBhZ2VzO1xuICAgICAgZm9ybUVsZW1zLnJlYWQuY2hlY2tlZCA9IGJvb2sucmVhZDtcblxuICAgICAgYm9va01vZGFsLm1vZGFsRWwuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ3N1Ym1pdCcsXG4gICAgICAgIChldnQpID0+IHVwZGF0ZUJvb2soZXZ0LCBpbmRleCksXG4gICAgICAgIHtcbiAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgLy8gRXZlbnQgbGlzdG5lciBmb3IgdGhlIGFkZCBib29rIGJ1dHRvblxuICAgIGNvbnN0IGFkZEJvb2tJbWdFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRCb29rSW1nJyk7XG4gICAgYWRkQm9va0ltZ0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkFkZEJvb2tNb2RhbCk7XG5cbiAgICAvLyBFdmVudCBsaXN0ZW5lcnMgZm9yIHRoZSBzb3J0IGJ1dHRvbnMgaW4gdGhlIHRhYmxlIGhlYWRcbiAgICBjb25zdCB0aGVhZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGhlYWQnKTtcbiAgICB0aGVhZEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc29ydEJvb2tzKTtcblxuICAgIC8vIEV2ZW50IGxpc3RlbmVyIGZvciB0aGUgYnV0dG9ucyBpbiB0aGUgYm9vayBsaXN0XG4gICAgbGlicmFyeS5nZXRGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgQm9va0Rpc3BsYXkucmVuZGVyKGxpYnJhcnkuYm9va3MpO1xuICAgIGRpc3BsYXkuZGlzcGxheUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW9kaWZ5Qm9vayk7XG4gIH1cblxuICByZXR1cm4geyBpbml0IH07XG59KShMaWJyYXJ5LCBCb29rRGlzcGxheSk7XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmVlbkNvbnRyb2xsZXI7XG4iLCIvLyBBIHV0aWl0eSBmdW5jaXRvbiB0aGF0IHNpbXBsaWZpZXMgSFRNTCBlbGVtZW50IGNyZWF0aW9uXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY2xhc3NBcnJheSwgYXR0ck9iaikge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NBcnJheSk7XG5cbiAgZm9yIChjb25zdCBhdHRyIGluIGF0dHJPYmopIHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyT2JqW2F0dHJdKTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFNjcmVlbkNvbnRyb2xsZXIgZnJvbSAnLi9TY3JlZW5Db250cm9sbGVyJztcblxuU2NyZWVuQ29udHJvbGxlci5pbml0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=