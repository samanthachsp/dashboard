import { configureStore } from '@reduxjs/toolkit'
import filerReducer from './reducers/filter';
import loginReducer from './reducers/login';

export default configureStore({
  reducer: {
    filter: filerReducer,
    login: loginReducer
  }
})