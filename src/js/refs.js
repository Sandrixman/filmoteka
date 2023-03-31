export default function getRefs() {
  const searchForm = document.querySelector('.search__form');
  const gallery = document.querySelector('.movie-list');
  const searchInput = document.querySelector('.search__input');
  return { searchForm, gallery, searchInput };
} 
