/* eslint-disable linebreak-style */
/* eslint-disable no-useless-constructor */
/* eslint-disable linebreak-style */
class NavigationComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="app-bar">
        <a class="nav-link skip-link" href="#toContent" ><b>Menuju Konten Utama</b></a>
        <div class="app-bar__menu">
            <button id="hamburgerButton">☰</button>
        </div>
        <div class="app-bar__brand">
          <a class="nav-link" href=""><b>Kuliner Nusantara</b></a>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
            <ul>
                <li><a class="nav-link" href=""><b>Home</b></a></li>
                <li><a class="nav-link" href="#/favorite"><b>Favorite</b></a></li>
                <li><a class="nav-link" href="https://www.linkedin.com/in/danar-dono-44399711a/"><b>About Us</b></a></li>
            </ul>
        </nav>
      </header>
        `;
  }
}

customElements.define('navigation-component', NavigationComponent);
