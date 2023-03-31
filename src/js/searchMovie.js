import { createGenres, getCardData } from './fetchDataForMain';
import { downloadGenresIdList, querySearch } from './MovieApiSevice';
import { renderMovieCard } from './renderMovieCard';
import getRefs from './refs';
import dummy from '../image/dummy-poster.jpg';
import spiner from './spiner';

let page = 1;
const refs = getRefs();

export function onSearchFormSubmit(evt) {
  evt.preventDefault();
  const { searchInput } = evt.currentTarget.elements;
  const searchQuery = searchInput.value.trim();
  if (!searchQuery) {
    errorMessage();
    return;
  }
  refs.gallery.innerHTML = '';
  renderMovieCard(refs.gallery, generateMoviesList(searchQuery));
}

async function generateMoviesList(query) {
  try {
    const spinerInstance = spiner();
    const genresIdList = await downloadGenresIdList();
    const { results, total_pages } = await querySearch(query, page).finally(() => spinerInstance.stop());

    if (!results.length) {
      errorMessage();
      return getCardData().finally(() => spinerInstance.stop());
    };

    return {
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
      total_pages,
    }
  } catch (error) {
    console.log(`Error: '${error}`);
  }
}

function errorMessage() {
  refs.searchForm.insertAdjacentHTML('beforeEnd', `<p class="error_message">Search result not successful. Enter the correct movie name and try again</p>`);
  const message = document.querySelector('.error_message');
  setTimeout(() => {
    message.remove();
    refs.searchInput.value = '';
  }, 3000);
}