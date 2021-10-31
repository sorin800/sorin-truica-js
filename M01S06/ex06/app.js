function paragraphLog(message) {
  var logContainer = document.querySelector('.logs'),
    messageParagraph = document.createElement('p');

  if (!logContainer) {
    logContainer = document.createElement('div');
    document.body.appendChild(logContainer);
  }

  messageParagraph.innerText = message;

  logContainer.appendChild(messageParagraph);
}

function domLog() {
  console.log('domLog called()');
}

console.log = domLog;
console.log();
