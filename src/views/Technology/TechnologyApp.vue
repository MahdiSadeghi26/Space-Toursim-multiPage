<script setup>
import { ref, computed } from 'vue'
import NavMenu from '@/components/NavMenu.vue'
import data from '/src/data.json';

const json = data;

let activeTech = ref('launch vehicle')
let activeData = computed(() => {
    const data = json.technology.filter((tech) => {
        return tech.name.toLowerCase() === activeTech.value
    })[0]
    return { name: data.name, landscape: data.images.landscape, portrait: data.images.portrait, description: data.description }
})


</script>

<template>
    <div
        class=" flex flex-col lg:bg-[url('/images/technology/background-technology-desktop.jpg')] lg:bg-no-repeat md:bg-[url('/images/technology/background-technology-tablet.jpg')] bg-no-repeat bg-[url('/images/technology/background-technology-mobile.jpg')] lg:h-screen h-[900px]  bg-center bg-cover ">
        <NavMenu></NavMenu>
        <!-- content -->
        <div class="xl:w-[85%] lg:w-[90%] xl:h-[90%] lg:m-auto md:mt-5 flex lg:flex-row flex-col items-center">
            <!-- title -->
            <p
                class=" absolute lg:top-[20%] lg:left-auto md:left-10 uppercase text-white tracking-widest font-BarlowRegular lg:text-3xl md:text-2xl text-xl top-[10%]">
                <span class="text-gray-700 font-BarlowSemiBold font-bold mr-5">03</span>space lunch 101
            </p>
            <img :src="`${activeData.landscape}`" alt="landscape tech" class="lg:hidden mt-16 w-full">
            <!-- left text and slides -->
            <transition appear enter-active-class="animate__animated animate__fadeIn">
                <div class="xl:w-2/3 lg:w-11/12 flex lg:mt-0 mt-10">
                    <!-- button and text container -->
                    <div class="flex  w-full xl:h-[300px] lg:h-[300px] flex-col lg:flex-row  xl:gap-20 lg:gap-10 ">
                        <!-- buttons -->
                        <div class="flex lg:flex-col gap-5 h-full lg:justify-between justify-center order-1">
                            <button @click="activeTech = 'launch vehicle'"
                                :class="{ techButtonActive: activeTech == 'launch vehicle' }" class="techButton">1</button>
                            <button @click="activeTech = 'spaceport'"
                                :class="{ techButtonActive: activeTech == 'spaceport' }" class="techButton">2</button>
                            <button @click="activeTech = 'space capsule'"
                                :class="{ techButtonActive: activeTech == 'space capsule' }" class="techButton">3</button>
                        </div>
                        <!-- title and text -->
                        <div
                            class="xl:w-full flex  h-full lg:items-start items-center justify-center lg:gap-4 order-2  flex-col">
                            <p class="text-white text-opacity-50 text-xl font-BarlowRegular lg:mt-auto mt-5  uppercase">The
                                terminology ...
                            </p>
                            <!-- title -->
                            <p class="uppercase text-white xl:text-6xl lg:text-5xl md:text-4xl text-4xl font-BellefairRegular mt-5">
                                {{
                                    activeData.name }}</p>
                            <!-- caption -->
                            <p
                                class="w-11/12 text-white font-BarlowLight xl:text-xl lg:text-lg leading-9 text-opacity-50 xl:w-[500px] lg:w-[400px] md:w-[390px] text-justify md:mt-auto mt-3">
                                {{ activeData.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </transition>
            <!-- right (images) -->
            <transition appear enter-active-class="animate__animated animate__fadeIn">
                <div class="lg:w-1/2">
                    <img :src="`${activeData.portrait}`" alt="space image" class="xl:w-11/12  lg:w-full lg:block  hidden">
                </div>
            </transition>
        </div>
    </div>
</template>

