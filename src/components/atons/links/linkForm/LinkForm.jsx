import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function LinkForm({path, text}) {
    return (
        <Link to={path} className='linkForm'>{text}</Link>
    )
}

export default LinkForm
