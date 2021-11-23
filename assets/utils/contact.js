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
            form.querySelector('.loading').classList.remove('d-block');
            form.querySelector('.sent-message').classList.add('d-block');
            form.reset();
        })
        .catch((error) => {
            displayError(form, error);
        });
});

function displayError(form, error) {
    form.querySelector('.loading').classList.remove('d-block');
    form.querySelector('.error-message').innerHTML = error;
    form.querySelector('.error-message').classList.add('d-block');
}