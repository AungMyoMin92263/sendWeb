import React from 'react';

//barchart
import ReactApexChart from 'react-apexcharts';

const RadialBarChart = () => {
    const [chartOptions, setChartOptions] = React.useState(
        {

            series: [70],
            options: {
              chart: {
                height: 350,
                type: 'radialBar',
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    size: '65.4%',
                  },
                //   track: {
                //     background: '#E39435'
                //   }
                fill: "#E39435",
                },
              },
              labels: ['Goal'],
            },
            dataLabels: {
                style: {
                  colors: ['#FFF']
                }
            },
            fill: {
                colors: ['#E39435'],
                type: 'gradient',
                    gradient: {
                        gradientToColors: ['#E39435'],
                        shadeIntensity: 1,
                        opacityFrom: 1,
                        opacityTo: 2,
                        stops: [0, 50, 100],
                        inverseColors: false
                    },
            }
        }
    );
    return(
        <div id="chart">
        <ReactApexChart options={chartOptions.options} series={chartOptions.series} type="radialBar" height={180} />
    </div>
    );
}

export default RadialBarChart;