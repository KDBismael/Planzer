<template>
    <div class="calendar-switch-check mb-2">
        <div class="row justify-content-center pb-2">
            <div class="col-2 w-auto align-self-center pe-0">
                <div :class="circle" class="circle"></div>
            </div>
            <div class="col mb-0 ps-2">
                <div class="row justify-content-between align-items-center">
                    <div class="col-4 w-auto">
                        <div class="title">
                            <p class="mb-0">{{title}}</p>
                        </div>
                    </div>
                    <div class="col-4 w-auto">
                        <div class="form-check form-switch">
                            <label class="form-check-label" for="flexSwitchCheckDefault">
                                <input class="form-check-input" :checked="type" type="checkbox" :id="id">
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'calendarSwitchCheck',
    props:{
        id:String,
        title:String,
        circle:String,
        type:String,
    }
}
</script>

<style lang="scss" scoped>
    .calendar-switch-check{
        border-bottom: 1px solid rgba(3, 2, 41,0.05);
        .circle{
            width: 8px;
            height: 8px;
            border-radius: 50%;
        }
        .title{
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            color: #030229;
        }
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
    }
    .orange{
        background-color: #FFA34C;
    }
    .yellow{
        background-color: #FFCD4C;
    }
    .violate{
        background-color:  #905CFF;
    }
    .green{
        background-color: #65FF4C;
    }
</style>