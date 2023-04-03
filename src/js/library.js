import { renderModal } from './modal';
// import { showTrailer, hideTrailer } from './trailer';
import { loadQueue, loadWathed } from './mylibrary-service';
import getRefs from './refs';

const { queueBtn, watchedBtn, gallery } = getRefs();

loadWathed();
document.addEventListener('DOMContentLoaded', function () {
  watchedBtn.focus();
});
watchedBtn.addEventListener('click', loadWathed);
queueBtn.addEventListener('click', loadQueue);

gallery.addEventListener('click', renderModal);
// modal.addEventListener('click', showTrailer);
// backdropTrailer.addEventListener('click', hideTrailer);
