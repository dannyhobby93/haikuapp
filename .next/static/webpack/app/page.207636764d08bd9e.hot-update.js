"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/RegisterForm.jsx":
/*!*************************************!*\
  !*** ./components/RegisterForm.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RegisterForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/index.js\");\n/* harmony import */ var _actions_userController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/userController */ \"(app-pages-browser)/./actions/userController.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction RegisterForm() {\n    _s();\n    const [formState, setFormState] = (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.useFormState)();\n    const [formStatus, setFormStatus] = (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.useFormStatus)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        action: _actions_userController__WEBPACK_IMPORTED_MODULE_2__.register,\n        className: \"max-w-xs mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    autoComplete: \"off\",\n                    type: \"text\",\n                    name: \"username\",\n                    placeholder: \"Username\",\n                    className: \"input input-bordered w-full max-w-xs\"\n                }, void 0, false, {\n                    fileName: \"/Users/danny/Development/Projects/haikuapp/components/RegisterForm.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/danny/Development/Projects/haikuapp/components/RegisterForm.jsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    autoComplete: \"off\",\n                    type: \"password\",\n                    name: \"password\",\n                    placeholder: \"Password\",\n                    className: \"input input-bordered w-full max-w-xs\"\n                }, void 0, false, {\n                    fileName: \"/Users/danny/Development/Projects/haikuapp/components/RegisterForm.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/danny/Development/Projects/haikuapp/components/RegisterForm.jsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn btn-primary w-full\",\n                children: \"Create Account\"\n            }, void 0, false, {\n                fileName: \"/Users/danny/Development/Projects/haikuapp/components/RegisterForm.jsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/danny/Development/Projects/haikuapp/components/RegisterForm.jsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n_s(RegisterForm, \"QWpCDU5Y8qFj1b1ad1o4uINvt6Y=\", false, function() {\n    return [\n        react_dom__WEBPACK_IMPORTED_MODULE_1__.useFormState,\n        react_dom__WEBPACK_IMPORTED_MODULE_1__.useFormStatus\n    ];\n});\n_c = RegisterForm;\nvar _c;\n$RefreshReg$(_c, \"RegisterForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUmVnaXN0ZXJGb3JtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFd0Q7QUFFSDtBQUV0QyxTQUFTRzs7SUFDcEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLHVEQUFZQTtJQUM5QyxNQUFNLENBQUNNLFlBQVlDLGNBQWMsR0FBR04sd0RBQWFBO0lBRWpELHFCQUNJLDhEQUFDTztRQUFLQyxRQUFRUCw2REFBUUE7UUFBRVEsV0FBVTs7MEJBQzlCLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDWCw0RUFBQ0U7b0JBQ0dDLGNBQWE7b0JBQ2JDLE1BQUs7b0JBQ0xDLE1BQUs7b0JBQ0xDLGFBQVk7b0JBQ1pOLFdBQVU7Ozs7Ozs7Ozs7OzBCQUdsQiw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ1gsNEVBQUNFO29CQUNHQyxjQUFhO29CQUNiQyxNQUFLO29CQUNMQyxNQUFLO29CQUNMQyxhQUFZO29CQUNaTixXQUFVOzs7Ozs7Ozs7OzswQkFHbEIsOERBQUNPO2dCQUFPUCxXQUFVOzBCQUF5Qjs7Ozs7Ozs7Ozs7O0FBR3ZEO0dBM0J3QlA7O1FBQ2NILG1EQUFZQTtRQUNWQyxvREFBYUE7OztLQUY3QkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWdpc3RlckZvcm0uanN4P2E4ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUZvcm1TdGF0ZSwgdXNlRm9ybVN0YXR1cyB9IGZyb20gXCJyZWFjdC1kb21cIjtcblxuaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tIFwiLi4vYWN0aW9ucy91c2VyQ29udHJvbGxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RlckZvcm0oKSB7XG4gICAgY29uc3QgW2Zvcm1TdGF0ZSwgc2V0Rm9ybVN0YXRlXSA9IHVzZUZvcm1TdGF0ZSgpO1xuICAgIGNvbnN0IFtmb3JtU3RhdHVzLCBzZXRGb3JtU3RhdHVzXSA9IHVzZUZvcm1TdGF0dXMoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIGFjdGlvbj17cmVnaXN0ZXJ9IGNsYXNzTmFtZT1cIm1heC13LXhzIG14LWF1dG9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpbnB1dC1ib3JkZXJlZCB3LWZ1bGwgbWF4LXcteHNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaW5wdXQtYm9yZGVyZWQgdy1mdWxsIG1heC13LXhzXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSB3LWZ1bGxcIj5DcmVhdGUgQWNjb3VudDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VGb3JtU3RhdGUiLCJ1c2VGb3JtU3RhdHVzIiwicmVnaXN0ZXIiLCJSZWdpc3RlckZvcm0iLCJmb3JtU3RhdGUiLCJzZXRGb3JtU3RhdGUiLCJmb3JtU3RhdHVzIiwic2V0Rm9ybVN0YXR1cyIsImZvcm0iLCJhY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJpbnB1dCIsImF1dG9Db21wbGV0ZSIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RegisterForm.jsx\n"));

/***/ })

});