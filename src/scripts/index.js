/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import './views/components/navigation';
import './views/components/jumbotron.js';
import './views/components/footer.js';
import App from './views/app';
import swRegister from './utils/sw-register';

import('lazysizes')
  .then((module) => module.default)
  .catch((error) => { console.log(error); });

import('lazysizes/plugins/parent-fit/ls.parent-fit')
  .then((module) => module.default)
  .catch((error) => { console.log(error); });

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
