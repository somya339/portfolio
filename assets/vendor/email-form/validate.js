let form = document.querySelector('#contact-form');
const nameField = document.querySelector("#name")
const email = document.querySelector("#email")
const subject = document.querySelector("#subject")
const message = document.querySelector("#message")

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  let thisForm = this;

  let action = "http://localhost:3000/contact"
  await email_form_submit(thisForm, action);
});

async function email_form_submit(thisForm, action) {
  let data = {
    name: nameField.value,
    email: email.value,
    subject: subject.value,
    message: message.value
  }
  console.log(data);
  fetch(action, {
      method: 'post',
      body: data
    })
    .then(response => {
      console.log("email sent");
      if (response.ok) {
        return response.text()
      } else {
        throw new Error(`${response.status} ${response.statusText} ${response.url}`);
      }
    })
    .then(data => {
      thisForm.querySelector('.loading').classList.remove('d-block');
      if (data.trim() == 'OK') {
        thisForm.querySelector('.sent-message').classList.add('d-block');
        thisForm.reset();
      } else {
        throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action);
      }
    })
    .catch((error) => {
      displayError(thisForm, error);
    });
}

function displayError(thisForm, error) {
  thisForm.querySelector('.loading').classList.remove('d-block');
  thisForm.querySelector('.error-message').innerHTML = error;
  thisForm.querySelector('.error-message').classList.add('d-block');
}