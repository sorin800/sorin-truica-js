const calculateRectangleArea = (L, l) => {
  return L * l;
};

console.warn(`
Calculeaza suprafata de tapet necesara pentru o camera de 6 pe 4 m cu tavan inalt de 2.5m, stiind ca exista o usa de 2.2 pe 1.5 si o suprafata de ferestre de 2 pe 1.5. “Suprafata de tapet necesara este: xxx metri patrati.”
`);
const longWallSurface = calculateRectangleArea(2.5, 6);
const shortWallSurface = calculateRectangleArea(2.5, 4);
const totalWallSurface = longWallSurface * 2 + shortWallSurface * 2;
const doorSurface = calculateRectangleArea(2.2, 1.5);
const windowSurface = calculateRectangleArea(2, 1.5);
const requiredWallpaper = totalWallSurface - doorSurface - windowSurface;

console.log(`Suprafata de tapet este: ${requiredWallpaper} metri patrati.`);

console.warn(`
Creaza o functie wrapper numita calculateSquareArea() pentru calculateRectangleArea() care sa primeasca ca parametru latura unui patrat si sa calculeze suprafata acestuia.
O functie wrapper este o functie care “imbraca” o functie existenta pentru a-i aduce imbunatatiri, extra cod sau pentru a-i limita in mod intentionat capacitatile.
`);

const calculateSquareArea = (L) => {
  const squareArea = calculateRectangleArea(L, L);

  return squareArea;
};
