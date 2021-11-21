// load image & p element from DOM
const imageElement = document.getElementsByTagName('img')[0];
const messageElement = document.querySelector('.message');
messageElement.textContent = 'Imaginea se incarca.';

// bind event to image
imageElement.addEventListener('load', () => {
  console.warn(
    'Atunci cand imaginea s-a incarcat, adauga pe elementul image un eveniment de click care sa afiseze intr-o alerta mesajul: “Imaginea cu URLul: … s-a incarcat.',
  );
  messageElement.textContent = 'Imaginea s-a incarcat.';

  imageElement.addEventListener('click', () => {
    alert(
      `Imaginea cu Url-ul: ${imageElement.getAttribute('src')} s-a incarcat.`,
    );
  });
});

//v2
imageElement.onload = () => {
  messageElement.textContent = 'Imaginea s-a incarcat.';
};
