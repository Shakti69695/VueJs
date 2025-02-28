<template>
  <div>
    <Form v-bind:edit-index="editIndex" v-bind:name="name" v-on:edit-item="edit" v-on:submit-item="submit" />
    <ul>
      <li v-for="(item, index) in data" v-bind:key="index">
        <span>{{ item }}</span>
        <a href="#" v-on:click.prevent="deleteItem(index)">Delete</a>
        <a href="#" v-on:click.prevent="editItem(index)">Edit</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Form from "./Form.vue"
export default {
  name: 'List',
  components: { Form },
  data: function () {
    return {
      data: [],
      name: "",
      editIndex: -1
    }
  },
  methods: {
    submit: function (name) {
      this.data.push(name);
      this.name = ""
    },
    edit: function (obj) {
      var { name, editIndex } = obj;
      console.log("actual edit", name, editIndex);
      this.data[editIndex] = name;
      this.name = "";
      this.editIndex = -1;
    },
    deleteItem: function (index) {
      this.data.splice(index, 1)
    },
    editItem: function (index) {      
      this.editIndex = index;
      this.name = this.data[index];
    }
  }

}
</script>