function calculateSurface(...params) {
  switch (params.length) {
    case 1:
      return params[0] * params[0];
      break;
    case 2:
      return params[0] * params[1];
      break;
    case 3:
      return (
        2 *
        (params[0] * params[1] + params[0] * params[2] + params[1] * params[2])
      );
  }
}
console.log(calculateSurface(6, 7));
console.log(calculateSurface(2));
console.log(calculateSurface(20, 15, 5));

function calculateCircleArea(r) {
  return Math.PI * Math.pow(r, 2);
}
console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

let pet = {
  getName: () => 'Rex',
  getSpecies: () => 'Caine',
  getAge: () => 2,
};

console.log(
  `${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`,
);

const petAge = pet.getAge();
console.log(`Animalul meu are ${petAge} ani.`);
