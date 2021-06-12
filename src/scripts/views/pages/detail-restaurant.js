/* eslint-disable linebreak-style */
/* eslint-disable linebreak-style */
/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import {
  createRestaurantDetailTemplate,
  createRestaurantDetailFoodTemplate,
  createRestaurantDetailDrinkTemplate,
  createRestauranReviewTemplate,
} from '../templates/template-creator';
import favoriteButtonInitiator from '../../utils/favorite-button-initiator';

const DetailRestaurant = {
  async render() {
    return `
      <div id="resto" class="resto"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestaurantDbSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = createRestaurantDetailTemplate(resto);

    const foods = [];
    for (let i = 0; i < resto.restaurant.menus.foods.length; i += 1) {
      foods.push(resto.restaurant.menus.foods[i].name);
    }
    const menufood = foods.join(', ');
    restoContainer.innerHTML += createRestaurantDetailFoodTemplate(menufood);

    const drinks = [];
    for (let i = 0; i < resto.restaurant.menus.drinks.length; i += 1) {
      drinks.push(resto.restaurant.menus.drinks[i].name);
    }
    const menudrink = drinks.join(', ');
    restoContainer.innerHTML += createRestaurantDetailDrinkTemplate(menudrink);

    restoContainer.innerHTML += '<h3>Customer Reviews</h3>';
    for (let i = 0; i < resto.restaurant.customerReviews.length; i += 1) {
      // eslint-disable-next-line max-len
      restoContainer.innerHTML += createRestauranReviewTemplate(resto.restaurant.customerReviews[i]);
    }

    const myrestaurant = resto.restaurant;
    favoriteButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: myrestaurant.id,
        name: myrestaurant.name,
        pictureId: myrestaurant.pictureId,
        rating: myrestaurant.rating,
        city: myrestaurant.city,
        description: myrestaurant.description,
      },
    });
  },
};

export default DetailRestaurant;
