import { createGenres, getCardData } from './fetchDataForMain';
import TmdbAPIService from './MovieApiSevice';
import { renderMovieCard } from './renderMovieCard';
import getRefs from './refs';
import dummy from '../image/dummy-poster.jpg';
import spiner from './spiner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { options } from './paginator';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const refs = getRefs();
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
    const genresIdList = await tmdbAPIService.downloadGenresIdList();
    const { results, total_results } = await tmdbAPIService
      .querySearch(query)
      .finally(() => spinerInstance.stop());
    if (!results.length) {
      errorMessage();
      getCardData().finally(() => spinerInstance.stop());
    }

    const movies = {
      card_data: results.map(
        ({ title, poster_path, genre_ids, id, release_date }) => {
          const fullposter_path = poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : dummy;
          const genres = createGenres(genre_ids, genresIdList);
          const release_year = release_date.slice(0, 4);
          return { fullposter_path, title, genres, release_year, id };
        }
      ),
      total_results,
    };

    refs.gallery.innerHTML = '';
    renderMovieCard(refs.gallery, movies.card_data);
    if (pagination.getCurrentPage() === 0)
      pagination.reset(movies.total_results);
  } catch (error) {
    Notify.failure('Error happend while the resource loading!');
  }
}

function errorMessage() {
  refs.searchForm.insertAdjacentHTML(
    'beforeEnd',
    `<p class="error_message">Search result not successful. Enter the correct movie name and try again</p>`
  );
  const message = document.querySelector('.error_message');
  setTimeout(() => {
    message.remove();
    refs.searchInput.value = '';
  }, 3000);
}
