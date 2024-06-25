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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./src/node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst SearchBooks = (param)=>{\n    let { addToCollection } = param;\n    _s();\n    const [isbn, setIsbn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [bookInfo, setBookInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleChange = (e)=>{\n        setIsbn(e.target.value);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:8080/isbn/search\", {\n                isbn\n            });\n            setBookInfo(response.data);\n            setError(null);\n        } catch (error) {\n            console.error(\"Error fetching book:\", error);\n            setError(\"Book not found. Please check the ISBN and try again.\");\n            setBookInfo(null);\n        }\n    };\n    const addBook = async (formData)=>{\n        console.log(\"Adding book to collection:\", collection, formData);\n        try {\n            const response = await fetch(\"http://localhost:8080/\".concat(collection), {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(formData)\n            });\n            const newBook = await response.json();\n            if (collection === \"books\") {\n                setReadBooks([\n                    ...readBooks,\n                    newBook\n                ]);\n            } else if (collection === \"currently-reading\") {\n                setCurrentlyReading([\n                    ...currentlyReading,\n                    newBook\n                ]);\n            } else if (collection === \"want-to-read\") {\n                setWantToReadBooks([\n                    ...wantToReadBooks,\n                    newBook\n                ]);\n            }\n        } catch (error) {\n            console.error(\"Error adding book:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"search-books\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Enter ISBN:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: isbn,\n                                onChange: handleChange,\n                                placeholder: \"Enter ISBN\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: error\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                lineNumber: 69,\n                columnNumber: 17\n            }, undefined),\n            bookInfo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"book-info\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: bookInfo.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Author: \",\n                            bookInfo.authors\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"add-to-collections\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>ad(\"read\"),\n                                children: \"Add to Read\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleAddToCollection(\"currently-reading\"),\n                                children: \"Add to Currently Reading\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleAddToCollection(\"want-to-read\"),\n                                children: \"Add to Want to Read\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchBooks, \"PAhTrvxrbwSIK86xPKEk2zApqrI=\");\n_c = SearchBooks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBooks);\nvar _c;\n$RefreshReg$(_c, \"SearchBooks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zZWFyY2hCb29rLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUN3QztBQUNkO0FBRTFCLE1BQU1HLGNBQWM7UUFBQyxFQUFFQyxlQUFlLEVBQUU7O0lBQ3RDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1VLGVBQWUsQ0FBQ0M7UUFDcEJOLFFBQVFNLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUN4QjtJQUVBLE1BQU1DLGVBQWUsT0FBT0g7UUFDMUJBLEVBQUVJLGNBQWM7UUFFaEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTWYsNkNBQUtBLENBQUNnQixJQUFJLENBQUUscUNBQW9DO2dCQUFFYjtZQUFLO1lBRTlFRyxZQUFZUyxTQUFTRSxJQUFJO1lBQ3pCVCxTQUFTO1FBQ1gsRUFBRSxPQUFPRCxPQUFPO1lBQ2RXLFFBQVFYLEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3RDQyxTQUFTO1lBQ1RGLFlBQVk7UUFDZDtJQUNGO0lBRUEsTUFBTWEsVUFBVSxPQUFPQztRQUNyQkYsUUFBUUcsR0FBRyxDQUFDLDhCQUE4QkMsWUFBWUY7UUFDdEQsSUFBSTtZQUNGLE1BQU1MLFdBQVcsTUFBTVEsTUFBTSx5QkFBb0MsT0FBWEQsYUFBYztnQkFDbEVFLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDUjtZQUN2QjtZQUVBLE1BQU1TLFVBQVUsTUFBTWQsU0FBU2UsSUFBSTtZQUVuQyxJQUFJUixlQUFlLFNBQVM7Z0JBQzFCUyxhQUFhO3VCQUFJQztvQkFBV0g7aUJBQVE7WUFDdEMsT0FBTyxJQUFJUCxlQUFlLHFCQUFxQjtnQkFDN0NXLG9CQUFvQjt1QkFBSUM7b0JBQWtCTDtpQkFBUTtZQUNwRCxPQUFPLElBQUlQLGVBQWUsZ0JBQWdCO2dCQUN4Q2EsbUJBQW1CO3VCQUFJQztvQkFBaUJQO2lCQUFRO1lBQ2xEO1FBQ0YsRUFBRSxPQUFPdEIsT0FBTztZQUNkVyxRQUFRWCxLQUFLLENBQUMsc0JBQXNCQTtRQUN0QztJQUNGO0lBRUEscUJBQ0UsOERBQUM4QjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUtDLFVBQVUzQjs7a0NBQ2QsOERBQUM0Qjs7NEJBQU07MENBRUwsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNML0IsT0FBT1Q7Z0NBQ1B5QyxVQUFVbkM7Z0NBQ1ZvQyxhQUFZO2dDQUNaQyxRQUFROzs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNDO3dCQUFPSixNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7WUFFdkJwQyx1QkFBUyw4REFBQ3lDOzBCQUFHekM7Ozs7OztZQUNiRiwwQkFDQyw4REFBQ2dDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1c7a0NBQUk1QyxTQUFTNkMsS0FBSzs7Ozs7O2tDQUNuQiw4REFBQ0Y7OzRCQUFFOzRCQUFTM0MsU0FBUzhDLE9BQU87Ozs7Ozs7a0NBQzVCLDhEQUFDZDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNTO2dDQUFPSyxTQUFTLElBQU1DLEdBQUc7MENBQVM7Ozs7OzswQ0FHbkMsOERBQUNOO2dDQUFPSyxTQUFTLElBQU1FLHNCQUFzQjswQ0FBc0I7Ozs7OzswQ0FHbkUsOERBQUNQO2dDQUFPSyxTQUFTLElBQU1FLHNCQUFzQjswQ0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVExRTtHQXBGTXJEO0tBQUFBO0FBc0ZOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9zZWFyY2hCb29rLmpzP2ZhYmUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBTZWFyY2hCb29rcyA9ICh7IGFkZFRvQ29sbGVjdGlvbiB9KSA9PiB7XHJcbiAgY29uc3QgW2lzYm4sIHNldElzYm5dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Jvb2tJbmZvLCBzZXRCb29rSW5mb10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0SXNibihlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9pc2JuL3NlYXJjaGAsIHsgaXNibiB9KTtcclxuXHJcbiAgICAgIHNldEJvb2tJbmZvKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICBzZXRFcnJvcihudWxsKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBib29rOlwiLCBlcnJvcik7XHJcbiAgICAgIHNldEVycm9yKFwiQm9vayBub3QgZm91bmQuIFBsZWFzZSBjaGVjayB0aGUgSVNCTiBhbmQgdHJ5IGFnYWluLlwiKTtcclxuICAgICAgc2V0Qm9va0luZm8obnVsbCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkQm9vayA9IGFzeW5jIChmb3JtRGF0YSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJBZGRpbmcgYm9vayB0byBjb2xsZWN0aW9uOlwiLCBjb2xsZWN0aW9uLCBmb3JtRGF0YSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODAvJHtjb2xsZWN0aW9ufWAsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IG5ld0Jvb2sgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICBpZiAoY29sbGVjdGlvbiA9PT0gXCJib29rc1wiKSB7XHJcbiAgICAgICAgc2V0UmVhZEJvb2tzKFsuLi5yZWFkQm9va3MsIG5ld0Jvb2tdKTtcclxuICAgICAgfSBlbHNlIGlmIChjb2xsZWN0aW9uID09PSBcImN1cnJlbnRseS1yZWFkaW5nXCIpIHtcclxuICAgICAgICBzZXRDdXJyZW50bHlSZWFkaW5nKFsuLi5jdXJyZW50bHlSZWFkaW5nLCBuZXdCb29rXSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoY29sbGVjdGlvbiA9PT0gXCJ3YW50LXRvLXJlYWRcIikge1xyXG4gICAgICAgIHNldFdhbnRUb1JlYWRCb29rcyhbLi4ud2FudFRvUmVhZEJvb2tzLCBuZXdCb29rXSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgYm9vazpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1ib29rc1wiPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICBFbnRlciBJU0JOOlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgdmFsdWU9e2lzYm59XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgSVNCTlwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAge2Vycm9yICYmIDxwPntlcnJvcn08L3A+fVxyXG4gICAgICB7Ym9va0luZm8gJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9vay1pbmZvXCI+XHJcbiAgICAgICAgICA8aDM+e2Jvb2tJbmZvLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICA8cD5BdXRob3I6IHtib29rSW5mby5hdXRob3JzfTwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLXRvLWNvbGxlY3Rpb25zXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYWQoXCJyZWFkXCIpfT5cclxuICAgICAgICAgICAgICBBZGQgdG8gUmVhZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRUb0NvbGxlY3Rpb24oXCJjdXJyZW50bHktcmVhZGluZ1wiKX0+XHJcbiAgICAgICAgICAgICAgQWRkIHRvIEN1cnJlbnRseSBSZWFkaW5nXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZFRvQ29sbGVjdGlvbihcIndhbnQtdG8tcmVhZFwiKX0+XHJcbiAgICAgICAgICAgICAgQWRkIHRvIFdhbnQgdG8gUmVhZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJvb2tzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiU2VhcmNoQm9va3MiLCJhZGRUb0NvbGxlY3Rpb24iLCJpc2JuIiwic2V0SXNibiIsImJvb2tJbmZvIiwic2V0Qm9va0luZm8iLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsInBvc3QiLCJkYXRhIiwiY29uc29sZSIsImFkZEJvb2siLCJmb3JtRGF0YSIsImxvZyIsImNvbGxlY3Rpb24iLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5ld0Jvb2siLCJqc29uIiwic2V0UmVhZEJvb2tzIiwicmVhZEJvb2tzIiwic2V0Q3VycmVudGx5UmVhZGluZyIsImN1cnJlbnRseVJlYWRpbmciLCJzZXRXYW50VG9SZWFkQm9va3MiLCJ3YW50VG9SZWFkQm9va3MiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImJ1dHRvbiIsInAiLCJoMyIsInRpdGxlIiwiYXV0aG9ycyIsIm9uQ2xpY2siLCJhZCIsImhhbmRsZUFkZFRvQ29sbGVjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/searchBook.js\n"));

/***/ })

});