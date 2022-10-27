import '../component/movie-item.js';

class SearchResult extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  get value() {
    return document.querySelector('#inputSearch').value;
  }

  render() {
    this.innerHTML = `<h1 class="text-white text-xl px-3">Search Results</h1>`;
    const movieContainer = document.createElement('movie-container');
    this.append(movieContainer);
    if (!this._movies) {
      alert('type something');
    } else if (this._movies.length < 1) {
      movieContainer.innerHTML = `<h1 class="text-white mx-auto text-xl">No results found for <span class="font-bold">${this.value}</span>.</h1>`;
    } else {
      this._movies
        .filter((movie) => movie.backdrop_path !== null)
        .forEach((movie) => {
          const resultItemElement = document.createElement('movie-item');
          resultItemElement.movie = movie;
          movieContainer.appendChild(resultItemElement);
        });
    }
  }
}

customElements.define('search-result', SearchResult);
