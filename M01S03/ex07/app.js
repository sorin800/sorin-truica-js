let person = {
  firstName: 'Popescu',
  lastName: 'Viorel',
  email: 'popescuviorel@gmail.com',
  birthYear: 1985,
  pets: [
    {
      name: 'Ozi',
      species: 'Pisica',
      age: 3,
    },
    {
      name: 'Lord',
      species: 'Caine',
      age: 12,
    },
    {
      name: 'Rex',
      species: 'Caine',
      age: 9,
    },
  ],
  zipCode: '061234',
};

console.warn(`
Afiseaza propozitia: “Numele meu este: xxx si yyy si am x animale.”.
`);
console.log(
  'Numele meu este: ' +
    person.firstName +
    ' si ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.warn(`
  Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.
`);
console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.warn(`
Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”
`);
console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.warn(`
Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.
`);
console.log((2021 - person.pets[2].age).toString());

console.warn(`
Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul
de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent.
`);
let difference = 2021 - person.birthYear - person.pets[0].age;
console.log(difference.toString());

console.warn(`
Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName.
`);
let petName = person.pets[0].name;

console.warn(`
Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.
`);
console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    person.pets[0].name +
    ' este o diferenta de ' +
    difference +
    ' ani.',
);
