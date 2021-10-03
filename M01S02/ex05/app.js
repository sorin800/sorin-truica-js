console.log('Imi fac tema la JavaScript.');
document.querySelector('h1').onclick = () => showName();
document.querySelector('body').onload = () => {
  prompt('Bine ai venit, cum te cheama?');
};

function showName() {
  alert('Hello sorin');
}
