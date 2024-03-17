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
	static renameProject(projectKey, newName) {
		const targetProject = this.projects.find(
			(project) => project.getId() === projectKey
		);
		targetProject.setTitle(newName);
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
		const projects = _ProjectsStorage__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects();
		const selectedProject = projects.find((project) => project.isSelected);
		selectedProject.addTask(taskObj);
		(0,_render__WEBPACK_IMPORTED_MODULE_2__.renderSelectedTasks)(selectedProject);
	});
	// Add events to task's Favorite, Delete and Edit buttons
	tasksContainer.addEventListener("click", (e) => {
		const targetButtonData = e.target.dataset.action;
		const eventHandler = TaskOptionsEventHandling(e);
		if (targetButtonData === "favorite-task") {
			eventHandler.handleTaskFavorite();
		}
		if (targetButtonData === "delete-task") {
			eventHandler.handleTaskDelete();
		}
		if (targetButtonData === "edit-task") {
			eventHandler.handleTaskEdit();
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

	// util: filters the task parent obj tasks array from the selected task -> render tasks depending on the tasks render option
	function handleTaskDelete() {
		parentProject.deleteTask(taskContainer.dataset.key);
		const selectedProject = projects.find((project) => project.isSelected);
		selectedProject ? (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderSelectedTasks)(selectedProject) : (0,_render__WEBPACK_IMPORTED_MODULE_2__.renderAllTasks)();
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

	return { handleTaskFavorite, handleTaskDelete, handleTaskEdit };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxtREFBbUQsMkJBQTJCLGVBQWUsY0FBYyxHQUFHLFlBQVksNEJBQTRCLG9CQUFvQiwr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QUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3REFBZTtBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw4REFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pIMEI7O0FBRWI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw2Q0FBTTtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDM0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7O0FDQW9COztBQUVrQztBQUNOO0FBQ047O0FBRTFDLCtEQUFrQjtBQUNsQiw0REFBZTtBQUNmLHlEQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4uY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4uY3NzP2RkZDMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdW5pcWlkL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Qcm9qZWN0c0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1Byb2plY3RzU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvVGFza3NDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9VaUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZVByb2plY3RFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVUYXNrRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xufVxuXG5idXR0b24ge1xuXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuYm9keSB7XG5cdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuXHRtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuaW1nIHtcblx0bWF4LXdpZHRoOiAxMDAlO1xufVxubGFiZWwge1xuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLyogSGVhZGVyIFN0eWxlcyAqL1xuXG5oZWFkZXIge1xuXHRwYWRkaW5nOiAxcmVtIDA7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRib3JkZXItYm90dG9tOiAzcHggc29saWQgc3RlZWxibHVlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWQwO1xufVxuXG4ubG9nbyB7XG5cdGNvbG9yOiAjMjc1OTgzO1xuXHRmb250LXNpemU6IDNyZW07XG59XG5cbi8qIGNvbnRlbnQgU3R5bGVzICovXG4uY29udGVudF93cmFwcGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRtaW4taGVpZ2h0OiA4M3ZoO1xufVxuXG4vKiBTaWRlYmFyIFN0eWxlcyAqL1xuYXNpZGUge1xuXHRmbGV4OiAxO1xuXHRib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBzdGVlbGJsdWU7XG5cdHBhZGRpbmc6IDFyZW07XG5cdGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogM3JlbTtcbn1cbi5hc2lkZV9zZWN0aW9uX3RpdGxlIHtcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdGNvbG9yOiAjMjc1OTgzO1xuXHRwYWRkaW5nOiAxcmVtIDA7XG5cdGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBzdGVlbGJsdWU7XG5cdG1hcmdpbi1ib3R0b206IDFyZW07XG5cdGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmhvbWVfb3B0aW9uc193cmFwcGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0LyogYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7ICovXG59XG4uaG9tZV9vcHRpb24ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0Ym9yZGVyOiBub25lO1xuXHRwYWRkaW5nOiAwLjZyZW07XG5cdGZvbnQtc2l6ZTogMXJlbTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmFjdGl2ZSB7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Ym9yZGVyOiAycHggc29saWQgc3RlZWxibHVlO1xufVxuLnByb2plY3RfaXRlbSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRwYWRkaW5nOiAwLjZyZW07XG5cdG1hcmdpbi1ib3R0b206IDFyZW07XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Z2FwOiAwLjVyZW07XG59XG4ucHJvamVjdF9vcHRpb25zIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRnYXA6IDAuNHJlbTtcbn1cbi5wcm9qZWN0X29wdGlvbiB7XG5cdGZsZXg6IDE7XG5cdHBhZGRpbmc6IDAuM3JlbTtcblx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG5cdGNvbG9yOiB3aGl0ZTtcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdGJvcmRlcjogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRmb250LXNpemU6IDAuOHJlbTtcbn1cbi5wcm9qZWN0X29wdGlvbjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDViMDA7XG59XG4uZGVsZXRlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuLmRlbGV0ZTpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNiZjAxMDE7XG59XG4uYWRkIHtcblx0cGFkZGluZzogMC42cmVtIDJyZW07XG5cdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXHRmb250LXNpemU6IDFyZW07XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRib3JkZXI6IDNweCBzb2xpZCBzdGVlbGJsdWU7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzJjNjI4ZTtcblx0Y29sb3I6IHdoaXRlO1xuXHRtYXJnaW4tdG9wOiAycmVtO1xufVxuLmFkZDpob3ZlciB7XG5cdGJvcmRlcjogM3B4IHNvbGlkICMyMTQwNTk7XG5cdGJhY2tncm91bmQtY29sb3I6ICMxNDNmNjI7XG59XG5cbi8qIE1haW4gU3R5bGVzICovXG5tYWluIHtcblx0ZmxleDogMztcblx0cGFkZGluZzogMXJlbTtcbn1cbi50aXRsZSB7XG5cdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXHRwYWRkaW5nOiAxcmVtO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRmb250LXNpemU6IDJyZW07XG59XG4udGFza3Nfd3JhcHBlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDFyZW07XG5cdG92ZXJmbG93OiBhdXRvO1xuXHRtYXJnaW4tdG9wOiAxcmVtO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi8qIFRhc2sgU3R5bGVzICovXG4udGFzayB7XG5cdHBhZGRpbmc6IDFyZW07XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0YmFja2dyb3VuZC1jb2xvcjogIzMxMmQyZDtcbn1cbi50YXNrX2luZm8ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRnYXA6IDFyZW07XG59XG4udGFza19jaGVja2JveCB7XG5cdHdpZHRoOiAyMHB4O1xuXHRoZWlnaHQ6IDIwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hY3RpdmVfY2hlY2tib3gge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbi50YXNrX2luZm9fX3dyYXBwZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDAuNnJlbTtcbn1cbi50YXNrX3RpdGxlIHtcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRmb250LXNpemU6IDEuM3JlbTtcblx0Y29sb3I6IHdoaXRlO1xufVxuLnRhc2tfZGV0YWlscyB7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0Y29sb3I6IHJnYigxOTksIDE5OSwgMTk5KTtcbn1cbi50YXNrX29wdGlvbnMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRnYXA6IDAuN3JlbTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kdWVfZGF0ZSB7XG5cdHBhZGRpbmc6IDAuNHJlbTtcblx0Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Zm9udC1zaXplOiAwLjlyZW07XG5cdGNvbG9yOiB3aGl0ZTtcbn1cbi50YXNrX2J0biB7XG5cdHBhZGRpbmc6IDAuNHJlbTtcblx0Ym9yZGVyOiBub25lO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXHRjb2xvcjogd2hpdGU7XG59XG4uZmF2IHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzdmN2YyZDtcbn1cbi5hY3RpdmVfZmF2IHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmMDtcblx0Y29sb3I6IGJsYWNrO1xufVxuLmVkaXQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbi5lZGl0OmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwNWIwMDtcbn1cbi5saW5lX3Rocm91Z2gge1xuXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLyogRGlhbG9nIFN0eWxlcyAqL1xuZGlhbG9nIHtcblx0Ym9yZGVyOiAzcHggc29saWQgc3RlZWxibHVlO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdHBhZGRpbmc6IDFyZW07XG5cdHdpZHRoOiBtaW4oMzUwcHgsIDEwMCUpO1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHRvcDogNTAlO1xuXHRsZWZ0OiA1MCU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuZGlhbG9nID4gZm9ybSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMC41cmVtO1xuXHRtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4uZGlhbG9nX29wdGlvbnMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdGdhcDogMC43cmVtO1xufVxuLmRpYWxvZ19vcHRpb25zIGJ1dHRvbiB7XG5cdGZsZXg6IDE7XG59XG5cbi5hZGRfdGFza19kaWFsb2cgZm9ybSA+IGRpdjpub3QoOmxhc3QtY2hpbGQpIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAwLjJyZW07XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0Msc0JBQXNCO0NBQ3RCLFVBQVU7Q0FDVixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsZUFBZTtDQUNmLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCO0FBQ0E7Q0FDQywwQkFBMEI7QUFDM0I7O0FBRUEsa0JBQWtCOztBQUVsQjtDQUNDLGVBQWU7Q0FDZixzQkFBc0I7Q0FDdEIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixrQ0FBa0M7Q0FDbEMseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsY0FBYztDQUNkLGVBQWU7QUFDaEI7O0FBRUEsbUJBQW1CO0FBQ25CO0NBQ0MsYUFBYTtDQUNiLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7O0FBRUEsbUJBQW1CO0FBQ25CO0NBQ0MsT0FBTztDQUNQLGlDQUFpQztDQUNqQyxhQUFhO0NBQ2IseUJBQXlCO0NBQ3pCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsU0FBUztBQUNWO0FBQ0E7Q0FDQywwQkFBMEI7Q0FDMUIsY0FBYztDQUNkLGVBQWU7Q0FDZixrQ0FBa0M7Q0FDbEMsbUJBQW1CO0NBQ25CLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLDZCQUE2QjtBQUM5QjtBQUNBO0NBQ0MsNkJBQTZCO0NBQzdCLFlBQVk7Q0FDWixlQUFlO0NBQ2YsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQiwwQkFBMEI7Q0FDMUIsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxrQkFBa0I7Q0FDbEIsMkJBQTJCO0FBQzVCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2YsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2YsV0FBVztBQUNaO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsZUFBZTtDQUNmLFdBQVc7QUFDWjtBQUNBO0NBQ0MsT0FBTztDQUNQLGVBQWU7Q0FDZix1QkFBdUI7Q0FDdkIsWUFBWTtDQUNaLDBCQUEwQjtDQUMxQixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxxQkFBcUI7QUFDdEI7QUFDQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0Msb0JBQW9CO0NBQ3BCLDBCQUEwQjtDQUMxQixlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLDJCQUEyQjtDQUMzQixrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLHlCQUF5QjtDQUN6Qix5QkFBeUI7QUFDMUI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0NBQ0MsT0FBTztDQUNQLGFBQWE7QUFDZDtBQUNBO0NBQ0MsMEJBQTBCO0NBQzFCLGFBQWE7Q0FDYiwyQkFBMkI7Q0FDM0IsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyx1QkFBdUI7Q0FDdkIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0NBQ1QsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0NBQ0MsYUFBYTtDQUNiLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsOEJBQThCO0NBQzlCLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsYUFBYTtDQUNiLFNBQVM7QUFDVjtBQUNBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLHVCQUF1QjtDQUN2QixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyx1QkFBdUI7QUFDeEI7QUFDQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsV0FBVztBQUNaO0FBQ0E7Q0FDQywwQkFBMEI7Q0FDMUIsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixZQUFZO0FBQ2I7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQix5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLGFBQWE7Q0FDYixXQUFXO0NBQ1gsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQiwwQkFBMEI7Q0FDMUIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLHNCQUFzQjtDQUN0QixZQUFZO0FBQ2I7QUFDQTtDQUNDLHVCQUF1QjtBQUN4QjtBQUNBO0NBQ0MseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBRUEsa0JBQWtCO0FBQ2xCO0NBQ0MsMkJBQTJCO0NBQzNCLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLGVBQWU7Q0FDZixRQUFRO0NBQ1IsU0FBUztDQUNULGdDQUFnQztBQUNqQztBQUNBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixXQUFXO0NBQ1gscUJBQXFCO0FBQ3RCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsZUFBZTtDQUNmLFdBQVc7QUFDWjtBQUNBO0NBQ0MsT0FBTztBQUNSOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixXQUFXO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaW1nIHtcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxufVxcbmxhYmVsIHtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLyogSGVhZGVyIFN0eWxlcyAqL1xcblxcbmhlYWRlciB7XFxuXFx0cGFkZGluZzogMXJlbSAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRib3JkZXItYm90dG9tOiAzcHggc29saWQgc3RlZWxibHVlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmOWY5ZDA7XFxufVxcblxcbi5sb2dvIHtcXG5cXHRjb2xvcjogIzI3NTk4MztcXG5cXHRmb250LXNpemU6IDNyZW07XFxufVxcblxcbi8qIGNvbnRlbnQgU3R5bGVzICovXFxuLmNvbnRlbnRfd3JhcHBlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0bWluLWhlaWdodDogODN2aDtcXG59XFxuXFxuLyogU2lkZWJhciBTdHlsZXMgKi9cXG5hc2lkZSB7XFxuXFx0ZmxleDogMTtcXG5cXHRib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBzdGVlbGJsdWU7XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDNyZW07XFxufVxcbi5hc2lkZV9zZWN0aW9uX3RpdGxlIHtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG5cXHRjb2xvcjogIzI3NTk4MztcXG5cXHRwYWRkaW5nOiAxcmVtIDA7XFxuXFx0Ym9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHN0ZWVsYmx1ZTtcXG5cXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmhvbWVfb3B0aW9uc193cmFwcGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0LyogYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7ICovXFxufVxcbi5ob21lX29wdGlvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHBhZGRpbmc6IDAuNnJlbTtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLmFjdGl2ZSB7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHN0ZWVsYmx1ZTtcXG59XFxuLnByb2plY3RfaXRlbSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0cGFkZGluZzogMC42cmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGdhcDogMC41cmVtO1xcbn1cXG4ucHJvamVjdF9vcHRpb25zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRnYXA6IDAuNHJlbTtcXG59XFxuLnByb2plY3Rfb3B0aW9uIHtcXG5cXHRmbGV4OiAxO1xcblxcdHBhZGRpbmc6IDAuM3JlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRmb250LXNpemU6IDAuOHJlbTtcXG59XFxuLnByb2plY3Rfb3B0aW9uOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1YjAwO1xcbn1cXG4uZGVsZXRlIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbi5kZWxldGU6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNiZjAxMDE7XFxufVxcbi5hZGQge1xcblxcdHBhZGRpbmc6IDAuNnJlbSAycmVtO1xcblxcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRib3JkZXI6IDNweCBzb2xpZCBzdGVlbGJsdWU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyYzYyOGU7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdG1hcmdpbi10b3A6IDJyZW07XFxufVxcbi5hZGQ6aG92ZXIge1xcblxcdGJvcmRlcjogM3B4IHNvbGlkICMyMTQwNTk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzE0M2Y2MjtcXG59XFxuXFxuLyogTWFpbiBTdHlsZXMgKi9cXG5tYWluIHtcXG5cXHRmbGV4OiAzO1xcblxcdHBhZGRpbmc6IDFyZW07XFxufVxcbi50aXRsZSB7XFxuXFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRmb250LXNpemU6IDJyZW07XFxufVxcbi50YXNrc193cmFwcGVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxcmVtO1xcblxcdG92ZXJmbG93OiBhdXRvO1xcblxcdG1hcmdpbi10b3A6IDFyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4vKiBUYXNrIFN0eWxlcyAqL1xcbi50YXNrIHtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzMxMmQyZDtcXG59XFxuLnRhc2tfaW5mbyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDFyZW07XFxufVxcbi50YXNrX2NoZWNrYm94IHtcXG5cXHR3aWR0aDogMjBweDtcXG5cXHRoZWlnaHQ6IDIwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYWN0aXZlX2NoZWNrYm94IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuLnRhc2tfaW5mb19fd3JhcHBlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMC42cmVtO1xcbn1cXG4udGFza190aXRsZSB7XFxuXFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0Zm9udC1zaXplOiAxLjNyZW07XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG4udGFza19kZXRhaWxzIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxuXFx0Y29sb3I6IHJnYigxOTksIDE5OSwgMTk5KTtcXG59XFxuLnRhc2tfb3B0aW9ucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDAuN3JlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZHVlX2RhdGUge1xcblxcdHBhZGRpbmc6IDAuNHJlbTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Zm9udC1zaXplOiAwLjlyZW07XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG4udGFza19idG4ge1xcblxcdHBhZGRpbmc6IDAuNHJlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuLmZhdiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzdmN2YyZDtcXG59XFxuLmFjdGl2ZV9mYXYge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZjA7XFxuXFx0Y29sb3I6IGJsYWNrO1xcbn1cXG4uZWRpdCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcbi5lZGl0OmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1YjAwO1xcbn1cXG4ubGluZV90aHJvdWdoIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLyogRGlhbG9nIFN0eWxlcyAqL1xcbmRpYWxvZyB7XFxuXFx0Ym9yZGVyOiAzcHggc29saWQgc3RlZWxibHVlO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdHdpZHRoOiBtaW4oMzUwcHgsIDEwMCUpO1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDUwJTtcXG5cXHRsZWZ0OiA1MCU7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbmRpYWxvZyA+IGZvcm0ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDAuNXJlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcbi5kaWFsb2dfb3B0aW9ucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0Z2FwOiAwLjdyZW07XFxufVxcbi5kaWFsb2dfb3B0aW9ucyBidXR0b24ge1xcblxcdGZsZXg6IDE7XFxufVxcblxcbi5hZGRfdGFza19kaWFsb2cgZm9ybSA+IGRpdjpub3QoOmxhc3QtY2hpbGQpIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAwLjJyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogXG4oVGhlIE1JVCBMaWNlbnNlKVxuQ29weXJpZ2h0IChjKSAyMDE0LTIwMjEgSGFsw6FzeiDDgWTDoW0gPGFkYW1AYWltZm9ybS5jb20+XG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vICBVbmlxdWUgSGV4YXRyaWRlY2ltYWwgSUQgR2VuZXJhdG9yXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gIERlcGVuZGVuY2llc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgcGlkID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MucGlkID8gcHJvY2Vzcy5waWQudG9TdHJpbmcoMzYpIDogJycgO1xudmFyIGFkZHJlc3MgPSAnJztcbmlmKHR5cGVvZiBfX3dlYnBhY2tfcmVxdWlyZV9fICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiByZXF1aXJlICE9PSAndW5kZWZpbmVkJyl7XG4gICAgdmFyIG1hYyA9ICcnLCBvcyA9IHJlcXVpcmUoJ29zJyk7IFxuICAgIGlmKG9zLm5ldHdvcmtJbnRlcmZhY2VzKSB2YXIgbmV0d29ya0ludGVyZmFjZXMgPSBvcy5uZXR3b3JrSW50ZXJmYWNlcygpO1xuICAgIGlmKG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgbG9vcDpcbiAgICAgICAgZm9yKGxldCBpbnRlcmZhY2Vfa2V5IGluIG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJbnRlcmZhY2UgPSBuZXR3b3JrSW50ZXJmYWNlc1tpbnRlcmZhY2Vfa2V5XTtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IG5ldHdvcmtJbnRlcmZhY2UubGVuZ3RoO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZihuZXR3b3JrSW50ZXJmYWNlW2ldICE9PSB1bmRlZmluZWQgJiYgbmV0d29ya0ludGVyZmFjZVtpXS5tYWMgJiYgbmV0d29ya0ludGVyZmFjZVtpXS5tYWMgIT0gJzAwOjAwOjAwOjAwOjAwOjAwJyl7XG4gICAgICAgICAgICAgICAgICAgIG1hYyA9IG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjOyBicmVhayBsb29wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhZGRyZXNzID0gbWFjID8gcGFyc2VJbnQobWFjLnJlcGxhY2UoL1xcOnxcXEQrL2dpLCAnJykpLnRvU3RyaW5nKDM2KSA6ICcnIDtcbiAgICB9XG59IFxuXG4vLyAgRXhwb3J0c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgYWRkcmVzcyArIHBpZCArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cbm1vZHVsZS5leHBvcnRzLnByb2Nlc3MgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMudGltZSAgICA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5cbi8vICBIZWxwZXJzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIG5vdygpe1xuICAgIHZhciB0aW1lID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgbGFzdCA9IG5vdy5sYXN0IHx8IHRpbWU7XG4gICAgcmV0dXJuIG5vdy5sYXN0ID0gdGltZSA+IGxhc3QgPyB0aW1lIDogbGFzdCArIDE7XG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgUHJvamVjdHNTdG9yYWdlIGZyb20gXCIuL1Byb2plY3RzU3RvcmFnZVwiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdHMsIHJlbmRlckFsbFRhc2tzIH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RzQ29udHJvbGxlcigpIHtcblx0Y29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3RcIik7XG5cdGNvbnN0IHByb2plY3REaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LWRpYWxvZ1wiKTtcblx0Y29uc3QgcHJvamVjdERpYWxvZ0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LWRpYWxvZyBmb3JtXCIpO1xuXHRjb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZS1pbnB1dFwiKTtcblx0Y29uc3QgcHJvamVjdERpYWxvZ0NhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XCJbZGF0YS1hY3Rpb249J2NhbmNlbC1wcm9qZWN0LWFkZCddXCJcblx0KTtcblx0Y29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWNvbnRhaW5lclwiKTtcblxuXHQvLyBTaG93IG1vZGFsIHRvIGFkZCBhIG5ldyBwcm9qZWN0IGFuZCByZXNldHMgdGhlIGZvcm1cblx0YWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdHByb2plY3REaWFsb2cuc2hvd01vZGFsKCk7XG5cdFx0cHJvamVjdFRpdGxlSW5wdXQudmFsdWUgPSBudWxsO1xuXHR9KTtcblxuXHQvLyBDbG9zZSBhZGQgbmV3IHByb2plY3QgbW9kYWxcblx0cHJvamVjdERpYWxvZ0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcHJvamVjdERpYWxvZy5jbG9zZSgpKTtcblxuXHQvLyBjcmVhdGVzIGEgbmV3IHByb2plY3Qgb2JqIGFuZCBhZGQgaXQgdG8gcHJvamVjdHMgc3RvcmFnZSB0aGVuIHJlbmRlcnMgYWxsIHByb2plY3RzXG5cdHByb2plY3REaWFsb2dGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xuXHRcdGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3RUaXRsZUlucHV0LnZhbHVlO1xuXHRcdGNvbnN0IHByb2plY3RPYmogPSBuZXcgUHJvamVjdChwcm9qZWN0VGl0bGUpO1xuXHRcdFByb2plY3RzU3RvcmFnZS5hZGRQcm9qZWN0KHByb2plY3RPYmopO1xuXHRcdHJlbmRlclByb2plY3RzKCk7XG5cdH0pO1xuXG5cdC8vIEFkZCBldmVudHMgdG8gcHJvamVjdCdzIERlbGV0ZSBhbmQgRWRpdCBidXR0b25zXG5cdHByb2plY3RzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdGNvbnN0IGNsaWNrZWRFbGVtZW50ID0gZS50YXJnZXQuZGF0YXNldC5hY3Rpb247XG5cdFx0aWYgKGNsaWNrZWRFbGVtZW50ID09PSBcImRlbGV0ZS1wcm9qZWN0XCIpIHtcblx0XHRcdGhhbmRsZVByb2plY3REZWxldGUoZSk7XG5cdFx0fVxuXHRcdGlmIChjbGlja2VkRWxlbWVudCA9PT0gXCJyZW5hbWUtcHJvamVjdFwiKSB7XG5cdFx0XHRoYW5kbGVQcm9qZWN0UmVuYW1lKGUpO1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gQ3JlYXRlIFR3byBkZWZhdWx0IHByb2plY3Qgd2hlbiBwYWdlIGxvYWRzIGZvciB0aGUgZmlyc3QgdGltZVxuXHRjcmVhdGVEZWZhdWx0UHJvamVjdChcInByb2plY3QgT25lXCIpO1xuXHRjcmVhdGVEZWZhdWx0UHJvamVjdChcInByb2plY3QgVHdvXCIpO1xuXG5cdC8vIENhbGwgcmVuZGVyIHByb2plY3RzIGZ1bmN0aW9uIG9uY2UgdG8gcmVuZGVyIGFsbCBkZWZhdWx0cyB3aGVuIHBhZ2UgbG9hZHMgZm9yIHRoZSBmaXJzdCB0aW1lXG5cdHJlbmRlclByb2plY3RzKCk7XG59XG5cbi8vIHV0aWw6IGNyZWF0ZXMgZGVmYXVsdCBwcm9qZWN0c1xuZnVuY3Rpb24gY3JlYXRlRGVmYXVsdFByb2plY3QodGl0bGUpIHtcblx0Y29uc3QgcHJvak9uZSA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcblx0UHJvamVjdHNTdG9yYWdlLmFkZFByb2plY3QocHJvak9uZSk7XG59XG5cbi8vIHV0aWw6IGhhbmRsZSBwcm9qZWN0IGRlbGV0ZTpcbmZ1bmN0aW9uIGhhbmRsZVByb2plY3REZWxldGUoZSkge1xuXHRjb25zdCBwcm9qZWN0VGl0bGVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlLWRpc3BsYXlcIik7XG5cdGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLWJ0blwiKTtcblx0Y29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsbC10YXNrcy1vcHRpb25cIik7XG5cdGNvbnN0IHByb2plY3RFbGVtZW50Q29udGFpbmVyID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG5cdC8vIERlbGV0ZSB0aGUgcHJvamVjdCBmcm9tIHN0b3JhZ2UgYW5kIGRlbGV0ZSB0aGUgcHJvamVjdCBFbGVtZW50XG5cdFByb2plY3RzU3RvcmFnZS5kZWxldGVQcm9qZWN0KHByb2plY3RFbGVtZW50Q29udGFpbmVyLmRhdGFzZXQua2V5KTtcblx0cHJvamVjdEVsZW1lbnRDb250YWluZXIucmVtb3ZlKCk7XG5cblx0cHJvamVjdFRpdGxlRGlzcGxheS50ZXh0Q29udGVudCA9IFwiQWxsIFRhc2tzXCI7XG5cdGFsbFRhc2tzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdGFkZFRhc2tCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRyZW5kZXJBbGxUYXNrcygpO1xufVxuXG4vLyB1dGlsOiBoYW5kbGUgcHJvamVjdCByZW5hbWU6XG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0UmVuYW1lKGUpIHtcblx0Y29uc3QgcHJvamVjdFRpdGxlRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZS1kaXNwbGF5XCIpO1xuXHRjb25zdCBwcm9qZWN0UmVuYW1lTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlbmFtZS1wcm9qZWN0LWRpYWxvZ1wiKTtcblx0Y29uc3QgcHJvamVjdFJlbmFtZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFwiI3JlbmFtZS1wcm9qZWN0LWRpYWxvZyBmb3JtXCJcblx0KTtcblx0Y29uc3QgcHJvamVjdFJlbmFtZUNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XCJbZGF0YS1hY3Rpb249J2NhbmNlbC1wcm9qZWN0LXJlbmFtZSddXCJcblx0KTtcblx0Y29uc3QgcHJvamVjdFJlbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXJlbmFtZS1pbnB1dFwiKTtcblx0Y29uc3QgcHJvamVjdEVsZW1lbnRDb250YWluZXIgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3RFbGVtZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKTtcblxuXHRwcm9qZWN0UmVuYW1lTW9kYWwuc2hvd01vZGFsKCk7XG5cdHByb2plY3RSZW5hbWVJbnB1dC52YWx1ZSA9IG51bGw7XG5cblx0cHJvamVjdFJlbmFtZUNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cblx0XHRwcm9qZWN0UmVuYW1lTW9kYWwuY2xvc2UoKVxuXHQpO1xuXG5cdHByb2plY3RSZW5hbWVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xuXHRcdGxldCBuZXdUaXRsZSA9IHByb2plY3RSZW5hbWVJbnB1dC52YWx1ZTtcblx0XHRQcm9qZWN0c1N0b3JhZ2UucmVuYW1lUHJvamVjdChcblx0XHRcdHByb2plY3RFbGVtZW50Q29udGFpbmVyLmRhdGFzZXQua2V5LFxuXHRcdFx0bmV3VGl0bGVcblx0XHQpO1xuXG5cdFx0cHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gbmV3VGl0bGU7XG5cdFx0cHJvamVjdFRpdGxlRGlzcGxheS50ZXh0Q29udGVudCA9IG5ld1RpdGxlO1xuXHR9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RzU3RvcmFnZSB7XG5cdHN0YXRpYyBwcm9qZWN0cyA9IFtdO1xuXG5cdHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3QpIHtcblx0XHR0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG5cdH1cblx0c3RhdGljIGdldFByb2plY3RzKCkge1xuXHRcdHJldHVybiB0aGlzLnByb2plY3RzO1xuXHR9XG5cdHN0YXRpYyBkZWxldGVQcm9qZWN0KHByb2plY3RLZXkpIHtcblx0XHR0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoXG5cdFx0XHQocHJvamVjdCkgPT4gcHJvamVjdC5nZXRJZCgpICE9PSBwcm9qZWN0S2V5XG5cdFx0KTtcblx0fVxuXHRzdGF0aWMgZGVzZWxlY3RBbGxQcm9qZWN0cygpIHtcblx0XHR0aGlzLnByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKHByb2plY3QuaXNTZWxlY3RlZCA9IGZhbHNlKSk7XG5cdH1cblx0c3RhdGljIHJlbmFtZVByb2plY3QocHJvamVjdEtleSwgbmV3TmFtZSkge1xuXHRcdGNvbnN0IHRhcmdldFByb2plY3QgPSB0aGlzLnByb2plY3RzLmZpbmQoXG5cdFx0XHQocHJvamVjdCkgPT4gcHJvamVjdC5nZXRJZCgpID09PSBwcm9qZWN0S2V5XG5cdFx0KTtcblx0XHR0YXJnZXRQcm9qZWN0LnNldFRpdGxlKG5ld05hbWUpO1xuXHR9XG59XG4iLCJpbXBvcnQgUHJvamVjdHNTdG9yYWdlIGZyb20gXCIuL1Byb2plY3RzU3RvcmFnZVwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgcmVuZGVyQWxsVGFza3MsIHJlbmRlclByb2plY3RzLCByZW5kZXJTZWxlY3RlZFRhc2tzIH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2tzQ29udHJvbGxlcigpIHtcblx0Y29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLXdyYXBwZXJcIik7XG5cdGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLWJ0blwiKTtcblx0Y29uc3QgdGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stZGlhbG9nXCIpO1xuXHRjb25zdCB0YXNrRGlhbG9nRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stZGlhbG9nIGZvcm1cIik7XG5cdGNvbnN0IHRhc2tDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbC10YXNrLW1vZGFsXCIpO1xuXHRjb25zdCB0YXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10aXRsZS1pbnB1dFwiKTtcblx0Y29uc3QgdGFza0RldGFpbHNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXRhaWxzLWlucHV0XCIpO1xuXHRjb25zdCB0YXNrRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRhdGUtaW5wdXRcIik7XG5cblx0Ly8gU2hvdyBtb2RhbCB0byBhZGQgYSBuZXcgdGFzayBhbmQgcmVzZXRzIHRoZSBmb3JtXG5cdGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHR0YXNrRGlhbG9nLnNob3dNb2RhbCgpO1xuXG5cdFx0dGFza1RpdGxlSW5wdXQudmFsdWUgPSBudWxsO1xuXHRcdHRhc2tEZXRhaWxzSW5wdXQudmFsdWUgPSBudWxsO1xuXHRcdHRhc2tEdWVEYXRlSW5wdXQudmFsdWUgPSBudWxsO1xuXHR9KTtcblxuXHQvLyBDbG9zZSB0aGUgYWRkIG5ldyB0YXNrIG1vZGFsXG5cdHRhc2tDYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRhc2tEaWFsb2cuY2xvc2UoKSk7XG5cblx0Ly8gQ3JlYXRlcyBuZXcgdGFzayBvYmogYW5kIGFkZCBpdCB0byB0aGUgc2VsZWN0ZWQgcHJvamVjdCB0YXNrcyBhcnJheVxuXHR0YXNrRGlhbG9nRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+IHtcblx0XHRjb25zdCB0YXNrVGl0bGUgPSB0YXNrVGl0bGVJbnB1dC52YWx1ZTtcblx0XHRjb25zdCB0YXNrRGV0YWlscyA9IHRhc2tEZXRhaWxzSW5wdXQudmFsdWU7XG5cdFx0Y29uc3QgdGFza0R1ZURhdGUgPSB0YXNrRHVlRGF0ZUlucHV0LnZhbHVlO1xuXHRcdGNvbnN0IHRhc2tPYmogPSBuZXcgVGFzayh0YXNrVGl0bGUsIHRhc2tEZXRhaWxzLCB0YXNrRHVlRGF0ZSk7XG5cdFx0Y29uc3QgcHJvamVjdHMgPSBQcm9qZWN0c1N0b3JhZ2UuZ2V0UHJvamVjdHMoKTtcblx0XHRjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlzU2VsZWN0ZWQpO1xuXHRcdHNlbGVjdGVkUHJvamVjdC5hZGRUYXNrKHRhc2tPYmopO1xuXHRcdHJlbmRlclNlbGVjdGVkVGFza3Moc2VsZWN0ZWRQcm9qZWN0KTtcblx0fSk7XG5cdC8vIEFkZCBldmVudHMgdG8gdGFzaydzIEZhdm9yaXRlLCBEZWxldGUgYW5kIEVkaXQgYnV0dG9uc1xuXHR0YXNrc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0XHRjb25zdCB0YXJnZXRCdXR0b25EYXRhID0gZS50YXJnZXQuZGF0YXNldC5hY3Rpb247XG5cdFx0Y29uc3QgZXZlbnRIYW5kbGVyID0gVGFza09wdGlvbnNFdmVudEhhbmRsaW5nKGUpO1xuXHRcdGlmICh0YXJnZXRCdXR0b25EYXRhID09PSBcImZhdm9yaXRlLXRhc2tcIikge1xuXHRcdFx0ZXZlbnRIYW5kbGVyLmhhbmRsZVRhc2tGYXZvcml0ZSgpO1xuXHRcdH1cblx0XHRpZiAodGFyZ2V0QnV0dG9uRGF0YSA9PT0gXCJkZWxldGUtdGFza1wiKSB7XG5cdFx0XHRldmVudEhhbmRsZXIuaGFuZGxlVGFza0RlbGV0ZSgpO1xuXHRcdH1cblx0XHRpZiAodGFyZ2V0QnV0dG9uRGF0YSA9PT0gXCJlZGl0LXRhc2tcIikge1xuXHRcdFx0ZXZlbnRIYW5kbGVyLmhhbmRsZVRhc2tFZGl0KCk7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBDcmVhdGUgZGVmYXVsdCB0YXNrc1xuXHRjcmVhdGVEZWZhdWx0VGFzayhcIlRhc2sgb25lXCIsIFwic29tZSBkZXRhaWxzIGFib3V0IHRhc2sgb25lXCIsIFwiMjAyNC0zLTE1XCIpO1xuXHRjcmVhdGVEZWZhdWx0VGFzayhcIlRhc2sgdHdvXCIsIFwic29tZSBkZXRhaWxzIGFib3V0IHRhc2sgdHdvXCIsIFwiMjAyNC0zLTIwXCIpO1xuXG5cdC8vIFJlbmRlciB0YXNrcyAoZGVmYXVsdCkgZm9yIHByb2plY3Qgb25lIChkZWZhdWx0KSB3aGVuIHBhZ2UgbG9hZHMgZm9yIHRoZSBmaXJzdCB0aW1lXG5cdHJlbmRlclNlbGVjdGVkVGFza3MoUHJvamVjdHNTdG9yYWdlLmdldFByb2plY3RzKClbMF0pO1xufVxuXG4vLyB1dGlsOiBjcmVhdGVzIGRlZmF1bHQgdGFza3MgaW5zaWRlIHRoZSBmaXJzdCBwcm9qZWN0IChkZWZhdWx0KTtcbmZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRUYXNrKHRpdGxlLCBkZXRhaWxzLCBkYXRlKSB7XG5cdGNvbnN0IHRhc2tPYmogPSBuZXcgVGFzayh0aXRsZSwgZGV0YWlscywgZGF0ZSk7XG5cdGNvbnN0IHByb2plY3QgPSBQcm9qZWN0c1N0b3JhZ2UuZ2V0UHJvamVjdHMoKVswXTtcblx0cHJvamVjdC50YXNrcy5wdXNoKHRhc2tPYmopO1xufVxuXG4vLyBoYW5kbGVzIGV2ZW50cyBmb3IgdGFzayA6IEZhdm9yaXRlICwgRGVsZXRlIGFuZCBFZGl0XG5mdW5jdGlvbiBUYXNrT3B0aW9uc0V2ZW50SGFuZGxpbmcoZSkge1xuXHRjb25zdCB0YXNrQ29udGFpbmVyID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHRjb25zdCBwcm9qZWN0cyA9IFByb2plY3RzU3RvcmFnZS5nZXRQcm9qZWN0cygpO1xuXHRjb25zdCBwYXJlbnRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChcblx0XHQocHJvamVjdCkgPT4gcHJvamVjdC5nZXRUaXRsZSgpID09PSB0YXNrQ29udGFpbmVyLmRhdGFzZXQucHJvamVjdFxuXHQpO1xuXHRjb25zdCB0YXNrT2JqID0gcGFyZW50UHJvamVjdC50YXNrcy5maW5kKFxuXHRcdCh0YXNrKSA9PiB0YXNrLmdldElkKCkgPT09IHRhc2tDb250YWluZXIuZGF0YXNldC5rZXlcblx0KTtcblxuXHQvLyB1dGlsOiB0b2dnbGVzIHRhc2sncyBvYmogZmF2b3JpdGUgcHJvcCBhbmQgYWRkIGEgY2xhc3MgKGFjdGl2ZV9mYXYpIHRvIHRoZSB0YXNrJ3MgZmF2b3JpdGUgYnV0dG9uXG5cdGZ1bmN0aW9uIGhhbmRsZVRhc2tGYXZvcml0ZSgpIHtcblx0XHR0YXNrT2JqLnRvZ2dsZUZhdm9yaXRlKCk7XG5cdFx0ZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZV9mYXZcIik7XG5cdH1cblxuXHQvLyB1dGlsOiBmaWx0ZXJzIHRoZSB0YXNrIHBhcmVudCBvYmogdGFza3MgYXJyYXkgZnJvbSB0aGUgc2VsZWN0ZWQgdGFzayAtPiByZW5kZXIgdGFza3MgZGVwZW5kaW5nIG9uIHRoZSB0YXNrcyByZW5kZXIgb3B0aW9uXG5cdGZ1bmN0aW9uIGhhbmRsZVRhc2tEZWxldGUoKSB7XG5cdFx0cGFyZW50UHJvamVjdC5kZWxldGVUYXNrKHRhc2tDb250YWluZXIuZGF0YXNldC5rZXkpO1xuXHRcdGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaXNTZWxlY3RlZCk7XG5cdFx0c2VsZWN0ZWRQcm9qZWN0ID8gcmVuZGVyU2VsZWN0ZWRUYXNrcyhzZWxlY3RlZFByb2plY3QpIDogcmVuZGVyQWxsVGFza3MoKTtcblx0fVxuXG5cdC8vIEVkaXRzIHRhc2tzXG5cdGZ1bmN0aW9uIGhhbmRsZVRhc2tFZGl0KCkge1xuXHRcdGNvbnN0IGVkaXRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcIltkYXRhLWFjdGlvbj0ncmVuYW1lLXRhc2stbW9kYWwnXCJcblx0XHQpO1xuXHRcdGNvbnN0IGVkaXRNb2RhbEZvcm0gPSBlZGl0TW9kYWwucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG5cdFx0Y29uc3QgZWRpdGVkVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcIltkYXRhLWFjdGlvbj0ndGFzay1uZXctbmFtZS1pbnB1dCdcIlxuXHRcdCk7XG5cdFx0Y29uc3QgZWRpdGVkRGV0YWlsc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFwiW2RhdGEtYWN0aW9uPSd0YXNrLW5ldy1kZXRhaWxzLWlucHV0J1wiXG5cdFx0KTtcblx0XHRjb25zdCBlZGl0ZWREYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XCJbZGF0YS1hY3Rpb249J3Rhc2stbmV3LWRhdGUtaW5wdXQnXCJcblx0XHQpO1xuXHRcdGNvbnN0IGNhbmNlbEVkaXRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFwiW2RhdGEtYWN0aW9uPSdjYW5jZWwtdGFzay1lZGl0J1wiXG5cdFx0KTtcblx0XHRjb25zdCB0YXNrVGl0bGVFbGVtZW50ID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnRhc2tfdGl0bGVcIik7XG5cdFx0Y29uc3QgdGFza0RldGFpbHNFbGVtZW50ID0gdGFza0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnRhc2tfZGV0YWlsc1wiKTtcblx0XHRjb25zdCB0YXNrRGF0ZUVsZW1lbnQgPSB0YXNrQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuZHVlX2RhdGVcIik7XG5cblx0XHRlZGl0TW9kYWwuc2hvd01vZGFsKCk7XG5cdFx0Y2FuY2VsRWRpdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGVkaXRNb2RhbC5jbG9zZSgpKTtcblxuXHRcdGVkaXRNb2RhbEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoKSA9PiB7XG5cdFx0XHQvLyBVcGRhdGVzIHRhc2sgb2JqZWN0IGluc2lkZSBpdCdzIHByb2plY3QgYXJyYXlcblx0XHRcdHRhc2tPYmouc2V0VGl0bGUoZWRpdGVkVGl0bGVJbnB1dC52YWx1ZSk7XG5cdFx0XHR0YXNrT2JqLnNldERldGFpbHMoZWRpdGVkRGV0YWlsc0lucHV0LnZhbHVlKTtcblx0XHRcdHRhc2tPYmouc2V0RGF0ZShlZGl0ZWREYXRlSW5wdXQudmFsdWUpO1xuXG5cdFx0XHQvLyBVcGRhdGVzIHRhc2sgVUlcblx0XHRcdHRhc2tUaXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBlZGl0ZWRUaXRsZUlucHV0LnZhbHVlO1xuXHRcdFx0dGFza0RldGFpbHNFbGVtZW50LnRleHRDb250ZW50ID0gZWRpdGVkRGV0YWlsc0lucHV0LnZhbHVlO1xuXHRcdFx0dGFza0RhdGVFbGVtZW50LnRleHRDb250ZW50ID0gZWRpdGVkRGF0ZUlucHV0LnZhbHVlO1xuXHRcdH0pO1xuXG5cdFx0Ly8gUmVzZXRzIGVkaXQgdGFzayBtb2RhbCBpbnB1dHNcblx0XHRlZGl0ZWRUaXRsZUlucHV0LnZhbHVlID0gbnVsbDtcblx0XHRlZGl0ZWREZXRhaWxzSW5wdXQudmFsdWUgPSBudWxsO1xuXHRcdGVkaXRlZERhdGVJbnB1dC52YWx1ZSA9IG51bGw7XG5cdH1cblxuXHRyZXR1cm4geyBoYW5kbGVUYXNrRmF2b3JpdGUsIGhhbmRsZVRhc2tEZWxldGUsIGhhbmRsZVRhc2tFZGl0IH07XG59XG4iLCJpbXBvcnQgUHJvamVjdHNTdG9yYWdlIGZyb20gXCIuL1Byb2plY3RzU3RvcmFnZVwiO1xuaW1wb3J0IHtcblx0cmVuZGVyQWxsVGFza3MsXG5cdHJlbmRlclNlbGVjdGVkVGFza3MsXG5cdHJlbmRlckZhdm9yaXRlVGFza3MsXG5cdHJlbmRlclRvZGF5VGFza3MsXG59IGZyb20gXCIuL3JlbmRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVaUNvbnRyb2xsZXIoKSB7XG5cdGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLWJ0blwiKTtcblx0Y29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FsbC10YXNrcy1vcHRpb25cIik7XG5cdGNvbnN0IHRvRGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RheS1vcHRpb25cIik7XG5cdGNvbnN0IGZhdm9yaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmYXZvcml0ZS1vcHRpb25cIik7XG5cdGNvbnN0IHJlbmRlck9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlbmRlci1vcHRpb25zXCIpO1xuXHRjb25zdCBwcm9qZWN0VGl0bGVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlLWRpc3BsYXlcIik7XG5cdGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0cy1jb250YWluZXJcIik7XG5cblx0YWxsVGFza3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRyZXNldFNlbGVjdGlvblN0eWxlcygpO1xuXHRcdGFsbFRhc2tzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdFx0cHJvamVjdFRpdGxlRGlzcGxheS50ZXh0Q29udGVudCA9IFwiQWxsIFRhc2tzXCI7XG5cdFx0UHJvamVjdHNTdG9yYWdlLmRlc2VsZWN0QWxsUHJvamVjdHMoKTtcblx0XHRyZW5kZXJBbGxUYXNrcygpO1xuXHR9KTtcblxuXHRmYXZvcml0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdHJlc2V0U2VsZWN0aW9uU3R5bGVzKCk7XG5cdFx0ZmF2b3JpdGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0XHRwcm9qZWN0VGl0bGVEaXNwbGF5LnRleHRDb250ZW50ID0gXCJGYXZvcml0ZXNcIjtcblx0XHRQcm9qZWN0c1N0b3JhZ2UuZGVzZWxlY3RBbGxQcm9qZWN0cygpO1xuXHRcdHJlbmRlckZhdm9yaXRlVGFza3MoKTtcblx0fSk7XG5cblx0dG9EYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRyZXNldFNlbGVjdGlvblN0eWxlcygpO1xuXHRcdHRvRGF5LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdFx0cHJvamVjdFRpdGxlRGlzcGxheS50ZXh0Q29udGVudCA9IFwiVG9kYXkncyBUYXNrc1wiO1xuXHRcdFByb2plY3RzU3RvcmFnZS5kZXNlbGVjdEFsbFByb2plY3RzKCk7XG5cdFx0cmVuZGVyVG9kYXlUYXNrcygpO1xuXHR9KTtcblxuXHQvLyBBbGwgdGFza3MgcmVuZGVyIGFzIGEgZGVmYXVsdCB3aGVuIHBhZ2UgZmlyc3QgbG9hZHNcblx0YWxsVGFza3MuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0YWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdHJlbmRlckFsbFRhc2tzKCk7XG5cblx0Ly8gdXRpbDogcmVzZXRzIHNlbGVjdGlvbnMgc3R5bGVzXG5cdGZ1bmN0aW9uIHJlc2V0U2VsZWN0aW9uU3R5bGVzKCkge1xuXHRcdGFkZFRhc2tCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFsuLi5yZW5kZXJPcHRpb25zQ29udGFpbmVyLmNoaWxkcmVuXS5mb3JFYWNoKChlbGVtZW50KSA9PlxuXHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG5cdFx0KTtcblx0XHRbLi4ucHJvamVjdHNDb250YWluZXIuY2hpbGRyZW5dLmZvckVhY2goKHByb2plY3QpID0+XG5cdFx0XHRwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcblx0XHQpO1xuXHR9XG59XG5cbi8vIGhhbmRsZSBwcm9qZWN0IFNlbGVjdGlvblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVByb2plY3RTZWxlY3Rpb24oZSkge1xuXHRjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHMtY29udGFpbmVyXCIpO1xuXHRjb25zdCByZW5kZXJPcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZW5kZXItb3B0aW9uc1wiKTtcblx0Y29uc3QgcHJvamVjdFRpdGxlRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZS1kaXNwbGF5XCIpO1xuXHRjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1idG5cIik7XG5cdGNvbnN0IHByb2plY3RFbGVtZW50ID0gZS5jdXJyZW50VGFyZ2V0O1xuXHRjb25zdCBwcm9qZWN0cyA9IFByb2plY3RzU3RvcmFnZS5nZXRQcm9qZWN0cygpO1xuXHRjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMubWFwKChwcm9qKSA9PiB7XG5cdFx0cHJvai5nZXRJZCgpID09PSBwcm9qZWN0RWxlbWVudC5kYXRhc2V0LmtleVxuXHRcdFx0PyAocHJvai5pc1NlbGVjdGVkID0gdHJ1ZSlcblx0XHRcdDogKHByb2ouaXNTZWxlY3RlZCA9IGZhbHNlKTtcblx0fSk7XG5cdGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RzLmZpbmQoXG5cdFx0KHByb2opID0+IHByb2ouZ2V0SWQoKSA9PT0gcHJvamVjdEVsZW1lbnQuZGF0YXNldC5rZXlcblx0KTtcblx0Wy4uLnByb2plY3RzQ29udGFpbmVyLmNoaWxkcmVuXS5mb3JFYWNoKChwcm9qZWN0KSA9PlxuXHRcdHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuXHQpO1xuXHRbLi4ucmVuZGVyT3B0aW9uc0NvbnRhaW5lci5jaGlsZHJlbl0uZm9yRWFjaCgoZWxlbWVudCkgPT5cblx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcblx0KTtcblx0YWRkVGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0cHJvamVjdFRpdGxlRGlzcGxheS50ZXh0Q29udGVudCA9IHNlbGVjdGVkUHJvamVjdC5nZXRUaXRsZSgpO1xuXHRyZW5kZXJTZWxlY3RlZFRhc2tzKHNlbGVjdGVkUHJvamVjdCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0RWxlbWVudCh0aXRsZSkge1xuXHRjb25zdCBwcm9qZWN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHByb2plY3RXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X2l0ZW1cIik7XG5cblx0Y29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3RfbmFtZVwiKTtcblx0cHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cblx0Y29uc3Qgb3B0aW9uc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRvcHRpb25zV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF9vcHRpb25zXCIpO1xuXG5cdGNvbnN0IHJlbmFtZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdHJlbmFtZUJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF9vcHRpb25cIik7XG5cdHJlbmFtZUJ0bi50ZXh0Q29udGVudCA9IFwicmVuYW1lXCI7XG5cdHJlbmFtZUJ0bi5kYXRhc2V0LmFjdGlvbiA9IFwicmVuYW1lLXByb2plY3RcIjtcblxuXHRjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3Rfb3B0aW9uXCIpO1xuXHRkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZVwiKTtcblx0ZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcblx0ZGVsZXRlQnRuLmRhdGFzZXQuYWN0aW9uID0gXCJkZWxldGUtcHJvamVjdFwiO1xuXG5cdG9wdGlvbnNXcmFwcGVyLmFwcGVuZENoaWxkKHJlbmFtZUJ0bik7XG5cdG9wdGlvbnNXcmFwcGVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cdHByb2plY3RXcmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cdHByb2plY3RXcmFwcGVyLmFwcGVuZENoaWxkKG9wdGlvbnNXcmFwcGVyKTtcblxuXHRyZXR1cm4gcHJvamVjdFdyYXBwZXI7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYXNrRWxlbWVudCh0aXRsZSwgZGV0YWlscywgZGF0ZSwgZmF2b3JpdGUpIHtcblx0Y29uc3QgdGFza1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0YXNrV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuXHRjb25zdCB0YXNrSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHRhc2tJbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX2luZm9cIik7XG5cblx0Y29uc3QgdGFza0luZm9XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGFza0luZm9XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX2luZm9fX3dyYXBwZXJcIik7XG5cblx0Y29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHR0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2tfdGl0bGVcIik7XG5cdHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG5cdGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdHRhc2tEZXRhaWxzLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX2RldGFpbHNcIik7XG5cdHRhc2tEZXRhaWxzLnRleHRDb250ZW50ID0gZGV0YWlscztcblxuXHRjb25zdCB0YXNrQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0YXNrQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcInRhc2tfY2hlY2tib3hcIik7XG5cdHRhc2tDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdHRhc2tDaGVja2JveC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlX2NoZWNrYm94XCIpO1xuXHRcdHRhc2tUaXRsZS5jbGFzc0xpc3QudG9nZ2xlKFwibGluZV90aHJvdWdoXCIpO1xuXHRcdHRhc2tEZXRhaWxzLmNsYXNzTGlzdC50b2dnbGUoXCJsaW5lX3Rocm91Z2hcIik7XG5cdH0pO1xuXG5cdHRhc2tJbmZvV3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuXHR0YXNrSW5mb1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpO1xuXHR0YXNrSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ2hlY2tib3gpO1xuXHR0YXNrSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSW5mb1dyYXBwZXIpO1xuXG5cdGNvbnN0IHRhc2tPcHRpb25zV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHRhc2tPcHRpb25zV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwidGFza19vcHRpb25zXCIpO1xuXG5cdGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdHRhc2tEdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWVfZGF0ZVwiKTtcblx0dGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSBkYXRlO1xuXG5cdGNvbnN0IHRhc2tGYXZvcml0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdHRhc2tGYXZvcml0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwidGFza19idG5cIik7XG5cdHRhc2tGYXZvcml0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZmF2XCIpO1xuXHR0YXNrRmF2b3JpdGVCdG4udGV4dENvbnRlbnQgPSBcIkZhdm9yaXRlXCI7XG5cdHRhc2tGYXZvcml0ZUJ0bi5kYXRhc2V0LmFjdGlvbiA9IFwiZmF2b3JpdGUtdGFza1wiO1xuXHRmYXZvcml0ZVxuXHRcdD8gdGFza0Zhdm9yaXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVfZmF2XCIpXG5cdFx0OiB0YXNrRmF2b3JpdGVCdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZV9mYXZcIik7XG5cblx0Y29uc3QgdGFza0VkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHR0YXNrRWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwidGFza19idG5cIik7XG5cdHRhc2tFZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJlZGl0XCIpO1xuXHR0YXNrRWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuXHR0YXNrRWRpdEJ0bi5kYXRhc2V0LmFjdGlvbiA9IFwiZWRpdC10YXNrXCI7XG5cblx0Y29uc3QgdGFza0RlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdHRhc2tEZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcInRhc2tfYnRuXCIpO1xuXHR0YXNrRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIik7XG5cdHRhc2tEZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuXHR0YXNrRGVsZXRlQnRuLmRhdGFzZXQuYWN0aW9uID0gXCJkZWxldGUtdGFza1wiO1xuXG5cdHRhc2tPcHRpb25zV3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG5cdHRhc2tPcHRpb25zV3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrRmF2b3JpdGVCdG4pO1xuXHR0YXNrT3B0aW9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0VkaXRCdG4pO1xuXHR0YXNrT3B0aW9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUJ0bik7XG5cblx0dGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0luZm9Db250YWluZXIpO1xuXHR0YXNrV3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrT3B0aW9uc1dyYXBwZXIpO1xuXG5cdHJldHVybiB0YXNrV3JhcHBlcjtcbn1cbiIsImltcG9ydCB1bmlxaWQgZnJvbSBcInVuaXFpZFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG5cdGNvbnN0cnVjdG9yKHRpdGxlKSB7XG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHRcdHRoaXMuX2lkID0gdW5pcWlkKCk7XG5cdFx0dGhpcy50YXNrcyA9IFtdO1xuXHRcdHRoaXMuaXNTZWxlY3RlZCA9IGZhbHNlO1xuXHR9XG5cblx0Z2V0VGl0bGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMudGl0bGU7XG5cdH1cblx0c2V0VGl0bGUobmV3VGl0bGUpIHtcblx0XHR0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG5cdH1cblx0Z2V0SWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2lkO1xuXHR9XG5cdGFkZFRhc2sodGFzaykge1xuXHRcdGlmICh0aGlzLmlzU2VsZWN0ZWQpIHtcblx0XHRcdHRoaXMudGFza3MucHVzaCh0YXNrKTtcblx0XHR9XG5cdH1cblxuXHRkZWxldGVUYXNrKHRhc2tLZXkpIHtcblx0XHR0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0SWQoKSAhPT0gdGFza0tleSk7XG5cdH1cbn1cbiIsImltcG9ydCBjcmVhdGVQcm9qZWN0RWxlbWVudCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0RWxlbWVudFwiO1xuaW1wb3J0IGNyZWF0ZVRhc2tFbGVtZW50IGZyb20gXCIuL2NyZWF0ZVRhc2tFbGVtZW50XCI7XG5pbXBvcnQgUHJvamVjdHNTdG9yYWdlIGZyb20gXCIuL1Byb2plY3RzU3RvcmFnZVwiO1xuaW1wb3J0IHsgaGFuZGxlUHJvamVjdFNlbGVjdGlvbiB9IGZyb20gXCIuL1VpQ29udHJvbGxlclwiO1xuXG4vLyAqKiBGdW5jdGlvbiB0byByZW5kZXIgYWxsIHByb2plY3RzIGluc2lkZSB0aGUgcHJvamVjdHMgc3RvcmFnZTpcbi8vIC0tLS0tPiBjbGVhciB0aGUgcHJvamVjdHMgY29udGFpbmVyIGRpdlxuLy8gLS0tLS0+IGdldCB0aGUgcHJvamVjdHMgc3RvcmFnZSBhcnJheVxuLy8gLS0tLS0+IGxvb3AgdGhyb3VnaCB0aGUgYXJyYXkgYW5kIGNyZWF0ZSBhIHByb2plY3QgZWxlbWVudCBmb3IgZWFjaCBwcm9qZWN0IG9ialxuLy8gLS0tLS0+IGFwcGVuZCBlYWNoIHByb2plY3QgZWxlbWVudCB0byB0aGUgcHJvamVjdHMgY29udGFpbmVyIGRpdlxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XG5cdGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0cy1jb250YWluZXJcIik7XG5cdGNsZWFyQ29udGFpbmVyRWxlbWVudChwcm9qZWN0c0NvbnRhaW5lcik7XG5cblx0Y29uc3QgcHJvamVjdHMgPSBQcm9qZWN0c1N0b3JhZ2UuZ2V0UHJvamVjdHMoKTtcblx0cHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuXHRcdGNvbnN0IGNyZWF0ZWRQcm9qZWN0RWxlbWVudCA9IGNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3QuZ2V0VGl0bGUoKSk7XG5cdFx0Y3JlYXRlZFByb2plY3RFbGVtZW50LmRhdGFzZXQua2V5ID0gcHJvamVjdC5nZXRJZCgpO1xuXHRcdC8vIGlmIChwcm9qZWN0LmlzU2VsZWN0ZWQpIHtcblx0XHQvLyBcdGNyZWF0ZWRQcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHRcdC8vIH1cblx0XHRjcmVhdGVkUHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVByb2plY3RTZWxlY3Rpb24pO1xuXHRcdHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZWRQcm9qZWN0RWxlbWVudCk7XG5cdH0pO1xufVxuXG4vLyBSZW5kZXJzIGFsbCB0YXNrcyBpbnNpZGUgYSBzZWxlY3RlZCBwcm9qZWN0IGFycmF5XG5mdW5jdGlvbiByZW5kZXJTZWxlY3RlZFRhc2tzKHNlbGVjdGVkUHJvamVjdE9iaikge1xuXHRjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3Mtd3JhcHBlclwiKTtcblx0Y2xlYXJDb250YWluZXJFbGVtZW50KHRhc2tzQ29udGFpbmVyKTtcblx0c2VsZWN0ZWRQcm9qZWN0T2JqLnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcblx0XHRjb25zdCBjcmVhdGVkVGFza0VsZW1lbnQgPSBjcmVhdGVUYXNrRWxlbWVudChcblx0XHRcdHRhc2sudGl0bGUsXG5cdFx0XHR0YXNrLmRldGFpbHMsXG5cdFx0XHR0YXNrLmRhdGUsXG5cdFx0XHR0YXNrLmZhdm9yaXRlXG5cdFx0KTtcblx0XHRjcmVhdGVkVGFza0VsZW1lbnQuZGF0YXNldC5rZXkgPSB0YXNrLmdldElkKCk7XG5cdFx0Y3JlYXRlZFRhc2tFbGVtZW50LmRhdGFzZXQucHJvamVjdCA9IHNlbGVjdGVkUHJvamVjdE9iai5nZXRUaXRsZSgpO1xuXHRcdHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZWRUYXNrRWxlbWVudCk7XG5cdH0pO1xufVxuXG4vLyBSZW5kZXJzIGFsbCB0YXNrcyBpbnNpZGUgYWxsIHByb2plY3RzXG5mdW5jdGlvbiByZW5kZXJBbGxUYXNrcygpIHtcblx0Y29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tzLXdyYXBwZXJcIik7XG5cdGNsZWFyQ29udGFpbmVyRWxlbWVudCh0YXNrc0NvbnRhaW5lcik7XG5cdGNvbnN0IHByb2plY3RzID0gUHJvamVjdHNTdG9yYWdlLmdldFByb2plY3RzKCk7XG5cdHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcblx0XHRwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcblx0XHRcdGNvbnN0IGNyZWF0ZWRUYXNrRWxlbWVudCA9IGNyZWF0ZVRhc2tFbGVtZW50KFxuXHRcdFx0XHR0YXNrLnRpdGxlLFxuXHRcdFx0XHR0YXNrLmRldGFpbHMsXG5cdFx0XHRcdHRhc2suZGF0ZSxcblx0XHRcdFx0dGFzay5mYXZvcml0ZVxuXHRcdFx0KTtcblx0XHRcdGNyZWF0ZWRUYXNrRWxlbWVudC5kYXRhc2V0LmtleSA9IHRhc2suZ2V0SWQoKTtcblx0XHRcdGNyZWF0ZWRUYXNrRWxlbWVudC5kYXRhc2V0LnByb2plY3QgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG5cdFx0XHR0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVkVGFza0VsZW1lbnQpO1xuXHRcdH0pO1xuXHR9KTtcbn1cbi8vIHJlbmRlcnMgZmF2b3JpdGUgdGFza3NcbmZ1bmN0aW9uIHJlbmRlckZhdm9yaXRlVGFza3MoKSB7XG5cdGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrcy13cmFwcGVyXCIpO1xuXHRjbGVhckNvbnRhaW5lckVsZW1lbnQodGFza3NDb250YWluZXIpO1xuXHRjb25zdCBwcm9qZWN0cyA9IFByb2plY3RzU3RvcmFnZS5nZXRQcm9qZWN0cygpO1xuXHRwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG5cdFx0cHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG5cdFx0XHRpZiAodGFzay5mYXZvcml0ZSkge1xuXHRcdFx0XHRjb25zdCBjcmVhdGVkVGFza0VsZW1lbnQgPSBjcmVhdGVUYXNrRWxlbWVudChcblx0XHRcdFx0XHR0YXNrLnRpdGxlLFxuXHRcdFx0XHRcdHRhc2suZGV0YWlscyxcblx0XHRcdFx0XHR0YXNrLmRhdGUsXG5cdFx0XHRcdFx0dGFzay5mYXZvcml0ZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjcmVhdGVkVGFza0VsZW1lbnQuZGF0YXNldC5rZXkgPSB0YXNrLmdldElkKCk7XG5cdFx0XHRcdGNyZWF0ZWRUYXNrRWxlbWVudC5kYXRhc2V0LnByb2plY3QgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG5cdFx0XHRcdHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZWRUYXNrRWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb2RheVRhc2tzKCkge1xuXHRjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3Mtd3JhcHBlclwiKTtcblx0Y2xlYXJDb250YWluZXJFbGVtZW50KHRhc2tzQ29udGFpbmVyKTtcblx0Y29uc3QgcHJvamVjdHMgPSBQcm9qZWN0c1N0b3JhZ2UuZ2V0UHJvamVjdHMoKTtcblx0Y29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuXG5cdHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcblx0XHRwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcblx0XHRcdGNvbnN0IHRhc2tEdWVEYXRlID0gbmV3IERhdGUodGFzay5kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcblx0XHRcdGlmICh0YXNrRHVlRGF0ZSA9PT0gdG9kYXkpIHtcblx0XHRcdFx0Y29uc3QgY3JlYXRlZFRhc2tFbGVtZW50ID0gY3JlYXRlVGFza0VsZW1lbnQoXG5cdFx0XHRcdFx0dGFzay50aXRsZSxcblx0XHRcdFx0XHR0YXNrLmRldGFpbHMsXG5cdFx0XHRcdFx0dGFzay5kYXRlLFxuXHRcdFx0XHRcdHRhc2suZmF2b3JpdGVcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3JlYXRlZFRhc2tFbGVtZW50LmRhdGFzZXQua2V5ID0gdGFzay5nZXRJZCgpO1xuXHRcdFx0XHRjcmVhdGVkVGFza0VsZW1lbnQuZGF0YXNldC5wcm9qZWN0ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xuXHRcdFx0XHR0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVkVGFza0VsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cblxuLy8gdXRpbCBmdW5jdGlvbjogY2xlYXIgYWxsIGNoaWxkcmVuIG9mIGEgY29udGFpbmVyIGVsZW1lbnRcbmZ1bmN0aW9uIGNsZWFyQ29udGFpbmVyRWxlbWVudChjb250YWluZXJFbGVtZW50KSB7XG5cdHdoaWxlIChjb250YWluZXJFbGVtZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRjb250YWluZXJFbGVtZW50LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG5cdH1cbn1cblxuZXhwb3J0IHtcblx0cmVuZGVyUHJvamVjdHMsXG5cdHJlbmRlclNlbGVjdGVkVGFza3MsXG5cdHJlbmRlckFsbFRhc2tzLFxuXHRyZW5kZXJGYXZvcml0ZVRhc2tzLFxuXHRyZW5kZXJUb2RheVRhc2tzLFxufTtcbiIsImltcG9ydCB1bmlxaWQgZnJvbSBcInVuaXFpZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcblx0Y29uc3RydWN0b3IodGl0bGUsIGRldGFpbHMgPSBcIlwiLCBkYXRlKSB7XG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHRcdHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG5cdFx0dGhpcy5kYXRlID0gZGF0ZTtcblx0XHR0aGlzLmZhdm9yaXRlID0gZmFsc2U7XG5cdFx0dGhpcy5faWQgPSB1bmlxaWQoKTtcblx0XHR0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcblx0fVxuXG5cdHNldFRpdGxlKG5ld1RpdGxlKSB7XG5cdFx0dGhpcy50aXRsZSA9IG5ld1RpdGxlO1xuXHR9XG5cdHNldERldGFpbHMobmV3RGV0YWlscykge1xuXHRcdHRoaXMuZGV0YWlscyA9IG5ld0RldGFpbHM7XG5cdH1cblx0c2V0RGF0ZShuZXdEYXRlKSB7XG5cdFx0dGhpcy5kYXRlID0gbmV3RGF0ZTtcblx0fVxuXHR0b2dnbGVGYXZvcml0ZSgpIHtcblx0XHR0aGlzLmZhdm9yaXRlID0gdGhpcy5mYXZvcml0ZSA/IGZhbHNlIDogdHJ1ZTtcblx0fVxuXHRnZXRJZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5faWQ7XG5cdH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vbWFpbi5jc3NcIjtcblxuaW1wb3J0IHByb2plY3RzQ29udHJvbGxlciBmcm9tIFwiLi9Qcm9qZWN0c0NvbnRyb2xsZXJcIjtcbmltcG9ydCB0YXNrc0NvbnRyb2xsZXIgZnJvbSBcIi4vVGFza3NDb250cm9sbGVyXCI7XG5pbXBvcnQgVWlDb250cm9sbGVyIGZyb20gXCIuL1VpQ29udHJvbGxlclwiO1xuXG5wcm9qZWN0c0NvbnRyb2xsZXIoKTtcbnRhc2tzQ29udHJvbGxlcigpO1xuVWlDb250cm9sbGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=