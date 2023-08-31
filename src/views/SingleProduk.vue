<template>
  <div class="container my-24 mx-auto md:px-6 xl:px-32">
    <section class="mb-32">
      <div
        class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        v-if="products">
        <div class="flex flex-wrap items-center">
          <div class="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
            <img src="https://www.mobitrix.com/pokemon/images_main/bulbasaur.png" 
              class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
          </div>
          <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12" style="background-color: silver;">
            <div class="px-6 py-12 md:px-12">
              <h5 class="mb-6 pb-2 text-4xl font-bold">Nama: {{ products.name }}</h5>
              <div class="my-5">
                <h4>
                  Type :
                </h4>
              </div>
              <div
                class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-4 py-1 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                </svg>
                Type_1
              </div>
              <div
                class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-4 py-1 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                </svg>
                Type_2
              </div>
              <div class="my-5">
                <h4>Classification</h4>
              </div>
              <div
                class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-4 py-1 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                </svg>
                Water
              </div>
              <div
                class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-4 py-1 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                </svg>
                Fire
              </div>
              <div
                class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-4 py-1 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                </svg>
                Lightning
              </div>
              <div class="my-8">
                <h4 class="mb-6 pb-2 text-4xl font-bold">Evolution</h4>
                <h4>Pokemon Nama</h4>
              </div>
              <div>
                <img src="https://www.mobitrix.com/pokemon/images_main/bulbasaur.png" alt="Image" height="100px"
                  width="100px"/>
                <div
                  class="my-5 inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-4 py-1 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                  </svg>
                  Snow
                </div>
                <div
                  class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-4 py-1 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                  </svg>
                  Shadow
                </div>
                <div class="my-12">
                  <h4>Pokemon Nama</h4>
                  <img src="https://www.mobitrix.com/pokemon/images_main/bulbasaur.png" alt="Image" height="100px"
                    width="100px"/>
                  <div
                    class="my-5 inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-4 py-1 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                    </svg>
                    Stone
                  </div>
                  <div
                    class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-4 py-1 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                    </svg>
                    Fire
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      token: null,
      qty: 1
    }
  },
  computed: {
    ...mapGetters("product", ["getProdukSlug"]),
    products() {
      return this.getProdukSlug(this.$route.params.slug);
    },
  },
  methods: {
    ...mapActions("product", ["fetchSingleProduk"]),
    ...mapActions("product", ["fetchProduk"]),



  },
  beforeMount() {
    this.fetchProduk()


  },
  mounted() {
    const Slug = this.$route.params.slug;
    this.fetchSingleProduk(Slug)

  }
};
</script>