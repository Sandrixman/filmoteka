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

const { overlay, modalMovie, modalCloseBtn, body } = getRefs();

let data = '';
let watchedArray = loadFromWatched();
let queueArray = loadFromQueue();
export let movieId = '';

export function onModal(evt) {
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

  body.style.overflow = 'hidden';

  let queueBtnMarkup = 'class="modal-movie__btn add-queue">add to queue';
  if (queueArray.filter(item => item.id === id).length) {
    queueBtnMarkup =
      'class="modal-movie__btn delete-queue btn-accent">Delete from queue';
  }

  let watchedBtnMarkup =
    'class="modal-movie__btn add-watched btn-accent">add to Watched';
  if (watchedArray.filter(item => item.id === id).length) {
    watchedBtnMarkup =
      'class="modal-movie__btn delete-watched btn-accent">Delete from Watched';
  }

  const markup = `
    <div class="modal-movie__img-wrapper">
      <img
        class="modal-movie__img play"
        src="${poster}"
        alt="poster"
      />
      <img
        class="play-icon play"
        src="${playIcon}"
        alt="play-icon"
      />
    </div>
    <div class="modal-movie__description">
      <h2 class="modal-movie__title">${title}</h2>
      <ul class="modal-movie__info">
        <li class="modal-movie__info-item">
          <p class="modal-movie__info-title">Vote / Votes</p>
          <p class="modal-movie__info-value votes-wrapper"><span class="vote-average">${vote}</span> / ${votes}</p>
        </li>
        <li class="modal-movie__info-item">
          <p class="modal-movie__info-title">Popularity</p>
          <p class="modal-movie__info-value">${popularity}</p>
        </li>
        <li class="modal-movie__info-item">
          <p class="modal-movie__info-title">Original Title</p>
          <p class="modal-movie__info-value">${title}</p>
        </li>
        <li class="modal-movie__info-item">
          <p class="modal-movie__info-title">Genre</p>
          <p class="modal-movie__info-value">${genres}</p>
        </li>
      </ul>
      <div class="modal-movie__about">
        <p class="modal-movie__about-title">About</p>
        <p class="modal-movie__about-text">${about}</p>
      </div>
      <div class="modal-movie__btn-wrapper">
        <button ${watchedBtnMarkup}</button>
        <button ${queueBtnMarkup}</button>
      </div >
    </div >
  `;

  modalMovie.innerHTML = markup;

  overlay.classList.remove('hidden');

  body.addEventListener('keydown', escapePressed);
  modalCloseBtn.addEventListener('click', modalHide);
  overlay.addEventListener('click', onBackdrop);
}

function modalHide() {
  body.style.overflow = 'auto';
  overlay.classList.add('hidden');

  body.removeEventListener('keydown', escapePressed);
}

function escapePressed(event) {
  if (event.code === 'Escape') {
    modalHide();
  }
}

function onBackdrop(evt) {
  if (evt.currentTarget === evt.target) {
    modalHide();
  }
}
