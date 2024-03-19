import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './GlobalStyle';
import MainPage from './pages/mainpage/MainPage';

function App() {
  return (
    <div className="App">
      <GlobalStyle /> 
      <MainPage />

    </div>
  );
}

export default App;
