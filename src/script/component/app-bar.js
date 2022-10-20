class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <a href="" class="logo text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-white to-primary">RH Movies</a>
         `;
    const searchBar = document.createElement('search-bar');
    this.appendChild(searchBar);
  }
}

customElements.define('app-bar', AppBar);
