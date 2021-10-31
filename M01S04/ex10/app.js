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
    { name: 'Steven', surname: 'Stevenson', age: 31 },
    { name: 'Carol', surname: 'Carolson', age: 29 },
  ],
};
console.warn(`
Folosind obiectul person si forEach, afiseaza skillurile din pozitiile impare ale arrayului.
`);
person.skills.forEach((skill, idx) => {
  if (idx !== 0) {
    console.log(skill);
  }
});

console.warn(`
In mod similar, afiseaza skillurile care contin litera a.
`);
person.skills.forEach((skill) => {
  if (skill.includes('a')) {
    console.log(skill);
  }
});

console.warn(`
Folosind forEach afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy si xxx yyy."
`);
let friendsPhrase = 'Prietenii mei se numesc ';
person.friends.forEach((element, idx) => {
  friendsPhrase += element.name + ' ' + element.surname;
  if (idx < person.friends.length - 1) {
    friendsPhrase += ', ';
  } else {
    friendsPhrase += '.';
  }
});
console.log(friendsPhrase);

console.warn(`
Folosind forEach, afiseaza numarul total de ani pe care
il au persoanele din arrayul friends, doar daca au varsta mai mare decat 30 inclusiv.
`);
let friendsTotalAge = 0;
person.friends.forEach((person) => {
  if (person.age >= 30) {
    friendsTotalAge += person.age;
  }
});
console.log(friendsTotalAge.toString());

console.warn(`
Folosind forEach, afiseaza suma anilor de nastere a persoanelor care au varsta impara.
`);
let friendsYearBirthSum = 0;
person.friends.forEach((person) => {
  if (person.age !== 0) {
    friendsYearBirthSum += 2021 - person.age;
  }
});
console.log(friendsYearBirthSum.toString());

console.warn(`
Afiseaza diferenta de varsta dintre persoana
 si prietenii din arrayul friends daca aceasta este mai mare sau egala cu 2 ani.
`);
person.friends.forEach((element) => {
  let ageDifference = person.age - element.age;
  if (ageDifference >= 2) {
    console.log(ageDifference);
  }
});

console.warn(`
Afiseaza fraza: "Intre Dragos si Larry
este o diferenta de xx ani. Intre Dragos si Steven... "
`);
let ageDifference = '';
person.friends.forEach((element) => {
  ageDifference += `Intre ${person.name} si ${
    element.name
  } este o diferenta de ${person.age - element.age} ani. `;
});
console.log(ageDifference.slice(0, -1));

console.warn(`
Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa elementele arrayului skills.
`);
person.skills.reverse().forEach((skill) => {
  console.log(skill);
});

console.warn(`
Folosind obiectul person si forEach, afiseaza in consola skillurile pe care le are persoana.
`);
person.skills.forEach((skill) => {
  console.log(skill);
});

console.warn(`
In mod similar, afiseaza skillurile care nu incep cu j.
`);
person.skills.forEach((skill) => {
  if (!skill.startsWith('j')) {
    console.log(skill);
  }
});

console.warn(`
Folosind forEach afiseaza propozitia: "Numele mari ale prietenilor mei sunt xxx, xxx, xxx."
`);
// Aici pixeltab pare ca se asteapta la"Numele mari ale prietenilor mei sunt Larryson, Stevenson, Carol."
// dar ultimul prieten are numele Carolson nu Carol
let friendsNamePhrase = 'Numele mari ale prietenilor mei sunt ';
person.friends.forEach((friend, idx) => {
  friendsNamePhrase += friend.surname;
  if (idx < person.friends.length - 1) {
    friendsNamePhrase += ', ';
  } else {
    friendsNamePhrase += '.';
  }
});
console.log(friendsNamePhrase);

console.warn(`
Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends
`);

let totalAgeYears = 0;

person.friends.forEach((friend) => {
  totalAgeYears += friend.age;
});

console.log(totalAgeYears.toString());

console.warn(`
Folosind forEach, afiseaza suma anilor de nastere a persoanelor
`);
// Aici pare ca pixeltab se asteapta la alta valorea si nu imi dau seama ce gresesc
let friendsBornYearSum = 0;
person.friends.forEach((friend) => {
  friendsBornYearSum += 2021 - friend.age;
});
console.log(friendsBornYearSum.toString());

console.warn(`
Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.
`);

person.friends.forEach((friend) => {
  console.log(`${(person.age - friend.age).toString()}`);
});

console.warn(`
Folosind metoda reverse si apoi forEach,
 afiseaza in ordine inversa numele complet al prietenilor din arrayul friends.
`);

person.friends.reverse().forEach((friend) => {
  console.log(`${friend.name} ${friend.surname}`);
});

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
