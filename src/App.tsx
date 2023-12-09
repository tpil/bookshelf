import React from 'react';
import logo from './logo.svg';
import Home from './routes/home/home.component';
import { Route, Routes } from 'react-router-dom';
import Header from './routes/header/header.component';
import {AppComponent} from './App.styles';

function App() {
  return (
    <AppComponent>
      <Routes>
        <Route  path="/" element={<Home />}>
          
        </Route>
      </Routes>
    </AppComponent>
  );
}

export default App;
