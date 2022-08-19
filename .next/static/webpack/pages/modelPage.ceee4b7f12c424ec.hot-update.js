"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/modelPage",{

/***/ "./pages/modelPage.js":
/*!****************************!*\
  !*** ./pages/modelPage.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _styles_ModelPage_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/ModelPage.module.css */ \"./styles/ModelPage.module.css\");\n/* harmony import */ var _styles_ModelPage_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_ModelPage_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _context_Easy3dContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/Easy3dContext */ \"./context/Easy3dContext.js\");\n/* harmony import */ var _components_threeJsComponents_Floor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/threeJsComponents/Floor */ \"./components/threeJsComponents/Floor.js\");\n/* harmony import */ var _components_threeJsComponents_LightBulb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/threeJsComponents/LightBulb */ \"./components/threeJsComponents/LightBulb.js\");\n/* harmony import */ var _components_threeJsComponents_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/threeJsComponents/Box */ \"./components/threeJsComponents/Box.js\");\n/* harmony import */ var _components_threeJsComponents_OrbitControls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/threeJsComponents/OrbitControls */ \"./components/threeJsComponents/OrbitControls.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction modelPage() {\n    _s();\n    var models = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_Easy3dContext__WEBPACK_IMPORTED_MODULE_2__.Easy3DContext).models;\n    console.log(models);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_ModelPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().scene),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_8__.Canvas, {\n                            shadows: true,\n                            className: (_styles_ModelPage_module_css__WEBPACK_IMPORTED_MODULE_7___default().canvas),\n                            camera: {\n                                position: [\n                                    0,\n                                    0,\n                                    10\n                                ]\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                                    color: \"white\",\n                                    intensity: 0.3\n                                }, void 0, false, {\n                                    fileName: \"/home/davidmurillo/3d-ecommerce/pages/modelPage.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_threeJsComponents_LightBulb__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    position: [\n                                        0,\n                                        3,\n                                        0\n                                    ]\n                                }, void 0, false, {\n                                    fileName: \"/home/davidmurillo/3d-ecommerce/pages/modelPage.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_threeJsComponents_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    rotateXs: 3,\n                                    rotateY: 0.2\n                                }, void 0, false, {\n                                    fileName: \"/home/davidmurillo/3d-ecommerce/pages/modelPage.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_threeJsComponents_OrbitControls__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/davidmurillo/3d-ecommerce/pages/modelPage.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_threeJsComponents_Floor__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    position: [\n                                        0,\n                                        -1,\n                                        0\n                                    ]\n                                }, void 0, false, {\n                                    fileName: \"/home/davidmurillo/3d-ecommerce/pages/modelPage.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/davidmurillo/3d-ecommerce/pages/modelPage.js\",\n                            lineNumber: 18,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/davidmurillo/3d-ecommerce/pages/modelPage.js\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-1 grid grid-flow-row mx-auto border w-full align-middle\",\n                        children: \"c\"\n                    }, void 0, false, {\n                        fileName: \"/home/davidmurillo/3d-ecommerce/pages/modelPage.js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/davidmurillo/3d-ecommerce/pages/modelPage.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-3\"\n            }, void 0, false, {\n                fileName: \"/home/davidmurillo/3d-ecommerce/pages/modelPage.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(modelPage, \"ZweeG0P8EItlLWEPywIyN8LtgwM=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (modelPage);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb2RlbFBhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE4QztBQUNMO0FBQ087QUFDTztBQUNHO0FBQ1E7QUFDWjtBQUNlO0FBQ3JDO0FBRWhDLFNBQVNXLFNBQVMsR0FBRzs7SUFDakIsSUFBTSxNQUFPLEdBQUlELGlEQUFVLENBQUNMLGlFQUFhLENBQUMsQ0FBbkNPLE1BQU07SUFDYkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLHFCQUNJOzswQkFDSSw4REFBQ0csS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGtCQUFrQjs7a0NBQzdCLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUVaLDJFQUFTO2tDQUNyQiw0RUFBQ0Qsc0RBQU07NEJBQ0hlLE9BQU8sRUFBRSxJQUFJOzRCQUNiRixTQUFTLEVBQUVaLDRFQUFVOzRCQUNyQmdCLE1BQU0sRUFBRTtnQ0FDTkMsUUFBUSxFQUFFO0FBQUMscUNBQUM7QUFBRSxxQ0FBQztBQUFFLHNDQUFFO2lDQUFDOzZCQUNyQjs7OENBRUQsOERBQUNDLGNBQVk7b0NBQUNDLEtBQUssRUFBRSxPQUFPO29DQUFFQyxTQUFTLEVBQUUsR0FBRzs7Ozs7d0NBQUc7OENBQy9DLDhEQUFDakIsK0VBQVM7b0NBQUNjLFFBQVEsRUFBRTtBQUFDLHlDQUFDO0FBQUMseUNBQUM7QUFBQyx5Q0FBQztxQ0FBQzs7Ozs7d0NBQUc7OENBQy9CLDhEQUFDYix5RUFBRztvQ0FBQ2lCLFFBQVEsRUFBRSxDQUFDO29DQUFFQyxPQUFPLEVBQUUsR0FBRzs7Ozs7d0NBQUc7OENBQ2pDLDhEQUFDakIsbUZBQVE7Ozs7d0NBQUc7OENBQ1osOERBQUNILDJFQUFLO29DQUFDZSxRQUFRLEVBQUU7QUFBQyx5Q0FBQzt3Q0FBQyxDQUFDLENBQUM7QUFBQyx5Q0FBQztxQ0FBQzs7Ozs7d0NBQUc7Ozs7OztnQ0FDdkI7Ozs7OzRCQUNQO2tDQUNOLDhEQUFDTixLQUFHO3dCQUFDQyxTQUFTLEVBQUMsa0VBQWtFO2tDQUFDLEdBRWxGOzs7Ozs0QkFBTTs7Ozs7O29CQUVKOzBCQUNOLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsa0JBQWtCOzs7OztvQkFFM0I7O29CQUVQLENBRU47Q0FDSjtHQWpDUUwsU0FBUztBQW1DbEIsK0RBQWVBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9kZWxQYWdlLmpzP2Y3ZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtDYW52YXN9IGZyb20gJ0ByZWFjdC10aHJlZS9maWJlcidcbmltcG9ydCBjc3MgZnJvbSAnLi4vc3R5bGVzL01vZGVsUGFnZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHtFYXN5M0RDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0L0Vhc3kzZENvbnRleHQnO1xuaW1wb3J0IEZsb29yIGZyb20gJy4uL2NvbXBvbmVudHMvdGhyZWVKc0NvbXBvbmVudHMvRmxvb3InO1xuaW1wb3J0IExpZ2h0QnVsYiBmcm9tICcuLi9jb21wb25lbnRzL3RocmVlSnNDb21wb25lbnRzL0xpZ2h0QnVsYic7XG5pbXBvcnQgQm94IGZyb20gJy4uL2NvbXBvbmVudHMvdGhyZWVKc0NvbXBvbmVudHMvQm94JztcbmltcG9ydCBDb250cm9scyBmcm9tICcuLi9jb21wb25lbnRzL3RocmVlSnNDb21wb25lbnRzL09yYml0Q29udHJvbHMnO1xuaW1wb3J0IHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gbW9kZWxQYWdlKCkge1xuICAgIGNvbnN0IHttb2RlbHN9ID0gdXNlQ29udGV4dChFYXN5M0RDb250ZXh0KTtcbiAgICBjb25zb2xlLmxvZyhtb2RlbHMpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnNjZW5lfT5cbiAgICAgICAgICAgICAgICAgICAgPENhbnZhc1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93cz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLmNhbnZhc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbWVyYT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogWzAsIDAsIDEwXVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFtYmllbnRMaWdodCBjb2xvcj17XCJ3aGl0ZVwifSBpbnRlbnNpdHk9ezAuM30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpZ2h0QnVsYiBwb3NpdGlvbj17WzAsMywwXX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCByb3RhdGVYcz17M30gcm90YXRlWT17MC4yfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbHMgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbG9vciBwb3NpdGlvbj17WzAsLTEsMF19Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9DYW52YXM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGdyaWQgZ3JpZC1mbG93LXJvdyBteC1hdXRvIGJvcmRlciB3LWZ1bGwgYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIGNcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtM1wiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDwvPlxuICAgICAgICBcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vZGVsUGFnZVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDYW52YXMiLCJjc3MiLCJFYXN5M0RDb250ZXh0IiwiRmxvb3IiLCJMaWdodEJ1bGIiLCJCb3giLCJDb250cm9scyIsInVzZUNvbnRleHQiLCJtb2RlbFBhZ2UiLCJtb2RlbHMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwic2NlbmUiLCJzaGFkb3dzIiwiY2FudmFzIiwiY2FtZXJhIiwicG9zaXRpb24iLCJhbWJpZW50TGlnaHQiLCJjb2xvciIsImludGVuc2l0eSIsInJvdGF0ZVhzIiwicm90YXRlWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/modelPage.js\n"));

/***/ })

});