import TmdbAPIService from './MovieApiSevice';
import getRefs from './refs';
import { movieId } from './modal';

const tmdbAPIService = new TmdbAPIService();
const { backdropTrailer, playerDiv } = getRefs();

export async function showTrailer(evt) {
  if (evt.target.classList.contains('play')) {
    const { results } = await tmdbAPIService.fetchTrailer(movieId);
    backdropTrailer.classList.remove('is-hidden');
    if (results.length > 0) {
      const key = results[results.length - 1].key;
      insertIframe(key);
    } else {
      errorTrailer();
    }
  }
  return;
}

export function hideTrailer() {
  backdropTrailer.classList.add('is-hidden');
  playerDiv.innerHTML = '';
}

function insertIframe(key) {
  playerDiv.innerHTML = `
  <iframe src="https://www.youtube.com/embed/${key}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `;
}
function errorTrailer() {
  playerDiv.innerHTML = `
    <iframe src="https://www.youtube.com/embed/6DhiiFGk4_s?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `;
}
