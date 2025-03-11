<template>
  <!-- Dashboard Component -->
  <div>
    <div class="flex flex-row justify-between bg-[#EDEDED] relative">
      <!-- Navbar -->
      <div class="fixed flex justify-end w-[72px] py-4 h-screen bg-[#EDEDED]">
        <Navbar />
      </div>

      <!-- ContentBox with adjusted width -->
      <div class="absolute left-[72px] bg-[#EDEDED]">
        <ContentBox />
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from '@/components/Navbar.vue';
import Search from '@/components/Search.vue';
import ContentBox from '@/components/ContentBox.vue';

export default {
  name: 'Dashboard',
  components: {
    Navbar,
     Search,
    ContentBox
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Apple Watch', description: 'Series 5 SE', price: 529.99, image: '/images/apple-watch.png' },
        { id: 2, name: 'Sony ZX330BT', description: 'Light Grey', price: 39.99, image: '/images/headphones.png' }
      ]
    }
  }
}
</script>
