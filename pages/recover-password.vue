<template>
    <div class="recover-password">
        <div class="row">
          <div class="col white-card">
              <div class="row h-100 align-items-center">
                    <register-card
                     paragraph="Enter you email to get Recovery link!"
                      title="Forget Pasword"
                    >
                        <div class="row justify-content-center recovery-link">
                            <div class="form">
                                <label class="row" for="email">Email</label>
                                <input v-model.lazy="forgotEmail" class="row" type="email" id="email">
                            </div>
                            <div @click="sendEmail" class="send">
                                <div class="row h-100 align-items-center">
                                    <div class="col-3 w-auto">
                                        <span>Send Verification</span>
                                    </div>
                                    <div class="col-3 ps-0 w-auto">
                                        <ArrowRightIcon stroke="white" />
                                    </div>  
                                </div>
                            </div>
                        </div>
                        <p class="register-text">I don’t have an account ? <NuxtLink to="/sign-up">Sign up</NuxtLink></p>
                        <p class="or-divider"><span>OR</span></p>

                        <div class="sign-in-other-options">
                            <img @click="signInWithOutlook()" class="social-sign-in" src="/images/outlook.png" />
                            <img @click="signInWithGoogle()" id="signInWithGoogle" class="social-sign-in" src="/images/google.png" />
                        </div>
                    </register-card>
              </div>
          </div>
          <div class="col-4 orange-card">
              <div class="logo">
                  <img src="../assets/white-logo.png" alt="">
              </div>
          </div>
      </div>
      <div class="right-img">
          <img src="/images/forget-right-1.svg" alt="">
      </div>
    </div>
</template>

<script>
import {ArrowRightIcon} from "vue-feather-icons"
import registerCard from '../components/register-card.vue'
export default {
    auth:false,
    components:{
        registerCard,
        ArrowRightIcon,
    },
    layout:'not-signed-in',
    data(){
        return{
            forgotEmail:'',
        }
    },
    methods:{
        showPassword(){
            this.visible=!this.visible
        },
        async sendEmail(){
            let _data={
                email:this.forgotEmail
            }
            console.log(_data)
            await this.$store.dispatch('user/revoverLink',_data)
            this.forgotEmail=''
        }
    }
}
</script>