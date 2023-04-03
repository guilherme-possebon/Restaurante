"use strict";
exports.id = 555;
exports.ids = [555];
exports.modules = {

/***/ 8555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CardapioItens1OP)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ScssCardapio_Cardapio_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6547);
/* harmony import */ var _ScssCardapio_Cardapio_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ScssCardapio_Cardapio_module_scss__WEBPACK_IMPORTED_MODULE_2__);



function CardapioItens1OP({ NomeDoPrato , imgPrato , Desc , Preco  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_ScssCardapio_Cardapio_module_scss__WEBPACK_IMPORTED_MODULE_2___default().CDIContainer),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_ScssCardapio_Cardapio_module_scss__WEBPACK_IMPORTED_MODULE_2___default().text),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: NomeDoPrato
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: Desc
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_ScssCardapio_Cardapio_module_scss__WEBPACK_IMPORTED_MODULE_2___default().infos),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: imgPrato,
                            alt: "Imagem do prato"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: (_ScssCardapio_Cardapio_module_scss__WEBPACK_IMPORTED_MODULE_2___default().preco),
                            children: [
                                "R$ ",
                                Preco
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


/***/ })

};
;