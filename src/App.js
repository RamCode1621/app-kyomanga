import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'

import './App.css';
import React from 'react';
import Login from './pages/login/Login';
import Reguister from './pages/reguister/Reguister';
import RecoveryPassword from './pages/recoveryPassword/RecoveryPassword';

function App() {
  return (
    <BrowserRouter>
    <Routes><Route path="/login" element={<Login/>} exact/></Routes>
    <Routes><Route path="/reguister" element={<Reguister/>} exact/></Routes>
    <Routes><Route path="/recovery-count" element={<RecoveryPassword/>} exact/></Routes>
</BrowserRouter>
  )
}

export default App;
