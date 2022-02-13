<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">
        Left sidebar
        <div @click="signOut()">Sign out</div>
      </div>
      <div class="col-8 task-row" id="task-row">
          <div v-for="(column, index) in columns" :key="index" class="task-column">
            <p>{{column.title}}</p>
            <p>{{ column.date.getUTCDate() + ' ' +month[column.date.getMonth()] }}</p>
            <draggable :id="column.date.getFullYear() + '-' +(column.date.getMonth() < 10 ? 0 : '')+(column.date.getMonth()+1) + '-' +column.date.getUTCDate()" @end="updateTaskDrop" :list="tasks.filter(filterDateTasks.bind(this, column.date.getFullYear() + '-' +column.date.getMonth() + '-' +column.date.getUTCDate()))" :animation="200" ghost-class="ghost-card" group="tasks.filter(filterDateTasks.bind(this, column.date.getFullYear() + '-' +column.date.getMonth() + '-' +column.date.getUTCDate()))">
              <task-card
                v-for="(task) in tasks.filter(filterDateTasks.bind(this, column.date.getFullYear() + '-' +column.date.getMonth() + '-' +column.date.getUTCDate()))"
                :key="task.id"
                :task="task"
                :id="task.id"
              ></task-card>
            </draggable>
          </div>
      </div>
      <div class="col-2">
        Right sidebar
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable"
import TaskCard from "../components/task-card"
export default {
  auth: true,
  components: {
    TaskCard,
    draggable
  },
  computed: {
    tasks () {
      return this.$store.state.task.tasks
    },
  },
  data() {
    return {
      month: ["January","February","March","April","May","June","July","August","September","October","November","December"],
      weekday: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      startDate: new Date(),
      endDate: new Date(),
      columns: []
    }
  },
  destroyed () {
    document.getElementById('task-row').removeEventListener('scroll', this.checkDates)
  },
  async beforeMount() {
    this.startDate.setDate(this.startDate.getUTCDate()-7)
    this.endDate.setDate(this.endDate.getUTCDate()+7)
    for (var d = this.startDate; d <= this.endDate; d.setDate(d.getUTCDate() + 1)) {
        this.columns.push({
          title: this.weekday[d.getDay()],
          date: new Date(d)
        })
    }
    this.startDate.setDate(this.startDate.getUTCDate()-15)
    await this.$store.dispatch("task/getTasks", {
      startDate: this.startDate,
      endDate: this.endDate
    })
  },
  mounted() {
    document.getElementById('task-row').addEventListener('scroll', this.checkDates)
    document.getElementById('task-row').scrollLeft = 2310
  },
  methods: {
    updateTaskDrop(event) {
      this.$store.dispatch("task/update", {
        task: this.tasks.find(task => task.id == event.item.id),
        newDate: event.to.id
      })
    },
    filterDateTasks(columnDate, task) {
      var splitColumnDate = columnDate.split('-')
      var newColumnDate = splitColumnDate[0]+ '-' +((parseInt(splitColumnDate[1])+1) < 10 ? '0' : '') +(parseInt(splitColumnDate[1])+1)+ '-' +(splitColumnDate[2] < 10 ? '0' : '') +splitColumnDate[2]

      return task.date.substr(0,10) == newColumnDate
    },
    async signOut() {
      await this.$auth.logout()
    },
    checkDates(event) {
      if(document.getElementById('task-row').scrollLeft == 0) {
        console.log("Load 7 old days")
      } else if((document.getElementById('task-row').scrollLeft + document.getElementById('task-row').offsetWidth) == document.getElementById('task-row').scrollWidth) {
        console.log("Load 7 new days")
      }
    }
  }
}
</script>
<style>
  .task-row {
    overflow: scroll;
    white-space: nowrap;
  }
  .task-column {
    width: 300px;
    display: inline-block;
    vertical-align: top;
    margin-right: 30px;
  }
</style>