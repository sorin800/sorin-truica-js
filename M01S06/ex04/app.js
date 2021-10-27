(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const stage = document.querySelector('.stage');
    const inMessage = 'Mouseul este pe scena';
    const inMessage = 'Mouseul nu este pe scena';

    stage.addEventListener('mouseover', () => {
      showMessage(inMessage);
    });

    stage.addEventListener('mouseout', () => {
      showMessage(inMessage);
    });
  });

  // hoisting
  function showMessage(message) {
    const paragraphElement = document.createElement('p');
    paragraphElement.innerText = message;
    paragraphElement.classList.add('message');

    document.body.append(paragraphElement);
  }
})();
