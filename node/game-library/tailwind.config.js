/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/**/*.{html,js,ejs}"],
    theme: {
        extend: {
            gridTemplateRows: {
                layout: "100px 74vh 100px",
            },
        },
    },
    plugins: [],
};
