import moment from 'moment';
class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="movie-card">
      <img src="https://image.tmdb.org/t/p/w500${this._movie.poster_path}" alt="${this._movie.title}" class="min-h-[240px] object-cover rounded-md bg-cover" />
      <span class="rating-text">⭐ ${this._movie.vote_average}</span>
      <h5 class="movie-title show-detail" id="${this._movie.id}">${this._movie.title}</h5>
      <small class="text-white">${moment(this._movie.release_date, 'YYYY-MM-DD').format('YYYY')}</small>
    </div>
    `;
  }
}

customElements.define('movie-item', MovieItem);
