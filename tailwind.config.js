module.exports = {
    future: {
        purgeLayersByDefault: true,
        removeDeprecatedGapUtilities: true,
    },
    purge: [
        './src/**/*.vue'
    ],
    theme: {
        extend: {
            colors: {
                'global-border': '#d7d7d7'
            }
        }
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'visited'],
    },
    plugins: []
}