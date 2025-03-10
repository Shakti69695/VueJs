<template>
  <div class="bg-[#EDEDED] min-h-screen p-8 flex justify-between">
    <!-- Review Your Bag Section -->
    <div class="flex-1 bg-[#FFFFFF] rounded-2xl p-6 mr-8 w-[871px] rounded-13px">
      <p class="text-[31.25px] text-[#1A1F16] pb-[24px] px-[8px]">REVIEW YOUR BAG</p>
      <div class="flex flex-col space-y-6">
        <div v-for="item in bagItems" :key="item.id">
          <div class="flex flex-col md:flex-row items-start space-x-6 md:space-x-6">
            <!-- Image section -->
            <img :src="item.thumbnail" :alt="item.title"
              class="w-full md:w-[203.54px] object-contain rounded-lg mb-4 md:mb-0" />

            <!-- Content section -->
            <div class="flex-1">
              <p class="text-[31.25px] text-[#1A1F16]">{{ item.title }}</p>
              <p class="text-[20px] text-[#1A1F16]">{{ item.description }}</p>

              <div>
                <div class="flex items-center space-x-2 my-2">
                  <span class="text-green-500 flex">
                    <img v-for="i in Math.floor(item.rating)" :key="'full-' + i" src="../assets/icons/star.svg"
                      alt="Full Star">

                    <!-- Render Half Star if the rating has a decimal part -->
                    <img v-if="item.rating % 1 >= 0.5" src="../assets/icons/star-half.svg" alt="Half Star">

                    <!-- Render Empty Stars (5 stars in total) -->
                    <img v-for="i in 5 - Math.ceil(item.rating)" :key="'empty-' + i"
                      src="../assets/icons/star-outline.svg" alt="Empty Star">
                  </span>
                  <span class="text-gray-500">{{ item.rating }} / 5</span>
                </div>
              </div>

              <div class="flex justify-between items-center mt-4">
                <p class="text-[20px] text-[#1A1F16]">${{ item.price }} x {{ item.quantity }}</p>
                <div class="flex items-center space-x-2">
                  <button @click="decreaseQuantity(item.id)"
                    class="px-3 py-1 cursor-pointer"><img src="../assets/icons/Name=minus.svg" alt=""></button>
                  <span class="text-[20px]">{{ item.quantity }}</span>
                  <button @click="increaseQuantity(item.id)"
                    class="px-3 py-1 cursor-pointer"><img src="../assets/icons/Name=plus.svg" alt=""></button>
                </div>
              </div>
            </div>
          </div>

          <hr class="my-6 border-t border-gray-200" />
        </div>
      </div>
    </div>

    <!-- Order Summary Section -->
    <div class=" h-max">
      <div class="bg-[#FFFFFF] rounded-[12px] p-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg ">
      <h2 class="text-[20px] text-[#000000] mb-4">Order Summary</h2>
      <div class="space-y-2">
        <div class="flex justify-between text-[16px] text-[#60695C]">
          <span>Items:</span>
          <span>${{ totalPrice }}</span>
        </div>
        <div class="flex justify-between text-[16px] text-[#60695C]">
          <span>Shipping:</span>
          <span>$6.99</span>
        </div>
        <div class="flex justify-between text-[16px] text-[#60695C]">
          <span>Estimated GST:</span>
          <span>$760.41</span>
        </div>
        <div class="flex justify-between text-[16px] text-[#60695C]">
          <span>Gift Card:</span>
          <span>$0.00</span>
        </div>
      </div>
      <hr class="my-4" />
      <div class="flex justify-between text-[20px] text-[#E5252C]">
        <span>Order Total:</span>
        <span>${{ totalPrice }}</span>
      </div>
      <hr class="my-4" />
      <button class="w-full bg-[#1A1F16] text-white py-2 my-2 rounded-[11px]">
        Place your order
      </button>
    </div>
    <div class="flex justify-end mt-4 ">
      <button @click="goBack" class="text-gray-500 flex py-2 px-6 rounded-[12px] border border-[#1A1F16] cursor-pointer"><img src="../assets/icons/back.svg" alt="">Back</button>
    </div>
  </div>
  </div>
</template>

<script>
import { useStore } from '@/store/store'; // Import the Pinia store

export default {
  name: 'Checkout',
  computed: {
    // Accessing bagItems directly from the Pinia store
    store() {
      return useStore(); // Access the store instance
    },
    bagItems() {
      return this.store.bagItems; // Access bagItems from the store
    },
    totalPrice() {
      // Calculating total price dynamically based on bagItems in the store
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
        this.store.removeFromBag(id); // Call store action to remove the item when quantity <= 1
      }
    },
    goBack() {
      this.$router.go(-1); // Navigate back to the previous page
    }
  }
};
</script>

<style scoped></style>
