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
  const form = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('form', [], {});
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

      // formEl.showModal();
      _Model_book_details__WEBPACK_IMPORTED_MODULE_3__["default"].modalEl.showModal();

      // Book details form elements
      const titleEl = document.querySelector('#title');
      const authorEl = document.querySelector('#author');
      const pagesEl = document.querySelector('#pages');
      const readEl = document.querySelector('#read');

      // Fill the form with selected book details
      titleEl.value = book.title;
      authorEl.value = book.author;
      pagesEl.value = book.pages;
      readEl.checked = book.read;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7QUFFZTtBQUNmOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNaQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUM2Qjs7QUFFbEQsOERBQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL0Jvb2suanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9Cb29rRGlzcGxheS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL0xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9Nb2RhbC1kZWxldGUuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9Nb2RlbC1ib29rLWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS8uL3NyYy9TY3JlZW5Db250cm9sbGVyLmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2xpYnJhcnkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9saWJyYXJ5Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BcmNoaXRlY3RzK0RhdWdodGVyKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjOTRiNDlmO1xcbn1cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZDogI2ZjZjhlODtcXG4gIHdpZHRoOiBjbGFtcCg0NjBweCwgMTAwJSwgMTAwMHB4KTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5tYWluIHtcXG4gIHdpZHRoOiBjbGFtcCg0NjBweCwgODAlLCA4MDBweCk7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmNmOGU4O1xcbiAgcGFkZGluZzogMCAwLjVyZW0gMCAwLjVyZW07XFxuICBoZWlnaHQ6IDhyZW07XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxufVxcblxcbi5sb2dvIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtZmFtaWx5OiAnQXJjaGl0ZWN0cyBEYXVnaHRlcic7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFkZEJvb2tJbWcge1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi8qICAqL1xcbi8qIFRhYmxlIHN0eWxpbmcgKi9cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4vKiBUYWJsZSBoZWFkZXIgKi9cXG50aGVhZCB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiA4cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjYjM5MDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG50aCB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbnRoZWFkID4gdHIgPiA6bnRoLWNoaWxkKDEpIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxudGhlYWQgPiB0ciA+IDpudGgtY2hpbGQoMikge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbn1cXG50aGVhZCA+IHRyID4gOm50aC1jaGlsZCgzKSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbn1cXG50aGVhZCA+IHRyID4gOm50aC1jaGlsZCg0KSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxuLnNvcnQtaW1nIHtcXG4gIHdpZHRoOiAxLjNyZW07XFxufVxcblxcbi8qIFRhYmxlIGJvZHkgY29sdW1ucyAqL1xcbnRib2R5ID4gdHIgPiA6bnRoLWNoaWxkKDEpIHtcXG4gIHdpZHRoOiA0MCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbnRib2R5ID4gdHIgPiA6bnRoLWNoaWxkKDIpIHtcXG4gIHdpZHRoOiAyMCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG50Ym9keSA+IHRyID4gOm50aC1jaGlsZCgzKSB7XFxuICB3aWR0aDogMTUlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjJyZW07XFxufVxcbnRib2R5ID4gdHIgPiA6bnRoLWNoaWxkKDQpIHtcXG4gIHdpZHRoOiAxNSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbnRib2R5ID4gdHIgPiA6bnRoLWNoaWxkKDUpIHtcXG4gIHdpZHRoOiAxMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIEltYWdlcyAqL1xcbmltZyB7XFxuICB3aWR0aDogMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuaW1nOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNSUpO1xcbn1cXG5cXG4vKiBUYWJsZSByb3dzICovXFxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZWU1ZDA7XFxufVxcbnRib2R5ID4gdHI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaG9uZXlkZXc7XFxufVxcblxcbi8qIFRhYmxlIGNlbGxzICovXFxudGQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LWZhbWlseTogJ0FyY2hpdGVjdHMgRGF1Z2h0ZXInO1xcbiAgcGFkZGluZzogMC4ycmVtIDA7XFxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICNkZGQ7XFxufVxcblxcbi8qIEZvcm0gKi9cXG4jYm9vay1mb3JtIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB3aWR0aDogNDgwcHg7XFxuICBiYWNrZ3JvdW5kOiAjOWFiM2EwO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmJvb2stZm9ybS1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW46IDFyZW0gMC41cmVtO1xcbn1cXG5cXG4uYm9vay1mb3JtLWNsb3NlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJvb2stZm9ybS1jbG9zZTpob3ZlciB7XFxuICBzY2FsZTogMS4yO1xcbiAgY29sb3I6IGRhcmtyZWQ7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIGJhY2tncm91bmQ6ICNmY2Y4ZWE7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGNvbG9yOiAjMTExO1xcbn1cXG5cXG4uZW50cnktbGluZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwLjVyZW07XFxufVxcblxcbmxhYmVsIHtcXG4gIGZsZXg6IDI7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6ICdBcmNoaXRlY3RzIERhdWdodGVyJztcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBmbGV4OiA1O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5pbnB1dDp2YWxpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmZmYxO1xcbn1cXG5cXG5pbnB1dDppbnZhbGlkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTc4Nzg2YztcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogIzk0ZDRmNjtcXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICB3aWR0aDogMTAwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjE7XFxufVxcblxcbi8qIERlbGV0ZSBjb25maXJtYXRpb24gcG9wdXAgKi9cXG4jZGVsZXRlLWFsZXJ0IHtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB3aWR0aDogNDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU3Yzc4O1xcbiAgcGFkZGluZzogMXJlbSAxcmVtIDAgMXJlbTtcXG59XFxuXFxuLmRlbGV0ZS1hbGVydC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZDogI2ZiZjhlYTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbiNib29rLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLyogQm90dG9tIG9mIHRoZSBwYWdlICovXFxuLmNhcmUge1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7QUFDZDs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxtQkFB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YixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BcmNoaXRlY3RzK0RhdWdodGVyJyk7XFxuXFxuKiB7XFxuICBtYXJnaW46IDBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjOTRiNDlmO1xcbn1cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZDogI2ZjZjhlODtcXG4gIHdpZHRoOiBjbGFtcCg0NjBweCwgMTAwJSwgMTAwMHB4KTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5tYWluIHtcXG4gIHdpZHRoOiBjbGFtcCg0NjBweCwgODAlLCA4MDBweCk7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmNmOGU4O1xcbiAgcGFkZGluZzogMCAwLjVyZW0gMCAwLjVyZW07XFxuICBoZWlnaHQ6IDhyZW07XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxufVxcblxcbi5sb2dvIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtZmFtaWx5OiAnQXJjaGl0ZWN0cyBEYXVnaHRlcic7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFkZEJvb2tJbWcge1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi8qICAqL1xcbi8qIFRhYmxlIHN0eWxpbmcgKi9cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4vKiBUYWJsZSBoZWFkZXIgKi9cXG50aGVhZCB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiA4cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjYjM5MDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG50aCB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbnRoZWFkID4gdHIgPiA6bnRoLWNoaWxkKDEpIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxudGhlYWQgPiB0ciA+IDpudGgtY2hpbGQoMikge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbn1cXG50aGVhZCA+IHRyID4gOm50aC1jaGlsZCgzKSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbn1cXG50aGVhZCA+IHRyID4gOm50aC1jaGlsZCg0KSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG59XFxuLnNvcnQtaW1nIHtcXG4gIHdpZHRoOiAxLjNyZW07XFxufVxcblxcbi8qIFRhYmxlIGJvZHkgY29sdW1ucyAqL1xcbnRib2R5ID4gdHIgPiA6bnRoLWNoaWxkKDEpIHtcXG4gIHdpZHRoOiA0MCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbnRib2R5ID4gdHIgPiA6bnRoLWNoaWxkKDIpIHtcXG4gIHdpZHRoOiAyMCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG50Ym9keSA+IHRyID4gOm50aC1jaGlsZCgzKSB7XFxuICB3aWR0aDogMTUlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjJyZW07XFxufVxcbnRib2R5ID4gdHIgPiA6bnRoLWNoaWxkKDQpIHtcXG4gIHdpZHRoOiAxNSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbnRib2R5ID4gdHIgPiA6bnRoLWNoaWxkKDUpIHtcXG4gIHdpZHRoOiAxMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIEltYWdlcyAqL1xcbmltZyB7XFxuICB3aWR0aDogMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuaW1nOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNSUpO1xcbn1cXG5cXG4vKiBUYWJsZSByb3dzICovXFxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZWU1ZDA7XFxufVxcbnRib2R5ID4gdHI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaG9uZXlkZXc7XFxufVxcblxcbi8qIFRhYmxlIGNlbGxzICovXFxudGQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LWZhbWlseTogJ0FyY2hpdGVjdHMgRGF1Z2h0ZXInO1xcbiAgcGFkZGluZzogMC4ycmVtIDA7XFxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICNkZGQ7XFxufVxcblxcbi8qIEZvcm0gKi9cXG4jYm9vay1mb3JtIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB3aWR0aDogNDgwcHg7XFxuICBiYWNrZ3JvdW5kOiAjOWFiM2EwO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmJvb2stZm9ybS1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW46IDFyZW0gMC41cmVtO1xcbn1cXG5cXG4uYm9vay1mb3JtLWNsb3NlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJvb2stZm9ybS1jbG9zZTpob3ZlciB7XFxuICBzY2FsZTogMS4yO1xcbiAgY29sb3I6IGRhcmtyZWQ7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIGJhY2tncm91bmQ6ICNmY2Y4ZWE7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGNvbG9yOiAjMTExO1xcbn1cXG5cXG4uZW50cnktbGluZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwLjVyZW07XFxufVxcblxcbmxhYmVsIHtcXG4gIGZsZXg6IDI7XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6ICdBcmNoaXRlY3RzIERhdWdodGVyJztcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBmbGV4OiA1O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5pbnB1dDp2YWxpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmZmYxO1xcbn1cXG5cXG5pbnB1dDppbnZhbGlkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTc4Nzg2YztcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZDogIzk0ZDRmNjtcXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICB3aWR0aDogMTAwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjE7XFxufVxcblxcbi8qIERlbGV0ZSBjb25maXJtYXRpb24gcG9wdXAgKi9cXG4jZGVsZXRlLWFsZXJ0IHtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB3aWR0aDogNDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU3Yzc4O1xcbiAgcGFkZGluZzogMXJlbSAxcmVtIDAgMXJlbTtcXG59XFxuXFxuLmRlbGV0ZS1hbGVydC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZDogI2ZiZjhlYTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbiNib29rLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLyogQm90dG9tIG9mIHRoZSBwYWdlICovXFxuLmNhcmUge1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IEJvb2sgPSAodGl0bGUsIGF1dGhvciwgcGFnZXMsIHJlYWQpID0+ICh7XG4gIHRpdGxlLFxuICBhdXRob3IsXG4gIHBhZ2VzLFxuICAvLyBVc2luZyBhIGdldHRlciBnZXQgd2l0aG91dCBhIHNldHRlciBzZXQgbWFrZXMgaXQgc28gdGhhdCB5b3UgY2FuIHJlYWQgdGhhdCBwcm9wZXJ0eVxuICAvLyBvZiB0aGUgb2JqZWN0LCBidXQgeW91IGNhbm5vdCBjaGFuZ2UgaXQncyB2YWx1ZS5cbiAgLy8gVGhlIG9ubHkgd2F5IHRvIGNoYW5nZSB0aGUgdmFsdWUgb2YgcmVhZCBpbiB0aGlzIGNhc2UgaXMgdG8gdXNlIHRoZSB0b2dnbGVSZWFkIGZ1bmN0aW9uLlxuICBnZXQgcmVhZCgpIHtcbiAgICByZXR1cm4gcmVhZDtcbiAgfSxcbiAgLy8gSSBhZGRlZCB0aGlzIHNldHRlciBiZWNhdXNlIEkgd2FudCB1c2VyIHRvIGJlIGFibGUgdG8gY2hhbmdlIGl0J3MgdmFsdWVcbiAgc2V0IHJlYWQodmFsdWUpIHtcbiAgICByZWFkID0gdmFsdWU7XG4gIH0sXG4gIC8vIElmIEkgZG8gbm90IGhhdmUgdGhlIGdldHRlci9zZXR0ZXIsIHRvZ2dsZVJlYWQoKSBkb2VzIG5vdCB3b3JrXG4gIC8vIEl0IHRvZ2dsZXMgdGhlIHZhbHVlIG9mIHJlYWQgaW4gdGhlIGZ1bmN0aW9uLFxuICAvLyBidXQgZG9lcyBub3QgdG9nZ2xlIHRoZSB2YWx1ZSBvZiByZWFkIGluIHRoZSBvYmplY3RcbiAgdG9nZ2xlUmVhZCgpIHtcbiAgICByZWFkID0gIXJlYWQ7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQm9vaztcblxuLy8gVE9ETzogQ29uc2lkZXIgdXNpbmcgT2JqZWN0LmZyZWV6ZVxuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcbmltcG9ydCByZWFkSWNvbiBmcm9tICcuL2ltYWdlcy9pY29uczgtY2hlY2tlZC1jaGVja2JveC05Ni5wbmcnO1xuaW1wb3J0IHJlYWRpbmdJY29uIGZyb20gJy4vaW1hZ2VzL2ljb25zOC1wcm9jZXNzLTk2LnBuZyc7XG5pbXBvcnQgZWRpdEljb24gZnJvbSAnLi9pbWFnZXMvaWNvbnM4LWNvbXBvc2UtOTYucG5nJztcbmltcG9ydCBkZWxldGVJY29uIGZyb20gJy4vaW1hZ2VzL3JlbW92ZS5wbmcnO1xuXG5jb25zdCBCb29rRGlzcGxheSA9ICgoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Rib2R5Jyk7XG5cbiAgZnVuY3Rpb24gZGlzcGxheUJvb2soYm9vaywgaW5kZXgpIHtcbiAgICBjb25zdCBib29rUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcblxuICAgIGNvbnN0IGJvb2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgYm9va1RpdGxlLmlubmVyVGV4dCA9IGJvb2sudGl0bGU7XG4gICAgYm9va1Jvdy5hcHBlbmRDaGlsZChib29rVGl0bGUpO1xuXG4gICAgY29uc3QgYm9va0F1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgYm9va0F1dGhvci5pbm5lclRleHQgPSBib29rLmF1dGhvcjtcbiAgICBib29rUm93LmFwcGVuZENoaWxkKGJvb2tBdXRob3IpO1xuXG4gICAgY29uc3QgYm9va1BhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBib29rUGFnZXMuaW5uZXJUZXh0ID0gYm9vay5wYWdlcztcbiAgICBib29rUm93LmFwcGVuZENoaWxkKGJvb2tQYWdlcyk7XG5cbiAgICBjb25zdCBib29rUmVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY29uc3QgYm9va1JlYWRJbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCBbJ3JlYWQtc3RhdHVzJ10sIHtcbiAgICAgICdkYXRhLWtleSc6IGluZGV4LFxuICAgIH0pO1xuICAgIGJvb2tSZWFkLmFwcGVuZENoaWxkKGJvb2tSZWFkSW1nKTtcbiAgICBib29rUmVhZEltZy5zcmMgPSBib29rLnJlYWQgPyByZWFkSWNvbiA6IHJlYWRpbmdJY29uO1xuICAgIGJvb2tSb3cuYXBwZW5kQ2hpbGQoYm9va1JlYWQpO1xuXG4gICAgY29uc3QgYm9va0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNvbnN0IGJvb2tFZGl0SW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJywgWydlZGl0LWJ0biddLCB7XG4gICAgICAnZGF0YS1rZXknOiBpbmRleCxcbiAgICB9KTtcbiAgICBib29rRWRpdEltZy5zcmMgPSBlZGl0SWNvbjtcbiAgICBib29rRWRpdC5hcHBlbmRDaGlsZChib29rRWRpdEltZyk7XG5cbiAgICBjb25zdCBib29rUmVtb3ZlSW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJywgWydkZWwtYnRuJ10sIHtcbiAgICAgICdkYXRhLWtleSc6IGluZGV4LFxuICAgIH0pO1xuICAgIGJvb2tSZW1vdmVJbWcuc3JjID0gZGVsZXRlSWNvbjtcbiAgICBib29rRWRpdC5hcHBlbmRDaGlsZChib29rUmVtb3ZlSW1nKTtcblxuICAgIGJvb2tSb3cuYXBwZW5kQ2hpbGQoYm9va0VkaXQpO1xuXG4gICAgZGlzcGxheUVsLmFwcGVuZENoaWxkKGJvb2tSb3cpO1xuICB9XG4gIFxuICBmdW5jdGlvbiByZW5kZXIoYm9va3MpIHtcbiAgICBkaXNwbGF5RWwuaW5uZXJUZXh0ID0gJyc7XG4gICAgYm9va3MuZm9yRWFjaCgoYm9vaykgPT4ge1xuICAgICAgZGlzcGxheUJvb2soYm9vaywgYm9va3MuaW5kZXhPZihib29rKSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlbmRlcixcbiAgICBnZXQgZGlzcGxheUVsKCkge1xuICAgICAgcmV0dXJuIGRpc3BsYXlFbDtcbiAgICB9LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQm9va0Rpc3BsYXk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0IEJvb2sgZnJvbSAnLi9Cb29rJztcblxuLy8gTGlicmFyeSBpcyBhbiBvYmplY3QgdGhhdCBpbmNsdWRlcyB0aGUgbGlicmFyeSBhcnJheSBhbmQgdGhlIGFzc29jaWF0ZWQgbWV0aG9kc1xuY29uc3QgTGlicmFyeSA9ICgoKSA9PiB7XG4gIGNvbnN0IGxpYnJhcnkgPSBbXTtcblxuICBmdW5jdGlvbiBzYXZlVG9Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215TGlicmFyeScsIEpTT04uc3RyaW5naWZ5KGxpYnJhcnkpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgY29uc3QganNvbkFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlMaWJyYXJ5JykpO1xuICAgIGlmICghanNvbkFycmF5IHx8IGpzb25BcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIElmIGFycmF5IGlzIGVtcHR5LCBwb3B1bGF0ZSBpdCB3aXRoIGEgZmV3IGJvb2tzXG4gICAgICBhZGRCb29rKCdMb3JkIG9mIHRoZSBSaW5ncycsICdKLiBSLiBSLlRvbGtpbicsIDkyNTAsIHRydWUpO1xuICAgICAgYWRkQm9vaygnQSBHYW1lIG9mIFRocm9uZXMnLCAnR2VvcmdlIFIuIFIuIE1hcnRpbicsIDY5NCwgZmFsc2UpO1xuICAgICAgYWRkQm9vaygnSGFycnkgUG90dGVyJywgJ0ouIEsuIFJvd2xpbmcnLCA2MDcsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvLyBDb252ZXJ0IGphc29uQXJyYXkgaW50byBhIGxpc3Qgb2YgQm9vayBvYmplY3RzXG4gICAgLy8gYmVjYXVzZSBCb29rIG9iamVjdHMgaGF2ZSBtZXRob2RzIGluIGFkZGl0aW9uIHRvIHByb3BlcnRpZXNcbiAgICAvLyBUaGVuIHB1c2ggZWFjaCBCb29rIG9iamVjdCBpbnRvIHRoZSBjb25zdCBsaWJyYXJ5XG4gICAgbGlicmFyeS5wdXNoKFxuICAgICAgLi4uanNvbkFycmF5Lm1hcCgoanNvbkJvb2spID0+XG4gICAgICAgIEJvb2soanNvbkJvb2sudGl0bGUsIGpzb25Cb29rLmF1dGhvciwganNvbkJvb2sucGFnZXMsIGpzb25Cb29rLnJlYWQpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEJvb2sodGl0bGUsIGF1dGhvciwgcGFnZXMsIHJlYWQpIHtcbiAgICBjb25zdCBuZXdCb29rID0gQm9vayh0aXRsZSwgYXV0aG9yLCBwYWdlcywgcmVhZCk7XG4gICAgbGlicmFyeS5wdXNoKG5ld0Jvb2spO1xuICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQm9vayhpbmRleCwgdGl0bGUsIGF1dGhvciwgcGFnZXMsIHJlYWQpIHtcbiAgICBjb25zdCBib29rID0gbGlicmFyeVtpbmRleF07XG4gICAgYm9vay50aXRsZSA9IHRpdGxlO1xuICAgIGJvb2suYXV0aG9yID0gYXV0aG9yO1xuICAgIGJvb2sucGFnZXMgPSBwYWdlcztcbiAgICBib29rLnJlYWQgPSByZWFkO1xuICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlQm9vayhpbmRleCkge1xuICAgIGxpYnJhcnlbaW5kZXhdLnRvZ2dsZVJlYWQoKTtcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbEJvb2soaW5kZXgpIHtcbiAgICBsaWJyYXJ5LnNwbGljZShpbmRleCwgMSk7XG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gIH1cblxuICAvLyBTb3J0aW5nIGZ1bmN0aW9uc1xuICBsZXQgc29ydFRpdGxlQXNjZW5kID0gdHJ1ZTtcbiAgbGV0IHNvcnRBdXRob3JBc2NlbmQgPSB0cnVlO1xuICBsZXQgc29ydFBhZ2VzQXNjZW5kID0gdHJ1ZTtcbiAgbGV0IHNvcnRSZWFkQXNjZW5kID0gdHJ1ZTtcblxuICBmdW5jdGlvbiBzb3J0QnlLZXkoYXJyYXksIGtleSwgc29ydEFzY2VuZCkge1xuICAgIHJldHVybiBhcnJheS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAvLyBTb3J0IHBhZ2VzIGFzIG51bWJlcnNcbiAgICAgIGlmIChrZXkgPT09ICdwYWdlcycpIHtcbiAgICAgICAgaWYgKHNvcnRBc2NlbmQpIHtcbiAgICAgICAgICByZXR1cm4gK2Fba2V5XSA8ICtiW2tleV0gPyAtMSA6IDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICthW2tleV0gPiArYltrZXldID8gLTEgOiAxO1xuICAgICAgfVxuICAgICAgLy8gU29ydCB0aXRsZSwgYXV0aG9yIGFzIHN0cmluZ3NcbiAgICAgIGlmIChzb3J0QXNjZW5kKSB7XG4gICAgICAgIHJldHVybiBhW2tleV0gPCBiW2tleV0gPyAtMSA6IDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gYVtrZXldID4gYltrZXldID8gLTEgOiAxO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc29ydEJvb2tzKGtleSkge1xuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlICd0aXRsZSc6XG4gICAgICAgIHNvcnRCeUtleShsaWJyYXJ5LCBrZXksIHNvcnRUaXRsZUFzY2VuZCk7XG4gICAgICAgIHNvcnRUaXRsZUFzY2VuZCA9ICFzb3J0VGl0bGVBc2NlbmQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYXV0aG9yJzpcbiAgICAgICAgc29ydEJ5S2V5KGxpYnJhcnksIGtleSwgc29ydEF1dGhvckFzY2VuZCk7XG4gICAgICAgIHNvcnRBdXRob3JBc2NlbmQgPSAhc29ydEF1dGhvckFzY2VuZDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwYWdlcyc6XG4gICAgICAgIHNvcnRCeUtleShsaWJyYXJ5LCBrZXksIHNvcnRQYWdlc0FzY2VuZCk7XG4gICAgICAgIHNvcnRQYWdlc0FzY2VuZCA9ICFzb3J0UGFnZXNBc2NlbmQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmVhZCc6XG4gICAgICAgIHNvcnRCeUtleShsaWJyYXJ5LCBrZXksIHNvcnRSZWFkQXNjZW5kKTtcbiAgICAgICAgc29ydFJlYWRBc2NlbmQgPSAhc29ydFJlYWRBc2NlbmQ7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFkZEJvb2ssXG4gICAgdXBkYXRlQm9vayxcbiAgICB0b2dnbGVCb29rLFxuICAgIGRlbEJvb2ssXG4gICAgc29ydEJvb2tzLFxuICAgIGdldEZyb21Mb2NhbFN0b3JhZ2UsXG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlLFxuICAgIC8vID8gV2hhdCBpcyBkaWZmZXJlbmNlIGJldHdlZW4gdXNpbmcgZ2V0IGFuZCBhY2Nlc3MgbGlicmFyeVtdXG4gICAgLy8gRXZlbiBpZiB5b3UgZnJlZXplIHRoZSBvYmplY3QsIHRoZSBhcnJheSBjb3VsZCBzdGlsbCBiZSBtb2RpZmllZC5cbiAgICAvLyBFdmVuIGlmIHlvdSB1c2VkIGEgZ2V0dGVyLSB0aGUgYXJyYXkgY291bGQgc3RpbGwgYmUgbW9kaWZpZWQgaWYgeW91IGFyZW4ndCBjYXJlZnVsIVxuICAgIC8vIFRvIHByb3RlY3QgdGhlIGFycmF5LCB5b3UgY2FuIHVzZSBhIGdldHRlciBmdW5jdGlvbiB0aGF0IG9ubHkgZXZlciByZXR1cm5zXG4gICAgLy8gYSBjb3B5IG9mIHRoZSBhcnJheSAoaGVuY2UgYSBkaWZmZXJlbnQgYXJlYSBpbiBtZW1vcnksXG4gICAgLy8gcHJldmVudGluZyB0aGUgb3JpZ2luYWwgYXJlYSBpbiBtZW1vcnkgZnJvbSBiZWluZyBjaGFuZ2VkKS5cbiAgICBnZXQgYm9va3MoKSB7XG4gICAgICByZXR1cm4gWy4uLmxpYnJhcnldO1xuICAgIH0sXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBMaWJyYXJ5O1xuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGVFbGVtZW50JztcbmltcG9ydCBhbGVydEljb24gZnJvbSAnLi9pbWFnZXMvaWNvbnM4LWVycm9yLTk2LnBuZyc7XG5cbmNvbnN0IGRlbGV0ZU1vZGFsID0gKCgpID0+IHtcbiAgY29uc3QgbW9kYWxFbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycsIFtdLCB7XG4gICAgaWQ6ICdkZWxldGUtYWxlcnQnLFxuICB9KTtcblxuICAvLyBBbGVydCBtZXNzYWdlXG4gIGNvbnN0IGFsZXJ0Q29udGFpbmVyRGl2ID0gY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICBbJ2RlbGV0ZS1hbGVydC1jb250YWluZXInXSxcbiAgICB7fVxuICApO1xuICBjb25zdCBpbWdFbCA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIFtdLCB7IHNyYzogYWxlcnRJY29uIH0pO1xuICBhbGVydENvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChpbWdFbCk7XG4gIGNvbnN0IHBFbCA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCBbXSwge30pO1xuICBwRWwuaW5uZXJUZXh0ID0gXCJQbGVhc2UgY29uZmlybSB0aGF0IHlvdSdkIGxpa2UgdG8gZGVsZXRlIHRoZSBib29rIFwiO1xuICBhbGVydENvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChwRWwpO1xuICBjb25zdCBzcGFuRWwgPSBjcmVhdGVFbGVtZW50KCdzcGFuJywgW10sIHsgaWQ6ICdib29rLXRpdGxlJyB9KTtcbiAgcEVsLmFwcGVuZENoaWxkKHNwYW5FbCk7XG4gIG1vZGFsRWwuYXBwZW5kQ2hpbGQoYWxlcnRDb250YWluZXJEaXYpO1xuXG4gIC8vIEJ1dHRvbnNcbiAgY29uc3QgYnRuQ29udGFpbmVyRGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydidXR0b24tY29udGFpbmVyJ10sIHt9KTtcbiAgLy8gQ2FuY2VsIGJ1dHRvblxuICBjb25zdCBjYW5jZWxCdG5FbCA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIFtdLCB7XG4gICAgaWQ6ICdkZWxldGUtY2FuY2VsJyxcbiAgfSk7XG4gIGNhbmNlbEJ0bkVsLmlubmVyVGV4dCA9ICdDYW5jZWwnO1xuICBidG5Db250YWluZXJEaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuRWwpO1xuICBjYW5jZWxCdG5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRlbGV0ZU1vZGFsLm1vZGFsRWwuY2xvc2UoKSk7XG4gIC8vIENvbmZpcm0gYnV0dG9uXG4gIGNvbnN0IGNvbmZpcm1CdG5FbCA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIFtdLCB7XG4gICAgaWQ6ICdkZWxldGUtY29uZmlybScsXG4gIH0pO1xuICBjb25maXJtQnRuRWwuaW5uZXJUZXh0ID0gJ0NvbmZpcm0nO1xuICBidG5Db250YWluZXJEaXYuYXBwZW5kQ2hpbGQoY29uZmlybUJ0bkVsKTtcbiAgbW9kYWxFbC5hcHBlbmRDaGlsZChidG5Db250YWluZXJEaXYpO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IG1vZGFsRWwoKSB7XG4gICAgICByZXR1cm4gbW9kYWxFbDtcbiAgICB9LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlTW9kYWw7XG4iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnQnO1xuXG5jb25zdCBib29rTW9kYWwgPSAoKCkgPT4ge1xuICBjb25zdCBtb2RhbEVsID0gY3JlYXRlRWxlbWVudCgnZGlhbG9nJywgW10sIHsgaWQ6ICdib29rLWZvcm0nIH0pO1xuICBjb25zdCBmb3JtID0gY3JlYXRlRWxlbWVudCgnZm9ybScsIFtdLCB7fSk7XG4gIG1vZGFsRWwuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgLy8gRm9ybSBoZWFkZXJcbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydib29rLWZvcm0taGVhZGVyJ10sIHt9KTtcbiAgY29uc3QgZm9ybVRpdGxlID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydib29rLWZvcm0tdGl0bGUnXSwge30pO1xuICBmb3JtVGl0bGUuaW5uZXJUZXh0ID0gJ0Jvb2sgZGV0YWlscyc7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuICBjb25zdCBmb3JtQ2xvc2UgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2Jvb2stZm9ybS1jbG9zZSddLCB7fSk7XG4gIGZvcm1DbG9zZS5pbm5lclRleHQgPSAneCc7XG4gIGZvcm1DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1vZGFsRWwuY2xvc2UoKSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChmb3JtQ2xvc2UpO1xuICBmb3JtLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgLy8gRmllbGRzZXRcbiAgY29uc3QgZmllbGRTZXQgPSBjcmVhdGVFbGVtZW50KCdmaWVsZHNldCcsIFtdLCB7fSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGRTZXQpO1xuXG4gIC8vIFRpdGxlIGVudHJ5IGxpbmVcbiAgY29uc3QgdGl0bGVMaW5lID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydlbnRyeS1saW5lJ10sIHt9KTtcbiAgY29uc3QgdGl0bGVMYWJlbCA9IGNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgW10sIHsgZm9yOiAndGl0bGUnIH0pO1xuICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9ICdUaXRsZSc7XG4gIHRpdGxlTGluZS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgWyd0aXRsZUlucHV0J10sIHtcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgaWQ6ICd0aXRsZScsXG4gICAgcGxhY2Vob2xkZXI6ICd0aXRsZScsXG4gICAgbmFtZTogJ3RpdGxlJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBtaW5sZW5ndGg6IDEsXG4gIH0pO1xuICB0aXRsZUxpbmUuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gIGZpZWxkU2V0LmFwcGVuZENoaWxkKHRpdGxlTGluZSk7XG5cbiAgLy8gQXV0aG9yIGVudHJ5IGxpbmVcbiAgY29uc3QgYXV0aG9yTGluZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnZW50cnktbGluZSddLCB7fSk7XG4gIGNvbnN0IGF1dGhvckxhYmVsID0gY3JlYXRlRWxlbWVudCgnbGFiZWwnLCBbXSwgeyBmb3I6ICdhdXRob3InIH0pO1xuICBhdXRob3JMYWJlbC5pbm5lclRleHQgPSAnQXV0aG9yJztcbiAgYXV0aG9yTGluZS5hcHBlbmRDaGlsZChhdXRob3JMYWJlbCk7XG4gIGNvbnN0IGF1dGhvcklucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBbJ2F1dGhvcklucHV0J10sIHtcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgaWQ6ICdhdXRob3InLFxuICAgIHBsYWNlaG9sZGVyOiAnYXV0aG9yJyxcbiAgICBuYW1lOiAnYXV0aG9yJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBtaW5sZW5ndGg6IDEsXG4gIH0pO1xuICBhdXRob3JMaW5lLmFwcGVuZENoaWxkKGF1dGhvcklucHV0KTtcbiAgZmllbGRTZXQuYXBwZW5kQ2hpbGQoYXV0aG9yTGluZSk7XG5cbiAgLy8gUGFnZXMgZW50cnkgbGluZVxuICBjb25zdCBwYWdlc0xpbmUgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBbJ2VudHJ5LWxpbmUnXSwge30pO1xuICBjb25zdCBwYWdlc0xhYmVsID0gY3JlYXRlRWxlbWVudCgnbGFiZWwnLCBbXSwgeyBmb3I6ICdwYWdlcycgfSk7XG4gIHBhZ2VzTGFiZWwuaW5uZXJUZXh0ID0gJ3BhZ2VzJztcbiAgcGFnZXNMaW5lLmFwcGVuZENoaWxkKHBhZ2VzTGFiZWwpO1xuICBjb25zdCBwYWdlc0lucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBbJ3BhZ2VzSW5wdXQnXSwge1xuICAgIHR5cGU6ICdudW1iZXInLFxuICAgIGlkOiAncGFnZXMnLFxuICAgIHBsYWNlaG9sZGVyOiAncGFnZXMnLFxuICAgIG5hbWU6ICdwYWdlcycsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbWlubGVuZ3RoOiAxLFxuICB9KTtcbiAgcGFnZXNMaW5lLmFwcGVuZENoaWxkKHBhZ2VzSW5wdXQpO1xuICBmaWVsZFNldC5hcHBlbmRDaGlsZChwYWdlc0xpbmUpO1xuXG4gIC8vIFJlYWQgZW50cnkgbGluZVxuICBjb25zdCByZWFkTGluZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIFsnZW50cnktbGluZSddLCB7fSk7XG4gIGNvbnN0IHJlYWRMYWJlbCA9IGNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgW10sIHsgZm9yOiAncmVhZCcgfSk7XG4gIHJlYWRMYWJlbC5pbm5lclRleHQgPSAnUmVhZCc7XG4gIHJlYWRMaW5lLmFwcGVuZENoaWxkKHJlYWRMYWJlbCk7XG4gIGNvbnN0IHJlYWRJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgWydyZWFkSW5wdXQnXSwge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgaWQ6ICdyZWFkJyxcbiAgICBuYW1lOiAncmVhZCcsXG4gIH0pO1xuICByZWFkTGluZS5hcHBlbmRDaGlsZChyZWFkSW5wdXQpO1xuICBmaWVsZFNldC5hcHBlbmRDaGlsZChyZWFkTGluZSk7XG5cbiAgLy8gQnV0dG9uc1xuICBjb25zdCBidXR0b25zID0gY3JlYXRlRWxlbWVudCgnZGl2JywgWydidXR0b24tY29udGFpbmVyJ10sIHt9KTtcbiAgY29uc3QgcmVzZXRCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBbJ3Jlc2V0QnRuJ10sIHtcbiAgICB0eXBlOiAncmVzZXQnLFxuICAgIG5hbWU6ICdyZXNlcicsXG4gIH0pO1xuICByZXNldEJ0bi50ZXh0Q29udGVudCA9ICdSZXNldCc7XG4gIGJ1dHRvbnMuYXBwZW5kQ2hpbGQocmVzZXRCdG4pO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIFsnc3VibWl0QnRuJ10sIHtcbiAgICB0eXBlOiAnc3VibWl0JyxcbiAgICBuYW1lOiAnc3VibWl0JyxcbiAgfSk7XG4gIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICBidXR0b25zLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XG5cbiAgZnVuY3Rpb24gY2xlYXJJbnB1dHMoKSB7XG4gICAgdGl0bGVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIGF1dGhvcklucHV0LnZhbHVlID0gJyc7XG4gICAgcGFnZXNJbnB1dC52YWx1ZSA9ICcnO1xuICAgIHJlYWRJbnB1dC5jaGVja2VkID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNsZWFySW5wdXRzLFxuICAgIGdldCBtb2RhbEVsKCkge1xuICAgICAgcmV0dXJuIG1vZGFsRWw7XG4gICAgfSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGJvb2tNb2RhbDtcbiIsImltcG9ydCBMaWJyYXJ5IGZyb20gJy4vTGlicmFyeSc7XG5pbXBvcnQgQm9va0Rpc3BsYXkgZnJvbSAnLi9Cb29rRGlzcGxheSc7XG5pbXBvcnQgZGVsZXRlTW9kYWwgZnJvbSAnLi9Nb2RhbC1kZWxldGUnO1xuaW1wb3J0IGJvb2tNb2RhbCBmcm9tICcuL01vZGVsLWJvb2stZGV0YWlscyc7XG5cbmNvbnN0IFNjcmVlbkNvbnRyb2xsZXIgPSAoKGxpYnJhcnksIGRpc3BsYXkpID0+IHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQtY29udGFpbmVyJyk7XG5cbiAgLy8gQXBwZW5kIHRoZSBtb2RhbHNcbiAgY29udGVudENvbnRhaW5lckVsLmFwcGVuZENoaWxkKGRlbGV0ZU1vZGFsLm1vZGFsRWwpO1xuICBjb250ZW50Q29udGFpbmVyRWwuYXBwZW5kQ2hpbGQoYm9va01vZGFsLm1vZGFsRWwpO1xuXG4gIC8vIERlbGV0ZSBjb25maXJtYXRpb24gbW9kYWwgYnV0dG9ucyBldmVudCBsaXN0ZW5lcnNcbiAgY29uc3QgZGVsQ29uZmlybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWxldGUtY29uZmlybScpO1xuXG4gIGZ1bmN0aW9uIGRlbGV0ZUJvb2soZSwgaW5kZXgpIHtcbiAgICBsaWJyYXJ5LmRlbEJvb2soaW5kZXgpO1xuICAgIGRlbGV0ZU1vZGFsLm1vZGFsRWwuY2xvc2UoKTtcbiAgICBkaXNwbGF5LnJlbmRlcihsaWJyYXJ5LmJvb2tzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dEZWxNb2RhbChpbmRleCkge1xuICAgIGRlbGV0ZU1vZGFsLm1vZGFsRWwuc2hvd01vZGFsKCk7XG4gICAgY29uc3QgYm9va3RpdGxlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9vay10aXRsZScpO1xuICAgIGJvb2t0aXRsZUVsLmlubmVyVGV4dCA9IGxpYnJhcnkuYm9va3NbaW5kZXhdLnRpdGxlO1xuICAgIGRlbENvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiBkZWxldGVCb29rKGV2dCwgaW5kZXgpLCB7XG4gICAgICBvbmNlOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQm9vayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm1FbGVtcyA9IGUudGFyZ2V0LmVsZW1lbnRzO1xuICAgIGxpYnJhcnkuYWRkQm9vayhcbiAgICAgIGZvcm1FbGVtcy50aXRsZS52YWx1ZSxcbiAgICAgIGZvcm1FbGVtcy5hdXRob3IudmFsdWUsXG4gICAgICBmb3JtRWxlbXMucGFnZXMudmFsdWUsXG4gICAgICBmb3JtRWxlbXMucmVhZC5jaGVja2VkXG4gICAgKTtcbiAgICBib29rTW9kYWwubW9kYWxFbC5jbG9zZSgpO1xuICAgIGRpc3BsYXkucmVuZGVyKGxpYnJhcnkuYm9va3MpO1xuICB9XG5cbiAgZnVuY3Rpb24gb3BlbkFkZEJvb2tNb2RhbCgpIHtcbiAgICBib29rTW9kYWwubW9kYWxFbC5zaG93TW9kYWwoKTtcbiAgICBib29rTW9kYWwuY2xlYXJJbnB1dHMoKTtcbiAgICBib29rTW9kYWwubW9kYWxFbC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGRCb29rLCB7IG9uY2U6IHRydWUgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzb3J0Qm9va3MoZSkge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdzb3J0LWltZycpIHtcbiAgICAgIGNvbnN0IHNvcnRLZXkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5Jyk7XG4gICAgICBsaWJyYXJ5LnNvcnRCb29rcyhzb3J0S2V5KTtcbiAgICAgIGRpc3BsYXkucmVuZGVyKGxpYnJhcnkuYm9va3MpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUJvb2soZSwgaW5kZXgpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybUVsZW1zID0gZS50YXJnZXQuZWxlbWVudHM7XG4gICAgbGlicmFyeS51cGRhdGVCb29rKFxuICAgICAgaW5kZXgsXG4gICAgICBmb3JtRWxlbXMudGl0bGUudmFsdWUsXG4gICAgICBmb3JtRWxlbXMuYXV0aG9yLnZhbHVlLFxuICAgICAgZm9ybUVsZW1zLnBhZ2VzLnZhbHVlLFxuICAgICAgZm9ybUVsZW1zLnJlYWQuY2hlY2tlZFxuICAgICk7XG4gICAgYm9va01vZGFsLm1vZGFsRWwuY2xvc2UoKTtcbiAgICBkaXNwbGF5LnJlbmRlcihsaWJyYXJ5LmJvb2tzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vZGlmeUJvb2soZSkge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdyZWFkLXN0YXR1cycpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWtleScpO1xuICAgICAgbGlicmFyeS50b2dnbGVCb29rKGluZGV4KTtcbiAgICAgIGRpc3BsYXkucmVuZGVyKGxpYnJhcnkuYm9va3MpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnZGVsLWJ0bicpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWtleScpO1xuICAgICAgc2hvd0RlbE1vZGFsKGluZGV4KTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2VkaXQtYnRuJykge1xuICAgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5Jyk7XG4gICAgICBjb25zdCBib29rID0gbGlicmFyeS5ib29rc1tpbmRleF07XG5cbiAgICAgIC8vIGZvcm1FbC5zaG93TW9kYWwoKTtcbiAgICAgIGJvb2tNb2RhbC5tb2RhbEVsLnNob3dNb2RhbCgpO1xuXG4gICAgICAvLyBCb29rIGRldGFpbHMgZm9ybSBlbGVtZW50c1xuICAgICAgY29uc3QgdGl0bGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICAgICAgY29uc3QgYXV0aG9yRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXV0aG9yJyk7XG4gICAgICBjb25zdCBwYWdlc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2VzJyk7XG4gICAgICBjb25zdCByZWFkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVhZCcpO1xuXG4gICAgICAvLyBGaWxsIHRoZSBmb3JtIHdpdGggc2VsZWN0ZWQgYm9vayBkZXRhaWxzXG4gICAgICB0aXRsZUVsLnZhbHVlID0gYm9vay50aXRsZTtcbiAgICAgIGF1dGhvckVsLnZhbHVlID0gYm9vay5hdXRob3I7XG4gICAgICBwYWdlc0VsLnZhbHVlID0gYm9vay5wYWdlcztcbiAgICAgIHJlYWRFbC5jaGVja2VkID0gYm9vay5yZWFkO1xuXG4gICAgICBib29rTW9kYWwubW9kYWxFbC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnc3VibWl0JyxcbiAgICAgICAgKGV2dCkgPT4gdXBkYXRlQm9vayhldnQsIGluZGV4KSxcbiAgICAgICAge1xuICAgICAgICAgIG9uY2U6IHRydWUsXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAvLyBFdmVudCBsaXN0bmVyIGZvciB0aGUgYWRkIGJvb2sgYnV0dG9uXG4gICAgY29uc3QgYWRkQm9va0ltZ0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZEJvb2tJbWcnKTtcbiAgICBhZGRCb29rSW1nRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuQWRkQm9va01vZGFsKTtcblxuICAgIC8vIEV2ZW50IGxpc3RlbmVycyBmb3IgdGhlIHNvcnQgYnV0dG9ucyBpbiB0aGUgdGFibGUgaGVhZFxuICAgIGNvbnN0IHRoZWFkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0aGVhZCcpO1xuICAgIHRoZWFkRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzb3J0Qm9va3MpO1xuXG4gICAgLy8gRXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBidXR0b25zIGluIHRoZSBib29rIGxpc3RcbiAgICBsaWJyYXJ5LmdldEZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICBCb29rRGlzcGxheS5yZW5kZXIobGlicmFyeS5ib29rcyk7XG4gICAgZGlzcGxheS5kaXNwbGF5RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb2RpZnlCb29rKTtcbiAgfVxuXG4gIHJldHVybiB7IGluaXQgfTtcbn0pKExpYnJhcnksIEJvb2tEaXNwbGF5KTtcblxuZXhwb3J0IGRlZmF1bHQgU2NyZWVuQ29udHJvbGxlcjtcbiIsIi8vIEEgdXRpaXR5IGZ1bmNpdG9uIHRoYXQgc2ltcGxpZmllcyBIVE1MIGVsZW1lbnQgY3JlYXRpb25cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjbGFzc0FycmF5LCBhdHRyT2JqKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc0FycmF5KTtcblxuICBmb3IgKGNvbnN0IGF0dHIgaW4gYXR0ck9iaikge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJPYmpbYXR0cl0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgU2NyZWVuQ29udHJvbGxlciBmcm9tICcuL1NjcmVlbkNvbnRyb2xsZXInO1xuXG5TY3JlZW5Db250cm9sbGVyLmluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==