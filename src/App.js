import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ToDoList from './pages/ToDoList';
import GlobalStyles from '../src/GlobalStyles';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<ToDoList />} />
      </Routes>
    </BrowserRouter>
  );
}
