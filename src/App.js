import React, { useState } from 'react';
import './App.css';
import About from './Components/About'
import Navbar from './Components/Navbar'
import Alert from './Components/Alert'
import Textarea from './Components/Textarea'
import Nopage from './Components/Nopage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  const [mode, setMode] = useState("Dark");

  const [alert, setAlert] = useState(null);

  const showAlert = (message) => {
    setAlert(message)
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "Dark") {
      setMode("Light")
      document.body.style.background = "rgb(4,39,69)";
      showAlert("Dark mode has been enabled.")
    } else {
      setMode("Dark")
      document.getElementById("root").style.background = "white";
      showAlert("Light mode has been enabled.")
    }
  }

    return (
      <Router>
      <div className="Container">
      <Navbar title='TextUtils' mode={mode} togglemode={toggleMode} />
      <Alert alert={alert} />
        <div className="container">
        <Routes>
          <Route exact path='/about' element={<About mode={mode} />}></Route>
          <Route exact path='' element={<Textarea showalert={showAlert} mode={mode} />}></Route>
          <Route exact path='/home' element={<Textarea showalert={showAlert} mode={mode} />}></Route>
          <Route path='/*' element={<Nopage mode={mode}/>}></Route>
        </Routes>
        </div>
      </div>
      </Router>
    );
  }

export default App;
