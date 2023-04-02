import './css/main.min.css';
import { getCardData } from './js/fetchDataForMain';
import { onSearchFormSubmit } from './js/searchMovie';
import { renderModal } from './js/modal';
import getRefs from './js/refs ';

const { searchForm, gallery } = getRefs();

getCardData(); //рендерінг популярних фільмів

searchForm.addEventListener('submit', onSearchFormSubmit); // пошук фільму
gallery.addEventListener('click', renderModal); // модалка фільму
