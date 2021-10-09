var object = {
  name: 'Sorin',
  surname: 'Truica',
  age: 26,
  petOwner: true,
  carOwner: true,
};
console.log(object.name);
console.log(object.age.toString());
console.log((2021 - object.age).toString());
console.log(object.name + ' s-a nascut in ' + (2021 - object.age) + '.');
console.log(
  object.name + ' ' + object.surname + ' are ' + object.age + ' ani.',
);
console.log(
  'Ma numesc ' +
    object.name +
    ' ' +
    object.surname +
    ' si am ' +
    object.age +
    ' ani.',
);
console.log(object.name + ' s-a nascut in ' + `${2021 - object.age}`);
