(() => {
  // no hoisting
  const showAlert = () => {
    alert('Butonul a fost apasat');
  };
  document.addEventListener('DOMContentLoaded', () => {
    const showButton = document.querySelector('#showButton');
    const toggleEventButton = document.querySelector('#toggleEventButton');
    const messageElement = document.createElement('p');
    const showParagraphMessage = 'Alerta va fi afisata';
    const hideParagraphMessage = 'Alerta nu va fi afisata';

    showButton.addEventListener('click', showAlert);
    messageElement.innerText = showParagraphMessage;
    let eventBound = true;

    document.body.append(messageElement);

    toggleEventButton.addEventListener('click', function () {
      const toggleEventButton = this; // acest this pointeaza catre obiectul toggleEventButton de mai sus
      const showMessage = 'Porneste afisarea';
      const hideMessage = 'Opreste afisarea';
      const message = '';

      if (eventBound === true) {
        //remove event listener
        showButton.removeEventListener('click', showAlert);
        message = showMessage;
        eventBound = false;
      } else {
        // add event listner
        showButton.addEventListener('click', showAlert);
        message = hideMessage;
        eventBound = true;
      }

      // refactor
      toggleEventButton.innerText = message;
    });
  });
})();
