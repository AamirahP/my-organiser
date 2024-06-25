"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/my-library/page",{

/***/ "(app-pages-browser)/./src/app/components/searchBook.js":
/*!******************************************!*\
  !*** ./src/app/components/searchBook.js ***!
  \******************************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./src/node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst SearchBooks = (param)=>{\n    let { addToCollection } = param;\n    _s();\n    const [isbn, setIsbn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [bookInfo, setBookInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleChange = (e)=>{\n        setIsbn(e.target.value);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post();\n            setBookInfo(response.data);\n            setError(null);\n        } catch (error) {\n            console.error(\"Error fetching book:\", error);\n            setError(\"Book not found. Please check the ISBN and try again.\");\n            setBookInfo(null);\n        }\n    };\n    const handleAddToCollection = (collection)=>{\n        addToCollection(bookInfo, collection);\n        setBookInfo(null);\n        setIsbn(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"search-books\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Enter ISBN:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: isbn,\n                                onChange: handleChange,\n                                placeholder: \"Enter ISBN\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: error\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                lineNumber: 51,\n                columnNumber: 17\n            }, undefined),\n            bookInfo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"book-info\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: bookInfo.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Author: \",\n                            bookInfo.author\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Description: \",\n                            bookInfo.summary\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"add-to-collections\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleAddToCollection(\"read\"),\n                                children: \"Add to Read\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleAddToCollection(\"currently-reading\"),\n                                children: \"Add to Currently Reading\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleAddToCollection(\"want-to-read\"),\n                                children: \"Add to Want to Read\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchBooks, \"PAhTrvxrbwSIK86xPKEk2zApqrI=\");\n_c = SearchBooks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBooks);\nvar _c;\n$RefreshReg$(_c, \"SearchBooks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zZWFyY2hCb29rLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUN3QztBQUNkO0FBRTFCLE1BQU1HLGNBQWM7UUFBQyxFQUFFQyxlQUFlLEVBQUU7O0lBQ3RDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1VLGVBQWUsQ0FBQ0M7UUFDcEJOLFFBQVFNLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUN4QjtJQUVBLE1BQU1DLGVBQWUsT0FBT0g7UUFDMUJBLEVBQUVJLGNBQWM7UUFHaEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTWYsNkNBQUtBLENBQUNnQixJQUFJO1lBRWpDVixZQUFZUyxTQUFTRSxJQUFJO1lBQ3pCVCxTQUFTO1FBQ1gsRUFBRSxPQUFPRCxPQUFPO1lBQ2RXLFFBQVFYLEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3RDQyxTQUFTO1lBQ1RGLFlBQVk7UUFDZDtJQUNGO0lBRUEsTUFBTWEsd0JBQXdCLENBQUNDO1FBQzdCbEIsZ0JBQWdCRyxVQUFVZTtRQUMxQmQsWUFBWTtRQUNaRixRQUFRO0lBQ1Y7SUFFQSxxQkFDRSw4REFBQ2lCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBS0MsVUFBVVg7O2tDQUNkLDhEQUFDWTs7NEJBQU07MENBRUwsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMZixPQUFPVDtnQ0FDUHlCLFVBQVVuQjtnQ0FDVm9CLGFBQVk7Z0NBQ1pDLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FHWiw4REFBQ0M7d0JBQU9KLE1BQUs7a0NBQVM7Ozs7Ozs7Ozs7OztZQUV2QnBCLHVCQUFTLDhEQUFDeUI7MEJBQUd6Qjs7Ozs7O1lBQ2JGLDBCQUNDLDhEQUFDZ0I7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDVztrQ0FBSTVCLFNBQVM2QixLQUFLOzs7Ozs7a0NBQ25CLDhEQUFDRjs7NEJBQUU7NEJBQVMzQixTQUFTOEIsTUFBTTs7Ozs7OztrQ0FDM0IsOERBQUNIOzs0QkFBRTs0QkFBYzNCLFNBQVMrQixPQUFPOzs7Ozs7O2tDQUNqQyw4REFBQ2Y7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDUztnQ0FBT00sU0FBUyxJQUFNbEIsc0JBQXNCOzBDQUFTOzs7Ozs7MENBR3RELDhEQUFDWTtnQ0FBT00sU0FBUyxJQUFNbEIsc0JBQXNCOzBDQUFzQjs7Ozs7OzBDQUduRSw4REFBQ1k7Z0NBQU9NLFNBQVMsSUFBTWxCLHNCQUFzQjswQ0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVExRTtHQW5FTWxCO0tBQUFBO0FBcUVOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9zZWFyY2hCb29rLmpzP2ZhYmUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBTZWFyY2hCb29rcyA9ICh7IGFkZFRvQ29sbGVjdGlvbiB9KSA9PiB7XHJcbiAgY29uc3QgW2lzYm4sIHNldElzYm5dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Jvb2tJbmZvLCBzZXRCb29rSW5mb10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0SXNibihlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgpO1xyXG5cclxuICAgICAgc2V0Qm9va0luZm8ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIHNldEVycm9yKG51bGwpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGJvb2s6XCIsIGVycm9yKTtcclxuICAgICAgc2V0RXJyb3IoXCJCb29rIG5vdCBmb3VuZC4gUGxlYXNlIGNoZWNrIHRoZSBJU0JOIGFuZCB0cnkgYWdhaW4uXCIpO1xyXG4gICAgICBzZXRCb29rSW5mbyhudWxsKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRUb0NvbGxlY3Rpb24gPSAoY29sbGVjdGlvbikgPT4ge1xyXG4gICAgYWRkVG9Db2xsZWN0aW9uKGJvb2tJbmZvLCBjb2xsZWN0aW9uKTtcclxuICAgIHNldEJvb2tJbmZvKG51bGwpO1xyXG4gICAgc2V0SXNibihcIlwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYm9va3NcIj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgRW50ZXIgSVNCTjpcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpc2JufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIElTQk5cIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIHtlcnJvciAmJiA8cD57ZXJyb3J9PC9wPn1cclxuICAgICAge2Jvb2tJbmZvICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2staW5mb1wiPlxyXG4gICAgICAgICAgPGgzPntib29rSW5mby50aXRsZX08L2gzPlxyXG4gICAgICAgICAgPHA+QXV0aG9yOiB7Ym9va0luZm8uYXV0aG9yfTwvcD5cclxuICAgICAgICAgIDxwPkRlc2NyaXB0aW9uOiB7Ym9va0luZm8uc3VtbWFyeX08L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC10by1jb2xsZWN0aW9uc1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZFRvQ29sbGVjdGlvbihcInJlYWRcIil9PlxyXG4gICAgICAgICAgICAgIEFkZCB0byBSZWFkXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZFRvQ29sbGVjdGlvbihcImN1cnJlbnRseS1yZWFkaW5nXCIpfT5cclxuICAgICAgICAgICAgICBBZGQgdG8gQ3VycmVudGx5IFJlYWRpbmdcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQWRkVG9Db2xsZWN0aW9uKFwid2FudC10by1yZWFkXCIpfT5cclxuICAgICAgICAgICAgICBBZGQgdG8gV2FudCB0byBSZWFkXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQm9va3M7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJTZWFyY2hCb29rcyIsImFkZFRvQ29sbGVjdGlvbiIsImlzYm4iLCJzZXRJc2JuIiwiYm9va0luZm8iLCJzZXRCb29rSW5mbyIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwicG9zdCIsImRhdGEiLCJjb25zb2xlIiwiaGFuZGxlQWRkVG9Db2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiYnV0dG9uIiwicCIsImgzIiwidGl0bGUiLCJhdXRob3IiLCJzdW1tYXJ5Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/searchBook.js\n"));

/***/ })

});