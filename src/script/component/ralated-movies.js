import '../component/movie-item';
class RelatedMovies extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.innerHTML = `<h1 class="text-white text-xl px-3">Related Movies</h1>`;
    const movieContainer = document.createElement('movie-container');
    this.append(movieContainer);
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
