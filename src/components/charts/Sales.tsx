import React, { useEffect } from 'react';
import '../../css/App.css';
import DashboardChart, { ChartType } from './Chart';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../app/reducers/filter';
import { fetchSales, getSales, getSalesStatus } from '../../app/reducers/sales';

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Sales',
      },
    },
  };

const Sales = () => {
  const dispatch = useDispatch<any>()
  const sales = useSelector(getSales)
  const filter = useSelector(getFilter)
  const salesStatus = useSelector(getSalesStatus)
  const error = useSelector((state: any) => state.sales?.error)

  useEffect(() => {
    // console.log('sales,filter, salesStatus -> ' ,filter, salesStatus)
    //succeeded
    // if (salesStatus === 'idle' || salesStatus === 'failed') {
      dispatch(fetchSales(filter))
    // }
  }, [filter, dispatch])
  // console.log('sales -> ' ,sales?.sales)
  const req1 = sales?.sales?.filter((req: any) => req.skNo === '111').reduce((total: number, sale: any) => { return total + sale.amount }, 0)
  const req2 = sales?.sales?.filter((req: any) => req.skNo === '121').reduce((total: number, sale: any) => { return total + sale.amount }, 0)
  const req3 = sales?.sales?.filter((req: any) => req.skNo === '151').reduce((total: number, sale: any) => { return total + sale.amount }, 0)
  const req4= sales?.sales?.filter((req: any) => req.skNo === '221').reduce((total: number, sale: any) => { return total + sale.amount }, 0)
  const req5 = sales?.sales?.filter((req: any) => req.skNo === '112').reduce((total: number, sale: any) => { return total + sale.amount }, 0)
  const req6 = sales?.sales?.filter((req: any) => req.skNo === '222').reduce((total: number, sale: any) => { return total + sale.amount }, 0)
  const data = {
    labels: ['SK 111', 'SK 121', 'SK 151', 'SK 221', 'SK 112', 'SK 222'],
    datasets: [
      {
        label: '# of Votes',
        data: [req1, req2, req3, req4, req5, req6],
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
            data={data ? data : []} 
            options={options}>
        </DashboardChart> 
  );
}

export default Sales;