import * as React from 'react';
import { useSelector } from 'react-redux';
import { getLogin } from '../app/reducers/login';




export default function Header() {
    const login = useSelector(getLogin)
    console.log(login)

  return (
    <div className="header">
        <span className="welcome">Welcome, {login ?login.userName : ''}</span>
        <span className="logout">Logout</span>
    </div>
  );
}
