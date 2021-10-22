const dateBuilder = [
  () => {
    return '2021';
  },
  () => {
    return 'Octombrie';
  },
  function () {
    return '10';
  },
];

dateBuilder[3] = () => {
  return 'Miercuri';
};

console.warn(`Folosind arrayul dateBuilder. Afiseaza luna curenta.`);
console.log(dateBuilder[1]());
console.warn(`Afiseaza propozitia: "Suntem in anul an."`);
console.log(`Suntem in anul ${dateBuilder[0]()}.`);

console.warn(`Afiseaza propozitia: "Suntem in luna ll in anul aa."`);
console.log(`Suntem in luna ${dateBuilder[1]()} in anul ${dateBuilder[0]()}.`);
