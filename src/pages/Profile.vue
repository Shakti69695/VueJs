<template>
  <div id="login">
    <Header/>
    <section class="">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ user.username }}
          </h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { mapGetters } from 'vuex';



export default {
  name: "Login",
  computed:{
    ...mapGetters('login',{
      user:"getUser"
    })
  },
  components: {
    Header
  }
};
</script>
<style>
/* General reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#login {
  font-family: Arial, sans-serif;
}

/* Header */
.header {
  background-color: #4A90E2;
  padding: 20px;
  color: white;
  text-align: center;
}

.header-title {
  font-size: 24px;
}

/* Hero section */
.hero {
  background-color: #4A90E2;
  color: white;
  padding: 60px 20px;
  text-align: center;
}

.hero-body .container {
  max-width: 800px;
  margin: 0 auto;
}

.title {
  font-size: 36px;
  font-weight: bold;
}

</style>