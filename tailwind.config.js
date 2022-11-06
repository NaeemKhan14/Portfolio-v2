/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts,scss,css}",
        "./node_modules/flowbite/**/*.js"
    ],
    safelist: [
        'w-64',
        'w-1/2',
        'rounded-l-lg',
        'rounded-r-lg',
        'bg-gray-200',
        'grid-cols-4',
        'grid-cols-7',
        'h-6',
        'leading-6',
        'h-9',
        'leading-9',
        'shadow-lg'
    ],
    darkMode: 'class',
    theme: {
        colors: {
            bgColor: '#353353',
            bgSecondary: '#302f4e',
            btnBg: '#ff4c60',
            accentColor: '#ffd15c',
            secondaryColor: '#6C63FF',
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '2rem',
                xl: '2rem',
                '2xl': '2rem',
            },
        },
        fontFamily: {
            sans: ['Rubik', 'sans-serif'],
            serif: ['Libre Baskerville', 'serif'],
        },
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],
}
