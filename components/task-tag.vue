<template>
  <div>
    <div class="d-flex">
      <a href="#">
        <h4 class="fw-bold task-category d-inline-block">{{ tag.category }}</h4>
      </a>
    </div>
    <ul class="ps-0">
      <li :class="{active: activeTag == item.taskTagId}" @click="filterTasks(item)" v-for="(item, index) in tag.tags" :key="'tag-' +index" v-if="item.tag" class="task-tag">
        <span style="margin-right: 12px;" v-bind:style="{ color: '#' +item.taskTagColor }">#</span> {{item.tag}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    tag: {
      tags: Array,
      default: () => ({}),
    },
  },
  computed: {
    activeTag() {
      return this.$store.state.task.activeTag
    },
  },
  methods: {
    filterTasks(tag) {
      this.$store.commit("task/setActiveTag", tag.taskTagId)
    }
  }
};
</script>
