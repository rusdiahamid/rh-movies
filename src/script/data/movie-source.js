export class MovieSource {
  static getPlayingMovie() {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=739949faaf1aeda8232538dbe179ea8d&language=id-ID&page=1&region=ID`)
      .then((response) => response.json())
      .then((response) => response.results);
  }
}
