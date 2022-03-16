<template>
  <div class="row">
    <div class="col-9 task-row" id="task-row">
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
            <button @click="newTask(column.date.getFullYear() + '-' +(column.date.getMonth() < 10 ? 0 : '')+(column.date.getMonth()+1) + '-' +column.date.getUTCDate())" class="add-task">Add a Task</button>
          </div>
          <draggable :id="column.date.getFullYear() + '-' +(column.date.getMonth() < 10 ? 0 : '')+(column.date.getMonth()+1) + '-' +column.date.getUTCDate()" @end="updateTaskDrop" :list="tasks.filter(filterDateTasks.bind(this, column.date.getFullYear() + '-' +column.date.getMonth() + '-' +column.date.getUTCDate()))" :animation="200" ghost-class="ghost-card" group="tasks.filter(filterDateTasks.bind(this, column.date.getFullYear() + '-' +column.date.getMonth() + '-' +column.date.getUTCDate()))">
            <Task v-for="task in tasks.filter(filterDateTasks.bind(this, column.date.getFullYear() + '-' + column.date.getMonth() + '-' + column.date.getUTCDate()))" :key="task.id" :task="task" :id="task.id" />
          </draggable>
        </div>
      </div>
    </div>
    <div class="col-3 d-flex">
      <div style="overflow: scroll; height: calc(100vh - 80px);" class="schedule me-3">
        <DailySchedule v-if="activeRightBar == 'calendar'" />
        <Tags v-if="activeRightBar == 'tags'" />
        <MailInbox v-if="activeRightBar == 'mail'" />
        <Goals v-if="activeRightBar == 'goals'" />
        <Archive v-if="activeRightBar == 'archive'" />
        <Backlog v-if="activeRightBar == 'backlog'" />
        <Search v-if="activeRightBar == 'search'" />
        <AddIntegration v-if="activeRightBar == 'addIntegration'" />
      </div>
      <div class="right-bar">
        <div class="icon-container d-flex blue-gradient flex-column align-items-center justify-content-center">
          <a href="#" @click="activeRightBar = 'calendar'" :class="{active: activeRightBar == 'calendar'}">
            <calendar-icon size="1x"></calendar-icon>
          </a>
          <a href="#" @click="activeRightBar = 'tags'" :class="{active: activeRightBar == 'tags'}">
            <hash-icon size="1x"></hash-icon>
          </a>
          <a href="#" @click="activeRightBar = 'mail'" :class="{active: activeRightBar == 'mail'}">
            <mail-icon size="1x"></mail-icon>
          </a>
          <a href="#" @click="activeRightBar = 'goals'" :class="{active: activeRightBar == 'goals'}">
            <target-icon size="1x"></target-icon>
          </a>
          <a href="#" @click="activeRightBar = 'backlog'" :class="{active: activeRightBar == 'backlog'}">
            <inbox-icon size="1x"></inbox-icon>
          </a>
          <a href="#" @click="activeRightBar = 'search'" :class="{active: activeRightBar == 'search'}">
            <search-icon size="1x"></search-icon>
          </a>
        </div>
        <div class="d-flex red-gradient flex-column align-items-center justify-content-center mt-1">
          <a href="#" class="add-integration" @click="activeRightBar = 'addIntegration'">
            <plus-icon size="1x"></plus-icon>
          </a>
        </div>
      </div>
    </div>
    <div class="modal fade" id="taskModal" tabindex="-1" aria-labelledby="taskModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header pt-4">
            <div class="item row w-100 container-fluid">
              <div class="col-3">
                <h5 class="modal-title col" id="taskModalLabel">{{ activeTask.title }}</h5>
              </div>
              <div class="col-6">
                <div class="subItem1 row">
                  <button type="button" class=" me-3 col btn btn-primary">Start: Mar 9</button>
                  <button type="button" class=" col-3 btn btn-outline-primary">Due</button>
                  <button type="button" class=" ms-3 col btn btn-outline-primary">Add subtaks</button>
                </div>
              </div>
              <div class="col">
                <div class="subItem2 ps-3 row h-100 align-items-center">
                  <div class="col-4">
                    <div style="background-color:rgba(255, 158, 44,0.07)" class="circle rounded-circle row jusify-content-center"><ListIcon class="align-self-center" stroke="#FF9E2C"/></div>
                  </div>
                  <div class="col-4">
                    <div style="background-color:rgba(96, 91, 255,0.05)" class="circle rounded-circle row jusify-content-center"><img class="align-self-center" src="~/assets/opt.png" alt=""> </div>
                  </div>
                  <div class="col-4">
                    <div style="background-color:rgba(231, 29, 54,0.05)" class="circle rounded-circle row jusify-content-center"><button type="button" class="btn-close align-self-center close" data-bs-dismiss="modal" aria-label="Close"></button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-body">{{ activeTask.description }}
            <div class="item1 container-fluid pb-4">
              <div class="row">
                <div class="form-check col align-self-center">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked>
                  <label class="form-check-label" for="flexCheckDefault">Prepare TuCalendi</label>
                </div>
                <div class="col-4">
                  <div class="row">
                    <div class="col-3">
                      <div style="background-color:rgba(16, 218, 70, 0.07)" class="circle rounded-circle row jusify-content-center"><PlayIcon class="m-auto" fill="#10DA46" stroke="#10DA46"/></div>
                    </div>
                    <div class="time col me-3"><p class=""><span class="row justify-content-center h6">Actual</span><span class="row justify-content-center">--:--</span></p></div>
                    <div class="time col"><p class=""><span class="row justify-content-center h6">Planned</span><span class="row justify-content-center">--:--</span></p></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item2">
              <div class="pb-3 container-fluid">
                <textarea class="form-control note pt-3" id="FormControlTextarea1" rows="3" placeholder=" + Notes"></textarea>
              </div>
            </div>
            <div class="item3 pb-2 container-fluid">
              <div class="row w-100 ms-0">
                <div class="col-1 ms-0 ps-0">
                  <div class="user ms-0 me-0 h-100 row justify-content-center"><img class="align-self-center" src="~assets/user2.png" alt=""></div>
                </div>
                <div class="col ps-0 pe-0">
                  <input type="text" class="form-control comment" id="exampleFormControlInput1" placeholder="Comment...">
                </div>
                <div class="col-1 me-0 pe-0">
                  <div class="save ms-2 row h-100 justify-content-center"><SendIcon class="align-self-center" size="2x"/></div>
                </div>
              </div>
            </div>
            <div class="item4 container-fluid pt-2">
              <p class="mb-0"><AnchorIcon stroke=" #605BFF" class="me-2" size="1x"/><span class="h6 me-2">Phillip Stemann created this</span><span>Mar 8, 7:41 AM</span></p>
              <p><span class="me-4"></span><span class="h6 me-2">Phillip Stemann moved this youtube</span><span>Mar 8, 7:41 AM</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable"
import DailySchedule from "../components/daily-schedule.vue"
import Tags from "../components/tags.vue"
import MailInbox from "../components/mail-inbox.vue"
import Goals from "../components/goals.vue"
import Backlog from "../components/backlog.vue"
import Search from "../components/search.vue"
import AddIntegration from "../components/add-integration.vue"
import Task from "../components/task.vue"
import {
  PlusIcon,
  MailIcon,
  SearchIcon,
  TargetIcon,
  CalendarIcon,
  HashIcon,
  InboxIcon,
  ListIcon,
  PlayIcon,
  SendIcon,
  AnchorIcon,
} from "vue-feather-icons"

export default {
  auth: true,
  components: {
    draggable,
    Task,
    MailIcon,
    PlusIcon,
    SearchIcon,
    TargetIcon,
    CalendarIcon,
    InboxIcon,
    HashIcon,
    ListIcon,
    PlayIcon,
    SendIcon,
    AnchorIcon,
    DailySchedule,
    MailInbox,
    Goals,
    Backlog,
    Tags,
    Search,
    AddIntegration,
  },
  computed: {
    tasks() {
      if(this.activeTag !== 0)
        return this.$store.state.task.tasks.filter(task => task.tag == this.activeTag)
      else
        return this.$store.state.task.tasks
    },
    activeTask() {
        return this.$store.state.task.activeTask
    },
  },
  data() {
    return {
      activeRightBar: 'calendar',
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
    document.getElementById("task-row").scrollLeft = document.getElementById(taskIdToScroll).offsetLeft
  },
  methods: {
    async newTask(date) {
      this.$store.commit("task/newTask", {date, newTask: true})
      await new Promise(r => setTimeout(r, 200))
      document.getElementById('new-task').focus()
    },
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
      } else if (document.getElementById("task-row").scrollLeft + document.getElementById("task-row").offsetWidth >= document.getElementById("task-row").scrollWidth) {
        this.endDate.setDate(this.endDate.getUTCDate() + 7)
        var newStartDate = new Date(this.columns[this.columns.length-1].date)
        newStartDate.setDate(newStartDate.getUTCDate() + 1)
        
        for (var d = newStartDate; d <= this.endDate; d.setDate(d.getUTCDate() + 1)) {
          this.columns.push({
            title: this.weekday[d.getDay()],
            date: new Date(d),
          })
        }

        document.getElementById("task-row").scrollLeft = (this.columns.length-8)*250
        this.$store.dispatch("task/getTasks", {
          startDate: this.columns[this.columns.length-7].date,
          endDate: this.endDate,
        })
      }
    }
  }
}
</script>