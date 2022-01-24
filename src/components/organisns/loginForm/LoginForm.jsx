import React from 'react'
import TextInput from '../../atons/inputs/text/TextInput'
import TitleForm from '../../atons/titles/titleForm/TitleForm'
import SubmitBotton from '../../atons/bottons/submit/SubmitBotton'
import PasswordInput from '../../atons/inputs/password/PasswordInput'

import './style.css'
import LinkForm from '../../atons/links/linkForm/LinkForm'

function LoginForm() {
    return (
        <form className="loginForm">
            <TitleForm text="Formulario de login"/>
            <TextInput text="Escribe tu usurio" name="user"/>
            <PasswordInput text="Escribe tu password" name="password"/>
            <SubmitBotton text="Ingresar"/>
            <div className="controlLinks">
                <LinkForm path="/reguister" text="Reguistrate aqui."/>
                <span>-</span>
                <LinkForm path="/recovery-count" text="Olvidaste tu password?"/>
            </div>
        </form>
    )
}

export default LoginForm
