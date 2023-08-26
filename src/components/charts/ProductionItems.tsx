import React, { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import '../../css/App.css';
import DashboardChart, { ChartType } from './Chart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduction, getProduction, getProductionStatus } from '../../app/reducers/production';
import { getFilter } from '../../app/reducers/filter';

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Production By Item',
    },
  },
};

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
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

const ProductionItems = () => {
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
    console.log(filter)
  }, [filter])
  // console.log('production -> ' ,production?.production)
  const req1 = production?.production?.filter((req: any) => req.item === 'Table').reduce((total: number, sale: any) => { return total + sale.amount }, 0)
  const req2 = production?.production?.filter((req: any) => req.item === 'Chair').reduce((total: number, sale: any) => { return total + sale.amount }, 0)
  const req3 = production?.production?.filter((req: any) => req.item === 'Cupboard').reduce((total: number, sale: any) => { return total + sale.amount }, 0)
  const req4= production?.production?.filter((req: any) => req.item === 'Mirror').reduce((total: number, sale: any) => { return total + sale.amount }, 0)
  const req5 = production?.production?.filter((req: any) => req.item === 'Bed').reduce((total: number, sale: any) => { return total + sale.amount }, 0)
  // console.log(req1, req2, req3, req4, req5)
  const data = {
    labels: ['Table', 'Chair', 'Cupboard', 'Mirror', 'Bed'],
    datasets: [
      {
        label: '# of Votes',
        data: [req1, req2, req3, req4, req5],
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
  return (
    <DashboardChart 
        name="Chart A" 
        type={ChartType.Pie}
        data={data} 
        options={options}>
    </DashboardChart> 
);
}

export default ProductionItems;