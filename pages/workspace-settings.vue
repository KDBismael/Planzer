<template>
    <div class="row">
        <div class="workspace-settings">
                <div class="workspace-settings-container p-0">
                    <div class=" row justify-content-center w-100 title">
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
                                ></integration-item>
                            </setting-card>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import integrationItem from '../components/integration-item.vue'
import settingNavigation from '../components/settings-navigation.vue'
import settingCard from '../components/settings-card.vue'
export default {
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
                },
                integrationItem2:{
                    btn:{btn1:'Overview',btn2:'Delete'},
                    title:'Outlook',
                    paragraph:"Synchranize with Outlook Calendar. See what’s on your calendar, create new events, and edit existing events.",
                },
                integrationItem3:{
                    btn:{btn1:'Overview',btn2:'Add'},
                    title:'Outlook',
                    paragraph:"Synchranize with Outlook Calendar. See what’s on your calendar, create new events, and edit existing events.",
                },
                integrationItem4:{
                    btn:{btn1:'Disable',btn2:'Add'},
                    title:'Outlook',
                    paragraph:"Synchranize with Outlook Calendar. See what’s on your calendar, create new events, and edit existing events.",
                },
                integrationItem5:{
                    btn:{btn1:'Overview',btn2:'Manage'},
                    title:'Outlook',
                    paragraph:"Synchranize with Outlook Calendar. See what’s on your calendar, create new events, and edit existing events.",
                },
                integrationItem6:{
                    btn:{btn1:'Overview',btn2:'Delete'},
                    title:'Outlook',
                    paragraph:"Synchranize with Outlook Calendar. See what’s on your calendar, create new events, and edit existing events.",
                },
                integrationItem7:{
                    btn:{btn1:'Overview',btn2:'Add'},
                    title:'Outlook',
                    paragraph:"Synchranize with Outlook Calendar. See what’s on your calendar, create new events, and edit existing events.",
                },
                integrationItem8:{
                    btn:{btn1:'Disable',btn2:'Add'},
                    title:'Outlook',
                    paragraph:"Synchranize with Outlook Calendar. See what’s on your calendar, create new events, and edit existing events.",
                },
            }
        }
    }
}
</script>

<style lang="scss" scoped>
</style>