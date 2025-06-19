import 'https://cdn.jsdelivr.net/npm/echarts@5.6.0/dist/echarts.min.js'

const chartDonut = echarts.init(document.getElementById('chartDonut'))

const optionDonut = {
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
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    show: false,
    top: '50%',
    // left: 'center',
  },
  series: [
    {
      name: 'Courses',
      type: 'pie',
      radius: ['30%', '100%'],
      avoidLabelOverlap: false,
      label: {
        show: true,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold',
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

      color: ['#9d73ff70', '#9d73ff'],
    },
  ],
}

// Display the chart using the configuration items and data just specified.
chartDonut.setOption(optionDonut)
// ---------------------------------------------------------

const chartHorizontalBar = echarts.init(
  document.getElementById('chartHorizontalBar')
)

// Specify the configuration items and data for the chart
const optionsHorizontalBar = {
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
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01],
  },
  yAxis: {
    type: 'category',
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
      data: [2, 5, 3, 8, 7, 6, 12, 9, 11, 10, 15, 14, 13, 16, 18, 20, 22],
      itemStyle: {
        color: '#9d73ff',
      },
      emphasis: {
        itemStyle: {
          color: '#adfe0080',
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

// Display the chart using the configuration items and data just specified.
chartHorizontalBar.setOption(optionsHorizontalBar)

// ---------------------------------------------------------

const chartByAcademy = echarts.init(document.getElementById('chartByAcademy'))

// Specify the configuration items and data for the chart
const optionsByAcademy = {
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
  axisLine: {
    show: false,
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    axisLabel: {
      rotate: 90,
      fontSize: 14,
      color: 'white',
    },
    lineStyle: {
      opacity: 0,
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
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, 0.01],
  },
  series: [
    {
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)',
      },
      data: [8, 12, 7, 3, 5, 6, 4, 10, 9, 2, 11, 1, 13],
      itemStyle: {
        color: '#9d73ff',
      },
      emphasis: {
        itemStyle: {
          color: '#adfe0080',
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

// Display the chart using the configuration items and data just specified.
chartByAcademy.setOption(optionsByAcademy)
