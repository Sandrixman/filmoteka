import getRefs from './refs';

const { footerBackdrop, footerAboutModalEl, bodyEl } = getRefs();

export function onClickLink(evt) {
  evt.preventDefault();
  footerBackdrop.classList.remove('is-hidden');
  footerAboutModalEl.classList.remove('is-hidden');
  bodyEl.classList.add('modal-open');
  footerBackdrop.addEventListener('click', onClickBackdrop);
  document.addEventListener('keydown', onClickEscape);
}

export function closeModal(evt) {
  footerBackdrop.classList.add('is-hidden');
  footerAboutModalEl.classList.add('is-hidden');
  bodyEl.classList.remove('modal-open');
  footerBackdrop.removeEventListener('click', onClickBackdrop);
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
