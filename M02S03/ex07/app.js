document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.btn');
  let eventListenerAdded = false;

  button.addEventListener('click', () => {
    alert('Butonul a fost apasat!');
    eventListenerAdded = true;
  });

  window.addEventListener('resize', () => {
    console.log(window.innerWidth);
    if (window.innerWidth < 650) {
      button.removeEventListener('click', () => {
        eventListenerAdded = false;
      });
    } else {
      if (!eventListenerAdded) {
        eventListenerAdded = true;
        button.addEventListener('click', () => {
          alert('Butonul a fost apasat!');
        });
      }
    }
  });
});
