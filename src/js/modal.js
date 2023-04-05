import getRefs from './refs ';
import playIcon from '../images/play-button.png';
import {
  saveToQueue,
  saveToWatched,
  loadFromQueue,
  loadFromWatched,
  createMuvieObject,
  KEY_QUEUE,
  KEY_WATCHED,
} from './mylibrary-service';

const { overlay, modal, modal__info, modalCloseBtn, bodyEl } = getRefs();

let data = '';
let watchedArray = loadFromWatched();
let queueArray = loadFromQueue();
export let movieId = '';

export function onModalBtnClick(evt) {
  const newObject = createMuvieObject(data.dataset);
  const { id } = data.dataset;
  movieId = id;

  if (evt.target.classList.contains('add-watched')) {
    saveToWatched(watchedArray, newObject);
    evt.target.classList.add('delete-watched');
    evt.target.classList.remove('add-watched');
    evt.target.textContent = 'Delete from watched';
    return KEY_WATCHED;
  }

  if (evt.target.classList.contains('delete-watched')) {
    watchedArray = watchedArray.filter(item => item.id !== id);
    saveToWatched(watchedArray);
    evt.target.classList.add('add-watched');
    evt.target.classList.remove('delete-watched');
    evt.target.textContent = 'Add to watched';
    return KEY_WATCHED;
  }

  if (evt.target.classList.contains('add-queue')) {
    saveToQueue(queueArray, newObject);
    evt.target.classList.add('delete-queue');
    evt.target.classList.remove('add-queue');
    evt.target.textContent = 'Delete from queue';
    return KEY_QUEUE;
  }

  if (evt.target.classList.contains('delete-queue')) {
    queueArray = queueArray.filter(item => item.id !== id);
    saveToQueue(queueArray);
    evt.target.classList.add('add-queue');
    evt.target.classList.remove('delete-queue');
    evt.target.textContent = 'Add to queue';
    return KEY_QUEUE;
  }
}

export function renderModal(evt) {
  if (evt.target.nodeName === 'UL') {
    return;
  }

  data = evt.target.closest('.movie-list__item');
  const { id, title, genres, poster, popularity, about, votes, vote } =
    data.dataset;

  bodyEl.style.overflow = 'hidden';

  let queueBtnMarkup = 'class="modal__btn add-queue">add to queue';
  if (queueArray.filter(item => item.id === id).length) {
    queueBtnMarkup =
      'class="modal__btn delete-queue btn-accent">Delete from queue';
  }

  let watchedBtnMarkup =
    'class="modal__btn add-watched btn-accent">add to Watched';
  if (watchedArray.filter(item => item.id === id).length) {
    watchedBtnMarkup =
      'class="modal__btn delete-watched btn-accent">Delete from Watched';
  }

  const markup = `
  <div class="img-wrapper">
    <img
      class="modal__img play"
      src="${poster}"
      alt="poster"
    />
    <img
      class="play-icon play"
      src="${playIcon}"
      alt="play-icon"
    />
  </div>
  <div class="movie-description">
    <h2 class="movie-title">${title}</h2>
    <ul class="movie-info__list">
      <li class="movie-info__item">
        <p class="info-name">Vote / Votes</p>
        <p class="info-value votes-wrapper"><span class="vote-average">${vote}</span> / ${votes}</p>
      </li>
      <li class="movie-info__item">
        <p class="info-name">Popularity</p>
        <p class="info-value">${popularity}</p>
      </li>
      <li class="movie-info__item">
        <p class="info-name">Original Title</p>
        <p class="info-value">${title}</p>
      </li>
      <li class="movie-info__item">
        <p class="info-name">Genre</p>
        <p class="info-value">${genres}</p>
      </li>
    </ul>
    <div class="movie-about">
      <p class="about__title">About</p>
      <p class="about__text">${about}</p>
    </div>
    <div class="btn-wrapper">
      <button ${watchedBtnMarkup}</button>
      <button ${queueBtnMarkup}</button>
    </div >
  </div > `;

  modal__info.innerHTML = markup;

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  // ховаємо модалку фільму по Escape

  document.addEventListener('keydown', escapePressed);

  removeModal();
}

function removeModal() {
  modalCloseBtn.addEventListener('click', addHidden);
  overlay.addEventListener('click', addHidden);
}

function addHidden() {
  bodyEl.style.overflow = 'auto';
  modal.classList.add('hidden');
  overlay.classList.add('hidden');

  document.removeEventListener('keydown', escapePressed);
}

function escapePressed(event) {
  event.preventDefault();

  if (event.code === 'Escape') {
    addHidden();
  }
}
