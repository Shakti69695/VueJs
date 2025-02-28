<template>
  <div>
    <h2>Type something</h2>
    <i>press enter</i>
    <form v-on:submit.prevent>
      <input type="text" v-on:keypress="submit" v-model="text">
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data: function () {
    return {
      text: "",
    }
  },
  watch: {
    name: function (newName) {
      console.log("watch", newName);
      this.text = newName;      
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    editIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    submit: function (e) {
      if (e.keyCode === 13) {
        if (this.editIndex !== -1) {
          console.log('edit item');
          this.$emit("edit-item", {
            name: this.text,
            editIndex: this.editIndex
          })

        } else {
          this.$emit("submit-item", this.text)
        }
        this.text = "";
      }
    }
  }
}
</script>