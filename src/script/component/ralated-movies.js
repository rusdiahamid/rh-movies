import '../component/movie-item.js';
import '../component/detail-movie.js';
class RelatedMovies extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }
  set details(details) {
    this._details = details;
  }

  render() {
    this.innerHTML = `<h1 class="text-white text-xl px-3">Related Movies</h1>`;
    const movieContainer = document.createElement('movie-container');
    this.append(movieContainer);
    if (this._movies.length === 0) {
      movieContainer.innerHTML = `<h1 class="text-white text-lg leading-relaxed">Sorry we cannot find related movies for <span class="font-bold">${this._details.title}</span>.</h1>`;
    }
    this._movies
      .filter((movie) => movie.poster_path !== null)
      .forEach((movie) => {
        const movieItemElement = document.createElement('movie-item');
        movieItemElement.movie = movie;
        movieContainer.appendChild(movieItemElement);
      });
  }
}

customElements.define('related-movies', RelatedMovies);
