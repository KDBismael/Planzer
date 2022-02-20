<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-between header">
      <div class="d-flex align-items-center">
        <img src="../assets/logo.png" class="logo" alt="Logo" />
        <h5 class="fs-5 mb-0 ms-3 fw-bold">To do</h5>
      </div>
      <div class="d-flex align-items-center">
        <img src="../assets/user.png" alt="" />
        <h6 class="ms-2 mb-0">Phillip Stemann</h6>
        <hexagon-icon size="1x" class="custom-class ms-3"></hexagon-icon>
        <bell-icon size="1x" class="custom-class ms-3"></bell-icon>
      </div>
    </div>
    <div class="row">
      <div class="col-2" style="overflow: scroll; height: calc(100vh - 80px);">
        <div class="d-flex flex-column align-items-center">
          <VCalendar is-expanded :attributes="attrs" />
          <div class="task-categories pt-4 mt-4">
            <h4 class="fw-bold fs-5">Tags</h4>
            <a href="#" class="fs-6 ms-3 mt-3">
              <span class="allColor me-2">#</span> All
            </a>
            <TaskTag v-for="(tag, index) in tags" :tag="tag" :key="'tag' +index" />
            <div class="d-flex mb-4 mt-4">
              <button class="plus d-flex justify-content-center align-items-center">+</button>
              <a href="#"><h5 class="fs-6 ms-2">Manage Tags</h5></a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-7 task-row" id="task-row">
        <div v-for="(column, index) in columns" :key="index" class="task-column" :id="'task-column-' +column.date.getFullYear() + '-' +(column.date.getMonth() < 10 ? 0 : '')+(column.date.getMonth()+1) + '-' +column.date.getUTCDate()">
          <div class="day-contain">
            <div class="d-flex justify-content-between">
              <div>
                <h5 class="fw-bold">{{ column.title }}</h5>
                <h6 class="date">
                  {{ month[column.date.getMonth()] }}
                  {{ column.date.getUTCDate() }}
                </h6>
              </div>
              <div class="progress">
                <span class="progress-left">
                  <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                  <span class="progress-bar"></span>
                </span>
                <div class="progress-value">33%</div>
              </div>
            </div>
            <div class="d-flex justify-content-center mt-3">
              <button class="add-task">Add a Task</button>
            </div>
            <draggable :id="column.date.getFullYear() + '-' +(column.date.getMonth() < 10 ? 0 : '')+(column.date.getMonth()+1) + '-' +column.date.getUTCDate()" @end="updateTaskDrop" :list="tasks.filter(filterDateTasks.bind(this, column.date.getFullYear() + '-' +column.date.getMonth() + '-' +column.date.getUTCDate()))" :animation="200" ghost-class="ghost-card" group="tasks.filter(filterDateTasks.bind(this, column.date.getFullYear() + '-' +column.date.getMonth() + '-' +column.date.getUTCDate()))">
              <Task v-for="task in tasks.filter(filterDateTasks.bind(this, column.date.getFullYear() + '-' + column.date.getMonth() + '-' + column.date.getUTCDate()))" :key="task.id" :task="task" :id="task.id" />
            </draggable>
          </div>
        </div>
      </div>
      <div class="col-3 d-flex">
        <div style="overflow: scroll; height: calc(100vh - 80px);" class="schedule me-3">
          <h5 class="fw-bold py-3 ps-3 border-bottom mb-0">Schedule</h5>
          <div class="d-flex">
            <a href="#" class="p-4 border-end">+</a href="#">
            <h4 class="p-4 mb-0">4 jan 2022</h4>
          </div>
          <div class="d-flex align-items-center" v-for="item in schedule" :key="item">
            <div class="schedule-item text-center border-end py-3">
              {{ item }}
            </div>
            <div class="border-bottom w-75"></div>
          </div>
        </div>
        <div class="right-bar">
          <div class="d-flex blue-gradient flex-column align-items-center justify-content-center">
            <a href="#" class="p-3">
              <calendar-icon size="1x" class="custom-class"></calendar-icon>
            </a>
            <a href="#" class="p-3">
              <mail-icon size="1x" class="custom-class"></mail-icon>
            </a>
            <a href="#" class="p-3">
              <target-icon size="1x" class="custom-class"></target-icon>
            </a>
            <a href="#" class="p-3">
              <archive-icon size="1x" class="custom-class"></archive-icon>
            </a>
            <a href="#" class="p-3">
              <inbox-icon size="1x" class="custom-class"></inbox-icon>
            </a>
            <a href="#" class="p-3">
              <search-icon size="1x" class="custom-class"></search-icon>
            </a>
          </div>
          <div class="d-flex red-gradient flex-column align-items-center justify-content-center mt-1">
            <a href="#" class="p-3">
              <plus-icon size="1x" class="custom-class"></plus-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable"
import TaskTag from "../components/task-tag.vue"
import Task from "../components/task.vue"
import { Calendar as VCalendar } from "v-calendar"
import {
  BellIcon,
  HexagonIcon,
  PlusIcon,
  MailIcon,
  SearchIcon,
  TargetIcon,
  CalendarIcon,
  ArchiveIcon,
  InboxIcon,
} from "vue-feather-icons"

export default {
  auth: true,
  components: {
    draggable,
    TaskTag,
    VCalendar,
    Task,
    BellIcon,
    HexagonIcon,
    MailIcon,
    PlusIcon,
    SearchIcon,
    TargetIcon,
    CalendarIcon,
    ArchiveIcon,
    InboxIcon,
  },
  computed: {
    tasks() {
      return this.$store.state.task.tasks
    },
    tags() {
      return this.$store.state.task.tags
    },
  },
  data() {
    return {
      attrs: [
        {
          highlight: {
            start: { fillMode: "light" },
            base: { fillMode: "light" },
            end: { fillMode: "light" },
          },
          dates: { start: new Date(2022, 1, 4), end: new Date(2022, 1, 7) },
        },
      ],
      month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      weekday: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      startDate: new Date(),
      endDate: new Date(),
      columns: [],
      workList: {
        title: "WORK",
        lists: [
          {
            color: "red",
            text: "clubhouse",
          },
          {
            color: "#39cb5c",
            text: "dkr-webinar",
          },
          {
            color: "#f6ac6d",
            text: "english",
          },
          {
            color: "blue",
            text: "job-posting",
          },
          {
            color: "#a3a832",
            text: "talks",
          },
          {
            color: "blue",
            text: "uxui_design",
          },
        ],
      },
      youtube: {
        title: "YOUTUBE",
        lists: [
          {
            color: "#39cb5c",
            text: "All",
          },
        ],
      },
      website: {
        title: "WEBSITE",
        lists: [
          {
            color: "#a3a832",
            text: "clubhouse",
          },
          {
            color: "#f6ac6d",
            text: "dkr-webinar",
          },
        ],
      },
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
  destroyed() {
    document.getElementById("task-row").removeEventListener("scroll", this.checkDates)
  },
  async beforeMount() {
    this.startDate.setDate(this.startDate.getUTCDate() - 7)
    this.endDate.setDate(this.endDate.getUTCDate() + 7)
    for (var d = this.startDate; d <= this.endDate; d.setDate(d.getUTCDate() + 1)) {
      this.columns.push({
        title: this.weekday[d.getDay()],
        date: new Date(d),
      })
    }
    this.startDate.setDate(this.startDate.getUTCDate() - 15)
    await this.$store.dispatch("task/getTasks", {
      startDate: this.startDate,
      endDate: this.endDate,
    })
    await this.$store.dispatch("task/getTaskTags")
  },
  mounted() {
    var todaysDate = new Date()
    var taskIdToScroll = 'task-column-' +todaysDate.getFullYear() + '-' +(todaysDate.getMonth() < 10 ? 0 : '')+(todaysDate.getMonth()+1) + '-' +todaysDate.getUTCDate()
    document.getElementById("task-row").addEventListener("scroll", this.checkDates)
    document.getElementById("task-row").scrollLeft = document.getElementById(taskIdToScroll).offsetLeft-275
  },
  methods: {
    updateTaskDrop(event) {
      this.$store.dispatch("task/updateDate", {
        task: this.tasks.find((task) => task.id == event.item.id),
        newDate: event.to.id,
      })
    },
    filterDateTasks(columnDate, task) {
      var splitColumnDate = columnDate.split("-")
      var newColumnDate = splitColumnDate[0] + "-" + (parseInt(splitColumnDate[1]) + 1 < 10 ? "0" : "") + (parseInt(splitColumnDate[1]) + 1) + "-" + (splitColumnDate[2] < 10 ? "0" : "") + splitColumnDate[2]

      return task.date.substr(0, 10) == newColumnDate
    },
    async signOut() {
      await this.$auth.logout()
    },
    checkDates(event) {
      if (document.getElementById("task-row").scrollLeft == 0) {
        var newStartDate = this.columns[0].date
        newStartDate.setDate(newStartDate.getUTCDate() - 7)
        var tempArray = []
        for (var d = newStartDate; d < this.startDate; d.setDate(d.getUTCDate() + 1)) {
          tempArray.push({
            title: this.weekday[d.getDay()],
            date: new Date(d),
          })
        }
        this.columns = tempArray.concat(this.columns)
        document.getElementById("task-row").scrollLeft = 7*250
        this.$store.dispatch("task/getTasks", {
          startDate: this.columns[0].date,
          endDate: this.startDate,
        })
        this.startDate.setDate(this.startDate.getUTCDate() - 7)
      } else if (document.getElementById("task-row").scrollLeft + document.getElementById("task-row").offsetWidth == document.getElementById("task-row").scrollWidth) {
        var newEndDate
        newEndDate = this.endDate
        newEndDate.setDate(newEndDate.getUTCDate() + 7)
        for (var d = this.endDate; d <= newEndDate; d.setDate(d.getUTCDate() + 1)) {
          this.columns.push({
            title: this.weekday[d.getDay()],
            date: new Date(d),
          })
        }
        console.log("Load 7 new days")
      }
    }
  }
}
</script>