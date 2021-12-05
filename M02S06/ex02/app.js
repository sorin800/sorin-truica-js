// node app 25
const [nodePath, modulePath, ...arguments] = process.argv;

if (arguments.length !== 1) {
  console.warn('Ne trebuie un singur parametru. Latura patratului.');

  // node specific:
  process.exit(0);
}

// const [value] = arguments;
const value = parseFloat(arguments[0]);

if (isNaN(value)) {
  console.warn('Latura trebuie sa fie numerica!');

  process.exit(0);
}

console.log(`Suprafata patratului cu latura de ${value} este: ${calculateSquareSurface(value)}.`);


// hoisting
function calculateSquareSurface(l) {
  return l ** 2;
}
