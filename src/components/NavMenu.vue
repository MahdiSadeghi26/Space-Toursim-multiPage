<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue'
const route = useRoute()
let mobileTrigedFlag = ref(false)
</script>
<template>
    <header class="w-screen text-slate-50   lg:h-[100px] z-10">
        <nav class="flex justify-between items-center pt-7">
            <!-- logo -->
            <div class="xl:w-[60%] lg:flex hidden  justify-between items-center ">
                <img src="/images/shared/logo.svg" alt="logo" class="inline lg:ml-8 ">
            </div>
            <hr class=" border-white border-opacity-25 left-[100px] 2xl:w-[55%] xl:w-[42%] lg:w-[35%] absolute z-20">
            <ul
                class="shadow-[0px_0px_28px_-1px_rgba(0,0,0,0.75)] lg:h-[100px] 2xl:w-[45%]  justify-center  lg:w-[64%]  lg:flex  font-BarlowRegular lg:text-lg hidden backdrop-blur-[30px] bg-[hsla(0,0%,100%,.05)] z-10">
                <RouterLink class="navItem" :to="{ name: 'Home' }" :class="{ activeItem: route.path == '/' }">00 HOME
                </RouterLink>
                <router-link class="navItem" :to="{ name: 'destination' }"
                    :class="{ activeItem: route.path == '/destination' }">01 DESTENTION</router-link>
                <router-link class="navItem" :to="{ name: 'crew' }" :class="{ activeItem: route.path == '/crew' }">02
                    CREW</router-link>
                <router-link class="navItem" :to="{ name: 'technology' }"
                    :class="{ activeItem: route.path == '/technology' }">
                    03 TECHNOLOGY</router-link>

            </ul>
            <!-- icon and logo in mobile -->
            <div class="lg:hidden flex justify-between px-6 items-center w-screen h-[50px]">
                <img src="/images/shared/logo.svg" alt="logo" class="md:ml-5 h-[40px]">
                <transition leave-active-class="animate__animated animate__fadeOut"
                    enter-active-class="animate__animated `animate__fadeIn">
                    <i v-if="!mobileTrigedFlag" class="fa-solid fa-bars fa-2xl absolute right-8"
                        @click="mobileTrigedFlag = !mobileTrigedFlag"></i>
                </transition>
                <transition enter-active-class="animate__animated animate__fadeIn ">

                    <i v-show="mobileTrigedFlag" class="fa-solid fa-xmark fa-2xl absolute right-8"
                        @click="mobileTrigedFlag = !mobileTrigedFlag"></i>
                </transition>
            </div>
            <Transition enter-active-class="animate__animated animate__slideInRight"
                leave-active-class="animate__animated animate__slideOutRight">
                <ul v-show="mobileTrigedFlag"
                    class=" flex flex-col items-center justify-between h-[250px] w-[200px] font-BarlowMedium absolute right-0 top-[70px] backdrop-blur-3xl  bg-[rgba(255,255,255,0.2)] rounded-lg lg:hidden ">
                    <RouterLink class="navItem" :to="{ name: 'Home' }" :class="{ activeItem: route.path == '/' }">00 HOME
                </RouterLink>
                <router-link class="navItem" :to="{ name: 'destination' }"
                    :class="{ activeItem: route.path == '/destination' }">01 DESTENTION</router-link>
                    <router-link class="navItem" :to="{ name: 'crew' }" :class="{ activeItem: route.path == '/crew' }">02
                    CREW</router-link>
                    <router-link class="navItem" :to="{ name: 'technology' }"
                    :class="{ activeItem: route.path == '/technology' }">
                    03 TECHNOLOGY</router-link>
                </ul>
            </Transition>
        </nav>
        <RouterView />
    </header>
</template>


