export default function getRefs() {
  const footerModalEl = document.querySelector(".footer-modal-js");
  const footerAboutModalEl = document.querySelector(".about-modal-js");
  const footerCloseBtn = document.querySelector(".about-modal__close-js");
  const footerBackdrop = document.querySelector(".backdrop-js");
  const bodyEl = document.querySelector("body");
  const footerModalEl = document.querySelector('.footer-modal-js');
  const searchForm = document.querySelector('.search__form');
  const gallery = document.querySelector('.movie-list');
  const searchInput = document.querySelector('.search__input');
  const paginationDiv = document.querySelector('.pagination');
  const modal = document.querySelector('.js-modal');
  const overlay = document.querySelector('.overlay');
  const modal__info = document.querySelector('.modal__info');
  const modalCloseBtn = document.querySelector('.close-btn');
  const queueBtn = document.querySelector('.queue__button');
  const watchedBtn = document.querySelector('.watched__button');
  const backdropTrailer = document.querySelector('.backdrop-trailer');
  const playerDiv = document.querySelector('.player');
  return {
    searchForm,
    gallery,
    searchInput,
    paginationDiv,
    modal,
    overlay,
    modal__info,
    modalCloseBtn,
    footerModalEl,
    footerAboutModalEl,
    footerCloseBtn,
    footerBackdrop,
    bodyEl
    backdropTrailer,
    playerDiv,
    footerModalEl,
    queueBtn,
    watchedBtn,
  };
}
