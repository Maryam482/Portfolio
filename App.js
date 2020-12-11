import React,{useState} from 'react';
import './App.css';
import Header from './Header';
import Home from './pages/Home';
import Qualification from './pages/Qualification';
import Contact from './pages/Contact'
import { FormHelperText } from '@material-ui/core';

function App() {
  const [open, set] = useState(true)
    const mystyle = {
      color:"white",
      float:"Right",
      justifyContent:"between",
      marginRight:70,
      padding: "10px",
      fontFamily: "Arial"
    };

  return (
    <div className="App">
    <Header/>
    {/* <Home/> */}
    {/* <About open={open} onClick={() => set((state) => !state)}>
      <span>Lorem</span>
      <span>Ipsum</span>
      <span>Dolor</span>
      <span>Sit</span>
    </About> */}
     


    </div>
  );
}

export default App;
