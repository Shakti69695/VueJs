<script>
import { mapGetters } from 'vuex';
import Home from './components/Home.vue';

export default {
  name:'App',
  computed:{
    ...mapGetters('login',{
      isLoggedIn:"isLoggedIn"
    }),
  },
  mounted:function(){
    if (this.isLoggedIn) {
      this.$router.push("/profile");
    }
  },
  components:{Home, 
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
