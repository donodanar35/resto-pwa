/* eslint-disable linebreak-style */
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading"><center>Restoran Favorit</center></h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurant.forEach((resto) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(resto);
    });
  },
};

export default favorite;
