import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import DashboardChart, { ChartType } from './components/charts/Chart';
import Invoices from './components/charts/Invoices';
import Production from './components/charts/Production';
import Sales from './components/charts/Sales';
import Filter from './containers/Filter';
import Header from './containers/Header';
import { useSelector } from 'react-redux';
import { getLogin } from './app/reducers/login';
import Login from './containers/Login';

ChartJS.register(ArcElement, Tooltip, Legend);




const App = () => {
  const login = useSelector(getLogin)
  console.log(login)
  return (
    login.userName !== '' ? 
    <div className="dashboard">
      <div className="filter">
        <Filter/>
      </div>      
      <div className="body">
        <Header/>
        <div className="content">
          <Sales/>
          <Production/>
          <Invoices/>
        </div>
      </div>
    </div>: <Login/>
  );
}

export default App;
