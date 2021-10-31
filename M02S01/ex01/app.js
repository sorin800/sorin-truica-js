class Car {
  constructor(
    make,
    color,
    wheels,
    speed,
    topSpeed = 160,
    topReverseSpeed = -50,
    isTrunkOpen = false,
    areLightsOn = false,
  ) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;
    this.isTrunkOpen = isTrunkOpen;
    this.areLightsOn = areLightsOn;
  }

  flashLights() {
    this.areLightsOn = true;
    window.setTimeout(() => {
      this.areLightsOn = false;
    }, 3000);
  }

  turnLightsOn() {
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.areLightsOn = false;
  }

  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  accelerate() {
    this.speed++;
  }

  decelerate() {
    this.speed--;
  }

  stop() {
    this.speed = 0;

    console.log(this.speed);
  }

  setSpeed(speed) {
    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }

    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    this.speed = speed;
  }
}

var audi = new Car('Audi', 'black', 4, 50, 240, -100);

console.warn(`
  Instantiaza o alta masina (Opel, red, cu 4 roti si viteza 3).
  O poti salva intr-o variabila numita opel.
`);
var opel = new Car('Opel', 'red', 4, 3);

var cars = [audi, opel];
console.warn(`
  Ruleaza o bucla prin forEach si afiseaza propozitiile (pentru fiecare din masini)
  “Masina era marca make si se deplasa cu speed km/h.”
  In fiecare iteratie, decelereaza masina cu 5 unitati, apoi afiseaza: “Viteza noua este speed km/h.”
`);
cars.forEach((car) => {
  console.log(
    `Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`,
  );
  car.setSpeed(car.speed - 5);
  console.log(`Viteza noua este ${car.speed} km/h.`);
  car.setSpeed(car.speed + 5);
});
