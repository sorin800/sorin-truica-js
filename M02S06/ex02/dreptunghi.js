const [nodePath, modulePath, ...arguments] = process.argv;

const length = parseFloat(arguments[0]);
const width = parseFloat(arguments[1]);

if (isNaN(length) || isNaN(width)) {
  console.warn('Latura/Latimea trebuiesc sa fie numerice!');

  process.exit(0);
}

console.log(`Suprafata dreptunghiului este: ${calculateRectangleSurface(length, width)}.`);


function calculateRectangleSurface(l, w) {
  return l * w;
}
