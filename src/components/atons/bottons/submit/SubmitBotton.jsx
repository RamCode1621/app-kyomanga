import React from 'react'
import './style.css'

function SubmitBotton({text}) {
    return (
        <button className="primarySubmit" type="submit" value={text}>Login</button>
    )
}

export default SubmitBotton
