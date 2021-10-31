const paragraphElement = document.createElement('p');
const headingElement = document.createElement('h1');
const userAgentString = navigator.userAgent.toLowerCase();
let message = '';
let browserName = '';

switch (true) {
  case userAgentString.includes('chrome'):
    message = 'Navighezi folosind Chrome';
    browserName = 'Chrome';
    break;
  case userAgentString.includes('msie'):
    message = 'Navighezi folosind Internet Explore';
    browserName = 'Internet Explore';
    break;
  case userAgentString.includes('Mozilla'):
    message = 'Navighezi folosind Mozilla Firefox';
    browserName = 'Mozilla Firefox';
    break;
  default:
    message = 'Nu stim ce browser folosesti';
    browserName = 'N/A';
    break;
}

paragraphElement.innerText = message;

document.body.append(paragraphElement);
document.body.append(headingElement);

setTimeout(() => {
  const userName = prompt(`${browserName} vrea sa stie cum te cheama.`);
  headingElement.innerText = `Salut ${userName}`;

  // callback hell
  setTimeout(() => {
    paragraphElement.remove();
  }, 3000);
}, 3000);
