// import MovieApiSevice from './js/MovieApiSevice';
import { getCardDataSearch } from './fetchDataForMain';
import renderMovieCard from './renderMovieCard';
import getRefs from './refs';
import spiner from './spiner';

// const refs = getRefs();


export async function onSearchFormSubmit(evt) {
  evt.preventDefault();
  const { searchInput } = evt.currentTarget.elements;
  const searchQuery = searchInput.value.trim();
  if (searchQuery === '') {
    evt.currentTarget.insertAdjacentHTML('beforeend', `<p class="error_message"> Search result not successful. Enter the correct movie name and try again</p>`);
    return;
  }
  page = 1;
  await getCardDataSearch(searchQuery);
}
