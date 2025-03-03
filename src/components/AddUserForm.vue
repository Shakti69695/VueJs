<template>
  <form @submit.prevent="submitForm">
    <div class="modal-card w-auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Login</p>
      </header>
      <section class="modal-card-body">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input id="email" type="email" v-model="form_email" placeholder="Your email" required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input id="name" type="text" v-model="form_name" placeholder="Your name" required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        <div class="mb-4">
          <label for="dob" class="block text-sm font-medium text-gray-700">Date of Birth</label>
          <datepicker id="dob" required v-model="dob" placeholder="dob..." icon="calendar-today"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
          </datepicker>
        </div>

        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input id="password" type="password" v-model="form_password" placeholder="Your password" required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        </div>

        <div class="mb-4">
          <label for="conf_password" :class="password_mismatch_message_class"
            class="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input id="conf_password" type="password" v-model="conf_password" password-reveal
            placeholder="Confirm password" required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          <span :class="password_mismatch_message_class" class="text-sm text-red-500">{{ password_mismatch_message
          }}</span>
        </div>

        <div class="mb-4">
          <div :class="terms_message_class">
            <input id="terms" type="checkbox" v-model="terms" required class="mr-2 leading-tight" />
            <label for="terms" class="text-sm text-gray-700">Accept Terms & Conditions</label>
          </div>
          <span :class="terms_message_class" class="text-sm text-red-500">{{ terms_message }}</span>
        </div>
      </section>
      <footer class="modal-card-foot flex justify-between space-x-2">
        <button class="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400" type="button"
          @click="$parent.close()">
          Close
        </button>
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Login
        </button>
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  name: "AddUserForm",
  props: ["id", "email", "name", "password", "date"],
  data: function () {
    return {
      form_email: "",
      form_name: "",
      form_password: "",
      terms: false,
      conf_password: "",
      password_mismatch_message: "",
      password_mismatch_message_class: "",
      terms_message: "",
      terms_message_class: "",
      dob: null
    }
  },
  methods: {
    submitForm: function () {
      if (this.form_password !== this.conf_password) {
        this.password_mismatch_message = "Both password shoul match",
          this.password_mismatch_message_class = "text-red-500"
        return;
      }
      else {
        this.password_mismatch_message = "";
        this.password_mismatch_message_class = "";
      }
      if (!this.terms) {
        this.terms_message = "Please accept terms";
        this.terms_message_class = "text-red-500";
        return;
      } else {
        this.terms_message = "";
        this.terms_message_class = "";
      }
      if (this.id === -1) {
        console.log("add user called");
        this.$emit('adduser', {
          email: this.form_email,
          name: this.form_name,
          password: this.form_password,
          date: this.dob
        })
      } else {
        console.log("edit user called");
        this.$emit('useredited', {
          id: this.id,
          email: this.form_email,
          name: this.form_name,
          password: this.form_password,
          date: this.dob
        })
      }
      this.$emit('close')
    }
  }
}
</script>