"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/Easy3dContext.js":
/*!**********************************!*\
  !*** ./context/Easy3dContext.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Easy3DContext\": function() { return /* binding */ Easy3DContext; },\n/* harmony export */   \"Easy3DProvider\": function() { return /* binding */ Easy3DProvider; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_davidmurillo_3d_ecommerce_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_davidmurillo_3d_ecommerce_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_davidmurillo_3d_ecommerce_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/firebase */ \"./utils/firebase.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Easy3DContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)();\nvar Easy3DProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), users = ref[0], setUsers = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), models = ref1[0], setModels = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        getModels();\n    }, []);\n    var getModels = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_home_davidmurillo_3d_ecommerce_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var querySnapshot;\n            return _home_davidmurillo_3d_ecommerce_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_utils_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"models\"));\n                    case 2:\n                        querySnapshot = _ctx.sent;\n                        console.log(querySnapshot.docs.map(function(doc) {\n                            return doc.data();\n                        }));\n                        setModels(querySnapshot.docs.map(function(doc) {\n                            return doc.data();\n                        }));\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getModels() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Easy3DContext.Provider, {\n        value: {\n            models: models,\n            users: users\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/davidmurillo/3d-ecommerce/context/Easy3dContext.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, _this);\n};\n_s(Easy3DProvider, \"q6SQlJ/iF1m3MjZnOaQqY4kTJYI=\");\n_c = Easy3DProvider;\n\nvar _c;\n$RefreshReg$(_c, \"Easy3DProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0Vhc3kzZENvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFBbUU7QUFDWDtBQUNqQjtBQUV2QyxJQUFNUSxhQUFhLGlCQUFHSixvREFBYSxFQUFFO0FBRXJDLElBQU1LLGNBQWMsR0FBRyxnQkFBZ0I7UUFBZEMsUUFBUSxTQUFSQSxRQUFROztJQUM3QixJQUF5QkosR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUE5QkssS0FBSyxHQUFhTCxHQUFZLEdBQXpCLEVBQUNNLFFBQVEsR0FBSU4sR0FBWSxHQUFoQjtJQUNyQixJQUEyQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUFoQ08sTUFBTSxHQUFjUCxJQUFZLEdBQTFCLEVBQUNRLFNBQVMsR0FBSVIsSUFBWSxHQUFoQjtJQUN2QkQsZ0RBQVMsQ0FBQyxXQUFJO1FBQ1ZVLFNBQVMsRUFBRSxDQUFDO0tBQ2YsRUFBQyxFQUFFLENBQUMsQ0FBQztJQUNOLElBQU1BLFNBQVM7bUJBQUcsa1BBQVk7Z0JBQ3BCQyxhQUFhOzs7OzsrQkFBUWYsMkRBQU8sQ0FBQ0QsOERBQVUsQ0FBQ08sK0NBQUUsRUFBQyxRQUFRLENBQUMsQ0FBQzs7d0JBQXJEUyxhQUFhLFlBQXdDO3dCQUMzREMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLGFBQWEsQ0FBQ0csSUFBSSxDQUFDQyxHQUFHLENBQUNqQixTQUFBQSxHQUFHO21DQUFFQSxHQUFHLENBQUNrQixJQUFJLEVBQUU7eUJBQUEsQ0FBQyxDQUFDLENBQUM7d0JBQ3JEUCxTQUFTLENBQUNFLGFBQWEsQ0FBQ0csSUFBSSxDQUFDQyxHQUFHLENBQUNqQixTQUFBQSxHQUFHO21DQUFJQSxHQUFHLENBQUNrQixJQUFJLEVBQUU7eUJBQUEsQ0FBQyxDQUFDLENBQUM7Ozs7OztTQUV4RDt3QkFMS04sU0FBUzs7O09BS2Q7SUFDRCxxQkFDSSw4REFBQ1AsYUFBYSxDQUFDYyxRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUFDVixNQUFNLEVBQU5BLE1BQU07WUFBQ0YsS0FBSyxFQUFMQSxLQUFLO1NBQUM7a0JBQ3hDRCxRQUFROzs7OzthQUNZLENBQzVCO0NBQ0o7R0FqQktELGNBQWM7QUFBZEEsS0FBQUEsY0FBYztBQXFCaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9FYXN5M2RDb250ZXh0LmpzPzJjYzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29sbGVjdGlvbixnZXREb2NzLHNldERvYyxkb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LHVzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi91dGlscy9maXJlYmFzZVwiO1xuXG5jb25zdCBFYXN5M0RDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBFYXN5M0RQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PiB7XG4gICAgY29uc3QgW3VzZXJzLHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbbW9kZWxzLHNldE1vZGVsc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGdldE1vZGVscygpO1xuICAgIH0sW10pO1xuICAgIGNvbnN0IGdldE1vZGVscyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdD0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLFwibW9kZWxzXCIpKTtcbiAgICAgICAgY29uc29sZS5sb2cocXVlcnlTbmFwc2hvdC5kb2NzLm1hcChkb2M9PmRvYy5kYXRhKCkpKTtcbiAgICAgICAgc2V0TW9kZWxzKHF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoZG9jID0+IGRvYy5kYXRhKCkpKTtcblxuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICAgIDxFYXN5M0RDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7bW9kZWxzLHVzZXJzfX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvRWFzeTNEQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cblxuXG5leHBvcnR7RWFzeTNEQ29udGV4dCxFYXN5M0RQcm92aWRlcn07XG4iXSwibmFtZXMiOlsiY29sbGVjdGlvbiIsImdldERvY3MiLCJzZXREb2MiLCJkb2MiLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJkYiIsIkVhc3kzRENvbnRleHQiLCJFYXN5M0RQcm92aWRlciIsImNoaWxkcmVuIiwidXNlcnMiLCJzZXRVc2VycyIsIm1vZGVscyIsInNldE1vZGVscyIsImdldE1vZGVscyIsInF1ZXJ5U25hcHNob3QiLCJjb25zb2xlIiwibG9nIiwiZG9jcyIsIm1hcCIsImRhdGEiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/Easy3dContext.js\n"));

/***/ })

});