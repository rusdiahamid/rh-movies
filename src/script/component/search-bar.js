import { querySelectorDeep } from 'query-selector-shadow-dom';
const feather = require('feather-icons');

class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set keyupEvent(event) {
    this._keyupEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#inputSearch').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
      *,
    ::before,
    ::after {
      box-sizing: border-box;
      /* 1 */
      border-width: 0;
      /* 2 */
      border-style: solid;
      /* 2 */
      border-color: #e5e7eb;
      /* 2 */
    }
    .absolute {
      position: absolute;
    }
    
    .relative {
      position: relative;
    }
    .hidden {
      display: none;
    }
    :host{
      margin-top: auto;
      margin-bottom: auto;
      margin-left: auto;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    
    @media (min-width: 768px) {
      :host{
        width: 24rem;
      }
    }
    
    .input-search {
      margin-left: auto;
      width: 100%;
      border-radius: 0.5rem;
      border-width: 1px;
      border-top-width: 0px;
      border-right-width: 0px;
      border-left-width: 0px;
      --tw-border-opacity: 1;
      border-bottom-color: rgb(6 70 99 / var(--tw-border-opacity));
      --tw-bg-opacity: 1;
      background-color: rgb(4 28 50 / var(--tw-bg-opacity));
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-left: 0.75rem;
      padding-right: 2.5rem;
      --tw-text-opacity: 1;
      color: rgb(255 255 255 / var(--tw-text-opacity));
    }
    
    .input-search:focus {
      --tw-border-opacity: 1;
      border-color: rgb(236 179 101 / var(--tw-border-opacity));
      outline: 2px solid transparent;
      outline-offset: 2px;
      --tw-ring-opacity: 1;
      --tw-ring-color: rgb(236 179 101 / var(--tw-ring-opacity));
    }
    
    @media (min-width: 768px) {
      .input-search {
        display: block;
        width: 24rem;
      }
    }
    .loader-icon {
      position: absolute;
      top: -10px;
      right: -0.25rem;
      z-index: 10;
      margin-top: auto;
      margin-bottom: auto;
    }
    
    @-webkit-keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
    
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
    
    .loader-icon {
      -webkit-animation: spin 5s linear infinite;
              animation: spin 5s linear infinite;
      border-top-right-radius: 0.75rem;
      border-bottom-right-radius: 0.75rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      --tw-text-opacity: 1;
      color: rgb(255 255 255 / var(--tw-text-opacity));
    }
    
    @media (min-width: 768px) {
      .loader-icon {
        top: -10px;
      }
    }
    .btn-show-search {
      position: absolute;
      top: -10px;
      right: 0.75rem;
      margin-top: auto;
      margin-bottom: auto;
      --tw-text-opacity: 1;
      color: rgb(255 255 255 / var(--tw-text-opacity));
    }
    
    .btn-show-search:hover {
      cursor: pointer;
    }
    
    @media (min-width: 768px) {
      .btn-show-search {
        top: 0;
        opacity: 0.5;
      }
    }
    
    
    

    </style>
    <div class="relative">
    <input placeholder="Search Movie..." type="text" id="inputSearch" class="input-search hidden  "/>
    <span class="loader hidden loader-icon">${feather.icons.loader.toSvg()}</span>
    <span class="btn-show-search">${feather.icons.search.toSvg()}</span>
    </div>
    `;

    this.shadowDOM.querySelector('.btn-show-search').addEventListener('click', function () {
      querySelectorDeep('#inputSearch').classList.remove('hidden');
      querySelectorDeep('#inputSearch').focus();
      querySelectorDeep('.btn-show-search').classList.add('hidden');
      querySelectorDeep('.loader').classList.add('top-0');
      querySelectorDeep('.btn-show-search').classList.remove('-top-[10px]');
      querySelectorDeep('.logo').classList.add('hidden', 'lg:block');
      querySelectorDeep('search-bar').classList.add('w-full', 'lg:w-fit');
    });
    this.shadowDOM.querySelector('#inputSearch').addEventListener('blur', function () {
      querySelectorDeep('#inputSearch').classList.add('hidden');
      querySelectorDeep('#inputSearch').placeholder = 'Search Movie...';
      querySelectorDeep('.btn-show-search').classList.remove('hidden');
      querySelectorDeep('.btn-show-search').classList.add('-top-[10px]');
      querySelectorDeep('.loader').classList.add('hidden');
      querySelectorDeep('.logo').classList.remove('hidden');
      querySelectorDeep('search-bar').classList.remove('w-full');
    });
    this.shadowDOM.querySelector('#inputSearch').addEventListener('focus', function () {
      querySelectorDeep('#inputSearch').placeholder = 'Type the Movie title, then click enter...';
    });

    this.shadowDOM.querySelector('#inputSearch').addEventListener('keyup', this._keyupEvent);
  }
}

customElements.define('search-bar', SearchBar);
