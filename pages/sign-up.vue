<template>
  <div class=" sign-up">
      <div class="row">
          <div class="col white-card">
              <div class="row h-100 align-items-center">
                    <register-card
                     paragraph="Welcome Here,"
                      title="Sign up"
                    >
                        <div class="row justify-content-center step-one">
                            <div class="sign-btn">
                                <div @click="signUpWithGoogle" class="google-sign">
                                    <div class="row h-100 align-items-center">
                                        <div class="col-4 w-auto">
                                            <img src="/images/google-1.svg" alt="">
                                        </div>
                                        <div class="col-4 w-auto">
                                            <span class="sign-text">Sign up with Google</span>
                                        </div>
                                    </div>
                                </div>
                                <div @click="signUpWithOutlook" class="outlook-sign">
                                    <div class="row h-100 align-items-center">
                                        <div class="col-4 w-auto">
                                            <div class="row">
                                                <div class="col-2 pe-1 w-auto">
                                                    <img src="/images/outlook.png" alt="">
                                                </div>
                                                <div class="col ps-0">
                                                    <span class="outlook-text">Outlook</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 ps-1 w-auto">
                                            <span class="sign-text">Sign up with Outlook</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="sign-in mb-0">
                                I already have an account ?
                                <span>
                                    <NuxtLink to="/">Sign in</NuxtLink>
                                </span>
                            </p>
                        </div>
                    </register-card>
              </div>
          </div>
          <div class="col-3 orange-card">
              <div class="logo">
                  <img src="../assets/white-logo.png" alt="">
              </div>
          </div>
      </div>
      <div class="right-img">
          <img src="/images/sign-up-1-right.svg" alt="">
      </div>
  </div>
</template>

<script>
import {ArrowRightIcon} from "vue-feather-icons"
import registerCard from '../components/register-card.vue'
export default {
    auth: false,
    components:{
        registerCard,
        ArrowRightIcon,
    },
    layout: "not-signed-in",
    async created(){
        if(this.$route.query.code){
            let scope=this.$route.query.scope
            let code=this.$route.query.code
            if(scope.includes('https://www.googleapis.com/auth/')){
                //google code
                await this.$store.dispatch('user/signUpWithGoogle',{googleCode:code})
            }
            else{
                //outlook code

            }
        }
    },
    methods:{
        signUpWithGoogle(){
            this.$auth.loginWith('google',{params:{
                redirect_uri:'http://localhost:3000/sign-up'
            }})
        },
        signUpWithOutlook(){
            this.$auth.loginWith('outlook',{params:{
                redirect_uri:'http://localhost:3000/sign-up'
            }})
        }
    },
}
</script>