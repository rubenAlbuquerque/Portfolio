/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    // "fontawesome-svg-core": {
    //     license: "free",
    // },
    theme: {
        extend: {
            // scrollbar: ["dark"],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        // require("daisyui")
        // require("tailwind-scrollbar"),
    ],
};
