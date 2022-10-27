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
    <input placeholder="Search Movie..." type="search" id="inputSearch" class="w-full lg:w-96 text-white pl-3 pr-10 py-2 rounded-lg  hidden lg:block ml-auto bg-dark border border-t-0 border-r-0 border-l-0 border-b-secondary focus:ring-primary focus:border-primary focus:outline-none keyword"/>
    <span class="loader z-10 text-white rounded-r-xl absolute py-2 px-2 -top-[18px] hidden lg:top-[1px]  -right-1 my-auto animate-spin-slow">${feather.icons.loader.toSvg()}</span>
    <span class="text-white absolute lg:opacity-50 -top-[10px] lg:top-2 right-3 my-auto hover:cursor-pointer btn-show-search">${feather.icons.search.toSvg()}</span>
    </div>
    `;

    this.querySelector('.btn-show-search').addEventListener('click', function () {
      document.querySelector('#inputSearch').classList.remove('hidden');
      document.querySelector('#inputSearch').focus();
      document.querySelector('.btn-show-search').classList.add('hidden');
      document.querySelector('.loader').classList.add('top-0');
      document.querySelector('.btn-show-search').classList.remove('-top-[10px]');
      document.querySelector('.logo').classList.add('hidden', 'lg:block');
      document.querySelector('search-bar').classList.add('w-full', 'lg:w-fit');
    });
    this.querySelector('#inputSearch').addEventListener('blur', function () {
      document.querySelector('#inputSearch').classList.add('hidden');
      document.querySelector('#inputSearch').placeholder = 'Search Movie...';
      document.querySelector('.btn-show-search').classList.remove('hidden');
      document.querySelector('.btn-show-search').classList.add('-top-[10px]');
      document.querySelector('.loader').classList.add('hidden');
      document.querySelector('.logo').classList.remove('hidden');
      document.querySelector('search-bar').classList.remove('w-full');
    });
    this.querySelector('#inputSearch').addEventListener('focus', function () {
      document.querySelector('#inputSearch').placeholder = 'Type the Movie title, then click enter...';
    });

    this.querySelector('#inputSearch').addEventListener('keyup', this._keyupEvent);
  }
}

customElements.define('search-bar', SearchBar);
