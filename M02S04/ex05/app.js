$(function () {
  const $form = $('#personForm');
  const $submitButton = $form.find('button[type="submit"]');

  // $form.validate(); // $el.jqZoom() $el.jCarousel()

  const isValid = $form.validate().checkForm();

  if (!isValid) {
    $submitButton.attr('disabled', 'paraguay');
  }

  $form.on('input', '[name]', function () {
    const isValid = $form.validate().checkForm();

    if (isValid) {
      $submitButton.removeAttr('disabled');
    } else {
      $submitButton.attr('disabled', 'test');
    }
  });
});
