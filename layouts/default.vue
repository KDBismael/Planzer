<template>
  <div  class="container-fluid">
    <div class="d-flex justify-content-between header">
      <div class="d-flex align-items-center">
        <img src="../assets/logo.png" class="logo" alt="Logo" />
        <h5 class="fs-5 mb-0 ms-3 fw-bold">To do</h5>
      </div>
      <div class="d-flex align-items-center">
        <img ref="user" src="../assets/user.png" alt="" />
        <h6 class="ms-2 mb-0">Phillip Stemann</h6>
        <div class="dropdown ms-3 me-1">
          <a ref="dropdown" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <hexagon-icon size="1x"></hexagon-icon>
          </a>

          <ul class="dropdown-menu user-settings-dropdown" aria-labelledby="dropdownMenuLink">
              <li><nuxt-link to="/account-settings" class="dropdown-item" href="#"><UserIcon size="1.5x" stroke="#4C79FF" class="me-2"/> Account settings</nuxt-link></li>
              <li><nuxt-link to="/workspace-settings" class="dropdown-item" href="#"><HomeIcon size="1.5x" stroke="#4C79FF" class="me-2"/>Workspace settings</nuxt-link></li>
              <li><a class="dropdown-item" href="#"><CreditCardIcon size="1.5x" stroke="#4C79FF" class="me-2"/>Billing</a></li>
              <li><a class="dropdown-item" href="#"><UserPlusIcon size="1.5x" stroke="#4C79FF" class="me-2"/>Invite team member</a></li>
              <li class="divider"><nuxt-link to="/calendarSetting" class="dropdown-item" href="#"><CalendarIcon size="1.5x" stroke="#4C79FF" class="me-2"/>Calendar settings</nuxt-link></li>
              <li><a @click="signOut()" class="dropdown-item" style="color:#FF5A5A" href="#"><LogOutIcon size="1.5x" class="me-2"/>Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
    <nuxt />
  </div>
</template>


<script>
  import {
    BellIcon,
    HexagonIcon,
    UserIcon,
    HomeIcon,
    CreditCardIcon,
    UserPlusIcon,
    CalendarIcon,
    LogOutIcon
  } from "vue-feather-icons"

  export default {
    auth: true,
    components: {
      BellIcon,
      HexagonIcon,
      UserIcon,
      HomeIcon,
      CreditCardIcon,
      UserPlusIcon,
      CalendarIcon,
      LogOutIcon,
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