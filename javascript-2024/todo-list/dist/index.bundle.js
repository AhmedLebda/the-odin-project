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

	// Show modal to add a new project and resets the form
	addProjectBtn.addEventListener("click", () => {
		projectDialog.showModal();
		projectTitleInput.value = null;
	});

	// Close add new project modal
	projectDialogCancel.addEventListener("click", () => projectDialog.close());

	// creates a new project obj and add it to projects storage then renders all projects
	projectDialogForm.addEventListener("submit", () => {
		const projectTitle = projectTitleInput.value;
		const projectObj = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](projectTitle);
		_ProjectsStorage__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(projectObj);
		(0,_render__WEBPACK_IMPORTED_MODULE_2__.renderProjects)();
	});

	// Add events to project's Delete and Edit buttons
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

// util: creates default projects
function createDefaultProject(title) {
	const projOne = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](title);
	_ProjectsStorage__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(projOne);
}

// util: handle project delete:
function handleProjectDelete(e) {
	const projectTitleDisplay = document.querySelector("#project-title-display");
	const addTaskBtn = document.querySelector("#add-task-btn");
	const allTasks = document.querySelector("#all-tasks-option");
	const projectElementContainer = e.target.parentElement.parentElement;

	// Delete the project from storage and delete the project Element
	_ProjectsStorage__WEBPACK_IMPORTED_MODULE_1__["default"].deleteProject(projectElementContainer.dataset.key);
	projectElementContainer.remove();

	projectTitleDisplay.textContent = "All Tasks";
	allTasks.classList.add("active");
	addTaskBtn.style.display = "none";
	(0,_render__WEBPACK_IMPORTED_MODULE_2__.renderAllTasks)();
}

// util: handle project rename:
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
	const projectElementContainer = e.target.parentElement.parentElement;
	const projectTitle = projectElementContainer.querySelector("h3");

	projectRenameModal.showModal();
	projectRenameInput.value = null;

	projectRenameCancel.addEventListener("click", () =>
		projectRenameModal.close()
	);

	projectRenameForm.addEventListener("submit", () => {
		let newTitle = projectRenameInput.value;
		_ProjectsStorage__WEBPACK_IMPORTED_MODULE_1__["default"].renameProject(
			projectElementContainer.dataset.key,
			newTitle
		);

		projectTitle.textContent = newTitle;
		projectTitleDisplay.textContent = newTitle;
	});
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
	static deleteProject(projectKey) {
		this.projects = this.projects.filter(
			(project) => project.getId() !== projectKey
		);
	}
	static deselectAllProjects() {
		this.projects.map((project) => (project.isSelected = false));
	}
	static selectProject(projectKey) {
		this.projects.map((proj) => {
			proj.getId() === projectKey
				? (proj.isSelected = true)
				: (proj.isSelected = false);
		});
	}
	static getSelectedProject() {
		return this.projects.find((proj) => proj.isSelected);
	}

	static renameProject(projectKey, newName) {
		const targetProject = this.projects.find(
			(project) => project.getId() === projectKey
		);
		targetProject.setTitle(newName);
	}

	static addTaskToProject(taskObj) {
		const selectedProject = this.getSelectedProject();
		selectedProject.addTask(taskObj);
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

	// Show modal to add a new task and resets the form
	addTaskBtn.addEventListener("click", () => {
		taskDialog.showModal();

		taskTitleInput.value = null;
		taskDetailsInput.value = null;
		taskDueDateInput.value = null;
	});

	// Close the add new task modal
	taskCancelBtn.addEventListener("click", () => taskDialog.close());

	// Creates new task obj and add it to the selected project tasks array
	taskDialogForm.addEventListener("submit", () => {
		const taskTitle = taskTitleInput.value;
		const taskDetails = taskDetailsInput.value;
		const taskDueDate = taskDueDateInput.value;
		const taskObj = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](taskTitle, taskDetails, taskDueDate);
		_ProjectsStorage__WEBPACK_IMPORTED_MODULE_0__["default"].addTaskToProject(taskObj);
		(0,_render__WEBPACK_IMPORTED_MODULE_2__.renderProjectTasks)(_ProjectsStorage__WEBPACK_IMPORTED_MODULE_0__["default"].getSelectedProject());
	});
	// Add events to task's Favorite, Delete and Edit buttons
	tasksContainer.addEventListener("click", (e) => {
		const clickedTargetData = e.target.dataset.action;
		if (clickedTargetData === "favorite-task") {
			TaskOptionsEventHandling(e).handleTaskFavorite();
		}
		if (clickedTargetData === "delete-task") {
			TaskOptionsEventHandling(e).handleTaskDelete();
		}
		if (clickedTargetData === "edit-task") {
			TaskOptionsEventHandling(e).handleTaskEdit();
		}
		if (clickedTargetData === "toggle-task-complete") {
			TaskOptionsEventHandling(e).handleTaskComplete();
		}
	});

	// Create default tasks
	createDefaultTask("Task one", "some details about task one", "2024-3-15");
	createDefaultTask("Task two", "some details about task two", "2024-3-20");

	// default: render all tasks
	(0,_render__WEBPACK_IMPORTED_MODULE_2__.renderAllTasks)();
}

// util: creates default tasks inside the first project (default);
function createDefaultTask(title, details, date) {
	const taskObj = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](title, details, date);
	const project = _ProjectsStorage__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects()[0];
	project.tasks.push(taskObj);
}

// handles events for task : Favorite , Delete and Edit
function TaskOptionsEventHandling(e) {
	const taskContainer = e.target.parentElement.parentElement;
	const projects = _ProjectsStorage__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects();
	const parentProject = projects.find(
		(project) => project.getTitle() === taskContainer.dataset.project
	);
	const taskObj = parentProject.tasks.find(
		(task) => task.getId() === taskContainer.dataset.key
	);

	// util: toggles task's obj favorite prop and add a class (active_fav) to the task's favorite button
	function handleTaskFavorite() {
		taskObj.toggleFavorite();
		e.target.classList.toggle("active_fav");
	}

	// util: Deletes task obj from parent project arr and deletes the task element
	function handleTaskDelete() {
		parentProject.deleteTask(taskContainer.dataset.key);
		taskContainer.remove();
	}

	// Edits tasks
	function handleTaskEdit() {
		const editModal = document.querySelector(
			"[data-action='rename-task-modal'"
		);
		const editModalForm = editModal.querySelector("form");
		const editedTitleInput = document.querySelector(
			"[data-action='task-new-name-input'"
		);
		const editedDetailsInput = document.querySelector(
			"[data-action='task-new-details-input'"
		);
		const editedDateInput = document.querySelector(
			"[data-action='task-new-date-input'"
		);
		const cancelEditTaskBtn = document.querySelector(
			"[data-action='cancel-task-edit'"
		);
		const taskTitleElement = taskContainer.querySelector(".task_title");
		const taskDetailsElement = taskContainer.querySelector(".task_details");
		const taskDateElement = taskContainer.querySelector(".due_date");

		editModal.showModal();
		cancelEditTaskBtn.addEventListener("click", () => editModal.close());

		editModalForm.addEventListener("submit", () => {
			// Updates task object inside it's project array
			taskObj.setTitle(editedTitleInput.value);
			taskObj.setDetails(editedDetailsInput.value);
			taskObj.setDate(editedDateInput.value);

			// Updates task UI
			taskTitleElement.textContent = editedTitleInput.value;
			taskDetailsElement.textContent = editedDetailsInput.value;
			taskDateElement.textContent = editedDateInput.value;
		});

		// Resets edit task modal inputs
		editedTitleInput.value = null;
		editedDetailsInput.value = null;
		editedDateInput.value = null;
	}

	function handleTaskComplete() {
		taskObj.toggleIsComplete();
		const taskTitle = taskContainer.querySelector(".task_title");
		const taskDetails = taskContainer.querySelector(".task_details");
		e.target.classList.toggle("active_checkbox");
		taskTitle.classList.toggle("line_through");
		taskDetails.classList.toggle("line_through");
	}

	return {
		handleTaskFavorite,
		handleTaskDelete,
		handleTaskEdit,
		handleTaskComplete,
	};
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

	_ProjectsStorage__WEBPACK_IMPORTED_MODULE_0__["default"].selectProject(projectElement.dataset.key);
	const selectedProject = _ProjectsStorage__WEBPACK_IMPORTED_MODULE_0__["default"].getSelectedProject();

	[...projectsContainer.children].forEach((project) =>
		project.classList.remove("active")
	);
	[...renderOptionsContainer.children].forEach((element) =>
		element.classList.remove("active")
	);
	addTaskBtn.style.display = "block";
	e.currentTarget.classList.add("active");
	projectTitleDisplay.textContent = selectedProject.getTitle();
	(0,_render__WEBPACK_IMPORTED_MODULE_1__.renderProjectTasks)(selectedProject);
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
function createProjectElement(title, isSelected) {
	const projectWrapper = document.createElement("div");
	projectWrapper.classList.add("project_item");
	isSelected
		? projectWrapper.classList.add("active")
		: projectWrapper.classList.remove("active");

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
function createTaskElement(
	title,
	details,
	date,
	favorite,
	isComplete
) {
	const taskWrapper = document.createElement("div");
	taskWrapper.classList.add("task");

	const taskInfoContainer = document.createElement("div");
	taskInfoContainer.classList.add("task_info");

	const taskInfoWrapper = document.createElement("div");
	taskInfoWrapper.classList.add("task_info__wrapper");

	const taskTitle = document.createElement("h3");
	taskTitle.classList.add("task_title");
	taskTitle.textContent = title;
	isComplete
		? taskTitle.classList.add("line_through")
		: taskTitle.classList.remove("line_through");

	const taskDetails = document.createElement("p");
	taskDetails.classList.add("task_details");
	taskDetails.textContent = details;
	isComplete
		? taskDetails.classList.add("line_through")
		: taskDetails.classList.remove("line_through");

	const taskCheckbox = document.createElement("div");
	taskCheckbox.classList.add("task_checkbox");
	taskCheckbox.dataset.action = "toggle-task-complete";
	isComplete
		? taskCheckbox.classList.add("active_checkbox")
		: taskCheckbox.classList.remove("active_checkbox");

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

	deleteTask(taskKey) {
		this.tasks = this.tasks.filter((task) => task.getId() !== taskKey);
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
/* harmony export */   renderProjectTasks: () => (/* binding */ renderProjectTasks),
/* harmony export */   renderProjects: () => (/* binding */ renderProjects),
/* harmony export */   renderTodayTasks: () => (/* binding */ renderTodayTasks)
/* harmony export */ });
/* harmony import */ var _createProjectElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProjectElement */ "./src/createProjectElement.js");
/* harmony import */ var _createTaskElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTaskElement */ "./src/createTaskElement.js");
/* harmony import */ var _ProjectsStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectsStorage */ "./src/ProjectsStorage.js");
/* harmony import */ var _UiController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UiController */ "./src/UiController.js");





//  render all projects inside the projects storage:
function renderProjects() {
	const projectsContainer = document.querySelector("#projects-container");
	clearContainerElement(projectsContainer);

	const projects = _ProjectsStorage__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects();
	projects.forEach((project) => {
		const createdProjectElement = (0,_createProjectElement__WEBPACK_IMPORTED_MODULE_0__["default"])(
			project.getTitle(),
			project.isSelected
		);
		createdProjectElement.dataset.key = project.getId();
		createdProjectElement.addEventListener("click", _UiController__WEBPACK_IMPORTED_MODULE_3__.handleProjectSelection);
		projectsContainer.appendChild(createdProjectElement);
	});
}

// Renders all tasks inside a selected project array
function renderProjectTasks(selectedProjectObj) {
	const tasksContainer = document.querySelector("#tasks-wrapper");
	clearContainerElement(tasksContainer);
	selectedProjectObj.tasks.forEach((task) => {
		const createdTaskElement = (0,_createTaskElement__WEBPACK_IMPORTED_MODULE_1__["default"])(
			task.title,
			task.details,
			task.date,
			task.favorite,
			task.isComplete
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
				task.favorite,
				task.isComplete
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
					task.favorite,
					task.isComplete
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
					task.favorite,
					task.isComplete
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
	toggleIsComplete() {
		this.isComplete = this.isComplete ? false : true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxtREFBbUQsMkJBQTJCLGVBQWUsY0FBYyxHQUFHLFlBQVksNEJBQTRCLG9CQUFvQiwrQkFBK0IsR0FBRyxVQUFVLDRCQUE0QixzQkFBc0IsR0FBRyxTQUFTLG9CQUFvQixHQUFHLFNBQVMsK0JBQStCLEdBQUcsbUNBQW1DLG9CQUFvQiwyQkFBMkIsa0JBQWtCLDRCQUE0Qix1Q0FBdUMsOEJBQThCLEdBQUcsV0FBVyxtQkFBbUIsb0JBQW9CLEdBQUcsNENBQTRDLGtCQUFrQixvQkFBb0IscUJBQXFCLEdBQUcsaUNBQWlDLFlBQVksc0NBQXNDLGtCQUFrQiw4QkFBOEIsa0JBQWtCLDJCQUEyQixjQUFjLEdBQUcsd0JBQXdCLCtCQUErQixtQkFBbUIsb0JBQW9CLHVDQUF1Qyx3QkFBd0Isb0JBQW9CLEdBQUcsMkJBQTJCLGtCQUFrQiwyQkFBMkIsZ0NBQWdDLEtBQUssZ0JBQWdCLGtDQUFrQyxpQkFBaUIsb0JBQW9CLG9CQUFvQixzQkFBc0IsK0JBQStCLHFCQUFxQixHQUFHLFdBQVcsdUJBQXVCLGdDQUFnQyxHQUFHLGlCQUFpQixrQkFBa0IsbUNBQW1DLHdCQUF3QixvQkFBb0Isb0JBQW9CLHdCQUF3QixvQkFBb0IsZ0JBQWdCLEdBQUcsb0JBQW9CLGtCQUFrQixvQkFBb0IsZ0JBQWdCLEdBQUcsbUJBQW1CLFlBQVksb0JBQW9CLDRCQUE0QixpQkFBaUIsK0JBQStCLGlCQUFpQix1QkFBdUIsc0JBQXNCLEdBQUcseUJBQXlCLDhCQUE4QixHQUFHLFdBQVcsMEJBQTBCLEdBQUcsaUJBQWlCLDhCQUE4QixHQUFHLFFBQVEseUJBQXlCLCtCQUErQixvQkFBb0Isc0JBQXNCLGdDQUFnQyx1QkFBdUIsOEJBQThCLGlCQUFpQixxQkFBcUIsR0FBRyxjQUFjLDhCQUE4Qiw4QkFBOEIsR0FBRyw2QkFBNkIsWUFBWSxrQkFBa0IsR0FBRyxVQUFVLCtCQUErQixrQkFBa0IsZ0NBQWdDLGlCQUFpQix1QkFBdUIsb0JBQW9CLEdBQUcsa0JBQWtCLDRCQUE0QixrQkFBa0IsMkJBQTJCLGNBQWMsbUJBQW1CLHFCQUFxQix1QkFBdUIsR0FBRyw4QkFBOEIsa0JBQWtCLGtCQUFrQix3QkFBd0IsbUNBQW1DLDhCQUE4QixHQUFHLGNBQWMsa0JBQWtCLGNBQWMsR0FBRyxrQkFBa0IsZ0JBQWdCLGlCQUFpQix3QkFBd0IsdUJBQXVCLDRCQUE0QixvQkFBb0IsR0FBRyxvQkFBb0IsNEJBQTRCLEdBQUcsdUJBQXVCLGtCQUFrQiwyQkFBMkIsZ0JBQWdCLEdBQUcsZUFBZSwrQkFBK0Isc0JBQXNCLHNCQUFzQixpQkFBaUIsR0FBRyxpQkFBaUIsdUJBQXVCLDhCQUE4QixHQUFHLGlCQUFpQixrQkFBa0IsZ0JBQWdCLHdCQUF3QixHQUFHLGFBQWEsb0JBQW9CLDRCQUE0Qix1QkFBdUIsc0JBQXNCLGlCQUFpQixHQUFHLGFBQWEsb0JBQW9CLGlCQUFpQix1QkFBdUIsK0JBQStCLGlCQUFpQixHQUFHLFFBQVEsOEJBQThCLEdBQUcsZUFBZSwyQkFBMkIsaUJBQWlCLEdBQUcsU0FBUyw0QkFBNEIsR0FBRyxlQUFlLDhCQUE4QixHQUFHLGlCQUFpQixrQ0FBa0MsR0FBRyxpQ0FBaUMsZ0NBQWdDLHVCQUF1QixrQkFBa0IsNEJBQTRCLG9CQUFvQixhQUFhLGNBQWMscUNBQXFDLEdBQUcsaUJBQWlCLGtCQUFrQiwyQkFBMkIsZ0JBQWdCLDBCQUEwQixHQUFHLG1CQUFtQixrQkFBa0Isb0JBQW9CLGdCQUFnQixHQUFHLDBCQUEwQixZQUFZLEdBQUcsa0RBQWtELGtCQUFrQiwyQkFBMkIsZ0JBQWdCLEdBQUcscUJBQXFCO0FBQzEwTjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUMvUTFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQWtHO0FBQ2xHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMscUZBQU87Ozs7QUFJNEM7QUFDcEUsT0FBTyxpRUFBZSxxRkFBTyxJQUFJLHFGQUFPLFVBQVUscUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxLQUEyRSxDQUFDLHNDQWdCOUU7O0FBRUQ7QUFDQTtBQUNBLGlCQUFpQix5QkFBc0IsNkJBQTZCO0FBQ3BFLHNCQUFzQiw2QkFBNkI7QUFDbkQsbUJBQW1CLGdDQUFnQzs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q2dDO0FBQ2dCO0FBQ1U7O0FBRTNDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0RBQU87QUFDaEMsRUFBRSx3REFBZTtBQUNqQixFQUFFLHVEQUFjO0FBQ2hCLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLHVEQUFjO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixnREFBTztBQUM1QixDQUFDLHdEQUFlO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMsd0RBQWU7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx1REFBYztBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLHdEQUFlO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEdlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q2dEO0FBQ3RCO0FBQ29DOztBQUUvQztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZDQUFJO0FBQzFCLEVBQUUsd0RBQWU7QUFDakIsRUFBRSwyREFBa0IsQ0FBQyx3REFBZTtBQUNwQyxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLHVEQUFjO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiw2Q0FBSTtBQUN6QixpQkFBaUIsd0RBQWU7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0RBQWU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSmdEO0FBTTlCOztBQUVIO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdEQUFlO0FBQ2pCLEVBQUUsdURBQWM7QUFDaEIsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0RBQWU7QUFDakIsRUFBRSw0REFBbUI7QUFDckIsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0RBQWU7QUFDakIsRUFBRSx5REFBZ0I7QUFDbEIsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxDQUFDLHVEQUFjOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyx3REFBZTtBQUNoQix5QkFBeUIsd0RBQWU7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMkRBQWtCO0FBQ25COzs7Ozs7Ozs7Ozs7Ozs7O0FDL0VlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9FNEI7QUFDYjtBQUNmO0FBQ0E7QUFDQSxhQUFhLDZDQUFNO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQjBEO0FBQ047QUFDSjtBQUNROztBQUV4RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0Isd0RBQWU7QUFDakM7QUFDQSxnQ0FBZ0MsaUVBQW9CO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGlFQUFzQjtBQUN4RTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDhEQUFpQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0RBQWU7QUFDakM7QUFDQTtBQUNBLDhCQUE4Qiw4REFBaUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdEQUFlO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw4REFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3REFBZTtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw4REFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFRRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekgwQjs7QUFFYjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDZDQUFNO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM5QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7O0FBRWtDO0FBQ047QUFDTjs7QUFFMUMsK0RBQWtCO0FBQ2xCLDREQUFlO0FBQ2YseURBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91bmlxaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1Byb2plY3RzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvUHJvamVjdHNTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9UYXNrc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1VpQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlUHJvamVjdEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZVRhc2tFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRwYWRkaW5nOiAwO1xuXHRtYXJnaW46IDA7XG59XG5cbmJ1dHRvbiB7XG5cdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG5ib2R5IHtcblx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG5cdG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5pbWcge1xuXHRtYXgtd2lkdGg6IDEwMCU7XG59XG5sYWJlbCB7XG5cdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4vKiBIZWFkZXIgU3R5bGVzICovXG5cbmhlYWRlciB7XG5cdHBhZGRpbmc6IDFyZW0gMDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBzdGVlbGJsdWU7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmOWY5ZDA7XG59XG5cbi5sb2dvIHtcblx0Y29sb3I6ICMyNzU5ODM7XG5cdGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLyogY29udGVudCBTdHlsZXMgKi9cbi5jb250ZW50X3dyYXBwZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdG1pbi1oZWlnaHQ6IDgzdmg7XG59XG5cbi8qIFNpZGViYXIgU3R5bGVzICovXG5hc2lkZSB7XG5cdGZsZXg6IDE7XG5cdGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHN0ZWVsYmx1ZTtcblx0cGFkZGluZzogMXJlbTtcblx0YmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAzcmVtO1xufVxuLmFzaWRlX3NlY3Rpb25fdGl0bGUge1xuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0Y29sb3I6ICMyNzU5ODM7XG5cdHBhZGRpbmc6IDFyZW0gMDtcblx0Ym9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHN0ZWVsYmx1ZTtcblx0bWFyZ2luLWJvdHRvbTogMXJlbTtcblx0Zm9udC1zaXplOiAycmVtO1xufVxuXG4uaG9tZV9vcHRpb25zX3dyYXBwZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHQvKiBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgKi9cbn1cbi5ob21lX29wdGlvbiB7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRib3JkZXI6IG5vbmU7XG5cdHBhZGRpbmc6IDAuNnJlbTtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG4uYWN0aXZlIHtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCBzdGVlbGJsdWU7XG59XG4ucHJvamVjdF9pdGVtIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdHBhZGRpbmc6IDAuNnJlbTtcblx0bWFyZ2luLWJvdHRvbTogMXJlbTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRnYXA6IDAuNXJlbTtcbn1cbi5wcm9qZWN0X29wdGlvbnMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdGdhcDogMC40cmVtO1xufVxuLnByb2plY3Rfb3B0aW9uIHtcblx0ZmxleDogMTtcblx0cGFkZGluZzogMC4zcmVtO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcblx0Y29sb3I6IHdoaXRlO1xuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0Ym9yZGVyOiBub25lO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLnByb2plY3Rfb3B0aW9uOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwNWIwMDtcbn1cbi5kZWxldGUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4uZGVsZXRlOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2JmMDEwMTtcbn1cbi5hZGQge1xuXHRwYWRkaW5nOiAwLjZyZW0gMnJlbTtcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdGZvbnQtc2l6ZTogMXJlbTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGJvcmRlcjogM3B4IHNvbGlkIHN0ZWVsYmx1ZTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmM2MjhlO1xuXHRjb2xvcjogd2hpdGU7XG5cdG1hcmdpbi10b3A6IDJyZW07XG59XG4uYWRkOmhvdmVyIHtcblx0Ym9yZGVyOiAzcHggc29saWQgIzIxNDA1OTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzE0M2Y2Mjtcbn1cblxuLyogTWFpbiBTdHlsZXMgKi9cbm1haW4ge1xuXHRmbGV4OiAzO1xuXHRwYWRkaW5nOiAxcmVtO1xufVxuLnRpdGxlIHtcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdHBhZGRpbmc6IDFyZW07XG5cdGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcblx0Y29sb3I6IHdoaXRlO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGZvbnQtc2l6ZTogMnJlbTtcbn1cbi50YXNrc193cmFwcGVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMXJlbTtcblx0b3ZlcmZsb3c6IGF1dG87XG5cdG1hcmdpbi10b3A6IDFyZW07XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLyogVGFzayBTdHlsZXMgKi9cbi50YXNrIHtcblx0cGFkZGluZzogMXJlbTtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzEyZDJkO1xufVxuLnRhc2tfaW5mbyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogMXJlbTtcbn1cbi50YXNrX2NoZWNrYm94IHtcblx0d2lkdGg6IDIwcHg7XG5cdGhlaWdodDogMjBweDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0YWxpZ24tc2VsZjogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuLmFjdGl2ZV9jaGVja2JveCB7XG5cdGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuLnRhc2tfaW5mb19fd3JhcHBlciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMC42cmVtO1xufVxuLnRhc2tfdGl0bGUge1xuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGZvbnQtc2l6ZTogMS4zcmVtO1xuXHRjb2xvcjogd2hpdGU7XG59XG4udGFza19kZXRhaWxzIHtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRjb2xvcjogcmdiKDE5OSwgMTk5LCAxOTkpO1xufVxuLnRhc2tfb3B0aW9ucyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogMC43cmVtO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmR1ZV9kYXRlIHtcblx0cGFkZGluZzogMC40cmVtO1xuXHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRmb250LXNpemU6IDAuOXJlbTtcblx0Y29sb3I6IHdoaXRlO1xufVxuLnRhc2tfYnRuIHtcblx0cGFkZGluZzogMC40cmVtO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cbi5mYXYge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjN2Y3ZjJkO1xufVxuLmFjdGl2ZV9mYXYge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwO1xuXHRjb2xvcjogYmxhY2s7XG59XG4uZWRpdCB7XG5cdGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuLmVkaXQ6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1YjAwO1xufVxuLmxpbmVfdGhyb3VnaCB7XG5cdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4vKiBEaWFsb2cgU3R5bGVzICovXG5kaWFsb2cge1xuXHRib3JkZXI6IDNweCBzb2xpZCBzdGVlbGJsdWU7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0cGFkZGluZzogMXJlbTtcblx0d2lkdGg6IG1pbigzNTBweCwgMTAwJSk7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0dG9wOiA1MCU7XG5cdGxlZnQ6IDUwJTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5kaWFsb2cgPiBmb3JtIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAwLjVyZW07XG5cdG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5kaWFsb2dfb3B0aW9ucyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0Z2FwOiAwLjdyZW07XG59XG4uZGlhbG9nX29wdGlvbnMgYnV0dG9uIHtcblx0ZmxleDogMTtcbn1cblxuLmFkZF90YXNrX2RpYWxvZyBmb3JtID4gZGl2Om5vdCg6bGFzdC1jaGlsZCkge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDAuMnJlbTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQyxzQkFBc0I7Q0FDdEIsVUFBVTtDQUNWLFNBQVM7QUFDVjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixlQUFlO0NBQ2YsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLDBCQUEwQjtBQUMzQjs7QUFFQSxrQkFBa0I7O0FBRWxCO0NBQ0MsZUFBZTtDQUNmLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLGtDQUFrQztDQUNsQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtBQUNoQjs7QUFFQSxtQkFBbUI7QUFDbkI7Q0FDQyxhQUFhO0NBQ2IsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjs7QUFFQSxtQkFBbUI7QUFDbkI7Q0FDQyxPQUFPO0NBQ1AsaUNBQWlDO0NBQ2pDLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0FBQ1Y7QUFDQTtDQUNDLDBCQUEwQjtDQUMxQixjQUFjO0NBQ2QsZUFBZTtDQUNmLGtDQUFrQztDQUNsQyxtQkFBbUI7Q0FDbkIsZUFBZTtBQUNoQjs7QUFF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bnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbmJvZHkge1xcblxcdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5pbWcge1xcblxcdG1heC13aWR0aDogMTAwJTtcXG59XFxubGFiZWwge1xcblxcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG4vKiBIZWFkZXIgU3R5bGVzICovXFxuXFxuaGVhZGVyIHtcXG5cXHRwYWRkaW5nOiAxcmVtIDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBzdGVlbGJsdWU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlkMDtcXG59XFxuXFxuLmxvZ28ge1xcblxcdGNvbG9yOiAjMjc1OTgzO1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLyogY29udGVudCBTdHlsZXMgKi9cXG4uY29udGVudF93cmFwcGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRtaW4taGVpZ2h0OiA4M3ZoO1xcbn1cXG5cXG4vKiBTaWRlYmFyIFN0eWxlcyAqL1xcbmFzaWRlIHtcXG5cXHRmbGV4OiAxO1xcblxcdGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHN0ZWVsYmx1ZTtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogM3JlbTtcXG59XFxuLmFzaWRlX3NlY3Rpb25fdGl0bGUge1xcblxcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcblxcdGNvbG9yOiAjMjc1OTgzO1xcblxcdHBhZGRpbmc6IDFyZW0gMDtcXG5cXHRib3JkZXItYm90dG9tOiAzcHggc29saWQgc3RlZWxibHVlO1xcblxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uaG9tZV9vcHRpb25zX3dyYXBwZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHQvKiBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgKi9cXG59XFxuLmhvbWVfb3B0aW9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0cGFkZGluZzogMC42cmVtO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4uYWN0aXZlIHtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgc3RlZWxibHVlO1xcbn1cXG4ucHJvamVjdF9pdGVtIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRwYWRkaW5nOiAwLjZyZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMXJlbTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Z2FwOiAwLjVyZW07XFxufVxcbi5wcm9qZWN0X29wdGlvbnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGdhcDogMC40cmVtO1xcbn1cXG4ucHJvamVjdF9vcHRpb24ge1xcblxcdGZsZXg6IDE7XFxuXFx0cGFkZGluZzogMC4zcmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG4ucHJvamVjdF9vcHRpb246aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMDViMDA7XFxufVxcbi5kZWxldGUge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLmRlbGV0ZTpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2JmMDEwMTtcXG59XFxuLmFkZCB7XFxuXFx0cGFkZGluZzogMC42cmVtIDJyZW07XFxuXFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGJvcmRlcjogM3B4IHNvbGlkIHN0ZWVsYmx1ZTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzJjNjI4ZTtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0bWFyZ2luLXRvcDogMnJlbTtcXG59XFxuLmFkZDpob3ZlciB7XFxuXFx0Ym9yZGVyOiAzcHggc29saWQgIzIxNDA1OTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTQzZjYyO1xcbn1cXG5cXG4vKiBNYWluIFN0eWxlcyAqL1xcbm1haW4ge1xcblxcdGZsZXg6IDM7XFxuXFx0cGFkZGluZzogMXJlbTtcXG59XFxuLnRpdGxlIHtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLnRhc2tzX3dyYXBwZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDFyZW07XFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxuXFx0bWFyZ2luLXRvcDogMXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8qIFRhc2sgU3R5bGVzICovXFxuLnRhc2sge1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzEyZDJkO1xcbn1cXG4udGFza19pbmZvIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMXJlbTtcXG59XFxuLnRhc2tfY2hlY2tib3gge1xcblxcdHdpZHRoOiAyMHB4O1xcblxcdGhlaWdodDogMjBweDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hY3RpdmVfY2hlY2tib3gge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG4udGFza19pbmZvX193cmFwcGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAwLjZyZW07XFxufVxcbi50YXNrX3RpdGxlIHtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRmb250LXNpemU6IDEuM3JlbTtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcbi50YXNrX2RldGFpbHMge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHRjb2xvcjogcmdiKDE5OSwgMTk5LCAxOTkpO1xcbn1cXG4udGFza19vcHRpb25zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMC43cmVtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5kdWVfZGF0ZSB7XFxuXFx0cGFkZGluZzogMC40cmVtO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRmb250LXNpemU6IDAuOXJlbTtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcbi50YXNrX2J0biB7XFxuXFx0cGFkZGluZzogMC40cmVtO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG4uZmF2IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjN2Y3ZjJkO1xcbn1cXG4uYWN0aXZlX2ZhdiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmMDtcXG5cXHRjb2xvcjogYmxhY2s7XFxufVxcbi5lZGl0IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuLmVkaXQ6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMDViMDA7XFxufVxcbi5saW5lX3Rocm91Z2gge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4vKiBEaWFsb2cgU3R5bGVzICovXFxuZGlhbG9nIHtcXG5cXHRib3JkZXI6IDNweCBzb2xpZCBzdGVlbGJsdWU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFx0d2lkdGg6IG1pbigzNTBweCwgMTAwJSk7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogNTAlO1xcblxcdGxlZnQ6IDUwJTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuZGlhbG9nID4gZm9ybSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMC41cmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuLmRpYWxvZ19vcHRpb25zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRnYXA6IDAuN3JlbTtcXG59XFxuLmRpYWxvZ19vcHRpb25zIGJ1dHRvbiB7XFxuXFx0ZmxleDogMTtcXG59XFxuXFxuLmFkZF90YXNrX2RpYWxvZyBmb3JtID4gZGl2Om5vdCg6bGFzdC1jaGlsZCkge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDAuMnJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBcbihUaGUgTUlUIExpY2Vuc2UpXG5Db3B5cmlnaHQgKGMpIDIwMTQtMjAyMSBIYWzDoXN6IMOBZMOhbSA8YWRhbUBhaW1mb3JtLmNvbT5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gIFVuaXF1ZSBIZXhhdHJpZGVjaW1hbCBJRCBHZW5lcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyAgRGVwZW5kZW5jaWVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnZhciBwaWQgPSB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5waWQgPyBwcm9jZXNzLnBpZC50b1N0cmluZygzNikgOiAnJyA7XG52YXIgYWRkcmVzcyA9ICcnO1xuaWYodHlwZW9mIF9fd2VicGFja19yZXF1aXJlX18gIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHJlcXVpcmUgIT09ICd1bmRlZmluZWQnKXtcbiAgICB2YXIgbWFjID0gJycsIG9zID0gcmVxdWlyZSgnb3MnKTsgXG4gICAgaWYob3MubmV0d29ya0ludGVyZmFjZXMpIHZhciBuZXR3b3JrSW50ZXJmYWNlcyA9IG9zLm5ldHdvcmtJbnRlcmZhY2VzKCk7XG4gICAgaWYobmV0d29ya0ludGVyZmFjZXMpe1xuICAgICAgICBsb29wOlxuICAgICAgICBmb3IobGV0IGludGVyZmFjZV9rZXkgaW4gbmV0d29ya0ludGVyZmFjZXMpe1xuICAgICAgICAgICAgY29uc3QgbmV0d29ya0ludGVyZmFjZSA9IG5ldHdvcmtJbnRlcmZhY2VzW2ludGVyZmFjZV9rZXldO1xuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gbmV0d29ya0ludGVyZmFjZS5sZW5ndGg7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKG5ldHdvcmtJbnRlcmZhY2VbaV0gIT09IHVuZGVmaW5lZCAmJiBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYyAmJiBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYyAhPSAnMDA6MDA6MDA6MDA6MDA6MDAnKXtcbiAgICAgICAgICAgICAgICAgICAgbWFjID0gbmV0d29ya0ludGVyZmFjZVtpXS5tYWM7IGJyZWFrIGxvb3A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFkZHJlc3MgPSBtYWMgPyBwYXJzZUludChtYWMucmVwbGFjZSgvXFw6fFxcRCsvZ2ksICcnKSkudG9TdHJpbmcoMzYpIDogJycgO1xuICAgIH1cbn0gXG5cbi8vICBFeHBvcnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBhZGRyZXNzICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMucHJvY2VzcyA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBwaWQgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5tb2R1bGUuZXhwb3J0cy50aW1lICAgID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cblxuLy8gIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gbm93KCl7XG4gICAgdmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHZhciBsYXN0ID0gbm93Lmxhc3QgfHwgdGltZTtcbiAgICByZXR1cm4gbm93Lmxhc3QgPSB0aW1lID4gbGFzdCA/IHRpbWUgOiBsYXN0ICsgMTtcbn1cbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBQcm9qZWN0c1N0b3JhZ2UgZnJvbSBcIi4vUHJvamVjdHNTdG9yYWdlXCI7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0cywgcmVuZGVyQWxsVGFza3MgfSBmcm9tIFwiLi9yZW5kZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHNDb250cm9sbGVyKCkge1xuXHRjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdFwiKTtcblx0Y29uc3QgcHJvamVjdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtZGlhbG9nXCIpO1xuXHRjb25zdCBwcm9qZWN0RGlhbG9nRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtZGlhbG9nIGZvcm1cIik7XG5cdGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlLWlucHV0XCIpO1xuXHRjb25zdCBwcm9qZWN0RGlhbG9nQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcIltkYXRhLWFjdGlvbj0nY2FuY2VsLXByb2plY3QtYWRkJ11cIlxuXHQpO1xuXHRjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHMtY29udGFpbmVyXCIpO1xuXG5cdC8vIFNob3cgbW9kYWwgdG8gYWRkIGEgbmV3IHByb2plY3QgYW5kIHJlc2V0cyB0aGUgZm9ybVxuXHRhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0cHJvamVjdERpYWxvZy5zaG93TW9kYWwoKTtcblx0XHRwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSA9IG51bGw7XG5cdH0pO1xuXG5cdC8vIENsb3NlIGFkZCBuZXcgcHJvamVjdCBtb2RhbFxuXHRwcm9qZWN0RGlhbG9nQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBwcm9qZWN0RGlhbG9nLmNsb3NlKCkpO1xuXG5cdC8vIGNyZWF0ZXMgYSBuZXcgcHJvamVjdCBvYmogYW5kIGFkZCBpdCB0byBwcm9qZWN0cyBzdG9yYWdlIHRoZW4gcmVuZGVycyBhbGwgcHJvamVjdHNcblx0cHJvamVjdERpYWxvZ0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoKSA9PiB7XG5cdFx0Y29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdFRpdGxlSW5wdXQudmFsdWU7XG5cdFx0Y29uc3QgcHJvamVjdE9iaiA9IG5ldyBQcm9qZWN0KHByb2plY3RUaXRsZSk7XG5cdFx0UHJvamVjdHNTdG9yYWdlLmFkZFByb2plY3QocHJvamVjdE9iaik7XG5cdFx0cmVuZGVyUHJvamVjdHMoKTtcblx0fSk7XG5cblx0Ly8gQWRkIGV2ZW50cyB0byBwcm9qZWN0J3MgRGVsZXRlIGFuZCBFZGl0IGJ1dHRvbnNcblx0cHJvamVjdHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0Y29uc3QgY2xpY2tlZEVsZW1lbnQgPSBlLnRhcmdldC5kYXRhc2V0LmFjdGlvbjtcblx0XHRpZiAoY2xpY2tlZEVsZW1lbnQgPT09IFwiZGVsZXRlLXByb2plY3RcIikge1xuXHRcdFx0aGFuZGxlUHJvamVjdERlbGV0ZShlKTtcblx0XHR9XG5cdFx0aWYgKGNsaWNrZWRFbGVtZW50ID09PSBcInJlbmFtZS1wcm9qZWN0XCIpIHtcblx0XHRcdGhhbmRsZVByb2plY3RSZW5hbWUoZSk7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBDcmVhdGUgVHdvIGRlZmF1bHQgcHJvamVjdCB3aGVuIHBhZ2UgbG9hZHMgZm9yIHRoZSBmaXJzdCB0aW1lXG5cdGNyZWF0ZURlZmF1bHRQcm9qZWN0KFwicHJvamVjdCBPbmVcIik7XG5cdGNyZWF0ZURlZmF1bHRQcm9qZWN0KFwicHJvamVjdCBUd29cIik7XG5cblx0Ly8gQ2FsbCByZW5kZXIgcHJvamVjdHMgZnVuY3Rpb24gb25jZSB0byByZW5kZXIgYWxsIGRlZmF1bHRzIHdoZW4gcGFnZSBsb2FkcyBmb3IgdGhlIGZpcnN0IHRpbWVcblx0cmVuZGVyUHJvamVjdHMoKTtcbn1cblxuLy8gdXRpbDogY3JlYXRlcyBkZWZhdWx0IHByb2plY3RzXG5mdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvamVjdCh0aXRsZSkge1xuXHRjb25zdCBwcm9qT25lID0gbmV3IFByb2plY3QodGl0bGUpO1xuXHRQcm9qZWN0c1N0b3JhZ2UuYWRkUHJvamVjdChwcm9qT25lKTtcbn1cblxuLy8gdXRpbDogaGFuZGxlIHByb2plY3QgZGVsZXRlOlxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdERlbGV0ZShlKSB7XG5cdGNvbnN0IHByb2plY3RUaXRsZURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGl0bGUtZGlzcGxheVwiKTtcblx0Y29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stYnRuXCIpO1xuXHRjb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxsLXRhc2tzLW9wdGlvblwiKTtcblx0Y29uc3QgcHJvamVjdEVsZW1lbnRDb250YWluZXIgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cblx0Ly8gRGVsZXRlIHRoZSBwcm9qZWN0IGZyb20gc3RvcmFnZSBhbmQgZGVsZXRlIHRoZSBwcm9qZWN0IEVsZW1lbnRcblx0UHJvamVjdHNTdG9yYWdlLmRlbGV0ZVByb2plY3QocHJvamVjdEVsZW1lbnRDb250YWluZXIuZGF0YXNldC5rZXkpO1xuXHRwcm9qZWN0RWxlbWVudENvbnRhaW5lci5yZW1vdmUoKTtcblxuXHRwcm9qZWN0VGl0bGVEaXNwbGF5LnRleHRDb250ZW50ID0gXCJBbGwgVGFza3NcIjtcblx0YWxsVGFza3MuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0YWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdHJlbmRlckFsbFRhc2tzKCk7XG59XG5cbi8vIHV0aWw6IGhhbmRsZSBwcm9qZWN0IHJlbmFtZTpcbmZ1bmN0aW9uIGhhbmRsZVByb2plY3RSZW5hbWUoZSkge1xuXHRjb25zdCBwcm9qZWN0VGl0bGVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlLWRpc3BsYXlcIik7XG5cdGNvbnN0IHByb2plY3RSZW5hbWVNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVuYW1lLXByb2plY3QtZGlhbG9nXCIpO1xuXHRjb25zdCBwcm9qZWN0UmVuYW1lRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XCIjcmVuYW1lLXByb2plY3QtZGlhbG9nIGZvcm1cIlxuXHQpO1xuXHRjb25zdCBwcm9qZWN0UmVuYW1lQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcIltkYXRhLWFjdGlvbj0nY2FuY2VsLXByb2plY3QtcmVuYW1lJ11cIlxuXHQpO1xuXHRjb25zdCBwcm9qZWN0UmVuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtcmVuYW1lLWlucHV0XCIpO1xuXHRjb25zdCBwcm9qZWN0RWxlbWVudENvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcblx0Y29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdEVsZW1lbnRDb250YWluZXIucXVlcnlTZWxlY3RvcihcImgzXCIpO1xuXG5cdHByb2plY3RSZW5hbWVNb2RhbC5zaG93TW9kYWwoKTtcblx0cHJvamVjdFJlbmFtZUlucHV0LnZhbHVlID0gbnVsbDtcblxuXHRwcm9qZWN0UmVuYW1lQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuXHRcdHByb2plY3RSZW5hbWVNb2RhbC5jbG9zZSgpXG5cdCk7XG5cblx0cHJvamVjdFJlbmFtZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoKSA9PiB7XG5cdFx0bGV0IG5ld1RpdGxlID0gcHJvamVjdFJlbmFtZUlucHV0LnZhbHVlO1xuXHRcdFByb2plY3RzU3RvcmFnZS5yZW5hbWVQcm9qZWN0KFxuXHRcdFx0cHJvamVjdEVsZW1lbnRDb250YWluZXIuZGF0YXNldC5rZXksXG5cdFx0XHRuZXdUaXRsZVxuXHRcdCk7XG5cblx0XHRwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBuZXdUaXRsZTtcblx0XHRwcm9qZWN0VGl0bGVEaXNwbGF5LnRleHRDb250ZW50ID0gbmV3VGl0bGU7XG5cdH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHNTdG9yYWdlIHtcblx0c3RhdGljIHByb2plY3RzID0gW107XG5cblx0c3RhdGljIGFkZFByb2plY3QocHJvamVjdCkge1xuXHRcdHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcblx0fVxuXHRzdGF0aWMgZ2V0UHJvamVjdHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMucHJvamVjdHM7XG5cdH1cblx0c3RhdGljIGRlbGV0ZVByb2plY3QocHJvamVjdEtleSkge1xuXHRcdHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcihcblx0XHRcdChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldElkKCkgIT09IHByb2plY3RLZXlcblx0XHQpO1xuXHR9XG5cdHN0YXRpYyBkZXNlbGVjdEFsbFByb2plY3RzKCkge1xuXHRcdHRoaXMucHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAocHJvamVjdC5pc1NlbGVjdGVkID0gZmFsc2UpKTtcblx0fVxuXHRzdGF0aWMgc2VsZWN0UHJvamVjdChwcm9qZWN0S2V5KSB7XG5cdFx0dGhpcy5wcm9qZWN0cy5tYXAoKHByb2opID0+IHtcblx0XHRcdHByb2ouZ2V0SWQoKSA9PT0gcHJvamVjdEtleVxuXHRcdFx0XHQ/IChwcm9qLmlzU2VsZWN0ZWQgPSB0cnVlKVxuXHRcdFx0XHQ6IChwcm9qLmlzU2VsZWN0ZWQgPSBmYWxzZSk7XG5cdFx0fSk7XG5cdH1cblx0c3RhdGljIGdldFNlbGVjdGVkUHJvamVjdCgpIHtcblx0XHRyZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qKSA9PiBwcm9qLmlzU2VsZWN0ZWQpO1xuXHR9XG5cblx0c3RhdGljIHJlbmFtZVByb2plY3QocHJvamVjdEtleSwgbmV3TmFtZSkge1xuXHRcdGNvbnN0IHRhcmdldFByb2plY3QgPSB0aGlzLnByb2plY3RzLmZpbmQoXG5cdFx0XHQocHJvamVjdCkgPT4gcHJvamVjdC5nZXRJZCgpID09PSBwcm9qZWN0S2V5XG5cdFx0KTtcblx0XHR0YXJnZXRQcm9qZWN0LnNldFRpdGxlKG5ld05hbWUpO1xuXHR9XG5cblx0c3RhdGljIGFkZFRhc2tUb1Byb2plY3QodGFza09iaikge1xuXHRcdGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHRoaXMuZ2V0U2VsZWN0ZWRQcm9qZWN0KCk7XG5cdFx0c2VsZWN0ZWRQcm9qZWN0LmFkZFRhc2sodGFza09iaik7XG5cdH1cbn1cbiIsImltcG9ydCBQcm9qZWN0c1N0b3JhZ2UgZnJvbSBcIi4vUHJvamVjdHNTdG9yYWdlXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgeyByZW5kZXJBbGxUYXNrcywgcmVuZGVyUHJvamVjdFRhc2tzIH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2tzQ29udHJvbGxlcigpIHtcblx0Y29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLXdyYXBwZXJcIik7XG5cdGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLWJ0blwiKTtcblx0Y29uc3QgdGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stZGlhbG9nXCIpO1xuXHRjb25zdCB0YXNrRGlhbG9nRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stZGlhbG9nIGZvcm1cIik7XG5cdGNvbnN0IHRhc2tDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbC10YXNrLW1vZGFsXCIpO1xuXHRjb25zdCB0YXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10aXRsZS1pbnB1dFwiKTtcblx0Y29uc3QgdGFza0RldGFpbHNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXRhaWxzLWlucHV0XCIpO1xuXHRjb25zdCB0YXNrRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRhdGUtaW5wdXRcIik7XG5cblx0Ly8gU2hvdyBtb2RhbCB0byBhZGQgYSBuZXcgdGFzayBhbmQgcmVzZXRzIHRoZSBmb3JtXG5cdGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHR0YXNrRGlhbG9nLnNob3dNb2RhbCgpO1xuXG5cdFx0dGFza1RpdGxlSW5wdXQudmFsdWUgPSBudWxsO1xuXHRcdHRhc2tEZXRhaWxzSW5wdXQudmFsdWUgPSBudWxsO1xuXHRcdHRhc2tEdWVEYXRlSW5wdXQudmFsdWUgPSBudWxsO1xuXHR9KTtcblxuXHQvLyBDbG9zZSB0aGUgYWRkIG5ldyB0YXNrIG1vZGFsXG5cdHRhc2tDYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRhc2tEaWFsb2cuY2xvc2UoKSk7XG5cblx0Ly8gQ3JlYXRlcyBuZXcgdGFzayBvYmogYW5kIGFkZCBpdCB0byB0aGUgc2VsZWN0ZWQgcHJvamVjdCB0YXNrcyBhcnJheVxuXHR0YXNrRGlhbG9nRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+IHtcblx0XHRjb25zdCB0YXNrVGl0bGUgPSB0YXNrVGl0bGVJbnB1dC52YWx1ZTtcblx0XHRjb25zdCB0YXNrRGV0YWlscyA9IHRhc2tEZXRhaWxzSW5wdXQudmFsdWU7XG5cdFx0Y29uc3QgdGFza0R1ZURhdGUgPSB0YXNrRHVlRGF0ZUlucHV0LnZhbHVlO1xuXHRcdGNvbnN0IHRhc2tPYmogPSBuZXcgVGFzayh0YXNrVGl0bGUsIHRhc2tEZXRhaWxzLCB0YXNrRHVlRGF0ZSk7XG5cdFx0UHJvamVjdHNTdG9yYWdlLmFkZFRhc2tUb1Byb2plY3QodGFza09iaik7XG5cdFx0cmVuZGVyUHJvamVjdFRhc2tzKFByb2plY3RzU3RvcmFnZS5nZXRTZWxlY3RlZFByb2plY3QoKSk7XG5cdH0pO1xuXHQvLyBBZGQgZXZlbnRzIHRvIHRhc2sncyBGYXZvcml0ZSwgRGVsZXRlIGFuZCBFZGl0IGJ1dHRvbnNcblx0dGFza3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0Y29uc3QgY2xpY2tlZFRhcmdldERhdGEgPSBlLnRhcmdldC5kYXRhc2V0LmFjdGlvbjtcblx0XHRpZiAoY2xpY2tlZFRhcmdldERhdGEgPT09IFwiZmF2b3JpdGUtdGFza1wiKSB7XG5cdFx0XHRUYXNrT3B0aW9uc0V2ZW50SGFuZGxpbmcoZSkuaGFuZGxlVGFza0Zhdm9yaXRlKCk7XG5cdFx0fVxuXHRcdGlmIChjbGlja2VkVGFyZ2V0RGF0YSA9PT0gXCJkZWxldGUtdGFza1wiKSB7XG5cdFx0XHRUYXNrT3B0aW9uc0V2ZW50SGFuZGxpbmcoZSkuaGFuZGxlVGFza0RlbGV0ZSgpO1xuXHRcdH1cblx0XHRpZiAoY2xpY2tlZFRhcmdldERhdGEgPT09IFwiZWRpdC10YXNrXCIpIHtcblx0XHRcdFRhc2tPcHRpb25zRXZlbnRIYW5kbGluZyhlKS5oYW5kbGVUYXNrRWRpdCgpO1xuXHRcdH1cblx0XHRpZiAoY2xpY2tlZFRhcmdldERhdGEgPT09IFwidG9nZ2xlLXRhc2stY29tcGxldGVcIikge1xuXHRcdFx0VGFza09wdGlvbnNFdmVudEhhbmRsaW5nKGUpLmhhbmRsZVRhc2tDb21wbGV0ZSgpO1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gQ3JlYXRlIGRlZmF1bHQgdGFza3Ncblx0Y3JlYXRlRGVmYXVsdFRhc2soXCJUYXNrIG9uZVwiLCBcInNvbWUgZGV0YWlscyBhYm91dCB0YXNrIG9uZVwiLCBcIjIwMjQtMy0xNVwiKTtcblx0Y3JlYXRlRGVmYXVsdFRhc2soXCJUYXNrIHR3b1wiLCBcInNvbWUgZGV0YWlscyBhYm91dCB0YXNrIHR3b1wiLCBcIjIwMjQtMy0yMFwiKTtcblxuXHQvLyBkZWZhdWx0OiByZW5kZXIgYWxsIHRhc2tzXG5cdHJlbmRlckFsbFRhc2tzKCk7XG59XG5cbi8vIHV0aWw6IGNyZWF0ZXMgZGVmYXVsdCB0YXNrcyBpbnNpZGUgdGhlIGZpcnN0IHByb2plY3QgKGRlZmF1bHQpO1xuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFRhc2sodGl0bGUsIGRldGFpbHMsIGRhdGUpIHtcblx0Y29uc3QgdGFza09iaiA9IG5ldyBUYXNrKHRpdGxlLCBkZXRhaWxzLCBkYXRlKTtcblx0Y29uc3QgcHJvamVjdCA9IFByb2plY3RzU3RvcmFnZS5nZXRQcm9qZWN0cygpWzBdO1xuXHRwcm9qZWN0LnRhc2tzLnB1c2godGFza09iaik7XG59XG5cbi8vIGhhbmRsZXMgZXZlbnRzIGZvciB0YXNrIDogRmF2b3JpdGUgLCBEZWxldGUgYW5kIEVkaXRcbmZ1bmN0aW9uIFRhc2tPcHRpb25zRXZlbnRIYW5kbGluZyhlKSB7XG5cdGNvbnN0IHRhc2tDb250YWluZXIgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdGNvbnN0IHByb2plY3RzID0gUHJvamVjdHNTdG9yYWdlLmdldFByb2plY3RzKCk7XG5cdGNvbnN0IHBhcmVudFByb2plY3QgPSBwcm9qZWN0cy5maW5kKFxuXHRcdChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFRpdGxlKCkgPT09IHRhc2tDb250YWluZXIuZGF0YXNldC5wcm9qZWN0XG5cdCk7XG5cdGNvbnN0IHRhc2tPYmogPSBwYXJlbnRQcm9qZWN0LnRhc2tzLmZpbmQoXG5cdFx0KHRhc2spID0+IHRhc2suZ2V0SWQoKSA9PT0gdGFza0NvbnRhaW5lci5kYXRhc2V0LmtleVxuXHQpO1xuXG5cdC8vIHV0aWw6IHRvZ2dsZXMgdGFzaydzIG9iaiBmYXZvcml0ZSBwcm9wIGFuZCBhZGQgYSBjbGFzcyAoYWN0aXZlX2ZhdikgdG8gdGhlIHRhc2sncyBmYXZvcml0ZSBidXR0b25cblx0ZnVuY3Rpb24gaGFuZGxlVGFza0Zhdm9yaXRlKCkge1xuXHRcdHRhc2tPYmoudG9nZ2xlRmF2b3JpdGUoKTtcblx0XHRlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlX2ZhdlwiKTtcblx0fVxuXG5cdC8vIHV0aWw6IERlbGV0ZXMgdGFzayBvYmogZnJvbSBwYXJlbnQgcHJvamVjdCBhcnIgYW5kIGRlbGV0ZXMgdGhlIHRhc2sgZWxlbWVudFxuXHRmdW5jdGlvbiBoYW5kbGVUYXNrRGVsZXRlKCkge1xuXHRcdHBhcmVudFByb2plY3QuZGVsZXRlVGFzayh0YXNrQ29udGFpbmVyLmRhdGFzZXQua2V5KTtcblx0XHR0YXNrQ29udGFpbmVyLnJlbW92ZSgpO1xuXHR9XG5cblx0Ly8gRWRpdHMgdGFza3Ncblx0ZnVuY3Rpb24gaGFuZGxlVGFza0VkaXQoKSB7XG5cdFx0Y29uc3QgZWRpdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFwiW2RhdGEtYWN0aW9uPSdyZW5hbWUtdGFzay1tb2RhbCdcIlxuXHRcdCk7XG5cdFx0Y29uc3QgZWRpdE1vZGFsRm9ybSA9IGVkaXRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcblx0XHRjb25zdCBlZGl0ZWRUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFwiW2RhdGEtYWN0aW9uPSd0YXNrLW5ldy1uYW1lLWlucHV0J1wiXG5cdFx0KTtcblx0XHRjb25zdCBlZGl0ZWREZXRhaWxzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XCJbZGF0YS1hY3Rpb249J3Rhc2stbmV3LWRldGFpbHMtaW5wdXQnXCJcblx0XHQpO1xuXHRcdGNvbnN0IGVkaXRlZERhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcIltkYXRhLWFjdGlvbj0ndGFzay1uZXctZGF0ZS1pbnB1dCdcIlxuXHRcdCk7XG5cdFx0Y29uc3QgY2FuY2VsRWRpdFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XCJbZGF0YS1hY3Rpb249J2NhbmNlbC10YXNrLWVkaXQnXCJcblx0XHQpO1xuXHRcdGNvbnN0IHRhc2tUaXRsZUVsZW1lbnQgPSB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudGFza190aXRsZVwiKTtcblx0XHRjb25zdCB0YXNrRGV0YWlsc0VsZW1lbnQgPSB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudGFza19kZXRhaWxzXCIpO1xuXHRcdGNvbnN0IHRhc2tEYXRlRWxlbWVudCA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5kdWVfZGF0ZVwiKTtcblxuXHRcdGVkaXRNb2RhbC5zaG93TW9kYWwoKTtcblx0XHRjYW5jZWxFZGl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZWRpdE1vZGFsLmNsb3NlKCkpO1xuXG5cdFx0ZWRpdE1vZGFsRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+IHtcblx0XHRcdC8vIFVwZGF0ZXMgdGFzayBvYmplY3QgaW5zaWRlIGl0J3MgcHJvamVjdCBhcnJheVxuXHRcdFx0dGFza09iai5zZXRUaXRsZShlZGl0ZWRUaXRsZUlucHV0LnZhbHVlKTtcblx0XHRcdHRhc2tPYmouc2V0RGV0YWlscyhlZGl0ZWREZXRhaWxzSW5wdXQudmFsdWUpO1xuXHRcdFx0dGFza09iai5zZXREYXRlKGVkaXRlZERhdGVJbnB1dC52YWx1ZSk7XG5cblx0XHRcdC8vIFVwZGF0ZXMgdGFzayBVSVxuXHRcdFx0dGFza1RpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IGVkaXRlZFRpdGxlSW5wdXQudmFsdWU7XG5cdFx0XHR0YXNrRGV0YWlsc0VsZW1lbnQudGV4dENvbnRlbnQgPSBlZGl0ZWREZXRhaWxzSW5wdXQudmFsdWU7XG5cdFx0XHR0YXNrRGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBlZGl0ZWREYXRlSW5wdXQudmFsdWU7XG5cdFx0fSk7XG5cblx0XHQvLyBSZXNldHMgZWRpdCB0YXNrIG1vZGFsIGlucHV0c1xuXHRcdGVkaXRlZFRpdGxlSW5wdXQudmFsdWUgPSBudWxsO1xuXHRcdGVkaXRlZERldGFpbHNJbnB1dC52YWx1ZSA9IG51bGw7XG5cdFx0ZWRpdGVkRGF0ZUlucHV0LnZhbHVlID0gbnVsbDtcblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRhc2tDb21wbGV0ZSgpIHtcblx0XHR0YXNrT2JqLnRvZ2dsZUlzQ29tcGxldGUoKTtcblx0XHRjb25zdCB0YXNrVGl0bGUgPSB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudGFza190aXRsZVwiKTtcblx0XHRjb25zdCB0YXNrRGV0YWlscyA9IHRhc2tDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi50YXNrX2RldGFpbHNcIik7XG5cdFx0ZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZV9jaGVja2JveFwiKTtcblx0XHR0YXNrVGl0bGUuY2xhc3NMaXN0LnRvZ2dsZShcImxpbmVfdGhyb3VnaFwiKTtcblx0XHR0YXNrRGV0YWlscy5jbGFzc0xpc3QudG9nZ2xlKFwibGluZV90aHJvdWdoXCIpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRoYW5kbGVUYXNrRmF2b3JpdGUsXG5cdFx0aGFuZGxlVGFza0RlbGV0ZSxcblx0XHRoYW5kbGVUYXNrRWRpdCxcblx0XHRoYW5kbGVUYXNrQ29tcGxldGUsXG5cdH07XG59XG4iLCJpbXBvcnQgUHJvamVjdHNTdG9yYWdlIGZyb20gXCIuL1Byb2plY3RzU3RvcmFnZVwiO1xuaW1wb3J0IHtcblx0cmVuZGVyQWxsVGFza3MsXG5cdHJlbmRlclByb2plY3RUYXNrcyxcblx0cmVuZGVyRmF2b3JpdGVUYXNrcyxcblx0cmVuZGVyVG9kYXlUYXNrcyxcbn0gZnJvbSBcIi4vcmVuZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVpQ29udHJvbGxlcigpIHtcblx0Y29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stYnRuXCIpO1xuXHRjb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWxsLXRhc2tzLW9wdGlvblwiKTtcblx0Y29uc3QgdG9EYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZGF5LW9wdGlvblwiKTtcblx0Y29uc3QgZmF2b3JpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zhdm9yaXRlLW9wdGlvblwiKTtcblx0Y29uc3QgcmVuZGVyT3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVuZGVyLW9wdGlvbnNcIik7XG5cdGNvbnN0IHByb2plY3RUaXRsZURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGl0bGUtZGlzcGxheVwiKTtcblx0Y29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWNvbnRhaW5lclwiKTtcblxuXHRhbGxUYXNrcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdHJlc2V0U2VsZWN0aW9uU3R5bGVzKCk7XG5cdFx0YWxsVGFza3MuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0XHRwcm9qZWN0VGl0bGVEaXNwbGF5LnRleHRDb250ZW50ID0gXCJBbGwgVGFza3NcIjtcblx0XHRQcm9qZWN0c1N0b3JhZ2UuZGVzZWxlY3RBbGxQcm9qZWN0cygpO1xuXHRcdHJlbmRlckFsbFRhc2tzKCk7XG5cdH0pO1xuXG5cdGZhdm9yaXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0cmVzZXRTZWxlY3Rpb25TdHlsZXMoKTtcblx0XHRmYXZvcml0ZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHRcdHByb2plY3RUaXRsZURpc3BsYXkudGV4dENvbnRlbnQgPSBcIkZhdm9yaXRlc1wiO1xuXHRcdFByb2plY3RzU3RvcmFnZS5kZXNlbGVjdEFsbFByb2plY3RzKCk7XG5cdFx0cmVuZGVyRmF2b3JpdGVUYXNrcygpO1xuXHR9KTtcblxuXHR0b0RheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdHJlc2V0U2VsZWN0aW9uU3R5bGVzKCk7XG5cdFx0dG9EYXkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0XHRwcm9qZWN0VGl0bGVEaXNwbGF5LnRleHRDb250ZW50ID0gXCJUb2RheSdzIFRhc2tzXCI7XG5cdFx0UHJvamVjdHNTdG9yYWdlLmRlc2VsZWN0QWxsUHJvamVjdHMoKTtcblx0XHRyZW5kZXJUb2RheVRhc2tzKCk7XG5cdH0pO1xuXG5cdC8vIEFsbCB0YXNrcyByZW5kZXIgYXMgYSBkZWZhdWx0IHdoZW4gcGFnZSBmaXJzdCBsb2Fkc1xuXHRhbGxUYXNrcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHRhZGRUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0cmVuZGVyQWxsVGFza3MoKTtcblxuXHQvLyB1dGlsOiByZXNldHMgc2VsZWN0aW9ucyBzdHlsZXNcblx0ZnVuY3Rpb24gcmVzZXRTZWxlY3Rpb25TdHlsZXMoKSB7XG5cdFx0YWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0Wy4uLnJlbmRlck9wdGlvbnNDb250YWluZXIuY2hpbGRyZW5dLmZvckVhY2goKGVsZW1lbnQpID0+XG5cdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcblx0XHQpO1xuXHRcdFsuLi5wcm9qZWN0c0NvbnRhaW5lci5jaGlsZHJlbl0uZm9yRWFjaCgocHJvamVjdCkgPT5cblx0XHRcdHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuXHRcdCk7XG5cdH1cbn1cblxuLy8gaGFuZGxlIHByb2plY3QgU2VsZWN0aW9uXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUHJvamVjdFNlbGVjdGlvbihlKSB7XG5cdGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0cy1jb250YWluZXJcIik7XG5cdGNvbnN0IHJlbmRlck9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlbmRlci1vcHRpb25zXCIpO1xuXHRjb25zdCBwcm9qZWN0VGl0bGVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlLWRpc3BsYXlcIik7XG5cdGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLWJ0blwiKTtcblx0Y29uc3QgcHJvamVjdEVsZW1lbnQgPSBlLmN1cnJlbnRUYXJnZXQ7XG5cblx0UHJvamVjdHNTdG9yYWdlLnNlbGVjdFByb2plY3QocHJvamVjdEVsZW1lbnQuZGF0YXNldC5rZXkpO1xuXHRjb25zdCBzZWxlY3RlZFByb2plY3QgPSBQcm9qZWN0c1N0b3JhZ2UuZ2V0U2VsZWN0ZWRQcm9qZWN0KCk7XG5cblx0Wy4uLnByb2plY3RzQ29udGFpbmVyLmNoaWxkcmVuXS5mb3JFYWNoKChwcm9qZWN0KSA9PlxuXHRcdHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuXHQpO1xuXHRbLi4ucmVuZGVyT3B0aW9uc0NvbnRhaW5lci5jaGlsZHJlbl0uZm9yRWFjaCgoZWxlbWVudCkgPT5cblx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcblx0KTtcblx0YWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0cHJvamVjdFRpdGxlRGlzcGxheS50ZXh0Q29udGVudCA9IHNlbGVjdGVkUHJvamVjdC5nZXRUaXRsZSgpO1xuXHRyZW5kZXJQcm9qZWN0VGFza3Moc2VsZWN0ZWRQcm9qZWN0KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RFbGVtZW50KHRpdGxlLCBpc1NlbGVjdGVkKSB7XG5cdGNvbnN0IHByb2plY3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0cHJvamVjdFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RfaXRlbVwiKTtcblx0aXNTZWxlY3RlZFxuXHRcdD8gcHJvamVjdFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuXHRcdDogcHJvamVjdFdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblxuXHRjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF9uYW1lXCIpO1xuXHRwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuXHRjb25zdCBvcHRpb25zV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG9wdGlvbnNXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X29wdGlvbnNcIik7XG5cblx0Y29uc3QgcmVuYW1lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0cmVuYW1lQnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X29wdGlvblwiKTtcblx0cmVuYW1lQnRuLnRleHRDb250ZW50ID0gXCJyZW5hbWVcIjtcblx0cmVuYW1lQnRuLmRhdGFzZXQuYWN0aW9uID0gXCJyZW5hbWUtcHJvamVjdFwiO1xuXG5cdGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF9vcHRpb25cIik7XG5cdGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIpO1xuXHRkZWxldGVCdG4udGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xuXHRkZWxldGVCdG4uZGF0YXNldC5hY3Rpb24gPSBcImRlbGV0ZS1wcm9qZWN0XCI7XG5cblx0b3B0aW9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQocmVuYW1lQnRuKTtcblx0b3B0aW9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblx0cHJvamVjdFdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblx0cHJvamVjdFdyYXBwZXIuYXBwZW5kQ2hpbGQob3B0aW9uc1dyYXBwZXIpO1xuXG5cdHJldHVybiBwcm9qZWN0V3JhcHBlcjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRhc2tFbGVtZW50KFxuXHR0aXRsZSxcblx0ZGV0YWlscyxcblx0ZGF0ZSxcblx0ZmF2b3JpdGUsXG5cdGlzQ29tcGxldGVcbikge1xuXHRjb25zdCB0YXNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHRhc2tXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuXG5cdGNvbnN0IHRhc2tJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGFza0luZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tfaW5mb1wiKTtcblxuXHRjb25zdCB0YXNrSW5mb1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0YXNrSW5mb1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcInRhc2tfaW5mb19fd3JhcHBlclwiKTtcblxuXHRjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGFza190aXRsZVwiKTtcblx0dGFza1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cdGlzQ29tcGxldGVcblx0XHQ/IHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwibGluZV90aHJvdWdoXCIpXG5cdFx0OiB0YXNrVGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcImxpbmVfdGhyb3VnaFwiKTtcblxuXHRjb25zdCB0YXNrRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHR0YXNrRGV0YWlscy5jbGFzc0xpc3QuYWRkKFwidGFza19kZXRhaWxzXCIpO1xuXHR0YXNrRGV0YWlscy50ZXh0Q29udGVudCA9IGRldGFpbHM7XG5cdGlzQ29tcGxldGVcblx0XHQ/IHRhc2tEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJsaW5lX3Rocm91Z2hcIilcblx0XHQ6IHRhc2tEZXRhaWxzLmNsYXNzTGlzdC5yZW1vdmUoXCJsaW5lX3Rocm91Z2hcIik7XG5cblx0Y29uc3QgdGFza0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGFza0NoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrX2NoZWNrYm94XCIpO1xuXHR0YXNrQ2hlY2tib3guZGF0YXNldC5hY3Rpb24gPSBcInRvZ2dsZS10YXNrLWNvbXBsZXRlXCI7XG5cdGlzQ29tcGxldGVcblx0XHQ/IHRhc2tDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlX2NoZWNrYm94XCIpXG5cdFx0OiB0YXNrQ2hlY2tib3guY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZV9jaGVja2JveFwiKTtcblxuXHR0YXNrSW5mb1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcblx0dGFza0luZm9XcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tEZXRhaWxzKTtcblx0dGFza0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NoZWNrYm94KTtcblx0dGFza0luZm9Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0luZm9XcmFwcGVyKTtcblxuXHRjb25zdCB0YXNrT3B0aW9uc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0YXNrT3B0aW9uc1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcInRhc2tfb3B0aW9uc1wiKTtcblxuXHRjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHR0YXNrRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZHVlX2RhdGVcIik7XG5cdHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gZGF0ZTtcblxuXHRjb25zdCB0YXNrRmF2b3JpdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHR0YXNrRmF2b3JpdGVCdG4uY2xhc3NMaXN0LmFkZChcInRhc2tfYnRuXCIpO1xuXHR0YXNrRmF2b3JpdGVCdG4uY2xhc3NMaXN0LmFkZChcImZhdlwiKTtcblx0dGFza0Zhdm9yaXRlQnRuLnRleHRDb250ZW50ID0gXCJGYXZvcml0ZVwiO1xuXHR0YXNrRmF2b3JpdGVCdG4uZGF0YXNldC5hY3Rpb24gPSBcImZhdm9yaXRlLXRhc2tcIjtcblx0ZmF2b3JpdGVcblx0XHQ/IHRhc2tGYXZvcml0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlX2ZhdlwiKVxuXHRcdDogdGFza0Zhdm9yaXRlQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVfZmF2XCIpO1xuXG5cdGNvbnN0IHRhc2tFZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0dGFza0VkaXRCdG4uY2xhc3NMaXN0LmFkZChcInRhc2tfYnRuXCIpO1xuXHR0YXNrRWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwiZWRpdFwiKTtcblx0dGFza0VkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcblx0dGFza0VkaXRCdG4uZGF0YXNldC5hY3Rpb24gPSBcImVkaXQtdGFza1wiO1xuXG5cdGNvbnN0IHRhc2tEZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHR0YXNrRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX2J0blwiKTtcblx0dGFza0RlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIpO1xuXHR0YXNrRGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblx0dGFza0RlbGV0ZUJ0bi5kYXRhc2V0LmFjdGlvbiA9IFwiZGVsZXRlLXRhc2tcIjtcblxuXHR0YXNrT3B0aW9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuXHR0YXNrT3B0aW9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0Zhdm9yaXRlQnRuKTtcblx0dGFza09wdGlvbnNXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tFZGl0QnRuKTtcblx0dGFza09wdGlvbnNXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tEZWxldGVCdG4pO1xuXG5cdHRhc2tXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tJbmZvQ29udGFpbmVyKTtcblx0dGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza09wdGlvbnNXcmFwcGVyKTtcblxuXHRyZXR1cm4gdGFza1dyYXBwZXI7XG59XG4iLCJpbXBvcnQgdW5pcWlkIGZyb20gXCJ1bmlxaWRcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuXHRjb25zdHJ1Y3Rvcih0aXRsZSkge1xuXHRcdHRoaXMudGl0bGUgPSB0aXRsZTtcblx0XHR0aGlzLl9pZCA9IHVuaXFpZCgpO1xuXHRcdHRoaXMudGFza3MgPSBbXTtcblx0XHR0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcblx0fVxuXG5cdGdldFRpdGxlKCkge1xuXHRcdHJldHVybiB0aGlzLnRpdGxlO1xuXHR9XG5cdHNldFRpdGxlKG5ld1RpdGxlKSB7XG5cdFx0dGhpcy50aXRsZSA9IG5ld1RpdGxlO1xuXHR9XG5cdGdldElkKCkge1xuXHRcdHJldHVybiB0aGlzLl9pZDtcblx0fVxuXHRhZGRUYXNrKHRhc2spIHtcblx0XHRpZiAodGhpcy5pc1NlbGVjdGVkKSB7XG5cdFx0XHR0aGlzLnRhc2tzLnB1c2godGFzayk7XG5cdFx0fVxuXHR9XG5cblx0ZGVsZXRlVGFzayh0YXNrS2V5KSB7XG5cdFx0dGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldElkKCkgIT09IHRhc2tLZXkpO1xuXHR9XG59XG4iLCJpbXBvcnQgY3JlYXRlUHJvamVjdEVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlUHJvamVjdEVsZW1lbnRcIjtcbmltcG9ydCBjcmVhdGVUYXNrRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVUYXNrRWxlbWVudFwiO1xuaW1wb3J0IFByb2plY3RzU3RvcmFnZSBmcm9tIFwiLi9Qcm9qZWN0c1N0b3JhZ2VcIjtcbmltcG9ydCB7IGhhbmRsZVByb2plY3RTZWxlY3Rpb24gfSBmcm9tIFwiLi9VaUNvbnRyb2xsZXJcIjtcblxuLy8gIHJlbmRlciBhbGwgcHJvamVjdHMgaW5zaWRlIHRoZSBwcm9qZWN0cyBzdG9yYWdlOlxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XG5cdGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0cy1jb250YWluZXJcIik7XG5cdGNsZWFyQ29udGFpbmVyRWxlbWVudChwcm9qZWN0c0NvbnRhaW5lcik7XG5cblx0Y29uc3QgcHJvamVjdHMgPSBQcm9qZWN0c1N0b3JhZ2UuZ2V0UHJvamVjdHMoKTtcblx0cHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuXHRcdGNvbnN0IGNyZWF0ZWRQcm9qZWN0RWxlbWVudCA9IGNyZWF0ZVByb2plY3RFbGVtZW50KFxuXHRcdFx0cHJvamVjdC5nZXRUaXRsZSgpLFxuXHRcdFx0cHJvamVjdC5pc1NlbGVjdGVkXG5cdFx0KTtcblx0XHRjcmVhdGVkUHJvamVjdEVsZW1lbnQuZGF0YXNldC5rZXkgPSBwcm9qZWN0LmdldElkKCk7XG5cdFx0Y3JlYXRlZFByb2plY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQcm9qZWN0U2VsZWN0aW9uKTtcblx0XHRwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVkUHJvamVjdEVsZW1lbnQpO1xuXHR9KTtcbn1cblxuLy8gUmVuZGVycyBhbGwgdGFza3MgaW5zaWRlIGEgc2VsZWN0ZWQgcHJvamVjdCBhcnJheVxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFRhc2tzKHNlbGVjdGVkUHJvamVjdE9iaikge1xuXHRjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3Mtd3JhcHBlclwiKTtcblx0Y2xlYXJDb250YWluZXJFbGVtZW50KHRhc2tzQ29udGFpbmVyKTtcblx0c2VsZWN0ZWRQcm9qZWN0T2JqLnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcblx0XHRjb25zdCBjcmVhdGVkVGFza0VsZW1lbnQgPSBjcmVhdGVUYXNrRWxlbWVudChcblx0XHRcdHRhc2sudGl0bGUsXG5cdFx0XHR0YXNrLmRldGFpbHMsXG5cdFx0XHR0YXNrLmRhdGUsXG5cdFx0XHR0YXNrLmZhdm9yaXRlLFxuXHRcdFx0dGFzay5pc0NvbXBsZXRlXG5cdFx0KTtcblx0XHRjcmVhdGVkVGFza0VsZW1lbnQuZGF0YXNldC5rZXkgPSB0YXNrLmdldElkKCk7XG5cdFx0Y3JlYXRlZFRhc2tFbGVtZW50LmRhdGFzZXQucHJvamVjdCA9IHNlbGVjdGVkUHJvamVjdE9iai5nZXRUaXRsZSgpO1xuXHRcdHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZWRUYXNrRWxlbWVudCk7XG5cdH0pO1xufVxuXG4vLyBSZW5kZXJzIGFsbCB0YXNrcyBpbnNpZGUgYWxsIHByb2plY3RzXG5mdW5jdGlvbiByZW5kZXJBbGxUYXNrcygpIHtcblx0Y29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLXdyYXBwZXJcIik7XG5cdGNsZWFyQ29udGFpbmVyRWxlbWVudCh0YXNrc0NvbnRhaW5lcik7XG5cdGNvbnN0IHByb2plY3RzID0gUHJvamVjdHNTdG9yYWdlLmdldFByb2plY3RzKCk7XG5cdHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcblx0XHRwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcblx0XHRcdGNvbnN0IGNyZWF0ZWRUYXNrRWxlbWVudCA9IGNyZWF0ZVRhc2tFbGVtZW50KFxuXHRcdFx0XHR0YXNrLnRpdGxlLFxuXHRcdFx0XHR0YXNrLmRldGFpbHMsXG5cdFx0XHRcdHRhc2suZGF0ZSxcblx0XHRcdFx0dGFzay5mYXZvcml0ZSxcblx0XHRcdFx0dGFzay5pc0NvbXBsZXRlXG5cdFx0XHQpO1xuXHRcdFx0Y3JlYXRlZFRhc2tFbGVtZW50LmRhdGFzZXQua2V5ID0gdGFzay5nZXRJZCgpO1xuXHRcdFx0Y3JlYXRlZFRhc2tFbGVtZW50LmRhdGFzZXQucHJvamVjdCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcblx0XHRcdHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZWRUYXNrRWxlbWVudCk7XG5cdFx0fSk7XG5cdH0pO1xufVxuLy8gcmVuZGVycyBmYXZvcml0ZSB0YXNrc1xuZnVuY3Rpb24gcmVuZGVyRmF2b3JpdGVUYXNrcygpIHtcblx0Y29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLXdyYXBwZXJcIik7XG5cdGNsZWFyQ29udGFpbmVyRWxlbWVudCh0YXNrc0NvbnRhaW5lcik7XG5cdGNvbnN0IHByb2plY3RzID0gUHJvamVjdHNTdG9yYWdlLmdldFByb2plY3RzKCk7XG5cdHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcblx0XHRwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcblx0XHRcdGlmICh0YXNrLmZhdm9yaXRlKSB7XG5cdFx0XHRcdGNvbnN0IGNyZWF0ZWRUYXNrRWxlbWVudCA9IGNyZWF0ZVRhc2tFbGVtZW50KFxuXHRcdFx0XHRcdHRhc2sudGl0bGUsXG5cdFx0XHRcdFx0dGFzay5kZXRhaWxzLFxuXHRcdFx0XHRcdHRhc2suZGF0ZSxcblx0XHRcdFx0XHR0YXNrLmZhdm9yaXRlLFxuXHRcdFx0XHRcdHRhc2suaXNDb21wbGV0ZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjcmVhdGVkVGFza0VsZW1lbnQuZGF0YXNldC5rZXkgPSB0YXNrLmdldElkKCk7XG5cdFx0XHRcdGNyZWF0ZWRUYXNrRWxlbWVudC5kYXRhc2V0LnByb2plY3QgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG5cdFx0XHRcdHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZWRUYXNrRWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb2RheVRhc2tzKCkge1xuXHRjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3Mtd3JhcHBlclwiKTtcblx0Y2xlYXJDb250YWluZXJFbGVtZW50KHRhc2tzQ29udGFpbmVyKTtcblx0Y29uc3QgcHJvamVjdHMgPSBQcm9qZWN0c1N0b3JhZ2UuZ2V0UHJvamVjdHMoKTtcblx0Y29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuXG5cdHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcblx0XHRwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcblx0XHRcdGNvbnN0IHRhc2tEdWVEYXRlID0gbmV3IERhdGUodGFzay5kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcblx0XHRcdGlmICh0YXNrRHVlRGF0ZSA9PT0gdG9kYXkpIHtcblx0XHRcdFx0Y29uc3QgY3JlYXRlZFRhc2tFbGVtZW50ID0gY3JlYXRlVGFza0VsZW1lbnQoXG5cdFx0XHRcdFx0dGFzay50aXRsZSxcblx0XHRcdFx0XHR0YXNrLmRldGFpbHMsXG5cdFx0XHRcdFx0dGFzay5kYXRlLFxuXHRcdFx0XHRcdHRhc2suZmF2b3JpdGUsXG5cdFx0XHRcdFx0dGFzay5pc0NvbXBsZXRlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGNyZWF0ZWRUYXNrRWxlbWVudC5kYXRhc2V0LmtleSA9IHRhc2suZ2V0SWQoKTtcblx0XHRcdFx0Y3JlYXRlZFRhc2tFbGVtZW50LmRhdGFzZXQucHJvamVjdCA9IHByb2plY3QuZ2V0VGl0bGUoKTtcblx0XHRcdFx0dGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlZFRhc2tFbGVtZW50KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59XG5cbi8vIHV0aWwgZnVuY3Rpb246IGNsZWFyIGFsbCBjaGlsZHJlbiBvZiBhIGNvbnRhaW5lciBlbGVtZW50XG5mdW5jdGlvbiBjbGVhckNvbnRhaW5lckVsZW1lbnQoY29udGFpbmVyRWxlbWVudCkge1xuXHR3aGlsZSAoY29udGFpbmVyRWxlbWVudC5maXJzdENoaWxkKSB7XG5cdFx0Y29udGFpbmVyRWxlbWVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xuXHR9XG59XG5cbmV4cG9ydCB7XG5cdHJlbmRlclByb2plY3RzLFxuXHRyZW5kZXJQcm9qZWN0VGFza3MsXG5cdHJlbmRlckFsbFRhc2tzLFxuXHRyZW5kZXJGYXZvcml0ZVRhc2tzLFxuXHRyZW5kZXJUb2RheVRhc2tzLFxufTtcbiIsImltcG9ydCB1bmlxaWQgZnJvbSBcInVuaXFpZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcblx0Y29uc3RydWN0b3IodGl0bGUsIGRldGFpbHMgPSBcIlwiLCBkYXRlKSB7XG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHRcdHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG5cdFx0dGhpcy5kYXRlID0gZGF0ZTtcblx0XHR0aGlzLmZhdm9yaXRlID0gZmFsc2U7XG5cdFx0dGhpcy5faWQgPSB1bmlxaWQoKTtcblx0XHR0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcblx0fVxuXG5cdHNldFRpdGxlKG5ld1RpdGxlKSB7XG5cdFx0dGhpcy50aXRsZSA9IG5ld1RpdGxlO1xuXHR9XG5cdHNldERldGFpbHMobmV3RGV0YWlscykge1xuXHRcdHRoaXMuZGV0YWlscyA9IG5ld0RldGFpbHM7XG5cdH1cblx0c2V0RGF0ZShuZXdEYXRlKSB7XG5cdFx0dGhpcy5kYXRlID0gbmV3RGF0ZTtcblx0fVxuXHR0b2dnbGVGYXZvcml0ZSgpIHtcblx0XHR0aGlzLmZhdm9yaXRlID0gdGhpcy5mYXZvcml0ZSA/IGZhbHNlIDogdHJ1ZTtcblx0fVxuXHR0b2dnbGVJc0NvbXBsZXRlKCkge1xuXHRcdHRoaXMuaXNDb21wbGV0ZSA9IHRoaXMuaXNDb21wbGV0ZSA/IGZhbHNlIDogdHJ1ZTtcblx0fVxuXHRnZXRJZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5faWQ7XG5cdH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vbWFpbi5jc3NcIjtcblxuaW1wb3J0IHByb2plY3RzQ29udHJvbGxlciBmcm9tIFwiLi9Qcm9qZWN0c0NvbnRyb2xsZXJcIjtcbmltcG9ydCB0YXNrc0NvbnRyb2xsZXIgZnJvbSBcIi4vVGFza3NDb250cm9sbGVyXCI7XG5pbXBvcnQgVWlDb250cm9sbGVyIGZyb20gXCIuL1VpQ29udHJvbGxlclwiO1xuXG5wcm9qZWN0c0NvbnRyb2xsZXIoKTtcbnRhc2tzQ29udHJvbGxlcigpO1xuVWlDb250cm9sbGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=