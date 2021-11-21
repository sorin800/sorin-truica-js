$stage = $('.stage');

let counterMouseOnStage = 0;

$($stage).on('mouseover', () => {
  $('.message2').remove();
  jQuery('<p>', {
    class: 'message1',
    text: 'Mouseul este pe scena.',
  }).appendTo('body');

  if ($('.counterMouseOnStage')[0]) {
    $('.counterMouseOnStage').text(
      `Mouseul a fost pe scena de: ${++counterMouseOnStage} ori.`,
    );
  } else {
    jQuery('<p>', {
      class: 'counterMouseOnStage',
      text: `Mouseul a fost pe scena de: ${counterMouseOnStage} ori.`,
    }).appendTo('body');
  }
});
$($stage).on('mouseout', () => {
  $('.message1').remove();
  jQuery('<p>', {
    class: 'message2',
    text: 'Mouseul nu este pe scena.',
  }).appendTo('body');
});
