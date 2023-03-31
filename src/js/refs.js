export default function getRefs() {
  const searchForm = document.querySelector('.search_form');
  const gallery = document.querySelector('.movie-list');
  const message = document.querySelector('.error_message');
  return { searchForm, gallery, message };
} 
