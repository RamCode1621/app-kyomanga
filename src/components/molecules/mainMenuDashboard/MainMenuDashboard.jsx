import React from 'react'
import './style.css'
import LinkDashboard from '../../atons/links/linkDashboard/LinkDashboard'

function MainMenuDashboard() {
  return (
    <div className='mainMenuDashboard'>
        <LinkDashboard path='/dashboard/add' text='Agregar.'/>
        <LinkDashboard path='/dashboard/edit' text='Editar.'/>
        <LinkDashboard path='/dashboard/delete' text='Eliminar.'/>
    </div>
  )
}

export default MainMenuDashboard