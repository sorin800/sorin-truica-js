const car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  isThrunkOpen: false,
  accelerate: function () {
    this.speed++;
  },
  decelerate: function () {
    this.speed--;
  },
  openTrunk: function () {
    this.isThrunkOpen = true;
  },
  closeThrunk: function () {
    this.isThrunkOpen = false;
  },
};
