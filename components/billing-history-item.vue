<template>
  <div class="billing-history-item pb-2">
      <div class="row gx-0 align-items-center">
          <div class="col-3 ps-0 w-auto">
              <p class="mb-0 date">{{date}}</p>
          </div>
          <div class="col-3 w-auto">
              <p class="mb-0 description">{{description}}</p>
          </div>
          <div class="col-3 w-auto">
              <div class="row align-items-center">
                  <div class="col-3 w-auto pe-0">
                    <p class="mb-0 price">{{amount}}</p>
                  </div>
                  <div class="col-3 ps-0 w-auto">
                    <div class="circle">
                        <Edit3Icon stroke="#605BFF" fill="#605BFF"></Edit3Icon>
                    </div>
                  </div>
              </div>
          </div>

      </div>
  </div>
</template>

<script>
import {Edit3Icon} from 'vue-feather-icons'
export default {
    components:{
        Edit3Icon
    },
    props:{
        date:String,
        description:String,
        amount:String,
    },
}
</script>