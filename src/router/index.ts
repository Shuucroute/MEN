import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import Inscription from '../components/Inscription.vue';
import Asso from '../components/Asso.vue';
import School from '../components/School.vue';
import Teachers from '../components/Teachers.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/inscription', component: Inscription },
    { path: '/asso', component: Asso },
    { path: '/school', component: School },
    { path: '/teachers', component: Teachers },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
