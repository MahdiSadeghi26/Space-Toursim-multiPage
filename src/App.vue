<script setup>
import NavMenu from '@/components/NavMenu.vue';
import HomeContent from '@/components/HomeContent.vue';
</script>
<template>
    <div
        class=" overflow-hidden h-screen lg:bg-[url('/images/home/background-home-desktop.jpg')] bg-[url('/images/home/background-home-mobile.jpg')] md:bg-[url('/images/home/background-home-tablet.jpg')] bg-fixed bg-center bg-no-repeat bg-cover py-5">
        <!-- nav menu -->
        <NavMenu></NavMenu>
        <!-- contents in center of page -->
        <HomeContent></HomeContent>
    </div>
</template>
