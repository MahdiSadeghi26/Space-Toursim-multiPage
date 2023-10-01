<script setup>
import NavMenu from '@/components/NavMenu.vue'
</script>
<template>
    <!-- container -->
    <div class="flex flex-col h-full ">
        <NavMenu></NavMenu>
        <!-- content -->
        <div class="xl:max-w-[1125px] h-[550px] m-auto flex xl:gap-36">
            <!-- left (image) -->
            <div class="w-1/2 flex flex-col justify-between"> 
                <p class="uppercase text-white tracking-widest font-BarlowRegular text-3xl"><span
                        class="text-gray-700 font-BarlowSemiBold font-bold mr-5">01</span>PICK YOUR DESTINATION</p>
                <img src="/images/destination/image-moon.png" alt="plant image" class="xl:max-h-[445px]  xl:max-w-[445px]">
            </div>
            <!-- right (information) -->
            <div class="w-1/2 py-16 flex flex-col gap-10">
                <!-- plants ul -->
                <ul class="flex w-11/12 justify-start tracking-widest text-lg gap-10 font-BarlowMedium text-lightPurple">
                    <li class="plantList activePlant">moon</li>
                    <li class="plantList">mars</li>
                    <li class="plantList">europa</li>
                    <li class="plantList">titan</li>
                </ul>
                <!-- informations -->
                <div class="xl:w-[445px] flex flex-col justify-center items-start">
                    <p class="uppercase text-white font-BellefairRegular text-8xl mb-5">moon</p>
                    <!-- description -->
                    <p class="font-BarlowRegular text-justify leading-8 text-lightPurple text-xl tracking-wide">See our planet as you've never seen it before. A perfect relaxing trip away to help regain
                        perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2
                        and Apollo 11 landing sites.</p>
                </div>
                <hr class=" border-opacity-25 border-white ">
                <!-- destenition -->
                <div class="flex justify-between pr-10">
                    <!-- distance -->
                    <div class="flex flex-col gap-2">
                        <p class=" font-BarlowRgular text-lightPurple tracking-wider text-sm">AVG. DISTANCE</p>
                        <p class=" font-BellefairRegular text-white text-3xl uppercase">384,400 km</p>
                    </div>
                    <!-- time -->
                    <div class="flex flex-col gap-2">
                        <p class=" font-BarlowRgular text-lightPurple tracking-wider text-sm uppercase">Est. travel time</p>
                        <p class=" font-BellefairRegular text-white text-3xl uppercase">3 days</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

