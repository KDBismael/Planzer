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
  .remove-calendar{
    border: none;
    outline: none;
    padding: 8px 18.75px;
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
    padding: 8px 11px;
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
    padding: 8px 11px;
    background: #4C79FF;
    border-radius: 22.5px;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #FFFFFF;
  }
</style>