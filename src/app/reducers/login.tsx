import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import client from '../../api/client'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    userName: '',
    password: '',
    token: '',
    status: 'idle',
    error: null
  },
  reducers: {
    login: (state, action) => {
      state.userName = action.payload.userName
      state.token = action.payload.token
    },
    logout: (state) => {
      state.userName = ''
      state.token = ''
      // console.log(state)
      localStorage.setItem('token', '')
    }
  },
  extraReducers(builder) {
    builder
      .addCase(userLogin.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        // console.log(action.payload)
        state.token = action.payload.token
        state.userName= action.payload.username
        localStorage.setItem('token', action.payload.token)
        // state.sales = action.payload
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = 'failed'
        // state.error = action.error.message
      })
  }
})

// Action creators are generated for each case reducer function
export const { login, logout } = loginSlice.actions

export const getToken = (state: any) => state.login.token

export const getLogin = (state: any) => state.login

export const userLogin = createAsyncThunk('login/userLogin', async (state: any) => {
  // console.log('userLogin --> ', state)
  const payload = {
    username : state.userName,
    password : state.password
  }
  const response = await client.post('/api/auth/signin', payload)
  // console.log(response?.response?.status)
  if(response?.response?.status === 401) {
    throw new Error('Unauthorized');
  }
  // const token = (response) ? JSON.stringify(response.data.token) : ''
  // state.token = token
  // state.userName
  // console.log(token, state)
  return response.data
})

export default loginSlice.reducer