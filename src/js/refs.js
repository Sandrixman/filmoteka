export default function getRefs() {
  const footerModalEl = document.querySelector(".footer-modal-js");
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
    queueBtn,
    watchedBtn,
  };
}
