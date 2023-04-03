import axios from 'axios';

export default class TmdbAPIService {
  API_KEY = 'bf6a0fae11fd4c107d4af2168346d5c6';
  BASE_URL = 'https://api.themoviedb.org/3/';

  constructor() {
    this.curPage = 1;
  }

  async downloadGenresIdList() {
    const { data } = await axios(
      `${this.BASE_URL}genre/movie/list?api_key=${this.API_KEY}`
    );
    return data.genres;
  }

  fetchSearch(additionalUrl) {
    return axios(
      `${this.BASE_URL}${additionalUrl}?api_key=${this.API_KEY}&page=${this.page}`
    );
  }

  async querySearch(query) {
    const searchMoviePath = 'search/movie';
    const { data } = await axios(
      `${this.BASE_URL}${searchMoviePath}?query=${query}&api_key=${this.API_KEY}&page=${this.page}`
    );
    return data;
  }

  async fetchTrailer(id) {
    const { data } = await axios(
      `${this.BASE_URL}movie/${id}/videos?api_key=${this.API_KEY}`
    );
    return data;
  }

  get page() {
    return this.curPage;
  }

  set page(newPage) {
    this.curPage = newPage;
  }
}
