"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./pages/projects.tsx":
/*!****************************!*\
  !*** ./pages/projects.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Card: function() { return /* binding */ Card; },\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_consts_PROJECTS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/consts/PROJECTS */ \"./src/app/consts/PROJECTS.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default,Card auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        '\\n  /* border: 5px solid #4c5564; */\\n  /* .left-section {\\n    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),\\n      url(\"/d1.jpg\") center center no-repeat;\\n    padding: 4px;\\n  } */\\n'\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c = Wrapper;\nfunction Projects() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wrapper, {\n        className: \"flex min-h-screen flex-col p-24 pb-16 bg-[#000] relative main-page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"text-white text-5xl font-bold uppercase text-center\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/dhavalshah/Documents/dhaval/personal/first-next-js-app/pages/projects.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"projects-list flex flex-col gap-8 mt-12\",\n                children: _app_consts_PROJECTS__WEBPACK_IMPORTED_MODULE_2__.PROJECTS.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(\"project-card border border-solid border-gray-400 p-4 rounded-lg flex\", {\n                            \"flex-row\": index % 2 === 0,\n                            \"flex-row-reverse\": index % 2 !== 0\n                        }),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"text-white\",\n                                children: project.title\n                            }, void 0, false, {\n                                fileName: \"/Users/dhavalshah/Documents/dhaval/personal/first-next-js-app/pages/projects.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/dhavalshah/Documents/dhaval/personal/first-next-js-app/pages/projects.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, this)\n                    }, project.title, false, {\n                        fileName: \"/Users/dhavalshah/Documents/dhaval/personal/first-next-js-app/pages/projects.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/dhavalshah/Documents/dhaval/personal/first-next-js-app/pages/projects.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dhavalshah/Documents/dhaval/personal/first-next-js-app/pages/projects.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Projects;\nconst Card = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_4___default().memo(_c2 = function(props) {\n    const { data, dataIndex } = props;\n    const { cover, title } = data[dataIndex];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            height: 500,\n            userSelect: \"none\"\n        },\n        className: \"my-slide-component relative group\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n            style: {\n                height: \"100%\",\n                width: \"100%\",\n                objectFit: \"cover\",\n                borderRadius: 10,\n                background: \"white\"\n            },\n            draggable: false,\n            src: cover\n        }, void 0, false, {\n            fileName: \"/Users/dhavalshah/Documents/dhaval/personal/first-next-js-app/pages/projects.tsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dhavalshah/Documents/dhaval/personal/first-next-js-app/pages/projects.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n});\n_c3 = Card;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c1, \"Projects\");\n$RefreshReg$(_c2, \"Card$React.memo\");\n$RefreshReg$(_c3, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ2lEO0FBRVY7QUFDSDtBQUNWO0FBRTFCLE1BQU1JLFVBQVVILHlEQUFNQSxDQUFDSSxHQUFHO0tBQXBCRDtBQVNTLFNBQVNFO0lBQ3RCLHFCQUNFLDhEQUFDRjtRQUFRRyxXQUFVOzswQkFDakIsOERBQUNGO2dCQUFJRSxXQUFVOzBCQUFzRDs7Ozs7OzBCQUdyRSw4REFBQ0Y7Z0JBQUlFLFdBQVU7MEJBQ1pQLDBEQUFRQSxDQUFDUSxHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3RCLDhEQUFDTDt3QkFDQ0UsV0FBV0wsaURBQVVBLENBQ25CLHdFQUNBOzRCQUNFLFlBQVlRLFFBQVEsTUFBTTs0QkFDMUIsb0JBQW9CQSxRQUFRLE1BQU07d0JBQ3BDO2tDQUlGLDRFQUFDTDtzQ0FDQyw0RUFBQ0E7Z0NBQUlFLFdBQVU7MENBQWNFLFFBQVFFLEtBQUs7Ozs7Ozs7Ozs7O3VCQUh2Q0YsUUFBUUUsS0FBSzs7Ozs7Ozs7Ozs7Ozs7OztBQVU5QjtNQTFCd0JMO0FBNEJqQixNQUFNTSxxQkFBT1QsaURBQVUsT0FBQyxTQUFVVyxLQUFVO0lBQ2pELE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUUsR0FBR0Y7SUFDNUIsTUFBTSxFQUFFRyxLQUFLLEVBQUVOLEtBQUssRUFBRSxHQUFHSSxJQUFJLENBQUNDLFVBQVU7SUFDeEMscUJBQ0UsOERBQUNYO1FBQ0NhLE9BQU87WUFDTEMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLFlBQVk7UUFDZDtRQUNBZCxXQUFVO2tCQUVWLDRFQUFDZTtZQUNDSixPQUFPO2dCQUNMRSxRQUFRO2dCQUNSRCxPQUFPO2dCQUNQSSxXQUFXO2dCQUNYQyxjQUFjO2dCQUNkQyxZQUFZO1lBQ2Q7WUFDQUMsV0FBVztZQUNYQyxLQUFLVjs7Ozs7Ozs7Ozs7QUFTYixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2plY3RzLnRzeD82MzUzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgUFJPSkVDVFMgfSBmcm9tIFwiQC9hcHAvY29uc3RzL1BST0pFQ1RTXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgLyogYm9yZGVyOiA1cHggc29saWQgIzRjNTU2NDsgKi9cbiAgLyogLmxlZnQtc2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC44KSwgcmdiYSgwLCAwLCAwLCAwLjgpKSxcbiAgICAgIHVybChcIi9kMS5qcGdcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG4gICAgcGFkZGluZzogNHB4O1xuICB9ICovXG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cygpIHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBwLTI0IHBiLTE2IGJnLVsjMDAwXSByZWxhdGl2ZSBtYWluLXBhZ2VcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTV4bCBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtY2VudGVyXCI+XG4gICAgICAgIFByb2plY3RzXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdHMtbGlzdCBmbGV4IGZsZXgtY29sIGdhcC04IG10LTEyXCI+XG4gICAgICAgIHtQUk9KRUNUUy5tYXAoKHByb2plY3QsIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgIFwicHJvamVjdC1jYXJkIGJvcmRlciBib3JkZXItc29saWQgYm9yZGVyLWdyYXktNDAwIHAtNCByb3VuZGVkLWxnIGZsZXhcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiZmxleC1yb3dcIjogaW5kZXggJSAyID09PSAwLFxuICAgICAgICAgICAgICAgIFwiZmxleC1yb3ctcmV2ZXJzZVwiOiBpbmRleCAlIDIgIT09IDAsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBrZXk9e3Byb2plY3QudGl0bGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e3Byb2plY3QudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBDYXJkID0gUmVhY3QubWVtbyhmdW5jdGlvbiAocHJvcHM6IGFueSkge1xuICBjb25zdCB7IGRhdGEsIGRhdGFJbmRleCB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgY292ZXIsIHRpdGxlIH0gPSBkYXRhW2RhdGFJbmRleF07XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgICAgdXNlclNlbGVjdDogXCJub25lXCIsXG4gICAgICB9fVxuICAgICAgY2xhc3NOYW1lPVwibXktc2xpZGUtY29tcG9uZW50IHJlbGF0aXZlIGdyb3VwXCJcbiAgICA+XG4gICAgICA8aW1nXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXG4gICAgICAgIH19XG4gICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XG4gICAgICAgIHNyYz17Y292ZXJ9XG4gICAgICAvPlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgbS1hdXRvIHctZnVsbCBoLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLVtyZ2JhKDAsMCwwLDAuNyldIHctZnVsbCByb3VuZGVkLWxnIG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTV4bCBmb250LW1lZGl1bVwiPnt0aXRsZX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59KTtcbiJdLCJuYW1lcyI6WyJQUk9KRUNUUyIsInN0eWxlZCIsImNsYXNzbmFtZXMiLCJSZWFjdCIsIldyYXBwZXIiLCJkaXYiLCJQcm9qZWN0cyIsImNsYXNzTmFtZSIsIm1hcCIsInByb2plY3QiLCJpbmRleCIsInRpdGxlIiwiQ2FyZCIsIm1lbW8iLCJwcm9wcyIsImRhdGEiLCJkYXRhSW5kZXgiLCJjb3ZlciIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJ1c2VyU2VsZWN0IiwiaW1nIiwib2JqZWN0Rml0IiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZCIsImRyYWdnYWJsZSIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects.tsx\n"));

/***/ })

});