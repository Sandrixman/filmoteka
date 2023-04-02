import getRefs from './refs';
const refs = getRefs();

console.log(refs.footerModalEl);
refs.footerModalEl.addEventListener("click", onClickLink);

function onClickLink(evt) {
  evt.preventDefault();
  console.log("hi")
}
