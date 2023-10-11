<script setup>
import { ref, computed } from 'vue'
import NavMenu from '@/components/NavMenu.vue'
import data from '/src/data.json'


let json = data;
// elements ref
let image = ref(null)
let title = ref(null)
let description = ref(null)
let distance = ref(null)
let travel = ref(null)


let activePlant = ref('moon')

let activeData = computed(() => {
    const data = json.destinations.filter((plant) => {
        return plant.name.toLowerCase() === activePlant.value
    })[0]
    return { title: data.name, image: data.images.png, description: data.description, distance: data.distance, travel: data.travel }
})




</script>
<template>
    <!-- container -->


    <div class="flex flex-col h-screen lg:overflow-hidden ">
        <NavMenu></NavMenu>
        <!-- content -->


        <div
            class="xl:max-w-[1125px] lg:h-[550px] md:m-auto w-full px-5 py-4 flex lg:flex-row flex-col items-center xl:gap-36 xl:p-0 lg:px-10 lg:gap-16">
            <!-- left (image) -->
            <div class="lg:w-1/2 md:w-11/12 flex flex-col justify-between w-full gap-10 lg:items-start items-center">

                <p class="uppercase text-white tracking-widest font-BarlowRegular md:text-3xl text-2xl"><span
                        class="text-gray-700 font-BarlowSemiBold font-bold mr-5 ">01</span>PICK YOUR DESTINATION</p>

                <transition appear enter-to-class="animate__animated animate__rotateIn"
                    enter-from-class="animate__animated animate__rotateIn">
                    <img ref="image" :src="`${activeData.image}`" alt="plant image"
                     :key="activePlant"    class="xl:max-h-[445px]  xl:max-w-[445px] lg:max-h-[400px]  lg:max-w-[400px] md:max-w-[370px] md:max-h-[370px] max-h-[350px] max-w-[350px] ">
                </transition>


            </div>
            <!-- right (information) -->
            <transition appear enter-active-class="animate__animated animate__fadeIn animate__slow">
                <div class="lg:w-1/2 md:w-[400px] w-full py-16 flex flex-col lg:gap-10 gap-7  justify-center items-center ">
                    <!-- plants ul -->
                    <ul
                        class="flex w-11/12 lg:justify-start justify-center  tracking-widest text-lg gap-10 font-BarlowMedium text-lightPurple">
                        <li @click="activePlant = 'moon'" class="plantList" :class="{ activePlant: activePlant == 'moon' }">
                            moon
                        </li>
                        <li @click="activePlant = 'mars'" class="plantList" :class="{ activePlant: activePlant == 'mars' }">
                            mars
                        </li>
                        <li @click="activePlant = 'europa'" class="plantList"
                            :class="{ activePlant: activePlant == 'europa' }">
                            europa</li>
                        <li @click="activePlant = 'titan'" class="plantList"
                            :class="{ activePlant: activePlant == 'titan' }">
                            titan</li>
                    </ul>
                    <!-- informations -->
                    <div
                        class="xl:w-[445px] lg:w-[440px] md:w-auto  w-full flex flex-col  justify-center lg:items-start items-center">
                        <p ref="title"
                            class="uppercase text-white font-BellefairRegular xl:text-8xl lg:text-7xl md:text-6xl text-5xl mb-5">
                            {{
                                'moon' ?
                                activeData.title
                                : '' }}</p>
                        <!-- description -->
                        <p ref="description"
                            class="font-BarlowRegular lg:text-justify  leading-8 text-lightPurple xl:text-xl md:text-lg text-base tracking-wide">
                            {{
                                activeData.description }}</p>
                    </div>
                    <hr class=" border-opacity-25 border-white ">
                    <!-- destenition -->
                    <div class="flex w-full justify-between pr-10">
                        <!-- distance -->
                        <div class="flex flex-col gap-2">
                            <p class=" font-BarlowRgular text-lightPurple tracking-wider text-sm">AVG. DISTANCE</p>
                            <p ref="distance" class=" font-BellefairRegular text-white md:text-3xl text-xl uppercase">{{
                                '384,400 km' ?
                                activeData.distance : '' }}</p>
                        </div>
                        <!-- time -->
                        <div class="flex flex-col gap-2">
                            <p class=" font-BarlowRgular text-lightPurple tracking-wider text-sm uppercase">Est. travel time
                            </p>
                            <p ref="travel" class=" font-BellefairRegular text-white md:text-3xl text-xl uppercase">{{
                                '3days' ? activeData.travel : '' }}</p>

                        </div>
                    </div>
                </div>
            </transition>
        </div>

    </div>
</template>
