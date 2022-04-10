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
</style>