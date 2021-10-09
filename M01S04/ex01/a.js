var name = prompt('Introdu numele tau');
var messageContainer = document.getElementById('message');
var alternateMessageContainer = document.getElementById('alternate-message');
var inputLength = name.replaceAll(' ', '').length;
var testLetter = 'a';
var message = '';

if (inputLength <= 3) {
  message = 'Nu ai introdus un nume suficient de lung';
} else {
  message = `Numele meu ${name}`;
}

var lenghtMessage = `Numele introdus are ${inputLength} caractere.`;
var inclusionMessage = '';

if (name.includes(testLetter)) {
  inclusionMessage = `Numele contine litera ${testLetter}`;
} else {
  inclusionMessage = `Numele nu contine litera ${testLetter}`;
}

messageContainer.innerText = message;
alternateMessageContainer.innerText = `Numele introdus are ${inputLength} caractere. | ${inclusionMessage}.`;
