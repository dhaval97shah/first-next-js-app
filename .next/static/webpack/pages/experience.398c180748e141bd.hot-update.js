"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/experience",{

/***/ "./src/app/components/experience/ProjectAreas.tsx":
/*!********************************************************!*\
  !*** ./src/app/components/experience/ProjectAreas.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_consts_PROJECT_AREAS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/consts/PROJECT_AREAS */ \"./src/app/consts/PROJECT_AREAS.ts\");\n\n\nconst COLORS = [\n    \"#6495ED\",\n    \"#9FE2BF\",\n    \"#F67280\",\n    \"#BA55D3\",\n    \"#1AA260\",\n    \"#FBD5AB\",\n    \"#556B2F\",\n    \"#FBB117\"\n];\nconst ProjectAreas = ()=>{\n    var _PROJECT_AREAS;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-8 w-[80%]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white text-3xl font-bold\",\n                children: \"Areas of Projects:\"\n            }, void 0, false, {\n                fileName: \"/Users/dhavalshah/Documents/dhaval/personal/first-next-js-app/src/app/components/experience/ProjectAreas.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6 flex flex-wrap gap-4\",\n                children: (_PROJECT_AREAS = _app_consts_PROJECT_AREAS__WEBPACK_IMPORTED_MODULE_1__.PROJECT_AREAS) === null || _PROJECT_AREAS === void 0 ? void 0 : _PROJECT_AREAS.map((area, index)=>{\n                    var _area;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-white text-lg opacity-75\",\n                        style: {\n                            background: item.bgColor\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"\",\n                            children: (_area = area) === null || _area === void 0 ? void 0 : _area.title\n                        }, void 0, false, {\n                            fileName: \"/Users/dhavalshah/Documents/dhaval/personal/first-next-js-app/src/app/components/experience/ProjectAreas.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/dhavalshah/Documents/dhaval/personal/first-next-js-app/src/app/components/experience/ProjectAreas.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/dhavalshah/Documents/dhaval/personal/first-next-js-app/src/app/components/experience/ProjectAreas.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dhavalshah/Documents/dhaval/personal/first-next-js-app/src/app/components/experience/ProjectAreas.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProjectAreas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectAreas);\nvar _c;\n$RefreshReg$(_c, \"ProjectAreas\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2NvbXBvbmVudHMvZXhwZXJpZW5jZS9Qcm9qZWN0QXJlYXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFBMkQ7QUFFM0QsTUFBTUMsU0FBUztJQUNiO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRDtBQUVELE1BQU1DLGVBQWU7UUFLWkY7SUFKUCxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUFnQzs7Ozs7OzBCQUMvQyw4REFBQ0Q7Z0JBQUlDLFdBQVU7MkJBQ1pKLGlCQUFBQSxvRUFBYUEsY0FBYkEscUNBQUFBLGVBQWVLLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQzt3QkFRSEQ7eUNBUHRCLDhEQUFDSDt3QkFFQ0MsV0FBVTt3QkFDVkksT0FBTzs0QkFDTEMsWUFBWUMsS0FBS0MsT0FBTzt3QkFDMUI7a0NBRUEsNEVBQUNDOzRCQUFLUixXQUFVO3VDQUFJRSxRQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU1PLEtBQUs7Ozs7Ozt1QkFOMUJOOzs7Ozs7Ozs7Ozs7Ozs7OztBQVlqQjtLQW5CTUw7QUFxQk4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL2V4cGVyaWVuY2UvUHJvamVjdEFyZWFzLnRzeD9kMDQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBST0pFQ1RfQVJFQVMgfSBmcm9tIFwiQC9hcHAvY29uc3RzL1BST0pFQ1RfQVJFQVNcIjtcblxuY29uc3QgQ09MT1JTID0gW1xuICBcIiM2NDk1RURcIixcbiAgXCIjOUZFMkJGXCIsXG4gIFwiI0Y2NzI4MFwiLFxuICBcIiNCQTU1RDNcIixcbiAgXCIjMUFBMjYwXCIsXG4gIFwiI0ZCRDVBQlwiLFxuICBcIiM1NTZCMkZcIixcbiAgXCIjRkJCMTE3XCIsXG5dO1xuXG5jb25zdCBQcm9qZWN0QXJlYXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IHctWzgwJV1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTN4bCBmb250LWJvbGRcIj5BcmVhcyBvZiBQcm9qZWN0czo8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBmbGV4IGZsZXgtd3JhcCBnYXAtNFwiPlxuICAgICAgICB7UFJPSkVDVF9BUkVBUz8ubWFwKChhcmVhLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtbGcgb3BhY2l0eS03NVwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBpdGVtLmJnQ29sb3IsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPnthcmVhPy50aXRsZX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0QXJlYXM7XG4iXSwibmFtZXMiOlsiUFJPSkVDVF9BUkVBUyIsIkNPTE9SUyIsIlByb2plY3RBcmVhcyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImFyZWEiLCJpbmRleCIsInN0eWxlIiwiYmFja2dyb3VuZCIsIml0ZW0iLCJiZ0NvbG9yIiwic3BhbiIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app/components/experience/ProjectAreas.tsx\n"));

/***/ })

});