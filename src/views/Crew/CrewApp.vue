<script setup>
import NavMenu from '@/components/NavMenu.vue'
</script>
<template>
    <div
        class=" overflow-hidden lg:bg-[url('/images/crew/background-crew-desktop.jpg')] md:bg-[url('/images/crew/background-crew-tablet.jpg')] :bg-[url('/images/crew/background-crew-mobile.jpg')] h-screen w-full bg-fixed bg-center bg-cover bg-no-repeat">
        <!-- navbar -->
        <!-- content navbar -->
        <NavMenu></NavMenu>
        <div class="lg:max-w-[65%] lg:h-[70%] flex lg:mt-10 justify-center  items-end   ">
            <!-- (left) title and descripiton + carousel -->
            <div class="flex flex-col justify-between w-[60%]  lg:h-[500px]">
                <!-- title -->
                <div class="w-full"><span
                        class=" text-white text-opacity-50 tracking-widest font-BarlowSemiBold lg:text-3xl lg:mr-5 ">02</span>
                    <p class="text-white inline font-BarlowRegular text-3xl tracking-widest">MEET YOUR CREW</p>
                </div>
                <!-- desc -->
                <div class="flex gap-5 flex-col lg:w-full">
                    <!-- grade or post -->
                    <p class="text-white text-opacity-50 text-3xl font-BellefairRegular uppercase">Commander</p>
                    <p class="uppercase font-BellefairRegular text-white lg:text-6xl">Douglas Hurley</p>
                    <!-- description -->
                    <p class="text-[#d0d6f9] lg:text-lg text-justify w-[500px]">Douglas Gerald Hurley is an American
                        engineer, former Marine Corps pilot and former NASA astronaut.
                        He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                </div>
                <!-- buttons -->
                <div class="flex lg:gap-5">
                    <button class="crewButton crewButtonActive"></button>
                    <button class="crewButton"></button>
                    <button class="crewButton"></button>
                    <button class="crewButton"></button>
                </div>
            </div>
        </div>
        <div class="absolute right-[20%] bottom-0 w-[450px] "><img src="/images/crew/image-douglas-hurley.png" alt=""></div>
    </div>
</template>