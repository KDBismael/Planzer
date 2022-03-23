<template>
  <div class="accountSettingSwitchbox pt-1 pb-1 row">
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
    name:'accountSettingSwitchCheckbox',
    props:{
        title:String,
        paragraph:String,
        id:String,
        state:String
    }
}
</script>

<style lang='scss' scoped>
    .accountSettingSwitchbox{
        input[type=checkbox] {
            visibility:visible;
            width: 34px;
            height: 21px;
            background-color: #D1D1D1;
            border: none;
            box-shadow: initial;
            background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
        }
        input[type=checkbox]:checked {
            background-color: #9B9BFF;
        }
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
    }
</style>