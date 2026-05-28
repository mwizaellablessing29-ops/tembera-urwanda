 import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'
import About from '../views/about.vue'
import Contact from '../views/contact.vue'
import Services from '../views/services.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    {
        path: '/contacts',
        name: 'contact',
        component: Contact,
    },
    {
        path: '/services',
        name: 'service',
        component: Services,
    }
];

 const router = createRouter({
     history: createWebHashHistory(),
     routes,
 });
 export default router;