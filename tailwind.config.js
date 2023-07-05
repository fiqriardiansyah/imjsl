/** @type {import('tailwindcss/types').Config} */
const config = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: "#4EAEFF",
                    dark: "#0091F4",
                },
                gray: {
                    primary: "#DEE2E6",
                },
                fontFamily: {
                    poppins: ["Poppins"],
                },
                boxShadow: {
                    primary: "1px 3px 5px rgba(0,0,0,0.4)",
                },
            },
        },
    },
    plugins: [],
};

module.exports = config;
