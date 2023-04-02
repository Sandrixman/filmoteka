import getRefs from './refs';
const refs = getRefs();

refs.footerAboutModalEl.classList.add('hidden');
// console.log(refs.footerModalEl);
refs.footerModalEl.addEventListener("click", onClickLink);
refs.footerCloseBtn.addEventListener("click", onClickCloseBtn);

function onClickLink(evt) {
  evt.preventDefault();
  refs.footerAboutModalEl.classList.remove('hidden');
}

function onClickCloseBtn(evt) {
  refs.footerAboutModalEl.classList.add('hidden');
}