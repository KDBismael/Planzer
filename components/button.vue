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
<<<<<<< HEAD
  .remove-calendar{
    border: none;
    outline: none;
    padding: 0.4rem 0.8rem;
    background: #FFFFFF;
    border-radius: 22.5px;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #4C79FF;
  }
  .add-outlook-calendar,.refresh-calendar-list{
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    background: #FFFFFF;
    border-radius: 22.5px;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #4C79FF;
  }
  .add-google-calendar{
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    background: #4C79FF;
    border-radius: 22.5px;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #FFFFFF;
  }
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
=======
>>>>>>> 8aa265adc61811831d0dc692c95598163aa7fa37
</style>