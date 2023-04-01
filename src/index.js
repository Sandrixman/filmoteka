import './css/main.min.css';
import { getCardData } from './js/fetchDataForMain';
import { renderMovieCard } from './js/renderMovieCard';
import { onSearchFormSubmit } from './js/searchMovie';
import { refsModal, renderModal, removeModal } from './js/modal';
import spiner from './js/spiner';
// import './js/trailer';
import getRefs from './js/refs ';

const { searchForm, gallery } = getRefs();

// const gallery = document.querySelector('.movie-list');

searchForm.addEventListener('submit', onSearchFormSubmit);
getCardData(); //рендерінг головної сторінки

// модалка фільму
gallery.addEventListener('click', renderModal);
removeModal();
