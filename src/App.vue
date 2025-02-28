<script>
import BaseBtn from './components/BaseBtn.vue';
import List from './components/List.vue';
export default {
  name: 'App',
  components: {
    List
  },
  // data() {
  //   return {
  //     name: "shakti"
  //   }
  // },
  // methods: {
  //   showAlert() {
  //     alert('button clicked')
  //   },
  //   toggleRev() {
  //     this.name = this.name.split('').reverse().join('');
  //   }
  // }
}
</script>

<template>
  <!-- <BaseBtn :label="'Alert'" :action="showAlert" id="btn" />
  <BaseBtn :label="'toggleName'" :action="toggleRev" id="btn" />
  <p>name:{{ name }}</p> -->
  <List />
</template>

<style>
#btn {
  background-color: #0069D9;
  color: #ffffff;
}
</style>
