const date = new Date();
const hh = date.getHours();
const mm = date.getMinutes();
const ss = date.getSeconds();

console.log(
  `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}, am ajuns la Pixellab`,
);

console.log(`${hh}:${mm}:${ss}, am ajuns la Pixellab`);

// function getTime() {
//   const exactTime = '';
//   const date = new Date();

//   exactTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

//   return exactTime;
// }
//V2
function getTime() {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

console.log(`${getTime()}, am ajuns la Pixellab`);

const paragraph = document.createElement('p');
paragraph.innerText = getTime();
document.body.append(paragraph);

setInterval(function () {
  paragraph.innerText = getTime();
}, 1000 * 1);
