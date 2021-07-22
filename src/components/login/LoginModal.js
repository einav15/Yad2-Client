import React, { useContext, useState } from 'react'
import { Yad2Context } from '../../context/Yad2Context'
import { disableScroll } from '../../utilities'
import Backdrop from '../Backdrop'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'


const LoginModal = () => {

    const { isLoginModalOpen, setIsLoginModalOpen, setIsBackdrop, isNewPostBtn, setIsNewPostBtn } = useContext(Yad2Context)

    const [isLoginMode, setIsLoginMode] = useState(true);


    const closeModal = () => {
        setIsNewPostBtn(false)
        setIsLoginModalOpen(false)
        setIsBackdrop(false)
        disableScroll(false)
    }

    return (
        isLoginModalOpen ?
            <>
                <Backdrop close={closeModal} />
                <div className="login-modal">
                    <div className="close-button" onClick={closeModal}>
                        X
                    </div>
                    <div className="welcome">
                        <div className="welcome-content">
                            <img id="logo" src="https://y2-address-master-dev.s3-eu-west-1.amazonaws.com/auth/New_logo_negative.svg" alt="logo" />
                            <h1>ברוכים<br />הבאים לאתר יד2</h1>
                            {isLoginMode ? (
                                <h4>טוב לראות אותך שוב!</h4>
                            ) : (
                                <h4>הצטרפו לקהילה שלנו!</h4>
                            )}
                            <img id="lamp" src="https://y2-address-master-dev.s3-eu-west-1.amazonaws.com/auth/couch_lamp.svg" alt="lamp" />
                        </div>
                    </div>
                    {isLoginMode ? (
                        <LoginForm
                            setIsLoginModalOpen={closeModal} setIsLoginMode={setIsLoginMode}
                            isNewPostBtn={isNewPostBtn} setIsNewPostBtn={setIsNewPostBtn}
                        />
                    ) : (
                        <SignupForm
                            setIsLoginModalOpen={closeModal} setIsLoginMode={setIsLoginMode}
                            isNewPostBtn={isNewPostBtn} setIsNewPostBtn={setIsNewPostBtn}
                        />
                    )}
                </div>
            </> :
            <></>
    )
}

export default LoginModal