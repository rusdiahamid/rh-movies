import './movie-container.js';

class PlayingMovies extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.innerHTML = `
    <h1 class="section-title">Now Playing</h1>
    `;
    const movieContainer = document.createElement('movie-container');
    this.appendChild(movieContainer);
    movieContainer.movies = this._movies;
  }
}

customElements.define('playing-movies', PlayingMovies);
