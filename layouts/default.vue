<script setup>
import Footer from '~/components/global/Footer.vue';
useHead({
    htmlAttrs: {
        lang: 'en',
    },
    meta: [
        { property: 'og:title', content: `Fayton` },
        {
            name: 'description',
            content:
                'Geniş axtarış imkanı: İstifadəçilər Azərbaycanın bütün şəhərlərini əhatə edən geniş marşrut bazasında axtarış edə bilərlər.',
        },
        {
            property: 'og:description',
            content:
                'Geniş axtarış imkanı: İstifadəçilər Azərbaycanın bütün şəhərlərini əhatə edən geniş marşrut bazasında axtarış edə bilərlər.',
        },
        { property: 'og:url', content: 'https://jadoo-ke.vercel.app/' },
        { name: 'twitter:title', content: 'Jadoo' },
        {
            name: 'twitter:description',
            content:
                'Geniş axtarış imkanı: İstifadəçilər Azərbaycanın bütün şəhərlərini əhatə edən geniş marşrut bazasında axtarış edə bilərlər.',
        },
        { name: 'twitter:site', content: 'https://jadoo-ke.vercel.app/' },
    ],
    title: `Fayton`,
});
definePageMeta({
    layout: 'default',
});
</script>

<template>
    <main class="max-w-8xl">
        <slot />
        <!--    <Footer />-->
    </main>
</template>
