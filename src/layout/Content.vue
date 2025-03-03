<template>
  <div>
    <section class="bg-blue-600 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-semibold text-white">Welcome!</h1>
        <p class="mt-4 text-lg text-white">This is Form app </p>
        <p class="mt-2 text-white">You can add/edit data and sort the table, etc</p>
      </div>
    </section>

    <section class="py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <slot />
      </div>
    </section>
  </div>
</template>


<script>
export default {
  name: "Content"
}
</script>