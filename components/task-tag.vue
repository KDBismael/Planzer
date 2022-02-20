<template>
  <div>
    <div class="d-flex mt-4">
      <a href="#">
        <chevron-down-icon size="0.8x" class="task-tag-chevron"></chevron-down-icon>
        <h4 class="fw-bold mb-0 d-inline-block" style="font-size: 15px;">{{ tag.category }}</h4>
      </a>
    </div>
    <ul class="ps-0">
      <li v-for="(item, index) in tag.tags" :key="'tag-' +index">
        <h5 class="fs-6 ms-3 mt-3" v-if="item.tag">
          <a href="#"><span style="margin-right: 12px;" v-bind:style="{ color: '#' +item.taskTagColor }">#</span> {{item.tag}}</a>
        </h5>
      </li>
    </ul>
  </div>
</template>
<script>
import { ChevronDownIcon } from 'vue-feather-icons'
export default {
  props: {
    tag: {
      tags: Array,
      default: () => ({}),
    },
  },
  components: {
    ChevronDownIcon
  },
};
</script>
