<template>
    <div class="row">
        <div class="calendar-settings">
            <setting-navigation whereIs="calendar-settings"></setting-navigation>
            <div class="row calendar-settings-container justify-content-center">
                <div class="content">
                    <div class=" row justify-content-center w-100 main-title">
                        <h1 class="w-auto mb-0 pb-4">Calendar Setup</h1>
                    </div>
                    <setting-card title="Configure your calendars">
                        <div class="row justify-content-center w-100 ms-0 p-0 mb-2">
                            <div class="col-4 w-auto ps-0 pe-4">
                                <Button buttonClass="add-google-calendar-btn" text="Add Google Calendar"></Button>
                            </div>
                            <div class="col-4  w-auto ps-0 pe-4">
                                <Button buttonClass="add-outlook-calendar-btn" text="Add Outlook Calendar"></Button>
                            </div>
                            <div class="col-4  w-auto ps-0 pe-0">
                                <Button buttonClass="refresh-calendar-list-btn" text="Refresh calendar list"></Button>
                            </div>
                        </div>
                    </setting-card>
                    <calendar-setting-card>
                            <div class="settings-blur">
                                <div class="color1"></div>
                                <div class="color2"></div>
                                <div class="color3"></div>
                            </div>
                            <calendar-switch-check v-for="(action,index) in calendarData.email1"
                            :key="index" 
                            :circle="action.color" 
                            :id="action.id"
                            :title="action.title"
                            :type="action.type"
                            ></calendar-switch-check>
                    </calendar-setting-card>
                    <calendar-setting-card>
                            <div class="settings-blur">
                                <div class="color1"></div>
                                <div class="color2"></div>
                                <div class="color3"></div>
                            </div>
                            <calendar-switch-check v-for="(action,index) in calendarData.email2" 
                            :key="index"
                            :circle="action.color" 
                            :id="action.id"
                            :title="action.title"
                            :type="action.type"
                            ></calendar-switch-check>
                    </calendar-setting-card>
                    <calendar-setting-card>
                            <div class="settings-blur">
                                <div class="color1"></div>
                                <div class="color2"></div>
                                <div class="color3"></div>
                            </div>
                            <calendar-switch-check v-for="(action,index) in calendarData.email3" 
                            :key="index"
                            :circle="action.color" 
                            :id="action.id"
                            :title="action.title"
                            :type="action.type"
                            ></calendar-switch-check>
                    </calendar-setting-card>
                    <div class="default-calendar mt-3">
                        <div class="settings-blur">
                            <div class="color1"></div>
                            <div class="color2"></div>
                            <div class="color3"></div>
                        </div>
                        <h1 class="mb-2">Configuring your default calendar:</h1>
                        <p class="mb-0">
                            You can change which calendar your tasks are scheduled to by default (and other calendar preferences) from your <span> <nuxt-link to="/accountSetting">account settings</nuxt-link></span> page.
                        </p>
                    </div>
                    <br>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import calendarSwitchCheck from '../components/calendar-switch-check.vue'
import calendarSettingCard from '../components/calendar-settings-card.vue'
import settingCard from '../components/settings-card.vue'
import settingNavigation from '../components/settings-navigation.vue'
export default {
    components:{
        settingNavigation,
        settingCard,
        calendarSettingCard,
        calendarSwitchCheck,
    },
    data(){
        return{
            calendarData:{
                email1:{
                    0:{
                        title:'John Deo',
                        color:'orange',
                        id:'name',
                        type:'checked'
                    },
                    1:{
                        title:'Birthdays',
                        color:'yellow',
                        id:'birthday',
                        type:''
                    },
                    2:{
                        title:'Ugenumre',
                        color:'green',
                        id:'ugenumre',
                        type:'checked'
                    },
                },
                email2:{
                    0:{
                        title:'John Deo',
                        color:'orange',
                        id:'name',
                        type:'checked'
                    },
                    1:{
                        title:'Birthdays',
                        color:'yellow',
                        id:'birthday',
                        type:''
                    },
                    2:{
                        title:'Ugenumre',
                        color:'green',
                        id:'ugenumre',
                        type:'checked'
                    },
                    3:{
                        title:'Week Numbers',
                        color:'violate',
                        id:'week-number',
                        type:'checked'
                    },
                },
                email3:{
                    0:{
                        title:'John Deo',
                        color:'orange',
                        id:'name',
                        type:'checked'
                    },
                    1:{
                        title:'Birthdays',
                        color:'yellow',
                        id:'birthday',
                        type:''
                    },
                    2:{
                        title:'Ugenumre',
                        color:'green',
                        id:'ugenumre',
                        type:'checked'
                    },
                }
            }
        }
    }
}
</script>

<style lang='scss' scoped>
</style>