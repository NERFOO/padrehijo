import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import PadreDeportes from './components/PadreDeportes.vue';
import PadreComics from './components/PadreComics.vue';
import NumeroDoble from './components/NumeroDoble.vue';

const routes = [
    {
        path: "/", component : HomeComponent
    },
    {
        path: "/deportes", component : PadreDeportes
    },
    {
        path: "/comics", component : PadreComics
    },
    {
        path: "/doble/:numero?", component : NumeroDoble
    }
]

const router = createRouter ({
    history : createWebHistory() ,
    routes : routes
});

export default router;



