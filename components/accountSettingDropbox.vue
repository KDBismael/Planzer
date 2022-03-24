<template>
  <div class="accountSettingSelect row pt-1 pb-1">
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
            <select @change="getData($event)"  class="select" :id="inputData.id">
                <option ref="option" class="" v-for="(item,index) in inputData.data" :key="index" :value="item"><span>{{item}}</span></option>
            </select>
            <div class="custom-arrow"></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'accountSettingDropbox',
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
        getData(e){
            const _data=e.target.value
                let id=this.inputData.id
            let toSend={
                [id]:_data
            }
            // this.$store.dispatch('user/updateAccountSetting',toSend)
            this.$axios.get('/user').then((res)=>console.log(res))
            // $nuxt.$emit('dataSelected',toSend)
        }
    }
}
</script>

<style lang='scss' scoped>
    .accountSettingSelect{
        .text{
            h1{
                font-weight: 780;
                font-size: 17px;
                line-height: 23px;
                color: #030229;
            }
            p{
                font-weight: 400;
                font-size: 12px;
                line-height: 16px;
                color: rgba(3, 2, 41, 0.8);
            }
        }
        .select-field{
            position: relative;
            &::after{
                content: '';
                position: absolute;
                right: 10px;
                width:0;
                height:0;
                border-left:5px solid transparent;
                border-right:5px solid transparent;
                border-top:5px solid #605BFF;
                border-radius:3px;
                margin-top: -4px;
                pointer-events: none;
            }
        }
        .select{
            background-image: none;
            border: none;
            outline: none;
            border-radius: 10px;
            background-color: rgba(96, 91, 255, 0.1);
            padding: 6px 10px;
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            color: #605BFF;
            appearance:none;
            position: relative;
        }
    }
</style>