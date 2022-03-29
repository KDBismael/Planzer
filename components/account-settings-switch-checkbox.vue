<template>
  <div class="account-settings-switchbox pt-1 pb-1 row">
      <div class="col">
          <div class="row align-items-center h-100">
            <div class="text">
                <h1>{{title}}</h1>
                <p class="mb-0">{{paragraph}}</p>
            </div>
          </div>
      </div>
      <div class="col-3 w-auto">
          <div class="row align-items-center h-100">
                <div class="form-check form-switch">
                    <label class="form-check-label" for="flexSwitchCheckDefault">
                        <input class="form-check-input" type="checkbox" :id="id" :checked="state" >
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
        paragraph:String,
        id:String,
        state:String
    }
}
</script>

<style lang='scss' scoped>
</style>