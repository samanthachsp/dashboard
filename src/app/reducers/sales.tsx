import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';
import client from '../../api/client';
import { getFilter } from './filter';

export const salesSlice = createSlice({
  name: 'sales',
  initialState: {
    sales: [],
    status: 'idle',
    error: null
  },
  reducers: {
    filter: (state, action) => {
      state.sales = []
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSales.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchSales.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        // console.log(action.payload)
        state.sales = action.payload
      })
      .addCase(fetchSales.rejected, (state, action) => {
        state.status = 'failed'
        // state.error = action.error.message
      })
  }
})

// Action creators are generated for each case reducer function
export const { filter } = salesSlice.actions

export const fetchSales = createAsyncThunk('sales/fetchSales', async (filter: any) => {
  // console.log('fetchSales -->')
  try{
    // const filter = useSelector(getFilter)
    // console.log(filter)
    const params = `?year=${filter.year}&month=${filter.month}`
    const response = await client.get('/requisition', params)
    // console.log(response)
    return response.data
  } catch (err) {
    console.log(err)
    return null
  }
})

export const getSales = (state: any) => state.sales

export const getSalesStatus = (state: any) => state.sales?.status

export default salesSlice.reducer