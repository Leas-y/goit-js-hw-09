const formData = {
  email: '',
  message: '',
};

const storedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (storedFormData) {
  formData.email = storedFormData.email;
  formData.message = storedFormData.message;
}

function fillForm() {
  const form = document.querySelector('.feedback-form');
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

window.addEventListener('load', fillForm);

document.querySelector('.feedback-form').addEventListener('input', event => {
  const { name, value } = event.target;

  if (formData.hasOwnProperty(name)) {
    formData[name] = value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

document.querySelector('.feedback-form').addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);

    localStorage.removeItem('feedback-form-state');

    formData.email = '';
    formData.message = '';

    document.querySelector('.feedback-form').reset();
  }
});
const mail = document.querySelector('input');
mail.addEventListener('focus', () => {
  mail.placeholder = 'Type area';
});
mail.addEventListener('blur', () => {
  mail.placeholder = '';
});
