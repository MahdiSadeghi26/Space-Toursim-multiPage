<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue'
const route = useRoute()
let mobileTrigedFlag = ref(false)
</script>
<template>
    <header class="w-screen text-slate-50   lg:h-[100px]">
        <nav class="flex justify-between items-center backdrop-blur-[30px]">
            <!-- logo -->
            <div class="w-1/2 lg:flex hidden  justify-evenly items-center ">
                <img src="/images/shared/logo.svg" alt="logo" class="inline ml-5">
                <hr class=" border-white border-opacity-25 inline-block lg:w-10/12">
            </div>
            <ul
                class=" lg:h-[100px] xl:w-1/2 xl:justify-evenly lg:justify-around lg:w-3/5  lg:flex  font-BarlowRegular lg:text-lg hidden">
                <RouterLink class="navItem" :to="{ name: 'Home' }" :class="{ activeItem: route.path == '/' }">00 HOME
                </RouterLink>
                <router-link class="navItem" :to="{ name: 'destination' }"
                    :class="{ activeItem: route.path == '/destination' }">01 DESTENTION</router-link>
                <router-link class="navItem" :to="{ name: 'crew' }" :class="{ activeItem: route.path == '/crew' }">02
                    CREW</router-link>
                <router-link class="navItem" :to="{ name: 'technology' }" :class="{ activeItem: route.path == '/technology' }">
                    03 TECHNOLOGY</router-link>

            </ul>
            <!-- icon and logo in mobile -->
            <div class="lg:hidden flex justify-between px-6 items-center w-screen h-[50px]">
                <img src="/images/shared/logo.svg" alt="logo" class="ml-5 h-[40px]">
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
                    class=" flex flex-col items-center justify-between h-[200px] font-BarlowMedium absolute right-0 top-[50px] backdrop-blur-3xl  bg-[rgba(255,255,255,0.2)] rounded-lg lg:hidden ">
                    <li class="navItem" :class="{ activeItem: route.path == '/' }">
                        00 HOME
                    </li>
                    <li class="navItem" :class="{ activeItem: route.path == '/destination' }">
                        01 DESTENTION
                    </li>
                    <li class="navItem" :class="{ activeItem: route.path == '/crew' }">
                        02 CREW
                    </li>
                    <li class="navItem" :class="{ activeItem: route.path == '/technology' }">
                        03 TECHNOLOGY
                    </li>
                </ul>
            </Transition>
        </nav>
        <RouterView />
    </header>
</template>


