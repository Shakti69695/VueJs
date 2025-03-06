<template>
  <div class="header">
    <div><span class="vue">Vue</span></div>
    <button v-if="!isLoggedIn" @click="login" class="header-btn">Login</button>
    <button v-if="isLoggedIn" @click="Logout" class="header-btn">Logout</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Header",
  computed:{
    ...mapGetters('login',{
      isLoggedIn: "isLoggedIn"
    })
  },
  methods:{
    ...mapActions('login',["logout"]),
    login:function(){
      this.$router.push("login")
    },
    Logout:function(){
      this.logout();
      this.$router.push("/")
    }
  }
};
</script>

<style scoped>
/* Styling for the header container */
.header {
  display: flex;
  justify-content: space-between; /* Pushes content to the sides */
  align-items: center;
  padding: 10px 20px;
  background-color: #f4f4f4;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.vue{
  color: green;
}

/* Styling for the button on the right side */
.header-btn {
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.header-btn:hover {
  background-color: #0056b3; /* Darker blue on hover */
  transform: scale(1.05); /* Slight scaling effect */
}

</style>
