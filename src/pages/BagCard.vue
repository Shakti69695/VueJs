<template>
  <div class="bg-white rounded-[21px] p-6 flex flex-col md:flex-row">
    <!-- Image section, mobile: on top, desktop: on left -->
    <div class="w-full md:w-1/4 mb-4 md:mb-0">
      <img :src="item.thumbnail" :alt="item.title" class="h-32 w-32 object-contain rounded-lg" />
    </div>

    <!-- Content section, mobile: below, desktop: on right -->
    <div class="w-full md:w-3/4 flex flex-col justify-between ml-0 md:ml-6 font-[cabin]">
      <div>
        <h3 class="text-[31.25px] text-gray-800">{{ item.title }}</h3>
        <p class="text-sm text-gray-500">{{ item.description }}</p>
        <div>
          <div class="flex items-center space-x-2 my-2">
            <span class="text-green-500 flex">
              <img v-for="i in Math.floor(item.rating)" :key="'full-' + i" src="../assets/icons/star.svg" alt="Full Star">

              <!-- Render Half Star if the rating has a decimal part -->
              <img v-if="item.rating % 1 >= 0.5" src="../assets/icons/star-half.svg" alt="Half Star">

              <!-- Render Empty Stars (5 stars in total) -->
              <img v-for="i in 5 - Math.ceil(item.rating)" :key="'empty-' + i" src="../assets/icons/star-outline.svg" alt="Empty Star">
            </span>
            <span class="text-gray-500">{{ item.rating }} / 5</span>
          </div>
        </div>
      </div>

      <div class="flex justify-between items-center mt-4">
        <p class="text-[20px] text-[#1A1F16]">${{ item.price }} x {{ item.quantity }}</p>
        <div class="flex items-center space-x-2">
          <button @click="decreaseQuantity(item.id)" class="px-3 py-1 cursor-pointer">
            <img src="../assets/icons/Name=minus.svg" alt="">
          </button>
          <span class="text-[20px]">{{ item.quantity }}</span>
          <button @click="increaseQuantity(item.id)" class="px-3 py-1 cursor-pointer">
            <img src="../assets/icons/Name=plus.svg" alt="">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BagCard',
  props: {
    item: {
      type: Object,
      required: true
    },
    increaseQuantity: {
      type: Function,
      required: true
    },
    decreaseQuantity: {
      type: Function,
      required: true
    }
  }
};
</script>

<style scoped>
/* Optional: You can include some specific styles for BagCard */
</style>
