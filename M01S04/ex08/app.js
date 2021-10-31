console.warn(`
Modifica exemplul astfel incat bucla sa
numere de la 1 la 100.
`);
let j = 1;
while (j <= 100) {
  console.log(j);
  j++;
}

console.warn(`
 Ce se intampla daca i este initializat cu valoarea 101?
 Nu va intra in while
`);

console.warn(`
Modifica exemplul astfel incat bucla sa numere de la 1 la 99 (dar nu schimba numarul 100).
`);
let z = 1;
while (z < 100) {
  console.log(z);
  z++;
}

console.warn(`
Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).
`);
let k = 1;
while (k < 100) {
  if (k === 50) {
    console.log(k);
    break;
  }
  k++;
}

console.warn(`
Modifica exemplul astfel incat bucla sa
numere de la 1 la 67.
`);
let a = 1;
while (a < 68) {
  console.log(a);
  a++;
}

console.warn(`
Modifica exemplul astfel incat bucla sa numere de la 1 la 66.
`);
let b = 1;
while (b < 67) {
  console.log(b);
  b++;
}
<<<<<<< HEAD
=======

console.warn(`
Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l).
`);
let c = 1;
while (c < 67) {
  if (c === 12) {
    console.log(c);
    break;
  }
  c++;
}

console.warn(`
Folosind keywordul continue afiseaza doar numerele pare intre 1 si 32 (inclusiv).
`);
let d = 1;
while (d < 67) {
  if (d % 2 === 0) {
    console.log(d);
    d++;
    continue;
  }
  d++;
}

console.warn(`
Folosind metoda prompt de doua ori cere utilizatorului un numar si o limita superioara apoi afiseaza toti multiplii de numar intre 5 si limita superioara introduse.
`);

let number = prompt('Introdu numar');
let superiorLimit = prompt('Introdu limita superioara');
for (let i = 5; i <= superiorLimit; i++) {
  console.log(number * i);
}
var i = 1;
>>>>>>> f0040a5eccca17d906972e116fd1ff4d30f491c3

console.warn(`
Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l).
`);
let c = 1;
while (c < 67) {
  if (c === 12) {
    console.log(c);
    break;
  }
  c++;
}

console.warn(`
Folosind keywordul continue afiseaza doar numerele pare intre 1 si 32 (inclusiv).
`);
let d = 1;
while (d < 67) {
  if (d % 2 === 0) {
    console.log(d);
    d++;
    continue;
  }
  d++;
}

console.warn(`
Folosind metoda prompt de doua ori cere utilizatorului un numar si o limita superioara apoi afiseaza toti multiplii de numar intre 5 si limita superioara introduse.
`);

let number = prompt('Introdu numar');
let superiorLimit = prompt('Introdu limita superioara');
for (let i = 5; i <= superiorLimit; i++) {
  console.log(number * i);
}
