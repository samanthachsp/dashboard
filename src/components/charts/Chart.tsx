import React from 'react';
import logo from './logo.svg';
import '../../css/App.css';

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
    props: any,
    children: React.ReactNode;
}

const DashboardChart = (prop: IChartProp) => {
  return (
    <div className="chart">
        {prop.children}
    </div>
  );
}

export default DashboardChart;
