import { downloadGenresIdList, fetchSearch } from './MovieApiSevice';
let page = 1;
const trendingUrl = '/trending/movie/day';

function createGenres(genre_ids, genresIdList) {
  switch (genre_ids.length) {
    case 1:
      return findGenreByID(genre_ids[0], genresIdList);
    case 2:
      return `${findGenreByID(genre_ids[0], genresIdList)}, ${findGenreByID(
        genre_ids[1],
        genresIdList
      )}`;
    case 3:
      return `${findGenreByID(genre_ids[0], genresIdList)}, ${findGenreByID(
        genre_ids[1],
        genresIdList
      )}, ${findGenreByID(genre_ids[2], genresIdList)}`;
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

async function getCardData() {
  const genresIdList = await downloadGenresIdList();
  const { results } = await fetchSearch(trendingUrl, page).then(({ data }) => {
    if (!data) console.log('Жодного фільма в тренді за день!');
    // console.log(data);
    return data;
  });
  // if (!data) return;
  return results.map(({ title, poster_path, genre_ids, id, release_date }) => {
    const fullposter_path = 'https://image.tmdb.org/t/p/w500/' + poster_path;
    const genres = createGenres(genre_ids, genresIdList);
    const release_year = release_date.slice(0, 4);
    console.log(fullposter_path, title, genres, id, release_year);
    return { fullposter_path, title, genres, release_year, id };
  });
}
getCardData();
