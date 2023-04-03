exports.id = 443;
exports.ids = [443];
exports.modules = {

/***/ 6547:
/***/ ((module) => {

// Exports
module.exports = {
	"opcao": "Cardapio_opcao__B_C2_",
	"itens": "Cardapio_itens__1t_Nz",
	"HeaderButton": "Cardapio_HeaderButton__t_c2I",
	"BackButton": "Cardapio_BackButton__TfTb0",
	"teste": "Cardapio_teste__Mv8pw",
	"MainContainer": "Cardapio_MainContainer__raW9a",
	"CDContainer": "Cardapio_CDContainer__IXpJV",
	"CDIContainer": "Cardapio_CDIContainer___vN_f",
	"infos": "Cardapio_infos__mf0TJ",
	"preco": "Cardapio_preco__rnfPB",
	"text": "Cardapio_text__NGsXs",
	"PageName": "Cardapio_PageName__UPep8",
	"Entrada": "Cardapio_Entrada__qWgSZ",
	"Pratos": "Cardapio_Pratos__O30Oe",
	"Porção": "Cardapio_Por__o__T8nxt",
	"Drinks": "Cardapio_Drinks__JcC2F"
};


/***/ }),

/***/ 2443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CardapioItensSize)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ScssCardapio_Cardapio_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6547);
/* harmony import */ var _ScssCardapio_Cardapio_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ScssCardapio_Cardapio_module_scss__WEBPACK_IMPORTED_MODULE_2__);



function CardapioItensSize({ NomeDoPrato , imgPrato , Desc , PrecoP , PrecoM , PrecoG  }) {
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
                                PrecoP,
                                " - P"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: (_ScssCardapio_Cardapio_module_scss__WEBPACK_IMPORTED_MODULE_2___default().preco),
                            children: [
                                "R$ ",
                                PrecoM,
                                " - M"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: (_ScssCardapio_Cardapio_module_scss__WEBPACK_IMPORTED_MODULE_2___default().preco),
                            children: [
                                "R$ ",
                                PrecoG,
                                " - G"
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