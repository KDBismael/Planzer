<template>
<div class="navigation pt-2 pb-2 me-4">
    <div class="blur">
        <div class="color1"></div>
        <div class="color2"></div>
        <div class="color3"></div>
        <div class="color4"></div>
    </div>
    <li :class="whereIs=='accountSetting'? 'active': ''"><nuxt-link to="/accountSetting" class="dropdown-item pb-3" href="#"><UserIcon size="1.5x" stroke="#4C79FF" class="me-2"/> Account settings</nuxt-link></li>
    <li :class="whereIs=='workspaceSetting'? 'active': ''"><a class="dropdown-item pb-3" href="#"><HomeIcon size="1.5x" stroke="#4C79FF" class="me-2"/>Workspace settings</a></li>
    <li><a class="dropdown-item pb-3" href="#"><CreditCardIcon size="1.5x" stroke="#4C79FF" class="me-2"/>Billings</a></li>
    <li><a class="dropdown-item pb-3" href="#"><UserPlusIcon size="1.5x" stroke="#4C79FF" class="me-2"/>Invite team member</a></li>
    <li :class="whereIs=='calendarSetting'? 'active': ''" class="divider"><nuxt-link to="/calendarSetting" class="dropdown-item pb-3" href="#"><CalendarIcon size="1.5x" stroke="#4C79FF" class="me-2"/>Calendar settings</nuxt-link></li>
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
    .navigation{
        position: absolute;
        left: 0;
        list-style: none;
        background: #F8F8F8;
        border-radius: 0px 20px 20px 0px;
        li{
            margin: 0.8rem 0;
            a{
                font-weight: 500;
                font-size: 18px;
                line-height: 30px;
                letter-spacing: -0.02em;
                color: #A3AED0;
                svg{
                    stroke: #A3AED0;
                }
            }
        }
    }
    .blur{
        pointer-events: none;
        position: absolute;
        // background-color: rgba($color: #000000, $alpha: 0.5);
        width: 100%;
        height: 100%;
        .color1{
            position: absolute;
            top:0px;
            left: 0px;
            width: 100px;
            height: 100px;
            background-color: #10DA46;
            opacity: 0.15;
            filter: blur(60px);
            border-radius: 15px;
            transform: rotate(90deg);
        }
        .color2{
            position: absolute;
            right: 0;
            top: 0;
            width: 115.1px;
            height:113.519px;
            background: #FF4C58;
            opacity: 0.15;
            filter: blur(72px);
            border-radius: 15px;
            transform: rotate(90deg);
        }
        .color3{
            position: absolute;
            bottom: 0px;
            right:0px;
            width: 126px;
            height: 126px;
            background: #FF8F6B;
            opacity: 0.15;
            filter: blur(60px);
            border-radius: 15px;
            transform: rotate(90deg);
        }
        .color4{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 126px;
            height: 129px;
            background: #615BFE;
            opacity: 0.15;
            filter: blur(70px);
            border-radius: 15px;
            transform: rotate(90deg);
        }
    }
    .active{
        position: relative;
        a{
            font-weight: 700 !important;
            color: #1B2559 !important;
            svg{
                stroke:  #615BFE !important;
            }
        }
        &:after{
            content: '';
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -18px;
            width: 4px;
            height: 36px;
            background: #615BFE;
            border-radius: 25px;
        }
    }
</style>