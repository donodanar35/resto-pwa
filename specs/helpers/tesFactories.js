/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import favoriteButtonInitiator from '../../src/scripts/utils/favorite-button-initiator';

const createLikeButtonPresenterWithRestaurant = async (resto) => {
  await favoriteButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    resto,
  });
};

export { createLikeButtonPresenterWithRestaurant };
