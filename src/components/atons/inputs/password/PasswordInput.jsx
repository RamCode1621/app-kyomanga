import React from 'react'
import './style.css'

function PasswordInput({text,name}) {
    return (
        <input className="passwordInputForm" type="password" name={name} placeholder={text}/>
    )
}

export default PasswordInput
