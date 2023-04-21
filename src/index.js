import './css/main.min.css';
import getRefs from './js/refs';
import { getCardData } from './js/fetchDataForMain';
import { onSearchFormSubmit } from './js/searchMovie';
import { renderModal, onModal } from './js/modal';
import { showTrailer, hideTrailer } from './js/trailer';
import { onToggleTeamModal } from './js/footer-modal';
import { glide } from './js/slider-glide';

const { searchForm, gallery, modal, backdropTrailer, linkTeamModal } =
  getRefs();

getCardData(); //render popular movie

modal.addEventListener('click', onModal); // open modal-movie
gallery.addEventListener('click', renderModal); // render modal-movie

modal.addEventListener('click', showTrailer);
backdropTrailer.addEventListener('click', hideTrailer);

searchForm.addEventListener('submit', onSearchFormSubmit); // search movie

linkTeamModal.addEventListener('click', onToggleTeamModal); // toggle team-movie

glide.mount();
