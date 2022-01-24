import React from 'react'
import './style.css'
import TitleForm from '../../atons/titles/titleForm/TitleForm'
import TextInput from '../../atons/inputs/text/TextInput'
import PasswordInput from '../../atons/inputs/password/PasswordInput'
import SubmitBotton from '../../atons/bottons/submit/SubmitBotton'
import LinkForm from '../../atons/links/linkForm/LinkForm'

import './style.css'

function ReguisterForm() {
    return (
        <form className="loginForm">
            <TitleForm text="Formulario de reguistro"/>
            <TextInput text="Escribe tu nombre" name="name"/>
            <TextInput text="Escribe tu apellido" name="lastName"/>
            <TextInput text="Escribe tu correo" name="email"/>
            <PasswordInput text="Escribe tu password" name="password"/>
            <SubmitBotton text="Reguistrar"/>
            <div className="controlLinks">
                <LinkForm path="/login" text="Ya tiene una cuenta?"/>
            </div>
        </form>
    )
}


export default ReguisterForm
