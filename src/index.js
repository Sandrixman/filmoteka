import './css/main.min.css';
import { getCardData } from './js/fetchDataForMain';
import { renderMovieCard } from './js/renderMovieCard';
import spiner from './js/spiner';
import { onSearchFormSubmit } from './js/searchMovie';
import getRefs from './js/refs '

const refs = getRefs();

const gallery = document.querySelector('.movie-list');

// renderMovieCard(gallery);

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
renderMovieCard(gallery, getCardData());
