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
    <div class="flex flex-col h-full lg:overflow-hidden ">
        <NavMenu></NavMenu>
        <!-- content -->
        <div class="xl:max-w-[1125px] h-[550px] m-auto flex xl:gap-36">
            <!-- left (image) -->
            <div class="w-1/2 flex flex-col justify-between">
                <p class="uppercase text-white tracking-widest font-BarlowRegular text-3xl"><span
                        class="text-gray-700 font-BarlowSemiBold font-bold mr-5">01</span>PICK YOUR DESTINATION</p>
                <img ref="image" :src="`${activeData.image}`" alt="plant image" class="xl:max-h-[445px]  xl:max-w-[445px]">
            </div>
            <!-- right (information) -->
            <div class="w-1/2 py-16 flex flex-col gap-10">
                <!-- plants ul -->
                <ul class="flex w-11/12 justify-start tracking-widest text-lg gap-10 font-BarlowMedium text-lightPurple">
                    <li @click="activePlant = 'moon'" class="plantList" :class="{ activePlant: activePlant == 'moon' }">moon
                    </li>
                    <li @click="activePlant = 'mars'" class="plantList" :class="{ activePlant: activePlant == 'mars' }">mars
                    </li>
                    <li @click="activePlant = 'europa'" class="plantList" :class="{ activePlant: activePlant == 'europa' }">
                        europa</li>
                    <li @click="activePlant = 'titan'" class="plantList" :class="{ activePlant: activePlant == 'titan' }">
                        titan</li>
                </ul>
                <!-- informations -->
                <div class="xl:w-[445px] flex flex-col justify-center items-start">
                    <p ref="title" class="uppercase text-white font-BellefairRegular text-8xl mb-5">{{ 'moon' ?
                        activeData.title
                        : '' }}</p>
                    <!-- description -->
                    <p ref="description"
                        class="font-BarlowRegular text-justify leading-8 text-lightPurple text-xl tracking-wide">{{
                            activeData.description }}</p>
                </div>
                <hr class=" border-opacity-25 border-white ">
                <!-- destenition -->
                <div class="flex justify-between pr-10">
                    <!-- distance -->
                    <div class="flex flex-col gap-2">
                        <p class=" font-BarlowRgular text-lightPurple tracking-wider text-sm">AVG. DISTANCE</p>
                        <p ref="distance" class=" font-BellefairRegular text-white text-3xl uppercase">{{ '384,400 km' ?
                            activeData.distance : '' }}</p>
                    </div>
                    <!-- time -->
                    <div class="flex flex-col gap-2">
                        <p class=" font-BarlowRgular text-lightPurple tracking-wider text-sm uppercase">Est. travel time</p>
                        <p ref="travel" class=" font-BellefairRegular text-white text-3xl uppercase">{{ '3 days' ?
                            activeData.travel : '' }}</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

