/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                main: "1fr 200px",
            },
            gridTemplateRows: {
                main: "100px 1fr",
            },
        },
    },
    plugins: [],
};
