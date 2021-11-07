// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.body.appendChild(p);
// document.body.append(p);

const $body = $('body');
const $p = $('<p>', {
  text: 'Textul paragrafului',
  id: 'myParagraph',
  class: 'clase de css',
});
const $paragraph = $('<p>', {
  text: 'Parola nu trebuie sa fie mai mica de 5.',
});

$p.appendTo($body);
// v2
// $('body').append($p);

$body.append($paragraph);
setTimeout(() => {
  $paragraph.addClass('error');
}, 1000 * 3);

// selection
$('#myParagraph').text('Am schimbat dinamic acest paragraf.');

const $span = $('<span>', {
  id: 'example',
  text: 'ParolaMea',
}).appendTo($paragraph);

$('<h2>', {
  text: 'Mesage',
}).prependTo($('.container'));

const $navigation = $('<div>', {
  class: 'navigation',
  text: 'Nav goes here',
});

const $container = $('.container');
$container.after($navigation);
$('<a>', {
  class: 'nav-link',
  text: 'Primul Link',
  href: 'http://www.google.com',
}).appendTo($navigation);

$('<h2>', {
  text: 'Navigatie',
}).before('<a class="nav-link" href="http://www.google.com">Primul Link</a>');

// $('<sup>', {
//   text: '1',
// }).prepend('<a class="nav-link" href="http://www.google.com">Primul Link</a>');

$('<sup>', {
  text: '1',
}).prependTo('.nav-link');

$('<h1>', {
  text: 'Invat jQuery',
}).before('<div class="container"></div>');

$('<p>', {
  class: 'documentation',
  text: 'Documentatia jQuery poate fi gasita ',
}).appendTo($body);

$('.documentation').append('<a href="https://api.jquery.com/">aici</a>.');
