<template>
  <div class="box">
    <div class="head">Add Todo</div>
    <div class="bod">
      <input type="text" v-model="Task" placeholder="" id="content">
    </div>
    <div class="btn">

      <div>
        <button class="botn" @click="close">Cancel</button>

      </div>
      <div>
        <button class="tbtns" @click="submitTask">Done</button>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "AddBox",
  data: function () {
    return {
      Task: "",
      Done: false,
      isediting:false
    }
  },
  props: ["id", "task", "done", "isEditing"],
  methods: {
    submitTask: function () {
      if (this.Task === '') {
        alert("Enter Task")
      }
      else {
        if (this.id === -1) {
          this.$emit('addtask', {
            task: this.Task,
            done: this.Done,
            isEditing: this.isediting
          },
            this.$emit('close')
          )
        }
      }},
    close: function () {
      this.$emit('close')
    }
  }
    }
</script>

<style>
.box {
  height: 260.24px;
  width: 335.62px;
  top: 85.76px;
  left: 17.13px;
  border: 1px solid gainsboro;
  /* opacity: 10%; */
  border-radius: 10px;
  position: absolute;
  background-color: #FFFFFF;
  z-index: 1;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#content {
  height: 142px;
  width: 289px;
  border: none;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.btn {
  width: 298px;
  height: 44px;
  top: 222px;
  left: 20px;
  position: absolute;
  display: flex;
  justify-content: space-between;
}

.tbtns {
  width: 56px;
  height: 22px;
  cursor: pointer;
  /* top: 11px; */
  font-size: 18px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: white;
  border: none;
  color: #006CFF;
  font-weight: 501;
}

.botn {
  width: 56px;
  cursor: pointer;
  height: 22px;
  /* top: 11px; */
  font-size: 18px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: white;
  border: none;
  color: #006CFF;
  font-weight: 500;
}

.head {
  width: 87px;
  height: 41px;
  top: 12px;
  left: 15px;
  font-size: 17px;
  position: absolute;
  font-weight: 600;
}

.bod {
  width: 298px;
  height: 148px;
  top: 50px;
  left: 20px;
  border-radius: 10px;
  border: 1px solid gainsboro;
  position: absolute;
}
</style>