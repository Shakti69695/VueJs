<template>
  <div class="bg-[#EDEDED] rounded-2xl p-8 shadow-md w-[953px] h-[1024px]">
    <button class="text-gray-600 text-sm mb-4">&larr; Back</button>
    <div class="flex space-x-8">
      <div>
        <img src="../assets/icons/Name=Watch.svg" alt="Apple Watch" class="h-48 w-48 object-contain" />
      </div>
      <div>
        <h1 class="text-3xl font-bold">Apple Watch</h1>
        <p class="text-gray-500">Series 5 SE</p>
        <div class="flex items-center space-x-2 my-2">
          <span class="text-green-500">★★★★★</span>
          <span class="text-gray-500">4.5 / 5</span>
        </div>
        <p class="text-2xl font-semibold">$529.99</p>
        <p class="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis.
          Proin in quis ipsum non amet imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat, tincidunt lorem.
        </p>
        <button class="mt-4 px-6 py-2 bg-gray-800 text-white rounded-lg flex items-center space-x-2">
          <span><img src="../assets/icons/Name=bag-add.svg" alt=""></span>
          <span>Add to Bag</span>
        </button>
      </div>
    </div>
    <hr class="my-8" />
    <div>
      <h2 class="text-xl font-bold mb-4">Description</h2>
      <p class="text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim odio faucibus nec malesuada purus
        volutpat vel sed viverra. Id sagittis, phasellus dui in arcu. Nec arcu, sit nunc, nibh purus pellentesque
        sagittis. Felis rhoncus facilisis massa eget purus in purus. Etam at cras nulla nunc. Malesuada in pretium
        diam scelerisque sit mattis in egestas neque.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemView'
}
</script>

<style scoped>
</style>
