var form = document.querySelector('form');
var length = document.getElementById('length');
var width = document.getElementById('width');
var height = document.getElementById('height');
var result = document.getElementById('result');

form.addEventListener('submit', function (e) {
  var volume = length.value * width.value * height.value;
  // result.value = volume;
  result.innerText = volume;

  e.preventDefault();
});
