// determine initial width
let windowWidth = window.innerWidth;
let windowArea = 0;

//no hoisting
const displayMessage = (cssClass, message) => {
  let paragraphElement = document.querySelector(`.${cssClass}`);

  if (paragraphElement === null) {
    paragraphElement = document.createElement('p');
    paragraphElement.classList.add(cssClass);
    paragraphElement.innerText = message;

    document.body.append(paragraphElement);

    return;
  }

  paragraphElement.innerText = message;
};

displayMessage('message1', `Latimea ferestre este ${windowWidth}`);
displayMessage('message2', 'Fereastra NU si-a schimbat latimea.');

const debouncedResize = debounce(() => {
  const newWidth = window.innerWidth;
  displayMessage('message1', `Latimea ferestre este ${newWidth}.`);

  // is initial window width ==== to new window width
  if (newWidth !== windowWidth) {
    displayMessage('message2', 'Fereastra si-a schimba latimea.');
    windowArea = window.innerWidth * window.innerHeight;
    displayMessage('message3', `Fereastra are acum suprafata de ${windowArea}`);
  } else {
    displayMessage('message2', 'Fereastra NU si-a schimbat latimea.');
  }

  windowWidth = newWidth;
}, 200);

window.addEventListener('resize', debouncedResize);

window.addEventListener('DOMContentLoaded', () => {
  windowArea = window.innerWidth * window.innerHeight;
  displayMessage('message3', `Fereastra are acum suprafata de ${windowArea}`);
});
