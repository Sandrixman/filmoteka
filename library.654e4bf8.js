!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=n.parcelRequired76b;function i(){const e=document.querySelector(".footer-modal-js"),t=document.querySelector(".about-modal-js"),n=document.querySelector(".about-modal__close-js"),o=document.querySelector(".backdrop-js"),r=document.querySelector("body"),a=document.querySelector(".search__form"),i=document.querySelector(".movie-list"),s=document.querySelector("main"),l=document.querySelector(".search__input"),c=document.querySelector(".pagination"),d=document.querySelector(".js-modal"),u=document.querySelector(".overlay"),v=document.querySelector(".modal__info"),p=document.querySelector(".close-btn"),m=document.querySelector(".queue__button"),f=document.querySelector(".watched__button");return{searchForm:a,gallery:i,searchInput:l,paginationDiv:c,modal:d,overlay:u,modal__info:v,modalCloseBtn:p,footerModalEl:e,footerAboutModalEl:t,footerCloseBtn:n,footerBackdrop:o,bodyEl:r,backdropTrailer:document.querySelector(".backdrop-trailer"),playerDiv:document.querySelector(".player"),footerModalEl:e,queueBtn:m,watchedBtn:f,library:s}}null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},n.parcelRequired76b=a),a.register("iE7OH",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var a={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},r=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("aNJCr",(function(t,n){var o;e(t.exports,"getBundleURL",(function(){return o}),(function(e){return o=e}));var r={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var t=r[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),r[e]=t),t}})),a("iE7OH").register(JSON.parse('{"jNRdE":"library.654e4bf8.js","eKkGD":"play-button.6ab4f177.png","9vbMg":"empty-collection.9b5b83aa.jpg"}'));var s;function l(e,t){const n=t.map((({fullposter_path:e,title:t,genres:n,release_year:o,overview:r,popularity:a,vote_average:i,vote_count:s,id:l})=>`\n      <li class="movie-list__item"\n          data-id="${l}"\n          data-title="${t}"\n          data-genres="${n}"\n          data-year="${o}"\n          data-poster="${e}"\n          data-popularity="${a}"\n          data-vote="${i}"\n          data-votes="${s}"\n          data-about="${r}">\n        <img class="movie-list__img" src=${e} alt=${t}>\n        <div class="movie-list__info">\n          <h2 class="movie-list__title">${t}</h2>\n          <p class="movie-list__text">${n} | ${o}</p>\n        </div>\n      </li>\n    `)).join("");e.insertAdjacentHTML("beforeend",n)}s=a("aNJCr").getBundleURL("jNRdE")+a("iE7OH").resolve("eKkGD");var c;c=a("aNJCr").getBundleURL("jNRdE")+a("iE7OH").resolve("9vbMg");const d="watchedMovies",u="queueMovies",v=new class{saveToLibrary(e){localStorage.setItem(this.storageKey,JSON.stringify(e))}loadFromLibrary(){try{return JSON.parse(localStorage.getItem(this.storageKey))||[]}catch(e){return console.log("Error: ",e.message),[]}}get key(){return this.storageKey}set key(e){this.storageKey=e}constructor(){this.storageKey=""}},{gallery:p,library:m}=i();function f(){v.key=d;const e=v.loadFromLibrary();if(p.innerHTML="",e.length&&l(p,e),!e.length){const e=`\n    <div">\n      <img\n        class="emptyCollection"\n        src="${t(c)}"\n        alt="emptyCollection"\n      />\n    </div>\n    `;m.innerHTML=e}}function y(e){v.key=d,v.saveToLibrary(e)}function g(e){v.key=u,v.saveToLibrary(e)}const{overlay:_,modal:b,modal__info:h,modalCloseBtn:L}=i();let w="",q=(v.key=d,v.loadFromLibrary()),E=(v.key=u,v.loadFromLibrary()),$="";function S(){b.classList.add("hidden"),_.classList.add("hidden"),document.removeEventListener("keydown",k)}function k(e){e.preventDefault(),"Escape"===e.code&&(console.log("Ecsape was pressed"),S())}b.addEventListener("click",(function(e){const{title:t,genres:n,poster:o,year:r,vote:a,votes:i,about:s,popularity:l,id:c}=w.dataset;if($=c,e.target.classList.contains("add-watched")){const d={id:c,fullposter_path:o,title:t,genres:n,release_year:r,overview:s,popularity:l,vote_average:a,vote_count:i};return q.push(d),y(q),e.target.classList.add("delete-watched"),e.target.classList.remove("add-watched"),void(e.target.textContent="Delete from watched")}if(e.target.classList.contains("delete-watched"))return q=q.filter((e=>e.id!==c)),y(q),e.target.classList.add("add-watched"),e.target.classList.remove("delete-watched"),void(e.target.textContent="Add to watched");if(e.target.classList.contains("add-queue")){const d={id:c,fullposter_path:o,title:t,genres:n,release_year:r,overview:s,popularity:l,vote_average:a,vote_count:i};return E.push(d),g(E),e.target.classList.add("delete-queue"),e.target.classList.remove("add-queue"),void(e.target.textContent="Delete from queue")}if(e.target.classList.contains("delete-queue"))return E=E.filter((e=>e.id!==c)),g(E),e.target.classList.add("add-queue"),e.target.classList.remove("delete-queue"),void(e.target.textContent="Add to queue")}));const{queueBtn:x,watchedBtn:C,gallery:H}=i();f(),document.addEventListener("DOMContentLoaded",(function(){C.focus()})),C.addEventListener("click",f),x.addEventListener("click",(function(){v.key=u;const e=v.loadFromLibrary();p.innerHTML="",e.length&&l(p,e)})),H.addEventListener("click",(function(e){w=e.target.closest(".movie-list__item");const{id:n,title:o,genres:r,poster:a,popularity:i,about:l,votes:c,vote:d}=w.dataset;let u='class="modal__btn add-queue">add to queue';E.filter((e=>e.id===n)).length&&(u='class="modal__btn delete-queue btn-accent">Delete from queue');let v='class="modal__btn add-watched btn-accent">add to Watched';q.filter((e=>e.id===n)).length&&(v='class="modal__btn delete-watched btn-accent">Delete from Watched');const p=`\n  <div class="img-wrapper">\n    <img\n      class="modal__img play"\n      src="${a}"\n      alt="poster"\n    />\n    <img\n      class="play-icon play"\n      src="${t(s)}"\n      alt="play-icon"\n    />\n  </div>\n  <div class="movie-description">\n    <h2 class="movie-title">${o}</h2>\n    <ul class="movie-info__list">\n      <li class="movie-info__item">\n        <p class="info-name">Vote / Votes</p>\n        <p class="info-value votes-wrapper"><span class="vote-average">${d}</span> / ${c}</p>\n      </li>\n      <li class="movie-info__item">\n        <p class="info-name">Popularity</p>\n        <p class="info-value">${i}</p>\n      </li>\n      <li class="movie-info__item">\n        <p class="info-name">Original Title</p>\n        <p class="info-value">${o}</p>\n      </li>\n      <li class="movie-info__item">\n        <p class="info-name">Genre</p>\n        <p class="info-value">${r}</p>\n      </li>\n    </ul>\n    <div class="movie-about">\n      <p class="about__title">About</p>\n      <p class="about__text">${l}</p>\n    </div>\n    <div class="btn-wrapper">\n      <button ${v}</button>\n      <button ${u}</button>\n    </div >\n  </div > `;h.innerHTML=p,b.classList.remove("hidden"),_.classList.remove("hidden"),document.addEventListener("keydown",k),L.addEventListener("click",S),_.addEventListener("click",S)}))}();
//# sourceMappingURL=library.654e4bf8.js.map