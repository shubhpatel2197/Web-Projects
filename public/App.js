import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

  
function App() {

  const [alert, setalert] = useState(null);

  const showalert =(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },3000);
  }
 



  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showalert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#5ABD7E';
      showalert("Dark mode has been disabled","dark");

    }
  }
  return (
    <>
    <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container mt-3">
          <Routes>
            <Route exact path="/about" element={<About/>}> </Route>
            <Route exact path="/" element={<TextForm showalert={showalert} heading="Enter your text to Analyse below" mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>
   
    </>
  );
}

export default App;