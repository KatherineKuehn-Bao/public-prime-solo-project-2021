// import { Bar } from 'react-chartjs-2';
// import { useSelector } from 'react-redux';


// const ingredients = useSelector((store) => store.ingredients);


// const data = {
//   labels: ['Fruits', 'Veggies', 'Grains', 'Legumes', 'Proc', 'Other'],
//   datasets: [
//     {
//       label: 'types of foods',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// const options = {
//   indexAxis: 'y',
//   // Elements options apply to all of the options unless overridden in a dataset
//   // In this case, we are setting the border of each horizontal bar to be 2px wide
//   elements: {
//     bar: {
//       borderWidth: 2,
//     },
//   },
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'bottom',
//     },
//     title: {
//       display: true,
//       text: 'Types of Foods',
//     },
//   },
// };

// const HorizontalBarChart = () => (
//   <>
//     <div className='header'>
//       <h1 className='title'>Horizontal Bar Chart</h1>
   
//     </div>
//     <Bar data={data} options={options} />
//   </>
// );

// export default HorizontalBarChart;