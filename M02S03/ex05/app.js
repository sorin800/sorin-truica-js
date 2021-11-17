// determine initial width
let windowWidth = window.innerWidth;

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
  } else {
    displayMessage('message2', 'Fereastra NU si-a schimbat latimea.');
  }

  windowWidth = newWidth;
}, 200);

window.addEventListener('resize', debouncedResize);
