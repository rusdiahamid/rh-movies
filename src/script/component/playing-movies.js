import '../component/movie-item.js';

class PlayingMovies extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.innerHTML = `<h1 class="text-white text-xl px-3">Now Playing</h1>`;
    const movieContainer = document.createElement('movie-container');
    this.append(movieContainer);
    this._movies.forEach((movie) => {
      const movieItemElement = document.createElement('movie-item');
      movieItemElement.movie = movie;
      movieContainer.appendChild(movieItemElement);
    });
  }
  renderError(message) {
    popularMoviesList.innerHTML = '';
    popularMoviesList.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('playing-movies', PlayingMovies);
