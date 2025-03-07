<template>
  <!-- Bag Component -->
  <div class="bg-[#EDEDED] p-4 w-[345px] h-screen">
    <h2 class="text-lg font-semibold mb-4">Bag</h2>
    <div v-for="item in bagItems" :key="item.id" class="flex items-center space-x-4">
      <img :src="item.image" :alt="item.name" class="h-12 w-12 object-contain" />
      <p class="text-sm">{{ item.name }}</p>
    </div>
    <button class="mt-4 w-full bg-gray-800 text-white p-2 rounded-lg">View Bag</button>
  </div>
</template>

<script>
export default {
  name: 'Bag',
  data() {
    return {
      bagItems: [
        { id: 1, name: 'Macbook Pro', image: '/images/macbook.png' },
        { id: 2, name: 'iPhone 11', image: '/images/iphone.png' }
      ]
    }
  }
}
</script>

<style scoped>
</style>
