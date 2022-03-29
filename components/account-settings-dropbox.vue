<template>
  <div class="account-settings-select row pt-1 pb-1">
      <div class="col">
          <div class="row align-items-center h-100">
            <div class="text">
                <h1 class="mb-0">{{title}}</h1>
                <p class="mb-0">{{paragraph}}</p>
            </div>
          </div>
      </div>
    <div class="col-3 me-3 w-auto">
        <div class="row align-items-center h-100 select-field">
            <select @change="updateSetting($event)"  class="select" :id="inputData.id">
                <option ref="option" class="" v-for="(item,index) in inputData.data" :key="index" :value="item"><span>{{item}}</span></option>
            </select>
            <div class="custom-arrow"></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        title:String,
        paragraph:String,
        inputData:Object,
    },
    data(){
        return{
            option:'',
        }
    },
    methods:{
        updateSettings(e){
            const _sectedValue=e.target.value
            let id=this.inputData.id
            let dataToSend={
                [id]:_sectedValue
            }
            this.$store.dispatch('user/updateAccountSetting',dataToSend)
        }
    }
}
</script>

<style lang='scss' scoped>
</style>