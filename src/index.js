// import './css/main.min.css';
import MovieApiSevice from './js/MovieApiSevice';
import getCardData from './js/fetchDataForMain';
import renderMovieCard from './js/renderMovieCard';
import spiner from './js/spiner';
import { onSearchFormSubmit } from './js/searchMovie';

const gallery = document.querySelector('.movie-list');

// renderMovieCard(gallery);

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
