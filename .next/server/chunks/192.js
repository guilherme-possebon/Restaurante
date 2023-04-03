exports.id = 192;
exports.ids = [192];
exports.modules = {

/***/ 7772:
/***/ ((module) => {

// Exports
module.exports = {
	"Footer": "Footer_Footer__2Uxsv",
	"imgLogo": "Footer_imgLogo__JhjC8",
	"footerWrapper": "Footer_footerWrapper__3Ik1q",
	"column": "Footer_column__PySng",
	"logo": "Footer_logo___LNah",
	"socialMedia": "Footer_socialMedia__LI8s9",
	"footerList": "Footer_footerList__rNRSA"
};


/***/ }),

/***/ 2192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./public/Logo4.png
/* harmony default export */ const Logo4 = ({"src":"/_next/static/media/Logo4.43f913f1.png","height":100,"width":651,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAIklEQVR4nGP89+9fCQMDw3sg/g3EbEDMBcTsQPyfkYHhJgCcmQdKxvmU1QAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":1});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/pages/Components/ScssMain/Footer.module.scss
var Footer_module = __webpack_require__(7772);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./src/pages/Components/LayoutMain/_footer.tsx





function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: (Footer_module_default()).Footer,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Footer_module_default()).footerWrapper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Footer_module_default()).column,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Footer_module_default()).logo,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: Logo4,
                                alt: "Logo do rodap\xe9",
                                className: (Footer_module_default()).imgLogo
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Footer_module_default()).socialMedia,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    target: "_blank",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaInstagram, {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "#",
                                    target: "_blank",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaFacebookF, {})
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: (Footer_module_default()).footerList,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Exemplo 1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Exemplo 2"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Exemplo 3"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Exemplo 4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Exemplo 5"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: "Exemplo 6"
                            })
                        ]
                    })
                })
            ]
        })
    });
}


/***/ })

};
;