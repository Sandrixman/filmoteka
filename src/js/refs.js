export default function getRefs() {
  const body = document.querySelector('body');
  const searchForm = document.querySelector('.search__form');
  const gallery = document.querySelector('.movie-list');
  const moviesContainer = document.querySelector('.container.movie');
  const library = document.querySelector('main');
  const searchInput = document.querySelector('.search__input');
  const paginationDiv = document.querySelector('.pagination');
  const modal = document.querySelector('.modal-movie');
  const overlay = document.querySelector('.overlay');
  const modalMovie = document.querySelector('.modal-movie__wrapper');
  const modalCloseBtn = document.querySelector('.close-btn');
  const queueBtn = document.querySelector('.queue__button');
  const watchedBtn = document.querySelector('.watched__button');
  const backdropTrailer = document.querySelector('.backdrop-trailer');
  const playerDiv = document.querySelector('.player');
  const linkTeamModal = document.querySelector('.footer__link');
  const backdropTeamModal = document.querySelector('.backdrop');

  return {
    body,
    searchForm,
    gallery,
    searchInput,
    paginationDiv,
    modal,
    overlay,
    modalMovie,
    modalCloseBtn,
    backdropTrailer,
    playerDiv,
    queueBtn,
    watchedBtn,
    library,
    moviesContainer,
    linkTeamModal,
    backdropTeamModal,
  };
}
