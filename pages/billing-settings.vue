<template>
    <div class="row">
        <div class="billing-settings">
            <div class="billing-settings-container">
                <div class="row justify-content-center">
                    <div class="content">
                        <div class="row justify-content-center">
                            <div class="w-auto main-title">
                                <h1 class="mb-3">Billing</h1>
                            </div>
                        </div>
                        <settings-card title="Your plan">
                            <div class="user-info">
                                <div class="row justify-content-between">
                                    <div class="col-3 w-auto user">
                                        <span>Sunsana Pro</span>
                                    </div>
                                    <div class="col-3 w-auto">
                                        <div class="row h-100 align-items-center">
                                            <div class="active-user p-0">
                                                <span>1 actrive users</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-info mt-2 ps-5 pe-4">
                                <billing-plan-item title="Card ending in">
                                    <h4>XXXX</h4>
                                </billing-plan-item>
                                <billing-plan-item title="Expires:">
                                    <div class="row">
                                        <div class="col-3 w-auto pe-0">
                                            <div class="swap-btn">
                                                <span>Swap</span>
                                            </div>
                                        </div>
                                        <div class="col-3 w-auto">
                                            <h4>XXXX</h4>
                                        </div>
                                    </div>
                                </billing-plan-item>
                                <billing-plan-item title="Billing email:">
                                    <div class="row">
                                        <div class="col-3 w-auto pe-0">
                                            <div class="edit-btn">
                                                <span>Edit</span>
                                            </div>
                                        </div>
                                        <div class="col-3 w-auto">
                                            <h4>stemannit@gmail.com</h4>
                                        </div>
                                    </div>
                                </billing-plan-item>
                                <billing-plan-item title="Company name:">
                                    <div class="add-billing-btn">
                                        <span>Add</span>
                                    </div>
                                </billing-plan-item>
                                <billing-plan-item title="VAT/Tax ID:">
                                    <div class="add-billing-btn">
                                        <span>Add</span>
                                    </div>
                                </billing-plan-item>
                                <billing-plan-item title="Next renewal date:">
                                    <h4>March 1, 2022</h4>
                                </billing-plan-item>
                            </div>
                            <div class="plan-btn mt-4">
                                <div class="row justify-content-center">
                                    <div class="col-3 w-auto">
                                        <Button text="Plan Details" buttonClass="plan-detail-btn"></Button>
                                    </div>
                                    <div class="col-3 ps-0 pe-0 w-auto">
                                        <Button text="Cancel Subscription"  buttonClass="cancel-subscription-btn"></Button>
                                    </div>
                                    <div class="col-3 w-auto">
                                        <Button text="Swap to Annual"  buttonClass="swap-annual-btn"></Button>
                                    </div>
                                </div>
                            </div>
                        </settings-card>
                        <settings-card class="mb-3 mt-3 team-changes" title="Team changes">
                            <div class="settings-blur">
                                <div class="color1"></div>
                                <div class="color2"></div>
                                <div class="color3"></div>
                            </div>
                            <div class="col-4 w-auto">
                                <div class="row h-100 align-items-center">
                                    <div class="col-3 ps-0 pe-1 w-auto date">
                                        <span>Jan 15, 2022</span>
                                    </div>
                                    <div class="col-3 ps-4 pe-0 w-auto name">
                                        <span>Phillip S.</span>
                                    </div>
                                    <div class="col-3 ps-2 pe-4 w-auto admin">
                                        <div class="row h-100 align-items-center">
                                            <span>became an admin</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4 w-auto ps-5 pe-0">
                                <span class="promo">(promoted by Phillip S.)</span>
                            </div>
                        </settings-card>
                        <div class="billing-history">
                            <div class="settings-blur">
                                <div class="color1"></div>
                                <div class="color2"></div>
                                <div class="color3"></div>
                            </div>
                            <div class="title">
                                <h1 class="mb-4">Billing history</h1>
                            </div>
                            <div class="row gx-0">
                                <div class="col-3 ps-0 pe-5 w-auto date">
                                    <h3>Date</h3>
                                </div>
                                <div class="col-3 ps-5 pe-0 w-auto description">
                                    <h3>Description</h3>
                                </div>
                                <div class="col-3 w-auto amount">
                                    <h3>Amount</h3>
                                </div>
                            </div>
                            <div v-for="(history,index) in billingHistoryData" :key="index" class="row gx-0 mb-2">
                                <billing-history-item
                                    :date="history.date"
                                    :description="history.description"
                                    :amount="history.amount"
                                ></billing-history-item>
                            </div>
                        </div>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import billingHistoryItem from '../components/billing-history-item.vue'
import settingsCard from '../components/settings-card.vue'
import billingPlanItem from '../components/billing-plan-item.vue'
import Button from '../components/button.vue'
export default {
    components:{
        settingsCard,
        billingPlanItem,
        Button,
        billingHistoryItem,
    },
    data(){
        return{
            billingHistoryData:{
                0:{
                    date:'Feb 1, 2022',
                    description:'Changed to the Pro Plan',
                    amount:'$10,000',
                },
                1:{
                    date:'Feb 3, 2022',
                    description:'Changed to the Pro Plan',
                    amount:'$150,000',
                },
                2:{
                    date:'Feb 10, 2022',
                    description:'Changed to the Pro Plan',
                    amount:'$8850',
                },
            }
        }
    },
}
</script>
