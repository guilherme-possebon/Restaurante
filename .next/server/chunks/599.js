exports.id = 599;
exports.ids = [599];
exports.modules = {

/***/ 353:
/***/ ((module) => {

// Exports
module.exports = {
	"BrandButtons": "Buttons_BrandButtons__9IYGy"
};


/***/ }),

/***/ 8147:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ auth)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const firebaseConfig = {
    apiKey: "AIzaSyCsCyJr-4cS7WKN5MGcAYjZOxhjjemxfug",
    authDomain: "restaurante-60286.firebaseapp.com",
    projectId: "restaurante-60286",
    storageBucket: "restaurante-60286.appspot.com",
    messagingSenderId: "1037786042983",
    appId: "1:1037786042983:web:4390770d2a6a82bd5b3ac2",
    measurementId: "G-GBDTQ2RNWD"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8405:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GhButton": () => (/* binding */ GhButton),
/* harmony export */   "default": () => (/* binding */ GoButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8147);
/* harmony import */ var _ScssLogin_Buttons_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(353);
/* harmony import */ var _ScssLogin_Buttons_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ScssLogin_Buttons_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_firebase__WEBPACK_IMPORTED_MODULE_3__]);
_services_firebase__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






// TODO Nome do arquivo "_buttons.tsx"
function GoButton() {
    const [signInWithGoogle, user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useSignInWithGoogle)(_services_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    if (user != undefined) {
        setTimeout(()=>{
            return router.push("/");
        }, 100);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_ScssLogin_Buttons_module_scss__WEBPACK_IMPORTED_MODULE_5___default().BrandButtons),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            className: (_ScssLogin_Buttons_module_scss__WEBPACK_IMPORTED_MODULE_5___default().Button),
            onClick: ()=>signInWithGoogle(),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaGoogle, {}),
                " Entrar com Google"
            ]
        })
    });
}
function GhButton() {
    const [signInWithGithub, user] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useSignInWithGithub)(_services_firebase__WEBPACK_IMPORTED_MODULE_3__/* .auth */ .I);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    if (user != undefined) {
        setTimeout(()=>{
            return router.push("/");
        }, 100);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_ScssLogin_Buttons_module_scss__WEBPACK_IMPORTED_MODULE_5___default().BrandButtons),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            className: (_ScssLogin_Buttons_module_scss__WEBPACK_IMPORTED_MODULE_5___default().Button),
            onClick: ()=>signInWithGithub(),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaGithub, {}),
                " Entrar com GitHub"
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;