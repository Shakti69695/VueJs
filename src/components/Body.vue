<template>
  <div class="body">
    <Header @addtask="addtask" />
    <Tasks :tasks="tasks" @deletetask="deletetask" @savetask="savetask" />
  </div>
</template>

<script>
import Header from './Header.vue';
import Tasks from './Tasks.vue';


export default {
  name: "Body",
  data: function () {
    return {
      tasks: []
    }
  },methods:{
    addtask:function(task){      
      task.id = this.tasks.length+1;
      this.tasks.push(task)
    },
    deletetask:function(task){
      let index = this.tasks.findIndex(obj => obj.task === task.task);  
     if (index !== -1) {
     this.tasks.splice(index, 1);  
     } else {
      console.log("Task not found");
  }
},
  savetask:function(item){
    let index= this.tasks.findIndex(task=> task.id === item.id)
    if (index !== -1) {
        this.tasks[index] = item;
    }
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