import React from 'react'
import { icons } from '../../context/Yad2Context'

const LoginNotification = ({ message, valid }) => {

    return (
        <div className="notification">
            <div>
                <span className={"notification-mark " + (valid ? "valid" : "error")}>{valid ? <img alt="v" src={icons.checkMark} /> : "x"}</span>
                <span>{message}</span>
            </div>
            <span>x</span>
        </div>
    )
}

export default LoginNotification