export function renderMovieCard(gallery, card_data) {
  const markup = card_data
    .map(
      ({
        fullposter_path,
        title,
        genres,
        release_year,
        overview,
        popularity,
        vote_average,
        vote_count,
        id,
      }) => {
        return `
      <li class="movie__list__item"
          data-id="${id}"
          data-title="${title}"
          data-genres="${genres}"
          data-year="${release_year}"
          data-poster="${fullposter_path}"
          data-popularity="${popularity}"
          data-vote="${vote_average}"
          data-votes="${vote_count}"
          data-about="${overview}">
        <img class="movie-list__img" src=${fullposter_path} alt=${title}>
        <div class="movie-list__info">
          <h2 class="movie-list__title">${title}</h2>
          <p class="movie-list__text">${genres} | ${release_year} <span class="movie-list__vote"> ${vote_average}</span></p>
        </div>
      </li>
    `;
      }
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}
