import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import Inscription from '../components/Inscription.vue';
import Asso from '../components/Asso.vue';
import School from '../components/School.vue';
import Teachers from '../components/Teachers.vue';
import Courses from '../components/Courses.vue';
import  advance_enrolment  from '../components/Advance_enrolment.vue';


const routes = [
    { path: '/', component: HomePage },
    { path: '/inscription', component: Inscription },
    { path: '/asso', component: Asso },
    { path: '/school', component: School },
    { path: '/teachers', component: Teachers },
    { path: '/courses', component: Courses },
    { path: '/advance_enrolment', component: advance_enrolment },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
