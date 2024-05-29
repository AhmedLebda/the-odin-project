const form = document.querySelector("form");
const title = form.title;
const content = form.content;

const errorsList = document.querySelector("#errors");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
        title: title.value,
        content: content.value,
    };

    const response = await fetch("/posts/create", {
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
