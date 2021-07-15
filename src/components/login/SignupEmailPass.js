import React, { useContext, useEffect, useState } from 'react'
import Axios from 'axios'
import PasswordInput from './PasswordInput'
import EmailInput from './EmailInput'
import { LoginContext, dbUrl } from '../../context/LoginContext'
import LoginNotification from './LoginNotification'

const SignupEmailPass = ({ setIsLoginMode, setSignupDetailsMode }) => {

    const { dispatchSignupForm } = useContext(LoginContext)

    const [isSignupEnabled, setIsSignupEnabled] = useState(false)
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [emailExisting, setEmailExisting] = useState(false)

    useEffect(() => {
        setIsSignupEnabled(email && password1 && password2)
    }, [setIsSignupEnabled, email, password1, password2])

    const onSubmitForm = (e) => {
        e.preventDefault()
        Axios.post(`${dbUrl}users/check-email`, { email })
            .then((res) => {
                if (res.data === 'K') {
                    dispatchSignupForm({ type: "CHANGE_EMAIL_PASSWORD", email, password: password1 })
                    setSignupDetailsMode(true)
                } else {
                    setEmailExisting(true)
                    setTimeout(() => {
                        setEmailExisting(false)
                    }, 3000)
                }
            })
            .catch((e) => console.log(e))
    }
    return (
        <>
            {emailExisting && <LoginNotification message="מייל בשימוש!" />}
            <form onSubmit={onSubmitForm}>
                <div className="inputs">
                    <EmailInput type="signup" email={email} setEmail={setEmail} />
                    <label id="password-label">
                        {password1 && <img alt="v" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAbElEQVRIie2SQQ6AIAwE5xMSfSI8Vw4+Rw9q0oBIFGo8dK7AFJYFw3iIA7ymPAIrEHrLB2A+5Aswmvzfcs/eiBKyLbGyNyNUDjbJIX/6dLP2OvOrId0/NI2iKZYS8tYqVZRDVOQnjo6xGN+zAavMMBC6bhegAAAAAElFTkSuQmCC" />}
            סיסמה
            </label>
                    <PasswordInput setPassword={setPassword1} type="signup" />
                    {!password2 ? <div className="password-space" /> :
                        <label style={{ margin: 0 }}><img alt="v" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAbElEQVRIie2SQQ6AIAwE5xMSfSI8Vw4+Rw9q0oBIFGo8dK7AFJYFw3iIA7ymPAIrEHrLB2A+5Aswmvzfcs/eiBKyLbGyNyNUDjbJIX/6dLP2OvOrId0/NI2iKZYS8tYqVZRDVOQnjo6xGN+zAavMMBC6bhegAAAAAElFTkSuQmCC" /></label>}
                    <PasswordInput setPassword={setPassword2} type="validate" repeatPassword={password1} />
                </div>
                <div className="login-btn__container">
                    <button type="submit" disabled={!isSignupEnabled}>המשך</button>
                    <span>כבר רשום? <b onClick={() => setIsLoginMode(true)}>להתחברות</b></span>
                </div>
            </form>
        </>
    )
}

export default SignupEmailPass