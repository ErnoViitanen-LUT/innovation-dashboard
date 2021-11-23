<template>
  <div id="app">
    <b-container>
      <b-row lg="1">
        <b-col>
          <b-card>
            <b-card-text> <h2 class="card-title">Water Usage Dashboard</h2> </b-card-text>
            <b-card-text class="italic">{{ randomQuotation }}</b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" lg="4">
          <card v-if="faucets[0]" :title="`Bathroom`" :text-large="faucets[0].dailyUsage.toFixed(3) + ' litres'"></card>
        </b-col>
        <b-col md="6" lg="4">
          <card v-if="faucets[1]" :title="`Kitchen`" :text-large="faucets[1].dailyUsage.toFixed(3) + ' litres'"></card>
        </b-col>
        <b-col md="6" lg="4">
          <card
            v-if="faucets[2]"
            :title="`Laundry Room`"
            :text-large="faucets[2].dailyUsage.toFixed(3) + ' litres'"
          ></card>
        </b-col>
        <b-col md="6" lg="4">
          <card :title="`Daily usage`" :text-large="totalDailyUsage + ' litres'"></card>
        </b-col>
        <b-col md="6" lg="4">
          <card :title="`Daily cost`" :text-large="dailyCost + ' €'"></card>
        </b-col>
        <b-col md="6" lg="4">
          <card :title="`Monthly cost (forecast)`" :text-large="monthlyCost + ' €'"></card>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12" lg="4">
          <b-card><BarChart :chartData="dailyData" :options="dailyOptions" /></b-card>
        </b-col>
        <b-col md="6" lg="4">
          <b-card><LineChart :chartData="dataMixed" :options="weeklyOptions" /></b-card
        ></b-col>
        <b-col md="6" lg="4">
          <b-card><PieChart :chartData="pieData" :options="pieOptions" /></b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12" lg="12">
          <b-card><BarChart :chartData="monthlyData" :options="monthlyOptions" /></b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import LineChart from './components/LineChart.vue'
import BarChart from './components/BarChart.vue'
import PieChart from './components/PieChart.vue'
import DoughnutChart from './components/DoughnutChart.vue'
import List from './components/List.vue'
import Card from './components/Card.vue'
import FileMixed from './assets/mixed.json'
import FileFaucet1 from './assets/faucet1.json'
import FileFaucet2 from './assets/faucet2.json'
import FileFaucet3 from './assets/faucet3.json'

export default {
  name: 'App',
  components: {
    LineChart,
    BarChart,
    DoughnutChart,
    PieChart,
    List,
    Card
  },
  data() {
    return {
      quotations: [
        'Thousands have lived without love, not one without water. – W.H.Auden',
        'No Water. No Life. No Blue. No Green. – Sylvia Earle',
        'Water is Life. Don’t Waste It.',
        'Pure Water is the World’s First and Foremost Medicine. – Slovakian Proverb',
        'Water is Life and Clean Water is Means Health. – Audrey Hepburn',
        'Water is the driving force of all nature. – Leonardo da Vinci',
        'When the well is dry, we’ll know the worth of water. – Benjamin Franklin',
        'There is a thin line between using water and wasting water.'
      ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      dataMixed: FileMixed,
      cubicCost: 4.2,
      faucets: [],

      weeklyOptions: {
        title: {
          display: true,
          text: 'Weekly Usage (litres)'
        },

        scales: {
          yAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              stacked: true,
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      },

      dailyOptions: {
        title: {
          display: true,
          text: 'Daily Usage (litres)'
        },

        scales: {
          yAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              stacked: true,
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      },

      monthlyOptions: {
        title: {
          display: true,
          text: 'Monthly Usage (litres)'
        },

        scales: {
          yAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              stacked: true,
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      },

      pieOptions: {
        title: {
          display: true,
          text: 'Daily Room Comparison (litres)'
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.sm
    },
    dailyData() {
      if (this.faucets.length === 3) {
        //let mydata = this.faucets[0].weeklyUsage.push(this.faucets[0].dailyUsage)

        //mydata.splice(6, 1, this.faucets[0].dailyUsage)
        //console.log(mydata)
        let data = {
          labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          scales: {
            x: {
              stacked: true
            },
            y: {
              stacked: true
            }
          },
          datasets: [
            {
              backgroundColor: this.backgroundColor[0],
              borderColor: this.borderColor[0],
              borderWidth: 1,
              label: this.faucets[0].name,
              data: this.faucets[0].weeklyUsage
            },
            {
              backgroundColor: this.backgroundColor[1],
              borderColor: this.borderColor[1],
              borderWidth: 1,
              label: this.faucets[1].name,
              data: this.faucets[1].weeklyUsage
            },
            {
              backgroundColor: this.backgroundColor[3],
              borderColor: this.borderColor[3],
              borderWidth: 1,
              label: this.faucets[2].name,
              data: this.faucets[2].weeklyUsage
            }
          ]
        }
        return data
      }
      return {}
    },

    monthlyData() {
      if (this.faucets.length === 3) {
        let data = {
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'November',
            'December'
          ],
          scales: {
            x: {
              stacked: true
            },
            y: {
              stacked: true
            }
          },
          datasets: [
            {
              backgroundColor: this.backgroundColor[4],
              borderColor: this.borderColor[4],
              borderWidth: 1,
              label: this.faucets[0].name,
              data: this.faucets[0].monthlyUsage
            },
            {
              backgroundColor: this.backgroundColor[2],
              borderColor: this.borderColor[2],
              borderWidth: 1,
              label: this.faucets[1].name,
              data: this.faucets[1].monthlyUsage
            },
            {
              backgroundColor: this.backgroundColor[3],
              borderColor: this.borderColor[3],
              borderWidth: 1,
              label: this.faucets[2].name,
              data: this.faucets[2].monthlyUsage
            }
          ]
        }
        return data
      }
      return {}
    },
    pieData() {
      if (this.faucets.length === 3) {
        let data = {
          labels: [this.faucets[0].name, this.faucets[1].name, this.faucets[2].name],
          datasets: [
            {
              label: 'My First Dataset',
              data: [this.faucets[0].dailyUsage, this.faucets[1].dailyUsage, this.faucets[2].dailyUsage],
              backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
              hoverOffset: 4
            }
          ]
        }
        return data
      }
      return {}
    },
    randomQuotation() {
      return this.quotations[Math.floor(Math.random() * this.quotations.length)]
    },

    totalDailyUsage() {
      let total = 0
      this.faucets.forEach((faucet) => {
        total += faucet.dailyUsage
      })
      return total.toFixed(3)
    },
    dailyCost() {
      let total = (this.totalDailyUsage / 1000) * this.cubicCost
      return total.toFixed(2)
    },
    monthlyCost() {
      let total = this.dailyCost * 30
      return total.toFixed(2)
    }
  },
  mounted() {
    this.fillData()
    setInterval(() => {
      this.openFaucet(this.faucets[Math.floor(Math.random() * this.faucets.length)])
    }, 5000)

    setInterval(() => {
      this.runFaucets()
    }, 500)
  },
  methods: {
    runFaucets() {
      this.faucets.forEach((faucet) => {
        if (faucet.running) {
          faucet.dailyUsage += 0.8
        }
      })
    },
    openFaucet(faucet) {
      if (faucet.running === false) {
        faucet.running = true
        let timeout = Math.floor(Math.random() * 10)
        setTimeout(() => {
          faucet.running = false
        }, timeout * 1000)
      }
    },
    simulateRandom() {
      let j = Math.floor(Math.random() * 3)
      let k = Math.floor(Math.random() * 3)

      this.faucets[i].statuslist[j].status = ['danger', 'success', 'warning'][k]
      if (this.faucets[i].statuslist[j].status === 'success') this.resolvedIncidentsCount++
      if (this.isSimulating) setTimeout(this.simulateRandom, 300)
    },
    fillData() {
      this.faucets = []
      this.faucets.push(FileFaucet1)
      this.faucets.push(FileFaucet2)
      this.faucets.push(FileFaucet3)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.card {
  width: 100%;
  margin-bottom: 20px;
}
</style>
