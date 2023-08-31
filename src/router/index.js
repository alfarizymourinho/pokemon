import { createWebHistory, createRouter } from "vue-router";

import Produk from "../views/Produk.vue";
import singleproduk from "../views/SingleProduk.vue"


const routes = [

    {
        path: '/',
        name: 'Produk',
        component: Produk
    },

    {
        path: '/produk/:slug',
        name: 'SingleProduk',
        component: singleproduk
    },
   

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;