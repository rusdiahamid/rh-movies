import '../component/search-bar.js';
import '../component/search-result.js';
import '../component/popular-movies.js';
import '../component/playing-movies.js';
import '../component/detail-movie.js';
import { MovieSource } from '../data/movie-source.js';
import moment from 'moment';
import { async } from 'postcss-js';

const main = () => {
  const main = document.querySelector('main');
  const popularMoviesList = document.querySelector('popular-movies');
  const playingMoviesList = document.querySelector('playing-movies');
  const searchElement = document.querySelector('search-bar');

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
      const movies = await MovieSource.getPlayingMovies();
      playingMoviesList.movies = movies;
    } catch (message) {
      playingMoviesList.renderError(message);
    }
  };

  const onInputSearch = (e) => {
    document.querySelector('.loader').classList.remove('hidden');
    document.querySelector('.btn-show-search').classList.add('hidden');
    if (e.keyCode === 13) {
      searchExecute();
    }
  };

  const searchExecute = async () => {
    main.innerHTML = '';
    if (document.querySelector('search-result') === null) {
      const makeSearchResult = document.createElement('search-result');
      main.appendChild(makeSearchResult);
    }
    const searchResult = document.querySelector('search-result');
    searchResult.classList.remove('hidden');
    const movies = await MovieSource.searchMovie(searchElement.value);
    searchResult.movies = movies;
  };

  searchElement.keyupEvent = onInputSearch;

  document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('show-detail')) {
      main.innerHTML = '';
      const detailMoviePage = document.createElement('detail-movie');
      main.append(detailMoviePage);
      document.querySelector('#inputSearch').value = '';
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

  const movieOnload = () => {
    popularMovies();
    nowPlayingMovies();
  };

  movieOnload();
};

export default main;
