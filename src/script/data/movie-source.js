import Swal from "sweetalert2";
const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = '739949faaf1aeda8232538dbe179ea8d';

export class MovieSource {
  static searchMovie(keyword) {
    return fetch(`${baseUrl}search/movie?api_key=${apiKey}&language=en-US&query=${keyword}&page=1&include_adult=false&region=ID`)
      .then((response) => {
        if (!response.ok) {
          response.json().then(response => {
            if (response.status_code === 7 || response.status_code === 34) {
              Swal.fire('something went wrong!', `${response.status_message}`, 'error');
            }
            Swal.fire('something went wrong!', `${response.errors[0]}`, 'error');
          })
        } else {
          return response.json().then(response => {
            return response.results
          })
        }
      }
      )

  }

  static getPlayingMovies() {
    return fetch(`${baseUrl}movie/now_playing?api_key=${apiKey}&language=en-US&page=1&region=ID`)
      .then((response) => response.json())
      .then((response) => response.results);
  }

  static getPopularMovies() {
    return fetch(`${baseUrl}movie/popular?ap_key=${apiKey}&language=en-US&page=1&region=ID`)
      .then((response) => response.json())
      .then((response) => {
        {
          console.log(response.results)
          if (response.results) {
            // return Promise.resolve(response.results);
            console.log(Promise.resolve(response.results));
          } else {
            return Promise.reject(`Movie is not found`);
            // console.log(Promise.reject(`Movie not found`));
          }
        }
      });
  }
  static getMovieDetail(id) {
    return fetch(`${baseUrl}movie/${id}?api_key=${apiKey}&language=en-US`)
      .then((response) => response.json())
      .then((response) => response);
  }
  static getMovieCredits(id) {
    return fetch(`${baseUrl}movie/${id}/credits?api_key=${apiKey}&language=en-US`)
      .then((response) => response.json())
      .then((response) => response);
  }
  static getRelatedMoviea(id) {
    return fetch(`${baseUrl}movie/${id}/recommendations?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((response) => response.results)
      .catch((response) => console.log('NOT OK! : ' + response));
  }
}
