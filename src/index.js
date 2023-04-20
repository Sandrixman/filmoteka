import './css/main.min.css';
import getRefs from './js/refs';
import { getCardData } from './js/fetchDataForMain';
import { onSearchFormSubmit } from './js/searchMovie';
import { renderModal, onModalBtnClick } from './js/modal';
import { showTrailer, hideTrailer } from './js/trailer';
import { onToggleTeamModal } from './js/footer-modal';
import { glide } from './js/slider-glide';

const { searchForm, gallery, modal, backdropTrailer, linkTeamModal } =
  getRefs();

getCardData(); //рендерінг головної сторінки

modal.addEventListener('click', onModalBtnClick);
gallery.addEventListener('click', renderModal); // модалка фільму

modal.addEventListener('click', showTrailer);
backdropTrailer.addEventListener('click', hideTrailer);

searchForm.addEventListener('submit', onSearchFormSubmit); // пошук фільму

linkTeamModal.addEventListener('click', onToggleTeamModal);
glide.mount();
