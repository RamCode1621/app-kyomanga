import React from 'react'
import './style.css'
function DashboardTemplate({menu,form}) {
  return (
    <div className='dashboardTemplate'>
        {menu}
        {form}
    </div>
  )
}

export default DashboardTemplate