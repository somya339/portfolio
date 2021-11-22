const form = document.querySelector("#contact-form");
const Fieldname = document.querySelector("#name")
const email = document.querySelector("#email")
const subject = document.querySelector("#subject")
const message = document.querySelector("#message")
let thisForm
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    thisForm = this;
    let data = {
        name: Fieldname.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }
    let response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data)
    });
    response.json().then(response => {
            console.log("email sent");
            console.log(response);
            thisForm.querySelector('.loading').classList.remove('d-block');
            thisForm.querySelector('.sent-message').classList.add('d-block');
            thisForm.reset();
        })
        .catch((error) => {
            displayError(thisForm, error);
        });
});

function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
}