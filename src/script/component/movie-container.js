class MovieContainer extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    return `
    <section class="container">
    <h1 class="text-white text-xl px-3">Now Playing</h1>
    <div class="movie-container" id="nowPlayingMovies"></div>
    </section>
    `;
  }
}
