class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  accelerate(speed = 1) {
    this.speed += speed;

    return this;
  }

  decelerate(speed = 1) {
    this.speed -= speed;

    return this;
  }

  setSpeed(speed) {
    this.speed = speed;
    return this;
  }
}

const audi = new Car('Audi', 'black', 4, 50);

console.warn(
  `Adu instanta masinii la viteza 55 apoi redu la 52, folosind chaining.`,
);
audi
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .decelerate()
  .decelerate()
  .decelerate();

console.warn(
  `Afiseaza in DOM (prin orice metoda) viteza instantei dupa lantul de metode.`,
);
const speedDisplay = document.createElement('p');
speedDisplay.textContent = `Instanta ${audi.make} are viteza: ${audi.speed}.`;

document.body.append(speedDisplay);

console.warn(
  `Ridica viteza cu 12 apoi coboar-o cu 3 si apoi inca o data cu 4. `,
);
audi.accelerate(12).decelerate(3).accelerate(4);

console.warn(`Afiseaza viteza noua in DOM.`);
const newSpeed = document.createElement('p');
newSpeed.textContent = `Viteza noua este: ${audi.speed}.`;
document.body.append(newSpeed);

console.warn(`
Folosind noua metoda seteaza viteza la 4, apoi accelereaza la 5 folosind chaining.
`);
audi.setSpeed(4).accelerate(5);

console.warn(`
Afiseaza noua valoare in DOM.
`);
newSpeed.textContent = `Viteza noua este: ${audi.speed}.`;
