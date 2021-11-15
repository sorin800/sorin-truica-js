//extract div.stage from DOM
const stageElement = document.querySelector('.stage');
let stageAppearances = 0;

// bind event for mouseover
stageElement.addEventListener('mouseover', () => {
  const message = 'Mouseul este pe scena.';

  displayMessage(message);
  displayCount(`Mouseul a fost pe scena de ${++stageAppearances}`);
});

// bind event for moseout
stageElement.addEventListener('mouseout', () => {
  const message = 'Mouseul nu este pe scena.';

  displayMessage(message);
});
// extract paragraph from DOM
let messageElement = document.querySelector('.message');

// hoisting: function to display message
function displayMessage(message = '') {
  // check if paragraph is there
  if (messageElement === null) {
    messageElement = document.createElement('p');
    messageElement.classList.add('message');
    messageElement.innerText = message;
    document.body.append(messageElement);

    return;
  }
  // write to paraghraph
  messageElement.innerText = message;
}

let counterElement = document.querySelector('.counter');

function displayCount(message = '') {
  if (counterElement === null) {
    counterElement = document.createElement('p');
    counterElement.classList.add('counter');
    counterElement.innerText = message;
    document.body.append(counterElement);

    return;
  }

  counterElement.innerText = message;
}
