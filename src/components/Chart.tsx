import React from 'react';
import logo from './logo.svg';
import '../css/App.css';

interface IChartProp {
    name : String,
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
