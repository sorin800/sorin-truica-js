var person = {
  name: 'Sorin',
  surname: 'Truica',
  age: 26,
  petOwner: true,
  skills: {
    html: true,
    css: true,
    javaScript: true,
    driving: true,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  },
};

console.warn(`
Folosind Object.keys() pe proprietatea skills, afiseaza abilitatile persoanei daca acestea sunt true.
`);

Object.keys(person.skills).forEach((skill) => {
  if (person.skills[skill] === true) {
    console.log(person.name + ' cunoaste: ' + skill + '.');
  }
});

console.warn(`
Prin aceeasi metoda, afiseaza o lista inversata cu numele complet inversat al prietenilor.
`);
Object.keys(person.friends)
  .reverse()
  .forEach((friendName) => {
    console.log(
      `${person.friends[friendName].surname} ${person.friends[friendName].name}`,
    );
  });

console.warn(`
Afiseaza propozitia: “Prietenii mei sunt Larry, Steven si Carol.” folosind Object.keys()
`);

let friendNamesPhrase = 'Prietenii mei sunt ';
Object.keys(person.friends).forEach((personName, idx) => {
  friendNamesPhrase += person.friends[personName].name;
  if (idx < Object.keys(person.friends).length - 2) {
    friendNamesPhrase += ', ';
  } else if (idx === Object.keys(person.friends).length - 2) {
    friendNamesPhrase += ' si ';
  } else {
    friendNamesPhrase += '.';
  }
});
console.log(friendNamesPhrase);

console.warn(`
Folosind bucla, afiseaza mai multe propozitii (cate una per console.log())
 care sa afiseze:
“Diferenta de varsta intre Larry si Dragos este de xxx ani.” etc…
`);
Object.keys(person.friends).forEach((friendName) => {
  console.log(
    `Diferenta de varsta intre ${person.friends[friendName].name} si ${
      person.name
    } este de ${person.age - person.friends[friendName].age} ani.`,
  );
});

console.warn(`
Folosind Object.keys() pe proprietatea skills,
 afiseaza toate abilitatile din obiectul skills.
`);
Object.keys(person.skills).forEach((skill) => {
  console.log(skill);
});

console.warn(`
Prin aceeasi metoda, afiseaza o lista cu numele complet al prietenilor.
`);
Object.keys(person.friends).forEach((friendName) => {
  console.log(
    person.friends[friendName].name + ' ' + person.friends[friendName].surname,
  );
});

console.warn(
  `
  Afiseaza propozitia: “Prietenii mei sunt Larry Larryson,
   Steven Stevenson si Carol Carolson.” folosind Object.keys()
  `,
);

let friendFullNamesPhrase = 'Prietenii mei sunt ';
Object.keys(person.friends).forEach((personName, idx) => {
  friendFullNamesPhrase +=
    person.friends[personName].name + ' ' + person.friends[personName].surname;
  if (idx < Object.keys(person.friends).length - 2) {
    friendFullNamesPhrase += ', ';
  } else if (idx === Object.keys(person.friends).length - 2) {
    friendFullNamesPhrase += ' si ';
  } else {
    friendFullNamesPhrase += '.';
  }
});
console.log(friendFullNamesPhrase);

console.warn(`
Folosind bucla, afiseaza mai multe propozitii
 (cate una per console.log()) care sa afiseze: “Larry are xx ani. Steven are …”
`);
Object.keys(person.friends).forEach((friendName) => {
  console.log(
    `${person.friends[friendName].name} are ${person.friends[friendName].age} ani.`,
  );
});

var reversedFriendsList = Object.keys(person.friends).reverse();

for (var i = 0; i < reversedFriendsList.length; i++) {
  var friendProperty = reversedFriendsList[i];
  var friend = person.friends[friendProperty];
  var { name, surname } = friend;

  console.log(`${surname} ${name}`);
}

console.warn(`
  Afiseaza propozitia: “Prietenii mei sunt Larry, Steven si Carol.” folosind Object.keys()
`);

var message = `Prietenii mei sun `;
Object.keys(person.friends).forEach(function (
  friendProperty,
  index,
  friendKeys,
) {
  var friend = person.friends[friendProperty];
  var punctuation = ', ';
  var arrLength = friendKeys.length;

  if (index === arrLength - 1) {
    punctuation = '.';
  }

  if (index === arrLength - 2) {
    punctuation = ' si ';
  }

  message = `${message}${friend.name}${punctuation}`;
});

console.log(message);

console.warn(`
Folosind bucla, afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze: “Diferenta de varsta intre Larry si Dragos este de xxx ani.” etc…
`);

// ['larry', 'steven','carol']
var friendsKeys = Object.keys(person.friends);
// delete this i
var i = 0;

while (i < friendsKeys.length) {
  var friendKey = friendsKeys[i];
  var friend = person.friends[friendKey];
  var { name, age } = friend;
  var ageDiff = Math.abs(person.age - age);
  console.log(
    `Diferenta de varsta intre ${name} si ${person.name} este de ${ageDiff} ani.`,
  );
  i++;
}
