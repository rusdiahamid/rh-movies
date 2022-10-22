import '../component/movie-item.js';

class SearchResult extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.innerHTML = `<h1 class="text-white text-xl px-3">Search Result</h1>`;
    const movieContainer = document.createElement('movie-container');
    this.append(movieContainer);
    if (!this._movies) {
      document.querySelector('search-result').classList.add('hidden');
    } else {
      this._movies
        .filter((movie) => movie.poster_path !== null)
        .forEach((movie) => {
          const movieItemElement = document.createElement('movie-item');
          movieItemElement.movie = movie;
          movieContainer.appendChild(movieItemElement);
        });
    }
  }
}

customElements.define('search-result', SearchResult);
