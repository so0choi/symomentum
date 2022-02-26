const NUMBER_OF_IMAGES = 5;
const IMGS = [...Array(NUMBER_OF_IMAGES).keys()];

const choseImg = IMGS[Math.floor(Math.random() * IMGS.length)];

bgImageSrc = `url(img/${choseImg}.jpg)`;

document.querySelector(".container").style.backgroundImage = bgImageSrc;
