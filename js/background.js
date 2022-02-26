const IMGS = ["0.jpg", "1.jpg", "2.jpg"];

const choseImg = IMGS[Math.floor(Math.random() * IMGS.length)];

bgImageSrc = `url(img/${choseImg})`;

document.querySelector(".container").style.backgroundImage = bgImageSrc;
