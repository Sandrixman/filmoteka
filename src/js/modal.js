export function renderModal() {
  const modal = document.querySelector('.js-modal');
  const overlay = document.querySelector('.overlay');
  console.log('hi from modal');

  const markup = `<svg class="close-btn">
        <use href="./image/symbol-defs.svg#icon-close"></use>
      </svg>
      <img
        class="modal_img"
        src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
        alt=""
      />
      <div class="movie-description">
        <h2 class="movie_title">A FISTFUL OF LEAD</h2>
        <ul class="movie_info-list">
          <li class="movie_info-item">
            <p class="info-name">Vote / Votes</p>
            <p class="info-value">1260</p>
          </li>
          <li class="movie_info-item">
            <p class="info-name">Popularity</p>
            <p class="info-value">1260</p>
          </li>
          <li class="movie_info-item">
            <p class="info-name">Original Title</p>
            <p class="info-value">1260</p>
          </li>
          <li class="movie_info-item">
            <p class="info-name">Genre</p>
            <p class="info-value">1260</p>
          </li>
        </ul>
        <div class="movie-about">
          <p class="about-title">About</p>
          <p class="about-text">
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
        <div class="btn_wrapper">
          <button class="button modal_btn btn-accent">add to Watched</button>
          <button class="button modal_btn">add to queue</button>
        </div>
      </div>`;

  modal.innerHTML = markup;

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
