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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _styles_ModelPage_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/ModelPage.module.css */ \"./styles/ModelPage.module.css\");\n/* harmony import */ var _styles_ModelPage_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_ModelPage_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _context_Easy3dContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/Easy3dContext */ \"./context/Easy3dContext.js\");\n/* harmony import */ var _components_threeJsComponents_Floor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/threeJsComponents/Floor */ \"./components/threeJsComponents/Floor.js\");\n/* harmony import */ var _components_threeJsComponents_LightBulb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/threeJsComponents/LightBulb */ \"./components/threeJsComponents/LightBulb.js\");\n/* harmony import */ var _components_threeJsComponents_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/threeJsComponents/Box */ \"./components/threeJsComponents/Box.js\");\n/* harmony import */ var _components_threeJsComponents_OrbitControls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/threeJsComponents/OrbitControls */ \"./components/threeJsComponents/OrbitControls.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction modelPage() {\n    _s();\n    var models = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_Easy3dContext__WEBPACK_IMPORTED_MODULE_2__.Easy3DContext).models;\n    console.log(models);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_ModelPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().scene),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_9__.Canvas, {\n                            shadows: true,\n                            className: (_styles_ModelPage_module_css__WEBPACK_IMPORTED_MODULE_8___default().canvas),\n                            camera: {\n                                position: [\n                                    0,\n                                    0,\n                                    10\n                                ]\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                                    color: \"white\",\n                                    intensity: 0.3\n                                }, void 0, false, {\n                                    fileName: \"/home/davidmurillo/3d-ecommerce/pages/modelPage.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_threeJsComponents_LightBulb__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    position: [\n                                        0,\n                                        3,\n                                        0\n                                    ]\n                                }, void 0, false, {\n                                    fileName: \"/home/davidmurillo/3d-ecommerce/pages/modelPage.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_threeJsComponents_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    rotateXs: 3,\n                                    rotateY: 0.2\n                                }, void 0, false, {\n                                    fileName: \"/home/davidmurillo/3d-ecommerce/pages/modelPage.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_threeJsComponents_OrbitControls__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/davidmurillo/3d-ecommerce/pages/modelPage.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_threeJsComponents_Floor__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    position: [\n                                        0,\n                                        -1,\n                                        0\n                                    ]\n                                }, void 0, false, {\n                                    fileName: \"/home/davidmurillo/3d-ecommerce/pages/modelPage.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/davidmurillo/3d-ecommerce/pages/modelPage.js\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/davidmurillo/3d-ecommerce/pages/modelPage.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-1 grid grid-flow-row mx-auto border w-full items-start\",\n                        style: {\n                            \"height\": \"45vh\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"props.price\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/davidmurillo/3d-ecommerce/pages/modelPage.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        text: \"Add to cart\",\n                                        color: \"bg-blue-500\",\n                                        padding: \"p-3\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/davidmurillo/3d-ecommerce/pages/modelPage.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/davidmurillo/3d-ecommerce/pages/modelPage.js\",\n                                lineNumber: 35,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"a\"\n                            }, void 0, false, {\n                                fileName: \"/home/davidmurillo/3d-ecommerce/pages/modelPage.js\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"a\"\n                            }, void 0, false, {\n                                fileName: \"/home/davidmurillo/3d-ecommerce/pages/modelPage.js\",\n                                lineNumber: 41,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"a\"\n                            }, void 0, false, {\n                                fileName: \"/home/davidmurillo/3d-ecommerce/pages/modelPage.js\",\n                                lineNumber: 42,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/davidmurillo/3d-ecommerce/pages/modelPage.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/davidmurillo/3d-ecommerce/pages/modelPage.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-3\"\n            }, void 0, false, {\n                fileName: \"/home/davidmurillo/3d-ecommerce/pages/modelPage.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(modelPage, \"ZweeG0P8EItlLWEPywIyN8LtgwM=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (modelPage);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb2RlbFBhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBOEM7QUFDTDtBQUNPO0FBQ087QUFFRztBQUNRO0FBQ1o7QUFDZTtBQUMzQjtBQUNWO0FBRWhDLFNBQVNZLFNBQVMsR0FBRzs7SUFDakIsSUFBTSxNQUFPLEdBQUlELGlEQUFVLENBQUNOLGlFQUFhLENBQUMsQ0FBbkNRLE1BQU07SUFDYkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU0sQ0FBQyxDQUFDO0lBQ3BCLHFCQUNJOzswQkFDSSw4REFBQ0csS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGtCQUFrQjs7a0NBQzdCLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUViLDJFQUFTO2tDQUNyQiw0RUFBQ0Qsc0RBQU07NEJBQ0hnQixPQUFPLEVBQUUsSUFBSTs0QkFDYkYsU0FBUyxFQUFFYiw0RUFBVTs0QkFDckJpQixNQUFNLEVBQUU7Z0NBQ05DLFFBQVEsRUFBRTtBQUFDLHFDQUFDO0FBQUUscUNBQUM7QUFBRSxzQ0FBRTtpQ0FBQzs2QkFDckI7OzhDQUVELDhEQUFDQyxjQUFZO29DQUFDQyxLQUFLLEVBQUUsT0FBTztvQ0FBRUMsU0FBUyxFQUFFLEdBQUc7Ozs7O3dDQUFHOzhDQUMvQyw4REFBQ2xCLCtFQUFTO29DQUFDZSxRQUFRLEVBQUU7QUFBQyx5Q0FBQztBQUFDLHlDQUFDO0FBQUMseUNBQUM7cUNBQUM7Ozs7O3dDQUFHOzhDQUMvQiw4REFBQ2QseUVBQUc7b0NBQUNrQixRQUFRLEVBQUUsQ0FBQztvQ0FBRUMsT0FBTyxFQUFFLEdBQUc7Ozs7O3dDQUFHOzhDQUNqQyw4REFBQ2xCLG1GQUFROzs7O3dDQUFHOzhDQUNaLDhEQUFDSCwyRUFBSztvQ0FBQ2dCLFFBQVEsRUFBRTtBQUFDLHlDQUFDO3dDQUFDLENBQUMsQ0FBQztBQUFDLHlDQUFDO3FDQUFDOzs7Ozt3Q0FBRzs7Ozs7O2dDQUN2Qjs7Ozs7NEJBQ1A7a0NBQ04sOERBQUNOLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxpRUFBaUU7d0JBQUNXLEtBQUssRUFBRTs0QkFBQyxRQUFRLEVBQUMsTUFBTTt5QkFBQzs7MENBQ3JHLDhEQUFDWixLQUFHO2dDQUFDQyxTQUFTLEVBQUMsS0FBSzs7a0RBQ2hCLDhEQUFDWSxJQUFFO2tEQUFDLGFBQVc7Ozs7OzRDQUFLO2tEQUNwQiw4REFBQ25CLDBEQUFNO3dDQUFDb0IsSUFBSSxFQUFDLGFBQWE7d0NBQUNOLEtBQUssRUFBQyxhQUFhO3dDQUFDTyxPQUFPLEVBQUMsS0FBSzs7Ozs7NENBQVU7Ozs7OztvQ0FDcEU7MENBRU4sOERBQUNmLEtBQUc7MENBQUMsR0FBQzs7Ozs7b0NBQU07MENBQ1osOERBQUNBLEtBQUc7MENBQUMsR0FBQzs7Ozs7b0NBQU07MENBQ1osOERBQUNBLEtBQUc7MENBQUMsR0FBQzs7Ozs7b0NBQU07Ozs7Ozs0QkFDVjs7Ozs7O29CQUVKOzBCQUNOLDhEQUFDQSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsa0JBQWtCOzs7OztvQkFFM0I7O29CQUVQLENBRU47Q0FDSjtHQXhDUUwsU0FBUztBQTBDbEIsK0RBQWVBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9kZWxQYWdlLmpzP2Y3ZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtDYW52YXN9IGZyb20gJ0ByZWFjdC10aHJlZS9maWJlcidcbmltcG9ydCBjc3MgZnJvbSAnLi4vc3R5bGVzL01vZGVsUGFnZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHtFYXN5M0RDb250ZXh0fSBmcm9tICcuLi9jb250ZXh0L0Vhc3kzZENvbnRleHQnO1xuXG5pbXBvcnQgRmxvb3IgZnJvbSAnLi4vY29tcG9uZW50cy90aHJlZUpzQ29tcG9uZW50cy9GbG9vcic7XG5pbXBvcnQgTGlnaHRCdWxiIGZyb20gJy4uL2NvbXBvbmVudHMvdGhyZWVKc0NvbXBvbmVudHMvTGlnaHRCdWxiJztcbmltcG9ydCBCb3ggZnJvbSAnLi4vY29tcG9uZW50cy90aHJlZUpzQ29tcG9uZW50cy9Cb3gnO1xuaW1wb3J0IENvbnRyb2xzIGZyb20gJy4uL2NvbXBvbmVudHMvdGhyZWVKc0NvbXBvbmVudHMvT3JiaXRDb250cm9scyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIG1vZGVsUGFnZSgpIHtcbiAgICBjb25zdCB7bW9kZWxzfSA9IHVzZUNvbnRleHQoRWFzeTNEQ29udGV4dCk7XG4gICAgY29uc29sZS5sb2cobW9kZWxzKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy01XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5zY2VuZX0+XG4gICAgICAgICAgICAgICAgICAgIDxDYW52YXNcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd3M9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzcy5jYW52YXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1lcmE9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFswLCAwLCAxMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhbWJpZW50TGlnaHQgY29sb3I9e1wid2hpdGVcIn0gaW50ZW5zaXR5PXswLjN9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaWdodEJ1bGIgcG9zaXRpb249e1swLDMsMF19Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggcm90YXRlWHM9ezN9IHJvdGF0ZVk9ezAuMn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xzIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rmxvb3IgcG9zaXRpb249e1swLC0xLDBdfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FudmFzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBncmlkIGdyaWQtZmxvdy1yb3cgbXgtYXV0byBib3JkZXIgdy1mdWxsIGl0ZW1zLXN0YXJ0XCIgc3R5bGU9e3snaGVpZ2h0JzonNDV2aCd9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3AtNSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+cHJvcHMucHJpY2U8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQWRkIHRvIGNhcnRcIiBjb2xvcj1cImJnLWJsdWUtNTAwXCIgcGFkZGluZz1cInAtM1wiPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+YTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PmE8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5hPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTNcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8Lz5cbiAgICAgICAgXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtb2RlbFBhZ2VcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2FudmFzIiwiY3NzIiwiRWFzeTNEQ29udGV4dCIsIkZsb29yIiwiTGlnaHRCdWxiIiwiQm94IiwiQ29udHJvbHMiLCJCdXR0b24iLCJ1c2VDb250ZXh0IiwibW9kZWxQYWdlIiwibW9kZWxzIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInNjZW5lIiwic2hhZG93cyIsImNhbnZhcyIsImNhbWVyYSIsInBvc2l0aW9uIiwiYW1iaWVudExpZ2h0IiwiY29sb3IiLCJpbnRlbnNpdHkiLCJyb3RhdGVYcyIsInJvdGF0ZVkiLCJzdHlsZSIsImgyIiwidGV4dCIsInBhZGRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/modelPage.js\n"));

/***/ })

});