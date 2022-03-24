<template>
    <div class="row">
        <div class="workspaceSetting">
                <div class="workspaceSetting-container p-0">
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
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import integrationItem from '../components/integrationItem.vue'
import settingNavigation from '../components/settingNavigation.vue'
import settingCard from '../components/settingCard.vue'
export default {
    name:'workspaceSetting',
    components:{
        settingCard,
        settingNavigation,
        integrationItem,
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
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .workspaceSetting{
        .workspaceSetting-container{
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
</style>