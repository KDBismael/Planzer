<template>
  <div @click="outside()"  class="container-fluid">
    <div class="d-flex justify-content-between header">
      <div class="d-flex align-items-center">
        <img src="../assets/logo.png" class="logo" alt="Logo" />
        <h5 class="fs-5 mb-0 ms-3 fw-bold">To do</h5>
      </div>
      <div class="d-flex align-items-center">
        <img ref="user" src="../assets/user.png" alt="" />
        <h6 class="ms-2 mb-0">Phillip Stemann</h6>
        <div class="dropdown ms-3">
          <a ref="dropdown" @click="handleProfil()" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <hexagon-icon size="1x"></hexagon-icon>
          </a>

          <ul class="dropdown-menu union" aria-labelledby="dropdownMenuLink">
            <div class="union-item">
              <li><a class="dropdown-item" href="#"><span class="me-2"><img src="~/assets/user.svg" alt=""></span> Account settings</a></li>
              <li><a class="dropdown-item" href="#"><span class="me-2"><img src="~/assets/home.svg" alt=""></span>Workspace settings</a></li>
              <li><a class="dropdown-item" href="#"><span class="me-2"><img src="~/assets/credit-card.svg" alt=""></span>Billing</a></li>
              <li><a class="dropdown-item" href="#"><span class="me-2"><img src="~/assets/user-plus.svg" alt=""></span>Invite team member</a></li>
              <li><a class="dropdown-item" href="#"><span class="me-2"><img src="~/assets/calendar.svg" alt=""></span>Calendar settings</a></li>
              <!-- <li><hr class="dropdown-divider"></li> -->
            </div>
            <li><a @click="signOut()" class="dropdown-item" style="color:#FF5A5A" href="#"><span class="me-2"><img src="~/assets/log-out.svg" alt=""></span>Sign out</a></li>
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
      handleProfil(){
        this.click=true
      },
      outside(){
        console.log(this.click)
        if(!this.Open && this.click){
          this.$refs.user.classList.add('user-active')
          this.Open=true
          this.click=false
        }else{
          this.$refs.user.classList.remove('user-active')
          this.Open=false
          this.click=false
        }
        // console.log(this.$refs.dropdown.ariaExpanded)
      }
    }
  }
</script>

<style>
</style>