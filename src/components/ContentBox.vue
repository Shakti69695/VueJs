<template>
  <div class="bg-[#EDEDED] relative flex flex-col">

    <div class="flex flex-wrap bg-[#EDEDED] h-[125px] justify-end relative" style="width: calc(100vw - 90px);">
      <div
        class=" sm:w-[400px] md:w-[507px] p-[8px] bg-[#EDEDED] top-[24px] left-[50%] transform -translate-x-[50%] absolute">
        <span class="font-[cabin] font-[400] text-[12px] px-[8px] text-[#60695C]">Search Item</span>
        <input type="text" v-model="query" @keydown="querySearch"
          placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
          class="p-3  sm:w-[400px] md:w-[507px]  rounded-[13px] focus:outline-none focus:ring-2 bg-[#FFFFFF] focus:ring-gray-300" />
      </div>
      <!-- <<--Bag Button-->
      <div class="relative" @mouseover="showModal">

        <div class="absolute top-[56px] right-3 w-[59px] h-[48px] rounded-[13px] bg-[#FFFFFF] ">

          <button class="absolute top-[11px] left-[18px] cursor-pointer">
            <img src="../assets/icons/Name=bag-handle.svg" alt="Bag">
          </button>

        </div>
      </div>
      <!-- Hover Modal -->
      <div v-if="isModalVisible"
        class="absolute top-[56px] right-3 bg-[#EDEDED] shadow-lg rounded-[13px] p-2 flex flex-wrap gap-2 h-96 overflow-y-auto cursor-pointer hover-modal w-min overflow-x-hidden justify-center px-1.5 py-5 font-[cabin]"
        @mouseleave="hideModal" @click="navigateToBag">

        <span class="text-center w-full">Go to Bag</span>
        <div class="flex flex-col gap-2 ">
          <HoverCard v-for="item in bagItems" :key="item.id" :item="item" />
        </div>
        <span class="text-center w-full"> Total: ${{ totalPrice }}</span>
      </div>
    </div>

    <div>
      <div class="flex flex-wrap justify-start m-[10px] relative w-fit">
        <button @click="categoryProducts('smartphones')"
          class="cursor-pointer bg-[#ffffffa7] font-[cabin] rounded-full mx-[10px] border border-gray-400 mb-2">
          Smartphones
        </button>
        <button @click="categoryProducts('laptops')"
          class="cursor-pointer bg-[#ffffffa7]  rounded-full mx-[10px] border border-gray-400 mb-2">
          Laptops
        </button>
        <button @click="categoryProducts('groceries')"
          class="cursor-pointer bg-[#ffffffa7] font-[cabin]  rounded-full mx-[10px] border border-gray-400 mb-2">
          Groceries
        </button>
        <button @click="categoryProducts('fragrances')"
          class="cursor-pointer bg-[#ffffffa7] font-[cabin]  rounded-full mx-[10px] border border-gray-400 mb-2">
          Fragrances
        </button>
        <button @click="categoryProducts('furniture')"
          class="cursor-pointer bg-[#ffffffa7] font-[cabin]  rounded-full mx-[10px] border border-gray-400 mb-2">
          Furniture
        </button>
        <button @click="categoryProducts('motorcycle')"
          class="cursor-pointer bg-[#ffffffa7] font-[cabin]  rounded-full mx-[10px] border border-gray-400 mb-2">
          Motorcycle
        </button>
      </div>

    </div>
    <!-- Products -->
    <div v-if="paginatedProducts.length >= 1"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto  gap-8 p-4 bg-[#EDEDED]"
      style="width: calc(100vw - 90px);">
      <Card v-for="product in paginatedProducts" :key="product.id" :product="product" />
    </div>
    <div v-else class="bg-[#EDEDED] w-screen h-screen font-[cabin]">
      Sorry, product not found
    </div>

    <!-- Pagination Controls -->
    <div v-if="paginatedProducts.length >= 1" class="flex justify-center mt-6">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage <= 1"
        class="px-4 py-2 font-[cabin] bg-gray-800 text-white rounded-lg">
        Previous
      </button>
      <span class="self-center font-[cabin]">{{ currentPage }} / {{ totalPages }}</span>
      <button @click="changePage(currentPage + 1)" :disabled="currentPage >= totalPages"
        class="px-4 py-2 font-[cabin] bg-gray-800 text-white rounded-lg">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { useStore } from '@/store/store';
import { mapActions, mapState } from 'pinia';
import Card from './Card.vue';
import HoverCard from './HoverCard.vue';

export default {
  name: 'Dashboard',
  data() {
    return {
      isModalVisible: false, // Control visibility of the hover modal
      currentPage: 1, // Current page number
      productsPerPage: 25, // Number of products per page
    };
  },
  components:{
    Card,
    HoverCard
  },
  computed: {
    ...mapState(useStore, ['allProducts', 'bagItems']),

    paginatedProducts() {
      const start = (this.currentPage - 1) * this.productsPerPage;
      const end = start + this.productsPerPage;
      return this.allProducts.slice(start, end);
    },

    totalPages() {
      return Math.ceil(this.allProducts.length / this.productsPerPage);
    },
    totalPrice() {
      return this.bagItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    },

    query: {
      get: function () {
        const store = useStore();
        return store.query
      },
      set: function (val) {
        const store = useStore();
        store.setQuery(val)
      }
    }

  },

  methods: {
    ...mapActions(useStore, ['fetchProducts', 'fetchQueryProducts', 'categoryProducts']),

    querySearch: function (e) {
      if (e.key === "Enter") {
        this.fetchQueryProducts(this.query)
      }
    },
    addProductToCart(product) {
      const store = useStore();
      store.addToCart(product) // Call the action to add product to the cart
    },
    showModal() {
      this.isModalVisible = true; // Show the modal on hover
    },

    hideModal() {
      this.isModalVisible = false; // Hide the modal when hover ends
    },

    navigateToBag() {
      this.$router.push('/bag'); // Navigate to the /bag page when the modal is clicked
    },

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

<style scoped>
/* Hover modal responsiveness */
@media (max-width: 640px) {
  .hover-modal {
    width: 160px;
  }

  .hover-modal img {
    width: 25px;
    height: 25px;
  }
}

@media (min-width: 640px) and (max-width: 1024px) {
  .hover-modal {
    width: 180px;
  }
}

/* Add any additional styling you feel is necessary */
</style>
