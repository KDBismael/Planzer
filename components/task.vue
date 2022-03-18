<template>
  <div class="mt-2 rounded-3 task-box" :class="task.status == 1 ? 'task-done' : ''">
    <h6 v-if="task.title" @click="openTask()" data-bs-toggle="modal" data-bs-target="#taskModal" class="task-title">{{ task.title }}</h6>
    <input v-else @blur="createTask()" v-model="newTaskTitle" type="text" class="task-title task-title" id="new-task" />
    <div class="d-flex justify-content-between mt-3 align-items-center">
      <p @click="openTask()" data-bs-toggle="modal" data-bs-target="#taskModal" class="mb-0" style="font-size: 15px;"><span v-if="task.tagName || task.categoryName" v-bind:style="{ color: '#' +(task.tagColor ? task.tagColor : task.categoryColor ? task.categoryColor : '000') }">#</span> {{ task.tagName ? task.tagName : task.categoryName ? task.categoryName : '' }}</p>
      <div>
        <label class="checkbox-container">
          <input type="checkbox" :checked="task.status == 1" @change="finishTask($event)" />
          <span class="checkmark"></span>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newTaskTitle: ''
    }
  },
  props: {
    task: {
      default: () => ({})
    }
  },
  methods: {
    async openTask() {
      this.$store.commit("task/setActiveTask", this.task)
      await this.$store.dispatch("task/getComments",this.task.id)
      await this.$store.dispatch('task/getSubtasks',this.task.id)
    },

    createTask() {
      if(this.newTaskTitle == "")
        this.$store.commit("task/deleteNewTask")
      else {
        var task = {
          title: this.newTaskTitle,
          date: this.task.date
        }
        this.$store.dispatch("task/create", task)
        this.newTaskTitle = ''
      }
    },
    finishTask(event) {
      var task = JSON.parse(JSON.stringify(this.task))
      
      if (event.target.checked)
        task.status = 1
      else
        task.status = 0

      this.$store.dispatch("task/update", task)
    }
  }
}
</script>
