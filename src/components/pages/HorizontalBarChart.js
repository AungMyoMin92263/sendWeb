import React from 'react';

//barchart
import ReactApexChart from 'react-apexcharts';

const BarChart = () => {
    const [chartOptions, setChartOptions] = React.useState(
        {

            series: [{
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    }
                },
                dataLabels: {
                    style: {
                      colors: ['#FFF']
                    }
                },
                fill: {
                    colors: ['#E39435']
                },
                xaxis: {
                    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                        'United States', 'China', 'Germany'
                    ],
                }
            },
        }
    );
    return(
        <div id="chart">
        <ReactApexChart options={chartOptions.options} series={chartOptions.series} type="bar" height={350} />
    </div>
    );
}

export default BarChart;