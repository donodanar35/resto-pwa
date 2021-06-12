/* eslint-disable linebreak-style */
/* eslint-disable no-useless-constructor */
/* eslint-disable linebreak-style */
class JumbotronComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="jumbotron">
            <h1>Kuliner Nusantara</h1>
            <p class="tagline">&ldquo;Jelajahi kuliner nusantara&rdquo;</p>
        </div>
        `;
  }
}

customElements.define('jumbotron-component', JumbotronComponent);
