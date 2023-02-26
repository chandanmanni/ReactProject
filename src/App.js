// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import { useState } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode]= useState('light');
  const toggleMode=()=>{
    if(mode==='dark')
    {
    setMode('light');
    document.body.style.backgroundColor='white';
    }
    else
    {
    setMode('dark')
    document.body.style.backgroundColor='#02375c';
    }
}

  return (
    <>
<Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
<div className='container'>
{/* <About/> */}
<Routes>
          <Route path="/about" element={<About />}>
            
          </Route>
         
          <Route path="/" element={<Textform mode={mode}/>}>
            

          </Route>
        </Routes>
</div>
</Router>
    </>
  );
}

export default App;
