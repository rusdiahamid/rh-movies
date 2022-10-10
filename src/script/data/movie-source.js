const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = '739949faaf1aeda8232538dbe179ea8d';

export class MovieSource {
  static getPlayingMovies() {
    return fetch(`${baseUrl}movie/now_playing?api_key=${apiKey}&language=en-EN&page=1&region=ID`)
      .then((response) => response.json())
      .then((response) => response.results);
  }

  static getUpcomingMovies() {
    return fetch(`${baseUrl}movie/upcoming?api_key=${apiKey}&language=en-EN&page=1&region=ID`)
      .then((response) => response.json())
      .then((response) => response.results);
  }
  static getMovieDetail(id) {
    return fetch(`${baseUrl}movie/${id}?api_key=${apiKey}&language=en-EN`)
      .then((response) => response.json())
      .then((response) => response);
  }
  static getMovieCredits(id) {
    return fetch(`${baseUrl}movie/${id}/credits?api_key=${apiKey}&language=id-ID`)
      .then((response) => response.json())
      .then((response) => response);
  }
}
