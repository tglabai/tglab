// Array of all 
// products
const products = [
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
  { name: 'SteelSeries Arctis Pro Wireless', image: defaultImage, link: 'https://amzn.to/4cVaNpp' },
  { name: 'Logitech C920 Webcam', image: defaultImage, link: 'https://amzn.to/42yIRnI' },
  { name: 'Razer DeathAdder V2', image: defaultImage, link: 'https://amzn.to/4lPvMhv' },
  { name: 'Blue Yeti Microphone', image: defaultImage, link: 'https://amzn.to/4iH2TBd' },
  { name: 'AMD Ryzen 9 5900X', image: defaultImage, link: 'https://amzn.to/3YlSNyl' },
  { name: 'NVIDIA GeForce RTX 3080', image: defaultImage, link: 'https://amzn.to/4cVb8sb' },
  { name: 'ASUS TUF Gaming Motherboard', image: defaultImage, link: 'https://amzn.to/439O31u' },
  { name: 'Corsair Vengeance RGB RAM', image: defaultImage, link: 'https://amzn.to/44gAC0Q' },
  { name: 'Samsung 980 Pro SSD', image: defaultImage, link: 'https://amzn.to/4d1LqlU' },
  { name: 'Cooler Master Hyper 212', image: defaultImage, link: 'https://amzn.to/3YTtvYw' },
  { name: 'NZXT H510 Case', image: defaultImage, link: 'https://amzn.to/4jAsPje' },
  { name: 'ASRock Phantom Gaming GPU', image: defaultImage, link: 'https://amzn.to/3GK0ati' },
  { name: 'Logitech G Pro Wireless Mouse', image: defaultImage, link: 'https://amzn.to/4iKmikO' },
  { name: 'Alienware AW3423DW Monitor', image: defaultImage, link: 'https://amzn.to/4jDbCFO' },
  { name: 'AOC CQ32G1 Curved Monitor', image: defaultImage, link: 'https://amzn.to/3Yph1I2' },
  { name: 'Glorious Model O Mouse', image: defaultImage, link: 'https://amzn.to/3YVpra6' }
];
$scope.products.forEach(product => {
  const safeName = product.name.toLowerCase()
    .replace(/[^a-z0-9]/gi, '-')  // Replace non-alphanumeric with dashes
    .replace(/-+/g, '-')          // Replace multiple dashes with one
    .replace(/^-|-$/g, '');       // Trim dashes at start/end
  product.image = "assets/images/" + safeName + ".jpg";
});
