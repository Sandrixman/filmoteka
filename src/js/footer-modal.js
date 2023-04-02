import getRefs from './refs';
import Glide from '@glidejs/glide';
import { glideFooter, options } from './slider-glide';
const refs = getRefs();

// console.log(refs.footerBackdrop);
refs.footerModalEl.addEventListener("click", onClickLink);
refs.footerCloseBtn.addEventListener("click", closeModal);
refs.footerBackdrop.addEventListener("click", onClickBackdrop)


function onClickLink(evt) {
  evt.preventDefault();
  refs.footerBackdrop.classList.remove('is-hidden');
  refs.footerAboutModalEl.classList.remove('is-hidden');
  document.addEventListener('keydown', onClickEscape);
  glideFooter.destroy();
  let glidFooter = new Glide('.glide_footer', options);
  glidFooter.mount();
}

function closeModal(evt) {
  refs.footerBackdrop.classList.add('is-hidden');
  refs.footerAboutModalEl.classList.add('is-hidden');
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