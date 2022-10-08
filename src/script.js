const apiKey = '739949faaf1aeda8232538dbe179ea8d';

fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=739949faaf1aeda8232538dbe179ea8d&language=id-ID&page=1&region=ID`)
  .then((response) => response.json())
  .then((response) => {
    const movies = response.results;
    console.log(movies);
    let cards = '';
    movies.forEach((m) => (cards += showCard(m)));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
  });

function showCard(m) {
  return `
  <div class="min-w-[160px] w-40 cursor-pointer hover:scale-110 hover:-translate-y-1 duration-300 ease-in-out">
  <img src="https://image.tmdb.org/t/p/w500${m.poster_path}" alt="" class="rounded-md bg-cover" />
  <span class="text-white text-sm mt-3">⭐ ${m.vote_average}</span>
  <h5 class="text-white text-md overflow-hidden">${m.title}</h5>
  </div>
  `;
}
