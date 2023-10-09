<script setup>
import NavMenu from '@/components/NavMenu.vue'
import data from '/src/data.json';
import { computed, ref } from 'vue'

let json = data;

// elements refrence
let role = ref(null)
let name = ref(null)
let caption = ref(null)
let image = ref(null)

let activePerson = ref('douglas hurley')

let activeData = computed(() => {
    const data = json.crew.filter((person) => {
        return person.name.toLowerCase() === activePerson.value
    })[0]
    return { name: data.name, role: data.role, image: data.images.png, bio: data.bio }
})



</script>
<template>
    <div
        class=" overflow-hidden lg:bg-[url('/images/crew/background-crew-desktop.jpg')] md:bg-[url('/images/crew/background-crew-tablet.jpg')] bg-[url('/images/crew/background-crew-mobile.jpg')] h-screen w-full bg-fixed bg-center bg-cover bg-no-repeat">
        <!-- navbar -->
        <!-- content navbar -->
        <NavMenu></NavMenu>
        <transition appear enter-active-class="animate__animated animate__fadeIn">
            <div
            class="lg:max-w-[65%] md:w-11/12 w-full px-5 md:px-0 md:h-[400px] md:m-auto lg:m-0 lg:h-[70%] flex lg:mt-10 justify-center  lg:items-end lg:flex-row md:mt-0 mt-5   ">
            <!-- (left) title and descripiton + carousel -->
            <div class="flex flex-col lg:justify-around items-center lg:items-start  lg:w-[60%] md:w-full   lg:h-[500px]">
                <!-- title -->
                <div class="w-full text-center lg:text-start"><span
                        class=" text-white text-opacity-50 tracking-widest font-BarlowSemiBold text-3xl mr-5 ">02</span>
                    <p class="text-white inline font-BarlowRegular text-3xl tracking-widest">MEET YOUR CREW</p>
                </div>
                <!-- desc -->
                <div class="flex gap-5 flex-col lg:w-full md:text-center lg:items-start items-center">
                    <!-- grade or post -->
                    <p ref="role" class="text-white text-opacity-50 text-3xl font-BellefairRegular uppercase mt-5 lg:mt-0">
                        {{ 'Commander' ? activeData.role : '' }}
                    </p>
                    <p ref="name"
                        class="uppercase font-BellefairRegular text-white text-start 2xl:text-6xl xl:text-5xl lg:text-4xl ">
                        {{ 'Douglas Hurley' ? activeData.name : '' }}</p>
                    <!-- description -->
                    <p ref="caption" class="text-[#d0d6f9] lg:text-lg text-justify lg:w-[500px] md:w-1/2 ">
                        {{ activeData.bio }}</p>
                </div>
                <!-- buttons -->
                <div class="flex gap-5 mt-5 lg:mt-0">
                    <button class="crewButton" @click="activePerson = 'douglas hurley'"
                        :class="{ crewButtonActive: activePerson == 'douglas hurley' }"></button>
                    <button class="crewButton" @click="activePerson = 'mark shuttleworth'"
                        :class="{ crewButtonActive: activePerson == 'mark shuttleworth' }"></button>
                    <button class="crewButton" @click="activePerson = 'victor glover'"
                        :class="{ crewButtonActive: activePerson == 'victor glover' }"></button>
                    <button class="crewButton" @click="activePerson = 'anousheh ansari'"
                        :class="{ crewButtonActive: activePerson == 'anousheh ansari' }"></button>
                </div>
            </div>
        </div>
        </transition>
        <Transition appear enter-active-class="animate__animated animate__fadeIn">
            <div ref="image"
                class="absolute 2xl:right-[20%] bottom-0 xl:right-[8%] xl:w-[450px] lg:right-0 lg:w-[400px] md:w-[320px] md:right-[5%] w-[250px] right-[10%] ">
                <img :src="`${activeData.image}`" alt="">
            </div>
        </Transition>

    </div>
</template>