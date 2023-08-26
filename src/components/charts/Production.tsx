import React, { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduction, getProduction, getProductionStatus } from '../../app/reducers/production';
import { getFilter } from '../../app/reducers/filter';


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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

const getMonthlyStat = (data: any) => {
  const monthlyStat = Array.from({length: 12}, (_, i) => i + 1).map(item => {
    
    const monthlyProduction = data.filter((stat: any) => stat.month === item).reduce((total: number, sale: any) => { return total + sale.amount }, 0)
    // console.log(item, monthlyProduction)
    return monthlyProduction
    }
  )
  return monthlyStat
}
  
const Production = () => {
  const dispatch = useDispatch<any>()
  const production = useSelector(getProduction)
  const filter = useSelector(getFilter)
  const productionStatus = useSelector(getProductionStatus)
  const error = useSelector((state: any) => state.production?.error)

  useEffect(() => {
    // console.log('production,filter, productionStatus -> ' ,filter, productionStatus)
    //succeeded
    // if (productionStatus === 'idle' || productionStatus === 'failed') {
      dispatch(fetchProduction(filter))
    // }
  }, [filter, dispatch])
  // console.log('production -> ' ,production?.production)
  // production?.production?.forEach((item: any) =>
  //   console.log(new Date(item.dateCreated.split('T')[0]).getFullYear(), new Date(item.dateCreated.split('T')[0]).getMonth()+1, item.dateCreated)
  //   )
  const stats =  production?.production?.map((item: any) => { 
    const dateSplit = item.dateCreated.split('T')[0].split('-')
    const date = dateSplit[0]+ '/' + dateSplit[1]+ '/' + dateSplit[2]
    return {
    year: new Date(date).getFullYear(),
    month: new Date(date).getMonth()+1,
    amount: item.amount
  } })
  
  const stats2023 = stats.filter((item: any) => item.year=2023).sort((a:any, b:any) => a.month - b.month)
  const stats2022 = stats.filter((item: any) => item.year=2022).sort((a:any, b:any) => a.month - b.month)
  // console.log(stats2023, stats2022)
  const stats2022Sum = getMonthlyStat(stats2022)
  const stats2023Sum = getMonthlyStat(stats2023)

  const data = {
    labels,
    datasets: [
      {
        label: '2022',
        data: stats2022Sum,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: '2023',
        data: stats2023Sum,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };  
  return (
    <DashboardChart 
        name="Chart A" 
        type={ChartType.Bar}
        data={data} 
        options={options}>
        
    </DashboardChart> 
);
}

export default Production;