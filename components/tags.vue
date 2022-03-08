<template>
  <div>
    <h5 class="fw-bold py-3 ps-3 border-bottom mb-0">Tags</h5>
    <div @click="resetTaskFilter()" class="task-tag py-3 ps-3 mt-3" :class="{active: activeTag == 0}">
      <span class="allTagColor me-2">#</span> All
    </div>
    <TaskTag v-for="(tag, index) in tags" :tag="tag" :key="'tag' +index" class="ps-3" />
    <div class="ps-3 d-flex mb-4 mt-4">
      <button class="plus d-flex justify-content-center align-items-center">+</button>
      <a href="#"><h5 class="fs-6 ms-2">Manage Tags</h5></a>
    </div>
  </div>
</template>
<script>
import TaskTag from "../components/task-tag.vue"
export default {
  components: {
    TaskTag
  },
  data() {
    return {
    }
  },
  computed: {
    activeTag() {
      return this.$store.state.task.activeTag
    },
    tags() {
      return this.$store.state.task.tags
    },
  },
  methods: {
    resetTaskFilter() {
      this.$store.commit("task/setActiveTag", 0)
    },
  }
}
</script>
