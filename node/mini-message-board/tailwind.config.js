/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/**/*.{html,js,ejs}"],
    theme: {
        extend: {
            gridTemplateRows: {
                layout: "130px 67vh 125px",
            },
        },
    },
    plugins: [],
};
