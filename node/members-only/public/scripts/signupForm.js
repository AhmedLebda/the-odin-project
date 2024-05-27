const form = document.querySelector("form");
const firstName = form.firstName;
const lastName = form.lastName;
const email = form.email;
const password = form.password;
const confirmPassword = form.confirmPassword;

const errorsList = document.querySelector("#errors");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
    };

    const response = await fetch("/user/signup", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.errors) {
        data.errors.forEach((error) => {
            const listItem = document.createElement("li");
            listItem.textContent = error.msg;
            errorsList.appendChild(listItem);
        });
    }

    if (data.redirect) {
        location.assign(data.redirect);
    }
});
