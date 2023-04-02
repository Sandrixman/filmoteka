import getRefs from './refs ';

const { overlay, modal, modal__info, modalCloseBtn } = getRefs();

modal.addEventListener('click', function (evt) {
  if (evt.target.nodeName === 'BUTTON') {
    console.log(evt.target.dataset.title);
  }
});

export function renderModal(evt) {
  const li = evt.target.closest('.movie-list__item');
  const { title, genres } = li.dataset;

  const markup = `
      <img
        class="modal__img"
        src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
        alt=""
      />
      <div class="movie-description">
        <h2 class="movie-title">${title}</h2>
        <ul class="movie-info__list">
          <li class="movie-info__item">
            <p class="info-name">Vote / Votes</p>
            <p class="info-value votes-wrapper"><span class="vote-average">${li.dataset.vote_average}</span> / ${li.dataset.vote_count}</p>
          </li>
          <li class="movie-info__item">
            <p class="info-name">Popularity</p>
            <p class="info-value">${li.dataset.popularity}</p>
          </li>
          <li class="movie-info__item">
            <p class="info-name">Original Title</p>
            <p class="info-value">${li.dataset.original_title}</p>
          </li>
          <li class="movie-info__item">
            <p class="info-name">Genre</p>
            <p class="info-value">${genres}</p>
          </li>
        </ul>
        <div class="movie-about">
          <p class="about__title">About</p>
          <p class="about__text">
            Four of the West’s most infamous outlaws assemble to steal a huge
            stash of gold from the most corrupt settlement of the gold rush
            towns. But not all goes to plan one is killed and the other three
            escapes with bags of gold hide out in the abandoned gold mine where
            they happen across another gang of three – who themselves were
            planning to hit the very same bank! As tensions rise, things go from
            bad to worse as they realise the bags of gold are filled with
            lead... they’ve been double crossed – but by who and how?
          </p>
        </div>
        <div class="btn-wrapper">
          <button class="button modal__btn btn-accent asd">add to Watched</button>
          <button class="button modal__btn">add to queue</button>
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
