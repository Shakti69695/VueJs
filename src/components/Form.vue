<template>
  <div id="submitForm" class="flex justify-center items-center">
    <section class="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-md">
      <label for="username" class="block text-sm font-bold mb-2">Email</label>
      <input type="text" id="username" v-model="username" maxlength="30" required
        class="w-full p-3 text-sm border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />

      <label for="password" class="block text-sm font-bold mb-2">Password</label>
      <input type="password" id="password" v-model="password" required
        class="w-full p-3 text-sm border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />

      <button @click="loginClick" :class="['w-full p-3 text-white text-lg rounded cursor-pointer transition-all duration-300',
        {
          'bg-blue-500 hover:bg-blue-700': !login_progress,
          'bg-gray-400 cursor-not-allowed opacity-70': login_progress
        }]"
         
         >
        <span v-if="login_progress">Logging in...</span>
        <span v-else>Login</span>
      </button>
    </section>
  </div>
</template>

<script>

import { mapActions, mapState } from 'pinia';
import { useStore } from '../store/store'

export default {
  name: "Form",
  watch: {
    user: function (val) {
      if (val.username) {
        this.$router.push("/")
      }
    },
    // error_message: function (val) {
    //   if (val) {
    //     this.$snackbar.open({
    //       duration: 5000,
    //       message:
    //         "Login failed. " + val.message,
    //       type: "is-danger",
    //       position: "is-bottom-left"
    //     })
    //   }
    // }
  },
  methods: {
    ...mapActions(useStore, ['fetchUser']),
    loginClick: function () {
      this.fetchUser({
        username: this.username,
        password: this.password
      });
    }
  },
  computed: {
    ...mapState(useStore, {
      user: "getUser"
    }),
    // login_progress: function () {
    //   return this.$store.state.login.login_progress;
    // },
    // error_message: function () {
    //   return this.$store.state.login.error;
    // },
    username: {
      get: function () {
        const store = useStore();  // Access Pinia store
        return store.username;
      },
      set: function (val) {
        const store = useStore();  // Access Pinia store
        store.setUsername(val);
      }
    },
    password: {
      get: function () {
        const store = useStore();  // Access Pinia store
        return store.password;
      },
      set: function (val) {
        const store = useStore();  // Access Pinia store
        store.setPassword(val);
      }
    }
  }
}
</script>

<style scoped>
button:disabled {
  cursor: not-allowed;
  opacity: 0.7;
}
</style>
