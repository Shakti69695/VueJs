<template>
  <div class="flex flex-wrap justify-start m-[10px] relative w-fit">
    <button
      v-for="(category, index) in categories"
      :key="index"
      @click="handleCategoryClick(category)"
      :class="[
        'cursor-pointer px-2 py-0.5 text-[14px] font-[cabin] rounded-full mx-[10px] mb-2 border border-gray-400',
        { 
          ' bg-gray-500 text-white': category === selectedCategory, // Highlight the selected category
          'bg-[#ffffffa7]': category !== selectedCategory // Normal category style
        }
      ]"
    >
      {{ category }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'CategoryButtons',
  props: {
    categories: {
      type: Array,
      required: true,
    },
    selectedCategory: {
      type: String,
      default: null, // Default to null when no category is selected
    }
  },
  methods: {
    handleCategoryClick(category) {
      this.$emit('category-clicked', category); // Emit the selected category to the parent
    },
  }
};
</script>

<style scoped>
/* You can add additional styling for CategoryButtons here */
</style>
