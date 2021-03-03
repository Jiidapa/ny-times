module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px'
        },
        colors: {
            'black-50': 'hsla(0, 100%, 0%, 0.5)'
        },
        fontFamily: {
            sans: ['IBM Plex Sans', 'sans-serif']
        },
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: []
}
