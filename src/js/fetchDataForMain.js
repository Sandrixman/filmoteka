import TmdbAPIService from './MovieApiSevice';
import getRefs from './refs';
import { renderMovieCard } from './renderMovieCard';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { options } from './paginator';
import spiner from './spiner';

const tmdbAPIService = new TmdbAPIService();
const pagination = new Pagination('pagination', options);
const refs = getRefs();
const trendingUrl = '/trending/movie/day';

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

export async function getCardData() {
  try {
    const spinerInstance = spiner();
    const genresIdList = await tmdbAPIService.downloadGenresIdList();
    const { results, total_results } = await tmdbAPIService.fetchSearch(trendingUrl).then(
      ({ data }) => {
        if (!data) console.log('Жодного фільма в тренді за день!');
        return data;
      }
    ).finally(() => spinerInstance.stop());
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
    if (pagination.getCurrentPage() === 0) pagination.reset(movies.total_results);
  } catch (error) {
    console.log('Помилка при завантаженні');
  }
}

pagination.on('afterMove', event => {
  tmdbAPIService.page = event.page;
  getCardData();
});