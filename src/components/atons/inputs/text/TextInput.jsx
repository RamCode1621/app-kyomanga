import React from 'react'
import './style.css'

function TextInput({text,name}) {
    return (
        <input className="textInputForm" type="text" name={name} placeholder={text}/>
    )
}

export default TextInput
