import React from 'react';
import {getUnixfoDate}from '../../helps/date'


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const ChartCf = props =>{

  // if(props.spiner) return spiner('loadingd',props.width)
    // import faker from 'faker';
    
    
     const options = {
      responsive: true,
      
      plugins: {
        legend: {
          position: 'top' ,
        },
        title: {
          display: false,
          text: 'Chart.js Line Chart',
        },
      },
    };
  
    const labels = props.prices.map(i=>getUnixfoDate(i[0]) )

     const data = {
      labels,
      datasets: [
        
        {
          label: 'Price',
          data: props.prices.map(i=>i[1]) ,
          borderColor: 'rgb(53, 162, 235)',
          
        },
      ],
    };
    
    // export function App() {
      return <Line  options={options} data={data} />;
    // }
    
}

export default ChartCf