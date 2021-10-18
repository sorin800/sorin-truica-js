var person = {
  name: 'Sorin',
  surname: 'Truica',
  age: 26,
  petOwner: false,
  skills: ['html', 'css', 'java', 'javascript', 'c++', 'jquery', 'node.js'],
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
      age: 35,
    },
  ],
};

// insert rest of code here
console.warn(
  `Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca au varsta mai mare decat 30 inclusiv.
  `,
);
var sumYears = 0;
person.friends.forEach(function (friend) {
  var age = friend.age;
  if (age >= 30) {
    sumYears += friend.age;
  }
});
console.log(sumYears.toString());

console.warn(
  `
Folosind forEach, afiseaza suma anilor de nastere a persoanelor care au varsta impara.
`,
);
var sumBirthYears = 0;

person.friends.forEach(function ({ age, name }) {
  if (age % 2 === 0) {
    return;
  }

  var birthYear = 2021 - age;
  sumBirthYears += birthYear;
});
console.log(sumBirthYears.toString());

console.warn(`
 Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends daca aceasta este mai mare sau egala cu 2 ani.
`);

person.friends.forEach(function (friend) {
  var { age } = friend;
  // age = friend.age

  var ageDiff = Math.abs(person.age - age);
  if (ageDiff >= 2) {
    console.log(ageDiff);
  }
});

console.warn(`
 Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa elementele arrayului skills.
`);

person.skills.reverse().forEach(function (skill) {
  console.log(skill);
});

console.warn(
  `
 Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven..."
`,
);

var message = '';
person.friends.forEach(function (friend, index, friends) {
  var ageDiff = Math.abs(friend.age - person.age);
  var finalSpace = index === person.length - 1 ? '' : ' ';

  message = `${message}Intre ${person.name} si ${friend.age} este o diferenta de ${ageDiff} ani.${finalSpace}`;
});
