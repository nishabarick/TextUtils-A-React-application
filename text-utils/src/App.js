import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import React, { useState } from 'react'
import Alert from './components/Alert';
 import About from './components/About';
 
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

 function App() {
      const [mode, setMode] = useState('light');
      const [alert, setAlert] = useState(null);
      const showAlert = (message, type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() =>{
          setAlert(null);
        }, 1500);
      }
     let toggleMode = ()=> {
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enabled","success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled","success");
      }
     }
return (
  <>
<Router>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About TextUtils"/> 
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/" element={ <TextForms showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/> 
         </Routes>
        </div>
        </Router>
     
 {/* <About/>  */}

</>
);
 }

export default App;
