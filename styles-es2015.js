(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles.scss ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap);"]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Poiret+One&display=swap);"]);
// Module
exports.push([module.i, "\n/* You can add global styles to this file, and also import other style files */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml {\n  scroll-behavior: smooth;\n}\nbody {\n  overflow: hidden;\n}\n.box-section1 {\n  background-color: black;\n}\n.nav-indicator {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  transition: 0.4s;\n  height: 2px;\n  border-radius: 30px;\n  z-index: 1;\n}\n.ham {\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  transition: transform 400ms;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.hamRotate.active {\n  transform: rotate(45deg);\n}\n.hamRotate180.active {\n  transform: rotate(180deg);\n}\n.line {\n  fill: none;\n  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;\n  stroke: blue;\n  stroke-width: 5.5;\n  stroke-linecap: round;\n}\n.ham1 .top {\n  stroke-dasharray: 40 139;\n}\n.ham1 .bottom {\n  stroke-dasharray: 40 180;\n}\n.ham1.active .top {\n  stroke-dashoffset: -98px;\n}\n.ham1.active .bottom {\n  stroke-dashoffset: -138px;\n}\n.nav-container {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  right: 0;\n  left: 0;\n  transform: translateX(100%);\n  padding: 50px 0px;\n  background-color: #000;\n  bottom: 0;\n  z-index: 11111;\n  transition: all 0.3s ease;\n}\n.nav-container .left_container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.nav-container .left_container a {\n  display: block;\n  width: 80%;\n  padding: 20px 0px;\n  text-decoration: none;\n  color: #fff;\n  font-weight: bold;\n  text-align: center;\n  position: relative;\n  font-family: \"Open Sans\", sans-serif;\n}\n.nav-container .left_container a::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 0px;\n  height: 4px;\n  width: 0px;\n  opacity: 0;\n  border-radius: 40px;\n  transform-origin: left;\n  transition: width 0.3s ease;\n  background-color: blue;\n}\n.nav-container .left_container a:active {\n  color: blue;\n}\n.nav-container .left_container a:active::after {\n  width: 20px;\n  opacity: 1;\n}\n.nav-container .left_container a:hover {\n  color: blue;\n}\n.nav-container .left_container a:hover::after {\n  width: 20px;\n  opacity: 1;\n}\n.nav-container .right_container {\n  border: 1px solid transparent;\n  flex: 1;\n  display: flex;\n}\n.nav-container .right_container h1 {\n  margin: auto;\n  color: white;\n  font-family: \"Poiret One\", cursive;\n  font-size: 60px;\n  font-weight: lighter;\n}\n.showNav {\n  transform: translateX(0px);\n}\n.show-active {\n  display: flex;\n  -webkit-animation: showBig 500ms ease forwards 1;\n          animation: showBig 500ms ease forwards 1;\n}\n@-webkit-keyframes showBig {\n  0% {\n    transform: translateX(500px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n@keyframes showBig {\n  0% {\n    transform: translateX(500px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\nheader {\n  height: 12vh;\n  padding: 0px 100px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #fff;\n}\nheader img {\n  height: 50px;\n}\nheader .closeBtn {\n  position: fixed;\n  top: 10px;\n  right: 100px;\n  display: none;\n  z-index: 99999;\n}\nheader nav {\n  height: 100%;\n  display: flex;\n}\nheader nav a {\n  text-decoration: none;\n  padding: 0px 15px;\n  font-size: 16px;\n  height: 100%;\n  line-height: 12vh;\n  color: #000;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bolder;\n}\n.why-section {\n  background: #0f0f0f;\n}\n.bullet_two {\n  margin-top: 20px;\n}\n.bullet_two p {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 15px;\n  color: #fff;\n  font-weight: 500;\n  text-align: justify;\n  line-height: 30px;\n  padding-bottom: 12px;\n  padding-top: 12px;\n  padding-left: 50px;\n  border-bottom: 1px solid #2b2b2b;\n  position: relative;\n}\n.bullet_two p::after {\n  position: absolute;\n  left: 0px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 24px;\n  text-align: center;\n  color: #5050f3;\n}\n.bullet_two p:nth-child(1)::after {\n  content: \"01\";\n}\n.bullet_two p:nth-child(2)::after {\n  content: \"02\";\n}\n.bullet_two p:nth-child(3)::after {\n  content: \"03\";\n}\n.bullet_two p:nth-child(4)::after {\n  content: \"04\";\n}\n.bullet_two p:nth-child(5)::after {\n  content: \"05\";\n}\n.bullet_two p:nth-child(6)::after {\n  content: \"05\";\n}\n.bullet_two p:nth-child(7)::after {\n  content: \"07\";\n}\n.bullet_two p:nth-child(8)::after {\n  content: \"06\";\n}\n.bullet_two p:nth-child(10)::after {\n  content: \"07\";\n}\n.bullet_two p:nth-child(12)::after {\n  content: \"08\";\n}\n.bullet_two p:nth-child(14)::after {\n  content: \"09\";\n}\n.img-class {\n  width: 250px;\n  padding: 10px 0px;\n  margin: 0px auto;\n}\n.img-class img {\n  width: inherit;\n  height: auto;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.mod-img {\n  width: 400px;\n}\n@media screen and (max-width: 480px) {\n  .close header {\n    height: 10vh;\n  }\n\n  .mod-img {\n    width: 300px;\n  }\n\n  header {\n    padding: 0px 10px;\n    padding-left: 20px;\n    justify-content: flex-start;\n  }\n  header img {\n    height: 45px;\n  }\n  header .closeBtn {\n    position: fixed;\n    top: 0px;\n    right: 10px;\n    display: block;\n    z-index: 99999;\n  }\n  header .closeBtn .ham {\n    width: 70px !important;\n  }\n  header nav {\n    display: none;\n  }\n}", "",{"version":3,"sources":["C:\\Users\\hp\\OneDrive\\Desktop\\work\\revamped-website/src\\styles.scss","styles.scss"],"names":[],"mappings":"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","file":"styles.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\nhtml{\n    scroll-behavior: smooth;\n}\n\nbody{\n    overflow: hidden;\n}\n\n.box-section1\n{\n   \n    background-color: black;\n}\n\n.nav-indicator {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    transition: 0.4s;\n    height: 2px;\n    border-radius:30px;\n    z-index: 1;\n  } \n\n.ham {\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n    transition: transform 400ms;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n  .hamRotate.active {\n    transform: rotate(45deg);\n  }\n  .hamRotate180.active {\n    transform: rotate(180deg);\n  }\n  .line {\n    fill:none;\n    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;\n    stroke: blue;\n    stroke-width:5.5;\n    stroke-linecap:round;\n  }\n  .ham1 .top {\n    stroke-dasharray: 40 139;\n  }\n  .ham1 .bottom {\n    stroke-dasharray: 40 180;\n  }\n  .ham1.active .top {\n    stroke-dashoffset: -98px;\n  }\n  .ham1.active .bottom {\n    stroke-dashoffset: -138px;\n  }\n\n\n\n  .nav-container\n  {\n      position: fixed;\n      top: 0;\n      width: 100%;\n      right: 0;\n      left: 0;\n      transform: translateX(100%);\n      padding: 50px 0px;\n      background-color: #000;\n      bottom: 0;\n      z-index: 11111;\n      transition: all .3s ease; \n      .left_container{\n         \n          \n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          justify-content: center;\n          a{\n              display: block;\n              width: 80%;\n           //   border-bottom: 1px solid rgb(31, 31, 31);\n              padding: 20px 0px;\n              text-decoration: none;\n              color: #fff;\n              font-weight: bold;\n              text-align: center;\n              position: relative;\n              font-family: 'Open Sans', sans-serif;\n              &::after{\n                content: '';\n                position: absolute;\n                left: 50%;\n                transform:translateX(-50%);\n                bottom: 0px;\n                height: 4px;\n                width: 0px;\n                opacity: 0;\n                border-radius: 40px;\n                transform-origin: left;\n                transition: width .3s ease;\n                background-color:blue;\n              }\n              &:active{\n                color: blue;\n              }\n              &:active::after{\n                width: 20px;\n                opacity: 1;\n              }\n              &:hover{\n                color: blue;\n              }\n              &:hover::after{\n                width: 20px;\n                opacity: 1;\n              }\n          }\n      }\n      .right_container{\n          border:1px solid transparent;\n          flex: 1;\n          display: flex;\n          h1{\n            margin: auto;\n            color: white;\n            font-family: \"Poiret One\", cursive;\n            font-size: 60px;\n            font-weight: lighter;\n          }\n      }\n  }\n\n  .showNav{\n  \n    transform:translateX(0px);\n  }\n  \n  .show-active\n  {\n      display: flex;\n      animation:showBig 500ms ease forwards 1;\n  }\n  @keyframes showBig{\n    0%{\n      transform:translateX(500px);\n    }\n    100%{\n      transform:translateX(0px);\n    }\n  }\n\n\n\nheader{\n    height: 12vh;\n    padding: 0px 100px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color:#fff;\n    img{\n        height: 50px;\n    }\n    .closeBtn{\n        position: fixed;\n        top:10px;\n        right: 100px;\n        display: none;\n        z-index: 99999;\n    }\n    nav{\n        height:100%;\n        display: flex;\n      a{\n        text-decoration: none;\n        padding: 0px 15px;\n        font-size: 16px;\n        height: 100%;\n        line-height: 12vh;\n        color: #000;\n        font-family: 'Open Sans', sans-serif;\n        font-weight: bolder;\n      \n      }\n    }\n}\n\n\n.why-section{\nbackground:rgb(15, 15, 15);\n}\n\n.bullet_two\n{\n  margin-top: 20px;\n  p{\n    font-family: 'Open Sans', sans-serif;\n  font-size: 15px;\n  color: #fff;\n  font-weight: 500;\n  text-align: justify;\n  line-height: 30px;\n  padding-bottom: 12px;\n  padding-top: 12px;\n  padding-left: 50px;\n  border-bottom: 1px solid rgb(43, 43, 43);\n  position: relative;\n  &::after{\n    \n    position:absolute;\n    left: 0px;\n    top:50%;\n   \n    transform: translateY(-50%);\n    font-family: 'Open Sans', sans-serif;\n  font-size: 24px;\n  text-align: center;\n  color:rgb(80, 80, 243);\n  }\n  }\n}\n.bullet_two{\n  p:nth-child(1)::after{\n    content:'01';\n  }\n  \n  p:nth-child(2)::after{\n    content:'02';\n  }\n\n  p:nth-child(3)::after{\n    content:'03';\n  }\n\n  p:nth-child(4)::after{\n    content:'04';\n  } \n  \n  p:nth-child(5)::after{\n    content:'05';\n  }\n\n  p:nth-child(6)::after{\n    content:'05';\n  }\n\n  p:nth-child(7)::after{\n    content:'07';\n  }\n  p:nth-child(8)::after{\n    content:'06';\n  }\n  p:nth-child(10)::after{\n    content:'07';\n  }\n  p:nth-child(12)::after{\n    content:'08';\n  }\n  p:nth-child(14)::after{\n    content:'09';\n  }\n}\n\n\n\n.img-class{\n  width: 250px;\n  padding: 10px 0px;\n  margin: 0px auto;\n  img{\n    width: inherit;\n    height: auto;\n    object-fit: contain;\n  }\n\n}\n\n\n.mod-img{\n  width: 400px;\n}\n\n\n\n\n\n\n\n@media screen and (max-width:480px){\n \n\n.close\n\n  header{\n    height: 10vh;\n  }\n\n\n  .mod-img{\n    width: 300px;\n  }\n  \n\n  header{\n \n    padding: 0px 10px;\n    padding-left: 20px;\n    justify-content: flex-start;\n  img{\n  height: 45px;\n  }\n    .closeBtn{\n        position: fixed;\n        top:0px;\n        right: 10px;\n        display: block;\n        z-index: 99999;\n        .ham{\n          width: 70px!important;\n        }\n    }\n    nav{\n     \n        \n        display: none;\n  \n    }\n}\n}","/* You can add global styles to this file, and also import other style files */\n@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Poiret+One&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  overflow: hidden;\n}\n\n.box-section1 {\n  background-color: black;\n}\n\n.nav-indicator {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  transition: 0.4s;\n  height: 2px;\n  border-radius: 30px;\n  z-index: 1;\n}\n\n.ham {\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  transition: transform 400ms;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.hamRotate.active {\n  transform: rotate(45deg);\n}\n\n.hamRotate180.active {\n  transform: rotate(180deg);\n}\n\n.line {\n  fill: none;\n  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;\n  stroke: blue;\n  stroke-width: 5.5;\n  stroke-linecap: round;\n}\n\n.ham1 .top {\n  stroke-dasharray: 40 139;\n}\n\n.ham1 .bottom {\n  stroke-dasharray: 40 180;\n}\n\n.ham1.active .top {\n  stroke-dashoffset: -98px;\n}\n\n.ham1.active .bottom {\n  stroke-dashoffset: -138px;\n}\n\n.nav-container {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  right: 0;\n  left: 0;\n  transform: translateX(100%);\n  padding: 50px 0px;\n  background-color: #000;\n  bottom: 0;\n  z-index: 11111;\n  transition: all 0.3s ease;\n}\n.nav-container .left_container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.nav-container .left_container a {\n  display: block;\n  width: 80%;\n  padding: 20px 0px;\n  text-decoration: none;\n  color: #fff;\n  font-weight: bold;\n  text-align: center;\n  position: relative;\n  font-family: \"Open Sans\", sans-serif;\n}\n.nav-container .left_container a::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 0px;\n  height: 4px;\n  width: 0px;\n  opacity: 0;\n  border-radius: 40px;\n  transform-origin: left;\n  transition: width 0.3s ease;\n  background-color: blue;\n}\n.nav-container .left_container a:active {\n  color: blue;\n}\n.nav-container .left_container a:active::after {\n  width: 20px;\n  opacity: 1;\n}\n.nav-container .left_container a:hover {\n  color: blue;\n}\n.nav-container .left_container a:hover::after {\n  width: 20px;\n  opacity: 1;\n}\n.nav-container .right_container {\n  border: 1px solid transparent;\n  flex: 1;\n  display: flex;\n}\n.nav-container .right_container h1 {\n  margin: auto;\n  color: white;\n  font-family: \"Poiret One\", cursive;\n  font-size: 60px;\n  font-weight: lighter;\n}\n\n.showNav {\n  transform: translateX(0px);\n}\n\n.show-active {\n  display: flex;\n  animation: showBig 500ms ease forwards 1;\n}\n\n@keyframes showBig {\n  0% {\n    transform: translateX(500px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\nheader {\n  height: 12vh;\n  padding: 0px 100px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #fff;\n}\nheader img {\n  height: 50px;\n}\nheader .closeBtn {\n  position: fixed;\n  top: 10px;\n  right: 100px;\n  display: none;\n  z-index: 99999;\n}\nheader nav {\n  height: 100%;\n  display: flex;\n}\nheader nav a {\n  text-decoration: none;\n  padding: 0px 15px;\n  font-size: 16px;\n  height: 100%;\n  line-height: 12vh;\n  color: #000;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: bolder;\n}\n\n.why-section {\n  background: #0f0f0f;\n}\n\n.bullet_two {\n  margin-top: 20px;\n}\n.bullet_two p {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 15px;\n  color: #fff;\n  font-weight: 500;\n  text-align: justify;\n  line-height: 30px;\n  padding-bottom: 12px;\n  padding-top: 12px;\n  padding-left: 50px;\n  border-bottom: 1px solid #2b2b2b;\n  position: relative;\n}\n.bullet_two p::after {\n  position: absolute;\n  left: 0px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 24px;\n  text-align: center;\n  color: #5050f3;\n}\n\n.bullet_two p:nth-child(1)::after {\n  content: \"01\";\n}\n.bullet_two p:nth-child(2)::after {\n  content: \"02\";\n}\n.bullet_two p:nth-child(3)::after {\n  content: \"03\";\n}\n.bullet_two p:nth-child(4)::after {\n  content: \"04\";\n}\n.bullet_two p:nth-child(5)::after {\n  content: \"05\";\n}\n.bullet_two p:nth-child(6)::after {\n  content: \"05\";\n}\n.bullet_two p:nth-child(7)::after {\n  content: \"07\";\n}\n.bullet_two p:nth-child(8)::after {\n  content: \"06\";\n}\n.bullet_two p:nth-child(10)::after {\n  content: \"07\";\n}\n.bullet_two p:nth-child(12)::after {\n  content: \"08\";\n}\n.bullet_two p:nth-child(14)::after {\n  content: \"09\";\n}\n\n.img-class {\n  width: 250px;\n  padding: 10px 0px;\n  margin: 0px auto;\n}\n.img-class img {\n  width: inherit;\n  height: auto;\n  object-fit: contain;\n}\n\n.mod-img {\n  width: 400px;\n}\n\n@media screen and (max-width: 480px) {\n  .close header {\n    height: 10vh;\n  }\n\n  .mod-img {\n    width: 300px;\n  }\n\n  header {\n    padding: 0px 10px;\n    padding-left: 20px;\n    justify-content: flex-start;\n  }\n  header img {\n    height: 45px;\n  }\n  header .closeBtn {\n    position: fixed;\n    top: 0px;\n    right: 10px;\n    display: block;\n    z-index: 99999;\n  }\n  header .closeBtn .ham {\n    width: 70px !important;\n  }\n  header nav {\n    display: none;\n  }\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hp\OneDrive\Desktop\work\revamped-website\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map