import { MovieSource } from '../data/movie-source.js';
import moment from 'moment';

const main = () => {
  document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('show-detail')) {
      const id = e.target.id;
      const movieDetail = await MovieSource.getMovieDetail(id);
      const movieCredits = await MovieSource.getMovieCredits(id);
      const relatedMovies = await MovieSource.getRelatedMoviea(id);
      renderMovieDetail(movieDetail, movieCredits, relatedMovies);
    }
  });

  const btnSearch = document.querySelector('.search-movie');
  btnSearch.addEventListener('click', () => {
    const searchBar = document.querySelector('#searchBar');
    searchBar.classList.toggle('hidden');
    searchBar.classList.toggle('flex');
  });

  document.addEventListener('keyup', async function (e) {
    if (e.target.classList.contains('keyword')) {
      const resultsContainer = document.querySelector('#searchResult');
      resultsContainer.classList.remove('hidden');
      const results = await MovieSource.searchMovie(e.target.value);
      let cards = '';
      results.filter((m) => m.poster_path !== null).forEach((m) => (cards += renderResults(m)));
      const movieContainer = document.querySelector('.results-container');
      movieContainer.innerHTML = cards;
    }
  });

  function renderResults(m) {
    return `<div class="movie-card">
    <img src="https://image.tmdb.org/t/p/w500${m.poster_path}" alt="${m.title}" class="min-h-[240px] object-cover rounded-md bg-cover" />
    <span class="rating-text">⭐ ${m.vote_average}</span>
    <h5 class="movie-title show-detail" id="${m.id}">${m.title}</h5>
    <small class="text-white">${moment(m.release_date, 'YYYY-MM-DD').format('YYYY')}</small>
  </div>`;
  }

  const renderMovieDetail = (m, c, r) => {
    const movieDetail = showMovieDetail(m, c, r);
    const main = document.querySelector('main');
    main.innerHTML = movieDetail;
  };

  function showMovieDetail(m, c, r) {
    const relatedMovies = r;
    const genres = m.genres;
    let runtime = m.runtime * 60;
    const hours = Math.floor(runtime / 3600);
    runtime -= hours * 3600;
    let minutes = Math.floor(runtime / 60);

    const casts = c.cast;
    const crews = c.crew;
    const director = crews
      .filter((crew) => crew.job === 'Director')
      .map((director) => director.name.trim())
      .join(' • ');
    const writer = crews
      .filter((crew) => crew.job === 'Writer')
      .map((writer) => writer.name.trim())
      .join(' • ');

    return `
    <div class="container">
      <h1 class="text-white text-2xl font-semibold mb-2">${m.title} (${moment(m.release_date, 'YYYY-MM-DD').format('YYYY')})</h1>
      <p class="rating-text">⭐ <strong>${m.vote_average}</strong>/10  •  <span>${hours} Jam ${minutes} Menit</span></p>
      <div class="flex flex-col lg:flex-row">
        <div class="flex">
          <img src="https://image.tmdb.org/t/p/w500${m.poster_path}" alt="${m.title}" class="lg:max-w-[350px] object-cover rounded-md my-3 mx-auto" />
        </div>
        <div class="lg:ml-6 flex-wrap overflow-x-scroll">
        <div class="my-2">
        ${genres.map((genre) => `<span class="text-white rounded-full bg-secondary border-white px-2 mb-3">${genre.name}</span>`.trim()).join(' ')}
          <h3 class="text-primary italic mt-3">${m.tagline}</h3>
          <p class="text-white text-lg leading-relaxed mt-3">${m.overview}</p>       
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
              <div class="max-w-[120px]">          
                <img src="https://image.tmdb.org/t/p/w500${cast.profile_path}" class="rounded-md min-w-[90px]">
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
    <div>
    <h1 class="text-white text-xl">Related Movie</h1>
      <div class="mt-5">
        <div class="flex gap-3 p-3 overflow-x-scroll">
         
        ${relatedMovies
          .filter((rm) => rm.backdrop_path !== null)
          .slice(0, 10)
          .map(
            (rm) => `
          <div class="max-w-[150px] movie-card">   
          <img src="https://image.tmdb.org/t/p/w500${rm.backdrop_path}" class="min-w-[150px] rounded-md">
          <h5 class="show-detail text-white text-sm" id="${rm.id}">${rm.title}</h5>
          <small class="text-white">${moment(rm.release_date, 'YYYY-MM-DD').format('YYYY')}</small>
         </div>
         `
          )}
        </div>
      </div>
    </div>
    </div>
        
    `;
  }

  const movieOnload = () => {
    nowPlayingMovies();
    popularMovies();
  };
  const nowPlayingMovies = async () => {
    const movies = await MovieSource.getPlayingMovies();
    let cards = '';
    movies.filter((movie) => movie.poster_path !== null).forEach((m) => (cards += showCard(m)));
    const movieContainer = document.querySelector('#nowPlayingMovies');
    movieContainer.innerHTML = cards;
  };

  const popularMovies = async () => {
    const movies = await MovieSource.getPopularMovies();
    let cards = '';
    movies.forEach((m) => (cards += showCard(m)));
    const movieContainer = document.querySelector('#popularMovies');
    movieContainer.innerHTML = cards;
  };

  function showCard(m) {
    return `
    <div class="movie-card">
      <img src="https://image.tmdb.org/t/p/w500${m.poster_path}" alt="${m.title}" class="min-h-[240px] object-cover rounded-md bg-cover" />
      <span class="rating-text">⭐ ${m.vote_average}</span>
      <h5 class="movie-title show-detail" id="${m.id}">${m.title}</h5>
      <small class="text-white">${moment(m.release_date, 'YYYY-MM-DD').format('YYYY')}</small>
    </div>
    `;
  }

  movieOnload();
};

export default main;
