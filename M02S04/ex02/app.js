const boxControls = document.querySelector('.box-controls');
const box = document.querySelector('.box');
const colorInput = document.getElementById('dynamicColor');

boxControls.addEventListener('click', (event) => {
  const targetElement = event.target;

  if (
    targetElement.nodeName !== 'BUTTON' ||
    targetElement.style.backgroundColor.length <= 0
  ) {
    return;
  }

  // needless step:
  const button = targetElement;
  const color = button.style.backgroundColor;

  box.style.backgroundColor = color;
});

boxControls.addEventListener('click', (event) => {
  const targetElement = event.target;

  if (!targetElement.classList.contains('reset')) {
    return;
  }

  const button = targetElement;
  box.removeAttribute('style');
});

// add change for text input
colorInput.addEventListener('change', (event) => {
  // currenttarget = colorInput
  const input = event.currentTarget;
  const button = input.nextElementSibling;

  button.style.backgroundColor = input.value;
});
