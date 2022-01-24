import React from 'react'
import TitleForm from '../../atons/titles/titleForm/TitleForm'
import TextInput from '../../atons/inputs/text/TextInput'
import SubmitBotton from '../../atons/bottons/submit/SubmitBotton'
import LinkForm from '../../atons/links/linkForm/LinkForm'

import './style.css'

function RecoveryPasswordForm() {
    return (
        <form className="recoveryPasswordForm">
            <TitleForm text="Formulario de recuperacion de password"/>
            <TextInput text="Escribe tu correo" name="email"/>
            <SubmitBotton text="Recuperar"/>
            <div className="controlLinks">
                <LinkForm path="/login" text="Ya tengo una cuenta."/>
            </div>
        </form>
    )
}

export default RecoveryPasswordForm
