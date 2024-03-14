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
	padding: 2rem 0;
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
	align-items: flex-start;
}
.home_option {
	background-color: transparent;
	border: none;
	padding: 0.6rem;
	font-size: 1rem;
	font-weight: bold;
	text-transform: capitalize;
}
.active {
	color: slateblue;
	padding-left: 1rem;
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

/* Dialog Styles */
dialog {
	border: 3px solid steelblue;
	border-radius: 5px;
	padding: 1rem;
	width: min(350px, 100%);
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

.add_task_dialog form > div {
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
}
`, "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;;;CAGC,sBAAsB;CACtB,UAAU;CACV,SAAS;AACV;;AAEA;CACC,uBAAuB;CACvB,eAAe;CACf,0BAA0B;AAC3B;;AAEA;CACC,uBAAuB;CACvB,iBAAiB;AAClB;;AAEA;CACC,eAAe;AAChB;AACA;CACC,0BAA0B;AAC3B;;AAEA,kBAAkB;;AAElB;CACC,eAAe;CACf,sBAAsB;CACtB,aAAa;CACb,uBAAuB;CACvB,kCAAkC;CAClC,yBAAyB;AAC1B;;AAEA;CACC,cAAc;CACd,eAAe;AAChB;;AAEA,mBAAmB;AACnB;CACC,aAAa;CACb,eAAe;CACf,gBAAgB;AACjB;;AAEA,mBAAmB;AACnB;CACC,OAAO;CACP,iCAAiC;CACjC,aAAa;CACb,yBAAyB;CACzB,aAAa;CACb,sBAAsB;CACtB,SAAS;AACV;AACA;CACC,0BAA0B;CAC1B,cAAc;CACd,eAAe;CACf,kCAAkC;CAClC,mBAAmB;CACnB,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;AACxB;AACA;CACC,6BAA6B;CAC7B,YAAY;CACZ,eAAe;CACf,eAAe;CACf,iBAAiB;CACjB,0BAA0B;AAC3B;AACA;CACC,gBAAgB;CAChB,kBAAkB;AACnB;AACA;CACC,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;CACnB,eAAe;CACf,eAAe;CACf,mBAAmB;CACnB,eAAe;CACf,WAAW;AACZ;AACA;CACC,aAAa;CACb,eAAe;CACf,WAAW;AACZ;AACA;CACC,OAAO;CACP,eAAe;CACf,uBAAuB;CACvB,YAAY;CACZ,0BAA0B;CAC1B,YAAY;CACZ,kBAAkB;CAClB,iBAAiB;AAClB;AACA;CACC,yBAAyB;AAC1B;AACA;CACC,qBAAqB;AACtB;AACA;CACC,yBAAyB;AAC1B;AACA;CACC,oBAAoB;CACpB,0BAA0B;CAC1B,eAAe;CACf,iBAAiB;CACjB,2BAA2B;CAC3B,kBAAkB;CAClB,yBAAyB;CACzB,YAAY;CACZ,gBAAgB;AACjB;AACA;CACC,yBAAyB;CACzB,yBAAyB;AAC1B;;AAEA,gBAAgB;AAChB;CACC,OAAO;CACP,aAAa;AACd;AACA;CACC,0BAA0B;CAC1B,aAAa;CACb,2BAA2B;CAC3B,YAAY;CACZ,kBAAkB;CAClB,eAAe;AAChB;AACA;CACC,uBAAuB;CACvB,aAAa;CACb,sBAAsB;CACtB,SAAS;CACT,cAAc;CACd,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA,gBAAgB;AAChB;CACC,aAAa;CACb,aAAa;CACb,mBAAmB;CACnB,8BAA8B;CAC9B,yBAAyB;AAC1B;AACA;CACC,aAAa;CACb,SAAS;AACV;AACA;CACC,WAAW;CACX,YAAY;CACZ,mBAAmB;CACnB,kBAAkB;CAClB,uBAAuB;AACxB;AACA;CACC,uBAAuB;AACxB;AACA;CACC,aAAa;CACb,sBAAsB;CACtB,WAAW;AACZ;AACA;CACC,0BAA0B;CAC1B,iBAAiB;CACjB,iBAAiB;CACjB,YAAY;AACb;AACA;CACC,kBAAkB;CAClB,yBAAyB;AAC1B;AACA;CACC,aAAa;CACb,WAAW;CACX,mBAAmB;AACpB;AACA;CACC,eAAe;CACf,uBAAuB;CACvB,kBAAkB;CAClB,iBAAiB;CACjB,YAAY;AACb;AACA;CACC,eAAe;CACf,YAAY;CACZ,kBAAkB;CAClB,0BAA0B;CAC1B,YAAY;AACb;AACA;CACC,yBAAyB;AAC1B;AACA;CACC,sBAAsB;CACtB,YAAY;AACb;AACA;CACC,uBAAuB;AACxB;AACA;CACC,yBAAyB;AAC1B;;AAEA,kBAAkB;AAClB;CACC,2BAA2B;CAC3B,kBAAkB;CAClB,aAAa;CACb,uBAAuB;AACxB;AACA;CACC,aAAa;CACb,sBAAsB;CACtB,WAAW;CACX,qBAAqB;AACtB;AACA;CACC,aAAa;CACb,eAAe;CACf,WAAW;AACZ;AACA;CACC,OAAO;AACR;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,WAAW;AACZ","sourcesContent":["*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n\tpadding: 0;\n\tmargin: 0;\n}\n\nbutton {\n\tfont-family: sans-serif;\n\tcursor: pointer;\n\ttext-transform: capitalize;\n}\n\nbody {\n\tfont-family: sans-serif;\n\tmin-height: 100vh;\n}\n\nimg {\n\tmax-width: 100%;\n}\nlabel {\n\ttext-transform: capitalize;\n}\n\n/* Header Styles */\n\nheader {\n\tpadding: 2rem 0;\n\tbackground-color: #fff;\n\tdisplay: flex;\n\tjustify-content: center;\n\tborder-bottom: 3px solid steelblue;\n\tbackground-color: #f9f9d0;\n}\n\n.logo {\n\tcolor: #275983;\n\tfont-size: 3rem;\n}\n\n/* content Styles */\n.content_wrapper {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tmin-height: 83vh;\n}\n\n/* Sidebar Styles */\naside {\n\tflex: 1;\n\tborder-right: 3px solid steelblue;\n\tpadding: 1rem;\n\tbackground-color: #f0f0f0;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 3rem;\n}\n.aside_section_title {\n\ttext-transform: capitalize;\n\tcolor: #275983;\n\tpadding: 1rem 0;\n\tborder-bottom: 3px solid steelblue;\n\tmargin-bottom: 1rem;\n\tfont-size: 2rem;\n}\n\n.home_options_wrapper {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n}\n.home_option {\n\tbackground-color: transparent;\n\tborder: none;\n\tpadding: 0.6rem;\n\tfont-size: 1rem;\n\tfont-weight: bold;\n\ttext-transform: capitalize;\n}\n.active {\n\tcolor: slateblue;\n\tpadding-left: 1rem;\n}\n.project_item {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tpadding: 0.6rem;\n\tmargin-bottom: 1rem;\n\tcursor: pointer;\n\tgap: 0.5rem;\n}\n.project_options {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: 0.4rem;\n}\n.project_option {\n\tflex: 1;\n\tpadding: 0.3rem;\n\tbackground-color: green;\n\tcolor: white;\n\ttext-transform: capitalize;\n\tborder: none;\n\tborder-radius: 5px;\n\tfont-size: 0.8rem;\n}\n.project_option:hover {\n\tbackground-color: #005b00;\n}\n.delete {\n\tbackground-color: red;\n}\n.delete:hover {\n\tbackground-color: #bf0101;\n}\n.add {\n\tpadding: 0.6rem 2rem;\n\ttext-transform: capitalize;\n\tfont-size: 1rem;\n\tfont-weight: bold;\n\tborder: 3px solid steelblue;\n\tborder-radius: 5px;\n\tbackground-color: #2c628e;\n\tcolor: white;\n\tmargin-top: 2rem;\n}\n.add:hover {\n\tborder: 3px solid #214059;\n\tbackground-color: #143f62;\n}\n\n/* Main Styles */\nmain {\n\tflex: 3;\n\tpadding: 1rem;\n}\n.title {\n\ttext-transform: capitalize;\n\tpadding: 1rem;\n\tbackground-color: steelblue;\n\tcolor: white;\n\tborder-radius: 5px;\n\tfont-size: 2rem;\n}\n.tasks_wrapper {\n\tbackground-color: beige;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n\toverflow: auto;\n\tmargin-top: 1rem;\n\tborder-radius: 5px;\n}\n\n/* Task Styles */\n.task {\n\tpadding: 1rem;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tbackground-color: #312d2d;\n}\n.task_info {\n\tdisplay: flex;\n\tgap: 1rem;\n}\n.task_checkbox {\n\twidth: 20px;\n\theight: 20px;\n\tborder-radius: 10px;\n\talign-self: center;\n\tbackground-color: white;\n}\n.active_checkbox {\n\tbackground-color: green;\n}\n.task_info__wrapper {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 0.6rem;\n}\n.task_title {\n\ttext-transform: capitalize;\n\tfont-weight: bold;\n\tfont-size: 1.3rem;\n\tcolor: white;\n}\n.task_details {\n\tfont-style: italic;\n\tcolor: rgb(199, 199, 199);\n}\n.task_options {\n\tdisplay: flex;\n\tgap: 0.7rem;\n\talign-items: center;\n}\n.due_date {\n\tpadding: 0.4rem;\n\tborder: 1px solid white;\n\tborder-radius: 5px;\n\tfont-size: 0.9rem;\n\tcolor: white;\n}\n.task_btn {\n\tpadding: 0.4rem;\n\tborder: none;\n\tborder-radius: 5px;\n\ttext-transform: capitalize;\n\tcolor: white;\n}\n.fav {\n\tbackground-color: #7f7f2d;\n}\n.active_fav {\n\tbackground-color: #ff0;\n\tcolor: black;\n}\n.edit {\n\tbackground-color: green;\n}\n.edit:hover {\n\tbackground-color: #005b00;\n}\n\n/* Dialog Styles */\ndialog {\n\tborder: 3px solid steelblue;\n\tborder-radius: 5px;\n\tpadding: 1rem;\n\twidth: min(350px, 100%);\n}\ndialog > form {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 0.5rem;\n\tmargin-bottom: 0.5rem;\n}\n.dialog_options {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: 0.7rem;\n}\n.dialog_options button {\n\tflex: 1;\n}\n\n.add_task_dialog form > div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 0.2rem;\n}\n"],"sourceRoot":""}]);
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

	const deleteBtn = document.createElement("button");
	deleteBtn.classList.add("project_option");
	deleteBtn.classList.add("delete");
	deleteBtn.textContent = "delete";

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
function createTaskElement(title, details, date) {
	const taskWrapper = document.createElement("div");
	taskWrapper.classList.add("task");

	const taskInfoContainer = document.createElement("div");
	taskInfoContainer.classList.add("task_info");

	const taskCheckbox = document.createElement("div");
	taskCheckbox.classList.add("task_checkbox");
	taskCheckbox.addEventListener("click", () =>
		taskCheckbox.classList.toggle("active_checkbox")
	);

	const taskInfoWrapper = document.createElement("div");
	taskInfoWrapper.classList.add("task_info__wrapper");

	const taskTitle = document.createElement("h3");
	taskTitle.classList.add("task_title");
	taskTitle.textContent = title;

	const taskDetails = document.createElement("p");
	taskDetails.classList.add("task_details");
	taskDetails.textContent = details;

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

	const taskEditBtn = document.createElement("button");
	taskEditBtn.classList.add("task_btn");
	taskEditBtn.classList.add("edit");
	taskEditBtn.textContent = "Edit";

	const taskDeleteBtn = document.createElement("button");
	taskDeleteBtn.classList.add("task_btn");
	taskDeleteBtn.classList.add("delete");
	taskDeleteBtn.textContent = "Delete";

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
// Add method to add to project tasks


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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _createProjectElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createProjectElement */ "./src/createProjectElement.js");
/* harmony import */ var _createTaskElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createTaskElement */ "./src/createTaskElement.js");





const projects = [];
projectController();
taskController();

function projectController() {
	const addProjectBtn = document.querySelector("#add-project");
	const projectDialog = document.querySelector("#add-project-dialog");
	const projectDialogForm = document.querySelector("#add-project-dialog form");
	const projectTitleInput = document.querySelector("#project-title-input");
	const projectDialogCancel = document.querySelector("#cancel-project-modal");
	const projectsContainer = document.querySelector("#projects-container");

	addProjectBtn.addEventListener("click", () => {
		projectDialog.showModal();
	});
	projectDialogCancel.addEventListener("click", () => projectDialog.close());

	projectDialogForm.addEventListener("submit", () => {
		let projectTitle = projectTitleInput.value;
		let projectElement = (0,_createProjectElement__WEBPACK_IMPORTED_MODULE_2__["default"])(projectTitle);
		projectsContainer.appendChild(projectElement);
		projectTitleInput.value = "";

		// Add the new Project to the Projects array
		projects.push(new _project__WEBPACK_IMPORTED_MODULE_1__["default"](projectTitle));
	});

	// Default Projects
	projectsContainer.appendChild((0,_createProjectElement__WEBPACK_IMPORTED_MODULE_2__["default"])("Project one"));
	projectsContainer.appendChild((0,_createProjectElement__WEBPACK_IMPORTED_MODULE_2__["default"])("Project two"));
}

function taskController() {
	const tasksContainer = document.querySelector("#tasks-wrapper");

	// Default Tasks
	tasksContainer.appendChild(
		(0,_createTaskElement__WEBPACK_IMPORTED_MODULE_3__["default"])("Task one", "Dummy text for task one", "22/1/2022")
	);
	tasksContainer.appendChild(
		(0,_createTaskElement__WEBPACK_IMPORTED_MODULE_3__["default"])("Task Two", "Dummy text for task two", "14/12/2020")
	);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLEtB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O1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNZO0FBQzBCO0FBQ047O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsaUVBQW9CO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsZ0RBQU87QUFDM0IsRUFBRTs7QUFFRjtBQUNBLCtCQUErQixpRUFBb0I7QUFDbkQsK0JBQStCLGlFQUFvQjtBQUNuRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLDhEQUFpQjtBQUNuQjtBQUNBO0FBQ0EsRUFBRSw4REFBaUI7QUFDbkI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tYWluLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tYWluLmNzcz9kZGQzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3VuaXFpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlUHJvamVjdEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZVRhc2tFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xufVxuXG5idXR0b24ge1xuXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuYm9keSB7XG5cdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuXHRtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuaW1nIHtcblx0bWF4LXdpZHRoOiAxMDAlO1xufVxubGFiZWwge1xuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLyogSGVhZGVyIFN0eWxlcyAqL1xuXG5oZWFkZXIge1xuXHRwYWRkaW5nOiAycmVtIDA7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRib3JkZXItYm90dG9tOiAzcHggc29saWQgc3RlZWxibHVlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWQwO1xufVxuXG4ubG9nbyB7XG5cdGNvbG9yOiAjMjc1OTgzO1xuXHRmb250LXNpemU6IDNyZW07XG59XG5cbi8qIGNvbnRlbnQgU3R5bGVzICovXG4uY29udGVudF93cmFwcGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRtaW4taGVpZ2h0OiA4M3ZoO1xufVxuXG4vKiBTaWRlYmFyIFN0eWxlcyAqL1xuYXNpZGUge1xuXHRmbGV4OiAxO1xuXHRib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBzdGVlbGJsdWU7XG5cdHBhZGRpbmc6IDFyZW07XG5cdGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogM3JlbTtcbn1cbi5hc2lkZV9zZWN0aW9uX3RpdGxlIHtcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdGNvbG9yOiAjMjc1OTgzO1xuXHRwYWRkaW5nOiAxcmVtIDA7XG5cdGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBzdGVlbGJsdWU7XG5cdG1hcmdpbi1ib3R0b206IDFyZW07XG5cdGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmhvbWVfb3B0aW9uc193cmFwcGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uaG9tZV9vcHRpb24ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0Ym9yZGVyOiBub25lO1xuXHRwYWRkaW5nOiAwLjZyZW07XG5cdGZvbnQtc2l6ZTogMXJlbTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLmFjdGl2ZSB7XG5cdGNvbG9yOiBzbGF0ZWJsdWU7XG5cdHBhZGRpbmctbGVmdDogMXJlbTtcbn1cbi5wcm9qZWN0X2l0ZW0ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0cGFkZGluZzogMC42cmVtO1xuXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGdhcDogMC41cmVtO1xufVxuLnByb2plY3Rfb3B0aW9ucyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0Z2FwOiAwLjRyZW07XG59XG4ucHJvamVjdF9vcHRpb24ge1xuXHRmbGV4OiAxO1xuXHRwYWRkaW5nOiAwLjNyZW07XG5cdGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuXHRjb2xvcjogd2hpdGU7XG5cdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Zm9udC1zaXplOiAwLjhyZW07XG59XG4ucHJvamVjdF9vcHRpb246aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1YjAwO1xufVxuLmRlbGV0ZSB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbi5kZWxldGU6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYmYwMTAxO1xufVxuLmFkZCB7XG5cdHBhZGRpbmc6IDAuNnJlbSAycmVtO1xuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0Ym9yZGVyOiAzcHggc29saWQgc3RlZWxibHVlO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyYzYyOGU7XG5cdGNvbG9yOiB3aGl0ZTtcblx0bWFyZ2luLXRvcDogMnJlbTtcbn1cbi5hZGQ6aG92ZXIge1xuXHRib3JkZXI6IDNweCBzb2xpZCAjMjE0MDU5O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTQzZjYyO1xufVxuXG4vKiBNYWluIFN0eWxlcyAqL1xubWFpbiB7XG5cdGZsZXg6IDM7XG5cdHBhZGRpbmc6IDFyZW07XG59XG4udGl0bGUge1xuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0cGFkZGluZzogMXJlbTtcblx0YmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xuXHRjb2xvcjogd2hpdGU7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Zm9udC1zaXplOiAycmVtO1xufVxuLnRhc2tzX3dyYXBwZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAxcmVtO1xuXHRvdmVyZmxvdzogYXV0bztcblx0bWFyZ2luLXRvcDogMXJlbTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4vKiBUYXNrIFN0eWxlcyAqL1xuLnRhc2sge1xuXHRwYWRkaW5nOiAxcmVtO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGJhY2tncm91bmQtY29sb3I6ICMzMTJkMmQ7XG59XG4udGFza19pbmZvIHtcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiAxcmVtO1xufVxuLnRhc2tfY2hlY2tib3gge1xuXHR3aWR0aDogMjBweDtcblx0aGVpZ2h0OiAyMHB4O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmFjdGl2ZV9jaGVja2JveCB7XG5cdGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuLnRhc2tfaW5mb19fd3JhcHBlciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMC42cmVtO1xufVxuLnRhc2tfdGl0bGUge1xuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGZvbnQtc2l6ZTogMS4zcmVtO1xuXHRjb2xvcjogd2hpdGU7XG59XG4udGFza19kZXRhaWxzIHtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRjb2xvcjogcmdiKDE5OSwgMTk5LCAxOTkpO1xufVxuLnRhc2tfb3B0aW9ucyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogMC43cmVtO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmR1ZV9kYXRlIHtcblx0cGFkZGluZzogMC40cmVtO1xuXHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRmb250LXNpemU6IDAuOXJlbTtcblx0Y29sb3I6IHdoaXRlO1xufVxuLnRhc2tfYnRuIHtcblx0cGFkZGluZzogMC40cmVtO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cbi5mYXYge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjN2Y3ZjJkO1xufVxuLmFjdGl2ZV9mYXYge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwO1xuXHRjb2xvcjogYmxhY2s7XG59XG4uZWRpdCB7XG5cdGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuLmVkaXQ6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1YjAwO1xufVxuXG4vKiBEaWFsb2cgU3R5bGVzICovXG5kaWFsb2cge1xuXHRib3JkZXI6IDNweCBzb2xpZCBzdGVlbGJsdWU7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0cGFkZGluZzogMXJlbTtcblx0d2lkdGg6IG1pbigzNTBweCwgMTAwJSk7XG59XG5kaWFsb2cgPiBmb3JtIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAwLjVyZW07XG5cdG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5kaWFsb2dfb3B0aW9ucyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0Z2FwOiAwLjdyZW07XG59XG4uZGlhbG9nX29wdGlvbnMgYnV0dG9uIHtcblx0ZmxleDogMTtcbn1cblxuLmFkZF90YXNrX2RpYWxvZyBmb3JtID4gZGl2IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAwLjJyZW07XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0Msc0JBQXNCO0NBQ3RCLFVBQVU7Q0FDVixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsZUFBZTtDQUNmLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCO0FBQ0E7Q0FDQywwQkFBMEI7QUFDM0I7O0FBRUEsa0JBQWtCOztBQUVsQjtDQUNDLGVBQWU7Q0FDZixzQkFBc0I7Q0FDdEIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixrQ0FBa0M7Q0FDbEMseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsY0FBYztDQUNkLGVBQWU7QUFDaEI7O0FBRUEsbUJBQW1CO0FBQ25CO0NBQ0MsYUFBYTtDQUNiLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7O0FBRUEsbUJBQW1CO0FBQ25CO0NBQ0MsT0FBTztDQUNQLGlDQUFpQztDQUNqQyxhQUFhO0NBQ2IseUJBQXlCO0NBQ3pCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsU0FBUztBQUNWO0FBQ0E7Q0FDQywwQkFBMEI7Q0FDMUIsY0FBYztDQUNkLGVBQWU7Q0FDZixrQ0FBa0M7Q0FDbEMsbUJBQW1CO0NBQ25CLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtBQUN4QjtBQUNBO0NBQ0MsNkJBQTZCO0NBQzdCLFlBQVk7Q0FDWixlQUFlO0NBQ2YsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQiwwQkFBMEI7QUFDM0I7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixXQUFXO0FBQ1o7QUFDQTtDQUNDLGFBQWE7Q0FDYixlQUFlO0NBQ2YsV0FBVztBQUNaO0FBQ0E7Q0FDQyxPQUFPO0NBQ1AsZUFBZTtDQUNmLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osMEJBQTBCO0NBQzFCLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLHFCQUFxQjtBQUN0QjtBQUNBO0NBQ0MseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxvQkFBb0I7Q0FDcEIsMEJBQTBCO0NBQzFCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsMkJBQTJCO0NBQzNCLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLHlCQUF5QjtBQUMxQjs7QUFFQSxnQkFBZ0I7QUFDaEI7Q0FDQyxPQUFPO0NBQ1AsYUFBYTtBQUNkO0FBQ0E7Q0FDQywwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiLDJCQUEyQjtDQUMzQixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFNBQVM7Q0FDVCxjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFFQSxnQkFBZ0I7QUFDaEI7Q0FDQyxhQUFhO0NBQ2IsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQiw4QkFBOEI7Q0FDOUIseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsU0FBUztBQUNWO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsdUJBQXVCO0FBQ3hCO0FBQ0E7Q0FDQyx1QkFBdUI7QUFDeEI7QUFDQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsV0FBVztBQUNaO0FBQ0E7Q0FDQywwQkFBMEI7Q0FDMUIsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixZQUFZO0FBQ2I7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQix5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLGFBQWE7Q0FDYixXQUFXO0NBQ1gsbUJBQW1CO0FBQ3BCO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQiwwQkFBMEI7Q0FDMUIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLHNCQUFzQjtDQUN0QixZQUFZO0FBQ2I7QUFDQTtDQUNDLHVCQUF1QjtBQUN4QjtBQUNBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBLGtCQUFrQjtBQUNsQjtDQUNDLDJCQUEyQjtDQUMzQixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHVCQUF1QjtBQUN4QjtBQUNBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixXQUFXO0NBQ1gscUJBQXFCO0FBQ3RCO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsZUFBZTtDQUNmLFdBQVc7QUFDWjtBQUNBO0NBQ0MsT0FBTztBQUNSOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixXQUFXO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaW1nIHtcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxufVxcbmxhYmVsIHtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLyogSGVhZGVyIFN0eWxlcyAqL1xcblxcbmhlYWRlciB7XFxuXFx0cGFkZGluZzogMnJlbSAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRib3JkZXItYm90dG9tOiAzcHggc29saWQgc3RlZWxibHVlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmOWY5ZDA7XFxufVxcblxcbi5sb2dvIHtcXG5cXHRjb2xvcjogIzI3NTk4MztcXG5cXHRmb250LXNpemU6IDNyZW07XFxufVxcblxcbi8qIGNvbnRlbnQgU3R5bGVzICovXFxuLmNvbnRlbnRfd3JhcHBlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0bWluLWhlaWdodDogODN2aDtcXG59XFxuXFxuLyogU2lkZWJhciBTdHlsZXMgKi9cXG5hc2lkZSB7XFxuXFx0ZmxleDogMTtcXG5cXHRib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBzdGVlbGJsdWU7XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDNyZW07XFxufVxcbi5hc2lkZV9zZWN0aW9uX3RpdGxlIHtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG5cXHRjb2xvcjogIzI3NTk4MztcXG5cXHRwYWRkaW5nOiAxcmVtIDA7XFxuXFx0Ym9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHN0ZWVsYmx1ZTtcXG5cXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmhvbWVfb3B0aW9uc193cmFwcGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5ob21lX29wdGlvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHBhZGRpbmc6IDAuNnJlbTtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcbi5hY3RpdmUge1xcblxcdGNvbG9yOiBzbGF0ZWJsdWU7XFxuXFx0cGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG4ucHJvamVjdF9pdGVtIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRwYWRkaW5nOiAwLjZyZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMXJlbTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Z2FwOiAwLjVyZW07XFxufVxcbi5wcm9qZWN0X29wdGlvbnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGdhcDogMC40cmVtO1xcbn1cXG4ucHJvamVjdF9vcHRpb24ge1xcblxcdGZsZXg6IDE7XFxuXFx0cGFkZGluZzogMC4zcmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG4ucHJvamVjdF9vcHRpb246aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMDViMDA7XFxufVxcbi5kZWxldGUge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLmRlbGV0ZTpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2JmMDEwMTtcXG59XFxuLmFkZCB7XFxuXFx0cGFkZGluZzogMC42cmVtIDJyZW07XFxuXFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGJvcmRlcjogM3B4IHNvbGlkIHN0ZWVsYmx1ZTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzJjNjI4ZTtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0bWFyZ2luLXRvcDogMnJlbTtcXG59XFxuLmFkZDpob3ZlciB7XFxuXFx0Ym9yZGVyOiAzcHggc29saWQgIzIxNDA1OTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTQzZjYyO1xcbn1cXG5cXG4vKiBNYWluIFN0eWxlcyAqL1xcbm1haW4ge1xcblxcdGZsZXg6IDM7XFxuXFx0cGFkZGluZzogMXJlbTtcXG59XFxuLnRpdGxlIHtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLnRhc2tzX3dyYXBwZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDFyZW07XFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxuXFx0bWFyZ2luLXRvcDogMXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8qIFRhc2sgU3R5bGVzICovXFxuLnRhc2sge1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzEyZDJkO1xcbn1cXG4udGFza19pbmZvIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMXJlbTtcXG59XFxuLnRhc2tfY2hlY2tib3gge1xcblxcdHdpZHRoOiAyMHB4O1xcblxcdGhlaWdodDogMjBweDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLmFjdGl2ZV9jaGVja2JveCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcbi50YXNrX2luZm9fX3dyYXBwZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDAuNnJlbTtcXG59XFxuLnRhc2tfdGl0bGUge1xcblxcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGZvbnQtc2l6ZTogMS4zcmVtO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuLnRhc2tfZGV0YWlscyB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdGNvbG9yOiByZ2IoMTk5LCAxOTksIDE5OSk7XFxufVxcbi50YXNrX29wdGlvbnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAwLjdyZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmR1ZV9kYXRlIHtcXG5cXHRwYWRkaW5nOiAwLjRyZW07XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGZvbnQtc2l6ZTogMC45cmVtO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuLnRhc2tfYnRuIHtcXG5cXHRwYWRkaW5nOiAwLjRyZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcbi5mYXYge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM3ZjdmMmQ7XFxufVxcbi5hY3RpdmVfZmF2IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwO1xcblxcdGNvbG9yOiBibGFjaztcXG59XFxuLmVkaXQge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG4uZWRpdDpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzAwNWIwMDtcXG59XFxuXFxuLyogRGlhbG9nIFN0eWxlcyAqL1xcbmRpYWxvZyB7XFxuXFx0Ym9yZGVyOiAzcHggc29saWQgc3RlZWxibHVlO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdHdpZHRoOiBtaW4oMzUwcHgsIDEwMCUpO1xcbn1cXG5kaWFsb2cgPiBmb3JtIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAwLjVyZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG4uZGlhbG9nX29wdGlvbnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGdhcDogMC43cmVtO1xcbn1cXG4uZGlhbG9nX29wdGlvbnMgYnV0dG9uIHtcXG5cXHRmbGV4OiAxO1xcbn1cXG5cXG4uYWRkX3Rhc2tfZGlhbG9nIGZvcm0gPiBkaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDAuMnJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBcbihUaGUgTUlUIExpY2Vuc2UpXG5Db3B5cmlnaHQgKGMpIDIwMTQtMjAyMSBIYWzDoXN6IMOBZMOhbSA8YWRhbUBhaW1mb3JtLmNvbT5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gIFVuaXF1ZSBIZXhhdHJpZGVjaW1hbCBJRCBHZW5lcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyAgRGVwZW5kZW5jaWVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnZhciBwaWQgPSB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5waWQgPyBwcm9jZXNzLnBpZC50b1N0cmluZygzNikgOiAnJyA7XG52YXIgYWRkcmVzcyA9ICcnO1xuaWYodHlwZW9mIF9fd2VicGFja19yZXF1aXJlX18gIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHJlcXVpcmUgIT09ICd1bmRlZmluZWQnKXtcbiAgICB2YXIgbWFjID0gJycsIG9zID0gcmVxdWlyZSgnb3MnKTsgXG4gICAgaWYob3MubmV0d29ya0ludGVyZmFjZXMpIHZhciBuZXR3b3JrSW50ZXJmYWNlcyA9IG9zLm5ldHdvcmtJbnRlcmZhY2VzKCk7XG4gICAgaWYobmV0d29ya0ludGVyZmFjZXMpe1xuICAgICAgICBsb29wOlxuICAgICAgICBmb3IobGV0IGludGVyZmFjZV9rZXkgaW4gbmV0d29ya0ludGVyZmFjZXMpe1xuICAgICAgICAgICAgY29uc3QgbmV0d29ya0ludGVyZmFjZSA9IG5ldHdvcmtJbnRlcmZhY2VzW2ludGVyZmFjZV9rZXldO1xuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gbmV0d29ya0ludGVyZmFjZS5sZW5ndGg7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKG5ldHdvcmtJbnRlcmZhY2VbaV0gIT09IHVuZGVmaW5lZCAmJiBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYyAmJiBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYyAhPSAnMDA6MDA6MDA6MDA6MDA6MDAnKXtcbiAgICAgICAgICAgICAgICAgICAgbWFjID0gbmV0d29ya0ludGVyZmFjZVtpXS5tYWM7IGJyZWFrIGxvb3A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFkZHJlc3MgPSBtYWMgPyBwYXJzZUludChtYWMucmVwbGFjZSgvXFw6fFxcRCsvZ2ksICcnKSkudG9TdHJpbmcoMzYpIDogJycgO1xuICAgIH1cbn0gXG5cbi8vICBFeHBvcnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBhZGRyZXNzICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMucHJvY2VzcyA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBwaWQgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5tb2R1bGUuZXhwb3J0cy50aW1lICAgID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cblxuLy8gIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gbm93KCl7XG4gICAgdmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHZhciBsYXN0ID0gbm93Lmxhc3QgfHwgdGltZTtcbiAgICByZXR1cm4gbm93Lmxhc3QgPSB0aW1lID4gbGFzdCA/IHRpbWUgOiBsYXN0ICsgMTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RFbGVtZW50KHRpdGxlKSB7XG5cdGNvbnN0IHByb2plY3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0cHJvamVjdFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3RfaXRlbVwiKTtcblxuXHRjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdF9uYW1lXCIpO1xuXHRwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuXHRjb25zdCBvcHRpb25zV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG9wdGlvbnNXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X29wdGlvbnNcIik7XG5cblx0Y29uc3QgcmVuYW1lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0cmVuYW1lQnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0X29wdGlvblwiKTtcblx0cmVuYW1lQnRuLnRleHRDb250ZW50ID0gXCJyZW5hbWVcIjtcblxuXHRjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3Rfb3B0aW9uXCIpO1xuXHRkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZVwiKTtcblx0ZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcblxuXHRvcHRpb25zV3JhcHBlci5hcHBlbmRDaGlsZChyZW5hbWVCdG4pO1xuXHRvcHRpb25zV3JhcHBlci5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXHRwcm9qZWN0V3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXHRwcm9qZWN0V3JhcHBlci5hcHBlbmRDaGlsZChvcHRpb25zV3JhcHBlcik7XG5cblx0cmV0dXJuIHByb2plY3RXcmFwcGVyO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGFza0VsZW1lbnQodGl0bGUsIGRldGFpbHMsIGRhdGUpIHtcblx0Y29uc3QgdGFza1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0YXNrV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuXHRjb25zdCB0YXNrSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHRhc2tJbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX2luZm9cIik7XG5cblx0Y29uc3QgdGFza0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGFza0NoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrX2NoZWNrYm94XCIpO1xuXHR0YXNrQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG5cdFx0dGFza0NoZWNrYm94LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVfY2hlY2tib3hcIilcblx0KTtcblxuXHRjb25zdCB0YXNrSW5mb1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0YXNrSW5mb1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcInRhc2tfaW5mb19fd3JhcHBlclwiKTtcblxuXHRjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGFza190aXRsZVwiKTtcblx0dGFza1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cblx0Y29uc3QgdGFza0RldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0dGFza0RldGFpbHMuY2xhc3NMaXN0LmFkZChcInRhc2tfZGV0YWlsc1wiKTtcblx0dGFza0RldGFpbHMudGV4dENvbnRlbnQgPSBkZXRhaWxzO1xuXG5cdHRhc2tJbmZvV3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuXHR0YXNrSW5mb1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpO1xuXHR0YXNrSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ2hlY2tib3gpO1xuXHR0YXNrSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSW5mb1dyYXBwZXIpO1xuXG5cdGNvbnN0IHRhc2tPcHRpb25zV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHRhc2tPcHRpb25zV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwidGFza19vcHRpb25zXCIpO1xuXG5cdGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdHRhc2tEdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWVfZGF0ZVwiKTtcblx0dGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSBkYXRlO1xuXG5cdGNvbnN0IHRhc2tGYXZvcml0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdHRhc2tGYXZvcml0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwidGFza19idG5cIik7XG5cdHRhc2tGYXZvcml0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZmF2XCIpO1xuXHR0YXNrRmF2b3JpdGVCdG4udGV4dENvbnRlbnQgPSBcIkZhdm9yaXRlXCI7XG5cblx0Y29uc3QgdGFza0VkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHR0YXNrRWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwidGFza19idG5cIik7XG5cdHRhc2tFZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJlZGl0XCIpO1xuXHR0YXNrRWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuXG5cdGNvbnN0IHRhc2tEZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHR0YXNrRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrX2J0blwiKTtcblx0dGFza0RlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIpO1xuXHR0YXNrRGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblxuXHR0YXNrT3B0aW9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuXHR0YXNrT3B0aW9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0Zhdm9yaXRlQnRuKTtcblx0dGFza09wdGlvbnNXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tFZGl0QnRuKTtcblx0dGFza09wdGlvbnNXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tEZWxldGVCdG4pO1xuXG5cdHRhc2tXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tJbmZvQ29udGFpbmVyKTtcblx0dGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza09wdGlvbnNXcmFwcGVyKTtcblxuXHRyZXR1cm4gdGFza1dyYXBwZXI7XG59XG4iLCJpbXBvcnQgdW5pcWlkIGZyb20gXCJ1bmlxaWRcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuXHRjb25zdHJ1Y3Rvcih0aXRsZSkge1xuXHRcdHRoaXMudGl0bGUgPSB0aXRsZTtcblx0XHR0aGlzLl9pZCA9IHVuaXFpZCgpO1xuXHRcdHRoaXMudGFza3MgPSBbXTtcblx0XHR0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcblx0fVxuXG5cdGdldFRpdGxlKCkge1xuXHRcdHJldHVybiB0aGlzLnRpdGxlO1xuXHR9XG5cdHNldFRpdGxlKG5ld1RpdGxlKSB7XG5cdFx0dGhpcy50aXRsZSA9IG5ld1RpdGxlO1xuXHR9XG5cdGdldElkKCkge1xuXHRcdHJldHVybiB0aGlzLl9pZDtcblx0fVxuXHRhZGRUYXNrKHRhc2spIHtcblx0XHRpZiAodGhpcy5pc1NlbGVjdGVkKSB7XG5cdFx0XHR0aGlzLnRhc2tzLnB1c2godGFzayk7XG5cdFx0fVxuXHR9XG59XG4vLyBBZGQgbWV0aG9kIHRvIGFkZCB0byBwcm9qZWN0IHRhc2tzXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL21haW4uY3NzXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgY3JlYXRlUHJvamVjdEVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlUHJvamVjdEVsZW1lbnRcIjtcbmltcG9ydCBjcmVhdGVUYXNrRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVUYXNrRWxlbWVudFwiO1xuXG5jb25zdCBwcm9qZWN0cyA9IFtdO1xucHJvamVjdENvbnRyb2xsZXIoKTtcbnRhc2tDb250cm9sbGVyKCk7XG5cbmZ1bmN0aW9uIHByb2plY3RDb250cm9sbGVyKCkge1xuXHRjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdFwiKTtcblx0Y29uc3QgcHJvamVjdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtZGlhbG9nXCIpO1xuXHRjb25zdCBwcm9qZWN0RGlhbG9nRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtZGlhbG9nIGZvcm1cIik7XG5cdGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlLWlucHV0XCIpO1xuXHRjb25zdCBwcm9qZWN0RGlhbG9nQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWwtcHJvamVjdC1tb2RhbFwiKTtcblx0Y29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWNvbnRhaW5lclwiKTtcblxuXHRhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0cHJvamVjdERpYWxvZy5zaG93TW9kYWwoKTtcblx0fSk7XG5cdHByb2plY3REaWFsb2dDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHByb2plY3REaWFsb2cuY2xvc2UoKSk7XG5cblx0cHJvamVjdERpYWxvZ0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoKSA9PiB7XG5cdFx0bGV0IHByb2plY3RUaXRsZSA9IHByb2plY3RUaXRsZUlucHV0LnZhbHVlO1xuXHRcdGxldCBwcm9qZWN0RWxlbWVudCA9IGNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3RUaXRsZSk7XG5cdFx0cHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xuXHRcdHByb2plY3RUaXRsZUlucHV0LnZhbHVlID0gXCJcIjtcblxuXHRcdC8vIEFkZCB0aGUgbmV3IFByb2plY3QgdG8gdGhlIFByb2plY3RzIGFycmF5XG5cdFx0cHJvamVjdHMucHVzaChuZXcgUHJvamVjdChwcm9qZWN0VGl0bGUpKTtcblx0fSk7XG5cblx0Ly8gRGVmYXVsdCBQcm9qZWN0c1xuXHRwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0RWxlbWVudChcIlByb2plY3Qgb25lXCIpKTtcblx0cHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEVsZW1lbnQoXCJQcm9qZWN0IHR3b1wiKSk7XG59XG5cbmZ1bmN0aW9uIHRhc2tDb250cm9sbGVyKCkge1xuXHRjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza3Mtd3JhcHBlclwiKTtcblxuXHQvLyBEZWZhdWx0IFRhc2tzXG5cdHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKFxuXHRcdGNyZWF0ZVRhc2tFbGVtZW50KFwiVGFzayBvbmVcIiwgXCJEdW1teSB0ZXh0IGZvciB0YXNrIG9uZVwiLCBcIjIyLzEvMjAyMlwiKVxuXHQpO1xuXHR0YXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChcblx0XHRjcmVhdGVUYXNrRWxlbWVudChcIlRhc2sgVHdvXCIsIFwiRHVtbXkgdGV4dCBmb3IgdGFzayB0d29cIiwgXCIxNC8xMi8yMDIwXCIpXG5cdCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=