import React, { useEffect, useState } from 'react'
import validator from 'email-validator'
import { icons } from '../../utilities'

// import { Yad2Context } from '../../context/Yad2Context'

const EmailInput = ({ setEmail, type }) => {

    const [emailIn, setEmailIn] = useState('')
    const [emailError, setEmailError] = useState('')
    const [emailFirstOpen, setEmailFirstOpen] = useState(true)


    const onChangeEmail = (e) => {
        setEmailFirstOpen(false)
        const text = e.target.value
        setEmailIn(text)
        let error = ''
        if (!validator.validate(text)) {
            if (text === '')
                error = "שדה חובה"
            else if (type === 'signup')
                error = "אימייל לא תקין"
            else
                error = "מבנה האימייל שהוזן אינו תקין"
        }
        setEmailError(error)

    }

    useEffect(() => {
        if (validator.validate(emailIn) !== '' && !emailError)
            setEmail(emailIn)
    }, [emailIn, emailError, setEmail])

    return (
        <>
            <label>
                {type === 'signup' && !emailFirstOpen && emailError === '' && <img alt="v" src={icons.checkMark} />}
                כתובת מייל
            </label>
            <input type="email" name="email" className={emailFirstOpen ? "" : emailError ? "error-border" : "valid-border"} value={emailIn} onChange={onChangeEmail} placeholder="your@mail.com" />
            {emailError && <span className="error-text">{emailError}</span>}
        </>

    )
}

export default EmailInput