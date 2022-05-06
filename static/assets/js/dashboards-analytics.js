/**
 * Dashboard Analytics
 */

'use strict';
// import * as echarts from 'echarts'

(function () {
  let cardColor, headingColor, axisColor, shadeColor, borderColor;

  cardColor = config.colors.white;
  headingColor = config.colors.headingColor;
  axisColor = config.colors.axisColor;
  borderColor = config.colors.borderColor;

  // Total Revenue Report Chart - Bar Chart
  // --------------------------------------------------------------------
  const barChartEl = document.querySelector('#barChart');

  const graficoPadron = echarts.init(barChartEl)



  const configuraciones = {

    tooltip: {},
    legend: {
      data: ['Hombres', 'Mujeres']
    },

    dataset: [{
      source: ['']
    }],




    xAxis: {
      data: ['[18-25)', '[25-32)', '[32-40)', '[47-54)', '[54-61)', '[61-68)', '[68-75)', '[75-(+82)]'],
      axisLabel: {
        rotate: 30,
        fontSize: 9
      },


    },
    yAxis: {
      min: 0,
      max: 100,
      name: 'Porcentaje %',
      position: 'left',
      align: 'center',
      axisLabel: {
        rotate: 30,
        fontSize: 9
      },

    },
    series: [
      {
        name: 'Hombres',
        type: 'bar',
        data: [48, 49, 52, 51, 55, 51, 47, 43]
      },
      {
        name: 'Mujeres',
        type: 'bar',
        data: [52, 51, 48, 49, 45, 49, 53, 57]
      }

    ]
  }

  graficoPadron.setOption(configuraciones)
  window.addEventListener('resize', graficoPadron.resize);




  // Growth Chart - Radial Bar Chart
  // --------------------------------------------------------------------
  const growthChartEl = document.querySelector('#growthChart'),
    growthChartOptions = {
      series: [62],
      labels: ['Participación'],
      chart: {
        height: 240,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          size: 150,
          offsetY: 10,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '55%'
          },
          track: {
            background: cardColor,
            strokeWidth: '100%'
          },
          dataLabels: {
            name: {
              offsetY: 15,
              color: headingColor,
              fontSize: '15px',
              fontWeight: '600',
              fontFamily: 'Public Sans'
            },
            value: {
              offsetY: -25,
              color: headingColor,
              fontSize: '22px',
              fontWeight: '500',
              fontFamily: 'Public Sans'
            }
          }
        }
      },
      colors: [config.colors.primary],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          shadeIntensity: 0.5,
          gradientToColors: [config.colors.primary],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 0.6,
          stops: [30, 70, 100]
        }
      },
      stroke: {
        dashArray: 5
      },
      grid: {
        padding: {
          top: -35,
          bottom: -10
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      }
    };
  if (typeof growthChartEl !== undefined && growthChartEl !== null) {
    const growthChart = new ApexCharts(growthChartEl, growthChartOptions);
    growthChart.render();
  }

  // Profit Report Line Chart
  // --------------------------------------------------------------------
  const profileReportChartEl = document.querySelector('#profileReportChart'),
    profileReportChartConfig = {
      chart: {
        height: 80,
        // width: 175,
        type: 'line',
        toolbar: {
          show: false
        },
        dropShadow: {
          enabled: true,
          top: 10,
          left: 5,
          blur: 3,
          color: config.colors.warning,
          opacity: 0.15
        },
        sparkline: {
          enabled: true
        }
      },
      grid: {
        show: false,
        padding: {
          right: 8
        }
      },
      colors: [config.colors.warning],
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      series: [
        {
          data: [110, 270, 145, 245, 205, 285]
        }
      ],
      xaxis: {
        show: false,
        lines: {
          show: false
        },
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        show: false
      }
    };
  if (typeof profileReportChartEl !== undefined && profileReportChartEl !== null) {
    const profileReportChart = new ApexCharts(profileReportChartEl, profileReportChartConfig);
    profileReportChart.render();
  }

  // Order Statistics Chart
  // --------------------------------------------------------------------
  const chartOrderStatistics = document.querySelector('#orderStatisticsChart'),
    orderChartConfig = {
      chart: {
        height: 165,
        width: 130,
        type: 'donut'
      },
      labels: ['Alto', 'Medio-Alto', 'Medio', 'Bajo'],
      series: [5, 23, 46, 26],
      colors: [config.colors.success, config.colors.primary, config.colors.info, config.colors.warning],
      stroke: {
        width: 5,
        colors: cardColor
      },
      dataLabels: {
        enabled: false,
        formatter: function (val, opt) {
          return parseInt(val) + '%';
        }
      },
      legend: {
        show: false
      },
      grid: {
        padding: {
          top: 0,
          bottom: 0,
          right: 15
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%',
            labels: {
              show: true,
              value: {
                fontSize: '1.5rem',
                fontFamily: 'Public Sans',
                color: headingColor,
                offsetY: -15,
                formatter: function (val) {
                  return parseInt(val) + '%';
                }
              },
              name: {
                offsetY: 20,
                fontFamily: 'Public Sans'
              },
              total: {
                show: true,
                fontSize: '10px',
                color: axisColor,
                label: 'Familias',
                formatter: function (w) {
                  return '786k';
                }
              }
            }
          }
        }
      }
    };
  if (typeof chartOrderStatistics !== undefined && chartOrderStatistics !== null) {
    const statisticsChart = new ApexCharts(chartOrderStatistics, orderChartConfig);
    statisticsChart.render();
  }


  const mapaCalor = document.querySelector('#mapaCalor');

  let graficaHoras = echarts.init(mapaCalor, null, {
    renderer: 'canvas',
    useDirtyRect: false
  });
  let app = {};

  let option;

  // prettier-ignore
  const hours = [
    '0', '1', '2', '3', '4', '5', '6',
    '7', '8', '9', '10', '11',
    '12', '13', '14', '15', '16', '17',
    '18', '19', '20', '21', '22', '23'
  ];
  // prettier-ignore
  const days = [
    'Dom', 'Lun', 'Mar',
    'Mie', 'Jue', 'Vie', 'Sab'
  ];
  // prettier-ignore
  const data = [[0, 0, 1], [1, 0, 1], [2, 0, 2], [3, 0, 1], [4, 0, 1], [5, 0, 1], [6, 0, 2], [6, 0, 3], [7, 0, 3], [8, 0, 2], [9, 0, 3], [10, 0, 4], [11, 0, 3], [12, 0, 4], [13, 0, 4], [14, 0, 3], [15, 0, 5], [16, 0, 5], [17, 0, 6], [18, 0, 7], [19, 0, 6], [20, 0, 7], [21, 0, 6], [22, 0, 7], [23, 0, 5],
  [0, 1, 1], [1, 1, 1], [2, 1, 1], [3, 1, 1], [4, 1, 2], [5, 1, 5], [6, 1, 5], [7, 1, 6], [8, 1, 6], [9, 1, 3], [10, 1, 2], [11, 1, 2], [12, 1, 4], [13, 1, 3], [14, 1, 6], [15, 1, 7], [16, 1, 5], [17, 1, 3], [18, 1, 6], [19, 1, 7], [20, 1, 8], [21, 1, 8], [22, 1, 6], [23, 1, 1],
  [0, 2, 1], [1, 2, 1], [2, 2, 1], [3, 2, 1], [4, 2, 2], [5, 2, 5], [6, 2, 5], [7, 2, 6], [8, 2, 6], [9, 2, 3], [10, 2, 2], [11, 2, 2], [12, 2, 4], [13, 2, 3], [14, 2, 6], [15, 2, 7], [16, 2, 5], [17, 2, 3], [18, 2, 6], [19, 2, 7], [20, 2, 8], [21, 2, 8], [22, 2, 6], [23, 2, 1],
  [0, 3, 1], [1, 3, 2], [2, 3, 2], [3, 3, 1], [4, 3, 1], [5, 3, 6], [6, 3, 5], [7, 3, 8], [8, 3, 5], [9, 3, 4], [10, 3, 2], [11, 3, 5], [12, 3, 4], [13, 3, 3], [14, 3, 5], [15, 3, 7], [16, 3, 7], [17, 3, 2], [18, 3, 6], [19, 3, 9], [20, 3, 4], [21, 3, 6], [22, 3, 5], [23, 3, 1],
  [0, 4, 1], [1, 4, 2], [2, 4, 2], [3, 4, 1], [4, 4, 1], [5, 4, 2], [6, 4, 4], [7, 4, 5], [8, 4, 3], [9, 4, 6], [10, 4, 3], [11, 4, 3], [12, 4, 3], [13, 4, 5], [14, 4, 6], [15, 4, 7], [16, 4, 8], [17, 4, 6], [18, 4, 7], [19, 4, 9], [20, 4, 8], [21, 4, 8], [22, 4, 10], [23, 4, 9],
  [0, 5, 6], [1, 5, 7], [2, 5, 3], [3, 5, 2], [4, 5, 1], [5, 5, 1], [6, 5, 3], [7, 5, 4], [8, 5, 4], [9, 5, 6], [10, 5, 5], [11, 5, 3], [12, 5, 2], [13, 5, 2], [14, 5, 4], [15, 5, 2], [16, 5, 7], [17, 5, 8], [18, 5, 6], [19, 5, 9], [20, 5, 8], [21, 5, 6], [22, 5, 7], [23, 5, 8],
  [0, 6, 7], [1, 6, 7], [2, 6, 5], [3, 6, 4], [4, 6, 5], [5, 6, 3], [6, 6, 2], [7, 6, 4], [8, 6, 3], [9, 6, 5], [10, 6, 4], [11, 6, 3], [12, 6, 4], [13, 6, 5], [14, 6, 6], [15, 6, 7], [16, 6, 8], [17, 6, 8], [18, 6, 7], [19, 6, 10], [20, 6, 10], [21, 6, 8], [22, 6, 9], [23, 6, 9],]
  //   return [item[1], item[0], item[2] || '-'];
  // });
  console.log(data.length)
  option = {
    tooltip: {
      position: 'top'
    },
    grid: {
      height: '50%',
      top: '10%'
    },
    xAxis: {
      type: 'category',
      data: hours,
      splitArea: {
        show: true
      }
    },
    yAxis: {
      type: 'category',
      data: days,
      splitArea: {
        show: true
      }
    },
    visualMap: {
      min: 0,
      max: 10,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '15%'
    },
    series: [
      {
        name: 'Punch Card',
        type: 'heatmap',
        data: data,
        label: {
          show: true
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };


  if (option && typeof option === 'object') {
    graficaHoras.setOption(option);
  }

  // window.addEventListener('resize', graficaHoras.resize);



})();
