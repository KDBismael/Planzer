<template>
  <div class="itegrations-item p-0 w-100 row">
      <div class="col-3 w-auto">
          <img src="~/assets/calendarArt.png" alt="">
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
                  <Button :buttonClass='classe.btn1' :text="btn.btn1" ></Button>
              </div>
              <div class="col">
                  <Button :buttonClass='classe.btn2' :text="btn.btn2"></Button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Button from '../components/button.vue'
export default {
    props:{
        img:String,
        title:String,
        paragraph:String,
        btn:Object,
        classe:Object,
    }
}
</script>

<style lang="scss" scoped>
</style>