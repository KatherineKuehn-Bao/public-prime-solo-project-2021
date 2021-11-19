import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';







const BarChart = () => {
    return (
        <div >
            <Doughnut
                data={{
                    labels: ['Fresh', 'Fridge', 'Freezer', 'Pantry'],
                    datasets: [
                        {
                            label: 'types of foods',
                            data: [12, 19, 3, 5],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',

                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                            ],
                            borderWidth: 1,
                            hoverOffset: 4
                        }]
                }}
                height={300}
                width={400}
                options={{
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                        },
                        title: {
                            display: true,
                            text: 'Locations of Foods ',
                        },
                    },
                }}
            />

        </div>
    )
}
export default BarChart;