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
        class=" flex flex-col lg:bg-[url('/images/technology/background-technology-desktop.jpg')] lg:bg-no-repeat md:bg-[url('/images/technology/background-technology-tablet.jpg')] bg-no-repeat bg-[url('/images/technology/background-technology-mobile.jpg')] h-screen bg-center bg-cover ">
        <NavMenu class=""></NavMenu>
        <!-- content -->
        <div class="xl:w-[85%] lg:w-[90%] xl:h-[90%] m-auto flex items-center">
            <!-- title -->
            <p class=" absolute lg:top-[20%] uppercase text-white tracking-widest font-BarlowRegular md:text-3xl text-2xl">
                <span class="text-gray-700 font-BarlowSemiBold font-bold mr-5 ">03</span>space lunch 101
            </p>
            <!-- left text and slides -->
            <transition appear enter-active-class="animate__animated animate__fadeIn">
                <div class="xl:w-2/3 lg:w-11/12 flex">
                    <!-- button and text container -->
                    <div class="flex  w-full xl:h-[300px] lg:h-[300px] xl:gap-20 lg:gap-10 ">
                        <!-- buttons -->
                        <div class="flex flex-col h-full justify-between">
                            <button @click="activeTech = 'launch vehicle'"
                                :class="{ techButtonActive: activeTech == 'launch vehicle' }" class="techButton">1</button>
                            <button @click="activeTech = 'spaceport'"
                                :class="{ techButtonActive: activeTech == 'spaceport' }" class="techButton">2</button>
                            <button @click="activeTech = 'space capsule'"
                                :class="{ techButtonActive: activeTech == 'space capsule' }" class="techButton">3</button>
                        </div>
                        <!-- title and text -->
                        <div class="xl:w-full flex xl:gap-4 h-full items-start justify-center lg:gap-4  flex-col">
                            <p class="text-white text-opacity-50 text-xl font-BarlowRegular  uppercase">The terminology ...
                            </p>
                            <!-- title -->
                            <p class="uppercase text-white xl:text-6xl lg:text-5xl font-BellefairRegular mt-5">{{
                                activeData.name }}</p>
                            <!-- caption -->
                            <p
                                class="text-white font-BarlowLight xl:text-xl lg:text-lg leading-9 text-opacity-50 xl:w-[500px] lg:w-[400px] text-justify">
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

