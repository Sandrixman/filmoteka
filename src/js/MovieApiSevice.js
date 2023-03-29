import axios from 'axios';

const API_KEY = 'bf6a0fae11fd4c107d4af2168346d5c6';
const BASE_URL = 'https://api.themoviedb.org/3/';

export default class MovieApiSevice {
  async fetchMovie() {
    const response = await axios({
      url: BASE_URL,
      params: {
        key: API_KEY,
        media_type: 'movie',
        time_window: 'day',
      },
    });
  }
}
