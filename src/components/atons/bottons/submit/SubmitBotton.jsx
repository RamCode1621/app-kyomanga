import React from 'react'
import './style.css'

function SubmitBotton({text}) {
    return (
        <input className="primarySubmit" type="submit" value={text}/>
    )
}

export default SubmitBotton
