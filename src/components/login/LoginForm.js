import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import validator from 'email-validator'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import Axios from 'axios'
import { LoginContext, dbUrl } from '../../context/LoginContext'
import LoginNotification from './LoginNotification'
import LoadingBackdrop from '../LoadingBackdrop'
import Cookies from 'universal-cookie';


const LoginForm = ({ setIsLoginMode, setIsLoginModalOpen, isNewPostBtn, setIsNewPostBtn }) => {

    const cookies = new Cookies();
    const { dispatchUser } = useContext(LoginContext)
    const [isLoginEnabled, setIsLoginEnabled] = useState(false)
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [password, setPassword] = useState('')
    const [badLogin, setBadLogin] = useState(false)
    const history = useHistory()

    useEffect(() => {
        setIsLoginEnabled(validator.validate(email) && password !== '')
    }, [email, password])

    const onFormSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        const email = e.target.email.value
        const password = e.target.password.value
        Axios.post(`${dbUrl}users/login`, { email, password })
            .then((res) => {
                cookies.set('user', res.data.token, { path: '/' })
                dispatchUser({ type: "LOGIN", user: res.data })
                setIsLoginModalOpen(false)
                alert("ההתחברות עברה בהצלחה!")
                if (isNewPostBtn) {
                    history.push('/new-post')
                    setIsNewPostBtn(false)
                }

            })
            .catch((e) => {
                setIsLoading(false)
                setBadLogin(true)
                setTimeout(() => {
                    setBadLogin(false)
                }, 3000)
            })
    }

    return (
        <>
            {isLoading && <LoadingBackdrop title="מתחבר" />}
            {badLogin && <LoginNotification message="מייל או סיסמא אינם תקינים" />}
            <div className="form">
                <div className="form-header">
                    <h3>התחברות</h3>
                    <p>הזן את הפרטים כדי להתחבר</p>
                </div>
                <form onSubmit={onFormSubmit}>
                    <div className="inputs">
                        <EmailInput type="login" setEmail={setEmail} />
                        <label id="password-label">סיסמה</label>
                        <PasswordInput type="login" setPassword={setPassword} />
                        <b>שכחתי סיסמה</b>
                    </div>
                    <div className="login-btn__container">
                        <button type="submit" disabled={!isLoginEnabled}>התחבר</button>
                        <span>לא רשום? <b onClick={() => setIsLoginMode(false)}>להרשמה</b></span>
                    </div>
                </form>

            </div>
        </>
    )
}

export default LoginForm