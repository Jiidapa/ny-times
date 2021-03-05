module.exports = {
    // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            xs: { max: '280px' },
            sm: { min: '281px', max: '539px' },
            md: { min: '540px' },
            lg: { min: '976px' },
            xl: '1440px'
        },
        fontFamily: {
            sans: ['IBM Plex Sans', 'sans-serif']
        },

        extend: {
            colors: {
                'black-50': 'hsla(0, 100%, 0%, 0.5)',
                'black-80': 'hsla(0, 100%, 0%, 0.8)'
            },
            borderRadius: {
                default: '64px'
            },
            fontSize: {
                xxs: '0.687rem', // 10px
                xs: '0.75rem', // 12px
                sm: '0.875rem', // 14px
                default: '1rem', // 16px
                md: '1.125rem', //18rem
                lg: '1.25rem', // 20px
                xl: '1.5rem', // 24rem
                '2xl': '2rem', // 32px
                '3xl': '2.5rem' // 40px
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
