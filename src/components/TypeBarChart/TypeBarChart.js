import { Bar } from 'react-chartjs-2';
import React from 'react';
import { useSelector } from 'react-redux';


const TypeBarChart = () => {

    //get ingredients from the store
    const ingredients = useSelector((store) => store.ingredients);

let fruit = [];
let veggies = [];
let legumes =[];
let grains = [];
let processed = [];
let nutsSeeds = [];

for (let ingredient of ingredients){
    if(ingredient.food_type_id === 1){
        fruit.push(ingredient)
    } else if (ingredient.food_type_id === 2){
        veggies.push(ingredient)
    } else if ( ingredient.food_type_id === 3){
        legumes.push(ingredient)
    } else if (ingredient.food_type_id === 4){
        grains.push(ingredient)
    } else if (ingredient.food_type_id === 5){
        processed.push(ingredient)
    } else if (ingredient.food_type_id === 6){
        nutsSeeds.push(ingredient)
    }
} //end loop 

console.log('type', fruit, veggies, legumes, grains, processed, nutsSeeds);



    const data = {
        labels: ['Fruits', 'Vegetables', 'Legumes', 'Grains', 'Processed', 'Nuts & Seeds'],
        datasets: [
            {
                label: 'Types of Ingredients',
                data: [fruit.length, veggies.length, legumes.length, grains.length, processed.length, nutsSeeds.length],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
            bar: {
                borderWidth: 5,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Types of Foods',
            },
        },
    };

    return (
    <>
        <Bar data={data} options={options} />
    </>
    );
    
}

export default TypeBarChart;