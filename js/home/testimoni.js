const box = document.querySelector('.page-one');

let top = 0;

setInterval(() => {
  top = top === 0 ? 50 : 0;
  box.style.top = `${top}px`;
}, 1000);