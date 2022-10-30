class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.render();
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
    :host{
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    .logo {
      margin-top: auto;
      margin-bottom: auto;
      background-image: linear-gradient(to top right, var(--tw-gradient-stops));
      --tw-gradient-from: #fff;
      --tw-gradient-to: rgb(255 255 255 / 0);
      --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
      --tw-gradient-to: #ECB365;
      -webkit-background-clip: text;
              background-clip: text;
      padding-left: 0.75rem;
      padding-right: 0.75rem;
      font-size: 1.5rem;
      line-height: 2rem;
      font-weight: 700;
      color: transparent;
    }
    .hidden {
      display: none;
    }
    .lg\:block {
      display: block;
    }
    

    </style>
        <a href="" class="logo">RH Movies</a>
         `;
  }
}

customElements.define('app-bar', AppBar);
