<template>
  <div id="login" class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <section class="w-full bg-blue-600 py-12">
      <div class="container mx-auto text-center text-white">
        <h3 class="text-3xl font-semibold">Login Page</h3>
      </div>
    </section>
    
    <section class="w-full flex justify-center py-12">
      <div class="flex flex-wrap justify-center w-full max-w-4xl px-4">
        <div class="side-column hidden md:block md:w-1/4"></div>

        <div class="center-column w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <Form />
        </div>

        <div class="side-column hidden md:block md:w-1/4"></div>
      </div>
    </section>
  </div>
</template>

<script>
import Form from '@/components/Form.vue';

export default {
  name: "Login",
  components: {
    Form
  }
}
</script>
