angular.module('techGroupApp', [])
.controller('GamerController', function($scope) {
  const placeholder = 'images/gamer-placeholder.jpg';

  $scope.gamerProducts = [
    { name: 'Logitech G502 Hero', image: placeholder, link: '#' },
    { name: 'Razer BlackWidow V3', image: placeholder, link: '#' },
    { name: 'PlayStation 5 Console', image: placeholder, link: '#' },
    { name: 'Xbox Series X', image: placeholder, link: '#' },
    { name: 'Nintendo Switch OLED', image: placeholder, link: '#' },
    { name: 'Elgato Stream Deck', image: placeholder, link: '#' },
    { name: 'HyperX Cloud II Headset', image: placeholder, link: '#' },
    { name: 'ASUS ROG Strix Laptop', image: placeholder, link: '#' },
    { name: 'Corsair K95 RGB', image: placeholder, link: '#' },
  ];
});
