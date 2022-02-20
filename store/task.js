export const state = () => ({
    tasks: [],
    tags: [],
    activeTag: 0
  })
  
  export const mutations = {
    setTasks(state, tasks) {
      state.tasks = state.tasks.concat(tasks)
    },
    setTags(state, tags) {
      state.tags = tags
    },
    updateTask(state, task) {
      state.tasks = [
        ...state.tasks.filter(oTask => oTask.id !== task.id),
        task
     ]
    },
    deleteNewTask(state, task) {
      state.tasks = [
        ...state.tasks.filter(oTask => oTask.newTask !== true)
     ]
    },
    updateNewTask(state, task) {
      state.tasks = [
        ...state.tasks.filter(oTask => oTask.newTask !== true),
        task
     ]
    },
    newTask(state, task) {
      state.tasks.push(task)
    },
    setActiveTag(state, tag) {
      state.activeTag = tag
    },
  }
  
  export const actions = {
    async getTasks({commit, dispatch}, dates) {
      try {
        var startDate = dates.startDate.getFullYear() + '-' +(dates.startDate.getMonth()+1 < 10 ? '0' : '') + (dates.startDate.getMonth()+1) + '-' +(dates.startDate.getUTCDate() < 10 ? '0' : '') +dates.startDate.getUTCDate()
        var endDate = dates.endDate.getFullYear() + '-' +(dates.endDate.getMonth()+1 < 10 ? '0' : '') + (dates.endDate.getMonth()+1) + '-' +(dates.endDate.getUTCDate() < 10 ? '0' : '') +dates.endDate.getUTCDate()
        await this.$axios.get('tasks?startDate=' +startDate+ '&endDate=' +endDate).then((res) => commit('setTasks', res.data))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async create({commit, dispatch}, task) {
      try {
        await this.$axios.post('task', task).then((res) => commit('updateNewTask', res.data))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async update({commit, dispatch}, task) {
      try {
        await this.$axios.put('task', task).then((res) => commit('updateTask', task))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async updateDate({commit, dispatch}, taskAndNewDate) {
      try {
        var task = JSON.parse(JSON.stringify(taskAndNewDate.task))
        task.date = taskAndNewDate.newDate
        await this.$axios.put('task', task).then((res) => commit('updateTask', task))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async getTaskTags({commit, dispatch}) {
      try {
        await this.$axios.get('tasks/tags').then((res) => commit('setTags', res.data))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
  }