import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';
import client from '../../api/client';
import { getFilter } from './filter';

export const productionSlice = createSlice({
  name: 'production',
  initialState: {
    production: [],
    status: 'idle',
    error: null
  },
  reducers: {
    filter: (state, action) => {
      state.production = []
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProduction.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchProduction.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        // console.log(action.payload)
        state.production = action.payload
      })
      .addCase(fetchProduction.rejected, (state, action) => {
        state.status = 'failed'
        // state.error = action.error.message
      })
  }
})

// Action creators are generated for each case reducer function
export const { filter } = productionSlice.actions

export const fetchProduction = createAsyncThunk('production/fetchProduction', async (filter: any) => {
  // console.log('fetchProduction -->')
  try{
    // const filter = useSelector(getFilter)
    // console.log(filter)
    const params = `?year=${filter.year}&month=${filter.month}`
    const response = await client.get('/production', params)
    console.log(response)
    return response.data
  } catch (err) {
    console.log(err)
    return null
  }
})

export const getProduction = (state: any) => state.production

export const getProductionStatus = (state: any) => state.production?.status

export default productionSlice.reducer