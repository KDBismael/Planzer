<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-between header">
      <div class="d-flex align-items-center">
        <img src="../assets/logo.png" class="logo" alt="Logo" />
        <h5 class="fs-5 mb-0 ms-3 fw-bold">To do</h5>
      </div>
      <div class="d-flex align-items-center">
        <img src="../assets/user.png" alt="" />
        <h6 class="ms-2 mb-0">Phillip Stemann</h6>
        <hexagon-icon size="1x" class="ms-3"></hexagon-icon>
        <bell-icon size="1x" class="ms-3"></bell-icon>
      </div>
    </div>
    <nuxt />
  </div>
</template>


<script>
  import {
    BellIcon,
    HexagonIcon,
  } from "vue-feather-icons"
  export default {
    auth: true,
    components: {
      BellIcon,
      HexagonIcon
    },
  }
</script>

<style>
</style>