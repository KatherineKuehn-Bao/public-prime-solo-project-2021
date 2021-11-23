import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';


const WasteGraph = () => {


    // Get ingredients from the store
    const ingredients = useSelector(store => store.ingredients);
    console.log('ingredients', ingredients);



    //Get the ingredients that are wasted for the graph 
    let wastedIngredients = ingredients.filter(ingredient => {
        return ingredient.status === 'waste'
    });


    //Store each type 
    let fruit = [];
    let veggies = [];
    let legumes = [];
    let grains = [];
    let processed = [];
    let nutsSeeds = [];

    for (let ingredient of wastedIngredients) {
        if (ingredient.food_type_id === 1) {
            fruit.push(ingredient)
        } else if (ingredient.food_type_id === 2) {
            veggies.push(ingredient)
        } else if (ingredient.food_type_id === 3) {
            legumes.push(ingredient)
        } else if (ingredient.food_type_id === 4) {
            grains.push(ingredient)
        } else if (ingredient.food_type_id === 5) {
            processed.push(ingredient)
        } else if (ingredient.food_type_id === 6) {
            nutsSeeds.push(ingredient)
        }
    } //end loop 

    console.log('type', fruit, veggies, legumes, grains, processed, nutsSeeds);


    return (
        <div >
            <Doughnut
                data={{
                    labels: ['Fruits', 'Vegetables', 'Legumes', 'Grains', 'Processed', 'Nuts & Seeds'],
                    datasets: [
                        {
                            label: 'types of foods',
                            data: [fruit.length, veggies.length, legumes.length, grains.length, processed.length, nutsSeeds.length ],
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
                            display: false,
                            text: 'Types of Foods Wasted',
                        },
                    },
                }}
            />

        </div>
    )
}
export default WasteGraph;