import '../component/search-bar.js';
import '../component/search-result.js';
import '../component/popular-movies.js';
import '../component/playing-movies.js';
import '../component/detail-movie.js';
import { MovieSource } from '../data/movie-source.js';
import moment from 'moment';

const main = () => {
  const main = document.querySelector('main');
  const popularMoviesList = document.querySelector('popular-movies');
  const popularMovies = async () => {
    try {
      const movies = await MovieSource.getPopularMovies();
      popularMoviesList.movies = movies;
    } catch (message) {
      popularMoviesList.renderError(message);
    }
  };
  const nowPlayingMovies = async () => {
    try {
      const playingMoviesList = document.querySelector('playing-movies');
      const movies = await MovieSource.getPlayingMovies();
      playingMoviesList.movies = movies;
    } catch (message) {
      playingMoviesList.renderError(message);
    }
  };

  const searchElement = document.querySelector('search-bar');

  const onInputSearch = async () => {
    try {
      main.innerHTML = '';
      const makeSearchResult = document.createElement('search-result');
      main.appendChild(makeSearchResult);
      const searchResult = document.querySelector('search-result');
      const movies = await MovieSource.searchMovie(searchElement.value);
      searchResult.movies = movies;
    } catch (err) {
      console.log(err);
    }
  };

  searchElement.keyupEvent = onInputSearch;

  document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('show-detail')) {
      main.innerHTML = '';
      const detailMoviePage = document.createElement('detail-movie');
      main.append(detailMoviePage);
      const detailMovie = document.querySelector('detail-movie');
      const id = e.target.id;
      const movieDetail = await MovieSource.getMovieDetail(id);
      const movieCredits = await MovieSource.getMovieCredits(id);
      const relatedMovies = await MovieSource.getRelatedMoviea(id);
      const details = { ...movieDetail, ...movieCredits };
      detailMovie.details = details;
      const relatedContainer = document.querySelector('related-movies');
      relatedContainer.movies = relatedMovies;
    }
  });

  // const renderMovieDetail = (m, c, r) => {
  //   const movieDetail = showMovieDetail(m, c, r);
  //   const main = document.querySelector('main');
  //   main.innerHTML = movieDetail;
  // };

  // function showMovieDetail(m, c, r) {
  //   const relatedMovies = r;
  //   const genres = m.genres;
  //   let runtime = m.runtime * 60;
  //   const hours = Math.floor(runtime / 3600);
  //   runtime -= hours * 3600;
  //   let minutes = Math.floor(runtime / 60);

  //   const casts = c.cast;
  //   const crews = c.crew;
  //   const director = crews
  //     .filter((crew) => crew.job === 'Director')
  //     .map((director) => director.name.trim())
  //     .join(' • ');
  //   const writer = crews
  //     .filter((crew) => crew.job === 'Writer')
  //     .map((writer) => writer.name.trim())
  //     .join(' • ');

  //   return `
  //   <div class="container">
  //     <h1 class="text-white text-2xl font-semibold mb-2">${m.title} (${moment(m.release_date, 'YYYY-MM-DD').format('YYYY')})</h1>
  //     <p class="rating-text">⭐ <strong>${m.vote_average}</strong>/10  •  <span>${hours} Jam ${minutes} Menit</span></p>
  //     <div class="flex flex-col lg:flex-row">
  //       <div class="flex">
  //         <img src="https://image.tmdb.org/t/p/w500${m.poster_path}" alt="${m.title}" class="lg:max-w-[350px] object-cover rounded-md my-3 mx-auto" />
  //       </div>
  //       <div class="lg:ml-6 flex-wrap overflow-x-scroll">
  //       <div class="my-2">
  //       ${genres.map((genre) => `<span class="text-white rounded-full bg-secondary border-white px-2 mb-3">${genre.name}</span>`.trim()).join(' ')}
  //         <h3 class="text-primary italic mt-3">${m.tagline}</h3>
  //         <p class="text-white text-lg leading-relaxed mt-3">${m.overview}</p>
  //       </div>
  //       <ul class="text-white">
  //         <li class="font-bold">Director</li>
  //         <li>${director}</li>
  //         <li class="font-bold">Writer</li>
  //         <li>${writer}</li>
  //       </ul>
  //       <div class="mt-3 max-w-max">
  //         <h1 class="text-white text-2xl mb-2">Top Cast</h1>
  //           <div class="flex gap-3 overflow-x-scroll">
  //             ${casts
  //               .filter((cast) => cast.profile_path !== null)
  //               .slice(0, 15)
  //               .map((cast) =>
  //                 `
  //             <div class="max-w-[120px]">
  //               <img src="https://image.tmdb.org/t/p/w500${cast.profile_path}" class="rounded-md min-w-[90px]">
  //               <figcation class="text-center">
  //               <h5 class="text-white text-sm font-semibold">${cast.name}</h5>
  //               <h6 class="text-gray-400 text-xs">${cast.character}</h6>
  //               </figcation>
  //            </div>
  //              `.trim()
  //               )
  //               .join('')}
  //           </div>
  //       </div>
  //     </div>

  //   </div>
  //   <div>
  //   <h1 class="text-white text-xl">Recommendations</h1>
  //     <div class="mt-5">
  //       <div class="flex gap-3 p-3 overflow-x-scroll">

  //       ${relatedMovies
  //         .filter((rm) => rm.backdrop_path !== null)
  //         .slice(0, 10)
  //         .map(
  //           (rm) => `
  //         <div class="max-w-[150px] movie-card">
  //         <img src="https://image.tmdb.org/t/p/w500${rm.backdrop_path}" class="min-w-[150px] rounded-md">
  //         <h5 class="show-detail text-white text-sm" id="${rm.id}">${rm.title}</h5>
  //         <small class="text-white">${moment(rm.release_date, 'YYYY-MM-DD').format('YYYY')}</small>
  //        </div>
  //        `
  //         )}
  //       </div>
  //     </div>
  //   </div>
  //   </div>

  //   `;
  // }
  const movieOnload = () => {
    popularMovies();
    nowPlayingMovies();
  };

  movieOnload();
};

export default main;
