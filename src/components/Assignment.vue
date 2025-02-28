<template>
  <div id="assignment">
    <h1>Customer Detail</h1>
    <form v-on:submit.prevent="submit">
      <span>First name</span>
      <input type="text" v-model="firstname" placeholder="Enter first name">
      <span>Last name</span>
      <input type="text" v-model="lastname" placeholder="Enter last name">
      <span>Address</span>
      <input type="text" v-model="address" placeholder="Enter address">
      <button @click="addRow">Add</button>
    </form>

    <table>
      <tbody>
        <tr v-for="(item, index) in rows" :key="index" :class="{ highlight: item.isChecked }">
          <td id="roe">{{ item.firstname }}</td>
          <td id="roe">{{ item.lastname }}</td>
          <td id="roe">{{ item.address }}</td>
          <td id="roe">
            <button @click="deleteRow(index)">X</button>
            <input type="checkbox" v-model="item.isChecked">
          </td>
        </tr>
      </tbody>
    </table>


  </div>
</template>

<script>
export default {
  name: "Assignment",
  data() {
    return {
      firstname: '',
      lastname: '',
      address: '',
      rows: []
    }
  },
  methods: {
    addRow() {
      if (this.firstname && this.lastname && this.address) {
        this.rows.push({
          firstname: this.firstname,
          lastname: this.lastname,
          address: this.address,
          isChecked: false
        })
        this.firstname = '';
        this.lastname = '';
        this.address = '';
      } else {
        alert('fill all fields')
      }
    },
    deleteRow(index) {
      this.rows.splice(index, 1)
    }
  }
}
</script>

<style>
#assignment form {
  width: 800px;
}
.highlight{
  color: red;
}
#roe{
  width:150px;
  background-color: yellow;
  border: 2px solid black;
  padding: 2px;
}
</style>