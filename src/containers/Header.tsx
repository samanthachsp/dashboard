import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLogin } from '../app/reducers/login';
import { logout } from '../app/reducers/login';



export default function Header() {
    const login = useSelector(getLogin)
    // console.log(login)
    const dispatch = useDispatch()
  return (
    <div className="header">
        <span className="welcome">Welcome, {login ?login.userName : ''}</span>
        <span className="logout" onClick={()=> dispatch(logout())}>Logout</span>
    </div>
  );
}
