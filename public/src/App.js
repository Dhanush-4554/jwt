import React from 'react'
import Reg from './pages/Reg';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Lgn from './pages/Lgn';
import Secret from './pages/Secret';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Reg />} />
        <Route exact path="/login" element={<Lgn />} />
        <Route exact path="/" element={<Secret />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

