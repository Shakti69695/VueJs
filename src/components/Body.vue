<template>
  <div class="body">
    <Header @addtask="addtask" />
    <Tasks :tasks="tasks" @deletetask="deletetask" @savetask="savetask" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Header from './Header.vue';
import Tasks from './Tasks.vue';


export default {
  name: "Body",
  computed: {
    ...mapGetters('todos', ['tasks'])
  },
  methods: {
    ...mapActions('todos', ['addTask', 'deleteTask', 'saveTask']),

    addtask(task) {
      this.addTask(task)  // Dispatching the action to add a task
    },
    deletetask(task) {
      this.deleteTask(task)  // Dispatching the action to delete a task
    },
    savetask(item) {
      this.saveTask(item)  // Dispatching the action to save a task
    }

  },
  components: {
    Header,
    Tasks
  }
}
</script>


<style>
.body {
  height: 860px;
  width: 375px;
  background-color: white;
  border: 1px solid black;
}
</style>