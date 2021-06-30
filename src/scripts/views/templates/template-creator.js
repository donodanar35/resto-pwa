/* eslint-disable linebreak-style */
import MYCONFIG from '../../globals/myconfig';

const createRestaurantItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
        <img class="resto-item__header__poster lazyload" alt="${resto.name}"
            data-src="${MYCONFIG.BASE_IMAGE_URL_SMALL + resto.pictureId}">
        <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
            <p></p>
            <p><span class="resto-item__header__rating__score">${resto.city}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <h3 class="resto__title"><a href="${`/#/detail-restaurant/${resto.id}`}">${resto.name}</h3></a>
        <p>${resto.description}</p>
    </div>
  </div>
  `;

const createRestaurantDetailTemplate = (resto) => `
  <h2 class="resto__title">${resto.restaurant.name}</h2>
  <img class="resto__poster lazyload" data-src="${MYCONFIG.BASE_IMAGE_URL_LARGE + resto.restaurant.pictureId}" alt="${resto.restaurant.name}" />
  <div class="resto__info">
  <h3>Information</h3>
    <table>
      <tr>
        <td><h4>Rating</h4></td>
        <td> : </td>
        <td><p>⭐️ ${resto.restaurant.rating} </p></td>
      </tr>
      <tr>
        <td><h4>City</h4></td>
        <td> : </td>
        <td><p> ${resto.restaurant.city} </p></td>
      </tr>
      <tr>
        <td><h4>Address</h4></td>
        <td> : </td>
        <td><p> ${resto.restaurant.address} </p></td>
      </tr>
    </table>
  </div>
  <div class="resto__overview">
    <center><h3>Description</h3></center>
    <p>${resto.restaurant.description}</p>
  </div>
`;

const createRestaurantDetailKategoriMenuTemplate = (menu) => `
  <div class="resto__overview">
    <center><h3>Categories</h3></center>
    <p>${menu}</p>
  </div>
`;

const createRestaurantDetailFoodTemplate = (food) => `
  <div class="resto__overview">
    <center><h3>Foods</h3></center>
    <p>${food}</p>
  </div>
`;

const createRestaurantDetailDrinkTemplate = (drink) => `
  <div class="resto__overview">
    <center><h3>Drinks</h3></center>
    <p>${drink}</p>
  </div>
`;

const createRestauranReviewTemplate = (resto) => `
  <div class="review-list">
    <div class="review-item">
      <h4>${resto.name}</h4>
      <p>${resto.review}</p>
    </div>
  </div>
  `;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like first">
     Like
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="liked first">
    Liked
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantDetailFoodTemplate,
  createRestaurantDetailDrinkTemplate,
  createRestauranReviewTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
  createRestaurantDetailKategoriMenuTemplate,
};
