import './css/main.min.css';
import MovieApiSevice from './js/MovieApiSevice';
import renderMovieCard from './js/renderMovieCard';
import { getCardData } from './js/fetchDataForMain';
import { onSearchFormSubmit } from './js/searchMovie';
import { renderModal } from './js/modal';
import { showTrailer, hideTrailer } from './js/trailer';
import modalFooter from './js/footer-modal';
import getRefs from './js/refs';
import spiner from './js/spiner';
import getRefs from './js/refs ';

const { searchForm, gallery, modal, backdropTrailer } = getRefs();

getCardData(); //рендерінг головної сторінки

modal.addEventListener('click', showTrailer);
backdropTrailer.addEventListener('click', hideTrailer);

searchForm.addEventListener('submit', onSearchFormSubmit); // пошук фільму
gallery.addEventListener('click', renderModal); // модалка фільму
