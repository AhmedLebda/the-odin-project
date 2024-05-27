const form = document.querySelector("form");
const firstName = form.firstName;
const lastName = form.lastName;
const email = form.email;
const password = form.password;
const confirmPassword = form.confirmPassword;

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
    console.log(data);
});
