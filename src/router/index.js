import { createRouter, createWebHistory } from 'vue-router'
import HomeApp from '/views/Home/HomeApp.vue';
import AppDestination from '/views/Destination/AppDestination.vue'
import CrewApp from '/views/Crew/CrewApp.vue'
import TechnologyApp from '/views/Technology/TechnologyApp.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name:'Home',
      path:"/",
      component:HomeApp
    }, 
    {
      name:'destination',
      path: '/destination',
      component: AppDestination
    },{
      name:'crew',
      path: '/crew',
      component: CrewApp
    },{
      name:'technology',
      path: '/technology',
      component: TechnologyApp
    }
    
  ]
})

export default router
