exports.id = 932;
exports.ids = [932];
exports.modules = {

/***/ 8837:
/***/ ((module) => {

// Exports
module.exports = {
	"PopUp": "UserLoginButton_PopUp__462wE",
	"PopUpButtons": "UserLoginButton_PopUpButtons__LwNO_",
	"CloseButton": "UserLoginButton_CloseButton__LKEM0",
	"PopUpContainer": "UserLoginButton_PopUpContainer__46PuP",
	"blur": "UserLoginButton_blur__08D08",
	"UserInfo": "UserLoginButton_UserInfo__QOD3j",
	"Button": "UserLoginButton_Button__E3Dq8",
	"overflow": "UserLoginButton_overflow__OBlEv",
	"UserAndLoginButton": "UserLoginButton_UserAndLoginButton__VXUEq"
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

/***/ 9932:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLoginButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(830);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5856);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_go__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8547);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_gr__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8147);
/* harmony import */ var _ScssLogin_UserLoginButton_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8837);
/* harmony import */ var _ScssLogin_UserLoginButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ScssLogin_UserLoginButton_module_scss__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _services_firebase__WEBPACK_IMPORTED_MODULE_7__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _services_firebase__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









// TODO Nome do arquivo "_userInfo.tsx"
function UserLoginButton() {
    const [isLoged, setIsLoged] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showPopUp, setShowPopUp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const popupRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [sendEmailVerification] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useSendEmailVerification)(_services_firebase__WEBPACK_IMPORTED_MODULE_7__/* .auth */ .I);
    const [signOut] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useSignOut)(_services_firebase__WEBPACK_IMPORTED_MODULE_7__/* .auth */ .I);
    const tooglePopUp = ()=>{
        setShowPopUp(!showPopUp);
        console.log(showPopUp);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(_services_firebase__WEBPACK_IMPORTED_MODULE_7__/* .auth */ .I, (data)=>{
            if (data != null) {
                setIsLoged(true);
            }
        });
        function handleClickOutside(event) {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setShowPopUp(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("scroll", handleClickOutside);
        return ()=>{
            unsubscribe();
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("scroll", handleClickOutside);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_ScssLogin_UserLoginButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default().UserAndLoginButton),
                children: [
                    isLoged && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                onClick: tooglePopUp,
                                className: (_ScssLogin_UserLoginButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default().Button),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaUserAlt, {}),
                                    _services_firebase__WEBPACK_IMPORTED_MODULE_7__/* .auth.currentUser */ .I.currentUser?.displayName
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: _services_firebase__WEBPACK_IMPORTED_MODULE_7__/* .auth.currentUser */ .I.currentUser?.emailVerified ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Teste Verificado"
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: async ()=>{
                                            const success = await sendEmailVerification();
                                            if (success) {
                                                alert("E-mail enviado");
                                            }
                                        },
                                        className: (_ScssLogin_UserLoginButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default().Button),
                                        children: "Verificar E-mail"
                                    })
                                })
                            })
                        ]
                    }),
                    !isLoged && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "/login",
                        className: (_ScssLogin_UserLoginButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default().Button),
                        children: "Login"
                    })
                ]
            }),
            isLoged && showPopUp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_ScssLogin_UserLoginButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default().PopUpContainer)} ${(_ScssLogin_UserLoginButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default().blur)}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_ScssLogin_UserLoginButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default().PopUp),
                    ref: popupRef,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_ScssLogin_UserLoginButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default().UserInfo),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: (_ScssLogin_UserLoginButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default().overflow),
                                    children: [
                                        "Usu\xe1rio: ",
                                        _services_firebase__WEBPACK_IMPORTED_MODULE_7__/* .auth.currentUser */ .I.currentUser?.displayName
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: `${(_ScssLogin_UserLoginButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default().email)} ${(_ScssLogin_UserLoginButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default().overflow)}`,
                                    children: [
                                        "E-mail: ",
                                        _services_firebase__WEBPACK_IMPORTED_MODULE_7__/* .auth.currentUser */ .I.currentUser?.email
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_ScssLogin_UserLoginButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default().PopUpButtons),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    onClick: async ()=>{
                                        const sucess = await signOut();
                                        if (sucess) {
                                            window.location.reload();
                                        }
                                    },
                                    className: (_ScssLogin_UserLoginButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default().Button),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_5__.GoSignOut, {}),
                                        " Desconectar"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: (_ScssLogin_UserLoginButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default().Button),
                                    children: "Trocar a senha e/ou E-mail"
                                }),
                                " "
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: tooglePopUp,
                            className: `${(_ScssLogin_UserLoginButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default().CloseButton)} ${(_ScssLogin_UserLoginButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default().Button)}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_6__.GrClose, {})
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;