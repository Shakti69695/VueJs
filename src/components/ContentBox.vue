<template>
  <div>
    <!-- Products Grid -->
    <div class="grid grid-cols-3 gap-8 p-4 w-[953px] bg-[#EDEDED]">
      <div v-for="product in paginatedProducts" :key="product.id"
        class="bg-[#EDEDED] gap-[8px] p-[16px] rounded-[22px]">
        <div class="flex justify-center w-[191.36px] p-[16px] rounded-[22px] bg-[#FFFFFF]">
          <img :src="product.thumbnail" :alt="product.title" class=" object-contain" />
        </div>
        <div class="p-[8px] gap-[8px]">
          <h3 class="font-(family-name:Cabin) text-[20px] font-[500] text-[#1A1F16]">{{ product.title }}</h3>
          <p class="font-(family-name:Cabin) font-[400] text-[16px] text-[#60695C] ">{{ product.brand
            }}</p>
          <div class="h-[50px] w-[175px] flex justify-between p-[8px]">
            <p class="font-(family-name:Cabin) font-[500] text-[20px] text-[#1A1F16]">${{ product.price }}</p>
            <button
              class="p-[8px] gap-[8px] rounded-[9px] text-[#1A1F16]">
              <img src="../assets/icons/Name=bag-add.svg" class="h-[18px] w-[18px]" alt="">
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination Controls -->
    <div class="flex justify-center space-x-4 mt-6">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage <= 1"
        class="px-4 py-2 bg-gray-800 text-white rounded-lg">
        Previous
      </button>
      <span class="self-center">{{ currentPage }} / {{ totalPages }}</span>
      <button @click="changePage(currentPage + 1)" :disabled="currentPage >= totalPages"
        class="px-4 py-2 bg-gray-800 text-white rounded-lg">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { useStore } from '@/store/store';
import { mapActions, mapState } from 'pinia';

export default {
  name: 'Dashboard',
  data() {
    return {
      currentPage: 1, // Current page number
      productsPerPage: 25, // Number of products per page
    };
  },
  computed: {
    ...mapState(useStore, ['allProducts']),
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.productsPerPage;
      const end = start + this.productsPerPage;
      return this.allProducts.slice(start, end);
    },
    // Total number of pages based on all products and products per page
    totalPages() {
      return Math.ceil(this.allProducts.length / this.productsPerPage);
    },
  }, methods: {
    ...mapActions(useStore, ['fetchProducts']),
    // Change the current page
    changePage(page) {
      if (page < 1) {
        this.currentPage = 1;
      } else if (page > this.totalPages) {
        this.currentPage = this.totalPages;
      } else {
        this.currentPage = page;
      }
    },
  },

  created() {
    this.fetchProducts()
  },
}
</script>