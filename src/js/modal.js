import getRefs from './refs ';

const { overlay, modal, modal__info, modalCloseBtn } = getRefs();
const watchedArray = [];
const queueArray = [];
let data = '';
export let movieId = '';

modal.addEventListener('click', addMovie);

function addMovie(evt) {
  const { title, genres, poster, year, vote, id } = data.dataset;

  movieId = id;

  if (evt.target.classList.contains('add-watched')) {
    const newObject = {
      title,
      genres,
      poster,
      year,
      vote,
    };
    watchedArray.push(newObject);
  }
  if (evt.target.classList.contains('add-queue')) {
    const newObject = {
      title,
      genres,
      poster,
      year,
      vote,
    };
    queueArray.push(newObject);
  }
}

export function renderModal(evt) {
  data = evt.target.closest('.movie-list__item');
  const { title, genres, poster, popularity, about, votes, vote } =
    data.dataset;

  const markup = `
      <img
        class="modal__img"
        src="${poster}"
        alt=""
      />
      <div class="movie-description">
        <h2 class="movie-title">${title}</h2>
        <ul class="movie-info__list">
          <li class="movie-info__item">
            <p class="info-name">Vote / Votes</p>
            <p class="info-value votes-wrapper"><span class="vote-average">${vote}</span> / ${votes}</p>
          </li>
          <li class="movie-info__item">
            <p class="info-name">Popularity</p>
            <p class="info-value">${popularity}</p>
          </li>
          <li class="movie-info__item">
            <p class="info-name">Original Title</p>
            <p class="info-value">${title}</p>
          </li>
          <li class="movie-info__item">
            <p class="info-name">Genre</p>
            <p class="info-value">${genres}</p>
          </li>
        </ul>
        <div class="movie-about">
          <p class="about__title">About</p>
          <p class="about__text">${about}</p>
        </div>
        <div class="btn-wrapper">
          <button class="modal__btn add-watched btn-accent">add to Watched</button>
          <button class="modal__btn add-queue">add to queue</button>
        </div>
      </div>`;

  modal__info.innerHTML = markup;

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  removeModal();
}

export function removeModal() {
  modalCloseBtn.addEventListener('click', addHidden);

  function addHidden() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
}
