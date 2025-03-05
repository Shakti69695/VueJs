<template>
  <div class="add-box">
    <h3>Add Product</h3>
    <form @submit.prevent="handleSubmit">
      <div class="input-group">
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          v-model="title"
          required
        />
      </div>

      <div class="input-group">
        <label for="imageUrl">Image URL</label>
        <input
          type="url"
          id="imageUrl"
          v-model="imageUrl"
          required
        />
      </div>

      <button type="submit" class="add-btn">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddBox",
  data() {
    return {
      title: "",
      imageUrl: "",
    };
  },
  methods: {
    handleSubmit() {
      // Emit the new product data to the parent component
      const newProduct = {
        title: this.title,
        thumbnail: this.imageUrl,
      };

      this.$emit("addProduct", newProduct); // Emit event to parent (Body.vue)
      this.title = ""; // Clear the inputs
      this.imageUrl = "";
    },
  },
};
</script>

<style scoped>
.add-box {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.input-group input {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.add-btn {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-btn:hover {
  background-color: #45a049;
}
</style>
