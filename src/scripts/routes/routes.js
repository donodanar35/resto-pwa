/* eslint-disable linebreak-style */
import ListRestaurant from '../views/pages/list-restaurant';
import DetailRestaurant from '../views/pages/detail-restaurant';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': ListRestaurant,
  '/list-restaurant': ListRestaurant,
  '/detail-restaurant/:id': DetailRestaurant,
  '/favorite': Favorite,
};

export default routes;
