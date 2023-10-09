<script setup>
import NavMenu from '@/components/NavMenu.vue'
</script>

<template>
    <div
        class=" flex flex-col lg:bg-[url('/images/technology/background-technology-desktop.jpg')] lg:bg-no-repeat md:bg-[url('/images/technology/background-technology-tablet.jpg')] bg-no-repeat bg-[url('/images/technology/background-technology-mobile.jpg')] h-screen bg-center bg-cover ">
        <NavMenu class=""></NavMenu>
        <!-- content -->
        <div class="xl:w-[85%] xl:h-[90%] m-auto flex items-center">
            <!-- title -->
            <p class=" absolute xl:top-[20%] uppercase text-white tracking-widest font-BarlowRegular md:text-3xl text-2xl"><span
                            class="text-gray-700 font-BarlowSemiBold font-bold mr-5 ">03</span>space lunch 101</p>
            <!-- left text and slides -->
            <div class="xl:w-2/3 flex flex-col">
                
                <!-- button and text container -->
                <div class="flex xl:mt-24 w-full xl:h-[300px] gap-20 items-end ">
                    <!-- buttons -->
                    <div class="flex flex-col h-full justify-between">
                        <button class="techButton techButtonActive">1</button>
                        <button class="techButton">2</button>
                        <button class="techButton">3</button>
                    </div>
                    <!-- title and text -->
                    <div class="xl:w-full">
                        <p class="text-white text-opacity-50 text-xl font-BarlowRegular  uppercase">The terminology ...</p>
                        <!-- title -->
                        <p class="uppercase text-white text-6xl font-BellefairRegular mt-5">lanch vehicle</p>
                        <!-- caption -->
                        <p class="text-white font-BarlowLight text-xl leading-9 text-opacity-50 w-7/12 text-justify">
                            A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from
                            Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most
                            powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch
                            pad!
                        </p>
                    </div>
                </div>
            </div>
            <!-- right (images) -->
            <div class="xl:w-1/2">
                <img src="/images/technology/image-launch-vehicle-portrait.jpg" alt="space image" class="xl:w-10/12">
            </div>
        </div>
    </div>
</template>

