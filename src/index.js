import './css/main.min.css';
import MovieApiSevice from './js/MovieApiSevice';
import renderMovieCard from './js/renderMovieCard';
import getRefs from './js/refs';
import spiner from './js/spiner';
import modal from './js/modal';

const movieApi = new MovieApiSevice();
const refs = getRefs();

console.log('Hello');
