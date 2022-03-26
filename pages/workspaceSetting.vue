<template>
    <div class="row">
        <div class="workspace-setting ps-0">
                <div class="workspace-setting-container p-0">
                    <div class=" row justify-content-center w-100 title">
                        <h1 class="w-auto mb-0 pb-4">workspace Setting</h1>
                    </div>
                    <setting-navigation whereIs="workspaceSetting"></setting-navigation>
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
                                        <Button buttonClass='adjust-workspace' text="Adjust workspace privacy"></Button>
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
                                                    <Button text='Copy email address' buttonClass='copy-email'></Button>
                                                </div>
                                                <div class="col-3 w-auto">
                                                    <Button text='Show example' buttonClass='show-example'></Button>
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
import accountSettingSwitchCheckbox from '../components/accountSettingSwitchCheckbox.vue'
import workspaceCardTopBtn from '../components/workspaceCardTopBtn.vue'
import integrationItem from '../components/integrationItem.vue'
import settingNavigation from '../components/settingNavigation.vue'
import settingCard from '../components/settingCard.vue'
import privacyCheckItem from '../components/privacyCheckItem.vue'
export default {
    name:'workspace-setting',
    components:{
        settingCard,
        settingNavigation,
        integrationItem,
        workspaceCardTopBtn,
        privacyCheckItem,
    },
    data(){
        return{
            integrationItemData:{
                integrationItem1:{
                    btn:{btn1:'Overview',btn2:'Manage'},
                    title:'Outlook',
                    paragraph:"Synchranize with Outlook Calendar. See what’s on your calendar, create new events, and edit existing events.",
                    img:"calendarArt.png"
                },
                integrationItem2:{
                    btn:{btn1:'Overview',btn2:'Delete'},
                    title:'Outlook',
                    paragraph:"Synchranize with Outlook Calendar. See what’s on your calendar, create new events, and edit existing events.",
                    img:"calendarArt.png"
                },
                integrationItem3:{
                    btn:{btn1:'Overview',btn2:'Add'},
                    title:'Outlook',
                    paragraph:"Synchranize with Outlook Calendar. See what’s on your calendar, create new events, and edit existing events.",
                    img:"calendarArt.png"
                },
                integrationItem4:{
                    btn:{btn1:'Disable',btn2:'Add'},
                    title:'Outlook',
                    paragraph:"Synchranize with Outlook Calendar. See what’s on your calendar, create new events, and edit existing events.",
                    img:"calendarArt.png"
                },
                integrationItem5:{
                    btn:{btn1:'Overview',btn2:'Manage'},
                    title:'Outlook',
                    paragraph:"Synchranize with Outlook Calendar. See what’s on your calendar, create new events, and edit existing events.",
                    img:"calendarArt.png"
                },
                integrationItem6:{
                    btn:{btn1:'Overview',btn2:'Delete'},
                    title:'Outlook',
                    paragraph:"Synchranize with Outlook Calendar. See what’s on your calendar, create new events, and edit existing events.",
                    img:"calendarArt.png"
                },
                integrationItem7:{
                    btn:{btn1:'Overview',btn2:'Add'},
                    title:'Outlook',
                    paragraph:"Synchranize with Outlook Calendar. See what’s on your calendar, create new events, and edit existing events.",
                    img:"calendarArt.png"
                },
                integrationItem8:{
                    btn:{btn1:'Disable',btn2:'Add'},
                    title:'Outlook',
                    paragraph:"Synchranize with Outlook Calendar. See what’s on your calendar, create new events, and edit existing events.",
                    img:"calendarArt.png"
                },
            },
            membersData:{
                title:'Members',
                btn:{
                    title:'Invite teammate',
                    class:'teammate'
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
    .workspace-setting{
        .workspace-setting-container{
            position: relative;
            .title{
                h1{
                    margin-left: 6rem;
                    font-weight: 600;
                    font-size: 28px;
                    line-height: 28px;
                    color: #000000;
                }
            }
        }
        .content{
            margin-left: 6rem;
            width: 60%;
            height: 75vh;
            overflow-y: scroll;
            &::-webkit-scrollbar {
                display: none;
                width: 0;
            }
            -ms-overflow-style: none; /* IE 11 */
            scrollbar-width: none; /* Firefox 64 */
        }
    }
    .privacy{
        background: #F7F7F7;
        border: 1px solid #F6EDEE;
        border-radius: 10px;
        .privacy-title{
            h1{
                font-weight: 700;
                font-size: 17px;
                line-height: 23px;
                color: #030229;
            }
        }
        .privacy-options{
            span{
                font-weight: 700;
                font-size: 12px;
                line-height: 16px;
                color: #030229;
            }
        }
        .workspace-in-privacy{
            border-top: 1px solid rgba(3, 2, 41,0.09);
            p{
                font-weight: 300;
                font-size: 12px;
                line-height: 16px;
                color: rgba(3, 2, 41, 0.7);
            }
        }
    }
    .email-forwarding{
        background: #F7F7F7;
        border-radius: 10px;
        .email{
            border-bottom: 1px solid rgba(3, 2, 41, 0.09);
            .text{
                h1{
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 25px;
                    color: #030229;
                }
            }
        }
        .email-description{
            p{
                font-weight: 400;
                font-size: 12px;
                line-height: 208.4%;
                color: #030229;
                span{
                    color: #4C79FF;
                    cursor: pointer;
                }
            }
        }
        .share{
            border-top: 1px solid rgba(3, 2, 41,0.09);
            p{
                font-weight: 300;
                font-size: 12px;
                line-height: 16px;
                color: rgba(3, 2, 41, 0.5);
            }
        }
    }
    .name{
        background-color:rgb(255, 255, 255,0.8);
        border-radius: 10px;
        font-weight: 300;
        font-size: 12px;
        line-height: 16px;
        color: #030229;
        padding: 0.5rem;
        cursor: pointer;
    }
    .owner{
        background: rgba(37, 156, 255, 0.2);
        border-radius: 10px;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        color: #259CFF;
        padding: 0.5rem;
        cursor: pointer;
    }
    .rename-workspace{
        font-weight: 300;
        font-size: 12px;
        line-height: 181%;
        color: rgba(3, 2, 41, 0.7);
    }
    .delete-workspace{
        font-weight: 300;
        font-size: 12px;
        line-height: 181%;
        color: rgba(3, 2, 41, 0.7);
        span{
            color: #5078FC;
            cursor: pointer;
        }
    }
</style>