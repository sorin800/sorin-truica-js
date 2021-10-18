var friends = [
  {
    name: 'Sorin',
    surname: 'Truica',
    friends: {},
  },
  {
    name: 'Larry',
    surname: 'Larryson',
    friends: {},
  },
  {
    name: 'Steven',
    surname: 'Stevenson',
    friends: {},
  },
  {
    name: 'Carol',
    surname: 'Carolson',
    friends: {},
  },
  {
    name: 'Andra',
    surname: 'Andrason',
    friends: {},
  },
];

console.warn(`
Folosind o bucla for afiseaza proprietatea
surname a tuturor obiectelor din arrayul friends.
`);
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i].surname);
}

console.warn(`
Afiseaza numele complet inversat al tuturor prietenilor, insa o
data ce l-ai gasit pe steven, opreste bucla cu ajutorul
keywordului break si afiseaza propozitia: “M-am oprit la Stevenson Steven.”.
`);
for (let i = 0; i < friends.length; i++) {
  console.log(`${friends[i].surname} ${friends[i].name}`);
  if (friends[i].name === 'Steven') {
    console.log(
      'M-am oprit la ' + friends[i].surname + ' ' + friends[i].name + '.',
    );
    break;
  }
}

console.warn(`
Folosind keywordul continue, afiseaza numele complet inversat al prietenilor, doar daca numarul de caractere total al numelor lor este mai mare
de 13 sub forma de propozitii “Prenume Nume are mai mult de 13 caractere.”.
`);

for (let i = 0; i < friends.length; i++) {
  if (friends[i].name.length + friends[i].surname.length > 13) {
    console.log(
      `${friends[i].surname} ${friends[i].name} are mai mult de 13 caractere.`,
    );
  }
}

console.warn(`
Folosind o bucla for afiseaza proprietatea name a
tuturor obiectelor din arrayul friends.
`);
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i].name);
}

console.warn(`
Afiseaza numele complet al tuturor prietenilor.
`);
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i].name + ' ' + friends[i].surname);
}

console.warn(`
Folosind keywordul break, afiseaza numele complet al prietenilor dar opeste
 bucla la primul surname care are numarul de caractere mai mare sau egal
 decat 9 si afiseaz-l intr-o propozitie de forma “M-am oprit la Nume Prenume.”.
`);
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i].name + ' ' + friends[i].surname);
  if (friends[i].surname.length >= 9) {
    console.log(
      'M-am oprit la ' + friends[i].name + ' ' + friends[i].surname + '.',
    );
    break;
  }
}
