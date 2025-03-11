<template>
  <div class="flex flex-row bg-[#EDEDED] relative">
    <div class="fixed flex justify-end w-[72px] py-4 h-screen bg-[#EDEDED]">
      <Navbar />
    </div>
    <div class="bg-[#EDEDED] min-h-screen p-8 absolute left-[72px]" style="width: calc(100vw - 90px)">
      <p class="text-[48.83px] font-[400] text-[#1A1F16] mb-8 font-[cabin]">Check your Bag Items</p>
      <!-- Items -->
      <div class="flex flex-col gap-[24px]">
        <BagCard 
          v-for="item in bagItems" 
          :key="item.id" 
          :item="item" 
          :increaseQuantity="increaseQuantity" 
          :decreaseQuantity="decreaseQuantity" 
        />
      </div>

      <div class="mt-8 flex justify-between items-center font-[cabin]">
        <h2 class="text-2xl font-bold text-gray-800">Bag Total: ${{ totalPrice }}</h2>
        <router-link to="/checkout"
          class="px-6 py-3 w-[161px] flex bg-gray-800 text-white rounded-xl hover:bg-gray-700"> <img
            src="../assets/icons/bagIcon.svg" class="bg-[#1A1F16]" alt=""> Checkout</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { useStore } from '@/store/store';
import BagCard from './BagCard.vue';

export default {
  name: 'BagView',
  components: {
    Navbar,
    BagCard
  },
  computed: {
    store() {
      return useStore(); // Access the store instance
    },
    bagItems() {
      return this.store.bagItems; // Access bagItems from the store
    },
    totalPrice() {
      return this.bagItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    }
  },
  methods: {
    increaseQuantity(id) {
      const item = this.bagItems.find(item => item.id === id);
      if (item) item.quantity++;
    },
    decreaseQuantity(id) {
      const item = this.bagItems.find(item => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else if (item && item.quantity <= 1) {
        this.store.removeFromBag(id); // Access the action correctly
      }
    }
  }
};
</script>

<style scoped></style>
