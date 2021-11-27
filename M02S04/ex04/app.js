const form = document.getElementById('personForm');
const submitButton = form.querySelector('button[type=submit]');

const personForm = new Pristine(form);
const isValid = personForm.validate();

if (!isValid) {
  submitButton.disabled = true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
});
