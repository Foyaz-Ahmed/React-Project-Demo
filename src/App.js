import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Myrouter from "./components/Myrouter";
import Navbar from "./components/Navbar";
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar/>
        <Myrouter/>
      </BrowserRouter>

    </div>
  );
}

export default App;
