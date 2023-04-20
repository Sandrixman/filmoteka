import getRefs from './refs';

const { backdropTeamModal, body, modalCloseBtn } = getRefs();
let isModalOpen = false;

export function onToggleTeamModal(evt) {
  evt.preventDefault();
  backdropTeamModal.classList.toggle('is-hidden');
  body.classList.toggle('modal-open');
  if (!isModalOpen) {
    modalCloseBtn.addEventListener('click', onToggleTeamModal);
    backdropTeamModal.addEventListener('click', onBackdrop);
    body.addEventListener('keydown', onEscape);
  }
  if (isModalOpen) {
    modalCloseBtn.removeEventListener('click', onToggleTeamModal);
    body.removeEventListener('keydown', onEscape);
    backdropTeamModal.removeEventListener('click', onBackdrop);
    return (isModalOpen = false);
  }
  isModalOpen = true;
}

function onEscape(evt) {
  if (evt.key === 'Escape') {
    onToggleTeamModal(evt);
  }
}

function onBackdrop(evt) {
  if (evt.currentTarget === evt.target) {
    onToggleTeamModal(evt);
  }
}
