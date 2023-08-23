import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../../css/App.css';
import DashboardChart, { ChartType } from './Chart';



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Production',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const data = {
  labels,
  datasets: [
    {
      label: '2022',
      data: [10, 120, 1221, 59, 80],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: '2023',
      data: [101, 12, 1311, 129, 10],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
  
const Production = () => {
  return (
    <DashboardChart 
        name="Chart A" 
        type={ChartType.Pie}
        data={{}} 
        props={{}}>
        <Bar options={options} data={data} height="400px" />
    </DashboardChart> 
);
}

export default Production;