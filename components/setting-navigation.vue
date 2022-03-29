<template>
<div class="navigation-setting pt-2 pb-2 me-4">
    <div class="setting-blur">
        <div class="color1"></div>
        <div class="color2"></div>
        <div class="color3"></div>
        <div class="color4"></div>
    </div>
    <li :class="whereIs=='accountSetting'? 'active-setting': ''"><nuxt-link to="/account-setting" class="dropdown-item pb-3" href="#"><UserIcon size="1.5x" stroke="#4C79FF" class="me-2"/> Account settings</nuxt-link></li>
    <li :class="whereIs=='workspaceSetting'? 'active-setting': ''"><a class="dropdown-item pb-3" href="#"><HomeIcon size="1.5x" stroke="#4C79FF" class="me-2"/>Workspace settings</a></li>
    <li><a class="dropdown-item pb-3" href="#"><CreditCardIcon size="1.5x" stroke="#4C79FF" class="me-2"/>Billings</a></li>
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
    name:'settingNavigation',
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