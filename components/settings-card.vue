<template>
  <div class="settings-cards">
    <div class="row p-0 m-0">
      <div class=" ps-0 title">
        <h1>{{title}}</h1>
      </div>
      <div class="row p-0 m-0">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    title:String
  },
}
</script>

<style lang="scss" scoped>
</style>