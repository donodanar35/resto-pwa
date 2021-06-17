/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading"><center>Jelajahi restoran dan kuliner di berbagai daerah Nusantara</center></h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const resto = await TheRestaurantDbSource.listRestaurant();
    const restoContainer = document.querySelector('#restaurants');
    for (let i = 0; i < resto.restaurants.length; i += 1) {
      console.log(resto.restaurants[i].name);
      restoContainer.innerHTML += createRestaurantItemTemplate(resto.restaurants[i]);
    }
  },

};

export default ListRestaurant;
