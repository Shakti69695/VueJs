<template>
  <div id="submitForm">
    <section>
      <label for="username">Email</label>
      <input type="text" id="username" v-model="username" maxlength="30" required />

      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" required />

      <button @click="loginClick" :class="['login-button', { 'loading': login_progress }]">
        Login
      </button>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Form",
  watch: {
    user: function (val) {
      if (val.username) {
        this.$router.push("profile")
      }
    },
    error_message:function(val){
      if(val){
        this.$snackbar.open({
          duration: 5000,
          message:
            "Login failed. " + val.message,
          type: "is-danger",
          position: "is-bottom-left"
        })
      }
    }
  },
  methods: {
    ...mapActions('login', ["login"]),
    loginClick: function () {
      this.login({
        username: this.username,
        password: this.password
      });
    }
  },
  computed: {
    ...mapGetters('login', {
      user: "getUser"
    }),
    login_progress: function() {
      return this.$store.state.login.login_progress;
    },
    error_message: function() {
      return this.$store.state.login.error;
    },
    username: {
      get: function () {
        return this.$store.state.login.username;
      },
      set: function (val) {
        this.$store.commit("login/setUsername", val);
      }
    },
    password: {
      get: function () {
        return this.$store.state.login.password;
      },
      set: function (val) {
        this.$store.commit("login/setPassword", val);
      }
    }
  }
}
</script>

<style>
#submitForm {
  display: flex;
  justify-content: center;
  align-items: center;

}

section {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

label {
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
}

input:focus {
  border-color: #4A90E2;
  outline: none;
}

button.login-button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: #4A90E2;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button.login-button:hover {
  background-color: #357ABD;
}
/* Styling for the login button */
.login-button {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #4A90E2;
  border: none;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

/* Hover effect */
.login-button:hover {
  background-color: #357ABD;
  transform: scale(1.05);
}

/* Styling for the loading state */
.login-button.loading {
  background-color: #A5A5A5;
  cursor: not-allowed;
  opacity: 0.7;
}

/* Optional: You can add a spinner or another indicator for loading if needed */
.login-button.loading::after {
  content: '';
  width: 20px;
  height: 20px;
  border: 3px solid transparent;
  border-top: 3px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  display: inline-block;
  margin-left: 10px;
}

/* Spinner animation */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>