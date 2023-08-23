import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import DashboardChart, { ChartType } from './components/charts/Chart';
import Invoices from './components/charts/Invoices';
import Production from './components/charts/Production';
import Sales from './components/charts/Sales';

ChartJS.register(ArcElement, Tooltip, Legend);




const App = () => {
  return (
    <div className="dashboard">
      <div className="header"></div>
      <div className="body">
        <div className="filter"></div>
        <div className="content">
          <Sales/>
          <Production/>
          <Invoices/>
        </div>
      </div>
    </div>
  );
}

export default App;
