/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/**/*.{html,js,ejs}"],
    theme: {
        extend: {
            gridTemplateRows: {
                layout: "1fr 5fr 80px",
            },
        },
    },
    plugins: [],
};
