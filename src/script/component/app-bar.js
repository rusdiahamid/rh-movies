class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <a href="" class="logo my-auto text-2xl px-3 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-white to-primary">RH Movies</a>
         `;
    // const searchBar = document.createElement('search-bar');
    // this.appendChild(searchBar);
  }
}

customElements.define('app-bar', AppBar);
