<template>
  <div class="workspaceCard p-3">
    <div class="row p-0 m-0">
      <div class="title">
        <h1>{{title}}</h1>
      </div>
      <div class="row p-0 m-0">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'settingCard',
  props:{
    title:String
  },
}
</script>

<style lang="scss" scoped>
    .workspaceCard{
      background-color: #F7F7F7;
      border: 1px solid #F6EDEE;
      box-sizing: border-box;
      border-radius: 10px;
      .title{
        border-bottom: 1px solid rgba(3, 2, 41,0.07);
        margin-bottom: 30px;
        h1{
          font-weight: 700;
          font-size: 18px;
          line-height: 25px;
          color: #030229;
          padding-top: 20px;
          padding-bottom: 11px;
        }
      }
    }
</style>