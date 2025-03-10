<template>
  <div class="flex items-center bg-white rounded-lg shadow-md p-4 m-2.5 w-80 font-[cabin]">
    <div class="w-20 h-20">
      <img :src="item.thumbnail" :alt="item.title" class="w-full h-full rounded-lg" />
    </div>
    <div class="ml-4">
      <h3 class="font-bold text-lg">{{ item.title }}</h3>
      <p class="text-gray-600">${{ item.price }} x {{ item.quantity }}</p>
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
