<template>
  <div class="mt-2 rounded-3 task-box" :class="task.status == 1 ? 'task-done' : ''">
    <h6 @click="openTask()" class="description">{{ task.title }}</h6>
    <div class="d-flex justify-content-between mt-3 align-items-center">
      <p @click="openTask()" class="mb-0" style="font-size: 15px;"><span v-bind:style="{ color: '#' +(task.tagColor ? task.tagColor : task.categoryColor ? task.categoryColor : '000') }">#</span> {{ task.tagName ? task.tagName : task.categoryName ? task.categoryName : '' }}</p>
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
  props: {
    task: {
      default: () => ({})
    }
  },
  methods: {
    openTask() {
      console.log("Jeps")
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
