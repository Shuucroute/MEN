import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import Inscription from '../components/Inscription.vue';
import Asso from '../components/Asso.vue';
import School from '../components/School.vue';
import Teachers from '../components/Teachers.vue';
<<<<<<< HEAD
import Courses from '../components/Courses.vue';

=======
>>>>>>> 88c4215cf97a04517ccbce77f580cf2797a70a18

const routes = [
    { path: '/', component: HomePage },
    { path: '/inscription', component: Inscription },
    { path: '/asso', component: Asso },
    { path: '/school', component: School },
    { path: '/teachers', component: Teachers },
<<<<<<< HEAD
    { path: '/courses', component: Courses },
=======
>>>>>>> 88c4215cf97a04517ccbce77f580cf2797a70a18
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
