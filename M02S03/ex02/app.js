console.warn(`Adauga folosind jQuery un paragraf cu clasa msg si textul “Acesta este un mesaj de eroare”.
`);
const paragraph = $('<p>', {
  class: 'msg',
  text: 'Acesta este un mesaj de eroare',
});

const $body = $('body');
paragraph.appendTo($body);

console.warn(`Dupa ce acesta a fost adaugat, adauga-i clasa error. `);

paragraph.addClass('error');

console.warn(`
Salveaza intr-o variabila un element de tip sup cu textul 1 si adauga-l la inceputul paragrafului. (prepend)
`);

const supElement = $('sup', {
  text: '1',
});

supElement.prepend(paragraph);
