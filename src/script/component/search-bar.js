class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <input placeholder="Search Movie..." type="text" id="inputSearch" class="w-full lg:w-64 text-white px-3 py-2 rounded-lg  hidden lg:block ml-auto bg-dark border border-t-0 border-r-0 border-l-0 border-b-secondary focus:ring-primary focus:border-primary focus:outline-none keyword"/>
    <span class="text-white my-auto hover:cursor-pointer lg:hidden btn-search">Search</span>
    `;

    this.querySelector('.btn-search').addEventListener('click', function () {
      document.querySelector('#inputSearch').classList.remove('hidden');
      document.querySelector('#inputSearch').focus();
      document.querySelector('.btn-search').classList.add('hidden');
      document.querySelector('.logo').classList.add('hidden');
      document.querySelector('search-bar').classList.add('w-full');
    });
    this.querySelector('#inputSearch').addEventListener('blur', function () {
      document.querySelector('#inputSearch').classList.add('hidden');
      document.querySelector('.btn-search').classList.remove('hidden');
      document.querySelector('.logo').classList.remove('hidden');
      document.querySelector('search-bar').classList.remove('w-full');
    });
  }
}

customElements.define('search-bar', SearchBar);
