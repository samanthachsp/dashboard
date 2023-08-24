import { createSlice } from '@reduxjs/toolkit'

export const dasboardFilterSlice = createSlice({
  name: 'dasboardFilter',
  initialState: {
    year: 0,
    month: 0
  },
  reducers: {
    filterByYearMonth: (state, action) => {
      state.year = action.payload.year
      state.month = action.payload.month
    }
  }
})

// Action creators are generated for each case reducer function
export const { filterByYearMonth } = dasboardFilterSlice.actions

export const getFilter = (state: any) => state.filter

export default dasboardFilterSlice.reducer