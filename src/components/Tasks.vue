<template>
  <div>
    <div v-for="(item, index) in tasks" :key="index" class="taskbox">
      <label class="container">
        <input type="checkbox" v-model="item.done" />
        <span class="checkmark"></span>
      </label>
      <div class="tasktext">
        <div v-if="item.isEditing">
          <input type="text" :id="'taskId' + index"  v-model="item.task" @blur="savetask(item)" autofocus />
        </div>
        <div v-else :class="{ 'line-through': item.done }">
          {{ item.task }}
        </div>
      </div>
      <div class="ED">
        <button class="Ebtn" @click.prevent="editTask(item, index)">
          <img
            src="https://img.icons8.com/?size=100&id=71201&format=png&color=000000"
            id="Dimg"
            alt=""
          />
        </button>
        <button class="Dbtn" @click.prevent="deletetask(item)">
          <img
            src="https://img.icons8.com/?size=100&id=3062&format=png&color=000000"
            id="Dimg"
            alt=""
          />
        </button>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tasks',
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },

  methods: {
    deletetask: function(item) {
      this.$emit('deletetask', item);
    },
    editTask: function(item, index) {
      item.isEditing = true;
      this.$nextTick(() => {
        // Use the dynamically generated id to select the input
        const inputElement = document.getElementById('taskId' + index);
        if (inputElement) {
          inputElement.focus();  // Focus the input after it's rendered
        }
      });
    },
    savetask: function(item) {
      item.isEditing = false;
      this.$emit('savetask', item);
    }
  }
}
</script>

<style scoped>
.line-through {
  text-decoration: line-through;
  color: #d3d3d3;
}

#Dimg {
  height: 20px;
  width: 20px;
}

.ED {
  position: absolute;
  top: 20px;
  left: 286px;
}

.Ebtn {
  background-color: white;
  border: none;
  color: #2196f3;
  cursor: pointer;
  position: absolute;
  left: 30px;
}

.Dbtn {
  background-color: white;
  border: none;
  color: red;
  cursor: pointer;
  position: absolute;
  left: 60px;
}

.line {
  width: 315px;
  height: 1px;
  top: 59px;
  left: 60px;
  opacity: 10%;
  position: absolute;
  background-color: #252a31;
}

.color {
  width: 12px;
  height: 12px;
  background-color: #f45e6d;
  border-radius: 50%;
  top: 24px;
  left: 347px;
  position: absolute;
}

.taskbox {
  display: flex;
  position: relative;
  height: 60px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.tasktext {
  font-size: 18px;
  color: #252a31;
  width: 271px;
  height: 22px;
  left: 60px;
  top: 19px;
  position: absolute;
}

.check {
  height: 28px;
  width: 28px;
  top: 16px;
  left: 16px;
  position: relative;
  border-radius: 50%;
}

.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 23px;
  left: 16px;
  height: 20px;
  width: 20px;
  background-color: white;
  border-radius: 50%;
  border: 1px solid lightgray;
}

/* On mouse-over, add a grey background color */
.container:hover input~.checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked~.checkmark {
  background-color: #2196f3;
}

.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked~.checkmark:after {
  display: block;
  top: 6px;
  left: 6px;
  width: 8px;
  height: 8px;
}

.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
</style>
