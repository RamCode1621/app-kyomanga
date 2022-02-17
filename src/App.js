import {BrowserRouter,Routes, Route} from 'react-router-dom'

import './App.css';
import React from 'react';
import Login from './pages/login/Login';
import Reguister from './pages/reguister/Reguister';
import RecoveryPassword from './pages/recoveryPassword/RecoveryPassword';

import DashboardTemplate from './components/templates/dashboardTemplate/DashboardTemplate'
import MainMenuDashboard from './components/molecules/mainMenuDashboard/MainMenuDashboard'
import SubMenuDashboard from './components/molecules/subMenuDashboard/SubMenuDashboard'

function App() {
  return (
    <BrowserRouter>
    <Routes><Route path="/login" element={<Login/>} exact/></Routes>
    <Routes><Route path="/reguister" element={<Reguister/>} exact/></Routes>
    <Routes><Route path="/recovery-count" element={<RecoveryPassword/>} exact/></Routes>
    <Routes><Route path="/dashboard" element={<DashboardTemplate menu={<MainMenuDashboard/>}/>} exact/></Routes>
     
    <Routes><Route path="/dashboard/add" element={<DashboardTemplate menu={<SubMenuDashboard verb='add' action="Agregar" />}/>} exact/></Routes>

    <Routes><Route path="/dashboard/edit" element={<DashboardTemplate menu={<SubMenuDashboard verb='edit' action="Editar" />}/>} exact/></Routes>

    <Routes><Route path="/dashboard/delete" element={<DashboardTemplate menu={<SubMenuDashboard verb='delete' action="Eliminar" />}/>} exact/></Routes>

{/* forms dashboard */}
    <Routes><Route path="/dashboard/add/manga" element={<DashboardTemplate menu={<SubMenuDashboard verb='add' action="Agregar" />}/>} exact/></Routes>
    <Routes><Route path="/dashboard/add/capitulo" element={<DashboardTemplate menu={<SubMenuDashboard verb='add' action="Agregar" />}/>} exact/></Routes>
    <Routes><Route path="/dashboard/add/pagina" element={<DashboardTemplate menu={<SubMenuDashboard verb='add' action="Agregar" />}/>} exact/></Routes>
    <Routes><Route path="/dashboard/add/otros" element={<DashboardTemplate menu={<SubMenuDashboard verb='add' action="Agregar" />}/>} exact/></Routes>

</BrowserRouter>
  )
}

export default App;