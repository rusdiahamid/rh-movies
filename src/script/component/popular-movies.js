import '../component/movie-item.js';

class PopularMovies extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.innerHTML = `<h1 class="section-title">Popular Movies</h1>`;
    const movieContainer = document.createElement('movie-container');
    this.appendChild(movieContainer);
    movieContainer.movies = this._movies;
  }
}

customElements.define('popular-movies', PopularMovies);
