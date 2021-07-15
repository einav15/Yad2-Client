import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Axios from 'axios'
import { dbUrl, LoginContext } from '../../context/LoginContext'
import DatePick from '../DatePick'
import NameInput from './NameInput'
import PhoneInput from './PhoneInput'
import LoadingBackdrop from '../LoadingBackdrop'

const SignupDetails = ({ setIsLoginModalOpen, isNewPostBtn, setIsNewPostBtn }) => {

    const { signupForm, dispatchSignupForm, dispatchUser } = useContext(LoginContext)
    const history = useHistory()
    const [birthDate, setBirthDate] = useState(null)
    const [sendBtnEnabled, setSendBtnEnabled] = useState(false)
    const [termsBoxFirstOpen, setTermsBoxFirstOpen] = useState(true)
    const [termsChecked, setTermsChecked] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitSignup = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        await Axios.post(`${dbUrl}users`, signupForm)
            .then((res) => {
                dispatchUser({ type: "LOGIN", user: res.data })
                setIsLoginModalOpen(false)
                setIsLoading(false)
                alert("ההרשמה עברה בהצלחה!")
                if (isNewPostBtn) {
                    history.push('/new-post')
                    setIsNewPostBtn(false)
                }
            })
            .catch(e => {
                console.log(e)
                setIsLoading(false)
            })
    }

    const onChangeTerms = (e) => {
        setTermsBoxFirstOpen(false)
        setTermsChecked(e.target.checked)
    }

    useEffect(() => {
        dispatchSignupForm({ type: "CHANGE_BIRTH_DATE", birthDate })
    }, [birthDate, dispatchSignupForm])

    useEffect(() => {
        setSendBtnEnabled(signupForm.firstName && signupForm.lastName && signupForm.phoneNumber && signupForm.birthDate && termsChecked)
    }, [signupForm, termsChecked, setSendBtnEnabled])

    return (
        <>
            {isLoading && <LoadingBackdrop title="נרשם" />}
            <form onSubmit={onSubmitSignup} style={{ minHeight: "399px" }}>
                <div className="inputs">
                    <NameInput type="first" />
                    <NameInput type="last" />
                    <PhoneInput />
                    <label>תאריך לידה</label>
                    <DatePick
                        type="birth-date"
                        setDate={setBirthDate}
                    />
                    <div className="signup-checkbox__container">
                        <div>
                            <input onChange={onChangeTerms} className="signup-checkbox" name="terms" type="checkbox" />
                            <p>קראתי ומאשר את <span>תקנון</span> האתר</p>
                        </div>
                        {!termsBoxFirstOpen && !termsChecked && <span className="error-text">שדה חובה</span>}
                        <div>
                            <input className="signup-checkbox" name="newsletter" type="checkbox" />
                            <p>מאשר קבלת דיוור פרסומי כללי מיד2</p>
                        </div>
                    </div>
                </div>
                <button disabled={!sendBtnEnabled} type="submit">שלח</button>
            </form>
        </>
    )
}

export default SignupDetails