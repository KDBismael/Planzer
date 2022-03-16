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
        <div class="dropdown ms-3">
          <a ref="dropdown" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <hexagon-icon size="1x"></hexagon-icon>
          </a>

          <ul class="dropdown-menu union" aria-labelledby="dropdownMenuLink">
              <li><a class="dropdown-item" href="#"><UserIcon stroke="#4C79FF" class="me-2"/> Account settings</a></li>
              <li><a class="dropdown-item" href="#"><HomeIcon stroke="#4C79FF" class="me-2"/>Workspace settings</a></li>
              <li><a class="dropdown-item" href="#"><CreditCardIcon stroke="#4C79FF" class="me-2"/>Billing</a></li>
              <li><a class="dropdown-item" href="#"><UserPlusIcon stroke="#4C79FF" class="me-2"/>Invite team member</a></li>
              <li class="divider"><a class="dropdown-item" href="#"><CalendarIcon stroke="#4C79FF" class="me-2"/>Calendar settings</a></li>
            <li><a @click="signOut()" class="dropdown-item" style="color:#FF5A5A" href="#"><LogOutIcon class="me-2"/>Sign out</a></li>
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
    data(){
      return{
        Open:false,
        click:false,
      }
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