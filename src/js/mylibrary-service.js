import getRefs from './refs';
import { renderMovieCard } from './renderLabraryMovieCard';
import LocalStorageAPIService from './local-storage-api';
import emptyCollection from '../images/empty-collection.jpg';

const KEY_WATCHED = 'watchedMovies';
const KEY_QUEUE = 'queueMovies';

const localStorageAPIService = new LocalStorageAPIService();
const { gallery, library } = getRefs();

export function loadWathed() {
  localStorageAPIService.key = KEY_WATCHED;
  const movies = localStorageAPIService.loadFromLibrary();
  gallery.innerHTML = '';
  if (movies.length) {
    renderMovieCard(gallery, movies);
  }
  if (!movies.length) {
    const markup = `
    <div">
      <img
        class="emptyCollection"
        src="${emptyCollection}"
        alt="emptyCollection"
      />
    </div>
    `;
    library.innerHTML = markup;
  }
}

export function loadQueue() {
  localStorageAPIService.key = KEY_QUEUE;
  const movies = localStorageAPIService.loadFromLibrary();
  gallery.innerHTML = '';

  if (movies.length) {
    renderMovieCard(gallery, movies);
  }
}

export function saveToWatched(muvies) {
  localStorageAPIService.key = KEY_WATCHED;
  localStorageAPIService.saveToLibrary(muvies);
}

export function saveToQueue(muvies) {
  localStorageAPIService.key = KEY_QUEUE;
  localStorageAPIService.saveToLibrary(muvies);
}

export function loadFromWatched() {
  localStorageAPIService.key = KEY_WATCHED;
  return localStorageAPIService.loadFromLibrary();
}

export function loadFromQueue() {
  localStorageAPIService.key = KEY_QUEUE;
  return localStorageAPIService.loadFromLibrary();
}
