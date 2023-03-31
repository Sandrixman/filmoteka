import './css/main.min.css';
import { getCardData } from './js/fetchDataForMain';
import { renderMovieCard } from './js/renderMovieCard';
import spiner from './js/spiner';

const gallery = document.querySelector('.movie-list');

renderMovieCard(gallery, getCardData());
