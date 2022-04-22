<template>
    <div class="recover-password">
        <div class="row">
          <div class="col white-card">
              <div class="row h-100 align-items-center">
                    <register-card
                     paragraph="Enter your new password to get start!"
                      title="Forget Pasword"
                    >
                        <div class="row justify-content-center change-password">
                            <div class="form">
                                <label class="row" for="password">Password</label>
                                <div class="set-visible">
                                    <input v-model.lazy="password" class="row" :type="visible ? 'text':'password'" id="password">
                                    <span v-on:click="showPassword" class="show">Show?</span>
                                </div>
                                <br>
                                <label class="row" for="confirm-password">Confirm-Password</label>
                                <div class="set-visible">
                                    <input  v-model.lazy="confirmPassword" class="row" :type="visible ? 'text':'password'" id="confirm-password">
                                    <span v-on:click="showPassword" class="show">Show?</span>
                                </div>
                            </div>
                            <div @click="sendNewPassword" class="change">
                                <div class="row h-100 align-items-center">
                                    <div class="col-3 w-auto">
                                        <span>Change Password</span>
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
                  <img src="images/logo.svg" alt="">
              </div>
          </div>
      </div>
      <div class="right-img">
          <img src="/images/forget-right-2.svg" alt="">
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
            visible:false,
            password:'',
            confirmPassword:'',
        }
    },
    methods:{
        showPassword(){
            this.visible=!this.visible
        },
        sendNewPassword(){
            let token=this.$router.history.current.query.token
            if(this.password===this.confirmPassword){
                let _data={
                    token:token,
                    password: this.confirmPassword
                }
                this.$store.dispatch('user/setNewPassword',_data)
            }
        }
    }
}
</script>