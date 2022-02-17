import React from 'react'
import LinkDashboard from '../../atons/links/linkDashboard/LinkDashboard'
import './style.css'
import GetBackInconLink from '../../atons/links/getBackIconLink/GetBackIconLink'

function SubMenuDashboard({verb,action}) {
    if (verb==='add') {
      return(
        <div className='subMenuDashboard'>
          <GetBackInconLink/>
        <LinkDashboard path={`/dashboard/${verb}/manga`} text={`${action} manga.`}/>
        <LinkDashboard path={`/dashboard/${verb}/capitulo`} text={`${action} capitulo.`}/>
        <LinkDashboard path={`/dashboard/${verb}/pagina`} text={`${action} pagina.`}/>
        <LinkDashboard path={`/dashboard/${verb}/otros`} text={`${action} otros.`}/>
        </div>
      )
    }else if (verb ==='edit') {
      return(
        <div className='subMenuDashboard'>
          <GetBackInconLink/>
        <LinkDashboard path={`/dashboard/${verb}/manga`} text={`${action} manga.`}/>
        <LinkDashboard path={`/dashboard/${verb}/capitulo`} text={`${action} capitulo.`}/>
        <LinkDashboard path={`/dashboard/${verb}/pagina`} text={`${action} pagina.`}/>
        </div>
      )
    }else if (verb==='delete') {
      return(
        <div className='subMenuDashboard'>
          <GetBackInconLink/>
        <LinkDashboard path={`/dashboard/${verb}/manga`} text={`${action} manga.`}/>
        <LinkDashboard path={`/dashboard/${verb}/capitulo`} text={`${action} capitulo.`}/>
        <LinkDashboard path={`/dashboard/${verb}/pagina`} text={`${action} pagina.`}/>
        <LinkDashboard path={`/dashboard/${verb}/otros`} text={`${action} otros.`}/>
        </div>
      )
    }

}

export default SubMenuDashboard