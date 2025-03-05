const state = {
  tasks: [],
}

const mutations = {
  addTask(state, task) {
    task.id = state.tasks.length + 1
    state.tasks.push(task)
  },
  deleteTask(state, task) {
    let index = state.tasks.findIndex((obj) => obj.task === task.task)
    if (index !== -1) {
      state.tasks.splice(index, 1)
    } else {
      console.log('Task not found')
    }
  },
  saveTask(state, task) {
    let index = state.tasks.findIndex((t) => t.id === task.id)
    if (index !== -1) {
      state.tasks[index] = task
    }
  },
}

const actions = {
  addTask({ commit }, task) {
    commit('addTask', task)
  },
  deleteTask({ commit }, task) {
    commit('deleteTask', task)
  },
  saveTask({ commit }, task) {
    commit('saveTask', task)
  },
}

const getters = {
  tasks: (state) => state.tasks,
}

export default {
  namespaced:true,  
  state,
  actions,
  getters,
  mutations,
}
