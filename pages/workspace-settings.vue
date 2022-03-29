<template>
    <div class="row">
        <div class="workspace-settings">
                <div class="workspace-settings-container p-0">
                    <div class=" row justify-content-center w-100 main-title">
                        <h1 class="w-auto mb-0 pb-4">workspace Setting</h1>
                    </div>
                    <setting-navigation whereIs="workspace-settings"></setting-navigation>
                    <div class="row justify-content-center">    
                        <div class="content row p-0">
                            <setting-card class="mb-3" title="Integrations">
                                <integration-item
                                    v-for="(content,index) in integrationItemData"
                                    :key="index" 
                                    :title="content.title" 
                                    :paragraph="content.paragraph"
                                    :img="content.img"
                                    :btn="content.btn"
                                    :classe="content.classe"
                                ></integration-item>
                            </setting-card>
                            <workspace-card-top-btn class="mb-3" :btn="membersData.btn" :title="membersData.title">
                                <div class="row justify-content-between p-2 pt-3">
                                    <div class="name col-3 w-auto">
                                        <div class="row h-100 align-items-center">
                                            <span>Phillip Stemann</span>
                                        </div>
                                    </div>
                                    <div class="owner p-1 col-3 w-auto">
                                        <div class="row h-100 align-items-center">
                                            <span>Owner</span>
                                        </div>
                                    </div>
                                </div>
                            </workspace-card-top-btn>
                            <div class="privacy p-3 mb-3">
                                <div class="row pt-1 justify-content-between">
                                    <div class="privacy-title col-3 w-auto">
                                        <div class="row justify-content-start">
                                            <h1 class=" m-0 w-auto">Privacy</h1>
                                        </div>
                                    </div>
                                    <div class="privacy-options col-4 w-auto">
                                        <div class="row">
                                            <div class="col-3 w-auto">
                                                <span>Visible only to you</span>
                                            </div>
                                            <div class="col-3 w-auto">
                                                <span>Visible only to Teamamte</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-for="(option,index) in privacyData" :key="index" class="row mt-2">
                                    <privacy-check-item :title="option.title" :id="option.id"></privacy-check-item>
                                </div>
                                <div class="mt-2 workspace-in-privacy">
                                    <p class="pt-3">Your workspace in privacy. None of your data will be shared with other people in the workspace.</p>
                                </div>
                                <div class="row disable-link">
                                    <account-setting-switch-checkbox 
                                    paragraph="Do not allow users to join via URL, they must be explicity invited by email." 
                                    title="Disable link invites"
                                    id="disable-link"
                                    ></account-setting-switch-checkbox>
                                </div>
                                <div class="row">
                                    <div class="col mt-3">
                                        <Button buttonClass='adjust-workspace-btn' text="Adjust workspace privacy"></Button>
                                    </div>
                                </div>
                            </div>
                            <setting-card class="mb-3" title="Customizations">
                                <account-setting-switch-checkbox 
                                    paragraph="Enable your task notes to be fully collaborative (a la Google Docs). Adds extra load time when editing task notes." 
                                    title="Real-time collaborative task notes"
                                    id="customizations"
                                    ></account-setting-switch-checkbox>
                            </setting-card>
                            <div class="email-forwarding p-3">
                                <div class="email mb-3">
                                    <div class="row pb-3 pt-2">
                                        <div class="text col">
                                            <h1 class="mb-0">Email forwarding</h1>
                                        </div>
                                        <div class="email-btn col">
                                            <div class="row h-100 align-items-center justify-content-end">
                                                <div class="col-3 w-auto pe-0">
                                                    <Button text='Copy email address' buttonClass='copy-email-btn'></Button>
                                                </div>
                                                <div class="col-3 w-auto">
                                                    <Button text='Show example' buttonClass='show-example-btn'></Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="email-description mb-4">
                                    <p>To add a task to today, seno/forward an e-mail to: <span class="row ps-3">philip2-61e850951331090001 eb0438 @email sunagno.corm</span></p>
                                    <p>To add a task to your backlog, send/forward an email to: <span class="row ps-3">philip-2161e350951337090001e00438 + backlog@emai.sunsama.com</span></p>
                                </div>
                                <div class="share pt-3">
                                    <p>Don’t share this- anyone with access to this emial adores car and tarks to your workspace.</p>
                                </div>
                            </div>
                            <workspace-card-top-btn class="rename-workspace mt-3" :title="renameWorkspaceData.title" :btn="renameWorkspaceData.btn" >
                                <p>
                                    Be carglul wher renaming your workspaco Toommates who aro curently lagged in will need to refregh, If you have beammates who've bookmarked Sunsama, their bookmarks will need to be updated. You will also be issued a new email for forwarding tasks to Sunsama Va omal.
                                </p>
                            </workspace-card-top-btn>
                            <workspace-card-top-btn class="delete-workspace mt-3 mb-4" :title="deleteWorkspaceData.title" :btn="deleteWorkspaceData.btn" >
                                <p>
                                    If there's anything we can help with before you shut the workspace down, just shot us an
                                    email at <span>support@sunsoma.com</span>
                                </p>
                            </workspace-card-top-btn>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import integrationItem from '../components/integration-item.vue'
import accountSettingSwitchCheckbox from '../components/account-settings-switch-checkbox.vue'
import settingNavigation from '../components/settings-navigation.vue'
import settingCard from '../components/settings-card.vue'
import privacyCheckItem from '../components/privacy-check-item.vue'
import workspaceCardTopBtn from '../components/workspace-card-top-btn.vue'
export default {
    components:{
        settingCard,
        settingNavigation,
        integrationItem,
        workspaceCardTopBtn,
        privacyCheckItem,
        accountSettingSwitchCheckbox,
    },
    data(){
        return{
            integrationItemData:{
                integrationItem1:{
                    btn:{btn1:'Overview',btn2:'Manage'},
                    classe:{btn1:'overview-btn',btn2:'manage-btn'},
                    title:'Outlook',
                    paragraph:"Synchranize with Outlook Calendar. See what’s on your calendar, create new events, and edit existing events.",
                },
                integrationItem2:{
                    btn:{btn1:'Overview',btn2:'Delete'},
                    classe:{btn1:'overview-btn',btn2:'delete-btn'},
                    title:'Outlook',
                    paragraph:"Synchranize with Outlook Calendar. See what’s on your calendar, create new events, and edit existing events.",
                },
                integrationItem3:{
                    btn:{btn1:'Overview',btn2:'Add'},
                    classe:{btn1:'overview-btn',btn2:'add-btn'},
                    title:'Outlook',
                    paragraph:"Synchranize with Outlook Calendar. See what’s on your calendar, create new events, and edit existing events.",
                },
                integrationItem4:{
                    btn:{btn1:'Disable',btn2:'Add'},
                    classe:{btn1:'disable-btn',btn2:'add-btn'},
                    title:'Outlook',
                    paragraph:"Synchranize with Outlook Calendar. See what’s on your calendar, create new events, and edit existing events.",
                },
                integrationItem5:{
                    btn:{btn1:'Overview',btn2:'Manage'},
                    classe:{btn1:'overview-btn',btn2:'manage-btn'},
                    title:'Outlook',
                    paragraph:"Synchranize with Outlook Calendar. See what’s on your calendar, create new events, and edit existing events.",
                },
                integrationItem6:{
                    btn:{btn1:'Overview',btn2:'Delete'},
                    classe:{btn1:'overview-btn',btn2:'delete-btn'},
                    title:'Outlook',
                    paragraph:"Synchranize with Outlook Calendar. See what’s on your calendar, create new events, and edit existing events.",
                },
                integrationItem7:{
                    btn:{btn1:'Overview',btn2:'Add'},
                    classe:{btn1:'overview-btn',btn2:'add-btn'},
                    title:'Outlook',
                    paragraph:"Synchranize with Outlook Calendar. See what’s on your calendar, create new events, and edit existing events.",
                },
                integrationItem8:{
                    btn:{btn1:'Disable',btn2:'Add'},
                    classe:{btn1:'disable-btn',btn2:'add-btn'},
                    title:'Outlook',
                    paragraph:"Synchranize with Outlook Calendar. See what’s on your calendar, create new events, and edit existing events.",
                },
            },
            membersData:{
                title:'Members',
                btn:{
                    title:'Invite teammate',
                    class:'teammate-btn'
                }
            },
            privacyData:{
                tasks:{
                    title:'Tasks',
                    id:'tasks'
                },
                calendars:{
                    title:'Calendars',
                    id:'calendars'
                },
                MissingNotes:{
                    title:'Missing notes',
                    id:'Missing-notes'
                },
                channels:{
                    title:'Channels',
                    id:'channels'
                },
                integrations:{
                    title:'Integrations',
                    id:'integrations'
                },
            },
            renameWorkspaceData:{
                title:'Rename the workspace',
                btn:{
                    title:'Rename workspace',
                    class:'rename-workspace-btn'
                }
            },
            deleteWorkspaceData:{
                title:'Delete the workspace',
                btn:{
                    title:'Delete workspace',
                    class:'delete-workspace-btn'
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
</style>