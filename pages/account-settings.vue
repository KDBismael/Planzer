<template>
  <div class="row">
      <div class="col account-settings">
          <setting-navigation whereIs="account-settings"></setting-navigation>
          <div class="row account-settings-container justify-content-center">
            <div class="content">
                <div class="row justify-content-center pb-3">
                    <h1 class="w-auto account-title">Account Settings</h1>  
                </div>
                <div class="account settings-card">
                    <div class="settings-blur">
                        <div class="color1"></div>
                        <div class="color2"></div>
                        <div class="color3"></div>
                    </div>
                    <div class="title">
                        <h1>Account</h1>
                    </div>
                    <div class="time-zone pt-2 pb-2">
                        <account-setting-dropbox 
                        title="Time zone" 
                        paragraph="What’s your time zone."
                        :inputData="selectData.timezone"
                        ></account-setting-dropbox>
                    </div>
                    <div class="time-zone-alert pt-2 pb-2">
                        <account-setting-switch-checkbox
                        title="Time zone alert" 
                        paragraph="Share an alert when your time zone has charged!"
                        id="time-zone-alert"
                        ></account-setting-switch-checkbox>
                    </div>
                    <div class="start-week pt-2 pb-2">
                        <account-setting-dropbox 
                        title="Start of week" 
                        paragraph="What day dosr the week start"
                        :inputData="selectData.startOfWeek"
                        ></account-setting-dropbox>
                    </div>
                    <div class="count-planned pt-2 pb-2">
                        <account-setting-switch-checkbox
                        title="Count planned time as actual time" 
                        paragraph="When your complete a task the time you planned to spend on it as the time actually apent on it."
                        id="count-planned"
                        ></account-setting-switch-checkbox>
                    </div>
                    <div class="taks-rollover pt-2 pb-2">
                        <account-setting-dropbox 
                        title="Task rollover position" 
                        paragraph="When task rollover, should they roli to the top or bottom of the next day?"
                        :inputData="selectData.taskRolloverPosition"
                        ></account-setting-dropbox>
                    </div>
                    <div class="enter-focus pt-2 pb-2">
                        <account-setting-switch-checkbox
                        title="Enter focus mode after starting timer" 
                        paragraph="Automatically enter focus mode when you start the time."
                         id="enter-focus"
                        ></account-setting-switch-checkbox>
                    </div>
                    <div class="work-load pt-2 pb-2">
                        <account-setting-dropbox 
                        title="Workload threshold" 
                        paragraph="How many hours per do you prefer to work."
                        :inputData="selectData.workLoad"
                        ></account-setting-dropbox>
                    </div>
                    <div class="calendar pt-2 pb-2">
                        <account-setting-dropbox 
                        title="Calendar event color" 
                        paragraph="Color calendar events by channel or calendar."
                        :inputData="selectData.calendarColor"
                        ></account-setting-dropbox>
                    </div>
                    <div class="support-chat pt-2 pb-2">
                        <account-setting-switch-checkbox
                        title="Support chat bubble" 
                        paragraph="Show chat bubble send to contact Sunsama support team."
                        id="support-chat"
                        state="checked"
                        ></account-setting-switch-checkbox>
                    </div>
                    <div class="support-analytics pt-2 pb-2">
                        <account-setting-switch-checkbox
                        title="Support analytics" 
                        paragraph="Allow Sumama’s support team to recoved your in-app actually to dvbug your issues call payment, Personal, tast and event date is rediacted, via Fullsepry.com"
                         id="support-analytics"
                        ></account-setting-switch-checkbox>
                    </div>
                    <div class="dark pt-2 pb-2">
                        <account-setting-switch-checkbox
                        title="Dark mode" 
                        paragraph="Show interface in dark mode."
                        id="dark-mode"
                        ></account-setting-switch-checkbox>
                    </div>
                </div>
                <div class="rituals settings-card mt-4">
                    <div class="settings-blur">
                        <div class="color1"></div>
                        <div class="color2"></div>
                        <div class="color3"></div>
                    </div>
                    <div class="title">
                        <h1>Rituals</h1>
                    </div>
                    <div class="day-plan row pt-2 pb-2">
                        <div class="col">
                            <div class="text">
                                <h1>When do you plan your day</h1>
                                <p class="mb-0">What time do you like vs plans out your day.</p>
                            </div>
                        </div>
                        <div class="col-3 w-auto">
                            <div class="row h-100 align-content-center">
                                <div class="plan-time">
                                    <span class="time pe-0">7:30 AM<span class="plan ms-2">All the Text</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="actually pt-2 pb-2">
                        <account-setting-switch-checkbox
                        title="Actually daily planning" 
                        paragraph="Automatically trigger the daily planning either once per day."
                        id="actually"
                        ></account-setting-switch-checkbox>
                    </div>
                    <div class="end-day row pt-2 pb-2">
                        <div class="col">
                            <div class="text">
                                <h1>When do you end your day</h1>
                                <p class="mb-0">What timer do you like to shutdown for your day.</p>
                            </div>
                        </div>
                        <div class="col-3 w-auto">
                            <div class="row h-100 align-content-center">
                                <div class="plan-time">
                                    <span class="time pe-3">5:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="automated-daily pt-2 pb-2">
                        <account-setting-switch-checkbox
                        title="Automated daily shutdown" 
                        paragraph="Automatically show a prompt to shutdown your day at the the above."
                        id="automated-daily"
                        ></account-setting-switch-checkbox>
                    </div>
                    <div class="week-plan pt-2 pb-2 row">
                        <div class="col">
                            <div class="text">
                                <h1>When do you plan your week</h1>
                                <p class="mb-0">When task rollover, should they roli to the top or bottom of the next day?</p>
                            </div>
                        </div>
                        <div class="col-3 w-auto">
                            <div class="row h-100 align-content-center">
                                <div class="plan-time">
                                    <span class="time me-2 pe-3">Monday</span><span class="time pe-3">7:30 AM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="automated-weekly pt-2 pb-2">
                        <account-setting-switch-checkbox
                        title="Automated weekly planning" 
                        paragraph="Show a prompt to plan to week ahead."
                        id="automated-weekly"
                        ></account-setting-switch-checkbox>
                    </div>
                    <div class="combine pt-2 pb-2">
                        <account-setting-switch-checkbox
                        title="Combine weekly review and weekly planning" 
                        paragraph="Include reviewing the past week as part of planning to upcoming week."
                        id="combine"
                        state="checked"
                        ></account-setting-switch-checkbox>
                    </div>
                    <div class="review-week row pt-2 pb-2">
                        <div class="col">
                            <div class="text">
                                <h1>When do you review your week</h1>
                                <p class="mb-0">What time do you like to referd your past week.</p>
                            </div>
                        </div>
                        <div class="col-3 w-auto">
                            <div class="row h-100 align-content-center">
                                <div class="plan-time">
                                    <span class="time me-2 pe-3">Friday</span><span class="time pe-3">7:30 AM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="automated-review pt-2 pb-2">
                        <account-setting-switch-checkbox
                        title="Automated weekly review" 
                        paragraph="Show a prompt at the end of the week to review how you spent your time."
                        id="automated"
                        state="checked"
                        ></account-setting-switch-checkbox>
                    </div>
                    <div class="include pt-2 pb-2">
                        <account-setting-switch-checkbox
                        title="Include weekends during reviews" 
                        paragraph="During they and weekly reflections, include wek done on Saturday and Sunday."
                        id="include"
                        ></account-setting-switch-checkbox>
                    </div>
                </div>
                <div class="timeboxing settings-card mt-4">
                    <div class="settings-blur">
                        <div class="color1"></div>
                        <div class="color2"></div>
                        <div class="color3"></div>
                    </div>
                    <div class="title">
                        <h1>Timeboxing</h1>
                    </div>
                    <div class="default-calender pt-2 pb-2">
                        <account-setting-dropbox 
                        title="Default calendar when sheduling tast" 
                        paragraph="When you add a task to your calendar, use the calendar"
                        :inputData="selectData.defaultCalender"
                        ></account-setting-dropbox>
                    </div>
                    <div class="default-duration pt-2 pb-2">
                        <account-setting-dropbox 
                        title="Default duration when scheduling tasks" 
                        paragraph="When you drag a task their own your calendar, how much same to block all."
                        :inputData="selectData.defaultDuration"
                        ></account-setting-dropbox>
                    </div>
                    <div class="availability pt-2 pb-2">
                        <account-setting-dropbox 
                        title="Availablility: Calendar event created from tasks" 
                        paragraph="When you drag a task their own your calendar, what is your availability."
                        :inputData="selectData.availability"
                        ></account-setting-dropbox>
                    </div>
                    <div class="privacy-calendar pt-2 pb-2">
                        <account-setting-dropbox 
                        title="Privacy: Calendar events created from tasks" 
                        paragraph="What privacy level should be set?"
                        :inputData="selectData.privacyCalendar"
                        ></account-setting-dropbox>
                    </div>
                    <div class="autocompleted -calendar pt-2 pb-2">
                        <account-setting-dropbox 
                        title="Auto-complete inported calendar events" 
                        paragraph="What privacy levl should be set?"
                        :inputData="selectData.autocompleted"
                        ></account-setting-dropbox>
                    </div>
                </div>
                <div class="integrations settings-card mt-4">
                    <div class="settings-blur">
                        <div class="color1"></div>
                        <div class="color2"></div>
                        <div class="color3"></div>
                    </div>
                    <div class="title">
                        <h1>Integrations</h1>
                    </div>
                    <div class="upload-task pt-2 pb-2">
                        <account-setting-switch-checkbox
                        title="Upload task status on import/complete" 
                        paragraph="When importing or completing tasks, show prompt to upload status of original"
                        id="upload-task"
                        ></account-setting-switch-checkbox>
                    </div>
                </div>
                <div class="notifications settings-card mt-4">
                    <div class="settings-blur">
                        <div class="color1"></div>
                        <div class="color2"></div>
                        <div class="color3"></div>
                    </div>
                    <div class="title">
                        <h1>Notifications</h1>
                    </div>
                    <div class="receive-task">
                        <h1 class="row align-content-center mt-3"><span class="col">Receive a task notification when:</span><div class="col-2 me-3"><span class="row align-content-center">Slack</span></div><div class="col-2 me-4"><span class="row align-content-center">Email</span></div></h1>
                    </div>
                    <div class="receive-loccasional">
                            <div class="task-you-follow row">
                                <span class="col mb-2">A task you follow has been created</span>
                                <div class="check col-2 me-3 ps-2">
                                    <label class="form-check-label" for="created-task-slack">
                                        <input class="form-check-input" type="radio" name="created-task"  id="created-task-slack" value="slack" checked>
                                    </label>
                                </div>
                                <div class="check col-2 me-4 ps-2">
                                    <label class="form-check-label" for="created-task">
                                        <input class="form-check-input" type="radio" name="created-task"  id="created-task-email" value="email">
                                    </label>
                                </div>
                            </div>
                            <div class="task-you-follow row">
                                <span class="col mb-2">A task you follow has been assigned to a new person</span>
                                <div class="check col-2 me-3 ps-2">
                                    <label class="form-check-label" for="assigned-task-slack">
                                        <input class="form-check-input" type="radio" name="assigned-task" id="assigned-task-slack" value="slack" checked>
                                    </label>
                                </div>
                                <div class="check col-2 me-4 ps-2">
                                    <label class="form-check-label" for="assigned-task-email">
                                        <input class="form-check-input" type="radio" name="assigned-task"  id="assigned-task-email" value="email">
                                    </label>
                                </div>
                            </div>
                            <div class="task-you-follow row">
                                <span class="col mb-2">A task you follow has been completed</span>
                                <div class="check col-2 me-3 ps-2">
                                    <label class="form-check-label" for="completed-task-slack">
                                        <input class="form-check-input" type="radio" name="completed-task"  id="completed-task-slack" value="slack" checked>
                                    </label>
                                </div>
                                <div class="check col-2 me-4 ps-2">
                                    <label class="form-check-label" for="completed-task-email">
                                        <input class="form-check-input" type="radio" name="completed-task"   id="completed-task-email" value="email">
                                    </label>
                                </div>
                            </div>
                            <div class="task-you-follow row mb-4">
                                <span class="col mb-2">A task you follow has been added to a last you follow</span>
                                <div class="check col-2 me-3 ps-2">
                                    <label class="form-check-label" for="added-task-slack">
                                        <input class="form-check-input" type="radio" name="added-task" id="added-task-slack" value="slack" checked>
                                    </label>
                                </div>
                                <div class="check col-2 me-4 ps-2">
                                    <label class="form-check-label" for="added-task-email">
                                        <input class="form-check-input" type="radio" name="added-task"  id="added-task-email" value="email">
                                    </label>
                                </div>
                            </div>
                        </div>
                    <div class="general">
                        <h1 class="pt-2 row"><span class="col">General</span><span class="col-2 email">email</span></h1>
                        <div class="row">
                            <p class="pt-2 mb-0 col">Receive occasional updates above Sunsama</p>
                            <div class="check col-2 me-3 ps-2">
                                <div class="row h-100 align-items-center justify-content-end">
                                    <label class="form-check-label w-auto me-3" for="occasional-update">
                                        <input class="form-check-input" type="radio"  id="occasional-update" value="email">
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="profil settings-card mt-4">
                    <div class="settings-blur">
                        <div class="color1"></div>
                        <div class="color2"></div>
                        <div class="color3"></div>
                    </div>
                    <div class="title">
                        <h1>Profile</h1>
                    </div>
                    <div class="row">
                        <div class="profil-option col">
                            <div class="profil-form">
                                <h1 class="pt-3">Name</h1>
                                <div class="row">
                                    <input v-model.lazy="firstName" @change="getFirstName" class="col ms-2 me-2" type="text" placeholder="First name">
                                    <input v-model.lazy="secondName" @change="getSecondName" class="col" type="text" placeholder="Second name">
                                </div>
                            </div>
                            <div class="profil-btn mt-3">
                                <label class="me-2" for="avatar">
                                    <span>Upload Picture</span>
                                    <input @change="getPicture($event)" type="file" id="avatar" accept="image/png, image/jpeg" />
                                </label>
                                <button>Delete Picture</button>
                            </div>
                        </div>   
                        <div class="picture col-4">
                            <div class="row h-100 align-items-center justify-content-center">
                                <div class="picture-card"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="timeboxing-end settings-card mt-4">
                    <div class="settings-blur">
                        <div class="color1"></div>
                        <div class="color2"></div>
                        <div class="color3"></div>
                    </div>
                    <div class="title">
                        <h1>Timeboxing</h1>
                    </div>
                    <div class="change-primary pt-2 pb-2">
                        <account-setting-dropbox 
                        title="Change primary email" 
                        :inputData="selectData.changePrimary"
                        ></account-setting-dropbox>
                    </div>
                    <div class="export pt-2 pb-2">
                        <account-setting-dropbox 
                        title="Export my data" 
                        :inputData="selectData.export"
                        ></account-setting-dropbox>
                    </div>
                    <div class="delete pt-2 pb-3">
                        <account-setting-dropbox 
                        title="Delete account" 
                        :inputData="selectData.delete"
                        ></account-setting-dropbox>
                    </div>
                    <div class="help">
                        <p class="mb-0">If there’s anything we can help with about your account, just shoot us an email at <a href="#"><span>support@sitename.com</span></a></p>
                    </div>
                </div>
                <br><br>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import settingNavigation from '../components/settings-navigation.vue'
import accountSettingDropbox from '../components/account-settings-dropbox.vue'
import accountSettingSwitchCheckbox from '../components/account-settings-switch-checkbox.vue'
export default {
    components:{
        accountSettingDropbox,
        accountSettingSwitchCheckbox,
        settingNavigation,
    },
    watch:{
        async fullName(){
            if(this.fullName!=''){
                let data={name:this.fullName}
                console.log(data)
                await this.$store.dispatch('user/updateAccountSettings',data)
                if(this.fullName==`${this.firstName} ${this.secondName}`){
                    this.firstName=''
                    this.secondName=''
                    this.fullName=''
                } 
            }
            
        }
    },
    data(){
        return{
            firstName:'',
            secondName:'',
            fullName:'',
            selectData:{
                timezone:{
                    id:'timezone',
                    data:{
                        time1:'(GMT +01:00) Europe/Coperhegen',
                        time2:'(GMT +02:00) Europe/Coperhegen',
                        time3:'(GMT +03:00) Europe/Coperhegen',
                    }
                },
                startOfWeek:{
                    id:'startOfWeek',
                    data:{
                        time1:'Monday',
                        time2:'Tuesday',
                        time3:'Wenesday',
                        time4:'Sunday',
                    }
                },
                taskRolloverPosition:{
                    id:'taskRolloverPosition',
                    data:{
                        position1:'Top',
                        position2:'Bottom',
                    }
                },
                workLoad:{
                    id:'workLoad',
                    data:{
                        time:'# hours',
                    }
                },
                calendarColor:{
                    id:'calendarColor',
                    data:{
                        color:'Color by channel',
                    }
                },
                defaultCalender:{
                    id:'defaultCalender',
                    data:{
                        calendar:'Europe/Coperhegen'
                    }
                },
                defaultDuration:{
                    id:'defaultDuration',
                    data:{
                        time:'30 min'
                    }
                },
                availability:{
                    id:'availability',
                    data:{
                        available:'Show as busy'
                    }
                },
                privacyCalendar:{
                    id:'privacyCalendar',
                    data:{
                        available:'Calendar dafault'
                    }
                },
                autocompleted:{
                    id:'autocompleted',
                    data:{
                        completed:'Always'
                    }
                },
                changePrimary:{
                    id:'changePrimary',
                    data:{
                        change:'Show',
                    }
                },
                export :{
                    id:'export',
                    data:{
                        export:'Show',
                    }
                },
                delete:{
                    id:'delete',
                    data:{
                        delete:'Show',
                    }
                },
            },
            receivedData:{
                timezone:'',
                startOfWeek:'',
                taskRolloverPosition:'',
                workLoad:'',
                calendarColor:'',
                // firstName:'',
                // secondName:'',
            }
        }
    },
    methods:{
        getFirstName(){
            if(this.firstName!=''){
                this.fullName= this.firstName
            }
        },
        getSecondName(){
            if(this.secondName!=''){
                this.fullName=`${this.firstName} ${this.secondName}`
            }
        },
        getSelectedOption(e){
            Object.values(this.selectData).forEach((item)=>{
                if(item.id==e.id){
                    this.receivedData[item.id]=e.data
                    console.log(this.receivedData)
                }
            })
        },
        getPicture(e){
            const picture=e.target.files[0]
            console.log(picture)
            this.$store.dispatch('user/uploadPictute',picture)
        }
    }
}
</script>

<style lang='scss' scoped>
</style>