import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    userName: '',
    password: '',
    token: ''
  },
  reducers: {
    login: (state, action) => {
      state.userName = action.payload.userName
      state.token = action.payload.token
    }
  }
})

// Action creators are generated for each case reducer function
export const { login } = loginSlice.actions

export const getToken = (state: any) => state.login.token

export const getLogin = (state: any) => state.login

export default loginSlice.reducer