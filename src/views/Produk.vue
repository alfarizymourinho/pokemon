<template>
    <div v-if="getProduk == false">
        <div class="h-screen bg-white">
            <div class="flex justify-center items-center h-full">
                <img class="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="">
            </div>
        </div>
    </div>
    <div v-else>
        <div class="grid md:grid-cols-3 gap-8  mt-10 pl-5" style="background-color: silver;">
            <div v-for="product in getProduk" :key="product.slug">
                <div class=" m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
                    <a href="#">
                        <img class="h-60 rounded-t-lg object-cover"
                            src="https://www.mobitrix.com/pokemon/images_main/bulbasaur.png"
                            alt="product image"/>
                    </a>
                    <span
                        class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
                    <div class="mt-4 px-5 pb-5" style="background-color: gray;">
                        <a href="#">
                            <h5 class="text-xl font-semibold tracking-tight text-slate-900">bulbasaurus</h5>
                        </a>
                        <div class="mt-2.5 mb-5 flex items-center">
                        </div>
                        <div>
                            <router-link :to="{ name: 'SingleProduk', params: { slug: product.slug } }"
                                class="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 mt-5">
                                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                </svg>
                                Detail Pokemon
                            </router-link>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('product', ['getProduk']),
    },
    methods: {
        ...mapActions('product', ['fetchProduk']),
    },
    created() {
        this.fetchProduk();
    }
}
</script>