const box = document.querySelector('.box');
// bad selector;
const applyButton = document.querySelector('button[title="Aplica"]');
const darkenButton = document.querySelector('button[title="Intuneca"]');
const animateClass = 'animate-class';

setTimeout(() => {
  box.classList.add(animateClass);

  // callback hell
  setTimeout(() => {
    box.classList.remove(animateClass);
  }, 1 * 1000);
}, 1 * 1000);

applyButton.addEventListener('click', (event) => {
  // element on which the event was bound
  const applyButton = event.currentTarget;
  box.classList.toggle(animateClass);

  // if (box.classList.contains(animateClass)) {
  //   applyButton.innerText = 'Elimina';
  // } else {
  //   applyButton.innerText = 'Aplica';
  // }

  let buttonText = 'Aplica';
  let buttonTitleText = 'Aplica';
  if (box.classList.contains(animateClass)) {
    buttonText = 'Elimina';
    buttonTitleText = 'Elimina';
  }

  applyButton.innerText = buttonText;
  applyButton.title = buttonTitleText;
});

darkenButton.addEventListener('click', (event) => {
  box.setAttribute('style', 'background-color: #000;');
});
