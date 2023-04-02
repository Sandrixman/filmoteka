import getRefs from './refs';
const refs = getRefs();

refs.footerModalEl.addEventListener('click', onClickLink);

function onClickLink(evt) {
  evt.preventDefault();
  console.log('hi');
}
