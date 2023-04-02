import './css/main.min.css';
import MovieApiSevice from './js/MovieApiSevice';
import renderMovieCard from './js/renderMovieCard';
import getRefs from './js/refs';
import spiner from './js/spiner';
import modalFooter from './js/footer-modal'
import { getCardData } from './js/fetchDataForMain';
import { onSearchFormSubmit } from './js/searchMovie';
import { renderModal } from './js/modal';
import getRefs from './js/refs ';


const { searchForm, gallery } = getRefs();

getCardData(); //рендерінг популярних фільмів

searchForm.addEventListener('submit', onSearchFormSubmit); // пошук фільму
gallery.addEventListener('click', renderModal); // модалка фільму
