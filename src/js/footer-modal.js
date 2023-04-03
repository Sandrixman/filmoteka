import getRefs from './refs';
const refs = getRefs();




export function onClickLink(evt) {
  evt.preventDefault();
  refs.footerBackdrop.classList.remove('is-hidden');
  refs.footerAboutModalEl.classList.remove('is-hidden');
  refs.bodyEl.classList.add('modal-open');
  refs.footerBackdrop.addEventListener("click", onClickBackdrop);
  document.addEventListener('keydown', onClickEscape);
}

export function closeModal(evt) {
  refs.footerBackdrop.classList.add('is-hidden');
  refs.footerAboutModalEl.classList.add('is-hidden');
  refs.bodyEl.classList.remove('modal-open');
  refs.footerBackdrop.removeEventListener("click", onClickBackdrop);
  document.removeEventListener('keydown', onClickEscape);
}

function onClickEscape(evt) {
  if (evt.key === 'Escape') {
    closeModal();
  }
}

function onClickBackdrop(evt) {
  if (evt.currentTarget === evt.target) {
    closeModal();
  }
}