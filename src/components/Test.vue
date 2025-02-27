<template>
  <div id="Test">
    <!-- <div :class="{ red: isRed }"> -->
    <div v-bind:style="{ color: color_value.color }">
      <h3>Hello {{ name }}</h3>

    </div>
    <br />
    <!-- <br />
    {{ date }} -->

    <br />

    <input type="text" v-model="name" />
    <select v-model="color_value">
      <!-- <option v-bind:value="{ color: 'red' }">red</option>
      <option v-bind:value="{ color: 'yellow' }">yellow</option>
      <option v-bind:value="{ color: 'black' }">black</option>
      <option v-bind:value="{ color: 'orange' }">orange</option> -->
      <option v-for="(col, index) in colors" v-bind:key="index" v-bind:value="{ color: col }">{{ col }}</option>
    </select>
    <!-- <button v-on:click="clear">clear</button> -->
    <!-- <button @click="makeCapital">Capital</button>
    <input :checked="isRed" v-model="isRed" type="checkbox" @click="red" />Red -->
  </div>
</template>
<script>
export default {
  name: "Test",
  data: () => {
    return {
      name: "Shakti",
      // isRed: "false",
      colors: ["red", "yellow", "black", "orange"],
      color_value: {
        color: "black"
      }
    }
  },
  created: function () {
    this.date = new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDay()
  },
  mounted: function () {
    this.date = new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDay()
  },

  methods: {
    clear: function () {
      this.name = "";
    },
    makeCapital: function () {
      this.name = this.name.toUpperCase();
    },
    red: function () {
      console.log(this.isRed);

    }
  }
}
</script>
<style>
.red {
  color: red;
}

.green {
  color: green;
}
</style>