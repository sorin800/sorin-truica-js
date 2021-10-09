var form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  var radius = document.getElementById('radius').value;
  var result = (4 / 3) * (Math.PI * Math.pow(radius, 3));
  document.getElementById('result').innerText = result;

  e.preventDefault();
});
