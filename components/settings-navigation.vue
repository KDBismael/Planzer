<template>
<div class="navigation-settings pt-2 pb-2 me-4">
    <div class="settings-navigation-blur">
        <div class="color1"></div>
        <div class="color2"></div>
        <div class="color3"></div>
        <div class="color4"></div>
    </div>
    <li :class="whereIs=='account-settings'? 'active-settings': ''"><nuxt-link to="/account-settings" class="dropdown-item pb-3" href="#"><UserIcon size="1.5x" stroke="#4C79FF" class="me-2"/> Account settings</nuxt-link></li>
    <li :class="whereIs=='workspace-settings'? 'active-settings': ''"><nuxt-link to="/workspace-settings"  class="dropdown-item pb-3" href="#"><HomeIcon size="1.5x" stroke="#4C79FF" class="me-2"/>Workspace settings</nuxt-link></li>
    <li><a class="dropdown-item pb-3" href="#"><CreditCardIcon size="1.5x" stroke="#4C79FF" class="me-2"/>Billing</a></li>
    <li><a class="dropdown-item pb-3" href="#"><UserPlusIcon size="1.5x" stroke="#4C79FF" class="me-2"/>Invite team member</a></li>
    <li class="divider"><a class="dropdown-item pb-3" href="#"><CalendarIcon size="1.5x" stroke="#4C79FF" class="me-2"/>Calendar settings</a></li>
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