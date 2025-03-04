<template>
  <div class="header">
    <div class="text">Today</div>
    <div >
      <button type="button" @click="openmodel" class="amg"> <img
          src="https://img.icons8.com/?size=100&id=24717&format=png&color=228BE6" class="add" alt=""></button>
    </div>
    <div v-if="isComponentModelActive">
      <AddBox v-bind="taskProp" @addtask="addtask" @close="close"></AddBox>
    </div>
  </div>
</template>

<script>
import AddBox from './AddBox.vue';

export default {
  name: "Header",
  components: { AddBox },
  data() {
    return {
      isComponentModelActive: false,
      taskProp:{
        id:-1,
        task:"",
        done:false,
        isEditing: false,
      }
    }
  },
  methods: {
    openmodel: function () {
      this.isComponentModelActive = true;
    },
    close: function () {
      this.isComponentModelActive = false;

    },
    addtask:function(task){
      this.$emit('addtask',task)
    }
  }
}
</script>

<style>
/* .btn{
  background-color: white;
  border: none;
} */
.header {
  height: 73px;
  width: 375px;
  background-color: white;
  position: relative;
  display: flex;
  flex-direction: row;
}

.amg {
  width: 25px;
  height: 25px;
  top: 23px;
  left: 338px;
  position: absolute;
  background-color: white;
  border: none;
  cursor: pointer;
}

.add {
  height: 25px;
  width: 25px;
}

.text {
  font-size: 32px;
  top: 16px;
  left: 16px;
  width: 65px;
  height: 41px;
  position: absolute;
  color: #252A31;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 41px;
  font-weight:600;
}
</style>