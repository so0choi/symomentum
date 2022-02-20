const IMGS = ["0.jpg", "1.jpg", "2.jpg"];

const choseImg = IMGS[Math.floor(Math.random() * IMGS.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${choseImg}`;

document.body.appendChild(bgImage);
