<script setup>
import HomeContent from './HomeContent.vue';
import NavMenu from '@/components/NavMenu.vue'
</script>

<template>
    <div
        class="overflow-hidden h-screen lg:bg-[url('/images/home/background-home-desktop.jpg')] bg-[url('/images/home/background-home-mobile.jpg')] md:bg-[url('/images/home/background-home-tablet.jpg')] bg-fixed bg-center bg-no-repeat bg-cover">
        <NavMenu></NavMenu>
        <HomeContent></HomeContent>
    </div>
</template>