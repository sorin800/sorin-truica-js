var form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  var radius = document.getElementById('radius').value;
  var result = Math.PI * Math.pow(radius, 2);
  document.getElementById('result').value = result;

  e.preventDefault();
});
