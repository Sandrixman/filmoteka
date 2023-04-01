import './css/main.min.css';
import { getCardData } from './js/fetchDataForMain';
import { renderMovieCard } from './js/renderMovieCard';
import { onSearchFormSubmit } from './js/searchMovie';
import { refsModal, renderModal, removeModal } from './js/modal';
import spiner from './js/spiner';
import getRefs from './js/refs ';

const { searchForm, gallery } = getRefs();

searchForm.addEventListener('submit', onSearchFormSubmit);

renderMovieCard(gallery, getCardData());

// модалка фільму
gallery.addEventListener('click', renderModal);
removeModal();
