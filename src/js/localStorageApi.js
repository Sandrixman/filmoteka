const addBtn = document.getElementById('addBtn');
const watchedList = document.getElementById('watchedList');
let watchedMovies = [];

addBtn.addEventListener('click', addToWatched);

// перевірка наявності переглянутих фільмів в Local Storage
if (localStorage.getItem('watchedMovies')) {
  watchedMovies = JSON.parse(localStorage.getItem('watchedMovies'));
  displayWatchedMovies();
}

function addToWatched() {
  const movieTitle = 'The Godfather'; // Замість цього можна отримувати значення з форми вводу або додавати фільми з бази даних
  watchedMovies.push(movieTitle);
  localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
  displayWatchedMovies();
}

function displayWatchedMovies() {
  watchedList.innerHTML = '';
  watchedMovies.forEach(movieTitle => {
    const li = document.createElement('li');
    li.innerText = movieTitle;
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', () => {
      watchedMovies = watchedMovies.filter(title => title !== movieTitle);
      localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
      displayWatchedMovies();
    });
    li.appendChild(deleteBtn);
    watchedList.appendChild(li);
  });
}