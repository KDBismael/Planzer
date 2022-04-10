<template>
  <div class="calendar-settings-card">
      <div class="row">
          <div class="col-2 w-auto pe-0">
              <img class="image" src="../assets/calendarArt.png" alt="">
          </div>
          <div class="col">
              <div class="title">
                <p class="mb-0">stemannit@gmail.com</p>
              </div>
          </div>
          <div class="col-3 w-auto">
              <Button buttonClass="remove-calendar-btn" text="Remove"></Button>
          </div>
      </div>
      <div class="row calendar-action justify-content-between mt-3 mb-2">
          <div class="col-5 w-auto">
              <p class=" calendar mb-0">Calendar</p>
          </div>
          <div class="col-5 w-auto">
              <p class="mb-0 pe-1">Action</p>
          </div>
      </div>
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:''
}
</script>

<style lang='scss' scoped>
</style>