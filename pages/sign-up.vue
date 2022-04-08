<template>
  <div class=" sign-up">
      <div class="row">
          <div class="col white-card">
              <div class="row h-100 align-items-center">
                    <register-card
                     :paragraph="verify? 'Congragulations!' :'Welcome Here,'"
                      title="Sign up"
                    >
                        <div v-if="!verify" class="row justify-content-center step-one">
                            <div class="sign-btn">
                                <div class="google-sign">
                                    <div class="row h-100 align-items-center">
                                        <div class="col-4 w-auto">
                                            <img src="/images/google-1.svg" alt="">
                                        </div>
                                        <div class="col-4 w-auto">
                                            <span class="sign-text">Sign up with Google</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="outlook-sign">
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
                        <div v-if="verify" class="row justify-content-center step-two">
                            <div class="form">
                                <label class="row" for="full-name">Full name</label>
                                <input class="row" type="text" id="full-name">
                            </div>
                            <div class="enter">
                                <div class="row h-100 align-items-center">
                                    <div class="col-3 w-auto">
                                        <span>Get Enter</span>
                                    </div>
                                    <div class="col-3 ps-0 w-auto">
                                        <ArrowRightIcon stroke="white" />
                                    </div>  
                                </div>
                            </div>
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
          <img :src=" verify? '/images/sign-up-2-right.svg':'/images/sign-up-1-right.svg'" alt="">
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
    data(){
        return{
            verify:false,
        }
    },
    methods:{
        
    },
}
</script>