import './movie-item.js';

class MovieContainer extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this._movies
      .filter((movie) => movie.poster_path !== null)
      .forEach((movie) => {
        const movieItemElement = document.createElement('movie-item');
        movieItemElement.movie = movie;
        this.appendChild(movieItemElement);
      });
  }
}
customElements.define('movie-container', MovieContainer);
