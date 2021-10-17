var person = {
  name: 'Sorin',
  surname: 'Truica',
  age: 35,
  petOwner: true,
  skills: [
    'html',
    'javascript',
    'css',
    'php',
    'java',
    'python',
    'c++',
    'nodejs',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};
console.warn(
  `
  Folosind obiectul person si un for, afiseaza in consola
  skillurile de pe pozitiile pare ale arrayului.
  `,
);
for (let i = 0; i < person.skills.length; i++) {
  if (i % 2 == 0) {
    console.log(person.skills[i]);
  }
}
console.warn(`
In mod similar, afiseaza skillurile care NU incep cu j.
`);
for (let i = 0; i < person.skills.length; i++) {
  if (!person.skills[i].startsWith('j')) {
    console.log(person.skills[i]);
  }
}

console.warn(`
Folosind un for afiseaza propozitia:
"Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."
`);
let phrase = 'Prietenii mei se numesc';
for (let i = 0; i < person.friends.length; i++) {
  phrase += ' ' + person.friends[i].name + ' ' + person.friends[i].surname;
  if (i < person.friends.length - 1) {
    phrase += ',';
  } else {
    phrase += '.';
  }
}
console.log(phrase);

console.warn(`
Folosind un for, afiseaza numarul total de
ani pe care il au persoanele din arrayul friends,
doar daca varsta este mai mare sau egala cu 30 de ani.
`);
let sumFriendsOver30Years = 0;

for (let i = 0; i < person.friends.length; i++) {
  if (person.friends[i].age >= 30) {
    sumFriendsOver30Years += person.friends[i].age;
  }
}
console.log(sumFriendsOver30Years.toString());

console.warn(`
Folosind un for, afiseaza suma anilor de nastere ai persoanelor.
`);
let sumBirthYears = 0;
for (let i = 0; i < person.friends.length; i++) {
  sumBirthYears += 2021 - person.friends[i].age;
}

console.log(sumBirthYears.toString());

console.warn(`
Afiseaza diferenta
de varsta dintre persoana si prietenii din arrayul friends doar daca aceasta este mai mare de 2 ani.
`);
for (let i = 0; i < person.friends.length; i++) {
  let ageDifference = person.age - person.friends[i].age;

  if (ageDifference > 2) {
    console.log(ageDifference);
  }
}

console.warn(`
Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ",
doar daca varsta prietenului este impara.
`);
// Aici posibil sa fie o diferenta intre cerinta si pixeltab
for (let i = 0; i < person.friends.length; i++) {
  if (person.friends[i].age % 2 !== 0) {
    console.log(
      `Intre ${person.name} si ${person.friends[i].name} este o diferenta de ${
        person.age - person.friends[i].age
      } ani.`,
    );
  }
}

console.warn(
  `
  Folosind proprietatea length a arrayului skills si o bucla for,
  afiseaza in ordine inversa elementele arrayului skills.
  Atentie, va trebui sa numeri invers, de la length la 0.
  `,
);
for (let i = person.skills.length - 1; i >= 0; i--) {
  console.log(person.skills[i]);
}

console.warn(`
Folosind obiectul person si un for,
afiseaza in consola skillurile pe care le are persoana
`);

for (let i = 0; i < person.skills.length; i++) {
  console.log(person.skills[i]);
}

console.warn(`
In mod similar, afiseaza skillurile care incep cu c
`);
for (let i = 0; i < person.skills.length; i++) {
  if (person.skills[i].startsWith('c')) {
    console.log(person.skills[i]);
  }
}

console.warn(
  `
  Folosind un for afiseaza propozitia: "Numele de familie ale prietenilor mei sunt: xxx, xxx , xxx."
  `,
);
let friendsNames = 'Numele de familie ale prietenilor mei sunt:';
for (let i = 0; i < person.friends.length; i++) {
  friendsNames += ` ${person.friends[i].surname}`;
  if (i < person.friends.length - 1) {
    friendsNames += ',';
  } else {
    friendsNames += '.';
  }
}
console.log(friendsNames);

console.warn(`
Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends
`);
let friendsAgeSum = 0;
for (let i = 0; i < person.friends.length; i++) {
  friendsAgeSum += person.friends[i].age;
}
console.log(friendsAgeSum.toString());

console.warn(`
Folosind un for, afiseaza suma anilor persoanelor.
`);
let sumYearsAge = 0;
for (let i = 0; i < person.friends.length; i++) {
  sumYearsAge += person.friends[i].age;
  if (i === person.friends.length - 1) {
    sumYearsAge += person.age;
  }
}
console.log(sumYearsAge.toString());

console.warn(`
Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.
`);

for (let i = 0; i < person.friends.length; i++) {
  console.log(person.age - person.friends[i].age);
}

console.warn(`
Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani.
 Intre Dragos si Steven... ". Repeta pentru tot arrayul friends.
`);

let phraseAgeDifference = '';
for (let i = 0; i < person.friends.length; i++) {
  phraseAgeDifference += `Intre ${person.name} si ${
    person.friends[i].name
  } este o diferenta de ${person.age - person.friends[i].age} ani.`;
  if (i < person.friends.length - 1) {
    phraseAgeDifference += ' ';
  }
}
console.log(phraseAgeDifference);

console.warn(`
Afiseaza fraza “Prietenii mei sunt: xxx yyy, xxx yyy, xxx yyy.”
in ordine inversa a arrayului de prieteni.
(Numarand de la length la 0).
`);
let reversePhraseFriends = 'Prietenii mei sunt:';
for (let i = person.friends.length - 1; i >= 0; i--) {
  reversePhraseFriends += ` ${person.friends[i].name} ${person.friends[i].surname}`;
  if (i > 0) {
    reversePhraseFriends += ',';
  } else {
    reversePhraseFriends += '.';
  }
}

console.log(reversePhraseFriends);
