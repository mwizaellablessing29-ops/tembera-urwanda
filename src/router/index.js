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
        path: '/contact',
        name: 'contact',
        component: Contact,
    },
    {
        path: '/services',
        name: 'service',
        component: Services,
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/register.vue')
    },
    
    // --- GALLERY DROPDOWN ROUTES ---
    {
        path: '/gallery/photos',
        name: 'photos',
        component: () => import('../views/gallery/Photos.vue')
    },
    {
        path: '/gallery/videos',
        name: 'videos',
        component: () => import('../views/gallery/Videos.vue')
    },

    // --- DESTINATION DROPDOWN ROUTES ---
    {
        path: '/dest/northern',
        name: 'northern',
        component: () => import('../views/destinations/Northern.vue')
    },
    {
        path: '/dest/southern',
        name: 'southern',
        component: () => import('../views/destinations/Southern.vue')
    },
    {
        path: '/dest/eastern',
        name: 'eastern',
        component: () => import('../views/destinations/Eastern.vue')
    },
    {
        path: '/dest/western',
        name: 'western',
        component: () => import('../views/destinations/Western.vue')
    },
    {
        path: '/dest/kigali',
        name: 'kigali',
        component: () => import('../views/destinations/Kigali.vue')
    }
];




const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;