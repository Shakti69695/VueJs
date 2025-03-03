<template>
 <div class="overflow-x-auto bg-white shadow-md rounded-lg">
  <table class="min-w-full table-auto">
    <thead>
      <tr class="bg-gray-100">
        <th class="px-4 py-2 text-left font-semibold text-gray-700">ID</th>
        <th class="px-4 py-2 text-left font-semibold text-gray-700">Name</th>
        <th class="px-4 py-2 text-left font-semibold text-gray-700">Email</th>
        <th class="px-4 py-2 text-left font-semibold text-gray-700">Date</th>
        <th class="px-4 py-2 text-center font-semibold text-gray-700">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id" class="border-t">
        <td class="px-4 py-2">{{ user.id }}</td>
        <td class="px-4 py-2">{{ user.name }}</td>
        <td class="px-4 py-2">{{ user.email }}</td>
        <td class="px-4 py-2 text-center">
          <span class="bg-green-200 text-green-800 py-1 px-3 rounded-full">
            {{ new Date(user.date).toLocaleDateString() }}
          </span>
        </td>
        <td class="px-4 py-2 text-center">
          <a @click.prevent="edituser(user)" class="text-blue-500 hover:text-blue-700 mx-2">
            <i class="fas fa-user-edit"> Edit</i>
          </a>
          <a @click.prevent="deleteuser(user)" class="text-red-500 hover:text-red-700 mx-2">
            <i class="fas fa-trash"> Delete</i>
          </a>
        </td>
      </tr>
    </tbody>
  </table>

  <template v-if="users.length === 0">
    <section class="p-8 text-center">
      <div class="text-gray-500">
        <i class="fas fa-sad-tear text-4xl"></i>
        <p>No users added yet!</p>
      </div>
    </section>
  </template>
</div>

</template>

<script>
export default {
  name: "Table",
  props:{
    users:{
      type:Array,
      required:true
    }
  },
  data: function () {
    return {
      users: []
    }
  },
  methods:{
    edituser:function(user){
      this.$emit('edituser',user)
    },
    deleteuser:function(user){
      this.$emit('deleteuser',user)
    }

  }
}
</script>