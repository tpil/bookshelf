import React from 'react';
import logo from './logo.svg';
import Home from './routes/home/home.component';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header.component';
import {AppComponent} from './App.styles';
import BookDetailsRoute from './routes/book-details/book-details-route.component';

function App() {
  return (
    <AppComponent>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/books/:id" element={<BookDetailsRoute />} />
      </Routes>
    </AppComponent>
  );
}

export default App;
