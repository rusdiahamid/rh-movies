import { MovieSource } from '../data/movie-source.js';

const main = () => {
  document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('movie-title')) {
      const id = e.target.id;
      const movieDetail = await MovieSource.getMovieDetail(id);
      const movieCredits = await MovieSource.getMovieCredits(id);
      console.log(movieDetail);
      console.log(movieCredits);
      renderMovieDetail(movieDetail, movieCredits);
    }
  });

  const renderMovieDetail = (m, c) => {
    const movieDetail = showMovieDetail(m, c);
    const main = document.querySelector('main');
    main.innerHTML = movieDetail;
  };

  function showMovieDetail(m, c) {
    const genres = m.genres;
    let runtime = m.runtime * 60;
    const hours = Math.floor(runtime / 3600);
    runtime -= hours * 3600;
    let minutes = Math.floor(runtime / 60);

    const casts = c.cast;

    return `
    <div class="container">
      <h1 class="text-white text-2xl font-semibold mb-2">${m.original_title}</h1>
    
      <p class="rating-text">⭐ <strong>${m.vote_average}</strong>/10  •  <span>${hours} Jam ${minutes} Menit</span></p>
      <div class="flex flex-col lg:flex-row">
        <div class="">
          <img src="https://image.tmdb.org/t/p/w500${m.poster_path}" alt="${m.original_title}" class="rounded-md my-3 " />
        </div>
        <div class="my-2">
        ${genres.map((genre) => `<span class="text-white rounded-full bg-secondary border-white px-2 mb-3">${genre.name}</span>`.trim()).join(', ')}
          <p class="text-white text-lg leading-relaxed mt-3 lg:ml-3">${m.overview}</p>
        </div>
        <div class="flex">
        <div class="flex min-w-[200px] gap-3 overflow-x-scroll">
        ${casts.map(
          (cast) => `
          <div>          
        <img src="https://image.tmdb.org/t/p/w500${cast.profile_path}" width="100px" class="min-w-[120px]">
        <span class="text-white">${cast.name}</span>
        </div>
        `
        )}
        </div>
        </div>
        </div>
    <div>
        
    `;
  }

  const movieOnload = () => {
    nowPlayingMovies();
    upcomingMovies();
  };
  const nowPlayingMovies = async () => {
    const movies = await MovieSource.getPlayingMovies();
    console.log(movies);
    let cards = '';
    movies.forEach((m) => (cards += showCard(m)));
    const movieContainer = document.querySelector('#nowPlayingMovies');
    movieContainer.innerHTML = cards;
  };

  const upcomingMovies = async () => {
    const movies = await MovieSource.getUpcomingMovies();
    let cards = '';
    movies.forEach((m) => (cards += showCard(m)));
    const movieContainer = document.querySelector('#upcomingMovies');
    movieContainer.innerHTML = cards;
  };

  function showCard(m) {
    return `
    <div class="movie-card">
      <img src="https://image.tmdb.org/t/p/w500${m.poster_path}" alt="${m.title}" class="rounded-md bg-cover" />
      <span class="rating-text">⭐ ${m.vote_average}</span>
      <h5 class="movie-title" id="${m.id}">${m.original_title}</h5>
    </div>
    `;
  }

  movieOnload();
};

export default main;
