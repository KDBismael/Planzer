<template>
  <div class="billing-plan-item">
      <div class="row pt-2 justify-content-between">
          <div class="col-3 w-auto">
              <p class="billing-plan-title mb-0">{{title}}</p>
          </div>
          <div class="col-3 w-auto">
              <slot></slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        title:String
    }
}
</script>
