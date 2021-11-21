document.addEventListener('DOMContentLoaded', () => {
  const mediaQueryList = matchMedia('(min-width: 650px)');
  const button = document.querySelector('.btn');
  let eventListenerAdded = false;

  button.addEventListener('click', () => {
    alert('Butonul a fost apasat!');
    eventListenerAdded = true;
  });

  mediaQueryList.addEventListener('change', () => {
    console.log(window.innerWidth);

    if (mediaQueryList.matches) {
      console.log('Media query > 650px');
      if (!eventListenerAdded) {
        eventListenerAdded = true;
        button.addEventListener('click', () => {
          alert('Butonul a fost apasat!');
        });
      }
    } else {
      console.log('Media query < 650px');
      button.removeEventListener('click', () => {
        eventListenerAdded = false;
      });
    }
  });
});
