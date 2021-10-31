const person = {
  getName: () => {
    return 'Dragos Iordache';
  },
  getAge: () => {
    return 34;
  },
};

console.warn(`
Afiseaza primul nume al persoanei folosind metoda getName()
`);

const personFirstName = person.getName().split(' ')[0];
console.log(personFirstName);

const currentYear = new Date().getFullYear();
const personBirthYear = currentYear - person.getAge();
console.log(currentYear - person.getAge());

console.warn(`
Afiseaza ultimele doua cifre al anului de nastere al persoanei, folosind anul curent si metoda getAge(). (Exemplu: ‘87).
`);
console.log(`'${personBirthYear.toString().slice(-2)}`);

console.warn(`
Afiseaza propozita: “Ma numesc xxx si am yy ani!”
`);
console.log(`Ma numesc ${person.getName()} si am ${person.getAge()} ani!.`);

console.warn(`
Afiseaza numele intreg al persoanei folosind metoda getName()
`);
console.log(person.getName());

console.warn(`
Afiseaza varsta persoanei folosind metoda getAge()
`);
console.log(person.getAge());

console.warn(`
Afiseaza anul de nastere al persoanei, intr-o propozitie de felul “M-am nascut in aaaa.”
`);
console.log('M-am nascut in ' + (2021 - person.getAge()) + '.');

console.warn(`
Afiseaza propozita: “Ma numesc xxx yyy m-am nascut acum aa ani in anul zzzz!”
`);
console.log(
  `Ma numesc ${person.getName()} m-am nascut acum ${person.getAge()} ani in anul ${
    2021 - person.getAge()
  }!`,
);
