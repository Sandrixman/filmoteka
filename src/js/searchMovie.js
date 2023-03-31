// import MovieApiSevice from './js/MovieApiSevice';
import { createGenres } from './fetchDataForMain';
import { downloadGenresIdList, querySearch } from './MovieApiSevice';
// import renderMovieCard from './renderMovieCard';
import getRefs from './refs';

// import spiner from './spiner';

const refs = getRefs();


export async function onSearchFormSubmit(evt) {
  evt.preventDefault();
  const { searchInput } = evt.currentTarget.elements;
  const searchQuery = searchInput.value.trim();
  if (searchQuery === '') {
    evt.currentTarget.insertAdjacentHTML('beforeEnd', `<p class="error_message"> Search result not successful. Enter the correct movie name and try again</p>`);
    setTimeout(hideErrorMessage, 3000);
    return;
  }
  page = 1;
  await getSearchedCardData(searchQuery, page);
}

function hideErrorMessage() {
    refs.message.remove();
}

//Потрібно змінити **************************************************************************************
async function getSearchedCardData(query, page) {
  try {
    const genresIdList = await downloadGenresIdList();
    const { results, total_pages } = await querySearch(query, page);
    console.log(results);
    const moviesList = generateMoviesList(results, total_pages, genresIdList);
    console.log(moviesList);
    renderMovieCard(refs.gallery,moviesList.card_data);
  } catch (error) {
    console.log(`Помилка:'${error}`);
  }
}

function generateMoviesList(movies, total_pages, genresIdList) {
  return {
    card_data: movies.map(
      ({ title, poster_path, genre_ids, id, release_date }) => {
        const fullposter_path =
          'https://image.tmdb.org/t/p/w500/' + poster_path;
        const genres = createGenres(genre_ids, genresIdList);
        const release_year = release_date.slice(0, 4);
        return { fullposter_path, title, genres, release_year, id };
      }
    ),
    total_pages,
  }
}

function renderMovieCard(gallery, cards) {
  markup = cards
    .map(({ fullposter_path, title, genres, release_year }) => {
      return `
      <li class="movie-list__item">
        <img src=${fullposter_path} alt=${title}>
        <h2 class="movie-list__title">${title}</h2>
        <p class="movie-list__text">${genres} | ${release_year}</p>
      </li>
    `;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}
