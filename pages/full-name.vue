<template>
    <div class=" sign-up">
      <div class="row">
          <div class="col white-card">
              <div class="row h-100 align-items-center">
                    <register-card
                     paragraph='Congragulations!'
                      title="Sign up"
                    >
                        <div class="row justify-content-center step-two">
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
          <img src="/images/sign-up-2-right.svg" alt="">
      </div>
  </div>
</template>

<script>
import {ArrowRightIcon} from "vue-feather-icons"
import registerCard from '../components/register-card.vue'
export default {
    auth:false,
    layout: "not-signed-in",
    components:{
        registerCard,
        ArrowRightIcon,
    },
}
</script>