/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}

button {
	font-family: sans-serif;
	cursor: pointer;
	text-transform: capitalize;
}

body {
	font-family: sans-serif;
	min-height: 100vh;
}

img {
	max-width: 100%;
}
label {
	text-transform: capitalize;
}

/* Header Styles */

header {
	padding: 1rem 0;
	background-color: #fff;
	display: flex;
	justify-content: center;
	border-bottom: 3px solid steelblue;
	background-color: #f9f9d0;
}

.logo {
	color: #275983;
	font-size: 3rem;
}

/* content Styles */
.content_wrapper {
	display: flex;
	flex-wrap: wrap;
	min-height: 83vh;
}

/* Sidebar Styles */
aside {
	flex: 1;
	border-right: 3px solid steelblue;
	padding: 1rem;
	background-color: #f0f0f0;
	display: flex;
	flex-direction: column;
	gap: 3rem;
}
.aside_section_title {
	text-transform: capitalize;
	color: #275983;
	padding: 1rem 0;
	border-bottom: 3px solid steelblue;
	margin-bottom: 1rem;
	font-size: 2rem;
}

.home_options_wrapper {
	display: flex;
	flex-direction: column;
	/* align-items: flex-start; */
}
.home_option {
	background-color: transparent;
	border: none;
	padding: 0.6rem;
	font-size: 1rem;
	font-weight: bold;
	text-transform: capitalize;
	text-align: left;
}
.active {
	border-radius: 5px;
	border: 2px solid steelblue;
}
.project_item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	padding: 0.6rem;
	margin-bottom: 1rem;
	cursor: pointer;
	gap: 0.5rem;
}
.project_options {
	display: flex;
	flex-wrap: wrap;
	gap: 0.4rem;
}
.project_option {
	flex: 1;
	padding: 0.3rem;
	background-color: green;
	color: white;
	text-transform: capitalize;
	border: none;
	border-radius: 5px;
	font-size: 0.8rem;
}
.project_option:hover {
	background-color: #005b00;
}
.delete {
	background-color: red;
}
.delete:hover {
	background-color: #bf0101;
}
.add {
	padding: 0.6rem 2rem;
	text-transform: capitalize;
	font-size: 1rem;
	font-weight: bold;
	border: 3px solid steelblue;
	border-radius: 5px;
	background-color: #2c628e;
	color: white;
	margin-top: 2rem;
}
.add:hover {
	border: 3px solid #214059;
	background-color: #143f62;
}

/* Main Styles */
main {
	flex: 3;
	padding: 1rem;
}
.title {
	text-transform: capitalize;
	padding: 1rem;
	background-color: steelblue;
	color: white;
	border-radius: 5px;
	font-size: 2rem;
}
.tasks_wrapper {
	background-color: beige;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	overflow: auto;
	margin-top: 1rem;
	border-radius: 5px;
}

/* Task Styles */
.task {
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #312d2d;
}
.task_info {
	display: flex;
	gap: 1rem;
}
.task_checkbox {
	width: 20px;
	height: 20px;
	border-radius: 10px;
	align-self: center;
	background-color: white;
	cursor: pointer;
}
.active_checkbox {
	background-color: green;
}
.task_info__wrapper {
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
}
.task_title {
	text-transform: capitalize;
	font-weight: bold;
	font-size: 1.3rem;
	color: white;
}
.task_details {
	font-style: italic;
	color: rgb(199, 199, 199);
}
.task_options {
	display: flex;
	gap: 0.7rem;
	align-items: center;
}
.due_date {
	padding: 0.4rem;
	border: 1px solid white;
	border-radius: 5px;
	font-size: 0.9rem;
	color: white;
}
.task_btn {
	padding: 0.4rem;
	border: none;
	border-radius: 5px;
	text-transform: capitalize;
	color: white;
}
.fav {
	background-color: #7f7f2d;
}
.active_fav {
	background-color: #ff0;
	color: black;
}
.edit {
	background-color: green;
}
.edit:hover {
	background-color: #005b00;
}
.line_through {
	text-decoration: line-through;
}

/* Dialog Styles */
dialog {
	border: 3px solid steelblue;
	border-radius: 5px;
	padding: 1rem;
	width: min(350px, 100%);
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
dialog > form {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-bottom: 0.5rem;
}
.dialog_options {
	display: flex;
	flex-wrap: wrap;
	gap: 0.7rem;
}
.dialog_options button {
	flex: 1;
}

.add_task_dialog form > div:not(:last-child) {
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
}
`, "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n\tpadding: 0;\n\tmargin: 0;\n}\n\nbutton {\n\tfont-family: sans-serif;\n\tcursor: pointer;\n\ttext-transform: capitalize;\n}\n\nbody {\n\tfont-family: sans-serif;\n\tmin-height: 100vh;\n}\n\nimg {\n\tmax-width: 100%;\n}\nlabel {\n\ttext-transform: capitalize;\n}\n\n/* Header Styles */\n\nheader {\n\tpadding: 1rem 0;\n\tbackground-color: #fff;\n\tdisplay: flex;\n\tjustify-content: center;\n\tborder-bottom: 3px solid steelblue;\n\tbackground-color: #f9f9d0;\n}\n\n.logo {\n\tcolor: #275983;\n\tfont-size: 3rem;\n}\n\n/* content Styles */\n.content_wrapper {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tmin-height: 83vh;\n}\n\n/* Sidebar Styles */\naside {\n\tflex: 1;\n\tborder-right: 3px solid steelblue;\n\tpadding: 1rem;\n\tbackground-color: #f0f0f0;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 3rem;\n}\n.aside_section_title {\n\ttext-transform: capitalize;\n\tcolor: #275983;\n\tpadding: 1rem 0;\n\tborder-bottom: 3px solid steelblue;\n\tmargin-bottom: 1rem;\n\tfont-size: 2rem;\n}\n\n.home_options_wrapper {\n\tdisplay: flex;\n\tflex-direction: column;\n\t/* align-items: flex-start; */\n}\n.home_option {\n\tbackground-color: transparent;\n\tborder: none;\n\tpadding: 0.6rem;\n\tfont-size: 1rem;\n\tfont-weight: bold;\n\ttext-transform: capitalize;\n\ttext-align: left;\n}\n.active {\n\tborder-radius: 5px;\n\tborder: 2px solid steelblue;\n}\n.project_item {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tpadding: 0.6rem;\n\tmargin-bottom: 1rem;\n\tcursor: pointer;\n\tgap: 0.5rem;\n}\n.project_options {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: 0.4rem;\n}\n.project_option {\n\tflex: 1;\n\tpadding: 0.3rem;\n\tbackground-color: green;\n\tcolor: white;\n\ttext-transform: capitalize;\n\tborder: none;\n\tborder-radius: 5px;\n\tfont-size: 0.8rem;\n}\n.project_option:hover {\n\tbackground-color: #005b00;\n}\n.delete {\n\tbackground-color: red;\n}\n.delete:hover {\n\tbackground-color: #bf0101;\n}\n.add {\n\tpadding: 0.6rem 2rem;\n\ttext-transform: capitalize;\n\tfont-size: 1rem;\n\tfont-weight: bold;\n\tborder: 3px solid steelblue;\n\tborder-radius: 5px;\n\tbackground-color: #2c628e;\n\tcolor: white;\n\tmargin-top: 2rem;\n}\n.add:hover {\n\tborder: 3px solid #214059;\n\tbackground-color: #143f62;\n}\n\n/* Main Styles */\nmain {\n\tflex: 3;\n\tpadding: 1rem;\n}\n.title {\n\ttext-transform: capitalize;\n\tpadding: 1rem;\n\tbackground-color: steelblue;\n\tcolor: white;\n\tborder-radius: 5px;\n\tfont-size: 2rem;\n}\n.tasks_wrapper {\n\tbackground-color: beige;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n\toverflow: auto;\n\tmargin-top: 1rem;\n\tborder-radius: 5px;\n}\n\n/* Task Styles */\n.task {\n\tpadding: 1rem;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tbackground-color: #312d2d;\n}\n.task_info {\n\tdisplay: flex;\n\tgap: 1rem;\n}\n.task_checkbox {\n\twidth: 20px;\n\theight: 20px;\n\tborder-radius: 10px;\n\talign-self: center;\n\tbackground-color: white;\n\tcursor: pointer;\n}\n.active_checkbox {\n\tbackground-color: green;\n}\n.task_info__wrapper {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 0.6rem;\n}\n.task_title {\n\ttext-transform: capitalize;\n\tfont-weight: bold;\n\tfont-size: 1.3rem;\n\tcolor: white;\n}\n.task_details {\n\tfont-style: italic;\n\tcolor: rgb(199, 199, 199);\n}\n.task_options {\n\tdisplay: flex;\n\tgap: 0.7rem;\n\talign-items: center;\n}\n.due_date {\n\tpadding: 0.4rem;\n\tborder: 1px solid white;\n\tborder-radius: 5px;\n\tfont-size: 0.9rem;\n\tcolor: white;\n}\n.task_btn {\n\tpadding: 0.4rem;\n\tborder: none;\n\tborder-radius: 5px;\n\ttext-transform: capitalize;\n\tcolor: white;\n}\n.fav {\n\tbackground-color: #7f7f2d;\n}\n.active_fav {\n\tbackground-color: #ff0;\n\tcolor: black;\n}\n.edit {\n\tbackground-color: green;\n}\n.edit:hover {\n\tbackground-color: #005b00;\n}\n.line_through {\n\ttext-decoration: line-through;\n}\n\n/* Dialog Styles */\ndialog {\n\tborder: 3px solid steelblue;\n\tborder-radius: 5px;\n\tpadding: 1rem;\n\twidth: min(350px, 100%);\n\tposition: fixed;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n}\ndialog > form {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 0.5rem;\n\tmargin-bottom: 0.5rem;\n}\n.dialog_options {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: 0.7rem;\n}\n.dialog_options button {\n\tflex: 1;\n}\n\n.add_task_dialog form > div:not(:last-child) {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 0.2rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/***/ ((module) => {

/* 
(The MIT License)
Copyright (c) 2014-2021 Halász Ádám <adam@aimform.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//  Unique Hexatridecimal ID Generator
// ================================================

//  Dependencies
// ================================================
var pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;
var address = '';
if(false){ var i, networkInterfaces, mac, os; } 

//  Exports
// ================================================
module.exports = module.exports["default"] = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }

//  Helpers
// ================================================
function now(){
    var time = Date.now();
    var last = now.last || time;
    return now.last = time > last ? time : last + 1;
}


/***/ }),

/***/ "./src/ProjectsController.js":
/*!***********************************!*\
  !*** ./src/ProjectsController.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectsController)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _ProjectsStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectsStorage */ "./src/ProjectsStorage.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/render.js");




function projectsController() {
	const addProjectBtn = document.querySelector("#add-project");
	const projectDialog = document.querySelector("#add-project-dialog");
	const projectDialogForm = document.querySelector("#add-project-dialog form");
	const projectTitleInput = document.querySelector("#project-title-input");
	const projectDialogCancel = document.querySelector(
		"[data-action='cancel-project-add']"
	);
	const projectsContainer = document.querySelector("#projects-container");

	// Show the add project modal when (add project) button is clicked
	addProjectBtn.addEventListener("click", () => {
		projectDialog.showModal();
	});

	// Cancel the add project modal when (cancel) button is clicked =
	projectDialogCancel.addEventListener("click", () => projectDialog.close());

	// ** When add project modal form is submitted:
	//-----> create a new project object
	//-----> add this new project object to the projects storage
	//-----> run a function to render all projects inside the projects storage
	//-----> clear the add project modal input value
	projectDialogForm.addEventListener("submit", () => {
		const projectTitle = projectTitleInput.value;
		const projectObj = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](projectTitle);
		_ProjectsStorage__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(projectObj);
		(0,_render__WEBPACK_IMPORTED_MODULE_2__.renderProjects)();
		projectTitleInput.value = null;
	});

	// ** when projects container div is clicked:
	// -----> check the id of the target
	// -----> if (delete) >> run the handle delete function
	// -----> if (rename) >> run the handle rename function
	projectsContainer.addEventListener("click", (e) => {
		const clickedElement = e.target.dataset.action;
		if (clickedElement === "delete-project") {
			handleProjectDelete(e);
		}
		if (clickedElement === "rename-project") {
			handleProjectRename(e);
		}
	});

	// Create Two default project when page loads for the first time
	createDefaultProject("project One");
	createDefaultProject("project Two");

	// Call render projects function once to render all defaults when page loads for the first time
	(0,_render__WEBPACK_IMPORTED_MODULE_2__.renderProjects)();
}

// util function: create default projects
function createDefaultProject(title) {
	const projOne = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](title);
	_ProjectsStorage__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(projOne);
}

// util function: handle project delete:
// -----> get the parent node key
// -----> check the projects storage for an object with the same key and delete that obj
// -----> run render projects functions
function handleProjectDelete(e) {
	const projectTitleDisplay = document.querySelector("#project-title-display");
	const addTaskBtn = document.querySelector("#add-task-btn");
	const allTasks = document.querySelector("#all-tasks-option");
	const parentKey = e.target.parentElement.parentElement.dataset.key;
	const projects = _ProjectsStorage__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects();
	_ProjectsStorage__WEBPACK_IMPORTED_MODULE_1__["default"].setProjects(
		projects.filter((project) => project.getId() !== parentKey)
	);
	(0,_render__WEBPACK_IMPORTED_MODULE_2__.renderProjects)();
	projectTitleDisplay.textContent = "All Tasks";
	allTasks.classList.add("active");
	addTaskBtn.style.display = "none";
	(0,_render__WEBPACK_IMPORTED_MODULE_2__.renderAllTasks)();
}

// util Function: handle project rename:
function handleProjectRename(e) {
	const projectTitleDisplay = document.querySelector("#project-title-display");
	const projectRenameModal = document.querySelector("#rename-project-dialog");
	const projectRenameForm = document.querySelector(
		"#rename-project-dialog form"
	);
	const projectRenameCancel = document.querySelector(
		"[data-action='cancel-project-rename']"
	);
	const projectRenameInput = document.querySelector("#project-rename-input");
	const elementContainer = e.target.parentElement.parentElement;
	const projects = _ProjectsStorage__WEBPACK_IMPORTED_MODULE_1__["default"].getProjects();
	const targetProject = projects.find(
		(project) => project.getId() === elementContainer.dataset.key
	);

	projectRenameModal.showModal();
	projectRenameCancel.addEventListener("click", () =>
		projectRenameModal.close()
	);
	projectRenameForm.addEventListener("submit", () => {
		let newTitle = projectRenameInput.value;
		targetProject.setTitle(newTitle);
		const projectTitle = elementContainer.querySelector("h3");
		projectTitle.textContent = newTitle;
		projectTitleDisplay.textContent = newTitle;
	});
	projectRenameInput.value = null;
}


/***/ }),

/***/ "./src/ProjectsStorage.js":
/*!********************************!*\
  !*** ./src/ProjectsStorage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectsStorage)
/* harmony export */ });
class ProjectsStorage {
	static projects = [];

	static addProject(project) {
		this.projects.push(project);
	}
	static getProjects() {
		return this.projects;
	}
	static setProjects(projectsArr) {
		this.projects = projectsArr;
	}
	static deselectAllProjects() {
		this.projects.map((project) => (project.isSelected = false));
	}
}


/***/ }),

/***/ "./src/TasksController.js":
/*!********************************!*\
  !*** ./src/TasksController.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tasksController)
/* harmony export */ });
/* harmony import */ var _ProjectsStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectsStorage */ "./src/ProjectsStorage.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/render.js");




function tasksController() {
	const tasksContainer = document.querySelector("#tasks-wrapper");
	const addTaskBtn = document.querySelector("#add-task-btn");
	const taskDialog = document.querySelector("#add-task-dialog");
	const taskDialogForm = document.querySelector("#add-task-dialog form");
	const taskCancelBtn = document.querySelector("#cancel-task-modal");
	const taskTitleInput = document.querySelector("#task-title-input");
	const taskDetailsInput = document.querySelector("#task-details-input");
	const taskDueDateInput = document.querySelector("#task-date-input");

	// Show add task modal when (add task button) is clicked
	addTaskBtn.addEventListener("click", () => taskDialog.showModal());

	// Cancel add task modal when (cancel add task button) is clicked
	taskCancelBtn.addEventListener("click", () => taskDialog.close());

	// When (add task form) is submitted:
	// -----> create a new task obj
	// -----> get all projects from projects storage
	// -----> get the selected project
	// -----> push the created task obj into the selected project tasks array
	// -----> run render tasks function to render all tasks
	taskDialogForm.addEventListener("submit", () => {
		const taskTitle = taskTitleInput.value;
		const taskDetails = taskDetailsInput.value;
		const taskDueDate = taskDueDateInput.value;
		const taskObj = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](taskTitle, taskDetails, taskDueDate);
		const projects = _ProjectsStorage__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects();
		const selectedProject = projects.find((project) => project.isSelected);
		selectedProject.addTask(taskObj);
		(0,_render__WEBPACK_IMPORTED_MODULE_2__.renderSelectedTasks)(selectedProject);
	});

	// Task container Event listener
	tasksContainer.addEventListener("click", (e) => {
		const targetButtonData = e.target.dataset.action;
		if (targetButtonData === "favorite-task") {
			handleTaskFavorite(e);
		}
		if (targetButtonData === "delete-task") {
			handleTaskDelete(e);
		}
		if (targetButtonData === "edit-task") {
			handleTaskEdit(e);
		}
	});

	// Create default tasks
	createDefaultTask("Task one", "some details about task one", "2024-3-15");
	createDefaultTask("Task two", "some details about task two", "2024-3-20");

	// Render tasks (default) for project one (default) when page loads for the first time
	(0,_render__WEBPACK_IMPORTED_MODULE_2__.renderSelectedTasks)(_ProjectsStorage__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects()[0]);
}

// util: creates default tasks inside the first project (default);
function createDefaultTask(title, details, date) {
	const taskObj = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](title, details, date);
	const project = _ProjectsStorage__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects()[0];
	project.tasks.push(taskObj);
}

// util: handles task favorite
// -----> store the task container data project in a var
// -----> get all projects from projects storage
// -----> find the project obj with the same name as the stored data project
// -----> loop through the proj obj tasks and find the selected task
// -----> toggle it's favorite prop
// -----> toggle active fav class on the favorite button
function handleTaskFavorite(e) {
	const taskElement = e.target.parentElement.parentElement.dataset;
	const projects = _ProjectsStorage__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects();
	const parentProject = projects.find(
		(project) => project.getTitle() === taskElement.project
	);
	const taskObj = parentProject.tasks.find(
		(task) => task.getId() === taskElement.key
	);
	taskObj.toggleFavorite();
	console.log(taskObj);

	e.target.classList.toggle("active_fav");
}

// util: deletes tasks
function handleTaskDelete(e) {
	const taskElement = e.target.parentElement.parentElement.dataset;
	const projects = _ProjectsStorage__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects();
	const parentProject = projects.find(
		(project) => project.getTitle() === taskElement.project
	);
	parentProject.tasks = parentProject.tasks.filter(
		(task) => task.getId() !== taskElement.key
	);

	// Initial rendering on deletion functionality <<-----
	const selectedProject = projects.find((project) => project.isSelected);
	selectedProject ? (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderSelectedTasks)(selectedProject) : (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderAllTasks)();
}


/***/ }),

/***/ "./src/UiController.js":
/*!*****************************!*\
  !*** ./src/UiController.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UiController),
/* harmony export */   handleProjectSelection: () => (/* binding */ handleProjectSelection)
/* harmony export */ });
/* harmony import */ var _ProjectsStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectsStorage */ "./src/ProjectsStorage.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/render.js");



function UiController() {
	const addTaskBtn = document.querySelector("#add-task-btn");
	const allTasks = document.querySelector("#all-tasks-option");
	const toDay = document.querySelector("#today-option");
	const favorite = document.querySelector("#favorite-option");
	const renderOptionsContainer = document.querySelector("#render-options");
	const projectTitleDisplay = document.querySelector("#project-title-display");
	const projectsContainer = document.querySelector("#projects-container");

	allTasks.addEventListener("click", () => {
		resetSelectionStyles();
		allTasks.classList.add("active");
		projectTitleDisplay.textContent = "All Tasks";
		_ProjectsStorage__WEBPACK_IMPORTED_MODULE_0__["default"].deselectAllProjects();
		(0,_render__WEBPACK_IMPORTED_MODULE_1__.renderAllTasks)();
	});

	favorite.addEventListener("click", () => {
		resetSelectionStyles();
		favorite.classList.add("active");
		projectTitleDisplay.textContent = "Favorites";
		_ProjectsStorage__WEBPACK_IMPORTED_MODULE_0__["default"].deselectAllProjects();
		(0,_render__WEBPACK_IMPORTED_MODULE_1__.renderFavoriteTasks)();
	});

	toDay.addEventListener("click", () => {
		resetSelectionStyles();
		toDay.classList.add("active");
		projectTitleDisplay.textContent = "Today's Tasks";
		_ProjectsStorage__WEBPACK_IMPORTED_MODULE_0__["default"].deselectAllProjects();
		(0,_render__WEBPACK_IMPORTED_MODULE_1__.renderTodayTasks)();
	});

	// All tasks render as a default when page first loads
	allTasks.classList.add("active");
	addTaskBtn.style.display = "none";
	(0,_render__WEBPACK_IMPORTED_MODULE_1__.renderAllTasks)();

	// util: resets selections styles
	function resetSelectionStyles() {
		addTaskBtn.style.display = "none";
		[...renderOptionsContainer.children].forEach((element) =>
			element.classList.remove("active")
		);
		[...projectsContainer.children].forEach((project) =>
			project.classList.remove("active")
		);
	}
}

// handle project Selection
function handleProjectSelection(e) {
	const projectsContainer = document.querySelector("#projects-container");
	const renderOptionsContainer = document.querySelector("#render-options");
	const projectTitleDisplay = document.querySelector("#project-title-display");
	const addTaskBtn = document.querySelector("#add-task-btn");
	const projectElement = e.currentTarget;
	const projects = _ProjectsStorage__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects();
	const project = projects.map((proj) => {
		proj.getId() === projectElement.dataset.key
			? (proj.isSelected = true)
			: (proj.isSelected = false);
	});
	const selectedProject = projects.find(
		(proj) => proj.getId() === projectElement.dataset.key
	);
	[...projectsContainer.children].forEach((project) =>
		project.classList.remove("active")
	);
	[...renderOptionsContainer.children].forEach((element) =>
		element.classList.remove("active")
	);
	addTaskBtn.style.display = "block";
	e.currentTarget.classList.add("active");
	projectTitleDisplay.textContent = selectedProject.getTitle();
	(0,_render__WEBPACK_IMPORTED_MODULE_1__.renderSelectedTasks)(selectedProject);
}


/***/ }),

/***/ "./src/createProjectElement.js":
/*!*************************************!*\
  !*** ./src/createProjectElement.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProjectElement)
/* harmony export */ });
function createProjectElement(title) {
	const projectWrapper = document.createElement("div");
	projectWrapper.classList.add("project_item");

	const projectTitle = document.createElement("h3");
	projectTitle.classList.add("project_name");
	projectTitle.textContent = title;

	const optionsWrapper = document.createElement("div");
	optionsWrapper.classList.add("project_options");

	const renameBtn = document.createElement("button");
	renameBtn.classList.add("project_option");
	renameBtn.textContent = "rename";
	renameBtn.dataset.action = "rename-project";

	const deleteBtn = document.createElement("button");
	deleteBtn.classList.add("project_option");
	deleteBtn.classList.add("delete");
	deleteBtn.textContent = "delete";
	deleteBtn.dataset.action = "delete-project";

	optionsWrapper.appendChild(renameBtn);
	optionsWrapper.appendChild(deleteBtn);
	projectWrapper.appendChild(projectTitle);
	projectWrapper.appendChild(optionsWrapper);

	return projectWrapper;
}


/***/ }),

/***/ "./src/createTaskElement.js":
/*!**********************************!*\
  !*** ./src/createTaskElement.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTaskElement)
/* harmony export */ });
function createTaskElement(title, details, date, favorite) {
	const taskWrapper = document.createElement("div");
	taskWrapper.classList.add("task");

	const taskInfoContainer = document.createElement("div");
	taskInfoContainer.classList.add("task_info");

	const taskInfoWrapper = document.createElement("div");
	taskInfoWrapper.classList.add("task_info__wrapper");

	const taskTitle = document.createElement("h3");
	taskTitle.classList.add("task_title");
	taskTitle.textContent = title;

	const taskDetails = document.createElement("p");
	taskDetails.classList.add("task_details");
	taskDetails.textContent = details;

	const taskCheckbox = document.createElement("div");
	taskCheckbox.classList.add("task_checkbox");
	taskCheckbox.addEventListener("click", () => {
		taskCheckbox.classList.toggle("active_checkbox");
		taskTitle.classList.toggle("line_through");
		taskDetails.classList.toggle("line_through");
	});

	taskInfoWrapper.appendChild(taskTitle);
	taskInfoWrapper.appendChild(taskDetails);
	taskInfoContainer.appendChild(taskCheckbox);
	taskInfoContainer.appendChild(taskInfoWrapper);

	const taskOptionsWrapper = document.createElement("div");
	taskOptionsWrapper.classList.add("task_options");

	const taskDueDate = document.createElement("p");
	taskDueDate.classList.add("due_date");
	taskDueDate.textContent = date;

	const taskFavoriteBtn = document.createElement("button");
	taskFavoriteBtn.classList.add("task_btn");
	taskFavoriteBtn.classList.add("fav");
	taskFavoriteBtn.textContent = "Favorite";
	taskFavoriteBtn.dataset.action = "favorite-task";
	favorite
		? taskFavoriteBtn.classList.add("active_fav")
		: taskFavoriteBtn.classList.remove("active_fav");

	const taskEditBtn = document.createElement("button");
	taskEditBtn.classList.add("task_btn");
	taskEditBtn.classList.add("edit");
	taskEditBtn.textContent = "Edit";
	taskEditBtn.dataset.action = "edit-task";

	const taskDeleteBtn = document.createElement("button");
	taskDeleteBtn.classList.add("task_btn");
	taskDeleteBtn.classList.add("delete");
	taskDeleteBtn.textContent = "Delete";
	taskDeleteBtn.dataset.action = "delete-task";

	taskOptionsWrapper.appendChild(taskDueDate);
	taskOptionsWrapper.appendChild(taskFavoriteBtn);
	taskOptionsWrapper.appendChild(taskEditBtn);
	taskOptionsWrapper.appendChild(taskDeleteBtn);

	taskWrapper.appendChild(taskInfoContainer);
	taskWrapper.appendChild(taskOptionsWrapper);

	return taskWrapper;
}


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);

class Project {
	constructor(title) {
		this.title = title;
		this._id = uniqid__WEBPACK_IMPORTED_MODULE_0___default()();
		this.tasks = [];
		this.isSelected = false;
	}

	getTitle() {
		return this.title;
	}
	setTitle(newTitle) {
		this.title = newTitle;
	}
	getId() {
		return this._id;
	}
	addTask(task) {
		if (this.isSelected) {
			this.tasks.push(task);
		}
	}
}


/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderAllTasks: () => (/* binding */ renderAllTasks),
/* harmony export */   renderFavoriteTasks: () => (/* binding */ renderFavoriteTasks),
/* harmony export */   renderProjects: () => (/* binding */ renderProjects),
/* harmony export */   renderSelectedTasks: () => (/* binding */ renderSelectedTasks),
/* harmony export */   renderTodayTasks: () => (/* binding */ renderTodayTasks)
/* harmony export */ });
/* harmony import */ var _createProjectElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProjectElement */ "./src/createProjectElement.js");
/* harmony import */ var _createTaskElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTaskElement */ "./src/createTaskElement.js");
/* harmony import */ var _ProjectsStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectsStorage */ "./src/ProjectsStorage.js");
/* harmony import */ var _UiController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UiController */ "./src/UiController.js");





// ** Function to render all projects inside the projects storage:
// -----> clear the projects container div
// -----> get the projects storage array
// -----> loop through the array and create a project element for each project obj
// -----> append each project element to the projects container div
function renderProjects() {
	const projectsContainer = document.querySelector("#projects-container");
	clearContainerElement(projectsContainer);

	const projects = _ProjectsStorage__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects();
	projects.forEach((project) => {
		const createdProjectElement = (0,_createProjectElement__WEBPACK_IMPORTED_MODULE_0__["default"])(project.getTitle());
		createdProjectElement.dataset.key = project.getId();
		// if (project.isSelected) {
		// 	createdProjectElement.classList.add("active");
		// }
		createdProjectElement.addEventListener("click", _UiController__WEBPACK_IMPORTED_MODULE_3__.handleProjectSelection);
		projectsContainer.appendChild(createdProjectElement);
	});
}

// Renders all tasks inside a selected project array
function renderSelectedTasks(selectedProjectObj) {
	const tasksContainer = document.querySelector("#tasks-wrapper");
	clearContainerElement(tasksContainer);
	selectedProjectObj.tasks.forEach((task) => {
		const createdTaskElement = (0,_createTaskElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
			task.title,
			task.details,
			task.date,
			task.favorite
		);
		createdTaskElement.dataset.key = task.getId();
		createdTaskElement.dataset.project = selectedProjectObj.getTitle();
		tasksContainer.appendChild(createdTaskElement);
	});
}

// Renders all tasks inside all projects
function renderAllTasks() {
	const tasksContainer = document.querySelector("#tasks-wrapper");
	clearContainerElement(tasksContainer);
	const projects = _ProjectsStorage__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects();
	projects.forEach((project) => {
		project.tasks.forEach((task) => {
			const createdTaskElement = (0,_createTaskElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
				task.title,
				task.details,
				task.date,
				task.favorite
			);
			createdTaskElement.dataset.key = task.getId();
			createdTaskElement.dataset.project = project.getTitle();
			tasksContainer.appendChild(createdTaskElement);
		});
	});
}
// renders favorite tasks
function renderFavoriteTasks() {
	const tasksContainer = document.querySelector("#tasks-wrapper");
	clearContainerElement(tasksContainer);
	const projects = _ProjectsStorage__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects();
	projects.forEach((project) => {
		project.tasks.forEach((task) => {
			if (task.favorite) {
				const createdTaskElement = (0,_createTaskElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
					task.title,
					task.details,
					task.date,
					task.favorite
				);
				createdTaskElement.dataset.key = task.getId();
				createdTaskElement.dataset.project = project.getTitle();
				tasksContainer.appendChild(createdTaskElement);
			}
		});
	});
}

function renderTodayTasks() {
	const tasksContainer = document.querySelector("#tasks-wrapper");
	clearContainerElement(tasksContainer);
	const projects = _ProjectsStorage__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects();
	const today = new Date().toLocaleDateString();

	projects.forEach((project) => {
		project.tasks.forEach((task) => {
			const taskDueDate = new Date(task.date).toLocaleDateString();
			if (taskDueDate === today) {
				const createdTaskElement = (0,_createTaskElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
					task.title,
					task.details,
					task.date,
					task.favorite
				);
				createdTaskElement.dataset.key = task.getId();
				createdTaskElement.dataset.project = project.getTitle();
				tasksContainer.appendChild(createdTaskElement);
			}
		});
	});
}

// util function: clear all children of a container element
function clearContainerElement(containerElement) {
	while (containerElement.firstChild) {
		containerElement.firstChild.remove();
	}
}




/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);


class Task {
	constructor(title, details = "", date) {
		this.title = title;
		this.details = details;
		this.date = date;
		this.favorite = false;
		this._id = uniqid__WEBPACK_IMPORTED_MODULE_0___default()();
		this.isComplete = false;
	}

	setTitle(newTitle) {
		this.title = newTitle;
	}
	setDetails(newDetails) {
		this.details = newDetails;
	}
	setDate(newDate) {
		this.date = newDate;
	}
	toggleFavorite() {
		this.favorite = this.favorite ? false : true;
	}
	getId() {
		return this._id;
	}
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _ProjectsController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectsController */ "./src/ProjectsController.js");
/* harmony import */ var _TasksController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TasksController */ "./src/TasksController.js");
/* harmony import */ var _UiController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UiController */ "./src/UiController.js");






(0,_ProjectsController__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_TasksController__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_UiController__WEBPACK_IMPORTED_MODULE_3__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxtREFBbUQsMkJBQTJCLGVBQWUsY0FBYyxHQUFHLFlBQVksNEJBQTRCLG9CQUFvQiwr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QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsOERBQWlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SDBCOztBQUViO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsNkNBQU07QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzNCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQjs7QUFFa0M7QUFDTjtBQUNOOztBQUUxQywrREFBa0I7QUFDbEIsNERBQWU7QUFDZix5REFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tYWluLmNzcz9kZGQzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3VuaXFpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvUHJvamVjdHNDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Qcm9qZWN0c1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1Rhc2tzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVWlDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVQcm9qZWN0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlVGFza0VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdHBhZGRpbmc6IDA7XG5cdG1hcmdpbjogMDtcbn1cblxuYnV0dG9uIHtcblx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbmJvZHkge1xuXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcblx0bWluLWhlaWdodDogMTAwdmg7XG59XG5cbmltZyB7XG5cdG1heC13aWR0aDogMTAwJTtcbn1cbmxhYmVsIHtcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi8qIEhlYWRlciBTdHlsZXMgKi9cblxuaGVhZGVyIHtcblx0cGFkZGluZzogMXJlbSAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Ym9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHN0ZWVsYmx1ZTtcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlkMDtcbn1cblxuLmxvZ28ge1xuXHRjb2xvcjogIzI3NTk4Mztcblx0Zm9udC1zaXplOiAzcmVtO1xufVxuXG4vKiBjb250ZW50IFN0eWxlcyAqL1xuLmNvbnRlbnRfd3JhcHBlciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0bWluLWhlaWdodDogODN2aDtcbn1cblxuLyogU2lkZWJhciBTdHlsZXMgKi9cbmFzaWRlIHtcblx0ZmxleDogMTtcblx0Ym9yZGVyLXJpZ2h0OiAzcHggc29saWQgc3RlZWxibHVlO1xuXHRwYWRkaW5nOiAxcmVtO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDNyZW07XG59XG4uYXNpZGVfc2VjdGlvbl90aXRsZSB7XG5cdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXHRjb2xvcjogIzI3NTk4Mztcblx0cGFkZGluZzogMXJlbSAwO1xuXHRib3JkZXItYm90dG9tOiAzcHggc29saWQgc3RlZWxibHVlO1xuXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xuXHRmb250LXNpemU6IDJyZW07XG59XG5cbi5ob21lX29wdGlvbnNfd3JhcHBlciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdC8qIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAqL1xufVxuLmhvbWVfb3B0aW9uIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdGJvcmRlcjogbm9uZTtcblx0cGFkZGluZzogMC42cmVtO1xuXHRmb250LXNpemU6IDFyZW07XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cbi5hY3RpdmUge1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJvcmRlcjogMnB4IHNvbGlkIHN0ZWVsYmx1ZTtcbn1cbi5wcm9qZWN0X2l0ZW0ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0cGFkZGluZzogMC42cmVtO1xuXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGdhcDogMC41cmVtO1xufVxuLnByb2plY3Rfb3B0aW9ucyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0Z2FwOiAwLjRyZW07XG59XG4ucHJvamVjdF9vcHRpb24ge1xuXHRmbGV4OiAxO1xuXHRwYWRkaW5nOiAwLjNyZW07XG5cdGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuXHRjb2xvcjogd2hpdGU7XG5cdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Zm9udC1zaXplOiAwLjhyZW07XG59XG4ucHJvamVjdF9vcHRpb246aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1YjAwO1xufVxuLmRlbGV0ZSB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbi5kZWxldGU6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYmYwMTAxO1xufVxuLmFkZCB7XG5cdHBhZGRpbmc6IDAuNnJlbSAycmVtO1xuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0Ym9yZGVyOiAzcHggc29saWQgc3RlZWxibHVlO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyYzYyOGU7XG5cdGNvbG9yOiB3aGl0ZTtcblx0bWFyZ2luLXRvcDogMnJlbTtcbn1cbi5hZGQ6aG92ZXIge1xuXHRib3JkZXI6IDNweCBzb2xpZCAjMjE0MDU5O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTQzZjYyO1xufVxuXG4vKiBNYWluIFN0eWxlcyAqL1xubWFpbiB7XG5cdGZsZXg6IDM7XG5cdHBhZGRpbmc6IDFyZW07XG59XG4udGl0bGUge1xuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0cGFkZGluZzogMXJlbTtcblx0YmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xuXHRjb2xvcjogd2hpdGU7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Zm9udC1zaXplOiAycmVtO1xufVxuLnRhc2tzX3dyYXBwZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAxcmVtO1xuXHRvdmVyZmxvdzogYXV0bztcblx0bWFyZ2luLXRvcDogMXJlbTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4vKiBUYXNrIFN0eWxlcyAqL1xuLnRhc2sge1xuXHRwYWRkaW5nOiAxcmVtO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGJhY2tncm91bmQtY29sb3I6ICMzMTJkMmQ7XG59XG4udGFza19pbmZvIHtcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiAxcmVtO1xufVxuLnRhc2tfY2hlY2tib3gge1xuXHR3aWR0aDogMjBweDtcblx0aGVpZ2h0OiAyMHB4O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWN0aXZlX2NoZWNrYm94IHtcblx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG4udGFza19pbmZvX193cmFwcGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAwLjZyZW07XG59XG4udGFza190aXRsZSB7XG5cdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0Zm9udC1zaXplOiAxLjNyZW07XG5cdGNvbG9yOiB3aGl0ZTtcbn1cbi50YXNrX2RldGFpbHMge1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdGNvbG9yOiByZ2IoMTk5LCAxOTksIDE5OSk7XG59XG4udGFza19vcHRpb25zIHtcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiAwLjdyZW07XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZHVlX2RhdGUge1xuXHRwYWRkaW5nOiAwLjRyZW07XG5cdGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGZvbnQtc2l6ZTogMC45cmVtO1xuXHRjb2xvcjogd2hpdGU7XG59XG4udGFza19idG4ge1xuXHRwYWRkaW5nOiAwLjRyZW07XG5cdGJvcmRlcjogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0Y29sb3I6IHdoaXRlO1xufVxuLmZhdiB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM3ZjdmMmQ7XG59XG4uYWN0aXZlX2ZhdiB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZjA7XG5cdGNvbG9yOiBibGFjaztcbn1cbi5lZGl0IHtcblx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG4uZWRpdDpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDViMDA7XG59XG4ubGluZV90aHJvdWdoIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi8qIERpYWxvZyBTdHlsZXMgKi9cbmRpYWxvZyB7XG5cdGJvcmRlcjogM3B4IHNvbGlkIHN0ZWVsYmx1ZTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRwYWRkaW5nOiAxcmVtO1xuXHR3aWR0aDogbWluKDM1MHB4LCAxMDAlKTtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR0b3A6IDUwJTtcblx0bGVmdDogNTAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbmRpYWxvZyA+IGZvcm0ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDAuNXJlbTtcblx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLmRpYWxvZ19vcHRpb25zIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRnYXA6IDAuN3JlbTtcbn1cbi5kaWFsb2dfb3B0aW9ucyBidXR0b24ge1xuXHRmbGV4OiAxO1xufVxuXG4uYWRkX3Rhc2tfZGlhbG9nIGZvcm0gPiBkaXY6bm90KDpsYXN0LWNoaWxkKSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMC4ycmVtO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDLHNCQUFzQjtDQUN0QixVQUFVO0NBQ1YsU0FBUztBQUNWOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGVBQWU7Q0FDZiwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsMEJBQTBCO0FBQzNCOztBQUVBLGtCQUFrQjs7QUFFbEI7Q0FDQyxlQUFlO0NBQ2Ysc0JBQXNCO0NBQ3RCLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsa0NBQWtDO0NBQ2xDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0FBQ2hCOztBQUVBLG1CQUFtQjtBQUNuQjtDQUNDLGFBQWE7Q0FDYixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBLG1CQUFtQjtBQUNuQjtDQUNDLE9BQU87Q0FDUCxpQ0FBaUM7Q0FDakMsYUFBYTtDQUNiLHlCQUF5QjtDQUN6QixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFNBQVM7QUFDVjtBQUNBO0NBQ0MsMEJBQTBCO0NBQzFCLGNBQWM7Q0FDZCxlQUFlO0NBQ2Ysa0NBQWtDO0NBQ2xDLG1CQUFtQjtDQUNuQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qiw2QkFBNkI7QUFDOUI7QUFDQTtDQUNDLDZCQUE2QjtDQUM3QixZQUFZO0NBQ1osZUFBZTtDQUNmLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsMEJBQTBCO0NBQzFCLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLDJCQUEyQjtBQUM1QjtBQUNBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLFdBQVc7QUFDWjtBQUNBO0NBQ0MsYUFBYTtDQUNiLGVBQWU7Q0FDZixXQUFXO0FBQ1o7QUFDQTtDQUNDLE9BQU87Q0FDUCxlQUFlO0NBQ2YsdUJBQXVCO0NBQ3ZCLFlBQVk7Q0FDWiwwQkFBMEI7Q0FDMUIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLG9CQUFvQjtDQUNwQiwwQkFBMEI7Q0FDMUIsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQiwyQkFBMkI7Q0FDM0Isa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIseUJBQXlCO0FBQzFCOztBQUVBLGdCQUFnQjtBQUNoQjtDQUNDLE9BQU87Q0FDUCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLDBCQUEwQjtDQUMxQixhQUFhO0NBQ2IsMkJBQTJCO0NBQzNCLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsU0FBUztDQUNULGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztBQUVBLGdCQUFnQjtBQUNoQjtDQUNDLGFBQWE7Q0FDYixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLDhCQUE4QjtDQUM5Qix5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLGFBQWE7Q0FDYixTQUFTO0FBQ1Y7QUFDQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQix1QkFBdUI7Q0FDdkIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsdUJBQXVCO0FBQ3hCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFdBQVc7QUFDWjtBQUNBO0NBQ0MsMEJBQTBCO0NBQzFCLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsV0FBVztDQUNYLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsZUFBZTtDQUNmLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLFlBQVk7QUFDYjtBQUNBO0NBQ0MsZUFBZTtDQUNmLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsMEJBQTBCO0NBQzFCLFlBQVk7QUFDYjtBQUNBO0NBQ0MseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxzQkFBc0I7Q0FDdEIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyx1QkFBdUI7QUFDeEI7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsNkJBQTZCO0FBQzlCOztBQUVBLGtCQUFrQjtBQUNsQjtDQUNDLDJCQUEyQjtDQUMzQixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixlQUFlO0NBQ2YsUUFBUTtDQUNSLFNBQVM7Q0FDVCxnQ0FBZ0M7QUFDakM7QUFDQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsV0FBVztDQUNYLHFCQUFxQjtBQUN0QjtBQUNBO0NBQ0MsYUFBYTtDQUNiLGVBQWU7Q0FDZixXQUFXO0FBQ1o7QUFDQTtDQUNDLE9BQU87QUFDUjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsV0FBVztBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcblxcdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuYm9keSB7XFxuXFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmltZyB7XFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5sYWJlbCB7XFxuXFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi8qIEhlYWRlciBTdHlsZXMgKi9cXG5cXG5oZWFkZXIge1xcblxcdHBhZGRpbmc6IDFyZW0gMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Ym9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHN0ZWVsYmx1ZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWQwO1xcbn1cXG5cXG4ubG9nbyB7XFxuXFx0Y29sb3I6ICMyNzU5ODM7XFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4vKiBjb250ZW50IFN0eWxlcyAqL1xcbi5jb250ZW50X3dyYXBwZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdG1pbi1oZWlnaHQ6IDgzdmg7XFxufVxcblxcbi8qIFNpZGViYXIgU3R5bGVzICovXFxuYXNpZGUge1xcblxcdGZsZXg6IDE7XFxuXFx0Ym9yZGVyLXJpZ2h0OiAzcHggc29saWQgc3RlZWxibHVlO1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAzcmVtO1xcbn1cXG4uYXNpZGVfc2VjdGlvbl90aXRsZSB7XFxuXFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuXFx0Y29sb3I6ICMyNzU5ODM7XFxuXFx0cGFkZGluZzogMXJlbSAwO1xcblxcdGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBzdGVlbGJsdWU7XFxuXFx0bWFyZ2luLWJvdHRvbTogMXJlbTtcXG5cXHRmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5ob21lX29wdGlvbnNfd3JhcHBlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdC8qIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAqL1xcbn1cXG4uaG9tZV9vcHRpb24ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRwYWRkaW5nOiAwLjZyZW07XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5hY3RpdmUge1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCBzdGVlbGJsdWU7XFxufVxcbi5wcm9qZWN0X2l0ZW0ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdHBhZGRpbmc6IDAuNnJlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRnYXA6IDAuNXJlbTtcXG59XFxuLnByb2plY3Rfb3B0aW9ucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0Z2FwOiAwLjRyZW07XFxufVxcbi5wcm9qZWN0X29wdGlvbiB7XFxuXFx0ZmxleDogMTtcXG5cXHRwYWRkaW5nOiAwLjNyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Zm9udC1zaXplOiAwLjhyZW07XFxufVxcbi5wcm9qZWN0X29wdGlvbjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzAwNWIwMDtcXG59XFxuLmRlbGV0ZSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG4uZGVsZXRlOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYmYwMTAxO1xcbn1cXG4uYWRkIHtcXG5cXHRwYWRkaW5nOiAwLjZyZW0gMnJlbTtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0Ym9yZGVyOiAzcHggc29saWQgc3RlZWxibHVlO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmM2MjhlO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG4uYWRkOmhvdmVyIHtcXG5cXHRib3JkZXI6IDNweCBzb2xpZCAjMjE0MDU5O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMxNDNmNjI7XFxufVxcblxcbi8qIE1haW4gU3R5bGVzICovXFxubWFpbiB7XFxuXFx0ZmxleDogMztcXG5cXHRwYWRkaW5nOiAxcmVtO1xcbn1cXG4udGl0bGUge1xcblxcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcbn1cXG4udGFza3Nfd3JhcHBlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMXJlbTtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG5cXHRtYXJnaW4tdG9wOiAxcmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLyogVGFzayBTdHlsZXMgKi9cXG4udGFzayB7XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMzMTJkMmQ7XFxufVxcbi50YXNrX2luZm8ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG4udGFza19jaGVja2JveCB7XFxuXFx0d2lkdGg6IDIwcHg7XFxuXFx0aGVpZ2h0OiAyMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFjdGl2ZV9jaGVja2JveCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcbi50YXNrX2luZm9fX3dyYXBwZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDAuNnJlbTtcXG59XFxuLnRhc2tfdGl0bGUge1xcblxcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGZvbnQtc2l6ZTogMS4zcmVtO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuLnRhc2tfZGV0YWlscyB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdGNvbG9yOiByZ2IoMTk5LCAxOTksIDE5OSk7XFxufVxcbi50YXNrX29wdGlvbnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAwLjdyZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmR1ZV9kYXRlIHtcXG5cXHRwYWRkaW5nOiAwLjRyZW07XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGZvbnQtc2l6ZTogMC45cmVtO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuLnRhc2tfYnRuIHtcXG5cXHRwYWRkaW5nOiAwLjRyZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcbi5mYXYge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM3ZjdmMmQ7XFxufVxcbi5hY3RpdmVfZmF2IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwO1xcblxcdGNvbG9yOiBibGFjaztcXG59XFxuLmVkaXQge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG4uZWRpdDpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzAwNWIwMDtcXG59XFxuLmxpbmVfdGhyb3VnaCB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi8qIERpYWxvZyBTdHlsZXMgKi9cXG5kaWFsb2cge1xcblxcdGJvcmRlcjogM3B4IHNvbGlkIHN0ZWVsYmx1ZTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXHR3aWR0aDogbWluKDM1MHB4LCAxMDAlKTtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiA1MCU7XFxuXFx0bGVmdDogNTAlO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5kaWFsb2cgPiBmb3JtIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAwLjVyZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG4uZGlhbG9nX29wdGlvbnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGdhcDogMC43cmVtO1xcbn1cXG4uZGlhbG9nX29wdGlvbnMgYnV0dG9uIHtcXG5cXHRmbGV4OiAxO1xcbn1cXG5cXG4uYWRkX3Rhc2tfZGlhbG9nIGZvcm0gPiBkaXY6bm90KDpsYXN0LWNoaWxkKSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMC4ycmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIFxuKFRoZSBNSVQgTGljZW5zZSlcbkNvcHlyaWdodCAoYykgMjAxNC0yMDIxIEhhbMOhc3ogw4Fkw6FtIDxhZGFtQGFpbWZvcm0uY29tPlxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyAgVW5pcXVlIEhleGF0cmlkZWNpbWFsIElEIEdlbmVyYXRvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICBEZXBlbmRlbmNpZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIHBpZCA9IHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLnBpZCA/IHByb2Nlc3MucGlkLnRvU3RyaW5nKDM2KSA6ICcnIDtcbnZhciBhZGRyZXNzID0gJyc7XG5pZih0eXBlb2YgX193ZWJwYWNrX3JlcXVpcmVfXyAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgIHZhciBtYWMgPSAnJywgb3MgPSByZXF1aXJlKCdvcycpOyBcbiAgICBpZihvcy5uZXR3b3JrSW50ZXJmYWNlcykgdmFyIG5ldHdvcmtJbnRlcmZhY2VzID0gb3MubmV0d29ya0ludGVyZmFjZXMoKTtcbiAgICBpZihuZXR3b3JrSW50ZXJmYWNlcyl7XG4gICAgICAgIGxvb3A6XG4gICAgICAgIGZvcihsZXQgaW50ZXJmYWNlX2tleSBpbiBuZXR3b3JrSW50ZXJmYWNlcyl7XG4gICAgICAgICAgICBjb25zdCBuZXR3b3JrSW50ZXJmYWNlID0gbmV0d29ya0ludGVyZmFjZXNbaW50ZXJmYWNlX2tleV07XG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBuZXR3b3JrSW50ZXJmYWNlLmxlbmd0aDtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgaWYobmV0d29ya0ludGVyZmFjZVtpXSAhPT0gdW5kZWZpbmVkICYmIG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjICYmIG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjICE9ICcwMDowMDowMDowMDowMDowMCcpe1xuICAgICAgICAgICAgICAgICAgICBtYWMgPSBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYzsgYnJlYWsgbG9vcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYWRkcmVzcyA9IG1hYyA/IHBhcnNlSW50KG1hYy5yZXBsYWNlKC9cXDp8XFxEKy9naSwgJycpKS50b1N0cmluZygzNikgOiAnJyA7XG4gICAgfVxufSBcblxuLy8gIEV4cG9ydHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxubW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIGFkZHJlc3MgKyBwaWQgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5tb2R1bGUuZXhwb3J0cy5wcm9jZXNzID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIHBpZCArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cbm1vZHVsZS5leHBvcnRzLnRpbWUgICAgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxuXG4vLyAgSGVscGVyc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5mdW5jdGlvbiBub3coKXtcbiAgICB2YXIgdGltZSA9IERhdGUubm93KCk7XG4gICAgdmFyIGxhc3QgPSBub3cubGFzdCB8fCB0aW1lO1xuICAgIHJldHVybiBub3cubGFzdCA9IHRpbWUgPiBsYXN0ID8gdGltZSA6IGxhc3QgKyAxO1xufVxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IFByb2plY3RzU3RvcmFnZSBmcm9tIFwiLi9Qcm9qZWN0c1N0b3JhZ2VcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3RzLCByZW5kZXJBbGxUYXNrcyB9IGZyb20gXCIuL3JlbmRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0c0NvbnRyb2xsZXIoKSB7XG5cdGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0XCIpO1xuXHRjb25zdCBwcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1kaWFsb2dcIik7XG5cdGNvbnN0IHByb2plY3REaWFsb2dGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1kaWFsb2cgZm9ybVwiKTtcblx0Y29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGl0bGUtaW5wdXRcIik7XG5cdGNvbnN0IHByb2plY3REaWFsb2dDYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFwiW2RhdGEtYWN0aW9uPSdjYW5jZWwtcHJvamVjdC1hZGQnXVwiXG5cdCk7XG5cdGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0cy1jb250YWluZXJcIik7XG5cblx0Ly8gU2hvdyB0aGUgYWRkIHByb2plY3QgbW9kYWwgd2hlbiAoYWRkIHByb2plY3QpIGJ1dHRvbiBpcyBjbGlja2VkXG5cdGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRwcm9qZWN0RGlhbG9nLnNob3dNb2RhbCgpO1xuXHR9KTtcblxuXHQvLyBDYW5jZWwgdGhlIGFkZCBwcm9qZWN0IG1vZGFsIHdoZW4gKGNhbmNlbCkgYnV0dG9uIGlzIGNsaWNrZWQgPVxuXHRwcm9qZWN0RGlhbG9nQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBwcm9qZWN0RGlhbG9nLmNsb3NlKCkpO1xuXG5cdC8vICoqIFdoZW4gYWRkIHByb2plY3QgbW9kYWwgZm9ybSBpcyBzdWJtaXR0ZWQ6XG5cdC8vLS0tLS0+IGNyZWF0ZSBhIG5ldyBwcm9qZWN0IG9iamVjdFxuXHQvLy0tLS0tPiBhZGQgdGhpcyBuZXcgcHJvamVjdCBvYmplY3QgdG8gdGhlIHByb2plY3RzIHN0b3JhZ2Vcblx0Ly8tLS0tLT4gcnVuIGEgZnVuY3Rpb24gdG8gcmVuZGVyIGFsbCBwcm9qZWN0cyBpbnNpZGUgdGhlIHByb2plY3RzIHN0b3JhZ2Vcblx0Ly8tLS0tLT4gY2xlYXIgdGhlIGFkZCBwcm9qZWN0IG1vZGFsIGlucHV0IHZhbHVlXG5cdHByb2plY3REaWFsb2dGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xuXHRcdGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3RUaXRsZUlucHV0LnZhbHVlO1xuXHRcdGNvbnN0IHByb2plY3RPYmogPSBuZXcgUHJvamVjdChwcm9qZWN0VGl0bGUpO1xuXHRcdFByb2plY3RzU3RvcmFnZS5hZGRQcm9qZWN0KHByb2plY3RPYmopO1xuXHRcdHJlbmRlclByb2plY3RzKCk7XG5cdFx0cHJvamVjdFRpdGxlSW5wdXQudmFsdWUgPSBudWxsO1xuXHR9KTtcblxuXHQvLyAqKiB3aGVuIHByb2plY3RzIGNvbnRhaW5lciBkaXYgaXMgY2xpY2tlZDpcblx0Ly8gLS0tLS0+IGNoZWNrIHRoZSBpZCBvZiB0aGUgdGFyZ2V0XG5cdC8vIC0tLS0tPiBpZiAoZGVsZXRlKSA+PiBydW4gdGhlIGhhbmRsZSBkZWxldGUgZnVuY3Rpb25cblx0Ly8gLS0tLS0+IGlmIChyZW5hbWUpID4+IHJ1biB0aGUgaGFuZGxlIHJlbmFtZSBmdW5jdGlvblxuXHRwcm9qZWN0c0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRjb25zdCBjbGlja2VkRWxlbWVudCA9IGUudGFyZ2V0LmRhdGFzZXQuYWN0aW9uO1xuXHRcdGlmIChjbGlja2VkRWxlbWVudCA9PT0gXCJkZWxldGUtcHJvamVjdFwiKSB7XG5cdFx0XHRoYW5kbGVQcm9qZWN0RGVsZXRlKGUpO1xuXHRcdH1cblx0XHRpZiAoY2xpY2tlZEVsZW1lbnQgPT09IFwicmVuYW1lLXByb2plY3RcIikge1xuXHRcdFx0aGFuZGxlUHJvamVjdFJlbmFtZShlKTtcblx0XHR9XG5cdH0pO1xuXG5cdC8vIENyZWF0ZSBUd28gZGVmYXVsdCBwcm9qZWN0IHdoZW4gcGFnZSBsb2FkcyBmb3IgdGhlIGZpcnN0IHRpbWVcblx0Y3JlYXRlRGVmYXVsdFByb2plY3QoXCJwcm9qZWN0IE9uZVwiKTtcblx0Y3JlYXRlRGVmYXVsdFByb2plY3QoXCJwcm9qZWN0IFR3b1wiKTtcblxuXHQvLyBDYWxsIHJlbmRlciBwcm9qZWN0cyBmdW5jdGlvbiBvbmNlIHRvIHJlbmRlciBhbGwgZGVmYXVsdHMgd2hlbiBwYWdlIGxvYWRzIGZvciB0aGUgZmlyc3QgdGltZVxuXHRyZW5kZXJQcm9qZWN0cygpO1xufVxuXG4vLyB1dGlsIGZ1bmN0aW9uOiBjcmVhdGUgZGVmYXVsdCBwcm9qZWN0c1xuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFByb2plY3QodGl0bGUpIHtcblx0Y29uc3QgcHJvak9uZSA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcblx0UHJvamVjdHNTdG9yYWdlLmFkZFByb2plY3QocHJvak9uZSk7XG59XG5cbi8vIHV0aWwgZnVuY3Rpb246IGhhbmRsZSBwcm9qZWN0IGRlbGV0ZTpcbi8vIC0tLS0tPiBnZXQgdGhlIHBhcmVudCBub2RlIGtleVxuLy8gLS0tLS0+IGNoZWNrIHRoZSBwcm9qZWN0cyBzdG9yYWdlIGZvciBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBrZXkgYW5kIGRlbGV0ZSB0aGF0IG9ialxuLy8gLS0tLS0+IHJ1biByZW5kZXIgcHJvamVjdHMgZnVuY3Rpb25zXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0RGVsZXRlKGUpIHtcblx0Y29uc3QgcHJvamVjdFRpdGxlRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZS1kaXNwbGF5XCIpO1xuXHRjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1idG5cIik7XG5cdGNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbGwtdGFza3Mtb3B0aW9uXCIpO1xuXHRjb25zdCBwYXJlbnRLZXkgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5rZXk7XG5cdGNvbnN0IHByb2plY3RzID0gUHJvamVjdHNTdG9yYWdlLmdldFByb2plY3RzKCk7XG5cdFByb2plY3RzU3RvcmFnZS5zZXRQcm9qZWN0cyhcblx0XHRwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuZ2V0SWQoKSAhPT0gcGFyZW50S2V5KVxuXHQpO1xuXHRyZW5kZXJQcm9qZWN0cygpO1xuXHRwcm9qZWN0VGl0bGVEaXNwbGF5LnRleHRDb250ZW50ID0gXCJBbGwgVGFza3NcIjtcblx0YWxsVGFza3MuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0YWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdHJlbmRlckFsbFRhc2tzKCk7XG59XG5cbi8vIHV0aWwgRnVuY3Rpb246IGhhbmRsZSBwcm9qZWN0IHJlbmFtZTpcbmZ1bmN0aW9uIGhhbmRsZVByb2plY3RSZW5hbWUoZSkge1xuXHRjb25zdCBwcm9qZWN0VGl0bGVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlLWRpc3BsYXlcIik7XG5cdGNvbnN0IHByb2plY3RSZW5hbWVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVuYW1lLXByb2plY3QtZGlhbG9nXCIpO1xuXHRjb25zdCBwcm9qZWN0UmVuYW1lRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XCIjcmVuYW1lLXByb2plY3QtZGlhbG9nIGZvcm1cIlxuXHQpO1xuXHRjb25zdCBwcm9qZWN0UmVuYW1lQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcIltkYXRhLWFjdGlvbj0nY2FuY2VsLXByb2plY3QtcmVuYW1lJ11cIlxuXHQpO1xuXHRjb25zdCBwcm9qZWN0UmVuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtcmVuYW1lLWlucHV0XCIpO1xuXHRjb25zdCBlbGVtZW50Q29udGFpbmVyID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHRjb25zdCBwcm9qZWN0cyA9IFByb2plY3RzU3RvcmFnZS5nZXRQcm9qZWN0cygpO1xuXHRjb25zdCB0YXJnZXRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChcblx0XHQocHJvamVjdCkgPT4gcHJvamVjdC5nZXRJZCgpID09PSBlbGVtZW50Q29udGFpbmVyLmRhdGFzZXQua2V5XG5cdCk7XG5cblx0cHJvamVjdFJlbmFtZU1vZGFsLnNob3dNb2RhbCgpO1xuXHRwcm9qZWN0UmVuYW1lQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuXHRcdHByb2plY3RSZW5hbWVNb2RhbC5jbG9zZSgpXG5cdCk7XG5cdHByb2plY3RSZW5hbWVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xuXHRcdGxldCBuZXdUaXRsZSA9IHByb2plY3RSZW5hbWVJbnB1dC52YWx1ZTtcblx0XHR0YXJnZXRQcm9qZWN0LnNldFRpdGxlKG5ld1RpdGxlKTtcblx0XHRjb25zdCBwcm9qZWN0VGl0bGUgPSBlbGVtZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKTtcblx0XHRwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBuZXdUaXRsZTtcblx0XHRwcm9qZWN0VGl0bGVEaXNwbGF5LnRleHRDb250ZW50ID0gbmV3VGl0bGU7XG5cdH0pO1xuXHRwcm9qZWN0UmVuYW1lSW5wdXQudmFsdWUgPSBudWxsO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHNTdG9yYWdlIHtcblx0c3RhdGljIHByb2plY3RzID0gW107XG5cblx0c3RhdGljIGFkZFByb2plY3QocHJvamVjdCkge1xuXHRcdHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcblx0fVxuXHRzdGF0aWMgZ2V0UHJvamVjdHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMucHJvamVjdHM7XG5cdH1cblx0c3RhdGljIHNldFByb2plY3RzKHByb2plY3RzQXJyKSB7XG5cdFx0dGhpcy5wcm9qZWN0cyA9IHByb2plY3RzQXJyO1xuXHR9XG5cdHN0YXRpYyBkZXNlbGVjdEFsbFByb2plY3RzKCkge1xuXHRcdHRoaXMucHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAocHJvamVjdC5pc1NlbGVjdGVkID0gZmFsc2UpKTtcblx0fVxufVxuIiwiaW1wb3J0IFByb2plY3RzU3RvcmFnZSBmcm9tIFwiLi9Qcm9qZWN0c1N0b3JhZ2VcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IHJlbmRlckFsbFRhc2tzLCByZW5kZXJQcm9qZWN0cywgcmVuZGVyU2VsZWN0ZWRUYXNrcyB9IGZyb20gXCIuL3JlbmRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrc0NvbnRyb2xsZXIoKSB7XG5cdGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrcy13cmFwcGVyXCIpO1xuXHRjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1idG5cIik7XG5cdGNvbnN0IHRhc2tEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLWRpYWxvZ1wiKTtcblx0Y29uc3QgdGFza0RpYWxvZ0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLWRpYWxvZyBmb3JtXCIpO1xuXHRjb25zdCB0YXNrQ2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWwtdGFzay1tb2RhbFwiKTtcblx0Y29uc3QgdGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stdGl0bGUtaW5wdXRcIik7XG5cdGNvbnN0IHRhc2tEZXRhaWxzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGV0YWlscy1pbnB1dFwiKTtcblx0Y29uc3QgdGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kYXRlLWlucHV0XCIpO1xuXG5cdC8vIFNob3cgYWRkIHRhc2sgbW9kYWwgd2hlbiAoYWRkIHRhc2sgYnV0dG9uKSBpcyBjbGlja2VkXG5cdGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRhc2tEaWFsb2cuc2hvd01vZGFsKCkpO1xuXG5cdC8vIENhbmNlbCBhZGQgdGFzayBtb2RhbCB3aGVuIChjYW5jZWwgYWRkIHRhc2sgYnV0dG9uKSBpcyBjbGlja2VkXG5cdHRhc2tDYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRhc2tEaWFsb2cuY2xvc2UoKSk7XG5cblx0Ly8gV2hlbiAoYWRkIHRhc2sgZm9ybSkgaXMgc3VibWl0dGVkOlxuXHQvLyAtLS0tLT4gY3JlYXRlIGEgbmV3IHRhc2sgb2JqXG5cdC8vIC0tLS0tPiBnZXQgYWxsIHByb2plY3RzIGZyb20gcHJvamVjdHMgc3RvcmFnZVxuXHQvLyAtLS0tLT4gZ2V0IHRoZSBzZWxlY3RlZCBwcm9qZWN0XG5cdC8vIC0tLS0tPiBwdXNoIHRoZSBjcmVhdGVkIHRhc2sgb2JqIGludG8gdGhlIHNlbGVjdGVkIHByb2plY3QgdGFza3MgYXJyYXlcblx0Ly8gLS0tLS0+IHJ1biByZW5kZXIgdGFza3MgZnVuY3Rpb24gdG8gcmVuZGVyIGFsbCB0YXNrc1xuXHR0YXNrRGlhbG9nRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+IHtcblx0XHRjb25zdCB0YXNrVGl0bGUgPSB0YXNrVGl0bGVJbnB1dC52YWx1ZTtcblx0XHRjb25zdCB0YXNrRGV0YWlscyA9IHRhc2tEZXRhaWxzSW5wdXQudmFsdWU7XG5cdFx0Y29uc3QgdGFza0R1ZURhdGUgPSB0YXNrRHVlRGF0ZUlucHV0LnZhbHVlO1xuXHRcdGNvbnN0IHRhc2tPYmogPSBuZXcgVGFzayh0YXNrVGl0bGUsIHRhc2tEZXRhaWxzLCB0YXNrRHVlRGF0ZSk7XG5cdFx0Y29uc3QgcHJvamVjdHMgPSBQcm9qZWN0c1N0b3JhZ2UuZ2V0UHJvamVjdHMoKTtcblx0XHRjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlzU2VsZWN0ZWQpO1xuXHRcdHNlbGVjdGVkUHJvamVjdC5hZGRUYXNrKHRhc2tPYmopO1xuXHRcdHJlbmRlclNlbGVjdGVkVGFza3Moc2VsZWN0ZWRQcm9qZWN0KTtcblx0fSk7XG5cblx0Ly8gVGFzayBjb250YWluZXIgRXZlbnQgbGlzdGVuZXJcblx0dGFza3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0Y29uc3QgdGFyZ2V0QnV0dG9uRGF0YSA9IGUudGFyZ2V0LmRhdGFzZXQuYWN0aW9uO1xuXHRcdGlmICh0YXJnZXRCdXR0b25EYXRhID09PSBcImZhdm9yaXRlLXRhc2tcIikge1xuXHRcdFx0aGFuZGxlVGFza0Zhdm9yaXRlKGUpO1xuXHRcdH1cblx0XHRpZiAodGFyZ2V0QnV0dG9uRGF0YSA9PT0gXCJkZWxldGUtdGFza1wiKSB7XG5cdFx0XHRoYW5kbGVUYXNrRGVsZXRlKGUpO1xuXHRcdH1cblx0XHRpZiAodGFyZ2V0QnV0dG9uRGF0YSA9PT0gXCJlZGl0LXRhc2tcIikge1xuXHRcdFx0aGFuZGxlVGFza0VkaXQoZSk7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBDcmVhdGUgZGVmYXVsdCB0YXNrc1xuXHRjcmVhdGVEZWZhdWx0VGFzayhcIlRhc2sgb25lXCIsIFwic29tZSBkZXRhaWxzIGFib3V0IHRhc2sgb25lXCIsIFwiMjAyNC0zLTE1XCIpO1xuXHRjcmVhdGVEZWZhdWx0VGFzayhcIlRhc2sgdHdvXCIsIFwic29tZSBkZXRhaWxzIGFib3V0IHRhc2sgdHdvXCIsIFwiMjAyNC0zLTIwXCIpO1xuXG5cdC8vIFJlbmRlciB0YXNrcyAoZGVmYXVsdCkgZm9yIHByb2plY3Qgb25lIChkZWZhdWx0KSB3aGVuIHBhZ2UgbG9hZHMgZm9yIHRoZSBmaXJzdCB0aW1lXG5cdHJlbmRlclNlbGVjdGVkVGFza3MoUHJvamVjdHNTdG9yYWdlLmdldFByb2plY3RzKClbMF0pO1xufVxuXG4vLyB1dGlsOiBjcmVhdGVzIGRlZmF1bHQgdGFza3MgaW5zaWRlIHRoZSBmaXJzdCBwcm9qZWN0IChkZWZhdWx0KTtcbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRUYXNrKHRpdGxlLCBkZXRhaWxzLCBkYXRlKSB7XG5cdGNvbnN0IHRhc2tPYmogPSBuZXcgVGFzayh0aXRsZSwgZGV0YWlscywgZGF0ZSk7XG5cdGNvbnN0IHByb2plY3QgPSBQcm9qZWN0c1N0b3JhZ2UuZ2V0UHJvamVjdHMoKVswXTtcblx0cHJvamVjdC50YXNrcy5wdXNoKHRhc2tPYmopO1xufVxuXG4vLyB1dGlsOiBoYW5kbGVzIHRhc2sgZmF2b3JpdGVcbi8vIC0tLS0tPiBzdG9yZSB0aGUgdGFzayBjb250YWluZXIgZGF0YSBwcm9qZWN0IGluIGEgdmFyXG4vLyAtLS0tLT4gZ2V0IGFsbCBwcm9qZWN0cyBmcm9tIHByb2plY3RzIHN0b3JhZ2Vcbi8vIC0tLS0tPiBmaW5kIHRoZSBwcm9qZWN0IG9iaiB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgdGhlIHN0b3JlZCBkYXRhIHByb2plY3Rcbi8vIC0tLS0tPiBsb29wIHRocm91Z2ggdGhlIHByb2ogb2JqIHRhc2tzIGFuZCBmaW5kIHRoZSBzZWxlY3RlZCB0YXNrXG4vLyAtLS0tLT4gdG9nZ2xlIGl0J3MgZmF2b3JpdGUgcHJvcFxuLy8gLS0tLS0+IHRvZ2dsZSBhY3RpdmUgZmF2IGNsYXNzIG9uIHRoZSBmYXZvcml0ZSBidXR0b25cbmZ1bmN0aW9uIGhhbmRsZVRhc2tGYXZvcml0ZShlKSB7XG5cdGNvbnN0IHRhc2tFbGVtZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQ7XG5cdGNvbnN0IHByb2plY3RzID0gUHJvamVjdHNTdG9yYWdlLmdldFByb2plY3RzKCk7XG5cdGNvbnN0IHBhcmVudFByb2plY3QgPSBwcm9qZWN0cy5maW5kKFxuXHRcdChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IHRhc2tFbGVtZW50LnByb2plY3Rcblx0KTtcblx0Y29uc3QgdGFza09iaiA9IHBhcmVudFByb2plY3QudGFza3MuZmluZChcblx0XHQodGFzaykgPT4gdGFzay5nZXRJZCgpID09PSB0YXNrRWxlbWVudC5rZXlcblx0KTtcblx0dGFza09iai50b2dnbGVGYXZvcml0ZSgpO1xuXHRjb25zb2xlLmxvZyh0YXNrT2JqKTtcblxuXHRlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlX2ZhdlwiKTtcbn1cblxuLy8gdXRpbDogZGVsZXRlcyB0YXNrc1xuZnVuY3Rpb24gaGFuZGxlVGFza0RlbGV0ZShlKSB7XG5cdGNvbnN0IHRhc2tFbGVtZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQ7XG5cdGNvbnN0IHByb2plY3RzID0gUHJvamVjdHNTdG9yYWdlLmdldFByb2plY3RzKCk7XG5cdGNvbnN0IHBhcmVudFByb2plY3QgPSBwcm9qZWN0cy5maW5kKFxuXHRcdChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IHRhc2tFbGVtZW50LnByb2plY3Rcblx0KTtcblx0cGFyZW50UHJvamVjdC50YXNrcyA9IHBhcmVudFByb2plY3QudGFza3MuZmlsdGVyKFxuXHRcdCh0YXNrKSA9PiB0YXNrLmdldElkKCkgIT09IHRhc2tFbGVtZW50LmtleVxuXHQpO1xuXG5cdC8vIEluaXRpYWwgcmVuZGVyaW5nIG9uIGRlbGV0aW9uIGZ1bmN0aW9uYWxpdHkgPDwtLS0tLVxuXHRjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlzU2VsZWN0ZWQpO1xuXHRzZWxlY3RlZFByb2plY3QgPyByZW5kZXJTZWxlY3RlZFRhc2tzKHNlbGVjdGVkUHJvamVjdCkgOiByZW5kZXJBbGxUYXNrcygpO1xufVxuIiwiaW1wb3J0IFByb2plY3RzU3RvcmFnZSBmcm9tIFwiLi9Qcm9qZWN0c1N0b3JhZ2VcIjtcbmltcG9ydCB7XG5cdHJlbmRlckFsbFRhc2tzLFxuXHRyZW5kZXJTZWxlY3RlZFRhc2tzLFxuXHRyZW5kZXJGYXZvcml0ZVRhc2tzLFxuXHRyZW5kZXJUb2RheVRhc2tzLFxufSBmcm9tIFwiLi9yZW5kZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVWlDb250cm9sbGVyKCkge1xuXHRjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1idG5cIik7XG5cdGNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbGwtdGFza3Mtb3B0aW9uXCIpO1xuXHRjb25zdCB0b0RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kYXktb3B0aW9uXCIpO1xuXHRjb25zdCBmYXZvcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmF2b3JpdGUtb3B0aW9uXCIpO1xuXHRjb25zdCByZW5kZXJPcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZW5kZXItb3B0aW9uc1wiKTtcblx0Y29uc3QgcHJvamVjdFRpdGxlRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZS1kaXNwbGF5XCIpO1xuXHRjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHMtY29udGFpbmVyXCIpO1xuXG5cdGFsbFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0cmVzZXRTZWxlY3Rpb25TdHlsZXMoKTtcblx0XHRhbGxUYXNrcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHRcdHByb2plY3RUaXRsZURpc3BsYXkudGV4dENvbnRlbnQgPSBcIkFsbCBUYXNrc1wiO1xuXHRcdFByb2plY3RzU3RvcmFnZS5kZXNlbGVjdEFsbFByb2plY3RzKCk7XG5cdFx0cmVuZGVyQWxsVGFza3MoKTtcblx0fSk7XG5cblx0ZmF2b3JpdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRyZXNldFNlbGVjdGlvblN0eWxlcygpO1xuXHRcdGZhdm9yaXRlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdFx0cHJvamVjdFRpdGxlRGlzcGxheS50ZXh0Q29udGVudCA9IFwiRmF2b3JpdGVzXCI7XG5cdFx0UHJvamVjdHNTdG9yYWdlLmRlc2VsZWN0QWxsUHJvamVjdHMoKTtcblx0XHRyZW5kZXJGYXZvcml0ZVRhc2tzKCk7XG5cdH0pO1xuXG5cdHRvRGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0cmVzZXRTZWxlY3Rpb25TdHlsZXMoKTtcblx0XHR0b0RheS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHRcdHByb2plY3RUaXRsZURpc3BsYXkudGV4dENvbnRlbnQgPSBcIlRvZGF5J3MgVGFza3NcIjtcblx0XHRQcm9qZWN0c1N0b3JhZ2UuZGVzZWxlY3RBbGxQcm9qZWN0cygpO1xuXHRcdHJlbmRlclRvZGF5VGFza3MoKTtcblx0fSk7XG5cblx0Ly8gQWxsIHRhc2tzIHJlbmRlciBhcyBhIGRlZmF1bHQgd2hlbiBwYWdlIGZpcnN0IGxvYWRzXG5cdGFsbFRhc2tzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdGFkZFRhc2tCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRyZW5kZXJBbGxUYXNrcygpO1xuXG5cdC8vIHV0aWw6IHJlc2V0cyBzZWxlY3Rpb25zIHN0eWxlc1xuXHRmdW5jdGlvbiByZXNldFNlbGVjdGlvblN0eWxlcygpIHtcblx0XHRhZGRUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRbLi4ucmVuZGVyT3B0aW9uc0NvbnRhaW5lci5jaGlsZHJlbl0uZm9yRWFjaCgoZWxlbWVudCkgPT5cblx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuXHRcdCk7XG5cdFx0Wy4uLnByb2plY3RzQ29udGFpbmVyLmNoaWxkcmVuXS5mb3JFYWNoKChwcm9qZWN0KSA9PlxuXHRcdFx0cHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG5cdFx0KTtcblx0fVxufVxuXG4vLyBoYW5kbGUgcHJvamVjdCBTZWxlY3Rpb25cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVQcm9qZWN0U2VsZWN0aW9uKGUpIHtcblx0Y29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgcmVuZGVyT3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVuZGVyLW9wdGlvbnNcIik7XG5cdGNvbnN0IHByb2plY3RUaXRsZURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGl0bGUtZGlzcGxheVwiKTtcblx0Y29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stYnRuXCIpO1xuXHRjb25zdCBwcm9qZWN0RWxlbWVudCA9IGUuY3VycmVudFRhcmdldDtcblx0Y29uc3QgcHJvamVjdHMgPSBQcm9qZWN0c1N0b3JhZ2UuZ2V0UHJvamVjdHMoKTtcblx0Y29uc3QgcHJvamVjdCA9IHByb2plY3RzLm1hcCgocHJvaikgPT4ge1xuXHRcdHByb2ouZ2V0SWQoKSA9PT0gcHJvamVjdEVsZW1lbnQuZGF0YXNldC5rZXlcblx0XHRcdD8gKHByb2ouaXNTZWxlY3RlZCA9IHRydWUpXG5cdFx0XHQ6IChwcm9qLmlzU2VsZWN0ZWQgPSBmYWxzZSk7XG5cdH0pO1xuXHRjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0cy5maW5kKFxuXHRcdChwcm9qKSA9PiBwcm9qLmdldElkKCkgPT09IHByb2plY3RFbGVtZW50LmRhdGFzZXQua2V5XG5cdCk7XG5cdFsuLi5wcm9qZWN0c0NvbnRhaW5lci5jaGlsZHJlbl0uZm9yRWFjaCgocHJvamVjdCkgPT5cblx0XHRwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcblx0KTtcblx0Wy4uLnJlbmRlck9wdGlvbnNDb250YWluZXIuY2hpbGRyZW5dLmZvckVhY2goKGVsZW1lbnQpID0+XG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG5cdCk7XG5cdGFkZFRhc2tCdG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0ZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdHByb2plY3RUaXRsZURpc3BsYXkudGV4dENvbnRlbnQgPSBzZWxlY3RlZFByb2plY3QuZ2V0VGl0bGUoKTtcblx0cmVuZGVyU2VsZWN0ZWRUYXNrcyhzZWxlY3RlZFByb2plY3QpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEVsZW1lbnQodGl0bGUpIHtcblx0Y29uc3QgcHJvamVjdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwcm9qZWN0V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF9pdGVtXCIpO1xuXG5cdGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblx0cHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X25hbWVcIik7XG5cdHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG5cdGNvbnN0IG9wdGlvbnNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0b3B0aW9uc1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3Rfb3B0aW9uc1wiKTtcblxuXHRjb25zdCByZW5hbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRyZW5hbWVCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3Rfb3B0aW9uXCIpO1xuXHRyZW5hbWVCdG4udGV4dENvbnRlbnQgPSBcInJlbmFtZVwiO1xuXHRyZW5hbWVCdG4uZGF0YXNldC5hY3Rpb24gPSBcInJlbmFtZS1wcm9qZWN0XCI7XG5cblx0Y29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0ZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X29wdGlvblwiKTtcblx0ZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIik7XG5cdGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiZGVsZXRlXCI7XG5cdGRlbGV0ZUJ0bi5kYXRhc2V0LmFjdGlvbiA9IFwiZGVsZXRlLXByb2plY3RcIjtcblxuXHRvcHRpb25zV3JhcHBlci5hcHBlbmRDaGlsZChyZW5hbWVCdG4pO1xuXHRvcHRpb25zV3JhcHBlci5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXHRwcm9qZWN0V3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXHRwcm9qZWN0V3JhcHBlci5hcHBlbmRDaGlsZChvcHRpb25zV3JhcHBlcik7XG5cblx0cmV0dXJuIHByb2plY3RXcmFwcGVyO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGFza0VsZW1lbnQodGl0bGUsIGRldGFpbHMsIGRhdGUsIGZhdm9yaXRlKSB7XG5cdGNvbnN0IHRhc2tXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGFza1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG5cblx0Y29uc3QgdGFza0luZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0YXNrSW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza19pbmZvXCIpO1xuXG5cdGNvbnN0IHRhc2tJbmZvV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHRhc2tJbmZvV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwidGFza19pbmZvX193cmFwcGVyXCIpO1xuXG5cdGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblx0dGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX3RpdGxlXCIpO1xuXHR0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuXHRjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHR0YXNrRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwidGFza19kZXRhaWxzXCIpO1xuXHR0YXNrRGV0YWlscy50ZXh0Q29udGVudCA9IGRldGFpbHM7XG5cblx0Y29uc3QgdGFza0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGFza0NoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrX2NoZWNrYm94XCIpO1xuXHR0YXNrQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHR0YXNrQ2hlY2tib3guY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZV9jaGVja2JveFwiKTtcblx0XHR0YXNrVGl0bGUuY2xhc3NMaXN0LnRvZ2dsZShcImxpbmVfdGhyb3VnaFwiKTtcblx0XHR0YXNrRGV0YWlscy5jbGFzc0xpc3QudG9nZ2xlKFwibGluZV90aHJvdWdoXCIpO1xuXHR9KTtcblxuXHR0YXNrSW5mb1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblx0dGFza0luZm9XcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzKTtcblx0dGFza0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NoZWNrYm94KTtcblx0dGFza0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0luZm9XcmFwcGVyKTtcblxuXHRjb25zdCB0YXNrT3B0aW9uc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0YXNrT3B0aW9uc1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcInRhc2tfb3B0aW9uc1wiKTtcblxuXHRjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHR0YXNrRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZHVlX2RhdGVcIik7XG5cdHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gZGF0ZTtcblxuXHRjb25zdCB0YXNrRmF2b3JpdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHR0YXNrRmF2b3JpdGVCdG4uY2xhc3NMaXN0LmFkZChcInRhc2tfYnRuXCIpO1xuXHR0YXNrRmF2b3JpdGVCdG4uY2xhc3NMaXN0LmFkZChcImZhdlwiKTtcblx0dGFza0Zhdm9yaXRlQnRuLnRleHRDb250ZW50ID0gXCJGYXZvcml0ZVwiO1xuXHR0YXNrRmF2b3JpdGVCdG4uZGF0YXNldC5hY3Rpb24gPSBcImZhdm9yaXRlLXRhc2tcIjtcblx0ZmF2b3JpdGVcblx0XHQ/IHRhc2tGYXZvcml0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlX2ZhdlwiKVxuXHRcdDogdGFza0Zhdm9yaXRlQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVfZmF2XCIpO1xuXG5cdGNvbnN0IHRhc2tFZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0dGFza0VkaXRCdG4uY2xhc3NMaXN0LmFkZChcInRhc2tfYnRuXCIpO1xuXHR0YXNrRWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdFwiKTtcblx0dGFza0VkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcblx0dGFza0VkaXRCdG4uZGF0YXNldC5hY3Rpb24gPSBcImVkaXQtdGFza1wiO1xuXG5cdGNvbnN0IHRhc2tEZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHR0YXNrRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX2J0blwiKTtcblx0dGFza0RlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIpO1xuXHR0YXNrRGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblx0dGFza0RlbGV0ZUJ0bi5kYXRhc2V0LmFjdGlvbiA9IFwiZGVsZXRlLXRhc2tcIjtcblxuXHR0YXNrT3B0aW9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuXHR0YXNrT3B0aW9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0Zhdm9yaXRlQnRuKTtcblx0dGFza09wdGlvbnNXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tFZGl0QnRuKTtcblx0dGFza09wdGlvbnNXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tEZWxldGVCdG4pO1xuXG5cdHRhc2tXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tJbmZvQ29udGFpbmVyKTtcblx0dGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza09wdGlvbnNXcmFwcGVyKTtcblxuXHRyZXR1cm4gdGFza1dyYXBwZXI7XG59XG4iLCJpbXBvcnQgdW5pcWlkIGZyb20gXCJ1bmlxaWRcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuXHRjb25zdHJ1Y3Rvcih0aXRsZSkge1xuXHRcdHRoaXMudGl0bGUgPSB0aXRsZTtcblx0XHR0aGlzLl9pZCA9IHVuaXFpZCgpO1xuXHRcdHRoaXMudGFza3MgPSBbXTtcblx0XHR0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcblx0fVxuXG5cdGdldFRpdGxlKCkge1xuXHRcdHJldHVybiB0aGlzLnRpdGxlO1xuXHR9XG5cdHNldFRpdGxlKG5ld1RpdGxlKSB7XG5cdFx0dGhpcy50aXRsZSA9IG5ld1RpdGxlO1xuXHR9XG5cdGdldElkKCkge1xuXHRcdHJldHVybiB0aGlzLl9pZDtcblx0fVxuXHRhZGRUYXNrKHRhc2spIHtcblx0XHRpZiAodGhpcy5pc1NlbGVjdGVkKSB7XG5cdFx0XHR0aGlzLnRhc2tzLnB1c2godGFzayk7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgY3JlYXRlUHJvamVjdEVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlUHJvamVjdEVsZW1lbnRcIjtcbmltcG9ydCBjcmVhdGVUYXNrRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVUYXNrRWxlbWVudFwiO1xuaW1wb3J0IFByb2plY3RzU3RvcmFnZSBmcm9tIFwiLi9Qcm9qZWN0c1N0b3JhZ2VcIjtcbmltcG9ydCB7IGhhbmRsZVByb2plY3RTZWxlY3Rpb24gfSBmcm9tIFwiLi9VaUNvbnRyb2xsZXJcIjtcblxuLy8gKiogRnVuY3Rpb24gdG8gcmVuZGVyIGFsbCBwcm9qZWN0cyBpbnNpZGUgdGhlIHByb2plY3RzIHN0b3JhZ2U6XG4vLyAtLS0tLT4gY2xlYXIgdGhlIHByb2plY3RzIGNvbnRhaW5lciBkaXZcbi8vIC0tLS0tPiBnZXQgdGhlIHByb2plY3RzIHN0b3JhZ2UgYXJyYXlcbi8vIC0tLS0tPiBsb29wIHRocm91Z2ggdGhlIGFycmF5IGFuZCBjcmVhdGUgYSBwcm9qZWN0IGVsZW1lbnQgZm9yIGVhY2ggcHJvamVjdCBvYmpcbi8vIC0tLS0tPiBhcHBlbmQgZWFjaCBwcm9qZWN0IGVsZW1lbnQgdG8gdGhlIHByb2plY3RzIGNvbnRhaW5lciBkaXZcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xuXHRjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHMtY29udGFpbmVyXCIpO1xuXHRjbGVhckNvbnRhaW5lckVsZW1lbnQocHJvamVjdHNDb250YWluZXIpO1xuXG5cdGNvbnN0IHByb2plY3RzID0gUHJvamVjdHNTdG9yYWdlLmdldFByb2plY3RzKCk7XG5cdHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcblx0XHRjb25zdCBjcmVhdGVkUHJvamVjdEVsZW1lbnQgPSBjcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0LmdldFRpdGxlKCkpO1xuXHRcdGNyZWF0ZWRQcm9qZWN0RWxlbWVudC5kYXRhc2V0LmtleSA9IHByb2plY3QuZ2V0SWQoKTtcblx0XHQvLyBpZiAocHJvamVjdC5pc1NlbGVjdGVkKSB7XG5cdFx0Ly8gXHRjcmVhdGVkUHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0XHQvLyB9XG5cdFx0Y3JlYXRlZFByb2plY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQcm9qZWN0U2VsZWN0aW9uKTtcblx0XHRwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVkUHJvamVjdEVsZW1lbnQpO1xuXHR9KTtcbn1cblxuLy8gUmVuZGVycyBhbGwgdGFza3MgaW5zaWRlIGEgc2VsZWN0ZWQgcHJvamVjdCBhcnJheVxuZnVuY3Rpb24gcmVuZGVyU2VsZWN0ZWRUYXNrcyhzZWxlY3RlZFByb2plY3RPYmopIHtcblx0Y29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLXdyYXBwZXJcIik7XG5cdGNsZWFyQ29udGFpbmVyRWxlbWVudCh0YXNrc0NvbnRhaW5lcik7XG5cdHNlbGVjdGVkUHJvamVjdE9iai50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG5cdFx0Y29uc3QgY3JlYXRlZFRhc2tFbGVtZW50ID0gY3JlYXRlVGFza0VsZW1lbnQoXG5cdFx0XHR0YXNrLnRpdGxlLFxuXHRcdFx0dGFzay5kZXRhaWxzLFxuXHRcdFx0dGFzay5kYXRlLFxuXHRcdFx0dGFzay5mYXZvcml0ZVxuXHRcdCk7XG5cdFx0Y3JlYXRlZFRhc2tFbGVtZW50LmRhdGFzZXQua2V5ID0gdGFzay5nZXRJZCgpO1xuXHRcdGNyZWF0ZWRUYXNrRWxlbWVudC5kYXRhc2V0LnByb2plY3QgPSBzZWxlY3RlZFByb2plY3RPYmouZ2V0VGl0bGUoKTtcblx0XHR0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVkVGFza0VsZW1lbnQpO1xuXHR9KTtcbn1cblxuLy8gUmVuZGVycyBhbGwgdGFza3MgaW5zaWRlIGFsbCBwcm9qZWN0c1xuZnVuY3Rpb24gcmVuZGVyQWxsVGFza3MoKSB7XG5cdGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrcy13cmFwcGVyXCIpO1xuXHRjbGVhckNvbnRhaW5lckVsZW1lbnQodGFza3NDb250YWluZXIpO1xuXHRjb25zdCBwcm9qZWN0cyA9IFByb2plY3RzU3RvcmFnZS5nZXRQcm9qZWN0cygpO1xuXHRwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG5cdFx0cHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG5cdFx0XHRjb25zdCBjcmVhdGVkVGFza0VsZW1lbnQgPSBjcmVhdGVUYXNrRWxlbWVudChcblx0XHRcdFx0dGFzay50aXRsZSxcblx0XHRcdFx0dGFzay5kZXRhaWxzLFxuXHRcdFx0XHR0YXNrLmRhdGUsXG5cdFx0XHRcdHRhc2suZmF2b3JpdGVcblx0XHRcdCk7XG5cdFx0XHRjcmVhdGVkVGFza0VsZW1lbnQuZGF0YXNldC5rZXkgPSB0YXNrLmdldElkKCk7XG5cdFx0XHRjcmVhdGVkVGFza0VsZW1lbnQuZGF0YXNldC5wcm9qZWN0ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xuXHRcdFx0dGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlZFRhc2tFbGVtZW50KTtcblx0XHR9KTtcblx0fSk7XG59XG4vLyByZW5kZXJzIGZhdm9yaXRlIHRhc2tzXG5mdW5jdGlvbiByZW5kZXJGYXZvcml0ZVRhc2tzKCkge1xuXHRjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3Mtd3JhcHBlclwiKTtcblx0Y2xlYXJDb250YWluZXJFbGVtZW50KHRhc2tzQ29udGFpbmVyKTtcblx0Y29uc3QgcHJvamVjdHMgPSBQcm9qZWN0c1N0b3JhZ2UuZ2V0UHJvamVjdHMoKTtcblx0cHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuXHRcdHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuXHRcdFx0aWYgKHRhc2suZmF2b3JpdGUpIHtcblx0XHRcdFx0Y29uc3QgY3JlYXRlZFRhc2tFbGVtZW50ID0gY3JlYXRlVGFza0VsZW1lbnQoXG5cdFx0XHRcdFx0dGFzay50aXRsZSxcblx0XHRcdFx0XHR0YXNrLmRldGFpbHMsXG5cdFx0XHRcdFx0dGFzay5kYXRlLFxuXHRcdFx0XHRcdHRhc2suZmF2b3JpdGVcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3JlYXRlZFRhc2tFbGVtZW50LmRhdGFzZXQua2V5ID0gdGFzay5nZXRJZCgpO1xuXHRcdFx0XHRjcmVhdGVkVGFza0VsZW1lbnQuZGF0YXNldC5wcm9qZWN0ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xuXHRcdFx0XHR0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVkVGFza0VsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9kYXlUYXNrcygpIHtcblx0Y29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLXdyYXBwZXJcIik7XG5cdGNsZWFyQ29udGFpbmVyRWxlbWVudCh0YXNrc0NvbnRhaW5lcik7XG5cdGNvbnN0IHByb2plY3RzID0gUHJvamVjdHNTdG9yYWdlLmdldFByb2plY3RzKCk7XG5cdGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcblxuXHRwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG5cdFx0cHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG5cdFx0XHRjb25zdCB0YXNrRHVlRGF0ZSA9IG5ldyBEYXRlKHRhc2suZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG5cdFx0XHRpZiAodGFza0R1ZURhdGUgPT09IHRvZGF5KSB7XG5cdFx0XHRcdGNvbnN0IGNyZWF0ZWRUYXNrRWxlbWVudCA9IGNyZWF0ZVRhc2tFbGVtZW50KFxuXHRcdFx0XHRcdHRhc2sudGl0bGUsXG5cdFx0XHRcdFx0dGFzay5kZXRhaWxzLFxuXHRcdFx0XHRcdHRhc2suZGF0ZSxcblx0XHRcdFx0XHR0YXNrLmZhdm9yaXRlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGNyZWF0ZWRUYXNrRWxlbWVudC5kYXRhc2V0LmtleSA9IHRhc2suZ2V0SWQoKTtcblx0XHRcdFx0Y3JlYXRlZFRhc2tFbGVtZW50LmRhdGFzZXQucHJvamVjdCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcblx0XHRcdFx0dGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlZFRhc2tFbGVtZW50KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59XG5cbi8vIHV0aWwgZnVuY3Rpb246IGNsZWFyIGFsbCBjaGlsZHJlbiBvZiBhIGNvbnRhaW5lciBlbGVtZW50XG5mdW5jdGlvbiBjbGVhckNvbnRhaW5lckVsZW1lbnQoY29udGFpbmVyRWxlbWVudCkge1xuXHR3aGlsZSAoY29udGFpbmVyRWxlbWVudC5maXJzdENoaWxkKSB7XG5cdFx0Y29udGFpbmVyRWxlbWVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xuXHR9XG59XG5cbmV4cG9ydCB7XG5cdHJlbmRlclByb2plY3RzLFxuXHRyZW5kZXJTZWxlY3RlZFRhc2tzLFxuXHRyZW5kZXJBbGxUYXNrcyxcblx0cmVuZGVyRmF2b3JpdGVUYXNrcyxcblx0cmVuZGVyVG9kYXlUYXNrcyxcbn07XG4iLCJpbXBvcnQgdW5pcWlkIGZyb20gXCJ1bmlxaWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG5cdGNvbnN0cnVjdG9yKHRpdGxlLCBkZXRhaWxzID0gXCJcIiwgZGF0ZSkge1xuXHRcdHRoaXMudGl0bGUgPSB0aXRsZTtcblx0XHR0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xuXHRcdHRoaXMuZGF0ZSA9IGRhdGU7XG5cdFx0dGhpcy5mYXZvcml0ZSA9IGZhbHNlO1xuXHRcdHRoaXMuX2lkID0gdW5pcWlkKCk7XG5cdFx0dGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG5cdH1cblxuXHRzZXRUaXRsZShuZXdUaXRsZSkge1xuXHRcdHRoaXMudGl0bGUgPSBuZXdUaXRsZTtcblx0fVxuXHRzZXREZXRhaWxzKG5ld0RldGFpbHMpIHtcblx0XHR0aGlzLmRldGFpbHMgPSBuZXdEZXRhaWxzO1xuXHR9XG5cdHNldERhdGUobmV3RGF0ZSkge1xuXHRcdHRoaXMuZGF0ZSA9IG5ld0RhdGU7XG5cdH1cblx0dG9nZ2xlRmF2b3JpdGUoKSB7XG5cdFx0dGhpcy5mYXZvcml0ZSA9IHRoaXMuZmF2b3JpdGUgPyBmYWxzZSA6IHRydWU7XG5cdH1cblx0Z2V0SWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2lkO1xuXHR9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL21haW4uY3NzXCI7XG5cbmltcG9ydCBwcm9qZWN0c0NvbnRyb2xsZXIgZnJvbSBcIi4vUHJvamVjdHNDb250cm9sbGVyXCI7XG5pbXBvcnQgdGFza3NDb250cm9sbGVyIGZyb20gXCIuL1Rhc2tzQ29udHJvbGxlclwiO1xuaW1wb3J0IFVpQ29udHJvbGxlciBmcm9tIFwiLi9VaUNvbnRyb2xsZXJcIjtcblxucHJvamVjdHNDb250cm9sbGVyKCk7XG50YXNrc0NvbnRyb2xsZXIoKTtcblVpQ29udHJvbGxlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9