// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        prerender: {
            failOnError: false,
        },
    },

    devtools: { enabled: true },
    modules: [
        'nuxt-icon',
        '@nuxt/image',
        '@nuxtjs/tailwindcss',
        'nuxt-headlessui',
        // 'nuxt-protected-mailto',
    ],

    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        config: {
            theme: {
                fontFamily: {
                    poppins: ['Poppins', 'sans-serif'],
                    volkhov: ['Volkhov', 'serif'],
                },
            },
            plugins: [require('tailwind-scrollbar-hide')],
        },
    },
});
