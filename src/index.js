import './css/main.min.css';
import { getCardData } from './js/fetchDataForMain';
import { onSearchFormSubmit } from './js/searchMovie';
import { renderModal } from './js/modal';
import { showTrailer, hideTrailer } from './js/trailer';
import {onClickLink, closeModal} from './js/footer-modal';
import getRefs from './js/refs';
import spiner from './js/spiner';
import { glide } from './js/slider-glide';

const { searchForm, gallery, modal, backdropTrailer, footerModalEl, footerCloseBtn } = getRefs();

getCardData(); //рендерінг головної сторінки

modal.addEventListener('click', showTrailer);
backdropTrailer.addEventListener('click', hideTrailer);

searchForm.addEventListener('submit', onSearchFormSubmit); // пошук фільму
gallery.addEventListener('click', renderModal); // модалка фільму

footerModalEl.addEventListener("click", onClickLink);
footerCloseBtn.addEventListener("click", closeModal);
glide.mount();