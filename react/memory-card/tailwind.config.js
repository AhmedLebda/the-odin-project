/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                main: "200px 1fr",
            },
            gridTemplateRows: {
                layout: "min-content 1fr",
            },
        },
    },
    plugins: [],
};
