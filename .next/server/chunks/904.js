exports.id = 904;
exports.ids = [904];
exports.modules = {

/***/ 429:
/***/ ((module) => {

// Exports
module.exports = {
	"imgReserva": "ReservaPedido_imgReserva___DnqA",
	"imgEntrega": "ReservaPedido_imgEntrega__Rxbsh",
	"text": "ReservaPedido_text__9kq71",
	"btnRD": "ReservaPedido_btnRD__JdtgN",
	"espaco": "ReservaPedido_espaco__I_trX",
	"Container": "ReservaPedido_Container__zg72P",
	"ContainerListChildrenAll": "ReservaPedido_ContainerListChildrenAll__Efqk6",
	"ContainerImgAll": "ReservaPedido_ContainerImgAll__9vJI3"
};


/***/ }),

/***/ 7904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Pedido": () => (/* binding */ Pedido),
  "default": () => (/* binding */ Reserva)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/pages/Components/ScssMain/ReservaPedido.module.scss
var ReservaPedido_module = __webpack_require__(429);
var ReservaPedido_module_default = /*#__PURE__*/__webpack_require__.n(ReservaPedido_module);
;// CONCATENATED MODULE: ./public/reserva.jpg
/* harmony default export */ const reserva = ({"src":"/_next/static/media/reserva.15e49a18.jpg","height":427,"width":640,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAKoSL//EABwQAAEDBQAAAAAAAAAAAAAAAAMAAgUBBBIyYf/aAAgBAQABPwCTiQHbbMLXNo9OL//EABcRAAMBAAAAAAAAAAAAAAAAAAABMUH/2gAIAQIBAT8Ams//xAAXEQEAAwAAAAAAAAAAAAAAAAABABEh/9oACAEDAQE/AHQuf//Z","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/delivery.jpg
/* harmony default export */ const delivery = ({"src":"/_next/static/media/delivery.54d95d7d.jpg","height":960,"width":640,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAIAT/8QAGxABAAICAwAAAAAAAAAAAAAAAQMRAAIEBVH/2gAIAQEAAT8Ae64cFEUOkthanhVWjn//xAAXEQEAAwAAAAAAAAAAAAAAAAABABEy/9oACAECAQE/ACw0z//EABoRAQABBQAAAAAAAAAAAAAAAAIBABESMUH/2gAIAQMBAT8Abu1OA3yK/9k=","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./src/pages/Components/LayoutMain/_reservapedido.tsx





function Reserva() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: `${(ReservaPedido_module_default()).Container} ${(ReservaPedido_module_default()).espaco}`,
            id: "reserva",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: reserva,
                    alt: "Logo do restaurante no cabe\xe7alho",
                    height: 560,
                    width: 410
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (ReservaPedido_module_default()).CotainerListAll,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (ReservaPedido_module_default()).ContainerListChildrenAll,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "Reserva"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (ReservaPedido_module_default()).text,
                                children: "Fa\xe7a sua reserva assim garantindo o seu lugar com seguran\xe7a!"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: (ReservaPedido_module_default()).btnRD,
                                    children: "Fazer reserva"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}
function Pedido() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (ReservaPedido_module_default()).Container,
        id: "pedido",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (ReservaPedido_module_default()).ContainerListChildrenAll,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "Pedido"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (ReservaPedido_module_default()).text,
                            children: "Fa\xe7a seu pedido que levaremos at\xe9 a sua resid\xeancia"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/cardapio",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: (ReservaPedido_module_default()).btnRD,
                                    children: "Fazer pedido"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: delivery,
                alt: "Logo do restaurante no cabe\xe7alho",
                height: 560,
                width: 410
            })
        ]
    });
}


/***/ })

};
;