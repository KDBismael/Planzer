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
    .privacy-check-item{
        .text{
            h1{
                font-weight: 300;
                font-size: 12px;
                line-height: 16px;
                color: #030229;
            }
        }
        .check{
            .checkmark{
                width: 16px;
                height: 16px;
                background-color: #FFFFFF;
                border: 1px solid #CECECE;
                border-radius: 30px;
                &::after{
                    left: 5px;
                    bottom: 4px;
                    width: 5px;
                    height: 9px;
                    border: solid #FFFFFF;
                    border-width: 0 2px 2px 0;
                }
            }
            input[type=checkbox] {
                pointer-events: none;
            }
            input:checked ~ .checkmark {
                background-color: #665BF8;
                border: 1px solid #665BF8;
            }
            .privacy-check-mark-1{
                margin-left: -10px;
            }
            .privacy-check-mark-2{
                margin-left: 115px;
            }
        }
    }
</style>