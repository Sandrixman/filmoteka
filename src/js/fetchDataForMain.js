import axios from 'axios';
const API_KEY = 'bf6a0fae11fd4c107d4af2168346d5c6';
const BASE_URL = 'https://api.themoviedb.org/3/';

let page = 1;
async function downloadGenresIdList() {
  return await axios(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`).then(
    ({ data }) => {
      return data.genres;
    }
  );
}

async function fetchSearch(page) {
  return await axios(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${page}`
  ).then(({ data }) => data);
}

function createGenres(genre_ids, genresIdList) {
  switch (genre_ids.length) {
    case 1:
      return findGenreByID(genre_ids[0], genresIdList);
    case 2:
      return `${findGenreByID(genre_ids[0], genresIdList)}, ${findGenreByID(
        genre_ids[1],
        genresIdList
      )}`;
    default:
      return `${findGenreByID(genre_ids[0], genresIdList)}, ${findGenreByID(
        genre_ids[1],
        genresIdList
      )}, Other`;
  }
}

function findGenreByID(id, genresIdList) {
  const genre = genresIdList.find(el => el.id === id);
  return genre.name;
}

export default async function getCardData() {
  const genresIdList = await downloadGenresIdList();
  const { results } = await fetchSearch(page);
  return results.map(({ title, poster_path, genre_ids }) => {
    const fullposter_path = 'https://image.tmdb.org/t/p/w500/' + poster_path;
    const genres = createGenres(genre_ids, genresIdList);
    console.log(fullposter_path, title, genres);
    return { fullposter_path, title, genres };
  });
}
getCardData();
