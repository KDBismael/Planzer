<template>
  <div class="mt-2 rounded-3 task-box">
    <h6 class="description">Record yourself talking about the day</h6>
    <div class="d-flex justify-content-between mt-3 align-items-center">
      <p class="mb-0"># <span style="color: #fca3a9">youtube</span></p>
      <div>
        <label class="main">
          <input type="checkbox" />
          <span class="geekmark"></span>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    task: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
