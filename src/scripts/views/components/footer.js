/* eslint-disable linebreak-style */
/* eslint-disable no-useless-constructor */
/* eslint-disable linebreak-style */
class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="footer">  
        <p>Copyright &copy; 2021 - Kuliner Nusantara</p>
      </footer>`;
  }
}

customElements.define('footer-component', FooterComponent);
