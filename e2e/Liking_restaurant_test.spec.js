/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
Feature('Liking restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Like Then Unlike A Restaurant ', ({ I }) => {
  // Like a restaurant
  I.amOnPage('/');
  I.seeElement('#toContent');
  I.seeElement('.resto__title a');
  I.click(locate('.resto__title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Unlike a restaurant
  I.amOnPage('/#/favorite');
  pause();
  I.seeElement('.resto-item');
  I.seeElement('.resto__title a');
  I.click(locate('.resto__title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
});
