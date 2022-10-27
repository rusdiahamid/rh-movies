import moment from 'moment';
import '../component/movie-item.js';
import '../component/ralated-movies.js';
class DetailMovie extends HTMLElement {
  set details(details) {
    this._details = details;
    this.render();
  }

  renderRelated() {
    console.log(this._movies);
  }

  render() {
    let runtime = this._details.runtime * 60;
    const hours = Math.floor(runtime / 3600);
    runtime -= hours * 3600;
    let minutes = Math.floor(runtime / 60);

    const genres = this._details.genres;

    const casts = this._details.cast;
    const crews = this._details.crew;
    const director = crews
      .filter((crew) => crew.job === 'Director')
      .map((director) => director.name.trim())
      .join(' • ');
    const writer = crews
      .filter((crew) => crew.job === 'Writer')
      .map((writer) => writer.name.trim())
      .join(' • ');

    this.innerHTML = `
    <div class="container mb-7">
    <h1 class="text-white text-2xl font-semibold mb-2">${this._details.title} (${moment(this._details.release_date, 'YYYY-MM-DD').format('YYYY')})</h1>
      <p class="rating-text">⭐ <strong>${this._details.vote_average}</strong>/10  •  <span>${hours} h ${minutes} m</span></p>
      <div class="flex flex-col lg:flex-row">
        <div class="flex">
          <img src="https://image.tmdb.org/t/p/w500${this._details.poster_path}" alt="${this._details.title}" class="lg:max-w-[350px] object-cover rounded-md my-3 mx-auto" />
        </div>
        <div class="lg:ml-6 flex-wrap overflow-x-scroll">
        <div class="my-2">
        ${genres.map((genre) => `<span class="text-white rounded-full bg-secondary border-white px-2 mb-3">${genre.name}</span>`.trim()).join(' ')}
          <h3 class="text-primary italic mt-3">${this._details.tagline}</h3>
          <p class="text-white text-lg leading-relaxed mt-3">${this._details.overview}</p>       
        </div>
        <ul class="text-white">
          <li class="font-bold">Director</li>
          <li>${director}</li>
          <li class="font-bold">Writer</li>
          <li>${writer}</li>
        </ul>
        <div class="mt-3 max-w-max">
        <h1 class="text-white text-2xl mb-2">Top Cast</h1>
          <div class="flex gap-3 overflow-x-scroll">
            ${casts
              .filter((cast) => cast.profile_path !== null)
              .slice(0, 15)
              .map((cast) =>
                `
            <div class="max-w-[150px]">          
              <img src="https://image.tmdb.org/t/p/w500${cast.profile_path}" class="rounded-full min-w-[120px] h-[120px] object-cover object-top">
              <figcation class="text-center">
              <h5 class="text-white text-sm font-semibold">${cast.name}</h5>
              <h6 class="text-gray-400 text-xs">${cast.character}</h6>
              </figcation>
           </div>
             `.trim()
              )
              .join('')}
          </div>
      </div>
    </div>
    </div>
    </div>
    `;

    const recommendPage = document.createElement('related-movies');
    this.append(recommendPage);
    recommendPage.details = this._details;
  }
}

customElements.define('detail-movie', DetailMovie);
