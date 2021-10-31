const calculateRectangleArea = function (L, l) {
  return L * l;
};

console.warn(
  `
Stiind ca un camp dreptunghiular de hamei produce 25kg/m2 . Ce diferenta de productie este intre un teren de 100m pe 250m si unul de 350m pe 200m?
`,
);
const barleyYield = 25;
const field1Surface = calculateRectangleArea(100, 250);
const field2Surface = calculateRectangleArea(350, 200);
const field1Yield = barleyYield * field1Surface;
const field2Yield = barleyYield * field2Surface;
console.log(field2Surface - field1Surface);

console.warn(`
Stiind ca din 10kg de hamei produc 2.5l de bere, cati litri de bere va produce un teren de 400m pe 370m?
`);

const beerYield = 2.5 / 10; // per kg
const field3Surface = calculateRectangleArea(400, 370);
const field3Yield = barleyYield * field3Surface;
const totalProduction3 = field3Yield * beerYield;

console.log(totalProduction3);

console.warn(`
Stiind ca un camp dreptunghiular de grau produce 32kg/m2  de faina. Afla si afiseaza cate kilograme
de paine produce
un camp de 300 pe 200 metri stiind ca dintr-un kilogram de faina ies 2.5 kg de paine.
`);
const wheatField1 = calculateRectangleArea(300, 200);
const totalWheatProduction1 = 32 * wheatField1;
const totalBreadProduction1 = totalWheatProduction1 * 2.5;
console.log(totalBreadProduction1);

console.warn(`
Dar doua campuri de 150 pe 200 si 500 pe 300 in total?
`);
const wheatField2 = calculateRectangleArea(150, 200);
const totalWheatProduction2 = 32 * wheatField2;
const totalBreadProduction2 = totalWheatProduction2 * 2.5;
console.log(totalBreadProduction2);

const wheatField3 = calculateRectangleArea(500, 300);
const totalWheatProduction3 = 32 * wheatField3;
const totalBreadProduction3 = totalWheatProduction3 * 2.5;
console.log(totalBreadProduction3);
