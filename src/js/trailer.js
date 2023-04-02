import axios from 'axios';
// // import { YouTubePlayer } from 'youtube-player/dist/types';

const API_KEY = 'bf6a0fae11fd4c107d4af2168346d5c6';
const BASE_URL = 'https://api.themoviedb.org/3/';

export default async function fetchTrailer(id) {
  const { data } = await axios(
    `${BASE_URL}movie/${id}/videos?api_key=${API_KEY}&language=en-US`
  );
  console.log(data.results[0].key);
  return data.results[0].key;
}

console.log('HI');

fetchTrailer(456453);

export const refsTrailer = {
  backdropTrailer: document.querySelector('.backdrop-trailer'),
  playerDiv: document.querySelector('.player'),
  modal: document.querySelector('.js-modal'),
};

export function showTrailer(evt) {
  if (evt.target.nodeName === 'IMG') {
    refsTrailer.backdropTrailer.classList.remove('is-hidden');
    const key = fetchTrailer(evt);
    insertIframe('sLsfasdtPps');
  }
  return;
}

export function hideTrailer(evt) {
  refsTrailer.backdropTrailer.classList.add('is-hidden');
  refsTrailer.playerDiv.innerHTML = '';
}

function insertIframe(key) {
  refsTrailer.playerDiv.innerHTML = `<iframe src="https://www.youtube.com/embed/${key}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `;
}

// refsTrailer.modal.addEventListener('click', showTrailer);
// refsTrailer.backdropTrailer.addEventListener('click', hideTrailer);
