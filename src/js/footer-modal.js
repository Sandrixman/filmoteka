import getRefs from './refs';
import { glide } from './slider-glide';
const refs = getRefs();

// console.log(refs.footerBackdrop);
refs.footerModalEl.addEventListener("click", onClickLink);
refs.footerCloseBtn.addEventListener("click", closeModal);
refs.footerBackdrop.addEventListener("click", onClickBackdrop);


function onClickLink(evt) {
  evt.preventDefault();
  refs.footerBackdrop.classList.remove('is-hidden');
  refs.footerAboutModalEl.classList.remove('is-hidden');
  refs.bodyEl.classList.add('modal-open');
  document.addEventListener('keydown', onClickEscape);
  glide.mount();
}

function closeModal(evt) {
  refs.footerBackdrop.classList.add('is-hidden');
  refs.footerAboutModalEl.classList.add('is-hidden');
  refs.bodyEl.classList.remove('modal-open');
  document.removeEventListener('keydown', onClickEscape);
}

function onClickLink(evt) {
  evt.preventDefault();
  console.log('hi');
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