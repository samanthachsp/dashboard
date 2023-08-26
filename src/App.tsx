import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './css/App.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import DashboardChart, { ChartType } from './components/charts/Chart';
import ProductionItems from './components/charts/ProductionItems';
import Production from './components/charts/Production';
import Sales from './components/charts/Sales';
import Filter from './containers/Filter';
import Header from './containers/Header';
import { useSelector } from 'react-redux';
import { getLogin } from './app/reducers/login';
import Login from './containers/Login';

ChartJS.register(ArcElement, Tooltip, Legend);




const App = () => {
  const loginStatus = useSelector(getLogin)
  const error = useSelector((state: any) => state.sales?.error)
  const [ status , setStatus]  = useState('')

  useEffect(() => {
    console.log(loginStatus)
    if(loginStatus.status === 'failed') {
      setStatus('You are not authorized')
    }
  }, [loginStatus])

  // console.log(loginStatus)
  return (
    loginStatus.token !== '' ? 
    <div className="dashboard">
      <div className="filter">
        <Filter/>
      </div>      
      <div className="body">
        <Header/>
        <div className="content">
          <Sales/>
          <Production/>
          <ProductionItems/>
        </div>
      </div>
    </div>: <Login message={status}/>
  );
}

export default App;
