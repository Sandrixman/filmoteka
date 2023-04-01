import './css/main.min.css';
import { getCardData } from './js/fetchDataForMain';
import { renderMovieCard } from './js/renderMovieCard';
import { onSearchFormSubmit } from './js/searchMovie';
import { refsModal, renderModal, removeModal } from './js/modal';
import spiner from './js/spiner';
import getRefs from './js/refs ';

const refs = getRefs();

const gallery = document.querySelector('.movie-list');

refs.searchForm.addEventListener('submit', onSearchFormSubmit);

renderMovieCard(gallery, getCardData());

// модалка фільму
refs.gallery.addEventListener('click', renderModal);
removeModal();
