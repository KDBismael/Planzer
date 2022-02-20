<template>
  <div>
    <h5 class="fw-bold py-3 ps-3 border-bottom mb-0">Schedule</h5>
    <div class="d-flex">
      <a href="#" class="p-4 border-end">+</a>
      <h4 class="p-4 mb-0">4 jan 2022</h4>
    </div>
    <div class="d-flex align-items-center" v-for="item in schedule" :key="item">
      <div class="schedule-item text-center border-end py-3">
        {{ item }}
      </div>
      <div class="border-bottom w-75"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      schedule: [
        "00:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
      ],
    }
  },
}
</script>
