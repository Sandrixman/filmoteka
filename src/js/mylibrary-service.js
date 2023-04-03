import getRefs from './refs';
import { renderMovieCard } from './renderMovieCard';
import LocalStorageAPIService from './local-storage-api';

const KEY_WATCHED = 'watchedMovies';
const KEY_QUEUE = 'queueMovies';

const localStorageAPIService = new LocalStorageAPIService();
const { gallery } = getRefs();


export function loadWathed() {
  localStorageAPIService.key = KEY_WATCHED;
  const movies = localStorageAPIService.loadFromLibrary();
  gallery.innerHTML = '';

  if (movies.length) {
    renderMovieCard(gallery, movies);
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
