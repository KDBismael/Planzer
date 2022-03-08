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
        <div class="dropdown ms-3">
          <a href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <hexagon-icon size="1x"></hexagon-icon>
          </a>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><a class="dropdown-item" href="#">Account settings</a></li>
            <li><a class="dropdown-item" href="#">Workspace settings</a></li>
            <li><a class="dropdown-item" href="#">Billing</a></li>
            <li><a class="dropdown-item" href="#">Invite team member</a></li>
            <li><a class="dropdown-item" href="#">Calendar settings</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a @click="signOut()" class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
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
    methods: {
      async signOut() {
        await this.$auth.logout()
      },
    }
  }
</script>

<style>
</style>