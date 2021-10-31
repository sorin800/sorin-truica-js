var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(`
Afiseaza in consola folosind metoda forEach() numele fiecarui animal.
`);

person.pets.forEach((pet) => {
  console.log(pet.name);
});

console.warn(`Folosind o bucla for afiseaza suma anilor animalelor. `);
let sumAnimalYears = 0;
person.pets.forEach((pet) => {
  sumAnimalYears += pet.age;
});
console.log(sumAnimalYears);

console.warn(`
Folosind forEach() afiseaza cate una pe linie propozitiile:
“Twix este papagal si are 4 ani. Mars este caine si are… etc”.
`);
person.pets.forEach((pet) => {
  console.log(`${pet.name} este ${pet.species} si are ${pet.age} ani.`);
});

console.warn(`
Folosind o bucla for afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o diferenta de xx ani.
 Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).
`);
person.pets.forEach((pet) => {
  console.log(
    'Intre ' +
      person.firstName +
      ' si ' +
      pet.name +
      ' este o diferenta de ' +
      (2021 - person.birthYear - pet.age) +
      ' ani.',
  );
});

console.warn(`

Folosind o bucla for afiseaza in ordine inversa numele animalelor
din array sub forma de propozitii: “Animalul meu se numeste xxxx.”.
`);

person.pets.reverse().forEach((pet) => {
  console.log('Animalul meu se numeste ' + pet.name);
});

console.warn(`
Folosind o bucla for afla care este cel mai in varsta animal si afiseaza propozitia:
 “xxx este cel mai batran animal pe care il am, dar intre noi este o diferenta de xx ani.”
`);

let maxAgePet = 0;
let petName = '';
let ageDifference = 0;
person.pets.forEach((pet) => {
  if (pet.age > maxAgePet) {
    maxAgePet = pet.age;
    petName = pet.name;
    ageDifference = 2021 - person.birthYear - pet.age;
  }
});
console.log(
  `${petName} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${ageDifference} ani.`,
);

console.warn(`
Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.
`);

let petSpeciesPhrase = 'Am ';
person.pets.reverse().forEach((pet, idx) => {
  petSpeciesPhrase += pet.species;
  if (idx < person.pets.length - 2) {
    petSpeciesPhrase += ', ';
  } else if (idx === person.pets.length - 2) {
    petSpeciesPhrase += ' si ';
  } else {
    petSpeciesPhrase += '.';
  }
});
console.log(petSpeciesPhrase);
