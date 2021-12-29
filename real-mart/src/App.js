import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import './Components/Home';
import Home from './Components/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Checkout from './Components/Checkout';
function App() {
  return (
    <BrowserRouter>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/checkout" component={Checkout}></Route>
    </BrowserRouter>
  );
}

export default App;
