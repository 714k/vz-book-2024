import 'https://cdn.jsdelivr.net/npm/echarts@5.6.0/dist/echarts.min.js'

function generateRandomData(startYear, endYear, min = 1, max = 10) {
  const data = []
  for (let year = startYear; year <= endYear; year++) {
    const value = Math.floor(Math.random() * (max - min + 1)) + min
    data.push({ year, value })
  }
  return data
}

function generateGrowingData(startYear, endYear, startValue = 4, maxStep = 2) {
  const data = []
  let currentValue = startValue

  for (let year = startYear; year <= endYear; year++) {
    // Randomly increase value within a step range
    currentValue += Math.floor(Math.random() * maxStep) + 1
    data.push({ year, value: currentValue })
  }

  return data
}

function generateYears(start, end) {
  const years = []
  for (let year = start; year <= end; year++) {
    years.push(year)
  }
  return years
}

const growingData = generateGrowingData(2009, 2025)
const randomData = generateRandomData(2009, 2025)
const data = generateYears('09', '25')

const mainColorCharts = '#9d73ff'

function createPattern(color = mainColorCharts) {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const symbols = ['#', '@', '%', '=', '+', '*', '-', ':', '.', ' ']
  const step = 14
  canvas.width = 70
  canvas.height = 70
  ctx.fillStyle = color
  ctx.font = `${step}px monospace`

  for (let i = 0; i < canvas.height / step; i++) {
    for (let j = 0; j < canvas.width / step; j++) {
      const char = symbols[Math.floor(Math.random() * symbols.length)]
      ctx.fillText(char, j * step, i * step + step) // Baseline correction for vertical alignment
    }
  }

  return {
    image: canvas,
    repeat: 'repeat',
  }
}

const grid = {
  left: '10px',
  right: '10px',
  bottom: '90px',
  containLabel: true,
}

const allCoursesChart = echarts.init(document.getElementById('allCoursesChart'))
const allCoursesOptions = {
  title: {
    text: 'All Courses',
    itemStyle: {
      color: 'white',
    },
    textStyle: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
    },
    top: 0,
    padding: [0, 0, 40, 0],
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    show: false,
  },
  grid: {
    top: '10px',
    left: '10px',
    right: '10px',
    bottom: '60px',
    containLabel: true,
  },
  series: [
    {
      name: 'Courses',
      type: 'pie',
      radius: ['40%', '90%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold',
        },
        itemStyle: {
          color: mainColorCharts,
        },
      },
      labelLine: {
        show: true,
      },
      data: [
        {
          value: 10,
          name: 'In progress',
          label: {
            color: '#fff',
          },
        },
        {
          value: 54,
          name: 'Completed',
          label: {
            name: 'Completed',
            color: '#fff',
          },
          labelLine: {
            show: false,
          },
        },
      ],
      color: [createPattern(`${mainColorCharts}70`), createPattern()],
    },
  ],
}
allCoursesChart.setOption(allCoursesOptions)
// ---------------------------------------------------------

const coursesByYearChart = echarts.init(
  document.getElementById('coursesByYearChart')
)
const coursesByYearOptions = {
  title: {
    text: 'Courses By Year',
    itemStyle: {
      color: 'white',
    },
    textStyle: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
    },
    left: 'center',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {},
  grid,
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01],
    splitLine: {
      show: false,
    },
  },
  yAxis: {
    type: 'category',
    axisLabel: {
      color: 'white',
    },
    data: [
      '2009',
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
      '2019',
      '2020',
      '2021',
      '2022',
      '2023',
      '2024',
      '2025',
    ],
  },
  series: [
    {
      //   name: 'Courses by Year',
      type: 'bar',
      barWidth: 20,
      data: [2, 5, 3, 8, 7, 6, 12, 9, 11, 10, 15, 14, 13, 16, 18, 20, 22],
      itemStyle: {
        // color: '#9d73ff',
        color: createPattern(),
      },
      emphasis: {
        itemStyle: {
          color: mainColorCharts,
        },
      },
      link: {
        symbol: 'arrow',
        symbolSize: 10,
        color: '#33488490',
      },
    },
  ],
}
coursesByYearChart.setOption(coursesByYearOptions)

// const data = []
// for (let i = 0; i < 10; ++i) {
//   data.push(Math.round(Math.random() * 200))
// }
// const raceBar = {
//   xAxis: {
//     max: 'dataMax',
//   },
//   yAxis: {
//     type: 'category',
//     data: [
//       'Linkedin Learning',
//       'Coursera',
//       'Udacity',
//       'Codecademy',
//       'Glbant University',
//       'Udemy',
//       'TutsPlus',
//       'Microsoft Learn',
//       'UNSW',
//       'CTIC',
//     ],
//     inverse: true,
//     animationDuration: 300,
//     animationDurationUpdate: 300,
//     max: 2, // only the largest 3 bars will be displayed
//   },
//   series: [
//     {
//       realtimeSort: true,
//       name: 'X',
//       type: 'bar',
//       data: data,
//       label: {
//         show: true,
//         position: 'right',
//         valueAnimation: true,
//       },
//     },
//   ],
//   legend: {
//     show: true,
//   },
//   animationDuration: 0,
//   animationDurationUpdate: 3000,
//   animationEasing: 'linear',
//   animationEasingUpdate: 'linear',
// }
// function run() {
//   for (var i = 0; i < data.length; ++i) {
//     if (Math.random() > 0.9) {
//       data[i] += Math.round(Math.random() * 2000)
//     } else {
//       data[i] += Math.round(Math.random() * 200)
//     }
//   }

//   if (coursesByYearChart) {
//     console.log('Updating coursesByYearChart with new data:', data)
//     console.log(
//       'Updating coursesByYearChart with new coursesByYearChart:',
//       coursesByYearChart
//     )
//     coursesByYearChart.setOption(raceBar)
//   }
// }
// setTimeout(function () {
//   run()
// }, 0)
// setInterval(function () {
//   run()
// }, 1000)

// coursesByYearChart.setOption(raceBar)

// ---------------------------------------------------------

const coursesByAcademyChart = echarts.init(
  document.getElementById('coursesByAcademyChart')
)
const coursesByAcademyOptions = {
  title: {
    text: 'Courses By Academy',
    itemStyle: {
      color: 'white',
    },
    textStyle: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
    },
    left: 'center',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {},
  grid,
  xAxis: {
    type: 'category',
    axisLabel: {
      rotate: 90,
      fontSize: 14,
      color: 'white',
    },
    data: [
      'LinkedIn Learning',
      'Coursera',
      'Udacity',
      'Codecademy',
      'Udemy',
      'Globant University',
      'TutsPlus',
      'Microsoft Learn',
      'UNSW',
      'CTIC',
    ],
    inverse: true,
    animationDuration: 300,
    animationDurationUpdate: 300,
    // max: 2, // only the largest 3 bars will be displayed
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, 0.01],
    splitLine: {
      show: false,
    },
  },
  series: [
    {
      type: 'bar',
      barWidth: 14,
      // realtimeSort: true,
      showBackground: false,
      // backgroundStyle: {
      //   color: 'rgba(180, 180, 180, 0.2)',
      // },
      data: [8, 12, 7, 3, 5, 6, 4, 15, 9, 11],
      // label: {
      //   // show: true,
      //   position: 'right',
      //   // valueAnimation: true,
      // },
      itemStyle: {
        // color: '#9d73ff',
        color: createPattern(),
      },
      emphasis: {
        itemStyle: {
          color: mainColorCharts,
        },
      },
      link: {
        symbol: 'arrow',
        symbolSize: 10,
        color: '#33488490',
      },
    },
  ],
}
coursesByAcademyChart.setOption(coursesByAcademyOptions)

const chartByType = echarts.init(document.getElementById('chartByType'))

const optionsByType = {
  title: {
    text: 'Courses By Year',
    itemStyle: {
      color: 'white',
    },
    textStyle: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
    },
    left: 'center',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#c80000',
      },
    },
  },
  legend: {
    show: false,
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  grid,
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisTick: {
        show: true,
      },
      axisLabel: {
        color: 'white',
      },
      data,
    },
  ],
  yAxis: [
    {
      type: 'value',
      axisTick: {
        show: true,
      },
      splitLine: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: 'In person',
      type: 'line',
      stack: 'Total',
      areaStyle: {
        color: createPattern(mainColorCharts),
      },
      itemStyle: {
        color: mainColorCharts,
      },
      emphasis: {
        focus: 'series',
      },
      data: randomData,
    },
    {
      name: 'Online',
      type: 'line',
      stack: 'Total',
      areaStyle: {
        color: createPattern(mainColorCharts),
      },
      itemStyle: {
        color: mainColorCharts,
      },
      emphasis: {
        focus: 'series',
      },
      data: growingData,
    },
  ],
}

chartByType.setOption(optionsByType)
