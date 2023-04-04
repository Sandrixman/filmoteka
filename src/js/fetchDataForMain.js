import TmdbAPIService from './MovieApiSevice';
import getRefs from './refs';
import { renderMovieCard } from './renderMovieCard';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { options } from './paginator';
import dummy from '../images/dummy-poster.jpg';
import spiner from './spiner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const tmdbAPIService = new TmdbAPIService();
const pagination = new Pagination('pagination', options);
const { gallery, paginationDiv } = getRefs();

export function createGenres(genre_ids, genresIdList) {
  const genreNames = genre_ids.map(id => findGenreByID(id, genresIdList));
  if (genreNames.length <= 3) {
    return genreNames.join(', ');
  } else {
    return `${genreNames.slice(0, 2).join(', ')}, Other`;
  }
}

function findGenreByID(id, genresIdList) {
  const genre = genresIdList.find(el => el.id === id);
  return genre.name;
}

export function cardListGenerator(genresList, cards, total_results) {
  return {
    card_data: cards.map(
      ({
        title,
        poster_path,
        genre_ids,
        id,
        release_date,
        overview,
        popularity,
        vote_average,
        vote_count,
      }) => {
        const fullposter_path = poster_path
          ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : dummy;
        const genres = createGenres(genre_ids, genresList);
        const release_year = release_date.slice(0, 4) || 'No year';
        popularity = popularity.toFixed(1);
        vote_average = vote_average.toFixed(1);
        return {
          fullposter_path,
          title,
          genres,
          release_year,
          id,
          overview,
          popularity,
          vote_average,
          vote_count,
        };
      }
    ),
    total_results,
  };
}

export async function getCardData() {
  const trendingUrl = '/trending/movie/day';
  try {
    paginationDiv.style.display = 'none';
    const spinerInstance = spiner();
    const { results, total_results } = await tmdbAPIService
      .fetchSearch(trendingUrl)
      .then(({ data }) => {
        if (!data) Notify.failure('Жодного фільма в тренді за день!');
        return data;
      })
      .finally(() => spinerInstance.stop());

    const genresIdList = await tmdbAPIService.downloadGenresIdList();
    const movies = cardListGenerator(genresIdList, results, total_results);

    gallery.innerHTML = '';
    renderMovieCard(gallery, movies.card_data);

    if (pagination.getCurrentPage() === 0)
      pagination.reset(movies.total_results);
    paginationDiv.style.display = 'flex';

  } catch (error) {
    Notify.failure('Error happend while the resource loading!');
  }
}

pagination.on('beforeMove', event => {
  tmdbAPIService.page = event.page;
  getCardData();
});

pagination.on('afterMove', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});