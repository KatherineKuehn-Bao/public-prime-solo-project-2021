import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';




const LocationChart = () => {

    // Get ingredients from the store
    const ingredients = useSelector(store => store.ingredients);


    //create DATA from the DAtabase 
    let fridge = [];
    let freezer = [];
    let pantry = [];
    let fresh = [];


    for (let ingredient = 0; ingredient < ingredients.length; ingredient++) {
        if (ingredient.location_id === 'fridge') {
            fridge.push(ingredient)
        }
    
    }
    console.log('fridge', fridge);
    

    //Not quite what we need 
    // let location = ingredients.map(ingredient =>
    //     ingredient.location_id);

    // console.log('location', location);


    return (
        <div >
            <Doughnut
                data={{
                    labels: ['Fridge', 'Freezer', 'Pantry', ' Fresh'],
                    datasets: [
                        {
                            label: 'types of foods',
                            data: [fridge, freezer, pantry, fresh],
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
export default LocationChart;