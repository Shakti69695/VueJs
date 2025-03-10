<template>
  <!-- Navbar Component -->
  <div class="flex h-[calc(100vh-32px)] justify-between bg-[#FFFFFF] w-[56px] relative rounded-[8px] flex-col items-center">

    <div class=" bg-[##FFFFFF] flex flex-col items-center py-4 gap-2">
      <router-link to="/" class="">
        <img src="../assets/icons/Type=Flat.svg" alt="Logo" class="h-[24px] w-[24px] m-[8px]" />
      </router-link>
        <router-link to="/" class=" hover:bg-gray-200 ">
          <img src="../assets/icons/Name=storefront.svg" alt="Store" class="h-[24px] w-[24px] m-[8px]" />
        </router-link>
        <router-link to="/bag" class=" hover:bg-gray-200">
          <img src="../assets/icons/Name=bag-handle.svg" alt="Bag" class="h-[24px] w-[24px] m-[8px]" />
        </router-link>
      
    </div>
    <div>
      <router-link to="/bag" class="bg-[#E5252C] hover:bg-gray-200">
          <img src="../assets/icons/Icon.svg" alt="Bag" class=" bg-[#E5252C] h-[24px] w-[24px] m-[8px]" />
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped></style>
