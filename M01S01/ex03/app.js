var form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  var length = document.getElementById('length').value;
  var width = document.getElementById('width').value;
  var height = document.getElementById('height').value;
  var result = document.getElementById('result');

  var volume = length * width * height;
  result.value = volume;

  e.preventDefault();
});
