import { renderModal, onModal } from './modal';
import { showTrailer, hideTrailer } from './trailer';
import { loadMovies, KEY_QUEUE, KEY_WATCHED } from './mylibrary-service';
import { onToggleTeamModal, closeModal } from './footer-modal';
import { glide } from './slider-glide';
import getRefs from './refs';

const {
  queueBtn,
  watchedBtn,
  gallery,
  modal,
  backdropTrailer,
  linkTeamModal,
  modalCloseBtn,
} = getRefs();

loadMovies(KEY_WATCHED);

watchedBtn.addEventListener('click', onWatchedBtnClick);
queueBtn.addEventListener('click', onQueueBtnClick);

gallery.addEventListener('click', renderModal);
modal.addEventListener('click', onCardClick);

modal.addEventListener('click', showTrailer);
backdropTrailer.addEventListener('click', hideTrailer);

linkTeamModal.addEventListener('click', onToggleTeamModal);
modalCloseBtn.addEventListener('click', closeModal);
glide.mount();

function onWatchedBtnClick() {
  queueBtn.classList.remove('library__button--active');
  watchedBtn.classList.add('library__button--active');
  loadMovies(KEY_WATCHED);
}

function onQueueBtnClick() {
  queueBtn.classList.add('library__button--active');
  watchedBtn.classList.remove('library__button--active');
  loadMovies(KEY_QUEUE);
}

function onCardClick(evt) {
  const key = onModal(evt);
  switch (key) {
    case KEY_WATCHED:
      if (watchedBtn.classList.contains('library__button--active'))
        loadMovies(key);
      break;
    case KEY_QUEUE:
      if (queueBtn.classList.contains('library__button--active'))
        loadMovies(key);
      break;
  }
}
