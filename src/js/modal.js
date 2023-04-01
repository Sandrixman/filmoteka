export const refsModal = {
  modal: document.querySelector('.js-modal'),
  overlay: document.querySelector('.overlay'),
  modal__info: document.querySelector('.modal__info'),
  markup: '',
};

export function renderModal(evt) {
  // console.log('hi from modal');
  markup = `
      <img
        class="modal__img"
        src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
        alt=""
      />
      <div class="movie-description">
        <h2 class="movie-title">A FISTFUL OF LEAD</h2>
        <ul class="movie-info__list">
          <li class="movie-info__item">
            <p class="info-name">Vote / Votes</p>
            <p class="info-value">1260</p>
          </li>
          <li class="movie-info__item">
            <p class="info-name">Popularity</p>
            <p class="info-value">1260</p>
          </li>
          <li class="movie-info__item">
            <p class="info-name">Original Title</p>
            <p class="info-value">1260</p>
          </li>
          <li class="movie-info__item">
            <p class="info-name">Genre</p>
            <p class="info-value">1260</p>
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
          <button class="button modal__btn btn-accent">add to Watched</button>
          <button class="button modal__btn">add to queue</button>
        </div>
      </div>`;

  refsModal.modal__info.innerHTML = markup;

  function removeHidden() {
    refsModal.modal.classList.remove('hidden');
    refsModal.overlay.classList.remove('hidden');
  }

  removeHidden();

  // console.log(evt.target);

  const li = evt.target.closest('.movie-list__item');
  console.log(li);
}

export function removeModal() {
  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', addHidden);

  function addHidden() {
    refsModal.modal.classList.add('hidden');
    refsModal.overlay.classList.add('hidden');

    refsModal.modal__info.innerHTML = '';
  }
}

// підключення даних
