!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=e.parcelRequired76b;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},e.parcelRequired76b=n);var o=n("5xtVg"),a=n("cDXQO"),l=n("bgrJK"),r=n("4F07H"),d=n("gXkWJ"),c=n("4Nugj");const{queueBtn:s,watchedBtn:u,gallery:v,modal:E,backdropTrailer:f,footerModalEl:b,footerCloseBtn:_}=(0,c.default)();(0,l.loadMovies)(l.KEY_WATCHED),u.addEventListener("click",(function(){s.classList.remove("library__button--active"),u.classList.add("library__button--active"),(0,l.loadMovies)(l.KEY_WATCHED)})),s.addEventListener("click",(function(){s.classList.add("library__button--active"),u.classList.remove("library__button--active"),(0,l.loadMovies)(l.KEY_QUEUE)})),v.addEventListener("click",o.renderModal),E.addEventListener("click",(function(e){const t=(0,o.onModalBtnClick)(e);switch(t){case l.KEY_WATCHED:u.classList.contains("library__button--active")&&(0,l.loadMovies)(t);break;case l.KEY_QUEUE:s.classList.contains("library__button--active")&&(0,l.loadMovies)(t)}})),E.addEventListener("click",a.showTrailer),f.addEventListener("click",a.hideTrailer),b.addEventListener("click",r.onClickLink),_.addEventListener("click",r.closeModal),d.glide.mount()}();
//# sourceMappingURL=library.c5892596.js.map
