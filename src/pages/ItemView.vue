<template>
  <!-- Dashboard Component -->
  <div>
    <div class="flex flex-row justify-between bg-[#EDEDED] relative">
      <div class="fixed flex justify-end w-[72px] py-4 h-screen bg-[#EDEDED]">
        <Navbar />
      </div>
      <div class="absolute left-[72px] bg-[#EDEDED] h-[100vh] " style="width: calc(100vw - 90px)">
        <div class="bg-[#EDEDED] p-8 ">
          <div>
            <router-link to="/"
              class=" flex text-[#1A1F16] font-[cabin] text-[20px] font-[400] cursor-pointer p-[8px]">
              <img src="../assets/icons/back.svg" class="w-[24px] h-[24px] " alt=""> Back</router-link>
          </div>

          <div class="flex">
            <div class="grid grid-cols-4 gap-2.5 p-4">
              <!-- Left side small images -->
              <div class="col-span-1 flex flex-col space-y-4">
                <img v-for="(image, index) in product.images" :key="index" :src="product.thumbnail" alt="Product Thumbnail"
                  class="w-[33.66px] rounded-[10px] bg-[#FFFFFF] " @click="setMainImage(image)" />
              </div>

              <!-- Right side main image -->
              <div class="col-span-3 flex items-start justify-center">
                <img :src="product.thumbnail" alt="Main Product" class=" bg-[#FFFFFF] w-[242px] object-contain rounded-[13px]" />
              </div>
            </div>
            <div class="relative">
              <div>
                <div class="text-[61.04px] font-[cabin] font-[700] text-[#1A1F16]">{{ product.title }}
                </div>
                <div class="text-[#1A1F1680] font-[cabin] font-[500] text-[31.25px]">{{ product.brand }}</div>
              </div>
              <div>
                <div class="flex items-center space-x-2 py-4 font-[cabin]">
                  <span class="text-green-500 flex">
                    <img v-for="i in Math.floor(product.rating)" :key="'full-' + i" src="../assets/icons/star.svg"
                      alt="Full Star">

                    <!-- Render Half Star if the rating has a decimal part -->
                    <img v-if="product.rating % 1 >= 0.5" src="../assets/icons/star-half.svg" alt="Half Star">

                    <!-- Render Empty Stars (5 stars in total) -->
                    <img v-for="i in 5 - Math.ceil(product.rating)" :key="'empty-' + i"
                      src="../assets/icons/star-outline.svg" alt="Empty Star">
                  </span>
                  <span class="text-[#12805D] font-[400] text-[18px] font-[cabin]">{{ product.rating }} / 5</span>
                </div>
              </div>
              <div class="text-[31.25px] font-[500] p-[8px] font-[cabin]">${{ product.price }}</div>
              <div class="text-[#1A1F16] text-[20px] p-2 font-[400] font-[cabin]">
                {{ product.description }}
              </div>

              <div class="flex justify-end p-[8px]">
                <button @click="addToBag"
                  class="px-6 py-2 cursor-pointer bg-[#1A1F16] text-[#FFFFFF] rounded-[14px] flex items-center space-x-2 font-[cabin]">
                  <span><img class="bg-[#FFFFFF]" src="../assets/icons/Name=bag-add.svg" alt=""></span>
                  <span>Add to Bag</span>
                </button>
              </div>
            </div>
          </div>
          <hr class="my-8" />
          <div>
            <h2 class="text-xl font-bold mb-4 font-[cabin]">Description</h2>
            <p class="text-gray-600 leading-relaxed font-[cabin]">
              {{ product.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { useStore } from '@/store/store';
import { mapActions, mapState } from 'pinia';

export default {
  name: 'ItemView',
  components: {
    Navbar
  },
  computed: {
    ...mapState(useStore, ['product']),

    productId() {
      return this.$route.params.id
    }
  },
  methods: {
    ...mapActions(useStore, ['fetchProduct']),
    addToBag() {
      const store = useStore(); // Access the store
      store.addToCart(this.product); // Call the addToCart action with the current product
    }
  },
  created() {
    this.fetchProduct(this.productId)
  }
}
</script>

<style scoped></style>
