import TmdbAPIService from './MovieApiSevice';
import getRefs from './refs';
import { renderMovieCard } from './renderMovieCard';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { options } from './paginator';
import dummy from '../image/dummy-poster.jpg';
import spiner from './spiner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const tmdbAPIService = new TmdbAPIService();
const pagination = new Pagination('pagination', options);
const { gallery, paginationDiv } = getRefs();

export function createGenres(genre_ids, genresIdList) {
  switch (genre_ids.length) {
    case 0:
      return 'Genre not defined';
    case 1:
      return findGenreByID(genre_ids[0], genresIdList);
    case 2:
      return `${findGenreByID(genre_ids[0], genresIdList)}, ${findGenreByID(
        genre_ids[1],
        genresIdList
      )}`;
    case 3:
      return `${findGenreByID(genre_ids[0], genresIdList)}, ${findGenreByID(
        genre_ids[1],
        genresIdList
      )}, ${findGenreByID(genre_ids[2], genresIdList)}`;
    default:
      return `${findGenreByID(genre_ids[0], genresIdList)}, ${findGenreByID(
        genre_ids[1],
        genresIdList
      )}, Other`;
  }
}

export function findGenreByID(id, genresIdList) {
  const genre = genresIdList.find(el => el.id === id);
  // return genre?.name || '';
  return genre.name;
}

export function cardListGenerator(genresList, cards, total_results) {
  return {
    card_data: cards.map(
      ({ title, poster_path, genre_ids, id, release_date }) => {
        const fullposter_path = poster_path
          ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : dummy;
        const genres = createGenres(genre_ids, genresList);
        const release_year = release_date.slice(0, 4) || 'No year';
        return { fullposter_path, title, genres, release_year, id };
      }
    ),
    total_results,
  }
}

export async function getCardData() {
  const trendingUrl = '/trending/movie/day';
  try {
    const spinerInstance = spiner();
    const { results, total_results } = await tmdbAPIService.fetchSearch(trendingUrl).then(
      ({ data }) => {
        if (!data) Notify.failure('Жодного фільма в тренді за день!');
        return data;
      }
    ).finally(() => spinerInstance.stop());
    const genresIdList = await tmdbAPIService.downloadGenresIdList();

    const movies = cardListGenerator(genresIdList, results, total_results);

    gallery.innerHTML = '';
    paginationDiv.style.display="none";
    renderMovieCard(gallery, movies.card_data);
    if (pagination.getCurrentPage() === 0) pagination.reset(movies.total_results);
    paginationDiv.style.display="flex";

  } catch (error) {
    Notify.failure('Error happend while the resource loading!');
  }
}

pagination.on('beforeMove', event => {
  tmdbAPIService.page = event.page;
  getCardData();
});