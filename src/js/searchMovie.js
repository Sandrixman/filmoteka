import { cardListGenerator } from './fetchDataForMain';
import TmdbAPIService from './MovieApiSevice';
import { renderMovieCard } from './renderMovieCard';
import getRefs from './refs';
import spiner from './spiner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { options } from './paginator';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const { searchForm, gallery, searchInput, paginationDiv } = getRefs();
const tmdbAPIService = new TmdbAPIService();
const pagination = new Pagination('pagination', options);

export function onSearchFormSubmit(evt) {
  evt.preventDefault();
  const { searchInput } = evt.currentTarget.elements;
  const searchQuery = searchInput.value.trim();
  if (!searchQuery) {
    errorMessage();
    return;
  }

  generateSearchedMovies(searchQuery);

  pagination.on('beforeMove', event => {
    tmdbAPIService.page = event.page;
    generateSearchedMovies(searchQuery);
  });
}

async function generateSearchedMovies(query) {
  try {
    const spinerInstance = spiner();
    const { results, total_results } = await tmdbAPIService
      .querySearch(query)
      .finally(() => spinerInstance.stop());
    if (!total_results) {
      errorMessage();
      return;
    }
    const genresIdList = await tmdbAPIService.downloadGenresIdList();
    const movies = cardListGenerator(genresIdList, results, total_results);

    paginationDiv.style.display = 'none';
    gallery.innerHTML = '';

    renderMovieCard(gallery, movies.card_data);
    if (pagination.getCurrentPage() === 0)
      pagination.reset(movies.total_results);
    paginationDiv.style.display = 'flex';
  } catch (error) {
    Notify.failure('Error happend while the resource loading!');
  }
}

function errorMessage() {
  searchForm.insertAdjacentHTML(
    'beforeEnd',
    `<p class="error-message">Search result not successful. Enter the correct movie name and try again</p>`
  );
  const message = document.querySelector('.error-message');
  setTimeout(() => {
    message.remove();
    searchInput.value = '';
  }, 3000);
}
