<template>
  <div>
    <AddUser @adduser="adduser" @useredited="useredited" :edituser="edituserdata" />
    <Table @deleteuser="deleteuser" @edituser="edituser" :users="users" />
  </div>
</template>


<script>
import AddUser from '@/components/AddUser.vue';
import Table from '@/components/Table.vue';

export default {
  name: "Body",
  components: {
    AddUser,
    Table
  },
  data: function () {
    return {
      users: [],
      edituserdata: {}
    }
  },
  methods: {
    adduser: function (user) {
      user.id = this.users.length + 1;
      this.users.push(user)
    },
    useredited: function (user) {
      console.log(user);
      this.users.splice(user.id - 1, 1, user)
      this.edituserdata = false
    },
     edituser: function (user) {
      this.edituserdata= user;
    },
    deleteuser: function (user) {
      this.users.splice(user.id - 1)
    }
  }
}
</script>