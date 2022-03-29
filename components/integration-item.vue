<template>
  <div class="itegrations-item p-0 w-100 row">
      <div class="col-3 w-auto">
          <img :src="require('~/assets/'+img)" alt="">
      </div>
      <div class="col">
          <div class="text">
              <h1>{{title}}</h1>
              <p>{{paragraph}}</p>
          </div>
      </div>
      <div class="col-3 w-auto">
          <div class="row h-100 align-items-center">
              <div class="col pe-0">
                  <Button :buttonClass='btn.btn1' :text="btn.btn1" ></Button>
              </div>
              <div class="col">
                  <Button :buttonClass='btn.btn2' :text="btn.btn2"></Button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Button from '../components/button.vue'
export default {
    name:'itegrationsItem',
    props:{
        img:String,
        title:String,
        paragraph:String,
        btn:Object
    }
}
</script>

<style lang="scss" scoped>
    .itegrations-item{
        img{
            width: 24px;
            height: auto;
            object-fit: cover;
        }
        .text{
            h1{
                font-weight: 700;
                font-size: 17px;
                line-height: 23px;
                color: #030229;
            }
            p{
                font-weight: 300;
                font-size: 12px;
                line-height: 16px;
                color:rgba(3, 2, 41,0.7);
            }
        }
    }
</style>