const form = document.querySelector("form");
const email = form.email;
const password = form.password;

const errorsList = document.querySelector("#errors");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
        email: email.value,
        password: password.value,
    };

    const response = await fetch("/user/login", {
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
