// import MovieApiSevice from './js/MovieApiSevice';
import { createGenres } from './fetchDataForMain';
import { downloadGenresIdList, querySearch } from './MovieApiSevice';
// import renderMovieCard from './renderMovieCard';
// import getRefs from './refs';
// import spiner from './spiner';

// const refs = getRefs();


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
  const messageRef = document.querySelector('.error_message');
  messageRef.remove();
}


//Потрібно змінити **************************************************************************************
async function getSearchedCardData(query, page) {
  try {
    const genresIdList = await downloadGenresIdList();

    const { results, total_pages } = await querySearch(query, page);
    return {
      card_data: results.map(
        (item, index) => {
          console.log(index, item);
          const { title, poster_path, genre_ids, id, release_date } = item;
          const fullposter_path =
            'https://image.tmdb.org/t/p/w500/' + poster_path;
          const genres = createGenres(genre_ids, genresIdList);
          const release_year = release_date.slice(0, 4);
          console.log(fullposter_path, title, genres, release_year, id);
          return { fullposter_path, title, genres, release_year, id };
        }
      ),
      total_pages,
    };
  } catch (error) {
    console.log('Помилка ');
  }
}