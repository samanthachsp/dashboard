import React from 'react';
import logo from './logo.svg';
import '../../css/Chart.css';
import { Pie, Bar } from 'react-chartjs-2';

export enum ChartType {
  Pie,
  Bar
}

export enum ChartData {
  Pie,
  Bar
}

interface IChartProp {
    name : String,
    type: ChartType,
    data: any | undefined,
    options: any,
    children: React.ReactNode;
}

const DashboardChart = (prop: IChartProp) => {
  const {name, type, data, options} = prop
  return (
    <div className="chart">
        {type == ChartType.Pie &&<Pie options={options} data={data} />}
        {type == ChartType.Bar &&<Bar options={options} data={data} height="350px" />}
    </div>
  );
}

export default DashboardChart;
