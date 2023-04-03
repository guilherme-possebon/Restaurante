exports.id = 423;
exports.ids = [423];
exports.modules = {

/***/ 3770:
/***/ ((module) => {

// Exports
module.exports = {
	"HrRemovivel": "Main_HrRemovivel__HYSTb",
	"Header": "Main_Header__txpIt",
	"HeaderContainer": "Main_HeaderContainer__Q4BEt",
	"list": "Main_list__3Kh_W",
	"itens": "Main_itens__Zyoh_",
	"Container": "Main_Container__gRgl0",
	"ContainerListChildrenAll": "Main_ContainerListChildrenAll__iokkf",
	"ContainerImgAll": "Main_ContainerImgAll__nBHoC",
	"DivLogo": "Main_DivLogo__FGmVZ"
};


/***/ }),

/***/ 9224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Logo3.e11ae5a1.png","height":67,"width":609,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAJElEQVR4nGOMtZDZwcDAsBOIhRkZGP7+Z2AQANJcQPovkH4HAG5MBzo2VXB6AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":1});

/***/ }),

/***/ 5423:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_Logo3_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9224);
/* harmony import */ var _LayoutLogin_userLoginButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9932);
/* harmony import */ var _ScssMain_Main_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3770);
/* harmony import */ var _ScssMain_Main_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ScssMain_Main_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LayoutLogin_userLoginButton__WEBPACK_IMPORTED_MODULE_3__]);
_LayoutLogin_userLoginButton__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Header() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: (_ScssMain_Main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().Header),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_ScssMain_Main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().HeaderContainer),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LayoutLogin_userLoginButton__WEBPACK_IMPORTED_MODULE_3__["default"], {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_ScssMain_Main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().DivLogo),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: _public_Logo3_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                        alt: "Logo do restaurante no cabe\xe7alho",
                        className: (_ScssMain_Main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().imgLogo),
                        height: 17,
                        width: 160
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: (_ScssMain_Main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().list),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: (_ScssMain_Main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().itens),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "/cardapio",
                                    children: "Cardapio"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: (_ScssMain_Main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().itens),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#pedido",
                                    children: "Pedido"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: (_ScssMain_Main_module_scss__WEBPACK_IMPORTED_MODULE_4___default().itens),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#reserva",
                                    children: "Reserva"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
} // Fazer com que o "<Link to={'/login'}><li className='itens'>Login</li></Link>" apareça quando o "data" é null (Que não fez o login), mas quando fizer o login, sumir o "<Link to={'/login'}><li className='itens'>Login</li></Link>" e colocar no lugar o "<li>{auth.currentUser.displayName}</li>".

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;