const boxControls = document.querySelector('.box-controls');
const boxes = document.querySelectorAll('.box');
const colorInput = document.getElementById('dynamicColor');

boxControls.addEventListener('click', (event) => {
  const targetElement = event.target;

  //get the input that was checked
  const checkedBox = document.querySelector('input[name="radioGroup"]:checked');

  //get the label that needs to be colored
  const labelToModify = document.querySelector(`label[for=${checkedBox.id}]`);

  if (
    targetElement.nodeName !== 'BUTTON' ||
    targetElement.style.backgroundColor.length <= 0
  ) {
    return;
  }

  // restore all boxes color
  boxes.forEach((box) => {
    box.style.backgroundColor = '#fff';
  });

  // needless step:
  const button = targetElement;
  const color = button.style.backgroundColor;

  labelToModify.style.backgroundColor = color;
});

boxControls.addEventListener('click', (event) => {
  const targetElement = event.target;

  if (!targetElement.classList.contains('reset')) {
    return;
  }

  const button = targetElement;
  boxes.forEach((box) => {
    box.removeAttribute('style');
  });
});

// add change for text input
colorInput.addEventListener('change', (event) => {
  // currenttarget = colorInput
  const input = event.currentTarget;
  const button = input.nextElementSibling;

  button.style.backgroundColor = input.value;
});
