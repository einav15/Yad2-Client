import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../../context/LoginContext'
import { icons } from '../../utilities'

const PhoneInput = () => {

    const { dispatchSignupForm } = useContext(LoginContext)

    const [number, setNumber] = useState('')
    const [numberFirstOpen, setNumberFirstOpen] = useState(true)
    const [error, setError] = useState('')
    const [areaCode, setAreaCode] = useState('050')

    const onChangeSetNumber = (e) => {
        const num = e.target.value
        setNumberFirstOpen(false)
        if (num.length <= 7) {
            setNumber(num)
            if (num.length === 0)
                setError('שדה חובה')
            else if (!/[0-9]/.test(num))
                setError('מספרים בלבד')
            else if (num.length < 7)
                setError('מספר פלאפון לא תקין')
            else {
                setError('')
            }
        }
    }

    useEffect(() => {
        if (!error)
            dispatchSignupForm({ type: "CHANGE_PHONE", phoneNumber: areaCode + number })
    }, [error, number, dispatchSignupForm, areaCode])

    return (
        <>
            <label>
                {!numberFirstOpen && error === '' && <img alt="v" src={icons.checkMark} />}
                מספר טלפון</label>
            <div style={{ display: "flex", alignItems: "center" }}>
                <input
                    id="phone-num-input"
                    name="phone"
                    value={number}
                    onChange={onChangeSetNumber}
                    className={numberFirstOpen ? "" : error ? "error-border" : "valid-border"}
                />
                <select value={areaCode} onChange={(e) => setAreaCode(e.target.value)} className="valid-border">
                    <option value="050">050</option>
                    <option value="051">051</option>
                    <option value="052">052</option>
                    <option value="053">053</option>
                    <option value="054">054</option>
                    <option value="055">055</option>
                    <option value="058">058</option>
                </select>
            </div>
            {error && <span className="error-text">{error}</span>}

        </>
    )
}

export default PhoneInput

