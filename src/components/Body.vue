<template>
  <div>
    <h2>Products</h2>
    <!-- Create button to open the form -->
    <button @click="openModel" class="create-btn">Create</button>

    <!-- Conditionally render AddBox component when isComponentModelActive is true -->
    <div v-if="isComponentModelActive">
      <AddBox @addProduct="addProduct" />
    </div>

    <!-- Display the product cards -->
    <div class="product-cards-container">
      <div
        class="product-card"
        v-for="(product, index) in products"
        :key="index"
      >
        <img
          :src="product.thumbnail"
          :alt="product.title"
          class="product-image"
        />
        <div class="product-info">
          <h3>{{ product.title }}</h3>
          <button class="delete-btn" @click="deleteproduct(index)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AddBox from "./AddBox.vue"; // Import AddBox component

export default {
  name: "Body",
  components: {
    AddBox, // Register AddBox component
  },
  data() {
    return {
      isComponentModelActive: false,
    };
  },
  computed: {
    ...mapGetters("products", ["products"]), // Get products from Vuex store
  },
  methods: {
    ...mapActions("products", ["fetchProducts", "deleteProduct"]),
    
    deleteproduct(index) {
      this.deleteProduct(index);
    },

    openModel() {
      this.isComponentModelActive = true;
    },

    addProduct(newProduct) {
      // Dispatch Vuex action to add the product
      this.$store.dispatch("products/addProduct", newProduct);
      this.isComponentModelActive = false; // Close the form
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script>

<style scoped>
/* General styling */
.product-cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.product-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  width: 250px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s;
}

.product-image {
  max-width: 100%;
  border-radius: 5px;
}

.product-info h3 {
  font-size: 1.2rem;
  color: #333;
}

.delete-btn {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.delete-btn:hover {
  background-color: #ff1a1f;
}

/* Styling for the Create button */
.create-btn {
  padding: 12px 24px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.create-btn:hover {
  background-color: #45a049;
  transform: scale(1.05);
}

.create-btn:focus {
  outline: none;
}
</style>
