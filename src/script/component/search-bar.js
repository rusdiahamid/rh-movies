const feather = require('feather-icons');

class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set keyupEvent(event) {
    this._keyupEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#inputSearch').value;
  }

  render() {
    this.innerHTML = `
    <div class="relative">
    <input placeholder="Search Movie..." type="search" id="inputSearch" class="w-full lg:w-72 text-white pl-3 pr-10 py-2 rounded-lg  hidden lg:block ml-auto bg-dark border border-t-0 border-r-0 border-l-0 border-b-secondary focus:ring-primary focus:border-primary focus:outline-none keyword"/>
    <span class="text-white absolute -top-[10px] lg:opacity-50 lg:top-2 right-3 my-auto hover:cursor-pointer btn-search">${feather.icons.search.toSvg()}</span>
    <div>
    `;

    this.querySelector('.btn-search').addEventListener('click', function () {
      document.querySelector('#inputSearch').classList.remove('hidden');
      document.querySelector('#inputSearch').focus();
      document.querySelector('.btn-search').classList.add('top-1', 'opacity-50');
      document.querySelector('.btn-search').classList.remove('-top-[10px]');
      document.querySelector('.logo').classList.add('hidden', 'lg:block');
      document.querySelector('search-bar').classList.add('w-full', 'lg:w-fit');
    });
    this.querySelector('#inputSearch').addEventListener('blur', function () {
      document.querySelector('#inputSearch').classList.add('hidden');
      document.querySelector('.btn-search').classList.remove('top-1');
      document.querySelector('.btn-search').classList.add('-top-[10px]');
      document.querySelector('.logo').classList.remove('hidden');
      document.querySelector('search-bar').classList.remove('w-full');
    });

    this.querySelector('#inputSearch').addEventListener('keyup', this._keyupEvent);
  }
}

customElements.define('search-bar', SearchBar);
