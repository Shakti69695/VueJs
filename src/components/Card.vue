<template>
  <div class="bg-[#EDEDED] gap-[8px] p-[16px] w-full rounded-[22px] flex flex-col">
    <div>
      <router-link :to="`/itemview/${product.id}`"
        class="flex justify-center w-full sm:w-[191.36px] p-[16px] rounded-[22px] bg-[#FFFFFF] cursor-pointer">
        <img :src="product.thumbnail" :alt="product.title" class=" object-contain" />
      </router-link>
    </div>

    <div class="p-[8px] gap-[8px] flex flex-col">
      <div class="font-[cabin] w-[160px] text-[20px] font-[500] text-[#1A1F16]">{{ product.title }}</div>
      <div class="font-[cabin] font-[400] text-[16px] text-[#60695C] ">{{ product.brand }}</div>
      <div class="h-[50px] flex p-[8px] justify-between">
        <div class="font-[cabin] font-[500] text-[20px] text-[#1A1F16]">${{ product.price }}</div>
        <button @click="addProductToCart(product)"
          class="p-[8px] gap-[8px] rounded-[9px] text-[#1A1F16] cursor-pointer">
          <img src="../assets/icons/Name=bag-add.svg" class="h-[18px] w-[18px]" alt="AddCart">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from '@/store/store'; // Import the Pinia store

export default {
  name: "Card",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addProductToCart(product) {
      const store = useStore();
      store.addToCart(product);  // Dispatch action to Pinia store to add product to cart
    }
  }
}
</script>

<style scoped>
/* Optional: You can place specific card styles here, but make sure not to change the styling in ContentBox.vue */
</style>
