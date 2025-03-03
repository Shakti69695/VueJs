<template>
  <div class="flex p-4">
    <button type="button" @click="openModel" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
      Add User
    </button>
  </div>

  <!-- Modal (Visibility controlled with Tailwind classes) -->
  <div v-if="isComponentModalActive" 
    class="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
    <div class="bg-white rounded-lg shadow-xl max-w-lg w-full">
      <div class="p-4">
        <add-user-form v-bind="formProps" @useredited="useredited" @adduser="adduser" @close="close"></add-user-form>
      </div>
    </div>
  </div>
</template>


<script>
import AddUserForm from './AddUserForm.vue';

export default {
  name: "AddUser",
  components: { AddUserForm },
  props:["edituser"],
  methods: {
    adduser: function (user) {
      this.$emit("adduser", user)
    },
    useredited: function (user) {
      this.$emit("useredited", user)
    },
    openModel: function () {
      this.isComponentModalActive = true
    },
   
    close:function(){
      this.currentUser= false
      this.isComponentModalActive = false
    }
  },
  watch:{
    edituser: function(newValue,oldValue){
      // console.log(newValue, oldValue);
      if (newValue) {
        this.formProps = {
          id: newValue.id,
          email: newValue.email,
          name: newValue.name,
          password: newValue.password,
          date: new Date(newValue.date)
        };
        this.isComponentModalActive = true;
      }
    }
  },
  data() {
    return {
      currentUser: this.edituser,
      isComponentModalActive: false,
      formProps: {
        id:-1,
        email: "",
        password: "",
        name: "",
        date: null
      }
    }
  }
}
</script>
<style></style>