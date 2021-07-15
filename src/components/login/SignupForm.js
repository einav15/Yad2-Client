import React, { useState } from 'react'
import SignupDetails from './SignupDetails'
import SignupEmailPass from './SignupEmailPass'
// import { Yad2Context } from '../../context/Yad2Context'

const SignupForm = ({ setIsLoginMode, setIsLoginModalOpen, isNewPostBtn, setIsNewPostBtn }) => {

    const [isSignupDetailsMode, setSignupDetailsMode] = useState(false)

    return (
        <div className="form">
            <div className="form-header">
                <h3>הרשמה</h3>
                <p>הזן את הפרטים כדי להירשם</p>
            </div>
            {isSignupDetailsMode ? <SignupDetails setIsLoginModalOpen={setIsLoginModalOpen} isNewPostBtn={isNewPostBtn} setIsNewPostBtn={setIsNewPostBtn} />
                : <SignupEmailPass setIsLoginMode={setIsLoginMode} setSignupDetailsMode={setSignupDetailsMode} />}
        </div>

    )
}

export default SignupForm