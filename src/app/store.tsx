import { configureStore } from '@reduxjs/toolkit'
import filerReducer from './reducers/filter';
import loginReducer from './reducers/login';
import salesReducer  from './reducers/sales';
import productionReducer  from './reducers/production';

export default configureStore({
  reducer: {
    filter: filerReducer,
    login: loginReducer,
    sales: salesReducer,
    production: productionReducer
  }
})