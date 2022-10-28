import { querySelectorAllDeep, querySelectorDeep } from 'query-selector-shadow-dom';
import '../component/search-bar.js';
import '../component/search-result.js';
import '../component/popular-movies.js';
import '../component/playing-movies.js';
import '../component/detail-movie.js';
import { MovieSource } from '../data/movie-source.js';

const main = () => {
  const main = document.querySelector('main');
  const popularMoviesList = document.querySelector('popular-movies');
  const playingMoviesList = document.querySelector('playing-movies');
  const searchElement = document.querySelector('search-bar');

  const popularMovies = async () => {
    const movies = await MovieSource.getPopularMovies();
    popularMoviesList.movies = movies;
  };
  const nowPlayingMovies = async () => {
    const movies = await MovieSource.getPlayingMovies();
    playingMoviesList.movies = movies;
  };

  const onInputSearch = (e) => {
    querySelectorDeep('.loader').classList.remove('hidden');
    // document.querySelector('body > header > search-bar').shadowRoot.querySelector('.loader').classList.remove('hidden');
    document.querySelector('body > header > search-bar').shadowRoot.querySelector('.btn-show-search').classList.add('hidden');
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

  // const onDetailClick = async () => {
  //   main.innerHTML = '';
  //   const detailMoviePage = document.createElement('detail-movie');
  //   main.append(detailMoviePage);
  //   document.querySelector('#inputSearch').value = '';
  //   const detailMovie = document.querySelector('detail-movie');
  //   const id = e.target.id;
  //   const movieDetail = await MovieSource.getMovieDetail(id);
  //   const movieCredits = await MovieSource.getMovieCredits(id);
  //   const relatedMovies = await MovieSource.getRelatedMoviea(id);
  //   const details = { ...movieDetail, ...movieCredits };
  //   detailMovie.details = details;
  //   const relatedContainer = document.querySelector('related-movies');
  //   relatedContainer.movies = relatedMovies;
  // };

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
    nowPlayingMovies();
    popularMovies();
  };

  movieOnload();
};

export default main;
