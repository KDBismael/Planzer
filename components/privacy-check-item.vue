<template>
  <div class="privacy-check-item">
      <div class="row justify-content-between">
          <div class="text col-4 w-auto">
              <h1 class="mb-0">{{title}}</h1>
          </div>
          <div class="check col-4 ">
                <div class="row h-100 align-items-center">
                    <label class="checkbox-container privacy-check-mark-1 col-1 w-auto pe-0">
                        <input :id="id" value="Visible only to you" type="checkbox" checked />
                        <span class="checkmark col"></span>
                    </label>
                    <label class="checkbox-container privacy-check-mark-2 col-1 w-auto pe-0">
                        <input id="id" value="Visible only to Teamamte" type="checkbox" />
                        <span class="checkmark col"></span>
                    </label>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        title:String,
        id:String,
    }
}
</script>

<style lang='scss' scoped>
</style>