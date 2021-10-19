console.warn(`
Modifica exemplul astfel incat bucla sa
numere de la 1 la 100
`);
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 100);

console.warn(`
Modifica exemplul astfel incat bucla sa numere de la 1 la 99 (dar nu schimba numarul 100).
`);
let j = 1;
do {
  console.log(j);
  j++;
} while (j < 100);

console.warn(`
Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).
`);
let a = 1;
do {
  a++;
  if (a === 50) {
    console.log(a);
    break;
  }
} while (a < 100);

console.warn(`
Modifica exemplul astfel incat bucla sa
numere de la 1 la 52
`);
let b = 1;
do {
  console.log(b);
  b++;
} while (b <= 52);

console.warn(`
Modifica exemplul astfel incat bucla sa numere de la 1 la 51.
`);
let c = 1;
do {
  console.log(c);
  c++;
} while (c < 52);

console.warn(`
Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l)
`);
let d = 1;
do {
  if (d === 12) {
    console.log(d);
    break;
  }
  d++;
} while (d < 52);

console.warn(`
Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32.
`);

let e = 8;
do {
  if (e % 2 !== 0) {
    console.log(e);
    e++;
    continue;
  }
  e++;
} while (e <= 32);

console.warn(`
Folosind metoda prompt de trei ori cere utilizatorului un numar, o limita inferioara si o limita superioara apoi afiseaza toti multiplii de numar intre limita inferioara si limita superioara introduse.
`);
let number = prompt('Enter number');
let inferiorLimit = prompt('Enter inferior limit');
let superiorLimit = prompt('Enter superior limit');
for (let i = inferiorLimit; i <= superiorLimit; i++) {
  console.log(number * i);
}
