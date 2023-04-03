import getRefs from './refs';
import { loadQueue, loadWathed } from './mylibrary-service';

const { queueBtn, watchedBtn, gallery } = getRefs();

watchedBtn.addEventListener('click', loadWathed);
queueBtn.addEventListener('click', loadQueue);



