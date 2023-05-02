import './App.css';
import React from 'react';
import Main from './Components/Main';
import About from './Components/About';
import './Components/style.css';
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Link to="/main" className='top'>Home</Link>
      <Link to="/about" className='top' >About</Link>
      <Outlet/>
    </>

  );
}

export default App;
