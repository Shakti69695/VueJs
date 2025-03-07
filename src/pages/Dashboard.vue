<template>
  <!-- Dashboard Component -->
  <div class="flex flex-row justify-between bg-[#EDEDED] relative gap-[10px]">
    <div class="fixed">
      <Navbar />
    </div>
    <div class="absolute left-82px">
      <Search />
      <ContentBox/>
    </div>
    <div class="fixed left-[900px]">
      <Bag />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Bag from './Bag.vue';
import Search from '@/components/Search.vue';
import ContentBox from '@/components/ContentBox.vue';

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Bag, Search,
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
