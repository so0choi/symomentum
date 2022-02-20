const clockEl = document.querySelector("#clock");

const paintClock = () => {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clockEl.innerText = `${hours}:${minutes}:${seconds}`;
};
paintClock();
setInterval(paintClock, 1000);
