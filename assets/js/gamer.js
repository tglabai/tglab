import { products } from './data.js';angular.module('techGroupApp', [])
// data.js
const defaultImage = 'assets/images/default.jpg';

window.products = [
  { name: 'Logitech G502 Hero Mouse', image: defaultImage, link: 'https://www.amazon.com/gp/aw/d/B0B66RHD7B?th=1&tag=tglab0f-20' },
  { name: 'Razer BlackWidow V3 Keyboard', image: defaultImage, link: 'https://amzn.to/42DKL6B' },
  { name: 'Xbox Series X', image: defaultImage, link: 'https://amzn.to/3YT81eg' },
  { name: 'PlayStation 5', image: defaultImage, link: 'https://amzn.to/4cYZwEv' },
  { name: 'Nintendo Switch OLED', image: defaultImage, link: 'https://amzn.to/3EMs3Au' },
  { name: 'Elgato Stream Deck', image: defaultImage, link: 'https://amzn.to/42U8Swq' },
  { name: 'HyperX Cloud II Headset', image: defaultImage, link: 'https://amzn.to/438AzTF' },
  { name: 'Corsair K95 RGB Platinum', image: defaultImage, link: 'https://amzn.to/4k0ZXR8' },
  { name: 'ASUS ROG Strix Gaming Laptop', image: defaultImage, link: 'https://amzn.to/3GzVLcE' },
  { name: 'MSI Gaming Monitor', image: defaultImage, link: 'https://amzn.to/3Gzuzuo' },
  // add more as needed
];

angular.module('techGroupApp', [])
.controller('GamerController', function($scope) {
  // Use the products from global scope
  $scope.gamerProducts = window.products.slice(0, 10); // first 10 items
});
