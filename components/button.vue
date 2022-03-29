<template>
  <button :class="buttonClass ? buttonClass : 'btn btn-primary btn-block'" type="button" :disabled="loading ? true : false">
    <span v-if="!loading">
      <i v-if="icon" :class="icon" />
      {{text}}
    </span>
    <span v-if="loading" class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    <span v-if="loading" class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    <span v-if="loading" class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  </button>
</template>

<script>
export default {
  props: ["loading", "text", "buttonClass", "icon"]
};
</script>
<style lang="scss" scoped>
  .Overview{
    border: none;
    outline: none;
    width: 73px;
    height: 28px;
    background-color: rgba(96, 91, 255, 0.1);
    border-radius: 10px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #605BFF;
  }
  .Add,.Manage{
    border: none;
    outline: none;
    width: auto;
    padding: 0 0.8rem;
    height: 28px;
    background: #5078FC;
    border-radius: 10px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: right;
    color: #FFFFFF;
  }
  .Delete{
    border: none;
    outline: none;
    padding-right: 0.56rem;
    width: 56px;
    height: 28px;
    background-color: rgba(236, 72, 92, 0.1);
    border-radius: 10px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: right;
    color: #EC485C;
  }
  .Disable{
    display: none;
  }
  .teammate,.adjust-workspace,.copy-email,.rename-workspace-btn{
    border: none;
    outline: none;
    background: #4C79FF;
    border-radius: 22.5px;
    width: auto;
    padding: 0.3rem 0.4rem;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #FFFFFF;
  }
  .show-example{
    border: none;
    outline: none;
    background: #FFFFFF;
    border-radius: 22.5px;
    padding: 0.3rem 0.4rem;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #5078FB;
  }
  .delete-workspace-btn{
    border: none;
    outline: none;
    background: #EC485C;
    border-radius: 22.5px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #FFFFFF;
  }
</style>