<script>

import { mapState } from 'pinia';
import { useStore } from './store/store'
import Dashboard from './pages/Dashboard.vue';

export default {
  name:'App',
  computed:{
    ...mapState(useStore,{
      isLoggedIn:"isLoggedIn"
    }),
  },
  mounted:function(){
    if (this.isLoggedIn) {
      this.$router.push("/bag");
    }
  },
  components:{Dashboard, 
  }
}
</script>

<template>
<div>
  <router-view></router-view>
</div>
</template>

<style>
</style>