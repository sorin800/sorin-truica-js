const [nodePath, modulePath, ...arguments] = process.argv;

const radius = parseFloat(arguments[0]);

if (isNaN(radius)) {
  console.warn('Raza trebuie sa fie numerica!');

  process.exit(0);
}

console.log(`Suprafata cercului este: ${calculateCircleSurface(radius)}.`);


function calculateCircleSurface(r) {
  return Math.PI * Math.pow(r, 2);
}
