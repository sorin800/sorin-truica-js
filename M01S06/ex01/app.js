const car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  isTrunkOpen: false,
  areLightsOn: false,
  topSpeed: 160,
  topReverseSpeed: -50,
  stop: function () {
    this.speed = 0;
    console.log(this.speed);
  },
  setSpeed: function (speed) {
    if (speed >= this.topReverseSpeed && speed <= this.topSpeed) {
      this.speed = speed;
    }
  },
  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },
  flashLights: function () {
    this.turnLightsOn();
    window.setTimeout(() => {
      this.turnLightsOff();
    }, 2000);
  },
  accelerate: function () {
    this.speed++;
  },
  decelerate: function () {
    this.speed--;
  },
  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },
};

console.log(`Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`);
