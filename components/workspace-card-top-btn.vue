<template>
  <div class="workspace-card-top-btn">
      <div class="top col">
            <div class="row justify-content-between  pb-2">
                <div class="col-3 w-auto">
                    <div class="title">
                        <h1 class="mb-0">{{title}}</h1>
                    </div>
                </div>
                <div class="col-3 w-auto me-2">
                    <div class="row h-100 justify-content-end align-self-center">
                        <Button :text="btn.title" :buttonClass="btn.class"></Button>
                    </div>
                </div>
            </div>
        </div>
        <slot></slot>
  </div>
</template>

<script>
import Button from './button.vue'
export default {
    components:{
        Button
    },
    props:{
        title:String,
        btn:Object,
    }
}
</script>

<style lang="scss" scoped>
    .workspace-card-top-btn{
        background: #F7F7F7;
        border-radius: 10px;
        padding: 1rem;
        .top{
            border-bottom: 1px solid rgba(3, 2, 41,0.05);
            margin-bottom: 5px;
            .title{
                h1{
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 25px;
                    color: #030229;
                }
            }
        }
    }
</style>