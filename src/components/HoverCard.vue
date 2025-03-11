<template>
  <div class="flex items-center bg-[#EDEDED] rounded-lg shadow-md p-4 sm:m-2.5 md:m-2.5 w-full sm:w-full md:w-full xl:w-80 font-[cabin]">
    <div class="w-16 h-16 sm:w-20 sm:h-20">
      <img :src="item.thumbnail" :alt="item.title" class="w-full h-full rounded-lg" />
    </div>
    <div class="ml-4">
      <h3 class="font-bold text-sm sm:text-lg md:text-lg">{{ item.title }}</h3>
      <p class="text-gray-600 text-xs sm:text-sm md:text-sm">${{ item.price }} x {{ item.quantity }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HoverCard',
  props: {
    item: Object
  }
}
</script>

<style scoped>
/* Additional styling, if needed */
</style>
