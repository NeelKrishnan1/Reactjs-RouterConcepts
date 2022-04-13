import React from 'react';
import './App.css';
import Signup from './components/Signup';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './components/Home';
import Error from './components/Error';
import Login from "./components/Login";
function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
    <Route exact path="/" element={<Home/>} />
      <Route exact path="/home" element={<Home/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
