class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="movie-card">
      <img src="https://image.tmdb.org/t/p/w500${m.poster_path}" alt="${m.title}" class="min-h-[240px] object-cover rounded-md bg-cover" />
      <span class="rating-text">⭐ ${m.vote_average}</span>
      <h5 class="movie-title show-detail" id="${m.id}">${m.title}</h5>
      <small class="text-white">${moment(m.release_date, 'YYYY-MM-DD').format('YYYY')}</small>
    </div>
    `;
  }
}

customElements.define('movie-item', MovieItem);
