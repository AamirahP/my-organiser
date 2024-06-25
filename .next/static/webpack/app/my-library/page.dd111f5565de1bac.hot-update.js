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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./src/node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst SearchBooks = (param)=>{\n    let { addToCollection } = param;\n    _s();\n    const [isbn, setIsbn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [bookInfo, setBookInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleChange = (e)=>{\n        setIsbn(e.target.value);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:8080/isbn/search\", {\n                isbn\n            });\n            setBookInfo(response.data);\n            setError(null);\n        } catch (error) {\n            console.error(\"Error fetching book:\", error);\n            setError(\"Book not found. Please check the ISBN and try again.\");\n            setBookInfo(null);\n        }\n    };\n    const addBook = async (formData)=>{\n        console.log(\"Adding book to collection:\", collection, formData);\n        try {\n            const response = await fetch(\"http://localhost:8080/\".concat(collection), {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(formData)\n            });\n            const newBook = await response.json();\n            if (collection === \"books\") {\n                setReadBooks([\n                    ...readBooks,\n                    newBook\n                ]);\n            } else if (collection === \"currently-reading\") {\n                setCurrentlyReading([\n                    ...currentlyReading,\n                    newBook\n                ]);\n            } else if (collection === \"want-to-read\") {\n                setWantToReadBooks([\n                    ...wantToReadBooks,\n                    newBook\n                ]);\n            }\n        } catch (error) {\n            console.error(\"Error adding book:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"search-books\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Enter ISBN:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: isbn,\n                                onChange: handleChange,\n                                placeholder: \"Enter ISBN\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: error\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                lineNumber: 69,\n                columnNumber: 17\n            }, undefined),\n            bookInfo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"book-info\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: bookInfo.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Author: \",\n                            bookInfo.authors\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"add-to-collections\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>addBook(\"books\"),\n                                children: \"Add to Read\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>addBook(\"currently-reading\"),\n                                children: \"Add to Currently Reading\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>addBook(\"want-to-read\"),\n                                children: \"Add to Want to Read\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\aamir\\\\Documents\\\\TSI\\\\my-organiser\\\\src\\\\app\\\\components\\\\searchBook.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchBooks, \"PAhTrvxrbwSIK86xPKEk2zApqrI=\");\n_c = SearchBooks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBooks);\nvar _c;\n$RefreshReg$(_c, \"SearchBooks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9zZWFyY2hCb29rLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUN3QztBQUNkO0FBRTFCLE1BQU1HLGNBQWM7UUFBQyxFQUFFQyxlQUFlLEVBQUU7O0lBQ3RDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1VLGVBQWUsQ0FBQ0M7UUFDcEJOLFFBQVFNLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUN4QjtJQUVBLE1BQU1DLGVBQWUsT0FBT0g7UUFDMUJBLEVBQUVJLGNBQWM7UUFFaEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTWYsNkNBQUtBLENBQUNnQixJQUFJLENBQUUscUNBQW9DO2dCQUFFYjtZQUFLO1lBRTlFRyxZQUFZUyxTQUFTRSxJQUFJO1lBQ3pCVCxTQUFTO1FBQ1gsRUFBRSxPQUFPRCxPQUFPO1lBQ2RXLFFBQVFYLEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3RDQyxTQUFTO1lBQ1RGLFlBQVk7UUFDZDtJQUNGO0lBRUEsTUFBTWEsVUFBVSxPQUFPQztRQUNyQkYsUUFBUUcsR0FBRyxDQUFDLDhCQUE4QkMsWUFBWUY7UUFDdEQsSUFBSTtZQUNGLE1BQU1MLFdBQVcsTUFBTVEsTUFBTSx5QkFBb0MsT0FBWEQsYUFBYztnQkFDbEVFLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDUjtZQUN2QjtZQUVBLE1BQU1TLFVBQVUsTUFBTWQsU0FBU2UsSUFBSTtZQUVuQyxJQUFJUixlQUFlLFNBQVM7Z0JBQzFCUyxhQUFhO3VCQUFJQztvQkFBV0g7aUJBQVE7WUFDdEMsT0FBTyxJQUFJUCxlQUFlLHFCQUFxQjtnQkFDN0NXLG9CQUFvQjt1QkFBSUM7b0JBQWtCTDtpQkFBUTtZQUNwRCxPQUFPLElBQUlQLGVBQWUsZ0JBQWdCO2dCQUN4Q2EsbUJBQW1CO3VCQUFJQztvQkFBaUJQO2lCQUFRO1lBQ2xEO1FBQ0YsRUFBRSxPQUFPdEIsT0FBTztZQUNkVyxRQUFRWCxLQUFLLENBQUMsc0JBQXNCQTtRQUN0QztJQUNGO0lBRUEscUJBQ0UsOERBQUM4QjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUtDLFVBQVUzQjs7a0NBQ2QsOERBQUM0Qjs7NEJBQU07MENBRUwsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNML0IsT0FBT1Q7Z0NBQ1B5QyxVQUFVbkM7Z0NBQ1ZvQyxhQUFZO2dDQUNaQyxRQUFROzs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNDO3dCQUFPSixNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7WUFFdkJwQyx1QkFBUyw4REFBQ3lDOzBCQUFHekM7Ozs7OztZQUNiRiwwQkFDQyw4REFBQ2dDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1c7a0NBQUk1QyxTQUFTNkMsS0FBSzs7Ozs7O2tDQUNuQiw4REFBQ0Y7OzRCQUFFOzRCQUFTM0MsU0FBUzhDLE9BQU87Ozs7Ozs7a0NBQzVCLDhEQUFDZDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNTO2dDQUFPSyxTQUFTLElBQU1qQyxRQUFROzBDQUFVOzs7Ozs7MENBR3pDLDhEQUFDNEI7Z0NBQU9LLFNBQVMsSUFBTWpDLFFBQVE7MENBQXNCOzs7Ozs7MENBR3JELDhEQUFDNEI7Z0NBQU9LLFNBQVMsSUFBTWpDLFFBQVE7MENBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRNUQ7R0FwRk1sQjtLQUFBQTtBQXNGTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoQm9vay5qcz9mYWJlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgU2VhcmNoQm9va3MgPSAoeyBhZGRUb0NvbGxlY3Rpb24gfSkgPT4ge1xyXG4gIGNvbnN0IFtpc2JuLCBzZXRJc2JuXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtib29rSW5mbywgc2V0Qm9va0luZm9dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldElzYm4oZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGBodHRwOi8vbG9jYWxob3N0OjgwODAvaXNibi9zZWFyY2hgLCB7IGlzYm4gfSk7XHJcblxyXG4gICAgICBzZXRCb29rSW5mbyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgYm9vazpcIiwgZXJyb3IpO1xyXG4gICAgICBzZXRFcnJvcihcIkJvb2sgbm90IGZvdW5kLiBQbGVhc2UgY2hlY2sgdGhlIElTQk4gYW5kIHRyeSBhZ2Fpbi5cIik7XHJcbiAgICAgIHNldEJvb2tJbmZvKG51bGwpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZEJvb2sgPSBhc3luYyAoZm9ybURhdGEpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiQWRkaW5nIGJvb2sgdG8gY29sbGVjdGlvbjpcIiwgY29sbGVjdGlvbiwgZm9ybURhdGEpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwLyR7Y29sbGVjdGlvbn1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBuZXdCb29rID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgaWYgKGNvbGxlY3Rpb24gPT09IFwiYm9va3NcIikge1xyXG4gICAgICAgIHNldFJlYWRCb29rcyhbLi4ucmVhZEJvb2tzLCBuZXdCb29rXSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoY29sbGVjdGlvbiA9PT0gXCJjdXJyZW50bHktcmVhZGluZ1wiKSB7XHJcbiAgICAgICAgc2V0Q3VycmVudGx5UmVhZGluZyhbLi4uY3VycmVudGx5UmVhZGluZywgbmV3Qm9va10pO1xyXG4gICAgICB9IGVsc2UgaWYgKGNvbGxlY3Rpb24gPT09IFwid2FudC10by1yZWFkXCIpIHtcclxuICAgICAgICBzZXRXYW50VG9SZWFkQm9va3MoWy4uLndhbnRUb1JlYWRCb29rcywgbmV3Qm9va10pO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIGJvb2s6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYm9va3NcIj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgRW50ZXIgSVNCTjpcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpc2JufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIElTQk5cIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIHtlcnJvciAmJiA8cD57ZXJyb3J9PC9wPn1cclxuICAgICAge2Jvb2tJbmZvICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2staW5mb1wiPlxyXG4gICAgICAgICAgPGgzPntib29rSW5mby50aXRsZX08L2gzPlxyXG4gICAgICAgICAgPHA+QXV0aG9yOiB7Ym9va0luZm8uYXV0aG9yc308L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC10by1jb2xsZWN0aW9uc1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFkZEJvb2soXCJib29rc1wiKX0+XHJcbiAgICAgICAgICAgICAgQWRkIHRvIFJlYWRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYWRkQm9vayhcImN1cnJlbnRseS1yZWFkaW5nXCIpfT5cclxuICAgICAgICAgICAgICBBZGQgdG8gQ3VycmVudGx5IFJlYWRpbmdcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYWRkQm9vayhcIndhbnQtdG8tcmVhZFwiKX0+XHJcbiAgICAgICAgICAgICAgQWRkIHRvIFdhbnQgdG8gUmVhZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJvb2tzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiU2VhcmNoQm9va3MiLCJhZGRUb0NvbGxlY3Rpb24iLCJpc2JuIiwic2V0SXNibiIsImJvb2tJbmZvIiwic2V0Qm9va0luZm8iLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsInBvc3QiLCJkYXRhIiwiY29uc29sZSIsImFkZEJvb2siLCJmb3JtRGF0YSIsImxvZyIsImNvbGxlY3Rpb24iLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5ld0Jvb2siLCJqc29uIiwic2V0UmVhZEJvb2tzIiwicmVhZEJvb2tzIiwic2V0Q3VycmVudGx5UmVhZGluZyIsImN1cnJlbnRseVJlYWRpbmciLCJzZXRXYW50VG9SZWFkQm9va3MiLCJ3YW50VG9SZWFkQm9va3MiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImJ1dHRvbiIsInAiLCJoMyIsInRpdGxlIiwiYXV0aG9ycyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/searchBook.js\n"));

/***/ })

});