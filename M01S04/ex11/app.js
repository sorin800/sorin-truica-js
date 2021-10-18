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
Folosind Object.keys() pe proprietatea skills, afiseaza abilitatile persoanei daca acestea sunt true. Folosind propozitii de forma: “person.name cunoaste: html.” “person.name cunoaste: javaScript.”
`);

Object.keys(person.skills).forEach(function (skillname) {
  var knownSkill = person.skills[skillname];

  if (knownSkill === true) {
    console.log(`${person.name} cunoaste: ${skillname}.`);
  }
});

console.warn(`
Prin aceeasi metoda, afiseaza o lista inversata cu numele complet inversat al prietenilor.
`);

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
