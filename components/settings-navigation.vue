<template>
<div class="navigation-settings pt-4 pb-4 me-4">
    <div class="settings-navigation-blur">
        <div class="color1"></div>
        <div class="color2"></div>
        <div class="color3"></div>
        <div class="color4"></div>
    </div>
    <li :class="whereIs=='account-settings'? 'active-settings': ''"><nuxt-link to="/account-settings" class="dropdown-item ps-4 pe-5" href="#"><span class="row"> <span class="col-3 w-auto pe-0"><UserIcon  stroke="#4C79FF" class="me-2"/></span><span class="col-3 w-auto ps-0"><span><span class="row h-100 align-items-center"><span>Account settings</span></span></span></span></span></nuxt-link></li>
    <li :class="whereIs=='workspace-settings'? 'active-settings': ''"><nuxt-link to="/workspace-settings"  class="dropdown-item ps-4 pe-5" href="#"><span class="row h-100"> <span class="col-3 w-auto pe-0"><HomeIcon stroke="#4C79FF" class="me-2"/></span><span class="col-3 w-auto ps-0"><span class="row h-100 align-items-center"><span>Workspace settings</span></span></span></span></nuxt-link></li>
    <li><nuxt-link to="/billing-settings" class="dropdown-item ps-4 pe-5" href="#"><span class="row"> <span class="col-3 w-auto pe-0"><CreditCardIcon stroke="#4C79FF" class="me-2"/></span><span class="col-3 w-auto ps-0"><span><span class="row h-100 align-items-center"><span>Billing</span></span></span></span></span></nuxt-link></li>
    <li><a class="dropdown-item ps-4 pe-5" href="#"><span class="row"> <span class="col-3 w-auto pe-0"><UserPlusIcon stroke="#4C79FF" class="me-2"/></span><span class="col-3 w-auto ps-0"><span><span class="row h-100 align-items-center"><span>Invite team member</span></span></span></span></span></a></li>
    <li :class="whereIs=='calendar-settings'? 'active-settings': ''" class="divider"><nuxt-link to="/calendar-settings" class="dropdown-item ps-4 pe-5" href="#"><span class="row"> <span class="col-3 w-auto pe-0"><CalendarIcon stroke="#4C79FF" class="me-2"/></span><span class="col-3 w-auto ps-0"><span><span class="row h-100 align-items-center"><span>Calendar settings</span></span></span></span></span></nuxt-link></li>
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
    components:{
        BellIcon,
        HexagonIcon,
        UserIcon,
        HomeIcon,
        CreditCardIcon,
        UserPlusIcon,
        CalendarIcon,
        LogOutIcon,
    },
    props:{
        whereIs:String,
    }
}
</script>

<style lang='scss' scoped>
</style>