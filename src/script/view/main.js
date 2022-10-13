import { MovieSource } from '../data/movie-source.js';

const main = () => {
  document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('movie-title')) {
      const id = e.target.id;
      const movieDetail = await MovieSource.getMovieDetail(id);
      const movieCredits = await MovieSource.getMovieCredits(id);
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
    const crews = c.crew;
    const director = crews.filter((crew) => crew.job === 'Director').map((director) => director.name);
    const writer = crews
      .filter((crew) => crew.job === 'Writer')
      .map((writer) => writer.name.trim())
      .join(' • ');

    return `
    <div class="container">
      <h1 class="text-white text-2xl font-semibold mb-2">${m.original_title}</h1>
    
      <p class="rating-text">⭐ <strong>${m.vote_average}</strong>/10  •  <span>${hours} Jam ${minutes} Menit</span></p>
      <div class="flex flex-col lg:flex-row">
        <div class="">
          <img src="https://image.tmdb.org/t/p/w500${m.poster_path}" alt="${m.original_title}" class="rounded-md my-3 mx-auto" />
        </div>
        <div class="lg:ml-6">
        <div class="my-2">
        ${genres.map((genre) => `<span class="text-white rounded-full bg-secondary border-white px-2 mb-3">${genre.name}</span>`.trim()).join(' ')}
          <p class="text-white text-lg leading-relaxed mt-3">${m.overview}</p>       
        </div>
        <ul class="text-white">
          <li class="font-bold">Director</li>
          <li>${director}</li>
          <li class="font-bold">Writer</li>
          <li>${writer}</li>
        </ul>
        <div class="mt-3">
          <h1 class="text-white text-2xl mb-2">Top Cast</h1>
            <div class="flex min-w-[200px] gap-3 overflow-x-scroll">
              ${casts
                .slice(0, 9)
                .map((cast) =>
                  `
              <div class="max-w-[120px]">          
              <img src="https://image.tmdb.org/t/p/w500${cast.profile_path}" width="100px" class="min-w-[120px] rounded-md">
                <figcation class="text-center">
                <h5 class="text-white font-bold">${cast.name}</h5>
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
  }

  const movieOnload = () => {
    nowPlayingMovies();
    upcomingMovies();
  };
  const nowPlayingMovies = async () => {
    const movies = await MovieSource.getPlayingMovies();
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
