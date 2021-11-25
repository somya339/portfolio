const form = document.querySelector("#contact-form");
const Fieldname = document.querySelector("#name")
const email = document.querySelector("#email")
const subject = document.querySelector("#subject")
const message = document.querySelector("#message")
let thisForm
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    document.querySelector(".pseudo").textContent ="";
    document.querySelector(".pseudo").classList.add("spinner");
    thisForm = this;
    let data = {
        name: Fieldname.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }
    let response = await fetch("https://dev-portfolio-1.herokuapp.com/contact", {
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
            document.querySelector(".pseudo").classList.toggle("spinner");     
            document.querySelector(".pseudo").textContent = "Send Message";
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
