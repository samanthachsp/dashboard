import { useSelector, useDispatch } from 'react-redux'
import '../css/Login.css';
import Button from '@mui/material/Button';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import { useState } from 'react';
import { login, userLogin } from '../app/reducers/login';

interface IPropLogin {
  message: String
}
const Login = (prop : IPropLogin) => {
  const { message } = prop
    const [user , setUser] = useState('')
    const [pwd , setPwd] = useState('')
    const dispatch = useDispatch<any>()
  //   const filter = useSelector((state: any) => state)
  //   console.log(filter)
    return (
      <div className="login-form">
          <Box
          component="form"
          noValidate
          autoComplete="off"
          >
          {message}
          <TextField className="login" id="outlined-basic" label="User Name" variant="outlined" value={user} onChange={(event) => setUser(event.target.value)} />
          <TextField className="login" type="password"  id="outlined-basic" label="Password" variant="outlined" value={pwd} onChange={(event) => setPwd(event.target.value)} />
                  <Button className="login" variant="contained"  onClick={(event) => {event.preventDefault(); dispatch(userLogin({userName: user, password: pwd})); }}>
                  Login
                  </Button>
  
      </Box>
      </div>
    );
  }
  
  export default Login;