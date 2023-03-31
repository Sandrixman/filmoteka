export default function getRefs() {
  const searchForm = document.querySelector('.search__form');
  const gallery = document.querySelector('.movie-list');
  const message = document.querySelector('.error_message');
  return { searchForm, gallery, message };
} 
