<script setup>
import NavMenu from '@/components/NavMenu.vue'
</script>
<template>
    <div
        class=" overflow-hidden lg:bg-[url('/images/crew/background-crew-desktop.jpg')] md:bg-[url('/images/crew/background-crew-tablet.jpg')] bg-[url('/images/crew/background-crew-mobile.jpg')] h-screen w-full bg-fixed bg-center bg-cover bg-no-repeat">
        <!-- navbar -->
        <!-- content navbar -->
        <NavMenu></NavMenu>
        <div
            class="lg:max-w-[65%] md:w-11/12 w-full px-5 md:px-0 md:h-[400px] md:m-auto lg:m-0 lg:h-[70%] flex lg:mt-10 justify-center  lg:items-end lg:flex-row md:mt-0 mt-5   ">
            <!-- (left) title and descripiton + carousel -->
            <div
                class="flex flex-col lg:justify-around items-center lg:items-start  lg:w-[60%] md:w-full   lg:h-[500px]">
                <!-- title -->
                <div class="w-full text-center lg:text-start"><span
                        class=" text-white text-opacity-50 tracking-widest font-BarlowSemiBold text-3xl mr-5 ">02</span>
                    <p class="text-white inline font-BarlowRegular text-3xl tracking-widest">MEET YOUR CREW</p>
                </div>
                <!-- desc -->
                <div class="flex gap-5 flex-col lg:w-full md:text-center lg:items-start items-center">
                    <!-- grade or post -->
                    <p class="text-white text-opacity-50 text-3xl font-BellefairRegular uppercase mt-5 lg:mt-0">Commander
                    </p>
                    <p class="uppercase font-BellefairRegular text-white 2xl:text-6xl xl:text-5xl lg:text-4xl ">Douglas
                        Hurley</p>
                    <!-- description -->
                    <p class="text-[#d0d6f9] lg:text-lg text-justify lg:w-[500px] md:w-1/2 ">Douglas Gerald Hurley is an
                        American
                        engineer, former Marine Corps pilot and former NASA astronaut.
                        He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                </div>
                <!-- buttons -->
                <div class="flex gap-5 mt-5 lg:mt-auto">
                    <button class="crewButton crewButtonActive"></button>
                    <button class="crewButton"></button>
                    <button class="crewButton"></button>
                    <button class="crewButton"></button>
                </div>
            </div>
        </div>
        <div
            class="absolute 2xl:right-[20%] bottom-0 xl:right-[8%] xl:w-[450px] lg:right-[5%] lg:w-[400px] md:w-[320px] md:right-[5%] w-[250px] right-[10%] ">
            <img src="/images/crew/image-douglas-hurley.png" alt="">
        </div>
    </div>
</template>