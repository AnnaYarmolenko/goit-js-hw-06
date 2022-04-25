function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyBgColorEl = document.querySelector('body');
const btnChangeColorEl = document.querySelector('.change-color');
const spanColorEl = document.querySelector('span.color');


btnChangeColorEl.addEventListener("click", () => {
  bodyBgColorEl.style.backgroundColor = `${getRandomHexColor()}`;
  spanColorEl.textContent = `${getRandomHexColor()}`;
})


