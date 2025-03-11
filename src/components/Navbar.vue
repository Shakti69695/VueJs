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
      <button @click="logout" class="bg-[#E5252C]  cursor-pointer  rounded-[10px]">
          <img src="../assets/icons/Icon.svg" alt="Logout" class=" bg-[#E5252C] h-[24px] w-[24px] m-[8px]" />
        </button>
    </div>
  </div>
</template>

<script>
import { useStore } from '@/store/store';

export default {
  name: 'Navbar',
  methods: {
    logout() {
      const store = useStore();
      store.setLoginStatus(false); // Set login status to false to log out the user
      this.$router.push('/login'); // Redirect to the login page
    }
  }
}
</script>

<style scoped></style>
