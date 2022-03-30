<template>
  <div class="calendar-settings-card">
      <div class="row">
          <div class="col-2 w-auto pe-0">
              <img class="image" src="../assets/calendarArt.png" alt="">
          </div>
          <div class="col">
              <div class="title">
                <p class="mb-0">stemannit@gmail.com</p>
              </div>
          </div>
          <div class="col-3 w-auto">
              <Button buttonClass="remove-calendar" text="Remove"></Button>
          </div>
      </div>
      <div class="row calendar-action justify-content-between mt-3 mb-2">
          <div class="col-5 w-auto">
              <p class=" calendar mb-0">Calendar</p>
          </div>
          <div class="col-5 w-auto">
              <p class="mb-0 pe-1">Action</p>
          </div>
      </div>
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:''
}
</script>

<style lang='scss' scoped>
    .calendar-settings-card{
        padding: 30px;
        margin-top: 13px;
        background: #F7F7F7;
        border-radius: 10px;
        .image{
            width: 24px;
            height: auto;
            object-fit: cover;
        }
        .title{
            font-weight: 700;
            font-size: 18px;
            line-height: 25px;
            color: #030229;
        }
        .calendar-action{
            p{
                font-weight: 700;
                font-size: 14px;
                line-height: 19px;
                color: #030229;
            }
            .calendar{
                position: relative;
                &::after{
                    content: '';
                    position: absolute;
                    right: -15px;
                    top: 50%;
                    width: 6px;
                    height: 4px;
                    border-right: 3px solid transparent;
                    border-left: 3px solid transparent;
                    border-top: 3px solid rgba(3, 2, 41,0.2);
                    border-radius: 6px;
                }
            }
        }
        .calendar-switch-check{
            &:last-child{
                border-bottom:none;
                margin-bottom: 0 !important;
            }
        }
    }
</style>