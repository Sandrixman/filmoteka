import getRefs from './refs';
import { renderMovieCard } from './renderMovieCard';
import LocalStorageAPIService from './localStorageApi';
import emptyCollection from '../images/empty-collection.jpg';

export const KEY_WATCHED = 'watchedMovies';
export const KEY_QUEUE = 'queueMovies';

const localStorageAPIService = new LocalStorageAPIService();
const { moviesContainer, gallery } = getRefs();

export function createMuvieObject(data) {
  const { title, genres, poster, year, vote, votes, about, popularity, id } =
    data;

  return {
    id,
    fullposter_path: poster,
    title,
    genres,
    release_year: year,
    overview: about,
    popularity,
    vote_average: vote,
    vote_count: votes,
  };
}

export function loadMovies(key) {
  localStorageAPIService.key = key;
  const movies = localStorageAPIService.loadFromLibrary();
  gallery.innerHTML = '';
  if (movies.length) {
    document.querySelector('.emptyCollection')?.remove();
    renderMovieCard(gallery, movies);
  } else if (!document.querySelector('.emptyCollection')) {
    const markup = `<div class="emptyCollection"><img src="${emptyCollection}" alt="emptyCollection"/></div>`;
    moviesContainer.insertAdjacentHTML('afterbegin', markup);
  }
}

export function saveToWatched(movies, newMovie = null) {
  if (newMovie) movies.push(newMovie);
  localStorageAPIService.key = KEY_WATCHED;
  localStorageAPIService.saveToLibrary(movies);
}

export function saveToQueue(movies, newMovie = null) {
  if (newMovie) movies.push(newMovie);
  localStorageAPIService.key = KEY_QUEUE;
  localStorageAPIService.saveToLibrary(movies);
}

export function loadFromWatched() {
  localStorageAPIService.key = KEY_WATCHED;
  return localStorageAPIService.loadFromLibrary();
}

export function loadFromQueue() {
  localStorageAPIService.key = KEY_QUEUE;
  return localStorageAPIService.loadFromLibrary();
}
