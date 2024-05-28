const form = document.querySelector("form");
const password = form.memberPassword;

const errorsList = document.querySelector("#errors");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
        password: password.value,
    };

    const response = await fetch("/user/membership-status", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data);

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
