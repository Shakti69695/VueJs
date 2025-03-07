<template>
  <!-- Navbar Component -->
  <div class="h-screen w-[72px] bg-gray-100 flex flex-col items-center py-4">
    <button class="mb-6">
      <img src="../assets/icons/Type=Flat.svg" alt="Logo" class="h-6 w-6" />
    </button>
    <nav class="space-y-8">
      <button class="p-2 rounded-lg hover:bg-gray-200">
        <img src="../assets/icons/Name=list.svg" alt="Home" class="h-6 w-6" />
      </button>
      <button class="p-2 rounded-lg hover:bg-gray-200">
        <img src="../assets/icons/Name=storefront.svg" alt="Store" class="h-6 w-6" />
      </button>
      <button class="p-2 rounded-lg hover:bg-gray-200">
        <img src="../assets/icons/Name=bag-handle.svg" alt="Bag" class="h-6 w-6" />
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
</style>
